import { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "sos.meta" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function OSLanding({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("sos");
  const whatsappNumber = "595985864209";
  const whatsappMsgBasic = encodeURIComponent(t("plans.waBasic"));
  const whatsappMsgPro = encodeURIComponent(t("plans.waPro"));
  const whatsappMsgEnterprise = encodeURIComponent(t("plans.waEnterprise"));

  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 text-zinc-50 font-sans pb-24 md:pb-0">

      {/* HERO: EL POSICIONAMIENTO */}
      <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 px-6 text-center overflow-hidden border-b border-zinc-900">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-blue-900/50 bg-blue-950/30 text-sm font-semibold text-blue-300 shadow-inner">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            {t("hero.badge")}
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter leading-[1.05] text-white">
            {t("hero.title")} <br/> <span className="text-blue-500">{t("hero.titleHighlight")}</span>
          </h1>
          <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            {t.rich("hero.subtitle", {
              strong: (chunks) => <strong className="text-white">{chunks}</strong>,
            })}
          </p>
          <div className="flex justify-center gap-4">
            <a href="#planes" className="bg-blue-600 hover:bg-blue-500 text-white font-black py-4 px-8 rounded-xl transition-all shadow-[0_0_30px_-5px_rgba(37,99,235,0.4)] active:scale-95">
              {t("hero.cta")}
            </a>
          </div>
        </div>
      </section>

      {/* EL CUADRO COMPARATIVO */}
      <section className="py-24 bg-black border-b border-zinc-900">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">{t("compare.title")}</h2>
            <p className="text-zinc-400">{t("compare.subtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Competencia 1 */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 opacity-70">
              <h3 className="text-xl font-bold text-zinc-300 mb-4">{t("compare.agTitle")}</h3>
              <p className="text-red-400 font-bold mb-4">{t("compare.agLabel")}</p>
              <ul className="space-y-3 text-sm text-zinc-500">
                <li>{t("compare.agI1")}</li>
                <li>{t("compare.agI2")}</li>
                <li>{t("compare.agI3")}</li>
                <li className="pt-4 border-t border-zinc-800">{t("compare.agCost")}</li>
              </ul>
            </div>

            {/* AYCweb OS */}
            <div className="bg-zinc-950 border-2 border-blue-600 rounded-2xl p-8 transform md:-translate-y-4 shadow-[0_0_40px_rgba(37,99,235,0.15)] relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-xs font-bold uppercase tracking-widest py-1 px-4 rounded-full">
                {t("compare.osBadge")}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{t("compare.osTitle")}</h3>
              <p className="text-blue-400 font-bold mb-4">{t("compare.osLabel")}</p>
              <ul className="space-y-3 text-sm text-zinc-300">
                <li>{t("compare.osI1")}</li>
                <li>{t("compare.osI2")}</li>
                <li>{t("compare.osI3")}</li>
                <li className="pt-4 border-t border-zinc-800 font-bold">{t("compare.osCost")}</li>
              </ul>
            </div>

            {/* Competencia 2 */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 opacity-70">
              <h3 className="text-xl font-bold text-zinc-300 mb-4">{t("compare.shTitle")}</h3>
              <p className="text-red-400 font-bold mb-4">{t("compare.shLabel")}</p>
              <ul className="space-y-3 text-sm text-zinc-500">
                <li>{t("compare.shI1")}</li>
                <li>{t("compare.shI2")}</li>
                <li>{t("compare.shI3")}</li>
                <li className="pt-4 border-t border-zinc-800">{t("compare.shCost")}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CASO DE ÉXITO RÁPIDO */}
      <section className="py-20 bg-zinc-950 border-b border-zinc-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-4">{t("case.kicker")}</p>
          <h2 className="text-2xl md:text-4xl font-black text-white mb-8">
            {t("case.quote")}
          </h2>
          <Link href="/flete" className="text-zinc-400 hover:text-white underline decoration-zinc-700 transition-colors">
            {t("case.link")}
          </Link>
        </div>
      </section>

      {/* LOS PLANES (El Cierre) */}
      <section id="planes" className="py-24 bg-black relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-64 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">{t("plans.title")}</h2>
            <p className="text-zinc-400">{t("plans.subtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

            {/* PLAN BÁSICO */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 flex flex-col">
              <h3 className="text-2xl font-black text-white mb-2">{t("plans.basicName")}</h3>
              <p className="text-zinc-500 text-sm mb-6">{t("plans.basicDesc")}</p>
              <div className="mb-8">
                <span className="text-5xl font-black text-white">USD $50</span><span className="text-zinc-500">{t("plans.perMonth")}</span>
              </div>
              <ul className="space-y-4 mb-8 flex-grow text-zinc-300 text-sm">
                {([1, 2, 3, 4, 5] as const).map((n) => (
                  <li key={n} className="flex items-center gap-3">✅ <span>{t(`plans.basicF${n}`)}</span></li>
                ))}
              </ul>
              <a href={`https://wa.me/${whatsappNumber}?text=${whatsappMsgBasic}`} target="_blank" rel="noopener noreferrer" className="w-full text-center bg-zinc-800 hover:bg-zinc-700 text-white font-bold py-4 rounded-xl transition-all border border-zinc-700">
                {t("plans.basicCta")}
              </a>
            </div>

            {/* PLAN PRO */}
            <div className="bg-gradient-to-b from-blue-900/40 to-zinc-950 border-2 border-blue-600 rounded-3xl p-8 flex flex-col relative shadow-[0_0_30px_rgba(37,99,235,0.15)]">
              <div className="absolute top-0 right-8 -translate-y-1/2 bg-blue-600 text-white text-xs font-bold uppercase tracking-widest py-1 px-4 rounded-full">
                {t("plans.proBadge")}
              </div>
              <h3 className="text-2xl font-black text-white mb-2">{t("plans.proName")}</h3>
              <p className="text-zinc-400 text-sm mb-6">{t("plans.proDesc")}</p>
              <div className="mb-8">
                <span className="text-5xl font-black text-blue-400">USD $100</span><span className="text-zinc-500">{t("plans.perMonth")}</span>
              </div>
              <ul className="space-y-4 mb-8 flex-grow text-zinc-300 text-sm">
                <li className="flex items-center gap-3">🔥 <span className="font-bold text-white">{t("plans.proF1")}</span></li>
                {([2, 3, 4, 5] as const).map((n) => (
                  <li key={n} className="flex items-center gap-3">✅ <span>{t(`plans.proF${n}`)}</span></li>
                ))}
              </ul>
              <a href={`https://wa.me/${whatsappNumber}?text=${whatsappMsgPro}`} target="_blank" rel="noopener noreferrer" className="w-full text-center bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl transition-all shadow-lg active:scale-95">
                {t("plans.proCta")}
              </a>
            </div>

          </div>

          <div className="text-center mt-12">
            <p className="text-zinc-500 text-sm">
              {t("plans.enterpriseQuestion")} <br/>
              <a href={`https://wa.me/${whatsappNumber}?text=${whatsappMsgEnterprise}`} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">{t("plans.enterpriseLink")}</a>.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
