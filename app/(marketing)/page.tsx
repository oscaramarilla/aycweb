import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="bg-slate-950 text-slate-50 min-h-screen font-sans selection:bg-green-500 selection:text-slate-950">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="mb-6 inline-block rounded-full bg-slate-900 border border-slate-800 px-4 py-1.5">
          <span className="text-sm font-semibold tracking-wide text-green-400 uppercase">
            Infraestructura Digital para Empresas y Profesionales
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight max-w-5xl">
          Dejá de vender entre Excel, WhatsApp y seguimiento desordenado.
        </h1>
        
        <p className="text-lg md:text-xl text-slate-300 max-w-3xl mb-10 leading-relaxed">
          Construimos sistemas de captación, cotización y cierre para empresas y profesionales que necesitan responder más rápido, vender con más orden y dejar de depender de procesos manuales.
        </p>

        {/* Prueba corta */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 text-sm md:text-base text-slate-400 font-medium">
          <span className="bg-slate-900 px-3 py-1 rounded-md">✓ Cotizaciones en segundos</span>
          <span className="bg-slate-900 px-3 py-1 rounded-md">✓ Formularios que filtran</span>
          <span className="bg-slate-900 px-3 py-1 rounded-md">✓ Documentos automáticos</span>
          <span className="bg-slate-900 px-3 py-1 rounded-md">✓ Rutas directas a WhatsApp</span>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link href="/auditoria" className="bg-green-500 hover:bg-green-400 text-slate-950 font-bold py-4 px-8 rounded-lg transition-all text-lg text-center">
            Auditar mi proceso
          </Link>
          <Link href="/obras" className="bg-slate-800 hover:bg-slate-700 text-white font-bold py-4 px-8 rounded-lg transition-all text-lg text-center border border-slate-700">
            Ver obras en producción
          </Link>
        </div>
        <p className="mt-6 text-sm text-slate-500 max-w-lg">
          No hacemos "páginas lindas" para decorar una operación rota. Diseñamos sistemas para ordenar, acelerar y convertir mejor.
        </p>
      </section>

      {/* 2. EVIDENCIA INMEDIATA */}
      <section className="py-20 bg-slate-900/50 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Lo que cambia cuando el motor entra en operación
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Pasás de cotizar entre archivos sueltos a responder con lógica centralizada.",
              "Reducís errores manuales en presupuestos, seguimiento y documentación.",
              "Filtrás mejor antes de hablar con cada prospecto.",
              "Ordenás el proceso comercial sin depender de memoria, chats perdidos o improvisación.",
              "Transformás una operación dispersa en un sistema más claro de venta y atención."
            ].map((text, i) => (
              <div key={i} className="bg-slate-900 p-8 rounded-xl border border-slate-800 hover:border-green-500/30 transition-colors">
                <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <p className="text-slate-300 font-medium leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <p className="text-xl font-semibold text-white">No vendemos presencia digital vacía.</p>
            <p className="text-green-400 font-medium mt-1">Vendemos estructura comercial y operativa.</p>
          </div>
        </div>
      </section>

      {/* 3. SPLIT POR SEGMENTO */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-6">Dos caminos. Dos sistemas.</h2>
          <p className="text-xl text-slate-400">
            No todos compran igual. Por eso diseñamos una arquitectura distinta para operaciones complejas y para profesionales que necesitan orden.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Tarjeta Empresas */}
          <div className="bg-slate-900 p-10 rounded-2xl border border-slate-800 flex flex-col h-full relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 rounded-full blur-3xl -mr-10 -mt-10 transition-transform group-hover:scale-150"></div>
            <h3 className="text-2xl font-bold mb-4 text-white">Para Empresas</h3>
            <p className="text-slate-400 mb-8 flex-grow text-lg leading-relaxed">
              Si tu operación ya no cabe en Excel, diseñamos un sistema para cotizar más rápido, reducir errores, emitir documentos al instante y ordenar mejor tu proceso comercial.
            </p>
            <Link href="/empresas" className="text-green-400 font-semibold flex items-center hover:text-green-300 transition-colors text-lg">
              Ver soluciones para empresas <span className="ml-2">→</span>
            </Link>
          </div>

          {/* Tarjeta Profesionales */}
          <div className="bg-slate-900 p-10 rounded-2xl border border-slate-800 flex flex-col h-full relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl -mr-10 -mt-10 transition-transform group-hover:scale-150"></div>
            <h3 className="text-2xl font-bold mb-4 text-white">Para Profesionales</h3>
            <p className="text-slate-400 mb-8 flex-grow text-lg leading-relaxed">
              Si dependés del boca a boca o de consultas desordenadas, armamos un sistema para captar mejor, filtrar prospectos y convertir más sin saturarte.
            </p>
            <Link href="/profesionales" className="text-white font-semibold flex items-center hover:text-slate-300 transition-colors text-lg">
              Ver soluciones para profesionales <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. FILTRO PREMIUM */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto bg-slate-900 rounded-3xl p-10 md:p-16 text-center border border-slate-800">
          <span className="text-sm font-bold tracking-widest text-slate-500 uppercase mb-4 block">Filtro de admisión</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">No trabajamos por volumen.<br/>Trabajamos por encaje.</h2>
          <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
            No aceptamos a todos los clientes. Si no vemos una oportunidad clara de ordenar, vender mejor o recuperar tiempo operativo, te lo vamos a decir de frente. Nos alineamos con quienes entienden que un sistema bien hecho es una inversión comercial, no un gasto estético.
          </p>
          <p className="text-xl font-bold text-green-400">Preferimos rechazar un proyecto antes que prometer humo.</p>
        </div>
      </section>

      {/* 5. PROCESO DE ENTRADA */}
      <section className="py-24 max-w-4xl mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-bold mb-16 text-center">Cómo entrás a AYCweb</h2>
        <div className="space-y-12">
          {[
            { step: "1", title: "Postulación", desc: "Nos mostrás cómo vendés, cotizás o atendés hoy." },
            { step: "2", title: "Diagnóstico", desc: "Detectamos si hay una fricción real que valga la pena resolver." },
            { step: "3", title: "Arquitectura y propuesta", desc: "Si hay encaje, te presentamos el sistema exacto y el siguiente paso." }
          ].map((item, i) => (
            <div key={i} className="flex gap-6 md:gap-8 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-xl font-bold text-green-400">
                {item.step}
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-white">{item.title}</h3>
                <p className="text-xl text-slate-400">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 p-6 bg-slate-900 border-l-4 border-green-500 rounded-r-lg">
          <p className="text-lg text-slate-300 font-medium">
            <span className="text-white font-bold">No arrancamos improvisando.</span> Primero entendemos tu operación. Después diseñamos la estructura correcta.
          </p>
        </div>
      </section>

      {/* 6. GARANTÍA */}
      <section className="py-24 bg-slate-900/50 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6">Garantía sin fricción</h2>
            <p className="text-xl text-slate-400">
              Elegimos con cuidado. Si detectamos que no somos el equipo correcto para tu caso, te devolvemos el 100%. Si en los primeros 30 días no hay conformidad real, te devolvemos el 100%. <span className="text-white font-bold">Sin letra chica.</span>
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <h4 className="text-xl font-bold text-white mb-3">Compromiso mutuo</h4>
              <p className="text-slate-400">Entramos con intención real de construir, no de improvisar.</p>
            </div>
            <div className="p-6">
              <h4 className="text-xl font-bold text-white mb-3">30 días de respaldo</h4>
              <p className="text-slate-400">Tu operación no asume el riesgo sola.</p>
            </div>
            <div className="p-6">
              <h4 className="text-xl font-bold text-white mb-3">Cero sorpresas</h4>
              <p className="text-slate-400">Sin costos ocultos. Sin vueltas. Todo claro desde el inicio.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CIERRE FINAL */}
      <section className="py-32 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
            Tu operación puede seguir improvisando.<br/>
            <span className="text-slate-500">O puede empezar a funcionar como un sistema.</span>
          </h2>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
            Si hoy cotizás lento, respondés entre chats, dependés de memoria humana o perdés orden comercial, ya no necesitás más parche. Necesitás arquitectura.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto">
            <Link href="/auditoria" className="bg-green-500 hover:bg-green-400 text-slate-950 font-bold py-5 px-10 rounded-lg transition-all text-xl">
              Quiero auditar mi operación
            </Link>
            <Link href="/obras" className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-5 px-10 rounded-lg transition-all text-xl border border-slate-700">
              Ver obras en producción
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
