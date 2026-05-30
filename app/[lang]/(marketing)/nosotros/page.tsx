import type { Metadata } from "next";
import { buildWaLink } from "../../../../lib/config/contact";

export const metadata: Metadata = {
  title: "AYC = Automatiza y Convertí | Firma de Infraestructura Digital B2B · Paraguay",
  description:
    "AYC no hace páginas web. Construimos máquinas del tiempo y puentes digitales que automatizan ventas y devuelven tiempo a empresas y profesionales en Paraguay.",
  keywords: [
    "automatiza y convertí",
    "AYCweb paraguay",
    "máquinas del tiempo digitales",
    "puente digital empresa",
    "automatización empresas paraguay",
    "infraestructura digital B2B",
    "ROI retorno inversión digital",
    "ROT retorno tiempo automatización",
    "Oscar Amarilla Cáceres",
    "firma infraestructura digital paraguay",
    "arquitectura y código",
    "agentes IA automatización",
    "sistemas automáticos paraguay",
  ],
  alternates: {
    canonical: "https://www.aycweb.com/es/nosotros",
    languages: {
      es: "https://www.aycweb.com/es/nosotros",
      en: "https://www.aycweb.com/en/nosotros",
      "pt-BR": "https://www.aycweb.com/pt-br/nosotros",
      "x-default": "https://www.aycweb.com/es/nosotros",
    },
  },
  openGraph: {
    title: "AYC = Automatiza y Convertí | Máquinas del Tiempo Digitales · Paraguay",
    description:
      "Construimos el puente de titanio entre tu negocio físico y el mundo digital. Cada sistema es una máquina del tiempo que te devuelve horas de operación.",
    url: "https://www.aycweb.com/es/nosotros",
    siteName: "AYCweb",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AYCweb - Automatiza y Convertí · Máquinas del Tiempo Digitales · Paraguay",
      },
    ],
    locale: "es_PY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AYC = Automatiza y Convertí | Infraestructura Digital B2B Paraguay",
    description:
      "No hacemos páginas web. Construimos puentes digitales y máquinas del tiempo que automatizan tu operación.",
    images: ["/og-image.jpg"],
  },
};

const FAQ_SCHEMA = [
  {
    pregunta: "¿Qué es AYC y qué significa?",
    respuesta:
      "AYC significa Automatiza y Convertí. Es una firma de infraestructura digital B2B que construye sistemas automáticos — máquinas del tiempo digitales — para que empresas y profesionales en Paraguay recuperen tiempo y conviertan consultas en ventas reales.",
  },
  {
    pregunta: "¿Qué es una Máquina del Tiempo digital?",
    respuesta:
      "Es un sistema que toma un proceso manual que te roba horas (cotizar a mano, filtrar mensajes en WhatsApp, armar presupuestos en Excel) y lo reduce a unos pocos segundos de forma automática. Literalmente te devuelve años de vida operativa.",
  },
  {
    pregunta: "¿Qué es el Puente Digital de AYC?",
    respuesta:
      "Tu empresa ya es excelente en el mundo físico. El Puente Digital es la infraestructura que construimos para que esa misma excelencia exista en el mundo digital sin perder calidad: cotizadores automáticos, funnels de ventas, dashboards operativos.",
  },
  {
    pregunta: "¿Qué es el ROT (Return on Time)?",
    respuesta:
      "El ROT o Retorno del Tiempo es el recurso más escaso de un CEO o profesional. AYC calcula cuántas horas te devuelven sus sistemas automáticamente y lo compara con las horas que hoy perdés en procesos manuales repetitivos.",
  },
  {
    pregunta: "¿AYCweb trabaja solo con empresas paraguayas?",
    respuesta:
      "Principalmente empresas en Paraguay. También trabajamos con empresas de Argentina y otros países hispanohablantes que necesiten infraestructura digital B2B.",
  },
];

