import { SolucionConfig } from "./index";

export const cotizadorConstruccionParaguay: SolucionConfig = {
  slug: "cotizador-construccion-paraguay",
  metaTitle: "Cotizador para Empresas de Construcción en Paraguay | AYCweb",
  metaDescription:
    "Automatizá presupuestos de obra en Paraguay. Motor paramétrico para constructoras: materiales, mano de obra y márgenes calculados en minutos, no en días.",
  hero: {
    title: "Cotizador de Obra para Constructoras en Paraguay",
    subtitle:
      "Dejá de armar presupuestos a mano. Tu empresa emite cotizaciones en minutos con márgenes correctos y presentación profesional.",
  },
  problema: {
    title: "¿Por qué esto frena tu operación?",
    paragraphs: [
      "Una constructora en Paraguay puede perder hasta el 30% de sus licitaciones porque la cotización llegó tarde o con errores de cálculo. Cuando el presupuesto depende de una persona y una planilla de Excel, el cliente espera días.",
      "Cada error en precios de materiales o mano de obra se traduce en margen perdido. Y cuando el mercado cambia, actualizar listas manualmente es inviable.",
    ],
  },
  solucion: {
    title: "Cómo lo resolvemos",
    pasos: [
      {
        icono: "🏗️",
        titulo: "Relevamos tu catálogo de obra",
        descripcion:
          "Analizamos tus rubros: materiales, mano de obra, subcontratos y márgenes. Todo se centraliza en un motor de precios actualizable.",
      },
      {
        icono: "⚙️",
        titulo: "Construimos tu motor paramétrico",
        descripcion:
          "El sistema calcula automáticamente el presupuesto según dimensiones, materiales y condiciones. Sin que nadie toque números a mano.",
      },
      {
        icono: "📄",
        titulo: "Genera PDF profesional al instante",
        descripcion:
          "Cada cotización produce un PDF con tu marca, desglose técnico y totales. Listo para enviar al cliente en segundos.",
      },
      {
        icono: "📲",
        titulo: "Cierre por WhatsApp",
        descripcion:
          "El sistema genera un enlace directo a WhatsApp con el resumen del presupuesto. El cliente aprueba o consulta desde su celular.",
      },
    ],
  },
  casosRelacionados: ["metal-mad-modular-k"],
  faq: [
    {
      pregunta: "¿Puedo actualizar los precios de materiales yo mismo?",
      respuesta:
        "Sí. El sistema incluye un panel de administración donde podés actualizar precios, rendimientos y márgenes sin tocar código ni llamar a un programador.",
    },
    {
      pregunta: "¿Funciona para obras de diferente escala?",
      respuesta:
        "El motor es paramétrico: escala desde pequeñas refacciones hasta obras de gran envergadura. Configuramos las reglas según el tipo de proyecto de tu empresa.",
    },
  ],
};
