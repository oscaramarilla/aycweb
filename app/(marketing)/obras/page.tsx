"use client";

export default function GodSpotPage() {
  const whatsappNumber = "595985864209";
  const whatsappMsg = encodeURIComponent("Hola Oscar. Acabo de ver el ecosistema en el God Spot y quiero ese nivel de automatización en mi negocio.");

  // Tu video principal (El nuevo que me pasaste)
  const mainVideo = { id: "bltpfwxpwoQ", title: "El Ecosistema Operativo B2B en Acción" };

  // Los videos secundarios
  const secondaryVideos = [
    { id: "vOCqg_zctec", title: "Motor Cotizador" },
    { id: "n1xOvGtHsIA", title: "Contratos Automáticos" },
    { id: "JBvZd0uXbzQ", title: "Cálculo de Plásticos" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-slate-50 font-sans relative overflow-hidden pb-24">
      
      {/* Fondos */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay z-0"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      {/* HERO SECTION */}
      <section className="relative pt-28 pb-12 md:pt-40 md:pb-16 px-6 text-center z-10">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-[11px] md:text-xs font-bold uppercase tracking-widest mb-6 shadow-sm">
            Prueba Irrefutable
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 tracking-tighter leading-[1.05] text-white">
            El <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">God Spot.</span>
          </h1>
          <p className="text-base md:text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
            Menos promesas, más código en producción. Mirá nuestras infraestructuras operando en la vida real.
          </p>
        </div>
      </section>

      {/* VIDEO PRINCIPAL (DESTACADO) */}
      <section className="relative z-10 px-6 mb-16 md:mb-24">
        <div className="max-w-md mx-auto flex flex-col items-center">
          <div className="w-full relative bg-slate-900/80 rounded-[2rem] p-4 border border-blue-500/30 shadow-[0_0_50px_rgba(37,99,235,0.15)]">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[11px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg z-20 whitespace-nowrap">
              Caso Destacado
            </div>
            <div className="w-full aspect-[9/16] relative rounded-xl overflow-hidden bg-black">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${mainVideo.id}?autoplay=0&loop=0&controls=1&rel=0`}
                title={mainVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEOS SECUNDARIOS */}
      <section className="relative z-10 px-6 mb-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-white">Más automatizaciones en campo</h2>
            <div className="w-16 h-1 bg-slate-800 mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {secondaryVideos.map((video, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-full aspect-[9/16] bg-slate-900/50 rounded-[1.5rem] p-3 border border-slate-800 shadow-xl relative">
                  <div className="absolute top-5 left-5 right-5 z-20 pointer-events-none text-center">
                    <span className="bg-black/70 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-md border border-white/10 uppercase tracking-widest inline-block">
                      {video.title}
                    </span>
                  </div>
                  <iframe
                    className="w-full h-full rounded-xl"
                    src={`https://www.youtube.com/embed/${video.id}?autoplay=0&loop=0&controls=1&rel=0`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="text-center relative z-10 border-t border-white/[0.05] pt-16 px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            ¿Querés esta velocidad en tu empresa?
          </h2>
          <p className="text-slate-400 text-[15px] md:text-lg mb-8 leading-relaxed">
            Si tus procesos manuales son más lentos de lo que acabás de ver, estás perdiendo dinero.
          </p>
          <a 
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
            target="_blank" rel="noopener noreferrer"
            className="inline-block w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-black py-4 px-10 rounded-xl transition-all shadow-[0_0_30px_rgba(37,99,235,0.4)] active:scale-95 text-[15px]"
          >
            Auditar mi operativa hoy
          </a>
        </div>
      </section>

    </div>
  );
}
