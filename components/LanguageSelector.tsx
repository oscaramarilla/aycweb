"use client";

import { useState, useRef, useEffect } from "react";

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("ES");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: "ES", label: "Castellano", icon: "🇵🇾" },
    { code: "EN", label: "English", icon: "🇺🇸" },
    { code: "PT", label: "Português", icon: "🇧🇷" },
  ];

  // Cierra el menú si el usuario hace clic afuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left font-sans" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-zinc-900/80 border border-zinc-800 hover:border-zinc-700 text-zinc-300 font-bold py-2.5 px-4 rounded-xl transition-all active:scale-95 text-sm shadow-inner"
      >
        <span className="text-base">{languages.find(l => l.code === selected)?.icon}</span>
        {selected}
        <svg className={`w-4 h-4 text-zinc-500 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-44 origin-top-right rounded-xl bg-zinc-900 border border-zinc-800 shadow-[0_10px_40px_rgba(0,0,0,0.8)] overflow-hidden z-50 animate-in fade-in slide-in-from-top-2">
          <div className="py-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setSelected(lang.code);
                  setIsOpen(false);
                  // Aquí conectaremos la lógica de internacionalización luego
                }}
                className={`w-full text-left px-4 py-3 text-sm flex items-center gap-3 transition-colors ${
                  selected === lang.code 
                    ? "bg-blue-900/20 text-blue-400 font-bold border-l-2 border-blue-500" 
                    : "text-zinc-400 hover:bg-zinc-800 hover:text-white border-l-2 border-transparent"
                }`}
              >
                <span className="text-base">{lang.icon}</span>
                {lang.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

