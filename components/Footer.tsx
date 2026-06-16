import Link from "next/link";
import { LEGAL_INFO } from "@/lib/config/legal";

// `t` y `lang` opcionales: sin ellos cae a español (ej. /soluciones).
export default function Footer({ t, lang = "es" }: { t?: Record<string, string>; lang?: string }) {
  const tx = (key: string, fallback: string) => t?.[key] ?? fallback;
  return (
    <footer className="border-t border-white/[0.04] bg-[#04050a] px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between gap-8">
        {/* Enlaces principales */}
        <div className="flex flex-col gap-3">
          <span className="text-[12px] font-bold text-slate-400 uppercase tracking-wider mb-1">{tx("footer.nav", "Navegación")}</span>
          <Link href="/soluciones" className="text-[12px] text-slate-500 hover:text-white transition-colors">{tx("footer.solutions", "Soluciones")}</Link>
          <Link href={`/${lang}/empresas`} className="text-[12px] text-slate-500 hover:text-white transition-colors">{tx("footer.companies", "Empresas")}</Link>
          <Link href={`/${lang}/profesionales`} className="text-[12px] text-slate-500 hover:text-white transition-colors">{tx("footer.professionals", "Profesionales")}</Link>
          <Link href={`/${lang}/nosotros`} className="text-[12px] text-slate-500 hover:text-white transition-colors">{tx("footer.about", "Nosotros")}</Link>
          <Link href={`/${lang}/obras`} className="text-[12px] text-slate-500 hover:text-white transition-colors">{tx("footer.works", "Obras")}</Link>
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
