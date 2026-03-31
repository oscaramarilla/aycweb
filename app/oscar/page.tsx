"use client";

import { useState } from "react";
import Image from "next/image";

type AccentColor = "emerald" | "blue" | "violet";

type CampoCopiaProps = {
  etiqueta: string;
  valor: string;
};

const CampoCopia = ({ etiqueta, valor }: CampoCopiaProps) => {
  const [copiado, setCopiado] = useState(false);

  const ejecutarCopia = async () => {
    try {
      await navigator.clipboard.writeText(valor);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    } catch (error) {
      console.error("No se pudo copiar:", error);
    }
  };

  return (
    <div className="mt-2 flex items-center justify-between gap-2 rounded-xl border border-zinc-800 bg-zinc-950/70 p-3 text-sm group">
      <div className="flex min-w-0 flex-col gap-1 overflow-hidden sm:flex-row sm:items-center">
        <span className="flex-shrink-0 text-[10px] font-bold uppercase tracking-widest text-zinc-500">
          {etiqueta}
        </span>
        <span className="truncate font-mono text-sm text-zinc-200">{valor}</span>
      </div>

      <button
        onClick={ejecutarCopia}
        className={`flex-shrink-0 rounded-lg px-3 py-1.5 text-xs font-bold transition-all active:scale-95 ${
          copiado
            ? "bg-emerald-500 text-zinc-950 shadow-[0_0_12px_rgba(16,185,129,0.4)]"
            : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
        }`}
      >
        {copiado ? "¡Copiado!" : "Copiar"}
      </button>
    </div>
  );
};

type TerminalDePagoProps = {
  planNombre: string;
  planPrecio: string;
  accentColor?: AccentColor;
};

