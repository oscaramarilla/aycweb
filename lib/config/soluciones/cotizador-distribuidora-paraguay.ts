import { SolucionConfig } from "./index";

export const cotizadorDistribuidoraParaguay: SolucionConfig = {
  slug: "cotizador-distribuidora-paraguay",
  metaTitle: "Cotizador para Distribuidoras Mayoristas en Paraguay | AYCweb",
  metaDescription:
    "Sistema de cotización para distribuidoras en Paraguay. Manejá catálogos amplios, listas de precios por cliente y condiciones de pago desde un único panel.",
  hero: {
    title: "Cotizador Mayorista para Distribuidoras en Paraguay",
    subtitle:
      "Tu equipo de ventas emite cotizaciones correctas en segundos, sin depender de planillas ni de quien conoce los precios de memoria.",
  },
  problema: {
    title: "¿Por qué esto frena tu operación?",
    paragraphs: [
      "Las distribuidoras en Paraguay manejan cientos o miles de SKUs con múltiples listas de precios según el canal: mayorista, minorista, cliente especial. Cotizar a mano en ese contexto es imposible de escalar sin errores.",
      "El vendedor aplica el descuento equivocado, el cliente reclama, el margen se pierde. Y cuando cambian los precios, actualizar todas las planillas toma días.",
    ],
  },
  solucion: {
    title: "Cómo lo resolvemos",
    pasos: [
      {
        icono: "🗂️",
        titulo: "Migramos tu catálogo de productos",
        descripcion:
          "Todos tus SKUs, familias de producto y unidades de venta se cargan en un sistema centralizado y actualizable.",
      },
      {
        icono: "💰",
        titulo: "Listas de precio por segmento",
        descripcion:
          "Configuramos precios por canal: mayorista, minorista, cliente frecuente, cliente especial. El sistema aplica el precio correcto según el cliente.",
      },
      {
        icono: "📄",
        titulo: "Pedido y cotización en un paso",
        descripcion:
          "El vendedor selecciona los productos, el sistema calcula totales y genera el documento listo para aprobación.",
      },
      {
        icono: "📲",
        titulo: "Confirmación por WhatsApp",
        descripcion:
          "El cliente recibe el resumen y confirma el pedido. El equipo interno lo recibe con todos los datos para procesar.",
      },
    ],
  },
  casosRelacionados: ["oriplast-mobiliario-escolar"],
  faq: [
    {
      pregunta: "¿Cuántos productos puede manejar el sistema?",
      respuesta:
        "No hay límite técnico. Trabajamos con distribuidoras de catálogos de 500 a más de 5.000 productos activos.",
    },
    {
      pregunta: "¿Qué pasa cuando cambian los precios del proveedor?",
      respuesta:
        "El panel de administración permite actualizar precios individualmente o por importación masiva desde un archivo Excel o CSV.",
    },
  ],
};
