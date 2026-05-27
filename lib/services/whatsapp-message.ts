// ============================================================
// SERVICIO: Construcción de mensajes WhatsApp para AYCweb
// Toda la lógica de serialización de objetos → mensaje WA.
// El número SIEMPRE se lee desde lib/config/contact.ts.
// ============================================================

import { buildWaLink } from "@/lib/config/contact";

/**
 * Datos del formulario de Diagnóstico Comercial Express.
 */
export interface DiagnosticoData {
  empresa: string;
  sector: string;
  tamanoEquipo: string;
  cuelloBottella: string;
  stackActual: string;
  whatsapp: string; // Número completo con prefijo, ej: +59598XXXXXXX
}

/**
 * Serializa los datos del diagnóstico en un mensaje de WhatsApp formateado.
 * Devuelve el texto plano (sin encodear).
 */
export function buildDiagnosticoMessage(data: DiagnosticoData): string {
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
 * Construye la URL completa de wa.me con el mensaje del diagnóstico pre-cargado.
 * El número de destino se lee SIEMPRE desde lib/config/contact.ts.
 */
export function buildDiagnosticoWaUrl(data: DiagnosticoData): string {
  return buildWaLink(buildDiagnosticoMessage(data));
}
