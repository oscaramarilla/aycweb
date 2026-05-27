// ─── TIPOS: Configuración de landings SEO por sector/dolor ───────────────────
// Cada landing lee su contenido de lib/config/soluciones/[slug].ts
// El componente SolucionPageTemplate consume esta interfaz directamente.
// Para agregar contenido: editar el archivo [slug].ts sin tocar componentes.

// ─── Paso individual de "Cómo lo resolvemos" ─────────────────────────────────
export interface PasoSolucion {
  icono: string;
  titulo: string;
  descripcion: string;
}

// ─── Ítem de FAQ ─────────────────────────────────────────────────────────────
export interface FaqItem {
  pregunta: string;
  respuesta: string;
}

/**
 * Estructura tipada de configuración para cada landing SEO.
 *
 * Para poblar una landing:
 *  1. Editá lib/config/soluciones/[slug].ts
 *  2. Reemplazá los valores por el contenido real
 *  3. No hace falta tocar componentes
 */
export interface SolucionConfig {
  /** Slug único — debe coincidir con el nombre de archivo y la ruta URL */
  slug: string;

  // ── SEO ──────────────────────────────────────────────────────────────────
  metaTitle: string;
  metaDescription: string;

  // ── Hero ─────────────────────────────────────────────────────────────────
  hero: { title: string; subtitle: string };

  // ── Problema ─────────────────────────────────────────────────────────────
  problema: { title: string; paragraphs: string[] };

  // ── Solución ─────────────────────────────────────────────────────────────
  solucion: { title: string; pasos: PasoSolucion[] };

  /**
   * IDs de casos en CASOS_OBRAS (ver lib/config/obras.ts).
   * Usa 2–3 para generar señal de enlazado interno SEO.
   */
  casosRelacionados: string[];

  /**
   * Preguntas frecuentes de la landing.
   * Cuando hay ítems, el template genera FAQPage JSON-LD automáticamente.
   */
  faq?: FaqItem[];
}

// ─── Re-exports de cada config individual ────────────────────────────────────
export { cotizadorIndustrial } from "./cotizador-industrial";
export { cotizadorMueblesMedida } from "./cotizador-muebles-medida";
export { automatizarVentasB2b } from "./automatizar-ventas-b2b";
export { reemplazarExcelCotizaciones } from "./reemplazar-excel-cotizaciones";
export { whatsappVentasEmpresa } from "./whatsapp-ventas-empresa";
export { landingMedicaParaguay } from "./landing-medica-paraguay";

// ─── Colección completa (usada por generateStaticParams y sitemap) ────────────
import { cotizadorIndustrial } from "./cotizador-industrial";
import { cotizadorMueblesMedida } from "./cotizador-muebles-medida";
import { automatizarVentasB2b } from "./automatizar-ventas-b2b";
import { reemplazarExcelCotizaciones } from "./reemplazar-excel-cotizaciones";
import { whatsappVentasEmpresa } from "./whatsapp-ventas-empresa";
import { landingMedicaParaguay } from "./landing-medica-paraguay";

export const TODAS_SOLUCIONES: SolucionConfig[] = [
  cotizadorIndustrial,
  cotizadorMueblesMedida,
  automatizarVentasB2b,
  reemplazarExcelCotizaciones,
  whatsappVentasEmpresa,
  landingMedicaParaguay,
];
