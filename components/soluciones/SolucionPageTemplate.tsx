// ─── TEMPLATE: SolucionPageTemplate ──────────────────────────────────────────
// Server Component — no "use client" necesario.
// Renderiza la config tipada en: Hero → Problema → Pasos → Casos → FAQ → CTA
// Para cambiar el contenido: editar lib/config/soluciones/[slug].ts
// Para cambiar el diseño:    editar este archivo.

import Link from "next/link";
import type { SolucionConfig } from "@/lib/config/soluciones";
import type { CasoObra } from "@/lib/config/obras";
import { buildWaLink, AYCWEB_CONTACT } from "@/lib/config/contact";

interface Props {
  config: SolucionConfig;
  /** Casos de CASOS_OBRAS pre-filtrados por config.casosRelacionados */
  casosRelacionados: CasoObra[];
}

// ─── Helpers de estilo ────────────────────────────────────────────────────────

const TAG_COLOR_STYLES: Record<string, string> = {
  blue: "bg-blue-600/10 text-blue-400 border-blue-500/30",
  emerald: "bg-emerald-600/10 text-emerald-400 border-emerald-500/30",
  amber: "bg-amber-600/10 text-amber-400 border-amber-500/30",
};

const ACCENT_STYLES: Record<string, string> = {
  blue: "text-blue-400",
  emerald: "text-emerald-400",
  amber: "text-amber-400",
};

// ─── Componente principal ─────────────────────────────────────────────────────

