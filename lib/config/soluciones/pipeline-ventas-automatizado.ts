import { SolucionConfig } from "./index";

export const pipelineVentasAutomatizado: SolucionConfig = {
  slug: "pipeline-ventas-automatizado",
  metaTitle: "Pipeline de Ventas Automatizado para Empresa en Paraguay | AYCweb",
  metaDescription:
    "Automatizá tu pipeline de ventas en Paraguay. Desde el primer contacto hasta el cierre, con seguimiento automático, cotizaciones integradas y visibilidad total.",
  hero: {
    title: "Pipeline de Ventas Automatizado",
    subtitle:
      "El prospecto entra, el sistema lo mueve. Tu equipo se concentra en vender, no en administrar el proceso.",
  },
  problema: {
    title: "¿Por qué esto frena tu operación?",
    paragraphs: [
      "Un pipeline de ventas sin automatización es una lista de tareas que nadie tiene tiempo de ejecutar. El prospecto llega, el vendedor lo atiende bien, pero después nadie hace el seguimiento porque no hay un sistema que lo recuerde.",
      "El resultado es una tasa de conversión baja no por falta de interés del cliente, sino por falta de un proceso que mueva las oportunidades de etapa en etapa sin depender de la memoria del vendedor.",
    ],
  },
  solucion: {
    title: "Cómo lo resolvemos",
    pasos: [
      {
        icono: "🎯",
        titulo: "Diseñamos tu proceso de venta",
        descripcion:
          "Mapeamos las etapas reales de tu ciclo comercial: primer contacto, diagnóstico, cotización, seguimiento, cierre.",
      },
      {
        icono: "⚙️",
        titulo: "Automatizamos el movimiento entre etapas",
        descripcion:
          "Cuando se envía una cotización, el prospecto avanza automáticamente. El sistema programa el próximo seguimiento sin intervención manual.",
      },
      {
        icono: "🔔",
        titulo: "Alertas y recordatorios al vendedor",
        descripcion:
          "Cada mañana el vendedor sabe exactamente qué prospectos necesitan atención ese día.",
      },
      {
        icono: "📊",
        titulo: "Métricas del pipeline en tiempo real",
        descripcion:
          "Valor total del pipeline, tasa de conversión por etapa, tiempo promedio de cierre. Sin armar reportes manualmente.",
      },
    ],
  },
  casosRelacionados: ["metal-mad-modular-k"],
  faq: [
    {
      pregunta: "¿El sistema puede manejar diferentes pipelines para diferentes líneas de negocio?",
      respuesta:
        "Sí. Configuramos pipelines separados con etapas, reglas y tiempos de seguimiento diferenciados por tipo de producto o servicio.",
    },
    {
      pregunta: "¿Cuánto tiempo tarda la implementación?",
      respuesta:
        "Entre 3 y 5 semanas para un pipeline estándar. Incluye el relevamiento del proceso actual, la configuración y la capacitación del equipo.",
    },
  ],
};
