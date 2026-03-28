import Link from "next/link";
import Image from "next/image";

export default function ExperienciaPage() {
  const whatsappNumber = "595985864209";

  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 text-white font-sans selection:bg-blue-500 selection:text-white pb-24 md:pb-0">
      
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
            <Link href="/experiencia" className="text-white font-bold">Respaldo Operativo</Link>
            <span className="text-zinc-700 hidden sm:inline">|</span>
            <Link href="/casos" className="hover:text-white transition-colors">Casos Reales</Link>
            <Link href="/servicios" className="hover:text-white transition-colors">Sistemas SaaS</Link>
            <Link href="/sectores" className="hover:text-white transition-colors">Industrias</Link>
          </nav>
        </div>
      </nav>

      {/* 🚀 ENCABEZADO: Sobrio y Directo */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 px-6 overflow-hidden border-b border-zinc-900">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <span className="text-blue-500 font-bold tracking-widest uppercase text-xs mb-4 block">
            Respaldo Operativo B2B & B2G
          </span>
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter leading-[1.05]">
            Antes de construir sistemas digitales, <br />
            <span className="text-zinc-500">operamos en la vida real.</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
            Nuestra visión en AYCweb no nace de la teoría de programación, nace de años ejecutando operaciones logísticas, financieras y técnicas de alta exigencia para el Estado Paraguayo y las corporaciones privadas más importantes del país.
          </p>
        </div>
      </section>

      {/* 📊 RESUMEN EJECUTIVO */}
      <section className="py-12 bg-black border-b border-zinc-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800">
              <p className="text-3xl md:text-4xl font-black text-white mb-2">+30</p>
              <p className="text-xs text-zinc-500 uppercase tracking-widest font-bold">Mega-Contratos B2G</p>
            </div>
            <div className="bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800">
              <p className="text-3xl md:text-4xl font-black text-white mb-2">Élite</p>
              <p className="text-xs text-zinc-500 uppercase tracking-widest font-bold">Cartera Privada B2B</p>
            </div>
            <div className="bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800">
              <p className="text-3xl md:text-4xl font-black text-white mb-2">100%</p>
              <p className="text-xs text-zinc-500 uppercase tracking-widest font-bold">Cumplimiento de Pólizas</p>
            </div>
            <div className="bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800">
              <p className="text-3xl md:text-4xl font-black text-white mb-2">Nacional</p>
              <p className="text-xs text-zinc-500 uppercase tracking-widest font-bold">Escala Logística</p>
            </div>
          </div>
        </div>
      </section>

      {/* 🏢 NUEVA SECCIÓN: LA HUELLA CORPORATIVA PRIVADA (B2B) */}
      <section className="py-24 bg-zinc-950 border-b border-zinc-900 overflow-hidden relative">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-blue-900/10 blur-[100px] pointer-events-none"></div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="text-blue-500 font-bold tracking-widest uppercase text-xs mb-3 block">Sector Privado</span>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">La confianza del mercado corporativo.</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              El sector público exige solvencia, pero el sector privado exige <strong>velocidad, calidad implacable y competitividad</strong>. Hemos sido proveedores de confianza para las instituciones más prestigiosas del país.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Educación de Élite */}
            <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800 hover:border-blue-500/30 transition-colors">
              <div className="w-12 h-12 bg-zinc-950 rounded-xl flex items-center justify-center text-blue-500 border border-zinc-800 mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14v6"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Educación & Cultura</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-zinc-300 text-sm"><span className="text-blue-500">✔</span> Colegio San José</li>
                <li className="flex items-center gap-2 text-zinc-300 text-sm"><span className="text-blue-500">✔</span> Colegio Cristo Rey</li>
                <li className="flex items-center gap-2 text-zinc-300 text-sm"><span className="text-blue-500">✔</span> Colegio Técnico Javier</li>
                <li className="flex items-center gap-2 text-zinc-300 text-sm"><span className="text-blue-500">✔</span> CCPA (Centro Cultural Pyo. Americano)</li>
              </ul>
            </div>

            {/* Ingeniería y Constructoras */}
            <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800 hover:border-emerald-500/30 transition-colors">
              <div className="w-12 h-12 bg-zinc-950 rounded-xl flex items-center justify-center text-emerald-500 border border-zinc-800 mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Ingeniería & Constructoras</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-zinc-300 text-sm"><span className="text-emerald-500">✔</span> Proel Ingeniería</li>
                <li className="flex items-center gap-2 text-zinc-300 text-sm"><span className="text-emerald-500">✔</span> Sintec S.A.</li>
                <li className="flex items-center gap-2 text-zinc-300 text-sm"><span className="text-emerald-500">✔</span> Amacor S.A.</li>
                <li className="flex items-center gap-2 text-zinc-300 text-sm"><span className="text-emerald-500">✔</span> Ritter Construcciones</li>
              </ul>
            </div>

            {/* Corporaciones y Cooperativas */}
            <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800 hover:border-purple-500/30 transition-colors">
              <div className="w-12 h-12 bg-zinc-950 rounded-xl flex items-center justify-center text-purple-500 border border-zinc-800 mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Corporaciones & Coops</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-zinc-300 text-sm"><span className="text-purple-500">✔</span> Cooperativa Neuland</li>
                <li className="flex items-center gap-2 text-zinc-300 text-sm"><span className="text-purple-500">✔</span> Compasa S.A.</li>
                <li className="flex items-center gap-2 text-zinc-300 text-sm"><span className="text-purple-500">✔</span> Múltiples PyMEs industriales</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 🌉 EL PUENTE: B2G/B2B Físico a B2B Digital */}
      <section className="py-24 bg-black border-b border-zinc-900">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-black mb-12 text-center">Qué aporta esta trayectoria a nuestros clientes digitales</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-zinc-900/50 p-8 rounded-[2rem] border border-zinc-800">
              <div className="w-12 h-12 bg-blue-950/50 rounded-xl flex items-center justify-center text-blue-500 mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Tolerancia Cero a Fallas</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Operar licitaciones millonarias o ser proveedor de un colegio de élite implica plazos inflexibles y cero margen de error. Llevamos esa misma disciplina de cumplimiento estricto al código de nuestros sistemas.
              </p>
            </div>
            <div className="bg-zinc-900/50 p-8 rounded-[2rem] border border-zinc-800">
              <div className="w-12 h-12 bg-blue-950/50 rounded-xl flex items-center justify-center text-blue-500 mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Entendimiento Operativo Real</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Quien ha coordinado la entrega de +6.800 unidades físicas o ha proveído a constructoras, entiende perfectamente cómo fluye el inventario y cómo diseñar un software para que no colapse cuando tu empresa crezca.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ⏳ CRONOLOGÍA LIMPIA B2G */}
      <section className="py-24 bg-zinc-950 border-b border-zinc-900">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-zinc-500 font-bold tracking-widest uppercase text-xs mb-3 block">Sector Público</span>
            <h2 className="text-3xl font-black text-white">Historial Operativo B2G</h2>
          </div>
          
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-px before:bg-zinc-800">
            
            {/* 2019 */}
            <div className="relative flex flex-col md:flex-row items-center justify-between md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-zinc-950 bg-zinc-800 text-zinc-300 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                '19
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 mt-4 md:mt-0">
                <h3 className="font-bold text-lg text-white mb-2">Diversificación y Expansión</h3>
                <ul className="space-y-2 text-sm text-zinc-400">
                  <li><span className="text-zinc-500 mr-2">▪</span> Equipamiento Logístico FF.AA.</li>
                  <li><span className="text-zinc-500 mr-2">▪</span> Infraestructura urbana en 4 municipios.</li>
                  <li><span className="text-zinc-500 mr-2">▪</span> Despliegue masivo para el IPS y Gobernación de Boquerón.</li>
                </ul>
              </div>
            </div>

            {/* 2020 */}
            <div className="relative flex flex-col md:flex-row items-center justify-between md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-zinc-950 bg-zinc-800 text-zinc-300 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                '20
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 mt-4 md:mt-0">
                <h3 className="font-bold text-lg text-white mb-2">Respuesta en Pandemia</h3>
                <ul className="space-y-2 text-sm text-zinc-400">
                  <li><span className="text-zinc-500 mr-2">▪</span> Equipamiento crítico de USF a nivel nacional (MSPyBS).</li>
                  <li><span className="text-zinc-500 mr-2">▪</span> Soporte logístico al MEC para 822 establecimientos educativos.</li>
                </ul>
              </div>
            </div>

            {/* 2021 */}
            <div className="relative flex flex-col md:flex-row items-center justify-between md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-zinc-950 bg-zinc-800 text-zinc-300 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                '21
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 mt-4 md:mt-0">
                <h3 className="font-bold text-lg text-white mb-2">Complejidad Técnica y Escala</h3>
                <ul className="space-y-2 text-sm text-zinc-400">
                  <li><span className="text-zinc-500 mr-2">▪</span> Provisión de tecnología médica de soporte de vida (IPS/MSPyBS).</li>
                  <li><span className="text-zinc-500 mr-2">▪</span> Renovación nacional del Crédito Agrícola (CAH) con 1.399 ítems.</li>
                </ul>
              </div>
            </div>

            {/* 2022 */}
            <div className="relative flex flex-col md:flex-row items-center justify-between md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-zinc-950 bg-blue-600 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                '22
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-zinc-900/80 border border-blue-900/30 mt-4 md:mt-0 shadow-lg">
                <h3 className="font-bold text-lg text-white mb-2">Consolidación Operativa</h3>
                <ul className="space-y-2 text-sm text-zinc-400">
                  <li><span className="text-blue-500 mr-2">▪</span> Adjudicación de rescate en IPS Ingavi por solvencia demostrada.</li>
                  <li><span className="text-blue-500 mr-2">▪</span> Hito Logístico: Producción y entrega de +6.800 unidades para Municipalidades.</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 🤝 CIERRE CORPORATIVO SÓLIDO */}
      <section className="py-24 bg-black text-center relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-600/10 rounded-t-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black mb-6 text-white tracking-tight">Criterio forjado en la realidad.</h2>
          <p className="text-zinc-400 leading-relaxed mb-10 text-lg">
            Todo este recorrido nos dio algo mucho más valioso que un historial de contratos: nos dio método, disciplina operativa y el criterio exacto para construir soluciones que funcionen en contextos de alta presión. Hoy, en AYCweb, aplicamos esa misma experiencia al desarrollo de sistemas digitales para empresas que quieren crecer con orden y estructura.
          </p>
          <a 
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hola Oscar. Leí sobre la experiencia operativa de tu firma con el sector privado y público. Me gustaría agendar una reunión comercial para ver cómo estructurar mi empresa digitalmente.")}`}
            target="_blank" rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-black py-4 px-10 rounded-xl transition-all shadow-[0_0_30px_-5px_rgba(37,99,235,0.4)] active:scale-95"
          >
            Agendar Reunión Comercial
          </a>
        </div>
      </section>

      {/* STICKY CTA MOBILE */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-zinc-950/95 backdrop-blur-lg border-t border-zinc-800 p-4 z-50 shadow-[0_-20px_30px_-10px_rgba(0,0,0,0.7)]">
        <a 
          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hola Oscar. Quiero agendar una reunión comercial.")}`}
          target="_blank" rel="noopener noreferrer"
          className="w-full flex bg-blue-600 text-white font-black py-4 px-6 rounded-xl items-center justify-center text-lg active:scale-95 transition-transform shadow-[0_0_20px_rgba(37,99,235,0.4)]"
        >
          Agendar Reunión &rarr;
        </a>
      </div>

    </div>
  );
}
