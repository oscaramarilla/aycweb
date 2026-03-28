import Link from "next/link";

export default function ExperienciaPage() {
  const whatsappNumber = "595985864209";
  const whatsappMsg = encodeURIComponent("¡Hola Oscar! Leí sobre tu trayectoria y me interesa el nivel de disciplina operativa que aplican a los sistemas digitales. ¿Podemos agendar una reunión?");

  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 text-zinc-50 font-sans pb-24 md:pb-0">
      
      <section className="relative pt-16 pb-16 md:pt-28 md:pb-16 px-6 text-center overflow-hidden border-b border-zinc-900">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter leading-[1.05] text-white">
            Llevamos la <span className="text-blue-500">disciplina corporativa</span> al mundo digital.
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
            Antes de escribir una sola línea de código, operamos en la vida real. Entendemos de logística, contratos y licitaciones. Esa es la mentalidad que inyectamos en tu software.
          </p>
        </div>
      </section>

      {/* 🔥 AJUSTE VISUAL: Instituciones en Cards independientes (Grilla) */}
      <section className="py-16 bg-black border-b border-zinc-900">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-zinc-500 mb-10">
            Instituciones y empresas que confían en nuestro criterio:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              "Colegio Cristo Rey", 
              "Caja Mutual UC", 
              "Webprox", 
              "Metal Mad E.A.S.", 
              "Ministerio de Educación"
            ].map((inst, index) => (
              <div key={index} className="bg-zinc-900/80 border border-zinc-800 py-5 px-4 rounded-2xl flex items-center justify-center text-center shadow-sm hover:border-blue-500/30 transition-colors">
                <span className="text-zinc-300 text-sm font-bold">{inst}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-zinc-900/30 border-b border-zinc-900">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-zinc-950 p-8 md:p-12 rounded-[2.5rem] border border-zinc-800 shadow-2xl">
            <h2 className="text-3xl font-black text-white mb-8">El Respaldo Operativo</h2>
            <div className="space-y-6 text-zinc-400 leading-relaxed">
              <p>La mayoría de las agencias web nacen del diseño. Nosotros nacimos de las <strong className="text-zinc-200">operaciones complejas</strong>.</p>
              <p className="text-xl text-white font-medium border-l-4 border-blue-500 pl-6 my-8">
                "Nos dimos cuenta de que las empresas B2B no necesitan páginas web más lindas; necesitan infraestructura digital que elimine el caos manual."
              </p>
              <p>Hoy, AYCweb es el resultado de fusionar esa experiencia operativa en el mundo real con la ingeniería de software. No pensamos en colores; pensamos en cómo acelerar tus ventas.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-black text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Trabajemos con seriedad.</h2>
          <div className="flex justify-center mt-8">
            <a 
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex bg-blue-600 hover:bg-blue-500 text-white font-black py-4 px-10 rounded-xl transition-all shadow-lg active:scale-95"
            >
              Agendar Diagnóstico
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
