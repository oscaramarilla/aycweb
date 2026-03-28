"use client";

import { useState } from "react";
import Image from "next/image";

export default function LandingOS() {
  const [metodoPago, setMetodoPago] = useState<"fiat" | "crypto">("fiat");
  const [copiado, setCopiado] = useState("");

  const wa = "595982451828";
  const msg = encodeURIComponent(
    "¡Hola AYCweb! Acabo de ver la propuesta en la landing y quiero arrancar con mi proyecto de desarrollo/automatización. Aquí envío mi comprobante:"
  );

  const banco = {
    titular: "Oscar Emigdio Amarilla Caceres",
    cuenta: "720601573",
    alias: "0985864209",
    banco: "Itaú",
  };

  const crypto = {
    red: "TRON (USDT WEB3 WALLET)",
    wallet: "TLUzuQDLjVwp4UDFAEFuypw5LmFf1K1PRQ",
    titular: "Oscar Amarilla",
  };

  const copiar = async (texto: string, key: string) => {
    try {
      await navigator.clipboard.writeText(texto);
      setCopiado(key);
      setTimeout(() => setCopiado(""), 1400);
    } catch {
      alert("No se pudo copiar");
    }
  };

  const dolores = [
    ["Ventas Caídas", "Tus clientes se van porque tardas en responder, cotizar o cerrar."],
    ["Caos Operativo", "Seguís haciendo tareas manuales que deberían estar automatizadas."],
    ["Presencia Invisible", "Sin autoridad digital, en B2B prácticamente no existís."],
  ];

  const testimonios = [
    ["Carlos M.", "Distribuidora Mayorista", "La automatización nos bajó horas de trabajo a minutos. Se pagó sola."],
    ["Laura G.", "Clínica Odontológica", "La landing nueva subió fuerte las reservas por WhatsApp."],
    ["Javier R.", "Fábrica Industrial", "Nos integraron procesos e inventario con una ejecución brutal."],
  ];

  const features = [
    "Landing Page de Alto Rendimiento (Next.js)",
    "Copywriting Persuasivo B2B",
    "Botón flotante inteligente de WhatsApp",
    "Optimización SEO",
    "Hosting Premium incluido (1er año)",
  ];

  const BtnCopy = ({
    texto,
    valor,
    k,
  }: {
    texto: string;
    valor: string;
    k: string;
  }) => (
    <button
      onClick={() => copiar(valor, k)}
      className="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 text-left hover:bg-zinc-700 transition"
    >
      <div className="text-xs text-zinc-400">{texto}</div>
      <div className="flex items-center justify-between gap-3 mt-1">
        <span className="font-mono text-sm text-white break-all">{valor}</span>
        <span className="shrink-0 rounded-lg bg-blue-600 px-3 py-1 text-xs font-bold text-white">
          {copiado === k ? "Copiado" : "Copiar"}
        </span>
      </div>
    </button>
  );

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans pb-24 md:pb-0 selection:bg-blue-500 selection:text-white">
      <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-zinc-900 bg-zinc-950/80 px-6 py-4 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="relative flex h-8 w-8 items-center justify-center">
            <Image src="/logo-ayc.webp" alt="AYCweb Logo" width={32} height={32} className="object-contain" />
          </div>
          <span className="text-lg font-bold tracking-tight">AYCweb</span>
        </div>
        <div className="hidden items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-xs font-medium text-emerald-400 md:flex">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
          Garantía de Resultados 100%
        </div>
      </nav>

      <section className="mx-auto max-w-4xl px-6 pb-16 pt-20 text-center">
        <div className="mb-6 inline-block rounded-full border border-zinc-800 bg-zinc-900 px-4 py-1.5 text-sm font-semibold text-zinc-300 shadow-xl">
          Sistemas Web & Automatización B2B
        </div>
        <h1 className="mb-6 text-5xl font-black leading-[1.1] tracking-tight md:text-7xl">
          Tu negocio está perdiendo plata por <span className="text-blue-500">trabajar en manual.</span>
        </h1>
        <p className="mx-auto mb-10 max-w-3xl text-xl font-light leading-relaxed text-zinc-400 md:text-2xl">
          No necesitas otra página linda. Necesitas un ecosistema digital que capte clientes, automatice procesos y cierre ventas.
        </p>
        <a
          href="#checkout"
          className="inline-flex items-center gap-3 rounded-xl bg-blue-600 px-10 py-4 text-lg font-black text-white shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)] transition-all active:scale-95 hover:bg-blue-500"
        >
          Revolucionar mi Negocio Hoy
        </a>
      </section>

      <section className="border-y border-zinc-900 bg-zinc-900/50 py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 md:grid-cols-3">
          {dolores.map(([titulo, desc], i) => (
            <div key={i} className="rounded-2xl border border-zinc-800 bg-zinc-950 p-8 transition-colors hover:border-blue-900">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-red-900/50 bg-red-950/30 text-xl text-red-500">✕</div>
              <h3 className="mb-3 text-xl font-bold">{titulo}</h3>
              <p className="leading-relaxed text-zinc-500">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="mb-16 text-center text-3xl font-black md:text-4xl">
          No lo decimos nosotros. <br />
          <span className="text-zinc-500">Lo dicen sus resultados.</span>
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonios.map(([nombre, empresa, quote], i) => (
            <div key={i} className="relative rounded-2xl border border-zinc-800 bg-zinc-900 p-8">
              <div className="absolute right-6 top-4 text-4xl font-serif text-blue-600/20">"</div>
              <p className="relative z-10 mb-6 italic leading-relaxed text-zinc-300">"{quote}"</p>
              <p className="font-bold text-white">{nombre}</p>
              <p className="text-sm text-zinc-500">{empresa}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="checkout" className="relative overflow-hidden bg-black py-24">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-start gap-12 px-6 lg:flex-row">
          <div className="w-full lg:w-1/2">
            <h2 className="mb-4 text-4xl font-black">Ecosistema Digital PRO</h2>
            <p className="mb-8 text-zinc-400">
              Landing de alta conversión, integración de WhatsApp y automatización inicial para escalar tu negocio.
            </p>

            <div className="mb-8 rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
              <div className="mb-6 flex items-end justify-between border-b border-zinc-800 pb-6">
                <div>
                  <p className="mb-1 text-sm font-bold uppercase tracking-wider text-zinc-500">Inversión Única</p>
                  <p className="text-4xl font-black text-white">Gs. 3.500.000</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-blue-400">USD 480</p>
                </div>
              </div>

              <ul className="space-y-4">
                {features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-zinc-300">
                    <span className="mt-0.5 text-blue-500">✔</span>{f}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="w-full rounded-3xl border border-zinc-800 bg-zinc-950 p-2 shadow-2xl lg:w-1/2">
            <div className="mb-6 flex gap-2 rounded-2xl bg-zinc-900 p-2">
              <button
                onClick={() => setMetodoPago("fiat")}
                className={`flex-1 rounded-xl py-3 text-sm font-bold transition-all ${
                  metodoPago === "fiat"
                    ? "border border-zinc-700 bg-zinc-800 text-white shadow-md"
                    : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                🏦 Transferencia / QR
              </button>
              <button
                onClick={() => setMetodoPago("crypto")}
                className={`flex-1 rounded-xl py-3 text-sm font-bold transition-all ${
                  metodoPago === "crypto"
                    ? "border border-blue-900/50 bg-blue-900/30 text-blue-400 shadow-md"
                    : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                🪙 Crypto USDT
              </button>
            </div>

            <div className="p-6 text-center">
              {metodoPago === "fiat" ? (
                <div className="animate-in fade-in duration-300">
                  <h3 className="mb-2 text-xl font-bold">Pago por transferencia bancaria</h3>
                  <p className="mb-6 text-sm text-zinc-500">Copiá los datos y enviá tu comprobante por WhatsApp.</p>

                  <div className="mx-auto mb-8 max-w-sm space-y-3 text-left">
                    <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-4">
                      <p className="text-xs text-zinc-400">Banco</p>
                      <p className="mt-1 font-semibold text-white">{banco.banco}</p>
                    </div>

                    <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-4">
                      <p className="text-xs text-zinc-400">Titular</p>
                      <p className="mt-1 font-semibold text-white">{banco.titular}</p>
                    </div>

                    <BtnCopy texto="Número de cuenta" valor={banco.cuenta} k="cuenta" />
                    <BtnCopy texto="Alias / teléfono" valor={banco.alias} k="alias" />
                  </div>
                </div>
              ) : (
                <div className="animate-in fade-in duration-300">
                  <h3 className="mb-2 text-xl font-bold text-blue-400">Pago en USDT</h3>
                  <p className="mb-6 text-sm text-zinc-500">Red {crypto.red}. Copiá la billetera exacta antes de transferir.</p>

                  <div className="mx-auto mb-8 max-w-sm space-y-3 text-left">
                    <div className="rounded-xl border border-blue-900/30 bg-blue-950/20 p-4">
                      <p className="text-xs text-zinc-400">Titular</p>
                      <p className="mt-1 font-semibold text-white">{crypto.titular}</p>
                    </div>

                    <div className="rounded-xl border border-blue-900/30 bg-blue-950/20 p-4">
                      <p className="text-xs text-zinc-400">Red</p>
                      <p className="mt-1 font-semibold text-white">{crypto.red}</p>
                    </div>

                    <BtnCopy texto="Wallet USDT" valor={crypto.wallet} k="wallet" />
                  </div>
                </div>
              )}

              <a
                href={`https://wa.me/${wa}?text=${msg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-emerald-600 px-6 py-4 font-black text-white shadow-[0_0_20px_-5px_rgba(16,185,129,0.5)] transition-all active:scale-95 hover:bg-emerald-500"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="h-6 w-6">
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6z" />
                </svg>
                Ya pagué, enviar comprobante
              </a>

              <p className="mt-4 text-xs font-medium text-zinc-600">
                Validación manual. Iniciaremos tu proyecto en máximo 24hs hábiles.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="fixed bottom-0 left-0 z-50 w-full border-t border-zinc-800 bg-zinc-950/90 p-4 backdrop-blur-lg md:hidden">
        <a
          href="#checkout"
          className="flex w-full items-center justify-center rounded-xl bg-blue-600 px-6 py-4 text-lg font-black text-white shadow-[0_-10px_30px_-10px_rgba(37,99,235,0.4)] transition-transform active:scale-95"
        >
          Agendar Ecosistema PRO →
        </a>
      </div>
    </div>
  );
}
