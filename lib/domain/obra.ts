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

/**
 * Pieza de evidencia visual de una obra en producción.
 * Permite mostrar capturas, previews de PDF o vistas mobile del sistema.
 */
export type EvidenciaVisual = {
  /** Ruta relativa desde public/ (ej: "/obras/metalmadeas/01-cotizador.webp") */
  src: string;
  /** Descripción SEO de la imagen */
  alt: string;
  /** Texto explicativo factual mostrado en hover y lightbox */
  caption?: string;
  tipo: "screenshot" | "pdf_preview" | "mobile_view";
};
