"use client";

import Link from "next/link";

export default function CasosPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans pb-24 pt-24 relative overflow-hidden">
      {/* Fondo y texturas */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay z-0"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      {/* HERO CASOS */}
      <section className="max-w-4xl mx-auto px-6 text-center mb-20 relative z-10">
        <span className="inline-flex items-center gap-2 mb-6 px-5 py-2 rounded-full border border-slate-800 bg-slate-900/50 text-xs font-bold uppercase tracking-widest text-slate-300 shadow-md">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
          Pruebas Reales
        </span>
        <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter text-white leading-tight">
          No vendemos humo.<br />Construimos motores.
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          Explorá cómo nuestras infraestructuras digitales están automatizando ventas, ordenando la logística y captando pacientes 24/7 en Paraguay y la región.
        </p>
      </section>

      {/* ================= SECCIÓN EMPRESAS ================= */}
      <section id="empresas" className="max-w-6xl mx-auto px-6 mb-32 scroll-mt-32 relative z-10">
        <div className="mb-12 border-b border-slate-800 pb-6 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-black text-white flex items-center gap-3">
              <span className="text-4xl">🏭</span> Operaciones Empresariales
            </h2>
            <p className="text-slate-400 mt-2">Casos de automatización industrial, logística y comercial B2B.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* CASO 1: Motor Logístico */}
          <article className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 hover:border-slate-600 transition-colors group">
            <div className="bg-slate-950 rounded-2xl h-48 mb-6 flex items-center justify-center border border-slate-800 relative overflow-hidden">
              <span className="text-6xl group-hover:scale-110 transition-transform">🚚</span>
            </div>
            <span className="text-blue-400 text-xs font-bold tracking-widest uppercase mb-2 block">Dashboard & Control</span>
            <h3 className="text-xl font-bold text-white mb-3">Motor Logístico</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Sistema centralizado para trazabilidad de despachos. Elimina la pérdida de información en WhatsApp y sincroniza las entregas con el equipo de ventas.
            </p>
          </article>

          {/* CASO 2: Cálculo de Plásticos (VIDEO) */}
          <article className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 hover:border-slate-600 transition-colors group">
            <div className="bg-slate-950 rounded-2xl h-48 mb-6 flex items-center justify-center border border-slate-800 relative overflow-hidden">
              <div className="absolute inset-0 bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors"></div>
              {/* Ícono de Play simulando YouTube */}
              <div className="w-16 h-12 bg-red-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-white border-b-[8px] border-b-transparent ml-1"></div>
              </div>
            </div>
            <span className="text-blue-400 text-xs font-bold tracking-widest uppercase mb-2 block">Demo YouTube</span>
            <h3 className="text-xl font-bold text-white mb-3">Calculadora de Plásticos Industriales</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Herramienta interactiva que permite a las industrias calcular volúmenes, densidades y costos de materia prima en tiempo real, sin requerir intervención de un operador humano.
            </p>
          </article>

          {/* CASO 3: Presupuestos PDFs (VIDEO) */}
          <article className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 hover:border-slate-600 transition-colors group">
            <div className="bg-slate-950 rounded-2xl h-48 mb-6 flex items-center justify-center border border-slate-800 relative overflow-hidden">
              <div className="absolute inset-0 bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors"></div>
              <div className="w-16 h-12 bg-red-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-white border-b-[8px] border-b-transparent ml-1"></div>
              </div>
            </div>
            <span className="text-blue-400 text-xs font-bold tracking-widest uppercase mb-2 block">Demo YouTube</span>
            <h3 className="text-xl font-bold text-white mb-3">Generador de Presupuestos y PDFs</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              El fin de las cotizaciones manuales en Excel. Este motor toma los inputs del cliente B2B y emite un presupuesto formalizado en PDF con cálculos exactos, listo para cerrar la venta.
            </p>
          </article>

          {/* CASO 4: Generador de Contratos */}
          <article className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 hover:border-slate-600 transition-colors group">
            <div className="bg-slate-950 rounded-2xl h-48 mb-6 flex items-center justify-center border border-slate-800 relative overflow-hidden">
              <span className="text-6xl group-hover:scale-110 transition-transform">📝</span>
            </div>
            <span className="text-blue-400 text-xs font-bold tracking-widest uppercase mb-2 block">Automatización Legal</span>
            <h3 className="text-xl font-bold text-white mb-3">Generador de Contratos B2B</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Lógica condicional que redacta automáticamente acuerdos comerciales y de prestación de servicios basándose en las variables de cada cierre. Riesgo de error humano reducido a cero.
            </p>
          </article>

        </div>
      </section>

      {/* ================= SECCIÓN PROFESIONALES ================= */}
      <section id="profesionales" className="max-w-6xl mx-auto px-6 mb-20 scroll-mt-32 relative z-10">
        <div className="mb-12 border-b border-slate-800 pb-6">
          <h2 className="text-3xl font-black text-white flex items-center gap-3">
            <span className="text-4xl">🧑‍⚕️</span> Firmas Profesionales
          </h2>
          <p className="text-slate-400 mt-2">Sistemas de captación y autoridad para especialistas independientes.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* CASO: La Roca */}
          <article className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 hover:border-slate-600 transition-colors flex flex-col group">
            <div className="bg-slate-950 rounded-2xl h-40 mb-6 flex items-center justify-center border border-slate-800 overflow-hidden relative">
              <span className="text-5xl group-hover:scale-110 transition-transform">💎</span>
            </div>
            <span className="text-emerald-400 text-xs font-bold tracking-widest uppercase mb-2 block">Bienes Raíces & Inversión</span>
            <h3 className="text-xl font-bold text-white mb-3">La Roca Emprendimientos</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
              Embudo de captación diseñado para proyectar solidez y filtrar inversores cualificados antes de llegar al cierre comercial.
            </p>
          </article>

          {/* CASO: Dra Bianca */}
          <article className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 hover:border-slate-600 transition-colors flex flex-col group">
            <div className="bg-slate-950 rounded-2xl h-40 mb-6 flex flex-col items-center justify-center border border-slate-800 overflow-hidden relative">
               <span className="text-5xl group-hover:scale-110 transition-transform mb-2">🦷</span>
               <span className="text-xs text-slate-500 font-mono">drabiancapy.com</span>
            </div>
            <span className="text-emerald-400 text-xs font-bold tracking-widest uppercase mb-2 block">Odontología Especializada</span>
            <h3 className="text-xl font-bold text-white mb-3">Dra. Bianca Amarilla</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
              Consultorio digital completo. El sistema posiciona su autoridad médica, agenda turnos y precalifica los motivos de consulta directamente hacia su WhatsApp operativo.
            </p>
          </article>

          {/* CASO: Dr Jose */}
          <article className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 hover:border-slate-600 transition-colors flex flex-col group">
            <div className="bg-slate-950 rounded-2xl h-40 mb-6 flex flex-col items-center justify-center border border-slate-800 overflow-hidden relative">
              <span className="text-5xl group-hover:scale-110 transition-transform mb-2">🩺</span>
              <span className="text-xs text-slate-500 font-mono">drjoselahaye.com</span>
            </div>
            <span className="text-emerald-400 text-xs font-bold tracking-widest uppercase mb-2 block">Medicina</span>
            <h3 className="text-xl font-bold text-white mb-3">Dr. José Lahaye</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
              Plataforma médica para captación de pacientes. Diseñada con un flujo limpio, rápido y optimizado para generar confianza inmediata en el entorno digital.
            </p>
          </article>

        </div>
      </section>

      {/* CALL TO ACTION PARA PRECIOS */}
      <section className="max-w-3xl mx-auto px-6 text-center mt-20 relative z-10">
        <div className="bg-gradient-to-r from-blue-900/20 to-emerald-900/20 border border-slate-800 rounded-[2rem] p-10 backdrop-blur-md">
          <h3 className="text-2xl md:text-3xl font-black text-white mb-4">¿Querés tu propio sistema?</h3>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            Viste la lógica, viste la estructura. Ahora mirá exactamente cuánto cuesta implementar uno de estos motores en tu negocio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/precios" 
              className="bg-white text-slate-950 font-black py-4 px-8 rounded-xl hover:bg-slate-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] active:scale-95"
            >
              Ver Arquitectura de Precios
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
