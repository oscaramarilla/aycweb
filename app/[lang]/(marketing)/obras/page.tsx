import type { Metadata } from "next";
import { AYCWEB_CONTACT, buildWaLink } from "../../../../lib/config/contact";
import { CASOS_OBRAS } from "../../../../lib/config/obras";
import { MetricasImpactoCard } from "../../../../components/obras/MetricasImpactoCard";
import GaleriaEvidencia from "../../../../components/obras/GaleriaEvidencia";

export const metadata: Metadata = {
  title: "Casos de Éxito y Sistemas Implementados | AYCweb Paraguay",
  description:
    "Casos reales de sistemas B2B operando en empresas paraguayas: cotizadores automáticos, agendamiento con WhatsApp y calculadoras paramétricas con generación de PDF. Resultados medibles, cero promesas genéricas.",
  keywords: [
    "casos de éxito sistemas B2B paraguay",
    "sistemas implementados empresas paraguay",
    "cotizador automático paraguay",
    "calculadora paramétrica PDF",
    "automatización comercial paraguay",
    "casos reales software empresarial",
    "AYCweb obras",
  ],
  alternates: {
    canonical: "https://aycweb.com/es/obras",
  },
  openGraph: {
    title: "Casos de Éxito y Sistemas Implementados | AYCweb Paraguay",
    description:
      "Sistemas B2B reales operando en empresas de Paraguay: cotizadores automáticos, agendamiento con WhatsApp y calculadoras paramétricas con generación de PDF.",
    url: "https://aycweb.com/es/obras",
    siteName: "AYCweb",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Casos de Éxito B2B - AYCweb Paraguay",
      },
    ],
    locale: "es_PY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Casos de Éxito y Sistemas Implementados | AYCweb Paraguay",
    description:
      "Sistemas B2B reales operando en empresas de Paraguay: cotizadores automáticos, agendamiento con WhatsApp y calculadoras paramétricas con PDF.",
    images: ["/og-image.jpg"],
  },
};

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

/** Estilos del badge de métrica destacada en el encabezado de la card */
const metricBadgeStyles: Record<string, string> = {
  blue: "bg-blue-500/10 text-blue-300 border-blue-500/25",
  emerald: "bg-emerald-500/10 text-emerald-300 border-emerald-500/25",
  amber: "bg-amber-500/10 text-amber-300 border-amber-500/25",
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
          {CASOS_OBRAS.map((c, idx) => {
            // Métrica destacada: primera métrica disponible para el badge del encabezado
            const metricaDestacada = c.metricasImpacto?.[0];

            return (
              <article
                key={c.id}
                id={c.id}
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

                    {/* ── Badge de métrica destacada (sólo si hay métricas) ── */}
                    {metricaDestacada && (
                      <span
                        className={`inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full border ${metricBadgeStyles[c.tagColor]}`}
                        title={`${metricaDestacada.label}: ${metricaDestacada.antes} → ${metricaDestacada.despues}`}
                      >
                        <svg
                          className="w-3 h-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2.5"
                            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                          />
                        </svg>
                        {metricaDestacada.label}: {metricaDestacada.antes} → {metricaDestacada.despues}
                      </span>
                    )}

                    {/* ── Badge de evidencia visual (sólo si hay imágenes) ── */}
                    {c.evidenciaVisual && c.evidenciaVisual.length > 0 && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full border bg-violet-500/10 text-violet-300 border-violet-500/25">
                        📸 Ver evidencia ({c.evidenciaVisual.length})
                      </span>
                    )}
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

                {/* ── Métricas de impacto cuantificado (sólo si existen) ── */}
                {c.metricasImpacto && c.metricasImpacto.length > 0 && (
                  <MetricasImpactoCard
                    metricas={c.metricasImpacto}
                    accentColor={c.tagColor as "blue" | "emerald" | "amber"}
                  />
                )}

                {/* ── Galería de evidencia visual (devuelve null si no hay imágenes) ── */}
                <GaleriaEvidencia evidencia={c.evidenciaVisual ?? []} />

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
            );
          })}
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
