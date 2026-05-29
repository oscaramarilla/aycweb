"use client";

import { PLANES_PRECIOS, formatCurrencyUSD, TEXTO_FINANCIAMIENTO } from "@/lib/config/precios";
import type { PlanPrecio } from "@/lib/config/precios";

export type PlanId = "starter" | "business" | "enterprise";

interface PricingCardProps {
  planId: PlanId;
  /** Precio del setup que se muestra (ej: 60 para starter en /oscar, 240 para starter normal) */
  setupDisplay?: number;
  /** Badge opcional */
  badge?: string | null;
  /** Color tema */
  accent?: "blue" | "emerald" | "violet";
  /** CTA label */
  ctaLabel?: string;
  /** CTA href */
  ctaHref?: string;
  /** Lista de features */
  features?: readonly string[];
  /** Subtítulo / tagline */
  tagline?: string;
  /** Ideal para */
  ideal?: string;
}

const accentMap: Record<string, { border: string; bg: string; text: string; btn: string }> = {
  blue: {
    border: "border-blue-500/30",
    bg: "bg-blue-950/10",
    text: "text-blue-300",
    btn: "bg-blue-600 hover:bg-blue-500 shadow-[0_0_25px_rgba(37,99,235,0.35)]",
  },
  emerald: {
    border: "border-emerald-500/30",
    bg: "bg-emerald-950/10",
    text: "text-emerald-300",
    btn: "bg-emerald-600 hover:bg-emerald-500 shadow-[0_0_25px_rgba(16,185,129,0.35)]",
  },
  violet: {
    border: "border-violet-500/30",
    bg: "bg-violet-950/10",
    text: "text-violet-300",
    btn: "bg-violet-600 hover:bg-violet-500 shadow-[0_0_25px_rgba(139,92,246,0.35)]",
  },
};

export default function PricingCard({
  planId,
  setupDisplay,
  badge,
  accent = "blue",
  ctaLabel,
  ctaHref,
  features,
  tagline,
  ideal,
}: PricingCardProps) {
  const plan: PlanPrecio = PLANES_PRECIOS[planId];
  const ac = accentMap[accent] ?? accentMap.blue;
  const setupVal = setupDisplay ?? plan.setupTotal;

  return (
    <article
      className={`relative rounded-[1.5rem] p-7 flex flex-col border ${ac.border} ${ac.bg} transition-all`}
    >
      {badge && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-blue-500 px-4 py-1 text-[10px] uppercase tracking-[0.2em] text-white font-black shadow-lg whitespace-nowrap">
          {badge}
        </span>
      )}

      {/* NOMBRE DEL PLAN */}
      <h3 className="text-lg font-black text-white mb-1">{plan.nombre}</h3>
      {tagline && <p className="text-[13px] text-slate-500 mb-4">{tagline}</p>}

      {/* ===== NUEVA JERARQUÍA VISUAL ===== */}

      {/* 1. DOMINANTE: Costo mensual */}
      <div className="mb-2">
        <span className="text-[11px] text-slate-500 uppercase tracking-widest font-bold">
          Mantenimiento mensual
        </span>
        <div className="text-5xl md:text-6xl font-black text-white tracking-tight leading-none mt-1">
          {plan.mantenimientoMensual} <span className="text-2xl md:text-3xl font-bold text-slate-400">USD/mes</span>
        </div>
      </div>

      {/* 2. MEDIANO: Setup único */}
      <div className="mt-4 mb-2">
        <span className="text-xl md:text-2xl font-bold text-slate-300">
          Setup: {formatCurrencyUSD(setupVal)}
        </span>
      </div>

      {/* 3. TEXTO DESCRIPTIVO: Aclaración de financiamiento */}
      <p className="text-[11px] md:text-xs text-slate-500 leading-relaxed mb-5">
        {TEXTO_FINANCIAMIENTO}
      </p>

      <div className="border-t border-white/[0.06] pt-4 mb-4" />

      {/* Tagline opcional si no va arriba */}
      {!tagline && ideal && (
        <p className="text-sm text-slate-400 leading-relaxed mb-4">{ideal}</p>
      )}

      {/* Features */}
      {features && features.length > 0 && (
        <ul className="space-y-2.5 mb-5 flex-1">
          {features.map((f) => (
            <li key={f} className="text-[13px] text-slate-300 flex items-start gap-2.5 leading-relaxed">
              <span className={`${ac.text} font-black mt-[2px]`}>✓</span>
              {f}
            </li>
          ))}
        </ul>
      )}

      {/* Ideal */}
      {ideal && !tagline && (
        <div className="rounded-xl border border-white/[0.04] bg-slate-950/50 p-3 mb-4 text-[12px] text-slate-400">
          <span className="font-bold text-white">Ideal para: </span>
          {ideal}
        </div>
      )}

      {/* CTA */}
      {ctaHref && (
        <a
          href={ctaHref}
          target="_blank"
          rel="noopener noreferrer"
          className={`block w-full text-center py-3.5 rounded-xl font-black text-[14px] text-white transition-all active:scale-95 ${ac.btn}`}
        >
          {ctaLabel ?? `Iniciar ${plan.nombre}`}
        </a>
      )}
    </article>
  );
}