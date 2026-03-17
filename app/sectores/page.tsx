export default function SectoresPage() {
  return (
    <main className="px-6 py-16 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">
        Sectores que atendemos
      </h1>

      <p className="text-lg text-zinc-600 mb-12">
        Adaptamos nuestros sistemas a diferentes industrias para maximizar resultados.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          "Empresas industriales",
          "Constructoras",
          "Comercios",
          "Servicios profesionales",
          "Distribuidoras",
          "Emprendimientos en crecimiento"
        ].map((sector) => (
          <div key={sector} className="p-6 border rounded-xl shadow-sm text-center">
            <h2 className="text-lg font-semibold">{sector}</h2>
          </div>
        ))}
      </div>
    </main>
  )
}
