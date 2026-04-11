"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { AYCWEB_CONTACT } from "@/lib/config/contact";

export default function Home() {
  const { t } = useLanguage();
  const whatsappNumber = AYCWEB_CONTACT.whatsappNumber;
  const whatsappMsgEmpresa = encodeURIComponent("¡Hola Oscar! Represento a una empresa y quiero evaluar si podemos construir infraestructura digital juntos.");
  const whatsappMsgProfesional = encodeURIComponent("¡Hola Oscar! Soy profesional independiente y busco sistematizar mi captación y ventas.");

  return (
    <div className="flex flex-col min-h-screen bg-transparent text-slate-50 font-sans relative overflow-x-hidden">
      
      {/* BLOQUE 1: EL HERO FUTURISTA */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-6 overflow-hidden border-b border-slate-800/50">
        {/* Luces de neón azules de fondo */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-600/15 rounded-full blur-[120px] pointer-events-none -z-10"></div>
        <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>
        
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full border border-blue-500/30 bg-blue-950/40 text-xs font-bold uppercase tracking-widest text-blue-300 shadow-[0_0_20px_rgba(37,99,235,0.2)]">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
            Firma de Infraestructura Digital
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 tracking-tighter leading-[1.05] text-white text-shadow-sm">
            No trabajamos por volumen.<br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 text-4xl md:text-5xl lg:text-6xl block mt-4">
              Construimos sistemas para quienes merecen escalar.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            Diseñamos infraestructura digital exclusiva para <strong className="text-white font-medium">empresas y profesionales independientes</strong> cuya visión, servicio y propuesta de valor necesitan ser potenciados con orden y automatización.
          </p>
        </div>
      </section>

      {/* BLOQUE 2: LOS DOS CAMINOS (Empresas vs Profesionales) */}
      <section className="py-24 bg-slate-950/50 border-b border-slate-800/50 relative">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Dos arquitecturas. Dos realidades.</h2>
            <p className="text-slate-400 text-lg">Cada segmento recibe una estrategia, estructura y presupuesto diferente.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Camino 1: EMPRESAS (Estética Azul Metálico) */}
            <div className="bg-slate-900 border border-slate-800 p-10 rounded-[2rem] hover:border-blue-500/50 transition-all shadow-2xl hover:shadow-[0_0_40px_rgba(37,99,235,0.15)] flex flex-col relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-[50px] group-hover:bg-blue-500/20 transition-all"></div>
              
              <div className="text-blue-400 text-5xl mb-6 relative z-10">🏢</div>
              <h3 className="text-3xl font-black text-white mb-4 relative z-10">Para Empresas</h3>
              <p className="text-slate-400 text-base leading-relaxed mb-8 flex-grow relative z-10">
                Diseñamos infraestructura operativa para organizaciones, industrias y clínicas que necesitan estandarizar procesos, eliminar el caos manual y tener trazabilidad total de sus ventas.
              </p>
              
              <ul className="space-y-4 text-slate-300 text-sm mb-10 relative z-10">
                <li className="flex gap-3 items-center"><span className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 font-bold text-xs">✓</span> Motores de cotización (cero Excel)</li>
                <li className="flex gap-3 items-center"><span className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 font-bold text-xs">✓</span> Contratos PDF automáticos</li>
                <li className="flex gap-3 items-center"><span className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 font-bold text-xs">✓</span> Dashboards de control centralizado</li>
              </ul>
              
              <a 
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMsgEmpresa}`}
                target="_blank" rel="noopener noreferrer"
                className="w-full text-center bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl transition-all shadow-lg relative z-10"
              >
                Auditar mi Empresa &rarr;
              </a>
            </div>

            {/* Camino 2: PROFESIONALES INDEPENDIENTES (Estética Esmeralda) */}
            <div className="bg-slate-900 border border-slate-800 p-10 rounded-[2rem] hover:border-emerald-500/50 transition-all shadow-2xl hover:shadow-[0_0_40px_rgba(16,185,129,0.15)] flex flex-col relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-[50px] group-hover:bg-emerald-500/20 transition-all"></div>

              <div className="text-emerald-400 text-5xl mb-6 relative z-10">🧑‍⚕️</div>
              <h3 className="text-3xl font-black text-white mb-4 relative z-10">Para Profesionales</h3>
              <p className="text-slate-400 text-base leading-relaxed mb-8 flex-grow relative z-10">
                Soluciones ágiles enfocadas al flujo real de médicos, odontólogos, abogados y consultores. Un sistema diseñado para captar, generar confianza y vender sin perder tu tiempo.
              </p>
              
              <ul className="space-y-4 text-slate-300 text-sm mb-10 relative z-10">
                <li className="flex gap-3 items-center"><span className="flex items-center justify-center w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-xs">✓</span> Presencia digital de alta autoridad</li>
                <li className="flex gap-3 items-center"><span className="flex items-center justify-center w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-xs">✓</span> Agenda de turnos y formularios</li>
                <li className="flex gap-3 items-center"><span className="flex items-center justify-center w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-xs">✓</span> Sistemas de cobro y cotización</li>
              </ul>
              
              <a 
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMsgProfesional}`}
                target="_blank" rel="noopener noreferrer"
                className="w-full text-center bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-black py-4 rounded-xl transition-all shadow-lg relative z-10"
              >
                Sistematizar mi Profesión &rarr;
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* BLOQUE 3: LA PRUEBA SOCIAL VISUAL */}
      <section className="py-24 border-b border-slate-800/50 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-slate-900 border border-slate-800 px-3 py-1 rounded-full text-[10px] font-bold text-slate-400 mb-6 uppercase tracking-widest">
                <span className="text-blue-400">✓</span> Tecnología en Acción
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                De operaciones manuales a máquinas automáticas.
              </h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Construimos el motor para que dejes de ser el cuello de botella de tu propio crecimiento. Mirá cómo funciona un ecosistema operando al 100%.
              </p>
              <Link href="/casos" className="inline-flex items-center gap-3 bg-slate-800 hover:bg-slate-700 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-md">
                Ver Casos de Estudio &rarr;
              </Link>
            </div>
            
            {/* Video Optimizado Vercel */}
            <div className="flex-1 w-full max-w-[280px] sm:max-w-[320px] mx-auto relative flex justify-center lg:justify-end">
              <div className="aspect-[9/16] w-full rounded-3xl border-4 border-slate-800 bg-slate-950 p-1 shadow-[0_0_60px_rgba(37,99,235,0.2)] relative overflow-hidden transform md:-rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="w-full h-full rounded-2xl overflow-hidden bg-slate-900 relative">
                  <iframe 
                    className="absolute top-0 left-0 w-full h-full object-cover scale-[1.02] bg-slate-900"
                    src="https://www.youtube.com/embed/vOCqg_zctec?autoplay=1&mute=1&loop=1&playlist=vOCqg_zctec&controls=0&modestbranding=1" 
                    srcDoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/vOCqg_zctec?autoplay=1><img src=https://img.youtube.com/vi/vOCqg_zctec/hqdefault.jpg alt='Demo Video'><span>▶</span></a>"
                    title="Demo Sistema AYCweb" 
                    frameBorder="0" 
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
