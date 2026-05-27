// ============================================================
// DATOS DE CONTACTO DE AYCweb (retrocompatibilidad)
// ============================================================
// IMPORTANTE: buildWaLink y AYCWEB_CONTACT.whatsappNumber ahora delegan
// a lib/config/contacto.ts + lib/services/whatsapp-link.ts.
// No hardcodees el número aquí — la fuente es WHATSAPP_NUMBER en contacto.ts.
// ============================================================

import { WHATSAPP_NUMBER } from "@/lib/config/contacto";
import { buildWhatsAppLink } from "@/lib/services/whatsapp-link";

export interface ContactInfo {
  whatsappNumber: string;
  waBaseUrl: string;
  email: string;
  globalMessages: {
    diagnosis: string;
    generalInquiry: string;
    auditB2B: string;
  };
  clientMessages?: {
    [key: string]: {
      [messageKey: string]: string;
    };
  };
}

export const AYCWEB_CONTACT: ContactInfo = {
  whatsappNumber: WHATSAPP_NUMBER,
  waBaseUrl: `https://wa.me/${WHATSAPP_NUMBER}`,
  email: "hola@aycweb.com",
  globalMessages: {
    diagnosis:
      "¡Hola Oscar! Quiero mostrarles el cuello de botella actual de mi empresa para ver qué sistema operativo me recomiendan construir.",
    generalInquiry:
      "¡Hola! Estoy en la web de AYC y busco agendar un diagnóstico para sistematizar mi negocio.",
    auditB2B:
      "Hola Oscar, quiero agendar una Auditoría B2B.",
  },
  clientMessages: {
    aycweb: {
      enterprisePlan: "Hola! Busco un sistema a medida (Plan Enterprise).",
    },
    mascotasPir: {
      premiumClient: "¡Hola Oscar! Me interesa el servicio premium de MascotasPir.",
      quotation: "¡Hola! Me interesa cotizar una Casa para Mascotas Premium con Paneles PIR.",
    },
    metalMad: {
      b2bClient: "¡Hola! Soy un cliente B2B de MetalMad y quiero cotizar un proyecto.",
    },
    modularesKingspan: {
      b2bClient: "¡Hola! Soy un cliente B2B de Modulares Kingspan y quiero una cotización.",
      quotation: "¡Hola! Quiero solicitar un presupuesto por m2 para Oficinas Modulares Kingspan.",
    },
    motorLogistico: {
      internationalLogistics: "¡Hola! Me interesa el Motor Logístico Internacional.",
    },
    motorSaas: {
      saasClient: "¡Hola! Me interesa el Motor SaaS para mi empresa.",
    },
    sos: {
      basicPlan:
        "¡Hola Oscar! Quiero suscribirme al plan AYCweb OS Básico (USD $50/mes) para sistematizar mi empresa.",
      proPlan:
        "¡Hola Oscar! Quiero el plan AYCweb OS Pro (USD $100/mes) con dashboard y automatizaciones avanzadas.",
    },
    os: {
      planInquiry:
        "Hola Oscar. Estoy en aycweb.com/os y quiero que me asesores sobre cuál plan me conviene.",
    },
  },
};

/**
 * Genera un link de WhatsApp con mensaje pre-armado.
 * Delega a buildWhatsAppLink para garantizar que el número nunca esté vacío.
 * @param message - Texto del mensaje (sin encodear)
 * @returns URL completa de wa.me
 */
export function buildWaLink(message: string): string {
  return buildWhatsAppLink(message);
}
