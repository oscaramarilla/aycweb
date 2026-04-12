import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Soluciones por Industria | AYCweb",
  description:
    "Infraestructura digital adaptada a manufactura, logística, salud, corporativo y otros sectores en Paraguay.",
};

const whatsappNumber = "595985864209";
const whatsappMsg = encodeURIComponent(
  "Hola Oscar. Quiero una auditoría para analizar cómo automatizar mi operación."
);

const sectors = [
  {
    icon: "🏭",
    title: "Industria & Logística",
    pain:
      "Cotizaciones lentas en Excel, cálculo de fletes a ojo, pérdida de margen y seguimiento disperso.",
    solution:
      "Motores logísticos, cotizadores dinámicos, contratos automáticos y flujos claros para ventas industriales.",
    result:
      "Pasar de improvisar precios a emitir propuestas formales con velocidad y criterio.",
    accent: "blue",
    href: "/casos#empresas",
    cta: "Ver casos empresariales",
  },
  {
    icon: "🏥",
    title: "Salud & Clínicas",
    pain:
      "Recepción saturada, consultas fuera de horario, precios repetidos por WhatsApp y pacientes que se enfrían.",
    solution:
      "Embudos clínicos, pre-filtro, captación calificada y derivación más ordenada a agenda o WhatsApp.",
    result:
      "Más orden en la atención y menos desgaste en recepción.",
    accent: "emerald",
    href: "/casos#profesionales",
    cta: "Ver casos del sector salud",
  },
  {
    icon: "💼",
    title: "Corporativo & Legal",
    pain:
      "Documentos repetitivos, errores por copiar y pegar, tiempos muertos en propuestas y contratos.",
    solution:
      "Formularios condicionales, generadores automáticos de documentos y flujos de emisión más seguros.",
    result:
      "Menos tiempo administrativo y más velocidad comercial.",
    accent: "purple",
    href: "/casos#empresas",
    cta: "Ver automatización documental",
  },
];

export default function SectoresPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-50">
      <div className="pointer-events-none absolute inset-0 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />

      <section className="relative z-10 border-b border-white/[0.06] px-6 pb-16 pt-28 text-center md:pb-24 md:pt-40">
        <div className="absolute left-1/2 top-0 -z-10 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-6 text-4xl font-black leading-[1.04] tracking-tight text-white md:text-6xl">
            Soluciones por{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              industria
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-400 md:text-xl">
            No aplicamos la misma plantilla a todos. Diseñamos la arquitectura
            según la lógica operativa de tu negocio.
          </p>
        </div>
      </section>

      <section className="relative z-10 px-6 py-24">
        <div className="mx-auto max-w-6xl space-y-10">
          {sectors.map((sector) => (
            <div
              key={sector.title}
              className="grid grid-cols-1 gap-8 rounded-[2rem] border border-slate-800 bg-slate-900/50 p-8 md:grid-cols-2 md:p-10"
            >
              <div>
                <div className="mb-4 text-5xl">{sector.icon}</div>
                <h2 className="mb-6 text-3xl font-black text-white">{sector.title}</h2>

                <div className="mb-4 rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-red-400">
                    Cuello de botella típico
                  </p>
                  <p className="text-sm leading-relaxed text-slate-300">{sector.pain}</p>
                </div>

                <div className="mb-4 rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-400">
                    Infraestructura AYCweb
                  </p>
                  <p className="text-sm leading-relaxed text-slate-300">
                    {sector.solution}
                  </p>
                </div>

                <Link
                  href={sector.href}
                  className="inline-flex items-center gap-2 text-lg font-bold text-blue-400 transition hover:text-blue-300"
                >
                  {sector.cta} →
                </Link>
              </div>

              <div className="flex min-h-[260px] items-center justify-center rounded-3xl border border-white/[0.05] bg-[#070810] p-8 text-center">
                <p className="text-xl font-bold leading-relaxed text-slate-300 md:text-2xl">
                  {sector.result}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 border-t border-white/[0.06] px-6 py-24 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-3xl font-black text-white md:text-5xl">
            ¿Tu sector no aparece?
          </h2>
          <p className="mb-10 text-lg text-slate-400">
            Si tenés un cuello de botella manual repetitivo, podemos auditar tu
            operación y decirte qué conviene automatizar primero.
          </p>
          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-xl bg-blue-600 px-8 py-4 font-black text-white shadow-[0_0_30px_rgba(37,99,235,0.35)] transition hover:bg-blue-500"
          >
            Agendar diagnóstico operativo
          </a>
        </div>
      </section>
    </div>
  );
}
