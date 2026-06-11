import type { Metadata } from "next";
import { AYCWEB_CONTACT } from "@/lib/config/contact";
import CalculadoraKwh from "@/components/invertir/CalculadoraKwh";
import FormularioLead from "@/components/invertir/FormularioLead";

export const metadata: Metadata = {
  title: "Invertir en Paraguay 2026: energía, agroindustria y logística | AYCweb",
  description:
    "Grado de inversión (Moody's y S&P), energía >99% renovable con excedente " +
    "y corredor bioceánico en marcha. Dossier por sector y conexión con " +
    "operadores locales en Paraguay.",
  alternates: {
    canonical: "https://www.aycweb.com/invertir-en-paraguay",
  },
  openGraph: {
    title: "Invertir en Paraguay: la tesis, los datos y la red local",
    description:
      "Energía >99% renovable, grado de inversión y corredor bioceánico. " +
      "Inteligencia de inversión firmada por AYCweb.",
    type: "website",
    locale: "es_PY",
    url: "https://www.aycweb.com/invertir-en-paraguay",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "AYCweb",
      url: "https://www.aycweb.com",
      founder: { "@type": "Person", name: "Oscar Amarilla" },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Asunción",
        addressCountry: "PY",
      },
      areaServed: "PY",
      taxID: "4499507-5",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Esto es asesoramiento financiero o una oferta de inversión?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Es inteligencia comercial y conexión con operadores. No vendemos valores, no gestionamos fondos de terceros ni recomendamos instrumentos.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué incluye el dossier?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Datos verificados con sus fuentes, marco regulatorio introductorio, costos de referencia y mapa de actores del sector elegido.",
          },
        },
        {
          "@type": "Question",
          name: "¿Trabajan con inversores y empresas del exterior?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. Te orientamos sobre los pasos de constitución, banca y operación local, y sobre los profesionales que vas a necesitar en cada etapa.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cuánto cuesta?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "El dossier y la primera llamada, nada. Acompañamiento, representación e infraestructura digital se cotizan por alcance.",
          },
        },
        {
          "@type": "Question",
          name: "¿Por qué AYCweb y no una consultora tradicional?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Porque operamos en el terreno: construimos los sistemas comerciales de empresas paraguayas reales y venimos del lado operativo — logística, manufactura, compras — no solo del informe.",
          },
        },
      ],
    },
  ],
};

const WA_NUMBER = AYCWEB_CONTACT.whatsappNumber;
const WA_DOSSIER = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
  AYCWEB_CONTACT.clientMessages?.invertirParaguay?.whatsapp ??
    AYCWEB_CONTACT.globalMessages.generalInquiry
)}`;
const WA_LLAMADA = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
  AYCWEB_CONTACT.clientMessages?.invertirParaguay?.llamada ??
    AYCWEB_CONTACT.globalMessages.diagnosis
)}`;

const EJES = [
  {
    id: "energia",
    emoji: "⚡",
    kicker: "Eje 1 · Energía + Industrialización",
    titulo: "Energía que sobra, industria que falta",
    cuerpo:
      "8.760 MW de capacidad instalada contra un pico de demanda de ~5.000 MW. Generación >99,9% renovable y un mercado eléctrico recién abierto a privados (Decreto 6034/2026, licitaciones previstas de 800 MW/año). El destino natural del excedente: data centers, industrias electrointensivas, hidrógeno y manufactura descarbonizada.",
    items: [
      "Data centers y cómputo de alto consumo",
      "Electrointensivas (acero, aluminio, fertilizantes)",
      "Hidrógeno verde y derivados",
      "Manufactura para reshoring regional",
    ],
    badge: "amber",
    hasCalc: true,
  },
  {
    id: "agroindustria",
    emoji: "🌽",
    kicker: "Eje 2 · Agroindustria",
    titulo: "No vender granos: procesarlos",
    cuerpo:
      "Cada kilo transformado multiplica el valor exportable. Proteínas vegetales, balanceados, aceites premium y biocombustibles — con energía barata como insumo estructural que ningún competidor regional puede replicar.",
    items: [
      "Procesamiento de soja y oleaginosas",
      "Plantas de balanceados y proteína vegetal",
      "Genética animal y frío industrial",
      "Biocombustibles y exportación premium",
    ],
    badge: "green",
    hasCalc: false,
  },
  {
    id: "tecnologia",
    emoji: "🧠",
    kicker: "Eje 3 · Tecnología + Infraestructura Digital",
    titulo: "El país está subdigitalizado — y eso es la oportunidad",
    cuerpo:
      "La mayoría de las empresas paraguayas opera ventas en Excel y WhatsApp manual. El retorno marginal de cada guaraní invertido en digitalización comercial es alto precisamente por eso. Es el eje donde AYCweb opera todos los días.",
    items: [
      "SaaS B2B para industria y salud",
      "Fintech y automatización de pagos",
      "IA aplicada a logística y producción",
      "Motores cotizadores y CRM a medida",
    ],
    badge: "blue",
    hasCalc: false,
  },
  {
    id: "logistica",
    emoji: "🚢",
    kicker: "Eje 4 · Logística + Corredor Bioceánico",
    titulo: "El atajo de 8.000 km se abre este año",
    cuerpo:
      "El puente Carmelo Peralta–Puerto Murtinho (~1.294 m) une sus extremos en junio de 2026 y el Corredor Bioceánico de Capricornio (~2.000 km) apunta a inaugurarse en el segundo semestre. Para cargas hacia Asia, recorta cerca de 8.000 km frente a las rutas atlánticas.",
    items: [
      "Parques logísticos y puertos secos",
      "Almacenamiento en frío sobre el corredor",
      "Transporte y servicios al corredor",
      "Chaco: de periferia a nodo",
    ],
    badge: "emerald",
    hasCalc: false,
  },
  {
    id: "real_estate",
    emoji: "🏭",
    kicker: "Eje 5 · Real Estate Productivo",
    titulo: "No residencial: productivo",
    cuerpo:
      "Galpones, depósitos, parques industriales y centros de distribución — la infraestructura física que los otros cuatro ejes van a demandar. El régimen de maquila (tributo único del 1% sobre valor agregado en territorio nacional) hace que cada metro cuadrado industrial tenga un inquilino natural.",
    items: [
      "Galpones para maquila (tributo 1%)",
      "Parques industriales y zonas francas",
      "Depósitos sobre el corredor bioceánico",
      "Build-to-suit para industria y logística",
    ],
    badge: "amber",
    hasCalc: false,
  },
];

