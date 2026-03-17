export default function CasosPage() {
  return (
    <main className="px-6 py-16 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">
        Casos de éxito
      </h1>

      <p className="text-lg text-zinc-600 mb-12">
        Empresas que ya están operando con sistemas automatizados.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {[1, 2, 3, 4].map((caso) => (
          <div key={caso} className="p-6 border rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold mb-2">
              Empresa {caso}
            </h2>
            <p className="text-zinc-600">
              Implementación de sistema digital que permitió automatizar procesos y aumentar ventas.
            </p>
          </div>
        ))}
      </div>
    </main>
  )
}
