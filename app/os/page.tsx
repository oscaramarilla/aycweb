"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// 🔥 1. COMPONENTE DE COPIA RÁPIDA (Blindado y elegante)
const CampoCopia = ({ etiqueta, valor }: { etiqueta: string; valor: string }) => {
  const [copiado, setCopiado] = useState(false);

  const ejecutarCopia = () => {
    navigator.clipboard.writeText(valor);
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2000);
  };

  return (
    <div className="flex items-center justify-between gap-2 p-2.5 mt-2 bg-zinc-950 rounded-lg border border-zinc-800 text-sm shadow-inner group">
      <div className="overflow-hidden flex flex-col sm:flex-row sm:items-center">
        <span className="text-zinc-500 mr-2 text-xs uppercase tracking-wider font-bold">{etiqueta}:</span>
        <span className="text-white font-mono tracking-tight text-xs sm:text-sm truncate">{valor}</span>
      </div>
      <button 
        onClick={ejecutarCopia} 
        className={`flex-shrink-0 text-xs font-black px-3 py-1.5 rounded-md transition-all active:scale-95 ${copiado ? "bg-emerald-500 text-zinc-950 shadow-[0_0_10px_rgba(16,185,129,0.4)]" : "bg-zinc-800 hover:bg-zinc-700 text-zinc-300"}`}
      >
        {copiado ? "¡Copiado!" : "Copiar"}
      </button>
    </div>
  );
};

