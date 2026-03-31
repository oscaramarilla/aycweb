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

  // Cerrar el menú si se hace clic afuera
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
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-300 font-bold py-2 px-4 rounded-xl transition-all active:scale-95 text-sm"
      >
        <span>{languages.find(l => l.code === selected)?.icon}</span>
        {selected}
        <svg className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 origin-top-right rounded-xl bg-zinc-900 border border-zinc-800 shadow-2xl overflow-hidden z-50 animate-in fade-in slide-in-from-top-2">
          <div className="py-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setSelected(lang.code);
                  setIsOpen(false);
                  // ACÁ LUEGO AGREGAREMOS LA LÓGICA DE TRADUCCIÓN REAL
                }}
                className={`w-full text-left px-4 py-3 text-sm flex items-center gap-3 transition-colors ${
                  selected === lang.code 
                    ? "bg-blue-900/20 text-blue-400 font-bold" 
                    : "text-zinc-400 hover:bg-zinc-800 hover:text-white"
                }`}
              >
                <span>{lang.icon}</span>
                {lang.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
