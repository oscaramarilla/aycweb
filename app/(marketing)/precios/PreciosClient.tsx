"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

type AccentColor = "emerald" | "blue" | "violet";

const PLANES = [
  {
    id: "landing-comercial",
    badge: "Captación B2B",
    nombre: "Landing Comercial Base",
    emoji: "🧲",
    precioUSD: "Desde USD $350",
    precioGs: "Desde Gs. 2.625.000",
    descripcion:
      "Para empresas que necesitan dejar de verse como freelancers. Un embudo de captación formal, con copy persuasivo y rutas directas a WhatsApp. Operativo en 48hs.",
    features: [
      "Landing Page Premium (1 página)",
      "Copywriting orientado a cerrar ventas",
      "Filtro de leads hacia WhatsApp",
      "Integración de pasarela de pago (QR)",
      "Optimización estricta PageSpeed 99/100",
    ],
    accent: "emerald" as AccentColor,
    featured: false,
    ctaText: "Solicitar Landing Base",
    msgValue: "Hola Oscar, me interesa implementar la Landing Comercial Base a partir de USD $350 para captar mejores clientes. ¿Podemos coordinar?"
  },
  {
    id: "motor-cotizacion",
    badge: "🔥 El Estándar B2B",
    nombre: "Motor de Cotización Base",
    emoji: "⏱️",
    precioUSD: "Desde USD $650",
    precioGs: "Desde Gs. 4.875.000",
    descripcion:
      "Para PyMEs industriales y B2B que ya venden, pero cotizan en Excel. Automatizamos tus precios y autogeneramos tus PDFs para cotizar en segundos.",
    features: [
      "Todo lo de la Landing Comercial Base",
      "Calculadora Dinámica de Presupuestos",
      "Generación de PDFs formales en el acto",
      "Sección de Casos de Éxito / Prueba Social",
      "Arquitectura Multi-Página corporativa",
    ],
    accent: "blue" as AccentColor,
    featured: true,
    ctaText: "Solicitar Motor de Cotización",
    msgValue: "Hola Oscar, quiero implementar el Motor de Cotización Base a partir de USD $650 para dejar de usar Excel. ¿Podemos agendar el setup?"
  },
  {
    id: "sistema-operativo",
    badge: "Escalabilidad Total",
    nombre: "Sistema Operativo Empresarial",
    emoji: "⚙️",
    precioUSD: "Desde USD $900",
    precioGs: "Desde Gs. 6.750.000",
    descripcion:
      "Para empresas con procesos operativos complejos. Embudo B2B, Motor Operativo, portales de clientes o integraciones ERP. Construido a medida.",
    features: [
      "Todo lo del Motor de Cotización",
      "Embudo de captación y calificación avanzado",
      "Portales B2B con acceso restringido",
      "Automatización de Contratos y Documentos",
      "Arquitectura Empresarial lista para escalar",
    ],
    accent: "violet" as AccentColor,
    featured: false,
    ctaText: "Agendar Auditoría Empresarial",
    msgValue: "Hola Oscar, necesito un Sistema Operativo Empresarial a partir de USD $900 para automatizar procesos complejos. ¿Cuándo hacemos la auditoría?"
  },
];

export default function PreciosClient() {
  const { t } = useLanguage();
  const wa = "595985864209";
  const msgGeneral = encodeURIComponent("Hola Oscar, necesito que auditen mi operación para saber qué arquitectura web o software necesito exactamente.");

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
      
      <section className="relative mx-auto max-w-7xl overflow-hidden px-6 pb-20 pt-12 md:pt-24 sm:pb-28">
        <div className="pointer-events-none absolute right-0 top-0 -z-10 h-[700px] w-[700px] rounded-full bg-blue-600/8 blur-[130px]" />
        
        <div className="max-w-3xl text-center mx-auto">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/80 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-zinc-400">
            <span className="h-2 w-2 animate-pulse rounded-full bg-blue-500" />
            Arquitectura de Precios B2B
          </div>
          <h1 className="mb-6 text-4xl font-black leading-[1.05] tracking-tighter text-white sm:text-5xl lg:text-6xl">
            Inversión clara. <br/><span className="text-blue-400">Retorno operativo medible.</span>
          </h1>
          <p className="mb-10 text-lg leading-relaxed text-zinc-400 sm:text-xl">
            Sistemas empaquetados sin costos ocultos. Eligí la herramienta que resuelve tu cuello de botella actual, y escalemos desde ahí.
          </p>
        </div>
      </section>

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
                    <p className="mb-1 text-xs font-bold uppercase tracking-widest text-zinc-500">Setup Único</p>
                    <div className="flex flex-wrap items-end gap-3">
                      <p className={`text-4xl font-black ${s.text}`}>{plan.precioUSD}</p>
                      <p className="pb-0.5 text-base font-semibold text-zinc-500">{plan.precioGs}</p>
                    </div>
                  </div>

                  <ul className="mb-8 flex-1 space-y-3">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm font-medium">
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

        {/* FEE DE MANTENIMIENTO DIFERENCIADO */}
        <div className="mx-auto mt-16 max-w-5xl">
          <div className="rounded-3xl border border-blue-900/30 bg-blue-950/10 p-8 mb-6 shadow-xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-800/50 bg-blue-900/20 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-blue-400 mb-4">
              <span className="h-2 w-2 animate-pulse rounded-full bg-blue-400" />
              Soporte Continuo Diferenciado
            </div>
            <h4 className="mb-4 text-2xl font-black text-white">Hosting, Backups y Soporte Técnico</h4>
            <p className="text-sm text-zinc-400 leading-relaxed mb-6">
              Nos encargamos del hosting en servidores de alta velocidad (Vercel), dominio corporativo, copias de seguridad semanales, certificados SSL y soporte técnico directo para que tu motor no se detenga jamás.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-emerald-900/40 bg-emerald-950/10 p-6">
              <p className="text-sm font-bold uppercase tracking-widest text-emerald-400 mb-2">Tier Profesional</p>
              <p className="text-3xl font-black text-white mb-1">Desde $25</p>
              <p className="text-sm text-zinc-400">USD/mes • Landing + Motor Base</p>
            </div>
            <div className="rounded-2xl border border-violet-900/40 bg-violet-950/10 p-6">
              <p className="text-sm font-bold uppercase tracking-widest text-violet-400 mb-2">Tier Empresarial</p>
              <p className="text-3xl font-black text-white mb-1">Desde $80</p>
              <p className="text-sm text-zinc-400">USD/mes • Sistemas Operativos</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL DE AUDITORÍA */}
      <section className="py-24 bg-black text-center border-t border-zinc-900 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
            No adivines qué software necesitás.
          </h2>
          <p className="text-zinc-400 text-xl mb-10 leading-relaxed">
            Te decimos exactamente qué arquitectura de software necesitás para destrabar tu operación hoy mismo.
          </p>
          <a
            href={`https://wa.me/${wa}?text=${msgGeneral}`}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-2xl bg-blue-600 hover:bg-blue-500 px-12 py-6 text-xl font-black text-white transition-all active:scale-95 shadow-[0_0_40px_rgba(37,99,235,0.4)]"
          >
            Auditar mi Operación &rarr;
          </a>
        </div>
      </section>

    </div>
  );
}
