"use client"

import { useMemo } from "react"

export default function AycWebMasterFunnel() {
  const whatsappBase = "https://wa.me/595985864209"

  const createWhatsAppLink = (msg: string) =>
    `${whatsappBase}?text=${encodeURIComponent(msg)}`

  const whatsappLink = createWhatsAppLink(
    "Hola Oscar, vengo de AYCweb. Quiero analizar mi empresa."
  )

  const planes = useMemo(() => [
    {
      nombre: "Landing Page Flash",
      precio: "1.500.000",
      descripcion: "Presencia digital optimizada para captar clientes desde el día uno.",
      features: [
        "Diseño One-Page de alto impacto",
        "Formulario conectado a WhatsApp",
        "Optimizado para celulares"
      ],
      roi: "Con 1 cliente nuevo al mes se paga sola.",
      cta: "Quiero mi Landing",
      popular: false
    },
    {
      nombre: "Automatización Inicial",
      precio: "2.500.000",
      descripcion: "Digitalizamos tu primer proceso crítico (cotización, pedidos, etc).",
      features: [
        "Sistema automatizado a medida",
        "Generación de PDF",
        "Soporte técnico"
      ],
      roi: "Ahorra +40 horas mensuales.",
      cta: "Automatizar ahora",
      popular: true
    }
  ], [])

  return (
    <main className="min-h-screen bg-zinc-950 text-white">

      {/* 🔥 BARRA DE URGENCIA */}
      <div className="bg-blue-600 text-center py-3 text-sm font-bold sticky top-0 z-50">
        Diagnóstico GRATIS (5 min) → Solo 2 cupos disponibles este mes
      </div>

      {/* 🚀 HERO */}
      <section className="text-center px-6 py-24 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
          Convertimos tu empresa en una máquina automatizada
        </h1>

        <p className="text-zinc-400 text-lg mb-10">
          Sistemas que generan clientes, automatizan procesos y aumentan tu rentabilidad.
        </p>

        <a
          href={whatsappLink}
          target="_blank"
          className="bg-blue-600 px-10 py-5 rounded-xl font-bold text-xl hover:bg-blue-500 transition"
        >
          Analizar mi empresa
        </a>
      </section>

      {/* ⚠️ PROBLEMA */}
      <section className="px-6 py-20 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-black mb-10">
          Estás perdiendo dinero en procesos manuales
        </h2>

        <div className="grid md:grid-cols-4 gap-4">
          {[
            "Cotizaciones manuales",
            "Pedidos por WhatsApp",
            "Falta de seguimiento",
            "Desorden operativo"
          ].map((item) => (
            <div key={item} className="p-6 border border-zinc-800 rounded-xl">
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* 📊 CASO */}
      <section className="px-6 py-24 text-center border-y border-zinc-800">
        <h2 className="text-3xl font-black mb-10">
          Caso real: Industria Metalúrgica
        </h2>

        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <div className="p-6 border border-red-500/30 rounded-xl">
            <p className="text-red-400">Antes</p>
            <p className="text-3xl font-black">2 horas</p>
          </div>

          <div className="p-6 border border-blue-500 rounded-xl">
            <p className="text-blue-400">Después</p>
            <p className="text-3xl font-black">15 segundos</p>
          </div>
        </div>
      </section>

      {/* ⚙️ PROCESO */}
      <section className="px-6 py-24 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-black mb-12">
          Implementación en 4 pasos
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            "Diagnóstico",
            "Arquitectura",
            "Desarrollo",
            "Automatización"
          ].map((step, i) => (
            <div key={i}>
              <div className="text-blue-500 text-2xl font-black mb-2">{i + 1}</div>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 💰 PLANES */}
      <section className="px-6 py-24 bg-zinc-900">
        <h2 className="text-center text-4xl font-black mb-16">
          Inversión
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {planes.map((plan) => (
            <div
              key={plan.nombre}
              className={`p-8 rounded-2xl border ${
                plan.popular ? "border-blue-500" : "border-zinc-800"
              }`}
            >
              <h3 className="text-2xl font-bold mb-2">{plan.nombre}</h3>

              <p className="text-zinc-400 mb-6">{plan.descripcion}</p>

              <p className="text-4xl font-black mb-6">
                Gs. {plan.precio}
              </p>

              <ul className="mb-6 space-y-2">
                {plan.features.map((f) => (
                  <li key={f}>✓ {f}</li>
                ))}
              </ul>

              <p className="text-green-400 text-sm mb-6">
                {plan.roi}
              </p>

              <a
                href={createWhatsAppLink(`Quiero el plan ${plan.nombre}`)}
                target="_blank"
                className="block text-center bg-blue-600 py-4 rounded-lg font-bold"
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </section>

    </main>
  )
}
