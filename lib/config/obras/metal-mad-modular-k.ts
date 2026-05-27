// ─── MÉTRICAS: Metal Mad / Modular K ─────────────────────────────────────────
// Datos verificados y confirmados por el cliente.
// Fuente: relevamiento directo con el equipo comercial de Metal Mad / Modular K.

import type { MetricaImpacto } from "../../domain/obra";

export const METRICAS_METAL_MAD: MetricaImpacto[] = [
  {
    label: "Tiempo de cotización",
    antes: "2 h",
    despues: "3 min",
    unidad: "por solicitud",
  },
  {
    label: "Errores de cálculo",
    antes: "~15%",
    despues: "0%",
    unidad: "en presupuestos emitidos",
  },
];
