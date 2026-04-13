"use client";

import { useState } from "react";
import Link from "next/link";

const whatsappNumber = "595985864209";

const TIERS = {
  empresa: {
    label: "Tier Empresarial",
    accent: "lime",
    description: "Motores que reemplazan procesos manuales enteros y recuperan horas-hombre cada semana.",
    maintenance: "$80 USD/mes",
    plans: [
      {
        name: "Embudo Comercial Corporativo",
        price: "$900",
        subtitle: "Entrega en 3 semanas",
        features: [
          "Sitio multi-página adaptado a B2B",
          "Embudo con formularios condicionales",
          "Base de datos de contactos preparada para CRM",
          "SEO técnico y PageSpeed 95+",
        ],
        ideal: "Manufactureras, clínicas, agroindustria, distribuidoras y hospitales.",
      },
      {
        name: "Motor Operativo",
        price: "$1.800",
        subtitle: "Entrega en 4-6 semanas",
        badge: "MÁS ELEGIDO",
        features: [
          "Todo lo del Embudo Comercial Corporativo",
          "Cotizador dinámico interactivo",
          "Generación de PDFs y contratos automáticos",
          "Panel de métricas y flujo interno para vendedores",
        ],
        ideal: "Empresas con procesos comerciales complejos y datos en escala.",
      },
      {
        name: "Infraestructura Custom",
        price: "A medida",
        subtitle: "Cotización tras auditoría técnica",
        features: [
          "Portales seguros con login",
          "Conexión con ERPs y APIs empresariales",
          "Dashboards tiempo real",
          "Automatización de procesos complejos y SLA dedicado",
        ],
        ideal: "Casos que requieren soluciones de software a medida.",
      },
    ],
  },
  profesional: {
    label: "Tier Profesional",
    accent: "sky",
    description: "Sistemas que captan pacientes, clientes y proyectos sin que vos levantes el teléfono.",
    maintenance: "$25 USD/mes",
    plans: [
      {
        name: "Presencia & Captación",
        price: "$350",
        subtitle: "Base clara para captar mejor y convertir consultas en oportunidades.",
        features: [
          "Landing page profesional de una sola página",
          "Copywriting orientado a conversión",
          "Mensajes pre-armados a WhatsApp",
          "Links de pago QR / Pagopar",
          "Diseño mobile-first",
        ],
        ideal: "Médicos, dentistas, abogados, contadores, fotógrafos y diseñadores.",
      },
      {
        name: "Consultorio Digital",
        price: "$650",
        subtitle: "Sistemas para captar mejor, filtrar consultas y cerrar con más orden.",
        badge: "RECOMENDADO",
        features: [
          "Todo lo anterior",
          "Agenda Calendly / Google Calendar integrada",
          "Formularios de precalificación",
          "Blog de autoridad y SEO on-page",
          "PageSpeed 95+",
        ],
        ideal: "Profesionales que buscan ventas activas con automatización.",
      },
    ],
  },
} as const;

// Tipos ultra-estrictos para que TypeScript no moleste por el "as const"
type PlanType = {
  readonly name: string;
  readonly price: string;
  readonly subtitle: string;
  readonly badge?: string;
  readonly features: readonly string[];
  readonly ideal: string;
};

