/**
 * Route Handler: POST /api/cotizador
 * ──────────────────────────────────────────────────────────────
 * Endpoint de cálculo de cotización B2B.
 *
 * Recibe los datos de un lead (embebidos en el body o vía `leadId` que se
 * resuelve contra Supabase), aplica la matriz de precios y las reglas de
 * negocio/descuentos vigentes (lib/domain/cotizador-b2b.ts) y devuelve el
 * presupuesto final en JSON.
 *
 * Body (JSON):
 *   {
 *     // Modalidad A: lead embebido
 *     "lead"?: { nombre, empresa, whatsapp, email?, ruc? },
 *     // o campos sueltos: { nombre, empresa, whatsapp, ... }
 *     // Modalidad B: resolución por id
 *     "leadId"?: string,
 *
 *     "planId"?: "starter" | "business" | "enterprise",
 *     "unidades"?: number,
 *     "mesesMantenimiento"?: number,
 *     "moneda"?: "USD" | "PYG",
 *     "descuentoAdicional"?: number
 *   }
 */

import { NextRequest, NextResponse } from "next/server";
import { parseCotizadorInput } from "@/lib/services/cotizacion-input";
import { generarCotizacionB2B } from "@/lib/domain/cotizador-b2b";

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

  try {
    const cotizacion = generarCotizacionB2B(parsed.input);
    return NextResponse.json({ ok: true, cotizacion });
  } catch (err) {
    const message = err instanceof Error ? err.message : "unknown";
    console.error("[api/cotizador] Error calculando cotización:", message);
    return NextResponse.json({ ok: false, error: message }, { status: 400 });
  }
}
