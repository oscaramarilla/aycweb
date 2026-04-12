import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Para Profesionales | Captación y Autoridad Digital | AYCweb",
  description:
    "Sistemas de captación, agenda online y posicionamiento para médicos, dentistas, abogados, contadores, arquitectos y profesionales independientes en Paraguay.",
};

const WHATSAPP = "595985864209";
const waLink = (msg: string) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;

const PLANES = [
  {
    nombre: "Profesional Base",
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
      "Todo lo de Profesional Base",
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
  { icon: "🩺", nombre: "Médicos", desc: "Especialistas y consulta general" },
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

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <a
              href={waLink(
                "Hola Oscar, soy profesional independiente y quiero agendar un diagnóstico gratuito para mi servicio."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white font-black py-4 px-10 rounded-xl transition-all shadow-[0_0_30px_rgba(16,185,129,0.4)] active:scale-95"
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

      {/* DOLORES */}
      <section className="relative z-10 px-6 py-20 md:py-28">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
              ¿Te suena algo de esto?
            </h2>
            <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto">
              Si una de estas frases te define, estás listo para una infraestructura que te respalde.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {DOLORES.map((d, i) => (
              <div
                key={i}
                className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 hover:border-emerald-500/20 transition-colors"
              >
                <h3 className="text-lg font-black text-white mb-2">{d.titulo}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUÉ OBTENÉS */}
      <section className="relative z-10 px-6 py-20 md:py-28 bg-[#04050a] border-y border-white/[0.05]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-400/10 text-emerald-300 text-[11px] font-bold uppercase tracking-[0.2em] mb-4">
              Lo que vas a tener
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
              Cuatro herramientas que cambian tu día
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {QUE_OBTENES.map((q) => (
              <div
                key={q.titulo}
                className="rounded-2xl border border-slate-800 bg-slate-900/40 p-7 hover:border-emerald-500/30 hover:bg-slate-900/70 transition-all"
              >
                <div className="text-4xl mb-4">{q.icon}</div>
                <h3 className="text-xl font-black text-white mb-3">{q.titulo}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{q.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLANES */}
      <section id="planes" className="relative z-10 px-6 py-20 md:py-28 scroll-mt-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-400/10 text-emerald-300 text-[11px] font-bold uppercase tracking-[0.2em] mb-4">
              Inversión Profesional
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
              Dos planes. Cero vueltas.
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-base md:text-lg">
              Pagás una vez. Tu sistema queda funcionando. Después solo mantenimiento.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {PLANES.map((plan) => {
              const isFeatured = plan.badge !== null;
              return (
                <article
                  key={plan.nombre}
                  className={`relative rounded-[1.5rem] p-7 flex flex-col transition-all duration-300 ${
                    isFeatured
                      ? "border-2 border-emerald-500/40 bg-emerald-950/20 shadow-[0_0_50px_rgba(16,185,129,0.15)]"
                      : "border border-white/[0.06] bg-[#0a0c14] hover:border-white/[0.12]"
                  }`}
                >
                  {plan.badge && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-emerald-500 px-4 py-1 text-[10px] uppercase tracking-[0.2em] text-white font-black shadow-lg whitespace-nowrap">
                      {plan.badge}
                    </span>
                  )}

                  <h3 className="text-2xl font-black text-white mb-2">{plan.nombre}</h3>
                  <p className="text-[13px] text-slate-500 mb-5">{plan.entrega}</p>

                  <div className="mb-6">
                    <div className="text-[11px] text-slate-500 uppercase tracking-widest font-bold mb-1">
                      Setup único
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-base text-slate-500 font-normal">USD</span>
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
                        <span className="text-emerald-400 font-black mt-[2px]">✓</span>
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
                      `Hola Oscar, soy profesional y me interesa el plan ${plan.nombre} (${plan.precio}).`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full text-center py-3.5 rounded-xl font-black text-[14px] transition-all ${
                      isFeatured
                        ? "bg-emerald-500 text-slate-950 hover:bg-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.4)]"
                        : "bg-transparent text-emerald-300 border border-emerald-300/30 hover:border-emerald-300/60 hover:bg-emerald-300/5"
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
            <div className="text-2xl font-black text-white mb-2">$25 USD/mes</div>
            <p className="text-sm text-slate-400">
              Hosting, dominio, backups y actualizaciones. Tu sitio siempre online y rápido.
            </p>
          </div>
        </div>
      </section>

      {/* PROFESIONES */}
      <section className="relative z-10 px-6 py-20 md:py-28 bg-[#04050a] border-y border-white/[0.05]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
              Quiénes ya confían en AYCweb
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-base md:text-lg">
              Diseñamos sistemas para distintas profesiones, pero todas comparten una cosa: su trabajo merece verse profesional.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {PROFESIONES.map((p) => (
              <div
                key={p.nombre}
                className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-center hover:border-emerald-500/30 hover:bg-slate-900/70 transition-all"
              >
                <div className="text-3xl mb-3">{p.icon}</div>
                <div className="font-black text-white mb-1.5">{p.nombre}</div>
                <p className="text-[12px] text-slate-400 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GARANTÍA */}
      <section className="relative z-10 px-6 py-20 md:py-28">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="text-5xl mb-4">🛡️</div>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
              Garantía Inquebrantable
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-base md:text-lg">
              No trabajamos con todo el mundo. Por eso podemos garantizar el resultado.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-center">
              <div className="font-black text-white mb-2">Pagás primero</div>
              <p className="text-[13px] text-slate-400 leading-relaxed">
                Compromiso mutuo desde el día uno.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-center">
              <div className="font-black text-white mb-2">30 días, 100%</div>
              <p className="text-[13px] text-slate-400 leading-relaxed">
                Si no funciona, devolución total.
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

      {/* CTA */}
      <section className="relative z-10 px-6 py-20 md:py-28 text-center bg-[#04050a] border-t border-white/[0.05]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-emerald-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">
            Hablemos de tu práctica
          </h2>
          <p className="text-slate-400 text-base md:text-lg mb-10 leading-relaxed">
            En 15 minutos te decimos si podemos ayudarte a captar mejor. Si no, también te lo decimos sin vueltas.
          </p>

          <a
            href={waLink(
              "Hola Oscar, vengo de la página de Profesionales y quiero agendar el diagnóstico gratuito."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-emerald-600 hover:bg-emerald-500 text-white font-black py-4 px-12 rounded-xl transition-all shadow-[0_0_40px_rgba(16,185,129,0.4)] active:scale-95"
          >
            Agendar diagnóstico
          </a>
          <p className="mt-4 text-xs text-slate-500">Sin costo. Sin compromiso.</p>
        </div>
      </section>
    </div>
  );
}
