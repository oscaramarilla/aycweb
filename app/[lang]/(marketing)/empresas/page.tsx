import type { Metadata } from "next";
import Link from "next/link";
import { FranjaClientes } from "@/components/social/FranjaClientes";
import { buildWaLink } from "@/lib/config/contact";
import { CheckoutForm } from "@/components/checkout/CheckoutForm";
import { PLANES_PRECIOS, type PlanPrecio } from "@/lib/config/precios";

export const metadata: Metadata = {
  title: "Sistemas Operativos B2B para Empresas | AYCweb Paraguay",
  description:
    "Infraestructura digital B2B para empresas en Paraguay: cotizadores dinámicos, generación automática de PDFs y motores operativos para manufactureras, clínicas, agroindustria y distribuidoras. Dejá de cotizar a mano.",
  keywords: [
    "sistemas B2B empresas paraguay",
    "cotizador dinámico empresas paraguay",
    "infraestructura digital B2B paraguay",
    "automatización operativa empresas",
    "generación PDF automática paraguay",
    "software empresarial paraguay",
    "motor operativo B2B",
    "AYCweb empresas",
  ],
  alternates: {
    canonical: "https://aycweb.com/es/empresas",
  },
  openGraph: {
    title: "Sistemas Operativos B2B para Empresas | AYCweb Paraguay",
    description:
      "Cotizadores dinámicos, generación de PDFs y motores operativos para manufactureras, clínicas, agroindustria y distribuidoras en Paraguay. Tu operación ya no cabe en Excel.",
    url: "https://aycweb.com/es/empresas",
    siteName: "AYCweb",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sistemas B2B para Empresas - AYCweb Paraguay",
      },
    ],
    locale: "es_PY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sistemas Operativos B2B para Empresas | AYCweb Paraguay",
    description:
      "Cotizadores dinámicos, PDFs automáticos y motores operativos para empresas en Paraguay. Dejá de cotizar a mano.",
    images: ["/og-image.jpg"],
  },
};

const { business: BIZ, enterprise: ENT } = PLANES_PRECIOS;

const PLANES = [
  {
    nombre: BIZ.nombre,
    precio: `$${BIZ.setupTotal}`,
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
    cta: "Quiero AYCweb Business",
    badge: null,
  },
  {
    nombre: ENT.nombre,
    precio: `$${ENT.setupTotal}`,
    entrega: "Entrega en 4-6 semanas",
    tagline:
      "Infraestructura completa con automatización real para empresas con volumen comercial.",
    features: [
      "Todo lo del Business",
      "Cotizador dinámico interactivo",
      "Generación de PDFs y contratos automáticos",
      "Panel interno para vendedores",
      "Métricas básicas de conversión",
      "Integración WhatsApp avanzada",
    ],
    ideal: "Empresas con procesos comerciales complejos y datos en escala.",
    cta: "Quiero AYCweb Enterprise",
    badge: "MÁS ELEGIDO",
  },
  {
    nombre: "Arquitectura a Medida",
    precio: "Cotización",
    entrega: "Cronograma tras diagnóstico",
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
    cta: "Solicitar Diagnóstico B2B",
    badge: null,
  },
] as const;

const PLANES_ONBOARDING = [
  { nombre: `AYCweb Start - Activación`, precio: `$${PLANES_PRECIOS.starter.setupTotal}` },
  { nombre: `AYCweb Business - Anticipo 20% ($${BIZ.hitos.anticipo})`, precio: `$${BIZ.hitos.anticipo}` },
  { nombre: `AYCweb Enterprise - Anticipo 20% ($${ENT.hitos.anticipo})`, precio: `$${ENT.hitos.anticipo}` },
  { nombre: `AYCweb Business - Liquidación Única 100% ($${BIZ.setupTotal})`, precio: `$${BIZ.setupTotal}` },
  { nombre: `AYCweb Enterprise - Liquidación Única 100% ($${ENT.setupTotal})`, precio: `$${ENT.setupTotal}` },
];

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
  { antes: "Errores de cálculo en planillas Excel", despues: "Eliminación de errores de cálculo manual mediante cotizaciones parametrizadas." },
  { antes: "Vendedores respondiendo WhatsApps repetidos", despues: "Sistema que filtra antes de hablar" },
  { antes: "PDFs hechos a mano en Word", despues: "Documentos generados al instante" },
] as const;

