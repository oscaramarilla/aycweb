import type { Metadata } from "next";
import { AYCWEB_CONTACT, buildWaLink } from "../../../../lib/config/contact";
import { SHOWROOM } from "../../../../lib/config/showroom";
import { VideoCard } from "../../../../components/obras/VideoShowroom";

export const metadata: Metadata = {
  title: "Casos de Éxito y Sistemas Implementados | AYCweb Paraguay",
  description:
    "Casos reales de sistemas B2B operando en empresas paraguayas: cotizadores automáticos, agendamiento con WhatsApp y calculadoras paramétricas con generación de PDF. Resultados medibles, cero promesas genéricas.",
  keywords: [
    "casos de éxito sistemas B2B paraguay",
    "sistemas implementados empresas paraguay",
    "cotizador automático paraguay",
    "calculadora paramétrica PDF",
    "automatización comercial paraguay",
    "casos reales software empresarial",
    "AYCweb obras",
  ],
  alternates: {
    canonical: "https://aycweb.com/es/obras",
  },
  openGraph: {
    title: "Casos de Éxito y Sistemas Implementados | AYCweb Paraguay",
    description:
      "Sistemas B2B reales operando en empresas de Paraguay: cotizadores automáticos, agendamiento con WhatsApp y calculadoras paramétricas con generación de PDF.",
    url: "https://aycweb.com/es/obras",
    siteName: "AYCweb",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Casos de Éxito B2B - AYCweb Paraguay",
      },
    ],
    locale: "es_PY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Casos de Éxito y Sistemas Implementados | AYCweb Paraguay",
    description:
      "Sistemas B2B reales operando en empresas de Paraguay: cotizadores automáticos, agendamiento con WhatsApp y calculadoras paramétricas con PDF.",
    images: ["/og-image.jpg"],
  },
};

// ─── COMPONENTE PRINCIPAL ─────────────────────────────────────────────────────

export default function ObrasPage() {
  const auditLink = buildWaLink(AYCWEB_CONTACT.globalMessages.auditB2B);

  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-slate-50 font-sans relative overflow-hidden pb-24">
      <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay z-0" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Hero */}
      <section className="relative pt-28 pb-12 md:pt-40 md:pb-16 px-6 text-center z-10">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-[11px] md:text-xs font-bold uppercase tracking-widest mb-6 shadow-sm">
            Showroom Operativo
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 tracking-tighter leading-[1.05] text-white">
            Nuestras Obras.
          </h1>
          <p className="text-base md:text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
            No mostramos renders ni promesas genéricas. Este showroom presenta los sistemas en funcionamiento, con enfoque en el valor real que entregan.
          </p>
        </div>
      </section>

      <section className="relative z-10 px-6 mb-20">
        <div className="max-w-6xl mx-auto space-y-14">

          {/* Destacado */}
          <div className="max-w-sm mx-auto">
            <VideoCard video={SHOWROOM.main} featured />
          </div>

          {/* Copy estratégico de autoridad */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Sistemas operando. Resultados reales.</h2>
            <p className="text-slate-400 mb-10">No mostramos renders ni promesas genéricas. Estos son los sistemas que construimos, el problema que resolvieron y el resultado que dejaron en cada empresa.</p>
          </div>

          {/* Grilla de 4 videos secundarios */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SHOWROOM.secondary.map((v) => (
              <VideoCard key={v.id} video={v} />
            ))}
          </div>

          {/* CTA final */}
          <div className="rounded-[2rem] border border-slate-800 bg-slate-950/80 p-7 max-w-lg mx-auto text-center">
            <h3 className="text-2xl font-black text-white">Tu próximo paso</h3>
            <p className="mt-4 text-slate-400 leading-relaxed">
              Si querés ver cómo aplicamos este showroom a tu operación, agendá ahora la auditoría B2B por WhatsApp.
            </p>
            <a
              href={auditLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-500 text-white font-black py-4 px-6 rounded-xl transition-all shadow-[0_0_30px_rgba(37,99,235,0.3)]"
            >
              Agendar Auditoría B2B
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

        </div>
      </section>
    </div>
  );
}
