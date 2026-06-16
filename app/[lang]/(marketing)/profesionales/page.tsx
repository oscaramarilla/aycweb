import type { Metadata } from "next";
import { buildWaLink } from "@/lib/config/contact";
import { CheckoutForm } from "@/components/checkout/CheckoutForm";
import { PLANES_PRECIOS, TEXTO_FINANCIAMIENTO } from "@/lib/config/precios";
import PricingCard from "@/components/pricing/PricingCard";
import { getDictionary } from "@/lib/i18n";

const START = PLANES_PRECIOS.starter;

// Planes disponibles para el checkout directo de profesionales
const PLANES_PROF = [
  { nombre: `AYCweb Start - Activación (USD ${START.setupTotal})`, precio: `$${START.setupTotal}` },
];

export const metadata: Metadata = {
  title: "Sistema Automático de Agenda para Profesionales | AYCweb Paraguay",
  description:
    `Dejá de gestionar tu agenda por WhatsApp. Configuramos tu sistema de captación automática, filtro de consultas y enlace de agenda por USD ${START.setupTotal} único. Mantenimiento por USD ${START.mantenimientoMensual}/mes pagadero el 15 de cada mes.`,
  keywords: [
    "agenda online automática profesionales paraguay",
    "sistema captación digital profesionales",
    "filtro consultas whatsapp profesionales",
    "agenda calendly profesional paraguay",
    "AYCweb profesionales",
  ],
  alternates: {
    canonical: "https://www.aycweb.com/es/profesionales",
    languages: {
      "es": "https://www.aycweb.com/es/profesionales",
      "en": "https://www.aycweb.com/en/profesionales",
      "pt-BR": "https://www.aycweb.com/pt-br/profesionales",
      "x-default": "https://www.aycweb.com/es/profesionales",
    },
  },
  openGraph: {
    title: "Sistema Automático de Agenda para Profesionales | AYCweb Paraguay",
    description:
      `Tu agenda no necesita más mensajes sueltos en WhatsApp. Necesita un sistema automático. Setup por USD ${START.setupTotal} + mantenimiento USD ${START.mantenimientoMensual}/mes (el 15 de cada mes).`,
    url: "https://www.aycweb.com/es/profesionales",
    siteName: "AYCweb",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sistema Automático de Agenda - AYCweb Paraguay",
      },
    ],
    locale: "es_PY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sistema Automático de Agenda para Profesionales | AYCweb Paraguay",
    description:
      `Tu agenda no necesita más mensajes sueltos en WhatsApp. Necesita un sistema automático. USD ${START.setupTotal} setup + USD ${START.mantenimientoMensual}/mes (el 15 de cada mes).`,
    images: ["/og-image.jpg"],
  },
};

const PROBLEM_ICONS = ["📱", "🔄", "😤"] as const;

