"use client";

import { useEffect, useRef, useState } from "react";
import type { AgenteUiDict } from "@/lib/config/agenteCalificador";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

type Props = {
  ui: AgenteUiDict;
  lang: string;
};

export default function AgenteCalificador({ ui, lang }: Props) {
  const [abierto, setAbierto] = useState(false);
  const [mensajes, setMensajes] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [cargando, setCargando] = useState(false);
  const [waUrl, setWaUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [mensajes, cargando]);

  const enviar = async () => {
    const texto = input.trim();
    if (!texto || cargando || mensajes.length >= 22) return;

    const nuevos: ChatMessage[] = [...mensajes, { role: "user", content: texto }];
    setMensajes(nuevos);
    setInput("");
    setError(null);
    setCargando(true);

    try {
      const res = await fetch("/api/agente", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ lang, messages: nuevos }),
      });

      if (res.status === 503) {
        const data = await res.json().catch(() => null);
        setError(data?.error === "not_configured" ? ui.notConfigured : ui.error);
        return;
      }
      if (!res.ok) {
        setError(ui.error);
        return;
      }

      const data = (await res.json()) as { reply: string; waUrl: string | null };
      if (data.reply) {
        setMensajes((prev) => [...prev, { role: "assistant", content: data.reply }]);
      }
      if (data.waUrl) setWaUrl(data.waUrl);
    } catch {
      setError(ui.error);
    } finally {
      setCargando(false);
    }
  };

  return (
    <>
      {/* Botón flotante */}
      {!abierto && (
        <button
          onClick={() => setAbierto(true)}
          className="fixed bottom-5 right-5 z-[95] inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-stone-900 px-5 py-3 text-sm font-bold text-amber-300 shadow-[0_4px_30px_rgba(245,158,11,0.25)] transition hover:bg-stone-800 active:scale-95"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-amber-400" />
          {ui.buttonLabel}
        </button>
      )}

      {/* Panel de chat */}
      {abierto && (
        <div className="fixed bottom-5 right-5 z-[95] flex h-[520px] w-[min(380px,calc(100vw-2.5rem))] flex-col overflow-hidden rounded-3xl border border-stone-700 bg-stone-950 shadow-2xl">
          {/* Header */}
          <div className="flex items-start justify-between border-b border-stone-800 bg-stone-900 px-5 py-4">
            <div>
              <p className="text-sm font-black text-white">{ui.title}</p>
              <p className="text-[11px] text-stone-500">{ui.subtitle}</p>
            </div>
            <button
              onClick={() => setAbierto(false)}
              aria-label="Cerrar"
              className="rounded-lg p-1 text-stone-500 transition hover:bg-stone-800 hover:text-white"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>

          {/* Mensajes */}
          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            <div className="max-w-[85%] rounded-2xl rounded-tl-sm border border-stone-800 bg-stone-900 px-4 py-3 text-[13px] leading-relaxed text-stone-300">
              {ui.intro}
            </div>

            {mensajes.map((m, i) =>
              m.role === "user" ? (
                <div key={i} className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-amber-400 px-4 py-3 text-[13px] font-medium leading-relaxed text-stone-950">
                  {m.content}
                </div>
              ) : (
                <div key={i} className="max-w-[85%] whitespace-pre-wrap rounded-2xl rounded-tl-sm border border-stone-800 bg-stone-900 px-4 py-3 text-[13px] leading-relaxed text-stone-300">
                  {m.content}
                </div>
              )
            )}

            {cargando && (
              <div className="flex max-w-[85%] items-center gap-1.5 rounded-2xl rounded-tl-sm border border-stone-800 bg-stone-900 px-4 py-3">
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-stone-500 [animation-delay:0ms]" />
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-stone-500 [animation-delay:120ms]" />
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-stone-500 [animation-delay:240ms]" />
              </div>
            )}

            {waUrl && (
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl bg-[#25D366] px-4 py-3 text-center text-[13px] font-black text-stone-950 transition hover:bg-[#1DA851] active:scale-95"
              >
                {ui.waButton}
              </a>
            )}

            {error && (
              <p className="rounded-xl border border-red-900/50 bg-red-950/30 px-4 py-3 text-[12px] text-red-300">
                {error}
              </p>
            )}
          </div>

          {/* Input */}
          <div className="flex gap-2 border-t border-stone-800 bg-stone-900 p-3">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && enviar()}
              maxLength={1500}
              placeholder={ui.placeholder}
              className="flex-1 rounded-xl border border-stone-700 bg-stone-950 px-4 py-2.5 text-[13px] text-white outline-none transition focus:border-amber-400"
            />
            <button
              onClick={enviar}
              disabled={cargando || !input.trim()}
              className="rounded-xl bg-amber-400 px-4 py-2.5 text-[13px] font-black text-stone-950 transition hover:bg-amber-300 active:scale-95 disabled:cursor-not-allowed disabled:opacity-40"
            >
              {ui.send}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
