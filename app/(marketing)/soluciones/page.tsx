import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Soluciones B2B | AYCweb Paraguay",
  description:
    "Landings B2B, cotizadores automáticos, contratos, portales y dashboards para empresas que quieren captar, cotizar y operar mejor.",
};

const whatsappNumber = "595985864209";
const whatsappMsg = encodeURIComponent(
  "Hola Oscar. Vi las soluciones de AYCweb y quiero agendar un diagnóstico técnico."
);

const services = [
  {
    icon: "⚡",
    title: "Landings B2B",
    description:
      "Páginas diseñadas para captar leads comerciales calificados y convertir tráfico en conversaciones útiles.",
    bullets: ["Copy a conversión", "WhatsApp integrado", "SEO técnico base"],
    accent: "blue",
  },
  {
    icon: "🎯",
    title: "Cotizadores automáticos",
    description:
      "Motores de cálculo que generan presupuestos formales en segundos y acortan el ciclo comercial.",
    bullets: ["Lógica compleja", "PDFs automáticos", "Menos error manual"],
    accent: "emerald",
  },
  {
    icon: "📝",
    title: "Generador de contratos",
    description:
      "Documentos dinámicos que se rellenan con formularios y salen listos para revisión o firma.",
    bullets: ["Templates a medida", "Campos condicionales", "Listo para firma"],
    accent: "purple",
  },
  {
    icon: "🔒",
    title: "Portales B2B",
    description:
      "Accesos privados para clientes, pedidos, documentos, soporte y seguimiento sin saturar tu equipo.",
    bullets: ["Login seguro", "Documentos centralizados", "Menos atención repetitiva"],
    accent: "orange",
  },
  {
    icon: "📊",
    title: "Dashboards operativos",
    description:
      "Paneles conectados a tu negocio para visualizar ventas, producción, cotización o atención en una sola pantalla.",
    bullets: ["KPIs claros", "Integración por APIs", "Visión ejecutiva"],
    accent: "cyan",
  },
  {
    icon: "⚙️",
    title: "Ingeniería custom",
    description:
      "Herramientas hechas para tu cuello de botella exacto cuando el mercado no tiene una solución que sirva.",
    bullets: ["Análisis arquitectónico", "Desarrollo a medida", "Escalabilidad real"],
    accent: "pink",
  },
];

const benefits = [
  { value: "10x", title: "Velocidad", text: "Cotizaciones y tareas que antes tardaban horas." },
  { value: "24/7", title: "Operación", text: "Tus sistemas siguen trabajando aunque tu equipo no esté conectado." },
  { value: "0", title: "Tolerancia al caos", text: "Menos errores repetitivos en cálculos, formatos y respuesta." },
  { value: "↑", title: "Escala", text: "Más volumen con menos dependencia de gestión manual." },
];

export default function SolucionesPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-50">
      <div className="pointer-events-none absolute inset-0 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />

      <section className="relative z-10 border-b border-white/[0.06] px-6 pb-20 pt-28 text-center md:pb-28 md:pt-40">
        <div className="absolute left-1/2 top-0 -z-10 h-[1000px] w-[1000px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[140px]" />

        <div className="mx-auto max-w-5xl">
          <span className="mb-6 inline-block rounded-full border border-blue-500/20 bg-blue-900/20 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-400">
            Ingeniería digital B2B
          </span>
          <h1 className="mb-8 text-5xl font-black leading-[1.02] tracking-tight text-white md:text-7xl lg:text-8xl">
            Dejá de comprar herramientas sueltas.{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Implementá un sistema.
            </span>
          </h1>
          <p className="mx-auto mb-12 max-w-3xl text-xl leading-relaxed text-slate-400 md:text-2xl">
            Diseñamos infraestructura digital para captar, cotizar, documentar y
            operar mejor. No vendemos “una web y chau”.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-blue-600 px-8 py-4 text-lg font-black text-white shadow-[0_0_30px_rgba(37,99,235,0.35)] transition hover:bg-blue-500"
            >
              Agendar diagnóstico técnico
            </a>
            <Link
              href="/sectores"
              className="rounded-xl border border-slate-700 bg-slate-900 px-8 py-4 text-lg font-bold text-slate-100 transition hover:border-slate-500 hover:bg-slate-800"
            >
              Ver industrias →
            </Link>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-black text-white md:text-6xl">
              Soluciones de ingeniería
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-slate-400">
              Cada pieza está pensada para resolver una fuga operativa concreta.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-3xl border border-slate-800 bg-slate-900/40 p-8 transition duration-300 hover:-translate-y-1 hover:bg-slate-900/80 hover:border-slate-600"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-700 bg-slate-950 text-2xl">
                  {service.icon}
                </div>
                <h3 className="mb-4 text-2xl font-black text-white">{service.title}</h3>
                <p className="mb-6 text-sm leading-relaxed text-slate-400">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 text-sm text-slate-300">
                      <span className="text-blue-400">✓</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 border-y border-white/[0.06] bg-[#05070d] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <h2 className="text-4xl font-black text-white md:text-5xl">
              ¿Qué cambia cuando el sistema está bien hecho?
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-3xl border border-slate-800 bg-slate-900/50 p-8 text-center"
              >
                <span className="mb-4 block text-4xl font-black text-blue-400">
                  {benefit.value}
                </span>
                <h3 className="mb-2 font-bold text-white">{benefit.title}</h3>
                <p className="text-sm text-slate-400">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 px-6 py-24 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-3xl font-black text-white md:text-5xl">
            ¿Listo para construir tu sistema?
          </h2>
          <p className="mb-10 text-lg text-slate-400">
            Te mostramos en una conversación qué parte de tu operación conviene
            automatizar primero y cuál no.
          </p>
          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-xl bg-blue-600 px-8 py-4 font-black text-white shadow-[0_0_30px_rgba(37,99,235,0.35)] transition hover:bg-blue-500"
          >
            Agendar diagnóstico técnico
          </a>
        </div>
      </section>
    </div>
  );
}
