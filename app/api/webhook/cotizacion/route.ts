import { NextRequest, NextResponse } from "next/server";

// ─────────────────────────────────────────────────────────────────────────────
// POST /api/webhook/cotizacion
//
// Proxy seguro hacia el webhook de n8n. Las variables de entorno sin prefijo
// NEXT_PUBLIC_ solo son accesibles en el servidor, por lo que el cliente
// no puede llamar a N8N directamente.
//
// Body esperado:
//   { nombre?: string; servicio: string; total: number; [extra: string]: unknown }
// ─────────────────────────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  const webhookUrl = process.env.N8N_WEBHOOK_COTIZACIONES_URL;

  if (!webhookUrl) {
    // Si no está configurada la URL, lo logueamos pero no bloqueamos al cliente.
    console.warn("[webhook/cotizacion] N8N_WEBHOOK_COTIZACIONES_URL no configurada.");
    return NextResponse.json({ ok: false, error: "webhook_not_configured" }, { status: 503 });
  }

  let body: Record<string, unknown>;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  // Enriquecemos el payload con timestamp del servidor
  const payload = {
    ...body,
    timestamp: new Date().toISOString(),
    source: "aycweb-cotizador",
  };

  try {
    const n8nRes = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      // Timeout de 8 s para no bloquear demasiado en caso de demora
      signal: AbortSignal.timeout(8_000),
    });

    if (!n8nRes.ok) {
      console.error(`[webhook/cotizacion] n8n respondió ${n8nRes.status}`);
      return NextResponse.json({ ok: false, error: "n8n_error", status: n8nRes.status }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : "unknown";
    console.error("[webhook/cotizacion] Error al llamar a n8n:", message);
    return NextResponse.json({ ok: false, error: message }, { status: 502 });
  }
}
