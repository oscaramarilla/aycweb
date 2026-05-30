import { SolucionConfig } from "./index";

export const presupuestoAutomaticoEmpresa: SolucionConfig = {
  slug: "presupuesto-automatico-empresa",
  metaTitle: "Sistema de Presupuesto Automático para Empresa | AYCweb",
  metaDescription:
    "Sistema de presupuesto automático para empresas en Paraguay. El cliente o el vendedor ingresa los datos y el presupuesto se genera solo, en segundos.",
  hero: {
    title: "Presupuesto Automático para tu Empresa",
    subtitle:
      "El presupuesto se genera solo. Tu equipo ingresa los datos, el sistema hace los cálculos y entrega el documento listo para aprobar.",
  },
  problema: {
    title: "¿Por qué esto frena tu operación?",
    paragraphs: [
      "Generar un presupuesto empresarial toma tiempo que no se factura: buscar precios, calcular impuestos, armar el documento, verificar márgenes, formatearlo para el cliente. Todo eso puede automatizarse.",
      "Cuando el presupuesto depende de personas específicas, la empresa queda paralizada cuando esa persona no está disponible. La automatización elimina esa dependencia.",
    ],
  },
  solucion: {
    title: "Cómo lo resolvemos",
    pasos: [
      {
        icono: "📋",
        titulo: "Formulario de datos del presupuesto",
        descripcion:
          "El operador o el cliente ingresa los datos necesarios: productos, cantidades, condiciones. Campos validados en tiempo real.",
      },
      {
        icono: "⚙️",
        titulo: "Cálculo automático de totales",
        descripcion:
          "El sistema aplica precios, descuentos, impuestos y márgenes automáticamente. Sin errores de cálculo.",
      },
      {
        icono: "📄",
        titulo: "Documento generado al instante",
        descripcion:
          "El presupuesto sale en PDF con tu formato, numeración correlativa y todos los campos correctamente completados.",
      },
      {
        icono: "📲",
        titulo: "Envío y aprobación digital",
        descripcion:
          "El cliente recibe el presupuesto por WhatsApp o email y puede aprobarlo digitalmente. El registro queda en el sistema.",
      },
    ],
  },
  casosRelacionados: ["oriplast-mobiliario-escolar"],
  faq: [
    {
      pregunta: "¿El sistema puede calcular IVA y retenciones automáticamente?",
      respuesta:
        "Sí. Configuramos el motor fiscal según las reglas de tu empresa: IVA 10%, IVA 5%, retenciones, exenciones. El documento final tiene los cálculos correctos.",
    },
    {
      pregunta: "¿Los presupuestos generados tienen numeración correlativa?",
      respuesta:
        "Sí. Cada presupuesto se genera con un número único y correlativo. El historial queda registrado con fecha, cliente y estado.",
    },
  ],
};
