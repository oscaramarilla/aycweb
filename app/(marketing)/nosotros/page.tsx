import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nuestra Historia | AYCweb",
  description: "AYCweb no nació en una agencia de diseño, nació operando en la industria real. Conoce las instituciones que confían en nuestra infraestructura digital.",
};

export default function ExperienciaPage() {
  const whatsappNumber = "595985864209";
  const whatsappMsg = encodeURIComponent("¡Hola Oscar! Leí la historia de AYCweb y me interesa agendar una auditoría operativa para mi empresa.");

  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 text-zinc-50 font-sans pb-24 md:pb-0">
      
      {/* HERO: EL MANIFIESTO */}
      <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 px-6 text-center overflow-hidden border-b border-zinc-900">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-zinc-900 text-zinc-400 text-xs font-bold uppercase tracking-widest border border-zinc-800 mb-6">
            De Operadores a Constructores
          </span>
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter leading-[1.05] text-white">
            Conocemos el caos B2B <br/> <span className="text-blue-500">porque lo vivimos a diario.</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            AYCweb no es una agencia de marketing tradicional. Nacimos en la trinchera empresarial, gestionando manufactura, logística y licitaciones.
          </p>
        </div>
      </section>

      {/* STORYTELLING: EL ORIGEN */}
      <section className="py-24 bg-black border-b border-zinc-900">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-black text-white">El software nació por necesidad.</h2>
              <p className="text-zinc-400 leading-relaxed text-lg">
                Sabemos lo que es perder dinero por una cotización mal calculada en Excel a las 2 de la mañana. Sabemos lo que es perder un cliente corporativo porque un mensaje de WhatsApp se traspapeló.
              </p>
              <p className="text-zinc-400 leading-relaxed text-lg">
                Dirigir operaciones como <strong className="text-zinc-200">Metal Mad E.A.S.</strong> y <strong className="text-zinc-200">AYC S.R.L.</strong> nos obligó a buscar soluciones reales. Los softwares "enlatados" del mercado eran lentos y no entendían la realidad de las PyMEs locales. Así que empezamos a programar nuestra propia infraestructura.
              </p>
              <p className="text-zinc-400 leading-relaxed text-lg">
                Ese fue el punto de inflexión. Sistematizamos nuestros propios negocios y, al ver los resultados, otras instituciones nos pidieron que construyéramos sus motores comerciales.
              </p>
            </div>
            
            {/* CITA CURADA (Sin comillas rotas ni bugs visuales) */}
            <div className="bg-zinc-900/80 rounded-[2rem] border border-zinc-800 p-10 shadow-2xl relative">
              <p className="text-xl md:text-2xl font-bold text-white leading-relaxed relative z-10 mb-8 italic">
                &quot;Nos dimos cuenta de que las empresas B2B no necesitan páginas web más lindas. Necesitan infraestructura digital que elimine el caos manual y acelere las ventas.&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center font-black text-white shadow-lg border border-blue-400">
                  OA
                </div>
                <div>
                  <p className="font-bold text-white">Oscar Amarilla</p>
                  <p className="text-zinc-500 text-sm">Fundador, AYCweb</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENTES ELITE (SVGs limpios, cero emojis rotos) */}
      <section className="py-24 bg-zinc-950 border-b border-zinc-900 relative overflow-hidden">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Instituciones que confían en nuestro criterio</h2>
            <p className="text-zinc-400">Escala gubernamental, educación de élite y manufactura pesada.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-blue-500/50 transition-colors group">
              <div className="w-8 h-8 mb-5 text-zinc-500 group-hover:text-blue-400 transition-colors">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Ministerio de Educación</h3>
              <p className="text-zinc-500 text-sm">Despliegue a escala gubernamental garantizando soporte y alta concurrencia.</p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-blue-500/50 transition-colors group">
              <div className="w-8 h-8 mb-5 text-zinc-500 group-hover:text-blue-400 transition-colors">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Colegio Cristo Rey</h3>
              <p className="text-zinc-500 text-sm">Infraestructura digital para una de las instituciones educativas más prestigiosas.</p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-blue-500/50 transition-colors group">
              <div className="w-8 h-8 mb-5 text-zinc-500 group-hover:text-blue-400 transition-colors">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Caja Mutual UC</h3>
              <p className="text-zinc-500 text-sm">Soluciones orientadas al sector financiero, priorizando la privacidad de datos.</p>
            </div>

            {/* CARD CTA PARA EL PROSPECTO */}
            <div className="bg-gradient-to-br from-blue-900/40 to-black border border-blue-800/50 rounded-2xl p-8 flex flex-col justify-center items-center text-center">
              <h3 className="text-lg font-bold text-blue-400 mb-2">Tu Empresa</h3>
              <p className="text-zinc-400 text-sm mb-6">El próximo caso de éxito en eficiencia operativa.</p>
              <a href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`} target="_blank" rel="noopener noreferrer" className="text-white font-bold text-sm bg-blue-600 hover:bg-blue-500 py-3 px-6 rounded-xl transition-all">
                Hablemos de negocios &rarr;
              </a>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
