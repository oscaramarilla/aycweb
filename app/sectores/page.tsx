import Link from "next/link";

export default function SectoresPage() {
  const whatsappNumber = "595985864209";
  const whatsappMsg = encodeURIComponent("¡Hola Oscar! Vi la página de sectores y quiero ver cómo aplicar una solución similar en mi industria.");

  const sectores = [
    {
      id: "industria",
      titulo: "Industria & Manufactura",
      color: "blue",
      dolor: "Cotizaciones lentas, inventario desconectado y fricción B2B.",
      solucion: "Sistematizamos la cotización. Tu equipo comercial genera presupuestos en PDF en segundos, directo desde una plataforma en la nube.",
      caso: { nombre: "Metal Mad E.A.S.", desc: "De 2hs manuales a 3 min por cotización.", url: "/casos" }
    },
    {
      id: "salud",
      titulo: "Salud & Clínicas",
      color: "purple",
      dolor: "Dependencia total de redes sociales y agendamiento desordenado en WhatsApp.",
      solucion: "Creamos ecosistemas 24/7. El paciente entra, ve la autoridad de la clínica y se agenda automáticamente, filtrando a los curiosos.",
      caso: { nombre: "Dra. Bianca", desc: "Consultorio digital de agendamiento automático.", url: "/casos" }
    },
    {
      id: "operativa",
      titulo: "Servicios Legales & B2B",
      color: "emerald",
      dolor: "Onboarding lento, redacción manual de contratos y pérdida de tiempo administrativo.",
      solucion: "Implementamos generadores de documentos. Llenás un formulario y el sistema escupe un contrato B2B blindado, listo para firmar.",
      caso: { nombre: "AYC Contratos", desc: "Automatización de documentación legal.", url: "/legales" }
    },
    {
      id: "gastronomia",
      titulo: "Retail & Gastronomía",
      color: "orange",
      dolor: "Colapso en horas pico, pedidos mal tomados y catálogos estáticos en PDF.",
      solucion: "Desarrollamos motores de pedidos donde el cliente elige, el sistema calcula y la cocina recibe la orden estructurada sin errores humanos.",
      caso: { nombre: "La Tableta / Pizzazos", desc: "Sistemas de captación de pedidos dinámicos.", url: "/casos" }
    },
    {
      id: "corporativo",
      titulo: "Instituciones & B2G",
      color: "zinc",
      dolor: "Infraestructura web obsoleta que no transmite confianza para licitaciones o socios corporativos.",
      solucion: "Construimos portales institucionales robustos, con seguridad extrema y PageSpeed 99/100, diseñados para soportar alto tráfico.",
      caso: { nombre: "Colegio Cristo Rey", desc: "Desarrollo institucional de alta confianza.", url: "/casos" }
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 text-zinc-50 font-sans pb-24 md:pb-0">
      
      {/* 🚀 HERO SECTION */}
      <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 px-6 text-center overflow-hidden border-b border-zinc-900">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter leading-[1.05] text-white">
            Soluciones por <span className="text-blue-500">Industria.</span>
          </h1>
          <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Cada sector tiene cuellos de botella únicos. No aplicamos la misma plantilla para todos; diseñamos la arquitectura exacta que tu operativa exige.
          </p>
        </div>
      </section>

      {/* 🧩 SECTORES CON CASOS ENLAZADOS */}
      <section className="py-20 bg-black border-b border-zinc-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sectores.map((sector) => (
              <div key={sector.id} className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 flex flex-col hover:border-zinc-600 transition-colors">
                <h2 className="text-2xl font-black text-white mb-4 flex items-center gap-3">
                  <span className={`w-3 h-3 rounded-full bg-${sector.color}-500`}></span>
                  {sector.titulo}
                </h2>
                
                <div className="mb-6 space-y-4">
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    <strong className="text-red-400">Problema Común:</strong> {sector.dolor}
                  </p>
                  <p className="text-zinc-300 text-sm leading-relaxed">
                    <strong className="text-emerald-400">Cómo lo resolvemos:</strong> {sector.solucion}
                  </p>
                </div>

                {/* CASO RELACIONADO (Puente a la conversión) */}
                <div className="mt-auto bg-zinc-950 p-5 rounded-2xl border border-zinc-800/80 shadow-inner">
                  <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">Caso de Éxito Aplicado</p>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h4 className="text-white font-bold text-base">{sector.caso.nombre}</h4>
                      <p className="text-zinc-500 text-xs">{sector.caso.desc}</p>
                    </div>
                    <Link href={sector.caso.url} className={`shrink-0 bg-${sector.color}-600/20 text-${sector.color}-400 hover:bg-${sector.color}-600/40 border border-${sector.color}-900/50 text-xs font-bold py-2 px-4 rounded-lg transition-colors`}>
                      Ver Detalles &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🚀 CTA FINAL */}
      <section className="py-24 bg-zinc-950 text-center relative overflow-hidden">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">¿No encontraste tu rubro?</h2>
          <p className="text-xl text-zinc-400 mb-10 leading-relaxed">
            La ingeniería de software se adapta a cualquier proceso. Agendá una llamada y evaluemos cómo sistematizar tu operativa específica.
          </p>
          <a 
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex bg-blue-600 hover:bg-blue-500 text-white font-black py-4 px-8 rounded-xl transition-all shadow-[0_0_30px_-5px_rgba(37,99,235,0.4)] active:scale-95"
          >
            Agendar Diagnóstico Gratuito
          </a>
        </div>
      </section>

    </div>
  );
}
