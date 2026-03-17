export default function ServiciosPage() {
  const servicios = [
    {
      titulo: "Máquina de Generación de Clientes B2B",
      desc: "Dejamos de hacer webs invisibles. Creamos portales corporativos optimizados para captar leads de alto valor y cerrar ventas 24/7."
    },
    {
      titulo: "Automatización de Cotizaciones (SaaS)",
      desc: "Convierte un proceso de 2 horas en un PDF automático de 15 segundos. Menos burocracia, más contratos cerrados."
    },
    {
      titulo: "CRM: Control Total de Operaciones",
      desc: "Deja de perder clientes en hojas de Excel. Implementamos tableros de control exactos para seguir cada prospecto hasta el cierre."
    },
    {
      titulo: "Sistema Operativo Logístico",
      desc: "Software a medida para controlar inventarios, despachos y contratos en tiempo real desde cualquier dispositivo."
    }
  ];

  return (
    <main className="min-h-screen bg-zinc-950 text-white px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
          No vendemos código.<br/>
          <span className="text-blue-500">Vendemos Resultados Operativos.</span>
        </h1>
        <p className="text-xl text-zinc-400 mb-16 max-w-2xl border-l-4 border-blue-500 pl-4">
          Sistematizamos tu empresa para que trabajes más rápido, con control absoluto y cero errores manuales.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {servicios.map((servicio, index) => (
            <div key={index} className="p-8 bg-zinc-900 border border-zinc-800 rounded-2xl hover:border-blue-500 transition-all hover:shadow-[0_0_30px_rgba(37,99,235,0.15)] group">
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">{servicio.titulo}</h3>
              <p className="text-zinc-400 leading-relaxed">{servicio.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
