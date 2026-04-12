import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Servicios de Ingeniería Digital B2B | AYCweb Paraguay",
  description:
    "Landings B2B, cotizadores PDF automáticos, generación de contratos y portales de clientes. Infraestructura digital para empresas en Paraguay.",
};

export default function SolucionesPage() {
  const whatsappNumber = "595985864209";
  const whatsappMsg = encodeURIComponent("¡Hola! Vi sus soluciones en AYCweb y quiero agendar un diagnóstico técnico.");

  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-slate-50 font-sans relative overflow-hidden">
      
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay z-0"></div>

      {/* ================= HERO ================= */}
      {/* Ajuste: pt-28 pb-12 en móvil */}
      <section className="relative pt-28 pb-12 md:pt-40 md:pb-24 px-6 text-center border-b border-white/[0.05] z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>
        
        <div className="max-w-5xl mx-auto relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-900/20 text-blue-400 text-[11px] md:text-xs font-bold uppercase tracking-widest border border-blue-500/20 mb-6 md:mb-8 shadow-inner">
            Ingeniería Digital B2B
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-6 md:mb-8 tracking-tighter leading-[1.05] text-white">
            Dejá de comprar herramientas sueltas. <br className="hidden md:block"/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Implementá Ecosistemas.</span>
          </h1>
          <p className="text-base md:text-2xl text-slate-400 mb-8 md:mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            No somos una agencia tradicional. Desarrollamos la infraestructura digital que tu empresa necesita para captar, cotizar y operar en automático.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
            <a 
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
              target="_blank" rel="noopener noreferrer"
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-black py-3.5 md:py-4 px-8 md:px-10 rounded-xl transition-all shadow-[0_0_30px_rgba(37,99,235,0.4)] active:scale-95 text-[15px] md:text-lg"
            >
              Agendar Diagnóstico
            </a>
            <Link 
              href="/casos"
              className="w-full sm:w-auto bg-slate-900 border border-slate-700 hover:border-slate-500 text-slate-200 hover:text-white font-bold py-3.5 md:py-4 px-8 md:px-10 rounded-xl transition-all text-[15px] md:text-lg"
            >
              Ver Casos de Éxito
            </Link>
          </div>
        </div>
      </section>

      {/* ================= SERVICIOS ================= */}
      {/* Ajuste: py-16 en móvil, cards con p-6, gap-4 */}
      <section className="py-16 md:py-28 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-6xl font-black text-white mb-4 md:mb-6 tracking-tight">
              Soluciones de Ingeniería
            </h2>
            <p className="text-base md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Piezas técnicas diseñadas para empresas que necesitan escalar sus operaciones comerciales de verdad.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            
            <div className="group bg-slate-900/40 backdrop-blur-sm p-6 md:p-10 rounded-[1.5rem] md:rounded-3xl border border-slate-800 hover:border-blue-700/50 transition-all duration-300 hover:bg-slate-900/80">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-blue-600/10 border border-blue-600/30 flex items-center justify-center mb-4 md:mb-6 group-hover:bg-blue-600/20 transition-all">
                <span className="text-xl md:text-2xl">⚡</span>
              </div>
              <h3 className="text-xl md:text-2xl font-black text-white mb-2 md:mb-4 group-hover:text-blue-400 transition-colors">
                Landings B2B
              </h3>
              <p className="text-slate-400 leading-relaxed mb-5 md:mb-6 text-[14px] md:text-sm">
                Páginas de aterrizaje diseñadas para convertir tráfico calificado en leads comerciales. Optimizadas para decisores.
              </p>
              <ul className="space-y-2.5 md:space-y-3">
                <li className="flex gap-2.5 text-slate-300 text-[13px] md:text-sm"><span className="text-blue-500 font-bold">✓</span> Diseño a conversión</li>
                <li className="flex gap-2.5 text-slate-300 text-[13px] md:text-sm"><span className="text-blue-500 font-bold">✓</span> Link directo a WhatsApp</li>
              </ul>
            </div>

            <div className="group bg-slate-900/40 backdrop-blur-sm p-6 md:p-10 rounded-[1.5rem] md:rounded-3xl border border-slate-800 hover:border-emerald-700/50 transition-all duration-300 hover:bg-slate-900/80">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-emerald-600/10 border border-emerald-600/30 flex items-center justify-center mb-4 md:mb-6 group-hover:bg-emerald-600/20 transition-all">
                <span className="text-xl md:text-2xl">🎯</span>
              </div>
              <h3 className="text-xl md:text-2xl font-black text-white mb-2 md:mb-4 group-hover:text-emerald-400 transition-colors">
                Cotizadores Automáticos
              </h3>
              <p className="text-slate-400 leading-relaxed mb-5 md:mb-6 text-[14px] md:text-sm">
                Sistemas inteligentes que calculan presupuestos en segundos. Eliminan errores humanos y aceleran el ciclo de ventas.
              </p>
              <ul className="space-y-2.5 md:space-y-3">
                <li className="flex gap-2.5 text-slate-300 text-[13px] md:text-sm"><span className="text-emerald-500 font-bold">✓</span> Lógica de cálculo compleja</li>
                <li className="flex gap-2.5 text-slate-300 text-[13px] md:text-sm"><span className="text-emerald-500 font-bold">✓</span> Generación de PDFs formales</li>
              </ul>
            </div>

            <div className="group bg-slate-900/40 backdrop-blur-sm p-6 md:p-10 rounded-[1.5rem] md:rounded-3xl border border-slate-800 hover:border-purple-700/50 transition-all duration-300 hover:bg-slate-900/80">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-purple-600/10 border border-purple-600/30 flex items-center justify-center mb-4 md:mb-6 group-hover:bg-purple-600/20 transition-all">
                <span className="text-xl md:text-2xl">📝</span>
              </div>
              <h3 className="text-xl md:text-2xl font-black text-white mb-2 md:mb-4 group-hover:text-purple-400 transition-colors">
                Generador de Contratos
              </h3>
              <p className="text-slate-400 leading-relaxed mb-5 md:mb-6 text-[14px] md:text-sm">
                Automatización legal. Redactamos Acuerdos dinámicamente inyectando datos de formularios sin tocar Microsoft Word.
              </p>
              <ul className="space-y-2.5 md:space-y-3">
                <li className="flex gap-2.5 text-slate-300 text-[13px] md:text-sm"><span className="text-purple-500 font-bold">✓</span> Templates legales a medida</li>
                <li className="flex gap-2.5 text-slate-300 text-[13px] md:text-sm"><span className="text-purple-500 font-bold">✓</span> Listos para firma digital</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ================= BENEFICIOS Y CTA ================= */}
      <section className="py-16 md:py-28 bg-[#04050a] border-y border-white/[0.05] relative overflow-hidden z-10">
        <div className="absolute top-1/2 right-0 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 md:mb-6 tracking-tight">
              ¿Por qué las empresas nos eligen?
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mb-16 md:mb-24">
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl md:rounded-3xl p-4 md:p-8 text-center">
              <span className="text-3xl md:text-4xl font-black text-blue-400 block mb-2 md:mb-4">10x</span>
              <h3 className="font-bold text-white mb-1 md:mb-2 text-[14px] md:text-base">Velocidad</h3>
              <p className="text-slate-400 text-[12px] md:text-sm leading-relaxed">Cotizaciones en segundos, no horas.</p>
            </div>
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl md:rounded-3xl p-4 md:p-8 text-center">
              <span className="text-3xl md:text-4xl font-black text-emerald-400 block mb-2 md:mb-4">0</span>
              <h3 className="font-bold text-white mb-1 md:mb-2 text-[14px] md:text-base">Errores</h3>
              <p className="text-slate-400 text-[12px] md:text-sm leading-relaxed">Eliminá el factor humano en cálculos.</p>
            </div>
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl md:rounded-3xl p-4 md:p-8 text-center">
              <span className="text-3xl md:text-4xl font-black text-purple-400 block mb-2 md:mb-4">24/7</span>
              <h3 className="font-bold text-white mb-1 md:mb-2 text-[14px] md:text-base">Operación</h3>
              <p className="text-slate-400 text-[12px] md:text-sm leading-relaxed">Trabajan mientras vos dormís.</p>
            </div>
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl md:rounded-3xl p-4 md:p-8 text-center">
              <span className="text-3xl md:text-4xl font-black text-orange-400 block mb-2 md:mb-4">∞</span>
              <h3 className="font-bold text-white mb-1 md:mb-2 text-[14px] md:text-base">Escala</h3>
              <p className="text-slate-400 text-[12px] md:text-sm leading-relaxed">Crecé en volumen sin más personal.</p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-black text-white mb-4 md:mb-6">
              ¿Listo para construir tu sistema?
            </h2>
            <p className="text-slate-400 text-[15px] md:text-lg mb-8 md:mb-10 max-w-xl mx-auto leading-relaxed">
              Hablemos 15 minutos sin compromiso. Te decimos exactamente cómo podemos automatizar tu proceso.
            </p>
            <a 
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
              target="_blank" rel="noopener noreferrer"
              className="block sm:inline-block bg-blue-600 hover:bg-blue-500 text-white font-black py-3.5 md:py-4 px-8 md:px-10 rounded-xl transition-all shadow-[0_0_30px_rgba(37,99,235,0.4)] active:scale-95 text-[15px] md:text-base"
            >
              Agendar Diagnóstico Técnico
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
