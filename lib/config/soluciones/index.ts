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
// Originales (6)
export { cotizadorIndustrial } from "./cotizador-industrial";
export { cotizadorMueblesMedida } from "./cotizador-muebles-medida";
export { automatizarVentasB2b } from "./automatizar-ventas-b2b";
export { reemplazarExcelCotizaciones } from "./reemplazar-excel-cotizaciones";
export { whatsappVentasEmpresa } from "./whatsapp-ventas-empresa";
export { landingMedicaParaguay } from "./landing-medica-paraguay";

// Cotizadores por sector (10)
export { cotizadorConstruccionParaguay } from "./cotizador-construccion-paraguay";
export { cotizadorLogisticaTransporte } from "./cotizador-logistica-transporte";
export { cotizadorServiciosProfesionales } from "./cotizador-servicios-profesionales";
export { cotizadorAgroindustriaParaguay } from "./cotizador-agroindustria-paraguay";
export { cotizadorDistribuidoraParaguay } from "./cotizador-distribuidora-paraguay";
export { cotizadorFerreteriaMateriales } from "./cotizador-ferreteria-materiales";
export { cotizadorMetalurgicaEstructuras } from "./cotizador-metalurgica-estructuras";
export { cotizadorCarpinteriaMadera } from "./cotizador-carpinteria-madera";
export { cotizadorImprentaGraficos } from "./cotizador-imprenta-graficos";
export { cotizadorElectricistaInstalaciones } from "./cotizador-electricista-instalaciones";

// Pain-point específico (8)
export { automatizarCotizacionesWhatsapp } from "./automatizar-cotizaciones-whatsapp";
export { generarPdfPresupuestoAutomatico } from "./generar-pdf-presupuesto-automatico";
export { dashboardOperativoEmpresa } from "./dashboard-operativo-empresa";
export { sistemaSeguimientoVentasParaguay } from "./sistema-seguimiento-ventas-paraguay";
export { eliminarExcelOperacionEmpresarial } from "./eliminar-excel-operacion-empresarial";
export { automatizarPropuestasComerciales } from "./automatizar-propuestas-comerciales";
export { sistemaGestionClientesPymes } from "./sistema-gestion-clientes-pymes";
export { pipelineVentasAutomatizado } from "./pipeline-ventas-automatizado";

// Landings para profesionales (7)
export { landingDentistaParaguay } from "./landing-dentista-paraguay";
export { landingAbogadoParaguay } from "./landing-abogado-paraguay";
export { landingArquitectoParaguay } from "./landing-arquitecto-paraguay";
export { landingPsicologoParaguay } from "./landing-psicologo-paraguay";
export { landingVeterinariaParaguay } from "./landing-veterinaria-paraguay";
export { landingNutricionistaParaguay } from "./landing-nutricionista-paraguay";
export { landingContadorParaguay } from "./landing-contador-paraguay";

// Infraestructura y transformación digital (9)
export { infraestructuraDigitalPymes } from "./infraestructura-digital-pymes";
export { transformacionDigitalEmpresaMediana } from "./transformacion-digital-empresa-mediana";
export { agenciaDigitalB2bParaguay } from "./agencia-digital-b2b-paraguay";
export { desarrolloWebEmpresasParaguay } from "./desarrollo-web-empresas-paraguay";
export { automatizacionEmpresarialParaguay } from "./automatizacion-empresarial-paraguay";
export { softwareCotizacionParaguay } from "./software-cotizacion-paraguay";
export { presupuestoAutomaticoEmpresa } from "./presupuesto-automatico-empresa";
export { whatsappBusinessEmpresaParaguay } from "./whatsapp-business-empresa-paraguay";
export { crmLigeroEmpresaParaguay } from "./crm-ligero-empresa-paraguay";

// ─── Colección completa (usada por generateStaticParams y sitemap) ────────────
import { cotizadorIndustrial } from "./cotizador-industrial";
import { cotizadorMueblesMedida } from "./cotizador-muebles-medida";
import { automatizarVentasB2b } from "./automatizar-ventas-b2b";
import { reemplazarExcelCotizaciones } from "./reemplazar-excel-cotizaciones";
import { whatsappVentasEmpresa } from "./whatsapp-ventas-empresa";
import { landingMedicaParaguay } from "./landing-medica-paraguay";

