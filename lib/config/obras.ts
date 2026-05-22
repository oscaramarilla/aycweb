// ─── CAPA CONFIG: Casos de obras / casos de éxito ────────────────────────────
// Fuente única de verdad para los datos de cada caso en producción.
// La UI en app/[lang]/(marketing)/obras/page.tsx consume este array.

export interface CasoObra {
  id: string;
  tag: string;
  tagColor: string;
  client: string;
  industry: string;
  problem: string;
  solution: string[];
  result: string;
  ctaMessage: string;
}

export const CASOS_OBRAS: CasoObra[] = [
  {
    id: "oriplast-mobiliario-escolar",
    tag: "Mobiliario Escolar B2B",
    tagColor: "blue",
    client: "Oriplast",
    industry: "Fabricante de pupitres y mesas escolares",
    problem:
      "El equipo comercial cotizaba lotes de pupitres y mesas de forma manual: planillas Excel, cálculos a mano y respuestas que tardaban horas. Cada error de precio o cantidad generaba retrabajo y pérdida de oportunidades.",
    solution: [
      "Cotizador B2B dinámico con lógica de precios por volumen y modelo",
      "Integración directa con WhatsApp para envío inmediato de la cotización",
      "Interfaz pensada para el cliente mayorista: rápida y sin fricción",
    ],
    result:
      "Respuesta comercial inmediata desde el primer contacto. Cero errores de cálculo. El equipo dejó de hacer planillas y empezó a cerrar ventas.",
    ctaMessage:
      "Hola Oscar. Vi el caso de Oriplast en AYCweb y quiero un cotizador B2B dinámico para mi empresa.",
  },
  {
    id: "dra-bianca-odontologia",
    tag: "Salud & Profesionales",
    tagColor: "emerald",
    client: "Dra. Bianca",
    industry: "Odontología",
    problem:
      "Los turnos y la captación de pacientes estaban dispersos: WhatsApp sin filtro, pacientes que llegaban sin saber el costo estimado y cancelaciones de último momento que dejaban huecos en la agenda.",
    solution: [
      "Landing especializada orientada a conversión de pacientes",
      "Formulario de precalificación que filtra por tipo de tratamiento",
      "Integración con WhatsApp para confirmación y recordatorio automático",
    ],
    result:
      "Flujo ordenado de pacientes en la agenda. Solo ingresan pacientes precalificados, con expectativas claras y menor tasa de cancelación.",
    ctaMessage:
      "Hola Oscar. Vi el caso de la Dra. Bianca en AYCweb y quiero un sistema de agendamiento con precalificación para mi consultorio.",
  },
  {
    id: "metal-mad-modular-k",
    tag: "Industria & Construcción",
    tagColor: "amber",
    client: "Metal Mad / Modular K",
    industry: "Estructuras metálicas y cabinas PIR modulares",
    problem:
      "Los presupuestos técnicos de estructuras metálicas y cabinas PIR son complejos: múltiples variables, medidas personalizadas y especificaciones difíciles de explicar al cliente sin soporte visual ni documentación clara.",
    solution: [
      "Calculadora paramétrica que procesa dimensiones, materiales y configuraciones",
      "Generación automática de PDF con detalle técnico y presentación comercial",
      "Flujo de venta corporativa trazable desde la consulta hasta el cierre",
    ],
    result:
      "Venta corporativa más profesional y trazable. El cliente recibe un documento claro, el equipo técnico ahorra horas de armado y el cierre es más rápido.",
    ctaMessage:
      "Hola Oscar. Vi el caso de Metal Mad / Modular K en AYCweb y quiero una calculadora paramétrica con generación de PDF para mi empresa.",
  },
];
