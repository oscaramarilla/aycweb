import type { LeadParaguay } from "./leadParaguay";

/**
 * Scoring automático de leads del hub Invertir en Paraguay.
 *
 * Pondera capital declarado, urgencia de decisión y tipo de objetivo.
 * El resultado clasifica al lead en tiers accionables:
 *   A (caliente):  responder en horas, llamada directa.
 *   B (tibio):     enviar dossier + seguimiento a 48h.
 *   C (frío):      nurturing por email, sin llamada inmediata.
 */

export type LeadTier = "A" | "B" | "C";

export type LeadScore = {
  score: number; // 0–100
  tier: LeadTier;
};

const CAPITAL_POINTS: Record<LeadParaguay["capital"], number> = {
  mas_1m: 40,
  "250k_1m": 32,
  "50k_250k": 20,
  prefiere_no_decir: 12, // desconocido ≠ bajo: puede ser pudor de capital alto
  menos_50k: 5,
};

const HORIZONTE_POINTS: Record<LeadParaguay["horizonte"], number> = {
  "0_6m": 30,
  "6_18m": 16,
  mas_18m: 5,
};

const OBJETIVO_POINTS: Record<LeadParaguay["objetivo"], number> = {
  instalar_operacion: 20, // máxima intención: ya decidió aterrizar
  invertir: 18,
  socio_local: 14,
  exportar_importar: 12,
  explorar: 4,
};

const SECTOR_POINTS: Record<LeadParaguay["sector"], number> = {
  energia: 10,       // ejes con tesis fuerte y red local activa
  tecnologia: 10,
  logistica: 8,
  agroindustria: 8,
  real_estate: 8,
  otro: 2,
};

export function scoreLead(lead: LeadParaguay): LeadScore {
  let score =
    CAPITAL_POINTS[lead.capital] +
    HORIZONTE_POINTS[lead.horizonte] +
    OBJETIVO_POINTS[lead.objetivo] +
    SECTOR_POINTS[lead.sector];

  // Señales secundarias de seriedad
  if (lead.empresa && lead.empresa.trim().length > 1) score += 3;
  if (lead.mensaje && lead.mensaje.trim().length >= 40) score += 3;
  if (lead.email.includes("@") && !lead.email.match(/@(gmail|hotmail|outlook|yahoo|icloud)\./i)) score += 4; // email corporativo

  score = Math.min(100, score);

  const tier: LeadTier = score >= 70 ? "A" : score >= 40 ? "B" : "C";

  return { score, tier };
}

export const TIER_LABELS: Record<LeadTier, string> = {
  A: "A · Caliente 🔥 (responder en horas)",
  B: "B · Tibio (dossier + seguimiento 48h)",
  C: "C · Frío (nurturing)",
};
