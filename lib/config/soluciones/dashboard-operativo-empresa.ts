import { SolucionConfig } from "./index";

export const dashboardOperativoEmpresa: SolucionConfig = {
  slug: "dashboard-operativo-empresa",
  metaTitle: "Dashboard Operativo para Empresas en Paraguay | AYCweb",
  metaDescription:
    "Panel de control operativo para empresas en Paraguay. Centralizá pedidos, cotizaciones y seguimiento de clientes en un solo dashboard actualizado en tiempo real.",
  hero: {
    title: "Dashboard Operativo para tu Empresa",
    subtitle:
      "Dejá de manejar tu operación en conversaciones de WhatsApp y hojas de cálculo. Un panel central para ver todo en tiempo real.",
  },
  problema: {
    title: "¿Por qué esto frena tu operación?",
    paragraphs: [
      "La mayoría de las empresas paraguayas medianas operan sin visibilidad: los pedidos están en WhatsApp, el seguimiento en un Excel que alguien tiene en su computadora personal, y el estado de cada cliente solo lo sabe quien lo atendió.",
      "Esa opacidad hace imposible escalar, delegar o detectar problemas antes de que exploten. Cuando el gerente quiere saber cómo va la operación, tiene que preguntarle a cada vendedor.",
    ],
  },
  solucion: {
    title: "Cómo lo resolvemos",
    pasos: [
      {
        icono: "🔎",
        titulo: "Relevamos tus flujos operativos",
        descripcion:
          "Identificamos qué información necesitás ver, qué procesos generan ruido y qué datos son críticos para tu toma de decisiones.",
      },
      {
        icono: "🏗️",
        titulo: "Construimos el panel a medida",
        descripcion:
          "Un dashboard con las métricas que importan: pedidos activos, cotizaciones enviadas, clientes por etapa, alertas de seguimiento.",
      },
      {
        icono: "🔗",
        titulo: "Conectado a tus herramientas actuales",
        descripcion:
          "Integramos el panel con WhatsApp, formularios y tu sistema de cotización para que los datos entren solos.",
      },
      {
        icono: "📊",
        titulo: "Visibilidad en tiempo real",
        descripcion:
          "El equipo ve el estado de cada proceso. El gerente ve el panorama completo. Sin preguntar, sin llamadas.",
      },
    ],
  },
  casosRelacionados: ["metal-mad-modular-k"],
  faq: [
    {
      pregunta: "¿El dashboard es accesible desde celular?",
      respuesta:
        "Sí. Construimos el panel como aplicación web responsive, accesible desde cualquier dispositivo con conexión a internet.",
    },
    {
      pregunta: "¿Cuántos usuarios pueden acceder al mismo tiempo?",
      respuesta:
        "El sistema soporta múltiples usuarios simultáneos con roles diferenciados: operador, vendedor, gerente.",
    },
  ],
};
