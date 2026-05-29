import type { Metadata } from "next";
import Link from "next/link";
import { buildWaLink } from "@/lib/config/contact";
import { CheckoutForm } from "@/components/checkout/CheckoutForm";

// Planes disponibles para el checkout directo de profesionales
const PLANES_PROF = [
  { nombre: "Setup Inicial", precio: "$50" },
  { nombre: "Setup + 1er mes (todo incluido)", precio: "$60" },
];

export const metadata: Metadata = {
  title: "Sistema Automático de Agenda para Profesionales | AYCweb Paraguay",
  description:
    "Dejá de gestionar tu agenda por WhatsApp. Configuramos tu sistema de captación automática, filtro de consultas y enlace de agenda por USD 50 único. Mantenimiento por USD 10/mes.",
  keywords: [
    "agenda online automática profesionales paraguay",
    "sistema captación digital profesionales",
    "filtro consultas whatsapp profesionales",
    "agenda calendly profesional paraguay",
    "AYCweb profesionales",
  ],
  alternates: {
    canonical: "https://aycweb.com/es/profesionales",
  },
  openGraph: {
    title: "Sistema Automático de Agenda para Profesionales | AYCweb Paraguay",
    description:
      "Tu agenda no necesita más mensajes sueltos en WhatsApp. Necesita un sistema automático. Setup por USD 50 + mantenimiento USD 10/mes.",
    url: "https://aycweb.com/es/profesionales",
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
      "Tu agenda no necesita más mensajes sueltos en WhatsApp. Necesita un sistema automático. USD 50 setup + USD 10/mes.",
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

export default function ProfesionalesPage({ params }: { params?: { lang?: string } }) {
  const ctaWa = buildWaLink(
    "Hola Oscar, soy profesional independiente y quiero iniciar mi sistema automático de agenda por USD 50."
  );

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-50 overflow-hidden">
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
              Iniciar mi sistema por $50
            </a>
            <CheckoutForm
              planes={PLANES_PROF}
              colorScheme="emerald"
              triggerLabel="⚡ Pago Directo (Sin auditoría)"
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
            Precio claro desde el primer día
          </h2>
          <p className="text-slate-400 text-center text-base mb-12 max-w-xl mx-auto">
            Sin paquetes confusos, sin add-ons ocultos. Sabés exactamente qué pagás y qué recibís.
          </p>

          {/* Tarjetas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">

            {/* Setup Inicial */}
            <div className="relative bg-slate-900/70 border border-emerald-500/30 rounded-3xl p-8 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 to-transparent pointer-events-none rounded-3xl" />
              <div className="relative z-10">
                <span className="inline-block text-[10px] font-black uppercase tracking-[0.18em] text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-3 py-1 rounded-full mb-4">
                  Pago Único
                </span>

                <div className="flex items-end gap-2 mb-1">
                  <span className="text-5xl font-black text-white">$50</span>
                  <span className="text-slate-400 text-sm mb-2">USD</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Setup Inicial</h3>
                <p className="text-slate-400 text-sm mb-6 border-b border-slate-800 pb-6">
                  Dejamos todo configurado y funcionando para que empieces a recibir agendamientos desde el día uno.
                </p>

                <ul className="space-y-2.5">
                  {INCLUYE_SETUP.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <span className="text-emerald-400 mt-0.5 flex-shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Mantenimiento */}
            <div className="relative bg-slate-900/70 border border-slate-700/50 rounded-3xl p-8 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800/20 to-transparent pointer-events-none rounded-3xl" />
              <div className="relative z-10">
                <span className="inline-block text-[10px] font-black uppercase tracking-[0.18em] text-slate-400 bg-slate-800/60 border border-slate-700 px-3 py-1 rounded-full mb-4">
                  Mensual
                </span>

                <div className="flex items-end gap-2 mb-1">
                  <span className="text-5xl font-black text-white">$10</span>
                  <span className="text-slate-400 text-sm mb-2">USD / mes</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Mantenimiento</h3>
                <p className="text-slate-400 text-sm mb-6 border-b border-slate-800 pb-6">
                  Tu sistema sigue online, actualizado y con soporte técnico disponible mientras seguís operando.
                </p>

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
          </div>

          {/* Resumen de precio total */}
          <div className="bg-emerald-950/30 border border-emerald-500/20 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
            <div>
              <p className="text-emerald-300 font-bold text-sm">Costo total al arrancar</p>
              <p className="text-slate-400 text-xs">Setup único + primer mes de mantenimiento incluido</p>
            </div>
            <div className="flex items-end gap-1">
              <span className="text-3xl font-black text-white">$60</span>
              <span className="text-slate-400 text-sm mb-1">USD total</span>
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
                Iniciar mi sistema por $50
              </a>
              <CheckoutForm
                planes={PLANES_PROF}
                colorScheme="emerald"
                triggerLabel="⚡ Pago Directo (Sin auditoría)"
              />
            </div>
            <div className="flex justify-center mb-4">
              <Link
                href={`/${params?.lang || 'es'}/onboarding`}
                className="inline-flex items-center justify-center px-8 py-3 text-sm font-black text-slate-900 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full shadow-[0_0_25px_rgba(16,185,129,0.4)] hover:shadow-[0_0_40px_rgba(16,185,129,0.7)] hover:-translate-y-1 transition-all duration-300"
              >
                ⚡ Activa con 20% de descuento Cripto
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
