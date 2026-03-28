import Link from "next/link";

export default function Home() {
  const whatsappNumber = "595985864209";
  const whatsappMsg = encodeURIComponent("¡Hola Oscar! Quiero agendar una sesión de diagnóstico para automatizar mi empresa.");

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* 1. HERO POTENTE */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 px-6 text-center overflow-hidden border-b border-zinc-900">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-blue-900/50 bg-blue-950/30 text-sm font-semibold text-blue-300 shadow-inner">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            Ingeniería de Software & Automatización B2B
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter leading-[1.05] text-white">
            Construimos máquinas de <span className="text-blue-500">tiempo y dinero</span> para empresas.
          </h1>
          <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Dejá de perder ventas por presupuestar en manual. Diseñamos ecosistemas digitales corporativos que captan, cotizan y operan en automático.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
              target="_blank" rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-500 text-white font-black py-4 px-8 rounded-xl transition-all shadow-[0_0_30px_-5px_rgba(37,99,235,0.4)] active:scale-95"
            >
              Agendar Diagnóstico
            </a>
            <Link 
              href="/os" 
              className="bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-white font-bold py-4 px-8 rounded-xl transition-all"
            >
              Ver Ecosistema PRO
            </Link>
          </div>
        </div>
      </section>

      {/* 2. PRUEBA DE AUTORIDAD (El giro B2G) */}
      <section className="py-20 bg-zinc-950 border-b border-zinc-900">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-black mb-6 text-zinc-300">No somos una agencia improvisada.</h2>
          <p className="text-lg text-zinc-500 max-w-3xl mx-auto leading-relaxed">
            Venimos de ejecutar operaciones complejas, licitaciones de alta exigencia y logística B2G a gran escala. Ahora, <strong>llevamos esa mentalidad corporativa de control, precisión y escala al mundo digital.</strong> No hacemos "páginas lindas", desarrollamos infraestructura de negocios.
          </p>
        </div>
      </section>

      {/* 3. ARQUITECTURA DE SERVICIOS (Separar Servicio de Producto) */}
      <section className="py-24 bg-zinc-900/30 border-b border-zinc-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">¿Qué construimos?</h2>
            <p className="text-zinc-400">Soluciones modulares diseñadas exclusivamente para escalar B2B.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Nivel 1 */}
            <div className="bg-zinc-950 p-8 rounded-3xl border border-zinc-800 hover:border-blue-900 transition-colors">
              <div className="w-12 h-12 bg-blue-950/50 text-blue-500 rounded-xl flex items-center justify-center mb-6 border border-blue-900/50">1</div>
              <h3 className="text-2xl font-bold text-white mb-3">Oferta Principal</h3>
              <p className="text-zinc-500 mb-6 text-sm">El núcleo de tu transformación digital corporativa.</p>
              <ul className="space-y-3 text-sm text-zinc-300">
                <li className="flex gap-2"><span className="text-blue-500">✔</span> Landings B2B de Conversión</li>
                <li className="flex gap-2"><span className="text-blue-500">✔</span> Sistemas SaaS a Medida</li>
                <li className="flex gap-2"><span className="text-blue-500">✔</span> Automatización Inicial</li>
              </ul>
            </div>
            {/* Nivel 2 */}
            <div className="bg-zinc-950 p-8 rounded-3xl border border-zinc-800 hover:border-emerald-900 transition-colors">
              <div className="w-12 h-12 bg-emerald-950/50 text-emerald-500 rounded-xl flex items-center justify-center mb-6 border border-emerald-900/50">2</div>
              <h3 className="text-2xl font-bold text-white mb-3">Módulos Operativos</h3>
              <p className="text-zinc-500 mb-6 text-sm">Herramientas inyectables para eliminar cuellos de botella.</p>
              <ul className="space-y-3 text-sm text-zinc-300">
                <li className="flex gap-2"><span className="text-emerald-500">✔</span> Cotizadores Automáticos</li>
                <li className="flex gap-2"><span className="text-emerald-500">✔</span> CRM & Gestión de Leads</li>
                <li className="flex gap-2"><span className="text-emerald-500">✔</span> Paneles de Inventario</li>
              </ul>
            </div>
            {/* Nivel 3 */}
            <div className="bg-zinc-950 p-8 rounded-3xl border border-zinc-800 hover:border-purple-900 transition-colors">
              <div className="w-12 h-12 bg-purple-950/50 text-purple-500 rounded-xl flex items-center justify-center mb-6 border border-purple-900/50">3</div>
              <h3 className="text-2xl font-bold text-white mb-3">Implementación</h3>
              <p className="text-zinc-500 mb-6 text-sm">Acompañamiento técnico desde el inicio hasta la puesta en marcha.</p>
              <ul className="space-y-3 text-sm text-zinc-300">
                <li className="flex gap-2"><span className="text-purple-500">✔</span> Diagnóstico de Procesos</li>
                <li className="flex gap-2"><span className="text-purple-500">✔</span> Arquitectura de Software</li>
                <li className="flex gap-2"><span className="text-purple-500">✔</span> Soporte Técnico Continuo</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CÓMO TRABAJAMOS (El Proceso que baja ansiedad) */}
      <section className="py-24 bg-zinc-950 border-b border-zinc-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-black text-center text-white mb-16">Metodología de Ejecución</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { paso: "01", titulo: "Diagnóstico", desc: "Auditamos tus flujos manuales y detectamos las fugas de dinero y tiempo." },
              { paso: "02", titulo: "Arquitectura", desc: "Diseñamos el ecosistema digital a medida que tu equipo necesita operar." },
              { paso: "03", titulo: "Desarrollo", desc: "Codificamos con tecnologías Next.js de ultra-rendimiento (PageSpeed 99/100)." },
              { paso: "04", titulo: "Implementación", desc: "Lanzamos, capacitamos a tu equipo y damos soporte técnico continuo." }
            ].map((p, i) => (
              <div key={i} className="bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800 hover:border-blue-900/30 transition-colors">
                <span className="text-blue-500 font-black text-xl mb-2 block">{p.paso}</span>
                <h4 className="text-white font-bold text-lg mb-2">{p.titulo}</h4>
                <p className="text-zinc-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CASOS REALES PROFUNDOS (Preview) */}
      <section className="py-24 bg-black border-b border-zinc-900 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-center text-white mb-16">Resultados Medibles</h2>
          
          <div className="bg-zinc-900 rounded-3xl border border-zinc-800 p-8 md:p-12 flex flex-col md:flex-row gap-10 items-center">
            <div className="w-full md:w-1/2">
              <span className="text-blue-400 font-bold text-sm tracking-widest uppercase mb-2 block">Caso de Éxito B2B</span>
              <h3 className="text-3xl font-black text-white mb-4">Metal Mad E.A.S.</h3>
              <p className="text-zinc-400 mb-6 leading-relaxed">
                <strong>El Problema:</strong> Pérdida de 2 horas diarias armando presupuestos manuales para colegios.<br/><br/>
                <strong>La Solución:</strong> Desarrollo de cotizador automático integrado a una landing B2B ultra-rápida.
              </p>
              <div className="flex gap-4 mb-8">
                <div className="bg-zinc-950 px-4 py-3 rounded-xl border border-zinc-800">
                  <span className="block text-2xl font-black text-emerald-500">99/100</span>
                  <span className="text-xs text-zinc-500 font-medium">PageSpeed</span>
                </div>
                <div className="bg-zinc-950 px-4 py-3 rounded-xl border border-zinc-800">
                  <span className="block text-2xl font-black text-emerald-500">3 min</span>
                  <span className="text-xs text-zinc-500 font-medium">Cotización</span>
                </div>
              </div>
              <Link href="/casos" className="text-blue-500 hover:text-white font-bold transition-colors">Ver caso completo &rarr;</Link>
            </div>
            <div className="w-full md:w-1/2 h-64 bg-zinc-950 rounded-2xl border border-zinc-800 relative flex items-center justify-center overflow-hidden">
                <p className="text-zinc-600 font-mono text-sm">Dashboard Analytics Simulation</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA FINAL SUAVE */}
      <section className="py-24 bg-zinc-950 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">¿Listo para sistematizar tu empresa?</h2>
          <p className="text-xl text-zinc-400 mb-10">
            Agenda una llamada de diagnóstico sin costo o revisa directamente nuestro Ecosistema PRO si ya estás decidido a avanzar.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <a 
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
              target="_blank" rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-500 text-white font-black py-4 px-8 rounded-xl transition-all shadow-lg active:scale-95"
            >
              Contactar a un Asesor
            </a>
            <Link 
              href="/os" 
              className="bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-emerald-400 font-bold py-4 px-8 rounded-xl transition-all flex items-center justify-center gap-2"
            >
              Ver Ecosistema PRO y Precios &rarr;
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
