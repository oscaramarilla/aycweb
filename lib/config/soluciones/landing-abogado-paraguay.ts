import { SolucionConfig } from "./index";

export const landingAbogadoParaguay: SolucionConfig = {
  slug: "landing-abogado-paraguay",
  metaTitle: "Landing Page para Abogado y Estudio Jurídico en Paraguay | AYCweb",
  metaDescription:
    "Página web profesional para abogados y estudios jurídicos en Paraguay. Captación de clientes calificados, filtro de consultas y agenda automatizada.",
  hero: {
    title: "Página Web para Abogado o Estudio Jurídico",
    subtitle:
      "Captá clientes calificados online. Filtrá consultas irrelevantes y dedicá tu tiempo a casos que valen la pena.",
  },
  problema: {
    title: "¿Por qué esto frena tu operación?",
    paragraphs: [
      "Los abogados en Paraguay reciben consultas de todo tipo: personas que buscan asesoramiento gratuito, casos fuera del área de especialización, o clientes que no tienen el presupuesto para contratar un estudio serio.",
      "Sin un filtro digital, el profesional atiende todo ese ruido. Horas dedicadas a consultas que nunca generan honorarios, en vez de usarlas para clientes que realmente necesitan y pueden pagar un servicio profesional.",
    ],
  },
  solucion: {
    title: "Cómo lo resolvemos",
    pasos: [
      {
        icono: "⚖️",
        titulo: "Landing de autoridad legal",
        descripcion:
          "Página que comunica tu especialización, trayectoria y casos de referencia. El cliente entiende desde el primer momento qué tipo de trabajo hacés.",
      },
      {
        icono: "📋",
        titulo: "Formulario de precalificación de consulta",
        descripcion:
          "El cliente describe su caso en el formulario. Filtrás automáticamente los que encajan con tu práctica antes del primer contacto.",
      },
      {
        icono: "📲",
        titulo: "Primera consulta organizada por WhatsApp",
        descripcion:
          "El cliente calificado recibe un mensaje con los próximos pasos para agendar la primera consulta.",
      },
      {
        icono: "🔐",
        titulo: "Perfil de confianza y credenciales",
        descripcion:
          "Matrícula profesional, membresías, reconocimientos y áreas de práctica claramente presentados para generar confianza.",
      },
    ],
  },
  casosRelacionados: ["dr-nicolas-silvero-medicina"],
  faq: [
    {
      pregunta: "¿El formulario de precalificación es confidencial?",
      respuesta:
        "Sí. Los datos del formulario son privados y solo accesibles para vos. Incluimos aviso de privacidad y política de tratamiento de datos.",
    },
    {
      pregunta: "¿Puedo tener diferentes formularios para distintas áreas de práctica?",
      respuesta:
        "Absolutamente. Configuramos rutas diferenciadas por área: laboral, civil, comercial, etc. Cada una con su propio formulario y flujo.",
    },
  ],
};
