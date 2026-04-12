import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Productos | AYCweb",
  description:
    "Planes de infraestructura digital para empresas y profesionales. Elegí la arquitectura que mejor se adapta a tu operación.",
};

export default function ProductosPage() {
  const whatsappNumber = "595985864209";

  const empresaMsg = encodeURIComponent(
    "Hola Oscar. Quiero agendar un diagnóstico gratuito para evaluar la arquitectura de mi empresa."
  );

  const profesionalMsg = encodeURIComponent(
    "Hola Oscar. Quiero agendar un diagnóstico gratuito para evaluar la arquitectura de mi servicio profesional."
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 md:hidden">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay" />

      {/* HERO */}
      <section className="relative z-10 px-5 pt-24 pb-10 border-b border-white/[0.06]">
        <div className="max-w-md mx-auto text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-[11px] font-bold uppercase tracking-[0.2em] mb-5">
            Productos AYCweb
          </span>

          <h1 className="text-4xl font-black leading-[1.02] tracking-tight text-white mb-4">
            Elegí tu camino.
          </h1>

          <p className="text-slate-400 text-base leading-relaxed">
            Dos líneas claras. Una para <strong className="text-white">empresas</strong> y otra para{" "}
            <strong className="text-white">profesionales</strong>.
          </p>
        </div>
      </section>

      {/* EMPRESAS */}
      <section className="relative z-10 px-5 py-8">
        <div className="max-w-md mx-auto rounded-[2rem] border border-blue-900/30 bg-slate-900/60 p-6 shadow-2xl">
          <div className="text-4xl mb-4">🏭</div>
          <h2 className="text-2xl font-black text-white mb-2">Para Empresas</h2>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            Arquitecturas para operaciones que necesitan captar, cotizar, ordenar procesos y vender con más control.
          </p>

          <div className="space-y-4 mb-7">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
              <div className="text-xs uppercase tracking-[0.2em] text-blue-400 font-bold mb-2">Starter Empresa</div>
              <div className="text-3xl font-black text-white mb-2">$900</div>
              <p className="text-sm text-slate-400">
                Base sólida para empezar a sistematizar captación, presentación y primer flujo comercial.
              </p>
            </div>

            <div className="rounded-2xl border border-blue-500/30 bg-blue-950/10 p-5">
              <div className="text-xs uppercase tracking-[0.2em] text-blue-300 font-bold mb-2">Sistema Empresa</div>
              <div className="text-3xl font-black text-white mb-2">$1800</div>
              <p className="text-sm text-slate-400">
                Infraestructura más completa para empresas que ya necesitan automatización y una operación más fina.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
              <div className="text-xs uppercase tracking-[0.2em] text-purple-400 font-bold mb-2">Arquitectura a Medida</div>
              <div className="text-2xl font-black text-white mb-2">Cotización a medida</div>
              <p className="text-sm text-slate-400">
                Para operaciones con lógica propia, integraciones especiales o cuellos de botella más complejos.
              </p>
            </div>
          </div>

          <a
            href={`https://wa.me/${whatsappNumber}?text=${empresaMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center rounded-xl bg-blue-600 py-4 font-black text-white shadow-[0_0_30px_rgba(37,99,235,0.35)] transition hover:bg-blue-500"
          >
            Agenda diagnóstico gratuito
          </a>
        </div>
      </section>

      {/* PROFESIONALES */}
      <section className="relative z-10 px-5 py-2">
        <div className="max-w-md mx-auto rounded-[2rem] border border-emerald-900/30 bg-slate-900/60 p-6 shadow-2xl">
          <div className="text-4xl mb-4">🧑‍⚕️</div>
          <h2 className="text-2xl font-black text-white mb-2">Para Profesionales</h2>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            Sistemas para captar mejor, mostrar autoridad, filtrar consultas y ordenar tu canal comercial.
          </p>

          <div className="space-y-4 mb-7">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
              <div className="text-xs uppercase tracking-[0.2em] text-emerald-400 font-bold mb-2">Profesional Base</div>
              <div className="text-3xl font-black text-white mb-2">$350</div>
              <p className="text-sm text-slate-400">
                Presencia digital clara, enfoque directo y estructura inicial para convertir consultas en oportunidades.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-950/10 p-5">
              <div className="text-xs uppercase tracking-[0.2em] text-emerald-300 font-bold mb-2">Profesional Pro</div>
              <div className="text-3xl font-black text-white mb-2">$650</div>
              <p className="text-sm text-slate-400">
                Sistema más fuerte de captación y posicionamiento para profesionales que quieren subir nivel y cerrar mejor.
              </p>
            </div>
          </div>

          <a
            href={`https://wa.me/${whatsappNumber}?text=${profesionalMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center rounded-xl bg-emerald-600 py-4 font-black text-white shadow-[0_0_30px_rgba(16,185,129,0.30)] transition hover:bg-emerald-500"
          >
            Agenda diagnóstico gratuito
          </a>
        </div>
      </section>

      {/* BLOQUE DE CONFIANZA */}
      <section className="relative z-10 px-5 py-8 pb-12">
        <div className="max-w-md mx-auto rounded-[2rem] border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-6">
          <div className="text-4xl mb-4 text-center">🛡️</div>
          <h3 className="text-2xl font-black text-white text-center mb-5">
            Compromiso mutuo desde el día uno
          </h3>

          <div className="space-y-4 mb-7">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
              <div className="font-bold text-white mb-1">Reserva tu lugar</div>
              <p className="text-sm text-slate-400">
                La posición se asegura con compromiso mutuo desde el día uno.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
              <div className="font-bold text-white mb-1">30 días de garantía</div>
              <p className="text-sm text-slate-400">
                Si no funciona para ninguna de las partes, devolución total.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
              <div className="font-bold text-white mb-1">Sin letras chicas</div>
              <p className="text-sm text-slate-400">
                Cero sorpresas. Cero costos ocultos. Todo claro desde el inicio.
              </p>
            </div>
          </div>

          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
              "Hola Oscar. Quiero agendar un diagnóstico gratuito con AYCweb."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center rounded-xl bg-white py-4 font-black text-slate-950 transition hover:bg-slate-200"
          >
            Agenda diagnóstico gratuito
          </a>
        </div>
      </section>
    </div>
  );
}
