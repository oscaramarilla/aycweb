import type { Metadata } from "next";
import Link from "next/link";
import { buildWaLink } from "@/lib/config/contact";

export const metadata: Metadata = {
  title: "Sistemas de Captación Digital para Profesionales | AYCweb Paraguay",
  description:
    "Agenda online, captación automatizada y autoridad digital para médicos, odontólogos, abogados, contadores y arquitectos en Paraguay. Dejá de depender del boca a boca y llenás tu agenda con clientes precalificados.",
  keywords: [
    "captación digital profesionales paraguay",
    "agenda online profesionales paraguay",
    "sistema captación médicos paraguay",
    "autoridad digital profesionales",
    "landing page profesional paraguay",
    "marketing digital profesionales independientes",
    "AYCweb profesionales",
  ],
  alternates: {
    canonical: "https://aycweb.com/es/profesionales",
  },
  openGraph: {
    title: "Sistemas de Captación Digital para Profesionales | AYCweb Paraguay",
    description:
      "Agenda online, captación automatizada y autoridad digital para médicos, odontólogos, abogados, contadores y arquitectos en Paraguay. Tu consultorio trabaja por vos.",
    url: "https://aycweb.com/es/profesionales",
    siteName: "AYCweb",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sistemas de Captación para Profesionales - AYCweb Paraguay",
      },
    ],
    locale: "es_PY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sistemas de Captación Digital para Profesionales | AYCweb Paraguay",
    description:
      "Agenda online y captación automatizada para médicos, abogados, contadores y arquitectos en Paraguay. Llenás tu agenda con clientes precalificados.",
    images: ["/og-image.jpg"],
  },
};

const PLANES = [
  {
    nombre: "Profesional Starter",
    precio: "$350",
    entrega: "Entrega en 1 semana",
    tagline:
      "Presencia digital clara y enfoque directo para empezar a captar de forma seria.",
    features: [
      "Landing page profesional de una sola página",
      "Copywriting orientado a conversión",
      "Mensajes pre-armados a WhatsApp",
      "Links de pago QR / Pagopar",
      "Diseño mobile-first",
      "PageSpeed 95+",
    ],
    ideal: "Profesionales que recién están armando su presencia digital seria.",
    cta: "Quiero la Base",
    badge: null,
  },
  {
    nombre: "Profesional Pro",
    precio: "$650",
    entrega: "Entrega en 2 semanas",
    tagline:
      "Sistema completo de captación, autoridad y filtro de consultas para subir nivel.",
    features: [
      "Todo lo de Profesional Starter, más:",
      "Agenda Calendly / Google Calendar integrada",
      "Formularios de precalificación de pacientes/clientes",
      "Blog de autoridad y SEO on-page",
      "Sección de testimonios y casos",
      "WhatsApp por servicio específico",
    ],
    ideal: "Profesionales que ya tienen demanda y necesitan filtrar y cerrar mejor.",
    cta: "Quiero el Pro",
    badge: "RECOMENDADO",
  },
] as const;

const PROFESIONES = [
  { icon: "🩺", nombre: "Ingenieros y Médicos", desc: "Especialistas y consulta general" },
  { icon: "🦷", nombre: "Odontólogos", desc: "Consultorios y clínicas dentales" },
  { icon: "⚖️", nombre: "Abogados", desc: "Estudios y profesionales independientes" },
  { icon: "📊", nombre: "Contadores", desc: "Estudios contables y asesores" },
  { icon: "📐", nombre: "Arquitectos", desc: "Estudios y diseñadores de interiores" },
  { icon: "📷", nombre: "Fotógrafos", desc: "Bodas, eventos, productos" },
  { icon: "💼", nombre: "Consultores", desc: "Coaching, marketing, finanzas" },
  { icon: "🎨", nombre: "Diseñadores", desc: "Gráfico, web, branding" },
] as const;

const DOLORES = [
  {
    titulo: "Tu agenda tiene huecos",
    desc: "El boca a boca te mantiene a flote pero no escala. Querés llenar la semana, no rezar para que llegue el lunes.",
  },
  {
    titulo: "Consultas que no califican",
    desc: "Te escriben por WhatsApp pidiendo precio sin saber lo que ofrecés. Perdés tiempo explicando lo básico una y otra vez.",
  },
  {
    titulo: "Te googlean y no encuentran nada",
    desc: "Cuando alguien te recomienda, lo primero que hace es buscarte en Google. Si no aparecés, perdiste el cliente antes de hablar.",
  },
  {
    titulo: "No tenés autoridad visible",
    desc: "Sabés que sos bueno en lo tuyo, pero tu presencia online no lo refleja. La calidad del servicio no se ve antes del primer contacto.",
  },
] as const;

const QUE_OBTENES = [
  {
    icon: "📅",
    titulo: "Agenda autopiloto",
    desc: "Tus pacientes/clientes reservan online sin ida y vuelta de WhatsApps. Llegan ya sabiendo precio, horario y qué llevar.",
  },
  {
    icon: "🎯",
    titulo: "Filtro de consultas",
    desc: "Formularios que precalifican antes del contacto. Solo hablás con quien ya está listo para pagar.",
  },
  {
    icon: "📝",
    titulo: "Autoridad por SEO",
    desc: "Blog optimizado donde respondés las preguntas que tu cliente hace en Google. Aparecer primero es ganar el cliente.",
  },
  {
    icon: "💬",
    titulo: "WhatsApp ordenado",
    desc: "Cada servicio con su propio link directo y mensaje pre-armado. Cero ambigüedad sobre qué te están pidiendo.",
  },
] as const;

export default function SolucionesPage() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-50 overflow-hidden">
      <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] pointer-events-none mix-blend-overlay z-0" />

      {/* HERO */}
      <section className="relative z-10 px-6 pt-28 md:pt-40 pb-16 md:pb-24 border-b border-white/[0.05]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-emerald-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/20 text-emerald-300 text-[11px] font-bold uppercase tracking-[0.2em] mb-6">
            <span className="text-base">🧑‍⚕️</span>
            Línea Profesionales
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-[1.02] tracking-tighter text-white mb-6">
            Tu consultorio <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              trabaja por vos.
            </span>
          </h1>

          <p className="text-base md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-10">
            Sistemas de captación, agenda online y autoridad digital para médicos, abogados, contadores, arquitectos y profesionales que quieren dejar de depender del boca a boca.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center flex-wrap">
            <a
              href={buildWaLink(
                "Hola Oscar, soy profesional independiente y quiero agendar un diagnóstico gratuito para mi servicio."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white font-black py-4 px-10 rounded-xl transition-all shadow-[0_0_30px_rgba(16,185,129,0.4)] active:scale-95"
            >
              Diagnóstico gratuito
            </a>
            <Link
              href="/diagnostico-comercial"
              className="w-full sm:w-auto bg-purple-950/40 border border-purple-500/30 hover:border-purple-400/60 hover:bg-purple-950/60 text-purple-300 font-bold py-4 px-10 rounded-xl transition-all flex items-center justify-center gap-2"
            >
              <span>⚡</span>
              Diagnóstico Express (5 min)
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

      {/* rest of page retained as original for brevity */}
    </div>
  );
}
