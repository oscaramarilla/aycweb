"use client";

import { useState } from "react";
import Link from "next/link";

export default function PreciosPage() {
  // Estado para controlar qué tier se muestra (empresa o profesional)
  const [tier, setTier] = useState<"empresa" | "profesional">("empresa");

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans pb-24 pt-12 md:pt-20">
      
      {/* HERO & SELECTOR */}
      <section className="max-w-4xl mx-auto px-6 text-center mb-16 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>
        
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/50 text-xs font-bold uppercase tracking-widest text-zinc-300">
          ◆ Arquitectura de Precios
        </div>
        <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter text-white leading-tight">
          Inversión clara.<br />Retorno operativo medible.
        </h1>
        <p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-12">
          Sistemas empaquetados sin costos ocultos. Elegí tu perfil y encontrá la infraestructura exacta que necesita tu operación.
        </p>

        {/* TOGGLE BUTTONS */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-2xl mx-auto">
          <button 
            onClick={() => setTier("empresa")}
            className={`flex-1 p-6 rounded-2xl border-2 transition-all text-left relative overflow-hidden ${
              tier === "empresa" 
                ? "border-blue-500 bg-blue-900/10 shadow-[0_0_30px_rgba(37,99,235,0.15)]" 
                : "border-zinc-800 bg-zinc-900/50 hover:bg-zinc-800"
            }`}
          >
            <span className="text-3xl mb-3 block">🏭</span>
            <div className="font-bold text-lg text-white mb-1">Empresa / Razón Social</div>
            <div className="text-xs text-zinc-400">Manufactureras, clínicas, agroindustria, hospitales.</div>
          </button>

          <button 
            onClick={() => setTier("profesional")}
            className={`flex-1 p-6 rounded-2xl border-2 transition-all text-left relative overflow-hidden ${
              tier === "profesional" 
                ? "border-emerald-500 bg-emerald-900/10 shadow-[0_0_30px_rgba(16,185,129,0.15)]" 
                : "border-zinc-800 bg-zinc-900/50 hover:bg-zinc-800"
            }`}
          >
            <span className="text-3xl mb-3 block">🧑‍⚕️</span>
            <div className="font-bold text-lg text-white mb-1">Profesional Independiente</div>
            <div className="text-xs text-zinc-400">Médicos, abogados, contadores, consultores.</div>
          </button>
        </div>
      </section>

      {/* ================= TIER EMPRESA ================= */}
      {tier === "empresa" && (
        <section className="max-w-6xl mx-auto px-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="text-center mb-12">
            <span className="text-blue-500 text-xs font-bold tracking-widest uppercase bg-blue-500/10 px-3 py-1 rounded-full mb-4 inline-block">Tier Empresarial</span>
            <h2 className="text-3xl font-black text-white mb-4">Infraestructura para operaciones complejas</h2>
            <p className="text-zinc-400">Motores que reemplazan procesos manuales enteros y recuperan horas-hombre cada semana.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 hover:border-zinc-600 transition-colors flex flex-col">
              <span className="text-3xl mb-4 block">⚡</span>
              <h3 className="text-xl font-bold text-white mb-2">Motor Comercial Base</h3>
              <p className="text-zinc-400 text-sm mb-6 h-10">Presencia corporativa con embudo de captación B2B integrado.</p>
              
              <div className="mb-8">
                <div className="text-xs text-zinc-500 font-bold uppercase tracking-widest mb-1">Setup Único</div>
                <div className="text-4xl font-black text-white mb-1"><span className="text-xl text-zinc-500 mr-1">USD</span>$850</div>
                <div className="text-xs text-zinc-500">Gs. 6.500.000 aprox.</div>
              </div>

              <ul className="space-y-3 text-zinc-300 text-sm mb-8 flex-1">
                <li className="flex gap-3"><span className="text-blue-500 font-bold">✓</span> Web corporativa multi-sección</li>
                <li className="flex gap-3"><span className="text-blue-500 font-bold">✓</span> Copywriting B2B de conversión</li>
                <li className="flex gap-3"><span className="text-blue-500 font-bold">✓</span> Embudo B2B con precalificación</li>
                <li className="flex gap-3"><span className="text-blue-500 font-bold">✓</span> Arquitectura PageSpeed 95+</li>
              </ul>
              
              <div className="text-xs text-zinc-500 italic mb-6 border-t border-zinc-800 pt-4">
                Ideal para: empresas que necesitan presencia profesional y captar leads de forma ordenada.
              </div>
              <a href="https://wa.me/595985864209?text=Hola%20Oscar%2C%20soy%20empresa%20y%20me%20interesa%20el%20Motor%20Comercial%20Base%20de%20USD%20%24850.%20%C2%BFPodemos%20coordinar%3F" target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-zinc-800 hover:bg-zinc-700 text-white font-bold py-3 rounded-xl transition-all mt-auto border border-zinc-700">Solicitar Motor Base</a>
            </div>

            {/* Card 2 (Featured) */}
            <div className="bg-black border-2 border-blue-600 rounded-3xl p-8 transform md:-translate-y-4 shadow-[0_0_40px_rgba(37,99,235,0.15)] relative flex flex-col">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-widest whitespace-nowrap">Más Elegido</div>
              <span className="text-3xl mb-4 block mt-2">🔧</span>
              <h3 className="text-xl font-bold text-white mb-2">Infraestructura Operativa</h3>
              <p className="text-zinc-400 text-sm mb-6 h-10">Automatización de cotizaciones, PDFs y lógica comercial a medida.</p>
              
              <div className="mb-8">
                <div className="text-xs text-blue-400 font-bold uppercase tracking-widest mb-1">Desde</div>
                <div className="text-4xl font-black text-blue-400 mb-1"><span className="text-xl text-blue-500/50 mr-1">USD</span>$1.500</div>
                <div className="text-xs text-zinc-500">Gs. 11.500.000 aprox.</div>
              </div>

              <ul className="space-y-3 text-white font-medium text-sm mb-8 flex-1">
                <li className="flex gap-3"><span className="text-blue-500 font-bold">✓</span> Todo lo del Motor Base</li>
                <li className="flex gap-3"><span className="text-blue-500 font-bold">✓</span> Cotizador dinámico interactivo</li>
                <li className="flex gap-3"><span className="text-blue-500 font-bold">✓</span> Generación automática de PDFs</li>
                <li className="flex gap-3"><span className="text-blue-500 font-bold">✓</span> Lógica de negocio personalizada</li>
              </ul>
              
              <div className="text-xs text-zinc-400 italic mb-6 border-t border-zinc-800 pt-4">
                Ideal para: empresas que cotizan en Excel o arman contratos manuales.
              </div>
              <a href="https://wa.me/595985864209?text=Hola%20Oscar%2C%20soy%20empresa%20y%20me%20interesa%20la%20Infraestructura%20Operativa%20desde%20USD%20%241.500.%20Quiero%20agendar%20una%20auditor%C3%ADa." target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-xl transition-all shadow-lg mt-auto">Agendar Auditoría</a>
            </div>

            {/* Card 3 */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 hover:border-zinc-600 transition-colors flex flex-col">
              <span className="text-3xl mb-4 block">🏗️</span>
              <h3 className="text-xl font-bold text-white mb-2">Custom / Consultoría</h3>
              <p className="text-zinc-400 text-sm mb-6 h-10">Portales, dashboards, conexión con ERPs y sistemas legados.</p>
              
              <div className="mb-8">
                <div className="text-xs text-zinc-500 font-bold uppercase tracking-widest mb-1">Inversión</div>
                <div className="text-3xl font-black text-white mb-1">A medida</div>
                <div className="text-xs text-zinc-500">Cotización tras auditoría</div>
              </div>

              <ul className="space-y-3 text-zinc-300 text-sm mb-8 flex-1">
                <li className="flex gap-3"><span className="text-blue-500 font-bold">✓</span> Dashboards de control interno</li>
                <li className="flex gap-3"><span className="text-blue-500 font-bold">✓</span> Portales de clientes/proveedores</li>
                <li className="flex gap-3"><span className="text-blue-500 font-bold">✓</span> Conexión con APIs y ERPs</li>
                <li className="flex gap-3"><span className="text-blue-500 font-bold">✓</span> Soporte y mantenimiento dedicado</li>
              </ul>
              
              <div className="text-xs text-zinc-500 italic mb-6 border-t border-zinc-800 pt-4">
                Ideal para: operaciones con requerimientos técnicos o integraciones complejas.
              </div>
              <a href="https://wa.me/595985864209?text=Hola%20Oscar%2C%20necesito%20una%20infraestructura%20custom%20para%20mi%20empresa.%20%C2%BFPodemos%20agendar%20una%20consultor%C3%ADa%20t%C3%A9cnica%3F" target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-zinc-800 hover:bg-zinc-700 text-white font-bold py-3 rounded-xl transition-all mt-auto border border-zinc-700">Agendar Consultoría</a>
            </div>
          </div>

          <div className="mt-8 bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
            <p className="text-zinc-400 text-sm">🛡️ <strong className="text-white">Mantenimiento & Estabilidad:</strong> Hosting enterprise, dominio, backups y soporte técnico continuo.</p>
            <div className="font-black text-white text-xl bg-black px-4 py-2 rounded-xl border border-zinc-800 whitespace-nowrap">$25 USD<span className="text-sm font-normal text-zinc-500">/mes</span></div>
          </div>
        </section>
      )}

      {/* ================= TIER PROFESIONAL ================= */}
      {tier === "profesional" && (
        <section className="max-w-6xl mx-auto px-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="text-center mb-12">
            <span className="text-emerald-500 text-xs font-bold tracking-widest uppercase bg-emerald-500/10 px-3 py-1 rounded-full mb-4 inline-block">Tier Profesional</span>
            <h2 className="text-3xl font-black text-white mb-4">Tu consultorio trabaja por vos</h2>
            <p className="text-zinc-400">Sistemas que captan pacientes, clientes y proyectos sin que vos levantes el teléfono.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 hover:border-zinc-600 transition-colors flex flex-col">
              <span className="text-3xl mb-4 block">🚀</span>
              <h3 className="text-xl font-bold text-white mb-2">Presencia Pro</h3>
              <p className="text-zinc-400 text-sm mb-6 h-10">Tu marca profesional online con derivación directa a WhatsApp.</p>
              
              <div className="mb-8">
                <div className="text-xs text-zinc-500 font-bold uppercase tracking-widest mb-1">Setup Único</div>
                <div className="text-4xl font-black text-white mb-1"><span className="text-xl text-zinc-500 mr-1">USD</span>$75</div>
                <div className="text-xs text-zinc-500">Gs. 580.000 aprox.</div>
              </div>

              <ul className="space-y-3 text-zinc-300 text-sm mb-8 flex-1">
                <li className="flex gap-3"><span className="text-emerald-500 font-bold">✓</span> Landing page profesional (1 pág)</li>
                <li className="flex gap-3"><span className="text-emerald-500 font-bold">✓</span> Copywriting para tu servicio</li>
                <li className="flex gap-3"><span className="text-emerald-500 font-bold">✓</span> Rutas directas a tu WhatsApp</li>
                <li className="flex gap-3"><span className="text-emerald-500 font-bold">✓</span> Entrega en 48 horas</li>
              </ul>
              
              <div className="text-xs text-zinc-500 italic mb-6 border-t border-zinc-800 pt-4">
                Ideal para: profesionales que necesitan presencia online inmediata.
              </div>
              <a href="https://wa.me/595985864209?text=Hola%20Oscar%2C%20soy%20profesional%20independiente%20y%20me%20interesa%20Presencia%20Pro%20de%20USD%20%2475.%20%C2%BFPodemos%20coordinar%3F" target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-zinc-800 hover:bg-zinc-700 text-white font-bold py-3 rounded-xl transition-all mt-auto border border-zinc-700">Solicitar Presencia Pro</a>
            </div>

            {/* Card 2 (Featured) */}
            <div className="bg-black border-2 border-emerald-600 rounded-3xl p-8 transform md:-translate-y-4 shadow-[0_0_40px_rgba(16,185,129,0.15)] relative flex flex-col">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-600 text-black text-xs font-bold px-4 py-1 rounded-full uppercase tracking-widest whitespace-nowrap">Recomendado</div>
              <span className="text-3xl mb-4 block mt-2">🎯</span>
              <h3 className="text-xl font-bold text-white mb-2">Sistema de Captación</h3>
              <p className="text-zinc-400 text-sm mb-6 h-10">Embudo completo con prueba social y cierre directo.</p>
              
              <div className="mb-8">
                <div className="text-xs text-emerald-500 font-bold uppercase tracking-widest mb-1">Setup Único</div>
                <div className="text-4xl font-black text-emerald-400 mb-1"><span className="text-xl text-emerald-600/50 mr-1">USD</span>$200</div>
                <div className="text-xs text-zinc-500">Gs. 1.500.000 aprox.</div>
              </div>

              <ul className="space-y-3 text-white font-medium text-sm mb-8 flex-1">
                <li className="flex gap-3"><span className="text-emerald-500 font-bold">✓</span> Todo lo de Presencia Pro</li>
                <li className="flex gap-3"><span className="text-emerald-500 font-bold">✓</span> Sección de prueba social y métricas</li>
                <li className="flex gap-3"><span className="text-emerald-500 font-bold">✓</span> FAQ operativo contra objeciones</li>
                <li className="flex gap-3"><span className="text-emerald-500 font-bold">✓</span> SEO on-page para tu especialidad</li>
              </ul>
              
              <div className="text-xs text-zinc-400 italic mb-6 border-t border-zinc-800 pt-4">
                Ideal para: profesionales que quieren captar clientes/pacientes de forma constante.
              </div>
              <a href="https://wa.me/595985864209?text=Hola%20Oscar%2C%20soy%20profesional%20independiente%20y%20me%20interesa%20el%20Sistema%20de%20Captaci%C3%B3n%20de%20USD%20%24200.%20Quiero%20saber%20m%C3%A1s." target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-emerald-600 hover:bg-emerald-500 text-black font-bold py-3 rounded-xl transition-all shadow-lg mt-auto">Quiero mi Sistema</a>
            </div>

            {/* Card 3 */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 hover:border-zinc-600 transition-colors flex flex-col">
              <span className="text-3xl mb-4 block">⚙️</span>
              <h3 className="text-xl font-bold text-white mb-2">Automatización Pro</h3>
              <p className="text-zinc-400 text-sm mb-6 h-10">Formularios inteligentes y base para CRM.</p>
              
              <div className="mb-8">
                <div className="text-xs text-zinc-500 font-bold uppercase tracking-widest mb-1">Setup Único</div>
                <div className="text-4xl font-black text-white mb-1"><span className="text-xl text-zinc-500 mr-1">USD</span>$340</div>
                <div className="text-xs text-zinc-500">Gs. 2.500.000 aprox.</div>
              </div>

              <ul className="space-y-3 text-zinc-300 text-sm mb-8 flex-1">
                <li className="flex gap-3"><span className="text-emerald-500 font-bold">✓</span> Todo lo de Sistema de Captación</li>
                <li className="flex gap-3"><span className="text-emerald-500 font-bold">✓</span> Formularios de precalificación</li>
                <li className="flex gap-3"><span className="text-emerald-500 font-bold">✓</span> Integración base para CRM futuro</li>
                <li className="flex gap-3"><span className="text-emerald-500 font-bold">✓</span> Reportes de leads y métricas</li>
              </ul>
              
              <div className="text-xs text-zinc-500 italic mb-6 border-t border-zinc-800 pt-4">
                Ideal para: profesionales que manejan volumen de consultas y necesitan filtrar.
              </div>
              <a href="https://wa.me/595985864209?text=Hola%20Oscar%2C%20soy%20profesional%20independiente%20y%20me%20interesa%20la%20Automatizaci%C3%B3n%20Profesional%20de%20USD%20%24340.%20Quiero%20agendar." target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-zinc-800 hover:bg-zinc-700 text-white font-bold py-3 rounded-xl transition-all mt-auto border border-zinc-700">Solicitar Automatización</a>
            </div>
          </div>

          <div className="mt-8 bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
            <p className="text-zinc-400 text-sm">🛡️ <strong className="text-white">Mantenimiento & Estabilidad:</strong> Hosting, dominio, backups y soporte técnico continuo.</p>
            <div className="font-black text-white text-xl bg-black px-4 py-2 rounded-xl border border-zinc-800 whitespace-nowrap">$15 USD<span className="text-sm font-normal text-zinc-500">/mes</span></div>
          </div>
        </section>
      )}

      {/* GARANTÍA UNIVERSAL */}
      <section className="max-w-4xl mx-auto px-6 mt-24">
        <div className="bg-gradient-to-br from-blue-900/10 to-emerald-900/10 border border-zinc-800 rounded-[2rem] p-8 md:p-12 text-center">
          <span className="text-5xl block mb-4">🤝</span>
          <h3 className="text-2xl md:text-3xl font-black text-white mb-4">Nuestra política es simple.</h3>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Elegimos con quién trabajamos. Antes de arrancar, evaluamos si podemos generar impacto real en tu negocio. Si no estás conforme con el resultado o no somos el equipo correcto, te devolvemos el 100%.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-zinc-950/50 border border-zinc-800 p-6 rounded-2xl">
              <div className="font-bold text-white mb-2">Pagás primero</div>
              <div className="text-sm text-zinc-500">Reservá tu lugar. El compromiso es mutuo desde el día uno.</div>
            </div>
            <div className="bg-zinc-950/50 border border-zinc-800 p-6 rounded-2xl">
              <div className="font-bold text-white mb-2">30 días de garantía</div>
              <div className="text-sm text-zinc-500">Si no funciona para ninguna de las dos partes, devolución total.</div>
            </div>
            <div className="bg-zinc-950/50 border border-zinc-800 p-6 rounded-2xl">
              <div className="font-bold text-white mb-2">Sin letra chica</div>
              <div className="text-sm text-zinc-500">Cero sorpresas. Cero costos ocultos. Cero excusas.</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="text-center mt-24 px-6">
        <h2 className="text-2xl md:text-4xl font-black text-white mb-6">¿No sabés qué plan necesitás?</h2>
        <p className="text-zinc-400 text-lg max-w-xl mx-auto mb-8">
          Hablemos 10 minutos. Nos contás dónde se traba tu operación y te decimos exactamente qué arquitectura te conviene.
        </p>
        <Link 
          href="https://wa.me/595985864209?text=%C2%A1Hola%20Oscar!%20Estoy%20en%20la%20p%C3%A1gina%20de%20precios%20y%20quiero%20asesor%C3%ADa%20para%20elegir%20la%20infraestructura%20correcta."
          target="_blank"
          className="inline-block bg-white text-black font-black py-4 px-8 rounded-xl hover:bg-zinc-200 transition-all active:scale-95"
        >
          Agendar Diagnóstico Gratuito &rarr;
        </Link>
      </section>

    </div>
  );
}
