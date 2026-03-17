export default function SolucionesPage() {
  return (
    <main className="px-6 py-16 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">
        Soluciones Empresariales Automatizadas
      </h1>

      <p className="text-lg text-zinc-600 mb-12">
        No vendemos páginas. Creamos sistemas completos que generan resultados.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {[
          "Sistema de ventas automatizadas",
          "Sistema de gestión de clientes",
          "Sistema para empresas industriales",
          "Sistema para constructoras",
          "Sistema para logística",
          "Sistema para negocios locales"
        ].map((solucion) => (
          <div key={solucion} className="p-6 border rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold mb-2">{solucion}</h2>
            <p className="text-zinc-600">
              Implementación completa con automatización, CRM y control de operaciones.
            </p>
          </div>
        ))}
      </div>
    </main>
  )
}
