/**
 * lib/services/cotizacion-input.ts
 * ─────────────────────────────────────────────────────────────
 * Parser y validador del payload de entrada del cotizador B2B.
 *
 * Acepta dos modalidades:
 *   1) Datos del lead embebidos en el body (nombre, empresa, whatsapp...).
 *   2) Un leadId, en cuyo caso se resuelve contra Supabase (tabla leads_b2b).
 *
 * Devuelve un CotizadorB2BInput normalizado o un error de validación.
 * Solo se ejecuta server-side.
 */

import { createClient } from "@supabase/supabase-js";
import { PLANES_PRECIOS } from "@/lib/config/precios";
import type {
  CotizadorB2BInput,
  LeadB2B,
  PlanId,
} from "@/lib/domain/cotizador-b2b";

export type ParseResult =
  | { ok: true; input: CotizadorB2BInput }
  | { ok: false; error: string; status: number };

const PLANES_VALIDOS = Object.keys(PLANES_PRECIOS) as PlanId[];

function esPlanValido(p: unknown): p is PlanId {
  return typeof p === "string" && PLANES_VALIDOS.includes(p as PlanId);
}

function toNumber(v: unknown, fallback: number): number {
  const n = typeof v === "string" ? Number(v) : (v as number);
  return Number.isFinite(n) ? (n as number) : fallback;
}

/**
 * Resuelve un lead desde Supabase por su id. Devuelve null si no se encuentra
 * o si Supabase no está configurado.
 */
async function fetchLead(leadId: string): Promise<LeadB2B | null> {
  const url = process.env.SUPABASE_URL;
  const key =
    process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.SUPABASE_ANON_KEY;
  if (!url || !key) return null;

  const supabase = createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  const { data, error } = await supabase
    .from("leads_b2b")
    .select("nombre, empresa, whatsapp, email, ruc")
    .eq("id", leadId)
    .single();

  if (error || !data) {
    console.error("[cotizacion-input] Lead no encontrado:", error?.message);
    return null;
  }

  return {
    nombre: data.nombre,
    empresa: data.empresa,
    whatsapp: data.whatsapp,
    email: data.email ?? null,
    ruc: data.ruc ?? null,
  };
}

/**
 * Parsea y valida el body de la request, devolviendo el input del cotizador.
 */
export async function parseCotizadorInput(
  body: Record<string, unknown>
): Promise<ParseResult> {
  let lead: LeadB2B | null = null;

  // Modalidad 1: leadId → Supabase
  if (typeof body.leadId === "string" && body.leadId.trim()) {
    lead = await fetchLead(body.leadId.trim());
    if (!lead) {
      return { ok: false, error: "Lead no encontrado en Supabase.", status: 404 };
    }
  } else {
    // Modalidad 2: datos embebidos
    const leadRaw = (body.lead ?? body) as Record<string, unknown>;
    const nombre = typeof leadRaw.nombre === "string" ? leadRaw.nombre.trim() : "";
    const empresa = typeof leadRaw.empresa === "string" ? leadRaw.empresa.trim() : "";
    const whatsapp = typeof leadRaw.whatsapp === "string" ? leadRaw.whatsapp.trim() : "";

    if (!empresa || !whatsapp) {
      return {
        ok: false,
        error: "Faltan campos obligatorios: empresa y whatsapp (o un leadId válido).",
        status: 400,
      };
    }

    lead = {
      nombre,
      empresa,
      whatsapp,
      email: typeof leadRaw.email === "string" ? leadRaw.email.trim() : null,
      ruc: typeof leadRaw.ruc === "string" ? leadRaw.ruc.trim() : null,
    };
  }

  const planId = esPlanValido(body.planId) ? body.planId : "business";
  const moneda = body.moneda === "PYG" ? "PYG" : "USD";

  const input: CotizadorB2BInput = {
    lead,
    planId,
    unidades: toNumber(body.unidades, 1),
    mesesMantenimiento: toNumber(body.mesesMantenimiento, 12),
    moneda,
    descuentoAdicional: toNumber(body.descuentoAdicional, 0),
  };

  return { ok: true, input };
}
