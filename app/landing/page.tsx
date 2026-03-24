"use client";

import React from 'react';

export default function LandingAYC() {
  // Cambia este número por el WhatsApp de tu agencia
  const numeroWhatsApp = "595985864209"; 
  const mensajeWhatsApp = "Hola AYC Web! Quiero convertir mi negocio en una máquina de clientes. 🚀";
  const linkWA = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensajeWhatsApp)}`;

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-blue-500/30">
      
      {/* 🧠 HERO SECTION */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 px-6 max-w-5xl mx-auto text-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-96 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="inline-block bg-blue-900/30 border border-blue-500/30 text-blue-400 px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase mb-6 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
          Agencia de Crecimiento Digital
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-[1.1]">
          Convertimos tu negocio en una <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 drop-shadow-sm">
            máquina de clientes
          </span><br/> por WhatsApp
        </h1>
        
        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
          Conseguí consultas todos los días en menos de 7 días con un sistema simple, automatizado y diseñado puramente para vender.
        </p>
        
        <a href={linkWA} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-zinc-950 font-black text-lg px-8 py-4 rounded-full transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(37,211,102,0.4)] active:scale-95">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
          👉 Quiero más clientes ahora
        </a>
      </section>

      {/* 💣 PROBLEMA (Dolor) */}
      <section className="py-20 px-6 border-t border-white/5 bg-zinc-900/50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-8 text-zinc-100">Hoy estás perdiendo clientes <span className="text-red-500">todos los días.</span></h2>
          <div className="bg-red-950/20 border border-red-900/50 p-6 md:p-8 rounded-2xl text-lg text-zinc-300 space-y-4">
            <p>Personas visitan tu perfil, preguntan, dudan… <strong className="text-white">y se van.</strong></p>
            <p>No porque tu producto sea malo.</p>
            <p className="text-xl text-red-400 font-bold">Sino porque no tenés un sistema que convierta.</p>
          </div>
        </div>
      </section>

      {/* ⚡ SOLUCIÓN */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-4">Nosotros creamos un sistema completo que:</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Atrae clientes interesados",
              "Los envía directo a tu WhatsApp",
              "Automatiza el seguimiento",
              "Convierte consultas en ventas"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 bg-zinc-900 border border-zinc-800 p-6 rounded-2xl hover:border-emerald-500/50 transition-colors group">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <p className="text-xl font-bold text-zinc-100">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔥 CÓMO FUNCIONA */}
      <section className="py-20 px-6 border-t border-white/5 bg-zinc-900/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-16">¿Cómo Funciona? <span className="text-blue-500">Simple.</span></h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800 relative">
              <span className="absolute -top-6 left-8 text-6xl font-black text-zinc-800">1</span>
              <h3 className="text-xl font-black mb-3 mt-4 text-white">Creamos tu página que vende</h3>
              <p className="text-zinc-400">Diseñada con neuromarketing para que cada visita se convierta en un cliente potencial.</p>
            </div>
            <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800 relative">
              <span className="absolute -top-6 left-8 text-6xl font-black text-zinc-800">2</span>
              <h3 className="text-xl font-black mb-3 mt-4 text-white">Conectamos todo a WhatsApp</h3>
              <p className="text-zinc-400">Sin formularios largos ni complicados. Directo a donde cerrás las ventas.</p>
            </div>
            <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800 relative">
              <span className="absolute -top-6 left-8 text-6xl font-black text-zinc-800">3</span>
              <h3 className="text-xl font-black mb-3 mt-4 text-white">Automatizamos el proceso</h3>
              <p className="text-zinc-400">Mensajes y seguimiento automático sin que pierdas ni una sola oportunidad.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 💰 OFERTA Y PLANES */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">Elige tu Máquina de Ventas</h2>
            <p className="text-zinc-400 text-lg">Implementación completa llave en mano en solo 7 días.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* PLAN BÁSICO */}
            <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800 flex flex-col">
              <h3 className="text-2xl font-black text-white mb-2">🚀 Plan Starter</h3>
              <p className="text-zinc-400 mb-6">El sistema ideal para empezar a recibir leads.</p>
              <div className="text-3xl font-black text-white mb-8">Gs. 1.500.000</div>
              
              <ul className="space-y-4 mb-8 flex-1">
                {['Landing page optimizada', 'Botón WhatsApp directo', 'Copywriting que vende', 'Configuración completa en servidor'].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-zinc-300">
                    <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <a href={linkWA} target="_blank" rel="noreferrer" className="w-full block text-center bg-zinc-800 hover:bg-zinc-700 text-white font-bold py-4 rounded-xl transition-colors">Empezar Starter</a>
            </div>

            {/* PLAN PRO */}
            <div className="bg-gradient-to-b from-blue-900/40 to-zinc-900 p-8 rounded-3xl border-2 border-blue-500 flex flex-col relative transform md:-translate-y-4 shadow-[0_0_40px_rgba(59,130,246,0.15)]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-xs font-black tracking-wider uppercase">El que te hace ganar más</div>
              <h3 className="text-2xl font-black text-white mb-2">💎 Plan Pro</h3>
              <p className="text-zinc-400 mb-6">La máquina completa en piloto automático.</p>
              <div className="text-3xl font-black text-white mb-1">Gs. 3.500.000</div>
              <p className="text-sm text-blue-400 font-bold mb-7">+ Mensualidad de mantenimiento</p>
              
              <ul className="space-y-4 mb-8 flex-1">
                {['Todo lo del Plan Starter', 'Automatización de respuestas', 'Panel de Seguimiento de clientes', 'Optimización constante de conversiones', 'Dashboard de Métricas'].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-zinc-200">
                    <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span className={i === 0 ? "font-bold" : ""}>{feature}</span>
                  </li>
                ))}
              </ul>
              <a href={linkWA} target="_blank" rel="noreferrer" className="w-full block text-center bg-blue-600 hover:bg-blue-500 text-white font-black py-4 rounded-xl transition-colors shadow-lg">Quiero el Plan Pro</a>
            </div>

          </div>
        </div>
      </section>

      {/* 🧠 PRUEBA SOCIAL / AUTORIDAD */}
      <section className="py-16 px-6 bg-zinc-900/80 border-y border-white/5 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-xl md:text-2xl text-zinc-300 font-medium italic">
            "Este sistema ya está ayudando a empresas en Paraguay a generar clientes todos los días, sin depender de la suerte o de las recomendaciones de boca en boca."
          </p>
        </div>
      </section>

      {/* ⏳ URGENCIA & CTA FINAL */}
      <section className="py-24 px-6 text-center relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-96 bg-emerald-600/10 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="inline-block bg-orange-500/10 border border-orange-500/30 text-orange-400 px-4 py-2 rounded-lg font-bold mb-8 animate-pulse">
            ⚠️ Solo trabajamos con cupos limitados. Esta semana quedan 2 lugares disponibles.
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black mb-8 text-white">Si querés empezar a recibir clientes en tu WhatsApp:</h2>
          <p className="text-xl text-zinc-400 mb-10">Hacé clic abajo y te explico cómo aplicar nuestra máquina de clientes a tu negocio específico.</p>
          
          <a href={linkWA} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-zinc-950 font-black text-xl px-10 py-5 rounded-2xl transition-all hover:scale-105 shadow-[0_10px_40px_rgba(37,211,102,0.3)]">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
            Hablar por WhatsApp
          </a>
          <p className="mt-4 text-zinc-500 text-sm">Respuesta rápida garantizada.</p>
        </div>
      </section>

      {/* FOOTER SIMPLE */}
      <footer className="py-8 text-center text-zinc-600 text-sm border-t border-white/5 bg-zinc-950">
        <p>© {new Date().getFullYear()} AYC Web. Todos los derechos reservados.</p>
      </footer>

    </div>
  );
}
