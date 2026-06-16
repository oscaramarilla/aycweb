import type { Metadata } from "next";
import Link from "next/link";
import { FranjaClientes } from "@/components/social/FranjaClientes";
import { buildWaLink } from "@/lib/config/contact";
import { CheckoutForm } from "@/components/checkout/CheckoutForm";
import { PLANES_PRECIOS, TEXTO_FINANCIAMIENTO } from "@/lib/config/precios";
import PricingCard from "@/components/pricing/PricingCard";
import { getDictionary } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Sistemas Operativos B2B para Empresas | AYCweb Paraguay",
  description:
    "Infraestructura digital B2B para empresas en Paraguay: cotizadores dinámicos, generación automática de PDFs y motores operativos para manufactureras, clínicas, agroindustria y distribuidoras. Dejá de cotizar a mano.",
  keywords: [
    "sistemas B2B empresas paraguay",
    "cotizador dinámico empresas paraguay",
    "infraestructura digital B2B paraguay",
    "automatización operativa empresas",
    "generación PDF automática paraguay",
    "software empresarial paraguay",
    "motor operativo B2B",
    "AYCweb empresas",
  ],
  alternates: {
    canonical: "https://www.aycweb.com/es/empresas",
    languages: {
      "es": "https://www.aycweb.com/es/empresas",
      "en": "https://www.aycweb.com/en/empresas",
      "pt-BR": "https://www.aycweb.com/pt-br/empresas",
      "x-default": "https://www.aycweb.com/es/empresas",
    },
  },
  openGraph: {
    title: "Sistemas Operativos B2B para Empresas | AYCweb Paraguay",
    description:
      "Cotizadores dinámicos, generación de PDFs y motores operativos para manufactureras, clínicas, agroindustria y distribuidoras en Paraguay. Tu operación ya no cabe en Excel.",
    url: "https://www.aycweb.com/es/empresas",
    siteName: "AYCweb",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sistemas B2B para Empresas - AYCweb Paraguay",
      },
    ],
    locale: "es_PY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sistemas Operativos B2B para Empresas | AYCweb Paraguay",
    description:
      "Cotizadores dinámicos, PDFs automáticos y motores operativos para empresas en Paraguay. Dejá de cotizar a mano.",
    images: ["/og-image.jpg"],
  },
};

const { business: BIZ, enterprise: ENT } = PLANES_PRECIOS;

const PLANES_ONBOARDING = [
  { nombre: `AYCweb Start - Activación`, precio: `$${PLANES_PRECIOS.starter.setupTotal}` },
  { nombre: `AYCweb Business - Anticipo 20% ($${BIZ.hitos.anticipo})`, precio: `$${BIZ.hitos.anticipo}` },
  { nombre: `AYCweb Enterprise - Anticipo 20% ($${ENT.hitos.anticipo})`, precio: `$${ENT.hitos.anticipo}` },
  { nombre: `AYCweb Business - Liquidación Única 100% ($${BIZ.setupTotal})`, precio: `$${BIZ.setupTotal}` },
  { nombre: `AYCweb Enterprise - Liquidación Única 100% ($${ENT.setupTotal})`, precio: `$${ENT.setupTotal}` },
];

const SECTOR_ICONS = ["🏭", "🏥", "🌾", "📦", "⚙️", "🚛"] as const;

const FAQ_PRICES = {
  bizSetup: String(BIZ.setupTotal),
  entSetup: String(ENT.setupTotal),
  bizMant: String(BIZ.mantenimientoMensual),
};

const FAQ_PLAIN = [
  {
    pregunta: "¿Cuánto cuesta un sistema B2B para empresas en Paraguay?",
    respuesta: `El plan AYCweb Business tiene un setup único de USD ${BIZ.setupTotal}. El plan Enterprise cuesta USD ${ENT.setupTotal}. Ambos incluyen mantenimiento mensual desde USD ${BIZ.mantenimientoMensual}/mes.`,
  },
  {
    pregunta: "¿En cuánto tiempo se implementa el sistema?",
    respuesta: "AYCweb Business se entrega en 3 semanas. AYCweb Enterprise en 4-6 semanas. El proceso arranca con un diagnóstico operativo sin costo.",
  },
  {
    pregunta: "¿Qué tipo de empresas en Paraguay pueden usar estos sistemas?",
    respuesta: "Manufactureras, distribuidoras, empresas de construcción, agroindustria, clínicas y metalúrgicas. Cualquier empresa que necesite cotizar productos o servicios complejos y dejar de hacerlo a mano.",
  },
  {
    pregunta: "¿El sistema se integra con WhatsApp?",
    respuesta: "Sí. El sistema genera la cotización o presupuesto y puede enviarlo automáticamente al cliente por WhatsApp. Los planes incluyen integración de rutas WhatsApp por sección.",
  },
];

