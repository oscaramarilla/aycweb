"use client";

export default function PreciosAYC() {
  const whatsappLink = "https://wa.me/595985864209?text=Hola%20Oscar,%20quiero%20consultar%20por%20el%20Plan%20";

  const planes = [
    {
      nombre: "Plan Inicial",
      precio: "2.500.000",
      mantenimiento: "250.000",
      descripcion: "Para negocios que necesitan digitalizar su primer proceso crítico.",
      features: ["1 Cotizador PDF a medida", "Hosting Premium incluido", "Soporte vía WhatsApp", "Certificado SSL de seguridad"],
      cta: "Plan Inicial",
      color: "zinc"
    },
    {
      nombre: "Plan Empresarial",
      precio: "4.500.000",
      mantenimiento: "450.000",
      popular: true,
      descripcion: "La solución completa para empresas en crecimiento y fábricas.",
      features: ["Cotizador Multi-Producto V3", "Portal de Pedidos B2B", "Cálculos Logísticos Avanzados", "Capacitación al equipo", "Prioridad de Soporte"],
      cta: "Plan Empresarial",
      color: "blue"
    },
    {
      nombre: "Sistemas IA Custom",
      precio: "Consultar",
      mantenimiento: "Variable",
      descripcion: "Desarrollo de software de alta complejidad e integraciones con IA.",
      features: ["Integración con GPT-4 / Gemini", "Automatización de Contratos", "ERP a medida para Fábricas", "Consultoría Estratégica"],
      cta: "Sistemas IA",
      color: "zinc"
    }
  ];

  return (
    <main className="min-h-screen bg-zinc-950 text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-black mb-6">Inversión en <span className="text-blue-500">Eficiencia</span></h1>
          <p className="text-zinc-400 text-xl max-w-2xl mx-auto">
            No cobramos por horas de código, cobramos por los millones que le ahorramos a tu empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {planes.map((plan, index) => (
            <div key={index} className={`relative p-8 rounded-3xl border ${plan.popular ? 'border-blue-500 bg-blue-900/10' : 'border-zinc-800 bg-zinc-900/50'} flex flex-col`}>
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-xs font-black px-4 py-1 rounded-full uppercase tracking-widest">
                  Más Solicitado
                </span>
              )}
              
              <h3 className="text-2xl font-bold mb-2">{plan.nombre}</h3>
              <p className="text-zinc-400 text-sm mb-6 min-h-[48px]">{plan.descripcion}</p>
              
              <div className="mb-8">
                <span className="text-4xl font-black">Gs. {plan.precio}</span>
                {plan.mantenimiento !== "Variable" && <span className="text-zinc-500 text-sm"> /único</span>}
              </div>

              <div className="mb-8 border-t border-zinc-800 pt-6">
                <p className="text-xs font-bold text-zinc-500 uppercase mb-4 tracking-widest">¿Qué incluye?</p>
                <ul className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm">
                      <span className="text-blue-500">✓</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto">
                {plan.mantenimiento !== "Variable" && (
                  <p className="text-center text-xs text-zinc-500 mb-4">
                    + Gs. {plan.mantenimiento}/mes de mantenimiento
                  </p>
                )}
                <a 
                  href={`${whatsappLink}${plan.cta.replace(/\s+/g, '%20')}`}
                  className={`block w-full text-center py-4 rounded-xl font-black transition-all ${plan.color === 'blue' ? 'bg-blue-600 hover:bg-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.3)]' : 'bg-white text-black hover:bg-zinc-200'}`}
                >
                  Seleccionar {plan.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center bg-zinc-900 border border-zinc-800 p-10 rounded-3xl">
          <h4 className="text-2xl font-bold mb-4">¿Necesitas una solución híbrida?</h4>
          <p className="text-zinc-400 mb-8 max-w-xl mx-auto">Analizamos tu flujo de trabajo actual y armamos un presupuesto basado en el retorno de inversión para tu caso específico.</p>
          <a href={whatsappLink + "Consultoria%20Hibrida"} className="text-blue-400 font-bold border-b border-blue-400 pb-1 hover:text-blue-300">
            Hablar con un consultor ahora
          </a>
        </div>
      </div>
    </main>
  );
}
