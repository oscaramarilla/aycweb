import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Soluciones | AYCweb Paraguay",
  description:
    "Soluciones separadas para empresas y profesionales. Infraestructura digital pensada según el tipo de operación y cierre.",
};

export default function SolucionesPage() {
  const whatsappNumber = "595985864209";

  const empresaMsg = encodeURIComponent(
    "Hola Oscar. Vi las soluciones para empresas y quiero agendar un diagnóstico."
  );

  const profesionalMsg = encodeURIComponent(
    "Hola Oscar. Vi las soluciones para profesionales y quiero agendar un diagnóstico."
  );

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-50">
      <div className="absolute inset-0 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay" />

      {/* HERO */}
      <section className="relative z-10 border-b border-white/[0.06] px-6 pb-16 pt-28 text-center md:pb-24 md:pt-40">
        <div className="absolute top-0 left-1/2 -z-10 h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[140px] pointer-events-none" />

        <div className="mx-auto max-w-5xl">
          <span className="mb-6 inline-block rounded-full border border-slate-800 bg-slate-900 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-300">
            Soluciones AYCweb
          </span>

          <h1 className="mb-6 text-5xl font-black leading-[1.02] tracking-tight text-white md:text-7xl">
            Dos grandes líneas de solución.
          </h1>

          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-slate-400 md:text-2xl">
            Separamos nuestra ingeniería en dos grandes rubros:{" "}
            <strong className="text-white">empresas</strong> y{" "}
            <strong className="text-white">profesionales</strong>.
          </p>
        </div>
      </section>

      {/* EMPRESAS */}
      <section className="relative z-10 px-6 py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="mb-5 block text-5xl">🏭</span>
            <h2 className="mb-5 text-4xl font-black text-white md:text-5xl">
              Soluciones para Empresas
            </h2>

            <p className="mb-8 text-lg leading-relaxed text-slate-400">
              Para manufactureras, distribuidoras, agroindustria, clínicas,
              corporativos y operaciones que necesitan vender, cotizar y ordenar
              procesos con más estructura.
            </p>

            <div className="mb-8 space-y-4">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
                <h3 className="mb-2 font-bold text-white">
                  Captación y presentación comercial
                </h3>
                <p className="text-sm text-slate-400">
                  Landings B2B, páginas corporativas y estructuras pensadas para
                  decisores y cierres más serios.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
                <h3 className="mb-2 font-bold text-white">
                  Cotización y documentación
                </h3>
                <p className="text-sm text-slate-400">
                  Cotizadores dinámicos, PDFs automáticos, contratos, formularios
                  y flujos documentales más finos.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
                <h3 className="mb-2 font-bold text-white">Operación y control</h3>
                <p className="text-sm text-slate-400">
                  Portales, dashboards y sistemas internos para reducir carga
                  manual y mejorar visibilidad operativa.
                </p>
              </div>
            </div>

            <a
              href={`https://wa.me/${whatsappNumber}?text=${empresaMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-xl bg-blue-600 px-8 py-4 font-black text-white shadow-[0_0_30px_rgba(37,99,235,0.35)] transition hover:bg-blue-500"
            >
              Diagnóstico para empresas
            </a>
          </div>

          <div className="rounded-[2rem] border border-blue-900/30 bg-slate-900/50 p-8 md:p-10">
            <div className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
              En qué ayuda
            </div>

            <ul className="space-y-4 text-slate-300">
              <li className="flex gap-3">
                <span className="text-blue-400">✓</span>
                <span>Reducir tiempos muertos en ventas y cotización</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400">✓</span>
                <span>Eliminar tareas repetitivas y errores manuales</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400">✓</span>
                <span>Ordenar mejor la experiencia comercial del cliente</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400">✓</span>
                <span>Crear una estructura más lista para escalar</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* PROFESIONALES */}
      <section className="relative z-10 border-y border-white/[0.06] bg-[#05070d] px-6 py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div className="order-2 rounded-[2rem] border border-emerald-900/30 bg-slate-900/50 p-8 md:p-10 lg:order-1">
            <div className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-emerald-400">
              En qué ayuda
            </div>

            <ul className="space-y-4 text-slate-300">
              <li className="flex gap-3">
                <span className="text-emerald-400">✓</span>
                <span>Captar mejor desde el primer impacto</span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400">✓</span>
                <span>Filtrar consultas y ordenar la demanda</span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400">✓</span>
                <span>Mostrar más autoridad y claridad comercial</span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400">✓</span>
                <span>Cerrar mejor sin depender del caos del día a día</span>
              </li>
            </ul>
          </div>

          <div className="order-1 lg:order-2">
            <span className="mb-5 block text-5xl">🧑‍⚕️</span>
            <h2 className="mb-5 text-4xl font-black text-white md:text-5xl">
              Soluciones para Profesionales
            </h2>

            <p className="mb-8 text-lg leading-relaxed text-slate-400">
              Para médicos, abogados, contadores, arquitectos y especialistas que
              necesitan posicionarse mejor, captar consultas de calidad y dar una
              experiencia más ordenada.
            </p>

            <div className="mb-8 space-y-4">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
                <h3 className="mb-2 font-bold text-white">
                  Presencia y posicionamiento
                </h3>
                <p className="text-sm text-slate-400">
                  Páginas, estructura y mensaje pensados para transmitir más
                  confianza, criterio y valor percibido.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
                <h3 className="mb-2 font-bold text-white">
                  Captación y filtro comercial
                </h3>
                <p className="text-sm text-slate-400">
                  Sistemas para ordenar consultas, dirigir mejor al usuario y
                  reducir pérdida de oportunidades.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
                <h3 className="mb-2 font-bold text-white">
                  Cierre y seguimiento
                </h3>
                <p className="text-sm text-slate-400">
                  Flujos conectados a WhatsApp y estructura pensada para convertir
                  más sin saturarte manualmente.
                </p>
              </div>
            </div>

            <a
              href={`https://wa.me/${whatsappNumber}?text=${profesionalMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-xl bg-emerald-600 px-8 py-4 font-black text-white shadow-[0_0_30px_rgba(16,185,129,0.30)] transition hover:bg-emerald-500"
            >
              Diagnóstico para profesionales
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
