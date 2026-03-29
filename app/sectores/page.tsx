import Link from "next/link";

export default function SectoresPage() {
  const whatsappNumber = "595985864209";
  const whatsappMsg = encodeURIComponent("¡Hola Oscar! Vi la página de sectores y quiero agendar un diagnóstico.");

  const sectores = [
    {
      id: "industria",
      titulo: "Industria & Manufactura",
      color: "blue",
      dolor: "Cotizaciones lentas, inventario desconectado y fricción B2B.",
      solucion: "Sistematizamos la cotización. Tu equipo comercial genera presupuestos en PDF en segundos, directo desde una plataforma en la nube.",
      caso: { nombre: "Metal Mad E.A.S.", url: "/casos", btnText: "Ver caso Metal Mad" }
    },
    {
      id: "salud",
      titulo: "Salud & Clínicas",
      color: "purple",
      dolor: "Dependencia total de redes sociales y agendamiento desordenado en WhatsApp.",
      solucion: "Creamos ecosistemas 24/7. El paciente entra, ve la autoridad de la clínica y se agenda automáticamente, filtrando a los curiosos.",
      caso: { nombre: "Dra. Bianca", url: "/casos", btnText: "Ver caso Dra. Bianca" }
    },
    {
      id: "operativa",
      titulo: "Servicios Legales & B2B",
      color: "emerald",
      dolor: "Onboarding lento, redacción manual de contratos y pérdida de tiempo administrativo.",
      solucion: "Implementamos generadores de documentos. Llenás un formulario y el sistema escupe un contrato B2B blindado, listo para firmar.",
      caso: { nombre: "AYC Contratos", url: "/legales", btnText: "Ver demo legal" }
    },
    {
      id: "corporativo",
      titulo: "Instituciones & B2G",
      color: "zinc",
      dolor: "Infraestructura web obsoleta que no transmite confianza para licitaciones o socios corporativos.",
      solucion: "Construimos portales institucionales robustos, con seguridad extrema y arquitectura optimizada, diseñados para soportar alto tráfico.",
      caso: { nombre: "Colegio Cristo Rey", url: "/casos", btnText: "Ver caso Cristo Rey" }
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 text-zinc-50 font-sans pb-24 md:pb-0">
      
      <section className="relative pt-16 pb-16 md:pt-28 md:pb-24 px-6 text-center overflow-hidden border-b border-zinc-900">
        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter text-white">Soluciones por <span className="text-blue-500">Industria.</span></h1>
        <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed">No aplicamos la misma plantilla para todos; diseñamos la arquitectura exacta que tu operativa exige.</p>
      </section>

      <section className="py-20 bg-black border-b border-zinc-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sectores.map((sector) => (
              <div key={sector.id} className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 flex flex-col">
                <h2 className="text-2xl font-black text-white mb-4">{sector.titulo}</h2>
                <div className="mb-6 space-y-4">
                  <p className="text-zinc-400 text-sm leading-relaxed"><strong className="text-red-400">Problema Común:</strong> {sector.dolor}</p>
                  <p className="text-zinc-300 text-sm leading-relaxed"><strong className="text-emerald-400">Cómo lo resolvemos:</strong> {sector.solucion}</p>
                </div>
                <div className="mt-auto bg-zinc-950 p-5 rounded-2xl border border-zinc-800/80">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-1">Caso de Éxito Aplicado</p>
                      <h4 className="text-white font-bold text-base">{sector.caso.nombre}</h4>
                    </div>
                    <Link href={sector.caso.url} className={`shrink-0 text-${sector.color}-400 border border-${sector.color}-900/50 text-xs font-bold py-2 px-4 rounded-lg`}>
                      {sector.caso.btnText} &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-zinc-950 text-center relative overflow-hidden">
        <h2 className="text-3xl md:text-5xl font-black text-white mb-6">¿No encontraste tu rubro?</h2>
        <div className="flex justify-center mt-8">
           <a href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`} target="_blank" rel="noopener noreferrer" className="inline-flex bg-blue-600 hover:bg-blue-500 text-white font-black py-4 px-10 rounded-xl transition-all shadow-lg active:scale-95">
            Agendar Diagnóstico
          </a>
        </div>
      </section>

    </div>
  );
}
