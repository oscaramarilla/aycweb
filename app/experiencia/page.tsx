import Link from "next/link";
import Image from "next/image";

export default function ExperienciaPage() {
  const whatsappNumber = "595985864209";
  const whatsappMsg = encodeURIComponent("¡Hola Oscar! Leí sobre tu trayectoria y me interesa el nivel de disciplina operativa que aplican a los sistemas digitales. ¿Podemos agendar una reunión?");

  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 text-zinc-50 font-sans pb-24 md:pb-0">
      
      {/* 🚀 HERO: Beneficio Actual (Resumen Ejecutivo) */}
      <section className="relative pt-20 pb-16 md:pt-28 md:pb-16 px-6 text-center overflow-hidden border-b border-zinc-900">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter leading-[1.05] text-white">
            Llevamos la <span className="text-blue-500">disciplina corporativa</span> al mundo digital.
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
            Antes de escribir una sola línea de código, operamos en la vida real. Entendemos de logística, contratos, márgenes de ganancia y licitaciones. Esa es la mentalidad que inyectamos en tu software.
          </p>
        </div>
      </section>

      {/* 🏢 LOGOS Y CLIENTES: Prueba Social Inmediata */}
      <section className="py-12 bg-black border-b border-zinc-900">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-zinc-600 mb-8">
            Instituciones y empresas que confían en nuestro criterio:
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 text-zinc-400 font-black text-lg md:text-xl grayscale opacity-70">
            <span>Colegio Cristo Rey</span>
            <span>Caja Mutual UC</span>
            <span>Webprox</span>
            <span>Metal Mad E.A.S.</span>
            <span>Ministerio de Educación (MEC)</span>
          </div>
        </div>
      </section>

      {/* 📚 LA HISTORIA / BACKGROUND B2G */}
      <section className="py-24 bg-zinc-900/30 border-b border-zinc-900">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-zinc-950 p-8 md:p-12 rounded-[2.5rem] border border-zinc-800 shadow-2xl">
            <h2 className="text-3xl font-black text-white mb-8">El Respaldo Operativo</h2>
            
            <div className="space-y-6 text-zinc-400 leading-relaxed">
              <p>
                La mayoría de las agencias web nacen del diseño. Nosotros nacimos de las <strong className="text-zinc-200">operaciones complejas</strong>.
              </p>
              <p>
                Durante años, gestionamos licitaciones públicas de alta exigencia, coordinamos logística masiva a nivel nacional y estructuramos contratos bajo presión estricta para instituciones como el MEC y la Caja Mutual UC.
              </p>
              <p>
                Sabemos lo que pasa cuando un proceso falla. Sabemos cuánto dinero se pierde cuando un documento tiene un error o un presupuesto no se entrega a tiempo.
              </p>
              <p className="text-xl text-white font-medium border-l-4 border-blue-500 pl-6 my-8">
                "Nos dimos cuenta de que las empresas B2B no necesitan páginas web más lindas; necesitan infraestructura digital que elimine el caos manual."
              </p>
              <p>
                Hoy, AYCweb es el resultado de fusionar esa experiencia operativa en el mundo real con la ingeniería de software y el marketing de conversión. Cuando construimos tu sistema, no estamos pensando en colores; estamos pensando en cómo <strong>acelerar tus ventas y reducir tus costos operativos</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 🚀 ÚNICO CTA FINAL (Fuerte y Compacto) */}
      <section className="py-24 bg-black text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Trabajemos con seriedad.</h2>
          <p className="text-xl text-zinc-400 mb-10 leading-relaxed">
            Si estás buscando un proveedor que entienda de negocios tanto como de tecnología, agendá una llamada comercial directa.
          </p>
          <a 
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex bg-blue-600 hover:bg-blue-500 text-white font-black py-4 px-10 rounded-xl transition-all shadow-[0_0_30px_-5px_rgba(37,99,235,0.4)] active:scale-95"
          >
            Agendar Reunión Comercial
          </a>
        </div>
      </section>

    </div>
  );
}
