// ============================================================
// FUENTE ÚNICA DE VERDAD: Número y mensajes de WhatsApp AYCweb
// ============================================================
// Regla: NADIE hardcodea "595985864209" fuera de este archivo.
// Regla: NADIE arma https://wa.me/ fuera de whatsapp-link.ts.
// ============================================================

/** Número de destino WhatsApp (sin +, sin espacios, con código de país). */
export const WHATSAPP_NUMBER = "595985864209";

// ============================================================
// DIAGNÓSTICO COMERCIAL EXPRESS
// ============================================================

/**
 * Datos del formulario de Diagnóstico Comercial Express.
 * Esta interface es la fuente única de verdad del shape del formulario.
 */
export interface DiagnosticoFormData {
  empresa: string;
  sector: string;
  tamanoEquipo: string;
  cuelloBottella: string;
  stackActual: string;
  /** Número completo con prefijo país, ej: +59598XXXXXXX */
  whatsapp: string;
}

/**
 * Serializa los datos del diagnóstico en un mensaje de WhatsApp formateado.
 * Devuelve el texto plano (sin encodear) — buildWhatsAppLink lo encodea.
 *
 * @example
 * const msg = DIAGNOSTICO_COMERCIAL_TEMPLATE({ empresa: "Acme", ... });
 * const url = buildWhatsAppLink(msg, WHATSAPP_NUMBER);
 */
export function DIAGNOSTICO_COMERCIAL_TEMPLATE(
  data: DiagnosticoFormData
): string {
  return [
    `🏢 *Diagnóstico Comercial Express – AYCweb*`,
    ``,
    `📌 *Empresa:* ${data.empresa}`,
    `🏭 *Sector:* ${data.sector}`,
    `👥 *Equipo comercial:* ${data.tamanoEquipo} personas`,
    `🚧 *Cuello de botella:* ${data.cuelloBottella}`,
    `💻 *Stack actual:* ${data.stackActual}`,
    `📱 *WhatsApp del responsable:* ${data.whatsapp}`,
    ``,
    `Solicito un diagnóstico comercial personalizado para mi empresa.`,
  ].join("\n");
}

/**
 * Mensajes pre-armados por contexto de página.
 * Todos son strings simples (sin encodear) — buildWhatsAppLink los encodea.
 */
export const DEFAULT_WHATSAPP_TEXT = {
  home: "Hola Oscar. Quiero agendar una Auditoría B2B para mi operación.",

  empresas:
    "Hola Oscar. Estoy viendo AYCweb/empresas y quiero agendar una Auditoría B2B para sistematizar mi operación.",

  profesionales:
    "Hola Oscar. Estoy en AYCweb/profesionales y quiero información sobre cómo captar más clientes con un sistema propio.",

  obras:
    "Hola Oscar. Vi los casos en AYCweb/obras y me interesa hablar sobre un sistema similar para mi empresa.",

  recursos:
    "Hola Oscar. Leí los recursos y quiero agendar una Auditoría B2B.",

  demoCotizador:
    "Hola Oscar. Quiero agendar una Auditoría B2B para mi operación.",

  general:
    "¡Hola! Estoy en la web de AYC y busco agendar un diagnóstico para sistematizar mi negocio.",

  auditB2B: "Hola Oscar, quiero agendar una Auditoría B2B.",
} as const;

export type WhatsAppContext = keyof typeof DEFAULT_WHATSAPP_TEXT;
