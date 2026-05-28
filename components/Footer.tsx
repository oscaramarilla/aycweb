import { LEGAL_INFO } from "@/lib/config/legal";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.04] bg-[#04050a] px-6 py-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-600">
        <span>
          {LEGAL_INFO.razonSocial} · {LEGAL_INFO.titular} · RUC {LEGAL_INFO.ruc} · {LEGAL_INFO.direccion}
        </span>
        <span>© 2026 AYCweb</span>
      </div>
    </footer>
  );
}
