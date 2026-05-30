import { SolucionConfig } from "./index";

export const sistemaGestionClientesPymes: SolucionConfig = {
  slug: "sistema-gestion-clientes-pymes",
  metaTitle: "Sistema de Gestión de Clientes para PYMES en Paraguay | AYCweb",
  metaDescription:
    "CRM simple a medida para PYMES en Paraguay. Controlá tus clientes, historial de compras y seguimiento comercial sin pagar por herramientas genéricas que nadie usa.",
  hero: {
    title: "Sistema de Gestión de Clientes para PYMES",
    subtitle:
      "El historial de cada cliente en un solo lugar. Tu equipo trabaja con información, no con memoria.",
  },
  problema: {
    title: "¿Por qué esto frena tu operación?",
    paragraphs: [
      "En la mayoría de las PYMES paraguayas, el conocimiento del cliente vive en la cabeza del vendedor que lo atendió. Cuando ese vendedor cambia, la empresa pierde el historial, las preferencias y el contexto de la relación.",
      "Los CRMs genéricos son complejos, costosos y terminan sin adoptarse. El equipo sigue usando WhatsApp y Excel. El resultado es una operación que no escala porque depende de personas específicas.",
    ],
  },
  solucion: {
    title: "Cómo lo resolvemos",
    pasos: [
      {
        icono: "👥",
        titulo: "Base de datos de clientes centralizada",
        descripcion:
          "Cada cliente con su historial de cotizaciones, compras, contactos y notas. Accesible para todo el equipo.",
      },
      {
        icono: "🔔",
        titulo: "Alertas de seguimiento automáticas",
        descripcion:
          "El sistema recuerda cuándo hacer el próximo contacto. Ningún cliente importante queda sin atención.",
      },
      {
        icono: "📊",
        titulo: "Reportes de actividad comercial",
        descripcion:
          "Cuántos clientes activos, cuántas cotizaciones enviadas, cuántas ganadas. Visibilidad del equipo sin preguntar.",
      },
      {
        icono: "🔗",
        titulo: "Integrado con WhatsApp y cotizaciones",
        descripcion:
          "Cada interacción queda registrada automáticamente. El historial se construye solo.",
      },
    ],
  },
  casosRelacionados: ["metal-mad-modular-k"],
  faq: [
    {
      pregunta: "¿Es más barato que HubSpot o Salesforce?",
      respuesta:
        "Para una PYME con 2 a 20 vendedores, un sistema a medida suele ser más económico a largo plazo y tiene una tasa de adopción mucho mayor porque se adapta exactamente al proceso del equipo.",
    },
    {
      pregunta: "¿Puedo migrar los contactos que ya tengo en otro sistema?",
      respuesta:
        "Sí. Incluimos la migración de datos desde Excel, Google Sheets, HubSpot u otras herramientas en el proceso de implementación.",
    },
  ],
};
