import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Soluciones de Ingeniería Digital B2B | AYCweb Paraguay",
  description:
    "Dejamos de vender páginas web. Construimos ecosistemas que resuelven cuellos de botella en ventas y operaciones para empresas en Paraguay.",
};

export default function SolucionesPage() {
  const whatsappNumber = "595985864209";
  const whatsappMsg = encodeURIComponent("¡Hola Oscar! Quiero que analicemos mi caso para ver si una solución de AYCweb me puede ayudar a escalar.");

  const videos = [
    { id: "vOCqg_zctec", title: "Motor Logístico" },
    { id: "n1xOvGtHsIA", title: "Cálculo de Plásticos" },
    { id: "JBvZd0uXbzQ", title: "Presupuestos PDFs" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-slate-50 font-sans relative overflow-hidden">
      
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay z-0"></div>

      {/* ================= HERO: VENTA CONSULTIVA ================= */}
      <section className="relative pt-28 pb-12 md:pt-40 md:pb-24 px-6 text-center border-b border-white/[0.05] z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>
        
        <div className="max-w-5xl mx-auto relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-900/20 text-blue-400 text-[11px] md:text-xs font-bold uppercase tracking-widest border border-blue-500/20 mb-6 md:mb-8 shadow-inner">
            Enfocados en el problema, no en el producto
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-6 md:mb-8 tracking-tighter leading-[1.05] text-white">
            Tu empresa no necesita software. <br className="hidden md:block"/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Necesita orden.</span>
          </h1>
          <p className="text-base md:text-2xl text-slate-400 mb-8 md:mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            Dejá de perder dinero por cotizaciones manuales lentas o seguimientos rotos en WhatsApp. Construimos sistemas que trabajan para tu equipo, no al revés.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
            <a 
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
              target="_blank" rel="noopener noreferrer"
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-black py-3.5 md:py-4 px-8 md:px-10 rounded-xl transition-all shadow-[0_0_30px_rgba(37,99,235,0.4)] active:scale-95 text-[15px] md:text-lg"
            >
              Diagnóstico de 15 Minutos
            </a>
            <Link 
              href="#sistemas"
              className="w-full sm:w-auto bg-slate-900 border border-slate-700 hover:border-slate-500 text-slate-200 hover:text-white font-bold py-3.5 md:py-4 px-8 md:px-10 rounded-xl transition-all text-[15px] md:text-lg"
            >
              Ver cómo funciona
            </Link>
          </div>
        </div>
      </section>

      {/* ================= LA HISTORIA DE VALOR ================= */}
      <section className="py-16 md:py-24 relative z-10 bg-[#04050a]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                Entendemos el dolor de escalar.
              </h2>
              <div className="space-y-4 md:space-y-6 text-slate-400 text-[15px] md:text-lg leading-relaxed">
                <p>
                  Vender es difícil, pero <strong className="text-white">gestionar el volumen</strong> cuando empiezas a crecer es caótico. Los vendedores pierden tiempo haciendo PDFs en Word, los gerentes no tienen trazabilidad, y la atención al cliente depende de un teléfono que suena todo el día.
                </p>
                <p>
                  Nosotros no te ofrecemos "una página web". Te construimos el motor operativo para que tu negocio pueda recibir el doble de clientes mañana, sin que tus costos de personal se multipliquen.
                </p>
              </div>
            </div>
            <div className="bg-slate-900/60 border border-slate-800 rounded-[1.5rem] md:rounded-3xl p-6 md:p-8 shadow-2xl relative">
              <h3 className="text-lg font-bold text-white mb-4">Lo que logramos al implementar la solución:</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-emerald-500 mt-1">✔️</span>
                  <span className="text-slate-300 text-[14px] md:text-base">De horas cotizando a respuestas en 45 segundos.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-500 mt-1">✔️</span>
                  <span className="text-slate-300 text-[14px] md:text-base">De errores de cálculo a precisión milimétrica del 100%.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-500 mt-1">✔️</span>
                  <span className="text-slate-300 text-[14px] md:text-base">De clientes esperando a atención calificada las 24 horas.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= LOS SISTEMAS ================= */}
      <section id="sistemas" className="py-16 md:py-28 relative z-10 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-6xl font-black text-white mb-4 md:mb-6 tracking-tight">
              Diseñamos a tu medida
            </h2>
            <p className="text-base md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Analizamos tu caso de forma individual. Si no lo necesitas, no te lo ofrecemos. Cero "enlatados".
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto">
            
            <div className="group bg-slate-900/40 backdrop-blur-sm p-6 md:p-10 rounded-[1.5rem] md:rounded-3xl border border-slate-800 hover:border-emerald-700/50 transition-all duration-300 hover:bg-slate-900/80">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-emerald-600/10 border border-emerald-600/30 flex items-center justify-center mb-4 md:mb-6 group-hover:bg-emerald-600/20 transition-all">
                <span className="text-xl md:text-2xl">⚡</span>
              </div>
              <h3 className="text-xl md:text-2xl font-black text-white mb-2 md:mb-4 group-hover:text-emerald-400 transition-colors">
                Automatización de Ventas
              </h3>
              <p className="text-slate-400 leading-relaxed mb-5 md:mb-6 text-[14px] md:text-sm">
                Cotizadores dinámicos, generación de PDFs formales y embudos que filtran curiosos. Tu equipo solo habla con quien está listo para pagar.
              </p>
            </div>

            <div className="group bg-slate-900/40 backdrop-blur-sm p-6 md:p-10 rounded-[1.5rem] md:rounded-3xl border border-slate-800 hover:border-purple-700/50 transition-all duration-300 hover:bg-slate-900/80">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-purple-600/10 border border-purple-600/30 flex items-center justify-center mb-4 md:mb-6 group-hover:bg-purple-600/20 transition-all">
                <span className="text-xl md:text-2xl">⚙️</span>
              </div>
              <h3 className="text-xl md:text-2xl font-black text-white mb-2 md:mb-4 group-hover:text-purple-400 transition-colors">
                Orden Operativo
              </h3>
              <p className="text-slate-400 leading-relaxed mb-5 md:mb-6 text-[14px] md:text-sm">
                Portales B2B, generadores de contratos legales y dashboards en tiempo real. Elimina el papeleo manual y da seguridad a tus clientes.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= PRUEBA VISUAL (GOD SPOT VIDEOS) ================= */}
      <section className="py-16 md:py-24 relative z-10 bg-[#04050a] border-y border-white/[0.05]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Ver para creer</h2>
            <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto">
              No nos creas a nosotros. Mira cómo la infraestructura trabaja en la vida real.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {videos.map((video, index) => (
              <div key={index} className="flex flex-col items-center group">
                <div className="w-full aspect-[9/16] bg-slate-900/50 rounded-[2rem] p-3 md:p-4 border border-slate-800 shadow-2xl hover:border-blue-500/50 hover:shadow-blue-900/20 transition-all duration-300 relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 rounded-[2rem] transition-opacity pointer-events-none"></div>
                  <iframe
                    className="w-full h-full rounded-2xl"
                    src={`https://www.youtube.com/embed/${video.id}?autoplay=0&loop=0&controls=1&showinfo=0&rel=0`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <h3 className="text-white font-bold mt-4 text-center">{video.title}</h3>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/god-spot" className="inline-block text-blue-400 hover:text-blue-300 font-bold border-b border-blue-400/30 hover:border-blue-300 pb-1 transition-all">
              Ir al God Spot completo &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ================= GARANTÍA Y CTA ================= */}
      <section className="py-16 md:py-28 relative z-10 overflow-hidden">
        <div className="absolute top-1/2 right-0 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>
        
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
            Nuestra recomendación es honesta
          </h2>
          <p className="text-slate-400 text-[15px] md:text-lg mb-8 md:mb-10 leading-relaxed">
            Hablaremos en términos simples, cero jerga técnica. Si después de analizar tu caso vemos que no te podemos ayudar a escalar, te lo diremos. Si trabajamos juntos y el resultado no es lo que esperabas, <strong className="text-white">te devolvemos tu dinero.</strong>
          </p>
          
          <a 
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
            target="_blank" rel="noopener noreferrer"
            className="block sm:inline-block bg-blue-600 hover:bg-blue-500 text-white font-black py-3.5 md:py-4 px-8 md:px-10 rounded-xl transition-all shadow-[0_0_30px_rgba(37,99,235,0.4)] active:scale-95 text-[15px] md:text-base"
          >
            Hablemos sobre tu negocio
          </a>
          <p className="mt-4 text-xs text-slate-500">Sin compromiso. Charla directa con los creadores de AYCweb.</p>
        </div>
      </section>

    </div>
  );
}
