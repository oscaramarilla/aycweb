"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { AYCWEB_CONTACT } from "@/lib/config/contact";

export default function Home() {
  const { t } = useLanguage();
  const whatsappNumber = AYCWEB_CONTACT.whatsappNumber;
  const whatsappMsgDiagnostico = encodeURIComponent(AYCWEB_CONTACT.globalMessages.diagnosis);
  const whatsappMsgCustom = encodeURIComponent("¡Hola Oscar! Quiero agendar una consultoría para cotizar una infraestructura a medida para mi empresa.");

  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 text-zinc-50 font-sans relative overflow-x-hidden">
      
      {/* BLOQUE 1: EL HERO (God Spot Universal y Filtrado) */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 px-6 overflow-hidden border-b border-zinc-900">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
        
        <div className="max-w-6xl mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-blue-900/50 bg-blue-950/30 text-xs font-bold uppercase tracking-widest text-blue-300 shadow-inner">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              Infraestructura Digital B2B
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tighter leading-[1.05] text-white">
              Automatizamos tu empresa para que <span className="text-blue-500">vendas más y pierdas menos dinero.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-zinc-400 mb-4 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
              Sistemas web, cotizadores y embudos que convierten procesos manuales lentos en ventas rápidas y ordenadas.
            </p>
            {/* El Filtro Claro */}
            <p className="text-sm font-bold text-zinc-500 mb-10 max-w-2xl mx-auto lg:mx-0">
              Para industrias, clínicas, empresas B2B y operaciones que ya venden pero pierden margen en procesos manuales.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <a 
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMsgDiagnostico}`}
                target="_blank" rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-500 text-white font-black py-4 px-8 rounded-xl transition-all shadow-[0_0_30px_-5px_rgba(37,99,235,0.4)] active:scale-95 flex items-center justify-center gap-2"
              >
                Auditar mi proceso gratis 
                <span className="text-xl">👉</span>
              </a>
              <a 
                href="#precios"
                className="bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-white font-bold py-4 px-8 rounded-xl transition-all flex items-center justify-center"
              >
                Ver Inversión y Paquetes
              </a>
            </div>

            {/* Micro-prueba debajo del CTA */}
            <div className="mt-6 flex items-center justify-center lg:justify-start gap-2 text-xs font-bold text-zinc-600 uppercase tracking-widest">
               <span>✓ Casos en Industria</span>
               <span>•</span>
               <span>✓ Salud</span>
               <span>•</span>
               <span>✓ Corp</span>
            </div>
          </div>

          <div className="flex-1 w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[340px] mx-auto relative mt-8 lg:mt-0">
            <div className="aspect-[9/16] w-full rounded-[2rem] border-[6px] border-zinc-900 bg-black p-1 shadow-[0_0_60px_-15px_rgba(37,99,235,0.3)] relative overflow-hidden transform lg:rotate-2 hover:rotate-0 transition-transform duration-500 group">
              <div className="w-full h-full rounded-2xl overflow-hidden bg-zinc-950 relative">
                <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] z-10"></div>
                {/* Lazy Load del Iframe Celular */}
                <iframe 
                  className="absolute top-0 left-0 w-full h-full object-cover scale-[1.02] bg-zinc-900"
                  src="https://www.youtube.com/embed/NsDqXlJra5g?autoplay=1&mute=1&loop=1&playlist=NsDqXlJra5g&controls=0&modestbranding=1" 
                  srcdoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/NsDqXlJra5g?autoplay=1><img src=https://img.youtube.com/vi/NsDqXlJra5g/hqdefault.jpg alt='Demo Video'><span>▶</span></a>"
                  title="Demo Sistema AYCweb" 
                  frameBorder="0" 
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-2 sm:-left-6 bg-emerald-500 text-black font-black text-xs px-4 py-2 rounded-xl shadow-lg transform -rotate-6 border-2 border-zinc-950 z-20">
              Ventas 24/7 💸
            </div>
            <div className="absolute top-10 -right-2 sm:-right-6 bg-zinc-900 border border-zinc-800 text-white font-bold text-xs px-3 py-2 rounded-xl shadow-lg transform rotate-3 z-20">
              Cero Excel Rotos
            </div>
          </div>

        </div>
      </section>

      {/* BLOQUE 2: EL DOLOR DEL CLIENTE Y EL PUENTE */}
      <section className="py-20 bg-black border-b border-zinc-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">¿Te suena familiar este caos?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-red-950/10 border border-red-900/20 p-8 rounded-3xl hover:bg-red-950/20 transition-colors">
              <div className="text-4xl mb-4">⏳</div>
              <h3 className="text-xl font-bold text-white mb-3">Cotizaciones lentas</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">Tardar horas en armar un presupuesto en Excel significa perder al cliente frente a un competidor más rápido.</p>
            </div>
            <div className="bg-red-950/10 border border-red-900/20 p-8 rounded-3xl hover:bg-red-950/20 transition-colors">
              <div className="text-4xl mb-4">❌</div>
              <h3 className="text-xl font-bold text-white mb-3">Errores de cálculo</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">Usar plantillas viejas, copiar mal los datos y terminar cobrando mal el IVA o perdiendo margen de ganancia.</p>
            </div>
            <div className="bg-red-950/10 border border-red-900/20 p-8 rounded-3xl hover:bg-red-950/20 transition-colors">
              <div className="text-4xl mb-4">📵</div>
              <h3 className="text-xl font-bold text-white mb-3">Fugas los fines de semana</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">El viernes tu empresa se apaga. Los leads que escriben un sábado se enfrían para cuando respondés el lunes.</p>
            </div>
          </div>
          
          {/* El Puente */}
          <div className="text-center bg-blue-950/20 border border-blue-900/30 p-6 rounded-2xl max-w-3xl mx-auto">
             <p className="text-blue-400 font-bold text-lg">Si te pasa una de estas tres, no necesitás más esfuerzo de tu equipo:<br/> <span className="text-white">Necesitás infraestructura digital.</span></p>
          </div>
        </div>
      </section>

      {/* BLOQUE 3: MÉTRICAS (Reordenadas: Negocio -> Técnica -> Legal) */}
      <section className="py-10 bg-zinc-950 border-b border-zinc-900 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 text-center divide-zinc-800 md:divide-x">
            <div className="px-4">
              <p className="text-3xl font-black text-white mb-1">+15</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Sistemas B2B Activos</p>
            </div>
            <div className="px-4 hidden md:block">
              <p className="text-3xl font-black text-white mb-1">99<span className="text-blue-500 text-lg">/100</span></p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Arquitectura Optimizada</p>
            </div>
            <div className="px-4">
              <p className="text-3xl font-black text-white mb-1">RUC</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Operación Formal en PY</p>
            </div>
          </div>
        </div>
      </section>

      {/* BLOQUE 4: DEMO (Rebautizado: Motores operativos en acción) */}
      <section className="py-24 bg-black border-b border-zinc-900 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-emerald-950/30 border border-emerald-900/50 px-3 py-1 rounded-full text-[10px] font-bold text-emerald-400 mb-6 uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> Motores operativos en acción
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                Ejemplo 1: Cotizador logístico complejo en 45 segundos.
              </h2>
              <p className="text-zinc-400 text-lg mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Este es solo un ejemplo de cómo reemplazamos Excel. Construimos calculadoras conectadas a la lógica de tu negocio. El operador ingresa los datos clave y el sistema ensambla un contrato PDF formal al instante.
              </p>
              <Link href="/casos" className="inline-flex items-center gap-3 bg-zinc-800 hover:bg-zinc-700 text-white font-bold py-4 px-8 rounded-xl transition-all">
                Ver casos en Clínicas y Corporativo &rarr;
              </Link>
            </div>
            
            {/* Lazy Load del Iframe Logístico */}
            <div className="flex-1 w-full max-w-[280px] sm:max-w-[320px] mx-auto relative flex justify-center lg:justify-end">
              <div className="aspect-[9/16] w-full rounded-2xl border border-zinc-800 bg-black p-2 shadow-[0_0_50px_rgba(16,185,129,0.15)] relative overflow-hidden transform md:-rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="w-full h-full rounded-xl overflow-hidden bg-zinc-900">
                  <iframe 
                    className="w-full h-full bg-zinc-900"
                    src="https://www.youtube.com/embed/n1xOvGtHsIA?autoplay=1&mute=1&loop=1&playlist=n1xOvGtHsIA&controls=0" 
                    srcdoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/n1xOvGtHsIA?autoplay=1><img src=https://img.youtube.com/vi/n1xOvGtHsIA/hqdefault.jpg alt='Demo Video'><span>▶</span></a>"
                    title="Demo Cotizador AYCweb" 
                    frameBorder="0" 
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* BLOQUE 5: ECOSISTEMAS (Renombrados) */}
      <section className="py-24 bg-zinc-950 border-b border-zinc-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Dejá de comprar herramientas sueltas.</h2>
            <p className="text-zinc-400 text-lg">Implementá ecosistemas comerciales.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black p-8 rounded-3xl border border-zinc-800 hover:border-blue-900 transition-colors flex flex-col h-full shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-3">Captación & Ventas</h3>
              <p className="text-zinc-500 mb-6 text-sm flex-grow">Embudos B2B, precalificación automática y rutas directas a tu WhatsApp corporativo.</p>
            </div>
            <div className="bg-black p-8 rounded-3xl border border-zinc-800 hover:border-emerald-900 transition-colors flex flex-col h-full shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-3">Cotización & Automatización</h3>
              <p className="text-zinc-500 mb-6 text-sm flex-grow">Motores de cálculo, cotizadores dinámicos y emisión de PDFs en segundos sin tocar Excel.</p>
            </div>
            <div className="bg-black p-8 rounded-3xl border border-zinc-800 hover:border-purple-900 transition-colors flex flex-col h-full shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-3">Sistemas a Medida</h3>
              <p className="text-zinc-500 mb-6 text-sm flex-grow">Para procesos internos, portales de proveedores y control de métricas centralizado.</p>
            </div>
          </div>
        </div>
      </section>

      {/* BLOQUE 6: CASO METAL MAD (Bullets escaneables) */}
      <section className="py-24 bg-black border-b border-zinc-900">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-white">No vendemos humo. Construimos motores.</h2>
          </div>
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600/10 rounded-full blur-[80px] pointer-events-none"></div>
            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center gap-2 bg-zinc-950 border border-zinc-800 px-3 py-1 rounded-full text-[10px] font-bold text-zinc-400 mb-6 uppercase tracking-widest">
                  <span className="text-emerald-500">✓</span> Caso de Estudio: Industria
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-white mb-6 leading-tight">
                  Automatización del Departamento Comercial
                </h3>
                <ul className="text-zinc-400 mb-8 space-y-3 text-sm text-left inline-block w-full">
                  <li className="flex gap-3"><span className="text-red-500">❌</span> <strong>Antes:</strong> Dependencia de Excel y tiempos muertos.</li>
                  <li className="flex gap-3"><span className="text-emerald-500">✅</span> <strong>Después:</strong> Cálculo estandarizado y PDF automático.</li>
                  <li className="flex gap-3"><span className="text-blue-500">🚀</span> <strong>Impacto:</strong> 45 segundos y -98% tiempo administrativo.</li>
                </ul>
                <Link href="/casos" className="inline-flex items-center justify-center gap-2 text-white font-bold bg-zinc-800 hover:bg-zinc-700 py-3 px-6 rounded-xl transition-all w-full md:w-auto">
                  Ver detalle técnico &rarr;
                </Link>
              </div>
              <div className="w-full md:w-1/3 bg-black border border-zinc-800 rounded-2xl p-6 text-center shadow-inner">
                 <p className="text-5xl md:text-6xl font-black text-emerald-500 mb-2">-98%</p>
                 <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">Tiempo Operativo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOQUE 7: HISTORIA (Corta y credencial) */}
      <section className="py-20 bg-zinc-950 border-b border-zinc-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-blue-500 text-5xl mb-6 block">⚒️</span>
          <h2 className="text-2xl md:text-3xl font-black text-white mb-6">
            No nacimos en una agencia de diseño.
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-8">
            Nacimos resolviendo caos real en el barro de la manufactura, la logística y las licitaciones. Construimos el software porque necesitábamos sobrevivir a la operación.
          </p>
          <Link href="/experiencia" className="text-blue-400 font-bold hover:underline">
            Conocé nuestra historia operativa &rarr;
          </Link>
        </div>
      </section>

      {/* BLOQUE 8: PRECIOS (Renombrados como Puntos de Entrada y Precios Escalados) */}
      <section id="precios" className="py-24 bg-zinc-950 border-b border-zinc-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Inversión transparente</h2>
            <p className="text-zinc-400 text-lg">Soluciones empaquetadas para escalar sin presupuestos sorpresa.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Nivel 1 */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 hover:border-zinc-600 transition-colors flex flex-col">
              <h3 className="text-xl font-bold text-white mb-2">Diagnóstico MVP</h3>
              <p className="text-4xl font-black text-emerald-400 mb-2">$280 <span className="text-lg text-zinc-500 font-medium">USD</span></p>
              <p className="text-zinc-500 text-sm mb-6 border-b border-zinc-800 pb-6"><strong className="text-white">Ideal para:</strong> Clínicas o servicios que necesitan captar y derivar leads rápido.</p>
              <ul className="space-y-4 text-zinc-300 text-sm mb-8 flex-1">
                <li className="flex gap-3"><span className="text-emerald-500">✓</span> Landing B2B persuasiva</li>
                <li className="flex gap-3"><span className="text-emerald-500">✓</span> Derivación a WhatsApp</li>
                <li className="flex gap-3"><span className="text-emerald-500">✓</span> Arquitectura SEO On-Page</li>
              </ul>
              <Link href="/precios" className="block w-full text-center bg-zinc-800 hover:bg-zinc-700 text-white font-bold py-3 rounded-xl transition-all mt-auto">Ver Entregables</Link>
            </div>

            {/* Nivel 2 */}
            <div className="bg-black border-2 border-blue-600 rounded-3xl p-8 transform md:-translate-y-4 shadow-[0_0_40px_rgba(37,99,235,0.15)] relative flex flex-col">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-widest whitespace-nowrap">
                Más Elegido
              </div>
              <h3 className="text-xl font-bold text-white mb-2 mt-2">Motor Operativo Base</h3>
              <p className="text-4xl font-black text-blue-400 mb-2"><span className="text-2xl text-blue-500 font-medium mr-1">desde</span>$850 <span className="text-lg text-zinc-500 font-medium">USD</span></p>
              <p className="text-zinc-500 text-sm mb-6 border-b border-zinc-800 pb-6"><strong className="text-white">Ideal para:</strong> Empresas que cotizan en Excel o generan contratos manuales.</p>
              <ul className="space-y-4 text-white font-medium text-sm mb-8 flex-1">
                <li className="flex gap-3"><span className="text-blue-500">✓</span> Todo lo del MVP</li>
                <li className="flex gap-3"><span className="text-blue-500">✓</span> Cotizador Dinámico Interactivo</li>
                <li className="flex gap-3"><span className="text-blue-500">✓</span> Generación de PDFs formales</li>
              </ul>
              <Link href="/precios" className="block w-full text-center bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-xl transition-all shadow-lg mt-auto">Elegir y Avanzar</Link>
            </div>

            {/* Nivel 3 */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 hover:border-zinc-600 transition-colors flex flex-col">
              <h3 className="text-xl font-bold text-white mb-2">Infraestructura Custom</h3>
              <p className="text-3xl font-black text-violet-400 mb-2">A Medida</p>
              <p className="text-zinc-500 text-sm mb-6 border-b border-zinc-800 pb-6"><strong className="text-white">Ideal para:</strong> Portales de clientes, bases de datos o conexión con ERPs.</p>
              <ul className="space-y-4 text-zinc-300 text-sm mb-8 flex-1">
                <li className="flex gap-3"><span className="text-violet-500">✓</span> Dashboards de control interno</li>
                <li className="flex gap-3"><span className="text-violet-500">✓</span> Conexión con APIs externas</li>
                <li className="flex gap-3"><span className="text-violet-500">✓</span> Mantenimiento dedicado</li>
              </ul>
              <a href={`https://wa.me/${whatsappNumber}?text=${whatsappMsgCustom}`} target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-zinc-800 hover:bg-zinc-700 text-white font-bold py-3 rounded-xl transition-all mt-auto">Agendar Consultoría</a>
            </div>
          </div>
        </div>
      </section>

      {/* BLOQUE 9: CIERRE FINAL DIRECTO AL MARGEN */}
      <section className="py-24 bg-black text-center relative overflow-hidden border-t border-zinc-900">
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Si hoy tardás en cotizar o responder, ya sabés dónde se fuga tu margen.</h2>
          <p className="text-zinc-400 text-lg mb-10 max-w-xl mx-auto">
            Hablemos 10 minutos. Nos contás dónde se traba tu operación, y te decimos exactamente qué arquitectura de software necesitas para destrabarla hoy.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <a 
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMsgDiagnostico}`}
              target="_blank" rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-black font-black py-4 px-10 rounded-xl transition-all shadow-[0_0_30px_rgba(16,185,129,0.3)] active:scale-95"
            >
              Agendar Diagnóstico
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}

