import { Metadata } from "next";
import Link from "next/link";
import { FranjaClientes } from "@/components/social/FranjaClientes";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Paraguay vs USA 2026: hora en Paraguay y la oportunidad digital para empresas paraguayas",
  description:
    "Paraguay vs USA se juega el 12 de junio a las 22:00 de Paraguay. Mirá el contexto del partido y cómo las empresas paraguayas pueden prepararse para competir digitalmente en mercados como Estados Unidos.",
  alternates: {
    canonical: "https://www.aycweb.com/es/futbol/paraguay-vs-usa-2026",
  },
  openGraph: {
    title: "Paraguay vs USA 2026: hora en Paraguay y la oportunidad digital para empresas",
    description:
      "Paraguay vs USA se juega el 12 de junio a las 22:00 de Paraguay. Mirá el contexto del partido y cómo las empresas paraguayas pueden prepararse para competir digitalmente en mercados como Estados Unidos.",
    url: "https://www.aycweb.com/es/futbol/paraguay-vs-usa-2026",
    siteName: "AYCweb",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Paraguay vs USA 2026 y la oportunidad para empresas paraguayas",
      },
    ],
    locale: "es_PY",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paraguay vs USA 2026: hora en Paraguay y la oportunidad digital para empresas",
    description:
      "Paraguay vs USA se juega el 12 de junio a las 22:00 de Paraguay. Mirá el contexto del partido y cómo las empresas paraguayas pueden prepararse para competir digitalmente.",
    images: ["/og-image.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Paraguay vs USA 2026: hora en Paraguay y qué pueden aprender las empresas paraguayas",
      description: "Paraguay vs USA se juega el 12 de junio a las 22:00 de Paraguay. Mirá el contexto del partido y cómo las empresas paraguayas pueden prepararse para competir digitalmente en mercados como Estados Unidos.",
      author: {
        "@type": "Organization",
        name: "AYCweb",
        url: "https://www.aycweb.com"
      },
      publisher: {
        "@type": "Organization",
        name: "AYCweb",
        logo: {
          "@type": "ImageObject",
          url: "https://www.aycweb.com/logo-ayc.webp"
        }
      },
      datePublished: "2026-06-11T00:00:00+00:00",
      dateModified: "2026-06-11T00:00:00+00:00",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://www.aycweb.com/es/futbol/paraguay-vs-usa-2026"
      }
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿A qué hora juega Paraguay vs USA en Paraguay?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Paraguay vs USA está programado para el viernes 12 de junio de 2026 a las 22:00 hora de Asunción."
          }
        },
        {
          "@type": "Question",
          name: "¿Dónde se juega USA vs Paraguay?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "El partido se juega en Los Angeles Stadium, en Estados Unidos."
          }
        },
        {
          "@type": "Question",
          name: "¿Qué puede aprender una empresa paraguaya de un evento global como Paraguay vs USA?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Que competir afuera exige preparación, posicionamiento, velocidad de respuesta, confianza digital y sistemas comerciales claros."
          }
        },
        {
          "@type": "Question",
          name: "¿Cómo puede una empresa paraguaya captar clientes de Estados Unidos?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Con una web clara, propuesta bilingüe o internacional, WhatsApp bien integrado, formularios, automatización, CRM y contenido SEO orientado a búsquedas reales."
          }
        }
      ]
    }
  ]
};

