import { SolucionConfig } from "./index";

export const softwareCotizacionParaguay: SolucionConfig = {
  slug: "software-cotizacion-paraguay",
  metaTitle: "Software de Cotización para Empresas en Paraguay | AYCweb",
  metaDescription:
    "Software de cotización a medida para empresas en Paraguay. Motor paramétrico, PDF automático y envío por WhatsApp. Más rápido y preciso que cualquier planilla.",
  hero: {
    title: "Software de Cotización a Medida para Empresas",
    subtitle:
      "Tu empresa emite cotizaciones precisas en minutos. No un software genérico: un sistema construido para las reglas de tu negocio.",
  },
  problema: {
    title: "¿Por qué esto frena tu operación?",
    paragraphs: [
      "Los softwares de cotización genéricos del mercado están pensados para procesos estándar. Cuando tu empresa tiene reglas de precio específicas — descuentos por volumen, precios por cliente, variables de servicio — ningún software genérico las maneja correctamente.",
      "El resultado es que las empresas terminan usando Excel de todas formas, o haciendo ajustes manuales sobre el software que 'casi' funciona. Eso genera errores y lentitud que tienen costo real.",
    ],
  },
  solucion: {
    title: "Cómo lo resolvemos",
    pasos: [
      {
        icono: "🔍",
        titulo: "Relevamos las reglas de tu negocio",
        descripcion:
          "Documentamos tus fórmulas de precio, condiciones especiales, descuentos y variables. Todo lo que hoy vive en la cabeza de alguien.",
      },
      {
        icono: "⚙️",
        titulo: "Motor de cotización a medida",
        descripcion:
          "Programamos exactamente las reglas de tu negocio. El sistema calcula lo que calculás vos, pero en segundos y sin errores.",
      },
      {
        icono: "📄",
        titulo: "PDF profesional automático",
        descripcion:
          "Cada cotización genera un documento con tu marca y el desglose correcto. El cliente lo recibe por WhatsApp o email.",
      },
      {
        icono: "🔄",
        titulo: "Actualización de precios sin programador",
        descripcion:
          "Panel de administración para actualizar listas de precios, márgenes y condiciones. Sin depender de nadie técnico.",
      },
    ],
  },
  casosRelacionados: ["oriplast-mobiliario-escolar"],
  faq: [
    {
      pregunta: "¿En qué se diferencia de un software de cotización genérico?",
      respuesta:
        "Un software genérico te obliga a adaptar tu proceso al sistema. Nuestro sistema se adapta exactamente al proceso de tu empresa. Sin workarounds ni hojas de cálculo adicionales.",
    },
    {
      pregunta: "¿Puede manejar productos y servicios al mismo tiempo?",
      respuesta:
        "Sí. El motor puede calcular combinaciones de productos físicos, servicios, instalaciones y costos adicionales en la misma cotización.",
    },
  ],
};
