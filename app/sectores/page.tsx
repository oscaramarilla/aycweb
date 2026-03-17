export default function SectoresPage() {
  const sectores = [
    {
      titulo: "Industria y Manufactura",
      icono: "🏭",
      dolor: "Caos en inventarios de materia prima, horas hombre sin medir y cuellos de botella en la línea de producción.",
      solucion: "Sistemas ERP a medida para control de stock, logística de entrega y trazabilidad en tiempo real."
    },
    {
      titulo: "Constructoras y Obras",
      icono: "🏗️",
      dolor: "Pérdida de control de presupuestos, materiales desperdiciados y reportes diarios en papel que se pierden.",
      solucion: "Software de gestión de obras para reportes digitales, control de proveedores y flujo de caja en la nube."
    },
    {
      titulo: "Distribuidoras B2B",
      icono: "🚚",
      dolor: "Rutas de entrega ineficientes, toma de pedidos manuales por WhatsApp y facturas traspapeladas.",
      solucion: "Portales automatizados para toma de pedidos 24/7, ruteo inteligente y facturación conectada."
    },
    {
      titulo: "Servicios Profesionales",
      icono: "💼",
      dolor: "Cotizaciones que tardan días en enviarse y seguimiento de clientes desorganizado en planillas de Excel.",
      solucion: "CRMs personalizados y motores de generación de presupuestos en PDF al instante (como el MM Cotizador)."
    },
    {
      titulo: "Comercios y Retail",
      icono: "📦",
      dolor: "Descuadre de inventario entre sucursales y falta de métricas exactas sobre qué productos dan rentabilidad.",
      solucion: "Sistemas centralizados de Punto de Venta (POS), control de cajas y dashboards de ventas en vivo."
    },
    {
      titulo: "Empresas en Expansión",
      icono: "🚀",
      dolor: "Procesos 100% dependientes del dueño. Imposibilidad de abrir nuevas sucursales por falta de control.",
      solucion: "Sistematización de manuales operativos e infraestructura de software replicable para escalar sin caos."
    }
  ];

  return (
    <main className="min-h-screen bg-zinc-950 text-white px-6 py-20">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black mb-6">
            Sectores que <span className="text-blue-500">Sistematizamos</span>
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            No vendemos software genérico. Entendemos los dolores operativos exactos de tu industria y construimos la tecnología para erradicarlos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectores.map((sector, index) => (
            <div key={index} className="p-8 bg-zinc-900 border border-zinc-800 rounded-2xl hover:border-blue-500 hover:shadow-[0_0_30px_rgba(37,99,235,0.1)] transition-all group">
              <div className="text-4xl mb-4 opacity-80 group-hover:opacity-100 transition-opacity">{sector.icono}</div>
              <h2 className="text-2xl font-bold mb-6 text-white group-hover:text-blue-400 transition-colors">{sector.titulo}</h2>
              
              <div className="space-y-5">
                <div>
                  <span className="text-xs font-bold text-red-400 uppercase tracking-wider flex items-center gap-2 mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span> El Problema
                  </span>
                  <p className="text-sm text-zinc-400 leading-relaxed">{sector.dolor}</p>
                </div>
                <div className="pt-4 border-t border-zinc-800">
                  <span className="text-xs font-bold text-green-400 uppercase tracking-wider flex items-center gap-2 mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Solución AYC
                  </span>
                  <p className="text-sm text-zinc-300 leading-relaxed">{sector.solucion}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}
