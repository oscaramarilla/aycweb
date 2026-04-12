import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AYCweb Paraguay | Infraestructura Digital B2B",
  description:
    "Convertimos procesos manuales en sistemas de captación, cotización y cierre para empresas y profesionales en Paraguay.",
};

const whatsappNumber = "595985864209";
const whatsappAuditMsg = encodeURIComponent(
  "Hola Oscar. Quiero postular mi negocio para una auditoría técnica con AYCweb."
);

const stats = [
  { value: "24/7", label: "captación y respuesta" },
  { value: "10x", label: "más velocidad operativa" },
  { value: "0", label: "tolerancia a errores manuales repetitivos" },
];

const paths = [
  {
    icon: "🏭",
    title: "Para Empresas",
    description:
      "Manufactureras, agroindustria, distribuidoras, clínicas y estructuras corporativas que necesitan ordenar ventas, cotización y operación.",
    bullets: [
      "Cotizadores dinámicos",
      "Contratos automáticos",
      "Portales y dashboards",
    ],
    href: "/sectores",
    cta: "Ver soluciones corporativas",
    accent: "blue",
  },
  {
    icon: "🧑‍⚕️",
    title: "Para Profesionales",
    description:
      "Médicos, abogados, contadores, arquitectos y especialistas que necesitan captar mejor, filtrar consultas y cerrar con más orden.",
    bullets: [
      "Captación calificada",
      "Agenda y pre-filtro",
      "WhatsApp como canal de cierre",
    ],
    href: "/sectores",
    cta: "Ver sistemas para profesionales",
    accent: "emerald",
  },
];

const process = [
  {
    step: "01",
    title: "Auditoría",
    text: "Detectamos cuellos de botella reales en ventas, cotización o atención.",
  },
  {
    step: "02",
    title: "Arquitectura",
    text: "Diseñamos el sistema exacto que necesita tu operación, sin plantillas genéricas.",
  },
  {
    step: "03",
    title: "Implementación",
    text: "Lo dejamos funcionando en producción con una ruta clara de adopción y cierre.",
  },
];

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-50">
      <div className="pointer-events-none absolute inset-0 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />

      <section className="relative z-10 border-b border-white/[0.06] px-6 pb-12 pt-28 md:pb-24 md:pt-40">
        <div className="absolute left-1/2 top-0 -z-10 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[120px]" />

        <div className="mx-auto max-w-6xl text-center">
          <span className="mb-6 inline-flex rounded-full border border-slate-800 bg-slate-900 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-300">
            No vendemos páginas sueltas. Construimos sistemas.
          </span>

          <h1 className="mx-auto mb-6 max-w-5xl text-5xl font-black leading-[1.02] tracking-tight text-white md:text-7xl lg:text-8xl">
            Convertimos procesos manuales en{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              sistemas de captación, cotización y cierre.
            </span>
          </h1>

          <p className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-slate-400 md:text-2xl">
            Reemplazamos Excel roto, WhatsApps dispersos y respuestas lentas por
            infraestructura digital que ordena tu operación y trabaja 24/7.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappAuditMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-blue-600 px-8 py-4 text-base font-black text-white shadow-[0_0_30px_rgba(37,99,235,0.35)] transition hover:bg-blue-500 active:scale-[0.98]"
            >
              Postular a auditoría
            </a>
            <Link
              href="/soluciones"
              className="rounded-xl border border-slate-700 bg-slate-900 px-8 py-4 text-base font-bold text-slate-100 transition hover:border-slate-500 hover:bg-slate-800"
            >
              Ver soluciones
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6"
              >
                <div className="mb-2 text-3xl font-black text-white">{item.value}</div>
                <div className="text-sm text-slate-400">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-[#05070d] px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <h2 className="mb-4 text-3xl font-black text-white md:text-5xl">
              Dos caminos. Una misma tesis.
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-400">
              No todos compran igual. Por eso diferenciamos la arquitectura para
              empresas y para profesionales.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-2">
            {paths.map((path) => (
              <div
                key={path.title}
                className="flex flex-col rounded-3xl border border-slate-800 bg-slate-900/60 p-8 transition hover:-translate-y-1 hover:border-slate-600"
              >
                <span className="mb-5 text-5xl">{path.icon}</span>
                <h3 className="mb-3 text-3xl font-black text-white">{path.title}</h3>
                <p className="mb-6 flex-1 text-lg leading-relaxed text-slate-400">
                  {path.description}
                </p>

                <ul className="mb-8 space-y-3">
                  {path.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-3 text-slate-300">
                      <span className="text-blue-400">✓</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={path.href}
                  className="rounded-xl border border-slate-700 bg-slate-800 px-6 py-4 text-center font-bold text-white transition hover:bg-slate-700"
                >
                  {path.cta} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 border-y border-white/[0.06] px-6 py-16 md:py-24">
        <div className="absolute right-0 top-1/2 -z-10 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-blue-600/5 blur-[120px]" />

        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <span className="mb-3 block text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
              Cómo trabajamos
            </span>
            <h2 className="text-3xl font-black text-white md:text-5xl">
              No improvisamos. Evaluamos y construimos.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {process.map((item) => (
              <div
                key={item.step}
                className="rounded-3xl border border-slate-800 bg-slate-900/50 p-8"
              >
                <div className="mb-5 text-sm font-black tracking-[0.25em] text-blue-400">
                  {item.step}
                </div>
                <h3 className="mb-3 text-2xl font-black text-white">{item.title}</h3>
                <p className="leading-relaxed text-slate-400">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-[#05070d] px-6 py-16 md:py-24">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-8 text-center shadow-2xl md:p-14">
          <span className="mb-5 block text-5xl">🛡️</span>
          <h2 className="mb-5 text-3xl font-black text-white md:text-5xl">
            Trabajamos con filtro, no por volumen.
          </h2>
          <p className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-slate-400">
            Si detectamos que tu negocio todavía no está listo para una solución
            de este nivel, te lo decimos de frente. Nuestra prioridad es construir
            sistemas donde exista ROI real y una operación que valga la pena escalar.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappAuditMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-white px-8 py-4 font-black text-slate-950 transition hover:bg-slate-200"
            >
              Aplicar para trabajar juntos
            </a>
            <Link
              href="/nosotros"
              className="rounded-xl border border-slate-700 px-8 py-4 font-bold text-slate-100 transition hover:border-slate-500 hover:bg-slate-800"
            >
              Conocer nuestra historia
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
