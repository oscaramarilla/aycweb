// ─── DOMINIO: Tipos de Obra / Caso de Éxito ─────────────────────────────────
// Tipos puros de dominio. Sin lógica de UI ni de framework.

/**
 * Métrica de impacto cuantificado para una obra.
 * Representa el cambio medible "antes → después" de implementar el sistema.
 */
export interface MetricaImpacto {
  /** Etiqueta descriptiva del indicador (ej: "Tiempo de cotización") */
  label: string;
  /** Valor antes de la intervención (ej: "2 h", "~15%") */
  antes: string;
  /** Valor después de la intervención (ej: "3 min", "0%") */
  despues: string;
  /** Unidad opcional cuando aplica contexto adicional (ej: "por solicitud") */
  unidad?: string;
}
