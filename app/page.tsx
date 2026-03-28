"use client";

import { useState } from "react";
import Image from "next/image";

export default function LandingOS() {
  // Estado para controlar qué método de pago ve el usuario
  const [metodoPago, setMetodoPago] = useState<"fiat" | "crypto">("fiat");

  // Número de WhatsApp de AYCweb (Reemplazar con el real si es otro)
  const numeroWhatsApp = "595982451828"; 
  const mensajeBase = encodeURIComponent("¡Hola AYCweb! Acabo de ver la propuesta en la landing y quiero arrancar con mi proyecto de desarrollo/automatización. Aquí envío mi comprobante:");

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans pb-24 md:pb-0 selection:bg-blue-500 selection:text-white">
      
      {/* 🛑 NAVBAR MINIMALISTA: Cero fugas. Solo logo y micro-prueba */}
      <nav className="flex justify-between items-center px-6 py-4 border-b border-zinc-900 bg-zinc-950/80 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-3">
          {/* Logo Optimizado en WebP */}
          <div className="w-8 h-8 relative flex items-center justify-center">
             <Image src="/logo-ayc.webp" alt="AYCweb Logo" width={32} height={32} className="object-contain" />
          </div>
          <span className="font-bold tracking-tight text-lg">AYCweb</span>
        </div>
        <div className="hidden md:flex items-center gap-2 text-xs font-medium text-emerald-400 bg-emerald-400/10 px-3 py-1.5 rounded-full border border-emerald-400/20">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          Garantía de Resultados 100%
        </div>
      </nav>

      {/* 🚀 HERO SECTION: El dolor y la promesa */}
      <section className="px-6 pt-20 pb-16 max-w-4xl mx-auto text-center">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-zinc-800 bg-zinc-900 text-sm font-semibold text-zinc-300 shadow-xl">
          Sistemas Web & Automatización B2B
        </div>
        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-[1.1]">
          Tu negocio está perdiendo plata por <span className="text-blue-500">trabajar en manual.</span>
        </h1>
        <p className="text-xl md:text-2xl text-zinc-400 mb-10 leading-relaxed max-w-3xl mx-auto font-light">
          No necesitas otra "página linda". Necesitas un ecosistema digital que capte clientes, automatice procesos y cierre ventas mientras vos dormís.
        </p>
        <a 
          href="#checkout" 
          className="inline-flex bg-blue-600 hover:bg-blue-500 text-white font-black py-4 px-10 rounded-xl transition-all items-center gap-3 text-lg shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)] active:scale-95"
        >
          Revolucionar mi Negocio Hoy
        </a>
      </section>

      {/* ⚠️ EL DOLOR: Agitar el problema */}
      <section className="bg-zinc-900/50 py-20 border-y border-zinc-900">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { titulo: "Ventas Caídas", desc: "Tus clientes se van a la competencia porque tardas horas en responder o armar un presupuesto." },
            { titulo: "Caos Operativo", desc: "Haces tareas repetitivas copiando y pegando datos, perdiendo el tiempo más valioso de tu día." },
            { titulo: "Presencia Invisible", desc: "Tener un Instagram no es un negocio. Si no estás en Google con autoridad, no existís en B2B." }
          ].map((item, i) => (
            <div key={i} className="bg-zinc-950 p-8 rounded-2xl border border-zinc-800 hover:border-blue-900 transition-colors">
              <div className="w-12 h-12 bg-red-950/30 text-red-500 rounded-xl flex items-center justify-center text-xl mb-6 border border-red-900/50">
                ✕
              </div>
              <h3 className="text-xl font-bold mb-3">{item.titulo}</h3>
              <p className="text-zinc-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 💬 TESTIMONIOS: Prueba social dura y real */}
      <section className="py-24 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-black text-center mb-16">No lo decimos nosotros. <br/><span className="text-zinc-500">Lo dicen sus facturaciones.</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { nombre: "Carlos M.", empresa: "Distribuidora Mayorista", quote: "Antes perdíamos 2 horas al día cotizando. La automatización de AYC nos bajó eso a 3 minutos. El sistema se pagó solo el primer mes." },
            { nombre: "Laura G.", empresa: "Clínica Odontológica", quote: "Nuestra web anterior era un adorno. Desde que lanzamos la nueva landing con AYC, las reservas por WhatsApp subieron un 40%." },
            { nombre: "Javier R.", empresa: "Fábrica Industrial", quote: "El nivel técnico que manejan es de otro planeta. Nos integraron todo el inventario directo a la web sin fricciones." }
          ].map((testimonio, i) => (
            <div key={i} className="p-8 rounded-2xl bg-zinc-900 border border-zinc-800 relative">
              <div className="text-blue-600 text-4xl font-serif absolute top-4 right-6 opacity-20">"</div>
              <p className="text-zinc-300 italic mb-6 relative z-10 leading-relaxed">"{testimonio.quote}"</p>
              <div>
                <p className="font-bold text-white">{testimonio.nombre}</p>
                <p className="text-sm text-zinc-500">{testimonio.empresa}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 💳 SISTEMA DE PAGO INTEGRADO */}
      <section id="checkout" className="py-24 bg-black relative overflow-hidden">
        {/* Glow de fondo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-5xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row gap-12 items-start">
          
          {/* Columna Izquierda: La Oferta y Precios Duales */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl font-black mb-4">Ecosistema Digital PRO</h2>
            <p className="text-zinc-400 mb-8">El paquete completo para escalar. Diseño de Landing Page de alta conversión, integración de WhatsApp y automatización inicial.</p>
            
            <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800 mb-8">
              <div className="flex justify-between items-end border-b border-zinc-800 pb-6 mb-6">
                <div>
                  <p className="text-sm font-bold text-zinc-500 uppercase tracking-wider mb-1">Inversión Única</p>
                  <p className="text-4xl font-black text-white">Gs. 3.500.000</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-blue-400">USD 480</p>
                </div>
              </div>
              <ul className="space-y-4">
                {["Landing Page de Alto Rendimiento (Next.js)", "Copywriting Persuasivo B2B", "Botón flotante inteligente de WhatsApp", "Optimización SEO (99/100 PageSpeed)", "Hosting Premium incluido (1er año)"].map((feat, i) => (
                  <li key={i} className="flex items-start gap-3 text-zinc-300">
                    <span className="text-blue-500 mt-0.5">✔</span> {feat}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Columna Derecha: Pasarela de Pago QR */}
          <div className="w-full lg:w-1/2 bg-zinc-950 p-2 rounded-3xl border border-zinc-800 shadow-2xl">
            {/* Tabs de Pago */}
            <div className="flex p-2 gap-2 bg-zinc-900 rounded-2xl mb-6">
              <button 
                onClick={() => setMetodoPago("fiat")}
                className={`flex-1 py-3 text-sm font-bold rounded-xl transition-all ${metodoPago === "fiat" ? "bg-zinc-800 text-white shadow-md border border-zinc-700" : "text-zinc-500 hover:text-zinc-300"}`}
              >
                🏦 Transf. Bancaria / QR
              </button>
              <button 
                onClick={() => setMetodoPago("crypto")}
                className={`flex-1 py-3 text-sm font-bold rounded-xl transition-all ${metodoPago === "crypto" ? "bg-blue-900/30 text-blue-400 shadow-md border border-blue-900/50" : "text-zinc-500 hover:text-zinc-300"}`}
              >
                🪙 Crypto (USDT)
              </button>
            </div>

            {/* Contenido Dinámico según el método de pago */}
            <div className="p-6 text-center">
              {metodoPago === "fiat" ? (
                <div className="animate-in fade-in duration-300">
                  <h3 className="font-bold text-xl mb-2">Escanea para transferir</h3>
                  <p className="text-sm text-zinc-500 mb-6">Aceptamos transferencias desde cualquier banco local (SIPAP).</p>
                  <div className="bg-white p-4 rounded-2xl inline-block mb-6 mx-auto w-48 h-48 border-4 border-zinc-800 relative overflow-hidden">
                    {/* QR Fiat Optimizado */}
                    <Image src="/qr-fiat.webp" alt="QR Banco" fill className="object-cover" />
                  </div>
                  <div className="text-left bg-zinc-900 p-4 rounded-xl border border-zinc-800 text-sm space-y-2 mb-8 mx-auto max-w-sm">
                    <p><span className="text-zinc-500">Banco:</span> Itaú (Ejemplo)</p>
                    <p><span className="text-zinc-500">Cuenta:</span> 123456789</p>
                    <p><span className="text-zinc-500">Titular:</span> AYCweb / Oscar Amarilla</p>
                    <p><span className="text-zinc-500">RUC:</span> 8000000-1</p>
                  </div>
                </div>
              ) : (
                <div className="animate-in fade-in duration-300">
                  <h3 className="font-bold text-xl text-blue-400 mb-2">Red TRC20 / BEP20</h3>
                  <p className="text-sm text-zinc-500 mb-6">Transfiere USDT rápido y sin comisiones locales.</p>
                  <div className="bg-white p-4 rounded-2xl inline-block mb-6 mx-auto w-48 h-48 border-4 border-blue-900/50 relative overflow-hidden">
                    {/* QR Crypto Optimizado */}
                    <Image src="/qr-crypto.webp" alt="QR USDT" fill className="object-cover" />
                  </div>
                  <div className="text-left bg-blue-950/20 p-4 rounded-xl border border-blue-900/30 text-sm space-y-2 mb-8 mx-auto max-w-sm overflow-hidden">
                    <p className="text-zinc-500 mb-1">Billetera USDT (TRC20):</p>
                    <p className="font-mono text-xs text-blue-300 break-all select-all">TXXXXXXXXX...tu_billetera_usdt...XXXXXXX</p>
                  </div>
                </div>
              )}

              {/* Botón de Confirmación por WhatsApp */}
              <a 
                href={`https://wa.me/${numeroWhatsApp}?text=${mensajeBase}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-black py-4 px-6 rounded-xl flex items-center justify-center gap-3 transition-all active:scale-95 shadow-[0_0_20px_-5px_rgba(16,185,129,0.5)]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="w-6 h-6">
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6z"/>
                </svg>
                Ya pagué, enviar comprobante
              </a>
              <p className="text-xs text-zinc-600 mt-4 font-medium">Validación manual. Iniciaremos tu proyecto en máximo 24hs hábiles.</p>
            </div>
          </div>

        </div>
      </section>

      {/* 📱 STICKY CTA MOBILE */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-zinc-950/90 backdrop-blur-lg border-t border-zinc-800 p-4 z-50">
        <a 
          href="#checkout" 
          className="w-full flex bg-blue-600 text-white font-black py-4 px-6 rounded-xl items-center justify-center text-lg active:scale-95 transition-transform shadow-[0_-10px_30px_-10px_rgba(37,99,235,0.4)]"
        >
          Agendar Ecosistema PRO →
        </a>
      </div>

    </div>
  );
}
