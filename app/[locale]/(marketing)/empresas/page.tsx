import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "companies.meta" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

const WHATSAPP = "595985864209";
const waLink = (msg: string) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;

// Precios y estructura viven en código; los textos en messages/.
const PLANES = [
  { msgKey: "starter", precio: "$900", isQuote: false, featured: false },
  { msgKey: "sistema", precio: "$1.800", isQuote: false, featured: true },
  { msgKey: "medida", precio: null, isQuote: true, featured: false },
] as const;

const SECTOR_ICONS = ["🏭", "🏥", "🌾", "📦", "⚙️", "🚛"] as const;

export default async function ProductosPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("companies");

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-50 overflow-hidden">
      <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] pointer-events-none mix-blend-overlay z-0" />

      {/* HERO */}
      <section className="relative z-10 px-6 pt-28 md:pt-40 pb-16 md:pb-24 border-b border-white/[0.05]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/40 border border-blue-500/20 text-blue-300 text-[11px] font-bold uppercase tracking-[0.2em] mb-6">
            <span className="text-base">🏭</span>
            {t("hero.badge")}
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-[1.02] tracking-tighter text-white mb-6">
            {t("hero.title")} <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              {t("hero.titleHighlight")}
            </span>
          </h1>

          <p className="text-base md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-10">
            {t("hero.subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <a
              href={waLink(t("hero.waDiagnostico"))}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-black py-4 px-10 rounded-xl transition-all shadow-[0_0_30px_rgba(37,99,235,0.4)] active:scale-95"
            >
              {t("hero.ctaPrimary")}
            </a>
            <Link
              href="/empresas#planes"
              className="w-full sm:w-auto bg-slate-900 border border-slate-700 hover:border-slate-500 text-slate-200 font-bold py-4 px-10 rounded-xl transition-all"
            >
              {t("hero.ctaSecondary")}
            </Link>
          </div>
        </div>
      </section>

      {/* DOLORES → ALIVIO */}
      <section className="relative z-10 px-6 py-20 md:py-28">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
              {t("pains.title")}
            </h2>
            <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto">
              {t("pains.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {([1, 2, 3, 4] as const).map((n) => (
              <div
                key={n}
                className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 hover:border-slate-700 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3 text-slate-500">
                  <span className="text-xs uppercase tracking-widest font-bold">{t("pains.beforeLabel")}</span>
                  <div className="flex-1 h-px bg-slate-800" />
                </div>
                <p className="text-slate-400 line-through decoration-red-500/40 mb-4">{t(`pains.p${n}Before`)}</p>
                <div className="flex items-center gap-3 mb-3 text-blue-400">
                  <span className="text-xs uppercase tracking-widest font-bold">{t("pains.afterLabel")}</span>
                  <div className="flex-1 h-px bg-blue-500/20" />
                </div>
                <p className="text-white font-bold">{t(`pains.p${n}After`)}</p>
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
              {t("plans.badge")}
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
              {t("plans.title")}
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-base md:text-lg">
              {t("plans.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {PLANES.map((plan) => {
              const nombre = t(`plans.${plan.msgKey}.name`);
              const precio = plan.isQuote ? t("plans.quotePrice") : plan.precio!;
              return (
                <article
                  key={plan.msgKey}
                  className={`relative rounded-[1.5rem] p-7 flex flex-col transition-all duration-300 ${
                    plan.featured
                      ? "border-2 border-blue-500/40 bg-blue-950/20 shadow-[0_0_50px_rgba(37,99,235,0.15)]"
                      : "border border-white/[0.06] bg-[#0a0c14] hover:border-white/[0.12]"
                  }`}
                >
                  {plan.featured && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-blue-500 px-4 py-1 text-[10px] uppercase tracking-[0.2em] text-white font-black shadow-lg whitespace-nowrap">
                      {t("plans.featuredBadge")}
                    </span>
                  )}

                  <h3 className="text-xl font-black text-white mb-2">{nombre}</h3>
                  <p className="text-[13px] text-slate-500 mb-5">{t(`plans.${plan.msgKey}.delivery`)}</p>

                  <div className="mb-6">
                    <div className="text-[11px] text-slate-500 uppercase tracking-widest font-bold mb-1">
                      {t("plans.setupLabel")}
                    </div>
                    <div className="flex items-baseline gap-2">
                      {!plan.isQuote && (
                        <span className="text-base text-slate-500 font-normal">USD</span>
                      )}
                      <span className="text-4xl font-black text-white tracking-tight">
                        {precio}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-slate-400 leading-relaxed mb-6 min-h-[3rem]">
                    {t(`plans.${plan.msgKey}.tagline`)}
                  </p>

                  <ul className="space-y-3 mb-6 flex-1">
                    {([1, 2, 3, 4, 5, 6] as const).map((f) => (
                      <li
                        key={f}
                        className="text-[13px] text-slate-300 flex items-start gap-2.5 leading-relaxed"
                      >
                        <span className="text-blue-400 font-black mt-[2px]">✓</span>
                        {t(`plans.${plan.msgKey}.f${f}`)}
                      </li>
                    ))}
                  </ul>

                  <div className="rounded-xl border border-white/[0.04] bg-slate-950/50 p-3 mb-5 text-[12px] text-slate-400">
                    <span className="font-bold text-white">{t("plans.idealLabel")} </span>
                    {t(`plans.${plan.msgKey}.ideal`)}
                  </div>

                  <a
                    href={waLink(t("plans.waPlan", { plan: nombre, price: precio }))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full text-center py-3.5 rounded-xl font-black text-[14px] transition-all ${
                      plan.featured
                        ? "bg-blue-500 text-white hover:bg-blue-400 shadow-[0_0_30px_rgba(37,99,235,0.4)]"
                        : "bg-transparent text-blue-300 border border-blue-300/30 hover:border-blue-300/60 hover:bg-blue-300/5"
                    }`}
                  >
                    {t(`plans.${plan.msgKey}.cta`)}
                  </a>
                </article>
              );
            })}
          </div>

          {/* Mantenimiento */}
          <div className="mt-10 max-w-3xl mx-auto rounded-2xl border border-slate-800 bg-slate-900/40 p-6 text-center">
            <div className="text-[11px] uppercase tracking-widest text-slate-500 font-bold mb-2">
              {t("plans.maintenanceLabel")}
            </div>
            <div className="text-2xl font-black text-white mb-2">{t("plans.maintenancePrice")}</div>
            <p className="text-sm text-slate-400">
              {t("plans.maintenanceBody")}
            </p>
          </div>
        </div>
      </section>

      {/* SECTORES */}
      <section className="relative z-10 px-6 py-20 md:py-28">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
              {t("sectors.title")}
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-base md:text-lg">
              {t("sectors.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {SECTOR_ICONS.map((icon, i) => (
              <div
                key={icon}
                className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 hover:border-blue-500/30 hover:bg-slate-900/70 transition-all"
              >
                <div className="text-3xl mb-3">{icon}</div>
                <div className="font-black text-white mb-1.5">{t(`sectors.s${i + 1}Name`)}</div>
                <p className="text-[13px] text-slate-400 leading-relaxed">{t(`sectors.s${i + 1}Desc`)}</p>
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
              {t("guarantee.title")}
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-base md:text-lg">
              {t("guarantee.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {([1, 2, 3] as const).map((n) => (
              <div key={n} className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-center">
                <div className="font-black text-white mb-2">{t(`guarantee.g${n}Title`)}</div>
                <p className="text-[13px] text-slate-400 leading-relaxed">
                  {t(`guarantee.g${n}Body`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative z-10 px-6 py-20 md:py-28 text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">
            {t("finalCta.title")}
          </h2>
          <p className="text-slate-400 text-base md:text-lg mb-10 leading-relaxed">
            {t("finalCta.subtitle")}
          </p>

          <a
            href={waLink(t("finalCta.waFinal"))}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-black py-4 px-12 rounded-xl transition-all shadow-[0_0_40px_rgba(37,99,235,0.4)] active:scale-95"
          >
            {t("finalCta.cta")}
          </a>
          <p className="mt-4 text-xs text-slate-500">{t("finalCta.note")}</p>
        </div>
      </section>
    </div>
  );
}
