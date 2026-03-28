import Link from "next/link";

export default function ServiciosPage() {
  const whatsappNumber = "595985864209";
  const whatsappMsg = encodeURIComponent("¡Hola! Vi sus soluciones en AYCweb y quiero agendar un diagnóstico.");

  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 text-zinc-50 font-sans pb-24 md:pb-0">
      
      <section className="relative pt-16 pb-16 md:pt-28 md:pb-24 px-6 text-center overflow-hidden border-b border-zinc-900">
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

      {/* CORE OFFERINGS */}
      <section className="py-24 bg-black border-b border-zinc-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-zinc-900/50 p-10 rounded-[2rem] border border-zinc-800">
              <h3 className="text-2xl font-black text-white mb-4">Captación & Ventas</h3>
              <p className="text-zinc-400 leading-relaxed mb-8">Cortá la fuga de clientes. Embudos donde el usuario entiende tu valor y es dirigido al cierre.</p>
              <ul className="space-y-4 mb-8">
                <li className="flex gap-3 text-zinc-300 text-sm"><span className="text-blue-500 font-black">✓</span> Landings B2B de Alta Conversión</li>
                <li className="flex gap-3 text-zinc-300 text-sm"><span className="text-blue-500 font-black">✓</span> Integración inteligente con WhatsApp</li>
              </ul>
            </div>
            <div className="bg-zinc-900/50 p-10 rounded-[2rem] border border-zinc-800 transform lg:-translate-y-4 shadow-2xl bg-gradient-to-b from-zinc-900 to-zinc-950">
              <h3 className="text-2xl font-black text-white mb-4">Automatización Operativa</h3>
              <p className="text-zinc-400 leading-relaxed mb-8">Sistematizamos tus procesos manuales para que coticés y documentés más rápido, con cero errores.</p>
              <ul className="space-y-4 mb-8">
                <li className="flex gap-3 text-zinc-300 text-sm"><span className="text-emerald-500 font-black">✓</span> Cotizadores PDF Automáticos</li>
                <li className="flex gap-3 text-zinc-300 text-sm"><span className="text-emerald-500 font-black">✓</span> Generación de Contratos B2B</li>
              </ul>
            </div>
            <div className="bg-zinc-900/50 p-10 rounded-[2rem] border border-zinc-800">
              <h3 className="text-2xl font-black text-white mb-4">Sistemas a Medida</h3>
              <p className="text-zinc-400 leading-relaxed mb-8">Ingeniería pura para cuellos de botella específicos. Herramientas en la nube exclusivas.</p>
              <ul className="space-y-4 mb-8">
                <li className="flex gap-3 text-zinc-300 text-sm"><span className="text-purple-500 font-black">✓</span> Portales de Clientes (B2B/B2G)</li>
                <li className="flex gap-3 text-zinc-300 text-sm"><span className="text-purple-500 font-black">✓</span> Dashboards de Control</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 🔥 PUNTO 8: MÓDULOS (Texto suavizado) */}
      <section className="py-24 bg-zinc-950 border-b border-zinc-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Módulos Plug & Play</h2>
              <p className="text-zinc-400 leading-relaxed mb-8">Comenzá con un Ecosistema de Entrada e inyectale "módulos" a medida que tu empresa escale.</p>
            </div>
            <div className="w-full lg:w-1/2 relative">
               <div className="bg-zinc-900/80 border border-zinc-800 p-8 rounded-[2rem] shadow-2xl relative z-10">
                 <div className="flex items-center gap-4 mb-6 border-b border-zinc-800 pb-6">
                   <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white font-black text-xl shadow-lg">01</div>
                   <div>
                     <h4 className="text-white font-bold">Arquitectura web optimizada</h4>
                     <p className="text-xs text-zinc-500">Núcleo preparado para conversión</p>
                   </div>
                 </div>
                 <div className="flex items-center gap-4 border-b border-zinc-800 pb-6 ml-6 mb-6">
                   <div className="w-12 h-12 rounded-xl bg-emerald-500 flex items-center justify-center text-zinc-900 font-black text-xl shadow-lg">+</div>
                   <div>
                     <h4 className="text-white font-bold">Cotizador B2B</h4>
                     <p className="text-xs text-zinc-500">Módulo inyectado</p>
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-black text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Empecemos a ensamblar tu sistema.</h2>
          <div className="flex justify-center mt-8">
            <a 
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
              target="_blank" rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-500 text-white font-black py-4 px-10 rounded-xl transition-all shadow-lg active:scale-95"
            >
              Agendar Diagnóstico
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
