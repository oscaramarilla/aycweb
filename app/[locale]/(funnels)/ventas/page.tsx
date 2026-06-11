import { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "sales.meta" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function LandingAYC({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("sales");
  const whatsappLink = `https://wa.me/595985864209?text=${encodeURIComponent(t("waMsg"))}`;

  return (
    <main className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-blue-500/30">

      {/* 1. HERO SECTION (EL GANCHO) */}
      <section className="relative overflow-hidden pt-32 pb-24 lg:pt-40 lg:pb-32 flex flex-col items-center text-center px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-96 bg-blue-600/20 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-sm font-bold tracking-wide mb-8 uppercase shadow-xl relative z-10">
          <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
          {t("hero.badge")}
        </div>

        <h1 className="text-5xl md:text-7xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-400 mb-6 max-w-4xl leading-tight relative z-10">
          {t("hero.title")}<br />
          <span className="text-blue-500">{t("hero.titleHighlight")}</span>
        </h1>

        <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl leading-relaxed relative z-10">
          {t("hero.subtitle")}
        </p>

        <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto relative z-10">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-black text-lg rounded-xl transition-all hover:-translate-y-1 shadow-[0_0_20px_rgba(37,99,235,0.4)] text-center flex items-center justify-center gap-2">
            {t("hero.ctaPrimary")}
          </a>
          <a href="#caso-metal-mad" className="px-8 py-4 bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-lg rounded-xl transition-all border border-zinc-700 hover:border-zinc-500 text-center">
            {t("hero.ctaSecondary")}
          </a>
        </div>
      </section>

      {/* 2. EL PROBLEMA (EL DEDO EN LA LLAGA) */}
      <section className="py-24 bg-zinc-900/50 border-y border-zinc-800/50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">{t("problem.title")}</h2>
            <p className="text-zinc-400 text-lg">{t("problem.subtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {([
              { icon: "📝", n: 1 },
              { icon: "📱", n: 2 },
              { icon: "📉", n: 3 },
            ] as const).map(({ icon, n }) => (
              <div key={n} className="bg-zinc-950 p-8 rounded-2xl border border-zinc-800 hover:border-red-500/50 transition-colors">
                <div className="text-4xl mb-4">{icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{t(`problem.p${n}Title`)}</h3>
                <p className="text-zinc-400">{t(`problem.p${n}Desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. NUESTRO ARSENAL (LAS SOLUCIONES) */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-blue-500 font-bold tracking-wide uppercase text-sm mb-3">{t("solutions.kicker")}</h2>
            <h3 className="text-3xl md:text-5xl font-black text-white">{t("solutions.title")}</h3>
          </div>

          <div className="space-y-6">
            {([1, 2] as const).map((n) => (
              <div key={n} className="flex flex-col md:flex-row gap-8 bg-zinc-900 p-8 rounded-3xl border border-zinc-800 items-center">
                <div className="w-full md:w-1/3 bg-zinc-950 h-48 rounded-2xl border border-zinc-800 flex items-center justify-center text-blue-500 font-black text-2xl shadow-inner">{t(`solutions.s${n}Card`)}</div>
                <div className="w-full md:w-2/3">
                  <h4 className="text-2xl font-bold text-white mb-2">{t(`solutions.s${n}Title`)}</h4>
                  <p className="text-zinc-400 mb-4">{t(`solutions.s${n}Desc`)}</p>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full">{t(`solutions.s${n}Tag`)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CASO DE ÉXITO (METAL MAD) */}
      <section id="caso-metal-mad" className="py-24 bg-zinc-900/30 border-t border-zinc-800 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-blue-500 font-bold tracking-wide uppercase text-sm mb-3">{t("case.kicker")}</h2>
            <h3 className="text-3xl md:text-5xl font-black text-white mb-6">
              {t.rich("case.title", {
                highlight: (chunks) => <span className="text-blue-400">{chunks}</span>,
              })}
            </h3>
            <p className="text-lg text-zinc-400 mb-8">{t("case.desc")}</p>

            <div className="grid grid-cols-2 gap-6 border-t border-zinc-800 pt-8">
              <div>
                <div className="text-4xl font-black text-white">15<span className="text-blue-500 text-xl"> {t("case.stat1Unit")}</span></div>
                <div className="text-sm text-zinc-500 font-bold uppercase mt-1">{t("case.stat1Label")}</div>
              </div>
              <div>
                <div className="text-4xl font-black text-white">+35<span className="text-blue-500 text-xl">%</span></div>
                <div className="text-sm text-zinc-500 font-bold uppercase mt-1">{t("case.stat2Label")}</div>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 flex flex-col items-center justify-center shadow-2xl relative">
             <div className="w-full max-w-sm bg-white rounded-xl shadow-xl p-6 transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <h4 className="text-blue-900 font-black text-2xl border-b-2 border-blue-900 pb-2 mb-4">{t("case.pdfTitle")}</h4>
                <div className="space-y-2 mb-6">
                  <div className="h-4 bg-zinc-200 rounded w-3/4"></div>
                  <div className="h-4 bg-zinc-200 rounded w-1/2"></div>
                </div>
                <div className="text-right">
                  <p className="text-zinc-500 font-bold text-sm">{t("case.pdfTotal")}</p>
                  <p className="text-blue-900 font-black text-xl">Gs. 71.100.000</p>
                </div>
             </div>
             <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white font-bold py-2 px-6 rounded-full shadow-lg border-4 border-zinc-950">
               {t("case.generatedBadge")}
             </div>
          </div>
        </div>
      </section>

      {/* 5. CTA FINAL */}
      <section className="py-32 px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-6">{t("finalCta.title")}</h2>
        <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">{t("finalCta.subtitle")}</p>
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-block px-10 py-5 bg-white text-zinc-950 hover:bg-zinc-200 font-black text-xl rounded-xl transition-all shadow-xl hover:-translate-y-1">
          {t("finalCta.button")}
        </a>
      </section>

      <footer className="py-8 text-center text-zinc-600 text-sm border-t border-zinc-900">
        <p>{t("footer", { year: new Date().getFullYear() })}</p>
      </footer>
    </main>
  );
}
