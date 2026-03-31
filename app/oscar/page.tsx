Page oscar · TSX
Copy

"use client";
 
import { useState } from "react";
import Image from "next/image";
 
// ─────────────────────────────────────────────────────────────────────────────
// CAMPO DE COPIA RÁPIDA
// ─────────────────────────────────────────────────────────────────────────────
const CampoCopia = ({ etiqueta, valor }: { etiqueta: string; valor: string }) => {
  const [copiado, setCopiado] = useState(false);
  const ejecutarCopia = () => {
    navigator.clipboard.writeText(valor);
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2000);
  };
  return (
    <div className="flex items-center justify-between gap-2 p-3 mt-2 bg-zinc-950/70 rounded-xl border border-zinc-800 text-sm group">
      <div className="overflow-hidden flex flex-col sm:flex-row sm:items-center gap-1 min-w-0">
        <span className="text-zinc-500 text-[10px] uppercase tracking-widest font-bold flex-shrink-0">{etiqueta}</span>
        <span className="text-zinc-200 font-mono text-sm truncate">{valor}</span>
      </div>
      <button
        onClick={ejecutarCopia}
        className={`flex-shrink-0 text-xs font-bold px-3 py-1.5 rounded-lg transition-all active:scale-95 ${
          copiado
            ? "bg-emerald-500 text-zinc-950 shadow-[0_0_12px_rgba(16,185,129,0.4)]"
            : "bg-zinc-800 hover:bg-zinc-700 text-zinc-300"
        }`}
      >
        {copiado ? "¡Copiado!" : "Copiar"}
      </button>
    </div>
  );
};
 
