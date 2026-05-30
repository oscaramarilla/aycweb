import { SolucionConfig } from "./index";

export const landingNutricionistaParaguay: SolucionConfig = {
  slug: "landing-nutricionista-paraguay",
  metaTitle: "Página Web para Nutricionista en Paraguay | AYCweb",
  metaDescription:
    "Landing para nutricionistas en Paraguay. Captá pacientes con objetivos claros, filtrá consultas y organizá tu agenda con agendamiento automático.",
  hero: {
    title: "Página Web para Nutricionista o Consultorio Nutricional",
    subtitle:
      "Captá pacientes que ya saben lo que buscan. Filtro de consultas, agenda digital y seguimiento automático.",
  },
  problema: {
    title: "¿Por qué esto frena tu operación?",
    paragraphs: [
      "Los nutricionistas en Paraguay reciben consultas de personas con objetivos muy distintos: bajar de peso, tratar enfermedades, deportistas, pacientes con restricciones médicas. Sin un filtro, las primeras consultas consumen tiempo antes de entender si hay un encaje real.",
      "La captación por redes sociales genera mucho ruido: personas que preguntan precios sin intención de empezar, o que tienen expectativas poco realistas sobre los resultados.",
    ],
  },
  solucion: {
    title: "Cómo lo resolvemos",
    pasos: [
      {
        icono: "🥗",
        titulo: "Perfil profesional y especialidades",
        descripcion:
          "La landing comunica tu enfoque: nutrición clínica, deportiva, pediátrica. El paciente entiende si sos el profesional que necesita.",
      },
      {
        icono: "📋",
        titulo: "Formulario de consulta inicial",
        descripcion:
          "El paciente describe su objetivo, condiciones médicas relevantes y disponibilidad. Vos elegís con quién trabajar.",
      },
      {
        icono: "📲",
        titulo: "Primera consulta agendada automáticamente",
        descripcion:
          "El paciente calificado recibe un enlace para elegir su horario de primera consulta sin necesidad de llamar.",
      },
      {
        icono: "📅",
        titulo: "Recordatorios de seguimiento periódico",
        descripcion:
          "El sistema puede recordar al paciente sus consultas de seguimiento y mantener la continuidad del tratamiento.",
      },
    ],
  },
  casosRelacionados: ["dr-jose-lahaye-salud"],
  faq: [
    {
      pregunta: "¿La landing puede mostrar testimonios de pacientes?",
      respuesta:
        "Sí. Incluimos una sección de testimonios de pacientes anteriores que deseen compartir su experiencia. Esto genera confianza y mejora la conversión.",
    },
    {
      pregunta: "¿El sistema puede integrarse con herramientas de planes alimentarios?",
      respuesta:
        "El sistema de captación y agenda funciona de forma independiente. Para la gestión de planes, evaluamos integraciones según la herramienta que ya usás.",
    },
  ],
};