export default function ProductosPage({ params }: { params?: { lang?: string } }) {
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

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center flex-wrap">
            <Link
              href={`/${params?.lang || 'es'}/diagnostico-comercial`}
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-black py-4 px-10 rounded-xl transition-all shadow-[0_0_30px_rgba(37,99,235,0.4)] active:scale-95"
            >
              Solicitar Diagnóstico B2B
            </Link>
            <Link
              href={`/${params?.lang || 'es'}/demo-cotizador`}
              className="w-full sm:w-auto bg-emerald-950/40 border border-emerald-500/30 hover:border-emerald-400/60 hover:bg-emerald-950/60 text-emerald-300 font-black py-4 px-10 rounded-xl transition-all flex items-center justify-center gap-2"
            >
              <span>⚡</span>
              Probar Cotizador en Vivo
            </Link>
            <Link
              href="#planes"
              className="w-full sm:w-auto bg-slate-900 border border-slate-700 hover:border-slate-500 text-slate-200 font-bold py-4 px-10 rounded-xl transition-all"
            >
              Ver planes
            </Link>
          </div>

        </div>
      </section>

      {/* PRUEBA SOCIAL: Franja de clientes destacados */}
      <FranjaClientes palette="blue" />

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
                    href={buildWaLink(
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

          {/* Modelo de implementación por etapas */}
          <div className="mt-10 max-w-3xl mx-auto rounded-2xl border border-blue-500/20 bg-blue-950/10 p-6">
            <p className="text-[11px] font-black uppercase tracking-widest text-blue-400 mb-1">Modelo de implementación por etapas</p>
            <p className="text-[12px] text-slate-500 mb-5">Así distribuimos el compromiso económico a lo largo del proyecto.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {[
                {
                  num: "01",
                  pct: "20%",
                  desc: "Para iniciar onboarding: USD 180 en AYCweb Business o USD 360 en AYCweb Enterprise.",
                },
                {
                  num: "02",
                  pct: "30%",
                  desc: "Contra primer avance funcional: USD 270 en Business o USD 540 en Enterprise.",
                },
                {
                  num: "03",
                  pct: "20%",
                  desc: "Luego del sprint de ajustes: USD 180 en Business o USD 360 en Enterprise.",
                },
                {
                  num: "04",
                  pct: "30%",
                  desc: "Contra entrega final: USD 270 en Business o USD 540 en Enterprise.",
                },
              ].map((e) => (
                <div key={e.num} className="flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-950/50 p-3">
                  <span className="text-blue-400 font-black text-xs mt-0.5 w-4 flex-shrink-0">{e.num}</span>
                  <p className="text-[12px] text-slate-300 leading-snug"><strong className="text-white">{e.pct}</strong> {e.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-[12px] text-slate-400 mt-4 text-center">
              El mantenimiento mensual se abona los días <strong>15 de cada mes</strong> tras la puesta en producción.
            </p>
            <div className="rounded-2xl border border-slate-700 bg-slate-800/50 p-4 text-slate-300 mt-6">
              <p className="text-sm leading-relaxed">
                <span className="text-blue-300 font-bold">⚡ Fast-Track Administrativo (Opcional):</span> Si tu departamento contable prefiere evitar la fricción de aprobaciones múltiples, puedes liquidar el 100% del setup en un solo movimiento al inicio del proyecto. Misma garantía de etapas, cero burocracia.
              </p>
            </div>
            <div className="text-center">
              <CheckoutForm
                planes={PLANES_ONBOARDING}
                colorScheme="blue"
                triggerLabel="⚡ Iniciar con 20% — Onboarding y Diagnóstico"
              />
              <p className="text-[11px] text-slate-600 mt-2">Primer paso del proyecto: diagnóstico operativo sin compromiso de continuar.</p>
            </div>
          </div>

          {/* Mantenimiento */}
          <div className="mt-10 max-w-3xl mx-auto rounded-2xl border border-slate-800 bg-slate-900/40 p-6 text-center">
            <div className="text-[11px] uppercase tracking-widest text-slate-500 font-bold mb-2">
              Mantenimiento mensual
            </div>
            <div className="text-xl font-black text-white mb-2">Desde USD 30/mes</div>
            <p className="text-sm text-slate-400 mb-3">
              USD 30/mes para AYCweb Business y USD 45/mes para AYCweb Enterprise.
            </p>
            <p className="text-xs text-slate-500">
              Se abona el día <strong>15 de cada mes</strong> tras la puesta en producción.
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
              Garantía Inteligente por Etapas
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-base md:text-lg">
              Garantía Inteligente por Etapas: Si durante la primera etapa de definición no logramos validar que el sistema resolverá el problema operativo acordado, cancelamos el proyecto y te devolvemos el pago inicial según las condiciones pactadas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-center">
              <div className="font-black text-white mb-2">Pagás cuando aceptás</div>
              <p className="text-[13px] text-slate-400 leading-relaxed">
                No antes. Primero diagnóstico, después propuesta. Si la aceptás, arrancamos.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-center">
              <div className="font-black text-white mb-2">Garantía Inteligente</div>
              <p className="text-[13px] text-slate-400 leading-relaxed">
                Si en la primera etapa el sistema no resuelve el problema operativo acordado, cancelamos el proyecto y devolvemos el pago inicial según lo pactado.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-center">
              <div className="font-black text-white mb-2">Sin letra chica</div>
              <p className="text-[13px] text-slate-400 leading-relaxed">
                Cero costos ocultos. Sin ambigüedad.
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
            ¿Listo para solicitar tu diagnóstico?
          </h2>
          <p className="text-slate-400 text-base md:text-lg mb-10 leading-relaxed">
            En 15 minutos evaluamos si tu operación califica para nuestro despliegue B2B. Si no, también te lo decimos. Sin vueltas.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center flex-wrap">
            <Link
              href={`/${params?.lang || 'es'}/diagnostico-comercial`}
              className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-black py-4 px-12 rounded-xl transition-all shadow-[0_0_40px_rgba(37,99,235,0.4)] active:scale-95"
            >
              Solicitar Diagnóstico B2B
            </Link>
          </div>
          <div className="mt-4 flex justify-center">
            <Link
              href={`/${params?.lang || 'es'}/onboarding`}
              className="inline-flex items-center justify-center px-8 py-3 text-sm font-black text-slate-900 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full shadow-[0_0_25px_rgba(16,185,129,0.4)] hover:shadow-[0_0_40px_rgba(16,185,129,0.7)] hover:-translate-y-1 transition-all duration-300"
            >
              ⚡ Iniciar onboarding con 20%
            </Link>
          </div>
          <p className="mt-3 text-xs text-slate-500">Sin costo. Sin compromiso.</p>
        </div>
      </section>
    </div>
  );
}