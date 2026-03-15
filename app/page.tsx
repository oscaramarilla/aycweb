"use client";
import { useState } from "react";

export default function PreciosAYC() {
  const [planSeleccionado, setPlanSeleccionado] = useState<number | null>(null);

  const planes = [
    {
      id: 1,
      nombre: "Landing Page Flash",
      precio: "1.500.000",
      mantenimiento: "0",
      descripcion: "Tu presencia digital profesional en tiempo récord. Ideal para captar clientes rápido.",
      features: ["Diseño One-Pager de Alto Impacto", "Formulario de contacto a WhatsApp", "Adaptable a celulares", "Optimizada para velocidad"],
      condiciones: "Pago 100% adelantado para iniciar el desarrollo. Entrega en 3 a 5 días hábiles.",
      anticipo: "1.500.000",
      cta: "Quiero mi Landing Page",
      color: "zinc"
    },
    {
      id: 2,
      nombre: "Plan Inicial (Automatización)",
      precio: "2.500.000",
      mantenimiento: "250.000",
      popular: true,
      descripcion: "Digitaliza tu primer proceso crítico. Motores de presupuestos y bases de datos.",
      features: ["1 Cotizador PDF o Portal a medida", "Hosting Premium incluido", "Soporte vía WhatsApp", "Certificado SSL de seguridad"],
      condiciones: "Anticipo del 50% para iniciar. El 50% restante al finalizar el mes con la entrega. Luego, mantenimiento mensual.",
      anticipo: "1.250.000",
      cta: "Automatizar mi empresa",
      color: "blue"
    },
    {
      id: 3,
      nombre: "Plan Empresarial PRO",
      precio: "4.500.000",
      mantenimiento: "450.000",
      descripcion: "Arquitectura completa para fábricas y empresas con múltiples vendedores.",
      features: ["Cotizador Multi-Producto Complejo", "Portal de Pedidos B2B", "Cálculos Logísticos Avanzados", "Capacitación al equipo"],
      condiciones: "Anticipo del 50% para iniciar. El 50% restante al finalizar el mes con la entrega. Mantenimiento mensual premium.",
      anticipo: "2.250.000",
      cta: "Transformación Total",
      color: "zinc"
    }
  ];

  return (
    <main className="min-h-screen bg-zinc-950 text-white py-20 px-4 md:px-8 font-sans selection:bg-blue-500/30">
      <div className="max-w-7xl mx-auto">
        
        {/* ENCABEZADO */}
        <div className="text-center mb-16">
          <span className="text-blue-500 font-black tracking-widest uppercase text-sm mb-4 block">Automatizaciones y Construcciones Web</span>
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            El sitio de desarrollo y arquitectura de tu <span className="text-blue-500">entorno digital a medida.</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-3xl mx-auto">
            Somos la empresa que te ahorra millones y mucho tiempo. Selecciona el plan que mejor se adapte a tu operativa.
          </p>
        </div>

        {/* TARJETAS DE PRECIOS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {planes.map((plan) => (
            <div 
              key={plan.id} 
              className={`relative p-8 rounded-3xl border transition-all duration-300 flex flex-col cursor-pointer hover:-translate-y-2 ${
                planSeleccionado === plan.id 
                  ? 'border-blue-500 bg-blue-900/20 shadow-[0_0_30px_rgba(37,99,235,0.2)]' 
                  : plan.popular 
                    ? 'border-zinc-700 bg-zinc-900/80 hover:border-blue-400' 
                    : 'border-zinc-800 bg-zinc-900/40 hover:border-zinc-600'
              }`}
              onClick={() => {
                setPlanSeleccionado(plan.id);
                document.getElementById("checkout-section")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-widest">
                  El más rentable
                </span>
              )}
              
              <h3 className="text-2xl font-bold mb-2">{plan.nombre}</h3>
              <p className="text-zinc-400 text-sm mb-6 min-h-[60px]">{plan.descripcion}</p>
              
              <div className="mb-6">
                <span className="text-4xl font-black">Gs. {plan.precio}</span>
                {plan.mantenimiento !== "0" && <span className="text-zinc-500 text-sm block mt-1">+ Gs. {plan.mantenimiento} / mes</span>}
              </div>

              <div className="mb-8 border-t border-zinc-800 pt-6 flex-grow">
                <ul className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-zinc-300">
                      <span className="text-blue-500 font-bold mt-0.5">✓</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <button 
                className={`w-full py-4 rounded-xl font-black transition-all ${
                  planSeleccionado === plan.id || plan.color === 'blue' 
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/50' 
                    : 'bg-white text-zinc-950 hover:bg-zinc-200'
                }`}
              >
                {planSeleccionado === plan.id ? 'Plan Seleccionado ↓' : plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* SECCIÓN DE CHECKOUT DINÁMICA */}
        {planSeleccionado && (
          <div id="checkout-section" className="max-w-4xl mx-auto bg-zinc-900 border border-zinc-800 rounded-3xl p-6 md:p-12 shadow-2xl animate-fade-in-up">
            
            <div className="text-center mb-8 border-b border-zinc-800 pb-8">
              <h2 className="text-2xl md:text-3xl font-black mb-4">Has seleccionado: <span className="text-blue-500">{planes.find(p => p.id === planSeleccionado)?.nombre}</span></h2>
              <p className="text-zinc-400 text-lg">{planes.find(p => p.id === planSeleccionado)?.condiciones}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              
              {/* Instrucciones Bancarias */}
              <div>
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <span className="bg-blue-500/20 text-blue-500 p-2 rounded-lg">🏦</span> Transferencia Bancaria
                </h3>
                <div className="bg-zinc-950 p-6 rounded-2xl border border-zinc-800 space-y-3 font-mono text-sm text-zinc-300">
                  <p><span className="text-zinc-500">Banco:</span> Itaú</p>
                  <p><span className="text-zinc-500">Titular:</span> Oscar Amarilla</p>
                  <p><span className="text-zinc-500">C.I.:</span> 4499507</p>
                  <p><span className="text-zinc-500">Cuenta:</span> 720601573</p>
                  <p><span className="text-zinc-500">Alias / Celular:</span> 0985864209</p>
                </div>
              </div>

              {/* Instrucciones Cripto */}
              <div>
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <span className="bg-yellow-500/20 text-yellow-500 p-2 rounded-lg">⚡</span> Cripto (USDT)
                </h3>
                <div className="bg-zinc-950 p-6 rounded-2xl border border-zinc-800 space-y-3 text-sm text-zinc-300">
                  <p className="text-zinc-500 font-mono mb-2">Red: Tron (TRC20) - Binance</p>
                  <p className="font-mono text-xs md:text-sm break-all bg-zinc-900 p-3 rounded-lg border border-zinc-800 text-blue-400">
                    TLUzuQDLjVwp4UDFAEFuypw5LmFf1K1PRQ
                  </p>
                </div>
              </div>

            </div>

            {/* Resumen y Envío */}
            <div className="mt-10 bg-blue-900/10 border border-blue-900/30 rounded-2xl p-6 text-center">
              <p className="text-lg mb-2">Monto a transferir hoy (Anticipo):</p>
              <p className="text-4xl font-black text-white mb-6">Gs. {planes.find(p => p.id === planSeleccionado)?.anticipo}</p>
              
              <p className="text-sm text-zinc-400 mb-6">
                * La factura legal correspondiente será preparada y emitida contra el comprobante de pago del anticipo.
              </p>

              <a 
                href={`https://wa.me/595985864209?text=Hola%20Oscar,%20acabo%20de%20seleccionar%20el%20${planes.find(p => p.id === planSeleccionado)?.nombre}%20en%20AYCweb.%20Aquí%20tienes%20el%20comprobante%20de%20pago%20del%20anticipo:`}
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-10 py-4 bg-blue-600 hover:bg-blue-500 text-white font-black text-lg rounded-xl transition-all shadow-lg hover:-translate-y-1 w-full md:w-auto"
              >
                Enviar comprobante por WhatsApp
              </a>
            </div>

          </div>
        )}

        {/* GARANTÍA */}
        <div className="mt-24 max-w-3xl mx-auto text-center border-t border-zinc-800 pt-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-zinc-900 border-4 border-blue-500 rounded-full mb-6">
             <span className="text-3xl">🛡️</span>
          </div>
          <h3 className="text-2xl font-black mb-4">Garantía de Satisfacción Absoluta</h3>
          <p className="text-zinc-400 text-lg">
            Estamos tan seguros de la calidad y velocidad de nuestra arquitectura digital que te ofrecemos una <strong>garantía de 30 días</strong>. Si no te gusta nuestro trabajo, te devolvemos tu dinero sin hacer preguntas.
          </p>
        </div>

      </div>
    </main>
  );
}
