// app/page.tsx
import Link from "next/link";

export default function Home() {
  const whatsappNumber = "595985864209";
  const whatsappMsg = encodeURIComponent(
    "Hola, quiero agendar una auditoría operativa sin costo para mi empresa B2B."
  );

  return (
    <main className="flex min-h-screen flex-col bg-zinc-950 font-sans text-zinc-50">
      
      {/* 1) Hero */}
      <section className="relative w-full pt-24 pb-20 px-6 border-b border-zinc-900 overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-72 bg-blue-600/10 blur-[120px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto grid gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.32em] text-blue-400 font-bold">
              Infraestructura digital B2B para empresas de Paraguay
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
              Automatizamos cotizaciones, contratos y captura de leads para que tu operación venda 24/7 sin caos.
            </h1>
            <p className="text-lg text-zinc-300 max-w-2xl leading-relaxed">
              Cotizadores, contratos y captación de leads para industrias, clínicas y empresas B2B en Paraguay.
            </p>
            <p className="text-lg text-zinc-400 max-w-2xl leading-relaxed">
              Caso real: de 2 horas a 45 segundos por cotización.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-3xl bg-blue-600 px-8 py-4 text-base font-black text-white transition hover:bg-blue-500 active:scale-[0.98]"
              >
                Agendar auditoría operativa sin costo
              </a>
              <Link
                href="/casos"
                className="inline-flex items-center justify-center rounded-3xl border border-zinc-800 bg-zinc-900 px-8 py-4 text-base font-bold text-white transition hover:border-zinc-700"
              >
                Ver casos reales
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-zinc-900 bg-zinc-900/40 p-8 text-center">
            <div className="mx-auto flex h-56 w-full max-w-md items-center justify-center rounded-[1.75rem] bg-blue-950/30 shadow-[0_30px_90px_-50px_rgba(56,189,248,0.8)]">
              <p className="px-6 text-center text-white text-xl font-bold leading-snug">
                Plataforma operativa B2B para cotizaciones, contratos y leads.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 2) Caso real */}
      <section className="w-full py-24 px-6 bg-zinc-950 border-b border-zinc-900">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 text-center">
            <p className="text-sm uppercase tracking-[0.32em] text-blue-400 font-bold mb-4">Caso real</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white">Industria plástica · Paraguay</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto mt-4">
              Problema: cotizaciones manuales tardaban 2 horas, con errores de margen.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-3xl border border-zinc-800 bg-zinc-900/80 p-8">
              <p className="text-sm uppercase tracking-[0.24em] text-blue-400 font-bold mb-3">Problema</p>
              <p className="text-zinc-300">Cotizaciones manuales en Excel demoraban 2 horas y generaban errores de margen.</p>
            </div>
            <div className="rounded-3xl border border-zinc-800 bg-zinc-900/80 p-8">
              <p className="text-sm uppercase tracking-[0.24em] text-blue-400 font-bold mb-3">Sistema</p>
              <p className="text-zinc-300">Cotizador web con reglas de precio por volumen y generación automática de PDF.</p>
            </div>
            <div className="rounded-3xl border border-zinc-800 bg-zinc-900/80 p-8">
              <p className="text-sm uppercase tracking-[0.24em] text-blue-400 font-bold mb-3">Resultado</p>
              <p className="text-zinc-300">45 segundos por cotización. 0 errores de cálculo.</p>
            </div>
          </div>

          <div className="mt-10 rounded-3xl border border-zinc-800 bg-zinc-900/80 p-8 text-center">
            <p className="text-xl font-bold text-white">“Antes mandábamos Excel a mano. Ahora el cliente recibe el presupuesto en segundos.”</p>
            <p className="mt-3 text-zinc-400">— Encargado comercial, empresa de distribución, Asunción</p>
          </div>
        </div>
      </section>

      {/* 4) Qué resolvemos */}
      <section className="w-full py-24 px-6 bg-black border-b border-zinc-900">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <p className="text-sm uppercase tracking-[0.32em] text-blue-400 font-bold mb-4">
              Qué resolvemos
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Si ves estos problemas, podemos ayudarte.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-zinc-800 bg-zinc-950/80 p-8">
              <p className="text-xl font-bold text-white mb-4">Cotizaciones que tardan horas o días.</p>
              <p className="text-zinc-400">Duplicamos tu velocidad sin perder control de precio ni margen.</p>
            </div>
            <div className="rounded-3xl border border-zinc-800 bg-zinc-950/80 p-8">
              <p className="text-xl font-bold text-white mb-4">Vendedores saturados respondiendo siempre lo mismo.</p>
              <p className="text-zinc-400">Construimos flujos que automatizan respuestas comerciales y liberan tiempo de cierre.</p>
            </div>
            <div className="rounded-3xl border border-zinc-800 bg-zinc-950/80 p-8">
              <p className="text-xl font-bold text-white mb-4">Formularios o planillas que nadie completa bien.</p>
              <p className="text-zinc-400">Reemplazamos entradas manuales por formularios inteligentes que captan datos útiles en tiempo real.</p>
            </div>
            <div className="rounded-3xl border border-zinc-800 bg-zinc-950/80 p-8">
              <p className="text-xl font-bold text-white mb-4">Pérdida de oportunidades por no responder fuera del horario laboral.</p>
              <p className="text-zinc-400">Conectamos tus leads a sistemas y WhatsApp que trabajan cuando tu equipo no está disponible.</p>
            </div>
          </div>

          <div className="mt-10 rounded-3xl border border-zinc-800 bg-zinc-900/80 p-8 text-center">
            <p className="text-xl text-zinc-200 max-w-3xl mx-auto leading-relaxed">
              Diseñamos sistemas a medida que reemplazan procesos manuales por flujos claros, medibles y automatizados.
            </p>
          </div>
        </div>
      </section>

      {/* 5) Cómo trabajamos */}
      <section className="w-full py-24 px-6 bg-zinc-950 border-b border-zinc-900">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <p className="text-sm uppercase tracking-[0.32em] text-blue-400 font-bold mb-4">Cómo trabajamos</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white">Proceso en 3 pasos.</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-8">
              <p className="text-3xl font-black text-blue-400 mb-4">1</p>
              <h3 className="text-xl font-bold text-white mb-3">Diagnóstico B2B</h3>
              <p className="text-zinc-400">Revisamos tus procesos, tiempos y errores frecuentes.</p>
            </div>
            <div className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-8">
              <p className="text-3xl font-black text-blue-400 mb-4">2</p>
              <h3 className="text-xl font-bold text-white mb-3">Diseño del sistema</h3>
              <p className="text-zinc-400">Definimos flujos, permisos, integraciones y entregables.</p>
            </div>
            <div className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-8">
              <p className="text-3xl font-black text-blue-400 mb-4">3</p>
              <h3 className="text-xl font-bold text-white mb-3">Implementación y soporte</h3>
              <p className="text-zinc-400">Ponemos el sistema a producir y ajustamos según métricas reales.</p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-3xl bg-blue-600 px-8 py-4 text-base font-black text-white transition hover:bg-blue-500"
            >
              Quiero un diagnóstico de mi operación
            </a>
          </div>
        </div>
      </section>

      {/* 4) Sistemas que hacemos */}
      <section className="w-full py-24 px-6 bg-black border-b border-zinc-900">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <p className="text-sm uppercase tracking-[0.32em] text-blue-400 font-bold mb-4">Sistemas que hacemos</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white">Ejemplos de sistemas que ya están vendiendo.</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-zinc-800 bg-zinc-950/80 p-8">
              <h3 className="text-xl font-bold text-white mb-3">Portal de cotización para distribuidores industriales.</h3>
              <p className="text-zinc-400">Cotiza materiales, logística y descuentos comerciales en un solo flujo.</p>
            </div>
            <div className="rounded-3xl border border-zinc-800 bg-zinc-950/80 p-8">
              <h3 className="text-xl font-bold text-white mb-3">Formulario inteligente para admisión de pacientes en clínicas.</h3>
              <p className="text-zinc-400">Captura datos estructurados y reduce rechazos por información incompleta.</p>
            </div>
            <div className="rounded-3xl border border-zinc-800 bg-zinc-950/80 p-8">
              <h3 className="text-xl font-bold text-white mb-3">Generador automático de presupuestos y contratos PDF.</h3>
              <p className="text-zinc-400">Un solo clic para obtener documento formal con precios y legales listos.</p>
            </div>
            <div className="rounded-3xl border border-zinc-800 bg-zinc-950/80 p-8">
              <h3 className="text-xl font-bold text-white mb-3">Sistema de pedidos internos entre sucursales.</h3>
              <p className="text-zinc-400">Controla stock, rutas y autorizaciones sin depender de llamadas ni planillas.</p>
            </div>
          </div>

          <p className="mt-10 text-center text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            Todos conectados a tus herramientas actuales (WhatsApp, correo, planillas) cuando es necesario.
          </p>
        </div>
      </section>

      {/* 5) Casos y prueba social */}
      <section className="w-full py-24 px-6 bg-zinc-950 border-b border-zinc-900">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <p className="text-sm uppercase tracking-[0.32em] text-blue-400 font-bold mb-4">Resultados reales</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white">Resultados reales en empresas reales.</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-zinc-800 bg-zinc-900/80 p-8">
              <p className="text-sm uppercase tracking-[0.3em] text-blue-400 font-bold mb-4">Industria metalmecánica – 15 vendedores</p>
              <div className="space-y-4 text-zinc-300">
                <div>
                  <p className="font-bold text-white">Problema</p>
                  <p>Cotizaciones manuales en Excel, demoras de hasta 2 horas.</p>
                </div>
                <div>
                  <p className="font-bold text-white">Solución</p>
                  <p>Portal de cotización con reglas de precio y plantillas automáticas.</p>
                </div>
                <div>
                  <p className="font-bold text-white">Resultado</p>
                  <p>Tiempo por cotización 2h → 45s; menos errores y más cierres.</p>
                </div>
              </div>
            </div>
            <div className="rounded-3xl border border-zinc-800 bg-zinc-900/80 p-8 flex flex-col justify-between">
              <div>
                <p className="text-xl font-bold text-white mb-4">“Hoy nuestro equipo puede atender más clientes sin trabajar horas extra.”</p>
                <p className="text-zinc-400">– Gerente comercial, industria</p>
              </div>
              <div className="mt-8 rounded-3xl bg-zinc-950/60 p-6">
                <p className="text-sm uppercase tracking-[0.24em] text-blue-400 font-bold mb-3">Confianza</p>
                <p className="text-zinc-300">RUC 4499507-5 · Asunción, Paraguay · contacto@aycweb.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6) Confianza y contacto */}
      <section className="w-full py-24 px-6 bg-black">
        <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-2 items-center">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.32em] text-blue-400 font-bold">Confianza y contacto</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white">Atendemos empresas en todo Paraguay.</h2>
            <p className="text-zinc-400 max-w-2xl leading-relaxed">
              RUC 4499507-5 · Asunción · contacto@aycweb.com · WhatsApp directo para auditoría operativa.
            </p>
            <p className="text-zinc-400 max-w-2xl leading-relaxed">
              Horario de atención: lunes a viernes, 9:00 a 18:00. También respondemos en WhatsApp fuera de hora para casos urgentes.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/80 p-10 text-center">
            <p className="text-sm uppercase tracking-[0.32em] text-blue-400 font-bold mb-6">Contacto directo</p>
            <p className="text-2xl font-black text-white mb-6">WhatsApp: +595 985 864 209</p>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-3xl bg-blue-600 px-8 py-4 text-base font-black text-white transition hover:bg-blue-500"
            >
              Agendar auditoría operativa sin costo
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
