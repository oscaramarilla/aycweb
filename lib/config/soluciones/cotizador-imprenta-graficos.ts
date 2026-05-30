import { SolucionConfig } from "./index";

export const cotizadorImprentaGraficos: SolucionConfig = {
  slug: "cotizador-imprenta-graficos",
  metaTitle: "Cotizador para Imprenta y Diseño Gráfico en Paraguay | AYCweb",
  metaDescription:
    "Sistema de cotización automático para imprentas y estudios de diseño en Paraguay. El cliente ingresa las especificaciones y recibe el presupuesto al instante.",
  hero: {
    title: "Cotizador Online para Imprenta y Diseño Gráfico",
    subtitle:
      "El cliente configura su producto — cantidad, material, tamaño, acabado — y recibe el precio en segundos. Sin emails de ida y vuelta.",
  },
  problema: {
    title: "¿Por qué esto frena tu operación?",
    paragraphs: [
      "Las imprentas y estudios de diseño en Paraguay reciben decenas de consultas de precio por día. Responder cada una manualmente toma horas de trabajo administrativo que no genera valor.",
      "Las variables de precio son múltiples: tipo de papel, gramaje, formato, cantidad, plastificado, terminaciones. Sin un sistema, las cotizaciones son inconsistentes y el cliente que consulta en serio debe esperar.",
    ],
  },
  solucion: {
    title: "Cómo lo resolvemos",
    pasos: [
      {
        icono: "🖨️",
        titulo: "Configuramos tu catálogo de productos",
        descripcion:
          "Folletos, tarjetas, gigantografías, packaging: cada producto con sus opciones de tamaño, material y terminación.",
      },
      {
        icono: "⚙️",
        titulo: "Motor de precio por especificaciones",
        descripcion:
          "El cliente selecciona las especificaciones y el sistema calcula el precio en tiempo real, con los márgenes correctos.",
      },
      {
        icono: "📄",
        titulo: "Cotización formal automática",
        descripcion:
          "El cliente descarga o recibe por email la cotización con el detalle completo de lo que pidió.",
      },
      {
        icono: "📲",
        titulo: "Pedido confirmado por WhatsApp",
        descripcion:
          "Con un clic, el cliente inicia la orden de producción. El equipo la recibe con todos los datos sin intervención manual.",
      },
    ],
  },
  casosRelacionados: [],
  faq: [
    {
      pregunta: "¿El cotizador puede mostrar descuentos por cantidad?",
      respuesta:
        "Sí. Configuramos tablas de descuento progresivo: a mayor tiraje, menor precio unitario. El cliente lo ve en tiempo real mientras ajusta la cantidad.",
    },
    {
      pregunta: "¿Puede el cliente subir su arte directamente?",
      respuesta:
        "Podemos integrar un campo de carga de archivos para que el cliente adjunte su arte al mismo tiempo que confirma el pedido.",
    },
  ],
};