import { cotizadorConstruccionParaguay } from "./cotizador-construccion-paraguay";
import { cotizadorLogisticaTransporte } from "./cotizador-logistica-transporte";
import { cotizadorServiciosProfesionales } from "./cotizador-servicios-profesionales";
import { cotizadorAgroindustriaParaguay } from "./cotizador-agroindustria-paraguay";
import { cotizadorDistribuidoraParaguay } from "./cotizador-distribuidora-paraguay";
import { cotizadorFerreteriaMateriales } from "./cotizador-ferreteria-materiales";
import { cotizadorMetalurgicaEstructuras } from "./cotizador-metalurgica-estructuras";
import { cotizadorCarpinteriaMadera } from "./cotizador-carpinteria-madera";
import { cotizadorImprentaGraficos } from "./cotizador-imprenta-graficos";
import { cotizadorElectricistaInstalaciones } from "./cotizador-electricista-instalaciones";

import { automatizarCotizacionesWhatsapp } from "./automatizar-cotizaciones-whatsapp";
import { generarPdfPresupuestoAutomatico } from "./generar-pdf-presupuesto-automatico";
import { dashboardOperativoEmpresa } from "./dashboard-operativo-empresa";
import { sistemaSeguimientoVentasParaguay } from "./sistema-seguimiento-ventas-paraguay";
import { eliminarExcelOperacionEmpresarial } from "./eliminar-excel-operacion-empresarial";
import { automatizarPropuestasComerciales } from "./automatizar-propuestas-comerciales";
import { sistemaGestionClientesPymes } from "./sistema-gestion-clientes-pymes";
import { pipelineVentasAutomatizado } from "./pipeline-ventas-automatizado";

import { landingDentistaParaguay } from "./landing-dentista-paraguay";
import { landingAbogadoParaguay } from "./landing-abogado-paraguay";
import { landingArquitectoParaguay } from "./landing-arquitecto-paraguay";
import { landingPsicologoParaguay } from "./landing-psicologo-paraguay";
import { landingVeterinariaParaguay } from "./landing-veterinaria-paraguay";
import { landingNutricionistaParaguay } from "./landing-nutricionista-paraguay";
import { landingContadorParaguay } from "./landing-contador-paraguay";

import { infraestructuraDigitalPymes } from "./infraestructura-digital-pymes";
import { transformacionDigitalEmpresaMediana } from "./transformacion-digital-empresa-mediana";
import { agenciaDigitalB2bParaguay } from "./agencia-digital-b2b-paraguay";
import { desarrolloWebEmpresasParaguay } from "./desarrollo-web-empresas-paraguay";
import { automatizacionEmpresarialParaguay } from "./automatizacion-empresarial-paraguay";
import { softwareCotizacionParaguay } from "./software-cotizacion-paraguay";
import { presupuestoAutomaticoEmpresa } from "./presupuesto-automatico-empresa";
import { whatsappBusinessEmpresaParaguay } from "./whatsapp-business-empresa-paraguay";
import { crmLigeroEmpresaParaguay } from "./crm-ligero-empresa-paraguay";

export const TODAS_SOLUCIONES: SolucionConfig[] = [
  // Originales
  cotizadorIndustrial,
  cotizadorMueblesMedida,
  automatizarVentasB2b,
  reemplazarExcelCotizaciones,
  whatsappVentasEmpresa,
  landingMedicaParaguay,

  // Cotizadores por sector
  cotizadorConstruccionParaguay,
  cotizadorLogisticaTransporte,
  cotizadorServiciosProfesionales,
  cotizadorAgroindustriaParaguay,
  cotizadorDistribuidoraParaguay,
  cotizadorFerreteriaMateriales,
  cotizadorMetalurgicaEstructuras,
  cotizadorCarpinteriaMadera,
  cotizadorImprentaGraficos,
  cotizadorElectricistaInstalaciones,

  // Pain-point específico
  automatizarCotizacionesWhatsapp,
  generarPdfPresupuestoAutomatico,
  dashboardOperativoEmpresa,
  sistemaSeguimientoVentasParaguay,
  eliminarExcelOperacionEmpresarial,
  automatizarPropuestasComerciales,
  sistemaGestionClientesPymes,
  pipelineVentasAutomatizado,

  // Landings para profesionales
  landingDentistaParaguay,
  landingAbogadoParaguay,
  landingArquitectoParaguay,
  landingPsicologoParaguay,
  landingVeterinariaParaguay,
  landingNutricionistaParaguay,
  landingContadorParaguay,

  // Infraestructura y transformación digital
  infraestructuraDigitalPymes,
  transformacionDigitalEmpresaMediana,
  agenciaDigitalB2bParaguay,
  desarrolloWebEmpresasParaguay,
  automatizacionEmpresarialParaguay,
  softwareCotizacionParaguay,
  presupuestoAutomaticoEmpresa,
  whatsappBusinessEmpresaParaguay,
  crmLigeroEmpresaParaguay,
];
