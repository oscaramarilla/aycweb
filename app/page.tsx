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
      
      {/* CAPA 1: EL HERO EN EL "GOD SPOT" (Reingeniería de Conversión) */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 px-6 overflow-hidden border-b border-zinc-900">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
        
        <div className="max-w-6xl mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          
          {/* IZQUIERDA: La Promesa Comercial (Resultado > Herramienta) */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-blue-900/50 bg-blue-950/30 text-xs font-bold uppercase tracking-widest text-blue-300 shadow-inner">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              Infraestructura B2B en Paraguay
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tighter leading-[1.05] text-white">
              Automatizamos tu empresa para que <span className="text-blue-500">vendas más y pierdas menos dinero.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
              Sistemas web, cotizadores y embudos B2B que convierten procesos manuales lentos en ventas rápidas y ordenadas. Dejá de perder clientes por tardar en responder.
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

            {/* Micro-prueba social para dar urgencia */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 text-sm font-bold text-zinc-500">
               <div className="flex -space-x-2">
                 <div className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-900 flex items-center justify-center text-xs">🏭</div>
                 <div className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-900 flex items-center justify-center text-xs">🏥</div>
                 <div className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-900 flex items-center justify-center text-xs">🏗️</div>
               </div>
               <p className="text-center sm:text-left">Optimizamos operaciones en industria, salud y logística.</p>
            </div>
          </div>

          {/* DERECHA: EL "GOD SPOT" (Video Nuevo Embebido como Celular) */}
          <div className="flex-1 w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[340px] mx-auto relative mt-8 lg:mt-0">
            <div className="aspect-[9/16] w-full rounded-[2rem] border-[6px] border-zinc-900 bg-black p-1 shadow-[0_0_60px_-15px_rgba(37,99,235,0.3)] relative overflow-hidden transform lg:rotate-2 hover:rotate-0 transition-transform duration-500 group">
              <div className="w-full h-full rounded-2xl overflow-hidden bg-zinc-950 relative">
                <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] z-10"></div>
                <iframe 
                  className="absolute top-0 left-0 w-full h-full object-cover scale-[1.02]"
                  src="https://www.youtube.com/embed/NsDqXlJra5g?autoplay=1&mute=1&loop=1&playlist=NsDqXlJra5g&controls=0&modestbranding=1" 
                  title="Demo Sistema AYCweb" 
                  frameBorder="0" 
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

      {/* CAPA 1.5: EL DOLOR DEL CLIENTE */}
      <section className="py-20 bg-black border-b border-zinc-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">¿Te suena familiar este caos?</h2>
            <p className="text-zinc-400 text-lg">Si estás perdiendo plata, es porque tu operación depende 100% de humanos y tareas repetitivas.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-red-950/10 border border-red-900/20 p-8 rounded-3xl hover:bg-red-950/20 transition-colors">
              <div className="text-4xl mb-4">⏳</div>
              <h3 className="text-xl font-bold text-white mb-3">Cotizaciones lentas</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">Tardar horas o días en armar un presupuesto en Excel significa perder al cliente frente a un competidor más rápido.</p>
            </div>
            <div className="bg-red-950/10 border border-red-900/20 p-8 rounded-3xl hover:bg-red-950/20 transition-colors">
              <div className="text-4xl mb-4">❌</div>
              <h3 className="text-xl font-bold text-white mb-3">Errores de cálculo</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">Tus vendedores usan plantillas viejas, copian mal los datos y terminan cobrando mal el IVA o perdiendo margen de ganancia.</p>
            </div>
            <div className="bg-red-950/10 border border-red-900/20 p-8 rounded-3xl hover:bg-red-950/20 transition-colors">
              <div className="text-4xl mb-4">📵</div>
              <h3 className="text-xl font-bold text-white mb-3">Fugas los fines de semana</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">El viernes a las 18hs tu empresa se apaga. Los leads que te escriben un sábado se enfrían para cuando les respondés el lunes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CAPA 2.5: DEMO DE INFRAESTRUCTURA (Posicionamiento Multidominio) */}
      <section className="py-24 bg-zinc-950 border-b border-zinc-900 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-emerald-950/30 border border-emerald-900/50 px-3 py-1 rounded-full text-[10px] font-bold text-emerald-400 mb-6 uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> Así funciona nuestra infraestructura
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                Ejemplo real: De un Excel roto a un contrato en 45 segundos.
              </h2>
              <p className="text-zinc-400 text-lg mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Ya sea que cotices fletes logísticos, tratamientos médicos complejos o desarrollos inmobiliarios, construimos calculadoras conectadas a la lógica de tu negocio. Tu equipo ingresa los datos y el sistema ensambla un PDF formal al instante.
              </p>
              <Link href="/casos" className="inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-black font-black py-4 px-8 rounded-xl transition-all shadow-[0_0_30px_rgba(16,185,129,0.3)] active:scale-95">
                Ver más casos B2B resueltos &rarr;
              </Link>
            </div>
            
            {/* EL VIDEO DE LA DEMO LOGÍSTICA (Como ejemplo, no como única oferta) */}
            <div className="flex-1 w-full max-w-[280px] sm:max-w-[320px] mx-auto relative flex justify-center lg:justify-end">
              <div className="aspect-[9/16] w-full rounded-2xl border border-zinc-800 bg-black p-2 shadow-[0_0_50px_rgba(16,185,129,0.15)] relative overflow-hidden transform md:-rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="w-full h-full rounded-xl overflow-hidden bg-zinc-900">
                  <iframe 
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/n1xOvGtHsIA?autoplay=1&mute=1&loop=1&playlist=n1xOvGtHsIA&controls=0" 
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

      {/* CAPA 3: ECOSISTEMAS */}
      <section className="py-24 bg-zinc-900/30 border-b border-zinc-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">{t("ecoTitle")}</h2>
            <p className="text-zinc-400 text-lg">{t("ecoSub")}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black p-8 rounded-3xl border border-zinc-800 hover:border-blue-900 transition-colors flex flex-col h-full shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-3">{t("eco1Title")}</h3>
              <p className="text-zinc-500 mb-6 text-sm flex-grow">{t("eco1Desc")}</p>
              <Link href="/servicios#captacion" className="text-blue-500 text-sm font-bold hover:underline mt-auto">{t("eco1Link")}</Link>
            </div>
            <div className="bg-black p-8 rounded-3xl border border-zinc-800 hover:border-emerald-900 transition-colors flex flex-col h-full shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-3">{t("eco2Title")}</h3>
              <p className="text-zinc-500 mb-6 text-sm flex-grow">{t("eco2Desc")}</p>
              <Link href="/servicios#operativa" className="text-emerald-500 text-sm font-bold hover:underline mt-auto">{t("eco2Link")}</Link>
            </div>
            <div className="bg-black p-8 rounded-3xl border border-zinc-800 hover:border-purple-900 transition-colors flex flex-col h-full shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-3">{t("eco3Title")}</h3>
              <p className="text-zinc-500 mb-6 text-sm flex-grow">{t("eco3Desc")}</p>
              <Link href="/servicios#medida" className="text-purple-500 text-sm font-bold hover:underline mt-auto">{t("eco3Link")}</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CAPA 5.5: TABLA DE PRECIOS B2B (ELEVANDO EL TICKET PREMIUM) */}
      <section id="precios" className="py-24 bg-zinc-950 border-b border-zinc-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Inversión transparente</h2>
            <p className="text-zinc-400 text-lg">Desarrollo paquetizado para escalar sin costos ocultos ni presupuestos sorpresa.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Básica -> Ahora es nivel Medio/Entrada */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 hover:border-zinc-600 transition-colors flex flex-col">
              <h3 className="text-xl font-bold text-white mb-2">Embudo B2B</h3>
              <p className="text-4xl font-black text-emerald-400 mb-2">$280 <span className="text-lg text-zinc-500 font-medium">USD</span></p>
              <p className="text-zinc-500 text-sm mb-6 border-b border-zinc-800 pb-6">Setup en 5 días hábiles.</p>
              <ul className="space-y-4 text-zinc-300 text-sm mb-8 flex-1">
                <li className="flex gap-3"><span className="text-emerald-500">✓</span> Landing page persuasiva B2B</li>
                <li className="flex gap-3"><span className="text-emerald-500">✓</span> Derivación inteligente a WhatsApp</li>
                <li className="flex gap-3"><span className="text-emerald-500">✓</span> Integración de pasarela / QR</li>
                <li className="flex gap-3"><span className="text-emerald-500">✓</span> Arquitectura SEO On-Page</li>
              </ul>
              <Link href="/precios" className="block w-full text-center bg-zinc-800 hover:bg-zinc-700 text-white font-bold py-3 rounded-xl transition-all mt-auto">Ver Plan Completo</Link>
            </div>

            {/* Pro (Destacado) -> El Motor */}
            <div className="bg-black border-2 border-blue-600 rounded-3xl p-8 transform md:-translate-y-4 shadow-[0_0_40px_rgba(37,99,235,0.15)] relative flex flex-col">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-widest whitespace-nowrap">
                Más Elegido
              </div>
              <h3 className="text-xl font-bold text-white mb-2 mt-2">Motor Operativo</h3>
              <p className="text-4xl font-black text-blue-400 mb-2"><span className="text-2xl text-blue-500 font-medium mr-1">desde</span>$850 <span className="text-lg text-zinc-500 font-medium">USD</span></p>
              <p className="text-zinc-500 text-sm mb-6 border-b border-zinc-800 pb-6">Setup en 2 a 3 semanas.</p>
              <ul className="space-y-4 text-white font-medium text-sm mb-8 flex-1">
                <li className="flex gap-3"><span className="text-blue-500">✓</span> Todo lo del Embudo B2B</li>
                <li className="flex gap-3"><span className="text-blue-500">✓</span> Cotizador Dinámico Interactivo</li>
                <li className="flex gap-3"><span className="text-blue-500">✓</span> Generación de PDFs y Contratos</li>
                <li className="flex gap-3"><span className="text-blue-500">✓</span> Cálculos lógicos a medida</li>
              </ul>
              <Link href="/precios" className="block w-full text-center bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-xl transition-all shadow-lg mt-auto">Elegir y Avanzar</Link>
            </div>

            {/* Avanzada -> Consultoría Enterprise */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 hover:border-zinc-600 transition-colors flex flex-col">
              <h3 className="text-xl font-bold text-white mb-2">Infraestructura Custom</h3>
              <p className="text-3xl font-black text-violet-400 mb-2">A Medida</p>
              <p className="text-zinc-500 text-sm mb-6 border-b border-zinc-800 pb-6">Desarrollo SaaS o Portales.</p>
              <ul className="space-y-4 text-zinc-300 text-sm mb-8 flex-1">
                <li className="flex gap-3"><span className="text-violet-500">✓</span> Portales de clientes y proveedores</li>
                <li className="flex gap-3"><span className="text-violet-500">✓</span> Dashboards de métricas internos</li>
                <li className="flex gap-3"><span className="text-violet-500">✓</span> Conexión con ERPs y APIs externas</li>
                <li className="flex gap-3"><span className="text-violet-500">✓</span> Mantenimiento dedicado</li>
              </ul>
              <a href={`https://wa.me/${whatsappNumber}?text=${whatsappMsgCustom}`} target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-zinc-800 hover:bg-zinc-700 text-white font-bold py-3 rounded-xl transition-all mt-auto">Agendar Consultoría</a>
            </div>
          </div>
        </div>
      </section>

      {/* CAPA 6: CIERRE PREFILTRADO */}
      <section className="py-24 bg-black text-center relative overflow-hidden border-t border-zinc-900">
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <p className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-4">{t("cierrePre")}</p>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">{t("cierreTitle")}</h2>
          <p className="text-zinc-400 text-lg mb-10 max-w-xl mx-auto">
            Hablemos 10 minutos. Nos contás dónde se traba tu operación, y te decimos exactamente qué arquitectura de software necesitas para destrabarla.
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
