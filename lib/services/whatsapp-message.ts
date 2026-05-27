// ============================================================
// SERVICIO: Construcción de mensajes WhatsApp para AYCweb
// ============================================================
// Toda la lógica de serialización de objetos → mensaje WA.
// El número SIEMPRE se lee desde lib/config/contacto.ts (WHATSAPP_NUMBER).
// El template del mensaje vive en lib/config/contacto.ts
// (DIAGNOSTICO_COMERCIAL_TEMPLATE) — fuente única de verdad.
// ============================================================

import {
  WHATSAPP_NUMBER,
  DIAGNOSTICO_COMERCIAL_TEMPLATE,
  type DiagnosticoFormData,
} from "@/lib/config/contacto";
import { buildWhatsAppLink } from "@/lib/services/whatsapp-link";

/**
 * Alias de retrocompatibilidad: DiagnosticoData → DiagnosticoFormData.
 * El shape es idéntico; usar DiagnosticoFormData en código nuevo.
 */
export type DiagnosticoData = DiagnosticoFormData;

/**
 * Serializa los datos del diagnóstico en un mensaje de WhatsApp formateado.
 * Devuelve el texto plano (sin encodear).
 * Delega a DIAGNOSTICO_COMERCIAL_TEMPLATE — fuente única de verdad del mensaje.
 */
export function buildDiagnosticoMessage(data: DiagnosticoFormData): string {
  return DIAGNOSTICO_COMERCIAL_TEMPLATE(data);
}

/**
 * Construye la URL completa de wa.me con el mensaje del diagnóstico pre-cargado.
 * El número de destino se lee SIEMPRE desde WHATSAPP_NUMBER en contacto.ts.
 */
export function buildDiagnosticoWaUrl(data: DiagnosticoFormData): string {
  return buildWhatsAppLink(DIAGNOSTICO_COMERCIAL_TEMPLATE(data), WHATSAPP_NUMBER);
}
