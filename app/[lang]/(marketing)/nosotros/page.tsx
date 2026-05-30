import type { Metadata } from "next";
import { buildWaLink } from "../../../../lib/config/contact";

export const metadata: Metadata = {
  title: "Orquestación de Agentes + Optimización de APIs | AYCweb Paraguay",
  description:
    "AYCweb opera con orquestación multi-agente (Claude + Cline) y optimización de costos de API. Un solo arquitecto de sistemas construye tu motor digital. Hablás directo con quien programa, no con un account manager. Más de 12 años automatizando operaciones reales en Paraguay.",
  keywords: [
    "quiénes somos AYCweb",
    "orquestación de agentes IA",
    "optimización APIs IA",
    "multi-agent orchestration Paraguay",
    "desarrollo con Cline Claude",
    "eficiencia tokens API",
    "operador único desarrollo web paraguay",
    "firma infraestructura digital paraguay",
    "AYC SRL paraguay",
    "Oscar Amarilla Cáceres",
    "desarrollo B2B paraguay",
    "automatización empresas paraguay",
    "IA augmentation paraguay",
    "agente AI B2B Paraguay",
    "costos API eficientes",
  ],
  alternates: {
    canonical: "https://www.aycweb.com/es/nosotros",
  },
  openGraph: {
    title: "Orquestación de Agentes + Optimización de APIs | AYCweb Paraguay",
    description:
      "Arquitecto de sistemas con orquestación multi-agente (Claude + Cline). Cada llamada a API se optimiza. Sin intermediarios, sin teléfono descompuesto. Infraestructura B2B real para empresas en Paraguay.",
    url: "https://www.aycweb.com/es/nosotros",
    siteName: "AYCweb",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AYCweb - Orquestación de Agentes + Optimización de APIs · Infraestructura Digital B2B Paraguay",
      },
    ],
    locale: "es_PY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Orquestación de Agentes + Optimización de APIs | AYCweb Paraguay",
    description:
      "Arquitecto con orquestación multi-agente. APIs optimizadas, costos controlados. Infraestructura B2B para Paraguay.",
    images: ["/og-image.jpg"],
  },
};

