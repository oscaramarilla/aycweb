import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { z } from "zod";
import { buildAgenteSystemPrompt } from "@/lib/config/agenteCalificador";
import { scoreLead, TIER_LABELS, type LeadTier } from "@/lib/domain/leadScoring";
import type { LeadParaguay } from "@/lib/domain/leadParaguay";
import { AYCWEB_CONTACT } from "@/lib/config/contact";

export const runtime = "nodejs";

// ── Validación del body ──────────────────────────────────────────────────────
const bodySchema = z.object({
  lang: z.string().max(8).default("es"),
  messages: z
    .array(
      z.object({
        role: z.enum(["user", "assistant"]),
        content: z.string().min(1).max(2000),
      })
    )
    .min(1)
    .max(24),
});

// ── Herramienta: calificar_lead ──────────────────────────────────────────────
const calificarLeadTool: Anthropic.Tool = {
  name: "calificar_lead",
  description:
    "Registra y califica al visitante como lead. Llamala UNA sola vez, apenas tengas: nombre, país, sector, objetivo, rango de capital y horizonte. Incluí email y/o whatsapp si los dio. Nunca inventes valores: usá solo lo que el visitante dijo.",
  input_schema: {
    type: "object",
    properties: {
      nombre: { type: "string", description: "Nombre del visitante" },
      email: { type: "string", description: "Email si lo dio; si no, omitir" },
      whatsapp: { type: "string", description: "WhatsApp/teléfono si lo dio; si no, omitir" },
      pais: { type: "string", description: "País del visitante" },
      sector: {
        type: "string",
        enum: ["energia", "agroindustria", "tecnologia", "logistica", "real_estate", "otro"],
      },
      objetivo: {
        type: "string",
        enum: ["invertir", "instalar_operacion", "socio_local", "exportar_importar", "explorar"],
      },
      capital: {
        type: "string",
        enum: ["menos_50k", "50k_250k", "250k_1m", "mas_1m", "prefiere_no_decir"],
      },
      horizonte: { type: "string", enum: ["0_6m", "6_18m", "mas_18m"] },
      resumen: {
        type: "string",
        description: "Resumen de 1-2 oraciones del proyecto del visitante, en español",
      },
    },
    required: ["nombre", "pais", "sector", "objetivo", "capital", "horizonte", "resumen"],
  },
};

type CalificarInput = {
  nombre: string;
  email?: string;
  whatsapp?: string;
  pais: string;
  sector: LeadParaguay["sector"];
  objetivo: LeadParaguay["objetivo"];
  capital: LeadParaguay["capital"];
  horizonte: LeadParaguay["horizonte"];
  resumen: string;
};

async function ejecutarCalificarLead(
  input: CalificarInput,
  lang: string
): Promise<{ score: number; tier: LeadTier; waUrl: string | null; instruccion: string }> {
  const lead: LeadParaguay = {
    nombre: input.nombre,
    empresa: "",
    email: input.email ?? "",
    whatsapp: input.whatsapp ?? "",
    pais: input.pais,
    sector: input.sector,
    objetivo: input.objetivo,
    capital: input.capital,
    horizonte: input.horizonte,
    mensaje: input.resumen,
  };

  const { score, tier } = scoreLead(lead);

  // Persistencia no bloqueante en Supabase
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey =
    process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.SUPABASE_SERVICE_KEY;
  if (supabaseUrl && supabaseKey) {
    try {
      await fetch(`${supabaseUrl}/rest/v1/leads_paraguay`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: supabaseKey,
          Authorization: `Bearer ${supabaseKey}`,
          Prefer: "return=minimal",
        },
        body: JSON.stringify({
          ...lead,
          source: "agente-calificador",
          locale: lang,
          score,
          tier,
          created_at: new Date().toISOString(),
        }),
      });
    } catch {
      // El flujo del visitante no se rompe si Supabase falla.
    }
  }

  // Tier A/B: link directo a Oscar con contexto prellenado (en español, para Oscar).
  if (tier === "A" || tier === "B") {
    const resumenWa = [
      `Hola Oscar, vengo del asistente de Invertir en Paraguay.`,
      `Soy ${lead.nombre} (${lead.pais}).`,
      `Proyecto: ${input.resumen}`,
      `[Lead ${TIER_LABELS[tier]} · Score ${score}/100 · Idioma ${lang.toUpperCase()}]`,
    ].join(" ");
    const waUrl = `https://wa.me/${AYCWEB_CONTACT.whatsappNumber}?text=${encodeURIComponent(resumenWa)}`;
    return {
      score,
      tier,
      waUrl,
      instruccion:
        "Lead calificado como serio. Entregá el link de WhatsApp al visitante (ya se muestra como botón debajo de tu mensaje, no pegues la URL en el texto), decile que Oscar responde en menos de 24h hábiles y cerrá con una invitación cálida a escribirle ahora.",
    };
  }

  return {
    score,
    tier,
    waUrl: null,
    instruccion:
      "Lead en etapa temprana. NO entregues el link de WhatsApp ni presiones. Agradecé, ofrecé el dossier gratuito de su sector por email y quedate disponible para más preguntas.",
  };
}

// ── Handler ──────────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "not_configured" }, { status: 503 });
  }

  let parsed;
  try {
    parsed = bodySchema.parse(await req.json());
  } catch {
    return NextResponse.json({ error: "invalid_request" }, { status: 400 });
  }

  const { lang, messages } = parsed;
  const client = new Anthropic({ apiKey });

  const history: Anthropic.MessageParam[] = messages.map((m) => ({
    role: m.role,
    content: m.content,
  }));

  let waUrl: string | null = null;

  try {
    // Loop manual de tool use: el agente puede llamar calificar_lead una vez.
    for (let iteracion = 0; iteracion < 3; iteracion++) {
      const response = await client.messages.create({
        model: "claude-opus-4-8",
        max_tokens: 1024,
        system: [
          {
            type: "text",
            text: buildAgenteSystemPrompt(lang),
            cache_control: { type: "ephemeral" },
          },
        ],
        tools: [calificarLeadTool],
        messages: history,
      });

      const toolUses = response.content.filter(
        (b): b is Anthropic.ToolUseBlock => b.type === "tool_use"
      );

      if (response.stop_reason !== "tool_use" || toolUses.length === 0) {
        const texto = response.content
          .filter((b): b is Anthropic.TextBlock => b.type === "text")
          .map((b) => b.text)
          .join("\n")
          .trim();
        return NextResponse.json({ reply: texto, waUrl });
      }

      history.push({ role: "assistant", content: response.content });

      const results: Anthropic.ToolResultBlockParam[] = [];
      for (const tu of toolUses) {
        if (tu.name === "calificar_lead") {
          const resultado = await ejecutarCalificarLead(tu.input as CalificarInput, lang);
          waUrl = resultado.waUrl ?? waUrl;
          results.push({
            type: "tool_result",
            tool_use_id: tu.id,
            content: JSON.stringify({ tier: resultado.tier, instruccion: resultado.instruccion }),
          });
        } else {
          results.push({
            type: "tool_result",
            tool_use_id: tu.id,
            content: "Herramienta desconocida.",
            is_error: true,
          });
        }
      }
      history.push({ role: "user", content: results });
    }

    return NextResponse.json({ reply: "", waUrl });
  } catch (error) {
    if (error instanceof Anthropic.RateLimitError || error instanceof Anthropic.InternalServerError) {
      return NextResponse.json({ error: "busy" }, { status: 503 });
    }
    console.error("[agente] error:", error instanceof Error ? error.message : error);
    return NextResponse.json({ error: "internal" }, { status: 500 });
  }
}
