"use client";

import { useState } from "react";
import Image from "next/image";

// (Mantenemos los componentes CampoCopia y TerminalDePago exactamente iguales que antes)
const CampoCopia = ({ etiqueta, valor }: { etiqueta: string; valor: string }) => {
  const [copiado, setCopiado] = useState(false);
  const ejecutarCopia = async () => {
    try {
      await navigator.clipboard.writeText(valor);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    } catch (error) {
      console.error("No se pudo copiar:", error);
    }
  };
  return (
    <div className="flex items-center justify-between gap-2 p-3 mt-2 bg-zinc-950/50 rounded-xl border border-zinc-800/80 text-sm group">
      <div className="overflow-hidden flex flex-col sm:flex-row sm:items-center">
        <span className="text-zinc-500 mr-2 text-[11px] uppercase tracking-widest font-bold">{etiqueta}</span>
        <span className="text-zinc-200 font-mono tracking-tight text-sm truncate">{valor}</span>
      </div>
      <button onClick={ejecutarCopia} className={`flex-shrink-0 text-xs font-bold px-3 py-1.5 rounded-lg transition-all active:scale-95 ${copiado ? "bg-emerald-500 text-zinc-950 shadow-[0_0_10px_rgba(16,185,129,0.4)]" : "bg-zinc-800 hover:bg-zinc-700 text-zinc-300"}`}>
        {copiado ? "¡Copiado!" : "Copiar"}
      </button>
    </div>
  );
};

const TerminalDePago = ({ planNombre, planPrecio, highlight }: { planNombre: string, planPrecio: string, highlight?: string }) => {
  const [metodoPago, setMetodoPago] = useState<"fiat" | "crypto">("fiat");
  const numeroWhatsApp = "595985864209"; 
  const mensajeBase = encodeURIComponent(`¡Hola Oscar! Acabo de transferir por el plan ${planNombre} (${planPrecio}). Adjunto mi comprobante para iniciar la implementación:`);
  
  const glowBorder = highlight === 'blue' ? 'border-blue-500/50 shadow-[0_0_30px_rgba(37,99,235,0.15)]' : 'border-zinc-800 shadow-lg';

  return (
    <div className={`rounded-3xl border bg-zinc-900 p-2 relative overflow-hidden ${glowBorder}`}>
      <div className="flex p-1.5 gap-1.5 bg-zinc-950 rounded-2xl mb-4 shadow-inner">
        <button onClick={() => setMetodoPago("fiat")} className={`flex-1 py-3 text-xs sm:text-sm font-bold rounded-xl transition-all flex items-center justify-center gap-2 ${metodoPago === "fiat" ? "bg-zinc-800 text-white shadow-md border border-zinc-700" : "text-zinc-500 hover:text-zinc-300"}`}>
          🏦 Transferencia Bancaria
        </button>
        <button onClick={() => setMetodoPago("crypto")} className={`flex-1 py-3 text-xs sm:text-sm font-bold rounded-xl transition-all flex items-center justify-center gap-2 ${metodoPago === "crypto" ? "bg-blue-900/30 text-blue-400 shadow-md border border-blue-900/40" : "text-zinc-500 hover:text-zinc-300"}`}>
          🪙 Cripto (USDT TRC20)
        </button>
      </div>

      <div className="p-4 text-center">
        {metodoPago === "fiat" ? (
          <div className="animate-in fade-in duration-300">
            <div className="bg-white p-2 rounded-2xl inline-block mb-6 mx-auto w-40 h-40 border-4 border-zinc-800 relative">
              <Image src="/qr-fiat.webp" alt="QR Banco" fill className="object-contain p-2 rounded-xl" priority />
            </div>
            <div className="text-left bg-zinc-950/80 p-5 rounded-2xl border border-zinc-800/80 text-sm mb-6 max-w-sm mx-auto shadow-inner">
              <div className="mb-4 border-b border-zinc-800 pb-3">
                <p className="text-zinc-500 text-xs uppercase tracking-widest font-bold mb-1">Banco Itaú</p>
                <p className="text-white font-bold text-base">Oscar Emigdio Amarilla Caceres</p>
              </div>
              <CampoCopia etiqueta="Cuenta" valor="720601573" />
              <CampoCopia etiqueta="Alias/Tel" valor="0985864209" />
              <CampoCopia etiqueta="RUC" valor="4499507-5" />
            </div>
          </div>
        ) : (
          <div className="animate-in fade-in duration-300">
            <div className="bg-white p-2 rounded-2xl inline-block mb-6 mx-auto w-40 h-40 border-4 border-blue-900/50 relative">
              <Image src="/qr-crypto.webp" alt="QR USDT" fill className="object-contain p-2 rounded-xl" priority />
            </div>
            <div className="text-left bg-blue-950/20 p-5 rounded-2xl border border-blue-900/30 text-sm mb-6 max-w-sm mx-auto shadow-inner">
              <div className="flex items-center gap-2 mb-2 border-b border-blue-900/30 pb-3">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <p className="text-blue-400 font-bold text-base">Red TRON (TRC20)</p>
              </div>
              <CampoCopia etiqueta="Address" valor="TLUzuQDLjVwp4UDFAEFuypw5LmFf1K1PRQ" />
            </div>
          </div>
        )}

        <a href={`https://wa.me/${numeroWhatsApp}?text=${mensajeBase}`} target="_blank" rel="noopener noreferrer" className="w-full bg-[#25D366] hover:bg-[#1DA851] text-zinc-950 font-black py-4 px-6 rounded-xl flex items-center justify-center gap-3 transition-all active:scale-95 shadow-md">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/></svg>
          Ya pagué, enviar comprobante
        </a>
      </div>
    </div>
  );
};

