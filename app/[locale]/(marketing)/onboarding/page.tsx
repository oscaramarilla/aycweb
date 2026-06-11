"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

type CampoCopiaProps = {
  etiqueta: string;
  valor: string;
};

// --- COMPONENTE: CAMPO DE COPIA RÁPIDA ---
const CampoCopia = ({ etiqueta, valor }: CampoCopiaProps) => {
  const [copiado, setCopiado] = useState(false);
  const t = useTranslations("onboarding");

  const ejecutarCopia = async () => {
    try {
      await navigator.clipboard.writeText(valor);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    } catch (error) {
      console.error("No se pudo copiar:", error);
    }
  };

  return (
    <div className="mt-2 flex items-center justify-between gap-2 rounded-xl border border-zinc-800 bg-zinc-950/70 p-3 text-sm group">
      <div className="flex min-w-0 flex-col gap-1 overflow-hidden sm:flex-row sm:items-center">
        <span className="flex-shrink-0 text-[10px] font-bold uppercase tracking-widest text-zinc-500">
          {etiqueta}
        </span>
        <span className="truncate font-mono text-sm text-zinc-200">{valor}</span>
      </div>

      <button
        onClick={ejecutarCopia}
        className={`flex-shrink-0 rounded-lg px-3 py-1.5 text-xs font-bold transition-all active:scale-95 ${
          copiado
            ? "bg-emerald-500 text-zinc-950 shadow-[0_0_12px_rgba(16,185,129,0.4)]"
            : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
        }`}
      >
        {copiado ? t("copied") : t("copy")}
      </button>
    </div>
  );
};

