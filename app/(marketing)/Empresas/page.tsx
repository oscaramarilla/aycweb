import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Para Empresas | Infraestructura Digital B2B | AYCweb",
  description:
    "Cotizadores dinámicos, generación de PDFs y motores operativos para manufactureras, clínicas, agroindustria y distribuidoras en Paraguay.",
};

const WHATSAPP = "595985864209";
const waLink = (msg: string) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;

const PLANES = [
  {
    nombre: "Starter Empresa",
    precio: "$900",
    entrega: "Entrega en 3 semanas",
    tagline:
      "Base sólida para empezar a sistematizar captación, presentación y primer flujo comercial.",
    features: [
      "Sitio multi-página adaptado a B2B",
      "Embudo con formularios condicionales",
      "Base de contactos preparada para CRM",
      "Copy B2B orientado a conversión",
      "SEO técnico y PageSpeed 95+",
      "Rutas WhatsApp por sección",
    ],
    ideal: "Empresas que recién están saliendo de Excel y WhatsApp manual.",
    cta: "Quiero el Starter",
    badge: null,
  },
  {
    nombre: "Sistema Empresa",
    precio: "$1.800",
    entrega: "Entrega en 4-6 semanas",
    tagline:
      "Infraestructura completa con automatización real para empresas con volumen comercial.",
    features: [
      "Todo lo del Starter",
      "Cotizador dinámico interactivo",
      "Generación de PDFs y contratos automáticos",
      "Panel interno para vendedores",
      "Métricas básicas de conversión",
      "Integración WhatsApp avanzada",
    ],
    ideal: "Empresas con procesos comerciales complejos y datos en escala.",
    cta: "Quiero el Sistema",
    badge: "MÁS ELEGIDO",
  },
  {
    nombre: "Arquitectura a Medida",
    precio: "Cotización",
    entrega: "Cronograma tras auditoría",
    tagline:
      "Para operaciones con lógica propia, integraciones ERP o cuellos de botella complejos.",
    features: [
      "Portales seguros con login",
      "Conexión con ERPs y APIs",
      "Dashboards en tiempo real",
      "Automatización de procesos complejos",
      "SLA dedicado",
      "Soporte prioritario",
    ],
    ideal: "Casos que requieren software a medida.",
    cta: "Auditoría Técnica",
    badge: null,
  },
] as const;

const SECTORES = [
  { icon: "🏭", nombre: "Manufactureras", desc: "Cotizadores con cálculo de materia prima y márgenes" },
  { icon: "🏥", nombre: "Clínicas y Hospitales", desc: "Agendas, presupuestos médicos y derivaciones" },
  { icon: "🌾", nombre: "Agroindustria", desc: "Cotización por hectárea, lote y temporada" },
  { icon: "📦", nombre: "Distribuidoras", desc: "Catálogos B2B con precios diferenciados por cliente" },
  { icon: "⚙️", nombre: "Metalúrgicas", desc: "Presupuestos por proyecto, planos y materiales" },
  { icon: "🚛", nombre: "Logística", desc: "Cálculo de fletes, rutas y costos operativos" },
] as const;

const DOLORES = [
  { antes: "45 minutos cotizando un pedido grande", despues: "Cotización en 30 segundos" },
  { antes: "Errores de cálculo en planillas Excel", despues: "Precisión del 100% automática" },
  { antes: "Vendedores respondiendo WhatsApps repetidos", despues: "Sistema que filtra antes de hablar" },
  { antes: "PDFs hechos a mano en Word", despues: "Documentos generados al instante" },
] as const;

