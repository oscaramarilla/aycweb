
import { ModularesKingspanConfig } from "@/lib/config/client";

export function buildWhatsappUrl(clientName: string, service: string, amount: number): string {
  const { contact } = ModularesKingspanConfig;
  const message = `¡Hola ${clientName}! Queríamos contarte sobre tu cotización para el servicio de ${service} por un monto de Gs. ${amount.toLocaleString("es-PY")}. ¡Contáctanos para más detalles!`;
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${contact?.whatsappNumber || "595985864209"} ?text=${encodedMessage}`;
}