const PASOS = [
  {
    n: "1",
    t: "Pedís el dossier de tu sector",
    d: "Documento con datos verificados y sus fuentes, marco regulatorio introductorio y mapa de actores. Sin costo.",
  },
  {
    n: "2",
    t: "Llamada estratégica de 30 minutos",
    d: "Entendemos objetivo, capital y horizonte. Te decimos con honestidad si Paraguay encaja con tu plan.",
  },
  {
    n: "3",
    t: "Conexión y aterrizaje",
    d: "Introducciones con operadores locales verificados y la infraestructura digital de tu operación — construida por AYCweb.",
  },
];

const FAQ = [
  {
    q: "¿Esto es asesoramiento financiero o una oferta de inversión?",
    a: "No. Es inteligencia comercial y conexión con operadores. No vendemos valores, no gestionamos fondos de terceros ni recomendamos instrumentos.",
  },
  {
    q: "¿Qué incluye el dossier?",
    a: "Datos verificados con sus fuentes, marco regulatorio introductorio, costos de referencia y mapa de actores del sector elegido.",
  },
  {
    q: "¿Trabajan con inversores y empresas del exterior?",
    a: "Sí. Te orientamos sobre los pasos de constitución, banca y operación local, y sobre los profesionales que vas a necesitar en cada etapa.",
  },
  {
    q: "¿Cuánto cuesta?",
    a: "El dossier y la primera llamada, nada. Acompañamiento, representación e infraestructura digital se cotizan por alcance.",
  },
  {
    q: "¿Por qué AYCweb y no una consultora tradicional?",
    a: "Porque operamos en el terreno: construimos los sistemas comerciales de empresas paraguayas reales y venimos del lado operativo — logística, manufactura, compras — no solo del informe.",
  },
];

