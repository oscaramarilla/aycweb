"use client";

import { PLANES_PRECIOS, formatCurrencyUSD } from "@/lib/config/precios";

/**
 * PricingComparativa — Tabla comparativa Business vs Enterprise.
 * Muestra features lado a lado con checkmarks y anclaje de valor.
 */
export default function PricingComparativa() {
  const business = PLANES_PRECIOS.business;
  const enterprise = PLANES_PRECIOS.enterprise;

  const features: Array<{
    label: string;
    business: boolean | string;
    enterprise: boolean | string;
  }> = [
    { label: "Sistema de cotización automatizado", business: true, enterprise: true },
    { label: "Generación de PDF profesional", business: true, enterprise: true },
    { label: "Integración con WhatsApp", business: true, enterprise: true },
    { label: "Panel de métricas en tiempo real", business: true, enterprise: true },
    { label: "Mantenimiento y actualizaciones", business: true, enterprise: true },
    { label: "Cotizador paramétrico avanzado", business: false, enterprise: true },
    { label: "Automatización de flujos multi-etapa", business: false, enterprise: true },
    { label: "Integración con sistemas existentes (ERP/API)", business: false, enterprise: true },
    { label: "Soporte prioritario 48 h", business: false, enterprise: true },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto mt-10 md:mt-12">
      {/* Anclaje de valor */}
      <div className="bg-gradient-to-r from-blue-600/10 via-transparent to-violet-600/10 border border-white/[0.06] rounded-2xl p-4 md:p-5 mb-6 text-center">
        <p className="text-slate-300 text-[13px] md:text-sm leading-relaxed">
          💡 <span className="text-white font-bold">Anclaje de valor:</span>{" "}
          Cualquiera de los dos planes reemplaza <span className="text-blue-300 font-bold">1 asistente administrativo + 1 vendedor junior</span> en tu operación. El sistema no se cansa, no se enferma y no pide aumento.
        </p>
      </div>

      {/* Tabla comparativa */}
      <div className="overflow-hidden rounded-2xl border border-white/[0.08]">
        {/* Header */}
        <div className="grid grid-cols-3 bg-white/[0.03] border-b border-white/[0.08]">
          <div className="p-3 md:p-4 text-left">
            <span className="text-[11px] md:text-xs font-bold uppercase tracking-wider text-slate-500">Feature</span>
          </div>
          <div className="p-3 md:p-4 text-center border-l border-white/[0.06]">
            <span className="text-[11px] md:text-xs font-bold uppercase tracking-wider text-blue-400">Business</span>
            <span className="block text-[18px] md:text-xl font-black text-white mt-1">{formatCurrencyUSD(business.setupTotal)}</span>
            <span className="text-[9px] md:text-[10px] text-slate-500">{business.mantenimientoMensual} USD/mes</span>
          </div>
          <div className="p-3 md:p-4 text-center border-l border-white/[0.06] bg-violet-500/5">
            <span className="text-[11px] md:text-xs font-bold uppercase tracking-wider text-violet-400">Enterprise</span>
            <span className="block text-[18px] md:text-xl font-black text-white mt-1">{formatCurrencyUSD(enterprise.setupTotal)}</span>
            <span className="text-[9px] md:text-[10px] text-slate-500">{enterprise.mantenimientoMensual} USD/mes</span>
            <span className="block text-[8px] md:text-[9px] font-bold uppercase tracking-wider text-violet-400 mt-0.5">Recomendado</span>
          </div>
        </div>

        {/* Rows */}
        {features.map((feat, i) => (
          <div
            key={feat.label}
            className={`grid grid-cols-3 ${
              i % 2 === 0 ? "bg-white/[0.02]" : "bg-transparent"
            } border-b border-white/[0.04] last:border-b-0`}
          >
            <div className="p-3 md:p-4 text-left">
              <span className="text-[12px] md:text-sm text-slate-300">{feat.label}</span>
            </div>
            <div className="p-3 md:p-4 text-center border-l border-white/[0.04] flex items-center justify-center">
              {typeof feat.business === "boolean" ? (
                feat.business ? (
                  <span className="text-emerald-400 font-black text-base md:text-lg">✓</span>
                ) : (
                  <span className="text-slate-600 text-base md:text-lg">—</span>
                )
              ) : (
                <span className="text-[11px] md:text-xs text-slate-400">{feat.business}</span>
              )}
            </div>
            <div className="p-3 md:p-4 text-center border-l border-white/[0.04] bg-violet-500/[0.03] flex items-center justify-center">
              {typeof feat.enterprise === "boolean" ? (
                feat.enterprise ? (
                  <span className="text-emerald-400 font-black text-base md:text-lg">✓</span>
                ) : (
                  <span className="text-slate-600 text-base md:text-lg">—</span>
                )
              ) : (
                <span className="text-[11px] md:text-xs text-slate-400">{feat.enterprise}</span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <p className="text-[10px] md:text-xs text-slate-600 text-center mt-4 leading-relaxed">
        Los features detallados son representativos de cada plan. La propuesta final se define en la etapa de diagnóstico según la operación específica.
      </p>
    </div>
  );
}