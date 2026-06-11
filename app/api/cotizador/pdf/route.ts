/**
 * Route Handler: POST /api/cotizador/pdf
 * ──────────────────────────────────────────────────────────────
 * Genera el PDF de la cotización al vuelo y, opcionalmente:
 *   • lo persiste en Supabase Storage (bucket "cotizaciones"),
 *   • dispara el flujo de n8n/WhatsApp con el PDF adjunto.
 *
 * Modos de operación (query string `?accion=`):
 *   • accion=descargar (default): responde el PDF como adjunto (binario).
 *   • accion=enviar: genera + guarda en Supabase + envía por n8n/WhatsApp,
 *     y responde JSON con el estado y la URL pública del PDF.
 *
 * El body es idéntico al de POST /api/cotizador (lead embebido o leadId).
 */

import { NextRequest, NextResponse } from "next/server";
import { parseCotizadorInput } from "@/lib/services/cotizacion-input";
import { generarCotizacionB2B } from "@/lib/domain/cotizador-b2b";
import {
  generarPdfCotizacion,
  nombreArchivoCotizacion,
} from "@/lib/services/cotizacion-pdf";
import {
  guardarCotizacionSupabase,
  enviarCotizacionN8N,
} from "@/lib/services/cotizacion-envio";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const parsed = await parseCotizadorInput(body);
  if (!parsed.ok) {
    return NextResponse.json({ ok: false, error: parsed.error }, { status: parsed.status });
  }

  // Acción solicitada (query o body). Default: descargar.
  const accion =
    req.nextUrl.searchParams.get("accion") ??
    (typeof body.accion === "string" ? body.accion : "descargar");

  try {
    const cotizacion = generarCotizacionB2B(parsed.input);
    const pdf = generarPdfCotizacion(cotizacion);
    const nombreArchivo = nombreArchivoCotizacion(cotizacion);

    // ── Modo ENVIAR: persistir + reenviar por n8n/WhatsApp ──
    if (accion === "enviar") {
      const persistencia = await guardarCotizacionSupabase(cotizacion, pdf, nombreArchivo);
      const envio = await enviarCotizacionN8N(
        cotizacion,
        pdf,
        nombreArchivo,
        persistencia.pdfUrl
      );

      return NextResponse.json({
        ok: true,
        numero: cotizacion.numero,
        archivo: nombreArchivo,
        persistencia,
        envio,
      });
    }

    // ── Modo DESCARGAR (default): responder el PDF binario ──
    // Best-effort: si vienen flags, también persistimos/enviamos sin bloquear.
    if (body.guardar === true) {
      await guardarCotizacionSupabase(cotizacion, pdf, nombreArchivo).catch(() => null);
    }

    // Buffer → Uint8Array para que sea un BodyInit válido en la Response.
    const pdfBytes = new Uint8Array(pdf);

    return new NextResponse(pdfBytes, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${nombreArchivo}"`,
        "Content-Length": String(pdfBytes.byteLength),
        "Cache-Control": "no-store",
      },
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "unknown";
    console.error("[api/cotizador/pdf] Error generando PDF:", message);
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}