export default async function ProductosPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const d = await getDictionary(lang);

  const fill = (s: string) =>
    s
      .replace(/\{bizSetup\}/g, FAQ_PRICES.bizSetup)
      .replace(/\{entSetup\}/g, FAQ_PRICES.entSetup)
      .replace(/\{bizAnt\}/g, String(BIZ.hitos.anticipo))
      .replace(/\{entAnt\}/g, String(ENT.hitos.anticipo))
      .replace(/\{bizDef\}/g, String(BIZ.hitos.definicion))
      .replace(/\{entDef\}/g, String(ENT.hitos.definicion))
      .replace(/\{bizImpl\}/g, String(BIZ.hitos.implementacion))
      .replace(/\{entImpl\}/g, String(ENT.hitos.implementacion))
      .replace(/\{bizPru\}/g, String(BIZ.hitos.pruebas))
      .replace(/\{entPru\}/g, String(ENT.hitos.pruebas));

  const bizFeatures = [1, 2, 3, 4, 5, 6].map((n) => d[`emp.bizF${n}`]);
  const entFeatures = [1, 2, 3, 4, 5, 6].map((n) => d[`emp.entF${n}`]);
  const medFeatures = [1, 2, 3, 4, 5, 6].map((n) => d[`emp.medF${n}`]);
  const dolores = [1, 2, 3, 4].map((n) => ({ antes: d[`emp.dol${n}Antes`], despues: d[`emp.dol${n}Despues`] }));
  const etapas = [1, 2, 3, 4].map((n) => ({
    num: String(n).padStart(2, "0"),
    pct: ["20%", "20%", "30%", "30%"][n - 1],
    desc: fill(d[`emp.stage${n}Desc`]),
  }));

  // FAQ JSON-LD: usa los textos del idioma cuando existen; fallback a español.
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_PLAIN.map((item) => ({
      "@type": "Question",
      name: item.pregunta,
      acceptedAnswer: { "@type": "Answer", text: item.respuesta },
    })),
  };

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-50 overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] pointer-events-none mix-blend-overlay z-0" />

      {/* HERO */}
      <section className="relative z-10 px-6 pt-28 md:pt-40 pb-16 md:pb-24 border-b border-white/[0.05]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/40 border border-blue-500/20 text-blue-300 text-[11px] font-bold uppercase tracking-[0.2em] mb-6">
            <span className="text-base">🏭</span>
            {d["emp.badge"]}
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-[1.02] tracking-tighter text-white mb-6">
            {d["emp.h1a"]} <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              {d["emp.h1b"]}
            </span>
          </h1>

          <p className="text-base md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-10">
            {d["emp.sub"]}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center flex-wrap">
            <Link
              href={`/${lang}/diagnostico-comercial`}
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-black py-4 px-10 rounded-xl transition-all shadow-[0_0_30px_rgba(37,99,235,0.4)] active:scale-95"
            >
              {d["emp.ctaDiag"]}
            </Link>
            <Link
              href={`/${lang}/demo-cotizador`}
              className="w-full sm:w-auto bg-emerald-950/40 border border-emerald-500/30 hover:border-emerald-400/60 hover:bg-emerald-950/60 text-emerald-300 font-black py-4 px-10 rounded-xl transition-all flex items-center justify-center gap-2"
            >
              <span>⚡</span>
              {d["emp.ctaDemo"]}
            </Link>
            <Link
              href="#planes"
              className="w-full sm:w-auto bg-slate-900 border border-slate-700 hover:border-slate-500 text-slate-200 font-bold py-4 px-10 rounded-xl transition-all"
            >
              {d["emp.ctaPlanes"]}
            </Link>
          </div>

        </div>
      </section>

      {/* PRUEBA SOCIAL: Franja de clientes destacados */}
      <FranjaClientes palette="blue" t={d} lang={lang} />

      {/* DOLORES → ALIVIO */}
      <section className="relative z-10 px-6 py-20 md:py-28">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
              {d["emp.doloresTitle"]}
            </h2>
            <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto">
              {d["emp.doloresSub"]}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {dolores.map((dol, i) => (
              <div
                key={i}
                className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 hover:border-slate-700 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3 text-slate-500">
                  <span className="text-xs uppercase tracking-widest font-bold">{d["emp.beforeLabel"]}</span>
                  <div className="flex-1 h-px bg-slate-800" />
                </div>
                <p className="text-slate-400 line-through decoration-red-500/40 mb-4">{dol.antes}</p>
                <div className="flex items-center gap-3 mb-3 text-blue-400">
                  <span className="text-xs uppercase tracking-widest font-bold">{d["emp.afterLabel"]}</span>
                  <div className="flex-1 h-px bg-blue-500/20" />
                </div>
                <p className="text-white font-bold">{dol.despues}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLANES */}
      <section
        id="planes"
        className="relative z-10 px-6 py-20 md:py-28 bg-[#04050a] border-y border-white/[0.05] scroll-mt-20"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-400/10 text-blue-300 text-[11px] font-bold uppercase tracking-[0.2em] mb-4">
              {d["emp.planesKicker"]}
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
              {d["emp.planesTitle"]}
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-base md:text-lg">
              {d["emp.planesSub"]}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {/* Business Plan */}
            <PricingCard
              planId="business"
              accent="blue"
              tagline={d["emp.bizTagline"]}
              features={bizFeatures}
              ideal={d["emp.bizIdeal"]}
              ctaHref={buildWaLink(fill(d["emp.waBiz"]))}
              ctaLabel={d["emp.bizCta"]}
            />

            {/* Enterprise Plan — featured */}
            <PricingCard
              planId="enterprise"
              accent="blue"
              badge={d["emp.entBadge"]}
              tagline={d["emp.entTagline"]}
              features={entFeatures}
              ideal={d["emp.entIdeal"]}
              ctaHref={buildWaLink(fill(d["emp.waEnt"]))}
              ctaLabel={d["emp.entCta"]}
            />

            {/* Arquitectura a Medida — custom card since it's not a standard plan */}
            <article className="relative rounded-[1.5rem] p-7 flex flex-col border border-white/[0.06] bg-[#0a0c14] hover:border-white/[0.12] transition-all">
              <h3 className="text-lg font-black text-white mb-2">{d["emp.medTitle"]}</h3>
              <p className="text-[13px] text-slate-500 mb-5">{d["emp.medEntrega"]}</p>

              <div className="mb-6">
                <span className="text-[11px] text-slate-500 uppercase tracking-widest font-bold">{d["emp.medSetupLabel"]}</span>
                <div className="text-4xl font-black text-white tracking-tight mt-1">{d["emp.medPrice"]}</div>
              </div>

              <p className="text-[11px] md:text-xs text-slate-500 leading-relaxed mb-5">
                {TEXTO_FINANCIAMIENTO}
              </p>

              <div className="border-t border-white/[0.06] pt-4 mb-4" />

              <p className="text-sm text-slate-400 leading-relaxed mb-6">{d["emp.medTagline"]}</p>

              <ul className="space-y-2.5 mb-5 flex-1">
                {medFeatures.map((f) => (
                  <li key={f} className="text-[13px] text-slate-300 flex items-start gap-2.5 leading-relaxed">
                    <span className="text-violet-400 font-black mt-[2px]">✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <div className="rounded-xl border border-white/[0.04] bg-slate-950/50 p-3 mb-5 text-[12px] text-slate-400">
                <span className="font-bold text-white">{d["emp.idealLabel"]} </span>
                {d["emp.medIdeal"]}
              </div>

              <a
                href={buildWaLink(d["emp.waMed"])}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-3.5 rounded-xl font-black text-[14px] text-violet-300 border border-violet-300/30 hover:border-violet-300/60 hover:bg-violet-300/5 transition-all"
              >
                {d["emp.medCta"]}
              </a>
            </article>
          </div>

          {/* Modelo de implementación por etapas */}
          <div className="mt-10 max-w-3xl mx-auto rounded-2xl border border-blue-500/20 bg-blue-950/10 p-6">
            <p className="text-[11px] font-black uppercase tracking-widest text-blue-400 mb-1">{d["emp.stagesKicker"]}</p>
            <p className="text-[12px] text-slate-500 mb-5">{d["emp.stagesSub"]}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {etapas.map((e) => (
                <div key={e.num} className="flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-950/50 p-3">
                  <span className="text-blue-400 font-black text-xs mt-0.5 w-4 flex-shrink-0">{e.num}</span>
                  <p className="text-[12px] text-slate-300 leading-snug"><strong className="text-white">{e.pct}</strong> {e.desc}</p>
                </div>
              ))}
            </div>
            <p
              className="text-[12px] text-slate-400 mt-4 text-center"
              dangerouslySetInnerHTML={{ __html: d["emp.monthlyNote"] }}
            />
            <div className="rounded-2xl border border-slate-700 bg-slate-800/50 p-4 text-slate-300 mt-6">
              <p
                className="text-sm leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: d["emp.fastTrack"].replace(/<b>/g, '<span class="text-blue-300 font-bold">').replace(/<\/b>/g, "</span>"),
                }}
              />
            </div>
            <div className="text-center">
              <CheckoutForm
                planes={PLANES_ONBOARDING}
                colorScheme="blue"
                triggerLabel={d["emp.checkoutTrigger"]}
              />
              <p className="text-[11px] text-slate-600 mt-2">{d["emp.checkoutNote"]}</p>
            </div>
          </div>

          {/* Mantenimiento */}
          <div className="mt-10 max-w-3xl mx-auto rounded-2xl border border-slate-800 bg-slate-900/40 p-6 text-center">
            <div className="text-[11px] uppercase tracking-widest text-slate-500 font-bold mb-2">
              {d["emp.maintLabel"]}
            </div>
            <div className="text-xl font-black text-white mb-2">{d["emp.maintFrom"]}</div>
            <p className="text-sm text-slate-400 mb-3">
              {d["emp.maintDesc"]}
            </p>
            <p
              className="text-xs text-slate-500"
              dangerouslySetInnerHTML={{ __html: d["emp.maintNote"] }}
            />
          </div>
        </div>
      </section>

      {/* SECTORES */}
      <section className="relative z-10 px-6 py-20 md:py-28">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
              {d["emp.sectTitle"]}
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-base md:text-lg">
              {d["emp.sectSub"]}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {SECTOR_ICONS.map((icon, i) => (
              <div
                key={icon}
                className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 hover:border-blue-500/30 hover:bg-slate-900/70 transition-all"
              >
                <div className="text-3xl mb-3">{icon}</div>
                <div className="font-black text-white mb-1.5">{d[`emp.s${i + 1}Name`]}</div>
                <p className="text-[13px] text-slate-400 leading-relaxed">{d[`emp.s${i + 1}Desc`]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GARANTÍA */}
      <section className="relative z-10 px-6 py-20 md:py-28 bg-[#04050a] border-y border-white/[0.05]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="text-5xl mb-4">🛡️</div>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
              {d["emp.garTitle"]}
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-base md:text-lg">
              {d["emp.garDesc"]}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-center">
              <div className="font-black text-white mb-2">{d["emp.gar1T"]}</div>
              <p className="text-[13px] text-slate-400 leading-relaxed">
                {d["emp.gar1D"]}
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-center">
              <div className="font-black text-white mb-2">{d["emp.gar2T"]}</div>
              <p className="text-[13px] text-slate-400 leading-relaxed">
                {d["emp.gar2D"]}
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-center">
              <div className="font-black text-white mb-2">{d["emp.gar3T"]}</div>
              <p className="text-[13px] text-slate-400 leading-relaxed">
                {d["emp.gar3D"]}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative z-10 px-6 py-20 md:py-28 text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">
            {d["emp.finalTitle"]}
          </h2>
          <p className="text-slate-400 text-base md:text-lg mb-10 leading-relaxed">
            {d["emp.finalSub"]}
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center flex-wrap">
            <Link
              href={`/${lang}/diagnostico-comercial`}
              className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-black py-4 px-12 rounded-xl transition-all shadow-[0_0_40px_rgba(37,99,235,0.4)] active:scale-95"
            >
              {d["emp.finalCta"]}
            </Link>
          </div>
          <p className="mt-3 text-xs text-slate-500">{d["emp.finalNote"]}</p>
        </div>
      </section>
    </div>
  );
}