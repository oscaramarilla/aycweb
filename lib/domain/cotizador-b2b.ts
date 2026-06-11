/**
 * lib/domain/cotizador-b2b.ts
 * ─────────────────────────────────────────────────────────────
 * Motor de cotización B2B – AYCweb.
 *
 * Aplica la matriz de precios oficial (lib/config/precios.ts) y las
 * reglas de negocio de descuento por volumen sobre la base del motor
 * genérico de cotización (lib/domain/cotizacion.ts).
 *
 * Fuente única de verdad de las reglas comerciales B2B.
 * Pura lógica de negocio, sin side-effects ni dependencias de I/O.
 */

import {
  PLANES_PRECIOS,
  type PlanPrecio,
} from "@/lib/config/precios";
import {
  calcularCotizacion,
  type ItemCotizacion,
  type ResultadoCotizacion,
} from "@/lib/domain/cotizacion";

// ─── Tipos públicos ───────────────────────────────────────────────────────────

export type PlanId = keyof typeof PLANES_PRECIOS;

/**
 * Datos del lead provenientes de Supabase (tabla leads_b2b) o del request.
 */
export interface LeadB2B {
  nombre: string;
  empresa: string;
  whatsapp: string;
  email?: string | null;
  ruc?: string | null;
}

/**
 * Parámetros de entrada para generar una cotización B2B.
 */
export interface CotizadorB2BInput {
  lead: LeadB2B;
  /** Plan seleccionado de la matriz de precios. Default: "business". */
  planId?: PlanId;
  /**
   * Volumen de unidades (licencias / sucursales / usuarios) sobre las
   * que aplica el mantenimiento mensual. Default: 1.
   */
  unidades?: number;
  /** Meses de mantenimiento a incluir en la cotización. Default: 12. */
  mesesMantenimiento?: number;
  /** Moneda de la cotización. Default: "USD". */
  moneda?: "USD" | "PYG";
  /** Descuento comercial adicional manual (0–1), se suma al de volumen. */
  descuentoAdicional?: number;
}

/**
 * Tramo de descuento por volumen de unidades.
 */
export interface TramoVolumen {
  minUnidades: number;
  tasaDescuento: number; // 0.10 = 10%
  label: string;
}

/**
 * Resultado completo de una cotización B2B, listo para PDF / WhatsApp / DB.
 */
export interface CotizacionB2B {
  /** Identificador legible único de la cotización (ej: COT-2026-XK3F9). */
  numero: string;
  fechaISO: string;
  validezDias: number;
  lead: LeadB2B;
  plan: {
    id: PlanId;
    nombre: string;
    setupTotal: number;
    mantenimientoMensual: number;
    hitos: PlanPrecio["hitos"];
  };
  unidades: number;
  mesesMantenimiento: number;
  /** Tasa de descuento por volumen aplicada (0–1). */
  tasaDescuentoVolumen: number;
  labelDescuentoVolumen: string;
  /** Tasa de descuento total aplicada (volumen + adicional). */
  tasaDescuentoTotal: number;
  tiempoEntrega: string;
  resultado: ResultadoCotizacion;
  /** Cronograma de pagos por hitos (20/20/30/30) sobre el setup. */
  cronogramaHitos: { etapa: string; porcentaje: number; monto: number }[];
}

// ─── Reglas de negocio ──────────────────────────────────────────────────────

/**
 * Matriz de descuentos por volumen de unidades.
 * Ordenada de mayor a menor para evaluar el primer tramo aplicable.
 */
export const DESCUENTOS_VOLUMEN: TramoVolumen[] = [
  { minUnidades: 21, tasaDescuento: 0.2, label: "Volumen Corporativo (21+ unidades)" },
  { minUnidades: 11, tasaDescuento: 0.15, label: "Volumen Mayorista (11–20 unidades)" },
  { minUnidades: 6, tasaDescuento: 0.1, label: "Volumen Empresa (6–10 unidades)" },
  { minUnidades: 3, tasaDescuento: 0.05, label: "Volumen PyME (3–5 unidades)" },
  { minUnidades: 1, tasaDescuento: 0, label: "Tarifa estándar (1–2 unidades)" },
];

/**
 * Tiempos de entrega estimados por plan.
 */
export const TIEMPOS_ENTREGA: Record<string, string> = {
  starter: "7 a 10 días hábiles",
  business: "3 a 4 semanas hábiles",
  enterprise: "6 a 8 semanas hábiles",
};

