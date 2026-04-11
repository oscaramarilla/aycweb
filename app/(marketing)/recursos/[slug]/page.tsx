import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articulos, getArticuloBySlug, Articulo } from "@/lib/data/articulos";

// ── Static params para SSG ──────────────────────────────────────────────────
export async function generateStaticParams() {
  return articulos.map((a: Articulo) => ({ slug: a.slug }));
}

// ── Metadata dinámica ───────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const articulo = getArticuloBySlug(slug);
  if (!articulo) return { title: "Artículo no encontrado | AYCweb" };

  return {
    title: `${articulo.titulo} | AYCweb`,
    description: articulo.descripcion,
    openGraph: {
      title: articulo.titulo,
      description: articulo.descripcion,
      type: "article",
      publishedTime: articulo.fechaPublicacion,
      authors: [articulo.autor],
    },
  };
}

// ── Color map ───────────────────────────────────────────────────────────────
const colorMap: Record<string, { badge: string; dot: string; heading: string; divider: string }> = {
  emerald: {
    badge: "bg-emerald-950/40 border-emerald-900/50 text-emerald-400",
    dot: "bg-emerald-500",
    heading: "text-emerald-400",
    divider: "bg-emerald-500/30",
  },
  purple: {
    badge: "bg-purple-950/40 border-purple-900/50 text-purple-400",
    dot: "bg-purple-500",
    heading: "text-purple-400",
    divider: "bg-purple-500/30",
  },
  blue: {
    badge: "bg-blue-950/40 border-blue-900/50 text-blue-400",
    dot: "bg-blue-500",
    heading: "text-blue-400",
    divider: "bg-blue-500/30",
  },
};

// ── Renderer de Markdown simplificado ──────────────────────────────────────
// Convierte el markdown del contenido en JSX sin dependencias externas.
function render(raw: string, accentColor: string): React.ReactNode[] {
  const lines = raw.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // H2
    if (line.startsWith("## ")) {
      elements.push(
        <h2
          key={i}
          className={`text-2xl md:text-3xl font-black text-white mt-12 mb-4 leading-tight ${accentColor}`}
        >
          {line.replace("## ", "")}
        </h2>
      );
      i++;
      continue;
    }

    // H3
    if (line.startsWith("### ")) {
      elements.push(
        <h3
          key={i}
          className="text-lg md:text-xl font-black text-zinc-200 mt-8 mb-3 leading-snug"
        >
          {line.replace("### ", "")}
        </h3>
      );
      i++;
      continue;
    }

    // Unordered list item
    if (line.startsWith("- ")) {
      const listItems: string[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        listItems.push(lines[i].replace("- ", ""));
        i++;
      }
      elements.push(
        <ul key={`ul-${i}`} className="space-y-2 my-4 pl-1">
          {listItems.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-zinc-400 leading-relaxed">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-zinc-600 flex-shrink-0" />
              <span dangerouslySetInnerHTML={{ __html: parseBold(item) }} />
            </li>
          ))}
        </ul>
      );
      continue;
    }

    // Numbered list item
    if (/^\d+\. /.test(line)) {
      const listItems: string[] = [];
      while (i < lines.length && /^\d+\. /.test(lines[i])) {
        listItems.push(lines[i].replace(/^\d+\. /, ""));
        i++;
      }
      elements.push(
        <ol key={`ol-${i}`} className="space-y-3 my-4 pl-1 counter-reset-list">
          {listItems.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-zinc-400 leading-relaxed">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-400 text-xs font-bold flex items-center justify-center mt-0.5">
                {idx + 1}
              </span>
              <span dangerouslySetInnerHTML={{ __html: parseBold(item) }} />
            </li>
          ))}
        </ol>
      );
      continue;
    }

    // Checkmark lines (✓ or ✗)
    if (line.startsWith("✓") || line.startsWith("✗")) {
      const checkItems: string[] = [];
      while (i < lines.length && (lines[i].startsWith("✓") || lines[i].startsWith("✗"))) {
        checkItems.push(lines[i]);
        i++;
      }
      elements.push(
        <ul key={`check-${i}`} className="space-y-2 my-4">
          {checkItems.map((item, idx) => {
            const isCheck = item.startsWith("✓");
            return (
              <li key={idx} className="flex items-start gap-3 leading-relaxed">
                <span className={`flex-shrink-0 font-bold text-base ${isCheck ? "text-emerald-400" : "text-red-400"}`}>
                  {isCheck ? "✓" : "✗"}
                </span>
                <span className="text-zinc-400" dangerouslySetInnerHTML={{ __html: parseBold(item.slice(2)) }} />
              </li>
            );
          })}
        </ul>
      );
      continue;
    }

    // Empty line
    if (line.trim() === "") {
      i++;
      continue;
    }

    // Regular paragraph (with bold parsing)
    elements.push(
      <p
        key={i}
        className="text-zinc-400 leading-[1.85] text-base md:text-[17px] my-4"
        dangerouslySetInnerHTML={{ __html: parseBold(line) }}
      />
    );
    i++;
  }

  return elements;
}

// Convierte **texto** en <strong>
function parseBold(text: string): string {
  return text.replace(/\*\*(.+?)\*\*/g, '<strong class="text-zinc-200 font-bold">$1</strong>');
}