export default function InvertirEnParaguay() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-stone-950 text-stone-100">

        {/* ── HERO ── */}
        <section className="relative overflow-hidden border-b border-amber-500/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_-10%,rgba(245,158,11,0.18),transparent_40%),radial-gradient(circle_at_10%_80%,rgba(16,185,129,0.12),transparent_40%)]" />

          <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-amber-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-amber-400" />
              AYCweb · Inteligencia de inversión · Paraguay 2026
            </p>

            <h1 className="mb-6 max-w-4xl text-4xl font-black leading-[1.05] tracking-tighter text-white md:text-6xl">
              Invertir en Paraguay:{" "}
              <span className="text-amber-400">
                la tesis, los datos y la red local para ejecutarla
              </span>
            </h1>

            <p className="mb-10 max-w-3xl text-lg leading-8 text-stone-300">
              Energía &gt;99% renovable con excedente estructural, grado de
              inversión con dos calificadoras y un corredor bioceánico que se
              inaugura este año. Te damos el mapa verificado — y te conectamos
              con operadores industriales, logísticos y profesionales que ya
              trabajan en el país.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#formulario"
                className="inline-flex min-h-14 items-center justify-center rounded-xl bg-amber-400 px-8 py-3 text-base font-black uppercase tracking-wide text-stone-950 transition hover:bg-amber-300 active:scale-95"
              >
                Recibir dossier por sector →
              </a>
              <a
                href={WA_DOSSIER}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl border border-stone-700 bg-stone-900 px-8 py-3 text-base font-bold text-white transition hover:bg-stone-800"
              >
                Hablar por WhatsApp
              </a>
            </div>

            <p className="mt-4 text-xs text-stone-600">
              Sin costo. Sin spam. Respondemos en 24 h hábiles.
            </p>

            {/* Fichas de datos verificados */}
            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  v: ">99,9%",
                  l: "Generación renovable",
                  src: "ANDE · Congreso Nacional PY",
                },
                {
                  v: "8.760 MW",
                  l: "Capacidad instalada",
                  src: "ANDE / Infobae 2024",
                },
                {
                  v: "Moody's Baa3 + S&P BBB−",
                  l: "Grado de inversión",
                  src: "MEF · Bloomberg Línea dic-2025",
                },
                {
                  v: "Jun 2026",
                  l: "Puente bioceánico PY–BR",
                  src: "MOPC · Agencia IP · may-2026",
                },
              ].map((d) => (
                <div
                  key={d.l}
                  className="rounded-2xl border border-stone-800 bg-stone-900/60 p-5"
                >
                  <p className="text-2xl font-black text-amber-300">{d.v}</p>
                  <p className="mt-1 text-sm font-bold text-white">{d.l}</p>
                  <p className="mt-1 text-[10px] uppercase tracking-widest text-stone-600">
                    Fuente: {d.src}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── INTRO DE TESIS ── */}
        <section className="border-b border-stone-800 bg-stone-900/30">
          <div className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-emerald-300">
              Cinco ejes, un mismo motor
            </p>
            <p className="text-lg leading-9 text-stone-300">
              Paraguay genera más electricidad de la que consume y la cede a
              precio de descarte: en 2025 usó 25.768 GWh de los 36.439 GWh que
              le correspondían en Itaipú, y cedió el resto a ~US$ 15,7 por MWh
              cuando el precio regional ronda los US$ 100.{" "}
              <strong className="text-white">
                Cada eje de esta tesis es una forma distinta de capturar esa
                brecha.
              </strong>
            </p>
            <p className="mt-4 text-xs text-stone-600">
              Fuente: abc.com.py (ene-2026, ago-2025) · Datos verificados al 10-06-2026
            </p>
          </div>
        </section>

        {/* ── CINCO EJES ── */}
        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="space-y-16">
            {EJES.map((eje) => (
              <div key={eje.id} id={eje.id} className="scroll-mt-20">
                <div className="grid gap-8 lg:grid-cols-[1fr_0.55fr]">
                  <div>
                    <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-amber-300">
                      {eje.kicker}
                    </p>
                    <h2 className="mb-4 text-3xl font-black text-white md:text-4xl">
                      {eje.emoji} {eje.titulo}
                    </h2>
                    <p className="mb-6 text-base leading-8 text-stone-400">
                      {eje.cuerpo}
                    </p>
                    <ul className="space-y-2">
                      {eje.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-stone-300">
                          <span className="mt-0.5 font-black text-amber-400">▹</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-start">
                    <a
                      href="#formulario"
                      className="w-full rounded-2xl border border-amber-500/20 bg-amber-500/8 p-6 text-center transition hover:border-amber-400/40 hover:bg-amber-500/15"
                    >
                      <p className="mb-3 text-4xl">{eje.emoji}</p>
                      <p className="font-bold text-white">Pedir dossier de {eje.kicker.split("·")[1]?.trim() ?? "este sector"}</p>
                      <p className="mt-2 text-sm text-stone-500">Sin costo · Datos verificados</p>
                    </a>
                  </div>
                </div>

                {eje.hasCalc && (
                  <div className="mt-10">
                    <CalculadoraKwh />
                  </div>
                )}

                <hr className="mt-16 border-stone-800" />
              </div>
            ))}
          </div>
        </section>

        {/* ── CÓMO TRABAJAMOS ── */}
        <section className="border-y border-stone-800 bg-stone-900/30">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-amber-300">
              Del dato a la operación
            </p>
            <h2 className="mb-12 text-3xl font-black text-white md:text-4xl">
              3 pasos del mapa al terreno
            </h2>

            <div className="grid gap-6 sm:grid-cols-3">
              {PASOS.map((paso) => (
                <div
                  key={paso.n}
                  className="rounded-2xl border border-stone-800 bg-stone-950/60 p-6"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-amber-500/30 bg-amber-500/10 text-lg font-black text-amber-400">
                    {paso.n}
                  </div>
                  <h3 className="mb-2 font-bold text-white">{paso.t}</h3>
                  <p className="text-sm leading-7 text-stone-500">{paso.d}</p>
                </div>
              ))}
            </div>

            <p className="mt-8 text-sm text-stone-600">
              Las introducciones iniciales no tienen costo. El acompañamiento y
              la infraestructura digital se cotizan por alcance de proyecto.
            </p>
          </div>
        </section>

        {/* ── QUIÉN ESTÁ DETRÁS ── */}
        <section className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-emerald-300">
            Una firma que opera, no solo informa
          </p>
          <h2 className="mb-6 text-3xl font-black text-white md:text-4xl">
            ¿Quién está detrás de este hub?
          </h2>
          <div className="grid gap-8 lg:grid-cols-[1fr_0.6fr]">
            <div className="space-y-4 text-base leading-8 text-stone-300">
              <p>
                <strong className="text-white">AYCweb</strong> es una firma de
                infraestructura digital B2B con base en Asunción, fundada y
                operada por{" "}
                <strong className="text-white">Oscar Amarilla</strong>. Antes de
                escribir código, Oscar operó logística, manufactura y compras
                [CONFIRMAR: contratos y unidades entregadas]. Hoy AYCweb
                construye los sistemas comerciales de empresas industriales y de
                salud en Paraguay: motores cotizadores, automatización de ventas
                y paneles operativos.
              </p>
              <p>
                Esta página existe porque la pregunta que más recibimos de afuera
                es la misma:{" "}
                <em className="text-amber-300">
                  &ldquo;¿con quién hablo en Paraguay?&rdquo;
                </em>
                . Ahora tiene respuesta.
              </p>
            </div>
            <div className="space-y-3">
              {[
                { l: "WhatsApp directo", v: `wa.me/${WA_NUMBER}`, href: WA_LLAMADA },
                { l: "Email", v: "oscaramarillacaceres@gmail.com", href: "mailto:oscaramarillacaceres@gmail.com" },
                { l: "RUC", v: "4499507-5", href: null },
              ].map((d) => (
                <div
                  key={d.l}
                  className="rounded-xl border border-stone-800 bg-stone-900/60 p-4"
                >
                  <p className="text-xs uppercase tracking-widest text-stone-600">{d.l}</p>
                  {d.href ? (
                    <a href={d.href} target="_blank" rel="noopener noreferrer"
                      className="mt-1 block font-bold text-amber-400 hover:text-amber-300">
                      {d.v}
                    </a>
                  ) : (
                    <p className="mt-1 font-bold text-white">{d.v}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="border-y border-stone-800 bg-stone-900/30">
          <div className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-amber-300">
              Preguntas frecuentes
            </p>
            <h2 className="mb-10 text-3xl font-black text-white md:text-4xl">
              Lo que todo inversor debería saber antes de llamar
            </h2>
            <div className="grid gap-5 md:grid-cols-2">
              {FAQ.map((item) => (
                <div
                  key={item.q}
                  className="rounded-2xl border border-stone-800 bg-stone-950/60 p-6"
                >
                  <h3 className="mb-3 font-black text-white">{item.q}</h3>
                  <p className="text-sm leading-7 text-stone-400">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FORMULARIO ── */}
        <section id="formulario" className="scroll-mt-10 mx-auto max-w-3xl px-6 py-16 lg:px-8">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-amber-300">
            Acceso sin costo
          </p>
          <h2 className="mb-2 text-3xl font-black text-white md:text-4xl">
            Pedí tu dossier y agendá la llamada
          </h2>
          <p className="mb-10 text-stone-400">
            Completá el formulario. En 24 h hábiles te enviamos el dossier de tu
            sector y coordinamos la llamada estratégica de 30 minutos.
          </p>
          <FormularioLead />
        </section>

        {/* ── DISCLAIMER ── */}
        <section className="border-t border-stone-800 bg-stone-950">
          <div className="mx-auto max-w-5xl px-6 py-10 lg:px-8">
            <div className="rounded-2xl border border-stone-800 bg-stone-900/60 p-6">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-stone-500">
                Aviso legal · Datos al 10-06-2026
              </p>
              <p className="text-sm leading-7 text-stone-500">
                La información de esta página tiene fines educativos y
                estratégicos. No constituye asesoramiento financiero, legal ni
                tributario; no es una oferta pública de valores ni una
                recomendación personalizada de inversión. AYCweb no intermedia
                valores ni administra fondos de terceros. Toda decisión de
                inversión requiere verificación independiente y asesoría
                profesional propia. Cada cifra se acompaña de su fuente; los
                valores pueden variar con el tiempo.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
