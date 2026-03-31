"use client";

import Link from "next/link";
import LanguageSelector from "@/components/LanguageSelector";
import { LanguageProvider, useLanguage } from "@/context/LanguageContext";

function HomeContent() {
  const { t } = useLanguage();
  const whatsappNumber = "595985864209";
  const whatsappMsgDiagnostico = encodeURIComponent("¡Hola Oscar! Quiero mostrarles el cuello de botella actual de mi empresa para ver qué sistema operativo me recomiendan construir.");

  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 text-zinc-50 font-sans relative">
      
      {/* 🌐 SELECTOR DE IDIOMAS FLOTANTE */}
      <div className="absolute top-6 right-6 z-50">
        <LanguageSelector />
      </div>

      {/* CAPA 1: HERO */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-24 px-6 text-center overflow-hidden border-b border-zinc-900">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-blue-900/50 bg-blue-950/30 text-xs font-bold uppercase tracking-widest text-blue-300 shadow-inner">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            {t("heroBadge")}
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tighter leading-[1.05] text-white">
            {t("heroTitle1")} <br className="hidden md:block" /> <span className="text-blue-500">{t("heroTitleHighlight")}</span> {t("heroTitle2")}
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            {t("heroSubtitle")}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/oscar" 
              className="bg-blue-600 hover:bg-blue-500 text-white font-black py-4 px-8 rounded-xl transition-all shadow-[0_0_30px_-5px_rgba(37,99,235,0.4)] active:scale-95"
            >
              {t("btnPlanes")}
            </Link>
            <a 
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMsgDiagnostico}`}
              target="_blank" rel="noopener noreferrer"
              className="bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-white font-bold py-4 px-8 rounded-xl transition-all"
            >
              {t("btnCuello")}
            </a>
          </div>
        </div>
      </section>

      {/* CAPA 2: PRUEBA RÁPIDA */}
      <section className="py-10 bg-black border-b border-zinc-900 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 text-center divide-zinc-800 md:divide-x">
            <div className="px-4">
              <p className="text-3xl font-black text-white mb-1">+15</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">{t("statsActivos")}</p>
            </div>
            <div className="px-4 hidden md:block">
              <p className="text-3xl font-black text-white mb-1">99<span className="text-blue-500 text-lg">/100</span></p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">{t("statsSpeed")}</p>
            </div>
            <div className="px-4">
              <p className="text-3xl font-black text-white mb-1">RUC</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">{t("statsRUC")}</p>
            </div>
            <div className="px-4">
              <p className="text-sm font-bold text-zinc-300 mb-1 flex items-center gap-2 justify-center">
                <span className="text-blue-500">■</span> Industria <span className="text-emerald-500 ml-2">■</span> Salud
              </p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">{t("statsSectores")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CAPA 3: ECOSISTEMAS */}
      <section className="py-24 bg-zinc-900/30 border-b border-zinc-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">{t("ecoTitle")}</h2>
            <p className="text-zinc-400 text-lg">{t("ecoSub")}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-zinc-950 p-8 rounded-3xl border border-zinc-800 hover:border-blue-900 transition-colors flex flex-col h-full">
              <h3 className="text-2xl font-bold text-white mb-3">{t("eco1Title")}</h3>
              <p className="text-zinc-500 mb-6 text-sm flex-grow">{t("eco1Desc")}</p>
              <Link href="/servicios#captacion" className="text-blue-500 text-sm font-bold hover:underline mt-auto">{t("eco1Link")}</Link>
            </div>
            <div className="bg-zinc-950 p-8 rounded-3xl border border-zinc-800 hover:border-emerald-900 transition-colors flex flex-col h-full">
              <h3 className="text-2xl font-bold text-white mb-3">{t("eco2Title")}</h3>
              <p className="text-zinc-500 mb-6 text-sm flex-grow">{t("eco2Desc")}</p>
              <Link href="/servicios#operativa" className="text-emerald-500 text-sm font-bold hover:underline mt-auto">{t("eco2Link")}</Link>
            </div>
            <div className="bg-zinc-950 p-8 rounded-3xl border border-zinc-800 hover:border-purple-900 transition-colors flex flex-col h-full">
              <h3 className="text-2xl font-bold text-white mb-3">{t("eco3Title")}</h3>
              <p className="text-zinc-500 mb-6 text-sm flex-grow">{t("eco3Desc")}</p>
              <Link href="/servicios#medida" className="text-purple-500 text-sm font-bold hover:underline mt-auto">{t("eco3Link")}</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CAPA 4: CASOS */}
      <section className="py-24 bg-black border-b border-zinc-900">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-white">{t("casoPre")}</h2>
          </div>
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600/10 rounded-full blur-[80px] pointer-events-none"></div>
            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 bg-zinc-950 border border-zinc-800 px-3 py-1 rounded-full text-[10px] font-bold text-zinc-400 mb-6 uppercase tracking-widest">
                  <span className="text-emerald-500">✓</span> {t("casoBadge")}
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-white mb-4 leading-tight">
                  {t("casoQuote")}
                </h3>
                <p className="text-zinc-400 mb-8">
                  {t("casoDesc")}
                </p>
                <Link href="/casos" className="inline-flex items-center gap-2 text-white font-bold bg-zinc-800 hover:bg-zinc-700 py-3 px-6 rounded-xl transition-all">
                  {t("casoLink")}
                </Link>
              </div>
              <div className="w-full md:w-1/3 bg-black border border-zinc-800 rounded-2xl p-6 text-center shadow-inner">
                 <p className="text-5xl font-black text-emerald-500 mb-2">-98%</p>
                 <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">{t("casoMetric")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAPA 5: AUTORIDAD */}
      <section className="py-24 bg-zinc-950 border-b border-zinc-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-blue-500 text-6xl mb-6 block">⚒️</span>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
            {t("autTitle")}
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-8">
            {t("autDesc")}
          </p>
          <Link href="/experiencia" className="text-blue-400 font-bold hover:underline">
            {t("autLink")}
          </Link>
        </div>
      </section>

      {/* CAPA 6: CIERRE */}
      <section className="py-24 bg-black text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <p className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-4">{t("cierrePre")}</p>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">{t("cierreTitle")}</h2>
          <p className="text-zinc-400 text-lg mb-10 max-w-xl mx-auto">
            {t("cierreDesc")}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <a 
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMsgDiagnostico}`}
              target="_blank" rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-black font-black py-4 px-10 rounded-xl transition-all shadow-[0_0_30px_rgba(16,185,129,0.3)] active:scale-95"
            >
              {t("cierreBtn1")}
            </a>
            <Link href="/oscar" className="bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-white font-bold py-4 px-10 rounded-xl transition-all">
              {t("cierreBtn2")}
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

// Envolvemos el contenido en el Provider de Idioma para que funcione el cerebro
export default function Home() {
  return (
    <LanguageProvider>
      <HomeContent />
    </LanguageProvider>
  );
}
