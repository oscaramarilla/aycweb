/**
 * lib/services/cotizacion-envio.ts
 * ─────────────────────────────────────────────────────────────
 * Servicios de persistencia y envío de cotizaciones – AYCweb.
 *
 *  • guardarCotizacionSupabase: persiste metadata + sube el PDF a Storage.
 *  • enviarCotizacionN8N: dispara el flujo de n8n/WhatsApp con el PDF
 *    adjunto en base64, para que el documento se envíe al lead.
 *
 * Todas las operaciones son "best-effort": registran el error pero no
 * interrumpen la respuesta al usuario (la generación del PDF es lo crítico).
 * Solo se ejecutan server-side (Route Handlers) — nunca en el cliente.
 */

import { createClient } from "@supabase/supabase-js";
import type { CotizacionB2B } from "@/lib/domain/cotizador-b2b";

const STORAGE_BUCKET = process.env.SUPABASE_COTIZACIONES_BUCKET ?? "cotizaciones";

export interface ResultadoPersistencia {
  ok: boolean;
  /** URL pública (o firmada) del PDF en Storage, si se pudo subir. */
  pdfUrl?: string;
  /** Path del archivo dentro del bucket. */
  storagePath?: string;
  error?: string;
}

export interface ResultadoEnvio {
  ok: boolean;
  skipped?: boolean;
  error?: string;
}

/**
 * Construye un cliente Supabase server-side, priorizando la service_role key
 * (necesaria para subir a Storage). Devuelve null si no hay credenciales.
 */
function getSupabaseAdmin() {
  const url = process.env.SUPABASE_URL;
  const key =
    process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.SUPABASE_ANON_KEY;
  if (!url || !key) return null;
  return createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

/**
 * Persiste la cotización en Supabase: sube el PDF a Storage y registra
 * una fila en la tabla "cotizaciones". No lanza: devuelve el resultado.
 */
export async function guardarCotizacionSupabase(
  cot: CotizacionB2B,
  pdf: Buffer,
  nombreArchivo: string
): Promise<ResultadoPersistencia> {
  const supabase = getSupabaseAdmin();
  if (!supabase) {
    console.warn("[cotizacion-envio] Supabase no configurado; se omite persistencia.");
    return { ok: false, error: "supabase_not_configured" };
  }

  const storagePath = `${new Date().getFullYear()}/${cot.numero}/${nombreArchivo}`;

  let pdfUrl: string | undefined;
  try {
    const { error: uploadError } = await supabase.storage
      .from(STORAGE_BUCKET)
      .upload(storagePath, pdf, {
        contentType: "application/pdf",
        upsert: true,
      });

    if (uploadError) {
      console.error("[cotizacion-envio] Error subiendo PDF a Storage:", uploadError.message);
    } else {
      const { data: pub } = supabase.storage.from(STORAGE_BUCKET).getPublicUrl(storagePath);
      pdfUrl = pub?.publicUrl;
    }
  } catch (err) {
    console.error("[cotizacion-envio] Excepción subiendo PDF:", err);
  }

  // Registrar metadata (best-effort; la tabla puede no existir aún).
  try {
    const { error: insertError } = await supabase.from("cotizaciones").insert({
      numero: cot.numero,
      empresa: cot.lead.empresa,
      contacto: cot.lead.nombre,
      whatsapp: cot.lead.whatsapp,
      email: cot.lead.email ?? null,
      plan: cot.plan.id,
      unidades: cot.unidades,
      meses_mantenimiento: cot.mesesMantenimiento,
      moneda: cot.resultado.moneda,
      total: cot.resultado.total,
      descuento_total: cot.tasaDescuentoTotal,
      pdf_url: pdfUrl ?? null,
      storage_path: storagePath,
      created_at: cot.fechaISO,
    });

    if (insertError) {
      console.error("[cotizacion-envio] Error insertando metadata:", insertError.message);
    }
  } catch (err) {
    console.error("[cotizacion-envio] Excepción insertando metadata:", err);
  }

  return { ok: Boolean(pdfUrl), pdfUrl, storagePath };
}

/**
 * Dispara el flujo de n8n/WhatsApp enviando los datos de la cotización
 * junto al PDF adjunto (base64) para que n8n lo reenvíe por WhatsApp.
 *
 * Reutiliza la variable N8N_WEBHOOK_COTIZACIONES_URL ya existente en el
 * proyecto. Es "fire-and-forget" con timeout para no bloquear la respuesta.
 */
export async function enviarCotizacionN8N(
  cot: CotizacionB2B,
  pdf: Buffer,
  nombreArchivo: string,
  pdfUrl?: string
): Promise<ResultadoEnvio> {
  const webhookUrl = process.env.N8N_WEBHOOK_COTIZACIONES_URL;
  if (!webhookUrl) {
    console.warn("[cotizacion-envio] N8N_WEBHOOK_COTIZACIONES_URL no configurada; se omite envío.");
    return { ok: false, skipped: true, error: "webhook_not_configured" };
  }

  const payload = {
    source: "aycweb-cotizador",
    timestamp: new Date().toISOString(),
    numero: cot.numero,
    lead: cot.lead,
    plan: cot.plan,
    unidades: cot.unidades,
    total: cot.resultado.total,
    moneda: cot.resultado.moneda,
    tiempoEntrega: cot.tiempoEntrega,
    pdfUrl: pdfUrl ?? null,
    adjunto: {
      nombre: nombreArchivo,
      mimeType: "application/pdf",
      base64: pdf.toString("base64"),
    },
  };

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(10_000),
    });

    if (!res.ok) {
      console.error(`[cotizacion-envio] n8n respondió ${res.status}`);
      return { ok: false, error: `n8n_error_${res.status}` };
    }
    return { ok: true };
  } catch (err) {
    const message = err instanceof Error ? err.message : "unknown";
    console.error("[cotizacion-envio] Error llamando a n8n:", message);
    return { ok: false, error: message };
  }
}
