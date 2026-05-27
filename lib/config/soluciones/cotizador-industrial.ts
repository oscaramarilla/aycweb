import { SolucionConfig } from "./index";

export const cotizadorIndustrial: SolucionConfig = {
  slug: "cotizador-industrial",
  metaTitle: "Cotizador Industrial Online | AYCweb",
  metaDescription:
    "Automatizá las cotizaciones de tu empresa industrial. Reducí errores, acelerá respuestas y cerrá más ventas con un cotizador digital a medida.",
  hero: {
    title: "Cotizador Industrial a Medida",
    subtitle:
      "Dejá de perder ventas por cotizaciones lentas o con errores. Automatizá el proceso y respondé en minutos.",
  },
  problema: {
    title: "¿Por qué esto frena tu operación?",
    paragraphs: [
      "Las empresas industriales pierden oportunidades de venta porque sus cotizaciones demoran días, tienen errores de cálculo o dependen de una sola persona.",
      "Un cotizador digital resuelve esto de raíz: precios automáticos, propuestas instantáneas y cero dependencia de personas clave.",
    ],
  },
  solucion: {
    title: "Cómo lo resolvemos",
    pasos: [
      {
        icono: "🔍",
        titulo: "Relevamos tu proceso actual",
        descripcion:
          "Analizamos cómo cotizás hoy: fórmulas, variables de precio, listas de productos y flujo de aprobación.",
      },
      {
        icono: "⚙️",
        titulo: "Construimos tu motor de cotización",
        descripcion:
          "Desarrollamos la lógica de negocio en un sistema digital que calcula precios automáticamente según tus reglas.",
      },
      {
        icono: "🔗",
        titulo: "Integramos con tu operación",
        descripcion:
          "Conectamos el cotizador con tu CRM, WhatsApp o email para que cada cotización llegue al cliente sin intervención manual.",
      },
      {
        icono: "📊",
        titulo: "Medimos y optimizamos",
        descripcion:
          "Seguimos las métricas de conversión y ajustamos el sistema para mejorar continuamente la tasa de cierre.",
      },
    ],
  },
  casosRelacionados: [],
  faq: [
    {
      pregunta: "¿Cuánto tarda en estar listo el cotizador?",
      respuesta:
        "Depende de la complejidad de tu catálogo, pero generalmente entregamos un primer prototipo funcional en 2 a 4 semanas.",
    },
    {
      pregunta: "¿Puedo actualizar los precios yo mismo?",
      respuesta:
        "Sí. El sistema incluye un panel de administración donde podés actualizar precios, descuentos y productos sin necesidad de un programador.",
    },
  ],
};
