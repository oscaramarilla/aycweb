import { SolucionConfig } from "./index";

export const eliminarExcelOperacionEmpresarial: SolucionConfig = {
  slug: "eliminar-excel-operacion-empresarial",
  metaTitle: "Dejar de Usar Excel en tu Empresa en Paraguay | AYCweb",
  metaDescription:
    "Reemplazá Excel en tu operación empresarial con sistemas a medida para Paraguay. Cotizaciones, pedidos y seguimiento sin planillas ni fórmulas frágiles.",
  hero: {
    title: "Dejá de Operar tu Empresa con Excel",
    subtitle:
      "Excel fue una solución brillante para los 90. Hoy es el cuello de botella más caro que tiene tu operación.",
  },
  problema: {
    title: "¿Por qué esto frena tu operación?",
    paragraphs: [
      "Excel no fue diseñado para ser un sistema operativo empresarial. Sin embargo, la mayoría de las empresas paraguayas medianas lo usan para cotizar, hacer seguimiento de pedidos, controlar stock y manejar clientes. El resultado es frágil y no escala.",
      "La planilla que funciona hasta que alguien la rompe. La fórmula que nadie más entiende. El archivo que vive en la computadora de una sola persona. Estos son síntomas de un sistema que ya llegó a su límite.",
    ],
  },
  solucion: {
    title: "Cómo lo resolvemos",
    pasos: [
      {
        icono: "🔍",
        titulo: "Auditamos qué usás en Excel y por qué",
        descripcion:
          "Relevamos cada planilla crítica: cotizaciones, pedidos, seguimiento. Entendemos la lógica que tiene y diseñamos su reemplazo.",
      },
      {
        icono: "🏗️",
        titulo: "Construimos el sistema a medida",
        descripcion:
          "Un sistema web que reemplaza exactamente lo que hacía el Excel, pero con validaciones, historial, multi-usuario y sin riesgo de corrupción.",
      },
      {
        icono: "🔄",
        titulo: "Migración progresiva sin corte abrupto",
        descripcion:
          "Implementamos el sistema en paralelo con el Excel existente. El equipo adopta el cambio gradualmente.",
      },
      {
        icono: "📊",
        titulo: "Visibilidad que el Excel nunca tuvo",
        descripcion:
          "Reportes automáticos, alertas y dashboards que muestran el estado de la operación sin que nadie tenga que armarlos.",
      },
    ],
  },
  casosRelacionados: ["oriplast-mobiliario-escolar", "metal-mad-modular-k"],
  faq: [
    {
      pregunta: "¿Puedo seguir exportando a Excel si lo necesito?",
      respuesta:
        "Sí. El sistema puede generar reportes exportables en Excel o CSV cuando sea necesario. La migración no implica perder esa posibilidad.",
    },
    {
      pregunta: "¿Qué pasa con los datos históricos que tengo en mis planillas?",
      respuesta:
        "Incluimos la migración de datos históricos en el proceso de implementación para que no pierdas el registro existente.",
    },
  ],
};
