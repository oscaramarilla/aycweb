import type { Metadata } from "next";
import { getInvertirDict, INVERTIR_I18N, type InvertirLocale } from "@/lib/config/invertirParaguay";
import { AYCWEB_CONTACT } from "@/lib/config/contact";
import CalculadoraKwh from "@/components/invertir/CalculadoraKwh";
import FormularioLead from "@/components/invertir/FormularioLead";

const PAGE_PATH = "/invertir-en-paraguay";
const BASE_URL = "https://www.aycweb.com";
const WA_NUMBER = AYCWEB_CONTACT.whatsappNumber;

// El funnel soporta alemán además de los locales globales del sitio.
const FUNNEL_LOCALES = Object.keys(INVERTIR_I18N) as InvertirLocale[];

type Props = {
  params: Promise<{ lang: string }>;
};

export function generateStaticParams() {
  return FUNNEL_LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const dict = getInvertirDict(lang);

  return {
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      canonical: `${BASE_URL}/${lang}${PAGE_PATH}`,
      languages: Object.fromEntries([
        ...FUNNEL_LOCALES.map((l) => [l, `${BASE_URL}/${l}${PAGE_PATH}`]),
        ["x-default", `${BASE_URL}/es${PAGE_PATH}`],
      ]),
    },
    openGraph: {
      title: dict.meta.ogTitle,
      description: dict.meta.ogDescription,
      type: "website",
      url: `${BASE_URL}/${lang}${PAGE_PATH}`,
    },
  };
}

// Cifras duras y fuentes viven en código; textos en lib/config/invertirParaguay.ts
const STATS = [
  { v: ">99,9%", key: "stat1Label", src: "ANDE · Congreso Nacional PY" },
  { v: "8.760 MW", key: "stat2Label", src: "ANDE / Infobae 2024" },
  { v: "Moody's Baa3 + S&P BBB−", key: "stat3Label", src: "MEF · Bloomberg Línea dic-2025" },
  { v: "Jun 2026", key: "stat4Label", src: "MOPC · Agencia IP · may-2026" },
] as const;

const AXES = [
  { id: "energia", msgKey: "energia", emoji: "⚡", hasCalc: true },
  { id: "agroindustria", msgKey: "agroindustria", emoji: "🌽", hasCalc: false },
  { id: "tecnologia", msgKey: "tecnologia", emoji: "🧠", hasCalc: false },
  { id: "logistica", msgKey: "logistica", emoji: "🚢", hasCalc: false },
  { id: "real_estate", msgKey: "realEstate", emoji: "🏭", hasCalc: false },
] as const;

// Inyecta clases de estilo en el markup propio de los textos (no es input de usuario).
function rich(html: string) {
  return html
    .replace(/<strong>/g, '<strong class="text-white">')
    .replace(/<em>/g, '<em class="text-amber-300">');
}

