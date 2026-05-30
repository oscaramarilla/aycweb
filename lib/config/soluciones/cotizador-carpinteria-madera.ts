import { SolucionConfig } from "./index";

export const cotizadorCarpinteriaMadera: SolucionConfig = {
  slug: "cotizador-carpinteria-madera",
  metaTitle: "Cotizador para Carpintería y Muebles a Medida en Paraguay | AYCweb",
  metaDescription:
    "Automatizá cotizaciones de carpintería y muebles a medida en Paraguay. Motor paramétrico que calcula materiales, mano de obra y precio final al instante.",
  hero: {
    title: "Cotizador de Muebles y Carpintería a Medida",
    subtitle:
      "El cliente ingresa las medidas, el sistema calcula el precio y genera el presupuesto. En minutos, no en días.",
  },
  problema: {
    title: "¿Por qué esto frena tu operación?",
    paragraphs: [
      "Los talleres de carpintería y muebles a medida en Paraguay pierden tiempo y clientes con el mismo problema: el presupuesto tarda demasiado. El cliente pide precio, el maestro calcula a mano, y para cuando responde, el cliente ya eligió otra opción.",
      "Sin un sistema de cálculo estandarizado, dos vendedores cotizan el mismo mueble a precios distintos. Y cuando sube el precio de la madera, actualizar las referencias manualmente es imposible.",
    ],
  },
  solucion: {
    title: "Cómo lo resolvemos",
    pasos: [
      {
        icono: "🪵",
        titulo: "Relevamos tu catálogo de materiales",
        descripcion:
          "Maderas, tableros, herrajes, telas y accesorios se cargan en el sistema con precios actualizables.",
      },
      {
        icono: "📐",
        titulo: "Motor de cálculo por dimensiones",
        descripcion:
          "El sistema toma ancho, alto y profundidad del mueble y calcula materiales, cortes, mano de obra y precio final automáticamente.",
      },
      {
        icono: "📄",
        titulo: "Presupuesto con render o boceto",
        descripcion:
          "La cotización incluye el desglose de materiales, plazo de entrega y precio. Opcional: foto referencial del estilo.",
      },
      {
        icono: "📲",
        titulo: "El cliente aprueba por WhatsApp",
        descripcion:
          "El presupuesto llega al cliente con un enlace de aprobación. Sin visitas, sin llamadas de seguimiento.",
      },
    ],
  },
  casosRelacionados: ["oriplast-mobiliario-escolar"],
  faq: [
    {
      pregunta: "¿El sistema funciona para muebles de cocina, dormitorios y oficina?",
      respuesta:
        "Sí. Configuramos módulos por categoría de mueble, cada uno con sus propias variables de dimensión, material y acabado.",
    },
    {
      pregunta: "¿Cuánto tiempo tarda en implementarse?",
      respuesta:
        "Entre 2 y 3 semanas para un catálogo estándar. Si tenés líneas de productos bien definidas, el primer prototipo funcional está en menos de 2 semanas.",
    },
  ],
};
