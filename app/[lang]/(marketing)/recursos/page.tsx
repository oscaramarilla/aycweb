import { articulos } from "@/lib/data/articulos";
import { ResourceCard } from "@/components/ResourceCard";
import { buildWhatsAppLink } from "@/lib/services/whatsapp-link";
import { getWhatsAppText } from "@/lib/config/contacto";
import { getDictionary } from "@/lib/i18n";

export const dynamic = "force-static";

// Agrupar artículos por categoría para el filtro visual
function getCategoriasUnicas(arts: typeof articulos) {
  const seen = new Set<string>();
  return arts
    .map((a) => a.categoria)
    .filter((c) => {
      if (seen.has(c)) return false;
      seen.add(c);
      return true;
    });
}

export default async function RecursosIndex({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const d = await getDictionary(lang);
  const categorias = getCategoriasUnicas(articulos);
  const countText = (articulos.length === 1 ? d["recursos.countOne"] : d["recursos.countMany"]).replace("{n}", String(articulos.length));

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 relative overflow-hidden">
      {/* Fondo de ruido sutil */}
      <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay z-0" />

      {/* Glow decorativo en el hero */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-blue-600/8 rounded-full blur-[140px] pointer-events-none z-0" />

      {/* ─── HERO ─── */}
      <section className="relative z-10 px-6 pt-28 pb-14 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-[11px] font-bold uppercase tracking-widest mb-6 shadow-sm">
            {d["recursos.badge"]}
          </span>

          <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight mb-5">
            {d["recursos.h1a"]}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              {d["recursos.h1b"]}
            </span>
          </h1>

          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            {d["recursos.sub"]}
          </p>

          {/* Badges de categorías */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categorias.map((cat) => (
              <span
                key={cat}
                className="px-3 py-1 rounded-full bg-slate-900/80 border border-slate-800 text-slate-500 text-[11px] font-semibold uppercase tracking-wide"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DIVISOR ─── */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
      </div>

      {/* ─── GRILLA DE ARTÍCULOS ─── */}
      <section className="relative z-10 px-6 py-14">
        <div className="max-w-6xl mx-auto">
          {/* Contador */}
          <p className="text-slate-600 text-xs font-bold uppercase tracking-widest mb-8">
            {countText}
          </p>

          {/* Grid responsive: 1 col mobile · 2 tablet · 3 desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {articulos.map((articulo) => (
              <ResourceCard key={articulo.slug} articulo={articulo} lang={lang} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA INFERIOR ─── */}
      <section className="relative z-10 px-6 pb-20 pt-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-slate-900/50 border border-slate-800/50 backdrop-blur-sm rounded-2xl p-8 text-center">
            <p className="text-slate-400 text-sm mb-2 font-semibold uppercase tracking-widest text-[11px]">
              {d["recursos.ctaKicker"]}
            </p>
            <h3 className="text-xl md:text-2xl font-black text-white mb-4">
              {d["recursos.ctaTitle"]}
            </h3>
            <a
              href={buildWhatsAppLink(getWhatsAppText("recursos", lang))}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-black py-3 px-8 rounded-xl transition-all shadow-[0_0_24px_rgba(37,99,235,0.35)] hover:shadow-[0_0_32px_rgba(37,99,235,0.5)] active:scale-95 text-sm"
            >
              {d["recursos.ctaButton"]}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}