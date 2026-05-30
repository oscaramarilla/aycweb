import type { Metadata } from "next";
import Link from "next/link";
import { buildWaLink } from "@/lib/config/contact";
import { CheckoutForm } from "@/components/checkout/CheckoutForm";
import { PLANES_PRECIOS, TEXTO_FINANCIAMIENTO } from "@/lib/config/precios";
import PricingCard from "@/components/pricing/PricingCard";

const START = PLANES_PRECIOS.starter;

// Planes disponibles para el checkout directo de profesionales
const PLANES_PROF = [
  { nombre: `AYCweb Start - Activación (USD ${START.setupTotal})`, precio: `$${START.setupTotal}` },
];

export const metadata: Metadata = {
  title: "Sistema Automático de Agenda para Profesionales | AYCweb Paraguay",
  description:
    `Dejá de gestionar tu agenda por WhatsApp. Configuramos tu sistema de captación automática, filtro de consultas y enlace de agenda por USD ${START.setupTotal} único. Mantenimiento por USD ${START.mantenimientoMensual}/mes pagadero el 15 de cada mes.`,
  keywords: [
    "agenda online automática profesionales paraguay",
    "sistema captación digital profesionales",
    "filtro consultas whatsapp profesionales",
    "agenda calendly profesional paraguay",
    "AYCweb profesionales",
  ],
  alternates: {
    canonical: "https://www.aycweb.com/es/profesionales",
    languages: {
      "es": "https://www.aycweb.com/es/profesionales",
      "en": "https://www.aycweb.com/en/profesionales",
      "pt-BR": "https://www.aycweb.com/pt-br/profesionales",
      "x-default": "https://www.aycweb.com/es/profesionales",
    },
  },
  openGraph: {
    title: "Sistema Automático de Agenda para Profesionales | AYCweb Paraguay",
    description:
      `Tu agenda no necesita más mensajes sueltos en WhatsApp. Necesita un sistema automático. Setup por USD ${START.setupTotal} + mantenimiento USD ${START.mantenimientoMensual}/mes (el 15 de cada mes).`,
    url: "https://www.aycweb.com/es/profesionales",
    siteName: "AYCweb",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sistema Automático de Agenda - AYCweb Paraguay",
      },
    ],
    locale: "es_PY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sistema Automático de Agenda para Profesionales | AYCweb Paraguay",
    description:
      `Tu agenda no necesita más mensajes sueltos en WhatsApp. Necesita un sistema automático. USD ${START.setupTotal} setup + USD ${START.mantenimientoMensual}/mes (el 15 de cada mes).`,
    images: ["/og-image.jpg"],
  },
};

const PROBLEMAS = [
  {
    icon: "📱",
    titulo: "Mensajes sueltos en WhatsApp",
    desc: "Confirmás turnos uno por uno. Cada vez que alguien pregunta precio, horario o disponibilidad, sos vos el que responde manualmente.",
  },
  {
    icon: "🔄",
    titulo: "Ida y vuelta infinita",
    desc: "Tres mensajes para agendar, dos para confirmar, uno para reagendar. Tu tiempo de atención se va en administración, no en tu trabajo real.",
  },
  {
    icon: "😤",
    titulo: "Consultas que no califican",
    desc: "Te escriben sin saber precio, sin saber qué ofrecés, sin intención real de contratar. Filtrás consultas en lugar de cerrar clientes.",
  },
] as const;

const INCLUYE_SETUP = [
  "Página de captación con tu oferta clara",
  "Formulario de precalificación de consultas",
  "Enlace de agenda online (Calendly o Google Calendar)",
  "Mensajes automáticos de confirmación y recordatorio",
  "Link directo a WhatsApp ya pre-armado por servicio",
];

const INCLUYE_MANT = [
  "Hosting y uptime de toda la infraestructura",
  "Soporte técnico ante cualquier caída o ajuste",
  "Actualizaciones menores de contenido (precios, horarios)",
  "Monitoreo de rendimiento (PageSpeed, disponibilidad)",
];

const FAQ_SCHEMA = [
  {
    pregunta: "¿Cuánto cuesta el sistema de agenda automática para profesionales?",
    respuesta: `El plan AYCweb Start tiene un setup único de USD ${START.setupTotal}. El mantenimiento mensual es de USD ${START.mantenimientoMensual}/mes, pagadero el día 15 de cada mes.`,
  },
  {
    pregunta: "¿En cuánto tiempo queda configurada la agenda online?",
    respuesta: "En 24 horas hábiles desde el pago. El sistema incluye página de captación, formulario de precalificación y enlace de agenda online.",
  },
  {
    pregunta: "¿Para qué tipo de profesionales funciona este sistema?",
    respuesta: "Médicos, dentistas, psicólogos, abogados, arquitectos, nutricionistas, contadores y cualquier profesional independiente que gestione turnos o consultas por WhatsApp.",
  },
  {
    pregunta: "¿El sistema puede filtrar consultas antes de que lleguen a WhatsApp?",
    respuesta: "Sí. Incluye formulario de precalificación que filtra consultas según criterios definidos: tipo de servicio, disponibilidad horaria y presupuesto del cliente.",
  },
];

