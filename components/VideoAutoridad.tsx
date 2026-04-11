"use client";
import { useState } from "react";
import Image from "next/image";

export default function VideoAutoridad() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = "vOCqg_zctec"; // El ID exacto de tu nuevo video
  const titulo = "La Máquina del Tiempo: Cómo crear un Presupuesto VIP en 45 Segundos ⏱️";

  return (
    <div className="relative w-full max-w-[320px] mx-auto aspect-[9/16] rounded-3xl overflow-hidden shadow-2xl bg-slate-900 border-4 border-slate-800">
      {!isPlaying ? (
        <button 
          onClick={() => setIsPlaying(true)}
          className="absolute inset-0 w-full h-full group"
          aria-label={`Reproducir video: ${titulo}`}
        >
          {/* Descarga la miniatura directamente desde los servidores de YouTube pero optimizada por Next.js */}
          <Image 
            src={`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`}
            alt={titulo}
            fill
            className="object-cover opacity-90 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
            loading="lazy"
          />
          
          {/* Capa oscura y Botón de Play estético y clickeable */}
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 group-hover:bg-black/20 transition-colors">
            <div className="w-16 h-16 bg-red-600/90 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(220,38,38,0.5)] group-hover:scale-110 group-hover:bg-red-600 transition-all duration-300">
              <svg className="w-8 h-8 text-white fill-current ml-1" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <span className="mt-4 text-white font-bold tracking-wide text-sm bg-black/50 px-4 py-1.5 rounded-full backdrop-blur-md border border-white/10">
              Ver Prueba en Vivo
            </span>
          </div>
        </button>
      ) : (
        /* El iframe real solo existe si el usuario hace clic. Carga cero inicial. */
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
          title={titulo}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full border-0"
        ></iframe>
      )}
    </div>
  );
}
