import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nuestra Experiencia y Filosofía | AYCweb",
  description: "AYCweb no nació en una agencia de diseño, nació operando en la industria real. Conoce las instituciones que confían en nuestra infraestructura digital.",
};

export default function ExperienciaPage() {
  const whatsappNumber = "595985864209";
  const whatsappMsg = encodeURIComponent("¡Hola Oscar! Leí la filosofía de AYCweb y me interesa agendar una auditoría operativa para mi empresa.");

  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 text-zinc-50 font-sans pb-24 md:pb-0">
      
      {/* HERO: EL MANIFIESTO */}
      <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 px-6 text-center overflow-hidden border-b border-zinc-900">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-zinc-900 text-zinc-400 text-xs font-bold uppercase tracking-widest border border-zinc-800 mb-6">
            Nuestra Historia
          </span>
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter leading-[1.05] text-white">
            Antes de escribir código,<br/> <span className="text-blue-500">operamos en la vida real.</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            AYCweb no nació en un escritorio de diseño gráfico. Nació en el barro de la logística, las licitaciones y la manufactura industrial.
          </p>
        </div>
      </section>

      {/* STORYTELLING: EL ORIGEN */}
      <section className="py-24 bg-black border-b border-zinc-900">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-black text-white">Conocemos el caos porque lo vivimos.</h2>
              <p className="text-zinc-400 leading-relaxed text-lg">
                Sabemos lo que es perder dinero por una cotización mal calculada en Excel. Sabemos lo que es perder un cliente porque un mensaje de WhatsApp se traspapeló en horas pico. 
              </p>
              <p className="text-zinc-400 leading-relaxed text-lg">
                Dirigir empresas como <strong className="text-zinc-200">Metal Mad E.A.S.</strong> y <strong className="text-zinc-200">AYC S.R.L.</strong> nos obligó a buscar soluciones. Como los softwares enlatados no entendían la realidad operativa de Paraguay, empezamos a construir nuestra propia infraestructura.
              </p>
              <p className="text-zinc-400 leading-relaxed text-lg">
                Ese fue el punto de inflexión. Empezamos a sistematizar nuestros propios negocios, y pronto, otras instituciones nos pidieron que hiciéramos lo mismo por ellos.
              </p>
            </div>
            
            {/* LA CITA DE AUTORIDAD (QUOTE) */}
            <div className="bg-zinc-900/80 rounded-[2rem] border border-zinc-800 p-10 shadow-2xl relative">
              <div className="absolute -top-6 -left-6 text-7xl text-blue-500/20 font-serif font-black">&quot;</div>
              <p className="text-xl md:text-2xl font-bold text-white leading-relaxed relative z-10 mb-8 italic">
                Nos dimos cuenta de que las empresas B2B no necesitan páginas web más lindas. Necesitan infraestructura digital que elimine el caos manual y acelere las ventas.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center font-black text-xl text-white shadow-lg border-2 border-zinc-800">
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

      {/* CLIENTES ELITE (Reemplazo de los botones simples) */}
      <section className="py-24 bg-zinc-950 border-b border-zinc-900 relative overflow-hidden">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Instituciones que confían en nuestro criterio</h2>
            <p className="text-zinc-400">Escala gubernamental, educación de élite y manufactura pesada.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* CARDS DE CLIENTES */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-blue-500/50 transition-colors group">
              <div className="text-4xl mb-4 opacity-50 group-hover:opacity-100 transition-opacity">🏛️</div>
              <h3 className="text-xl font-bold text-white mb-2">Ministerio de Educación</h3>
              <p className="text-zinc-500 text-sm">Desarrollo de sistemas a escala gubernamental, garantizando seguridad, soporte y alta concurrencia de usuarios.</p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-blue-500/50 transition-colors group">
              <div className="text-4xl mb-4 opacity-50 group-hover:opacity-100 transition-opacity">🎓</div>
              <h3 className="text-xl font-bold text-white mb-2">Colegio Cristo Rey</h3>
              <p className="text-zinc-500 text-sm">Infraestructura digital para una de las instituciones educativas más prestigiosas y exigentes del país.</p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-blue-500/50 transition-colors group">
              <div className="text-4xl mb-4 opacity-50 group-hover:opacity-100 transition-opacity">🏦</div>
              <h3 className="text-xl font-bold text-white mb-2">Caja Mutual UC</h3>
              <p className="text-zinc-500 text-sm">Soluciones tecnológicas orientadas al sector financiero e institucional, priorizando la privacidad de datos.</p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-blue-500/50 transition-colors group">
              <div className="text-4xl mb-4 opacity-50 group-hover:opacity-100 transition-opacity">🏭</div>
              <h3 className="text-xl font-bold text-white mb-2">Metal Mad E.A.S.</h3>
              <p className="text-zinc-500 text-sm">Digitalización del área comercial mediante motores logísticos y generadores automáticos de presupuestos B2B.</p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-blue-500/50 transition-colors group">
              <div className="text-4xl mb-4 opacity-50 group-hover:opacity-100 transition-opacity">💻</div>
              <h3 className="text-xl font-bold text-white mb-2">Webprox</h3>
              <p className="text-zinc-500 text-sm">Alianzas tecnológicas y despliegue de arquitectura digital para operaciones en la nube.</p>
            </div>

            {/* CARD CTA PARA EL PROSPECTO */}
            <div className="bg-gradient-to-br from-blue-900/40 to-black border border-blue-800/50 rounded-2xl p-8 flex flex-col justify-center items-center text-center">
              <h3 className="text-lg font-bold text-blue-400 mb-2">Tu Empresa</h3>
              <p className="text-zinc-400 text-sm mb-6">El próximo caso de éxito en eficiencia operativa.</p>
              <a href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`} target="_blank" rel="noopener noreferrer" className="text-white font-bold text-sm bg-blue-600 hover:bg-blue-500 py-2 px-4 rounded-lg transition-all">
                Hablemos &rarr;
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 bg-black text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Pasemos de la teoría a los números.</h2>
          <p className="text-zinc-400 text-lg mb-8">
            Si estás cansado de agencias que solo hablan de colores y querés hablar de rentabilidad, automatización y horas ahorradas, estamos en la misma sintonía.
          </p>
          <div className="flex justify-center">
             <a 
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
              target="_blank" rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-500 text-white font-black py-4 px-10 rounded-xl transition-all shadow-[0_0_30px_rgba(37,99,235,0.4)] active:scale-95"
            >
              Agendar Auditoría Operativa
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
