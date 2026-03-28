import Link from "next/link";
import Image from "next/image";

export default function ServiciosPage() {
  const whatsappNumber = "595985864209";
  const whatsappMsg = encodeURIComponent("¡Hola Oscar! Vi sus soluciones en AYCweb y quiero agendar un diagnóstico para ver qué sistema necesita mi empresa.");

  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-blue-500 selection:text-white pb-24 md:pb-0">
      
      {/* 🛑 NAVEGACIÓN */}
      <nav className="flex justify-between items-center px-6 py-4 border-b border-zinc-900 bg-zinc-950/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-3">
          <Link href="/" className="flex items-center justify-center mt-1 md:mt-0 gap-2">
            <div className="w-8 h-8 relative flex items-center justify-center">
               <Image src="/logo-ayc.webp" alt="AYCweb Logo" width={32} height={32} className="object-contain" />
            </div>
            <span className="font-black text-2xl tracking-tighter text-white italic">AYCweb</span>
          </Link>
          <nav className="flex items-center justify-center gap-4 sm:gap-6 text-[12px] sm:text-sm font-semibold text-zinc-300 w-full md:w-auto pb-1 md:pb-0 flex-wrap">
            <Link href="/experiencia" className="hover:text-white transition-colors text-blue-400">Trayectoria B2G</Link>
            <span className="text-zinc-700 hidden sm:inline">|</span>
            <Link href="/casos" className="hover:text-white transition-colors">Casos Reales</Link>
            <Link href="/servicios" className="text-white font-bold">Sistemas SaaS</Link>
            <Link href="/sectores" className="hover:text-white transition-colors">Industrias</Link>
          </nav>
        </div>
      </nav>

      {/* 🚀 HERO SECTION: Posicionamiento */}
      <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 px-6 text-center overflow-hidden border-b border-zinc-900">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-900/30 text-blue-400 text-xs font-bold uppercase tracking-widest border border-blue-900/50 mb-6 shadow-inner">
            Ingeniería & Conversión
          </span>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter leading-[1.05] text-white">
            Dejá de comprar herramientas sueltas. <br/> <span className="text-blue-500">Implementá Ecosistemas.</span>
          </h1>
          <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            No somos una agencia tradicional que te vende una web y desaparece. Desarrollamos la infraestructura digital que tu empresa necesita para captar, cotizar y operar en automático.
          </p>
        </div>
      </section>

      {/* ⚙️ CORE OFFERINGS (Los 3 Pilares) */}
      <section className="py-24 bg-black border-b border-zinc-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Pilar 1: Captación */}
            <div className="bg-zinc-900/50 p-10 rounded-[2rem] border border-zinc-800 hover:border-blue-600/50 transition-colors group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl group-hover:bg-blue-600/20 transition-all"></div>
              <div className="w-14 h-14 bg-blue-950/50 text-blue-500 rounded-2xl flex items-center justify-center mb-8 border border-blue-900/50 shadow-inner">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
              </div>
              <h3 className="text-2xl font-black text-white mb-4">Captación & Ventas</h3>
              <p className="text-zinc-400 leading-relaxed mb-8">
                Cortá la fuga de clientes. Diseñamos embudos donde el usuario entra, entiende tu valor y es dirigido exactamente hacia el cierre comercial.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex gap-3 text-zinc-300 text-sm"><span className="text-blue-500 font-black">✓</span> Landings B2B de Alta Conversión</li>
                <li className="flex gap-3 text-zinc-300 text-sm"><span className="text-blue-500 font-black">✓</span> Embudos Digitales (Funnels)</li>
                <li className="flex gap-3 text-zinc-300 text-sm"><span className="text-blue-500 font-black">✓</span> Integración inteligente con WhatsApp</li>
              </ul>
            </div>

            {/* Pilar 2: Operativa */}
            <div className="bg-zinc-900/50 p-10 rounded-[2rem] border border-zinc-800 hover:border-emerald-600/50 transition-colors group relative overflow-hidden transform lg:-translate-y-4 shadow-2xl bg-gradient-to-b from-zinc-900 to-zinc-950">
               <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-600/10 rounded-full blur-2xl group-hover:bg-emerald-600/20 transition-all"></div>
              <div className="w-14 h-14 bg-emerald-950/50 text-emerald-500 rounded-2xl flex items-center justify-center mb-8 border border-emerald-900/50 shadow-inner">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
              </div>
              <h3 className="text-2xl font-black text-white mb-4">Automatización Operativa</h3>
              <p className="text-zinc-400 leading-relaxed mb-8">
                Dejá de hacer trabajo de robot. Sistematizamos tus procesos manuales para que coticés y documentés más rápido, con cero errores.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex gap-3 text-zinc-300 text-sm"><span className="text-emerald-500 font-black">✓</span> Cotizadores PDF Automáticos</li>
                <li className="flex gap-3 text-zinc-300 text-sm"><span className="text-emerald-500 font-black">✓</span> Formularios Inteligentes de Precalificación</li>
                <li className="flex gap-3 text-zinc-300 text-sm"><span className="text-emerald-500 font-black">✓</span> Generación de Contratos B2B</li>
              </ul>
            </div>

            {/* Pilar 3: A Medida */}
            <div className="bg-zinc-900/50 p-10 rounded-[2rem] border border-zinc-800 hover:border-purple-600/50 transition-colors group relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/10 rounded-full blur-2xl group-hover:bg-purple-600/20 transition-all"></div>
              <div className="w-14 h-14 bg-purple-950/50 text-purple-500 rounded-2xl flex items-center justify-center mb-8 border border-purple-900/50 shadow-inner">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              </div>
              <h3 className="text-2xl font-black text-white mb-4">Sistemas a Medida</h3>
              <p className="text-zinc-400 leading-relaxed mb-8">
                Ingeniería pura para cuellos de botella específicos. Desarrollamos herramientas en la nube exclusivas para la operativa de tu industria.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex gap-3 text-zinc-300 text-sm"><span className="text-purple-500 font-black">✓</span> Portales de Clientes (B2B/B2G)</li>
                <li className="flex gap-3 text-zinc-300 text-sm"><span className="text-purple-500 font-black">✓</span> Dashboards y Métricas en Tiempo Real</li>
                <li className="flex gap-3 text-zinc-300 text-sm"><span className="text-purple-500 font-black">✓</span> Paneles de Inventario a medida</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 🧩 MÓDULOS INYECTABLES (Mostrar tecnología pero orientada a beneficio) */}
      <section className="py-24 bg-zinc-950 border-b border-zinc-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Módulos Plug & Play</h2>
              <p className="text-zinc-400 leading-relaxed mb-8">
                Podemos comenzar con un Ecosistema de Entrada e ir inyectándole "módulos" a medida que tu empresa lo exija. Escalas a tu propio ritmo, sin pagar por cosas que aún no usás.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "CRM Ligero", "Pasarela de Pago Cripto/Fiat", "Catálogo Dinámico", "Cotizador en Vivo", "Sistema de Tickets", "Exportación a Excel/PDF"
                ].map((modulo, i) => (
                  <div key={i} className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl text-sm font-bold text-zinc-300 flex items-center gap-2 shadow-inner">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    {modulo}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Visualización de la Arquitectura */}
            <div className="w-full lg:w-1/2 relative">
               <div className="bg-zinc-900/80 border border-zinc-800 p-8 rounded-[2rem] shadow-2xl relative z-10">
                 <div className="flex items-center gap-4 mb-6 border-b border-zinc-800 pb-6">
                   <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white font-black text-xl shadow-lg">01</div>
                   <div>
                     <h4 className="text-white font-bold">Base Next.js (99/100)</h4>
                     <p className="text-xs text-zinc-500">Núcleo ultra-rápido</p>
                   </div>
                 </div>
                 <div className="flex items-center gap-4 mb-6 border-b border-zinc-800 pb-6 ml-6">
                   <div className="w-12 h-12 rounded-xl bg-emerald-500 flex items-center justify-center text-zinc-900 font-black text-xl shadow-lg">+</div>
                   <div>
                     <h4 className="text-white font-bold">Cotizador B2B</h4>
                     <p className="text-xs text-zinc-500">Módulo inyectado</p>
                   </div>
                 </div>
                 <div className="flex items-center gap-4 ml-12">
                   <div className="w-12 h-12 rounded-xl bg-[#25D366] flex items-center justify-center text-white font-black shadow-lg">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/></svg>
                   </div>
                   <div>
                     <h4 className="text-white font-bold">Cierre en WhatsApp</h4>
                     <p className="text-xs text-zinc-500">Destino final</p>
                   </div>
                 </div>
               </div>
               {/* Grid Decorativa */}
               <div className="absolute top-10 -right-10 w-full h-full border-2 border-dashed border-zinc-800 rounded-[2rem] -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 🚀 CTA FINAL */}
      <section className="py-24 bg-black text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Empecemos a ensamblar tu sistema.</h2>
          <p className="text-xl text-zinc-400 mb-10 leading-relaxed">
            Revisemos tu proceso comercial actual, encontremos los cuellos de botella y diseñemos la arquitectura digital exacta para resolverlos.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Link 
              href="/os" 
              className="bg-blue-600 hover:bg-blue-500 text-white font-black py-4 px-8 rounded-xl transition-all shadow-[0_0_30px_-5px_rgba(37,99,235,0.4)] active:scale-95"
            >
              Ver Planes de Implementación
            </Link>
            <a 
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
              target="_blank" rel="noopener noreferrer"
              className="bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-white font-bold py-4 px-8 rounded-xl transition-all flex items-center justify-center gap-2"
            >
              Agendar Diagnóstico Gratuito
            </a>
          </div>
        </div>
      </section>

      {/* STICKY CTA MOBILE */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-zinc-950/95 backdrop-blur-lg border-t border-zinc-800 p-4 z-50 shadow-[0_-20px_30px_-10px_rgba(0,0,0,0.7)]">
        <Link 
          href="/os" 
          className="w-full flex bg-blue-600 text-white font-black py-4 px-6 rounded-xl items-center justify-center text-lg active:scale-95 transition-transform shadow-[0_0_20px_rgba(37,99,235,0.4)]"
        >
          Ver Precios y Planes &rarr;
        </Link>
      </div>

    </div>
  );
}
