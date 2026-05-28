import type { Metadata } from "next";
import { buildWaLink } from "../../../../lib/config/contact";

export const metadata: Metadata = {
  title: "Quiénes Somos | Equipo de Infraestructura Digital B2B | AYCweb Paraguay",
  description:
    "Conocé al equipo detrás de AYCweb: ingeniería, producto y operaciones que construyen sistemas digitales para empresas y profesionales en Paraguay. Más de 3 años automatizando operaciones reales.",
  keywords: [
    "quiénes somos AYCweb",
    "equipo desarrollo web paraguay",
    "firma infraestructura digital paraguay",
    "AYC SRL paraguay",
    "Oscar Amarilla Cáceres",
    "desarrollo B2B paraguay",
    "automatización empresas paraguay",
  ],
  alternates: {
    canonical: "https://aycweb.com/es/nosotros",
  },
  openGraph: {
    title: "Quiénes Somos | Equipo de Infraestructura Digital B2B | AYCweb Paraguay",
    description:
      "Equipo técnico y de producto que construye herramientas para operaciones que necesitan escala. Ingeniería, producto y operaciones al servicio de empresas en Paraguay.",
    url: "https://aycweb.com/es/nosotros",
    siteName: "AYCweb",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Equipo AYCweb - Infraestructura Digital B2B Paraguay",
      },
    ],
    locale: "es_PY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quiénes Somos | AYCweb Paraguay",
    description:
      "Equipo técnico que construye sistemas digitales para empresas y profesionales en Paraguay. Ingeniería, producto y operaciones.",
    images: ["/og-image.jpg"],
  },
};

export default function NosotrosPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <section className="px-6 pt-28 pb-12 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black mb-4">Quiénes somos</h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Equipo técnico y de producto que construye herramientas para operaciones que necesitan escala.
          </p>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-slate-800 p-6 bg-slate-900/40 text-center">
            <div className="text-3xl mb-3">👨‍💻</div>
            <h3 className="font-black text-white mb-2">Producto</h3>
            <p className="text-slate-400">Diseñamos flujos para usuarios reales y medibles.</p>
          </div>

          <div className="rounded-2xl border border-slate-800 p-6 bg-slate-900/40 text-center">
            <div className="text-3xl mb-3">⚙️</div>
            <h3 className="font-black text-white mb-2">Ingeniería</h3>
            <p className="text-slate-400">Sistemas escalables y mantenibles, con métricas reales.</p>
          </div>

          <div className="rounded-2xl border border-slate-800 p-6 bg-slate-900/40 text-center">
            <div className="text-3xl mb-3">🤝</div>
            <h3 className="font-black text-white mb-2">Operaciones</h3>
            <p className="text-slate-400">Acompañamos la implementación y la capacitación en campo.</p>
          </div>
        </div>
      </section>

      {/* ====== BIO DE OSCAR ====== */}
      <section className="px-6 py-16 border-t border-white/[0.04]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
            <div>
              <span className="text-slate-500 font-bold tracking-widest uppercase text-[11px] mb-4 block">Fundador</span>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-2">Oscar Amarilla</h2>
              <p className="text-blue-400 font-bold mb-6 text-[15px]">Infraestructura Digital · AYCweb Paraguay</p>
              <p className="text-slate-400 leading-relaxed mb-8 text-[15px]">
                Más de 12 años construyendo sistemas desde cero. Vengo de otro rubro: aprendí tecnología porque
                vi que los sistemas que necesitaban las empresas paraguayas no existían —o costaban como si
                vinieran del exterior sin entender la operación local.
              </p>
              <blockquote className="border-l-4 border-blue-500 pl-6 py-2 text-slate-300 italic leading-relaxed text-[15px]">
                "Vi cómo las empresas paraguayas perdían ventas por procesos manuales y decidí construir los sistemas que no existían."
              </blockquote>
            </div>

            <div>
              <h3 className="text-lg font-black text-white mb-6">Por qué importa quién construye el sistema</h3>
              <div className="space-y-4">
                {[
                  { icon: "🔍", title: "Auditoría antes de propuesta", desc: "Nunca arrancamos sin entender tu operación actual. Si no hay encaje real, te lo decimos antes de cobrarte." },
                  { icon: "🤝", title: "Interlocutor directo", desc: "No tercerizamos el proyecto ni el criterio. Hablás con quien diseña y construye el sistema." },
                  { icon: "✅", title: "Garantía real", desc: "30 días de devolución completa. Sin letra chica, sin condiciones, sin discusión." },
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
          </div>
        </div>
      </section>

      {/* ====== CTA FINAL ====== */}
      <section className="px-6 py-12 border-t border-white/[0.04] text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-black mb-3">¿Tu operación tiene encaje con AYCweb?</h2>
          <p className="text-slate-400 mb-6">En 15 minutos de diagnóstico te decimos si podemos construir algo juntos.</p>
          <a
            href={buildWaLink("Hola Oscar, quiero saber si mi operación tiene encaje con AYCweb.")}
            className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-black py-3.5 px-8 rounded-xl transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)]"
            target="_blank"
            rel="noopener noreferrer"
          >
            Agendar Diagnóstico
          </a>
        </div>
      </section>
    </div>
  );
}
