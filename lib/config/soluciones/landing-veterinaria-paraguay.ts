import { SolucionConfig } from "./index";

export const landingVeterinariaParaguay: SolucionConfig = {
  slug: "landing-veterinaria-paraguay",
  metaTitle: "Página Web para Veterinaria en Paraguay | AYCweb",
  metaDescription:
    "Landing de captación de clientes para veterinarias en Paraguay. Agendamiento automático, servicios claramente presentados y confirmación por WhatsApp.",
  hero: {
    title: "Página Web para Veterinaria o Clínica Veterinaria",
    subtitle:
      "Captá dueños de mascotas que buscan atención veterinaria de calidad. Agenda organizada, sin llamadas para cada turno.",
  },
  problema: {
    title: "¿Por qué esto frena tu operación?",
    paragraphs: [
      "Las veterinarias en Paraguay manejan la agenda de turnos principalmente por WhatsApp y llamadas telefónicas. Cada turno requiere una conversación, y eso es tiempo del equipo que podría dedicarse a la atención.",
      "Además, muchos clientes no saben qué servicios ofrece la clínica ni qué implica cada uno. Sin una presentación clara, llegan sin expectativas alineadas, lo que genera fricción en la atención.",
    ],
  },
  solucion: {
    title: "Cómo lo resolvemos",
    pasos: [
      {
        icono: "🐾",
        titulo: "Presentación de servicios y especialidades",
        descripcion:
          "Consultas, vacunación, cirugía, estética: cada servicio con descripción, precios referenciales y tiempo de atención.",
      },
      {
        icono: "📋",
        titulo: "Formulario de turno online",
        descripcion:
          "El cliente completa el tipo de consulta, especie y datos de la mascota. El turno se agenda sin llamadas.",
      },
      {
        icono: "📲",
        titulo: "Confirmación automática por WhatsApp",
        descripcion:
          "El cliente recibe confirmación inmediata con la fecha, hora e instrucciones previas a la consulta.",
      },
      {
        icono: "🔔",
        titulo: "Recordatorio previo al turno",
        descripcion:
          "El sistema envía un recordatorio 24 horas antes. Las ausencias sin aviso se reducen considerablemente.",
      },
    ],
  },
  casosRelacionados: ["dra-bianca-odontologia"],
  faq: [
    {
      pregunta: "¿El sistema puede manejar turnos de urgencia?",
      respuesta:
        "Sí. Configuramos una vía separada para urgencias que deriva directamente a WhatsApp, diferenciada del agendamiento estándar.",
    },
    {
      pregunta: "¿La landing puede mostrar los veterinarios disponibles por turno?",
      respuesta:
        "Podemos integrar la disponibilidad del equipo para que el cliente elija el profesional según sus preferencias y los horarios disponibles.",
    },
  ],
};
