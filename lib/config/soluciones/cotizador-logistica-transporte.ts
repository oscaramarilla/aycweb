import { SolucionConfig } from "./index";

export const cotizadorLogisticaTransporte: SolucionConfig = {
  slug: "cotizador-logistica-transporte",
  metaTitle: "Cotizador de Flete y Logística para Empresas en Paraguay | AYCweb",
  metaDescription:
    "Automatizá la cotización de fletes y servicios logísticos en Paraguay. Motor de tarifas por distancia, carga y condiciones. Respuesta al cliente en minutos.",
  hero: {
    title: "Cotizador de Flete Logístico a Medida",
    subtitle:
      "Calculá tarifas de transporte automáticamente. Sin Excel, sin esperar al despachante, sin errores de margen.",
  },
  problema: {
    title: "¿Por qué esto frena tu operación?",
    paragraphs: [
      "Las empresas de logística y transporte en Paraguay pierden clientes mientras calculan tarifas manualmente. El cliente pide precio, y la respuesta llega horas después — cuando ya cerró con la competencia.",
      "Las variables de flete son complejas: distancia, peso, volumen, tipo de carga, seguros, peajes. Centralizar todo eso en un sistema que calcule solo es el único camino para escalar.",
    ],
  },
  solucion: {
    title: "Cómo lo resolvemos",
    pasos: [
      {
        icono: "🗺️",
        titulo: "Mapeamos tus rutas y tarifas",
        descripcion:
          "Relevamos tus variables de cotización: zonas, tipos de carga, condiciones especiales y márgenes por cliente.",
      },
      {
        icono: "⚙️",
        titulo: "Construimos el motor de tarifas",
        descripcion:
          "El sistema calcula el precio del flete según las reglas de tu empresa. El operador ingresa los datos y obtiene el precio en segundos.",
      },
      {
        icono: "📄",
        titulo: "Genera remito o cotización en PDF",
        descripcion:
          "Cada servicio genera documentación formal: cotización, remito o nota de entrega, con tu marca y datos del cliente.",
      },
      {
        icono: "📲",
        titulo: "Confirma pedidos por WhatsApp",
        descripcion:
          "El cliente recibe la cotización con un enlace para aprobar el servicio directamente desde su celular.",
      },
    ],
  },
  casosRelacionados: ["oriplast-mobiliario-escolar"],
  faq: [
    {
      pregunta: "¿El sistema puede manejar tarifas diferenciadas por cliente?",
      respuesta:
        "Sí. Podemos configurar listas de precios por segmento de cliente, contratos especiales o rutas frecuentes con tarifas negociadas.",
    },
    {
      pregunta: "¿Puedo integrar el cotizador con mi sistema de despacho?",
      respuesta:
        "Dependiendo de la herramienta que usás actualmente, evaluamos la integración. Trabajamos con APIs y webhooks para conectar sistemas existentes.",
    },
  ],
};