export default async function ProfesionalesPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const d = await getDictionary(lang);

  const setup = String(START.setupTotal);
  const mant = String(START.mantenimientoMensual);
  const plan = START.nombre;
  const fill = (s: string) =>
    s.replace(/\{plan\}/g, plan).replace(/\{setup\}/g, setup).replace(/\{mant\}/g, mant);

  const problemas = [1, 2, 3].map((n) => ({
    icon: PROBLEM_ICONS[n - 1],
    titulo: d[`prof.p${n}Title`],
    desc: d[`prof.p${n}Desc`],
  }));
  const incluyeSetup = [1, 2, 3, 4, 5].map((n) => d[`prof.setup${n}`]);
  const incluyeMant = [1, 2, 3, 4].map((n) => d[`prof.mant${n}`]);
  const activateLabel = fill(d["prof.activate"]);

  const ctaWa = buildWaLink(fill(d["prof.waActivate"]));

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [1, 2, 3, 4].map((n) => ({
      "@type": "Question",
      name: fill(d[`prof.faqQ${n}`]),
      acceptedAnswer: { "@type": "Answer", text: fill(d[`prof.faqA${n}`]) },
    })),
  };

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-50 overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* Ruido de fondo */}
      <div className="fixed inset-0 bg-[url('/noise.svg')] opacity-[0.15] pointer-events-none mix-blend-overlay z-0" />

      {/* ── HERO ── */}
      <section className="relative z-10 px-6 pt-28 md:pt-40 pb-16 md:pb-24 border-b border-white/[0.05]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-emerald-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/20 text-emerald-300 text-[11px] font-bold uppercase tracking-[0.2em] mb-6">
            <span className="text-base">🧑‍⚕️</span>
            {d["prof.badge"]}
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.05] tracking-tighter text-white mb-6">
            {d["prof.h1a"]}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              {d["prof.h1b"]}
            </span>
          </h1>

          <p className="text-base md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10">
            {d["prof.sub"]}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <a
              href={ctaWa}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-emerald-600 hover:bg-emerald-500 text-white font-black py-4 px-12 rounded-xl transition-all shadow-[0_0_30px_rgba(16,185,129,0.4)] active:scale-95 text-lg"
            >
              {activateLabel}
            </a>
            <CheckoutForm
              planes={PLANES_PROF}
              colorScheme="emerald"
              triggerLabel={d["prof.payUsdt"]}
            />
          </div>
          <p className="text-xs text-slate-600 mt-3">{d["prof.payNote"]}</p>
        </div>
      </section>

      {/* ── PROBLEMAS ── */}
      <section className="relative z-10 px-6 py-16 md:py-24 border-b border-white/[0.05]">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-3">
            {d["prof.problemsKicker"]}
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-white text-center mb-12 tracking-tight">
            {d["prof.problemsTitle1"]}<br />
            <span className="text-slate-400 font-normal">{d["prof.problemsTitle2"]}</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {problemas.map((p) => (
              <div
                key={p.titulo}
                className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 hover:border-slate-600 transition-colors"
              >
                <div className="text-3xl mb-4">{p.icon}</div>
                <h3 className="font-bold text-white text-base mb-2">{p.titulo}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OFERTA ÚNICA ── */}
      <section id="oferta" className="relative z-10 px-6 py-16 md:py-28">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-emerald-700/[0.07] rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto">
          <p className="text-center text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-400 mb-3">
            {d["prof.offerKicker"]}
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-white text-center mb-4 tracking-tight">
            {d["prof.offerTitle"]}
          </h2>
          <p className="text-slate-400 text-center text-base mb-12 max-w-xl mx-auto">
            {d["prof.offerSub"]}
          </p>

          {/* PricingCard con nueva jerarquía visual: domina el costo mensual */}
          <div className="mb-10 max-w-md mx-auto">
            <PricingCard
              planId="starter"
              accent="emerald"
              ctaHref={ctaWa}
              ctaLabel={activateLabel}
              tagline={d["prof.cardTagline"]}
            />
          </div>

          {/* Features de Setup y Mantenimiento en grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="bg-slate-900/60 border border-emerald-500/20 rounded-2xl p-6">
              <span className="inline-block text-[10px] font-black uppercase tracking-[0.18em] text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-3 py-1 rounded-full mb-4">
                {d["prof.setupBadge"]}
              </span>
              <ul className="space-y-2.5">
                {incluyeSetup.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <span className="text-emerald-400 mt-0.5 flex-shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-900/60 border border-slate-700/50 rounded-2xl p-6">
              <span className="inline-block text-[10px] font-black uppercase tracking-[0.18em] text-slate-400 bg-slate-800/60 border border-slate-700 px-3 py-1 rounded-full mb-4">
                {d["prof.mantBadge"]}
              </span>
              <ul className="space-y-2.5">
                {incluyeMant.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <span className="text-cyan-400 mt-0.5 flex-shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA principal */}
          <div className="text-center">
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-4">
              <a
                href={ctaWa}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-emerald-600 hover:bg-emerald-500 text-white font-black py-4 px-14 rounded-xl transition-all shadow-[0_0_40px_rgba(16,185,129,0.35)] active:scale-95 text-lg"
              >
                {activateLabel}
              </a>
              <CheckoutForm
                planes={PLANES_PROF}
                colorScheme="emerald"
                triggerLabel={d["prof.payUsdt"]}
              />
            </div>
            <p className="text-slate-500 text-xs">
              {d["prof.activateNote"]}
            </p>
          </div>
        </div>
      </section>

      {/* ── DIAGNÓSTICO COMERCIAL ── */}
      <section className="relative z-10 px-6 py-10 md:py-14 border-t border-white/[0.05]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-amber-400 mb-3">
            {d["prof.diagKicker"]}
          </p>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-6 max-w-xl mx-auto">
            {d["prof.diagText"]}
          </p>
          <a
            href={`/${lang}/diagnostico-comercial`}
            className="inline-block border border-amber-500/40 text-amber-300 hover:bg-amber-500/10 font-bold py-3 px-10 rounded-xl transition-all active:scale-95 text-sm"
          >
            {d["prof.diagCta"]}
          </a>
        </div>
      </section>
    </div>
  );
}