// ─────────────────────────────────────────────────────────────────────────────
// TERMINAL DE PAGO — QR GRANDIOSO + DATOS COPIABLES
// ─────────────────────────────────────────────────────────────────────────────
const TerminalDePago = ({
  planNombre,
  planPrecio,
  accentColor = "blue",
}: {
  planNombre: string;
  planPrecio: string;
  accentColor?: "emerald" | "blue" | "violet";
}) => {
  const [metodo, setMetodo] = useState<"fiat" | "crypto">("fiat");
  const numero = "595985864209";
  const msg = encodeURIComponent(
    `¡Hola Oscar! Acabo de pagar el plan ${planNombre} (${planPrecio}). Te envío el comprobante para empezar:`
  );
 
  const glowMap = {
    emerald: "shadow-[0_0_60px_-10px_rgba(52,211,153,0.25)]",
    blue: "shadow-[0_0_60px_-10px_rgba(59,130,246,0.25)]",
    violet: "shadow-[0_0_60px_-10px_rgba(139,92,246,0.25)]",
  };
  const borderActive = {
    emerald: "border-emerald-500/60",
    blue: "border-blue-500/60",
    violet: "border-violet-500/60",
  };
  const tabActive = {
    emerald: "bg-emerald-900/30 text-emerald-300 border border-emerald-800/50",
    blue: "bg-blue-900/30 text-blue-300 border border-blue-800/50",
    violet: "bg-violet-900/30 text-violet-300 border border-violet-800/50",
  };
 
  return (
    <div className={`mt-6 rounded-2xl border border-zinc-800 bg-zinc-950 p-2 ${glowMap[accentColor]}`}>
      {/* Tabs */}
      <div className="flex p-1.5 gap-1.5 bg-zinc-900 rounded-xl mb-4">
        <button
          onClick={() => setMetodo("fiat")}
          className={`flex-1 py-2.5 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-2 ${
            metodo === "fiat"
              ? "bg-zinc-800 text-white shadow border border-zinc-700"
              : "text-zinc-500 hover:text-zinc-300"
          }`}
        >
          🏦 Banco / SIPAP
        </button>
        <button
          onClick={() => setMetodo("crypto")}
          className={`flex-1 py-2.5 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-2 ${
            metodo === "crypto" ? tabActive[accentColor] : "text-zinc-500 hover:text-zinc-300"
          }`}
        >
          🪙 USDT (TRC20)
        </button>
      </div>
 
      <div className="px-2 pb-2">
        {metodo === "fiat" ? (
          <div className="animate-in fade-in duration-300 space-y-4">
            {/* QR grande */}
            <div className="flex justify-center">
              <div
                className={`relative w-52 h-52 sm:w-60 sm:h-60 bg-white rounded-2xl p-3 border-4 ${borderActive[accentColor]} shadow-2xl`}
              >
                <Image
                  src="/qr-fiat.webp"
                  alt="QR Pago Bancario"
                  fill
                  className="object-contain rounded-xl p-1"
                  priority
                />
              </div>
            </div>
            {/* Datos */}
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-4 max-w-sm mx-auto">
              <div className="mb-3 pb-3 border-b border-zinc-800">
                <p className="text-zinc-500 text-[10px] uppercase tracking-widest font-bold mb-0.5">Banco Itaú Paraguay</p>
                <p className="text-white font-bold">Oscar Emigdio Amarilla Caceres</p>
              </div>
              <CampoCopia etiqueta="N° Cuenta" valor="720601573" />
              <CampoCopia etiqueta="Alias / Tel" valor="0985864209" />
              <CampoCopia etiqueta="RUC" valor="4499507-5" />
            </div>
          </div>
        ) : (
          <div className="animate-in fade-in duration-300 space-y-4">
            {/* QR crypto grande */}
            <div className="flex justify-center">
              <div className="relative w-52 h-52 sm:w-60 sm:h-60 bg-white rounded-2xl p-3 border-4 border-blue-500/60 shadow-[0_0_40px_rgba(37,99,235,0.2)]">
                <Image
                  src="/qr-crypto.webp"
                  alt="QR USDT TRC20"
                  fill
                  className="object-contain rounded-xl p-1"
                  priority
                />
              </div>
            </div>
            {/* Datos crypto */}
            <div className="bg-blue-950/20 border border-blue-900/40 rounded-xl p-4 max-w-sm mx-auto">
              <div className="flex items-center gap-2 mb-3 pb-3 border-b border-blue-900/30">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <p className="text-blue-300 font-bold text-sm">Red TRON (TRC20) · Solo USDT</p>
              </div>
              <p className="text-zinc-500 text-xs mb-3">
                Verificá que la red y la wallet coincidan antes de enviar. No envíes otra moneda.
              </p>
              <CampoCopia etiqueta="Wallet USDT" valor="TLUzuQDLjVwp4UDFAEFuypw5LmFf1K1PRQ" />
            </div>
          </div>
        )}
 
        {/* Confirmar por WhatsApp */}
        <a
          href={`https://wa.me/${numero}?text=${msg}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 w-full bg-[#25D366] hover:bg-[#1DA851] text-zinc-950 font-black py-4 px-6 rounded-xl flex items-center justify-center gap-3 transition-all active:scale-95 shadow-[0_0_20px_-5px_rgba(37,211,102,0.5)]"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
          </svg>
          Ya pagué — Enviar comprobante
        </a>
      </div>
    </div>
  );
};
 
// ─────────────────────────────────────────────────────────────────────────────
// DATOS DE LOS 3 PLANES
// ─────────────────────────────────────────────────────────────────────────────
const PLANES = [
  {
    id: "mvp-starter",
    badge: "Ideal para empezar",
    nombre: "MVP Starter",
    emoji: "🚀",
    precioUSD: "USD $75",
    precioGs: "Gs. 580.000",
    descripcion: "El sistema mínimo que ya vende. Presencia real, pago visible y WhatsApp directo. Listo en 48hs.",
    features: [
      "Landing page profesional (1 página)",
      "Copywriting orientado a conversión",
      "Botón y mensaje preconfigurado a WhatsApp",
      "QR de pago fiat + USDT integrado",
      "Optimizado para celulares y desktop",
      "Entrega en 48hs hábiles",
    ],
    accent: "emerald" as const,
    featured: false,
    ctaText: "Activar MVP Starter",
  },
  {
    id: "landing-flash",
    badge: "🔥 Más Elegido",
    nombre: "Landing Flash",
    emoji: "⚡",
    precioUSD: "USD $200",
    precioGs: "Gs. 1.500.000",
    descripcion: "Sistema comercial completo. Autoridad, prueba social, objeciones resueltas y cierre por WhatsApp.",
    features: [
      "Todo lo del MVP Starter",
      "Copy B2B de alto impacto",
      "Sección de prueba social y testimonios",
      "FAQ para resolver objeciones",
      "Bloque de pago con QR visible",
      "PageSpeed 95+ garantizado",
    ],
    accent: "blue" as const,
    featured: true,
    ctaText: "Activar Landing Flash",
  },
  {
    id: "automatizacion-inicial",
    badge: "Máxima potencia",
    nombre: "Automatización",
    emoji: "⚙️",
    precioUSD: "USD $340",
    precioGs: "Gs. 2.500.000",
    descripcion: "Infraestructura digital que elimina procesos manuales. Capta, precalifica y escala.",
    features: [
      "Todo lo del Landing Flash",
      "Formulario B2B inteligente",
      "Flujo de captación y precalificación",
      "SEO técnico (Core Web Vitals)",
      "Integración base para CRM",
      "Soporte post-entrega 15 días",
    ],
    accent: "violet" as const,
    featured: false,
    ctaText: "Activar Automatización",
  },
];
 
// ─────────────────────────────────────────────────────────────────────────────
// PÁGINA PRINCIPAL /oscar
// ─────────────────────────────────────────────────────────────────────────────
export default function LandingOscar() {
  const [planAbierto, setPlanAbierto] = useState<string | null>(null);
  const wa = "595985864209";
  const msgGeneral = encodeURIComponent(
    "Hola Oscar, vengo de aycweb.com/oscar y quiero saber qué plan me conviene para mi negocio."
  );
 
  const accentStyles = {
    emerald: {
      border: "border-emerald-500",
      bg: "bg-emerald-950/20",
      text: "text-emerald-400",
      badge: "bg-emerald-900/40 text-emerald-300 border-emerald-800/50",
      glow: "shadow-[0_0_40px_-8px_rgba(52,211,153,0.3)]",
      check: "text-emerald-400",
      btn: "bg-emerald-500 hover:bg-emerald-400 text-zinc-950",
    },
    blue: {
      border: "border-blue-500",
      bg: "bg-blue-950/20",
      text: "text-blue-400",
      badge: "bg-blue-900/40 text-blue-200 border-blue-700/60",
      glow: "shadow-[0_0_50px_-8px_rgba(59,130,246,0.35)]",
      check: "text-blue-400",
      btn: "bg-blue-600 hover:bg-blue-500 text-white",
    },
    violet: {
      border: "border-violet-500",
      bg: "bg-violet-950/20",
      text: "text-violet-400",
      badge: "bg-violet-900/40 text-violet-300 border-violet-800/50",
      glow: "shadow-[0_0_40px_-8px_rgba(139,92,246,0.3)]",
      check: "text-violet-400",
      btn: "bg-violet-600 hover:bg-violet-500 text-white",
    },
  };
 
  return (
    <div className="bg-zinc-950 text-zinc-50 font-sans min-h-screen selection:bg-blue-500 selection:text-white">
 
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden px-6 pt-16 pb-20 sm:pt-24 sm:pb-28 max-w-7xl mx-auto">
        {/* Glow fondo */}
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-blue-600/8 rounded-full blur-[130px] pointer-events-none -z-10" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-600/6 rounded-full blur-[100px] pointer-events-none -z-10" />
 
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/80 text-xs font-bold uppercase tracking-widest text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Sistemas Digitales de Venta · AYCweb.com
          </div>
 
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.05] text-white mb-6">
            Convertí tu negocio en una{" "}
            <span className="text-blue-400">máquina de clientes</span>{" "}
            por WhatsApp.
          </h1>
 
          <p className="text-lg sm:text-xl text-zinc-400 leading-relaxed mb-10 max-w-2xl">
            Consultas todos los días. En menos de 7 días. Un sistema simple, automatizado y diseñado
            puramente para vender — con pago integrado para que el cliente cierre en el mismo flujo.
          </p>
 
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#planes"
              className="inline-flex min-h-14 items-center justify-center rounded-xl bg-blue-600 hover:bg-blue-500 px-8 py-3 text-base font-black text-white transition-all shadow-[0_0_30px_-5px_rgba(37,99,235,0.4)] active:scale-95"
            >
              Ver planes y activar pago →
            </a>
            <a
              href={`https://wa.me/${wa}?text=${msgGeneral}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-14 items-center justify-center rounded-xl border border-zinc-700 bg-zinc-900 px-8 py-3 text-base font-bold text-white transition-all hover:bg-zinc-800"
            >
              Consultar por WhatsApp
            </a>
          </div>
        </div>
 
        {/* Trust numbers */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl">
          {[
            { v: "48hs", l: "Entrega MVP" },
            { v: "3 planes", l: "Para cada etapa" },
            { v: "B2B/B2G", l: "Experiencia real" },
            { v: "RUC", l: "4499507-5" },
          ].map((i) => (
            <div key={i.l} className="rounded-2xl border border-zinc-800 bg-zinc-900/40 px-4 py-4">
              <p className="text-xl font-black text-white">{i.v}</p>
              <p className="text-xs text-zinc-500 font-bold uppercase tracking-widest mt-1">{i.l}</p>
            </div>
          ))}
        </div>
      </section>
 
      {/* ── DOLOR ─────────────────────────────────────────────────────────── */}
      <section className="bg-black border-y border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 py-16 sm:py-20">
          <div className="max-w-2xl mb-12">
            <p className="text-red-400 font-bold text-sm uppercase tracking-widest mb-3">El problema real</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
              Hoy estás perdiendo clientes todos los días.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: "😓", t: "Visitan y se van", d: "Llegan a tu perfil, preguntan, dudan… y compran en la competencia." },
              { icon: "⏰", t: "Respondés tarde", d: "El cliente ya tomó una decisión cuando llegás. Manual = lento." },
              { icon: "🔁", t: "Todo depende de vos", d: "Si no estás, la operación se frena. No podés escalar así." },
              { icon: "💸", t: "Pagás ads sin sistema", d: "Traés tráfico a un proceso roto. El dinero se va sin convertir." },
            ].map((item) => (
              <div key={item.t} className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-white mb-2">{item.t}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 border-l-4 border-blue-500 pl-5 py-1">
            <p className="text-blue-300 font-bold text-base">
              → No es tu culpa. Es que no tenés la infraestructura digital correcta. Eso lo resolvemos en 7 días.
            </p>
          </div>
        </div>
      </section>
 
      {/* ── PLANES ────────────────────────────────────────────────────────── */}
      <section id="planes" className="max-w-7xl mx-auto px-6 py-16 sm:py-24">
        <div className="text-center mb-14">
          <p className="text-zinc-500 text-sm font-bold uppercase tracking-widest mb-3">
            3 opciones · Elegí la tuya
          </p>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Elegí tu plan, pagá y arrancamos.
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            Cada plan incluye el sistema de pago y confirmación integrado.
            El cliente entiende, confía y actúa en el mismo flujo.
          </p>
        </div>
 
        {/* Grid de 3 planes */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {PLANES.map((plan) => {
            const s = accentStyles[plan.accent];
            const abierto = planAbierto === plan.id;
 
            return (
              <article
                key={plan.id}
                className={`rounded-[2rem] border-2 bg-zinc-950 flex flex-col transition-all duration-300 overflow-hidden ${
                  plan.featured
                    ? `${s.border} ${s.glow}`
                    : "border-zinc-800 hover:border-zinc-700"
                }`}
              >
                {/* Badge destacado */}
                {plan.featured && (
                  <div className={`w-full py-2.5 text-center text-xs font-black uppercase tracking-widest ${s.bg} border-b ${s.border} ${s.text}`}>
                    {plan.badge}
                  </div>
                )}
 
                <div className="p-6 sm:p-8 flex flex-col flex-1">
                  {/* Header plan */}
                  <div className="mb-6">
                    {!plan.featured && (
                      <span className={`inline-block text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border mb-3 ${s.badge}`}>
                        {plan.badge}
                      </span>
                    )}
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl">{plan.emoji}</span>
                      <h3 className="text-2xl sm:text-3xl font-black text-white">{plan.nombre}</h3>
                    </div>
                    <p className="text-zinc-400 text-sm leading-relaxed">{plan.descripcion}</p>
                  </div>
 
                  {/* Precio */}
                  <div className={`rounded-2xl border p-5 mb-6 ${s.bg} ${s.border ? `border-${plan.accent}-900/40` : "border-zinc-800"}`}>
                    <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-1">Inversión única</p>
                    <div className="flex items-end gap-3 flex-wrap">
                      <p className={`text-4xl font-black ${s.text}`}>{plan.precioUSD}</p>
                      <p className="text-zinc-500 text-base font-semibold pb-0.5">{plan.precioGs}</p>
                    </div>
                  </div>
 
                  {/* Features */}
                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm">
                        <span className={`font-black text-lg leading-none mt-0.5 ${s.check}`}>✓</span>
                        <span className="text-zinc-300">{f}</span>
                      </li>
                    ))}
                  </ul>
 
                  {/* CTA: abrir/cerrar terminal de pago */}
                  <button
                    onClick={() => setPlanAbierto(abierto ? null : plan.id)}
                    className={`w-full py-4 rounded-xl font-black text-base transition-all active:scale-95 ${s.btn} ${
                      plan.featured ? "shadow-lg" : ""
                    }`}
                  >
                    {abierto ? "▲ Cerrar pago" : `${plan.ctaText} →`}
                  </button>
 
                  {/* TERMINAL DE PAGO — se despliega */}
                  {abierto && (
                    <div className="mt-2">
                      <TerminalDePago
                        planNombre={plan.nombre}
                        planPrecio={plan.precioUSD}
                        accentColor={plan.accent}
                      />
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
 
        {/* Nota de medios de pago */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 text-sm text-zinc-500">
          <span className="font-bold text-zinc-400">Aceptamos:</span>
          <span className="flex items-center gap-1.5 bg-zinc-900 border border-zinc-800 rounded-full px-4 py-1.5">🇵🇾 Guaraníes (Banco Itaú)</span>
          <span className="flex items-center gap-1.5 bg-zinc-900 border border-zinc-800 rounded-full px-4 py-1.5">💵 USD (Transferencia)</span>
          <span className="flex items-center gap-1.5 bg-zinc-900 border border-zinc-800 rounded-full px-4 py-1.5">🪙 USDT TRC20</span>
        </div>
      </section>
 
      {/* ── PROCESO ───────────────────────────────────────────────────────── */}
      <section className="bg-black border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 py-16 sm:py-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-white">¿Cómo funciona? 3 pasos.</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { n: "1", t: "Elegís tu plan y pagás", d: "Seleccionás el plan, escaneás el QR o copiás los datos bancarios y transferís." },
              { n: "2", t: "Me enviás el comprobante", d: "Tocás el botón de WhatsApp con el mensaje ya preparado. Arrancamos en 24hs." },
              { n: "3", t: "Tu sistema en vivo", d: "En 48-72hs hábiles tu landing está operativa, captando clientes y cerrando ventas." },
            ].map((step) => (
              <div key={step.n} className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 relative">
                <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-600/30 flex items-center justify-center font-black text-blue-400 text-lg mb-4">
                  {step.n}
                </div>
                <h3 className="font-bold text-white mb-2">{step.t}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
 
      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section className="border-t border-zinc-900 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto px-6 py-16 sm:py-20">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 items-start">
            <div>
              <p className="text-zinc-500 text-sm font-bold uppercase tracking-widest mb-3">Antes de comprar</p>
              <h2 className="text-2xl sm:text-3xl font-black text-white">Preguntas frecuentes</h2>
              <p className="text-zinc-500 text-sm mt-4 leading-relaxed">
                Si no encontrás tu respuesta,{" "}
                <a
                  href={`https://wa.me/${wa}?text=${msgGeneral}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  escribime directamente
                </a>.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { q: "¿En serio entregan en 48-72 horas?", a: "Sí, para el MVP Starter y el Landing Flash. La Automatización Inicial puede tomar hasta 7 días dependiendo del alcance." },
                { q: "¿Qué diferencia hay entre los 3 planes?", a: "El MVP es tu entrada al mercado digital: una página que ya vende. El Flash agrega capa de autoridad y persuasión. La Automatización agrega infraestructura que elimina trabajo manual." },
                { q: "¿Puedo escalar de plan después?", a: "Sí. Empezás con el MVP y cuando querés más funcionalidades abonás la diferencia. No perdés lo que ya tenés." },
                { q: "¿Trabajan fuera de Paraguay?", a: "Sí. Aceptamos USD y USDT. Clientes en Argentina y Bolivia. Todo el proceso es por WhatsApp y videollamada." },
                { q: "¿Qué pasa si el resultado no me convence?", a: "Antes de entrar en producción te mostramos la estructura para aprobación. No cobramos sin que estés conforme con el concepto." },
              ].map((item) => (
                <article key={item.q} className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5">
                  <h3 className="font-bold text-white mb-2 text-sm sm:text-base">{item.q}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{item.a}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
 
      {/* ── CIERRE ────────────────────────────────────────────────────────── */}
      <section className="bg-black border-t border-zinc-900">
        <div className="max-w-3xl mx-auto px-6 py-16 sm:py-24 text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-red-900/50 bg-red-950/30 text-xs font-bold uppercase tracking-widest text-red-300">
            <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
            Solo 2 proyectos disponibles este mes
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 tracking-tight">
            ¿Listo para que tu empresa venda sola?
          </h2>
          <p className="text-zinc-400 mb-10 text-lg">
            5 minutos. Te digo exactamente qué sistema necesitás y cuánto te va a costar. Sin compromiso.
          </p>
          <a
            href={`https://wa.me/${wa}?text=${msgGeneral}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1DA851] text-zinc-950 font-black py-4 px-10 rounded-xl text-lg transition-all active:scale-95 shadow-[0_0_30px_-5px_rgba(37,211,102,0.4)]"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
            </svg>
            Agendar diagnóstico gratis
          </a>
          <p className="text-zinc-600 text-sm mt-5">
            Sin compromisos. Solo negocios. — Oscar Amarilla · AYCweb · RUC 4499507-5
          </p>
        </div>
      </section>
 
      {/* ── STICKY MOBILE CTA ─────────────────────────────────────────────── */}
      <div className="lg:hidden fixed bottom-0 left-0 w-full bg-zinc-950/95 backdrop-blur-lg border-t border-zinc-800 p-4 z-50 shadow-[0_-20px_30px_-10px_rgba(0,0,0,0.8)]">
        <a
          href="#planes"
          className="w-full flex bg-blue-600 text-white font-black py-4 px-6 rounded-xl items-center justify-center text-base active:scale-95 transition-transform shadow-[0_0_20px_rgba(37,99,235,0.4)]"
        >
          Ver Planes y Activar Pago →
        </a>
      </div>
 
    </div>
  );

