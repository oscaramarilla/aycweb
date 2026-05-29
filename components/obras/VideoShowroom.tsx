"use client";

import { useState } from "react";
import type { ShowroomVideo } from "@/lib/config/showroom";

const thumb = (id: string) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

function PlayIcon() {
  return (
    <svg viewBox="0 0 68 48" className="w-16 h-16 drop-shadow-lg" aria-hidden="true">
      <path
        d="M66.5 7.7c-.8-3-2.5-5.4-5.5-6.2C55.5.2 34 0 34 0S12.5.2 7 1.5C4 2.3 2.3 4.7 1.5 7.7 0 13.2 0 24 0 24s0 10.8 1.5 16.3c.8 3 2.5 5.4 5.5 6.2C12.5 47.8 34 48 34 48s21.5-.2 27-1.5c3-.8 4.7-3.2 5.5-6.2C68 34.8 68 24 68 24s0-10.8-1.5-16.3z"
        fill="#f00"
      />
      <path d="M27 34l18-10-18-10z" fill="#fff" />
    </svg>
  );
}

export function VideoCard({
  video,
  featured = false,
}: {
  video: ShowroomVideo;
  featured?: boolean;
}) {
  const [active, setActive] = useState(false);

  return (
    <div className="flex flex-col items-center w-full">
      <div
        className={`w-full relative border shadow-xl transition-colors duration-300 ${
          featured
            ? "bg-slate-900/80 border-blue-500/30 shadow-[0_0_50px_rgba(37,99,235,0.15)] rounded-[2rem] p-4"
            : "bg-slate-900/50 border-slate-800 hover:border-blue-500/40 rounded-[1.5rem] p-3"
        }`}
      >
        <div className={`absolute left-1/2 -translate-x-1/2 z-20 whitespace-nowrap ${featured ? "-top-4" : "-top-3"}`}>
          <span
            className={`font-black rounded-full uppercase tracking-widest ${
              featured
                ? "bg-blue-600 text-white text-[11px] px-5 py-1.5 shadow-[0_0_20px_rgba(37,99,235,0.5)]"
                : "bg-slate-800 text-blue-300 text-[9px] px-3 py-1 border border-slate-700"
            }`}
          >
            {video.tag}
          </span>
        </div>

        <div className="w-full aspect-[9/16] relative rounded-xl overflow-hidden bg-black border border-slate-800">
          {active ? (
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0&playsinline=1`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <button
              type="button"
              onClick={() => setActive(true)}
              aria-label={`Reproducir: ${video.title}`}
              className="group absolute inset-0 w-full h-full"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={thumb(video.id)}
                alt={video.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
              <span className="absolute inset-0 flex items-center justify-center">
                <PlayIcon />
              </span>
            </button>
          )}
        </div>

        <div className={`text-center ${featured ? "mt-6 px-2" : "mt-4 pb-1"}`}>
          <h3 className={`font-bold ${featured ? "text-lg text-white mb-2" : "text-[13px] text-slate-200"}`}>
            {video.title}
          </h3>
          {featured && video.description ? (
            <p className="text-sm text-slate-400 leading-relaxed">{video.description}</p>
          ) : null}
          {video.metric ? <p className="mt-1 text-[12px] text-blue-300/80">{video.metric}</p> : null}
        </div>
      </div>
    </div>
  );
}
