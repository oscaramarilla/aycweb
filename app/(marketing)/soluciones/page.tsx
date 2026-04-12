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
    <div className="flex flex-col min-h-screen bg-slate-950 text-slate-50 font-sans pb-24 md:pb-0 relative overflow-hidden">
      
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay z-0"></div>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-6 text-center border-b border-white/[0.05] z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>
        
        <div className="max-w-5xl mx-auto relative z-10">
          <span className="inline-block px-5 py-2 rounded-full bg-blue-900/20 text-blue-400 text-xs font-bold uppercase tracking-widest border border-blue-500/20 mb-8 shadow-inner">
            Ingeniería Digital B2B
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tighter leading-[1.02] text-white">
            Dejá de comprar herramientas sueltas. <br className="hidden md:block"/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Implementá Ecosistemas.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            No somos una agencia tradicional que te vende una web y desaparece. Desarrollamos la infraestructura digital que tu empresa necesita para captar, cotizar y operar en automático.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
              target="_blank" rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-500 text-white font-black py-4 px-10 rounded-xl transition-all shadow-[0_0_30px_rgba(37,99,235,0.4)] active:scale-95 text-lg"
            >
              Agendar Diagnóstico Técnico
            </a>
            <Link 
              href="/casos"
              className="bg-slate-900 border border-slate-700 hover:border-slate-500 text-slate-200 hover:text-white font-bold py-4 px-10 rounded-xl transition-all text-lg"
            >
              Ver Casos de Éxito
            </Link>
          </div>
        </div>
      </section>

      {/* 6 SERVICIOS PRINCIPALES */}
      <section className="py-28 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
              Soluciones de Ingeniería
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Piezas técnicas diseñadas para empresas que necesitan escalar sus operaciones comerciales de verdad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Servicio 1: Landings B2B */}
            <div className="group bg-slate-900/40 backdrop-blur-sm p-10 rounded-3xl border border-slate-800 hover:border-blue-700/50 transition-all duration-300 hover:bg-slate-900/80">
              <div className="w-16 h-16 rounded-2xl bg-blue-600/10 border border-blue-600/30 flex items-center justify-center mb-6 group-hover:bg-blue-600/20 transition-all">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-2xl font-black text-white mb-4 group-hover:text-blue-400 transition-colors">
                Landings B2B
              </h3>
              <p className="text-slate-400 leading-relaxed mb-6 text-sm">
                Páginas de aterrizaje diseñadas para convertir tráfico calificado en leads comerciales. Optimizadas para decisores empresariales con copy directo.
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3 text-slate-300 text-sm"><span className="text-blue-500 font-bold">✓</span> Diseño a conversión</li>
                <li className="flex gap-3 text-slate-300 text-sm"><span className="text-blue-500 font-bold">✓</span> Link directo a WhatsApp</li>
                <li className="flex gap-3 text-slate-300 text-sm"><span className="text-blue-500 font-bold">✓</span> SEO Técnico On-Page</li>
              </ul>
            </div>

            {/* Servicio 2: Cotizadores Automáticos */}
            <div className="group bg-slate-900/40 backdrop-blur-sm p-10 rounded-3xl border border-slate-800 hover:border-emerald-700/50 transition-all duration-300 hover:bg-slate-900/80">
              <div className="w-16 h-16 rounded-2xl bg-emerald-600/10 border border-emerald-600/30 flex items-center justify-center mb-6 group-hover:bg-emerald-600/20 transition-all">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-2xl font-black text-white mb-4 group-hover:text-emerald-400 transition-colors">
                Cotizadores Automáticos
              </h3>
              <p className="text-slate-400 leading-relaxed mb-6 text-sm">
                Sistemas inteligentes que calculan y generan presupuestos formales en segundos. Eliminan errores humanos y aceleran el ciclo de ventas.
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3 text-slate-300 text-sm"><span className="text-emerald-500 font-bold">✓</span> Lógica de cálculo compleja</li>
                <li className="flex gap-3 text-slate-300 text-sm"><span className="text-emerald-500 font-bold">✓</span> Generación de PDFs formales</li>
                <li className="flex gap-3 text-slate-300 text-sm"><span className="text-emerald-500 font-bold">✓</span> Cero errores humanos</li>
              </ul>
            </div>

            {/* Servicio 3: Generación de Contratos */}
            <div className="group bg-slate-900/40 backdrop-blur-sm p-10 rounded-3xl border border-slate-800 hover:border-purple-700/50 transition-all duration-300 hover:bg-slate-900/80">
              <div className="w-16 h-16 rounded-2xl bg-purple-600/10 border border-purple-600/30 flex items-center justify-center mb-6 group-hover:bg-purple-600/20 transition-all">
                <span className="text-2xl">📝</span>
              </div>
              <h3 className="text-2xl font-black text-white mb-4 group-hover:text-purple-400 transition-colors">
                Generador de Contratos
              </h3>
              <p className="text-slate-400 leading-relaxed mb-6 text-sm">
                Automatización de documentos legales. Redactamos Acuerdos y SOW dinámicamente inyectando datos de formularios sin tocar Microsoft Word.
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3 text-slate-300 text-sm"><span className="text-purple-500 font-bold">✓</span> Templates legales a medida</li>
                <li className="flex gap-3 text-slate-300 text-sm"><span className="text-purple-500 font-bold">✓</span> Formularios condicionales</li>
                <li className="flex gap-3 text-slate-300 text-sm"><span className="text-purple-500 font-bold">✓</span> Listos para firma digital</li>
              </ul>
            </div>

            {/* Servicio 4: Portales de Clientes */}
            <div className="group bg-slate-900/40 backdrop-blur-sm p-10 rounded-3xl border border-slate-800 hover:border-orange-700/50 transition-all duration-300 hover:bg-slate-900/80">
              <div className="w-16 h-16 rounded-2xl bg-orange-600/10 border border-orange-600/30 flex items-center justify-center mb-6 group-hover:bg-orange-600/20 transition-all">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-2xl font-black text-white mb-4 group-hover:text-orange-400 transition-colors">
                Portales B2B
              </h3>
              <p className="text-slate-400 leading-relaxed mb-6 text-sm">
                Plataformas web exclusivas con login donde tus clientes acceden a pedidos, documentos y soporte. Reduce la atención manual.
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3 text-slate-300 text-sm"><span className="text-orange-500 font-bold">✓</span> Acceso seguro restringido</li>
                <li className="flex gap-3 text-slate-300 text-sm"><span className="text-orange-500 font-bold">✓</span> Historial de compras</li>
                <li className="flex gap-3 text-slate-300 text-sm"><span className="text-orange-500 font-bold">✓</span> Gestión de tickets</li>
              </ul>
            </div>

            {/* Servicio 5: Dashboards */}
            <div className="group bg-slate-900/40 backdrop-blur-sm p-10 rounded-3xl border border-slate-800 hover:border-cyan-700/50 transition-all duration-300 hover:bg-slate-900/80">
              <div className="w-16 h-16 rounded-2xl bg-cyan-600/10 border border-cyan-600/30 flex items-center justify-center mb-6 group-hover:bg-cyan-600/20 transition-all">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-2xl font-black text-white mb-4 group-hover:text-cyan-400 transition-colors">
                Dashboards Operativos
              </h3>
              <p className="text-slate-400 leading-relaxed mb-6 text-sm">
                Paneles de control para monitorear KPIs comerciales en tiempo real. Visualizá la salud de tu negocio en una sola pantalla.
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3 text-slate-300 text-sm"><span className="text-cyan-500 font-bold">✓</span> Métricas sincronizadas</li>
                <li className="flex gap-3 text-slate-300 text-sm"><span className="text-cyan-500 font-bold">✓</span> Visualización clara</li>
                <li className="flex gap-3 text-slate-300 text-sm"><span className="text-cyan-500 font-bold">✓</span> Conexión por APIs</li>
              </ul>
            </div>

            {/* Servicio 6: Custom */}
            <div className="group bg-slate-900/40 backdrop-blur-sm p-10 rounded-3xl border border-slate-800 hover:border-pink-700/50 transition-all duration-300 hover:bg-slate-900/80">
              <div className="w-16 h-16 rounded-2xl bg-pink-600/10 border border-pink-600/30 flex items-center justify-center mb-6 group-hover:bg-pink-600/20 transition-all">
                <span className="text-2xl">⚙️</span>
              </div>
              <h3 className="text-2xl font-black text-white mb-4 group-hover:text-pink-400 transition-colors">
                Ingeniería Custom
              </h3>
              <p className="text-slate-400 leading-relaxed mb-6 text-sm">
                Ingeniería pura para resolver cuellos de botella específicos. Desarrollamos la herramienta exacta que exige tu negocio, sin plantillas.
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3 text-slate-300 text-sm"><span className="text-pink-500 font-bold">✓</span> Análisis arquitectónico</li>
                <li className="flex gap-3 text-slate-300 text-sm"><span className="text-pink-500 font-bold">✓</span> Desarrollo a medida</li>
                <li className="flex gap-3 text-slate-300 text-sm"><span className="text-pink-500 font-bold">✓</span> Alta escalabilidad</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* BLOQUE DE BENEFICIOS */}
      <section className="py-28 bg-[#04050a] border-y border-white/[0.05] relative overflow-hidden z-10">
        <div className="absolute top-1/2 right-0 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
              ¿Por qué las empresas eligen AYCweb?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 text-center">
              <span className="text-4xl font-black text-blue-400 block mb-4">10x</span>
              <h3 className="font-bold text-white mb-2">Velocidad</h3>
              <p className="text-slate-400 text-sm">Cotizaciones automáticas en segundos, no horas.</p>
            </div>
            <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 text-center">
              <span className="text-4xl font-black text-emerald-400 block mb-4">0</span>
              <h3 className="font-bold text-white mb-2">Errores</h3>
              <p className="text-slate-400 text-sm">Eliminá el factor humano en cálculos y formatos.</p>
            </div>
            <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 text-center">
              <span className="text-4xl font-black text-purple-400 block mb-4">24/7</span>
              <h3 className="font-bold text-white mb-2">Operación</h3>
              <p className="text-slate-400 text-sm">Tus sistemas trabajan mientras vos dormís.</p>
            </div>
            <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 text-center">
              <span className="text-4xl font-black text-orange-400 block mb-4">∞</span>
              <h3 className="font-bold text-white mb-2">Escala</h3>
              <p className="text-slate-400 text-sm">Crecé en volumen sin contratar más personal de gestión.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL A WHATSAPP */}
      <section className="py-24 text-center relative z-10">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
            ¿Listo para construir tu sistema?
          </h2>
          <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
            Hablemos 15 minutos sin compromiso. Te decimos exactamente cómo podemos automatizar tu proceso.
          </p>
          <a 
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
            target="_blank" rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-black py-4 px-10 rounded-xl transition-all shadow-[0_0_30px_rgba(37,99,235,0.4)] active:scale-95"
          >
            Agendar Diagnóstico Técnico
          </a>
        </div>
      </section>

    </div>
  );
}