// ── Page Component ──────────────────────────────────────────────────────────
export default async function ArticuloPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const articulo = getArticuloBySlug(slug);

  if (!articulo) notFound();

  const colors = colorMap[articulo.categoriaColor] ?? colorMap.blue;

  // Artículos relacionados (los otros 2)
  const relacionados = articulos.filter((a: Articulo) => a.slug !== articulo.slug);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans">

      {/* ── HERO DEL ARTÍCULO ── */}
      <section className="relative pt-16 pb-14 md:pt-24 md:pb-20 px-6 border-b border-zinc-900 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-blue-600/6 rounded-full blur-[120px] pointer-events-none -z-10" />

        <div className="max-w-3xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-zinc-600 mb-8 font-medium">
            <Link href="/" className="hover:text-zinc-400 transition-colors">
              Inicio
            </Link>
            <span>/</span>
            <Link href="/recursos" className="hover:text-zinc-400 transition-colors">
              Recursos
            </Link>
            <span>/</span>
            <span className="text-zinc-500 truncate max-w-[200px]">{articulo.titulo}</span>
          </nav>

          {/* Categoría */}
          <div className="mb-6">
            <span
              className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[10px] font-bold uppercase tracking-widest ${colors.badge}`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${colors.dot}`} />
              {articulo.categoria}
            </span>
          </div>

          {/* Título */}
          <h1 className="text-3xl md:text-5xl font-black text-white leading-[1.1] tracking-tight mb-6">
            {articulo.titulo}
          </h1>

          {/* Descripción / bajada */}
          <p className="text-zinc-400 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
            {articulo.descripcion}
          </p>

          {/* Meta del artículo */}
          <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-zinc-900">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-sm font-black text-zinc-300">
                OA
              </div>
              <div>
                <p className="text-zinc-300 text-sm font-bold leading-none mb-0.5">
                  {articulo.autor}
                </p>
                <p className="text-zinc-600 text-xs">AYCweb — Ingeniería Comercial</p>
              </div>
            </div>
            <div className={`h-4 w-px ${colors.divider} hidden sm:block`} />
            <span className="text-zinc-500 text-sm">{articulo.fechaPublicacion}</span>
            <div className={`h-4 w-px ${colors.divider} hidden sm:block`} />
            <span className="text-zinc-500 text-sm bg-zinc-900 border border-zinc-800 px-3 py-1 rounded-lg">
              {articulo.tiempoLectura}
            </span>
          </div>
        </div>
      </section>

      {/* ── CUERPO DEL ARTÍCULO ── */}
      <article className="px-6 py-14 md:py-20">
        <div className="max-w-3xl mx-auto">
          {/* Línea decorativa de inicio */}
          <div className={`w-12 h-1 rounded-full ${colors.dot} mb-10 opacity-60`} />

          {/* Contenido renderizado */}
          <div className="prose-custom">
            {render(articulo.contenido, colors.heading)}
          </div>

          {/* Separador final */}
          <div className="mt-16 pt-10 border-t border-zinc-900">
            <p className="text-zinc-600 text-xs font-bold uppercase tracking-widest mb-2">
              Escrito por
            </p>
            <p className="text-zinc-300 font-bold">{articulo.autor}</p>
            <p className="text-zinc-500 text-sm mt-1">
              Arquitecto de Infraestructura Digital B2B · AYCweb Paraguay
            </p>
          </div>
        </div>
      </article>

      {/* ── CTA INLINE ── */}
      <section className="px-6 pb-16">
        <div className="max-w-3xl mx-auto">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 md:p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 rounded-full blur-[80px] pointer-events-none" />
            <div className="relative z-10">
              <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-3">
                ¿Esto aplica a tu empresa?
              </p>
              <h3 className="text-2xl md:text-3xl font-black text-white mb-4 leading-tight">
                Diagnosticamos tu operación <br className="hidden md:block" />
                en 30 minutos, sin costo.
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-7 max-w-lg">
                Te decimos exactamente qué sistema construir primero, cuánto
                tiempo tarda y cuál es el ROI esperado para tu industria
                específica.
              </p>
              <a
                href="https://wa.me/595985864209?text=Hola%20Oscar%2C%20le%C3%AD%20un%20art%C3%ADculo%20en%20AYCweb%20y%20quiero%20un%20diagn%C3%B3stico%20de%20mi%20operaci%C3%B3n."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-black py-3.5 px-8 rounded-xl transition-all shadow-[0_0_25px_rgba(37,99,235,0.35)] active:scale-95"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                </svg>
                Agendar Diagnóstico por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── ARTÍCULOS RELACIONADOS ── */}
      <section className="px-6 pb-20 border-t border-zinc-900 pt-16">
        <div className="max-w-3xl mx-auto">
          <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-8">
            Seguir leyendo
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {relacionados.map((rel) => {
              const relColors = colorMap[rel.categoriaColor] ?? colorMap.blue;
              return (
                <Link
                  key={rel.slug}
                  href={`/recursos/${rel.slug}`}
                  className="group bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 hover:bg-zinc-900 transition-all duration-200"
                >
                  <span
                    className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border text-[9px] font-bold uppercase tracking-widest mb-3 ${relColors.badge}`}
                  >
                    <span className={`w-1 h-1 rounded-full ${relColors.dot}`} />
                    {rel.categoria}
                  </span>
                  <h4 className={`text-sm font-black text-white leading-snug group-hover:${relColors.heading.replace("text-", "text-")} transition-colors`}>
                    {rel.titulo}
                  </h4>
                  <p className="text-zinc-600 text-xs mt-2">{rel.tiempoLectura}</p>
                </Link>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/recursos"
              className="inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-300 text-sm font-bold transition-colors"
            >
              ← Volver a todos los recursos
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