export default function OnboardingPage() {
  const t = useTranslations("onboarding");
  const whatsappNumber = "595985864209";
  const whatsappUsdMsg = encodeURIComponent(t("usd.waMsg"));
  const whatsappPygMsg = encodeURIComponent(t("pyg.waMsg"));
  const whatsappCryptoMsg = encodeURIComponent(t("crypto.waMsg"));

  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-slate-50 font-sans relative overflow-hidden pb-24">
      {/* LCP FIX: Ruta Local SVG */}
      <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay z-0"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      <section className="relative pt-28 pb-12 md:pt-40 md:pb-16 px-6 text-center z-10">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-emerald-400 text-[11px] md:text-xs font-bold uppercase tracking-widest mb-6 shadow-sm">
            {t("badge")}
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 tracking-tighter leading-[1.05] text-white">
            {t("title")} <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">{t("titleHighlight")}</span>
          </h1>
          <p className="text-base md:text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
            {t("subtitle")}
          </p>
        </div>
      </section>

      <section className="relative z-10 px-6 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* RIEL 1: PYG (Local Tradicional) */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-[1.5rem] p-6 md:p-8 flex flex-col relative transition-all hover:border-emerald-500/50">
            <div className="mb-6 flex items-center justify-between">
              <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-xl">🇵🇾</div>
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 bg-slate-950 px-3 py-1 rounded-full border border-slate-800">PYG</span>
            </div>

            {/* LCP FIX: Quitado el 'priority' de las imagenes abajo del fold */}
            <div className="flex justify-center mb-5">
              <div className="relative h-40 w-40 rounded-xl border-4 border-emerald-500/30 bg-white p-2">
                <Image src="/qr-fiat.webp" alt={t("pyg.qrAlt")} fill className="rounded-lg object-contain p-1" />
              </div>
            </div>

            <h3 className="font-bold text-xl text-white mb-2">{t("pyg.title")}</h3>
            <p className="text-slate-400 text-[13px] mb-6 border-b border-slate-800 pb-6">
              {t("pyg.desc")}
            </p>
            <div className="space-y-4 mb-8 flex-1">

              <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800/50">
                <div className="mb-3 border-b border-zinc-800 pb-3">
                  <p className="mb-0.5 text-[10px] font-bold uppercase tracking-widest text-zinc-500">{t("pyg.holderLabel")}</p>
                  <p className="font-bold text-white">Oscar Emigdio Amarilla Caceres</p>
                </div>

                {/* UENO (Prioridad 1) */}
                <p className="mt-4 mb-2 text-[10px] font-bold uppercase tracking-widest text-emerald-400">{t("pyg.opt1Label")}</p>
                <CampoCopia etiqueta={t("pyg.ciLabel")} valor="4499507" />

                {/* ITAÚ (Prioridad 2) */}
                <p className="mt-5 mb-2 text-[10px] font-bold uppercase tracking-widest text-zinc-400">{t("pyg.opt2Label")}</p>
                <CampoCopia etiqueta={t("pyg.celLabel")} valor="0985864209" />
                <CampoCopia etiqueta={t("pyg.accountLabel")} valor="720601573" />
              </div>

            </div>
            <a href={`https://wa.me/${whatsappNumber}?text=${whatsappPygMsg}`} target="_blank" rel="noopener noreferrer" className="block w-full text-center py-3.5 rounded-xl font-bold text-[14px] bg-[#25D366] hover:bg-[#1DA851] text-zinc-950 transition-all shadow-[0_0_20px_-5px_rgba(37,211,102,0.4)]">
              {t("pyg.cta")}
            </a>
          </div>

          {/* RIEL 2: USD (Regional) */}
          <div className="bg-[#070810] border border-blue-500/30 shadow-[0_0_30px_rgba(37,99,235,0.1)] rounded-[1.5rem] p-6 md:p-8 flex flex-col relative transition-all">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-widest whitespace-nowrap">
              {t("usd.badge")}
            </div>
            <div className="mb-6 flex items-center justify-between mt-2">
              <div className="w-12 h-12 bg-blue-900/30 border border-blue-500/30 rounded-xl flex items-center justify-center text-xl text-blue-400">🌎</div>
              <span className="text-[10px] font-black uppercase tracking-widest text-blue-400 bg-blue-950/50 px-3 py-1 rounded-full border border-blue-900/50">USD</span>
            </div>
            <h3 className="font-bold text-xl text-white mb-2">{t("usd.title")}</h3>
            <p className="text-slate-400 text-[13px] mb-6 border-b border-slate-800 pb-6 flex-1">
              {t("usd.desc")}
            </p>
            <div className="bg-blue-950/20 p-5 rounded-xl border border-blue-900/50 mb-6 text-center">
              <p className="text-[13px] text-blue-300 leading-relaxed">
                {t("usd.notice")}
              </p>
            </div>
            <a href={`https://wa.me/${whatsappNumber}?text=${whatsappUsdMsg}`} target="_blank" rel="noopener noreferrer" className="block w-full text-center py-3.5 rounded-xl font-bold text-[14px] bg-blue-600 hover:bg-blue-500 text-white transition-all">
              {t("usd.cta")}
            </a>
          </div>

          {/* RIEL 3: USDT (Cripto) */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-[1.5rem] p-6 md:p-8 flex flex-col relative transition-all hover:border-teal-500/50">
            <div className="mb-6 flex items-center justify-between">
              <div className="w-12 h-12 bg-teal-900/20 border border-teal-500/20 rounded-xl flex items-center justify-center text-xl text-teal-400">⚡</div>
              <span className="text-[10px] font-black uppercase tracking-widest text-teal-400 bg-teal-950/50 px-3 py-1 rounded-full border border-teal-900/50">TRC20</span>
            </div>
            <h3 className="font-bold text-xl text-white mb-2">{t("crypto.title")}</h3>
            <p className="text-slate-400 text-[13px] mb-6 border-b border-slate-800 pb-6">
              {t("crypto.desc")}
            </p>
            <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800/50 mb-8 flex-1 flex flex-col justify-center">

              <div className="flex justify-center mb-4">
                <div className="relative h-40 w-40 rounded-xl border-4 border-teal-500/30 bg-white p-2">
                   {/* LCP FIX: Quitado el 'priority' */}
                   <Image src="/qr-crypto.webp" alt={t("crypto.qrAlt")} fill className="rounded-lg object-contain p-1" />
                </div>
              </div>

              <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-1 text-center font-bold mt-2">{t("crypto.networkLabel")}</p>
              <CampoCopia etiqueta={t("crypto.walletLabel")} valor="TLUzuQDLjVwp4UDFAEFuypw5LmFf1K1PRQ" />
            </div>
            <a href={`https://wa.me/${whatsappNumber}?text=${whatsappCryptoMsg}`} target="_blank" rel="noopener noreferrer" className="block w-full text-center py-3.5 rounded-xl font-bold text-[14px] bg-zinc-800 hover:bg-zinc-700 text-white transition-all border border-zinc-700">
              {t("crypto.cta")}
            </a>
          </div>

        </div>
      </section>
    </div>
  );
}
