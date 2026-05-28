"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import type { EvidenciaVisual } from "@/lib/domain/obra";

const TIPO_LABEL: Record<EvidenciaVisual["tipo"], string> = {
  screenshot: "pantalla",
  pdf_preview: "PDF",
  mobile_view: "foto",
};

type Props = {
  evidencia: EvidenciaVisual[];
};

export default function GaleriaEvidencia({ evidencia }: Props) {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const cerrar = useCallback(() => setLightboxIdx(null), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") cerrar();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [cerrar]);

  useEffect(() => {
    document.body.style.overflow = lightboxIdx !== null ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxIdx]);

  if (!evidencia || evidencia.length === 0) return null;

  const selected = lightboxIdx !== null ? evidencia[lightboxIdx] : null;

  return (
    <>
      {/* ── Galería ── */}
      <div className="px-6 md:px-10 pb-6">
        <h3 className="text-[11px] font-black uppercase tracking-widest text-slate-500 flex items-center gap-2 mb-4">
          <span>📸</span> Evidencia Visual
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {evidencia.map((item, i) => (
            <button
              key={i}
              onClick={() => setLightboxIdx(i)}
              className="group relative aspect-video rounded-xl overflow-hidden border border-slate-800 hover:border-slate-600 transition-all bg-slate-900/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50"
              aria-label={`Ver ${item.alt} ampliado`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {/* Caption en hover */}
              {item.caption && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950/90 to-transparent px-3 py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-200">
                  <p className="text-[11px] text-slate-200 leading-snug">{item.caption}</p>
                </div>
              )}
              {/* Badge de tipo */}
              <div className="absolute top-2 right-2 bg-black/60 rounded-md px-1.5 py-0.5 text-[9px] text-slate-300 uppercase tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                {TIPO_LABEL[item.tipo]}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* ── Lightbox ── */}
      {selected && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Vista ampliada de evidencia"
          className="fixed inset-0 z-[200] bg-black/92 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
          onClick={cerrar}
        >
          {/* Botón cerrar */}
          <button
            className="absolute top-4 right-4 text-white/60 hover:text-white w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-all text-base"
            onClick={cerrar}
            aria-label="Cerrar"
          >
            ✕
          </button>

          {/* Imagen */}
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-slate-900 border border-white/10">
              <Image
                src={selected.src}
                alt={selected.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 80vw"
                className="object-contain"
                priority
              />
            </div>

            {selected.caption && (
              <p className="text-center text-slate-400 text-sm mt-4 leading-relaxed">
                {selected.caption}
              </p>
            )}

            {evidencia.length > 1 && lightboxIdx !== null && (
              <p className="text-center text-slate-600 text-[11px] mt-2">
                {lightboxIdx + 1} / {evidencia.length}
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
