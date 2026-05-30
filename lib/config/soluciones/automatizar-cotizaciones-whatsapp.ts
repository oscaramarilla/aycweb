import { SolucionConfig } from "./index";

export const automatizarCotizacionesWhatsapp: SolucionConfig = {
  slug: "automatizar-cotizaciones-whatsapp",
  metaTitle: "Automatizar Cotizaciones por WhatsApp para Empresas | AYCweb",
  metaDescription:
    "Automatizá el proceso de cotización por WhatsApp. Tu empresa responde pedidos de precio al instante, con PDF automático y sin intervención manual.",
  hero: {
    title: "Cotizaciones Automáticas por WhatsApp",
    subtitle:
      "El cliente escribe por WhatsApp, tu sistema cotiza y responde. Sin que nadie tenga que intervenir manualmente.",
  },
  problema: {
    title: "¿Por qué esto frena tu operación?",
    paragraphs: [
      "El 80% de las consultas comerciales en Paraguay llegan por WhatsApp. El problema es que responder cada una requiere que un vendedor busque precios, calcule y escriba la respuesta manualmente. Eso no escala.",
      "Cuando el equipo está ocupado, las consultas se acumulan. El cliente espera, pierde el interés y cierra con la competencia. Y nadie registra cuántos clientes se perdieron por demora.",
    ],
  },
  solucion: {
    title: "Cómo lo resolvemos",
    pasos: [
      {
        icono: "📲",
        titulo: "Conectamos WhatsApp Business a tu sistema",
        descripcion:
          "Integramos tu número de WhatsApp Business con el motor de cotización para que los pedidos entren al flujo automático.",
      },
      {
        icono: "⚙️",
        titulo: "Motor de cotización integrado",
        descripcion:
          "El sistema recibe el pedido, identifica el producto o servicio y calcula el precio según tus reglas de negocio.",
      },
      {
        icono: "📄",
        titulo: "Respuesta automática con PDF",
        descripcion:
          "El cliente recibe en segundos la cotización formal en PDF con el detalle de lo que pidió.",
      },
      {
        icono: "✅",
        titulo: "Aprobación en un clic",
        descripcion:
          "El cliente aprueba el presupuesto desde WhatsApp. El equipo lo recibe como pedido confirmado para procesar.",
      },
    ],
  },
  casosRelacionados: ["oriplast-mobiliario-escolar", "metal-mad-modular-k"],
  faq: [
    {
      pregunta: "¿El sistema puede manejar múltiples vendedores en el mismo número?",
      respuesta:
        "Sí. Configuramos el sistema para que las consultas se distribuyan al equipo o se manejen desde un panel centralizado.",
    },
    {
      pregunta: "¿Qué pasa con los pedidos que son muy específicos o a medida?",
      respuesta:
        "El sistema maneja los casos estándar automáticamente. Los pedidos fuera de catálogo generan una alerta para que un vendedor los atienda personalmente.",
    },
  ],
};
