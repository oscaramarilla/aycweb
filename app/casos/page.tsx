import Link from "next/link";

export default function CasosPage() {
  const whatsappNumber = "595985864209";
  const whatsappMsg = encodeURIComponent("¡Hola! Estuve viendo los casos de éxito y quiero agendar un diagnóstico.");

  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 text-zinc-50 font-sans pb-24 md:pb-0">
      
      <section className="relative pt-16 pb-16 md:pt-28 md:pb-24 px-6 text-center overflow-hidden border-b border-zinc-900">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter leading-[1.05] text-white">
            No vendemos humo. <br/> <span className="text-blue-500">Construimos sistemas.</span>
          </h1>
        </div>
      </section>

      {/* CASO 1: METAL MAD */}
      <section className="py-24 bg-black border-b border-zinc-900">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-blue-900/30 text-blue-400 text-xs font-bold uppercase tracking-widest border border-blue-900/50 mb-6">Industria & B2B</span>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Metal Mad E.A.S.</h2>
            <div className="space-y-4 mb-8">
              <p className="text-zinc-400 leading-relaxed"><strong className="text-red-400">El Problema:</strong> Cotizaciones lentas en Excel para colegios, generando cuellos de botella.</p>
              <p className="text-zinc-400 leading-relaxed"><strong className="text-emerald-400">La Solución:</strong> Ecosistema Digital con un Generador Automático de Presupuestos en PDF.</p>
              <div className="pt-4">
                <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Módulos Inyectados:</p>
                <ul className="flex flex-wrap gap-2">
                  <li className="bg-zinc-900 text-zinc-300 text-xs px-3 py-1 rounded-lg border border-zinc-800">Cotizador Dinámico</li>
                  <li className="bg-zinc-900 text-zinc-300 text-xs px-3 py-1 rounded-lg border border-zinc-800">Generación PDF</li>
                </ul>
              </div>
            </div>
            <a href="https://metalmadeas.com/presu" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-xl transition-all flex items-center gap-2 inline-flex">Ver Cotizador en Vivo &rarr;</a>
          </div>
          <div className="bg-zinc-900 rounded-[2rem] border border-zinc-800 p-8 shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-6">Impacto Operativo</h3>
            <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 flex justify-between items-center mb-4">
              <span className="text-zinc-400 text-sm">Tiempo de Cotización</span>
              <span className="text-emerald-500 font-black text-xl">De 2h a 3 min</span>
            </div>
          </div>
        </div>
      </section>

      {/* CASO 2: GASTRONOMÍA UNIFORMADO Y CORPORATIVO */}
      <section className="py-24 bg-zinc-950 border-b border-zinc-900">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center flex-row-reverse">
          <div className="lg:order-2">
            <span className="inline-block px-3 py-1 rounded-full bg-orange-900/30 text-orange-400 text-xs font-bold uppercase tracking-widest border border-orange-900/50 mb-6">Retail & Gastronomía</span>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Sistemas de Pedido (La Tableta)</h2>
            <div className="space-y-4 mb-8">
              <p className="text-zinc-400 leading-relaxed"><strong className="text-red-400">El Problema:</strong> Colapso en horas pico. Pedidos tomados manualmente por WhatsApp, errores en las órdenes y pérdida de clientes por demora.</p>
              <p className="text-zinc-400 leading-relaxed"><strong className="text-emerald-400">La Solución:</strong> Motores dinámicos de pedidos. El cliente elige, el sistema calcula costos y la cocina recibe la orden estructurada sin errores humanos.</p>
              <div className="pt-4">
                <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Módulos Inyectados:</p>
                <ul className="flex flex-wrap gap-2">
                  <li className="bg-zinc-900 text-zinc-300 text-xs px-3 py-1 rounded-lg border border-zinc-800">Catálogo Dinámico</li>
                  <li className="bg-zinc-900 text-zinc-300 text-xs px-3 py-1 rounded-lg border border-zinc-800">Cálculo Automático</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
               <a href="https://latabletapy.com" target="_blank" rel="noopener noreferrer" className="bg-orange-600 hover:bg-orange-500 text-white font-bold py-3 px-6 rounded-xl transition-all inline-flex justify-center">Ver Caso La Tableta &rarr;</a>
               <span className="bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-medium py-3 px-6 rounded-xl flex items-center justify-center text-center">
                  Proyecto privado no publicable por confidencialidad comercial
               </span>
            </div>
          </div>
          <div className="lg:order-1 bg-zinc-900 rounded-[2rem] border border-zinc-800 p-8 shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-6">Impacto Logístico</h3>
            <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 flex justify-between items-center mb-4">
              <span className="text-zinc-400 text-sm">Errores en Órdenes</span>
              <span className="text-emerald-500 font-black text-xl">Mitigados (0%)</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL UNIFICADO */}
      <section className="py-24 bg-black text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Tu negocio es el siguiente.</h2>
          <div className="flex justify-center mt-8">
             <a 
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
              target="_blank" rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-500 text-white font-black py-4 px-10 rounded-xl transition-all shadow-lg active:scale-95"
            >
              Agendar Diagnóstico
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