export function SolucionPageTemplate({ config, casosRelacionados }: Props) {
  const diagnosticoWaLink = buildWaLink(
    `Hola Oscar. Llegué desde la landing "${config.hero.title}" y quiero hacer el Diagnóstico Comercial Express.`
  );
  const auditLink = buildWaLink(AYCWEB_CONTACT.globalMessages.auditB2B);

  // ── JSON-LD BreadcrumbList ─────────────────────────────────────────────────
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.aycweb.com" },
      { "@type": "ListItem", position: 2, name: "Soluciones", item: "https://www.aycweb.com/soluciones" },
      { "@type": "ListItem", position: 3, name: config.hero.title, item: `https://www.aycweb.com/soluciones/${config.slug}` },
    ],
  };

  // ── JSON-LD FAQPage (solo si hay FAQ) ──────────────────────────────────────
  const faqJsonLd =
    config.faq && config.faq.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: config.faq.map((item) => ({
            "@type": "Question",
            name: item.pregunta,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.respuesta,
            },
          })),
        }
      : null;

  return (
    <>
      {/* ── JSON-LD Schema.org ─────────────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      <div className="flex flex-col min-h-screen bg-slate-950 text-slate-50 font-sans relative overflow-hidden">
        {/* Fondos decorativos */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[url('/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay z-0"
        />
        <div
          aria-hidden="true"
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[700px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10"
        />

        {/* ================================================================= */}
        {/* 1. HERO                                                            */}
        {/* ================================================================= */}
        <section
          aria-labelledby="hero-heading"
          className="relative pt-28 pb-16 md:pt-40 md:pb-20 px-6 text-center z-10 border-b border-white/[0.05]"
        >
          <div className="max-w-4xl mx-auto">
            {/* Badge sector */}
            <span className="inline-block px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-[11px] font-bold uppercase tracking-widest mb-6 shadow-sm">
              Solución AYCweb · Paraguay
            </span>

            {/* H1 */}
            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tighter leading-[1.05] text-white"
            >
              {config.hero.title}
            </h1>

            {/* Subtítulo */}
            <p className="text-base md:text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed mb-10">
              {config.hero.subtitle}
            </p>

            {/* CTA Hero */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/es/diagnostico-comercial"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-black py-4 px-8 rounded-xl transition-all shadow-[0_0_30px_rgba(37,99,235,0.4)] active:scale-95 text-[15px]"
              >
                <span>⚡</span>
                Diagnóstico Comercial Express (5 min)
              </Link>
              <a
                href={auditLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 border border-slate-700 hover:border-slate-500 text-slate-200 font-bold py-4 px-8 rounded-xl transition-all text-[15px]"
              >
                Agendar Auditoría B2B
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
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
          </div>
        </section>

        {/* ================================================================= */}
        {/* 2. PROBLEMA PRINCIPAL                                              */}
        {/* ================================================================= */}
        <section
          aria-labelledby="problema-heading"
          className="relative z-10 py-16 md:py-24 px-6 bg-[#04050a] border-b border-white/[0.05]"
        >
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <span
                className="w-3 h-3 rounded-full bg-red-500 shrink-0"
                aria-hidden="true"
              />
              <span className="text-[11px] font-black uppercase tracking-widest text-slate-500">
                El Problema
              </span>
            </div>
            <h2
              id="problema-heading"
              className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight"
            >
              ¿Por qué esto frena tu operación?
            </h2>
            <div className="prose prose-invert prose-lg max-w-none space-y-4">
              {config.problema.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="text-slate-300 text-[15px] md:text-lg leading-relaxed"
                >
                  {p}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* 3. CÓMO LO RESOLVEMOS                                             */}
        {/* ================================================================= */}
        <section
          aria-labelledby="pasos-heading"
          className="relative z-10 py-16 md:py-24 px-6"
        >
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span
                  className="w-3 h-3 rounded-full bg-blue-500 shrink-0"
                  aria-hidden="true"
                />
                <span className="text-[11px] font-black uppercase tracking-widest text-slate-500">
                  Nuestra solución
                </span>
              </div>
              <h2
                id="pasos-heading"
                className="text-3xl md:text-4xl font-black text-white leading-tight"
              >
                Cómo lo resolvemos
              </h2>
            </div>

            <ol className="grid grid-cols-1 md:grid-cols-2 gap-6" role="list">
              {config.solucion.pasos.map((paso, idx) => (
                <li
                  key={idx}
                  className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 hover:border-blue-500/30 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    {/* Número de paso */}
                    <div
                      className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 font-black text-sm shrink-0"
                      aria-label={`Paso ${idx + 1}`}
                    >
                      {idx + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xl" aria-hidden="true">
                          {paso.icono}
                        </span>
                        <h3 className="text-white font-bold text-[15px] leading-snug">
                          {paso.titulo}
                        </h3>
                      </div>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {paso.descripcion}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ================================================================= */}
        {/* 4. CASOS REALES RELACIONADOS                                       */}
        {/* ================================================================= */}
        {casosRelacionados.length > 0 && (
          <section
            aria-labelledby="casos-heading"
            className="relative z-10 py-16 md:py-24 px-6 bg-[#04050a] border-y border-white/[0.05]"
          >
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-10 md:mb-14">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <span
                    className="w-3 h-3 rounded-full bg-green-500 shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-[11px] font-black uppercase tracking-widest text-slate-500">
                    Casos en Producción
                  </span>
                </div>
                <h2
                  id="casos-heading"
                  className="text-3xl md:text-4xl font-black text-white leading-tight"
                >
                  Empresas que ya lo resolvieron
                </h2>
                <p className="text-slate-400 mt-3 text-[15px] max-w-xl mx-auto">
                  Sistemas reales operando. Sin promesas genéricas.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {casosRelacionados.map((caso) => {
                  const tagStyle =
                    TAG_COLOR_STYLES[caso.tagColor] ||
                    TAG_COLOR_STYLES["blue"];
                  const accentStyle =
                    ACCENT_STYLES[caso.tagColor] || ACCENT_STYLES["blue"];

                  return (
                    <article
                      key={caso.id}
                      className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 hover:border-slate-600 transition-colors flex flex-col"
                    >
                      {/* Tag */}
                      <span
                        className={`inline-block self-start text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border mb-4 ${tagStyle}`}
                      >
                        {caso.tag}
                      </span>

                      {/* Cliente */}
                      <h3 className={`text-lg font-black mb-1 ${accentStyle}`}>
                        {caso.client}
                      </h3>
                      <p className="text-xs text-slate-500 mb-4">
                        {caso.industry}
                      </p>

                      {/* Resultado */}
                      <p className="text-slate-400 text-[13px] leading-relaxed flex-1 mb-5">
                        {caso.result}
                      </p>

                      {/* Link al caso completo */}
                      <Link
                        href={`/es/obras#${caso.id}`}
                        className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 text-[13px] font-bold transition-colors group"
                      >
                        Ver caso completo
                        <svg
                          className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </Link>
                    </article>
                  );
                })}
              </div>

              {/* Link a todos los casos */}
              <div className="text-center mt-10">
                <Link
                  href="/es/obras"
                  className="inline-flex items-center gap-2 text-slate-400 hover:text-white text-sm font-semibold transition-colors border border-slate-700 hover:border-slate-500 px-6 py-3 rounded-xl"
                >
                  Ver todos los casos en producción
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* ================================================================= */}
        {/* 5. FAQ (con JSON-LD ya inyectado arriba)                          */}
        {/* ================================================================= */}
        {config.faq && config.faq.length > 0 && (
          <section
            aria-labelledby="faq-heading"
            className="relative z-10 py-16 md:py-24 px-6"
          >
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-10 md:mb-14">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <span
                    className="w-3 h-3 rounded-full bg-purple-500 shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-[11px] font-black uppercase tracking-widest text-slate-500">
                    Preguntas frecuentes
                  </span>
                </div>
                <h2
                  id="faq-heading"
                  className="text-3xl md:text-4xl font-black text-white leading-tight"
                >
                  Dudas comunes antes de empezar
                </h2>
              </div>

              {/* Acordeón nativo — sin JS, accesible, SEO-friendly */}
              <dl className="space-y-3">
                {config.faq!.map((item, idx) => (
                  <details
                    key={idx}
                    className="group bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-600 transition-colors"
                  >
                    <summary
                      className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none select-none"
                      aria-expanded="false"
                    >
                      <dt className="text-white font-bold text-[15px] leading-snug flex-1">
                        {item.pregunta}
                      </dt>
                      {/* Ícono chevron */}
                      <span
                        className="text-slate-500 shrink-0 transition-transform duration-200 group-open:rotate-45"
                        aria-hidden="true"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 4v16m8-8H4"
                          />
                        </svg>
                      </span>
                    </summary>
                    <dd className="px-6 pb-5 text-slate-400 text-[14px] leading-relaxed border-t border-slate-800/60 pt-4 mt-0">
                      {item.respuesta}
                    </dd>
                  </details>
                ))}
              </dl>
            </div>
          </section>
        )}

        {/* ================================================================= */}
        {/* 6. CTA FINAL — Diagnóstico Comercial Express                       */}
        {/* ================================================================= */}
        <section
          aria-labelledby="cta-heading"
          className="relative z-10 py-20 md:py-32 px-6 bg-[#04050a] border-t border-white/[0.05] text-center"
        >
          <div
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-600/8 rounded-full blur-[100px] pointer-events-none"
          />
          <div className="max-w-2xl mx-auto relative z-10">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/50 border border-blue-500/20 text-blue-300 text-[11px] font-bold uppercase tracking-[0.2em] mb-6">
              <span aria-hidden="true">⚡</span>
              5 minutos · Sin compromiso
            </span>

            <h2
              id="cta-heading"
              className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight"
            >
              ¿Tu operación tiene este problema?
            </h2>
            <p className="text-slate-400 text-[15px] md:text-lg mb-10 leading-relaxed">
              Hacé el Diagnóstico Comercial Express: 6 preguntas en 5 minutos y
              te decimos exactamente qué sistema le conviene a tu negocio.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* CTA Principal — Diagnóstico en web (no abre WA directo) */}
              <Link
                href="/es/diagnostico-comercial"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-black py-4 px-10 rounded-xl transition-all shadow-[0_0_40px_rgba(37,99,235,0.35)] active:scale-95 text-[15px]"
              >
                <span aria-hidden="true">💬</span>
                Empezar Diagnóstico Gratis
              </Link>

              {/* CTA Secundario — WA directo */}
              <a
                href={diagnosticoWaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 border border-slate-700 hover:border-green-500/50 hover:bg-green-950/20 text-slate-300 hover:text-green-300 font-bold py-4 px-8 rounded-xl transition-all text-[14px]"
              >
                <span aria-hidden="true">📲</span>
                Escribir directamente por WhatsApp
              </a>
            </div>

            <p className="text-slate-600 text-xs mt-6">
              Sin costo. Sin compromiso. Si no hay encaje, te lo decimos de frente.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