const TerminalDePago = ({
  planNombre,
  planPrecio,
  accentColor = "blue",
}: TerminalDePagoProps) => {
  const [metodo, setMetodo] = useState<"fiat" | "crypto">("fiat");

  const numero = "595985864209";
  const msg = encodeURIComponent(
    `¡Hola Oscar! Acabo de pagar el plan ${planNombre} (${planPrecio}). Te envío el comprobante para empezar:`
  );

  const glowMap: Record<AccentColor, string> = {
    emerald: "shadow-[0_0_60px_-10px_rgba(52,211,153,0.25)]",
    blue: "shadow-[0_0_60px_-10px_rgba(59,130,246,0.25)]",
    violet: "shadow-[0_0_60px_-10px_rgba(139,92,246,0.25)]",
  };

  const borderActive: Record<AccentColor, string> = {
    emerald: "border-emerald-500/60",
    blue: "border-blue-500/60",
    violet: "border-violet-500/60",
  };

  const tabActive: Record<AccentColor, string> = {
    emerald: "border border-emerald-800/50 bg-emerald-900/30 text-emerald-300",
    blue: "border border-blue-800/50 bg-blue-900/30 text-blue-300",
    violet: "border border-violet-800/50 bg-violet-900/30 text-violet-300",
  };

  return (
    <div className={`mt-6 rounded-2xl border border-zinc-800 bg-zinc-950 p-2 ${glowMap[accentColor]}`}>
      <div className="mb-4 flex gap-1.5 rounded-xl bg-zinc-900 p-1.5">
        <button
          onClick={() => setMetodo("fiat")}
          className={`flex flex-1 items-center justify-center gap-2 rounded-lg py-2.5 text-xs font-bold transition-all ${
            metodo === "fiat"
              ? "border border-zinc-700 bg-zinc-800 text-white shadow"
              : "text-zinc-500 hover:text-zinc-300"
          }`}
        >
          🏦 Banco / SIPAP
        </button>

        <button
          onClick={() => setMetodo("crypto")}
          className={`flex flex-1 items-center justify-center gap-2 rounded-lg py-2.5 text-xs font-bold transition-all ${
            metodo === "crypto"
              ? tabActive[accentColor]
              : "text-zinc-500 hover:text-zinc-300"
          }`}
        >
          🪙 USDT (TRC20)
        </button>
      </div>

      <div className="px-2 pb-2">
        {metodo === "fiat" ? (
          <div className="space-y-4">
            <div className="flex justify-center">
              <div
                className={`relative h-52 w-52 rounded-2xl border-4 bg-white p-3 shadow-2xl sm:h-60 sm:w-60 ${borderActive[accentColor]}`}
              >
                <Image
                  src="/qr-fiat.webp"
                  alt="QR Pago Bancario"
                  fill
                  className="rounded-xl object-contain p-1"
                  priority
                />
              </div>
            </div>

            <div className="mx-auto max-w-sm rounded-xl border border-zinc-800 bg-zinc-900/80 p-4">
              <div className="mb-3 border-b border-zinc-800 pb-3">
                <p className="mb-0.5 text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                  Banco Itaú Paraguay
                </p>
                <p className="font-bold text-white">Oscar Emigdio Amarilla Caceres</p>
              </div>

              <CampoCopia etiqueta="N° Cuenta" valor="720601573" />
              <CampoCopia etiqueta="Alias / Tel" valor="0985864209" />
              <CampoCopia etiqueta="RUC" valor="4499507-5" />
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex justify-center">
              <div className="relative h-52 w-52 rounded-2xl border-4 border-blue-500/60 bg-white p-3 shadow-[0_0_40px_rgba(37,99,235,0.2)] sm:h-60 sm:w-60">
                <Image
                  src="/qr-crypto.webp"
                  alt="QR USDT TRC20"
                  fill
                  className="rounded-xl object-contain p-1"
                  priority
                />
              </div>
            </div>

            <div className="mx-auto max-w-sm rounded-xl border border-blue-900/40 bg-blue-950/20 p-4">
              <div className="mb-3 flex items-center gap-2 border-b border-blue-900/30 pb-3">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                <p className="text-sm font-bold text-blue-300">Red TRON (TRC20) · Solo USDT</p>
              </div>

              <p className="mb-3 text-xs text-zinc-500">
                Verificá que la red y la wallet coincidan antes de enviar. No envíes otra moneda.
              </p>

              <CampoCopia etiqueta="Wallet USDT" valor="TLUzuQDLjVwp4UDFAEFuypw5LmFf1K1PRQ" />
            </div>
          </div>
        )}

        <a
          href={`https://wa.me/${numero}?text=${msg}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 flex w-full items-center justify-center gap-3 rounded-xl bg-[#25D366] px-6 py-4 font-black text-zinc-950 transition-all active:scale-95 hover:bg-[#1DA851] shadow-[0_0_20px_-5px_rgba(37,211,102,0.5)]"
        >
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
          </svg>
          Ya pagué — Enviar comprobante
        </a>
      </div>
    </div>
  );
};

const PLANES = [
  {
    id: "mvp-starter",
    badge: "Ideal para empezar",
    nombre: "MVP Starter",
    emoji: "🚀",
    precioUSD: "USD $75",
    precioGs: "Gs. 580.000",
    descripcion:
      "El sistema mínimo que ya vende. Presencia real, pago visible y WhatsApp directo. Listo en 48hs.",
    features: [
      "Landing page profesional (1 página)",
      "Copywriting orientado a conversión",
      "Botón y mensaje preconfigurado a WhatsApp",
      "QR de pago fiat + USDT integrado",
      "Optimizado para celulares y desktop",
      "Entrega en 48hs hábiles",
    ],
    accent: "emerald" as AccentColor,
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
    descripcion:
      "Sistema comercial completo. Autoridad, prueba social, objeciones resueltas y cierre por WhatsApp.",
    features: [
      "Todo lo del MVP Starter",
      "Copy B2B de alto impacto",
      "Sección de prueba social y testimonios",
      "FAQ para resolver objeciones",
      "Bloque de pago con QR visible",
      "PageSpeed 95+ garantizado",
    ],
    accent: "blue" as AccentColor,
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
    descripcion:
      "Infraestructura digital que elimina procesos manuales. Capta, precalifica y escala.",
    features: [
      "Todo lo del Landing Flash",
      "Formulario B2B inteligente",
      "Flujo de captación y precalificación",
      "SEO técnico (Core Web Vitals)",
      "Integración base para CRM",
      "Soporte post-entrega 15 días",
    ],
    accent: "violet" as AccentColor,
    featured: false,
    ctaText: "Activar Automatización",
  },
];

export default function LandingOscar() {
  const [planAbierto, setPlanAbierto] = useState<string | null>(null);

  const wa = "595985864209";
  const msgGeneral = encodeURIComponent(
    "Hola Oscar, vengo de aycweb.com/oscar y quiero saber qué plan me conviene para mi negocio."
  );

  const accentStyles: Record<
    AccentColor,
    {
      border: string;
      bg: string;
      text: string;
      badge: string;
      glow: string;
      check: string;
      btn: string;
      priceBorder: string;
    }
  > = {
    emerald: {
      border: "border-emerald-500",
      bg: "bg-emerald-950/20",
      text: "text-emerald-400",
      badge: "border-emerald-800/50 bg-emerald-900/40 text-emerald-300",
      glow: "shadow-[0_0_40px_-8px_rgba(52,211,153,0.3)]",
      check: "text-emerald-400",
      btn: "bg-emerald-500 text-zinc-950 hover:bg-emerald-400",
      priceBorder: "border-emerald-900/40",
    },
    blue: {
      border: "border-blue-500",
      bg: "bg-blue-950/20",
      text: "text-blue-400",
      badge: "border-blue-700/60 bg-blue-900/40 text-blue-200",
      glow: "shadow-[0_0_50px_-8px_rgba(59,130,246,0.35)]",
      check: "text-blue-400",
      btn: "bg-blue-600 text-white hover:bg-blue-500",
      priceBorder: "border-blue-900/40",
    },
    violet: {
      border: "border-violet-500",
      bg: "bg-violet-950/20",
      text: "text-violet-400",
      badge: "border-violet-800/50 bg-violet-900/40 text-violet-300",
      glow: "shadow-[0_0_40px_-8px_rgba(139,92,246,0.3)]",
      check: "text-violet-400",
      btn: "bg-violet-600 text-white hover:bg-violet-500",
      priceBorder: "border-violet-900/40",
    },
  };

  return (
    <div className="min-h-screen bg-zinc-950 font-sans text-zinc-50 selection:bg-blue-500 selection:text-white">
      <section className="relative mx-auto max-w-7xl overflow-hidden px-6 pb-20 pt-16 sm:pb-28 sm:pt-24">
        <div className="pointer-events-none absolute right-0 top-0 -z-10 h-[700px] w-[700px] rounded-full bg-blue-600/8 blur-[130px]" />
        <div className="pointer-events-none absolute bottom-0 left-0 -z-10 h-[400px] w-[400px] rounded-full bg-emerald-600/6 blur-[100px]" />

        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/80 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-zinc-400">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            Sistemas Digitales de Venta · AYCweb.com
          </div>

          <h1 className="mb-6 text-4xl font-black leading-[1.05] tracking-tighter text-white sm:text-5xl lg:text-6xl">
            Convertí tu negocio en una{" "}
            <span className="text-blue-400">máquina de clientes</span> por WhatsApp.
          </h1>

          <p className="mb-10 max-w-2xl text-lg leading-relaxed text-zinc-400 sm:text-xl">
            Consultas todos los días. En menos de 7 días. Un sistema simple,
            automatizado y diseñado puramente para vender — con pago integrado
            para que el cliente cierre en el mismo flujo.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#planes"
              className="inline-flex min-h-14 items-center justify-center rounded-xl bg-blue-600 px-8 py-3 text-base font-black text-white transition-all hover:bg-blue-500 active:scale-95 shadow-[0_0_30px_-5px_rgba(37,99,235,0.4)]"
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

        <div className="mt-14 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { v: "48hs", l: "Entrega MVP" },
            { v: "3 planes", l: "Para cada etapa" },
            { v: "B2B/B2G", l: "Experiencia real" },
            { v: "RUC", l: "4499507-5" },
          ].map((i) => (
            <div key={i.l} className="rounded-2xl border border-zinc-800 bg-zinc-900/40 px-4 py-4">
              <p className="text-xl font-black text-white">{i.v}</p>
              <p className="mt-1 text-xs font-bold uppercase tracking-widest text-zinc-500">
                {i.l}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-zinc-900 bg-black">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-red-400">
              El problema real
            </p>
            <h2 className="text-3xl font-black leading-tight text-white sm:text-4xl">
              Hoy estás perdiendo clientes todos los días.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: "😓",
                t: "Visitan y se van",
                d: "Llegan a tu perfil, preguntan, dudan… y compran en la competencia.",
              },
              {
                icon: "⏰",
                t: "Respondés tarde",
                d: "El cliente ya tomó una decisión cuando llegás. Manual = lento.",
              },
              {
                icon: "🔁",
                t: "Todo depende de vos",
                d: "Si no estás, la operación se frena. No podés escalar así.",
              },
              {
                icon: "💸",
                t: "Pagás ads sin sistema",
                d: "Traés tráfico a un proceso roto. El dinero se va sin convertir.",
              },
            ].map((item) => (
              <div key={item.t} className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
                <div className="mb-4 text-3xl">{item.icon}</div>
                <h3 className="mb-2 font-bold text-white">{item.t}</h3>
                <p className="text-sm leading-relaxed text-zinc-500">{item.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 border-l-4 border-blue-500 py-1 pl-5">
            <p className="text-base font-bold text-blue-300">
              → No es tu culpa. Es que no tenés la infraestructura digital correcta.
              Eso lo resolvemos en 7 días.
            </p>
          </div>
        </div>
      </section>

      <section id="planes" className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-zinc-500">
            3 opciones · Elegí la tuya
          </p>
          <h2 className="mb-4 text-3xl font-black tracking-tight text-white sm:text-5xl">
            Elegí tu plan, pagá y arrancamos.
          </h2>
          <p className="mx-auto max-w-xl text-lg text-zinc-400">
            Cada plan incluye el sistema de pago y confirmación integrado.
            El cliente entiende, confía y actúa en el mismo flujo.
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-3">
          {PLANES.map((plan) => {
            const s = accentStyles[plan.accent];
            const abierto = planAbierto === plan.id;

            return (
              <article
                key={plan.id}
                className={`flex flex-col overflow-hidden rounded-[2rem] border-2 bg-zinc-950 transition-all duration-300 ${
                  plan.featured
                    ? `${s.border} ${s.glow}`
                    : "border-zinc-800 hover:border-zinc-700"
                }`}
              >
                {plan.featured && (
                  <div
                    className={`w-full border-b py-2.5 text-center text-xs font-black uppercase tracking-widest ${s.bg} ${s.border} ${s.text}`}
                  >
                    {plan.badge}
                  </div>
                )}

                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <div className="mb-6">
                    {!plan.featured && (
                      <span
                        className={`mb-3 inline-block rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-widest ${s.badge}`}
                      >
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
                    <p className="mb-1 text-xs font-bold uppercase tracking-widest text-zinc-500">
                      Inversión única
                    </p>
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

                  <button
                    onClick={() => setPlanAbierto(abierto ? null : plan.id)}
                    className={`w-full rounded-xl py-4 text-base font-black transition-all active:scale-95 ${s.btn} ${
                      plan.featured ? "shadow-lg" : ""
                    }`}
                  >
                    {abierto ? "▲ Cerrar pago" : `${plan.ctaText} →`}
                  </button>

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

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 text-sm text-zinc-500">
          <span className="font-bold text-zinc-400">Aceptamos:</span>
          <span className="flex items-center gap-1.5 rounded-full border border-zinc-800 bg-zinc-900 px-4 py-1.5">
            🇵🇾 Guaraníes (Banco Itaú)
          </span>
          <span className="flex items-center gap-1.5 rounded-full border border-zinc-800 bg-zinc-900 px-4 py-1.5">
            💵 USD (Transferencia)
          </span>
          <span className="flex items-center gap-1.5 rounded-full border border-zinc-800 bg-zinc-900 px-4 py-1.5">
            🪙 USDT TRC20
          </span>
        </div>
      </section>

      <section className="border-t border-zinc-900 bg-black">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-black text-white sm:text-3xl">¿Cómo funciona? 3 pasos.</h2>
          </div>

          <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-3">
            {[
              {
                n: "1",
                t: "Elegís tu plan y pagás",
                d: "Seleccionás el plan, escaneás el QR o copiás los datos bancarios y transferís.",
              },
              {
                n: "2",
                t: "Me enviás el comprobante",
                d: "Tocás el botón de WhatsApp con el mensaje ya preparado. Arrancamos en 24hs.",
              },
              {
                n: "3",
                t: "Tu sistema en vivo",
                d: "En 48-72hs hábiles tu landing está operativa, captando clientes y cerrando ventas.",
              },
            ].map((step) => (
              <div
                key={step.n}
                className="relative rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-blue-600/30 bg-blue-600/20 text-lg font-black text-blue-400">
                  {step.n}
                </div>
                <h3 className="mb-2 font-bold text-white">{step.t}</h3>
                <p className="text-sm leading-relaxed text-zinc-500">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-900 bg-zinc-950/50">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
          <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.5fr]">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-widest text-zinc-500">
                Antes de comprar
              </p>
              <h2 className="text-2xl font-black text-white sm:text-3xl">
                Preguntas frecuentes
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-zinc-500">
                Si no encontrás tu respuesta,{" "}
                <a
                  href={`https://wa.me/${wa}?text=${msgGeneral}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  escribime directamente
                </a>
                .
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: "¿En serio entregan en 48-72 horas?",
                  a: "Sí, para el MVP Starter y el Landing Flash. La Automatización Inicial puede tomar hasta 7 días dependiendo del alcance.",
                },
                {
                  q: "¿Qué diferencia hay entre los 3 planes?",
                  a: "El MVP es tu entrada al mercado digital: una página que ya vende. El Flash agrega capa de autoridad y persuasión. La Automatización agrega infraestructura que elimina trabajo manual.",
                },
                {
                  q: "¿Puedo escalar de plan después?",
                  a: "Sí. Empezás con el MVP y cuando querés más funcionalidades abonás la diferencia. No perdés lo que ya tenés.",
                },
                {
                  q: "¿Trabajan fuera de Paraguay?",
                  a: "Sí. Aceptamos USD y USDT. Clientes en Argentina y Bolivia. Todo el proceso es por WhatsApp y videollamada.",
                },
                {
                  q: "¿Qué pasa si el resultado no me convence?",
                  a: "Antes de entrar en producción te mostramos la estructura para aprobación. No cobramos sin que estés conforme con el concepto.",
                },
              ].map((item) => (
                <article
                  key={item.q}
                  className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5"
                >
                  <h3 className="mb-2 text-sm font-bold text-white sm:text-base">{item.q}</h3>
                  <p className="text-sm leading-relaxed text-zinc-400">{item.a}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-900 bg-black">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center sm:py-24">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-900/50 bg-red-950/30 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-red-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-red-400" />
            Solo 2 proyectos disponibles este mes
          </div>

          <h2 className="mb-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
            ¿Listo para que tu empresa venda sola?
          </h2>

          <p className="mb-10 text-lg text-zinc-400">
            5 minutos. Te digo exactamente qué sistema necesitás y cuánto te va a costar.
            Sin compromiso.
          </p>

          <a
            href={`https://wa.me/${wa}?text=${msgGeneral}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-xl bg-[#25D366] px-10 py-4 text-lg font-black text-zinc-950 transition-all hover:bg-[#1DA851] active:scale-95 shadow-[0_0_30px_-5px_rgba(37,211,102,0.4)]"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
            </svg>
            Agendar diagnóstico gratis
          </a>

          <p className="mt-5 text-sm text-zinc-600">
            Sin compromisos. Solo negocios. — Oscar Amarilla · AYCweb · RUC 4499507-5
          </p>
        </div>
      </section>

      <div className="fixed bottom-0 left-0 z-50 w-full border-t border-zinc-800 bg-zinc-950/95 p-4 backdrop-blur-lg lg:hidden shadow-[0_-20px_30px_-10px_rgba(0,0,0,0.8)]">
        <a
          href="#planes"
          className="flex w-full items-center justify-center rounded-xl bg-blue-600 px-6 py-4 text-base font-black text-white transition-transform active:scale-95 shadow-[0_0_20px_rgba(37,99,235,0.4)]"
        >
          Ver Planes y Activar Pago →
        </a>
      </div>
    </div>
  );
}
