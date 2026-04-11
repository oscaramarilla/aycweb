// app/page.tsx
import Link from "next/link";
import VideoAutoridad from "@/components/VideoAutoridad";

export default function Home() {
  const whatsappNumber = "595985864209";
  const whatsappMsg = encodeURIComponent("Hola Oscar, quiero detectar la fuga operativa en mi empresa. ¿Podemos agendar una auditoría sin costo?");

  return (
    <main className="flex min-h-screen flex-col bg-zinc-950 font-sans text-zinc-50">
      
      {/* 1. HERO REESCRITO (Promesa Operativa) */}
      <section className="relative w-full pt-32 pb-16 px-6 border-b border-zinc-900 overflow-hidden">
        {/* Glow de fondo para look premium */}
        <div className="absolute top-0 right-0 -z-10 h-[600px] w-[600px] rounded-full bg-blue-600/10 blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="text-left space-y-6 z-10">
            <span className="inline-block border border-blue-900/50 bg-blue-950/30 text-blue-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-2">
              Infraestructura B2B
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tighter">
              Sistemas que venden por vos <span className="text-blue-500">24/7.</span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-xl leading-relaxed">
              Convertimos cotizaciones lentas, Excel rotos y leads perdidos en operaciones eficientes. Para industrias, clínicas y empresas B2B que ya venden, pero pierden tiempo y margen en procesos manuales.
            </p>
            
            <ul className="space-y-3 pt-2">
              <li className="flex items-center gap-3 text-zinc-300 font-medium">
                <span className="text-blue-500 font-black">✓</span> Cotizaciones en segundos, no en horas.
              </li>
              <li className="flex items-center gap-3 text-zinc-300 font-medium">
                <span className="text-blue-500 font-black">✓</span> PDFs y contratos generados automáticamente.
              </li>
              <li className="flex items-center gap-3 text-zinc-300 font-medium">
                <span className="text-blue-500 font-black">✓</span> Captación de leads sin fricción.
              </li>
            </ul>
            
            <div className="pt-6 flex flex-col sm:flex-row gap-4">
              <a 
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
                target="_blank" rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-500 text-white font-black py-4 px-8 rounded-xl shadow-[0_0_30px_rgba(37,99,235,0.3)] transition-all active:scale-95 text-center"
              >
                Quiero detectar mi fuga operativa
              </a>
              <Link 
                href="/casos" 
                className="bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-white font-bold py-4 px-8 rounded-xl transition-all text-center"
              >
                Ver casos reales
              </Link>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end w-full relative z-10">
            <VideoAutoridad />
          </div>

        </div>
      </section>

      {/* 2. FRANJA DE PRUEBA INMEDIATA (Arriba del pliegue / justo después del Hero) */}
      <section className="w-full bg-black border-b border-zinc-900 py-8 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x divide-zinc-900">
          <div className="px-4">
            <p className="text-2xl font-black text-white">15+ Sistemas</p>
            <p className="text-xs text-zinc-500 uppercase tracking-widest font-bold mt-1">Infraestructura operando hoy</p>
          </div>
          <div className="px-4">
            <p className="text-2xl font-black text-emerald-500">45 Segundos</p>
            <p className="text-xs text-zinc-500 uppercase tracking-widest font-bold mt-1">Caso real: de 2h a 45s</p>
          </div>
          <div className="px-4">
            <p className="text-2xl font-black text-white">3 Verticales</p>
            <p className="text-xs text-zinc-500 uppercase tracking-widest font-bold mt-1">Industria, Clínicas y B2B</p>
          </div>
          <div className="px-4">
            <p className="text-2xl font-black text-white">RUC Formal</p>
            <p className="text-xs text-zinc-500 uppercase tracking-widest font-bold mt-1">Proveedor serio (PY)</p>
          </div>
        </div>
      </section>

      {/* 3. DIAGNÓSTICO DEL CAOS (El Dolor) */}
      <section className="w-full py-24 px-6 bg-zinc-950">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-16">
            ¿Te suena familiar este caos?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-red-950/10 border border-red-900/20 p-8 rounded-3xl text-left">
              <span className="text-4xl mb-4 block">⏳</span>
              <h3 className="text-xl font-bold text-white mb-3">Cotizaciones Lentas</h3>
              <p className="text-zinc-400 text-sm">Tu equipo pierde horas armando presupuestos manuales mientras el cliente se enfría y busca a la competencia.</p>
            </div>
            <div className="bg-red-950/10 border border-red-900/20 p-8 rounded-3xl text-left">
              <span className="text-4xl mb-4 block">📉</span>
              <h3 className="text-xl font-bold text-white mb-3">Errores de Cálculo</h3>
              <p className="text-zinc-400 text-sm">Dependes de Excel rotos. Un número mal copiado significa perder margen de ganancia en una venta grande.</p>
            </div>
            <div className="bg-red-950/10 border border-red-900/20 p-8 rounded-3xl text-left">
              <span className="text-4xl mb-4 block">👻</span>
              <h3 className="text-xl font-bold text-white mb-3">Fugas fuera de horario</h3>
              <p className="text-zinc-400 text-sm">Llegan consultas a WhatsApp un domingo y nadie responde. El lead de alto valor se pierde en el historial.</p>
            </div>
          </div>

          <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl max-w-3xl mx-auto">
            <p className="text-xl text-white font-medium mb-2">
              Si te pasa una sola de estas tres, no te falta esfuerzo. <span className="text-red-400 font-bold">Te falta sistema.</span>
            </p>
            <p className="text-zinc-400">
              Ahí entra AYCweb: captamos, ordenamos y automatizamos tu operación comercial.
            </p>
          </div>
        </div>
      </section>

      {/* 4. AUTORIDAD OPERATIVA (La Historia) */}
      <section className="w-full py-24 px-6 bg-black border-y border-zinc-900">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-zinc-900 text-zinc-400 text-xs font-bold uppercase tracking-widest border border-zinc-800 mb-6">
            Nuestra Tesis
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-8">
            No nacimos vendiendo diseño. <br/>Nacimos resolviendo caos.
          </h2>
          <p className="text-xl text-zinc-400 leading-relaxed mb-10">
            Fundado por un operador que programó sus propios sistemas para sobrevivir al caos real de manufactura, logística y licitaciones. Sabemos lo que cuesta perder dinero por una cotización mal calculada.
          </p>
          <Link href="/experiencia" className="text-blue-400 font-bold hover:text-blue-300 underline underline-offset-4">
            Conocé nuestra historia operativa &rarr;
          </Link>
        </div>
      </section>

      {/* CTA FINAL QUIRÚRGICO */}
      <section className="py-24 bg-zinc-950 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
            Si tu empresa tarda en cotizar, responder o formalizar una venta...
          </h2>
          <p className="text-zinc-400 text-xl mb-10">
            La fuga no está en el mercado. <span className="text-white font-bold">Está en el sistema.</span>
          </p>
          
          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
            target="_blank" rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-black py-5 px-12 rounded-xl transition-all shadow-[0_0_30px_rgba(37,99,235,0.4)] active:scale-95 text-lg mb-8"
          >
            Quiero destrabar mi operación
          </a>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-zinc-500 font-medium">
            <span className="flex items-center gap-2"><span className="text-emerald-500">✓</span> Diagnóstico inicial sin costo</span>
            <span className="flex items-center gap-2"><span className="text-emerald-500">✓</span> Atención técnica directa</span>
            <span className="flex items-center gap-2"><span className="text-emerald-500">✓</span> Respuesta rápida por WhatsApp</span>
          </div>
        </div>
      </section>

    </main>
  );
}
