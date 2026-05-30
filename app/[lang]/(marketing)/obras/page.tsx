import type { Metadata } from "next";
import Link from "next/link";
import { AYCWEB_CONTACT, buildWaLink } from "../../../../lib/config/contact";
import { SHOWROOM } from "../../../../lib/config/showroom";
import { CASOS_OBRAS } from "../../../../lib/config/obras";
import { VideoCard } from "../../../../components/obras/VideoShowroom";

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
    canonical: "https://www.aycweb.com/es/obras",
  },
  openGraph: {
    title: "Casos de Éxito y Sistemas Implementados | AYCweb Paraguay",
    description:
      "Sistemas B2B reales operando en empresas de Paraguay: cotizadores automáticos, agendamiento con WhatsApp y calculadoras paramétricas con generación de PDF.",
    url: "https://www.aycweb.com/es/obras",
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

// ─── COMPONENTE PRINCIPAL ─────────────────────────────────────────────────────

export default function ObrasPage() {
  const auditLink = buildWaLink(AYCWEB_CONTACT.globalMessages.auditB2B);

  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-slate-50 font-sans relative overflow-hidden pb-24">
      <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay z-0" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Hero */}
      <section className="relative pt-28 pb-12 md:pt-40 md:pb-16 px-6 text-center z-10">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-[11px] md:text-xs font-bold uppercase tracking-widest mb-6 shadow-sm">
            Showroom Operativo
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 tracking-tighter leading-[1.05] text-white">
            Nuestras Obras.
          </h1>
          <p className="text-base md:text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
            No mostramos renders ni promesas genéricas. Este showroom presenta los sistemas en funcionamiento, con enfoque en el valor real que entregan.
          </p>
        </div>
      </section>

      {/* Showroom de Videos (sin cambios) */}
      <section className="relative z-10 px-6 mb-20">
        <div className="max-w-6xl mx-auto space-y-14">

          {/* Destacado */}
          <div className="max-w-sm mx-auto">
            <VideoCard video={SHOWROOM.main} featured />
          </div>

          {/* Grilla de 4 videos secundarios */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SHOWROOM.secondary.map((v) => (
              <VideoCard key={v.id} video={v} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── CASOS DE ÉXITO (FICHAS TÉCNICAS) ──────────────────────────── */}
      <section className="relative z-10 px-6 mb-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
              Sistemas en Producción (Casos de Éxito)
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-base md:text-lg">
              No mostramos solo trabajos visuales. Mostramos sistemas en producción que ahorran tiempo, reducen fricción operativa y ayudan a vender mejor.
            </p>
          </div>

          <div className="space-y-10">
            {CASOS_OBRAS.map((caso) => (
              <article
                key={caso.id}
                className="rounded-2xl border border-slate-800 bg-slate-900/50 overflow-hidden hover:border-slate-700 transition-colors"
              >
                {/* Header del caso */}
                <div className="p-6 md:p-8 border-b border-slate-800">
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest ${
                        caso.tagColor === "blue"
                          ? "bg-blue-950/40 text-blue-300 border border-blue-500/20"
                          : caso.tagColor === "emerald"
                          ? "bg-emerald-950/40 text-emerald-300 border border-emerald-500/20"
                          : "bg-amber-950/40 text-amber-300 border border-amber-500/20"
                      }`}
                    >
                      {caso.tag}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-white">
                    {caso.client}
                  </h3>
                  <p className="text-sm text-slate-500 mt-1">{caso.industry}</p>
                </div>

                {/* Cuerpo: Problema / Solución / Resultado */}
                <div className="p-6 md:p-8 space-y-6">

                  {/* El Problema */}
                  <div>
                    <h4 className="text-[11px] uppercase tracking-widest font-bold text-slate-500 mb-2 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                      El Problema
                    </h4>
                    <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                      {caso.problem}
                    </p>
                  </div>

                  {/* Solución AYCweb */}
                  <div>
                    <h4 className="text-[11px] uppercase tracking-widest font-bold text-slate-500 mb-2 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      Solución AYCweb
                    </h4>
                    <ul className="space-y-2">
                      {caso.solution.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm md:text-base text-slate-300">
                          <span className="text-blue-400 font-black mt-0.5">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* EL RESULTADO (ROI) — destacado */}
                  <div className="rounded-xl border border-emerald-500/20 bg-emerald-950/10 p-5">
                    <h4 className="text-[11px] uppercase tracking-widest font-bold text-emerald-400 mb-2 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      RESULTADO OPERATIVO
                    </h4>
                    <p className="text-white font-bold text-base md:text-lg leading-relaxed">
                      {caso.result}
                    </p>
                  </div>

                  {/* Evidencia visual si existe */}
                  {caso.evidenciaVisual && caso.evidenciaVisual.length > 0 && (
                    <div className="grid grid-cols-2 gap-3">
                      {caso.evidenciaVisual.map((ev, i) => (
                        <figure key={i} className="rounded-xl overflow-hidden border border-slate-800">
                          <img
                            src={ev.src}
                            alt={ev.alt}
                            className="w-full h-40 object-cover"
                            loading="lazy"
                          />
                          {ev.caption && (
                            <figcaption className="text-[11px] text-slate-500 px-3 py-2 bg-slate-950/80">
                              {ev.caption}
                            </figcaption>
                          )}
                        </figure>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Bloque: Cada sistema bien diseñado recupera tiempo */}
      <section className="relative z-10 px-6 mb-12">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-black text-white mb-4">
            Cada sistema bien diseñado recupera tiempo
          </h3>
          <p className="text-slate-400 text-base md:text-lg leading-relaxed">
            Una infraestructura digital filtra consultas, acelera presupuestos y ordena oportunidades. Eso construimos: máquinas comerciales que convierten procesos lentos en métricas medibles.
          </p>
        </div>
      </section>

      {/* CTA final */}
      <section className="relative z-10 px-6">
        <div className="rounded-[2rem] border border-slate-800 bg-slate-950/80 p-7 max-w-lg mx-auto text-center">
          <h3 className="text-2xl font-black text-white">¿Tu operación sufre problemas similares?</h3>
          <p className="mt-4 text-slate-400 leading-relaxed">
            Si tu empresa enfrenta cuellos de botella en cotización, seguimiento de pedidos o captación de clientes, solicité un diagnóstico B2B sin costo.
          </p>
          <Link
            href="/es/diagnostico-comercial"
            className="mt-8 inline-flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-500 text-white font-black py-4 px-6 rounded-xl transition-all shadow-[0_0_30px_rgba(37,99,235,0.3)]"
          >
            Solicitar Diagnóstico B2B
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}