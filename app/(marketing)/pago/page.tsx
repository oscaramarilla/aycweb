"use client";

import Link from "next/link";
import { AYCWEB_CONTACT } from "@/lib/config/contact";

export default function PagoFastTrack() {
  const whatsappNumber = AYCWEB_CONTACT.whatsappNumber;
  const whatsappMsgPago = encodeURIComponent("¡Hola Oscar! Acabo de realizar el pago/seña para iniciar la arquitectura de mi sistema. Te adjunto el comprobante.");

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans pb-24 pt-12 md:pt-20">
      
      {/* HEADER VIP */}
      <section className="max-w-4xl mx-auto px-6 text-center mb-16 mt-10 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-emerald-600/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>
        
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-emerald-900/50 bg-emerald-950/30 text-xs font-bold uppercase tracking-widest text-emerald-400">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          Acceso Fast-Track
        </div>
        <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter text-white">
          Asegurá tu infraestructura operativa.
        </h1>
        <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
          Para empresas y profesionales decididos que no quieren perder tiempo. Congelá tu cupo y pasemos directamente a la arquitectura de tu negocio.
        </p>
      </section>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* COLUMNA IZQUIERDA: EL PROCESO Y FILOSOFÍA */}
        <div className="flex flex-col gap-8">
          <div className="bg-black border border-zinc-800 p-8 rounded-3xl">
            <h2 className="text-2xl font-black text-white mb-6">Nuestro flujo de trabajo</h2>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-zinc-800 before:to-transparent hidden-line-mobile">
              
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-zinc-950 bg-blue-600 text-white font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_20px_rgba(37,99,235,0.4)] z-10">1</div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-zinc-900/50 p-5 rounded-2xl border border-zinc-800">
                  <h3 className="font-bold text-white mb-1">Diagnóstico Operativo</h3>
                  <p className="text-sm text-zinc-400">Auditoría profunda de la empresa o profesional para detectar cuellos de botella.</p>
                </div>
              </div>
              
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-zinc-950 bg-zinc-800 text-zinc-400 font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">2</div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-zinc-900/50 p-5 rounded-2xl border border-zinc-800">
                  <h3 className="font-bold text-white mb-1">Diseño del Sistema</h3>
                  <p className="text-sm text-zinc-400">Arquitectura de software B2B, flujos de automatización y UI/UX.</p>
                </div>
              </div>

              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-zinc-950 bg-zinc-800 text-zinc-400 font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">3</div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-zinc-900/50 p-5 rounded-2xl border border-zinc-800">
                  <h3 className="font-bold text-white mb-1">Implementación</h3>
                  <p className="text-sm text-zinc-400">Despliegue en producción, pruebas de estrés y entrega de llaves.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900/30 border border-zinc-800 p-8 rounded-3xl text-center">
            <span className="text-4xl block mb-4">🛡️</span>
            <h3 className="text-lg font-bold text-white mb-2">Política de Admisión</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Solo elegimos a empresas y profesionales alineados con la visión y política de nuestra firma. Si luego de recibir tu pago inicial determinamos en el Diagnóstico que no podemos escalar tu operación, te reintegramos el 100% de tu dinero sin preguntas.
            </p>
          </div>
        </div>

        {/* COLUMNA DERECHA: DATOS DE PAGO */}
        <div className="bg-black border-2 border-zinc-800 p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden flex flex-col">
          <div className="absolute top-0 right-0 bg-zinc-800 text-white text-[10px] font-bold px-4 py-1 rounded-bl-xl uppercase tracking-widest">B2B Checkout</div>
          
          <h2 className="text-2xl font-black text-white mb-2 mt-4">Coordenadas de Inversión</h2>
          <p className="text-sm text-zinc-400 mb-8">Aboná el 50% de setup inicial o el pago completo para bloquear agenda de desarrollo.</p>

          <div className="bg-zinc-900/80 rounded-2xl p-6 mb-6 border border-zinc-800">
            <h3 className="text-emerald-400 font-bold text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className="text-xl">🏦</span> Transferencia Bancaria
            </h3>
            <div className="space-y-3 text-sm text-zinc-300">
              <div className="flex justify-between border-b border-zinc-800 pb-2">
                <span className="text-zinc-500">Banco:</span> <strong className="text-white">Itaú Paraguay</strong>
              </div>
              <div className="flex justify-between border-b border-zinc-800 pb-2">
                <span className="text-zinc-500">Titular:</span> <strong className="text-white">A Y C S.R.L.</strong>
              </div>
              <div className="flex justify-between border-b border-zinc-800 pb-2">
                <span className="text-zinc-500">RUC:</span> <strong className="text-white">80131456-0</strong>
              </div>
              <div className="flex justify-between pb-1">
                <span className="text-zinc-500">N° de Cuenta:</span> <strong className="text-white">X.XXX.XXX</strong> {/* Rellená con tu nro de cuenta */}
              </div>
            </div>
          </div>

          <div className="bg-zinc-900/80 rounded-2xl p-6 mb-8 border border-zinc-800 flex items-center gap-6">
             <div className="w-24 h-24 bg-white rounded-xl p-2 shrink-0">
               {/* Reemplazá el src con tu QR real si tenés */}
               <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://wa.me/595985864209" alt="QR Code" className="w-full h-full object-cover rounded-lg" />
             </div>
             <div>
               <h3 className="text-blue-400 font-bold text-sm uppercase tracking-widest mb-1 flex items-center gap-2">
                <span className="text-lg">💰</span> Billetera / USDT
               </h3>
               <p className="text-xs text-zinc-400 mb-2">Escaneá para acceder directo a nuestro link de pago internacional o billetera cripto.</p>
               <p className="text-[10px] text-zinc-500 italic border-t border-zinc-800 pt-2 mt-2">Nota: Los valores en nuestra matriz de precios ya reflejan el 35% de descuento base aplicado por liquidación directa/cripto.</p>
             </div>
          </div>

          <a 
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMsgPago}`}
            target="_blank" rel="noopener noreferrer"
            className="w-full text-center bg-white hover:bg-zinc-200 text-black font-black py-4 rounded-xl transition-all shadow-lg mt-auto flex items-center justify-center gap-2"
          >
            Enviar Comprobante 
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </a>
        </div>

      </div>
    </div>
  );
}