export default function PreciosPage() {
  const [tier, setTier] = useState<"empresa" | "profesional">("empresa");
  const currentTier = TIERS[tier];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans pb-24 pt-14 md:pt-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay z-0"></div>

      <section className="max-w-5xl mx-auto px-6 text-center mb-16 relative z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[560px] h-[560px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>

        <span className="inline-flex items-center gap-2 mb-6 px-5 py-2 rounded-full border border-slate-800 bg-slate-900/50 text-xs font-bold uppercase tracking-widest text-slate-300 shadow-md">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
          ◆ Arquitectura de Precios
        </span>

        <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-white leading-tight">
          Inversión clara. Retorno operativo medible.
        </h1>

        <p className="text-lg text-slate-400 max-w-3xl mx-auto mb-12">
          Elegí tu perfil y encontrá la infraestructura exacta que necesita tu operación, con planes transparentes y cobro estratégico.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
          <button
            onClick={() => setTier("empresa")}
            className={`rounded-3xl border-2 px-6 py-5 text-left transition-all ${tier === "empresa" ? "border-lime-300 bg-lime-500/10 shadow-[0_0_30px_rgba(200,255,46,0.12)]" : "border-slate-800 bg-slate-900/80 hover:border-slate-600"}`}
          >
            <div className="flex items-center justify-between gap-4">
              <span className="text-lg font-bold text-white">Empresa</span>
              <span className="text-xs uppercase tracking-widest text-lime-200">Infraestructura</span>
            </div>
            <p className="mt-3 text-sm text-slate-400">Manufactureras, clínicas, agroindustria, distribuidoras, hospitales.</p>
          </button>

          <button
            onClick={() => setTier("profesional")}
            className={`rounded-3xl border-2 px-6 py-5 text-left transition-all ${tier === "profesional" ? "border-sky-300 bg-sky-500/10 shadow-[0_0_30px_rgba(126,184,255,0.18)]" : "border-slate-800 bg-slate-900/80 hover:border-slate-600"}`}
          >
            <div className="flex items-center justify-between gap-4">
              <span className="text-lg font-bold text-white">Profesional</span>
              <span className="text-xs uppercase tracking-widest text-sky-200">Captación</span>
            </div>
            <p className="mt-3 text-sm text-slate-400">Médicos, dentistas, abogados, contadores, fotógrafos, diseñadores.</p>
          </button>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <span className={`text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full inline-block mb-4 ${tier === "empresa" ? "text-lime-900 bg-lime-400/15" : "text-sky-900 bg-sky-400/15"}`}>{currentTier.label}</span>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">{tier === "empresa" ? "Infraestructura para operaciones complejas" : "Tu consultorio trabaja por vos"}</h2>
          <p className="text-slate-400 max-w-3xl mx-auto">{currentTier.description}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
          {currentTier.plans.map((plan: PlanType) => (
            <article key={plan.name} className="bg-[#12141a] border border-white/[0.06] rounded-[1.5rem] p-6 flex flex-col relative transition-all duration-300 hover:border-white/[0.12] hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)]">
              {plan.badge && (
                <span className="absolute top-4 right-4 rounded-full bg-slate-800 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-slate-200 font-bold">
                  {plan.badge}
                </span>
              )}

              <h3 className="font-bold text-[17px] md:text-lg text-white mb-2 leading-tight">
                {plan.name}
              </h3>

              <p className="text-[#8a8f9c] text-[14px] leading-[1.6] mb-6">
                {plan.subtitle}
              </p>

              <div className="mb-6">
                <div className="text-[11px] text-[#555a66] uppercase tracking-widest font-bold mb-1">Desde</div>
                <div className="text-3xl font-bold tracking-tight text-white flex items-baseline gap-1">
                  {plan.price !== "A medida" && <span className="text-lg text-white/50 font-normal">USD</span>}
                  {plan.price}
                </div>
              </div>

              <ul className="list-none space-y-3 mb-8 flex-1">
                {plan.features.map((feature: string) => (
                  <li key={feature} className="text-[13px] text-[#8a8f9c] flex items-start gap-2.5 leading-relaxed">
                    <span className={`text-[11px] font-black mt-[3px] ${tier === "empresa" ? "text-lime-300" : "text-sky-300"}`}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="rounded-2xl border border-white/[0.04] bg-slate-950/50 p-4 mb-6 text-[13px] text-[#8a8f9c]">
                <p className="font-bold text-white mb-1.5 text-[14px]">Ideal para:</p>
                <p className="leading-relaxed">{plan.ideal}</p>
              </div>

              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hola Oscar, soy ${tier} y me interesa ${plan.name} de ${plan.price}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full text-center py-3.5 rounded-xl font-bold text-[14px] transition-all ${
                  plan.badge 
                    ? tier === "empresa" 
                      ? "bg-lime-300 text-slate-950 hover:bg-lime-200" 
                      : "bg-sky-300 text-slate-950 hover:bg-sky-200"
                    : tier === "empresa"
                      ? "bg-transparent text-lime-300 border border-lime-300/30 hover:border-lime-300/50 hover:bg-lime-300/5"
                      : "bg-transparent text-sky-300 border border-sky-300/30 hover:border-sky-300/50 hover:bg-sky-300/5"
                }`}
              >
                Contactar por WhatsApp
              </a>
            </article>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4 text-center">
            <p className="text-[15px] font-bold text-white mb-2">Pagás primero</p>
            <p className="text-[13px] text-slate-400 leading-relaxed">Reservá tu lugar. El compromiso es mutuo desde el día uno.</p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4 text-center">
            <p className="text-[15px] font-bold text-white mb-2">30 días de garantía</p>
            <p className="text-[13px] text-slate-400 leading-relaxed">Si no funciona para ninguna de las partes, devolución total.</p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4 text-center">
            <p className="text-[15px] font-bold text-white mb-2">Sin letra chica</p>
            <p className="text-[13px] text-slate-400 leading-relaxed">Cero sorpresas. Cero costos ocultos. Cero excusas.</p>
          </div>
        </div>

        <div className="mt-10 rounded-[2rem] border border-slate-800 bg-slate-900/80 p-10 text-center shadow-[0_0_50px_rgba(15,23,42,0.6)]">
          <p className="text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Elegimos con quién trabajamos. Antes de arrancar, evaluamos si podemos generar impacto real en tu negocio. Si después de pagar decidimos que no somos el equipo correcto para tu caso, te devolvemos el 100%. Si no estás conforme con el resultado, te devolvemos el 100%.
          </p>
          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hola Oscar, quiero agendar un Diagnóstico Gratuito para mi negocio.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center rounded-3xl bg-sky-400 px-8 py-4 text-base font-black text-slate-950 shadow-[0_0_30px_rgba(56,189,248,0.25)] transition-all hover:bg-sky-300"
          >
            Agendar Diagnóstico Gratuito
          </a>
        </div>
      </section>
    </div>
  );
}
