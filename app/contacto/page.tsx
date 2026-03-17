export default function ContactoPage() {
  return (
    <main className="px-6 py-16 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">
        Contacto
      </h1>

      <p className="text-lg text-zinc-600 mb-8">
        Contanos sobre tu empresa y te ayudamos a automatizarla.
      </p>

      <form className="space-y-6">
        <input
          type="text"
          placeholder="Nombre"
          className="w-full p-4 border rounded-lg"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-4 border rounded-lg"
        />
        <textarea
          placeholder="¿Qué necesitás?"
          className="w-full p-4 border rounded-lg h-32"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700"
        >
          Enviar consulta
        </button>
      </form>
    </main>
  )
}
