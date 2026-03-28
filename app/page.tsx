import Link from "next/link";

export default function Home() {
  const whatsappNumber = "595985864209";
  const whatsappMsg = encodeURIComponent("¡Hola Oscar! Quiero agendar una sesión de diagnóstico para automatizar mi empresa.");

  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 text-zinc-50">
      
      {/* 1. HERO POTENTE */}
      <section className="relative pt-20 pb-20 md:pt-32 md:pb-24 px-6 text-center overflow-hidden border-b border-zinc-900">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-blue-900/50 bg-blue-950/30 text-sm font-semibold text-blue-300 shadow-inner">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            Ingeniería Comercial & Automatización
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter leading-[1.05] text-white">
            Diseño sistemas digitales que <span className="text-blue-500">venden, ordenan y aceleran</span> empresas.
          </h1>
          <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            No hago "sitios web bonitos". Construyo activos digitales (cotizadores, embudos, paneles) que convierten procesos manuales y desordenados en máquinas comerciales 24/7.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
              target="_blank" rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-500 text-white font-black py-4 px-8 rounded-xl transition-all shadow-[0_0_30px_-5px_rgba(37,99,235,0.4)] active:scale-95"
            >
              Agendar Diagnóstico Gratuito
            </a>
            <Link 
              href="/os" 
              className="bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-white font-bold py-4 px-8 rounded-xl transition-all"
            >
              Ver Sistema "Máquina 24/7"
            </Link>
          </div>
        </div>
      </section>

      {/* 2. PRUEBA RÁPIDA (Authority Bar) */}
      <section className="py-12 bg-black border-b border-zinc-900">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-center text-sm font-bold uppercase tracking-widest text-zinc-600 mb-8">
            Sistemas desarrollados operando en:
          </p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-zinc-400 font-medium text-sm md:text-base">
            <span className="flex items-center gap-2"><span className="text-blue-500">■</span> Industria B2B</span>
            <span className="flex items-center gap-2"><span className="text-emerald-500">■</span> Salud & Odontología</span>
            <span className="flex items-center gap-2"><span className="text-orange-500">■</span> Gastronomía</span>
            <span className="flex items-center gap-2"><span className="text-purple-500">■</span> Educación</span>
            <span className="flex items-center gap-2"><span className="text-zinc-300">■</span> Corporativo B2G</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <Link href="/casos" className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-2xl hover:bg-zinc-900 hover:border-blue-900/50 transition-colors group cursor-pointer block">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-500 mb-2 block">Industria Metalúrgica</span>
              <h3 className="text-lg font-black text-white mb-2 group-hover:text-blue-400 transition-colors">Metal Mad E.A.S.</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4">De presupuestos manuales de 2 horas a un cotizador PDF automático de 3 minutos.</p>
              <span className="text-blue-500 text-xs font-bold group-hover:underline">Ver caso &rarr;</span>
            </Link>

            <Link href="/casos" className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-2xl hover:bg-zinc-900 hover:border-purple-900/50 transition-colors group cursor-pointer block">
              <span className="text-xs font-bold uppercase tracking-widest text-purple-500 mb-2 block">Salud & Estética</span>
              <h3 className="text-lg font-black text-white mb-2 group-hover:text-purple-400 transition-colors">Dra. Bianca</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4">De depender de Instagram a un ecosistema de agendamiento 24/7 directo a WhatsApp.</p>
              <span className="text-purple-500 text-xs font-bold group-hover:underline">Ver caso &rarr;</span>
            </Link>

            <Link href="/casos" className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-2xl hover:bg-zinc-900 hover:border-emerald-900/50 transition-colors group cursor-pointer block">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-500 mb-2 block">Legal & Operativa</span>
              <h3 className="text-lg font-black text-white mb-2 group-hover:text-emerald-400 transition-colors">Automatización AYC</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4">Reducción total de fricción administrativa mediante generador de contratos dinámicos B2B.</p>
              <span className="text-emerald-500 text-xs font-bold group-hover:underline">Ver caso &rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. ARQUITECTURA DE SERVICIOS */}
      <section className="py-24 bg-zinc-900/30 border-b border-zinc-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Ecosistemas a tu medida</h2>
            <p className="text-zinc-400">No te vendemos herramientas sueltas. Implementamos soluciones modulares.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-zinc-950 p-8 rounded-3xl border border-zinc-800 hover:border-blue-900 transition-colors">
              <h3 className="text-2xl font-bold text-white mb-3">Captación & Ventas</h3>
              <p className="text-zinc-500 mb-6 text-sm">Sistemas para traer, filtrar y convertir leads en clientes calificados.</p>
              <ul className="space-y-3 text-sm text-zinc-300 mb-6">
                <li className="flex gap-2"><span className="text-blue-500">✔</span> Embudos digitales (Funnels)</li>
                <li className="flex gap-2"><span className="text-blue-500">✔</span> Landings de alta conversión</li>
              </ul>
              <Link href="/servicios" className="text-blue-500 text-sm font-bold hover:underline">Ver detalles &rarr;</Link>
            </div>
            
            <div className="bg-zinc-950 p-8 rounded-3xl border border-zinc-800 hover:border-emerald-900 transition-colors">
              <h3 className="text-2xl font-bold text-white mb-3">Operativa Automática</h3>
              <p className="text-zinc-500 mb-6 text-sm">Sistemas para ahorrar horas de trabajo manual y reducir errores.</p>
              <ul className="space-y-3 text-sm text-zinc-300 mb-6">
                <li className="flex gap-2"><span className="text-emerald-500">✔</span> Cotizadores PDF Automáticos</li>
                <li className="flex gap-2"><span className="text-emerald-500">✔</span> Emisión de contratos</li>
              </ul>
              <Link href="/servicios" className="text-emerald-500 text-sm font-bold hover:underline">Ver detalles &rarr;</Link>
            </div>

            <div className="bg-zinc-950 p-8 rounded-3xl border border-zinc-800 hover:border-purple-900 transition-colors">
              <h3 className="text-2xl font-bold text-white mb-3">Herramientas a Medida</h3>
              <p className="text-zinc-500 mb-6 text-sm">Ingeniería de software para resolver cuellos de botella de tu industria.</p>
              <ul className="space-y-3 text-sm text-zinc-300 mb-6">
                <li className="flex gap-2"><span className="text-purple-500">✔</span> Portales de clientes B2B</li>
                <li className="flex gap-2"><span className="text-purple-500">✔</span> Dashboards de control</li>
              </ul>
              <Link href="/servicios" className="text-purple-500 text-sm font-bold hover:underline">Ver detalles &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. EL DOLOR (Problema del cliente) */}
      <section className="py-24 bg-zinc-950 border-b border-zinc-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-8">¿Dónde estás perdiendo dinero hoy?</h2>
          <div className="bg-zinc-900/50 p-8 rounded-3xl border border-zinc-800 text-left space-y-6">
            <p className="text-zinc-300 text-lg flex gap-4 items-start">
              <span className="text-red-500 font-bold">✕</span> 
              <span>Tus consultas por WhatsApp se enfrían porque no hay un sistema que filtre y responda al instante.</span>
            </p>
            <p className="text-zinc-300 text-lg flex gap-4 items-start">
              <span className="text-red-500 font-bold">✕</span> 
              <span>Tu equipo pierde horas redactando presupuestos o contratos manualmente, cometiendo errores.</span>
            </p>
            <div className="pt-6 border-t border-zinc-800 mt-6 text-center md:text-left">
              <p className="text-white font-bold text-xl">Lo que yo hago es convertir ese proceso manual en un sistema digital simple: <span className="text-blue-400">captar, ordenar, automatizar y acelerar.</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA FINAL */}
      <section className="py-24 bg-black text-center relative overflow-hidden">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Dependé menos del caos manual.</h2>
          <p className="text-xl text-zinc-400 mb-10 leading-relaxed">
            Te implemento una máquina digital para que tu empresa capte mejor, responda más rápido y convierta más, incluso fuera del horario comercial.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <a 
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
              target="_blank" rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-500 text-white font-black py-4 px-8 rounded-xl transition-all shadow-lg active:scale-95"
            >
              Hablemos de tu proceso actual
            </a>
            <Link 
              href="/os" 
              className="bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-emerald-400 font-bold py-4 px-8 rounded-xl transition-all flex items-center justify-center gap-2"
            >
              Ver Máquina Digital 24/7 &rarr;
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
