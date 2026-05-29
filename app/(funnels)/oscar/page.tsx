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

export const metadata: Metadata = {
  title: "Planes Express — AYCweb",
  robots: { index: false, follow: false },
};

const PLANES = [
  {
    badge: "Profesionales",
    badgeColor: "emerald",
    nombre: "AYCweb Start",
    precio: "$60 USD",
    sub: "Activación única",
    detalle: "Captación, agenda y WhatsApp ordenado. Listo en 24–48 hs.",
    mant: "+ $15 USD/mes mantenimiento",
    waMsg: "Hola Oscar, quiero activar AYCweb Start (USD 60). Soy profesional independiente.",
  },
  {
    badge: "Empresas",
    badgeColor: "blue",
    nombre: "AYCweb Business",
    precio: "$180 USD",
    sub: "Anticipo 20% del setup ($900)",
    detalle: "Sistema B2B con cotizador, captación y WhatsApp estructurado. Entrega 3 semanas.",
    mant: "Pago por etapas: 20 / 30 / 20 / 30%",
    waMsg: "Hola Oscar, quiero iniciar AYCweb Business con el anticipo del 20% (USD 180).",
  },
  {
    badge: "Empresas",
    badgeColor: "violet",
    nombre: "AYCweb Enterprise",
    precio: "$360 USD",
    sub: "Anticipo 20% del setup ($1.800)",
    detalle: "Infraestructura completa: cotizador, PDFs, panel vendedores, métricas. Entrega 4–6 semanas.",
    mant: "Pago por etapas: 20 / 30 / 20 / 30%",
    waMsg: "Hola Oscar, quiero iniciar AYCweb Enterprise con el anticipo del 20% (USD 360).",
  },
];

const colorMap: Record<string, string> = {
  emerald: "border-emerald-500/30 bg-emerald-950/10 text-emerald-300",
  blue: "border-blue-500/30 bg-blue-950/10 text-blue-300",
  violet: "border-violet-500/30 bg-violet-950/10 text-violet-300",
};

const btnMap: Record<string, string> = {
  emerald: "bg-emerald-600 hover:bg-emerald-500 shadow-[0_0_25px_rgba(16,185,129,0.35)]",
  blue: "bg-blue-600 hover:bg-blue-500 shadow-[0_0_25px_rgba(37,99,235,0.35)]",
  violet: "bg-violet-600 hover:bg-violet-500 shadow-[0_0_25px_rgba(139,92,246,0.35)]",
};

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

        <div className="space-y-4">
          {PLANES.map((p) => {
            const badgeCls = colorMap[p.badgeColor] ?? colorMap.blue;
            const btnCls = btnMap[p.badgeColor] ?? btnMap.blue;
            return (
              <div
                key={p.nombre}
                className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <span
                      className={`inline-block text-[9px] font-black uppercase tracking-[0.18em] px-2.5 py-1 rounded-full border mb-2 ${badgeCls}`}
                    >
                      {p.badge}
                    </span>
                    <h2 className="text-lg font-black text-white leading-tight">{p.nombre}</h2>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="text-2xl font-black text-white">{p.precio}</div>
                    <div className="text-[11px] text-slate-500">{p.sub}</div>
                  </div>
                </div>
                <p className="text-[13px] text-slate-400 leading-relaxed mb-2">{p.detalle}</p>
                <p className="text-[11px] text-slate-600 mb-4">{p.mant}</p>
                <a
                  href={buildWaLink(p.waMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl font-black text-sm text-white transition-all active:scale-95 ${btnCls}`}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Iniciar con {p.precio}
                </a>
              </div>
            );
          })}
        </div>

        <p className="text-center text-[11px] text-slate-700 mt-8 leading-relaxed">
          Garantía Inteligente por Etapas · Sin letra chica · Oscar Amarilla — AYCweb
        </p>
      </div>
    </div>
  );
}
