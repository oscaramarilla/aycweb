"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "../../context/LanguageContext";

type AccentColor = "emerald" | "blue" | "violet";

// --- CONFIGURACIÓN DE PLANES ---
const PLANES = [
  {
    id: "mvp-starter",
    badge: "Ideal para empezar",
    nombre: "MVP Starter",
    emoji: "🚀",
    precioUSD: "USD $75",
    precioGs: "Gs. 580.000",
    descripcion:
      "El sistema mínimo que ya vende. Presencia real, botones de WhatsApp estratégicos y copy B2B. Listo en 48hs.",
    features: [
      "Landing page profesional (1 página)",
      "Copywriting orientado a conversión",
      "Botones y mensajes preconfigurados a WhatsApp",
      "Integración de pasarela de pago (QR)",
      "Optimizado para celulares y desktop",
    ],
    accent: "emerald" as AccentColor,
    featured: false,
    ctaText: "Consultar por MVP Starter",
    msgValue: "Hola Oscar, me interesa el plan MVP Starter de USD $75. ¿Podemos hablar?"
  },
  {
    id: "landing-flash",
    badge: "🔥 Más Elegido",
    nombre: "Landing Flash",
    emoji: "⚡",
    precioUSD: "USD $200",
    precioGs: "Gs. 1.500.000",
    descripcion:
      "Sistema comercial completo. Autoridad, prueba social, objeciones resueltas y arquitectura de confianza.",
    features: [
      "Todo lo del MVP Starter",
      "Copy B2B de alto impacto",
      "Sección de prueba social y testimonios",
      "FAQ para resolver objeciones",
      "Arquitectura web para PageSpeed 95+",
    ],
    accent: "blue" as AccentColor,
    featured: true,
    ctaText: "Consultar por Landing Flash",
    msgValue: "Hola Oscar, me interesa el plan Landing Flash de USD $200. ¿Podemos agendar?"
  },
  {
    id: "automatizacion-inicial",
    badge: "Máxima potencia",
    nombre: "Automatización",
    emoji: "⚙️",
    precioUSD: "USD $340",
    precioGs: "Gs. 2.500.000",
    descripcion:
      "Infraestructura digital que elimina procesos manuales. Capta, precalifica y escala tu operación.",
    features: [
      "Todo lo del Landing Flash",
      "Formulario B2B inteligente",
      "Flujo de precalificación de leads",
      "SEO técnico avanzado",
      "Integración base para CRM",
    ],
    accent: "violet" as AccentColor,
    featured: false,
    ctaText: "Consultar por Automatización",
    msgValue: "Hola Oscar, quiero automatizar mi empresa con el plan de USD $340. ¿Hablamos?"
  },
];

