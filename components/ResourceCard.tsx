import Link from "next/link";
import { Articulo } from "@/lib/data/articulos";

// Mapa de colores de categoría a clases Tailwind
const categoriaColorMap: Record<string, { badge: string; glow: string; border: string }> = {
  emerald: {
    badge: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
    glow: "group-hover:shadow-emerald-500/10",
    border: "group-hover:border-emerald-500/40",
  },
  purple: {
    badge: "text-purple-400 bg-purple-400/10 border-purple-400/20",
    glow: "group-hover:shadow-purple-500/10",
    border: "group-hover:border-purple-500/40",
  },
  blue: {
    badge: "text-blue-400 bg-blue-400/10 border-blue-400/20",
    glow: "group-hover:shadow-blue-500/10",
    border: "group-hover:border-blue-500/40",
  },
};

const defaultColors = {
  badge: "text-slate-400 bg-slate-400/10 border-slate-400/20",
  glow: "group-hover:shadow-slate-500/10",
  border: "group-hover:border-slate-500/40",
};

interface ResourceCardProps {
  articulo: Articulo;
  lang: string;
}

export function ResourceCard({ articulo, lang }: ResourceCardProps) {
  const colors = categoriaColorMap[articulo.categoriaColor] ?? defaultColors;

  return (
    <Link
      href={`/${lang}/recursos/${articulo.slug}`}
      className={`
        group flex flex-col h-full
        bg-slate-900/50 border border-slate-800/50
        backdrop-blur-sm rounded-2xl p-6
        transition-all duration-300 ease-out
        hover:scale-[1.02] hover:bg-slate-900/70
        hover:shadow-xl ${colors.glow}
        ${colors.border}
      `}
    >
      {/* Badge de categoría */}
      <div className="flex items-center justify-between mb-4">
        <span
          className={`
            inline-block px-2.5 py-1 rounded-full text-[10px] font-bold
            uppercase tracking-widest border
            ${colors.badge}
          `}
        >
          {articulo.categoria}
        </span>
        <span className="text-slate-600 text-[11px] font-medium">
          {articulo.tiempoLectura}
        </span>
      </div>

      {/* Título */}
      <h3 className="font-black text-white text-lg leading-snug mb-3 group-hover:text-slate-100 transition-colors line-clamp-3">
        {articulo.titulo}
      </h3>

      {/* Extracto */}
      <p className="text-slate-400 text-sm leading-relaxed line-clamp-3 flex-1 mb-5">
        {articulo.descripcion}
      </p>

      {/* Footer: fecha y CTA */}
      <div className="flex items-center justify-between pt-4 border-t border-slate-800/60">
        <span className="text-slate-600 text-[12px] font-medium">
          {articulo.fechaPublicacion}
        </span>
        <span
          className={`
            text-[12px] font-bold transition-colors
            ${articulo.categoriaColor === "emerald"
              ? "text-emerald-400 group-hover:text-emerald-300"
              : articulo.categoriaColor === "purple"
              ? "text-purple-400 group-hover:text-purple-300"
              : "text-blue-400 group-hover:text-blue-300"
            }
          `}
        >
          Leer artículo →
        </span>
      </div>
    </Link>
  );
}