export default function ProfesionalesPage({ params }: { params?: { lang?: string } }) {
  const ctaWa = buildWaLink(
    `Hola Oscar, soy profesional independiente y quiero activar ${START.nombre} por $${START.setupTotal}.`
  );

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_SCHEMA.map((item) => ({
      "@type": "Question",
      name: item.pregunta,
      acceptedAnswer: { "@type": "Answer", text: item.respuesta },
    })),
  };

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-50 overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* Ruido de fondo */}
      <div className="fixed inset-0 bg-[url('/noise.svg')] opacity-[0.15] pointer-events-none mix-blend-overlay z-0" />

      {/* ── HERO ── */}
      <section className="relative z-10 px-6 pt-28 md:pt-40 pb-16 md:pb-24 border-b border-white/[0.05]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-emerald-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/20 text-emerald-300 text-[11px] font-bold uppercase tracking-[0.2em] mb-6">
            <span className="text-base">🧑‍⚕️</span>
            Línea Profesionales
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.05] tracking-tighter text-white mb-6">
            Tu agenda no necesita <br className="hidden sm:block" />
            más mensajes sueltos en WhatsApp.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              Necesita un sistema automático.
            </span>
          </h1>

          <p className="text-base md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10">
            Configuramos tu captación, filtro de consultas y enlace de agenda para que tus clientes se agenden solos — sin que vos tengas que estar pendiente del celular.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <a
              href={ctaWa}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-emerald-600 hover:bg-emerald-500 text-white font-black py-4 px-12 rounded-xl transition-all shadow-[0_0_30px_rgba(16,185,129,0.4)] active:scale-95 text-lg"
            >
              Activar {START.nombre} — ${START.setupTotal}
            </a>
            <CheckoutForm
              planes={PLANES_PROF}
              colorScheme="emerald"
              triggerLabel="⚡ Pagar con USDT"
            />
          </div>
          <p className="text-xs text-slate-600 mt-3">Pagás en USDT y desplegamos en 24 hs.</p>
        </div>
      </section>

      {/* ── PROBLEMAS ── */}
      <section className="relative z-10 px-6 py-16 md:py-24 border-b border-white/[0.05]">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-3">
            Por qué esto no escala
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-white text-center mb-12 tracking-tight">
            El problema no es tu servicio.<br />
            <span className="text-slate-400 font-normal">Es cómo lo gestionás.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PROBLEMAS.map((p) => (
              <div
                key={p.titulo}
                className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 hover:border-slate-600 transition-colors"
              >
                <div className="text-3xl mb-4">{p.icon}</div>
                <h3 className="font-bold text-white text-base mb-2">{p.titulo}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OFERTA ÚNICA ── */}
      <section id="oferta" className="relative z-10 px-6 py-16 md:py-28">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-emerald-700/[0.07] rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto">
          <p className="text-center text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-400 mb-3">
            Una sola oferta. Sin sorpresas.
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-white text-center mb-4 tracking-tight">
            AYCweb Start para Profesionales
          </h2>
          <p className="text-slate-400 text-center text-base mb-12 max-w-xl mx-auto">
            Plan de entrada para profesionales independientes. No reemplaza un sistema empresarial completo; ordena tu captación, agenda y WhatsApp para empezar rápido.
          </p>

          {/* PricingCard con nueva jerarquía visual: domina el costo mensual */}
          <div className="mb-10 max-w-md mx-auto">
            <PricingCard
              planId="starter"
              accent="emerald"
              ctaHref={ctaWa}
              ctaLabel={`Activar ${START.nombre} — $${START.setupTotal}`}
              tagline="Dejamos todo configurado y funcionando para que empieces a recibir agendamientos desde el día uno."
            />
          </div>

          {/* Features de Setup y Mantenimiento en grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="bg-slate-900/60 border border-emerald-500/20 rounded-2xl p-6">
              <span className="inline-block text-[10px] font-black uppercase tracking-[0.18em] text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-3 py-1 rounded-full mb-4">
                Incluye Setup
              </span>
              <ul className="space-y-2.5">
                {INCLUYE_SETUP.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <span className="text-emerald-400 mt-0.5 flex-shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-900/60 border border-slate-700/50 rounded-2xl p-6">
              <span className="inline-block text-[10px] font-black uppercase tracking-[0.18em] text-slate-400 bg-slate-800/60 border border-slate-700 px-3 py-1 rounded-full mb-4">
                Incluye Mantenimiento
              </span>
              <ul className="space-y-2.5">
                {INCLUYE_MANT.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <span className="text-cyan-400 mt-0.5 flex-shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA principal */}
          <div className="text-center">
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-4">
              <a
                href={ctaWa}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-emerald-600 hover:bg-emerald-500 text-white font-black py-4 px-14 rounded-xl transition-all shadow-[0_0_40px_rgba(16,185,129,0.35)] active:scale-95 text-lg"
              >
                Activar {START.nombre} — ${START.setupTotal}
              </a>
              <CheckoutForm
                planes={PLANES_PROF}
                colorScheme="emerald"
                triggerLabel="⚡ Pagar con USDT"
              />
            </div>
            <div className="flex justify-center mb-4">
              <Link
                href={`/${params?.lang || 'es'}/onboarding`}
                className="inline-flex items-center justify-center px-8 py-3 text-sm font-black text-slate-900 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full shadow-[0_0_25px_rgba(16,185,129,0.4)] hover:shadow-[0_0_40px_rgba(16,185,129,0.7)] hover:-translate-y-1 transition-all duration-300"
              >
                ⚡ Iniciar onboarding con 20%
              </Link>
            </div>
            <p className="text-slate-500 text-xs">
              Te contactamos dentro de las 24 hs hábiles para coordinar el setup.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}