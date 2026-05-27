import { Metadata } from "next";
import Link from "next/link";
import B2BQuoterDemo from "@/components/demos/B2BQuoterDemo";
import { buildWhatsAppLink } from "@/lib/services/whatsapp-link";
import { DEFAULT_WHATSAPP_TEXT } from "@/lib/config/contacto";

export const metadata: Metadata = {
  title: "Motor Cotizador B2B | AYCweb",
  description:
    "Calculá en tiempo real el valor de tu infraestructura digital. Ajustá volumen de operaciones, usuarios y margen para obtener una estimación de inversión, ahorro y ROI.",
};

export default async function DemoCotizadorPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const auditLink = buildWhatsAppLink(DEFAULT_WHATSAPP_TEXT.demoCotizador);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 relative overflow-hidden">
      {/* Noise texture */}
      <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay z-0" />

      {/* ── HERO ── */}
      <section className="relative pt-28 pb-10 md:pt-40 md:pb-16 px-6 text-center z-10 border-b border-white/[0.05]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-blue-600/8 rounded-full blur-[120px] pointer-events-none -z-10" />

        <div className="max-w-3xl mx-auto">
          <Link
            href={`/${lang}/empresas`}
            className="inline-flex items-center gap-1.5 text-slate-500 hover:text-slate-300 text-xs font-bold uppercase tracking-widest mb-6 transition-colors"
          >
            ← Volver a Empresas
          </Link>

          <span className="inline-block px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-blue-400 text-[11px] font-black uppercase tracking-widest mb-5 shadow-sm">
            Demo pública · Sin registro
          </span>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black mb-5 tracking-tighter leading-tight text-white">
            Motor Cotizador{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
              B2B
            </span>
          </h1>

          <p className="text-base md:text-xl text-slate-400 mb-4 max-w-2xl mx-auto font-light leading-relaxed">
            Tangibilizá el valor de sistematizar tu operación. Ajustá los parámetros
            de tu negocio y el motor calcula inversión, ahorro mensual y ROI en tiempo real.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-500 font-medium">
            {["Sin registro", "Cálculo en tiempo real", "Envío directo por WhatsApp"].map(
              (item) => (
                <span key={item} className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 inline-block" />
                  {item}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* ── COTIZADOR ── */}
      <section className="relative z-10 py-10 md:py-16 px-4 sm:px-6">
        <B2BQuoterDemo />
      </section>

      {/* ── CTA FINAL ── */}
      <section className="relative z-10 py-16 md:py-24 px-6 border-t border-white/[0.05] bg-[#04050a]">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-blue-500 font-bold tracking-widest uppercase text-[11px] mb-3 block">
            ¿Los números tienen sentido para tu operación?
          </span>
          <h2 className="text-2xl md:text-4xl font-black text-white mb-5 leading-tight">
            El siguiente paso es una auditoría real
          </h2>
          <p className="text-slate-400 text-base md:text-lg mb-8 max-w-xl mx-auto leading-relaxed">
            Esta demo es una simulación. En la auditoría B2B analizamos tu operación
            actual, detectamos las fricciones reales y te presentamos un sistema a medida.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={auditLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-black py-4 px-8 rounded-xl transition-all shadow-[0_0_30px_rgba(37,99,235,0.3)] active:scale-95 text-[15px]"
            >
              Agendar Auditoría B2B
            </a>
            <Link
              href={`/${lang}/obras`}
              className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-bold py-4 px-8 rounded-xl transition-all text-[15px] text-center"
            >
              Ver obras en producción →
            </Link>
          </div>

          <p className="text-xs text-slate-600 mt-6">
            No aceptamos a todos los clientes. Si no hay encaje real, te lo decimos de frente.
          </p>
        </div>
      </section>
    </div>
  );
}
