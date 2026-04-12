import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AYCweb Paraguay | Firma de Infraestructura Digital B2B",
  description: "Construimos ecosistemas digitales que automatizan ventas y operaciones para empresas y profesionales. No somos para todos, postulá a una auditoría.",
};

export default function HomePage() {
  const whatsappNumber = "595985864209";
  const whatsappMsg = encodeURIComponent("Hola Oscar. Quiero postular mi negocio para una auditoría técnica con AYCweb.");

  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-slate-50 font-sans relative overflow-hidden">
      
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay z-0"></div>

      {/* ================= HERO ================= */}
      {/* Ajuste: pt-28 pb-12 en móvil, pt-48 pb-32 en desktop */}
      <section className="relative pt-28 pb-12 md:pt-48 md:pb-32 px-6 text-center z-10 border-b border-white/[0.05]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
        
        <div className="max-w-5xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-[11px] md:text-xs font-bold uppercase tracking-widest mb-6 md:mb-8 shadow-sm">
            No somos una agencia. Somos una Firma.
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-6 md:mb-8 tracking-tighter leading-[1.05] text-white">
            Tu negocio no necesita una página linda. <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Necesita un motor.</span>
          </h1>
          <p className="text-base md:text-2xl text-slate-400 mb-8 md:mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            Reemplazamos el caos de cotizar en Excel y responder WhatsApps manuales por <strong className="text-slate-200">infraestructura digital</strong> que capta, filtra y vende 24/7.
          </p>
          <div className="flex justify-center">
            <a 
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
              target="_blank" rel="noopener noreferrer"
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-black py-3.5 md:py-4 px-8 md:px-10 rounded-xl transition-all shadow-[0_0_30px_rgba(37,99,235,0.4)] active:scale-95 text-[15px] md:text-lg"
            >
              Postular a Auditoría
            </a>
          </div>
        </div>
      </section>

      {/* ================= PRINCIPIO 1: DOS CAMINOS SEPARADOS ================= */}
      {/* Ajuste: py-16 en móvil, py-24 en desktop */}
      <section className="py-16 md:py-24 relative z-10 bg-[#04050a]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 md:mb-6 leading-tight">Infraestructura especializada.</h2>
            <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Hablamos tu idioma. Elegí tu sector para ver la arquitectura, los precios y la propuesta de valor que te corresponde.
            </p>
          </div>

          {/* Ajuste: gap-4 en móvil, gap-8 en desktop. p-6 en móvil, p-10 en desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            <div className="bg-slate-900/60 border border-slate-800 rounded-[1.5rem] md:rounded-3xl p-6 md:p-10 hover:border-blue-500/50 transition-all group flex flex-col">
              <span className="text-4xl md:text-5xl mb-4 md:mb-6 block">🏭</span>
              <h3 className="text-2xl md:text-3xl font-black text-white mb-3 md:mb-4 group-hover:text-blue-400 transition-colors">Para Empresas</h3>
              <p className="text-slate-400 leading-relaxed mb-6 md:mb-8 flex-1 text-[15px] md:text-lg">
                Manufactureras, agroindustria, distribuidoras y clínicas. Diseñamos cotizadores dinámicos, generadores de contratos y embudos B2B que eliminan horas-hombre.
              </p>
              <Link href="/precios" className="block w-full text-center bg-slate-800 hover:bg-slate-700 text-white font-bold py-3.5 md:py-4 rounded-xl transition-all border border-slate-700 text-[14px] md:text-base">
                Ver Arquitectura Corporativa &rarr;
              </Link>
            </div>

            <div className="bg-slate-900/60 border border-slate-800 rounded-[1.5rem] md:rounded-3xl p-6 md:p-10 hover:border-emerald-500/50 transition-all group flex flex-col">
              <span className="text-4xl md:text-5xl mb-4 md:mb-6 block">🧑‍⚕️</span>
              <h3 className="text-2xl md:text-3xl font-black text-white mb-3 md:mb-4 group-hover:text-emerald-400 transition-colors">Para Profesionales</h3>
              <p className="text-slate-400 leading-relaxed mb-6 md:mb-8 flex-1 text-[15px] md:text-lg">
                Médicos, abogados, contadores, arquitectos. Sistemas optimizados para captar clientes cualificados, precalificar consultas y gestionar agendas en automático.
              </p>
              <Link href="/precios" className="block w-full text-center bg-slate-800 hover:bg-slate-700 text-white font-bold py-3.5 md:py-4 rounded-xl transition-all border border-slate-700 text-[14px] md:text-base">
                Ver Sistemas de Captación &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PRINCIPIO 2: NOSOTROS ELEGIMOS ================= */}
      <section className="py-16 md:py-32 relative z-10 border-y border-white/[0.05] overflow-hidden">
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <span className="text-blue-500 font-bold tracking-widest uppercase text-[11px] md:text-sm mb-3 md:mb-4 block">Nuestro Manifiesto</span>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4 md:mb-6 leading-tight">
                No vendemos. <br/> Evaluamos y construimos.
              </h2>
              <div className="space-y-4 md:space-y-6 text-slate-400 text-[15px] md:text-lg leading-relaxed">
                <p>
                  No aceptamos a todos los clientes. Si tu negocio no está listo para escalar, o si sentimos que no te vamos a generar un ROI claro, <strong className="text-white">te lo diremos en 10 minutos sin cobrarte un guaraní.</strong>
                </p>
                <p>
                  Trabajamos exclusivamente con quienes entienden que el software es una inversión operativa, no un gasto de diseño.
                </p>
              </div>
            </div>
            
            <div className="bg-slate-950 border border-slate-800 rounded-[1.5rem] md:rounded-3xl p-6 md:p-8 shadow-2xl relative mt-4 md:mt-0">
               <div className="absolute -left-3 -top-3 md:-left-4 md:-top-4 w-10 h-10 md:w-12 md:h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-black text-lg md:text-xl shadow-lg border-4 border-slate-950">!</div>
               <h3 className="text-lg md:text-xl font-bold text-white mb-5 md:mb-6 pl-4 md:pl-0">El proceso de admisión:</h3>
               <ul className="space-y-4 md:space-y-6">
                 <li className="flex gap-3 md:gap-4">
                   <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-xs md:text-sm font-bold text-slate-400 shrink-0">1</div>
                   <div>
                     <h4 className="text-white font-bold mb-1 text-[15px] md:text-base">Postulación</h4>
                     <p className="text-slate-500 text-[13px] md:text-sm leading-relaxed">Nos contás cómo funciona tu operativa hoy.</p>
                   </div>
                 </li>
                 <li className="flex gap-3 md:gap-4">
                   <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-xs md:text-sm font-bold text-slate-400 shrink-0">2</div>
                   <div>
                     <h4 className="text-white font-bold mb-1 text-[15px] md:text-base">Auditoría Técnica</h4>
                     <p className="text-slate-500 text-[13px] md:text-sm leading-relaxed">Evaluamos cuellos de botella reales a automatizar.</p>
                   </div>
                 </li>
                 <li className="flex gap-3 md:gap-4">
                   <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-blue-900/30 border border-blue-500/30 flex items-center justify-center text-xs md:text-sm font-bold text-blue-400 shrink-0">3</div>
                   <div>
                     <h4 className="text-white font-bold mb-1 text-[15px] md:text-base">Match & Propuesta</h4>
                     <p className="text-slate-500 text-[13px] md:text-sm leading-relaxed">Si pasás el filtro, presentamos la arquitectura y empezamos.</p>
                   </div>
                 </li>
               </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PRINCIPIO 3: GARANTÍA DE HIERRO ================= */}
      <section className="py-16 md:py-24 relative z-10 bg-[#04050a]">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="bg-gradient-to-br from-slate-900/80 to-slate-950 border border-slate-800 rounded-[2rem] md:rounded-[3rem] p-6 md:p-16 text-center shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-blue-500/5 backdrop-blur-3xl z-0"></div>
            <div className="relative z-10">
              <span className="text-4xl md:text-6xl block mb-4 md:mb-8">🛡️</span>
              <h2 className="text-2xl md:text-5xl font-black text-white mb-4 md:mb-6">Garantía Inquebrantable</h2>
              <p className="text-slate-400 text-[15px] md:text-xl max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed">
                Nos obligamos a elegir bien. Si decidimos que no somos el equipo correcto, <strong className="text-white">te devolvemos el 100%</strong>. Si no estás conforme en 30 días, <strong className="text-white">te devolvemos el 100%</strong>. Sin letra chica.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-6 mb-8 md:mb-12">
                <div className="bg-slate-950/80 border border-slate-800 p-4 md:p-6 rounded-[1rem] md:rounded-2xl">
                  <div className="font-bold text-white mb-1 md:mb-2 text-[14px] md:text-base">Pagás primero</div>
                  <div className="text-[13px] md:text-sm text-slate-500">Filtramos curiosos. Compromiso total.</div>
                </div>
                <div className="bg-slate-950/80 border border-slate-800 p-4 md:p-6 rounded-[1rem] md:rounded-2xl">
                  <div className="font-bold text-white mb-1 md:mb-2 text-[14px] md:text-base">30 Días Libres</div>
                  <div className="text-[13px] md:text-sm text-slate-500">Riesgo cero para tu negocio.</div>
                </div>
                <div className="bg-slate-950/80 border border-slate-800 p-4 md:p-6 rounded-[1rem] md:rounded-2xl">
                  <div className="font-bold text-white mb-1 md:mb-2 text-[14px] md:text-base">Sin excusas</div>
                  <div className="text-[13px] md:text-sm text-slate-500">Cero costos ocultos. 100% transparente.</div>
                </div>
              </div>

              <a 
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
                target="_blank" rel="noopener noreferrer"
                className="block w-full sm:w-auto sm:inline-block bg-white text-slate-950 font-black py-3.5 md:py-4 px-6 md:px-10 rounded-xl transition-all shadow-lg hover:bg-slate-200 active:scale-95 text-[15px] md:text-base"
              >
                Aplicar para trabajar juntos
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
