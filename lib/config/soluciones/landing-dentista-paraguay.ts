import { SolucionConfig } from "./index";

export const landingDentistaParaguay: SolucionConfig = {
  slug: "landing-dentista-paraguay",
  metaTitle: "Página Web para Dentista y Odontólogo en Paraguay | AYCweb",
  metaDescription:
    "Landing de captación de pacientes para dentistas y odontólogos en Paraguay. Sistema con filtro de consultas, agendamiento automático y confirmación por WhatsApp.",
  hero: {
    title: "Página Web para Dentista o Clínica Odontológica",
    subtitle:
      "Solo ingresan pacientes que encajan con tu práctica. Filtro automático, agenda ordenada y cero llamadas de seguimiento.",
  },
  problema: {
    title: "¿Por qué esto frena tu operación?",
    paragraphs: [
      "La mayoría de los odontólogos en Paraguay reciben consultas por WhatsApp sin ningún filtro: pacientes que preguntan precios, que no viven en la zona, que buscan un servicio que no ofrecés. Todo ese ruido consume tiempo que podrías dedicar a pacientes reales.",
      "Sin una presencia digital estructurada, el consultorio depende del boca a boca y no tiene control sobre el tipo de paciente que llega. La agenda se llena de consultas que no convierten.",
    ],
  },
  solucion: {
    title: "Cómo lo resolvemos",
    pasos: [
      {
        icono: "🦷",
        titulo: "Landing de autoridad profesional",
        descripcion:
          "Página diseñada para transmitir confianza: especialidades, formación, casos de éxito y fotos del consultorio.",
      },
      {
        icono: "📋",
        titulo: "Formulario de precalificación",
        descripcion:
          "El paciente completa un formulario corto antes de reservar. Solo avanzan los que cumplen con el perfil de tu práctica.",
      },
      {
        icono: "📲",
        titulo: "Confirmación automática por WhatsApp",
        descripcion:
          "Una vez precalificado, el paciente recibe la confirmación del turno con instrucciones preparatorias automáticamente.",
      },
      {
        icono: "🔔",
        titulo: "Recordatorio previo al turno",
        descripcion:
          "El sistema envía un recordatorio 24 horas antes. Las cancelaciones de último momento se reducen significativamente.",
      },
    ],
  },
  casosRelacionados: ["dra-bianca-odontologia"],
  faq: [
    {
      pregunta: "¿Cuánto tiempo tarda en funcionar la landing?",
      respuesta:
        "Entre 1 y 2 semanas. Incluye el diseño de la página, la configuración del formulario y la integración con WhatsApp.",
    },
    {
      pregunta: "¿Necesito tener WhatsApp Business?",
      respuesta:
        "Recomendamos WhatsApp Business para profesionales de la salud, pero también podemos configurar el sistema con un número personal si es lo que usás actualmente.",
    },
  ],
};
