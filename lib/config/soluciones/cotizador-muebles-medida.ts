import { SolucionConfig } from "./index";

export const cotizadorMueblesMedida: SolucionConfig = {
  slug: "cotizador-muebles-medida",
  metaTitle: "Cotizador de Muebles a Medida Online | AYCweb",
  metaDescription:
    "Cotizá muebles a medida en segundos. Eliminá errores de cálculo y ofrecé presupuestos profesionales al instante desde cualquier dispositivo.",
  hero: {
    title: "Cotizador de Muebles a Medida",
    subtitle:
      "Tus clientes quieren una respuesta rápida. Con tu cotizador digital, la tienen en minutos, no en días.",
  },
  problema: {
    title: "¿Por qué esto frena tu operación?",
    paragraphs: [
      "Los fabricantes de muebles a medida invierten horas en calcular presupuestos manualmente. Cada error significa pérdida de dinero o de clientes.",
      "Un cotizador digital elimina ese problema: el cliente elige dimensiones y materiales, y el precio aparece al instante.",
    ],
  },
  solucion: {
    title: "Cómo lo resolvemos",
    pasos: [
      {
        icono: "📐",
        titulo: "Mapeamos tu catálogo",
        descripcion:
          "Relevamos materiales, dimensiones, terminaciones y reglas de precio que usás actualmente.",
      },
      {
        icono: "🧮",
        titulo: "Configuramos el motor de precios",
        descripcion:
          "Programamos las fórmulas de cálculo para que el sistema genere presupuestos exactos según las medidas ingresadas.",
      },
      {
        icono: "🖥️",
        titulo: "Diseñamos la experiencia del cliente",
        descripcion:
          "Creamos una interfaz clara donde el cliente elige dimensiones, materiales y terminaciones, y ve el precio al instante.",
      },
      {
        icono: "📤",
        titulo: "Enviamos el presupuesto automáticamente",
        descripcion:
          "El sistema genera un PDF profesional y lo envía por WhatsApp o email sin que tengas que hacer nada.",
      },
    ],
  },
  casosRelacionados: [],
  faq: [
    {
      pregunta: "¿El cotizador funciona en el celular?",
      respuesta:
        "Sí, es 100% responsive. Tanto vos como tus clientes pueden usarlo desde cualquier dispositivo.",
    },
    {
      pregunta: "¿Qué pasa si cambio los precios de los materiales?",
      respuesta:
        "Actualizás los valores en el panel de administración y el cotizador recalcula automáticamente desde ese momento.",
    },
  ],
};
