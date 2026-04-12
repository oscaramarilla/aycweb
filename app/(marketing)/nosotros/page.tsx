import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nuestra Historia | AYCweb",
  description: "AYCweb no nació en una agencia de diseño, nació operando en la industria real. Conoce los sistemas que corren sobre nuestra infraestructura.",
};

export default function NosotrosPage() {
  const whatsappNumber = "595985864209";
  const whatsappMsg = encodeURIComponent("¡Hola Oscar! Leí la historia de AYCweb y me interesa agendar una auditoría operativa para mi empresa.");

  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-slate-50 font-sans pb-24 md:pb-0 relative overflow-hidden">
      
      {/* Fondo de ruido tecnológico */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay z-0"></div>

      {/* HERO: EL MANIFIESTO */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-6 text-center border-b border-white/[0.05] z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
        <div className="max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-slate-900 text-slate-300 text-xs font-bold uppercase tracking-widest border border-slate-800 mb-6 shadow-md">
            De Operadores a Constructores
          </span>
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter leading-[1.05] text-white">
            Conocemos el caos B2B <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">porque lo vivimos a diario.</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            AYCweb no es una agencia de marketing tradicional. Nacimos en la trinchera empresarial, gestionando manufactura, logística y licitaciones.
          </p>
        </div>
      </section>

      {/* STORYTELLING: EL ORIGEN */}
      <section className="py-24 relative z-10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-black text-white">El software nació por necesidad.</h2>
              <p className="text-slate-400 leading-relaxed text-lg">
                Sabemos lo que es perder dinero por una cotización mal calculada en Excel a las 2 de la mañana. Sabemos lo que es perder un cliente corporativo porque un mensaje de WhatsApp se traspapeló.
              </p>
              <p className="text-slate-400 leading-relaxed text-lg">
                Dirigir operaciones como <strong className="text-slate-200">Metal Mad E.A.S.</strong> y <strong className="text-slate-200">AYC S.R.L.</strong> nos obligó a buscar soluciones reales. Los softwares "enlatados" del mercado eran lentos y no entendían la realidad de las PyMEs locales. Así que empezamos a programar nuestra propia infraestructura.
              </p>
              <p className="text-slate-400 leading-relaxed text-lg">
                Ese fue el punto de inflexión. Sistematizamos nuestros propios negocios y, al ver los resultados, otras instituciones nos pidieron que construyéramos sus motores comerciales.
              </p>
            </div>
            
            <div className="bg-slate-900/60 backdrop-blur-md rounded-[2rem] border border-slate-800 p-10 shadow-2xl relative group hover:border-slate-600 transition-colors">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-[2rem] blur opacity-10 group-hover:opacity-20 transition duration-1000 group-hover:duration-200 -z-10"></div>
              <p className="text-xl md:text-2xl font-bold text-white leading-relaxed relative z-10 mb-8 italic">
                &quot;Nos dimos cuenta de que las empresas B2B no necesitan páginas web más lindas. Necesitan infraestructura digital que elimine el caos manual y acelere las ventas.&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center font-black text-white shadow-lg border border-blue-400">
                  OA
                </div>
                <div>
                  <p className="font-bold text-white">Oscar Amarilla</p>
                  <p className="text-slate-500 text-sm">Fundador, AYCweb</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO REAL (LINKS ACTUALIZADOS) */}
      <section className="py-24 bg-[#04050a] border-y border-white/[0.05] relative overflow-hidden z-10">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-600/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Sistemas en Producción</h2>
            <p className="text-slate-400">Operaciones reales corriendo sobre nuestra infraestructura en este momento.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* EMPRESAS */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">🏭</span>
                <h3 className="text-2xl font-bold text-white">División Empresas</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name: "Metal Mad E.A.S.", url: "metalmadeas.com" },
                  { name: "AYC S.R.L.", url: "ayc.com.py" },
                  { name: "Oriplast", url: "oriplastpy.com" },
                  { name: "AYCweb Matriz", url: "aycweb.com" }
                ].map((site) => (
                  <a key={site.url} href={`https://${site.url}`} target="_blank" rel="noopener noreferrer" className="bg-slate-900/50 border border-blue-900/30 hover:border-blue-500/60 hover:bg-blue-900/20 p-6 rounded-2xl transition-all group flex flex-col justify-center items-center text-center">
                    <span className="text-white font-bold mb-1 group-hover:text-blue-400 transition-colors">{site.name}</span>
                    <span className="text-xs text-slate-500 font-mono flex items-center gap-1">
                      {site.url} <span className="opacity-0 group-hover:opacity-100 transition-opacity text-blue-400">↗</span>
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* PROFESIONALES */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">🧑‍⚕️</span>
                <h3 className="text-2xl font-bold text-white">División Profesionales</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name: "La Tableta", url: "latabletapy.com" },
                  { name: "Dra. Bianca Amarilla", url: "drabiancapy.com" },
                  { name: "La Roca Emprendimientos", url: "larocaemprendimientos.com" },
                  { name: "Dr. José Lahaye", url: "drjoselahaye.com" }
                ].map((site) => (
                  <a key={site.url} href={`https://${site.url}`} target="_blank" rel="noopener noreferrer" className="bg-slate-900/50 border border-emerald-900/30 hover:border-emerald-500/60 hover:bg-emerald-900/20 p-6 rounded-2xl transition-all group flex flex-col justify-center items-center text-center">
                    <span className="text-white font-bold mb-1 group-hover:text-emerald-400 transition-colors">{site.name}</span>
                    <span className="text-xs text-slate-500 font-mono flex items-center gap-1">
                      {site.url} <span className="opacity-0 group-hover:opacity-100 transition-opacity text-emerald-400">↗</span>
                    </span>
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 text-center relative z-10">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Tu empresa puede ser la próxima.</h2>
          <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
            Dejá de pelear con herramientas que no se conectan entre sí. Construyamos tu motor operativo.
          </p>
          <a 
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
            target="_blank" rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-black py-4 px-10 rounded-xl transition-all shadow-[0_0_30px_rgba(37,99,235,0.4)] active:scale-95"
          >
            Agendar Diagnóstico Operativo
          </a>
        </div>
      </section>

    </div>
  );
}
