"use client";

export default function LandingAYC() {
  const whatsappLink = "https://wa.me/595985864209?text=Hola%20Oscar,%20estoy%20en%20AYCweb.%20Me%20interesa%20una%20auditoría%20gratuita%20para%20automatizar%20los%20procesos%20de%20mi%20empresa.";

  return (
    <main className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-blue-500/30">
      
      {/* ==========================================
          1. HERO SECTION (EL GANCHO)
          ========================================== */}
      <section className="relative overflow-hidden pt-32 pb-24 lg:pt-40 lg:pb-32 flex flex-col items-center text-center px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-96 bg-blue-600/20 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-sm font-bold tracking-wide mb-8 uppercase shadow-xl relative z-10">
          <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
          AYC | Automatizaciones Corporativas
        </div>

        <h1 className="text-5xl md:text-7xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-400 mb-6 max-w-4xl leading-tight relative z-10">
          No hacemos páginas web.<br /> 
          <span className="text-blue-500">Construimos máquinas de tiempo.</span>
        </h1>

        <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl leading-relaxed relative z-10">
          Eliminamos los cuellos de botella de tu empresa con software a medida y automatización B2B para que dejes de perder tiempo en la operativa y te enfoques en facturar.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto relative z-10">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-black text-lg rounded-xl transition-all hover:-translate-y-1 shadow-[0_0_20px_rgba(37,99,235,0.4)] text-center flex items-center justify-center gap-2">
            Auditar mi empresa (Gratis)
          </a>
          <a href="#caso-metal-mad" className="px-8 py-4 bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-lg rounded-xl transition-all border border-zinc-700 hover:border-zinc-500 text-center">
            Ver caso de éxito real
          </a>
        </div>
      </section>

      {/* ==========================================
          2. EL PROBLEMA (EL DEDO EN LA LLAGA)
          ========================================== */}
      <section className="py-24 bg-zinc-900/50 border-y border-zinc-800/50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">El 80% de las empresas pierden dinero así:</h2>
            <p className="text-zinc-400 text-lg">Si tu equipo hace esto todos los días, estás perdiendo rentabilidad.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-zinc-950 p-8 rounded-2xl border border-zinc-800 hover:border-red-500/50 transition-colors">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-xl font-bold text-white mb-2">Presupuestos a mano</h3>
              <p className="text-zinc-400">Vendedores perdiendo horas en Word/Excel, cometiendo errores de cálculo y enfriando ventas clave.</p>
            </div>
            <div className="bg-zinc-950 p-8 rounded-2xl border border-zinc-800 hover:border-red-500/50 transition-colors">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-white mb-2">Caos en WhatsApp</h3>
              <p className="text-zinc-400">Pedidos de clientes mezclados con audios, mensajes perdidos y despachos enviados con datos incorrectos.</p>
            </div>
            <div className="bg-zinc-950 p-8 rounded-2xl border border-zinc-800 hover:border-red-500/50 transition-colors">
              <div className="text-4xl mb-4">📉</div>
              <h3 className="text-xl font-bold text-white mb-2">Costos a ciegas</h3>
              <p className="text-zinc-400">Fijar precios de fletes, mermas o servicios por instinto, subsidiando costos operativos sin darte cuenta.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          3. NUESTRO ARSENAL (LAS SOLUCIONES)
          ========================================== */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-blue-500 font-bold tracking-wide uppercase text-sm mb-3">Nuestras Soluciones</h2>
            <h3 className="text-3xl md:text-5xl font-black text-white">Software diseñado para la vida real.</h3>
          </div>

          <div className="space-y-6">
            <div className="flex flex-col md:flex-row gap-8 bg-zinc-900 p-8 rounded-3xl border border-zinc-800 items-center">
              <div className="w-full md:w-1/3 bg-zinc-950 h-48 rounded-2xl border border-zinc-800 flex items-center justify-center text-blue-500 font-black text-2xl shadow-inner">📄 Motor PDF</div>
              <div className="w-full md:w-2/3">
                <h4 className="text-2xl font-bold text-white mb-2">Cotizadores Corporativos Dinámicos</h4>
                <p className="text-zinc-400 mb-4">Tus vendedores abren una app en su celular, seleccionan los productos, y el sistema genera un PDF institucional perfecto con cálculos exactos en 10 segundos.</p>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full">Alto Cierre de Ventas</span>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 bg-zinc-900 p-8 rounded-3xl border border-zinc-800 items-center">
              <div className="w-full md:w-1/3 bg-zinc-950 h-48 rounded-2xl border border-zinc-800 flex items-center justify-center text-blue-500 font-black text-2xl shadow-inner">🛒 Portal B2B</div>
              <div className="w-full md:w-2/3">
                <h4 className="text-2xl font-bold text-white mb-2">Portales de Pedidos para Clientes</h4>
                <p className="text-zinc-400 mb-4">Elimina el caos de WhatsApp. Le damos a tus clientes recurrentes un catálogo privado donde hacen sus pedidos con 3 clics, y a ti te llega todo ordenado en una base de datos.</p>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full">Cero Errores de Logística</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          4. CASO DE ÉXITO (METAL MAD)
          ========================================== */}
      <section id="caso-metal-mad" className="py-24 bg-zinc-900/30 border-t border-zinc-800 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-blue-500 font-bold tracking-wide uppercase text-sm mb-3">Caso de Estudio: Industria Manufacturera</h2>
            <h3 className="text-3xl md:text-5xl font-black text-white mb-6">Cómo <span className="text-blue-400">Metal Mad</span> redujo su tiempo de cotización en un 98%</h3>
            <p className="text-lg text-zinc-400 mb-8">El equipo perdía 2 horas diarias armando presupuestos corporativos. Desarrollamos el &quot;Motor V3.0 PRO&quot;, permitiendo cotizar mesas y sillas escolares en 15 segundos con cero errores de cálculo.</p>
            
            <div className="grid grid-cols-2 gap-6 border-t border-zinc-800 pt-8">
              <div>
                <div className="text-4xl font-black text-white">15<span className="text-blue-500 text-xl"> seg</span></div>
                <div className="text-sm text-zinc-500 font-bold uppercase mt-1">Tiempo de creación</div>
              </div>
              <div>
                <div className="text-4xl font-black text-white">+35<span className="text-blue-500 text-xl">%</span></div>
                <div className="text-sm text-zinc-500 font-bold uppercase mt-1">Agilidad de cierre</div>
              </div>
            </div>
          </div>
          
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 flex flex-col items-center justify-center shadow-2xl relative">
             <div className="w-full max-w-sm bg-white rounded-xl shadow-xl p-6 transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <h4 className="text-blue-900 font-black text-2xl border-b-2 border-blue-900 pb-2 mb-4">PRESUPUESTO</h4>
                <div className="space-y-2 mb-6">
                  <div className="h-4 bg-zinc-200 rounded w-3/4"></div>
                  <div className="h-4 bg-zinc-200 rounded w-1/2"></div>
                </div>
                <div className="text-right">
                  <p className="text-zinc-500 font-bold text-sm">Total a Pagar:</p>
                  <p className="text-blue-900 font-black text-xl">Gs. 71.100.000</p>
                </div>
             </div>
             <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white font-bold py-2 px-6 rounded-full shadow-lg border-4 border-zinc-950">
               Generado 100% Automático
             </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          5. CTA FINAL
          ========================================== */}
      <section className="py-32 px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Deja de perder plata en tareas manuales.</h2>
        <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">La tecnología ya no es un lujo, es la única forma de escalar tus ventas sin volverte loco en la operativa.</p>
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-block px-10 py-5 bg-white text-zinc-950 hover:bg-zinc-200 font-black text-xl rounded-xl transition-all shadow-xl hover:-translate-y-1">
          Hablemos de tu empresa (15 min)
        </a>
      </section>
      
      <footer className="py-8 text-center text-zinc-600 text-sm border-t border-zinc-900">
        <p>© {new Date().getFullYear()} AYC | Automatizaciones Corporativas. Lambaré, Paraguay.</p>
      </footer>
    </main>
  );
}
