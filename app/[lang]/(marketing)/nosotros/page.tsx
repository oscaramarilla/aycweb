import type { Metadata } from "next";
import { buildWaLink } from "../../../../lib/config/contact";
import { getDictionary } from "@/lib/i18n";

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

export default async function NosotrosPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const d = await getDictionary(lang);
  // Inyecta clases de estilo en el markup propio de los textos del diccionario.
  const rich = (key: string) =>
    d[key]
      .replace(/<b>/g, '<strong class="text-white">')
      .replace(/<\/b>/g, "</strong>")
      .replace(/<i>/g, '<em>')
      .replace(/<\/i>/g, "</em>");

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
            {d["nos.heroKicker"]}
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight leading-tight">
            {d["nos.heroH1a"]}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              {d["nos.heroH1b"]}
            </span>
          </h1>
          <p
            className="text-slate-400 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed mb-4"
            dangerouslySetInnerHTML={{ __html: rich("nos.heroP1") }}
          />
          <p className="text-slate-500 max-w-2xl mx-auto text-[15px] leading-relaxed">
            {d["nos.heroP2"]}
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
                {d["nos.bioKicker"]}
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-2">
                Oscar Amarilla
              </h2>
              <p className="text-blue-400 font-bold mb-6 text-[15px]">
                {d["nos.bioRole"]}
              </p>
              <p className="text-slate-400 leading-relaxed mb-6 text-[15px]">
                {d["nos.bioP1"]}
              </p>
              <p className="text-slate-400 leading-relaxed mb-8 text-[15px]">
                {d["nos.bioP2"]}
              </p>
              <blockquote className="border-l-4 border-blue-500 pl-6 py-2 text-slate-300 italic leading-relaxed text-[15px]">
                {d["nos.bioQuote"]}
              </blockquote>
            </div>

            {/* Columna derecha: Las tres capas de AYC */}
            <div className="rounded-2xl border border-blue-500/30 bg-blue-950/20 p-8">
              <h3 className="text-xl font-black text-white mb-4">
                {d["nos.layersTitle"]}
              </h3>
              <div className="space-y-4 text-[15px]">
                <div>
                  <p className="text-blue-400 font-bold mb-1">{d["nos.layer1T"]}</p>
                  <p className="text-slate-400 leading-relaxed">
                    {d["nos.layer1D"]}
                  </p>
                </div>
                <div className="border-t border-slate-700/50 pt-4">
                  <p className="text-blue-400 font-bold mb-1">{d["nos.layer2T"]}</p>
                  <p className="text-slate-400 leading-relaxed">
                    {d["nos.layer2D"]}
                  </p>
                </div>
                <div className="border-t border-slate-700/50 pt-4">
                  <p className="text-blue-400 font-bold mb-1">{d["nos.layer3T"]}</p>
                  <p className="text-slate-400 leading-relaxed">
                    {d["nos.layer3D"]}
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
              {d["nos.bridgeKicker"]}
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              {d["nos.bridgeTitle"]}
            </h2>
            <p
              className="text-slate-400 max-w-3xl mx-auto text-[16px] leading-relaxed"
              dangerouslySetInnerHTML={{ __html: rich("nos.bridgeDesc") }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "🏭",
                tag: d["nos.bridge1Tag"],
                tagColor: "text-emerald-400",
                title: d["nos.bridge1T"],
                desc: d["nos.bridge1D"],
              },
              {
                icon: "🌉",
                tag: d["nos.bridge2Tag"],
                tagColor: "text-blue-400",
                title: d["nos.bridge2T"],
                desc: d["nos.bridge2D"],
              },
              {
                icon: "⚡",
                tag: d["nos.bridge3Tag"],
                tagColor: "text-purple-400",
                title: d["nos.bridge3T"],
                desc: d["nos.bridge3D"],
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
              {d["nos.timeKicker"]}
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              {d["nos.timeTitle"]}
            </h2>
            <p
              className="text-slate-400 max-w-3xl mx-auto text-[16px] leading-relaxed"
              dangerouslySetInnerHTML={{ __html: rich("nos.timeDesc") }}
            />
          </div>

          {/* Antes / Después */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* ANTES */}
            <div className="rounded-2xl border border-red-500/20 bg-red-950/10 p-8">
              <span className="text-[11px] font-bold uppercase tracking-widest text-red-400 mb-4 block">
                {d["nos.beforeLabel"]}
              </span>
              <h3 className="font-black text-white mb-4 text-[18px]">
                {d["nos.beforeTitle"]}
              </h3>
              <ul className="space-y-3 text-[14px]">
                {[d["nos.before1"], d["nos.before2"], d["nos.before3"], d["nos.before4"]].map((item, i) => (
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
                {d["nos.afterLabel"]}
              </span>
              <h3 className="font-black text-white mb-4 text-[18px]">
                {d["nos.afterTitle"]}
              </h3>
              <ul className="space-y-3 text-[14px]">
                {[d["nos.after1"], d["nos.after2"], d["nos.after3"], d["nos.after4"]].map((item, i) => (
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
            <p className="text-blue-400 font-black text-[28px] mb-2">{d["nos.metricBig"]}</p>
            <p
              className="text-slate-400 text-[15px]"
              dangerouslySetInnerHTML={{ __html: rich("nos.metricDesc") }}
            />
          </div>
        </div>
      </section>

      {/* ====== 5. ARQUITECTURA Y CÓDIGO (Agentes + Stack) ====== */}
      <section className="px-6 py-16 border-t border-white/[0.04]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10 text-center">
            <span className="text-slate-500 font-bold tracking-widest uppercase text-[11px] mb-3 block">
              {d["nos.archKicker"]}
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              {d["nos.archTitle"]}
            </h2>
            <p
              className="text-slate-400 max-w-2xl mx-auto text-[15px]"
              dangerouslySetInnerHTML={{ __html: rich("nos.archDesc") }}
            />
          </div>

          {/* Agentes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              { icon: "🔍", title: d["nos.agent1T"], desc: d["nos.agent1D"] },
              { icon: "🧠", title: d["nos.agent2T"], desc: d["nos.agent2D"] },
              { icon: "⚙️", title: d["nos.agent3T"], desc: d["nos.agent3D"] },
              { icon: "✅", title: d["nos.agent4T"], desc: d["nos.agent4D"] },
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
                  {d["nos.stackLabel"]}
                </p>
                <p
                  className="text-slate-300 text-[14px] leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: d["nos.stackDesc"]
                      .replace(/<b>orquestación multi-agente<\/b>|<b>multi-agent orchestration<\/b>|<b>orquestração multiagente<\/b>|<b>Multi-Agenten-Orchestrierung<\/b>/g, (m) => `<strong class="text-blue-400 font-semibold">${m.replace(/<\/?b>/g, "")}</strong>`)
                      .replace(/<b>/g, '<span class="text-white font-semibold">')
                      .replace(/<\/b>/g, "</span>"),
                  }}
                />
              </div>
              <div className="border-t md:border-t-0 md:border-l border-slate-700/50 pt-4 md:pt-0 md:pl-6">
                <p className="text-slate-500 text-[11px] font-bold uppercase tracking-widest mb-3">
                  {d["nos.costLabel"]}
                </p>
                <p
                  className="text-slate-300 text-[14px] leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: d["nos.costDesc"]
                      .replace(/<\/?b>/, (m) => (m === "<b>" ? '<span class="text-emerald-400 font-bold">' : "</span>"))
                      .replace(/<b>/g, '<span class="text-white font-semibold">')
                      .replace(/<\/b>/g, "</span>"),
                  }}
                />
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-700/50 text-center">
              <p
                className="text-slate-400 text-[14px] leading-relaxed"
                dangerouslySetInnerHTML={{ __html: rich("nos.archNote") }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ====== 6. ROI + ROT ====== */}
      <section className="px-6 py-16 border-t border-white/[0.04]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10 text-center">
            <span className="text-slate-500 font-bold tracking-widest uppercase text-[11px] mb-3 block">
              {d["nos.roiKicker"]}
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              {d["nos.roiTitle"]}
            </h2>
            <p
              className="text-slate-400 max-w-2xl mx-auto text-[15px]"
              dangerouslySetInnerHTML={{ __html: rich("nos.roiDesc") }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "💰",
                title: d["nos.roi1T"],
                desc: d["nos.roi1D"],
                metric: d["nos.roi1M"],
                metricColor: "text-emerald-400",
              },
              {
                icon: "📈",
                title: d["nos.roi2T"],
                desc: d["nos.roi2D"],
                metric: d["nos.roi2M"],
                metricColor: "text-blue-400",
              },
              {
                icon: "⏱️",
                title: d["nos.roi3T"],
                desc: d["nos.roi3D"],
                metric: d["nos.roi3M"],
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
            <p
              className="text-slate-300 text-[14px] leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: d["nos.roiNote"]
                  .replace(/<b>/g, '<strong class="text-blue-400">')
                  .replace(/<\/b>/g, "</strong>")
                  .replace(/<i>/g, '<em>')
                  .replace(/<\/i>/g, "</em>"),
              }}
            />
          </div>
        </div>
      </section>

      {/* ====== 7. GARANTÍAS + CTA ====== */}
      <section className="px-6 py-12 border-t border-white/[0.04]">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-lg font-black text-white mb-6">
            {d["nos.garTitle"]}
          </h3>
          <div className="space-y-4 mb-10">
            {[
              { icon: "🔍", title: d["nos.gar1T"], desc: d["nos.gar1D"] },
              { icon: "🤝", title: d["nos.gar2T"], desc: d["nos.gar2D"] },
              { icon: "✅", title: d["nos.gar3T"], desc: d["nos.gar3D"] },
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
            {d["nos.ctaTitle"]}
          </h2>
          <p className="text-slate-400 mb-8 text-[15px] leading-relaxed">
            {d["nos.ctaDesc"]}
          </p>
          <a
            href={buildWaLink(d["nos.waMsg"])}
            className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-black py-3.5 px-8 rounded-xl transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)]"
            target="_blank"
            rel="noopener noreferrer"
          >
            {d["nos.ctaButton"]}
          </a>
        </div>
      </section>
    </div>
  );
}