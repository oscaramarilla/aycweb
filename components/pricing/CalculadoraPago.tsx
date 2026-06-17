"use client";

import { useState } from "react";
import {
  PLANES_PRECIOS,
  MODALIDADES_PAGO,
  calcularPago,
  totalContrato12m,
  totalPagoAnualAdelantado,
  formatCurrencyUSD,
  type ModalidadPagoId,
} from "@/lib/config/precios";

type Dict = Record<string, string>;

const PLAN_IDS = ["starter", "business", "enterprise"] as const;
type PlanId = (typeof PLAN_IDS)[number];

const MOD_LABEL: Record<ModalidadPagoId, string> = {
  unico: "calc.modUnico",
  "4pagos": "calc.mod4",
  "6pagos": "calc.mod6",
  "12cuotas": "calc.mod12",
};
const MOD_HINT: Record<ModalidadPagoId, string> = {
  unico: "calc.modUnicoHint",
  "4pagos": "calc.mod4Hint",
  "6pagos": "calc.mod6Hint",
  "12cuotas": "calc.mod12Hint",
};

export default function CalculadoraPago({ dict, lang, ctaHref }: { dict: Dict; lang: string; ctaHref: string }) {
  void lang;
  const t = (k: string) => dict[k] ?? k;
  const [planId, setPlanId] = useState<PlanId>("business");
  const [modId, setModId] = useState<ModalidadPagoId>("4pagos");

  const plan = PLANES_PRECIOS[planId];
  const modalidad = MODALIDADES_PAGO.find((m) => m.id === modId)!;
  const desglose = calcularPago(plan, modalidad);

  return (
    <div className="w-full max-w-4xl mx-auto mt-10 md:mt-14 rounded-3xl border border-white/[0.08] bg-slate-900/40 p-6 md:p-8">
      <div className="text-center mb-8">
        <span className="inline-block text-[11px] font-black uppercase tracking-[0.2em] text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full mb-3">
          {t("calc.kicker")}
        </span>
        <h3 className="text-2xl md:text-3xl font-black text-white mb-2">{t("calc.title")}</h3>
        <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed">{t("calc.sub")}</p>
      </div>

      {/* 1 · Plan */}
      <p className="text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-3">{t("calc.planLabel")}</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-7">
        {PLAN_IDS.map((id) => {
          const p = PLANES_PRECIOS[id];
          const active = id === planId;
          return (
            <button
              key={id}
              type="button"
              onClick={() => setPlanId(id)}
              className={`rounded-xl border px-4 py-3 text-left transition-all ${
                active ? "border-blue-500 bg-blue-600/15" : "border-slate-700 bg-slate-950/50 hover:border-slate-500"
              }`}
            >
              <span className={`block text-sm font-black ${active ? "text-blue-300" : "text-white"}`}>{p.nombre}</span>
              <span className="block text-[12px] text-slate-400 mt-0.5">
                {formatCurrencyUSD(p.setupTotal)} + {formatCurrencyUSD(p.mantenimientoMensual)}/mes
              </span>
            </button>
          );
        })}
      </div>

      {/* 2 · Modalidad */}
      <p className="text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-3">{t("calc.modalityLabel")}</p>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 mb-8">
        {MODALIDADES_PAGO.map((m) => {
          const active = m.id === modId;
          return (
            <button
              key={m.id}
              type="button"
              onClick={() => setModId(m.id)}
              className={`rounded-xl border px-3 py-3 text-center transition-all ${
                active ? "border-emerald-500 bg-emerald-600/15" : "border-slate-700 bg-slate-950/50 hover:border-slate-500"
              }`}
            >
              <span className={`block text-sm font-black ${active ? "text-emerald-300" : "text-white"}`}>{t(MOD_LABEL[m.id])}</span>
              <span className="block text-[10px] text-slate-500 mt-1 leading-tight">{t(MOD_HINT[m.id])}</span>
            </button>
          );
        })}
      </div>

      {/* Resultado */}
      <div className="rounded-2xl border border-white/[0.08] bg-slate-950/60 p-5 md:p-6 space-y-3">
        <div className="flex items-center justify-between gap-4">
          <span className="text-slate-400 text-sm">{t("calc.construction")}</span>
          <span className="text-white font-bold text-right">
            {desglose.nCuotas === 1 ? (
              formatCurrencyUSD(desglose.cuotaConstruccion)
            ) : (
              <>
                {t("calc.installmentsOf").replace("{n}", String(desglose.nCuotas))}{" "}
                <span className="text-blue-300">{formatCurrencyUSD(desglose.cuotaConstruccion)}</span>
              </>
            )}
          </span>
        </div>

        <div className="flex items-center justify-between gap-4 border-t border-white/[0.05] pt-3">
          <span className="text-slate-400 text-sm">{t("calc.monthly")}</span>
          <span className="text-white font-bold">{formatCurrencyUSD(plan.mantenimientoMensual)}/mes</span>
        </div>

        {desglose.mesesExonerados > 0 && (
          <div className="flex items-center justify-between gap-4 border-t border-white/[0.05] pt-3">
            <span className="text-emerald-400 text-sm">
              {t("calc.exonerated").replace("{n}", String(desglose.mesesExonerados))}
            </span>
            <span className="text-emerald-300 font-bold">
              − {formatCurrencyUSD(desglose.ahorroExoneracion)}
            </span>
          </div>
        )}

        <div className="flex items-center justify-between gap-4 border-t border-white/[0.08] pt-4 mt-1">
          <span className="text-white font-black uppercase text-[12px] tracking-wider">{t("calc.totalYear1")}</span>
          <span className="text-2xl font-black text-white">{formatCurrencyUSD(desglose.totalAnio1)}</span>
        </div>
      </div>

      {/* Pago anual adelantado */}
      <div className="mt-4 rounded-2xl border border-emerald-500/25 bg-emerald-950/15 p-4 md:p-5 text-center">
        <p className="text-sm font-black text-emerald-300 mb-1">{t("calc.annualTitle")}</p>
        <p
          className="text-[13px] text-slate-300 leading-relaxed"
          dangerouslySetInnerHTML={{
            __html: t("calc.annualBody")
              .replace("{amount}", `<span class="text-emerald-300 font-bold">${formatCurrencyUSD(totalPagoAnualAdelantado(plan))}</span>`)
              .replace("{full}", `<span class="line-through text-slate-500">${formatCurrencyUSD(totalContrato12m(plan))}</span>`),
          }}
        />
      </div>

      <a
        href={ctaHref}
        className="mt-6 block w-full text-center bg-blue-600 hover:bg-blue-500 text-white font-black py-3.5 rounded-xl transition-all shadow-[0_0_24px_rgba(37,99,235,0.3)] active:scale-95 text-[14px]"
      >
        {t("calc.cta")}
      </a>
      <p className="text-[10px] md:text-xs text-slate-600 text-center mt-4 leading-relaxed">{t("calc.note")}</p>
    </div>
  );
}
