"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { AYCWEB_CONTACT } from "@/lib/config/contact";

export default function Home() {
  const { t } = useLanguage();
  const whatsappNumber = AYCWEB_CONTACT.whatsappNumber;
  const whatsappMsgDiagnostico = encodeURIComponent(AYCWEB_CONTACT.globalMessages.diagnosis);

  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 text-zinc-50 font-sans relative overflow-x-hidden">
      
      {/* CAPA 1: EL HERO EN EL "GOD SPOT" (Reingeniería de Conversión) */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 px-6 overflow-hidden border-b border-zinc-900">
        {/* Glow de fondo */}
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
            {/* Marco del celular / reproductor */}
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
            
            {/* Etiquetas de resultado */}
            <div className="absolute -bottom-4 -left-2 sm:-left-6 bg-emerald-500 text-black font-black text-xs px-4 py-2 rounded-xl shadow-lg transform -rotate-6 border-2 border-zinc-950 z-20">
              Ventas 24/7 💸
            </div>
            <div className="absolute top-10 -right-2 sm:-right-6 bg-zinc-900 border border-zinc-800 text-white font-bold text-xs px-3 py-2 rounded-xl shadow-lg transform rotate-3 z-20">
              Cero Excel Rotos
            </div>
          </div>

        </div>
      </section>

      {/* CAPA 1.5: EL DOLOR DEL CLIENTE (NUEVA SECCIÓN) */}
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

      {/* CAPA 2: PRUEBA RÁPIDA (Estadísticas) */}
      <section className="py-10 bg-zinc-950 border-b border-zinc-900 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 text-center divide-zinc-800 md:divide-x">
            <div className="px-4">
              <p className="text-3xl font-black text-white mb-1">+15</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">{t("statsActivos")}</p>
            </div>
            <div className="px-4 hidden md:block">
              <p className="text-3xl font-black text-white mb-1">99<span className="text-blue-500 text-lg">/100</span></p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">{t("statsSpeed")}</p>
            </div>
            <div className="px-4">
              <p className="text-3xl font-black text-white mb-1">RUC</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">{t("statsRUC")}</p>
            </div>
            <div className="px-4">
              <p className="text-sm font-bold text-zinc-300 mb-1 flex items-center gap-2 justify-center">
                <span className="text-blue-500">■</span> Industria <span className="text-emerald-500 ml-2">■</span> Salud
              </p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">{t("statsSectores")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CAPA 2.5: DEMO LOGÍSTICA (EL VIDEO VIEJO) */}
      <section className="py-24 bg-black border-b border-zinc-900 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-emerald-950/30 border border-emerald-900/50 px-3 py-1 rounded-full text-[10px] font-bold text-emerald-400 mb-6 uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> Motor Logístico B2B
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                Cotizaciones complejas en 45 segundos.
              </h2>
              <p className="text-zinc-400 text-lg mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Construimos calculadoras conectadas a APIs en tiempo real (como el combustible Petropar). Tu operador solo ingresa los datos clave y el sistema ensambla un contrato PDF formal sin tocar Excel.
              </p>
              <Link href="/flete" className="inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-black font-black py-4 px-8 rounded-xl transition-all shadow-[0_0_30px_rgba(16,185,129,0.3)] active:scale-95">
                Probar el Motor Logístico &rarr;
              </Link>
            </div>
            
            {/* EL OTRO VIDEO (FLETES) */}
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
      <section className="py-24 bg-zinc-950 border-b border-zinc-900">
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

      {/* CAPA 4: CASOS */}
      <section className="py-24 bg-black border-b border-zinc-900">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-white">{t("casoPre")}</h2>
          </div>
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600/10 rounded-full blur-[80px] pointer-events-none"></div>
            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center gap-2 bg-zinc-950 border border-zinc-800 px-3 py-1 rounded-full text-[10px] font-bold text-zinc-400 mb-6 uppercase tracking-widest">
                  <span className="text-emerald-500">✓</span> {t("casoBadge")}
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-white mb-4 leading-tight">
                  {t("casoQuote")}
                </h3>
                <p className="text-zinc-400 mb-8">
                  {t("casoDesc")}
                </p>
                <Link href="/casos" className="inline-flex items-center justify-center gap-2 text-white font-bold bg-zinc-800 hover:bg-zinc-700 py-3 px-6 rounded-xl transition-all w-full md:w-auto">
                  {t("casoLink")}
                </Link>
              </div>
              <div className="w-full md:w-1/3 bg-black border border-zinc-800 rounded-2xl p-6 text-center shadow-inner">
                 <p className="text-5xl md:text-6xl font-black text-emerald-500 mb-2">-98%</p>
                 <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">{t("casoMetric")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAPA 5: AUTORIDAD */}
      <section className="py-24 bg-zinc-950 border-b border-zinc-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-blue-500 text-6xl mb-6 block">⚒️</span>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
            {t("autTitle")}
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-8">
            {t("autDesc")}
          </p>
          <Link href="/experiencia" className="text-blue-400 font-bold hover:underline">
            {t("autLink")}
          </Link>
        </div>
      </section>

      {/* CAPA 5.5: TABLA DE PRECIOS B2B */}
      <section id="precios" className="py-24 bg-zinc-950 border-b border-zinc-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Inversión transparente</h2>
            <p className="text-zinc-400 text-lg">Soluciones empaquetadas. Sin costos de agencia ocultos.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Básica */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 hover:border-zinc-600 transition-colors flex flex-col">
              <h3 className="text-xl font-bold text-white mb-2">MVP Starter</h3>
              <p className="text-4xl font-black text-emerald-400 mb-2">$75 <span className="text-lg text-zinc-500 font-medium">USD</span></p>
              <p className="text-zinc-500 text-sm mb-6 border-b border-zinc-800 pb-6">Entrega en 48hs.</p>
              <ul className="space-y-4 text-zinc-300 text-sm mb-8 flex-1">
                <li className="flex gap-3"><span className="text-emerald-500">✓</span> Landing B2B (1 pág)</li>
                <li className="flex gap-3"><span className="text-emerald-500">✓</span> Enlaces a WhatsApp</li>
                <li className="flex gap-3"><span className="text-emerald-500">✓</span> QR de Pago integrado</li>
              </ul>
              <Link href="/precios" className="block w-full text-center bg-zinc-800 hover:bg-zinc-700 text-white font-bold py-3 rounded-xl transition-all mt-auto">Ver Plan Completo</Link>
            </div>

            {/* Pro (Destacado) */}
            <div className="bg-black border-2 border-blue-600 rounded-3xl p-8 transform md:-translate-y-4 shadow-[0_0_40px_rgba(37,99,235,0.15)] relative flex flex-col">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-widest whitespace-nowrap">
                Estándar B2B
              </div>
              <h3 className="text-xl font-bold text-white mb-2 mt-2">Infraestructura Flash</h3>
              <p className="text-4xl font-black text-blue-400 mb-2">$200 <span className="text-lg text-zinc-500 font-medium">USD</span></p>
              <p className="text-zinc-500 text-sm mb-6 border-b border-zinc-800 pb-6">Setup en 72hs.</p>
              <ul className="space-y-4 text-white font-medium text-sm mb-8 flex-1">
                <li className="flex gap-3"><span className="text-blue-500">✓</span> Todo lo del MVP</li>
                <li className="flex gap-3"><span className="text-blue-500">✓</span> Arquitectura PageSpeed 95+</li>
                <li className="flex gap-3"><span className="text-blue-500">✓</span> Copy B2B y Prueba Social</li>
              </ul>
              <Link href="/precios" className="block w-full text-center bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-xl transition-all shadow-lg mt-auto">Elegir y Avanzar</Link>
            </div>

            {/* Avanzada */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 hover:border-zinc-600 transition-colors flex flex-col">
              <h3 className="text-xl font-bold text-white mb-2">Motor Operativo</h3>
              <p className="text-4xl font-black text-violet-400 mb-2">$340 <span className="text-lg text-zinc-500 font-medium">USD</span></p>
              <p className="text-zinc-500 text-sm mb-6 border-b border-zinc-800 pb-6">Setup en 1 semana.</p>
              <ul className="space-y-4 text-zinc-300 text-sm mb-8 flex-1">
                <li className="flex gap-3"><span className="text-violet-500">✓</span> Todo lo de Flash</li>
                <li className="flex gap-3"><span className="text-violet-500">✓</span> Flujos de precalificación</li>
                <li className="flex gap-3"><span className="text-violet-500">✓</span> Base para CRM</li>
              </ul>
              <Link href="/precios" className="block w-full text-center bg-zinc-800 hover:bg-zinc-700 text-white font-bold py-3 rounded-xl transition-all mt-auto">Ver Plan Completo</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CAPA 6: CIERRE PREFILTRADO */}
      <section className="py-24 bg-black text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <p className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-4">{t("cierrePre")}</p>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">{t("cierreTitle")}</h2>
          <p className="text-zinc-400 text-lg mb-10 max-w-xl mx-auto">
            {t("cierreDesc")}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <a 
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMsgDiagnostico}`}
              target="_blank" rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-black font-black py-4 px-10 rounded-xl transition-all shadow-[0_0_30px_rgba(16,185,129,0.3)] active:scale-95"
            >
              {t("cierreBtn1")}
            </a>
            <Link href="/precios" className="bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-white font-bold py-4 px-10 rounded-xl transition-all">
              {t("cierreBtn2")}
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
