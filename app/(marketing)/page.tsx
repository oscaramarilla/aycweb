import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AYCweb Paraguay | Firma de Infraestructura Digital B2B",
  description: "Construimos ecosistemas digitales que automatizan ventas y operaciones para empresas y profesionales. No somos para todos, postulá a una auditoría.",
};

export default function HomePage() {
  const whatsappNumber = "595985864209";
  const whatsappMsg = encodeURIComponent("Hola Oscar. Quiero auditar mi operación con AYCweb.");

  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-slate-50 font-sans relative overflow-hidden">
      
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay z-0"></div>

      {/* ================= 1) HERO ================= */}
      <section className="relative pt-28 pb-12 md:pt-48 md:pb-32 px-6 text-center z-10 border-b border-white/[0.05]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
        
        <div className="max-w-5xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-[11px] md:text-xs font-bold uppercase tracking-widest mb-6 md:mb-8 shadow-sm">
            Infraestructura Digital para Empresas y Profesionales
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-6 md:mb-8 tracking-tighter leading-[1.05] text-white">
            Tu operación ya no necesita más improvisación. <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Necesita un sistema.</span>
          </h1>
          <p className="text-base md:text-2xl text-slate-400 mb-8 md:mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Convertimos procesos manuales en sistemas de captación, cotización y cierre para que dejes de depender de Excel, mensajes sueltos y seguimiento desordenado.
          </p>
          
          <div className="flex flex-col items-center justify-center gap-6">
            <a 
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
              target="_blank" rel="noopener noreferrer"
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-black py-3.5 md:py-4 px-8 md:px-10 rounded-xl transition-all shadow-[0_0_30px_rgba(37,99,235,0.4)] active:scale-95 text-[15px] md:text-lg"
            >
              Postular a Auditoría
            </a>
            
            {/* MICRO-LINKS DIRECCIONALES */}
            <div className="flex items-center gap-6 text-[13px] md:text-sm font-medium text-slate-400">
              <Link href="/empresas" className="hover:text-blue-400 transition-colors flex items-center gap-1.5">
                Soy empresa <span className="text-blue-500">&rarr;</span>
              </Link>
              <span className="text-slate-700">|</span>
              <Link href="/profesionales" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                Soy profesional <span className="text-emerald-500">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 2, 3 y 4) DOS CAMINOS SEPARADOS ================= */}
      <section className="py-16 md:py-24 relative z-10 bg-[#04050a]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 md:mb-6 leading-tight">Dos caminos. Dos sistemas.</h2>
            <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              No todos compran igual. Ya diseñamos una arquitectura distinta para empresas con operación compleja y para profesionales que necesitan captar mejor y vender con más orden.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {/* EMPRESAS */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-[1.5rem] md:rounded-3xl p-6 md:p-10 hover:border-blue-500/50 transition-all group flex flex-col">
              <span className="text-4xl md:text-5xl mb-4 md:mb-6 block">🏭</span>
              <h3 className="text-2xl md:text-3xl font-black text-white mb-3 md:mb-4 group-hover:text-blue-400 transition-colors">Para Empresas</h3>
              <p className="text-slate-400 leading-relaxed mb-6 md:mb-8 flex-1 text-[15px] md:text-lg">
                Si tu operación ya no cabe en Excel, te diseñamos un sistema para cotizar más rápido, reducir errores, emitir documentos al instante y ordenar mejor el proceso comercial.
              </p>
              <Link href="/empresas" className="block w-full text-center bg-slate-800 hover:bg-slate-700 text-white font-bold py-3.5 md:py-4 rounded-xl transition-all border border-slate-700 text-[14px] md:text-base">
                Ver soluciones para empresas &rarr;
              </Link>
            </div>

            {/* PROFESIONALES */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-[1.5rem] md:rounded-3xl p-6 md:p-10 hover:border-emerald-500/50 transition-all group flex flex-col">
              <span className="text-4xl md:text-5xl mb-4 md:mb-6 block">🧑‍⚕️</span>
              <h3 className="text-2xl md:text-3xl font-black text-white mb-3 md:mb-4 group-hover:text-emerald-400 transition-colors">Para Profesionales</h3>
              <p className="text-slate-400 leading-relaxed mb-6 md:mb-8 flex-1 text-[15px] md:text-lg">
                Si dependés del boca a boca o de consultas desordenadas, te armamos un sistema para captar mejor, filtrar prospectos y convertir más sin saturarte.
              </p>
              <Link href="/profesionales" className="block w-full text-center bg-slate-800 hover:bg-slate-700 text-white font-bold py-3.5 md:py-4 rounded-xl transition-all border border-slate-700 text-[14px] md:text-base">
                Ver soluciones para profesionales &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 5 y 6) MANIFIESTO Y ADMISIÓN ================= */}
      <section className="py-16 md:py-32 relative z-10 border-y border-white/[0.05] overflow-hidden">
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <span className="text-blue-500 font-bold tracking-widest uppercase text-[11px] md:text-sm mb-3 md:mb-4 block">Filtro de Admisión</span>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4 md:mb-6 leading-tight">
                No trabajamos por volumen. <br/> Trabajamos por encaje.
              </h2>
              <div className="space-y-4 md:space-y-6 text-slate-400 text-[15px] md:text-lg leading-relaxed">
                <p>
                  No aceptamos a todos los clientes. Si no vemos una oportunidad clara de ordenar, vender mejor o recuperar tiempo operativo, te lo vamos a decir de frente.
                </p>
                <p>
                  Nos alineamos con empresas y profesionales que entienden que un sistema bien hecho no es un gasto estético: es una inversión comercial y operativa.
                </p>
              </div>
            </div>
            
            <div className="bg-slate-950 border border-slate-800 rounded-[1.5rem] md:rounded-3xl p-6 md:p-8 shadow-2xl relative mt-4 md:mt-0">
               <div className="absolute -left-3 -top-3 md:-left-4 md:-top-4 w-10 h-10 md:w-12 md:h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-black text-lg md:text-xl shadow-lg border-4 border-slate-950">!</div>
               <h3 className="text-lg md:text-xl font-bold text-white mb-5 md:mb-6 pl-4 md:pl-0">Cómo entrás a AYCweb:</h3>
               <ul className="space-y-4 md:space-y-6">
                 <li className="flex gap-3 md:gap-4">
                   <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-xs md:text-sm font-bold text-slate-400 shrink-0">1</div>
                   <div>
                     <h4 className="text-white font-bold mb-1 text-[15px] md:text-base">Postulación</h4>
                     <p className="text-slate-500 text-[13px] md:text-sm leading-relaxed">Nos mostrás cómo vendés, cotizás o atendés hoy.</p>
                   </div>
                 </li>
                 <li className="flex gap-3 md:gap-4">
                   <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-xs md:text-sm font-bold text-slate-400 shrink-0">2</div>
                   <div>
                     <h4 className="text-white font-bold mb-1 text-[15px] md:text-base">Diagnóstico</h4>
                     <p className="text-slate-500 text-[13px] md:text-sm leading-relaxed">Detectamos si hay fricción real que valga la pena resolver.</p>
                   </div>
                 </li>
                 <li className="flex gap-3 md:gap-4">
                   <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-blue-900/30 border border-blue-500/30 flex items-center justify-center text-xs md:text-sm font-bold text-blue-400 shrink-0">3</div>
                   <div>
                     <h4 className="text-white font-bold mb-1 text-[15px] md:text-base">Arquitectura y Propuesta</h4>
                     <p className="text-slate-500 text-[13px] md:text-sm leading-relaxed">Si hay encaje, te presentamos el sistema exacto y el siguiente paso.</p>
                   </div>
                 </li>
               </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 7) GARANTÍA ================= */}
      <section className="py-16 md:py-24 relative z-10 bg-[#04050a]">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="bg-gradient-to-br from-slate-900/80 to-slate-950 border border-slate-800 rounded-[2rem] md:rounded-[3rem] p-6 md:p-16 text-center shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-blue-500/5 backdrop-blur-3xl z-0"></div>
            <div className="relative z-10">
              <span className="text-4xl md:text-6xl block mb-4 md:mb-8">🛡️</span>
              <h2 className="text-2xl md:text-5xl font-black text-white mb-4 md:mb-6">Garantía sin fricción</h2>
              <p className="text-slate-400 text-[15px] md:text-xl max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed">
                Elegimos con cuidado. Si detectamos que no somos el equipo correcto para tu caso, <strong className="text-white">te devolvemos el 100%</strong>. Si en los primeros 30 días no hay conformidad real, <strong className="text-white">te devolvemos el 100%</strong>. Sin letra chica.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-6 mb-8 md:mb-12">
                <div className="bg-slate-950/80 border border-slate-800 p-4 md:p-6 rounded-[1rem] md:rounded-2xl">
                  <div className="font-bold text-white mb-1 md:mb-2 text-[14px] md:text-base">Compromiso mutuo</div>
                  <div className="text-[13px] md:text-sm text-slate-500">Entramos con intención real de construir, no de improvisar.</div>
                </div>
                <div className="bg-slate-950/80 border border-slate-800 p-4 md:p-6 rounded-[1rem] md:rounded-2xl">
                  <div className="font-bold text-white mb-1 md:mb-2 text-[14px] md:text-base">30 días de respaldo</div>
                  <div className="text-[13px] md:text-sm text-slate-500">Tu operación no asume el riesgo sola.</div>
                </div>
                <div className="bg-slate-950/80 border border-slate-800 p-4 md:p-6 rounded-[1rem] md:rounded-2xl">
                  <div className="font-bold text-white mb-1 md:mb-2 text-[14px] md:text-base">Cero sorpresas</div>
                  <div className="text-[13px] md:text-sm text-slate-500">Sin costos ocultos. Sin vueltas. Todo claro desde el inicio.</div>
                </div>
              </div>

              <a 
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
                target="_blank" rel="noopener noreferrer"
                className="block w-full sm:w-auto sm:inline-block bg-white text-slate-950 font-black py-3.5 md:py-4 px-6 md:px-10 rounded-xl transition-all shadow-lg hover:bg-slate-200 active:scale-95 text-[15px] md:text-base"
              >
                Quiero auditar mi operación
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
