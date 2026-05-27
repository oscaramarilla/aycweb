"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { BookOpen } from "lucide-react";

export default function FloatingResourcesCTA() {
  const params = useParams();
  const lang = (params?.lang as string) ?? "es";

  return (
    <Link
      href={`/${lang}/recursos`}
      aria-label="Biblioteca B2B — Recursos de autoridad"
      className="
        fixed bottom-6 right-6 z-50
        flex items-center gap-2
        bg-slate-900/80 backdrop-blur-md
        border border-slate-800/60
        text-slate-100
        px-4 py-3 rounded-2xl
        shadow-lg shadow-black/40
        hover:border-blue-500/70 hover:bg-slate-800/90
        hover:scale-105 active:scale-95
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500
        transition-all duration-300 ease-in-out
        select-none
      "
    >
      <BookOpen
        className="w-5 h-5 shrink-0 text-blue-400"
        aria-hidden="true"
      />
      <span className="hidden md:inline text-sm font-semibold tracking-wide whitespace-nowrap">
        Biblioteca B2B
      </span>
    </Link>
  );
}
