// ─── CAPA CONFIG: Casos de obras / casos de éxito ────────────────────────────
// Fuente única de verdad para los datos de cada caso en producción.
// La UI en app/[lang]/(marketing)/obras/page.tsx consume este array.
//
// Métricas de impacto: viven en lib/config/obras/[slug].ts (una por cliente)
// y se importan aquí para mantener la config centralizada.

import type { MetricaImpacto, EvidenciaVisual } from "../domain/obra";
import { METRICAS_METAL_MAD } from "./obras/metal-mad-modular-k";

export type { MetricaImpacto, EvidenciaVisual };

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
  /**
   * Métricas de impacto cuantificado.
   * Si no está definido, el componente MetricasImpactoCard no se renderiza.
   */
  metricasImpacto?: MetricaImpacto[];
  /**
   * Evidencia visual del sistema en producción.
   * Si no está definido o está vacío, GaleriaEvidencia devuelve null.
   */
  evidenciaVisual?: EvidenciaVisual[];
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
    ctaMessage: "Quiero un sistema así para mi empresa",
    // metricasImpacto: pendiente confirmación post-sprint con el cliente
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
    ctaMessage: "Quiero un sistema así para mi empresa",
    // metricasImpacto: pendiente confirmación de números con el cliente
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
    ctaMessage: "Quiero un sistema así para mi empresa",
    metricasImpacto: METRICAS_METAL_MAD,
    evidenciaVisual: [
      {
        src: "/test-modular-exterior.webp",
        alt: "Cabina PIR modular Modular K — vista exterior en instalación",
        caption: "Cabina PIR modular en instalación, 2025",
        tipo: "mobile_view",
      },
      {
        src: "/test-modular-interior.webp",
        alt: "Cabina PIR modular Modular K — vista interior terminada",
        caption: "Interior cabina PIR terminada, 2025",
        tipo: "mobile_view",
      },
    ],
  },
  {
    id: "dr-nicolas-silvero-medicina",
    tag: "Salud & Profesionales",
    tagColor: "emerald",
    client: "Dr. Nicolás Ángel Silvero",
    industry: "Medicina especializada",
    problem:
      "La captación de pacientes dependía exclusivamente del boca a boca y llamadas telefónicas. Sin filtro previo, el consultorio recibía consultas fuera del perfil de su especialidad, lo que generaba pérdida de tiempo y una agenda desordenada.",
    solution: [
      "Landing de autoridad profesional orientada a conversión de pacientes calificados",
      "Formulario de precalificación por tipo de consulta y especialidad",
      "Integración con WhatsApp para confirmación y recordatorio automático de turnos",
    ],
    result:
      "Llegada de pacientes más calificados con expectativas claras. Agenda ordenada y menor tasa de cancelación. El consultorio redujo el tiempo perdido en consultas fuera del perfil.",
    ctaMessage: "Quiero un sistema así para mi empresa",
    // metricasImpacto: pendiente confirmación de números con el cliente
  },
  {
    id: "dr-jose-lahaye-salud",
    tag: "Salud & Profesionales",
    tagColor: "blue",
    client: "Dr. José Lahaye",
    industry: "Salud especializada",
    problem:
      "Sin presencia digital estructurada, el médico dependía de derivaciones internas y referencias personales para captar nuevos pacientes. No había manera de escalar ni de filtrar prospectos antes del primer contacto.",
    solution: [
      "Sitio de autoridad profesional con perfil, especialidades y credenciales verificables",
      "Sistema de agendamiento con filtro por tipo de consulta",
      "Canal WhatsApp estructurado con mensajes de precalificación automáticos",
    ],
    result:
      "Canal digital activo de captación sin depender de derivaciones. Los pacientes llegan con contexto claro sobre el médico y sus especialidades, reduciendo fricciones en el primer contacto.",
    ctaMessage: "Quiero un sistema así para mi empresa",
    // metricasImpacto: pendiente confirmación de números con el cliente
  },
];