export default function CheckoutOS() {
  return (
    <div className="bg-zinc-950 text-zinc-50 font-sans min-h-screen pb-20">
      
      {/* HEADER CHECKOUT */}
      <section className="pt-12 pb-10 px-6 text-center border-b border-zinc-900 bg-black">
        <div className="max-w-3xl mx-auto">
          <p className="inline-flex rounded-full bg-zinc-900 border border-zinc-800 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4">
            Portal de Pago Seguro
          </p>
          <h1 className="text-3xl md:text-5xl font-black tracking-tighter text-white mb-4">
            Activá tu Infraestructura.
          </h1>
          <p className="text-zinc-400">Escaneá el código, transferí el monto exacto y validamos en WhatsApp al instante.</p>
        </div>
      </section>

      {/* TERMINALES DE PAGO PURAS */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 lg:grid-cols-2">
          
          {/* CHECKOUT FLASH */}
          <article className="rounded-3xl border border-zinc-800 bg-black p-6 shadow-xl flex flex-col">
            <div className="mb-6 pb-6 border-b border-zinc-900 flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-black text-white">Landing Flash</h2>
                <p className="text-zinc-500 text-sm mt-1">Pago único por implementación.</p>
              </div>
              <div className="text-right">
                <p className="text-3xl font-black text-white">Gs. 1.5M</p>
                <p className="text-zinc-500 text-xs mt-1">O equivalente a USD $200</p>
              </div>
            </div>
            <TerminalDePago planNombre="Landing Flash" planPrecio="Gs. 1.500.000 / USD $200" />
          </article>

          {/* CHECKOUT AUTOMATIZACION */}
          <article className="rounded-3xl border border-blue-900/50 bg-gradient-to-b from-blue-900/10 to-black p-6 shadow-[0_0_40px_rgba(37,99,235,0.1)] flex flex-col relative transform md:-translate-y-2">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
              Plan Más Solicitado
            </div>
            <div className="mb-6 pb-6 border-b border-zinc-900 flex justify-between items-center mt-2">
              <div>
                <h2 className="text-2xl font-black text-white">Automatización</h2>
                <p className="text-zinc-500 text-sm mt-1">Pago único por infraestructura.</p>
              </div>
              <div className="text-right">
                <p className="text-3xl font-black text-blue-400">Gs. 2.5M</p>
                <p className="text-zinc-500 text-xs mt-1">O equivalente a USD $340</p>
              </div>
            </div>
            <TerminalDePago planNombre="Automatización" planPrecio="Gs. 2.500.000 / USD $340" highlight="blue" />
          </article>

        </div>
      </section>

      {/* FOOTER CHECKOUT */}
      <div className="text-center text-zinc-500 text-xs px-6">
        <p>Los pagos por Cripto (USDT) se verifican en la blockchain de TRON automáticamente en 3 minutos.</p>
      </div>

    </div>
  );
}
