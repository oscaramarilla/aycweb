/**
 * Planes Express AYCweb — ruta directa de cierre (/oscar)
 *
 * Esta ruta es para uso privado: Oscar la comparte con prospectos calificados
 * después del diagnóstico. NO debe indexarse ni aparecer en buscadores.
 * Debe mantenerse coherente con la oferta principal en /es/empresas y /es/profesionales.
 *
 * Oferta vigente:
 *   · AYCweb Start (Profesionales): USD 60 activación + USD 15/mes mantenimiento
 *   · AYCweb Business (Empresas): USD 900 setup — anticipo 20% = USD 180
 *   · AYCweb Enterprise (Empresas): USD 1.800 setup — anticipo 20% = USD 360
 */

import type { Metadata } from "next";
import { buildWaLink } from "@/lib/config/contact";
import { PLANES_PRECIOS, formatCurrencyUSD, TEXTO_FINANCIAMIENTO } from "@/lib/config/precios";
import PricingCard from "@/components/pricing/PricingCard";

export const metadata: Metadata = {
  title: "Planes Express — AYCweb",
  robots: { index: false, follow: false },
};

const PLANES = [
  {
    badge: "Profesionales",
    badgeColor: "emerald",
    nombre: PLANES_PRECIOS.starter.nombre,
    precio: formatCurrencyUSD(PLANES_PRECIOS.starter.setupTotal),
    sub: "Activación única",
    detalle: "Captación, agenda y WhatsApp ordenado. Listo en 24–48 hs.",
    mant: `+ ${formatCurrencyUSD(PLANES_PRECIOS.starter.mantenimientoMensual)}/mes mantenimiento`,
    waMsg: `Hola Oscar, quiero activar ${PLANES_PRECIOS.starter.nombre} (${formatCurrencyUSD(
      PLANES_PRECIOS.starter.setupTotal
    )}). Soy profesional independiente.`,
  },
  {
    badge: "Empresas",
    badgeColor: "blue",
    nombre: PLANES_PRECIOS.business.nombre,
    precio: formatCurrencyUSD(PLANES_PRECIOS.business.hitos.anticipo),
    sub: `Anticipo 20% del setup (${formatCurrencyUSD(PLANES_PRECIOS.business.setupTotal)})`,
    detalle: "Sistema B2B con cotizador, captación y WhatsApp estructurado. Entrega 3 semanas.",
    mant: "Pago por etapas: 20 / 30 / 20 / 30%",
    waMsg: `Hola Oscar, quiero iniciar ${PLANES_PRECIOS.business.nombre} con el anticipo del 20% (${formatCurrencyUSD(
      PLANES_PRECIOS.business.hitos.anticipo
    )}).`,
  },
  {
    badge: "Empresas",
    badgeColor: "violet",
    nombre: PLANES_PRECIOS.enterprise.nombre,
    precio: formatCurrencyUSD(PLANES_PRECIOS.enterprise.hitos.anticipo),
    sub: `Anticipo 20% del setup (${formatCurrencyUSD(PLANES_PRECIOS.enterprise.setupTotal)})`,
    detalle: "Infraestructura completa: cotizador, PDFs, panel vendedores, métricas. Entrega 4–6 semanas.",
    mant: "Pago por etapas: 20 / 30 / 20 / 30%",
    waMsg: `Hola Oscar, quiero iniciar ${PLANES_PRECIOS.enterprise.nombre} con el anticipo del 20% (${formatCurrencyUSD(
      PLANES_PRECIOS.enterprise.hitos.anticipo
    )}).`,
  },
];

export default function OscarPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 px-5 py-16 md:py-24 flex flex-col items-center">
      <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-10 pointer-events-none mix-blend-overlay" />

      <div className="relative z-10 w-full max-w-2xl">
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-600 text-center mb-2">
          AYCweb · Planes Express
        </p>
        <h1 className="text-3xl md:text-4xl font-black text-white text-center mb-2 tracking-tight">
          Iniciá tu sistema hoy.
        </h1>
        <p className="text-slate-400 text-center text-sm mb-10 max-w-sm mx-auto leading-relaxed">
          Elegí el plan que corresponde a tu caso y avisame por WhatsApp. Coordinamos de inmediato.
        </p>

        {/* Starter - Profesionales */}
        <PricingCard
          planId="starter"
          setupDisplay={PLANES_PRECIOS.starter.hitos.anticipo}
          accent="emerald"
          ctaHref={buildWaLink(PLANES[0].waMsg)}
          ctaLabel={`Iniciar con ${formatCurrencyUSD(PLANES_PRECIOS.starter.hitos.anticipo)}`}
          tagline={PLANES[0].detalle}
        />

        {/* Business */}
        <div className="mt-4">
          <PricingCard
            planId="business"
            setupDisplay={PLANES_PRECIOS.business.hitos.anticipo}
            accent="blue"
            badge="EMPRESAS"
            ctaHref={buildWaLink(PLANES[1].waMsg)}
            ctaLabel={`Iniciar con ${formatCurrencyUSD(PLANES_PRECIOS.business.hitos.anticipo)}`}
            tagline={PLANES[1].detalle}
          />
        </div>

        {/* Enterprise */}
        <div className="mt-4">
          <PricingCard
            planId="enterprise"
            setupDisplay={PLANES_PRECIOS.enterprise.hitos.anticipo}
            accent="violet"
            badge="EMPRESAS"
            ctaHref={buildWaLink(PLANES[2].waMsg)}
            ctaLabel={`Iniciar con ${formatCurrencyUSD(PLANES_PRECIOS.enterprise.hitos.anticipo)}`}
            tagline={PLANES[2].detalle}
          />
        </div>

        <p className="text-center text-[11px] text-slate-700 mt-8 leading-relaxed">
          Garantía Inteligente por Etapas · Sin letra chica · Oscar Amarilla — AYCweb
        </p>
      </div>
    </div>
  );
}
