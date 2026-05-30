import { SolucionConfig } from "./index";

export const automatizarPropuestasComerciales: SolucionConfig = {
  slug: "automatizar-propuestas-comerciales",
  metaTitle: "Automatizar Propuestas Comerciales B2B en Paraguay | AYCweb",
  metaDescription:
    "Automatizá la generación de propuestas comerciales B2B en Paraguay. Tu equipo envía propuestas profesionales en minutos, no en horas.",
  hero: {
    title: "Propuestas Comerciales B2B Automáticas",
    subtitle:
      "Tu equipo genera propuestas comerciales completas en minutos. Sin armar documentos, sin copiar y pegar, sin demoras.",
  },
  problema: {
    title: "¿Por qué esto frena tu operación?",
    paragraphs: [
      "Armar una propuesta comercial B2B toma entre 1 y 4 horas: buscar la plantilla, adaptar el contenido al cliente, calcular los precios, revisar el formato. Todo ese tiempo es tiempo que no se vende.",
      "Además, las propuestas armadas a mano son inconsistentes: cada vendedor las hace diferente, algunos incluyen condiciones importantes y otros no. La primera impresión con un cliente B2B importante no puede depender del criterio individual de cada vendedor.",
    ],
  },
  solucion: {
    title: "Cómo lo resolvemos",
    pasos: [
      {
        icono: "📋",
        titulo: "Estandarizamos tu estructura de propuesta",
        descripcion:
          "Definimos el contenido que toda propuesta debe tener: alcance, entregables, plazos, condiciones, precios.",
      },
      {
        icono: "⚡",
        titulo: "Motor de generación automática",
        descripcion:
          "El vendedor selecciona servicios, ajusta cantidades y el sistema arma la propuesta completa en segundos.",
      },
      {
        icono: "📄",
        titulo: "Propuesta profesional en PDF",
        descripcion:
          "El documento sale con tu diseño, datos del cliente precargados y todos los campos correctamente completados.",
      },
      {
        icono: "✅",
        titulo: "Aprobación digital con registro",
        descripcion:
          "El cliente aprueba la propuesta digitalmente. La aceptación queda registrada con fecha y hora.",
      },
    ],
  },
  casosRelacionados: ["metal-mad-modular-k"],
  faq: [
    {
      pregunta: "¿Puedo personalizar cada propuesta para el cliente específico?",
      respuesta:
        "Sí. Además de los campos estandarizados, el sistema permite agregar secciones específicas, notas personalizadas y condiciones especiales por cliente.",
    },
    {
      pregunta: "¿Las propuestas aprobadas digitalmente tienen validez legal?",
      respuesta:
        "Configuramos el sistema de aprobación con registro de IP, fecha y consentimiento explícito. Para acuerdos que requieran firma formal, integramos con herramientas de firma digital.",
    },
  ],
};
