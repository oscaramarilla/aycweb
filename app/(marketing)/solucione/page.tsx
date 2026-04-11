export default function SolucionesPage() {
  const soluciones = [
    {
      titulo: "Máquina de Captación B2B",
      etiqueta: "Ventas",
      descripcion: "Embudos de venta digitales conectados directamente a tu WhatsApp. Filtramos a los curiosos y te entregamos prospectos calificados listos para cerrar.",
      features: ["Embudos optimizados", "Integración con WhatsApp", "Calificación automática"]
    },
    {
      titulo: "CRM Operativo Centralizado",
      etiqueta: "Gestión",
      descripcion: "Olvídate de perder clientes en hojas de Excel. Un panel de control visual para seguir cada propuesta económica desde el primer contacto hasta la firma.",
      features: ["Pipeline visual (Kanban)", "Historial de clientes", "Recordatorios de cobro"]
    },
    {
      titulo: "SaaS de Manufactura y Stock",
      etiqueta: "Industrial",
      descripcion: "Software a medida para fábricas. Controla tu inventario de materia prima, genera cotizaciones complejas en segundos y traza tu línea de producción.",
      features: ["Generador de Presupuestos (PDF)", "Control de Inventario", "Órdenes de trabajo"]
    },
    {
      titulo: "Control de Obras y Presupuestos",
      etiqueta: "Construcción",
      descripcion: "Plataformas en la nube para que los ingenieros reporten avances desde la obra en sus celulares, controlando el gasto de materiales en tiempo real.",
      features: ["Reportes móviles", "Flujo de caja de obra", "Gestión de contratistas"]
    },
    {
      titulo: "Ruteo y Despacho Inteligente",
      etiqueta: "Logística",
      descripcion: "Sistemas web para organizar rutas de entrega, confirmar recepción de mercadería con firmas digitales y medir la eficiencia de tu flota.",
      features: ["Asignación de rutas", "Firmas digitales (Proof of Delivery)", "Control de flota"]
    },
    {
      titulo: "Portales de Venta Mayorista",
      etiqueta: "Comercio B2B",
      descripcion: "Catálogos privados con precios dinámicos para que tus distribuidores y clientes recurrentes hagan pedidos por su cuenta las 24 horas del día.",
      features: ["Catálogo privado", "Gestión de pedidos recurrentes", "Historial de facturación"]
    }
  ];

  return (
    <main className="min-h-screen bg-zinc-950 text-white px-6 py-20">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            Soluciones Empresariales <span className="text-blue-500">Automatizadas</span>
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            No vendemos "páginas web". Construimos infraestructuras tecnológicas diseñadas específicamente para reducir tus costos operativos y escalar tus ventas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {soluciones.map((solucion, index) => (
            <div key={index} className="p-8 bg-zinc-900 border border-zinc-800 rounded-2xl hover:border-blue-500 hover:shadow-[0_0_30px_rgba(37,99,235,0.1)] transition-all group flex flex-col h-full">
              
              <div className="mb-6">
                <span className="bg-blue-900/30 text-blue-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {solucion.etiqueta}
                </span>
              </div>
              
              <h2 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">
                {solucion.titulo}
              </h2>
              
              <p className="text-zinc-400 leading-relaxed mb-8 flex-grow">
                {solucion.descripcion}
              </p>

              <div className="pt-6 border-t border-zinc-800">
                <ul className="space-y-3">
                  {solucion.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-zinc-300">
                      <svg className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>

      </div>
    </main>
  );
}
