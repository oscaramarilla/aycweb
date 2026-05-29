// ============================================================
// SERVICIO: Construcción de mensajes WhatsApp para AYCweb
// ============================================================
// Toda la lógica de serialización de objetos → mensaje WA.
// El número SIEMPRE se lee desde lib/config/contacto.ts (WHATSAPP_NUMBER).
// ============================================================

import {
  WHATSAPP_NUMBER,
  buildMensajeDiagnostico,
  type DiagnosticoFormData,
} from "@/lib/config/contacto";
import { buildWhatsAppLink } from "@/lib/services/whatsapp-link";

/**
 * Alias de retrocompatibilidad: DiagnosticoData → DiagnosticoFormData.
 * El shape es idéntico; usar DiagnosticoFormData en código nuevo.
 */
export type DiagnosticoData = DiagnosticoFormData;

/**
 * Serializa los datos del diagnóstico en un mensaje de WhatsApp formateado,
 * en el idioma indicado.
 * Devuelve el texto plano (sin encodear).
 */
export function buildDiagnosticoMessage(data: DiagnosticoFormData, lang: string = "es"): string {
  return buildMensajeDiagnostico(lang, data);
}

/**
 * Construye la URL completa de wa.me con el mensaje del diagnóstico pre-cargado,
 * en el idioma del prospecto.
 * El número de destino se lee SIEMPRE desde WHATSAPP_NUMBER en contacto.ts.
 */
export function buildDiagnosticoWaUrl(data: DiagnosticoFormData, lang: string = "es"): string {
  return buildWhatsAppLink(buildMensajeDiagnostico(lang, data), WHATSAPP_NUMBER);
}