export default function ProductosPage() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-50 overflow-hidden">
      <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] pointer-events-none mix-blend-overlay z-0" />

      {/* HERO */}
      <section className="relative z-10 px-6 pt-28 md:pt-40 pb-16 md:pb-24 border-b border-white/[0.05]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/40 border border-blue-500/20 text-blue-300 text-[11px] font-bold uppercase tracking-[0.2em] mb-6">
            <span className="text-base">🏭</span>
            Línea Empresas
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-[1.02] tracking-tighter text-white mb-6">
            Tu operación ya no <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              cabe en Excel.
            </span>
          </h1>

          <p className="text-base md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-10">
            Cotizadores dinámicos, generación de PDFs y motores operativos para empresas que ya facturan en serio y necesitan dejar de cotizar a mano.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <a
              href={waLink(
                "Hola Oscar, soy de una empresa y quiero agendar un diagnóstico operativo gratuito."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-black py-4 px-10 rounded-xl transition-all shadow-[0_0_30px_rgba(37,99,235,0.4)] active:scale-95"
            >
              Diagnóstico gratuito
            </a>
            <Link
              href="#planes"
              className="w-full sm:w-auto bg-slate-900 border border-slate-700 hover:border-slate-500 text-slate-200 font-bold py-4 px-10 rounded-xl transition-all"
            >
              Ver planes
            </Link>
          </div>
        </div>
      </section>

      {/* DOLORES → ALIVIO */}
      <section className="relative z-10 px-6 py-20 md:py-28">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
              Lo que ya no vas a hacer manual
            </h2>
            <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto">
              Si estos dolores te suenan, estás listo para una infraestructura real.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {DOLORES.map((d, i) => (
              <div
                key={i}
                className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 hover:border-slate-700 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3 text-slate-500">
                  <span className="text-xs uppercase tracking-widest font-bold">Antes</span>
                  <div className="flex-1 h-px bg-slate-800" />
                </div>
                <p className="text-slate-400 line-through decoration-red-500/40 mb-4">{d.antes}</p>
                <div className="flex items-center gap-3 mb-3 text-blue-400">
                  <span className="text-xs uppercase tracking-widest font-bold">Después</span>
                  <div className="flex-1 h-px bg-blue-500/20" />
                </div>
                <p className="text-white font-bold">{d.despues}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLANES */}
      <section
        id="planes"
        className="relative z-10 px-6 py-20 md:py-28 bg-[#04050a] border-y border-white/[0.05] scroll-mt-20"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-400/10 text-blue-300 text-[11px] font-bold uppercase tracking-[0.2em] mb-4">
              Arquitectura de Inversión
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
              Tres niveles. Cero ambigüedad.
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-base md:text-lg">
              Pagás una vez por el setup. Después solo mantenimiento mensual para que el motor no se detenga.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {PLANES.map((plan) => {
              const isFeatured = plan.badge !== null;
              return (
                <article
                  key={plan.nombre}
                  className={`relative rounded-[1.5rem] p-7 flex flex-col transition-all duration-300 ${
                    isFeatured
                      ? "border-2 border-blue-500/40 bg-blue-950/20 shadow-[0_0_50px_rgba(37,99,235,0.15)]"
                      : "border border-white/[0.06] bg-[#0a0c14] hover:border-white/[0.12]"
                  }`}
                >
                  {plan.badge && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-blue-500 px-4 py-1 text-[10px] uppercase tracking-[0.2em] text-white font-black shadow-lg whitespace-nowrap">
                      {plan.badge}
                    </span>
                  )}

                  <h3 className="text-xl font-black text-white mb-2">{plan.nombre}</h3>
                  <p className="text-[13px] text-slate-500 mb-5">{plan.entrega}</p>

                  <div className="mb-6">
                    <div className="text-[11px] text-slate-500 uppercase tracking-widest font-bold mb-1">
                      Setup único
                    </div>
                    <div className="flex items-baseline gap-2">
                      {plan.precio !== "Cotización" && (
                        <span className="text-base text-slate-500 font-normal">USD</span>
                      )}
                      <span className="text-4xl font-black text-white tracking-tight">
                        {plan.precio}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-slate-400 leading-relaxed mb-6 min-h-[3rem]">
                    {plan.tagline}
                  </p>

                  <ul className="space-y-3 mb-6 flex-1">
                    {plan.features.map((f) => (
                      <li
                        key={f}
                        className="text-[13px] text-slate-300 flex items-start gap-2.5 leading-relaxed"
                      >
                        <span className="text-blue-400 font-black mt-[2px]">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="rounded-xl border border-white/[0.04] bg-slate-950/50 p-3 mb-5 text-[12px] text-slate-400">
                    <span className="font-bold text-white">Ideal para: </span>
                    {plan.ideal}
                  </div>

                  <a
                    href={waLink(
                      `Hola Oscar, me interesa el plan ${plan.nombre} (${plan.precio}) para mi empresa.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full text-center py-3.5 rounded-xl font-black text-[14px] transition-all ${
                      isFeatured
                        ? "bg-blue-500 text-white hover:bg-blue-400 shadow-[0_0_30px_rgba(37,99,235,0.4)]"
                        : "bg-transparent text-blue-300 border border-blue-300/30 hover:border-blue-300/60 hover:bg-blue-300/5"
                    }`}
                  >
                    {plan.cta}
                  </a>
                </article>
              );
            })}
          </div>

          {/* Mantenimiento */}
          <div className="mt-10 max-w-3xl mx-auto rounded-2xl border border-slate-800 bg-slate-900/40 p-6 text-center">
            <div className="text-[11px] uppercase tracking-widest text-slate-500 font-bold mb-2">
              Mantenimiento mensual
            </div>
            <div className="text-2xl font-black text-white mb-2">$80 USD/mes</div>
            <p className="text-sm text-slate-400">
              Hosting enterprise, dominio corporativo, copias de seguridad y soporte técnico continuo. Tu motor nunca se detiene.
            </p>
          </div>
        </div>
      </section>

      {/* SECTORES */}
      <section className="relative z-10 px-6 py-20 md:py-28">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
              Industrias donde ya operamos
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-base md:text-lg">
              Cada sector tiene su propia lógica de cotización. La conocemos.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {SECTORES.map((s) => (
              <div
                key={s.nombre}
                className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 hover:border-blue-500/30 hover:bg-slate-900/70 transition-all"
              >
                <div className="text-3xl mb-3">{s.icon}</div>
                <div className="font-black text-white mb-1.5">{s.nombre}</div>
                <p className="text-[13px] text-slate-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GARANTÍA */}
      <section className="relative z-10 px-6 py-20 md:py-28 bg-[#04050a] border-y border-white/[0.05]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="text-5xl mb-4">🛡️</div>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
              Garantía Inquebrantable
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-base md:text-lg">
              No aceptamos a todos los clientes. Por eso podemos garantizar resultado.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-center">
              <div className="font-black text-white mb-2">Pagás primero</div>
              <p className="text-[13px] text-slate-400 leading-relaxed">
                Filtramos curiosos. Compromiso mutuo desde el día uno.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-center">
              <div className="font-black text-white mb-2">30 días, 100%</div>
              <p className="text-[13px] text-slate-400 leading-relaxed">
                Si no funciona, devolución total. Sin discusión.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-center">
              <div className="font-black text-white mb-2">Sin letra chica</div>
              <p className="text-[13px] text-slate-400 leading-relaxed">
                Cero costos ocultos. Cero excusas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative z-10 px-6 py-20 md:py-28 text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">
            ¿Listo para auditar tu operación?
          </h2>
          <p className="text-slate-400 text-base md:text-lg mb-10 leading-relaxed">
            En 15 minutos te decimos si podemos generarte un ROI claro. Si no, también te lo decimos. Sin vueltas.
          </p>

          <a
            href={waLink(
              "Hola Oscar, vengo de la página de Empresas y quiero agendar el diagnóstico operativo gratuito."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-black py-4 px-12 rounded-xl transition-all shadow-[0_0_40px_rgba(37,99,235,0.4)] active:scale-95"
          >
            Agendar diagnóstico
          </a>
          <p className="mt-4 text-xs text-slate-500">Sin costo. Sin compromiso.</p>
        </div>
      </section>
    </div>
  );
}

