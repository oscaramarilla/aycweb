// ============================================================
// FUENTE ÚNICA DE VERDAD: Planes, precios y modelo B2B
// ============================================================
// Modelo de cobros por hitos 20/20/30/30 + mantenimiento fijo.
// Regla: NADIE hardcodea precios fuera de este archivo.
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
};

export const PLANES_PRECIOS: Record<string, PlanPrecio> = {
  starter: {
    id: 'starter',
    nombre: 'AYCweb MVP Starter',
    setupTotal: 60,
    mantenimientoMensual: 15,
    hitos: { anticipo: 12, definicion: 12, implementacion: 18, pruebas: 18 },
  },
  business: {
    id: 'business',
    nombre: 'AYCweb Business',
    setupTotal: 900,
    mantenimientoMensual: 30,
    hitos: { anticipo: 180, definicion: 180, implementacion: 270, pruebas: 270 },
  },
  enterprise: {
    id: 'enterprise',
    nombre: 'AYCweb Enterprise',
    setupTotal: 1800,
    mantenimientoMensual: 45,
    hitos: { anticipo: 360, definicion: 360, implementacion: 540, pruebas: 540 },
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
