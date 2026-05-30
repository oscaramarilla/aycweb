import { SolucionConfig } from "./index";

export const generarPdfPresupuestoAutomatico: SolucionConfig = {
  slug: "generar-pdf-presupuesto-automatico",
  metaTitle: "Generar PDF de Presupuesto Automático para Empresa en Paraguay | AYCweb",
  metaDescription:
    "Generá PDFs de presupuesto automáticamente en Paraguay. Sistema que convierte tus cotizaciones en documentos profesionales en segundos, sin Word ni Excel.",
  hero: {
    title: "Generación Automática de Presupuestos en PDF",
    subtitle:
      "Cada cotización se convierte en un PDF profesional al instante. Sin armar documentos a mano, sin errores de formato.",
  },
  problema: {
    title: "¿Por qué esto frena tu operación?",
    paragraphs: [
      "Armar un presupuesto en Word o Excel lleva entre 20 y 60 minutos por cotización. Ese tiempo multiplicado por el volumen de consultas que recibe tu empresa representa horas de trabajo que no generan valor.",
      "Además, los documentos armados a mano son inconsistentes: cada vendedor usa un formato diferente, algunos olvidan incluir condiciones de pago, otros ponen el IVA mal calculado.",
    ],
  },
  solucion: {
    title: "Cómo lo resolvemos",
    pasos: [
      {
        icono: "📋",
        titulo: "Diseñamos tu plantilla de presupuesto",
        descripcion:
          "Creamos el modelo de documento con tu marca, datos fiscales, condiciones de pago y estructura de precios.",
      },
      {
        icono: "⚙️",
        titulo: "Motor de cálculo conectado al PDF",
        descripcion:
          "El sistema toma los datos del formulario de cotización y los inserta automáticamente en el documento final.",
      },
      {
        icono: "📄",
        titulo: "PDF descargable o enviado por email",
        descripcion:
          "El documento se genera en segundos y puede enviarse automáticamente al cliente por email o WhatsApp.",
      },
      {
        icono: "🗂️",
        titulo: "Historial de presupuestos centralizado",
        descripcion:
          "Todos los presupuestos emitidos quedan registrados con número correlativo, fecha, cliente y estado.",
      },
    ],
  },
  casosRelacionados: ["oriplast-mobiliario-escolar", "metal-mad-modular-k"],
  faq: [
    {
      pregunta: "¿El PDF puede incluir imágenes de los productos?",
      respuesta:
        "Sí. Podemos incluir fotos de referencia, planos o especificaciones técnicas en el documento generado automáticamente.",
    },
    {
      pregunta: "¿Puedo tener diferentes plantillas para diferentes tipos de cotización?",
      respuesta:
        "Absolutamente. Configuramos plantillas diferenciadas por tipo de servicio, cliente o segmento de negocio.",
    },
  ],
};
