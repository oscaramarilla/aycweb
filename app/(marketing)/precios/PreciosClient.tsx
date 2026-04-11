"use client";

import { useState } from "react";
import Link from "next/link";

export default function PreciosPage() {
  const [tier, setTier] = useState<"empresa" | "profesional">("empresa");

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans pb-24 pt-12 md:pt-20 relative overflow-hidden">
      
      {/* Fondo de ruido tecnológico */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay z-0"></div>

      {/* HERO & SELECTOR */}
      <section className="max-w-4xl mx-auto px-6 text-center mb-16 relative z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
        
        <div className="inline-flex items-center gap-2 mb-6 px-5 py-2 rounded-full border border-slate-800 bg-slate-900/50 text-xs font-bold uppercase tracking-widest text-slate-300 shadow-md">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
          Arquitectura de Precios
        </div>
        <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter text-white leading-tight">
          Inversión clara.<br />Retorno operativo medible.
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-12">
          Sistemas empaquetados sin costos ocultos. Elegí tu perfil y encontrá la infraestructura exacta que necesita tu operación.
        </p>

        {/* TOGGLE BUTTONS */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-2xl mx-auto">
          <button 
            onClick={() => setTier("empresa")}
            className={`flex-1 p-6 rounded-2xl border-2 transition-all text-left relative overflow-hidden ${
              tier === "empresa" 
                ? "border-blue-500 bg-blue-900/20 shadow-[0_0_30px_rgba(37,99,235,0.2)]" 
                : "border-slate-800 bg-slate-900/50 hover:bg-slate-800"
            }`}
          >
            <span className="text-3xl mb-3 block">🏭</span>
            <div className="font-bold text-lg text-white mb-1">Empresa / Razón Social</div>
            <div className="text-xs text-slate-400">Manufactureras, clínicas, agroindustria, hospitales.</div>
          </button>

          <button 
            onClick={() => setTier("profesional")}
            className={`flex-1 p-6 rounded-2xl border-2 transition-all text-left relative overflow-hidden ${
              tier === "profesional" 
                ? "border-emerald-500 bg-emerald-900/20 shadow-[0_0_30px_rgba(16,185,129,0.2)]" 
                : "border-slate-800 bg-slate-900/50 hover:bg-slate-800"
            }`}
          >
            <span className="text-3xl mb-3 block">🧑‍⚕️</span>
            <div className="font-bold text-lg text-white mb-1">Profesional Independiente</div>
            <div className="text-xs text-slate-400">Médicos, abogados, contadores, consultores.</div>
          </button>
        </div>
      </section>

      {/* ================= TIER EMPRESA ================= */}
      {tier === "empresa" && (
        <section className="max-w-6xl mx-auto px-6 animate-in fade-in slide-in-from-bottom-4 duration-500 relative z-10">
          <div className="text-center mb-12">
            <span className="text-blue-400 text-xs font-bold tracking-widest uppercase bg-blue-500/10 px-4 py-1.5 rounded-full mb-4 inline-block border border-blue-500/20">Tier Empresarial</span>
            <h2 className="text-3xl font-black text-white mb-4">Infraestructura para operaciones complejas</h2>
            <p className="text-slate-400">Motores que reemplazan procesos manuales enteros y recuperan horas-hombre cada semana.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 hover:border-slate-600 transition-colors flex flex-col backdrop-blur-sm">
              <span className="text-3xl mb-4 block">⚡</span>
              <h3 className="text-xl font-bold text-white mb-2">Motor Comercial Base</h3>
              <p className="text-slate-400 text-sm mb-6 h-10">Presencia corporativa con embudo de captación B2B integrado.</p>
              
              <div className="mb-8">
                <div className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-1">Setup Único</div>
                <div className="text-4xl font-black text-white mb-1"><span className="text-xl text-slate-500 mr-1">USD</span>$900</div>
              </div>

              <ul className="space-y-3 text-slate-300 text-sm mb-8 flex-1">
                <li className="flex gap-3"><span className="text-blue-500 font-bold">✓</span> Web corporativa B2B</li>
                <li className="flex gap-3"><span className="text-blue-500 font-bold">✓</span> Copywriting de conversión</li>
                <li className="flex gap-3"><span className="text-blue-500 font-bold">✓</span> Embudo con precalificación</li>
                <li className="flex gap-3"><span className="text-blue-500 font-bold">✓</span> Arquitectura de alto rendimiento</li>
              </ul>
              
              <a href="https://wa.me/595985864209?text=Hola%20Oscar%2C%20soy%20empresa%20y%20me%20interesa%20el%20Motor%20Comercial%20Base%20de%20USD%20%24900." target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-slate-800 hover:bg-slate-700 text-white font-bold py-3 rounded-xl transition-all mt-auto border border-slate-700 shadow-md">Solicitar Motor Base</a>
            </div>

            {/* Card 2 (Featured) */}
            <div className="bg-slate-950 border-2 border-blue-500 rounded-3xl p-8 transform md:-translate-y-4 shadow-[0_0_50px_rgba(37,99,235,0.2)] relative flex flex-col">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-xs font-bold px-5 py-1.5 rounded-full uppercase tracking-widest whitespace-nowrap shadow-lg">Más Elegido</div>
              <span className="text-3xl mb-4 block mt-2">🔧</span>
              <h3 className="text-xl font-bold text-white mb-2">Infraestructura Operativa</h3>
              <p className="text-slate-400 text-sm mb-6 h-10">Automatización de cotizaciones, PDFs y lógica a medida.</p>
              
              <div className="mb-8">
                <div className="text-xs text-blue-400 font-bold uppercase tracking-widest mb-1">Setup Único</div>
                <div className="text-4xl font-black text-blue-400 mb-1"><span className="text-xl text-blue-500/50 mr-1">USD</span>$1.800</div>
              </div>

              <ul className="space-y-3 text-white font-medium text-sm mb-8 flex-1">
                <li className="flex gap-3"><span className="text-blue-500 font-bold">✓</span> Todo lo del Motor Base</li>
                <li className="flex gap-3"><span className="text-blue-500 font-bold">✓</span> Cotizador dinámico interactivo</li>
                <li className="flex gap-3"><span className="text-blue-500 font-bold">✓</span> Generación automática de PDFs</li>
                <li className="flex gap-3"><span className="text-blue-500 font-bold">✓</span> Lógica de negocio personalizada</li>
              </ul>
              
              <a href="https://wa.me/595985864209?text=Hola%20Oscar%2C%20soy%20empresa%20y%20me%20interesa%20la%20Infraestructura%20Operativa%20de%20USD%20%241.800." target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-black py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] mt-auto">Agendar Auditoría</a>
            </div>

            {/* Card 3 */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 hover:border-slate-600 transition-colors flex flex-col backdrop-blur-sm">
              <span className="text-3xl mb-4 block">🏗️</span>
              <h3 className="text-xl font-bold text-white mb-2">SaaS / Consultoría</h3>
              <p className="text-slate-400 text-sm mb-6 h-10">Portales, dashboards, conexión con ERPs y sistemas legados.</p>
              
              <div className="mb-8">
                <div className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-1">Inversión</div>
                <div className="text-3xl font-black text-white mb-1">A medida</div>
              </div>

              <ul className="space-y-3 text-slate-300 text-sm mb-8 flex-1">
                <li className="flex gap-3"><span className="text-blue-500 font-bold">✓</span> Dashboards de control interno</li>
                <li className="flex gap-3"><span className="text-blue-500 font-bold">✓</span> Portales de clientes/proveedores</li>
                <li className="flex gap-3"><span className="text-blue-500 font-bold">✓</span> Conexión con APIs y ERPs</li>
                <li className="flex gap-3"><span className="text-blue-500 font-bold">✓</span> Mantenimiento dedicado</li>
              </ul>
              
              <a href="https://wa.me/595985864209?text=Hola%20Oscar%2C%20necesito%20una%20infraestructura%20custom%20para%20mi%20empresa." target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-slate-800 hover:bg-slate-700 text-white font-bold py-3 rounded-xl transition-all mt-auto border border-slate-700 shadow-md">Agendar Consultoría</a>
            </div>
          </div>

          {/* Mantenimiento B2B */}
          <div className="mt-8 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto backdrop-blur-md shadow-lg">
            <p className="text-slate-300 text-sm">🛡️ <strong className="text-white">SLA Empresarial:</strong> Hosting dedicado, dominio, backups diarios y soporte técnico B2B continuo.</p>
            <div className="font-black text-white text-xl bg-slate-950 px-5 py-2.5 rounded-xl border border-slate-700 whitespace-nowrap shadow-inner">$80 USD<span className="text-xs font-normal text-slate-500 ml-1">/mes</span></div>
          </div>
        </section>
      )}

      {/* ================= TIER PROFESIONAL ================= */}
      {tier === "profesional" && (
        <section className="max-w-6xl mx-auto px-6 animate-in fade-in slide-in-from-bottom-4 duration-500 relative z-10">
          <div className="text-center mb-12">
            <span className="text-emerald-400 text-xs font-bold tracking-widest uppercase bg-emerald-500/10 px-4 py-1.5 rounded-full mb-4 inline-block border border-emerald-500/20">Tier Profesional</span>
            <h2 className="text-3xl font-black text-white mb-4">Tu consultorio trabaja por vos</h2>
            <p className="text-slate-400">Sistemas que captan pacientes, clientes y proyectos sin que vos levantes el teléfono.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:max-w-4xl lg:mx-auto gap-8">
            {/* Card 1 */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 hover:border-slate-600 transition-colors flex flex-col backdrop-blur-sm">
              <span className="text-3xl mb-4 block">🚀</span>
              <h3 className="text-xl font-bold text-white mb-2">Presencia Pro</h3>
              <p className="text-slate-400 text-sm mb-6 h-10">Tu marca profesional online con derivación directa a WhatsApp.</p>
              
              <div className="mb-8">
                <div className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-1">Setup Único</div>
                <div className="text-4xl font-black text-white mb-1"><span className="text-xl text-slate-500 mr-1">USD</span>$350</div>
              </div>

              <ul className="space-y-3 text-slate-300 text-sm mb-8 flex-1">
                <li className="flex gap-3"><span className="text-emerald-500 font-bold">✓</span> Landing page profesional</li>
                <li className="flex gap-3"><span className="text-emerald-500 font-bold">✓</span> Copywriting para tu servicio</li>
                <li className="flex gap-3"><span className="text-emerald-500 font-bold">✓</span> Rutas directas a tu WhatsApp</li>
                <li className="flex gap-3"><span className="text-emerald-500 font-bold">✓</span> Diseño optimizado móvil</li>
              </ul>
              
              <a href="https://wa.me/595985864209?text=Hola%20Oscar%2C%20soy%20profesional%20y%20me%20interesa%20Presencia%20Pro%20de%20USD%20%24350." target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-slate-800 hover:bg-slate-700 text-white font-bold py-3 rounded-xl transition-all mt-auto border border-slate-700 shadow-md">Solicitar Presencia Pro</a>
            </div>

            {/* Card 2 (Featured) */}
            <div className="bg-slate-950 border-2 border-emerald-500 rounded-3xl p-8 transform md:-translate-y-4 shadow-[0_0_50px_rgba(16,185,129,0.15)] relative flex flex-col">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-600 text-slate-950 text-xs font-black px-5 py-1.5 rounded-full uppercase tracking-widest whitespace-nowrap shadow-lg">Recomendado</div>
              <span className="text-3xl mb-4 block mt-2">🎯</span>
              <h3 className="text-xl font-bold text-white mb-2">Consultorio Digital</h3>
              <p className="text-slate-400 text-sm mb-6 h-10">Embudo completo con agenda, precalificación y cobros.</p>
              
              <div className="mb-8">
                <div className="text-xs text-emerald-500 font-bold uppercase tracking-widest mb-1">Setup Único</div>
                <div className="text-4xl font-black text-emerald-400 mb-1"><span className="text-xl text-emerald-600/50 mr-1">USD</span>$650</div>
              </div>

              <ul className="space-y-3 text-white font-medium text-sm mb-8 flex-1">
                <li className="flex gap-3"><span className="text-emerald-500 font-bold">✓</span> Todo lo de Presencia Pro</li>
                <li className="flex gap-3"><span className="text-emerald-500 font-bold">✓</span> Agenda de turnos automatizada</li>
                <li className="flex gap-3"><span className="text-emerald-500 font-bold">✓</span> Formularios de precalificación</li>
                <li className="flex gap-3"><span className="text-emerald-500 font-bold">✓</span> Sistemas de cobro integrados</li>
              </ul>
              
              <a href="https://wa.me/595985864209?text=Hola%20Oscar%2C%20soy%20profesional%20y%20me%20interesa%20el%20Consultorio%20Digital%20de%20USD%20%24650." target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-black py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] mt-auto">Quiero mi Sistema</a>
            </div>
          </div>

          {/* Mantenimiento Pro */}
          <div className="mt-8 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto backdrop-blur-md shadow-lg">
            <p className="text-slate-300 text-sm">🛡️ <strong className="text-white">SLA Profesional:</strong> Hosting, dominio, certificado de seguridad y soporte técnico.</p>
            <div className="font-black text-white text-xl bg-slate-950 px-5 py-2.5 rounded-xl border border-slate-700 whitespace-nowrap shadow-inner">$25 USD<span className="text-xs font-normal text-slate-500 ml-1">/mes</span></div>
          </div>
        </section>
      )}

      {/* GARANTÍA UNIVERSAL */}
      <section className="max-w-4xl mx-auto px-6 mt-32 relative z-10 mb-12">
        <div className="bg-slate-900/40 border border-slate-800 rounded-[2rem] p-8 md:p-12 text-center backdrop-blur-md relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-slate-600 to-transparent"></div>
          
          <span className="text-5xl block mb-6">🤝</span>
          <h3 className="text-2xl md:text-3xl font-black text-white mb-4">Nuestra política es simple.</h3>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Elegimos con quién trabajamos. Antes de arrancar, evaluamos si podemos generar impacto real en tu negocio. Si no estás conforme con el resultado o no somos el equipo correcto, te devolvemos el 100%.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-950/80 border border-slate-800 p-6 rounded-2xl shadow-inner">
              <div className="font-bold text-white mb-2">Pagás primero</div>
              <div className="text-sm text-slate-500">Reservá tu lugar. El compromiso es mutuo desde el día uno.</div>
            </div>
            <div className="bg-slate-950/80 border border-slate-800 p-6 rounded-2xl shadow-inner">
              <div className="font-bold text-white mb-2">30 días de garantía</div>
              <div className="text-sm text-slate-500">Si no funciona para ninguna de las partes, devolución total.</div>
            </div>
            <div className="bg-slate-950/80 border border-slate-800 p-6 rounded-2xl shadow-inner">
              <div className="font-bold text-white mb-2">Sin letra chica</div>
              <div className="text-sm text-slate-500">Cero sorpresas. Cero costos ocultos. Cero excusas.</div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
