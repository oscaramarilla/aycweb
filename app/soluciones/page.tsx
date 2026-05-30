import type { Metadata } from "next";
import Link from "next/link";
import { TODAS_SOLUCIONES } from "@/lib/config/soluciones";
import type { SolucionConfig } from "@/lib/config/soluciones";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Soluciones de Infraestructura Digital B2B | AYCweb Paraguay",
  description:
    "40 soluciones de infraestructura digital para empresas y profesionales en Paraguay: cotizadores automáticos, sistemas de presupuesto, agendas automáticas y automatización B2B.",
  alternates: {
    canonical: "https://www.aycweb.com/soluciones",
  },
  openGraph: {
    title: "Soluciones de Infraestructura Digital B2B | AYCweb Paraguay",
    description:
      "Cotizadores automáticos, sistemas de presupuesto, landings para profesionales y automatización B2B en Paraguay.",
    url: "https://www.aycweb.com/soluciones",
    siteName: "AYCweb",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Soluciones AYCweb Paraguay",
      },
    ],
    locale: "es_PY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Soluciones de Infraestructura Digital B2B | AYCweb Paraguay",
    description:
      "Cotizadores automáticos, sistemas de presupuesto, landings para profesionales y automatización B2B en Paraguay.",
    images: ["/og-image.jpg"],
  },
};

const CATEGORIAS: { titulo: string; descripcion: string; slugs: string[] }[] = [
  {
    titulo: "Cotizadores por Sector",
    descripcion: "Sistemas de cotización automática adaptados a cada industria en Paraguay",
    slugs: [
      "cotizador-industrial",
      "cotizador-muebles-medida",
      "cotizador-construccion-paraguay",
      "cotizador-logistica-transporte",
      "cotizador-servicios-profesionales",
      "cotizador-agroindustria-paraguay",
      "cotizador-distribuidora-paraguay",
      "cotizador-ferreteria-materiales",
      "cotizador-metalurgica-estructuras",
      "cotizador-carpinteria-madera",
      "cotizador-imprenta-graficos",
      "cotizador-electricista-instalaciones",
    ],
  },
  {
    titulo: "Automatización y Ventas B2B",
    descripcion: "Elimina los cuellos de botella operativos en tu proceso de ventas",
    slugs: [
      "automatizar-ventas-b2b",
      "reemplazar-excel-cotizaciones",
      "whatsapp-ventas-empresa",
      "automatizar-cotizaciones-whatsapp",
      "automatizar-propuestas-comerciales",
      "generar-pdf-presupuesto-automatico",
      "eliminar-excel-operacion-empresarial",
      "sistema-seguimiento-ventas-paraguay",
      "sistema-gestion-clientes-pymes",
      "pipeline-ventas-automatizado",
      "dashboard-operativo-empresa",
    ],
  },
  {
    titulo: "Landings para Profesionales",
    descripcion: "Sistemas de captación y agenda automática para profesionales independientes",
    slugs: [
      "landing-medica-paraguay",
      "landing-dentista-paraguay",
      "landing-abogado-paraguay",
      "landing-arquitecto-paraguay",
      "landing-psicologo-paraguay",
      "landing-veterinaria-paraguay",
      "landing-nutricionista-paraguay",
      "landing-contador-paraguay",
    ],
  },
  {
    titulo: "Infraestructura y Transformación Digital",
    descripcion: "Arquitectura digital completa para empresas medianas y PYMES en crecimiento",
    slugs: [
      "infraestructura-digital-pymes",
      "transformacion-digital-empresa-mediana",
      "agencia-digital-b2b-paraguay",
      "desarrollo-web-empresas-paraguay",
      "automatizacion-empresarial-paraguay",
      "software-cotizacion-paraguay",
      "presupuesto-automatico-empresa",
      "whatsapp-business-empresa-paraguay",
      "crm-ligero-empresa-paraguay",
    ],
  },
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.aycweb.com" },
    { "@type": "ListItem", position: 2, name: "Soluciones", item: "https://www.aycweb.com/soluciones" },
  ],
};

export default function SolucionesHubPage() {
  const solucionesBySlug = new Map<string, SolucionConfig>(
    TODAS_SOLUCIONES.map((s) => [s.slug, s])
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* HERO */}
      <section className="relative px-6 pt-28 pb-16 text-center border-b border-white/[0.05]">
        <div
          aria-hidden="true"
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10"
        />
        <div className="max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-[11px] font-bold uppercase tracking-widest mb-6">
            AYCweb · Paraguay
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-white mb-6 leading-[1.05]">
            Soluciones de Infraestructura Digital
          </h1>
          <p className="text-slate-400 text-base md:text-xl max-w-2xl mx-auto leading-relaxed mb-8">
            {TODAS_SOLUCIONES.length} soluciones B2B para empresas y profesionales en Paraguay. Cotizadores automáticos, sistemas de agenda y automatización operativa.
          </p>
          <Link
            href="/es/diagnostico-comercial"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-black py-4 px-8 rounded-xl transition-all shadow-[0_0_30px_rgba(37,99,235,0.4)] active:scale-95 text-[15px]"
          >
            <span aria-hidden="true">⚡</span>
            Diagnóstico Comercial Express (5 min)
          </Link>
        </div>
      </section>

      {/* CATEGORÍAS */}
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-20">
        {CATEGORIAS.map((cat) => {
          const soluciones = cat.slugs
            .map((slug) => solucionesBySlug.get(slug))
            .filter((s): s is SolucionConfig => s !== undefined);

          const catId = `cat-${cat.titulo.replace(/\s+/g, "-").toLowerCase()}`;

          return (
            <section key={cat.titulo} aria-labelledby={catId}>
              <div className="mb-8">
                <h2
                  id={catId}
                  className="text-2xl md:text-3xl font-black text-white mb-2"
                >
                  {cat.titulo}
                </h2>
                <p className="text-slate-400 text-[15px]">{cat.descripcion}</p>
              </div>

              <ul
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                role="list"
              >
                {soluciones.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/soluciones/${s.slug}`}
                      className="flex flex-col h-full bg-slate-900/60 border border-slate-800 rounded-2xl p-5 hover:border-blue-500/40 hover:bg-slate-900 transition-all group"
                    >
                      <h3 className="text-white font-bold text-[15px] leading-snug mb-2 group-hover:text-blue-300 transition-colors">
                        {s.hero.title}
                      </h3>
                      <p className="text-slate-500 text-[13px] leading-relaxed flex-1 mb-3 line-clamp-2">
                        {s.metaDescription}
                      </p>
                      <span className="inline-flex items-center gap-1 text-blue-400 text-[12px] font-bold group-hover:gap-2 transition-all">
                        Ver solución
                        <svg
                          className="w-3.5 h-3.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>

      {/* CTA FINAL */}
      <section className="px-6 py-20 text-center bg-[#04050a] border-t border-white/[0.05]">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            ¿No encontrás tu caso exacto?
          </h2>
          <p className="text-slate-400 text-[15px] mb-8 leading-relaxed">
            El Diagnóstico Comercial Express identifica qué sistema encaja con tu operación en 5 minutos.
          </p>
          <Link
            href="/es/diagnostico-comercial"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-black py-4 px-10 rounded-xl transition-all shadow-[0_0_30px_rgba(37,99,235,0.4)] active:scale-95 text-[15px]"
          >
            <span aria-hidden="true">💬</span>
            Empezar Diagnóstico Gratis
          </Link>
          <p className="text-slate-600 text-xs mt-4">Sin costo. Sin compromiso.</p>
        </div>
      </section>
    </div>
  );
}
