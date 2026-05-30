import { SolucionConfig } from "./index";

export const crmLigeroEmpresaParaguay: SolucionConfig = {
  slug: "crm-ligero-empresa-paraguay",
  metaTitle: "CRM Simple y Liviano para PYME en Paraguay | AYCweb",
  metaDescription:
    "CRM a medida para PYMES en Paraguay. Más simple que HubSpot, más adaptado que cualquier herramienta genérica. Tu equipo lo usa porque funciona para tu proceso.",
  hero: {
    title: "CRM Ligero a Medida para tu Empresa",
    subtitle:
      "El CRM que tu equipo va a usar de verdad. Sin formularios infinitos ni funciones que nadie necesita.",
  },
  problema: {
    title: "¿Por qué esto frena tu operación?",
    paragraphs: [
      "Las PYMES paraguayas prueban HubSpot, Salesforce u otros CRMs genéricos y terminan sin adoptarlos. Son demasiado complejos, tienen demasiadas funciones innecesarias y no encajan con el proceso real del equipo de ventas.",
      "El resultado es que el equipo vuelve a WhatsApp y Excel. El conocimiento de los clientes sigue siendo personal e intransferible. Y cuando alguien se va, la empresa pierde el historial.",
    ],
  },
  solucion: {
    title: "Cómo lo resolvemos",
    pasos: [
      {
        icono: "👥",
        titulo: "Diseñamos el CRM para tu proceso",
        descripcion:
          "Relevamos cómo trabaja tu equipo de ventas hoy y construimos el sistema con exactamente las funciones que necesitás.",
      },
      {
        icono: "📋",
        titulo: "Ficha de cliente centralizada",
        descripcion:
          "Datos de contacto, historial de cotizaciones, notas y próximos pasos. Todo accesible para todo el equipo.",
      },
      {
        icono: "🔔",
        titulo: "Recordatorios de seguimiento automáticos",
        descripcion:
          "El sistema avisa cuándo retomar el contacto. Ningún prospecto queda sin atención por olvido.",
      },
      {
        icono: "📊",
        titulo: "Reportes sin armarlos manualmente",
        descripcion:
          "Actividad del equipo, cotizaciones enviadas, clientes nuevos este mes. Sin exportar a Excel ni armar planillas.",
      },
    ],
  },
  casosRelacionados: ["metal-mad-modular-k"],
  faq: [
    {
      pregunta: "¿Puedo migrar los contactos que ya tengo en otro sistema?",
      respuesta:
        "Sí. Migramos los datos desde Excel, Google Sheets, HubSpot u otras fuentes en el proceso de implementación.",
    },
    {
      pregunta: "¿El sistema puede integrarse con WhatsApp?",
      respuesta:
        "Sí. Configuramos la integración para que las conversaciones de WhatsApp queden registradas en la ficha del cliente automáticamente.",
    },
  ],
};
