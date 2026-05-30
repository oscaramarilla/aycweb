import { SolucionConfig } from "./index";

export const cotizadorFerreteriaMateriales: SolucionConfig = {
  slug: "cotizador-ferreteria-materiales",
  metaTitle: "Sistema de Cotizaciones para Ferretería y Materiales en Paraguay | AYCweb",
  metaDescription:
    "Cotizador digital para ferreterías y distribuidoras de materiales en Paraguay. Emití presupuestos por WhatsApp en minutos con precios siempre actualizados.",
  hero: {
    title: "Sistema de Cotizaciones para Ferretería y Materiales",
    subtitle:
      "El cliente pide precio por WhatsApp y recibe la cotización en minutos. Sin llamadas, sin esperas, sin errores.",
  },
  problema: {
    title: "¿Por qué esto frena tu operación?",
    paragraphs: [
      "En ferreterías y distribuidoras de materiales, el proceso de cotización suele ser el principal cuello de botella: el vendedor anota el pedido a mano, busca los precios en distintos archivos y calcula el total sin sistema.",
      "Cuando los precios cambian — y en Paraguay cambian seguido — la actualización manual no alcanza. El resultado es cotizaciones con márgenes incorrectos o clientes que reciben precios equivocados.",
    ],
  },
  solucion: {
    title: "Cómo lo resolvemos",
    pasos: [
      {
        icono: "🔧",
        titulo: "Centralizamos tu lista de precios",
        descripcion:
          "Todos tus materiales con unidades, categorías y márgenes viven en un sistema actualizable con un clic desde el panel.",
      },
      {
        icono: "⚡",
        titulo: "Cotizador rápido para el vendedor",
        descripcion:
          "El vendedor selecciona los ítems del pedido y el sistema calcula el total al instante, con los precios correctos.",
      },
      {
        icono: "📄",
        titulo: "Presupuesto en PDF o WhatsApp",
        descripcion:
          "El cliente recibe un presupuesto profesional por WhatsApp o descargable en PDF, con el desglose y el total final.",
      },
      {
        icono: "🔄",
        titulo: "Actualización de precios sin programador",
        descripcion:
          "Cuando cambian los precios del proveedor, tu equipo los actualiza desde el panel. En minutos, todos los presupuestos nuevos reflejan el cambio.",
      },
    ],
  },
  casosRelacionados: ["oriplast-mobiliario-escolar"],
  faq: [
    {
      pregunta: "¿El sistema puede manejar descuentos por volumen?",
      respuesta:
        "Sí. Configuramos reglas de descuento por cantidad, por cliente o por familia de productos según las políticas comerciales de tu ferretería.",
    },
    {
      pregunta: "¿Puede usarlo un vendedor sin conocimientos técnicos?",
      respuesta:
        "El sistema fue diseñado para ser operado por cualquier persona. La interfaz es simple: seleccionás productos, ingresás cantidades y obtenés el precio.",
    },
  ],
};
