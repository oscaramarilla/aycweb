
import { AYCWEB_CONTACT } from "@/lib/config/contact";

export function buildWhatsappUrl(clientName: string, service: string, amount: number, clientKey?: string): string {
  const whatsappNumber = AYCWEB_CONTACT.whatsappNumber;
  let message = `¡Hola ${clientName}! Queríamos contarte sobre tu cotización para el servicio de ${service} por un monto de Gs. ${amount.toLocaleString("es-PY")}. ¡Contáctanos para más detalles!`;

  if (clientKey && AYCWEB_CONTACT.clientMessages && AYCWEB_CONTACT.clientMessages[clientKey] && AYCWEB_CONTACT.clientMessages[clientKey]["quoteMessage"]) {
    message = AYCWEB_CONTACT.clientMessages[clientKey]["quoteMessage"]
      .replace("{clientName}", clientName)
      .replace("{service}", service)
      .replace("{amount}", amount.toLocaleString("es-PY"));
  }

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
}
