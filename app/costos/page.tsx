"use client";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap');

        .font-display { font-family: 'Syne', sans-serif; }
        .font-body   { font-family: 'DM Sans', sans-serif; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(59,130,246,.5); }
          50%       { box-shadow: 0 0 0 8px rgba(59,130,246,0); }
        }
        @keyframes scanline {
          0%   { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
        @keyframes ticker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-fade-up-1 { animation: fadeUp .7s ease both .1s; }
        .animate-fade-up-2 { animation: fadeUp .7s ease both .3s; }
        .animate-fade-up-3 { animation: fadeUp .7s ease both .5s; }
        .animate-fade-up-4 { animation: fadeUp .7s ease both .7s; }
        .animate-fade-up-5 { animation: fadeUp .7s ease both .9s; }
        .pulse-glow        { animation: pulseGlow 2s infinite; }
        .scanline {
          animation: scanline 8s linear infinite;
          pointer-events: none;
        }
        .ticker-track { animation: ticker 30s linear infinite; }

        .grid-dot-bg {
          background-image: radial-gradient(circle, rgba(255,255,255,.06) 1px, transparent 1px);
          background-size: 32px 32px;
        }

        .card-hover {
          transition: transform .3s ease, border-color .3s ease, box-shadow .3s ease;
        }
        .card-hover:hover {
          transform: translateY(-6px);
          border-color: rgba(59,130,246,.5);
          box-shadow: 0 24px 48px rgba(0,0,0,.4), 0 0 40px rgba(59,130,246,.1);
        }

        .pill-badge {
          background: linear-gradient(135deg, rgba(59,130,246,.15), rgba(99,102,241,.1));
          border: 1px solid rgba(59,130,246,.25);
        }
      `}</style>

      {/* ══════════════════════════  HERO  ══════════════════════════ */}
      <section className="relative bg-zinc-950 text-white overflow-hidden font-body">

        {/* Noise / scanline overlay */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="scanline absolute left-0 right-0 h-32"
            style={{ background: "linear-gradient(to bottom, transparent, rgba(59,130,246,.03), transparent)" }} />
        </div>

        {/* Grid dot background */}
        <div className="absolute inset-0 grid-dot-bg opacity-40 z-0" />

        {/* Radial glow — top center */}
        <div className="absolute inset-0 z-0"
          style={{ background: "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(37,99,235,.2) 0%, transparent 70%)" }} />

        {/* Accent line — left edge */}
        <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-transparent via-blue-500/30 to-transparent z-0" />

        {/* ── Main container ── */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-20">

          {/* Badge */}
          <div className={`flex justify-center mb-10 ${mounted ? "animate-fade-up-1" : "opacity-0"}`}>
            <div className="pill-badge inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full">
              <span className="h-2 w-2 rounded-full bg-blue-400 pulse-glow" />
              <span className="font-display text-blue-300 text-xs tracking-[.2em] uppercase">
                AYC · Automatización y Contratos
              </span>
            </div>
          </div>

          {/* H1 */}
          <h1 className={`font-display text-center text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[1.05] mb-8 ${mounted ? "animate-fade-up-2" : "opacity-0"}`}>
            <span className="text-white">No hacemos páginas web.</span>
            <br />
            <span style={{ background: "linear-gradient(90deg,#3b82f6,#818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Construimos máquinas de tiempo.
            </span>
          </h1>

          {/* Sub */}
          <p className={`text-center text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12 ${mounted ? "animate-fade-up-3" : "opacity-0"}`}>
            Eliminamos los cuellos de botella de tu empresa con software a medida, inteligencia artificial y automatización B2B — para que escales tu facturación sin escalar tu equipo.
          </p>

          {/* CTAs */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-20 ${mounted ? "animate-fade-up-4" : "opacity-0"}`}>
            <button
              className="px-8 py-4 rounded-xl font-display font-bold text-base tracking-wide text-white transition-all hover:-translate-y-1"
              style={{ background: "linear-gradient(135deg,#2563eb,#4f46e5)", boxShadow: "0 0 30px rgba(37,99,235,.4)" }}
            >
              Auditar mi empresa — Gratis
            </button>
            <button className="px-8 py-4 rounded-xl font-display font-bold text-base tracking-wide text-zinc-300 border border-zinc-700 hover:border-zinc-500 hover:text-white transition-all hover:-translate-y-1 bg-zinc-900/60 backdrop-blur-sm">
              Ver caso de éxito: Metal Mad →
            </button>
          </div>

          {/* Tech strip */}
          <div className={`border-t border-zinc-800/60 pt-10 ${mounted ? "animate-fade-up-5" : "opacity-0"}`}>
            <p className="text-center text-[10px] text-zinc-600 tracking-[.25em] uppercase font-display mb-6">
              Stack que dominamos
            </p>
            <div className="overflow-hidden">
              <div className="ticker-track flex gap-16 whitespace-nowrap w-max">
                {["Next.js", "React", "Vercel", "Inteligencia Artificial", "Automatización", "Node.js", "Cloud", "PostgreSQL",
                  "Next.js", "React", "Vercel", "Inteligencia Artificial", "Automatización", "Node.js", "Cloud", "PostgreSQL"].map((t, i) => (
                  <span key={i} className="text-zinc-600 font-display font-bold text-sm">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════  PRICING  ══════════════════════════ */}
      <section className="relative bg-zinc-950 text-white font-body py-28 overflow-hidden">

        <div className="absolute inset-0 grid-dot-bg opacity-20 pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 60% 40% at 50% 100%, rgba(37,99,235,.12) 0%, transparent 70%)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

          {/* Section header */}
          <div className="text-center mb-16">
            <p className="text-[10px] tracking-[.3em] uppercase text-blue-400 font-display font-bold mb-4">Modelo de Negocio</p>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white mb-4">
              Precios que escalan contigo
            </h2>
            <p className="text-zinc-500 max-w-xl mx-auto text-base">
              Nuestro modelo híbrido elimina el riesgo. Pagas por resultado, no por horas. Y nosotros ganamos junto contigo con ingresos recurrentes predecibles.
            </p>
          </div>

          {/* Value callout */}
          <div className="rounded-2xl border border-blue-500/20 bg-blue-500/5 px-8 py-6 mb-12 max-w-3xl mx-auto text-center">
            <p className="text-zinc-300 text-base leading-relaxed">
              <span className="text-white font-bold">Tu mayor ventaja competitiva:</span>{" "}
              Nuestro stack (Next.js + Vercel + GitHub) tiene costo operativo{" "}
              <span className="text-blue-400 font-bold">$0 al mes</span>. Eso significa márgenes extraordinarios y precios imbatibles para el cliente.
            </p>
          </div>

          {/* Cards grid */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">

            {/* Card 1 — Setup */}
            <div className="card-hover rounded-2xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-sm p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(37,99,235,.15), transparent)" }} />
              <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
                <span className="text-blue-400 text-xs font-display font-bold tracking-widest uppercase">Pago único</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-2">Setup Fee</h3>
              <p className="text-zinc-500 text-sm mb-6 leading-relaxed">
                Costo por desarrollo del sistema a medida. Desde el Motor V3.0 hasta portales de clientes completos. Se cobra 50% al iniciar y 50% al entregar.
              </p>
              <div className="border-t border-zinc-800 pt-6">
                <p className="text-xs text-zinc-600 uppercase tracking-widest font-display mb-2">Rango en Paraguay</p>
                <div className="flex items-end gap-2">
                  <span className="font-display text-3xl font-extrabold text-white">Gs. 2.500.000</span>
                </div>
                <p className="text-zinc-500 text-sm mt-1">hasta Gs. 5.000.000 según complejidad</p>
              </div>
              <ul className="mt-6 space-y-3">
                {["Sistema completamente a medida", "Entrega funcional y documentada", "50 / 50 — inicio y entrega"].map(f => (
                  <li key={f} className="flex items-center gap-3 text-sm text-zinc-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Card 2 — Mantenimiento */}
            <div className="card-hover rounded-2xl border border-zinc-700 bg-zinc-900/60 backdrop-blur-sm p-8 relative overflow-hidden"
              style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,.05)" }}>
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(99,102,241,.15), transparent)" }} />
              <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
                <span className="text-indigo-300 text-xs font-display font-bold tracking-widest uppercase">Ingreso recurrente</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-2">Mantenimiento & Hosting</h3>
              <p className="text-zinc-500 text-sm mb-6 leading-relaxed">
                Las empresas no quieren lidiar con servidores ni códigos. Tú cobras mensualidad por mantener el sistema en línea, soporte técnico y cambios menores.
              </p>
              <div className="border-t border-zinc-800 pt-6">
                <p className="text-xs text-zinc-600 uppercase tracking-widest font-display mb-2">Mensual por cliente</p>
                <div className="flex items-end gap-2">
                  <span className="font-display text-3xl font-extrabold text-white">Gs. 250.000</span>
                </div>
                <p className="text-zinc-500 text-sm mt-1">hasta Gs. 500.000 / mes por cliente</p>
              </div>
              <ul className="mt-6 space-y-3">
                {["Hosting 100% gestionado", "Soporte ante fallos", "Cambios menores incluidos"].map(f => (
                  <li key={f} className="flex items-center gap-3 text-sm text-zinc-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ROI calculator callout */}
          <div className="max-w-4xl mx-auto rounded-2xl border border-zinc-800 bg-zinc-900/40 p-8 md:p-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="font-display text-xs uppercase tracking-widest text-zinc-500 mb-3">El poder del recurrente</p>
                <h3 className="font-display text-2xl font-bold text-white mb-3">10 clientes = Gs. 5.000.000 fijos al mes</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  Si cierras 10 clientes con mantenimiento, recibes Gs. 5.000.000 todos los meses en automático — con código alojado en Vercel, que a ti te cuesta cero.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  { label: "5 clientes", value: "Gs. 2.500.000 / mes" },
                  { label: "10 clientes", value: "Gs. 5.000.000 / mes", highlight: true },
                  { label: "20 clientes", value: "Gs. 10.000.000 / mes" },
                ].map(row => (
                  <div key={row.label}
                    className={`flex justify-between items-center px-5 py-3 rounded-xl border ${row.highlight ? "border-blue-500/40 bg-blue-500/10" : "border-zinc-800 bg-zinc-900"}`}>
                    <span className={`font-display text-sm font-bold ${row.highlight ? "text-blue-300" : "text-zinc-400"}`}>{row.label}</span>
                    <span className={`font-display text-sm font-extrabold ${row.highlight ? "text-white" : "text-zinc-300"}`}>{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
