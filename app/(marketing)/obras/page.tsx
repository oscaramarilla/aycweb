import type { Metadata } from "next";
import { AYCWEB_CONTACT, buildWaLink } from "@/lib/config/contact";

export const metadata: Metadata = {
  title: "Casos de Estudio B2B | Sistemas Implementados | AYCweb",
  description:
    "Resultados operativos reales: cotizadores automáticos, generación de PDFs, agendamiento con WhatsApp y motores B2B para empresas en Paraguay.",
};

// ─── DATOS DE CASOS DE ESTUDIO ───────────────────────────────────────────────

interface CaseStudy {
  id: string;
  tag: string;
  tagColor: string;
  industry: string;
  client: string;
  problem: string;
  stack: string[];
  valueFlow: string[];
  result: string;
  resultMetric?: string;
  ctaMessage: string;
}

const CASES: CaseStudy[] = [
  {
    id: "logistica-constructora",
    tag: "Logística & Construcción",
    tagColor: "blue",
    industry: "Constructora / Proveedor de materiales",
    client: "Empresa de materiales de construcción y logística",
    problem:
      "El equipo comercial tardaba entre 2 y 4 horas en armar cada cotización manualmente en Excel. Los errores de cálculo eran frecuentes, los PDFs no tenían identidad corporativa y el seguimiento de cada presupuesto dependía de la memoria del vendedor.",
    stack: [
      "Next.js (motor de cotización web)",
      "Generación dinámica de PDF (React-PDF / Puppeteer)",
      "Lógica de precios por m², etapa y proveedor",
      "WhatsApp API para envío automático",
      "Panel interno de historial de cotizaciones",
    ],
    valueFlow: [
      "Lead ingresa datos del proyecto",
      "Motor calcula precio por etapa y material",
      "PDF con identidad corporativa generado al instante",
      "Enviado automáticamente por WhatsApp",
      "Vendedor recibe alerta y cierra",
    ],
    result:
      "De 3 horas a menos de 4 minutos por cotización. Cero errores de cálculo. El equipo comercial pasó de hacer planillas a cerrar ventas.",
    resultMetric: "−97% tiempo de cotización",
    ctaMessage:
      "Hola Oscar. Vi el caso de la constructora en AYCweb y quiero un sistema de cotización automática con PDF para mi empresa.",
  },
  {
    id: "clinica-odontologica",
    tag: "Salud & Profesionales",
    tagColor: "emerald",
    industry: "Clínica Odontológica",
    client: "Clínica dental con múltiples especialidades",
    problem:
      "La recepcionista gestionaba turnos por WhatsApp de forma manual, sin filtro previo. Muchos pacientes llegaban sin saber el costo estimado, generando cancelaciones de último momento y tiempo perdido en consultas no calificadas.",
    stack: [
      "Formulario de precalificación web (Next.js)",
      "Lógica de triaje por tipo de tratamiento",
      "Integración con Google Calendar",
      "WhatsApp automático de confirmación y recordatorio",
      "Panel de agenda para la recepcionista",
    ],
    valueFlow: [
      "Paciente completa formulario de precalificación",
      "Sistema filtra por tipo de tratamiento y urgencia",
      "Paciente recibe horarios disponibles por WhatsApp",
      "Confirma turno → entra al calendario automáticamente",
      "Recordatorio automático 24h antes",
    ],
    result:
      "Reducción del 60% en cancelaciones de último momento. La recepcionista dejó de gestionar WhatsApp manualmente y la clínica pasó a recibir solo pacientes precalificados.",
    resultMetric: "−60% cancelaciones",
    ctaMessage:
      "Hola Oscar. Vi el caso de la clínica odontológica en AYCweb y quiero un sistema de agendamiento con precalificación y WhatsApp para mi consultorio.",
  },
];

// ─── HELPERS ─────────────────────────────────────────────────────────────────

const tagStyles: Record<string, string> = {
  blue: "bg-blue-600/10 text-blue-400 border-blue-500/30",
  emerald: "bg-emerald-600/10 text-emerald-400 border-emerald-500/30",
};

const accentStyles: Record<string, string> = {
  blue: "text-blue-400",
  emerald: "text-emerald-400",
};

const borderHoverStyles: Record<string, string> = {
  blue: "hover:border-blue-500/40",
  emerald: "hover:border-emerald-500/40",
};

const ctaStyles: Record<string, string> = {
  blue: "bg-blue-600 hover:bg-blue-500 shadow-[0_0_30px_rgba(37,99,235,0.35)]",
  emerald:
    "bg-emerald-600 hover:bg-emerald-500 shadow-[0_0_30px_rgba(16,185,129,0.35)]",
};

const flowDotStyles: Record<string, string> = {
  blue: "bg-blue-500",
  emerald: "bg-emerald-500",
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
            Casos de Estudio B2B
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 tracking-tighter leading-[1.05] text-white">
            Sistemas implementados.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Operaciones transformadas.
            </span>
          </h1>
          <p className="text-base md:text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
            No mostramos renders ni promesas genéricas. Acá están los sistemas
            que construimos, el problema que resolvieron y el resultado
            comprobable que dejaron.
          </p>
        </div>
      </section>

      {/* ── CASOS DE ESTUDIO ── */}
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
                <h2 className="text-xl md:text-2xl font-black text-white mb-1">
                  {c.industry}
                </h2>
                <p className="text-sm text-slate-500">{c.client}</p>
              </div>

              {/* Cuerpo del caso */}
              <div className="px-6 md:px-10 py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Columna izquierda */}
                <div className="space-y-6">
                  {/* Problema */}
                  <div>
                    <h3 className="text-[11px] font-black uppercase tracking-widest text-slate-500 mb-2">
                      🔴 El caos anterior
                    </h3>
                    <p className="text-slate-300 text-[15px] leading-relaxed">
                      {c.problem}
                    </p>
                  </div>

                  {/* Stack */}
                  <div>
                    <h3 className="text-[11px] font-black uppercase tracking-widest text-slate-500 mb-3">
                      ⚙️ Sistema implementado
                    </h3>
                    <ul className="space-y-2">
                      {c.stack.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span
                            className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${flowDotStyles[c.tagColor]}`}
                          />
                          <span className="text-slate-300 text-[14px]">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Columna derecha */}
                <div className="space-y-6">
                  {/* Flujo de valor */}
                  <div>
                    <h3 className="text-[11px] font-black uppercase tracking-widest text-slate-500 mb-3">
                      🔄 Flujo de valor
                    </h3>
                    <ol className="space-y-2">
                      {c.valueFlow.map((step, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="shrink-0 w-5 h-5 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-[10px] font-bold text-slate-400">
                            {i + 1}
                          </span>
                          <span className="text-slate-300 text-[14px] leading-snug pt-0.5">
                            {step}
                          </span>
                        </li>
                      ))}
                    </ol>
                  </div>

                  {/* Resultado */}
                  <div className="bg-slate-950/60 rounded-xl border border-slate-800 p-5">
                    <h3 className="text-[11px] font-black uppercase tracking-widest text-slate-500 mb-2">
                      ✅ Resultado visible
                    </h3>
                    <p className="text-slate-200 text-[14px] leading-relaxed mb-3">
                      {c.result}
                    </p>
                    {c.resultMetric && (
                      <span
                        className={`text-2xl font-black ${accentStyles[c.tagColor]}`}
                      >
                        {c.resultMetric}
                      </span>
                    )}
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