export default function PricingOscar() {
  // Nota: Al usar "use client", el metadata debe ir en layout.tsx o ser manejado diferente.
  // Como esto es un Client Component, Next.js usa el título por defecto del layout.
  
  const { t } = useLanguage();
  const wa = "595985864209";
  const msgGeneral = encodeURIComponent("Hola Oscar, vengo de aycweb.com/oscar y quiero saber qué plan me conviene para mi negocio.");

  const accentStyles: Record<AccentColor, { border: string; bg: string; text: string; badge: string; glow: string; check: string; btn: string; priceBorder: string; }> = {
    emerald: {
      border: "border-emerald-500", bg: "bg-emerald-950/20", text: "text-emerald-400",
      badge: "border-emerald-800/50 bg-emerald-900/40 text-emerald-300", glow: "shadow-[0_0_40px_-8px_rgba(52,211,153,0.3)]",
      check: "text-emerald-400", btn: "bg-emerald-500 text-zinc-950 hover:bg-emerald-400", priceBorder: "border-emerald-900/40",
    },
    blue: {
      border: "border-blue-500", bg: "bg-blue-950/20", text: "text-blue-400",
      badge: "border-blue-700/60 bg-blue-900/40 text-blue-200", glow: "shadow-[0_0_50px_-8px_rgba(59,130,246,0.35)]",
      check: "text-blue-400", btn: "bg-blue-600 text-white hover:bg-blue-500", priceBorder: "border-blue-900/40",
    },
    violet: {
      border: "border-violet-500", bg: "bg-violet-950/20", text: "text-violet-400",
      badge: "border-violet-800/50 bg-violet-900/40 text-violet-300", glow: "shadow-[0_0_40px_-8px_rgba(139,92,246,0.3)]",
      check: "text-violet-400", btn: "bg-violet-600 text-white hover:bg-violet-500", priceBorder: "border-violet-900/40",
    },
  };

  return (
    <div className="min-h-screen bg-zinc-950 font-sans text-zinc-50 pb-28 md:pb-0">
      
      {/* HERO SECTION */}
      <section className="relative mx-auto max-w-7xl overflow-hidden px-6 pb-20 pt-12 md:pt-24 sm:pb-28">
        <div className="pointer-events-none absolute right-0 top-0 -z-10 h-[700px] w-[700px] rounded-full bg-blue-600/8 blur-[130px]" />
        
        <div className="max-w-3xl text-center mx-auto">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/80 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-zinc-400">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            Pricing Consultivo
          </div>
          <h1 className="mb-6 text-4xl font-black leading-[1.05] tracking-tighter text-white sm:text-5xl lg:text-6xl">
            Invertí en un sistema que <span className="text-blue-400">retorna capital.</span>
          </h1>
          <p className="mb-10 text-lg leading-relaxed text-zinc-400 sm:text-xl">
            Analizá los planes de infraestructura base. Si no estás seguro de cuál necesita tu operación, agendá una llamada y lo definimos juntos.
          </p>
        </div>
      </section>

      {/* LOS PLANES (Solo derivan a WhatsApp, no muestran QR) */}
      <section id="planes" className="mx-auto max-w-7xl px-6 py-16 sm:py-24 border-t border-zinc-900">
        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-3">
          {PLANES.map((plan) => {
            const s = accentStyles[plan.accent];
            const msgEncoded = encodeURIComponent(plan.msgValue);

            return (
              <article key={plan.id} className={`flex flex-col overflow-hidden rounded-[2rem] border-2 bg-zinc-950 transition-all duration-300 ${plan.featured ? `${s.border} ${s.glow} transform md:-translate-y-4` : "border-zinc-800 hover:border-zinc-700"}`}>
                {plan.featured && (
                  <div className={`w-full border-b py-2.5 text-center text-xs font-black uppercase tracking-widest ${s.bg} ${s.border} ${s.text}`}>
                    {plan.badge}
                  </div>
                )}

                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <div className="mb-6">
                    {!plan.featured && (
                      <span className={`mb-3 inline-block rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-widest ${s.badge}`}>
                        {plan.badge}
                      </span>
                    )}
                    <div className="mb-3 flex items-center gap-3">
                      <span className="text-3xl">{plan.emoji}</span>
                      <h3 className="text-2xl font-black text-white sm:text-3xl">{plan.nombre}</h3>
                    </div>
                    <p className="text-sm leading-relaxed text-zinc-400">{plan.descripcion}</p>
                  </div>

                  <div className={`mb-6 rounded-2xl border p-5 ${s.bg} ${s.priceBorder}`}>
                    <p className="mb-1 text-xs font-bold uppercase tracking-widest text-zinc-500">Inversión única</p>
                    <div className="flex flex-wrap items-end gap-3">
                      <p className={`text-4xl font-black ${s.text}`}>{plan.precioUSD}</p>
                      <p className="pb-0.5 text-base font-semibold text-zinc-500">{plan.precioGs}</p>
                    </div>
                  </div>

                  <ul className="mb-8 flex-1 space-y-3">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm">
                        <span className={`mt-0.5 text-lg font-black leading-none ${s.check}`}>✓</span>
                        <span className="text-zinc-300">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={`https://wa.me/${wa}?text=${msgEncoded}`}
                    target="_blank" rel="noopener noreferrer"
                    className={`w-full rounded-xl py-4 text-center text-base font-black transition-all active:scale-95 ${s.btn} ${plan.featured ? "shadow-lg" : ""}`}
                  >
                    {plan.ctaText}
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* MANTENIMIENTO */}
        <div className="mx-auto mt-12 flex max-w-4xl flex-col items-center gap-8 rounded-3xl border border-zinc-800 bg-zinc-900/50 p-8 text-left md:flex-row">
          <div className="flex-1">
            <h4 className="mb-2 text-xl font-bold text-white">Mantenimiento y Tranquilidad Operativa</h4>
            <p className="text-sm text-zinc-400">
              Nos encargamos del hosting premium, dominio a tu nombre, seguridad y soporte continuo.
            </p>
          </div>
          <div className="flex-shrink-0 border-l border-zinc-800 pl-8 text-center md:text-right">
            <p className="mb-1 text-sm font-bold uppercase tracking-widest text-zinc-500">Desde</p>
            <p className="text-3xl font-black text-blue-400">$15 USD<span className="text-sm font-medium text-zinc-500">/mes</span></p>
          </div>
        </div>
      </section>

      {/* CIERRE (Diagnóstico en vez de pago directo) */}
      <section className="py-24 bg-black text-center border-t border-zinc-900">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
            ¿No estás seguro de cuál elegir?
          </h2>
          <p className="text-zinc-400 text-lg mb-10">
            Cada empresa es un mundo. Agendá un diagnóstico gratuito de 10 minutos y te decimos exactamente qué arquitectura de software necesitas para tu operación actual.
          </p>
          <a
            href={`https://wa.me/${wa}?text=${msgGeneral}`}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-xl bg-zinc-800 border border-zinc-700 hover:bg-zinc-700 px-10 py-4 text-lg font-black text-white transition-all active:scale-95"
          >
            Agendar Diagnóstico Gratuito
          </a>
        </div>
      </section>

    </div>
  );
}
