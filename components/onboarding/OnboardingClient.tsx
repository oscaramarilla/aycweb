"use client";

import { useState } from "react";
import Image from "next/image";
import { WHATSAPP_NUMBER } from "@/lib/config/contacto";
import { LEGAL_INFO } from "@/lib/config/legal";

type Dict = Record<string, string>;

const CampoCopia = ({ etiqueta, valor, t }: { etiqueta: string; valor: string; t: (k: string) => string }) => {
  const [copiado, setCopiado] = useState(false);
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
        <span className="flex-shrink-0 text-[10px] font-bold uppercase tracking-widest text-zinc-500">{etiqueta}</span>
        <span className="truncate font-mono text-sm text-zinc-200">{valor}</span>
      </div>
      <button
        onClick={ejecutarCopia}
        className={`flex-shrink-0 rounded-lg px-3 py-1.5 text-xs font-bold transition-all active:scale-95 ${
          copiado ? "bg-emerald-500 text-zinc-950 shadow-[0_0_12px_rgba(16,185,129,0.4)]" : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
        }`}
      >
        {copiado ? t("onb.copied") : t("onb.copy")}
      </button>
    </div>
  );
};

// Resalta en negrita el nombre del plan (texto antes del primer ":").
function PlanItem({ text }: { text: string }) {
  const idx = text.indexOf(":");
  if (idx === -1) return <li className="text-slate-400">{text}</li>;
  return (
    <li className="text-slate-400">
      <strong className="text-slate-200">{text.slice(0, idx + 1)}</strong>
      {text.slice(idx + 1)}
    </li>
  );
}