export default async function InvertirEnParaguay({ params }: Props) {
  const { lang } = await params;
  const dict = getInvertirDict(lang);

  const WA_DOSSIER = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(dict.wa.dossier)}`;
  const WA_LLAMADA = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(dict.wa.call)}`;

  const faqs = [
    [dict.faq.q1, dict.faq.a1],
    [dict.faq.q2, dict.faq.a2],
    [dict.faq.q3, dict.faq.a3],
    [dict.faq.q4, dict.faq.a4],
    [dict.faq.q5, dict.faq.a5],
  ] as const;

  const steps = [
    [dict.steps.step1Title, dict.steps.step1Desc],
    [dict.steps.step2Title, dict.steps.step2Desc],
    [dict.steps.step3Title, dict.steps.step3Desc],
  ] as const;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "AYCweb",
        url: BASE_URL,
        founder: { "@type": "Person", name: "Oscar Amarilla" },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Asunción",
          addressCountry: "PY",
        },
        areaServed: "PY",
        taxID: "4499507-5",
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map(([q, a]) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: { "@type": "Answer", text: a },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-stone-950 text-stone-100">

        {/* ── HERO ── */}
        <section className="relative overflow-hidden border-b border-amber-500/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_-10%,rgba(245,158,11,0.18),transparent_40%),radial-gradient(circle_at_10%_80%,rgba(16,185,129,0.12),transparent_40%)]" />

          <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-amber-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-amber-400" />
              {dict.hero.badge}
            </p>

            <h1 className="mb-6 max-w-4xl text-4xl font-black leading-[1.05] tracking-tighter text-white md:text-6xl">
              {dict.hero.title}{" "}
              <span className="text-amber-400">{dict.hero.titleHighlight}</span>
            </h1>

            <p className="mb-10 max-w-3xl text-lg leading-8 text-stone-300">
              {dict.hero.subtitle}
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#formulario"
                className="inline-flex min-h-14 items-center justify-center rounded-xl bg-amber-400 px-8 py-3 text-base font-black uppercase tracking-wide text-stone-950 transition hover:bg-amber-300 active:scale-95"
              >
                {dict.hero.ctaPrimary}
              </a>
              <a
                href={WA_DOSSIER}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl border border-stone-700 bg-stone-900 px-8 py-3 text-base font-bold text-white transition hover:bg-stone-800"
              >
                {dict.hero.ctaWhatsapp}
              </a>
            </div>

            <p className="mt-4 text-xs text-stone-600">{dict.hero.noCost}</p>

            {/* Fichas de datos verificados */}
            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {STATS.map((d) => (
                <div key={d.key} className="rounded-2xl border border-stone-800 bg-stone-900/60 p-5">
                  <p className="text-2xl font-black text-amber-300">{d.v}</p>
                  <p className="mt-1 text-sm font-bold text-white">{dict.hero[d.key]}</p>
                  <p className="mt-1 text-[10px] uppercase tracking-widest text-stone-600">
                    {dict.hero.sourceLabel.replace("{src}", d.src)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── INTRO DE TESIS ── */}
        <section className="border-b border-stone-800 bg-stone-900/30">
          <div className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-emerald-300">
              {dict.thesis.kicker}
            </p>
            <p
              className="text-lg leading-9 text-stone-300"
              dangerouslySetInnerHTML={{ __html: rich(dict.thesis.body) }}
            />
            <p className="mt-4 text-xs text-stone-600">{dict.thesis.source}</p>
          </div>
        </section>

        {/* ── CINCO EJES ── */}
        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="space-y-16">
            {AXES.map((eje) => {
              const axis = dict.axes[eje.msgKey];
              const items = [axis.item1, axis.item2, axis.item3, axis.item4];
              return (
                <div key={eje.id} id={eje.id} className="scroll-mt-20">
                  <div className="grid gap-8 lg:grid-cols-[1fr_0.55fr]">
                    <div>
                      <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-amber-300">
                        {axis.kicker}
                      </p>
                      <h2 className="mb-4 text-3xl font-black text-white md:text-4xl">
                        {eje.emoji} {axis.title}
                      </h2>
                      <p className="mb-6 text-base leading-8 text-stone-400">{axis.body}</p>
                      <ul className="space-y-2">
                        {items.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-stone-300">
                            <span className="mt-0.5 font-black text-amber-400">▹</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-start">
                      <a
                        href="#formulario"
                        className="w-full rounded-2xl border border-amber-500/20 bg-amber-500/8 p-6 text-center transition hover:border-amber-400/40 hover:bg-amber-500/15"
                      >
                        <p className="mb-3 text-4xl">{eje.emoji}</p>
                        <p className="font-bold text-white">
                          {dict.axes.requestDossier.replace("{sector}", axis.sectorName)}
                        </p>
                        <p className="mt-2 text-sm text-stone-500">{dict.axes.noCostBadge}</p>
                      </a>
                    </div>
                  </div>

                  {eje.hasCalc && (
                    <div className="mt-10">
                      <CalculadoraKwh dict={dict.calc} waText={dict.wa.dossier} />
                    </div>
                  )}

                  <hr className="mt-16 border-stone-800" />
                </div>
              );
            })}
          </div>
        </section>

        {/* ── CÓMO TRABAJAMOS ── */}
        <section className="border-y border-stone-800 bg-stone-900/30">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-amber-300">
              {dict.steps.kicker}
            </p>
            <h2 className="mb-12 text-3xl font-black text-white md:text-4xl">
              {dict.steps.title}
            </h2>

            <div className="grid gap-6 sm:grid-cols-3">
              {steps.map(([title, desc], i) => (
                <div key={title} className="rounded-2xl border border-stone-800 bg-stone-950/60 p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-amber-500/30 bg-amber-500/10 text-lg font-black text-amber-400">
                    {i + 1}
                  </div>
                  <h3 className="mb-2 font-bold text-white">{title}</h3>
                  <p className="text-sm leading-7 text-stone-500">{desc}</p>
                </div>
              ))}
            </div>

            <p className="mt-8 text-sm text-stone-600">{dict.steps.note}</p>
          </div>
        </section>

        {/* ── QUIÉN ESTÁ DETRÁS ── */}
        <section className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-emerald-300">
            {dict.who.kicker}
          </p>
          <h2 className="mb-6 text-3xl font-black text-white md:text-4xl">
            {dict.who.title}
          </h2>
          <div className="grid gap-8 lg:grid-cols-[1fr_0.6fr]">
            <div className="space-y-4 text-base leading-8 text-stone-300">
              <p dangerouslySetInnerHTML={{ __html: rich(dict.who.p1) }} />
              <p dangerouslySetInnerHTML={{ __html: rich(dict.who.p2) }} />
            </div>
            <div className="space-y-3">
              {[
                { l: dict.who.whatsappLabel, v: `wa.me/${WA_NUMBER}`, href: WA_LLAMADA },
                { l: dict.who.emailLabel, v: "oscaramarillacaceres@gmail.com", href: "mailto:oscaramarillacaceres@gmail.com" },
                { l: dict.who.rucLabel, v: "4499507-5", href: null },
              ].map((d) => (
                <div key={d.l} className="rounded-xl border border-stone-800 bg-stone-900/60 p-4">
                  <p className="text-xs uppercase tracking-widest text-stone-600">{d.l}</p>
                  {d.href ? (
                    <a href={d.href} target="_blank" rel="noopener noreferrer"
                      className="mt-1 block font-bold text-amber-400 hover:text-amber-300">
                      {d.v}
                    </a>
                  ) : (
                    <p className="mt-1 font-bold text-white">{d.v}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="border-y border-stone-800 bg-stone-900/30">
          <div className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-amber-300">
              {dict.faq.kicker}
            </p>
            <h2 className="mb-10 text-3xl font-black text-white md:text-4xl">
              {dict.faq.title}
            </h2>
            <div className="grid gap-5 md:grid-cols-2">
              {faqs.map(([q, a]) => (
                <div key={q} className="rounded-2xl border border-stone-800 bg-stone-950/60 p-6">
                  <h3 className="mb-3 font-black text-white">{q}</h3>
                  <p className="text-sm leading-7 text-stone-400">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FORMULARIO ── */}
        <section id="formulario" className="scroll-mt-10 mx-auto max-w-3xl px-6 py-16 lg:px-8">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-amber-300">
            {dict.form.kicker}
          </p>
          <h2 className="mb-2 text-3xl font-black text-white md:text-4xl">
            {dict.form.title}
          </h2>
          <p className="mb-10 text-stone-400">{dict.form.subtitle}</p>
          <FormularioLead dict={dict.form} lang={lang} />
        </section>

        {/* ── DISCLAIMER ── */}
        <section className="border-t border-stone-800 bg-stone-950">
          <div className="mx-auto max-w-5xl px-6 py-10 lg:px-8">
            <div className="rounded-2xl border border-stone-800 bg-stone-900/60 p-6">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-stone-500">
                {dict.disclaimer.title}
              </p>
              <p className="text-sm leading-7 text-stone-500">{dict.disclaimer.body}</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
