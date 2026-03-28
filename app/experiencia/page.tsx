import Link from "next/link";
import Image from "next/image";

export default function ExperienciaPage() {
  const whatsappNumber = "595985864209";
  const whatsappMsg = encodeURIComponent("¡Hola! Leí sobre tu trayectoria y quiero agendar un diagnóstico.");

  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 text-zinc-50 font-sans pb-24 md:pb-0">
      
      <section className="relative pt-16 pb-16 md:pt-28 md:pb-16 px-6 text-center overflow-hidden border-b border-zinc-900">
        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter text-white">
          Llevamos la <span className="text-blue-500">disciplina corporativa</span> al mundo digital.
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
          Antes de escribir una sola línea de código, operamos en la vida real. Entendemos de logística, contratos y licitaciones. Esa es la mentalidad que inyectamos en tu software.
        </p>
      </section>

      {/* 🔥 PUNTO 9: INSTITUCIONES EN CHIPS/CARDS */}
      <section className="py-12 bg-black border-b border-zinc-900">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-zinc-600 mb-8">
            Instituciones y empresas que confían en nuestro criterio:
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <span className="bg-zinc-900 border border-zinc-800 px-5 py-2.5 rounded-full text-zinc-300 text-sm font-bold shadow-sm">Colegio Cristo Rey</span>
            <span className="bg-zinc-900 border border-zinc-800 px-5 py-2.5 rounded-full text-zinc-300 text-sm font-bold shadow-sm">Caja Mutual UC</span>
            <span className="bg-zinc-900 border border-zinc-800 px-5 py-2.5 rounded-full text-zinc-300 text-sm font-bold shadow-sm">Webprox</span>
            <span className="bg-zinc-900 border border-zinc-800 px-5 py-2.5 rounded-full text-zinc-300 text-sm font-bold shadow-sm">Metal Mad E.A.S.</span>
            <span className="bg-zinc-900 border border-zinc-800 px-5 py-2.5 rounded-full text-zinc-300 text-sm font-bold shadow-sm">Ministerio de Educación (MEC)</span>
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

      {/* CTA FINAL UNIFICADO */}
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
