import { Metadata } from "next";
import Link from "next/link";
import { articulos, Articulo } from "@/lib/data/articulos";

export const metadata: Metadata = {
  title: "Recursos e Ingeniería Comercial | AYCweb",
  description:
    "Biblioteca de autoridad B2B para dueños de empresas. Artículos técnicos sobre automatización comercial, sistemas operativos y digitalización industrial en Paraguay.",
  keywords: [
    "automatización comercial paraguay",
    "sistemas B2B paraguay",
    "digitalización industrial",
    "cotizadores automáticos",
    "ingeniería comercial",
  ],
  openGraph: {
    title: "Recursos e Ingeniería Comercial | AYCweb",
    description:
      "Artículos técnicos para dueños de empresas que quieren dejar de operar en modo manual.",
    type: "website",
  },
};

const colorMap: Record<string, { badge: string; dot: string; hover: string }> = {
  emerald: {
    badge: "bg-emerald-950/40 border-emerald-900/50 text-emerald-400",
    dot: "bg-emerald-500",
    hover: "group-hover:text-emerald-400",
  },
  purple: {
    badge: "bg-purple-950/40 border-purple-900/50 text-purple-400",
    dot: "bg-purple-500",
    hover: "group-hover:text-purple-400",
  },
  blue: {
    badge: "bg-blue-950/40 border-blue-900/50 text-blue-400",
    dot: "bg-blue-500",
    hover: "group-hover:text-blue-400",
  },
};

export default function RecursosPage() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 text-zinc-50 font-sans">

      {/* ── HERO ── */}
      <section className="relative pt-20 pb-20 md:pt-32 md:pb-28 px-6 text-center overflow-hidden border-b border-zinc-900">
        {/* Ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-blue-600/8 rounded-full blur-[140px] pointer-events-none -z-10" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[300px] bg-emerald-600/5 rounded-full blur-[100px] pointer-events-none -z-10" />

        <div className="max-w-4xl mx-auto relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-zinc-900 text-zinc-400 text-xs font-bold uppercase tracking-widest border border-zinc-800 mb-6">
            Biblioteca de Autoridad B2B
          </span>

          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter leading-[1.05] text-white">
            Recursos e{" "}
            <span className="text-blue-500">Ingeniería Comercial</span>
          </h1>

          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-8">
            Artículos técnicos para dueños de empresas que quieren entender
            exactamente qué sistemas necesitan, cuándo los necesitan y por qué
            el orden importa más que el presupuesto.
          </p>

          <div className="flex flex-wrap justify-center gap-3 text-xs font-semibold text-zinc-500">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
              Automatización Comercial
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500 inline-block" />
              Sector Salud
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 inline-block" />
              Industria &amp; Tecnología
            </span>
          </div>
        </div>
      </section>

      {/* ── GRID DE ARTÍCULOS ── */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">

          {/* Contador */}
          <div className="flex items-center justify-between mb-10">
            <p className="text-zinc-500 text-sm font-medium">
              {articulos.length} artículos publicados
            </p>
            <div className="h-px flex-1 bg-zinc-900 mx-6" />
            <span className="text-zinc-600 text-xs uppercase tracking-widest font-bold">
              Más recientes primero
            </span>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articulos.map((articulo: Articulo) => {
              const colors = colorMap[articulo.categoriaColor] ?? colorMap.blue;
              return (
                <Link
                  key={articulo.slug}
                  href={`/recursos/${articulo.slug}`}
                  className="group flex flex-col bg-zinc-900/50 border border-zinc-800 rounded-2xl p-7 hover:border-zinc-700 hover:bg-zinc-900 transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,0,0,0.5)] hover:-translate-y-1"
                >
                  {/* Categoría badge */}
                  <div className="mb-5">
                    <span
                      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[10px] font-bold uppercase tracking-widest ${colors.badge}`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${colors.dot}`} />
                      {articulo.categoria}
                    </span>
                  </div>

                  {/* Título */}
                  <h2
                    className={`text-lg font-black text-white leading-snug mb-3 transition-colors duration-200 ${colors.hover} flex-1`}
                  >
                    {articulo.titulo}
                  </h2>

                  {/* Descripción */}
                  <p className="text-zinc-500 text-sm leading-relaxed mb-6 line-clamp-3">
                    {articulo.descripcion}
                  </p>

                  {/* Footer de la card */}
                  <div className="flex items-center justify-between pt-5 border-t border-zinc-800 mt-auto">
                    <div className="flex flex-col gap-0.5">
                      <span className="text-zinc-400 text-xs font-semibold">
                        {articulo.autor}
                      </span>
                      <span className="text-zinc-600 text-xs">
                        {articulo.fechaPublicacion}
                      </span>
                    </div>
                    <span className="text-zinc-600 text-xs font-medium bg-zinc-800 px-2.5 py-1 rounded-lg">
                      {articulo.tiempoLectura}
                    </span>
                  </div>

                  {/* Arrow indicator */}
                  <div className="mt-4 flex items-center gap-1.5 text-zinc-600 group-hover:text-zinc-300 transition-colors text-xs font-bold uppercase tracking-widest">
                    Leer artículo
                    <svg
                      className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA INFERIOR ── */}
      <section className="py-20 px-6 bg-black border-t border-zinc-900 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 to-black pointer-events-none" />
        <div className="max-w-3xl mx-auto relative z-10">
          <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-4">
            ¿Leíste suficiente?
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-5 leading-tight">
            Pasá de leer sobre sistemas <br className="hidden md:block" />
            a tener uno funcionando.
          </h2>
          <p className="text-zinc-400 text-base mb-8 max-w-xl mx-auto leading-relaxed">
            Diagnosticamos tu operación en 30 minutos y te decimos exactamente
            qué construir primero para que el ROI sea inmediato.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://wa.me/595985864209?text=Hola%20Oscar%2C%20le%C3%AD%20los%20recursos%20de%20AYCweb%20y%20quiero%20un%20diagn%C3%B3stico%20de%20mi%20operaci%C3%B3n."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-500 text-white font-black py-4 px-10 rounded-xl transition-all shadow-[0_0_30px_rgba(37,99,235,0.35)] active:scale-95"
            >
              Agendar Diagnóstico Gratuito
            </a>
            <Link
              href="/casos"
              className="bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-white font-bold py-4 px-10 rounded-xl transition-all"
            >
              Ver Casos de Estudio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
