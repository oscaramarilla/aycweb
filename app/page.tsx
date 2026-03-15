"use client";
import { useState } from "react";

export default function AycWebMasterFunnel() {
  const whatsappLink = "https://wa.me/595985864209?text=Hola%20Oscar,%20vengo%20de%20AYCweb.%20Me%20interesa%20analizar%20mi%20empresa.";

  const planes = [
    {
      nombre: "Landing Page Flash",
      precio: "1.500.000",
      mantenimiento: "0",
      descripcion: "Tu presencia digital profesional en tiempo récord para captar clientes.",
      features: ["Diseño One-Pager Alto Impacto", "Formulario a WhatsApp", "Adaptable a celulares"],
      roi: "Si captas 1 cliente extra al mes, se paga sola.",
      cta: "Quiero mi Landing",
      color: "zinc"
    },
    {
      nombre: "Automatización Inicial",
      precio: "2.500.000",
      mantenimiento: "250.000",
      popular: true,
      descripcion: "Para negocios que necesitan digitalizar su primer proceso crítico (ej. Cotizador).",
      features: ["1 Motor PDF a medida", "Hosting Premium", "Soporte Técnico VIP"],
      roi: "Ahorra más de 40 horas operativas al mes a tu equipo.",
      cta: "Automatizar ahora",
      color: "blue"
    }
  ];

  return (
    <main className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-blue-500/30 pb-20">
      
      {/* ⚠️ GATILLO DE ESCASEZ Y URGENCIA */}
      <div className="bg-blue-600 text-white text-xs md:text-sm font-black text-center py-3 px-4 shadow-md sticky top-0 z-50 tracking-wide">
        Analizamos tu empresa gratis en 5 minutos. Solo tomamos 5 proyectos nuevos por mes (2 cupos disponibles).
      </div>

      {/* 1. HERO SECTION (NEURO-OPTIMIZADO) */}
      <section className="relative overflow-hidden pt-24 pb-20 flex flex-col items-center text-center px-6 border-b border-zinc-900">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-96 bg-blue-600/10 blur-[120px] pointer-events-none"></div>
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-blue-400 text-xs font-bold tracking-widest mb-8 uppercase shadow-xl relative z-10">
          <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
          AYC | Automatización Empresarial
        </div>

        <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white mb-6 max-w-5xl leading-tight relative z-10">
          Automatizamos procesos y generamos clientes para tu empresa.
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-blue-500 mb-8 relative z-10">
          Implementaciones listas en menos de 7 días.
        </h2>

        <p className="text-lg text-zinc-400 mb-10 max-w-2xl leading-relaxed relative z-10">
          Convierte tu web en una máquina de clientes y cotizaciones automáticas. Deja de perder tiempo en tareas manuales repetitivas.
        </p>

        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="relative z-10 px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white font-black text-xl rounded-xl transition-all hover:-translate-y-1 shadow-[0_0_30px_rgba(37,99,235,0.4)]">
          Analizar mi empresa (Gratis)
        </a>
      </section>

      {/* 2. EL PROBLEMA */}
      <section className="py-20 bg-zinc-900/30 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-3xl font-black mb-12">Las empresas pierden cientos de horas al año en:</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {["Cotizaciones manuales", "Pedidos por WhatsApp", "Seguimiento de clientes", "Procesos repetitivos"].map((problema, i) => (
              <div key={i} className="bg-zinc-950 border border-zinc-800 p-6 rounded-2xl text-zinc-300 font-bold border-t-4 border-t-red-500/50">
                {problema}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CASO REAL (PRUEBA SOCIAL) */}
      <section className="py-24 px-6 border-y border-zinc-800">
        <div className="max-w-5xl mx-auto bg-blue-900/10 border border-blue-900/30 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-3xl rounded-full"></div>
          <h3 className="text-blue-400 font-bold tracking-widest uppercase text-sm mb-4 relative z-10">Caso de Éxito Demostrable</h3>
          <h4 className="text-3xl md:text-4xl font-black text-white mb-10 relative z-10">Industria Manufacturera (Metal Mad)</h4>
          
          <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16 relative z-10">
            <div className="bg-zinc-950/50 p-6 rounded-2xl border border-zinc-800 w-full md:w-1/2">
              <span className="text-red-400 font-bold uppercase text-sm block mb-2">Antes</span>
              <span className="text-3xl font-black text-white">2 Horas</span>
              <p className="text-zinc-400 mt-2">Para armar una cotización en Word.</p>
            </div>
            <div className="bg-blue-900/20 p-6 rounded-2xl border border-blue-500/30 w-full md:w-1/2 shadow-[0_0_15px_rgba(37,99,235,0.2)]">
              <span className="text-blue-400 font-bold uppercase text-sm block mb-2">Después con AYC</span>
              <span className="text-3xl font-black text-white">15 Segundos</span>
              <p className="text-zinc-300 mt-2">Generando el PDF desde el celular.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CÓMO FUNCIONA (REDUCCIÓN DE FRICCIÓN) */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-black text-center mb-16">Cómo funciona nuestro proceso</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { num: "1", titulo: "Diagnóstico Rápido", desc: "Encontramos tus fugas de tiempo." },
              { num: "2", titulo: "Arquitectura", desc: "Diseñamos tu sistema ideal." },
              { num: "3", titulo: "Implementación", desc: "Desarrollo y código en 7 días." },
              { num: "4", titulo: "Automatización Activa", desc: "Ahorras horas desde el día uno." }
            ].map((paso, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-zinc-900 border-2 border-blue-500 text-blue-500 rounded-full flex items-center justify-center text-2xl font-black mx-auto mb-6">
                  {paso.num}
                </div>
                <h4 className="text-xl font-bold mb-2">{paso.titulo}</h4>
                <p className="text-zinc-400">{paso.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PRECIOS B2B ANCLADOS AL ROI */}
      <section className="py-20 px-6 bg-zinc-900/50 border-t border-zinc-800">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-5xl font-black mb-4">Inversión Transparente</h3>
            <p className="text-zinc-400 text-lg">Precios claros. Resultados medibles.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {planes.map((plan, index) => (
              <div key={index} className={`relative p-8 rounded-3xl border ${plan.popular ? 'border-blue-500 bg-blue-900/10' : 'border-zinc-800 bg-zinc-950'} flex flex-col`}>
                {plan.popular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-xs font-black px-4 py-1 rounded-full uppercase tracking-widest">
                    Más Solicitado
                  </span>
                )}
                
                <h4 className="text-2xl font-bold mb-2">{plan.nombre}</h4>
                <p className="text-zinc-400 text-sm mb-6 min-h-[40px]">{plan.descripcion}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-black">Gs. {plan.precio}</span>
                </div>

                <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-3 mb-8">
                  <p className="text-green-400 text-sm font-bold text-center">💡 {plan.roi}</p>
                </div>

                <div className="mb-8 border-t border-zinc-800 pt-6 flex-grow">
                  <ul className="space-y-4">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm">
                        <span className="text-blue-500 font-bold">✓</span> {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <a 
                  href={`${whatsappLink}%20Quiero%20el%20plan%20${plan.nombre.replace(/\s+/g, '%20')}`}
                  target="_blank" rel="noopener noreferrer"
                  className={`block w-full text-center py-4 rounded-xl font-black transition-all ${plan.popular ? 'bg-blue-600 hover:bg-blue-500 shadow-lg' : 'bg-zinc-800 text-white hover:bg-zinc-700'}`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