export default async function ParaguayVsUsaPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  
  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-slate-50 font-sans relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay z-0"></div>

      {/* 1. HERO POSICIONADO */}
      <section className="relative pt-28 pb-12 md:pt-40 md:pb-24 px-6 text-center z-10 border-b border-white/[0.05]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
        
        <div className="max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-600/20 to-blue-500/10 border border-blue-500/30 text-blue-300 text-[11px] md:text-xs font-bold uppercase tracking-widest mb-6 shadow-sm">
            Fútbol & Negocios Digitales
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black mb-8 tracking-tighter leading-tight text-white">
            Paraguay vs USA: hora en Paraguay y qué pueden aprender las empresas paraguayas
          </h1>

          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-xl mx-auto w-full max-w-2xl text-left sm:text-center mt-4">
            <div>
              <p className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-1">El Partido</p>
              <p className="text-white text-xl font-bold">USA vs Paraguay</p>
            </div>
            <div className="hidden sm:block w-px h-12 bg-slate-800"></div>
            <div>
              <p className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-1">Fecha & Hora</p>
              <p className="text-emerald-400 text-xl font-bold">Viernes 12 Jun • 22:00 (PY)</p>
            </div>
            <div className="hidden sm:block w-px h-12 bg-slate-800"></div>
            <div>
              <p className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-1">Sede</p>
              <p className="text-white text-xl font-bold">Los Angeles (Grupo D)</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BLOQUE EDITORIAL & PARA QUIÉN ES */}
      <section className="py-16 relative z-10 px-6">
        <div className="max-w-3xl mx-auto space-y-8 text-lg text-slate-300 leading-relaxed">
          <p>
            Paraguay vuelve a estar frente a una vidriera internacional. Más allá de la expectativa deportiva por el enfrentamiento <strong>Paraguay vs USA el viernes 12 de junio de 2026 a las 22:00 hora Paraguay</strong> en Los Angeles, este tipo de eventos expone algo fundamental: el mundo mira, compara, busca, compra y descubre países, marcas y empresas.
          </p>
          <p>
            Mientras la Albirroja se prepara para competir en la cancha en este Mundial 2026, la pregunta para el sector privado es otra: <em>¿tu empresa paraguaya está preparada para ser encontrada, entendida y contactada por clientes de mercados más grandes como Estados Unidos?</em>
          </p>
          
          <div className="bg-blue-900/10 border border-blue-500/20 rounded-2xl p-6 md:p-8 mt-8">
            <h3 className="text-xl font-bold text-white mb-4">¿Para quién es esta página?</h3>
            <p className="text-base text-slate-300">
              Esta página es para empresarios, profesionales y equipos comerciales paraguayos que están mirando el Mundial como una oportunidad para pensar más grande: vender mejor, responder más rápido, automatizar cotizaciones y preparar su negocio para captar clientes fuera de Paraguay.
            </p>
          </div>
        </div>
      </section>

      {/* 3. BLOQUE AYCWEB */}
      <section className="py-16 relative z-10 bg-[#04050a] border-y border-white/[0.05] px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-black text-white mb-6 leading-tight">
            Competir en otra liga: el salto digital
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed mb-10">
            Exportar talento, servicios o productos desde Paraguay requiere más que voluntad. Requiere <strong>infraestructura digital</strong>. Un cliente corporativo en USA, Europa o incluso en la región no perdona demoras en cotizaciones, páginas web caídas ni procesos confusos por WhatsApp.
          </p>

          {/* 4. CHECKLIST */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-bold text-white mb-6">
              ¿Tu empresa está lista para competir digitalmente?
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-blue-500 mt-1">✔</span>
                <span className="text-slate-300"><strong>Web clara y de carga rápida:</strong> ¿Alguien que no te conoce entiende qué vendés en 5 segundos?</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 mt-1">✔</span>
                <span className="text-slate-300"><strong>WhatsApp conectado:</strong> ¿Es un caos de mensajes o parte de una estrategia comercial medible?</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 mt-1">✔</span>
                <span className="text-slate-300"><strong>Cotizador automático:</strong> ¿Podés cotizar a las 2 AM cuando un prospecto de otra zona horaria te visita?</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 mt-1">✔</span>
                <span className="text-slate-300"><strong>CRM o registro de leads:</strong> ¿Tenés control de quién preguntó qué, o todo depende de la memoria de un vendedor?</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 mt-1">✔</span>
                <span className="text-slate-300"><strong>Confianza digital:</strong> ¿Tu negocio proyecta la solidez necesaria para cerrar contratos internacionales?</span>
              </li>
            </ul>
            
            <div className="mt-8">
              <Link
                href="#test-digital"
                data-event="click_paraguay_usa_test"
                className="inline-flex items-center gap-2 text-blue-400 font-bold hover:text-blue-300 transition-colors"
              >
                Evaluar mi empresa en 2 minutos <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. MINI TEST VISUAL */}
      <section id="test-digital" className="py-20 relative z-10 px-6 text-center scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-xs font-bold uppercase tracking-widest mb-6">
            Autoevaluación
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
            Test de Preparación Digital <br className="hidden md:block"/> Paraguay → Mundo
          </h2>
          <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto">
            Marcá mentalmente cuántas de estas afirmaciones cumple tu empresa hoy.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 text-left mb-16">
            {[
              "1. Mi empresa tiene una web activa y profesional.",
              "2. La página carga rápido en celulares.",
              "3. WhatsApp Business está configurado para respuestas rápidas.",
              "4. Ofrecemos cotización automática o formulario directo.",
              "5. Nuestra propuesta de valor se entiende en 5 segundos.",
              "6. Podemos captar leads y vender fuera de Paraguay.",
              "7. Contamos con una versión en inglés o neutro internacional."
            ].map((pregunta, idx) => (
              <div key={idx} className="bg-slate-900/60 p-5 rounded-2xl border border-slate-800 flex items-start gap-3">
                <div className="w-5 h-5 rounded border border-slate-600 flex-shrink-0 mt-0.5 bg-slate-950"></div>
                <p className="text-slate-300 text-sm font-medium leading-relaxed">{pregunta}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-blue-900/20 to-slate-900 border border-blue-500/20 rounded-2xl p-8 max-w-2xl mx-auto mb-12">
            <h3 className="text-xl font-bold text-white mb-3">Resultados del Test</h3>
            <p className="text-slate-400 mb-4">
              Si marcaste de <strong>0 a 3</strong>, tu operación está en <strong className="text-slate-300">Nivel Local</strong> y perdiendo oportunidades. 
              Si marcaste de <strong>4 a 5</strong>, estás en <strong className="text-slate-300">Nivel Regional</strong>. 
              Si marcaste <strong>6 o 7</strong>, tu empresa proyecta un <strong className="text-emerald-400">Nivel Internacional</strong> competitivo.
            </p>
          </div>

          {/* 6. CTA */}
          <div className="flex flex-col items-center justify-center">
            <Link
              href={`/${lang}/diagnostico-comercial`}
              data-event="click_paraguay_usa_diagnostico"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-full transition-all shadow-[0_0_30px_rgba(37,99,235,0.35)] text-base md:text-lg w-full sm:w-auto text-center"
            >
              Solicitar diagnóstico digital para mi empresa
            </Link>
            <p className="text-slate-500 text-xs mt-4">Sesión estratégica de 5 minutos, sin compromiso.</p>
          </div>
        </div>
      </section>

      {/* 7. ENLACES INTERNOS & FAQs (Optimizado para SEO) */}
      <section className="py-20 relative z-10 bg-[#04050a] border-t border-white/[0.05] px-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-16 prose prose-invert max-w-none text-slate-400">
            <h3 className="text-xl font-bold text-white mb-4">Explorá cómo podemos ayudarte</h3>
            <p>
              En <Link href={`/${lang}`} className="text-blue-400 hover:underline">AYCweb</Link> construimos <Link href={`/${lang}/servicios`} className="text-blue-400 hover:underline">infraestructura digital B2B</Link> para empresas paraguayas. Desde <Link href={`/${lang}/casos`} className="text-blue-400 hover:underline">sistemas digitales para operaciones</Link> complejas hasta portafolios interactivos. Mirá nuestros <Link href={`/${lang}/obras`} className="text-blue-400 hover:underline">casos reales de automatización</Link> y descubrí cómo transformar tu negocio. Podés empezar hoy mismo con nuestro <Link href={`/${lang}/diagnostico-comercial`} className="text-blue-400 hover:underline">diagnóstico comercial para empresas paraguayas</Link>.
            </p>
          </div>

          <h2 className="text-2xl md:text-3xl font-black text-white mb-10 text-center">
            Preguntas Frecuentes
          </h2>
          
          <div className="space-y-6">
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-2">¿A qué hora juega Paraguay vs USA en Paraguay?</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Paraguay vs USA está programado para el viernes 12 de junio de 2026 a las 22:00 hora de Asunción.</p>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-2">¿Dónde se juega USA vs Paraguay?</h3>
              <p className="text-slate-400 text-sm leading-relaxed">El partido se juega en Los Angeles Stadium, en Estados Unidos, correspondiente al Grupo D.</p>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-2">¿Qué puede aprender una empresa paraguaya de un evento global como Paraguay vs USA?</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Que competir afuera exige preparación, posicionamiento, velocidad de respuesta, confianza digital y sistemas comerciales claros. Las oportunidades internacionales existen, pero requieren infraestructura.</p>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-2">¿Cómo puede una empresa paraguaya captar clientes de Estados Unidos u otros países?</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Con una web clara, una propuesta bilingüe o con neutro internacional, WhatsApp bien integrado a un sistema de ventas, automatización de cotizaciones, CRM para seguimiento y una estrategia de contenido SEO orientado a búsquedas reales en el mercado objetivo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Componente social opcional para dar cierre */}
      <FranjaClientes palette="neutral" />

      {/* DISCLAIMER LEGAL */}
      <footer className="py-8 bg-slate-950 border-t border-slate-900 px-6 text-center text-slate-600 text-xs">
        <div className="max-w-4xl mx-auto">
          <p>
            AYCweb no está afiliado, patrocinado ni asociado oficialmente con FIFA, la Copa Mundial ni las selecciones mencionadas. Esta página tiene fines informativos y editoriales.
          </p>
        </div>
      </footer>
    </div>
  );
}
