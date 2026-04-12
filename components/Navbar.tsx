"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const WA_CTA = "https://wa.me/595985864209?text=Hola%20Oscar,%20quiero%20agendar%20una%20Auditor%C3%ADa%20B2B.";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          scrolled
            ? "bg-[#070810]/95 backdrop-blur-xl border-b border-white/[0.05] shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-black tracking-tighter text-white hover:text-blue-400 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            AYC<span className="text-blue-500">web</span>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-7">
            {/* Bifurcación principal — cada perfil tiene su propia ruta */}
            <Link
              href="/productos"
              className="text-[14px] font-bold text-slate-300 hover:text-white transition-colors flex items-center gap-2"
            >
              <span className="text-base">🏭</span>
              Empresas
            </Link>
            <Link
              href="/soluciones"
              className="text-[14px] font-bold text-slate-300 hover:text-white transition-colors flex items-center gap-2"
            >
              <span className="text-base">🧑‍⚕️</span>
              Profesionales
            </Link>
            <Link
              href="/nosotros"
              className="text-[14px] font-bold text-slate-300 hover:text-white transition-colors"
            >
              Nosotros
            </Link>

            <Link
              href="/god-spot"
              className="text-[14px] font-bold text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
              God Spot
            </Link>

            <Link
              href="/pago"
              className="text-[14px] font-bold text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.8)]"></span>
              Fast-Track Pago
            </Link>

            <a
              href={WA_CTA}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-500 text-white font-black text-[14px] px-6 py-2.5 rounded-xl transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)]"
            >
              Auditar mi proceso
            </a>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            className="md:hidden z-[110] p-2 relative w-10 h-10 flex items-center justify-center rounded-lg"
            onClick={toggleMenu}
            aria-label="Abrir Menú"
          >
            <div className="w-6 flex flex-col gap-[6px]">
              <span
                className={`block h-[2px] bg-white rounded-full transition-all duration-300 origin-center ${
                  isMobileMenuOpen ? "rotate-45 translate-y-[8px]" : ""
                }`}
              />
              <span
                className={`block h-[2px] bg-white rounded-full transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0 scale-x-0" : ""
                }`}
              />
              <span
                className={`block h-[2px] bg-white rounded-full transition-all duration-300 origin-center ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-[8px]" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-[90] bg-[#070810] transition-all duration-300 md:hidden ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="flex flex-col h-full overflow-y-auto px-6 pt-24 pb-24">
          {/* SECCIÓN BIFURCACIÓN PRINCIPAL */}
          <div className="text-[11px] uppercase tracking-[0.25em] text-slate-500 font-bold mb-3">
            Elegí tu camino
          </div>

          <Link
            href="/productos"
            onClick={toggleMenu}
            className="rounded-2xl border border-blue-900/40 bg-blue-950/20 p-5 mb-3 active:scale-[0.98] transition-transform"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="text-3xl">🏭</span>
              <div className="text-2xl font-black text-white">Empresas</div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Manufactureras, clínicas, agroindustria, distribuidoras. Cotizadores, PDFs y motores operativos.
            </p>
          </Link>

          <Link
            href="/soluciones"
            onClick={toggleMenu}
            className="rounded-2xl border border-emerald-900/40 bg-emerald-950/20 p-5 mb-6 active:scale-[0.98] transition-transform"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="text-3xl">🧑‍⚕️</span>
              <div className="text-2xl font-black text-white">Profesionales</div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Médicos, dentistas, abogados, contadores, arquitectos. Captación, agenda y autoridad digital.
            </p>
          </Link>

          {/* RESTO DEL MENÚ */}
          <Link
            href="/nosotros"
            onClick={toggleMenu}
            className="text-xl font-bold text-slate-200 hover:text-blue-400 py-4 border-b border-white/[0.05]"
          >
            Nosotros
          </Link>

          <Link
            href="/god-spot"
            onClick={toggleMenu}
            className="text-xl font-bold text-blue-400 flex items-center gap-3 py-4 border-b border-white/[0.05]"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse"></span>
            God Spot
          </Link>

          <Link
            href="/pago"
            onClick={toggleMenu}
            className="text-xl font-bold text-emerald-400 flex items-center gap-3 py-4 border-b border-white/[0.05]"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_15px_rgba(16,185,129,0.8)]"></span>
            Fast-Track Pago
          </Link>

          <a
            href={WA_CTA}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 bg-blue-600 text-white text-center font-black text-lg w-full py-4 rounded-xl active:scale-95 shadow-[0_0_30px_rgba(37,99,235,0.4)]"
            onClick={toggleMenu}
          >
            Auditar mi proceso
          </a>
        </div>
      </div>

      {/* WhatsApp floating button */}
      <a
        href={WA_CTA}
        target="_blank"
        rel="noopener noreferrer"
        className="md:hidden fixed bottom-4 right-4 z-[80] w-12 h-12 bg-[#25D366]/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-[0_4px_15px_rgba(37,211,102,0.3)] hover:bg-[#25D366] hover:scale-105 transition-all duration-200"
        aria-label="Contactar por WhatsApp"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </>
  );
}