"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { AYCWEB_CONTACT } from "@/lib/config/contact";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const whatsappNumber = AYCWEB_CONTACT.whatsappNumber;
  const whatsappMsg = encodeURIComponent(AYCWEB_CONTACT.globalMessages.diagnosis);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // Bloquea el scroll del fondo cuando el menú móvil está abierto (Ultra Premium UX)
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-900 h-20 flex items-center transition-all">
      <div className="max-w-6xl mx-auto px-6 w-full flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="text-2xl font-black tracking-tighter text-white z-50" onClick={() => setIsMobileMenuOpen(false)}>
          AYC<span className="text-blue-500">web</span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/soluciones" className="text-sm font-bold text-zinc-400 hover:text-white transition-colors">Soluciones</Link>
          <Link href="/productos" className="text-sm font-bold text-zinc-400 hover:text-white transition-colors">Productos</Link>
          <Link href="/nosotros" className="text-sm font-bold text-zinc-400 hover:text-white transition-colors">Nosotros</Link>
          <Link href="/pago" className="text-sm font-bold text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            Fast-Track Pago
          </Link>
          
          <a 
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
            target="_blank" rel="noopener noreferrer"
            className="bg-white text-black font-black text-sm px-5 py-2.5 rounded-lg hover:bg-zinc-200 transition-all active:scale-95"
          >
            Auditar mi proceso
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button 
          className="md:hidden text-white z-50 p-2"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          )}
        </button>

      </div>

      {/* MOBILE MENU OVERLAY */}
      <div className={`fixed inset-0 bg-zinc-950 z-40 flex flex-col items-center justify-start pt-32 gap-8 transition-all duration-300 md:hidden ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
        <Link href="/soluciones" onClick={toggleMenu} className="text-3xl font-bold text-zinc-300 hover:text-white">Soluciones</Link>
        <Link href="/productos" onClick={toggleMenu} className="text-3xl font-bold text-zinc-300 hover:text-white">Productos</Link>
        <Link href="/nosotros" onClick={toggleMenu} className="text-3xl font-bold text-zinc-300 hover:text-white">Nosotros</Link>
        <Link href="/pago" onClick={toggleMenu} className="text-3xl font-black text-emerald-500 hover:text-emerald-400 flex items-center gap-3">
          <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></span>
          Fast-Track Pago
        </Link>
        
        <a 
          href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
          target="_blank" rel="noopener noreferrer"
          className="mt-6 bg-white text-black font-black text-xl px-10 py-4 rounded-xl active:scale-95"
          onClick={toggleMenu}
        >
          Auditar mi proceso
        </a>
      </div>
    </nav>
  );
}
