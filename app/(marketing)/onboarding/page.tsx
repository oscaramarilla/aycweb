import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Onboarding y Alta de Servicio | AYCweb",
  description: "Iniciá la construcción de tu infraestructura digital. Plataformas de pago en PYG, USD y USDT para clientes locales y regionales.",
};

export default function OnboardingPage() {
  const whatsappNumber = "595985864209";
  const whatsappUsdMsg = encodeURIComponent("Hola Oscar. Quiero los datos de la cuenta USD para activar el onboarding internacional.");

  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-slate-50 font-sans relative overflow-hidden pb-24">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay z-0"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      <section className="relative pt-28 pb-12 md:pt-40 md:pb-16 px-6 text-center z-10">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-emerald-400 text-[11px] md:text-xs font-bold uppercase tracking-widest mb-6 shadow-sm">
            Área de Clientes
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 tracking-tighter leading-[1.05] text-white">
            Tres formas de <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">encender el motor.</span>
          </h1>
          <p className="text-base md:text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
            Asegurá tu lugar en la agenda técnica. Elegí el riel financiero que mejor se adapte a la operativa de tu empresa.
          </p>
        </div>
      </section>

      <section className="relative z-10 px-6 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* RIEL 1: PYG (Local Tradicional) */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-[1.5rem] p-6 md:p-8 flex flex-col relative transition-all hover:border-emerald-500/50">
            <div className="mb-6 flex items-center justify-between">
              <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-xl">🇵🇾</div>
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 bg-slate-950 px-3 py-1 rounded-full border border-slate-800">PYG</span>
            </div>
            <h3 className="font-bold text-xl text-white mb-2">Transferencia Local</h3>
            <p className="text-slate-400 text-[13px] mb-6 border-b border-slate-800 pb-6">
              Ideal para empresas y profesionales radicados en Paraguay operando con banca local.
            </p>
            <div className="space-y-3 mb-8 flex-1">
              <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800/50">
                <p className="text-[11px] text-slate-500 uppercase tracking-widest mb-1">Banco</p>
                <p className="font-mono text-sm text-slate-300">Itaú Paraguay</p>
              </div>
              <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800/50">
                <p className="text-[11px] text-slate-500 uppercase tracking-widest mb-1">Titular</p>
                <p className="font-mono text-sm text-slate-300">Oscar Amarilla</p>
              </div>
              <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800/50">
                <p className="text-[11px] text-slate-500 uppercase tracking-widest mb-1">Cuenta C.A.</p>
                <p className="font-mono text-sm text-emerald-400 font-bold">520779774</p>
              </div>
            </div>
          </div>

          {/* RIEL 2: USD (Regional) */}
          <div className="bg-[#070810] border border-blue-500/30 shadow-[0_0_30px_rgba(37,99,235,0.1)] rounded-[1.5rem] p-6 md:p-8 flex flex-col relative transition-all">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-widest whitespace-nowrap">
              Expansión LATAM
            </div>
            <div className="mb-6 flex items-center justify-between mt-2">
              <div className="w-12 h-12 bg-blue-900/30 border border-blue-500/30 rounded-xl flex items-center justify-center text-xl text-blue-400">🌎</div>
              <span className="text-[10px] font-black uppercase tracking-widest text-blue-400 bg-blue-950/50 px-3 py-1 rounded-full border border-blue-900/50">USD</span>
            </div>
            <h3 className="font-bold text-xl text-white mb-2">Banca Internacional</h3>
            <p className="text-slate-400 text-[13px] mb-6 border-b border-slate-800 pb-6 flex-1">
              Ideal para clientes de Argentina, Uruguay, Chile o empresas con cuentas en dólares.
            </p>
            <div className="bg-blue-950/20 p-5 rounded-xl border border-blue-900/50 mb-6 text-center">
              <p className="text-[13px] text-blue-300 leading-relaxed">
                Por seguridad bancaria internacional, proveemos el Swift/Routing Number únicamente previa validación.
              </p>
            </div>
            <a href={`https://wa.me/${whatsappNumber}?text=${whatsappUsdMsg}`} target="_blank" rel="noopener noreferrer" className="block w-full text-center py-3.5 rounded-xl font-bold text-[14px] bg-blue-600 hover:bg-blue-500 text-white transition-all">
              Solicitar cuenta USD
            </a>
          </div>

          {/* RIEL 3: USDT (Cripto) */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-[1.5rem] p-6 md:p-8 flex flex-col relative transition-all hover:border-teal-500/50">
            <div className="mb-6 flex items-center justify-between">
              <div className="w-12 h-12 bg-teal-900/20 border border-teal-500/20 rounded-xl flex items-center justify-center text-xl text-teal-400">⚡</div>
              <span className="text-[10px] font-black uppercase tracking-widest text-teal-400 bg-teal-950/50 px-3 py-1 rounded-full border border-teal-900/50">TRC20</span>
            </div>
            <h3 className="font-bold text-xl text-white mb-2">Cripto (USDT)</h3>
            <p className="text-slate-400 text-[13px] mb-6 border-b border-slate-800 pb-6">
              Ideal para pagos inmediatos, sin fricción burocrática bancaria ni demoras transfronterizas.
            </p>
            <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800/50 mb-8 flex-1 flex flex-col justify-center">
              <p className="text-[11px] text-slate-500 uppercase tracking-widest mb-3 text-center">Wallet Address (Red Tron)</p>
              <p className="font-mono text-[11px] md:text-xs text-teal-400 text-center break-all bg-slate-900 p-3 rounded-lg border border-slate-800">
                TA1Vj... (Tu Billetera Acá)
              </p>
            </div>
            <p className="text-center text-[11px] text-slate-500 mt-auto">Confirmación en 5 minutos.</p>
          </div>

        </div>
      </section>
    </div>
  );
}
