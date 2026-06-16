"use client";

import Link from "next/link";
import type { CasoObra } from "@/lib/config/obras";

interface CasoCardProps {
  caso: CasoObra;
  lang?: string;
  t?: Record<string, string>;
}

/**
 * CasoCard — Tarjeta visual de caso de éxito con métricas Antes/Después.
 * Muestra el problema, la solución (como checkmarks), el resultado cuantificado
 * y un CTA contextual.
 */
export default function CasoCard({ caso, lang = "es", t }: CasoCardProps) {
  const tx = (key: string, fallback: string) => t?.[key] ?? fallback;
  return (
    <article className="group bg-slate-900/40 border border-slate-800 rounded-2xl p-5 md:p-6 hover:border-blue-500/30 transition-all flex flex-col relative overflow-hidden">
      {/* Tag de industria */}
      <span
        className={`inline-block text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full mb-3 self-start ${
          caso.tagColor === "blue"
            ? "bg-blue-500/10 text-blue-400 border border-blue-500/20"
            : caso.tagColor === "amber"
            ? "bg-amber-500/10 text-amber-400 border border-amber-500/20"
            : "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
        }`}
      >
        {caso.tag}
      </span>

      {/* Cliente */}
      <h3 className="text-white font-bold text-base md:text-lg mb-2 leading-snug">
        {caso.client}
      </h3>

      {/* Problema (breve) */}
      <p className="text-slate-400 text-xs md:text-sm leading-relaxed mb-4 line-clamp-2">
        {caso.problem}
      </p>

      {/* Métricas Antes → Después (extraídas del resultado) */}
      <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-3 md:p-4 mb-4">
        <div className="flex items-center justify-between gap-3">
          <div className="flex-1 text-center">
            <span className="text-[10px] font-bold uppercase tracking-wider text-red-400/80 block mb-1">{tx("caso.before", "Antes")}</span>
            <span className="text-slate-500 text-[10px] md:text-xs leading-tight block">
              {extraerAntes(caso)}
            </span>
          </div>
          <div className="text-slate-600 font-black text-lg">→</div>
          <div className="flex-1 text-center">
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400/80 block mb-1">{tx("caso.after", "Después")}</span>
            <span className="text-emerald-300 text-[10px] md:text-xs leading-tight font-bold block">
              {extraerDespues(caso)}
            </span>
          </div>
        </div>
      </div>

      {/* Resultado destacado */}
      <p className="text-slate-300 text-xs md:text-sm leading-relaxed mb-4 flex-1">
        {caso.result}
      </p>

      {/* CTA */}
      <a
        href={caso.id === "dra-bianca-odontologia" || caso.id === "dr-jose-lahaye-salud"
          ? `/${lang}/#ecosistema`
          : `/${lang}/obras#${caso.id}`
        }
        className="block w-full text-center bg-slate-800 hover:bg-slate-700 text-white font-bold py-3 rounded-xl transition-all border border-slate-700 text-[12px] md:text-sm mt-auto"
      >
        {caso.ctaMessage}
      </a>
    </article>
  );
}

/**
 * Extrae el estado "Antes" a partir del problema o resultado.
 */
function extraerAntes(caso: CasoObra): string {
  if (caso.id === "oriplast-mobiliario-escolar") return "2 h / cotización";
  if (caso.id === "metal-mad-modular-k") return "Pedidos dispersos";
  if (caso.id?.startsWith("dra-") || caso.id?.startsWith("dr-")) return "Boca a boca";
  return "Proceso manual";
}

/**
 * Extrae el estado "Después" a partir del resultado.
 */
function extraerDespues(caso: CasoObra): string {
  if (caso.id === "oriplast-mobiliario-escolar") return "3 min / cotización";
  if (caso.id === "metal-mad-modular-k") return "Control total";
  if (caso.id?.startsWith("dra-") || caso.id?.startsWith("dr-")) return "Pacientes filtrados";
  return "Sistema activo";
}