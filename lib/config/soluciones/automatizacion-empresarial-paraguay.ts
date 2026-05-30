import { SolucionConfig } from "./index";

export const automatizacionEmpresarialParaguay: SolucionConfig = {
  slug: "automatizacion-empresarial-paraguay",
  metaTitle: "Automatización Empresarial para Empresas en Paraguay | AYCweb",
  metaDescription:
    "Automatizá los procesos clave de tu empresa en Paraguay. Cotizaciones, seguimiento, notificaciones y reportes que se ejecutan solos sin intervención manual.",
  hero: {
    title: "Automatización Empresarial en Paraguay",
    subtitle:
      "Los procesos repetitivos de tu empresa se ejecutan solos. Tu equipo hace el trabajo que requiere criterio humano.",
  },
  problema: {
    title: "¿Por qué esto frena tu operación?",
    paragraphs: [
      "Las empresas paraguayas gastan cientos de horas por mes en tareas que podrían ejecutarse automáticamente: enviar cotizaciones, hacer seguimiento a prospectos, generar reportes, notificar al equipo de cambios en pedidos.",
      "Esas horas tienen un costo. Y más importante: cuando la automatización no existe, las tareas dependen de que alguien se acuerde de hacerlas. Eso genera errores, demoras y clientes que no reciben respuesta a tiempo.",
    ],
  },
  solucion: {
    title: "Cómo lo resolvemos",
    pasos: [
      {
        icono: "🔍",
        titulo: "Identificamos qué se puede automatizar",
        descripcion:
          "Relevamos los procesos repetitivos de tu operación: qué se hace manualmente, con qué frecuencia y qué pasaría si no se hace.",
      },
      {
        icono: "⚙️",
        titulo: "Construimos los flujos automatizados",
        descripcion:
          "Usando n8n y webhooks, conectamos tus herramientas actuales para que los procesos se ejecuten solos cuando corresponde.",
      },
      {
        icono: "🔗",
        titulo: "Integramos con lo que ya usás",
        descripcion:
          "WhatsApp, email, Google Sheets, Supabase, formularios web. La automatización conecta las herramientas que ya tenés.",
      },
      {
        icono: "📊",
        titulo: "Monitoreo y alertas ante excepciones",
        descripcion:
          "El sistema funciona solo pero te avisa cuando algo sale del flujo esperado. Intervención solo cuando es necesaria.",
      },
    ],
  },
  casosRelacionados: ["oriplast-mobiliario-escolar", "metal-mad-modular-k"],
  faq: [
    {
      pregunta: "¿Qué tipo de procesos se pueden automatizar?",
      respuesta:
        "Cotizaciones, confirmaciones de pedidos, notificaciones al equipo, recordatorios a clientes, generación de reportes, sincronización de datos entre sistemas.",
    },
    {
      pregunta: "¿Necesito cambiar las herramientas que ya uso?",
      respuesta:
        "No necesariamente. Trabajamos para conectar las herramientas que ya tenés. Si alguna no soporta integración, lo identificamos en el diagnóstico.",
    },
  ],
};
