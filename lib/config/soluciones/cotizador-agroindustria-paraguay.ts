import { SolucionConfig } from "./index";

export const cotizadorAgroindustriaParaguay: SolucionConfig = {
  slug: "cotizador-agroindustria-paraguay",
  metaTitle: "Cotizador para Agroindustria y Agro en Paraguay | AYCweb",
  metaDescription:
    "Sistema de cotización automatizado para empresas del agro en Paraguay. Manejá precios de insumos, servicios y productos agroindustriales sin errores ni demoras.",
  hero: {
    title: "Cotizador Agroindustrial para Empresas del Agro en Paraguay",
    subtitle:
      "Centralizá precios de insumos y servicios. Emití cotizaciones al productor en minutos, desde campo o escritorio.",
  },
  problema: {
    title: "¿Por qué esto frena tu operación?",
    paragraphs: [
      "Las empresas agroindustriales en Paraguay manejan catálogos extensos con precios que fluctúan según la temporada, el volumen y el tipo de cliente. Cotizar a mano en ese contexto genera errores sistemáticos y demoras que cuestan ventas.",
      "El vendedor de campo no tiene acceso a los precios actualizados. El productor espera. Y cuando llega la respuesta, a veces los precios ya cambiaron.",
    ],
  },
  solucion: {
    title: "Cómo lo resolvemos",
    pasos: [
      {
        icono: "🌾",
        titulo: "Centralizamos tu catálogo de productos",
        descripcion:
          "Insumos, semillas, agroquímicos, servicios de maquinaria: todo queda en una base actualizable con un clic.",
      },
      {
        icono: "📊",
        titulo: "Motor de precios por volumen y cliente",
        descripcion:
          "Configuramos reglas de descuento por volumen, tipo de productor y condición de pago. El sistema calcula el precio correcto automáticamente.",
      },
      {
        icono: "📄",
        titulo: "Cotización y remito en PDF",
        descripcion:
          "El vendedor genera el documento en segundos desde su celular o computadora, con la marca de tu empresa.",
      },
      {
        icono: "📲",
        titulo: "Confirmación por WhatsApp al productor",
        descripcion:
          "El productor recibe el resumen y puede confirmar el pedido directamente, cerrando el circuito sin intermediarios.",
      },
    ],
  },
  casosRelacionados: ["oriplast-mobiliario-escolar"],
  faq: [
    {
      pregunta: "¿El sistema puede manejar precios en USD y PYG al mismo tiempo?",
      respuesta:
        "Sí. Configuramos el sistema para operar en múltiples monedas con tipo de cambio actualizable desde el panel de administración.",
    },
    {
      pregunta: "¿Puede usarlo mi equipo de ventas desde el campo?",
      respuesta:
        "El sistema es web-responsive y funciona desde cualquier dispositivo con conexión. Tu vendedor puede cotizar desde el establecimiento del productor.",
    },
  ],
};
