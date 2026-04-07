"use client";

import { useState } from "react";
import Link from "next/link";
import LanguageSelector from "./LanguageSelector";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const wa = "595985864209";
  const msg = encodeURIComponent("¡Hola Oscar! Vengo de la web y quiero agendar una auditoría operativa para mi empresa.");

  const navLinks = [
    { name: "Servicios", href: "/servicios" },
    { name: "Sectores", href: "/sectores" },
    { name: "Casos", href: "/casos" },
    { name: "Experiencia", href: "/experiencia" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-900/80 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* LOGO CORPORATIVO */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center font-black text-white group-hover:bg-blue-500 transition-colors shadow-[0_0_15px_rgba(37,99,235,0.4)]">
            A
          </div>
          <span className="font-black text-xl text-white tracking-tight group-hover:text-zinc-200 transition-colors">
            AYCweb
          </span>
        </Link>

        {/* LINKS ESCRITORIO (Oculto en celulares) */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <Link key={link.name} href={link.href} className="text-sm font-bold text-zinc-400 hover:text-white transition-colors">
              {link.name}
            </Link>
          ))}
        </div>

        {/* BOTONES DERECHA ESCRITORIO (Idioma + CTA) */}
        <div className="hidden md:flex items-center gap-4">
          <LanguageSelector />
          <a 
            href={`https://wa.me/${wa}?text=${msg}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white hover:bg-zinc-200 text-black text-sm font-black py-2.5 px-5 rounded-xl transition-all active:scale-95 shadow-md"
          >
            Auditoría B2B
          </a>
        </div>

        {/* CONTROLES CELULAR (Idioma + Hamburguesa) */}
        <div className="md:hidden flex items-center gap-3">
          <LanguageSelector />
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-zinc-300 hover:text-white p-2 bg-zinc-900 border border-zinc-800 rounded-xl active:scale-95 transition-all"
            aria-label="Abrir menú"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* MENÚ DESPLEGABLE CELULAR (Ultra responsive) */}
      {isOpen && (
        <div className="md:hidden bg-zinc-950 border-b border-zinc-900 px-6 py-6 space-y-2 shadow-[0_20px_40px_rgba(0,0,0,0.8)] animate-in slide-in-from-top-4 fade-in duration-200">
          {navLinks.map(link => (
            <Link 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="block text-lg font-bold text-zinc-300 hover:text-white hover:bg-zinc-900 py-4 px-4 rounded-xl transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 mt-2 border-t border-zinc-900">
            <a 
              href={`https://wa.me/${wa}?text=${msg}`} 
              target="_blank"
              onClick={() => setIsOpen(false)}
              className="flex justify-center items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-base font-black py-4 px-4 rounded-xl transition-all active:scale-95 shadow-[0_0_20px_rgba(37,99,235,0.3)]"
            >
              Agendar Auditoría B2B &rarr;
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
