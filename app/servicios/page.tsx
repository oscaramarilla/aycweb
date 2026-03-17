export default function ServiciosPage() {
  const servicios = [
    "Desarrollo Web Profesional",
    "Sistemas SaaS a medida",
    "Automatización de procesos",
    "CRM personalizado",
    "Integración con WhatsApp",
    "SEO y posicionamiento"
  ];

  return (
    <main className="min-h-screen bg-zinc-950 text-white px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-blue-500">
          Servicios Digitales para Empresas
        </h1>
        <p className="text-lg text-zinc-400 mb-12">
          Implementamos sistemas digitales que automatizan procesos, aumentan ventas
          y optimizan la operación de tu empresa.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {servicios.map((servicio, index) => (
            <div key={index} className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-blue-500 transition-colors">
              <h3 className="text-xl font-bold text-white">✅ {servicio}</h3>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
