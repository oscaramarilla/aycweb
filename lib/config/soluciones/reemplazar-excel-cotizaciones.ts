import { SolucionConfig } from "./index";

export const reemplazarExcelCotizaciones: SolucionConfig = {
  slug: "reemplazar-excel-cotizaciones",
  metaTitle: "Reemplazar Excel para Cotizaciones | AYCweb",
  metaDescription:
    "Dejá de cotizar con Excel. Pasá a un sistema profesional que reduce errores, acelera respuestas y da imagen de empresa seria.",
  hero: {
    title: "Reemplazá el Excel por un Sistema de Cotizaciones Profesional",
    subtitle:
      "El Excel fue útil al principio, pero tu empresa ya lo superó. Es hora de un sistema que crezca con vos.",
  },
  problema: {
    title: "¿Por qué esto frena tu operación?",
    paragraphs: [
      "Cotizar con Excel genera errores, dependencia de una persona, dificultad para actualizar precios y una imagen poco profesional.",
      "Cuando el negocio crece, el Excel se convierte en un freno: no es multiusuario, no genera PDFs y cualquier cambio puede romper las fórmulas.",
    ],
  },
  solucion: {
    title: "Cómo lo resolvemos",
    pasos: [
      {
        icono: "📊",
        titulo: "Migramos tu Excel actual",
        descripcion:
          "Analizamos tus planillas, fórmulas y listas de precios para replicar la lógica en un sistema robusto.",
      },
      {
        icono: "🛠️",
        titulo: "Construimos el sistema a medida",
        descripcion:
          "Desarrollamos un cotizador web que cualquier miembro del equipo puede usar sin riesgo de arruinar fórmulas.",
      },
      {
        icono: "📄",
        titulo: "Generamos PDFs profesionales",
        descripcion:
          "Cada cotización produce un documento con tu marca, datos del cliente y desglose de precios listo para enviar.",
      },
      {
        icono: "🎓",
        titulo: "Capacitamos a tu equipo",
        descripcion:
          "Acompañamos la adopción con capacitación y soporte para que el equipo adopte el nuevo sistema sin fricciones.",
      },
    ],
  },
  casosRelacionados: [],
  faq: [
    {
      pregunta: "¿Perdemos los datos del Excel al migrar?",
      respuesta:
        "No. Migramos todo el historial de productos, precios y clientes al nuevo sistema durante la implementación.",
    },
    {
      pregunta: "¿Varios usuarios pueden usar el sistema a la vez?",
      respuesta:
        "Sí, el sistema es multiusuario con roles y permisos, a diferencia del Excel que solo lo puede abrir una persona a la vez.",
    },
  ],
};
