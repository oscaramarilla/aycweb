import { SolucionConfig } from "./index";

export const whatsappVentasEmpresa: SolucionConfig = {
  slug: "whatsapp-ventas-empresa",
  metaTitle: "WhatsApp para Ventas de Empresa | AYCweb",
  metaDescription:
    "Convertí WhatsApp en tu canal de ventas más eficiente. Automatizá respuestas, enviá cotizaciones y hacé seguimiento sin perder ningún lead.",
  hero: {
    title: "WhatsApp como Canal de Ventas Profesional",
    subtitle:
      "Tus clientes ya están en WhatsApp. Tu empresa también debería estarlo, pero de forma organizada y automatizada.",
  },
  problema: {
    title: "¿Por qué esto frena tu operación?",
    paragraphs: [
      "Usar WhatsApp personal para ventas genera caos: conversaciones mezcladas, respuestas tardías, ningún registro y dependencia de una sola persona.",
      "Hay una forma mejor de hacerlo: multiagente, automatizado y con métricas reales.",
    ],
  },
  solucion: {
    title: "Cómo lo resolvemos",
    pasos: [
      {
        icono: "💬",
        titulo: "Configuramos WhatsApp Business API",
        descripcion:
          "Activamos la cuenta oficial para tu empresa con número dedicado y acceso multiagente.",
      },
      {
        icono: "🤖",
        titulo: "Automatizamos las respuestas frecuentes",
        descripcion:
          "Configuramos respuestas automáticas para las consultas más comunes: precios, disponibilidad, horarios.",
      },
      {
        icono: "🔗",
        titulo: "Conectamos el cotizador",
        descripcion:
          "Integramos el sistema de cotizaciones para que el cliente reciba su presupuesto directamente en el chat.",
      },
      {
        icono: "📈",
        titulo: "Implementamos seguimiento y métricas",
        descripcion:
          "Medimos tiempos de respuesta, tasas de conversión y rendimiento de cada agente desde un panel centralizado.",
      },
    ],
  },
  casosRelacionados: [],
  faq: [
    {
      pregunta: "¿Necesito cambiar mi número de WhatsApp actual?",
      respuesta:
        "No necesariamente. En muchos casos podemos migrar tu número actual a WhatsApp Business API.",
    },
    {
      pregunta: "¿Varios vendedores pueden atender desde el mismo número?",
      respuesta:
        "Sí, ese es uno de los grandes beneficios. Múltiples agentes atienden desde el mismo número con conversaciones separadas.",
    },
  ],
};
