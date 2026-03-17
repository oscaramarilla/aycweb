export default function ServiciosPage() {
  const servicios = [
    {
      titulo: "Máquina de Generación B2B",
      icono: "⚡",
      desc: "Dejamos de hacer webs invisibles. Creamos portales corporativos optimizados para captar leads de alto valor y cerrar ventas 24/7 sin intervención manual."
    },
    {
      titulo: "Automatización de Cotizaciones",
      icono: "📄",
      desc: "Convierte un proceso de 2 horas en un PDF automático de 15 segundos (SaaS). Menos burocracia, eliminación de errores humanos y más contratos cerrados."
    },
    {
      titulo: "CRM: Control de Operaciones",
      icono: "📊",
      desc: "Deja de perder clientes en hojas de Excel. Implementamos tableros de control exactos para seguir cada prospecto y propuesta hasta el momento del cierre."
    },
    {
      titulo: "Sistema Operativo Logístico",
      icono: "⚙️",
      desc: "Software a medida para controlar inventarios, rutas de despacho y contratos en tiempo real desde cualquier dispositivo, ideal para fábricas y distribuidoras."
    }
  ];

  return (
    <main className="min-h-screen bg-zinc-950 text-white px-6 pt-32 pb-20">
      <div className="max-w-6xl mx-auto">
        
        {/* ENCABEZADO CORREGIDO (Sin pisar el menú) */}
        <div className="mb-20">
          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tighter">
            No vendemos código.<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
              Vendemos Resultados.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl border-l-4 border-blue-500 pl-6 leading-relaxed">
            Sistematizamos tu empresa para que trabajes más rápido, con control absoluto y cero errores manuales.
          </p>
        </div>
        
        {/* TARJETAS OPTIMIZADAS */}
        <div className="grid md:grid-cols-2 gap-8">
          {servicios.map((servicio, index) => (
            <div 
              key={index} 
              className="p-10 bg-gradient-to-b from-zinc-900 to-zinc-950 border border-zinc-800 rounded-3xl hover:border-blue-500 transition-all duration-300 hover:shadow-[0_0_40px_rgba(37,99,235,0.15)] group relative overflow-hidden"
            >
              {/* Brillo de fondo al hacer hover */}
              <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="text-5xl mb-6 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 transform origin-left">
                  {servicio.icono}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                  {servicio.titulo}
                </h3>
                <p className="text-zinc-400 leading-relaxed text-lg">
                  {servicio.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </main>
  );
}
