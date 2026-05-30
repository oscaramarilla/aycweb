import { SolucionConfig } from "./index";

export const cotizadorServiciosProfesionales: SolucionConfig = {
  slug: "cotizador-servicios-profesionales",
  metaTitle: "Cotizador de Servicios para Consultoras y Firmas en Paraguay | AYCweb",
  metaDescription:
    "Automatizá la cotización de servicios profesionales en Paraguay. Sistema paramétrico para consultoras, estudios y firmas que emite propuestas en minutos.",
  hero: {
    title: "Cotizador de Servicios Profesionales y Consultora",
    subtitle:
      "Emití propuestas comerciales en minutos, no en días. Standardizá tu proceso de cotización sin perder la personalización.",
  },
  problema: {
    title: "¿Por qué esto frena tu operación?",
    paragraphs: [
      "Las firmas de servicios profesionales en Paraguay dedican horas a armar propuestas que podrían generarse en minutos. Cada propuesta construida desde cero es tiempo que no se cobra.",
      "La falta de estandarización lleva a inconsistencias: dos vendedores cotizan el mismo servicio a precios distintos. Eso destruye la credibilidad frente al cliente.",
    ],
  },
  solucion: {
    title: "Cómo lo resolvemos",
    pasos: [
      {
        icono: "📋",
        titulo: "Relevamos tu catálogo de servicios",
        descripcion:
          "Documentamos cada servicio, sus variantes, tiempos estimados y estructura de precios. Todo queda en una base centralizada.",
      },
      {
        icono: "⚡",
        titulo: "Construimos el generador de propuestas",
        descripcion:
          "El sistema combina servicios, plazos y condiciones para generar una propuesta comercial profesional en segundos.",
      },
      {
        icono: "📄",
        titulo: "PDF listo para enviar",
        descripcion:
          "La propuesta sale en PDF con tu marca, alcance, plazos, precios y condiciones de contratación.",
      },
      {
        icono: "✅",
        titulo: "Aprobación digital del cliente",
        descripcion:
          "El cliente puede aprobar la propuesta por WhatsApp o formulario, iniciando el proceso de onboarding automáticamente.",
      },
    ],
  },
  casosRelacionados: [],
  faq: [
    {
      pregunta: "¿El sistema me permite personalizar cada propuesta?",
      respuesta:
        "Sí. El sistema tiene una base estandarizada pero permite agregar notas, ajustar plazos o incluir condiciones especiales para cada cliente.",
    },
    {
      pregunta: "¿Puedo tener diferentes modelos de propuesta para diferentes servicios?",
      respuesta:
        "Absolutamente. Configuramos plantillas por tipo de servicio: consultoría puntual, proyectos de largo plazo, retainers mensuales y más.",
    },
  ],
};