export default function NosotrosPage() {
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
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ====== 1. HERO — EL GANCHO ====== */}
      <section className="px-6 pt-28 pb-16 text-center">
        <div className="max-w-5xl mx-auto">
          <span className="inline-block text-blue-400 font-bold tracking-widest uppercase text-[11px] mb-4">
            Infraestructura Digital B2B
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight leading-tight">
            AYC:{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              Automatiza y Convertí.
            </span>
          </h1>
          <p className="text-slate-400 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed mb-4">
            No hacemos páginas web. Construimos{" "}
            <strong className="text-white">máquinas del tiempo</strong> y{" "}
            <strong className="text-white">puentes digitales</strong> que automatizan ventas y
            operaciones.
          </p>
          <p className="text-slate-500 max-w-2xl mx-auto text-[15px] leading-relaxed">
            Cada dólar que ponés en nuestro sistema vuelve multiplicado porque la máquina no
            duerme, no cobra aguinaldo y no se equivoca al cotizar.
          </p>
        </div>
      </section>

      {/* ====== 2. BIO DE OSCAR + LAS TRES CAPAS DE AYC ====== */}
      <section className="px-6 py-16 border-t border-white/[0.04]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
            {/* Columna izquierda: Bio */}
            <div>
              <span className="text-slate-500 font-bold tracking-widest uppercase text-[11px] mb-4 block">
                Fundador & Arquitecto de Sistemas
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-2">
                Oscar Amarilla
              </h2>
              <p className="text-blue-400 font-bold mb-6 text-[15px]">
                Infraestructura Digital · AYCweb Paraguay
              </p>
              <p className="text-slate-400 leading-relaxed mb-6 text-[15px]">
                Más de 12 años construyendo sistemas desde cero. Aprendí tecnología porque vi
                que los sistemas que necesitaban las empresas paraguayas no existían —o
                costaban como si vinieran del exterior sin entender la operación local.
              </p>
              <p className="text-slate-400 leading-relaxed mb-8 text-[15px]">
                Descubrí que el recurso más escaso de un CEO o un médico no es la plata, es
                el tiempo. Y decidí construir sistemas que se lo devuelvan.
              </p>
              <blockquote className="border-l-4 border-blue-500 pl-6 py-2 text-slate-300 italic leading-relaxed text-[15px]">
                &ldquo;Vi cómo las empresas paraguayas perdían horas —y ventas— por procesos
                manuales, y decidí construir las máquinas del tiempo que no
                existían.&rdquo;
              </blockquote>
            </div>

            {/* Columna derecha: Las tres capas de AYC */}
            <div className="rounded-2xl border border-blue-500/30 bg-blue-950/20 p-8">
              <h3 className="text-xl font-black text-white mb-4">
                Las tres capas de AYC
              </h3>
              <div className="space-y-4 text-[15px]">
                <div>
                  <p className="text-blue-400 font-bold mb-1">Automatiza y Convertí</p>
                  <p className="text-slate-400 leading-relaxed">
                    El resultado que te importa: más ingresos, más tiempo libre, retorno real
                    de cada inversión.
                  </p>
                </div>
                <div className="border-t border-slate-700/50 pt-4">
                  <p className="text-blue-400 font-bold mb-1">Arquitectura y Código</p>
                  <p className="text-slate-400 leading-relaxed">
                    El respaldo técnico: agentes de IA que piensan por vos y código
                    inquebrantable (Next.js, Supabase) que sostiene la operación 24/7.
                  </p>
                </div>
                <div className="border-t border-slate-700/50 pt-4">
                  <p className="text-blue-400 font-bold mb-1">Máquinas del Tiempo</p>
                  <p className="text-slate-400 leading-relaxed">
                    La metáfora que lo explica todo: procesos de 2 horas reducidos a 3
                    segundos. Literalmente te regalan años de vida operativa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== 3. EL PUENTE DIGITAL ====== */}
      <section className="px-6 py-16 border-t border-white/[0.04]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 text-center">
            <span className="text-slate-500 font-bold tracking-widest uppercase text-[11px] mb-3 block">
              La Metáfora
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Construimos el Puente Digital
            </h2>
            <p className="text-slate-400 max-w-3xl mx-auto text-[16px] leading-relaxed">
              Tu empresa ya es excelente en el mundo físico. Hacés los mejores muebles, das
              las mejores consultas, fabricás con la mejor calidad.{" "}
              <strong className="text-white">
                Nuestro trabajo es construir el puente de titanio
              </strong>{" "}
              para que esa misma excelencia exista en el mundo digital sin perder calidad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "🏭",
                tag: "Lo que ya tenés",
                tagColor: "text-emerald-400",
                title: "Mundo Físico",
                desc: "Tu empresa ya funciona. Tenés clientes, producto y operación. Eso no se toca.",
              },
              {
                icon: "🌉",
                tag: "Lo que construimos",
                tagColor: "text-blue-400",
                title: "El Puente",
                desc: "Cotizadores automáticos, funnels de ventas, dashboards. La infraestructura que conecta tu excelencia con el mundo digital.",
              },
              {
                icon: "⚡",
                tag: "El resultado",
                tagColor: "text-purple-400",
                title: "Mundo Digital",
                desc: "Ventas que entran solas, presupuestos que se generan en segundos, clientes filtrados automáticamente.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 text-center"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <p
                  className={`text-[11px] font-bold uppercase tracking-widest mb-2 ${item.tagColor}`}
                >
                  {item.tag}
                </p>
                <h3 className="font-black text-white mb-2 text-[16px]">{item.title}</h3>
                <p className="text-slate-400 text-[14px] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== 4. LA MÁQUINA DEL TIEMPO ====== */}
      <section className="px-6 py-16 border-t border-white/[0.04]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 text-center">
            <span className="text-slate-500 font-bold tracking-widest uppercase text-[11px] mb-3 block">
              El Argumento Letal
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              La Máquina del Tiempo
            </h2>
            <p className="text-slate-400 max-w-3xl mx-auto text-[16px] leading-relaxed">
              Un sistema que toma un proceso manual de 2 horas y lo reduce a 3 segundos de
              forma automática{" "}
              <strong className="text-white">
                literalmente te está regalando años de vida operativa
              </strong>
              .
            </p>
          </div>

          {/* Antes / Después */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* ANTES */}
            <div className="rounded-2xl border border-red-500/20 bg-red-950/10 p-8">
              <span className="text-[11px] font-bold uppercase tracking-widest text-red-400 mb-4 block">
                Antes de AYC
              </span>
              <h3 className="font-black text-white mb-4 text-[18px]">
                Procesos que te roban horas
              </h3>
              <ul className="space-y-3 text-[14px]">
                {[
                  "Cotizaciones armadas a mano en Excel — 45 min por cliente",
                  "Mensajes repetitivos en WhatsApp — 2-3 horas diarias",
                  "Filtrado manual de curiosos — perdés tiempo con gente que no va a comprar",
                  "Presupuestos que se pierden entre chats y cuadernos",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-slate-400 leading-relaxed"
                  >
                    <span className="text-red-400 shrink-0 mt-0.5">✗</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* DESPUÉS */}
            <div className="rounded-2xl border border-emerald-500/20 bg-emerald-950/10 p-8">
              <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-400 mb-4 block">
                Con AYC (La Máquina del Tiempo)
              </span>
              <h3 className="font-black text-white mb-4 text-[18px]">
                Lo que tu sistema hace por vos
              </h3>
              <ul className="space-y-3 text-[14px]">
                {[
                  "Cotización automática en 3 segundos — sin abrir Excel",
                  "Agentes responden y filtran — solo llegan leads calificados",
                  "Cada oportunidad queda registrada — nada se pierde",
                  "Tu equipo cierra negocios, la máquina hace el trabajo pesado",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-slate-400 leading-relaxed"
                  >
                    <span className="text-emerald-400 shrink-0 mt-0.5">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Métrica destacada */}
          <div className="rounded-2xl border border-blue-500/20 bg-blue-950/10 p-6 text-center max-w-2xl mx-auto">
            <p className="text-blue-400 font-black text-[28px] mb-2">2 horas → 3 segundos</p>
            <p className="text-slate-400 text-[15px]">
              Eso es una{" "}
              <strong className="text-white">Máquina del Tiempo</strong>. Eso es lo que
              construimos.
            </p>
          </div>
        </div>
      </section>

      {/* ====== 5. ARQUITECTURA Y CÓDIGO (Agentes + Stack) ====== */}
      <section className="px-6 py-16 border-t border-white/[0.04]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10 text-center">
            <span className="text-slate-500 font-bold tracking-widest uppercase text-[11px] mb-3 block">
              El Respaldo Técnico
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Arquitectura y Código
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-[15px]">
              Una vez que le prometiste el cielo, el cerebro racional pide pruebas. Aquí está
              nuestra chapa de ingeniero. No usamos plantillas prefabricadas.{" "}
              <strong className="text-white">Construimos inteligencia.</strong>
            </p>
          </div>

          {/* Agentes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              {
                icon: "🔍",
                title: "Agente de Análisis",
                desc: "Audita tu operación actual, releva procesos y documenta requerimientos con precisión quirúrgica.",
              },
              {
                icon: "🧠",
                title: "Agente de Arquitectura",
                desc: "Diseña la estructura del sistema, el modelo de datos y las integraciones necesarias.",
              },
              {
                icon: "⚙️",
                title: "Agente de Desarrollo",
                desc: "Escribe código modular, testeable y documentado. Implementa cada componente con contexto completo.",
              },
              {
                icon: "✅",
                title: "Agente de QA & Deploy",
                desc: "Ejecuta pruebas, verifica consistencia y despliega a producción con monitoreo continuo.",
              },
            ].map((agent, i) => (
              <div
                key={i}
                className="rounded-2xl border border-blue-500/20 bg-blue-950/10 p-5 text-center"
              >
                <div className="text-3xl mb-3">{agent.icon}</div>
                <h3 className="font-black text-white mb-2 text-[14px]">{agent.title}</h3>
                <p className="text-slate-400 text-[13px] leading-relaxed">{agent.desc}</p>
              </div>
            ))}
          </div>

          {/* Stack */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-slate-500 text-[11px] font-bold uppercase tracking-widest mb-3">
                  Stack tecnológico
                </p>
                <p className="text-slate-300 text-[14px] leading-relaxed">
                  Infraestructura B2B construida con{" "}
                  <span className="text-white font-semibold">Next.js</span>,{" "}
                  <span className="text-white font-semibold">Supabase</span>,{" "}
                  <span className="text-white font-semibold">Vercel</span>, y{" "}
                  <strong className="text-blue-400 font-semibold">
                    orquestación multi-agente
                  </strong>{" "}
                  donde Claude y Cline colaboran en cadena: análisis → diseño → desarrollo →
                  QA → deploy.
                </p>
              </div>
              <div className="border-t md:border-t-0 md:border-l border-slate-700/50 pt-4 md:pt-0 md:pl-6">
                <p className="text-slate-500 text-[11px] font-bold uppercase tracking-widest mb-3">
                  Eficiencia en costos
                </p>
                <p className="text-slate-300 text-[14px] leading-relaxed">
                  <span className="text-emerald-400 font-bold">Cada llamada a API se diseña con contexto preciso</span>,
                  minimizando tokens y reutilizando resultados. El costo por funcionalidad
                  entregada es hasta{" "}
                  <span className="text-white font-semibold">3× más eficiente</span> que el
                  uso genérico de IA.
                </p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-700/50 text-center">
              <p className="text-slate-400 text-[14px] leading-relaxed">
                <strong className="text-white">
                  Todos los agentes son orquestados por un solo arquitecto humano.
                </strong>{" "}
                No hay automatización sin supervisión. Velocidad de máquina con criterio
                humano.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====== 6. ROI + ROT ====== */}
      <section className="px-6 py-16 border-t border-white/[0.04]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10 text-center">
            <span className="text-slate-500 font-bold tracking-widest uppercase text-[11px] mb-3 block">
              El Resultado que Importa
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              ROI y ROT: Tu retorno real
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-[15px]">
              No le traemos &ldquo;likes&rdquo; a tu empresa. Le traemos{" "}
              <strong className="text-white">
                clientes que pasaron por un embudo y están listos para comprar
              </strong>
              . Y le devolvemos el recurso más escaso que existe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "💰",
                title: "Ingresos (Conversión)",
                desc: "No medimos alcance; medimos cuántos leads se convirtieron en ventas reales. Cada sistema está optimizado para que el embudo convierta.",
                metric: "Conversión real",
                metricColor: "text-emerald-400",
              },
              {
                icon: "📈",
                title: "Retorno de Inversión (ROI)",
                desc: "Cada dólar que invertís en tu sistema vuelve multiplicado. No es un gasto de marketing — es infraestructura que genera retorno medible.",
                metric: "Cada dólar vuelve",
                metricColor: "text-blue-400",
              },
              {
                icon: "⏱️",
                title: "Retorno del Tiempo (ROT)",
                desc: "El recurso más escaso de un CEO no es la plata, es el tiempo. Le devolvemos las 3 horas diarias que pasás respondiendo mensajes repetitivos.",
                metric: "Horas recuperadas",
                metricColor: "text-purple-400",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6"
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-black text-white mb-2 text-[16px]">{item.title}</h3>
                <p className="text-slate-400 text-[14px] leading-relaxed mb-4">
                  {item.desc}
                </p>
                <span
                  className={`inline-block font-black text-[20px] ${item.metricColor}`}
                >
                  {item.metric}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-blue-500/20 bg-blue-950/10 p-6 text-center max-w-2xl mx-auto">
            <p className="text-slate-300 text-[14px] leading-relaxed">
              <strong className="text-blue-400">El ROT es nuestro argumento letal.</strong>{" "}
              El recurso más escaso de un CEO o un médico no es la plata, es el tiempo. Le
              estás diciendo: <em>&ldquo;Te voy a devolver las horas que perdés en
              automatismos&rdquo;</em>.
            </p>
          </div>
        </div>
      </section>

      {/* ====== 7. GARANTÍAS + CTA ====== */}
      <section className="px-6 py-12 border-t border-white/[0.04]">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-lg font-black text-white mb-6">
            Por qué importa quién construye el sistema
          </h3>
          <div className="space-y-4 mb-10">
            {[
              {
                icon: "🔍",
                title: "Auditoría antes de propuesta",
                desc: "Nunca arranca nada sin entender tu operación actual. Si no hay encaje real, te lo digo antes de cobrarte.",
              },
              {
                icon: "🤝",
                title: "Interlocutor directo",
                desc: "El proyecto no se terceriza ni el criterio. Hablás con quien diseña y construye el sistema.",
              },
              {
                icon: "✅",
                title: "Garantía real",
                desc: "Garantía Inteligente: cancelás en la primera etapa si el sistema no cumple el objetivo. Pago inicial devuelto si determinamos inviabilidad técnica antes del desarrollo.",
              },
            ].map((p, i) => (
              <div
                key={i}
                className="bg-slate-900/40 border border-slate-800 rounded-2xl p-5 flex gap-4"
              >
                <span className="text-xl shrink-0 mt-0.5">{p.icon}</span>
                <div>
                  <h4 className="text-white font-bold mb-1 text-[14px]">{p.title}</h4>
                  <p className="text-slate-400 text-[13px] leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== SCHEMA JSON-LD PARA ORGANIZATION ====== */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": "https://aycweb.com/#organization",
            name: "AYCweb",
            url: "https://aycweb.com/",
            slogan: "Automatiza y Convertí",
            founder: {
              "@type": "Person",
              name: "Oscar Amarilla Cáceres",
              jobTitle: "Arquitecto de Sistemas",
            },
            knowsAbout: [
              "AI Agent Orchestration",
              "Multi-Agent Systems",
              "API Cost Optimization",
              "Software Architecture",
              "B2B Infrastructure",
              "Next.js Development",
              "Supabase",
              "Prompt Engineering",
              "System Automation",
              "Digital Time Machines",
              "Digital Bridges",
            ],
            description:
              "AYC significa Automatiza y Convertí. Firma de infraestructura digital B2B que construye máquinas del tiempo y puentes digitales para empresas en Paraguay.",
          }),
        }}
      />

      {/* ====== CTA FINAL ====== */}
      <section className="px-6 py-16 border-t border-white/[0.04] text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-black mb-3">
            ¿Tu operación tiene encaje con AYCweb?
          </h2>
          <p className="text-slate-400 mb-8 text-[15px] leading-relaxed">
            En 15 minutos de diagnóstico te muestro cómo funciona la automatización
            aplicada a tu caso concreto y qué significa en costo, velocidad y tiempo
            devuelto.
          </p>
          <a
            href={buildWaLink(
              "Hola Oscar, quiero agendar un diagnóstico para ver cómo AYCweb puede automatizar mi operación."
            )}
            className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-black py-3.5 px-8 rounded-xl transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)]"
            target="_blank"
            rel="noopener noreferrer"
          >
            Agendar Diagnóstico de Automatización
          </a>
        </div>
      </section>
    </div>
  );
}