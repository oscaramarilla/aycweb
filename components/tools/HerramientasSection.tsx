import Link from "next/link";
import { HERRAMIENTAS_B2B } from "@/lib/config/herramientas";

export default function HerramientasSection() {
  return (
    <section className="py-16 md:py-24 relative z-10 bg-[#04050a] border-t border-white/[0.05]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">
            Herramientas Operativas Abiertas
          </h2>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Recursos gratuitos diseñados para eliminar fricción técnica en tu
            día a día comercial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {HERRAMIENTAS_B2B.map((h) => {
            const isExternal = h.esExterno || h.href.startsWith("http");
            const Tag = isExternal ? "a" : Link;

            const linkProps = isExternal
              ? {
                  href: h.href,
                  target: "_blank",
                  rel: "noopener noreferrer" as const,
                }
              : { href: h.href };

            return (
              <Tag
                key={h.id}
                {...linkProps}
                className="group bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-all flex flex-col"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-white font-bold text-lg leading-snug">
                    {h.titulo}
                  </h3>
                  <span className="shrink-0 ml-3 text-[10px] font-bold uppercase tracking-widest text-blue-400 bg-blue-400/10 px-2.5 py-1 rounded-full">
                    {h.badge}
                  </span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed flex-1">
                  {h.descripcion}
                </p>
                {isExternal && (
                  <span className="mt-3 text-xs text-slate-500 group-hover:text-slate-300 transition-colors">
                    Abrir en nueva ventana →
                  </span>
                )}
              </Tag>
            );
          })}
        </div>
      </div>
    </section>
  );
}