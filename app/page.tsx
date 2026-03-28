import Link from "next/link";

export default function Home() {
  const whatsappNumber = "595985864209";
  // Pitch corto y directo para el primer contacto
  const whatsappMsg = encodeURIComponent("Hola Oscar. Vi tu enfoque de sistemas digitales orientados a ventas y quiero ver cómo aplicarlo en mi empresa.");

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* 1. HERO POTENTE: El nuevo posicionamiento premium */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 px-6 text-center overflow-hidden border-b border-zinc-900">
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
              Agendar Diagnóstico Comercial
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

      {/* 2. EL DIFERENCIAL (Ingeniería + Marketing + Ventas) */}
      <section className="py-20 bg-zinc-950 border-b border-zinc-900">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-black mb-6 text-zinc-300">Un enfoque diferente al de la agencia común.</h2>
          <p className="text-lg text-zinc-500 max-w-3xl mx-auto leading-relaxed">
            Soy Oscar Amarilla. Mi enfoque no es solo escribir código. Combino <strong>pensamiento de ingeniería, estrategia de marketing y lógica de conversión</strong>. Antes de programar una herramienta, analizo cómo encajará en tu proceso operativo para asegurar que realmente te ahorre tiempo y genere retorno.
          </p>
        </div>
      </section>

      {/* 3. PAQUETES CLAROS (No herramientas sueltas, sino soluciones) */}
      <section className="py-24 bg-zinc-900/30 border-b border-zinc-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Ecosistemas a tu medida</h2>
            <p className="text-zinc-400">Dejamos de vender herramientas sueltas. Implementamos soluciones completas.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Paquete A: Captación */}
            <div className="bg-zinc-950 p-8 rounded-3xl border border-zinc-800 hover:border-blue-900 transition-colors">
              <div className="w-12 h-12 bg-blue-950/50 text-blue-500 rounded-xl flex items-center justify-center mb-6 border border-blue-900/50">
                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Captación & Ventas</h3>
              <p className="text-zinc-400 mb-6 text-sm leading-relaxed">Sistemas diseñados para traer, filtrar y convertir leads fríos en clientes calificados.</p>
              <ul className="space-y-3 text-sm text-zinc-300">
                <li className="flex gap-2"><span className="text-blue-500">✔</span> Embudos digitales (Funnels)</li>
                <li className="flex gap-2"><span className="text-blue-500">✔</span> Landings de alta conversión</li>
                <li className="flex gap-2"><span className="text-blue-500">✔</span> Integración inteligente con WhatsApp</li>
              </ul>
            </div>
            {/* Paquete B: Automatización Documental */}
            <div className="bg-zinc-950 p-8 rounded-3xl border border-zinc-800 hover:border-emerald-900 transition-colors">
              <div className="w-12 h-12 bg-emerald-950/50 text-emerald-500 rounded-xl flex items-center justify-center mb-6 border border-emerald-900/50">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Operativa & Documentos</h3>
              <p className="text-zinc-400 mb-6 text-sm leading-relaxed">Sistemas para ahorrar horas de trabajo manual, reducir errores y proyectar profesionalismo.</p>
              <ul className="space-y-3 text-sm text-zinc-300">
                <li className="flex gap-2"><span className="text-emerald-500">✔</span> Generadores automáticos de Presupuestos</li>
                <li className="flex gap-2"><span className="text-emerald-500">✔</span> Emisión de contratos automáticos</li>
                <li className="flex gap-2"><span className="text-emerald-500">✔</span> Formularios internos corporativos</li>
              </ul>
            </div>
            {/* Paquete C: A Medida */}
            <div className="bg-zinc-950 p-8 rounded-3xl border border-zinc-800 hover:border-purple-900 transition-colors">
              <div className="w-12 h-12 bg-purple-950/50 text-purple-500 rounded-xl flex items-center justify-center mb-6 border border-purple-900/50">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Herramientas a Medida</h3>
              <p className="text-zinc-400 mb-6 text-sm leading-relaxed">Desarrollo de software específico para resolver cuellos de botella únicos de tu industria.</p>
              <ul className="space-y-3 text-sm text-zinc-300">
                <li className="flex gap-2"><span className="text-purple-500">✔</span> Calculadoras y Configuradores</li>
                <li className="flex gap-2"><span className="text-purple-500">✔</span> Portales de clientes B2B</li>
                <li className="flex gap-2"><span className="text-purple-500">✔</span> Dashboards de control y métricas</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. EL DOLOR Y LA FUGA (Identificar el problema del cliente) */}
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
            <p className="text-zinc-300 text-lg flex gap-4 items-start">
              <span className="text-red-500 font-bold">✕</span> 
              <span>El seguimiento de clientes es un caos disperso en hojas de cálculo y papeles.</span>
            </p>
            <div className="pt-6 border-t border-zinc-800 mt-6">
              <p className="text-white font-bold text-xl">Lo que yo hago es convertir ese proceso manual en un sistema digital simple: <span className="text-blue-400">captar, ordenar, automatizar y acelerar.</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA FINAL: Vender el Resultado */}
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
