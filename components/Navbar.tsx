"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { AYCWEB_CONTACT } from "@/lib/config/contact";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const whatsappNumber = AYCWEB_CONTACT.whatsappNumber;
  const whatsappMsg = encodeURIComponent("Hola Oscar, quiero agendar una Auditoría B2B.");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const toggleMenu = () => setIsMobileMenuOpen((current) => !current);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 h-20 transition-all ${isScrolled ? "bg-slate-950/90 backdrop-blur-2xl shadow-[0_7px_30px_rgba(0,0,0,0.35)] border-b border-slate-800/60" : "bg-transparent"}`}>
        <div className="max-w-6xl mx-auto h-full px-6 flex items-center justify-between">
          <Link href="/" className="text-2xl font-black tracking-tighter text-white hover:text-blue-400 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
            AYC<span className="text-blue-500">web</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/servicios" className="text-sm font-bold text-slate-200 hover:text-white transition-colors">Servicios</Link>
            <Link href="/sectores" className="text-sm font-bold text-slate-200 hover:text-white transition-colors">Sectores</Link>
            <Link href="/casos" className="text-sm font-bold text-slate-200 hover:text-white transition-colors">Casos</Link>
            <Link href="/experiencia" className="text-sm font-bold text-slate-200 hover:text-white transition-colors">Experiencia</Link>
            <Link href="/precios" className="text-sm font-bold text-slate-200 hover:text-white transition-colors">Precios</Link>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-[#25D366] px-5 py-2.5 text-sm font-black text-slate-950 shadow-[0_0_25px_rgba(37,211,102,0.35)] transition-all hover:bg-emerald-400 active:scale-95"
            >
              Auditoría B2B
            </a>
          </div>

          <button
            className="md:hidden z-[110] p-2 text-white"
            onClick={toggleMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      <div className={`fixed top-20 inset-x-0 bottom-0 z-[100] bg-slate-950/95 backdrop-blur-3xl transition-all duration-300 ease-in-out md:hidden ${isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}>
        <div className="mx-auto flex h-full max-w-6xl flex-col gap-6 px-6 py-8">
          <Link href="/servicios" onClick={toggleMenu} className="rounded-3xl border border-slate-800 bg-slate-900/80 px-5 py-5 text-xl font-black text-white transition-colors hover:border-slate-700 hover:bg-slate-800">
            Servicios
          </Link>
          <Link href="/sectores" onClick={toggleMenu} className="rounded-3xl border border-slate-800 bg-slate-900/80 px-5 py-5 text-xl font-black text-white transition-colors hover:border-slate-700 hover:bg-slate-800">
            Sectores
          </Link>
          <Link href="/casos" onClick={toggleMenu} className="rounded-3xl border border-slate-800 bg-slate-900/80 px-5 py-5 text-xl font-black text-white transition-colors hover:border-slate-700 hover:bg-slate-800">
            Casos
          </Link>
          <Link href="/experiencia" onClick={toggleMenu} className="rounded-3xl border border-slate-800 bg-slate-900/80 px-5 py-5 text-xl font-black text-white transition-colors hover:border-slate-700 hover:bg-slate-800">
            Experiencia
          </Link>
          <Link href="/precios" onClick={toggleMenu} className="rounded-3xl border border-slate-800 bg-slate-900/80 px-5 py-5 text-xl font-black text-white transition-colors hover:border-slate-700 hover:bg-slate-800">
            Precios
          </Link>

          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={toggleMenu}
            className="mt-auto inline-flex items-center justify-center rounded-3xl bg-[#25D366] px-6 py-5 text-center text-xl font-black text-slate-950 shadow-[0_0_30px_rgba(37,211,102,0.35)] transition-all hover:bg-emerald-400 active:scale-95"
          >
            Auditoría B2B
          </a>
        </div>
      </div>

      <a
        href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 z-[120] inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_0_35px_rgba(37,211,102,0.35)] transition-transform hover:scale-105 md:hidden"
        aria-label="WhatsApp contacto"
      >
        <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M16.65 7.33c-.38-.38-.88-.55-1.38-.55-.5 0-.99.17-1.37.51-.35.32-.56.79-.56 1.27 0 .53.18 1.04.53 1.44.29.34.75.58 1.24.76.22.08.46.13.7.17.24.04.48.07.72.1.33.04.57.22.68.52.08.22.06.46-.08.66-.15.21-.37.33-.62.35-.18.01-.36 0-.53-.02-.53-.06-1.07-.2-1.6-.42-.88-.36-1.8-.47-2.7-.33-1.65.28-3.12 1.48-3.67 3.08-.5 1.41-.35 2.95.4 4.25.61 1.08 1.55 1.9 2.7 2.25.82.25 1.69.32 2.55.2 1.2-.18 2.34-.86 3.2-1.85.17-.2.29-.42.35-.67.08-.33.04-.66-.12-.97-.14-.27-.36-.48-.64-.6-.2-.08-.42-.1-.63-.08-.18.02-.36.06-.54.12-.24.09-.46.24-.64.44-.35.36-.75.66-1.2.88-.43.2-.89.29-1.35.26-.35-.02-.7-.1-1.04-.25-.42-.18-.79-.47-1.06-.86-.09-.14-.2-.27-.26-.42-.08-.18-.11-.38-.08-.57.03-.18.11-.35.24-.5.08-.09.17-.18.27-.25.2-.12.42-.17.65-.17.18 0 .37.03.55.1.1.04.2.1.29.17.1.08.2.17.29.26.13.14.28.25.44.34.09.05.2.08.29.11.2.05.41.03.61-.05.16-.06.3-.17.42-.29.1-.1.16-.23.18-.36.02-.14 0-.28-.05-.41-.08-.21-.22-.38-.4-.52-.14-.1-.28-.18-.43-.25-.15-.08-.32-.13-.49-.16-.27-.05-.55-.07-.82-.05-.36.03-.71.12-1.02.27-.23.11-.44.26-.62.45-.12.12-.22.25-.3.39-.1.18-.14.37-.12.56.02.19.1.37.21.53.09.12.2.22.32.31.14.1.29.17.44.22.16.05.32.08.49.09.2.01.4-.01.6-.08.21-.08.39-.22.53-.4.09-.11.16-.24.19-.38.03-.14.03-.28 0-.42-.02-.11-.06-.22-.11-.33-.06-.14-.14-.25-.23-.35l-.22-.23c-.12-.12-.27-.21-.44-.26-.17-.06-.35-.08-.53-.06-.15.01-.3.03-.44.09-.13.05-.25.12-.36.21-.14.1-.27.23-.36.39-.05.09-.09.19-.11.29-.02.11-.01.22.05.32.03.07.08.12.14.18.08.1.18.18.29.25.12.08.24.14.36.19.17.08.35.12.53.11.2-.01.39-.06.57-.14.14-.06.28-.14.4-.25.06-.05.12-.1.17-.16.11-.11.21-.24.27-.39.03-.08.05-.17.05-.25 0-.1-.02-.19-.05-.28-.03-.08-.08-.16-.14-.23-.1-.11-.23-.18-.37-.23-.16-.06-.32-.08-.49-.07-.16.01-.32.06-.47.14-.1.06-.19.14-.26.24-.1.13-.16.29-.16.45 0 .19.06.38.17.54.04.07.09.13.14.18.02.03.06.07.08.1.01.01.03.03.04.04.01.01.03.02.04.03 0 0 .02.01.03.02.01 0 .02 0 .02 0 .04-.01.08-.03.12-.05.05-.02.1-.05.14-.09.08-.07.14-.17.17-.27.04-.11.05-.21.04-.32-.01-.12-.04-.23-.09-.34-.06-.13-.15-.23-.27-.31-.08-.05-.17-.08-.26-.1-.1-.02-.21-.02-.31 0-.11.02-.22.05-.31.1-.07.04-.13.09-.18.15-.05.06-.08.13-.1.2-.01.1-.01.2.01.3.02.1.06.2.12.29.08.12.19.22.32.29.12.08.26.13.4.15.18.03.37.01.55-.04.09-.03.18-.07.26-.12.05-.03.1-.07.14-.12.04-.05.06-.1.08-.16.01-.04.02-.08.02-.12.01-.05 0-.1-.01-.15-.01-.05-.03-.1-.05-.14-.02-.05-.04-.09-.07-.13-.04-.05-.08-.09-.13-.13-.06-.05-.12-.09-.19-.11z" />
        </svg>
      </a>
    </>
  );
}