// 🔥 2. TERMINAL DE PAGO INTEGRADO (Visible y Agresivo)
const TerminalDePago = ({ planNombre, planPrecio }: { planNombre: string, planPrecio: string }) => {
  const [metodoPago, setMetodoPago] = useState<"fiat" | "crypto">("fiat");
  const numeroWhatsApp = "595985864209"; 
  const mensajeBase = encodeURIComponent(`¡Hola Oscar! Ya realicé el pago por el plan ${planNombre} (${planPrecio}). Aquí envío mi comprobante para iniciar:`);

  return (
    <div className="mt-6 rounded-3xl border border-zinc-800 bg-zinc-900/50 p-4 shadow-xl overflow-hidden relative">
      {/* Tabs de Pago */}
      <div className="flex p-1.5 gap-1.5 bg-zinc-950 rounded-xl mb-6 shadow-inner">
        <button 
          onClick={() => setMetodoPago("fiat")}
          className={`flex-1 py-3 text-xs sm:text-sm font-bold rounded-lg transition-all ${metodoPago === "fiat" ? "bg-zinc-800 text-white shadow-md border border-zinc-700" : "text-zinc-600 hover:text-zinc-400"}`}
        >
          🏦 Banco / SIPAP
        </button>
        <button 
          onClick={() => setMetodoPago("crypto")}
          className={`flex-1 py-3 text-xs sm:text-sm font-bold rounded-lg transition-all ${metodoPago === "crypto" ? "bg-blue-900/20 text-blue-400 shadow-md border border-blue-900/30" : "text-zinc-600 hover:text-zinc-400"}`}
        >
          🪙 USDT (TRC20)
        </button>
      </div>

      {/* Contenido Dinámico */}
      <div className="text-center">
        {metodoPago === "fiat" ? (
          <div className="animate-in fade-in duration-300">
            <div className="bg-white p-3 rounded-2xl inline-block mb-4 mx-auto w-40 h-40 border-4 border-zinc-800 relative shadow-lg">
              <Image src="/qr-fiat.webp" alt="QR Banco" fill className="object-cover rounded-xl" />
            </div>
            
            <div className="text-left bg-zinc-900/80 p-4 rounded-xl border border-zinc-800/50 text-sm mb-6 max-w-sm mx-auto shadow-inner">
              <p className="text-zinc-400 mb-1">Banco Itaú Paraguay</p>
              <p className="text-white font-bold mb-3">Oscar Emigdio Amarilla Caceres</p>
              <CampoCopia etiqueta="Cuenta" valor="720601573" />
              <CampoCopia etiqueta="Alias / Tel" valor="0985864209" />
              <CampoCopia etiqueta="RUC" valor="4499507-5" />
            </div>
          </div>
        ) : (
          <div className="animate-in fade-in duration-300">
            <div className="bg-white p-3 rounded-2xl inline-block mb-4 mx-auto w-40 h-40 border-4 border-blue-900/50 relative shadow-[0_0_30px_rgba(37,99,235,0.1)]">
              <Image src="/qr-crypto.webp" alt="QR USDT" fill className="object-cover rounded-xl" />
            </div>

            <div className="text-left bg-blue-950/10 p-4 rounded-xl border border-blue-900/20 text-sm mb-6 max-w-sm mx-auto shadow-inner">
              <p className="text-blue-400 font-bold mb-1">Red TRON (TRC20)</p>
              <p className="text-zinc-400 text-xs mb-3">Envía únicamente USDT a esta dirección.</p>
              <CampoCopia etiqueta="Address" valor="TLUzuQDLjVwp4UDFAEFuypw5LmFf1K1PRQ" />
            </div>
          </div>
        )}

        <a 
          href={`https://wa.me/${numeroWhatsApp}?text=${mensajeBase}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-black py-4 px-6 rounded-xl flex items-center justify-center gap-3 transition-all active:scale-95 shadow-[0_0_20px_-5px_rgba(16,185,129,0.4)]"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
          Ya pagué, enviar comprobante
        </a>
      </div>
    </div>
  );
};

// 🔥 3. PÁGINA PRINCIPAL
export default function LandingOS() {
  const whatsappNumber = "595985864209";

  const plans = [
    {
      id: "landing-flash",
      name: "Landing Page Flash",
      price: "Gs. 1.500.000",
      usd: "USD 200",
      badge: "Entrada Rápida",
      summary: "Ideal para salir ya a vender con una página enfocada en contacto, autoridad y WhatsApp.",
      features: [
        "Landing comercial 100% responsive",
        "Copy orientado a conversión B2B",
        "Botones estratégicos a WhatsApp",
        "Bloque de pago con QR integrado",
        "Entrega rápida (72hs hábiles)",
      ]
    },
    {
      id: "automatizacion-inicial",
      name: "Automatización Inicial",
      price: "Gs. 2.500.000",
      usd: "USD 340",
      badge: "Ecosistema PRO",
      summary: "Para empresas que necesitan captar, ordenar y acelerar su operación comercial.",
      features: [
        "Todo lo del plan Landing Flash",
        "Formulario de Cotización inteligente",
        "Flujo de captación y precalificación",
        "Optimización SEO Técnica (PageSpeed 99)",
        "Base preparada para escalar a CRM interno",
      ]
    },
  ];

  return (
    <div className="bg-zinc-950 text-zinc-50 font-sans min-h-screen selection:bg-blue-500 selection:text-white pb-24 md:pb-0">
      
      {/* NAVEGACIÓN */}
      <nav className="flex justify-between items-center px-6 py-4 border-b border-zinc-900 bg-zinc-950/80 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 relative flex items-center justify-center">
             <Image src="/logo-ayc.webp" alt="AYCweb Logo" width={32} height={32} className="object-contain" />
          </div>
          <span className="font-black tracking-tighter text-xl italic text-white">AYCweb</span>
        </div>
        <div className="hidden md:flex items-center gap-2 text-xs font-medium text-emerald-400 bg-emerald-400/10 px-3 py-1.5 rounded-full border border-emerald-400/20">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          Garantía de Resultados
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="inline-flex rounded-full border border-blue-900/50 bg-blue-950/30 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-400 mb-6 shadow-inner">
              Sistemas Digitales de Venta
            </p>
            <h1 className="max-w-4xl text-4xl font-black tracking-tighter text-white sm:text-5xl lg:text-6xl leading-[1.1]">
              Convertí tu web en un sistema lógico de <span className="text-blue-500">atención, pago y cierre.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
              No vendemos una página linda. Diseñamos una estructura comercial clara para captar clientes,
              mostrar valor, presentar métodos de pago y cerrar por WhatsApp sin perder velocidad.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#planes" className="inline-flex min-h-14 items-center justify-center rounded-xl bg-blue-600 px-8 py-3 text-base font-black text-white transition-all hover:bg-blue-500 shadow-[0_0_30px_-5px_rgba(37,99,235,0.4)] active:scale-95">
                Ver planes y activar pago &rarr;
              </a>
              <a href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hola Oscar. Estoy en aycweb.com/os y quiero que me asesores sobre cuál plan me conviene.")}`} target="_blank" rel="noreferrer" className="inline-flex min-h-14 items-center justify-center rounded-xl border border-zinc-700 bg-zinc-900 px-8 py-3 text-base font-bold text-white transition-all hover:bg-zinc-800">
                Consultar por WhatsApp
              </a>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-3 border-t border-zinc-900 pt-8">
              {[
                { label: "Respuesta", value: "15 seg" },
                { label: "Experiencia", value: "Sin fricción" },
                { label: "Enfoque", value: "B2B Corporativo" },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-4 shadow-inner">
                  <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">{item.label}</p>
                  <p className="mt-2 text-xl font-black text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="rounded-[2.5rem] border border-zinc-800 bg-black p-8 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-emerald-400 to-blue-500"></div>
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">El Recorrido del Cliente</p>
            <h2 className="text-2xl font-black tracking-tight sm:text-3xl mb-8">Un embudo letal.</h2>
            <ul className="grid gap-4 relative z-10">
              {[
                "1. Atención: Mensaje claro y directo.",
                "2. Propuesta: Oferta y precio visible.",
                "3. Cobro: QR y datos bancarios a un click.",
                "4. Cierre: WhatsApp pre-armado."
              ].map((point) => (
                <li key={point} className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-4 text-sm font-medium text-zinc-300 flex items-start gap-3 shadow-sm">
                   <span className="text-blue-500 mt-0.5">✔</span> {point}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      {/* SECCIÓN DE PLANES CON TERMINAL INYECTADA */}
      <section id="planes" className="mx-auto max-w-7xl px-6 py-16 sm:py-24 border-t border-zinc-900">
        <div className="max-w-3xl mb-16 text-center mx-auto">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-500 mb-4">Planes de Implementación</p>
          <h2 className="text-3xl font-black tracking-tight text-white sm:text-5xl mb-6">
            Elegí tu plan, revisá el pago y cerrá en el mismo flujo.
          </h2>
          <p className="text-lg leading-relaxed text-zinc-400">
            Cada plan ya incluye la pasarela de confirmación. Tu cliente entiende, confía, paga y se contacta sin perderse en el camino.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {plans.map((plan) => (
            <article key={plan.id} className="rounded-[2.5rem] border border-zinc-800 bg-black p-8 shadow-2xl flex flex-col relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl pointer-events-none"></div>
              
              <div className="flex items-start justify-between gap-4 mb-8 relative z-10">
                <div>
                  <p className="inline-block rounded-full bg-zinc-900 border border-zinc-700 px-3 py-1 text-xs font-bold uppercase tracking-widest text-zinc-300 mb-4">
                    {plan.badge}
                  </p>
                  <h3 className="text-3xl font-black tracking-tight text-white">{plan.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">{plan.summary}</p>
                </div>
              </div>

              <div className="rounded-2xl bg-zinc-900/50 border border-zinc-800 p-6 mb-8 flex justify-between items-end relative z-10 shadow-inner">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">Inversión Única</p>
                  <p className="text-4xl font-black text-white">{plan.price}</p>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold text-blue-400">{plan.usd}</p>
                </div>
              </div>

              <ul className="grid gap-4 text-sm text-zinc-300 mb-8 flex-1 relative z-10">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="text-emerald-500 font-bold text-lg leading-none">✓</span>
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* 🔥 AQUÍ INYECTAMOS LA TERMINAL DE PAGO REAL */}
              <div className="mt-auto relative z-10 border-t border-zinc-800 pt-8">
                 <h4 className="text-white font-bold text-lg mb-2 text-center">Activar este Plan</h4>
                 <p className="text-zinc-500 text-xs text-center mb-4">Realiza el pago escaneando o copiando los datos a continuación:</p>
                 <TerminalDePago planNombre={plan.name} planPrecio={plan.price} />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* STICKY CTA MOBILE */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-zinc-950/90 backdrop-blur-lg border-t border-zinc-800 p-4 z-50 shadow-[0_-20px_30px_-10px_rgba(0,0,0,0.7)]">
        <a 
          href="#planes" 
          className="w-full flex bg-blue-600 text-white font-black py-4 px-6 rounded-xl items-center justify-center text-lg active:scale-95 transition-transform shadow-[0_0_20px_rgba(37,99,235,0.4)]"
        >
          Ver Planes y Pagar &rarr;
        </a>
      </div>

    </div>
  );
}