export default function OnboardingClient({ dict, lang }: { dict: Dict; lang: string }) {
  void lang;
  const t = (k: string) => dict[k] ?? k;
  const whatsappNumber = WHATSAPP_NUMBER;
  const whatsappClosingMsg = encodeURIComponent(t("onb.waClosing"));
  const whatsappUsdMsg = encodeURIComponent(t("onb.waUsd"));

  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-slate-50 font-sans relative overflow-hidden pb-24">
      <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay z-0"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      <section className="relative pt-28 pb-12 md:pt-40 md:pb-16 px-6 text-center z-10">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-emerald-400 text-[11px] md:text-xs font-bold uppercase tracking-widest mb-6 shadow-sm">
            {t("onb.badge")}
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 tracking-tighter leading-[1.05] text-white">
            {t("onb.h1a")} <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">{t("onb.h1b")}</span>
          </h1>
          <h2 className="mb-3 text-lg text-slate-200 font-bold opacity-90">{t("onb.h2sub")}</h2>
          <p className="text-sm text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed mb-6">{t("onb.introNote")}</p>
          <p className="text-base md:text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">{t("onb.introMain")}</p>
        </div>
      </section>

      {/* ── TARJETA DE CONFIANZA INSTITUCIONAL ── */}
      <section className="relative z-10 px-6 max-w-5xl mx-auto mb-8">
        <div className="relative bg-slate-900/50 border border-slate-700/60 rounded-2xl p-6 md:p-8 overflow-hidden backdrop-blur-sm">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-slate-700/20 via-transparent to-emerald-900/10 pointer-events-none" />
          <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <div className="flex-shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/oscar.jpg" alt="Oscar Amarilla" className="w-16 h-16 rounded-full object-cover bg-slate-800 border-2 border-slate-700" />
            </div>
            <div className="flex-1">
              <p className="text-white font-bold text-base mb-1">{t("onb.trustName")}</p>
              <p className="text-slate-400 text-sm leading-relaxed">
                {t("onb.trustBody1")}{" "}
                <span className="text-slate-300 font-semibold">RUC 4499507-5</span>,{" "}
                {t("onb.trustBody2")}{" "}
                <span className="text-slate-300 font-semibold">{t("onb.trustDnit")}</span>.{" "}
                {t("onb.trustBody3")}
              </p>
            </div>
            <div className="flex-shrink-0 text-center hidden md:block">
              <div className="bg-emerald-950/60 border border-emerald-500/30 rounded-xl px-4 py-3">
                <p className="text-[9px] font-black uppercase tracking-[0.15em] text-emerald-400 mb-0.5">{t("onb.rucVerified")}</p>
                <p className="text-white font-mono font-bold text-sm">4499507-5</p>
                <p className="text-[9px] text-slate-500 mt-0.5">{t("onb.rucDnit")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-6 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* PYG */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-[1.5rem] p-6 md:p-8 flex flex-col relative transition-all hover:border-emerald-500/50">
            <div className="mb-6 flex items-center justify-between">
              <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-xl">🇵🇾</div>
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 bg-slate-950 px-3 py-1 rounded-full border border-slate-800">PYG</span>
            </div>
            <div className="flex justify-center mb-5">
              <div className="relative h-40 w-40 rounded-xl border-4 border-emerald-500/30 bg-white p-2">
                <Image src="/qr-fiat.webp" alt={t("onb.qrPygAlt")} fill className="rounded-lg object-contain p-1" />
              </div>
            </div>
            <h3 className="font-bold text-xl text-white mb-2">{t("onb.pygTitle")}</h3>
            <p className="text-slate-400 text-[13px] mb-6 border-b border-slate-800 pb-6">{t("onb.pygDesc")}</p>
            <div className="space-y-4 mb-8 flex-1">
              <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800/50">
                <div className="mb-3 border-b border-zinc-800 pb-3">
                  <p className="mb-0.5 text-[10px] font-bold uppercase tracking-widest text-zinc-500">{t("onb.holder")}</p>
                  <p className="font-bold text-white">Oscar Emigdio Amarilla Caceres</p>
                </div>
                <p className="mt-4 mb-2 text-[10px] font-bold uppercase tracking-widest text-emerald-400">{t("onb.opt1")}</p>
                <CampoCopia etiqueta={t("onb.ciLabel")} valor="4499507" t={t} />
                <p className="mt-5 mb-2 text-[10px] font-bold uppercase tracking-widest text-zinc-400">{t("onb.opt2")}</p>
                <CampoCopia etiqueta={t("onb.celLabel")} valor="0985864209" t={t} />
                <CampoCopia etiqueta={t("onb.accLabel")} valor="720601573" t={t} />
              </div>
            </div>
            <a href={`https://wa.me/${whatsappNumber}?text=${whatsappClosingMsg}`} target="_blank" rel="noopener noreferrer" className="block w-full text-center py-3.5 rounded-xl font-bold text-[14px] bg-[#25D366] hover:bg-[#1DA851] text-zinc-950 transition-all shadow-[0_0_20px_-5px_rgba(37,211,102,0.4)]">
              {t("onb.pygCta")}
            </a>
          </div>

          {/* USD */}
          <div className="bg-[#070810] border border-blue-500/30 shadow-[0_0_30px_rgba(37,99,235,0.1)] rounded-[1.5rem] p-6 md:p-8 flex flex-col relative transition-all">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-widest whitespace-nowrap">
              {t("onb.usdBadge")}
            </div>
            <div className="mb-6 flex items-center justify-between mt-2">
              <div className="w-12 h-12 bg-blue-900/30 border border-blue-500/30 rounded-xl flex items-center justify-center text-xl text-blue-400">🌎</div>
              <span className="text-[10px] font-black uppercase tracking-widest text-blue-400 bg-blue-950/50 px-3 py-1 rounded-full border border-blue-900/50">USD</span>
            </div>
            <h3 className="font-bold text-xl text-white mb-2">{t("onb.usdTitle")}</h3>
            <p className="text-slate-400 text-[13px] mb-6 border-b border-slate-800 pb-6 flex-1">{t("onb.usdDesc")}</p>
            <div className="bg-blue-950/20 p-5 rounded-xl border border-blue-900/50 mb-6 text-center">
              <p className="text-[13px] text-blue-300 leading-relaxed">{t("onb.usdNotice")}</p>
            </div>
            <a href={`https://wa.me/${whatsappNumber}?text=${whatsappUsdMsg}`} target="_blank" rel="noopener noreferrer" className="block w-full text-center py-3.5 rounded-xl font-bold text-[14px] bg-blue-600 hover:bg-blue-500 text-white transition-all">
              {t("onb.usdCta")}
            </a>
          </div>

          {/* USDT */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-[1.5rem] p-6 md:p-8 flex flex-col relative transition-all hover:border-teal-500/50">
            <div className="mb-6 flex items-center justify-between">
              <div className="w-12 h-12 bg-teal-900/20 border border-teal-500/20 rounded-xl flex items-center justify-center text-xl text-teal-400">⚡</div>
              <span className="text-[10px] font-black uppercase tracking-widest text-teal-400 bg-teal-950/50 px-3 py-1 rounded-full border border-teal-900/50">TRC20</span>
            </div>
            <h3 className="font-bold text-xl text-white mb-2">{t("onb.usdtTitle")}</h3>
            <p className="text-slate-400 text-[13px] mb-6 border-b border-slate-800 pb-6">{t("onb.usdtDesc")}</p>
            <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800/50 mb-8 flex-1 flex flex-col justify-center">
              <div className="flex justify-center mb-4">
                <div className="relative h-40 w-40 rounded-xl border-4 border-teal-500/30 bg-white p-2">
                  <Image src="/qr-crypto.webp" alt={t("onb.qrCryptoAlt")} fill className="rounded-lg object-contain p-1" />
                </div>
              </div>
              <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-1 text-center font-bold mt-2">{t("onb.networkLabel")}</p>
              <CampoCopia etiqueta={t("onb.walletLabel")} valor="TLUzuQDLjVwp4UDFAEFuypw5LmFf1K1PRQ" t={t} />
            </div>
            <a href={`https://wa.me/${whatsappNumber}?text=${whatsappClosingMsg}`} target="_blank" rel="noopener noreferrer" className="block w-full text-center py-3.5 rounded-xl font-bold text-[14px] bg-zinc-800 hover:bg-zinc-700 text-white transition-all border border-zinc-700">
              {t("onb.usdtCta")}
            </a>
          </div>
        </div>
      </section>

      {/* ── PASO 2: CONTRATO MARCO (MSA) ── */}
      <section className="relative z-10 px-6 max-w-5xl mx-auto py-12 md:py-16">
        <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 md:p-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/10 via-transparent to-slate-900/20 pointer-events-none rounded-2xl" />
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-2xl">📝</span>
              <h3 className="text-lg md:text-xl font-black text-white">{t("onb.msaStep")}</h3>
            </div>
            <p className="text-sm text-slate-400 bg-slate-950/60 border border-slate-700 rounded-xl px-5 py-4 mb-6 leading-relaxed">{t("onb.msaIntro")}</p>

            <div className="max-h-96 overflow-y-auto bg-slate-900 border border-slate-800 p-6 rounded-md text-sm text-slate-300 mb-6">
              <h3 className="text-base font-black text-white mb-4 tracking-tight">{t("onb.msaTitle")}</h3>

              <h4 className="text-sm font-bold text-emerald-400 mt-5 mb-2">{t("onb.c1Title")}</h4>
              <p className="mb-3 leading-relaxed">{t("onb.c1Body")}</p>

              <h4 className="text-sm font-bold text-emerald-400 mt-5 mb-2">{t("onb.c2Title")}</h4>
              <p className="mb-3 leading-relaxed">{t("onb.c2Intro")}</p>
              <ul className="list-disc pl-5 mb-3 space-y-1 text-slate-400">
                <PlanItem text={t("onb.c2Starter")} />
                <PlanItem text={t("onb.c2Business")} />
                <PlanItem text={t("onb.c2Enterprise")} />
              </ul>
              <p className="mb-3 leading-relaxed">{t("onb.c2Body2")}</p>

              <h4 className="text-sm font-bold text-emerald-400 mt-5 mb-2">{t("onb.c3Title")}</h4>
              <p className="mb-3 leading-relaxed">{t("onb.c3Body")}</p>

              <h4 className="text-sm font-bold text-emerald-400 mt-5 mb-2">{t("onb.c4Title")}</h4>
              <p className="mb-3 leading-relaxed">{t("onb.c4Body")}</p>
              <ul className="list-disc pl-5 mb-3 space-y-1 text-slate-400">
                <li><strong className="text-red-400">{t("onb.c4Li1")}</strong></li>
                <li>{t("onb.c4Li2")}</li>
                <li>{t("onb.c4Li3")}</li>
              </ul>
              <p className="mb-3 leading-relaxed">{t("onb.c4Body2")}</p>

              <h4 className="text-sm font-bold text-emerald-400 mt-5 mb-2">{t("onb.c5Title")}</h4>
              <p className="mb-3 leading-relaxed">{t("onb.c5Body")}</p>

              <p className="mt-6 pt-4 border-t border-slate-700 text-[11px] text-slate-500 text-center">{t("onb.msaResumenNota")}</p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a href="/docs/Contrato-Marco-AYCweb.pdf" download target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-600 bg-transparent px-5 py-3 text-sm font-bold text-slate-300 transition-all hover:border-emerald-500 hover:text-emerald-400 active:scale-95 flex-1">
                {t("onb.dlPdf")}
              </a>
              <a href={`https://wa.me/${whatsappNumber}?text=${whatsappClosingMsg}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white transition-all hover:bg-emerald-500 active:scale-95 shadow-[0_0_20px_-5px_rgba(16,185,129,0.4)] flex-1">
                {t("onb.sendSigned")}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── METODOLOGÍA ── */}
      <section className="relative z-10 px-6 max-w-5xl mx-auto py-12 md:py-16">
        <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 md:p-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-slate-900/20 pointer-events-none rounded-2xl" />
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🤖</span>
              <h3 className="text-lg md:text-xl font-black text-white">{t("onb.metodTitle")}</h3>
            </div>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: t("onb.metodIntro") }} />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4">
                <p className="text-blue-400 font-bold text-sm mb-2">{t("onb.mAgentTitle")}</p>
                <p className="text-slate-400 text-[12px] leading-relaxed">{t("onb.mAgentDesc")}</p>
              </div>
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4">
                <p className="text-cyan-400 font-bold text-sm mb-2">{t("onb.mCodingTitle")}</p>
                <p className="text-slate-400 text-[12px] leading-relaxed">{t("onb.mCodingDesc")}</p>
              </div>
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4">
                <p className="text-emerald-400 font-bold text-sm mb-2">{t("onb.mSuperTitle")}</p>
                <p className="text-slate-400 text-[12px] leading-relaxed">{t("onb.mSuperDesc")}</p>
              </div>
            </div>
            <p className="text-slate-500 text-xs md:text-sm mt-6 bg-slate-950/60 border border-slate-700 rounded-lg px-4 py-3" dangerouslySetInnerHTML={{ __html: t("onb.metodResult") }} />
          </div>
        </div>
      </section>

      <div className="relative z-10 px-6 max-w-5xl mx-auto mt-6 mb-2">
        <p className="text-center text-[11px] text-slate-600 border-t border-white/[0.04] pt-5">
          {t("onb.facturaNota").replace("{razon}", LEGAL_INFO.razonSocial).replace("{ruc}", LEGAL_INFO.ruc)}
        </p>
      </div>
    </div>
  );
}
