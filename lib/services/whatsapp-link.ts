// ============================================================
// SERVICIO: Construcción de links de WhatsApp
// ============================================================
// Es el ÚNICO punto del repo que construye https://wa.me/ links.
// Valida que el número nunca esté vacío antes de armar la URL.
// ============================================================

import { WHATSAPP_NUMBER } from "@/lib/config/contacto";

/**
 * Construye un link de WhatsApp con mensaje pre-cargado.
 *
 * @param text    - Texto del mensaje (sin encodear)
 * @param number  - Número de destino (sin +). Por defecto usa WHATSAPP_NUMBER.
 * @returns       - URL completa https://wa.me/{number}?text={encoded}
 *
 * @throws Error en development si `number` está vacío.
 *         En production loguea el error y usa WHATSAPP_NUMBER como fallback.
 */
export function buildWhatsAppLink(text: string, number?: string): string {
  const resolvedNumber = (number ?? WHATSAPP_NUMBER).trim();

  if (!resolvedNumber) {
    const msg =
      "[buildWhatsAppLink] El número de WhatsApp está vacío. " +
      "Verificá WHATSAPP_NUMBER en lib/config/contacto.ts y la variable de entorno WHATSAPP_NUMBER.";

    if (process.env.NODE_ENV === "development") {
      throw new Error(msg);
    } else {
      // En producción: log + fallback al hardcode del config
      console.error(msg);
      return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    }
  }

  return `https://wa.me/${resolvedNumber}?text=${encodeURIComponent(text)}`;
}
