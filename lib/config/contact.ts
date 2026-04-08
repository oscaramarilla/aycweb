export interface ContactInfo {
  whatsappNumber: string;
  globalMessages: {
    diagnosis: string;
    generalInquiry: string;
    // Add more global messages as needed
  };
  clientMessages?: {
    [key: string]: {
      // Specific messages for each client/vertical
      [messageKey: string]: string;
    };
  };
}

export const AYCWEB_CONTACT: ContactInfo = {
  whatsappNumber: "595985864209", // Main AYCweb WhatsApp number
  globalMessages: {
    diagnosis: "¡Hola Oscar! Quiero mostrarles el cuello de botella actual de mi empresa para ver qué sistema operativo me recomiendan construir.",
    generalInquiry: "¡Hola! Estoy en la web de AYC y busco agendar un diagnóstico para sistematizar mi negocio.",
    // Add more global messages here
  },
  clientMessages: {
    "aycweb": { // Example for AYCweb specific messages
        "enterprisePlan": "Hola! Busco un sistema a medida (Plan Enterprise)."
    },
    "mascotasPir": {
      "premiumClient": "¡Hola Oscar! Me interesa el servicio premium de MascotasPir.",
      "quotation": "¡Hola! Me interesa cotizar una Casa para Mascotas Premium con Paneles PIR.",
      // ... other messages for MascotasPir
    },
    "metalMad": {
        "b2bClient": "¡Hola! Soy un cliente B2B de MetalMad y quiero cotizar un proyecto."
    },
    "modularesKingspan": {
        "b2bClient": "¡Hola! Soy un cliente B2B de Modulares Kingspan y quiero una cotización.",
        "quotation": "¡Hola! Quiero solicitar un presupuesto por m2 para Oficinas Modulares Kingspan."
    },
    "motorLogistico": {
        "internationalLogistics": "¡Hola! Me interesa el Motor Logístico Internacional."
    },
    "motorSaas": {
        "saasClient": "¡Hola! Me interesa el Motor SaaS para mi empresa."
    },
    "sos": {
        "basicPlan": "¡Hola Oscar! Quiero suscribirme al plan AYCweb OS Básico (USD $50/mes) para sistematizar mi empresa.",
        "proPlan": "¡Hola Oscar! Quiero el plan AYCweb OS Pro (USD $100/mes) con dashboard y automatizaciones avanzadas."
    },
    "os": {
        "planInquiry": "Hola Oscar. Estoy en aycweb.com/os y quiero que me asesores sobre cuál plan me conviene."
    }
  }
};