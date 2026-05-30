import { SolucionConfig } from "./index";

export const cotizadorElectricistaInstalaciones: SolucionConfig = {
  slug: "cotizador-electricista-instalaciones",
  metaTitle: "Presupuesto Automático para Instalaciones Eléctricas en Paraguay | AYCweb",
  metaDescription:
    "Automatizá los presupuestos de instalaciones eléctricas en Paraguay. Motor paramétrico para electricistas y empresas de instalaciones: materiales, mano de obra y precio en minutos.",
  hero: {
    title: "Cotizador de Instalaciones Eléctricas a Medida",
    subtitle:
      "Tu empresa genera presupuestos eléctricos en minutos. Sin calcular a mano, sin errores de material, sin perder clientes por demora.",
  },
  problema: {
    title: "¿Por qué esto frena tu operación?",
    paragraphs: [
      "Las empresas de instalaciones eléctricas en Paraguay pierden trabajos porque el presupuesto llega tarde. El cliente pide precio para una instalación, el técnico visita, calcula a mano y responde días después — cuando el cliente ya eligió otro.",
      "La complejidad de una instalación eléctrica tiene muchas variables: metraje de cañería, cantidad de bocas, tipo de tablero, materiales y mano de obra. Sin un sistema, cada presupuesto tarda horas.",
    ],
  },
  solucion: {
    title: "Cómo lo resolvemos",
    pasos: [
      {
        icono: "⚡",
        titulo: "Relevamos tus tipos de instalación",
        descripcion:
          "Analizamos los trabajos más frecuentes: instalaciones residenciales, comerciales, industriales. Cada tipo con sus propias variables.",
      },
      {
        icono: "🔧",
        titulo: "Motor de cálculo por parámetros",
        descripcion:
          "El técnico ingresa: tipo de trabajo, superficie, cantidad de puntos. El sistema calcula materiales y mano de obra automáticamente.",
      },
      {
        icono: "📄",
        titulo: "Presupuesto firmable en PDF",
        descripcion:
          "El presupuesto sale con el desglose de materiales, mano de obra y total. Con tu logo y condiciones de garantía.",
      },
      {
        icono: "📲",
        titulo: "El cliente aprueba por WhatsApp",
        descripcion:
          "Sin visitas adicionales ni llamadas. El cliente revisa y aprueba el presupuesto desde su celular.",
      },
    ],
  },
  casosRelacionados: [],
  faq: [
    {
      pregunta: "¿El sistema puede manejar instalaciones residenciales y comerciales?",
      respuesta:
        "Sí. Configuramos módulos separados para cada tipo de trabajo, con variables y precios diferenciados.",
    },
    {
      pregunta: "¿Puedo actualizar los precios de los materiales cuando suben?",
      respuesta:
        "El panel de administración permite actualizar cualquier precio o costo en cualquier momento. El cambio impacta en todos los presupuestos nuevos inmediatamente.",
    },
  ],
};