export default function NosotrosPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">

      {/* ====== HERO ====== */}
      <section className="px-6 pt-28 pb-12 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block text-blue-400 font-bold tracking-widest uppercase text-[11px] mb-4">
            Modelo de trabajo
          </span>
          <h1 className="text-4xl md:text-6xl font-black mb-4">
            Operador Único.<br className="hidden md:block" /> Orquestación Multi-Agente.
          </h1>
          <p className="text-slate-400 max-w-3xl mx-auto text-lg">
            Un solo arquitecto de sistemas coordina agentes de IA especializados (Claude, Cline)
            para construir tu motor digital. Cada llamada a API se optimiza al máximo.
            Sin intermediarios, sin teléfono descompuesto.
          </p>
        </div>
      </section>

      {/* ====== BIO DE OSCAR + QUIÉN CONSTRUYE TU SISTEMA ====== */}
      <section className="px-6 py-16 border-t border-white/[0.04]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">

            {/* Columna izquierda: Bio */}
            <div>
              <span className="text-slate-500 font-bold tracking-widest uppercase text-[11px] mb-4 block">
                Fundador & Arquitecto de Sistemas
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-2">Oscar Amarilla</h2>
              <p className="text-blue-400 font-bold mb-6 text-[15px]">Infraestructura Digital · AYCweb Paraguay</p>
              <p className="text-slate-400 leading-relaxed mb-8 text-[15px]">
                Más de 12 años construyendo sistemas desde cero. Aprendí tecnología porque vi que los sistemas
                que necesitaban las empresas paraguayas no existían —o costaban como si vinieran del exterior
                sin entender la operación local.
              </p>
              <blockquote className="border-l-4 border-blue-500 pl-6 py-2 text-slate-300 italic leading-relaxed text-[15px]">
                &ldquo;Vi cómo las empresas paraguayas perdían ventas por procesos manuales y decidí construir los sistemas que no existían.&rdquo;
              </blockquote>
            </div>

            {/* Columna derecha: Quién construye tu sistema */}
            <div className="rounded-2xl border border-blue-500/30 bg-blue-950/20 p-8">
              <h3 className="text-xl font-black text-white mb-3">Quién construye tu sistema</h3>
              <p className="text-slate-300 leading-relaxed mb-6 text-[15px]">
                <strong className="text-white">Operador único, con orquestación multi-agente.</strong> Vos hablás con el
                arquitecto del sistema, no con un account manager.
              </p>
              <div className="rounded-xl bg-slate-900/60 border border-slate-700 p-5">
                <p className="text-slate-500 text-[11px] font-bold uppercase tracking-widest mb-3">Stack tecnológico</p>
                <p className="text-slate-300 text-[14px] leading-relaxed">
                  Infraestructura B2B construida con{" "}
                  <span className="text-white font-semibold">Next.js</span>,{" "}
                  <span className="text-white font-semibold">Supabase</span>,{" "}
                  <span className="text-white font-semibold">Vercel</span>, y{" "}
                  <strong className="text-blue-400 font-semibold">orquestación multi-agente</strong>{" "}
                  donde Claude y Cline colaboran en cadena: análisis → diseño → desarrollo → QA → deploy.
                </p>
                <p className="text-slate-400 text-[13px] leading-relaxed mt-3 border-t border-slate-700/50 pt-3">
                  <span className="text-emerald-400 font-bold">Optimización de APIs:</span>{" "}
                  Cada solicitud se diseña con contexto preciso, minimizando tokens y reutilizando
                  resultados. El costo por funcionalidad entregada es hasta 3× más eficiente que
                  el uso genérico de IA.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ====== POR QUÉ UN OPERADOR ÚNICO ES TU MAYOR VENTAJA ====== */}
      <section className="px-6 py-16 border-t border-white/[0.04]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10 text-center">
            <span className="text-slate-500 font-bold tracking-widest uppercase text-[11px] mb-3 block">
              Ventaja competitiva
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white">
              Por qué un operador único es tu mayor ventaja
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "📞",
                title: "Cero teléfono descompuesto",
                desc: "El que audita tu negocio es el que escribe el código. Sin intermediarios que distorsionen el requerimiento.",
              },
              {
                icon: "⚡",
                title: "Velocidad de ejecución",
                desc: "Decisiones y ajustes en horas, no en sprints de semanas. Sin burocracia interna ni aprobaciones de capas.",
              },
              {
                icon: "🛡️",
                title: "Garantía respaldada",
                desc: "La Garantía Inteligente la asume la misma persona que construye tu motor. Si en la primera etapa no hay encaje, cancelás sin avanzar. Sin letra chica.",
              },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-black text-white mb-2 text-[16px]">{item.title}</h3>
                <p className="text-slate-400 text-[14px] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== ORQUESTACIÓN MULTI-AGENTE ====== */}
      <section className="px-6 py-16 border-t border-white/[0.04]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10 text-center">
            <span className="text-slate-500 font-bold tracking-widest uppercase text-[11px] mb-3 block">
              Cómo construimos
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white">
              Orquestación Multi-Agente
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto mt-4 text-[15px]">
              No usamos IA como &ldquo;un chat que ayuda&rdquo;. Tenemos una arquitectura de agentes
              especializados que colaboran en cadena, cada uno con un rol y un contexto definido.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
              <div key={i} className="rounded-2xl border border-blue-500/20 bg-blue-950/10 p-5 text-center">
                <div className="text-3xl mb-3">{agent.icon}</div>
                <h3 className="font-black text-white mb-2 text-[14px]">{agent.title}</h3>
                <p className="text-slate-400 text-[13px] leading-relaxed">{agent.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/40 p-6 text-center max-w-2xl mx-auto">
            <p className="text-slate-300 text-[14px] leading-relaxed">
              <strong className="text-white">Todos los agentes son orquestados por un solo arquitecto humano.</strong>{" "}
              No hay automatización sin supervisión. El resultado: velocidad de máquina con criterio humano.
            </p>
          </div>
        </div>
      </section>

      {/* ====== EFICIENCIA EN COSTOS DE APIs ====== */}
      <section className="px-6 py-16 border-t border-white/[0.04]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10 text-center">
            <span className="text-slate-500 font-bold tracking-widest uppercase text-[11px] mb-3 block">
              Optimización de recursos
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Eficiencia en costos de IA
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-[15px]">
              La mayoría usa IA a lo bruto: prompts gigantes, contexto repetido, tokens desperdiciados.
              Nosotros ingenierizamos cada llamada.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "🎯",
                title: "Contexto preciso",
                desc: "Cada solicitud a la API lleva exactamente la información necesaria. Nada de &ldquo;contexto completo del proyecto&rdquo; en cada llamada.",
                metric: "-60% tokens",
                metricColor: "text-emerald-400",
              },
              {
                icon: "♻️",
                title: "Reutilización inteligente",
                desc: "Los resultados de agentes previos se cachean y reutilizan. No preguntamos dos veces lo mismo ni regeneramos lo que ya está resuelto.",
                metric: "-50% llamadas",
                metricColor: "text-emerald-400",
              },
              {
                icon: "📐",
                title: "Prompts ingenierizados",
                desc: "Cada prompt está diseñado con estructura, ejemplos y restricciones para obtener el mejor resultado en la menor cantidad de tokens posible.",
                metric: "3× eficiencia",
                metricColor: "text-blue-400",
              },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-black text-white mb-2 text-[16px]">{item.title}</h3>
                <p className="text-slate-400 text-[14px] leading-relaxed mb-4">{item.desc}</p>
                <span className={`inline-block font-black text-[22px] ${item.metricColor}`}>
                  {item.metric}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-emerald-500/20 bg-emerald-950/10 p-6 max-w-3xl mx-auto">
            <p className="text-slate-300 text-[14px] leading-relaxed text-center">
              <strong className="text-emerald-400">Resultado:</strong>{" "}
              El ahorro en costos de API se traslada directamente al cliente final.
              No pagás por tokens desperdiciados —pagás por sistema funcionando.
            </p>
          </div>
        </div>
      </section>

      {/* ====== GARANTÍAS ====== */}
      <section className="px-6 py-12 border-t border-white/[0.04]">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-lg font-black text-white mb-6">Por qué importa quién construye el sistema</h3>
          <div className="space-y-4">
            {[
              { icon: "🔍", title: "Auditoría antes de propuesta", desc: "Nunca arranca nada sin entender tu operación actual. Si no hay encaje real, te lo digo antes de cobrarte." },
              { icon: "🤝", title: "Interlocutor directo", desc: "El proyecto no se terceriza ni el criterio. Hablás con quien diseña y construye el sistema." },
              { icon: "✅", title: "Garantía real", desc: "Garantía Inteligente: cancelás en la primera etapa si el sistema no cumple el objetivo. Pago inicial devuelto si determinamos inviabilidad técnica antes del desarrollo." },
            ].map((p, i) => (
              <div key={i} className="bg-slate-900/40 border border-slate-800 rounded-2xl p-5 flex gap-4">
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

      {/* ====== SCHEMA JSON-LD PARA AGENTES Y MOTORES DE BÚSQUEDA ====== */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": "https://aycweb.com/#organization",
            name: "AYCweb",
            url: "https://aycweb.com/",
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
            ],
            description:
              "Arquitecto de sistemas con orquestación multi-agente (Claude + Cline). Optimización de costos de API. Infraestructura B2B para empresas en Paraguay.",
          }),
        }}
      />

      {/* ====== CTA FINAL ====== */}
      <section className="px-6 py-12 border-t border-white/[0.04] text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-black mb-3">¿Tu operación tiene encaje con AYCweb?</h2>
          <p className="text-slate-400 mb-6">
            En 15 minutos de diagnóstico te muestro cómo funciona la orquestación de agentes
            aplicada a tu caso concreto y qué significa en costo y velocidad real.
          </p>
          <a
            href={buildWaLink("Hola Oscar, quiero saber si mi operación tiene encaje con AYCweb y cómo funciona tu orquestación de agentes.")}
            className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-black py-3.5 px-8 rounded-xl transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)]"
            target="_blank"
            rel="noopener noreferrer"
          >
            Agendar Diagnóstico de Orquestación
          </a>
        </div>
      </section>

    </div>
  );
}