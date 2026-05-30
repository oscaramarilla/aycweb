import { SolucionConfig } from "./index";

export const cotizadorMetalurgicaEstructuras: SolucionConfig = {
  slug: "cotizador-metalurgica-estructuras",
  metaTitle: "Cotizador para Metalúrgica y Estructuras Metálicas en Paraguay | AYCweb",
  metaDescription:
    "Motor de cotización para empresas metalúrgicas en Paraguay. Cotizá estructuras, carpintería metálica y fabricaciones a medida en minutos con PDF automático.",
  hero: {
    title: "Cotizador para Metalúrgica y Estructuras Metálicas",
    subtitle:
      "Tu empresa metalúrgica emite presupuestos detallados en minutos. Sin depender de una sola persona que sabe los precios.",
  },
  problema: {
    title: "¿Por qué esto frena tu operación?",
    paragraphs: [
      "Las empresas metalúrgicas en Paraguay manejan cotizaciones complejas: kilos de material, horas de mano de obra especializada, tratamientos superficiales y fletes. Calcularlo a mano genera errores que se pagan en la ejecución.",
      "Cuando el precio del acero cambia — y cambia frecuentemente — actualizar todas las planillas manualmente es inviable. El resultado son cotizaciones que se entregan tarde y con márgenes incorrectos.",
    ],
  },
  solucion: {
    title: "Cómo lo resolvemos",
    pasos: [
      {
        icono: "🏭",
        titulo: "Relevamos tu proceso de cotización actual",
        descripcion:
          "Analizamos cómo calculás hoy: materiales por kg, horas de trabajo, tipos de acabado y gastos adicionales.",
      },
      {
        icono: "⚙️",
        titulo: "Motor de cálculo a medida",
        descripcion:
          "Construimos la lógica de tu negocio: fórmulas de peso, costos de proceso y márgenes por tipo de trabajo.",
      },
      {
        icono: "📄",
        titulo: "PDF técnico-comercial automático",
        descripcion:
          "Cada cotización genera un documento con el desglose técnico, tiempos de entrega y precio final. Con tu logo y datos.",
      },
      {
        icono: "📲",
        titulo: "Envío y aprobación por WhatsApp",
        descripcion:
          "El cliente recibe la cotización con un enlace para aprobar o consultar desde su celular, sin llamadas ni visitas.",
      },
    ],
  },
  casosRelacionados: ["metal-mad-modular-k"],
  faq: [
    {
      pregunta: "¿Puedo actualizar el precio del acero cuando cambia el mercado?",
      respuesta:
        "Sí. El precio de las materias primas se actualiza desde el panel de administración. El sistema recalcula automáticamente todos los presupuestos nuevos.",
    },
    {
      pregunta: "¿El sistema puede manejar trabajos con dimensiones variables?",
      respuesta:
        "El motor es paramétrico. Diseñamos las fórmulas para que el operador ingrese dimensiones y el sistema calcule el material, la mano de obra y el precio total.",
    },
  ],
};
