import type { Metadata } from "next";
import { AYCWEB_CONTACT, buildWaLink } from "@/lib/config/contact";

export const metadata: Metadata = {
  title: "Casos en Producción | Sistemas Operando | AYCweb",
  description:
    "Sistemas B2B reales operando en empresas de Paraguay: cotizadores automáticos, agendamiento con WhatsApp y calculadoras paramétricas con generación de PDF.",
};

// ─── DATOS DE CASOS EN PRODUCCIÓN ────────────────────────────────────────────

interface CaseStudy {
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

const CASES: CaseStudy[] = [
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

// ─── HELPERS ─────────────────────────────────────────────────────────────────

const tagStyles: Record<string, string> = {
  blue: "bg-blue-600/10 text-blue-400 border-blue-500/30",
  emerald: "bg-emerald-600/10 text-emerald-400 border-emerald-500/30",
  amber: "bg-amber-600/10 text-amber-400 border-amber-500/30",
};

const accentStyles: Record<string, string> = {
  blue: "text-blue-400",
  emerald: "text-emerald-400",
  amber: "text-amber-400",
};

const borderHoverStyles: Record<string, string> = {
  blue: "hover:border-blue-500/40",
  emerald: "hover:border-emerald-500/40",
  amber: "hover:border-amber-500/40",
};

const ctaStyles: Record<string, string> = {
  blue: "bg-blue-600 hover:bg-blue-500 shadow-[0_0_30px_rgba(37,99,235,0.35)]",
  emerald:
    "bg-emerald-600 hover:bg-emerald-500 shadow-[0_0_30px_rgba(16,185,129,0.35)]",
  amber:
    "bg-amber-600 hover:bg-amber-500 shadow-[0_0_30px_rgba(217,119,6,0.35)]",
};

const flowDotStyles: Record<string, string> = {
  blue: "bg-blue-500",
  emerald: "bg-emerald-500",
  amber: "bg-amber-500",
};

const resultBorderStyles: Record<string, string> = {
  blue: "border-blue-500/20",
  emerald: "border-emerald-500/20",
  amber: "border-amber-500/20",
};

// ─── COMPONENTE PRINCIPAL ─────────────────────────────────────────────────────

export default function ObrasPage() {
  const auditLink = buildWaLink(AYCWEB_CONTACT.globalMessages.auditB2B);

  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-slate-50 font-sans relative overflow-hidden pb-24">
      {/* Fondos */}
      <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay z-0" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* ── HERO ── */}
      <section className="relative pt-28 pb-12 md:pt-40 md:pb-16 px-6 text-center z-10">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-[11px] md:text-xs font-bold uppercase tracking-widest mb-6 shadow-sm">
            Casos en Producción
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 tracking-tighter leading-[1.05] text-white">
            Sistemas operando.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Resultados reales.
            </span>
          </h1>
          <p className="text-base md:text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
            No mostramos renders ni promesas genéricas. Estos son los sistemas
            que construimos, el problema que resolvieron y el resultado que
            dejaron en cada empresa.
          </p>
        </div>
      </section>

      {/* ── CASOS EN PRODUCCIÓN ── */}
      <section className="relative z-10 px-6 mb-20">
        <div className="max-w-5xl mx-auto space-y-12">
          {CASES.map((c, idx) => (
            <article
              key={c.id}
              className={`rounded-[2rem] border border-slate-800 bg-slate-900/50 overflow-hidden transition-colors duration-300 ${borderHoverStyles[c.tagColor]}`}
            >
              {/* Cabecera del caso */}
              <div className="px-6 md:px-10 pt-8 pb-6 border-b border-slate-800/60">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span
                    className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border ${tagStyles[c.tagColor]}`}
                  >
                    {c.tag}
                  </span>
                  <span className="text-[11px] text-slate-500 font-medium">
                    Caso #{String(idx + 1).padStart(2, "0")}
                  </span>
                </div>
                <h2 className={`text-2xl md:text-3xl font-black mb-1 ${accentStyles[c.tagColor]}`}>
                  {c.client}
                </h2>
                <p className="text-sm text-slate-500">{c.industry}</p>
              </div>

              {/* Cuerpo del caso: Problema → Solución → Resultado */}
              <div className="px-6 md:px-10 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Problema */}
                <div className="space-y-3">
                  <h3 className="text-[11px] font-black uppercase tracking-widest text-slate-500 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500 inline-block" />
                    Problema
                  </h3>
                  <p className="text-slate-300 text-[14px] leading-relaxed">
                    {c.problem}
                  </p>
                </div>

                {/* Solución */}
                <div className="space-y-3">
                  <h3 className="text-[11px] font-black uppercase tracking-widest text-slate-500 flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full inline-block ${flowDotStyles[c.tagColor]}`} />
                    Solución
                  </h3>
                  <ul className="space-y-2">
                    {c.solution.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span
                          className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${flowDotStyles[c.tagColor]}`}
                        />
                        <span className="text-slate-300 text-[14px] leading-snug">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Resultado */}
                <div className="space-y-3">
                  <h3 className="text-[11px] font-black uppercase tracking-widest text-slate-500 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
                    Resultado
                  </h3>
                  <div className={`bg-slate-950/60 rounded-xl border p-4 ${resultBorderStyles[c.tagColor]}`}>
                    <p className="text-slate-200 text-[14px] leading-relaxed">
                      {c.result}
                    </p>
                  </div>
                </div>

              </div>

              {/* CTA por caso */}
              <div className="px-6 md:px-10 pb-8">
                <a
                  href={buildWaLink(c.ctaMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 text-white font-black py-3 px-7 rounded-xl transition-all active:scale-95 text-[14px] ${ctaStyles[c.tagColor]}`}
                >
                  Quiero un sistema así para mi empresa
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="text-center relative z-10 border-t border-white/[0.05] pt-16 px-6 bg-[#04050a]">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            ¿Tu operación tiene un cuello de botella?
          </h2>
          <p className="text-slate-400 text-[15px] md:text-lg mb-8 leading-relaxed">
            Cada día sin sistema es un día perdiendo tiempo, dinero y
            oportunidades. Agendá una auditoría y te mostramos qué se puede
            automatizar en tu caso específico.
          </p>
          <a
            href={auditLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-black py-4 px-10 rounded-xl transition-all shadow-[0_0_30px_rgba(37,99,235,0.4)] active:scale-95 text-[15px]"
          >
            Agendar Auditoría B2B
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
}
