import { SolucionConfig } from "./index";

export const landingPsicologoParaguay: SolucionConfig = {
  slug: "landing-psicologo-paraguay",
  metaTitle: "Página Web para Psicólogo y Terapeuta en Paraguay | AYCweb",
  metaDescription:
    "Landing para psicólogos y terapeutas en Paraguay. Captá pacientes calificados, filtrá consultas de manera empática y organizá tu agenda sin llamadas.",
  hero: {
    title: "Página Web para Psicólogo o Terapeuta",
    subtitle:
      "Tu práctica online trabaja mientras vos atendés pacientes. Captación empática, filtro inteligente y agenda ordenada.",
  },
  problema: {
    title: "¿Por qué esto frena tu operación?",
    paragraphs: [
      "Los psicólogos en Paraguay suelen recibir consultas iniciales por WhatsApp o Instagram, sin ningún contexto sobre el motivo de consulta ni la disponibilidad del paciente. Eso genera conversaciones largas antes del primer turno.",
      "Además, muchos consultan sin intención real de comenzar un proceso terapéutico. Sin un sistema de captación estructurado, el profesional dedica tiempo y energía a prospectos que no convierten.",
    ],
  },
  solucion: {
    title: "Cómo lo resolvemos",
    pasos: [
      {
        icono: "🧠",
        titulo: "Perfil de autoridad y enfoque terapéutico",
        descripcion:
          "La landing comunica claramente tu enfoque, especialidades y el tipo de paciente que atendés. Genera afinidad antes del primer contacto.",
      },
      {
        icono: "📋",
        titulo: "Formulario de primera consulta",
        descripcion:
          "El paciente completa un breve formulario sobre el motivo de consulta. Solo avanzás con quienes cumplen el perfil de tu práctica.",
      },
      {
        icono: "📲",
        titulo: "Agendamiento automático con privacidad",
        descripcion:
          "El paciente calificado recibe un enlace para elegir turno. Todo el flujo es discreto y respetuoso.",
      },
      {
        icono: "🔔",
        titulo: "Recordatorio automático del turno",
        descripcion:
          "24 horas antes del turno, el paciente recibe un recordatorio. Las ausencias y cancelaciones de último momento se reducen.",
      },
    ],
  },
  casosRelacionados: ["dr-nicolas-silvero-medicina"],
  faq: [
    {
      pregunta: "¿El formulario de consulta puede ser anónimo?",
      respuesta:
        "Podemos configurar el formulario con distintos niveles de información solicitada, incluyendo opciones que protegen la privacidad del consultante.",
    },
    {
      pregunta: "¿El sistema puede manejar tanto sesiones presenciales como online?",
      respuesta:
        "Sí. El formulario y el agendamiento pueden diferenciar entre modalidades. El paciente elige la que prefiere desde el primer contacto.",
    },
  ],
};
