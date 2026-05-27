// ─── COMPONENTE: MetricasImpactoCard ─────────────────────────────────────────
// Renderiza métricas cuantificadas de impacto en formato "antes → después".
// Sólo se monta si el array de métricas existe y tiene al menos un elemento.
// NO renderiza nada si `metricas` es undefined o vacío.

import type { MetricaImpacto } from "../../lib/domain/obra";

interface Props {
  metricas: MetricaImpacto[];
  /** Color accent del caso (blue | emerald | amber) para el resaltado */
  accentColor: "blue" | "emerald" | "amber";
}

const afterValueStyles: Record<string, string> = {
  blue: "text-blue-400",
  emerald: "text-emerald-400",
  amber: "text-amber-400",
};

const dividerStyles: Record<string, string> = {
  blue: "text-blue-600",
  emerald: "text-emerald-600",
  amber: "text-amber-600",
};

const borderStyles: Record<string, string> = {
  blue: "border-blue-500/20 bg-blue-950/20",
  emerald: "border-emerald-500/20 bg-emerald-950/20",
  amber: "border-amber-500/20 bg-amber-950/20",
};

const headingStyles: Record<string, string> = {
  blue: "text-blue-500",
  emerald: "text-emerald-500",
  amber: "text-amber-500",
};

export function MetricasImpactoCard({ metricas, accentColor }: Props) {
  if (!metricas || metricas.length === 0) return null;

  return (
    <div
      className={`mx-6 md:mx-10 mb-8 rounded-xl border p-5 ${borderStyles[accentColor]}`}
      aria-label="Métricas de impacto cuantificado"
    >
      {/* Encabezado */}
      <p
        className={`text-[10px] font-black uppercase tracking-widest mb-4 flex items-center gap-2 ${headingStyles[accentColor]}`}
      >
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
            strokeWidth="2.5"
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
        Impacto medido
      </p>

      {/* Grid de métricas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {metricas.map((m) => (
          <div key={m.label} className="space-y-1">
            <p className="text-[11px] text-slate-500 font-medium leading-tight">
              {m.label}
              {m.unidad && (
                <span className="text-slate-600"> · {m.unidad}</span>
              )}
            </p>

            {/* Números grandes: antes → después */}
            <div className="flex items-baseline gap-2 flex-wrap">
              {/* Valor ANTES */}
              <span className="text-2xl md:text-3xl font-black text-slate-500 line-through decoration-slate-600">
                {m.antes}
              </span>

              {/* Flecha */}
              <span
                className={`text-lg font-black ${dividerStyles[accentColor]}`}
                aria-hidden="true"
              >
                →
              </span>

              {/* Valor DESPUÉS — resaltado y grande */}
              <span
                className={`text-2xl md:text-3xl font-black ${afterValueStyles[accentColor]}`}
              >
                {m.despues}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
