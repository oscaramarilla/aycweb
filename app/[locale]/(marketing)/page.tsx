import { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

// 1. CACHÉ ULTRARRÁPIDO: Guarda la página en los servidores globales de Vercel por 1 hora
export const revalidate = 3600;

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home.meta" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("home");

  const whatsappNumber = "595985864209";
  const whatsappMsg = encodeURIComponent(t("hero.whatsappMsg"));

  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-slate-50 font-sans relative overflow-hidden">

      {/* 2. LCP FIX: Ruta local para el noise.svg */}
      <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay z-0"></div>

      {/* ================= 1) HERO POSICIONADO ================= */}
      <section className="relative pt-28 pb-12 md:pt-48 md:pb-32 px-6 text-center z-10 border-b border-white/[0.05]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>

        <div className="max-w-5xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-[11px] md:text-xs font-bold uppercase tracking-widest mb-6 md:mb-8 shadow-sm">
            {t("hero.badge")}
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-6 md:mb-8 tracking-tighter leading-[1.05] text-white">
            {t("hero.title")} <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">{t("hero.titleHighlight")}</span>
          </h1>
          <p className="text-base md:text-2xl text-slate-400 mb-8 md:mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            {t("hero.subtitle")}
          </p>

          <div className="flex flex-col items-center justify-center gap-6">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
              target="_blank" rel="noopener noreferrer"
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-black py-3.5 md:py-4 px-8 md:px-10 rounded-xl transition-all shadow-[0_0_30px_rgba(37,99,235,0.4)] active:scale-95 text-[15px] md:text-lg"
            >
              {t("hero.cta")}
            </a>

            <div className="flex items-center gap-6 text-[13px] md:text-sm font-medium text-slate-400">
              <Link href="/empresas" className="hover:text-blue-400 transition-colors flex items-center gap-1.5">
                {t("hero.iAmCompany")} <span className="text-blue-500">&rarr;</span>
              </Link>
              <span className="text-slate-700">|</span>
              <Link href="/profesionales" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                {t("hero.iAmPro")} <span className="text-emerald-500">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 2) EVIDENCIA DE RESULTADO ================= */}
      <section className="py-16 md:py-24 relative z-10 bg-[#04050a] border-b border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-16 text-white leading-tight">
            {t("results.title")}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {(["item1", "item2", "item3", "item4", "item5"] as const).map((key) => (
              <div key={key} className="bg-slate-900/60 p-8 rounded-2xl border border-slate-800 hover:border-blue-500/30 transition-colors">
                <div className="w-8 h-8 bg-blue-600/10 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-2.5 h-2.5 bg-blue-500 rounded-full animate-pulse"></div>
                </div>
                <p className="text-slate-300 font-medium leading-relaxed text-[15px]">{t(`results.${key}`)}</p>
              </div>
            ))}
            <div className="bg-gradient-to-br from-blue-600/20 to-transparent p-8 rounded-2xl border border-blue-500/20 flex flex-col justify-center items-center text-center">
              <p className="text-white font-bold text-lg mb-2">{t("results.liveTitle")}</p>
              <Link href="/obras" className="text-blue-400 font-bold hover:underline">{t("results.liveLink")}</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 3) SEGMENTACIÓN ================= */}
      <section className="py-16 md:py-24 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 md:mb-6 leading-tight">{t("segmentation.title")}</h2>
            <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              {t("segmentation.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            <div className="bg-slate-900/60 border border-slate-800 rounded-[1.5rem] md:rounded-3xl p-6 md:p-10 hover:border-blue-500/50 transition-all group flex flex-col">
              <span className="text-4xl md:text-5xl mb-4 md:mb-6 block">🏭</span>
              <h3 className="text-2xl md:text-3xl font-black text-white mb-3 md:mb-4 group-hover:text-blue-400 transition-colors">{t("segmentation.companiesTitle")}</h3>
              <p className="text-slate-400 leading-relaxed mb-6 md:mb-8 flex-1 text-[15px] md:text-lg">
                {t("segmentation.companiesDesc")}
              </p>
              <Link href="/empresas" className="block w-full text-center bg-slate-800 hover:bg-slate-700 text-white font-bold py-3.5 md:py-4 rounded-xl transition-all border border-slate-700 text-[14px] md:text-base">
                {t("segmentation.companiesCta")}
              </Link>
            </div>

            <div className="bg-slate-900/60 border border-slate-800 rounded-[1.5rem] md:rounded-3xl p-6 md:p-10 hover:border-emerald-500/50 transition-all group flex flex-col">
              <span className="text-4xl md:text-5xl mb-4 md:mb-6 block">🧑‍⚕️</span>
              <h3 className="text-2xl md:text-3xl font-black text-white mb-3 md:mb-4 group-hover:text-emerald-400 transition-colors">{t("segmentation.prosTitle")}</h3>
              <p className="text-slate-400 leading-relaxed mb-6 md:mb-8 flex-1 text-[15px] md:text-lg">
                {t("segmentation.prosDesc")}
              </p>
              <Link href="/profesionales" className="block w-full text-center bg-slate-800 hover:bg-slate-700 text-white font-bold py-3.5 md:py-4 rounded-xl transition-all border border-slate-700 text-[14px] md:text-base">
                {t("segmentation.prosCta")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 4) FILTRO Y ADMISIÓN ================= */}
      <section className="py-16 md:py-32 relative z-10 border-y border-white/[0.05] overflow-hidden">
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <span className="text-blue-500 font-bold tracking-widest uppercase text-[11px] md:text-sm mb-3 md:mb-4 block">{t("filter.badge")}</span>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4 md:mb-6 leading-tight">
                {t("filter.title1")} <br/> {t("filter.title2")}
              </h2>
              <div className="space-y-4 md:space-y-6 text-slate-400 text-[15px] md:text-lg leading-relaxed">
                <p>{t("filter.p1")}</p>
                <p className="text-blue-400 font-bold">{t("filter.p2")}</p>
              </div>
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-[1.5rem] md:rounded-3xl p-6 md:p-8 shadow-2xl relative">
               <div className="absolute -left-3 -top-3 md:-left-4 md:-top-4 w-10 h-10 md:w-12 md:h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-black text-lg md:text-xl shadow-lg border-4 border-slate-950">!</div>
               <h3 className="text-lg md:text-xl font-bold text-white mb-5 md:mb-6 pl-4 md:pl-0">{t("filter.howTitle")}</h3>
               <ul className="space-y-4 md:space-y-6">
                 {([1, 2, 3] as const).map((step) => (
                   <li key={step} className="flex gap-3 md:gap-4">
                     <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-xs md:text-sm font-bold text-slate-400 shrink-0">{step}</div>
                     <div>
                       <h4 className="text-white font-bold mb-1 text-[15px] md:text-base">{t(`filter.step${step}Title`)}</h4>
                       <p className="text-slate-500 text-[13px] md:text-sm leading-relaxed">{t(`filter.step${step}Desc`)}</p>
                     </div>
                   </li>
                 ))}
               </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 5) GARANTÍA ================= */}
      <section className="py-16 md:py-24 relative z-10 bg-[#04050a]">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="bg-gradient-to-br from-slate-900/80 to-slate-950 border border-slate-800 rounded-[2rem] md:rounded-[3rem] p-6 md:p-16 text-center shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-blue-500/5 backdrop-blur-3xl z-0"></div>
            <div className="relative z-10">
              <span className="text-4xl md:text-6xl block mb-4 md:mb-8">🛡️</span>
              <h2 className="text-2xl md:text-5xl font-black text-white mb-4 md:mb-6">{t("guarantee.title")}</h2>
              <p className="text-slate-400 text-[15px] md:text-xl max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed">
                {t.rich("guarantee.desc", {
                  strong: (chunks) => <strong className="text-white">{chunks}</strong>,
                })}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-6 mb-8 md:mb-12">
                {([1, 2, 3] as const).map((card) => (
                  <div key={card} className="bg-slate-950/80 border border-slate-800 p-4 md:p-6 rounded-[1rem] md:rounded-2xl">
                    <div className="font-bold text-white mb-1 md:mb-2 text-[14px] md:text-base">{t(`guarantee.card${card}Title`)}</div>
                    <div className="text-[13px] md:text-sm text-slate-500 text-center">{t(`guarantee.card${card}Desc`)}</div>
                  </div>
                ))}
              </div>

              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
                target="_blank" rel="noopener noreferrer"
                className="block w-full sm:w-auto sm:inline-block bg-white text-slate-950 font-black py-3.5 md:py-4 px-6 md:px-10 rounded-xl transition-all shadow-lg hover:bg-slate-200 active:scale-95 text-[15px] md:text-base"
              >
                {t("guarantee.cta")}
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
