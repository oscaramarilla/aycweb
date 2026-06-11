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
function render(raw: string, accentColor: string): React.ReactNode[] {
  const lines = raw.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // H2
    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={i} className={`text-2xl md:text-3xl font-black text-white mt-12 mb-4 leading-tight ${accentColor}`}>
          {line.replace("## ", "")}
        </h2>
      );
      i++; continue;
    }

    // H3
    if (line.startsWith("### ")) {
      elements.push(
        <h3 key={i} className="text-lg md:text-xl font-black text-slate-200 mt-8 mb-3 leading-snug">
          {line.replace("### ", "")}
        </h3>
      );
      i++; continue;
    }

    // Unordered list item
    if (line.startsWith("- ")) {
      const listItems: string[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        listItems.push(lines[i].replace("- ", ""));
        i++;
      }
      elements.push(
        <ul key={`ul-${i}`} className="space-y-2.5 my-4 pl-1">
          {listItems.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-slate-400 leading-relaxed text-[15px] md:text-base">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-slate-600 flex-shrink-0" />
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
            <li key={idx} className="flex items-start gap-3 text-slate-400 leading-relaxed text-[15px] md:text-base">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-bold flex items-center justify-center mt-0.5">
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
              <li key={idx} className="flex items-start gap-3 leading-relaxed text-[15px] md:text-base">
                <span className={`flex-shrink-0 font-bold text-base ${isCheck ? "text-emerald-400" : "text-red-400"}`}>
                  {isCheck ? "✓" : "✗"}
                </span>
                <span className="text-slate-400" dangerouslySetInnerHTML={{ __html: parseBold(item.slice(2)) }} />
              </li>
            );
          })}
        </ul>
      );
      continue;
    }

    // Empty line
    if (line.trim() === "") { i++; continue; }

    // Regular paragraph
    elements.push(
      <p key={i} className="text-slate-400 leading-relaxed text-[15px] md:text-base my-4" dangerouslySetInnerHTML={{ __html: parseBold(line) }} />
    );
    i++;
  }

  return elements;
}

// Convierte **texto** en <strong>
function parseBold(text: string): string {
  return text.replace(/\*\*(.+?)\*\*/g, '<strong class="text-slate-200 font-bold">$1</strong>');
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
  const relacionados = articulos.filter((a: Articulo) => a.slug !== articulo.slug);
  const whatsappNumber = "595985864209";

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans relative overflow-hidden">

      {/* ── HERO DEL ARTÍCULO ── */}
      <section className="relative pt-28 pb-12 md:pt-40 md:pb-16 px-6 border-b border-white/[0.05] z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none -z-10" />

        <div className="max-w-3xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-[11px] md:text-xs text-slate-500 mb-6 md:mb-8 font-medium uppercase tracking-widest">
            <Link href="/" className="hover:text-slate-300 transition-colors">Inicio</Link>
            <span>/</span>
            <Link href="/recursos" className="hover:text-slate-300 transition-colors">Recursos</Link>
            <span>/</span>
            <span className="text-slate-600 truncate max-w-[200px]">{articulo.titulo}</span>
          </nav>

          {/* Categoría */}
          <div className="mb-4 md:mb-6">
            <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-[10px] font-bold uppercase tracking-widest ${colors.badge}`}>
              <span className={`w-1.5 h-1.5 rounded-full ${colors.dot}`} />
              {articulo.categoria}
            </span>
          </div>

          {/* Título */}
          <h1 className="text-3xl md:text-5xl font-black text-white leading-[1.1] tracking-tight mb-4 md:mb-6">
            {articulo.titulo}
          </h1>

          {/* Descripción */}
          <p className="text-slate-400 text-base md:text-xl leading-relaxed mb-8 max-w-2xl">
            {articulo.descripcion}
          </p>

          {/* Meta del artículo */}
          <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-white/[0.05]">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-sm font-black text-slate-300">
                OA
              </div>
              <div>
                <p className="text-slate-200 text-sm font-bold leading-none mb-0.5">{articulo.autor}</p>
                <p className="text-slate-500 text-[11px] uppercase tracking-widest">AYCweb Firm</p>
              </div>
            </div>
            <div className={`h-4 w-px ${colors.divider} hidden sm:block`} />
            <span className="text-slate-400 text-[13px]">{articulo.fechaPublicacion}</span>
            <div className={`h-4 w-px ${colors.divider} hidden sm:block`} />
            <span className="text-slate-400 text-[11px] uppercase tracking-widest font-bold bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg shadow-sm">
              {articulo.tiempoLectura}
            </span>
          </div>
        </div>
      </section>

      {/* ── CUERPO DEL ARTÍCULO ── */}
      <article className="px-6 py-12 md:py-20 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className={`w-12 h-1 rounded-full ${colors.dot} mb-10 opacity-60`} />
          <div className="prose-custom">
            {render(articulo.contenido, colors.heading)}
          </div>
        </div>
      </article>

      {/* ── CTA INLINE (Alineado con el embudo) ── */}
      <section className="px-6 pb-16 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="bg-slate-900/60 border border-slate-800 rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-10 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 rounded-full blur-[80px] pointer-events-none" />
            <div className="relative z-10 text-center md:text-left flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <p className="text-slate-500 text-[11px] font-bold uppercase tracking-widest mb-2">
                  ¿Esto aplica a tu empresa?
                </p>
                <h3 className="text-2xl md:text-3xl font-black text-white mb-3 leading-tight">
                  Llevá esta teoría a la práctica.
                </h3>
                <p className="text-slate-400 text-[14px] md:text-sm leading-relaxed mb-0">
                  Agendá una auditoría sin costo. Evaluamos tu operación y te decimos exactamente cómo construir este sistema en tu negocio.
                </p>
              </div>
              <div className="w-full md:w-auto">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hola Oscar, leí un artículo en AYCweb y quiero auditar mi operación.")}`}
                  target="_blank" rel="noopener noreferrer"
                  className="inline-block w-full text-center bg-blue-600 hover:bg-blue-500 text-white font-black py-3.5 px-8 rounded-xl transition-all shadow-[0_0_25px_rgba(37,99,235,0.35)] active:scale-95 text-[14px]"
                >
                  Auditar mi operación
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ARTÍCULOS RELACIONADOS ── */}
      <section className="px-6 pb-20 border-t border-white/[0.05] pt-16 relative z-10 bg-[#04050a]">
        <div className="max-w-3xl mx-auto">
          <p className="text-slate-500 text-[11px] font-bold uppercase tracking-widest mb-6">
            Otras lecturas operativas
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {relacionados.map((rel) => {
              const relColors = colorMap[rel.categoriaColor] ?? colorMap.blue;
              return (
                <Link
                  key={rel.slug}
                  href={`/recursos/${rel.slug}`}
                  className="group bg-slate-900/50 border border-slate-800 rounded-[1.5rem] p-6 hover:border-slate-600 transition-all duration-200"
                >
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border text-[9px] font-bold uppercase tracking-widest mb-4 ${relColors.badge}`}>
                    <span className={`w-1 h-1 rounded-full ${relColors.dot}`} />
                    {rel.categoria}
                  </span>
                  <h4 className={`text-[15px] md:text-base font-black text-white leading-snug group-hover:${relColors.heading.replace("text-", "text-")} transition-colors mb-2`}>
                    {rel.titulo}
                  </h4>
                  <p className="text-slate-500 text-[11px] font-mono">{rel.tiempoLectura}</p>
                </Link>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <Link href="/recursos" className="inline-flex items-center gap-2 text-slate-500 hover:text-white text-sm font-bold transition-colors">
              &larr; Volver a todos los recursos
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
