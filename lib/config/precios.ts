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

// ============================================================
// MODELO DE PAGO FLEXIBLE (planilla maestra — "idea central del negocio")
// ------------------------------------------------------------
// La construcción (setupTotal) se paga fraccionada en 1/4/6/12 cuotas,
// con meses de mantenimiento exonerados según la modalidad. Pagar el
// contrato anual completo por adelantado da 30% de descuento.
// Verificado contra la planilla: cuotas 60/15/10/5 · 900/225/150/75 · 1800/450/300/150.
// Es flexible: estos parámetros son la guía comercial, ajustables por acuerdo.
// ============================================================

export type ModalidadPagoId = "unico" | "4pagos" | "6pagos" | "12cuotas";

export type ModalidadPago = {
  id: ModalidadPagoId;
  nCuotas: number;
  /** Cuotas de mantenimiento mensual exoneradas al elegir esta modalidad. */
  mesesExonerados: number;
};

export const MODALIDADES_PAGO: ModalidadPago[] = [
  { id: "unico", nCuotas: 1, mesesExonerados: 3 },
  { id: "4pagos", nCuotas: 4, mesesExonerados: 2 },
  { id: "6pagos", nCuotas: 6, mesesExonerados: 1 },
  { id: "12cuotas", nCuotas: 12, mesesExonerados: 0 },
];

/** Descuento por pagar el contrato anual completo por adelantado. */
export const DESCUENTO_PAGO_ANUAL = 0.30;

/** Total del contrato a 12 meses (construcción + 12 mantenimientos). */
export function totalContrato12m(plan: PlanPrecio): number {
  return plan.setupTotal + plan.mantenimientoMensual * 12;
}

export type DesglosePago = {
  cuotaConstruccion: number;
  nCuotas: number;
  mesesExonerados: number;
  ahorroExoneracion: number;
  totalAnio1: number;
};

/** Desglose de pago de un plan según la modalidad elegida. */
export function calcularPago(plan: PlanPrecio, modalidad: ModalidadPago): DesglosePago {
  const cuotaConstruccion = Math.round(plan.setupTotal / modalidad.nCuotas);
  const ahorroExoneracion = modalidad.mesesExonerados * plan.mantenimientoMensual;
  const totalAnio1 =
    plan.setupTotal + (12 - modalidad.mesesExonerados) * plan.mantenimientoMensual;
  return {
    cuotaConstruccion,
    nCuotas: modalidad.nCuotas,
    mesesExonerados: modalidad.mesesExonerados,
    ahorroExoneracion,
    totalAnio1,
  };
}

/** Total del primer año pagando el contrato completo por adelantado (30% off). */
export function totalPagoAnualAdelantado(plan: PlanPrecio): number {
  return Math.round(totalContrato12m(plan) * (1 - DESCUENTO_PAGO_ANUAL));
}
