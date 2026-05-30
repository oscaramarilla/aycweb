import Link from "next/link";
import { LEGAL_INFO } from "@/lib/config/legal";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.04] bg-[#04050a] px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between gap-8">
        {/* Enlaces principales */}
        <div className="flex flex-col gap-3">
          <span className="text-[12px] font-bold text-slate-400 uppercase tracking-wider mb-1">Navegación</span>
          <a href="/soluciones" className="text-[12px] text-slate-500 hover:text-white transition-colors">Soluciones</a>
          <Link href="/es/empresas" className="text-[12px] text-slate-500 hover:text-white transition-colors">Empresas</Link>
          <Link href="/es/profesionales" className="text-[12px] text-slate-500 hover:text-white transition-colors">Profesionales</Link>
          <Link href="/es/nosotros" className="text-[12px] text-slate-500 hover:text-white transition-colors">Nosotros</Link>
          <Link href="/es/obras" className="text-[12px] text-slate-500 hover:text-white transition-colors">Obras</Link>
        </div>

        {/* Legal */}
        <div className="flex flex-col gap-2 text-right">
          <span className="text-[11px] text-slate-600">
            {LEGAL_INFO.razonSocial} · {LEGAL_INFO.titular} · RUC {LEGAL_INFO.ruc} · {LEGAL_INFO.direccion}
          </span>
          <span className="text-[11px] text-slate-600">© 2026 AYCweb</span>
        </div>
      </div>
    </footer>
  );
}