/** Validez por defecto de la cotización, en días. */
export const VALIDEZ_COTIZACION_DIAS = 15;

// ─── Helpers ────────────────────────────────────────────────────────────────

/**
 * Resuelve el tramo de descuento por volumen para una cantidad de unidades.
 */
export function resolverDescuentoVolumen(unidades: number): TramoVolumen {
  const tramo = DESCUENTOS_VOLUMEN.find((t) => unidades >= t.minUnidades);
  return tramo ?? DESCUENTOS_VOLUMEN[DESCUENTOS_VOLUMEN.length - 1];
}

/**
 * Genera un número de cotización legible y razonablemente único.
 * Formato: COT-AAAA-XXXXX (base36 en mayúsculas).
 */
export function generarNumeroCotizacion(fecha: Date = new Date()): string {
  const anio = fecha.getFullYear();
  const random = Math.random().toString(36).slice(2, 7).toUpperCase();
  const tiempo = fecha.getTime().toString(36).slice(-3).toUpperCase();
  return `COT-${anio}-${tiempo}${random}`;
}

// ─── Función principal ────────────────────────────────────────────────────────

/**
 * Genera una cotización B2B completa aplicando la matriz de precios y las
 * reglas de descuento por volumen vigentes en el proyecto.
 */
export function generarCotizacionB2B(input: CotizadorB2BInput): CotizacionB2B {
  const {
    lead,
    planId = "business",
    unidades = 1,
    mesesMantenimiento = 12,
    moneda = "USD",
    descuentoAdicional = 0,
  } = input;

  const plan = PLANES_PRECIOS[planId];
  if (!plan) {
    throw new Error(
      `[cotizador-b2b] Plan inválido: "${planId}". Válidos: ${Object.keys(PLANES_PRECIOS).join(", ")}.`
    );
  }

  const unidadesNorm = Math.max(1, Math.floor(unidades));
  const mesesNorm = Math.max(1, Math.floor(mesesMantenimiento));

  // Reglas de descuento por volumen + descuento comercial adicional.
  const tramoVolumen = resolverDescuentoVolumen(unidadesNorm);
  const descAdicionalNorm = Math.min(Math.max(descuentoAdicional, 0), 0.5);
  const tasaDescuentoTotal = Math.min(tramoVolumen.tasaDescuento + descAdicionalNorm, 0.5);

  // Construcción de los ítems de la cotización a partir de la matriz de precios.
  const items: Omit<ItemCotizacion, "subtotal">[] = [
    {
      productoId: `${plan.id}-setup`,
      nombre: `Setup e implementación · ${plan.nombre}`,
      cantidad: 1,
      precioUnitario: plan.setupTotal,
    },
    {
      productoId: `${plan.id}-mantenimiento`,
      nombre: `Mantenimiento mensual (${mesesNorm} meses × ${unidadesNorm} ${unidadesNorm === 1 ? "unidad" : "unidades"})`,
      cantidad: unidadesNorm * mesesNorm,
      precioUnitario: plan.mantenimientoMensual,
    },
  ];

  const resultado = calcularCotizacion(items, {
    tasaDescuento: tasaDescuentoTotal,
    moneda,
  });

  // Cronograma de pagos por hitos sobre el setup (20/20/30/30).
  const cronogramaHitos = [
    { etapa: "Anticipo / Onboarding", porcentaje: 20, monto: plan.hitos.anticipo },
    { etapa: "Definición y diseño", porcentaje: 20, monto: plan.hitos.definicion },
    { etapa: "Implementación", porcentaje: 30, monto: plan.hitos.implementacion },
    { etapa: "Pruebas y entrega final", porcentaje: 30, monto: plan.hitos.pruebas },
  ];

  return {
    numero: generarNumeroCotizacion(),
    fechaISO: new Date().toISOString(),
    validezDias: VALIDEZ_COTIZACION_DIAS,
    lead,
    plan: {
      id: plan.id as PlanId,
      nombre: plan.nombre,
      setupTotal: plan.setupTotal,
      mantenimientoMensual: plan.mantenimientoMensual,
      hitos: plan.hitos,
    },
    unidades: unidadesNorm,
    mesesMantenimiento: mesesNorm,
    tasaDescuentoVolumen: tramoVolumen.tasaDescuento,
    labelDescuentoVolumen: tramoVolumen.label,
    tasaDescuentoTotal,
    tiempoEntrega: TIEMPOS_ENTREGA[plan.id] ?? "A definir en el onboarding",
    resultado,
    cronogramaHitos,
  };
}
