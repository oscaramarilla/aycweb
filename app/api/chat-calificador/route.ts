import { NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';
import { createClient } from '@supabase/supabase-js';

/**
 * AGENTE SDR DE CALIFICACIÓN B2B (con Claude)
 * ──────────────────────────────────────────────────────────
 * Conversa de forma consultiva con el prospecto y lo clasifica en Tier A/B/C.
 *
 * Contrato (sin cambios respecto del esqueleto previo, compatible con n8n / widget):
 *   POST body: {
 *     messages: { role: 'user' | 'assistant', content: string }[],
 *     leadInfo?: { nombre?, empresa?, email?, whatsapp? },
 *     finalExtraction?: boolean
 *   }
 *   - finalExtraction=false → { status, isFinal:false, reply }
 *   - finalExtraction=true  → { status, isFinal:true, data: { tier, reason, summary, nextAction } }
 *
 * Modelo: claude-sonnet-4-6 (override con ANTHROPIC_MODEL).
 * La extracción final usa "tool use" forzado para garantizar JSON estructurado válido.
 */

const SYSTEM_PROMPT = `
Eres un experto "Sales Development Representative" (SDR) de B2B. Tu objetivo es interactuar con los prospectos que llegan de manera consultiva, natural y profesional para cualificarlos antes de que hablen con un cerrador o pasen a nuestro WhatsApp.

Tu misión es clasificar al lead en uno de estos tres niveles (Tiers) basándote en: Volumen del Proyecto, Urgencia y Capital/Presupuesto.

Debes hacer 3 o 4 preguntas a lo largo de la conversación (NUNCA hagas todas de golpe, sé conversacional) para descubrir:
1. Volumen: ¿De qué trata el proyecto y a qué escala apunta? (Ej. ¿Es para su equipo interno, para clientes masivos?)
2. Urgencia: ¿Para cuándo necesitan tener esto resuelto o implementado?
3. Capital: (Con mucho tacto) ¿Tienen un presupuesto asignado o una idea de inversión inicial para este proyecto?

Criterios de Calificación:
- Tier A (Caliente): Proyecto bien definido/gran volumen, alta urgencia (necesitan avanzar rápido), tienen presupuesto o capacidad clara de inversión.
- Tier B (Tibio): Volumen moderado o aún en definición, urgencia media (próximos meses), presupuesto en evaluación.
- Tier C (Curioso): Idea muy verde, baja escala, sin urgencia real o buscan soluciones gratuitas/muy baratas.

Reglas de Comportamiento:
1. Empieza saludando y preguntando en qué los podemos ayudar.
2. Escucha su respuesta y, de forma orgánica, introduce tus preguntas de cualificación.
3. Si el lead responde algo vago, pide una aclaración amable.
4. Cuando hayas recopilado suficiente información (máximo 4 iteraciones), despídete indicando que tienes la información necesaria.
5. Mantené las respuestas breves (2-4 frases). Respondé SIEMPRE en el idioma del prospecto.
6. Nunca inventes precios ni prometas plazos concretos: para eso derivás al equipo.
`.trim();

const DIALOGUE_MODEL = process.env.ANTHROPIC_MODEL || 'claude-sonnet-4-6';

// ── Tool de extracción estructurada: fuerza JSON válido en la calificación final ──
const CLASIFICAR_LEAD_TOOL: Anthropic.Tool = {
  name: 'clasificar_lead',
  description:
    'Registra la calificación final del prospecto B2B tras la conversación de descubrimiento.',
  input_schema: {
    type: 'object',
    properties: {
      tier: {
        type: 'string',
        enum: ['A', 'B', 'C'],
        description: 'A=Caliente, B=Tibio, C=Curioso/frío.',
      },
      reason: {
        type: 'string',
        description: 'Justificación de ~2 líneas de por qué se clasificó así.',
      },
      summary: {
        type: 'string',
        description: 'Resumen de lo que el prospecto necesita.',
      },
      nextAction: {
        type: 'string',
        enum: ['derivacion_whatsapp', 'nurturing_email'],
        description:
          'derivacion_whatsapp para Tier A (cierre humano inmediato); nurturing_email para B/C.',
      },
    },
    required: ['tier', 'reason', 'summary', 'nextAction'],
  },
};

type Calificacion = {
  tier: 'A' | 'B' | 'C';
  reason: string;
  summary: string;
  nextAction: 'derivacion_whatsapp' | 'nurturing_email';
};

type LeadInfo = {
  nombre?: string;
  empresa?: string;
  email?: string;
  whatsapp?: string;
};

// Instanciación diferida del cliente Anthropic: evita romper el build cuando
// ANTHROPIC_API_KEY aún no está en el entorno (mismo patrón que Resend en el cron).
let _anthropic: Anthropic | null = null;
function getAnthropic(): Anthropic {
  if (!_anthropic) {
    _anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
  }
  return _anthropic;
}

/**
 * Persiste la calificación en Supabase (tabla `chat_calificaciones`).
 * Fire-and-forget: si falla, se loguea pero NO rompe la respuesta al cliente,
 * consistente con el resto de los funnels del repo.
 */
async function persistirCalificacion(
  data: Calificacion,
  leadInfo: LeadInfo | undefined,
): Promise<void> {
  const supabaseUrl = process.env.SUPABASE_URL;
  // Mismo orden de resolución que /api/agente y actions.ts: en Vercel la clave
  // privilegiada se llama SUPABASE_SERVICE_ROLE_KEY (sin ella, el insert haría no-op).
  const supabaseKey =
    process.env.SUPABASE_SERVICE_ROLE_KEY ||
    process.env.SUPABASE_SERVICE_KEY ||
    process.env.SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    console.warn('[chat-calificador] Supabase no configurado; se omite persistencia.');
    return;
  }

  try {
    const supabase = createClient(supabaseUrl, supabaseKey);
    const { error } = await supabase.from('chat_calificaciones').insert({
      nombre: leadInfo?.nombre ?? null,
      empresa: leadInfo?.empresa ?? null,
      email: leadInfo?.email ?? null,
      whatsapp: leadInfo?.whatsapp ?? null,
      tier: data.tier,
      reason: data.reason,
      summary: data.summary,
      next_action: data.nextAction,
      estado: 'nuevo',
      created_at: new Date().toISOString(),
    });
    if (error) {
      console.error('[chat-calificador] Error insertando calificación:', error.message);
    }
  } catch (err) {
    console.error('[chat-calificador] Error inesperado al persistir:', err);
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { messages, leadInfo, finalExtraction } = body as {
      messages: Anthropic.MessageParam[];
      leadInfo?: LeadInfo;
      finalExtraction?: boolean;
    };

    // Validación básica del contrato
    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'Se esperaba un array de "messages" en el body.' },
        { status: 400 },
      );
    }

    if (!process.env.ANTHROPIC_API_KEY) {
      console.error('[chat-calificador] ANTHROPIC_API_KEY no configurada.');
      return NextResponse.json(
        { error: 'Error de configuración del servidor (LLM no disponible).' },
        { status: 500 },
      );
    }

    const anthropic = getAnthropic();

    // ── EXTRACCIÓN FINAL: clasificación estructurada vía tool use forzado ──
    if (finalExtraction) {
      const completion = await anthropic.messages.create({
        model: DIALOGUE_MODEL,
        max_tokens: 512,
        system: SYSTEM_PROMPT,
        tools: [CLASIFICAR_LEAD_TOOL],
        tool_choice: { type: 'tool', name: 'clasificar_lead' },
        messages,
      });

      const toolUse = completion.content.find(
        (block): block is Anthropic.ToolUseBlock => block.type === 'tool_use',
      );

      if (!toolUse) {
        console.error('[chat-calificador] El modelo no devolvió tool_use en la extracción.');
        return NextResponse.json(
          { error: 'No se pudo extraer la calificación del lead.' },
          { status: 502 },
        );
      }

      const data = toolUse.input as Calificacion;

      // Persistencia fire-and-forget (no bloquea la respuesta)
      await persistirCalificacion(data, leadInfo);

      return NextResponse.json({ status: 'success', isFinal: true, data });
    }

    // ── TURNO CONVERSACIONAL ──
    const completion = await anthropic.messages.create({
      model: DIALOGUE_MODEL,
      max_tokens: 512,
      system: SYSTEM_PROMPT,
      messages,
    });

    const reply = completion.content
      .filter((block): block is Anthropic.TextBlock => block.type === 'text')
      .map((block) => block.text)
      .join('')
      .trim();

    return NextResponse.json({ status: 'success', isFinal: false, reply });
  } catch (error) {
    // Errores transitorios del proveedor → 503 (mismo criterio que /api/agente).
    if (
      error instanceof Anthropic.RateLimitError ||
      error instanceof Anthropic.InternalServerError
    ) {
      return NextResponse.json({ error: 'busy' }, { status: 503 });
    }
    console.error('[ChatCalificador API Error]:', error);
    return NextResponse.json(
      { error: 'Error interno procesando la calificación del lead.' },
      { status: 500 },
    );
  }
}
