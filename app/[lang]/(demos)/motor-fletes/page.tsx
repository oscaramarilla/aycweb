import { Metadata } from "next";
import MotorFletes from "@/components/tools/MotorFletes";

export const metadata: Metadata = {
  title: "Motor de Cotización Logística | AYCweb",
  description:
    "Calculá el costo real de cada flete: combustible actualizado desde Petropar, peajes, personal y mantenimiento. Herramienta B2B para operadores logísticos que quieren cotizar con precisión y margen controlado.",
};

export default async function MotorFletesPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 relative overflow-hidden">
      {/* Noise texture */}
      <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay z-0" />

      {/* ── HERO ── */}
      <section className="relative pt-28 pb-10 md:pt-40 md:pb-16 px-6 text-center z-10 border-b border-white/[0.05]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-emerald-600/8 rounded-full blur-[120px] pointer-events-none -z-10" />

        <div className="max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-emerald-400 text-[11px] font-black uppercase tracking-widest mb-5 shadow-sm">
            Demo pública · Sin registro
          </span>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black mb-5 tracking-tighter leading-tight text-white">
            Motor de Cotización{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
              Logística
            </span>
          </h1>

          <p className="text-base md:text-xl text-zinc-400 mb-4 max-w-2xl mx-auto font-light leading-relaxed">
            Calculá el costo real de cada operación de flete con precios oficiales
            de Petropar en tiempo real. Combustible, peajes, personal, mantenimiento
            y margen de utilidad en un solo motor.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-zinc-500 font-medium">
            {[
              "Precios Petropar en tiempo real",
              "Cálculo operativo completo",
              "Margen de utilidad ajustable",
            ].map((item) => (
              <span key={item} className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── MOTOR ── */}
      <section className="relative z-10 py-10 md:py-16 px-4 sm:px-6">
        <MotorFletes />
      </section>
    </div>
  );
}
