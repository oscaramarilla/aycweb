"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

const whatsappNumber = "595985864209";

// Estructura y precios en código; textos en messages (namespace pricing).
const TIER_PLANS = {
  empresa: [
    { msgKey: "ce1", price: "$900", isCustom: false, hasBadge: false, featureCount: 4 },
    { msgKey: "ce2", price: "$1.800", isCustom: false, hasBadge: true, featureCount: 4 },
    { msgKey: "ce3", price: null, isCustom: true, hasBadge: false, featureCount: 4 },
  ],
  profesional: [
    { msgKey: "pr1", price: "$350", isCustom: false, hasBadge: false, featureCount: 5 },
    { msgKey: "pr2", price: "$650", isCustom: false, hasBadge: true, featureCount: 5 },
  ],
} as const;

export default function PreciosPage() {
  const t = useTranslations("pricing");
  const [tier, setTier] = useState<"empresa" | "profesional">("empresa");
  const plans = TIER_PLANS[tier];
  const tierName = tier === "empresa" ? t("companyLabel") : t("proLabel");

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans pb-24 pt-14 md:pt-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay z-0"></div>

      <section className="max-w-5xl mx-auto px-6 text-center mb-16 relative z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[560px] h-[560px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>

        <span className="inline-flex items-center gap-2 mb-6 px-5 py-2 rounded-full border border-slate-800 bg-slate-900/50 text-xs font-bold uppercase tracking-widest text-slate-300 shadow-md">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
          {t("badge")}
        </span>

        <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-white leading-tight">
          {t("title")}
        </h1>

        <p className="text-lg text-slate-400 max-w-3xl mx-auto mb-12">
          {t("subtitle")}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
          <button
            onClick={() => setTier("empresa")}
            className={`rounded-3xl border-2 px-6 py-5 text-left transition-all ${tier === "empresa" ? "border-lime-300 bg-lime-500/10 shadow-[0_0_30px_rgba(200,255,46,0.12)]" : "border-slate-800 bg-slate-900/80 hover:border-slate-600"}`}
          >
            <div className="flex items-center justify-between gap-4">
              <span className="text-lg font-bold text-white">{t("companyLabel")}</span>
              <span className="text-xs uppercase tracking-widest text-lime-200">{t("companyTag")}</span>
            </div>
            <p className="mt-3 text-sm text-slate-400">{t("companyDesc")}</p>
          </button>

          <button
            onClick={() => setTier("profesional")}
            className={`rounded-3xl border-2 px-6 py-5 text-left transition-all ${tier === "profesional" ? "border-sky-300 bg-sky-500/10 shadow-[0_0_30px_rgba(126,184,255,0.18)]" : "border-slate-800 bg-slate-900/80 hover:border-slate-600"}`}
          >
            <div className="flex items-center justify-between gap-4">
              <span className="text-lg font-bold text-white">{t("proLabel")}</span>
              <span className="text-xs uppercase tracking-widest text-sky-200">{t("proTag")}</span>
            </div>
            <p className="mt-3 text-sm text-slate-400">{t("proDesc")}</p>
          </button>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <span className={`text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full inline-block mb-4 ${tier === "empresa" ? "text-lime-900 bg-lime-400/15" : "text-sky-900 bg-sky-400/15"}`}>
            {tier === "empresa" ? t("companyTierLabel") : t("proTierLabel")}
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">{tier === "empresa" ? t("companyHeading") : t("proHeading")}</h2>
          <p className="text-slate-400 max-w-3xl mx-auto">{tier === "empresa" ? t("companyTierDesc") : t("proTierDesc")}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
          {plans.map((plan) => {
            const name = t(`${plan.msgKey}Name`);
            const price = plan.isCustom ? t("customPrice") : plan.price!;
            return (
              <article key={plan.msgKey} className="bg-[#12141a] border border-white/[0.06] rounded-[1.5rem] p-6 flex flex-col relative transition-all duration-300 hover:border-white/[0.12] hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)]">
                {plan.hasBadge && (
                  <span className="absolute top-4 right-4 rounded-full bg-slate-800 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-slate-200 font-bold">
                    {t(`${plan.msgKey}Badge`)}
                  </span>
                )}

                <h3 className="font-bold text-[17px] md:text-lg text-white mb-2 leading-tight">
                  {name}
                </h3>

                <p className="text-[#8a8f9c] text-[14px] leading-[1.6] mb-6">
                  {t(`${plan.msgKey}Sub`)}
                </p>

                <div className="mb-6">
                  <div className="text-[11px] text-[#555a66] uppercase tracking-widest font-bold mb-1">{t("fromLabel")}</div>
                  <div className="text-3xl font-bold tracking-tight text-white flex items-baseline gap-1">
                    {!plan.isCustom && <span className="text-lg text-white/50 font-normal">USD</span>}
                    {price}
                  </div>
                </div>

                <ul className="list-none space-y-3 mb-8 flex-1">
                  {Array.from({ length: plan.featureCount }, (_, i) => i + 1).map((f) => (
                    <li key={f} className="text-[13px] text-[#8a8f9c] flex items-start gap-2.5 leading-relaxed">
                      <span className={`text-[11px] font-black mt-[3px] ${tier === "empresa" ? "text-lime-300" : "text-sky-300"}`}>✓</span>
                      {t(`${plan.msgKey}F${f}`)}
                    </li>
                  ))}
                </ul>

                <div className="rounded-2xl border border-white/[0.04] bg-slate-950/50 p-4 mb-6 text-[13px] text-[#8a8f9c]">
                  <p className="font-bold text-white mb-1.5 text-[14px]">{t("idealLabel")}</p>
                  <p className="leading-relaxed">{t(`${plan.msgKey}Ideal`)}</p>
                </div>

                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(t("waPlan", { tier: tierName, plan: name, price }))}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full text-center py-3.5 rounded-xl font-bold text-[14px] transition-all ${
                    plan.hasBadge
                      ? tier === "empresa"
                        ? "bg-lime-300 text-slate-950 hover:bg-lime-200"
                        : "bg-sky-300 text-slate-950 hover:bg-sky-200"
                      : tier === "empresa"
                        ? "bg-transparent text-lime-300 border border-lime-300/30 hover:border-lime-300/50 hover:bg-lime-300/5"
                        : "bg-transparent text-sky-300 border border-sky-300/30 hover:border-sky-300/50 hover:bg-sky-300/5"
                  }`}
                >
                  {t("ctaWhatsApp")}
                </a>
              </article>
            );
          })}
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3">
          {([1, 2, 3] as const).map((n) => (
            <div key={n} className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4 text-center">
              <p className="text-[15px] font-bold text-white mb-2">{t(`trust${n}Title`)}</p>
              <p className="text-[13px] text-slate-400 leading-relaxed">{t(`trust${n}Body`)}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-[2rem] border border-slate-800 bg-slate-900/80 p-10 text-center shadow-[0_0_50px_rgba(15,23,42,0.6)]">
          <p className="text-slate-400 max-w-3xl mx-auto leading-relaxed">
            {t("closingBody")}
          </p>
          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(t("waClosing"))}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center rounded-3xl bg-sky-400 px-8 py-4 text-base font-black text-slate-950 shadow-[0_0_30px_rgba(56,189,248,0.25)] transition-all hover:bg-sky-300"
          >
            {t("closingCta")}
          </a>
        </div>
      </section>
    </div>
  );
}
