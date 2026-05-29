// ============================================================
// FUENTE ÚNICA DE VERDAD: Planes, precios y modelo B2B
// ============================================================
// Modelo de cobros por hitos 20/20/30/30 + mantenimiento fijo.
// Regla: NADIE hardcodea precios fuera de este archivo.
// REGLA VISUAL: totalAnualInversion existe en datos pero NO debe
// aparecer como texto visible en cabeceras de tarjetas de precios.
// La jerarquía visual prioriza: costo mensual (dominante) →
// setup único (secundario) → aclaración de financiamiento (terciario).
// ============================================================

export type PlanPrecio = {
  id: string;
  nombre: string;
  setupTotal: number;
  mantenimientoMensual: number;
  hitos: {
    anticipo: number;      // 20%
    definicion: number;    // 20%
    implementacion: number;// 30%
    pruebas: number;       // 30%
  };
  /** @internal Los totales anuales existen en DB pero NO se muestran en UI de tarjetas */
  totalAnualInversion: number; // setupTotal + (mantenimientoMensual * 12)
};

export const PLANES_PRECIOS: Record<string, PlanPrecio> = {
  starter: {
    id: 'starter',
    nombre: 'AYCweb MVP Starter',
    setupTotal: 240,
    mantenimientoMensual: 15,
    hitos: { anticipo: 48, definicion: 48, implementacion: 72, pruebas: 72 },
    totalAnualInversion: 420,
  },
  business: {
    id: 'business',
    nombre: 'AYCweb Business',
    setupTotal: 1260,
    mantenimientoMensual: 30,
    hitos: { anticipo: 252, definicion: 252, implementacion: 378, pruebas: 378 },
    totalAnualInversion: 1620,
  },
  enterprise: {
    id: 'enterprise',
    nombre: 'AYCweb Enterprise',
    setupTotal: 2340,
    mantenimientoMensual: 45,
    hitos: { anticipo: 468, definicion: 468, implementacion: 702, pruebas: 702 },
    totalAnualInversion: 2880,
  },
};

/** Formatea un número en USD (ej: 240 → "$240"). */
export function formatCurrencyUSD(n: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(n);
}

/** Retorna el monto de financiamiento por mes (1 a 4 cuotas del setup). */
export function getCuotaFinanciada(setupTotal: number, meses: 1 | 2 | 3 | 4): number {
  return Math.round(setupTotal / meses);
}

/** Texto descriptivo sobre el financiamiento del setup en hasta 4 pagos. */
export const TEXTO_FINANCIAMIENTO =
  "El costo de configuración puede financiarse hasta en 4 pagos durante la etapa de desarrollo.";
