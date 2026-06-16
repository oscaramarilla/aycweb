// ─── COMPONENTE: Franja de prueba social ──────────────────────────────────────
// Lee CLIENTES_DESTACADOS desde lib/config y renderiza:
//   - Mobile:  scroll horizontal (snap)
//   - Tablet+: grid 3 cols
//   - Desktop: grid 5 cols
// Acepta prop `palette` para adaptar colores a la página contenedora.

import Link from "next/link";
import {
  CLIENTES_DESTACADOS,
  type PaletteColor,
} from "@/lib/config/clientes-destacados";

// ─── Tipos ────────────────────────────────────────────────────────────────────

interface FranjaClientesProps {
  /** "blue" → paleta azul/violeta (empresas). "neutral" → paleta neutra (home). */
  palette: "blue" | "neutral";
  /** Diccionario del idioma; opcional con fallback español. */
  t?: Record<string, string>;
  /** Idioma activo para el link a /obras. */
  lang?: string;
}

// ─── Mapas de estilos por color de paleta ────────────────────────────────────

const circleStyles: Record<PaletteColor, string> = {
  blue: "bg-blue-600/20 text-blue-400 ring-1 ring-blue-500/30",
  emerald: "bg-emerald-600/20 text-emerald-400 ring-1 ring-emerald-500/30",
  amber: "bg-amber-600/20 text-amber-400 ring-1 ring-amber-500/30",
  violet: "bg-violet-600/20 text-violet-400 ring-1 ring-violet-500/30",
  teal: "bg-teal-600/20 text-teal-400 ring-1 ring-teal-500/30",
};

const resultStyles: Record<PaletteColor, string> = {
  blue: "text-blue-400",
  emerald: "text-emerald-400",
  amber: "text-amber-400",
  violet: "text-violet-400",
  teal: "text-teal-400",
};

// ─── Componente ───────────────────────────────────────────────────────────────

export function FranjaClientes({ palette, t, lang = "es" }: FranjaClientesProps) {
  const tx = (key: string, fallback: string) => t?.[key] ?? fallback;
  const wrapperBg =
    palette === "blue"
      ? "bg-[#04050a] border-y border-white/[0.05]"
      : "bg-slate-950 border-b border-white/[0.05]";

  const cardBase =
    palette === "blue"
      ? "border-blue-500/10 bg-blue-950/10 hover:border-blue-500/25 hover:bg-blue-950/20"
      : "border-slate-800 bg-slate-900/50 hover:border-slate-700 hover:bg-slate-900/80";

  return (
    <section className={`relative z-10 py-10 md:py-14 ${wrapperBg}`}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Encabezado minimalista */}
        <p className="text-center text-[11px] font-bold uppercase tracking-[0.22em] text-slate-500 mb-6">
          {tx("franja.kicker", "Sistemas en producción")}
        </p>

        {/*
          Mobile  → flex + overflow-x-auto (scroll horizontal)
          Tablet  → grid 3 cols
          Desktop → grid 5 cols
          La transición flex→grid la maneja Tailwind con md:grid
        */}
        <div
          className={[
            // Mobile: scroll horizontal
            "flex gap-3 overflow-x-auto pb-2",
            // Tablet+: grid
            "md:overflow-visible md:grid md:grid-cols-3 md:gap-4",
            // Desktop: 5 cols
            "lg:grid-cols-5",
          ].join(" ")}
        >
          {CLIENTES_DESTACADOS.map((cliente) => (
            <Link
              key={cliente.nombre}
              href={cliente.urlObra}
              className={[
                // Mobile: ancho fijo para el scroll
                "snap-start shrink-0 w-[176px]",
                // Tablet+: ancho automático
                "md:w-auto",
                // Estilos de la card
                "rounded-2xl border transition-all duration-300",
                "flex flex-col items-center text-center gap-3 p-5",
                cardBase,
              ].join(" ")}
            >
              {/* Avatar: iniciales en círculo (sin logo) o imagen (con logo) */}
              {cliente.logoPath ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={cliente.logoPath}
                  alt={`Logo ${cliente.nombre}`}
                  width={56}
                  height={56}
                  className="w-14 h-14 rounded-full object-contain"
                  loading="lazy"
                  decoding="async"
                />
              ) : (
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center font-black text-[17px] shrink-0 ${circleStyles[cliente.paletteColor]}`}
                  aria-hidden="true"
                >
                  {cliente.iniciales}
                </div>
              )}

              {/* Nombre y sector */}
              <div className="space-y-1">
                <p className="font-bold text-white text-[13px] leading-snug">
                  {cliente.nombre}
                </p>
                <p className="text-[11px] text-slate-500 leading-snug">
                  {cliente.sector}
                </p>
              </div>

              {/* Resultado corto con flecha */}
              <p
                className={`text-[11px] font-bold leading-snug ${resultStyles[cliente.paletteColor]}`}
              >
                ↗&nbsp;{cliente.resultadoCorto}
              </p>
            </Link>
          ))}
        </div>

        {/* Link discreto a la página de obras completa */}
        <div className="text-center mt-6">
          <Link
            href={`/${lang}/obras`}
            className="text-[12px] text-slate-500 hover:text-slate-300 transition-colors font-medium tracking-wide"
          >
            {tx("franja.viewAll", "Ver todos los casos en producción →")}
          </Link>
        </div>
      </div>
    </section>
  );
}
