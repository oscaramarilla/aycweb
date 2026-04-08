import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Casos de Estudio B2B | AYCweb",
  description: "Ejemplos reales de cómo nuestra infraestructura digital B2B reduce costos ocultos y automatiza procesos comerciales en Paraguay.",
};

export default function CasosPage() {
  const whatsappNumber = "595985864209";
  const whatsappMsg = encodeURIComponent("¡Hola Oscar! Vi los casos de estudio en AYCweb y quiero saber si pueden construir una infraestructura similar para mi empresa.");

  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 text-zinc-50 font-sans pb-24 md:pb-0">
      
      {/* HERO */}
      <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 px-6 text-center overflow-hidden border-b border-zinc-900">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-zinc-900 text-zinc-400 text-xs font-bold uppercase tracking-widest border border-zinc-800 mb-6">
            Resultados Medibles
          </span>
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter leading-[1.05] text-white">
            No vendemos humo. <br/> <span className="text-blue-500">Construimos motores.</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Analizá cómo resolvimos cuellos de botella reales en manufactura, salud y corporativo mediante software de ingeniería comercial.
          </p>
        </div>
      </section>

      {/* CASO 1: METAL MAD (Industria) - Agregado id="metal-mad" y scroll-mt-32 para el ancla */}
      <section id="metal-mad" className="py-24 bg-black border-b border-zinc-900 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="flex-1 space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 bg-emerald-950/30 border border-emerald-900/50 px-3 py-1 rounded-full text-[10px] font-bold text-emerald-400 uppercase tracking-widest mb-4">
                  <span className="text-emerald-500">✓</span> Sector Industrial
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
                  Caso: Metal Mad E.A.S.
                </h2>
              </div>
              
              {/* Microtipografía corregida: Títulos separados de los párrafos */}
              <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-3xl">
                <h4 className="text-emerald-400 font-black text-lg mb-3">El Cuello de Botella Operativo:</h4>
                <p className="text-zinc-400 leading-relaxed">
                  Las cotizaciones de mobiliario escolar dependían de Excel manuales y cálculos mentales de flete. Emitir un presupuesto formal tardaba hasta 2 horas, causando pérdida de licitaciones frente a competidores más ágiles.
                </p>
              </div>

              <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-3xl">
                <h4 className="text-blue-400 font-black text-lg mb-3">La Infraestructura Construida:</h4>
                <p className="text-zinc-400 leading-relaxed">
                  Desarrollamos un Motor Logístico B2B conectado a variables en tiempo real (combustible Petropar, desgaste de flota). El operador ingresa los kilómetros y el sistema ensambla un contrato PDF formal con la cotización exacta en segundos.
                </p>
              </div>

              <div className="pt-2">
                <Link href="/flete" className="inline-flex items-center gap-3 bg-zinc-800 hover:bg-zinc-700 text-white font-bold py-4 px-8 rounded-xl transition-all">
                  Ver Motor Logístico en vivo &rarr;
                </Link>
              </div>
            </div>

            <div className="w-full lg:w-1/3 bg-zinc-900 border border-zinc-800 rounded-3xl p-10 flex flex-col justify-center text-center shadow-2xl sticky top-32">
               <p className="text-7xl font-black text-emerald-500 mb-4">45s</p>
               <p className="text-white font-bold text-xl mb-4">De 2 horas a 45 segundos</p>
               <p className="text-zinc-500 text-sm leading-relaxed">Se eliminó el 98% del tiempo administrativo y el 100% de los errores de cálculo humano.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CASO 2: CORPORATIVO (SOW) - Agregado id="legal" */}
      <section id="legal" className="py-24 bg-zinc-950 border-b border-zinc-900 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row-reverse gap-12 items-start">
            <div className="flex-1 space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 bg-blue-950/30 border border-blue-900/50 px-3 py-1 rounded-full text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-4">
                  <span className="text-blue-500">✓</span> Sector Corporativo
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
                  Generador Legal B2B (SOW)
                </h2>
              </div>
              
              <div className="bg-black/50 border border-zinc-800 p-8 rounded-3xl">
                <h4 className="text-red-400 font-black text-lg mb-3">El Cuello de Botella Operativo:</h4>
                <p className="text-zinc-400 leading-relaxed">
                  Redactar Acuerdos de Trabajo (SOW) requería buscar plantillas viejas, copiar, pegar y revisar manualmente para no dejar datos del cliente anterior. Un proceso lento con alto riesgo legal.
                </p>
              </div>

              <div className="bg-black/50 border border-zinc-800 p-8 rounded-3xl">
                <h4 className="text-blue-400 font-black text-lg mb-3">La Infraestructura Construida:</h4>
                <p className="text-zinc-400 leading-relaxed">
                  Programamos un Generador de Contratos Dinámico. A través de un formulario blindado, el ejecutivo completa los datos clave y el sistema inyecta la información en un documento legal inmutable listo para firma.
                </p>
              </div>
            </div>

            <div className="w-full lg:w-1/3 bg-black border border-blue-900/50 rounded-3xl p-10 flex flex-col justify-center text-center shadow-[0_0_40px_rgba(37,99,235,0.15)] sticky top-32">
               <p className="text-7xl font-black text-blue-500 mb-4">100%</p>
               <p className="text-white font-bold text-xl mb-4">Estandarización Legal</p>
               <p className="text-zinc-500 text-sm leading-relaxed">Contratos emitidos al instante, sin dependencias de abogados externos para tareas de ventas repetitivas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CASO 3: CLÍNICA (Salud) - Agregado id="clinica" */}
      <section id="clinica" className="py-24 bg-black border-b border-zinc-900 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="flex-1 space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 bg-purple-950/30 border border-purple-900/50 px-3 py-1 rounded-full text-[10px] font-bold text-purple-400 uppercase tracking-widest mb-4">
                  <span className="text-purple-500">✓</span> Sector Salud
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
                  Infraestructura Clínica
                </h2>
              </div>
              
              <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-3xl">
                <h4 className="text-red-400 font-black text-lg mb-3">El Cuello de Botella Operativo:</h4>
                <p className="text-zinc-400 leading-relaxed">
                  La captación dependía de responder manualmente cientos de mensajes pidiendo turnos y precios, saturando a la recepción y perdiendo pacientes fuera del horario comercial.
                </p>
              </div>

              <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-3xl">
                <h4 className="text-purple-400 font-black text-lg mb-3">La Infraestructura Construida:</h4>
                <p className="text-zinc-400 leading-relaxed">
                  Desplegamos un embudo clínico 24/7. Una landing page que filtra pacientes, resuelve FAQs automáticamente y deriva directamente al flujo de agenda estructurado sin intervención humana.
                </p>
              </div>
            </div>

            <div className="w-full lg:w-1/3 bg-zinc-900 border border-zinc-800 rounded-3xl p-10 flex flex-col justify-center text-center shadow-2xl sticky top-32">
               <p className="text-7xl font-black text-purple-500 mb-4">24/7</p>
               <p className="text-white font-bold text-xl mb-4">Captación Activa</p>
               <p className="text-zinc-500 text-sm leading-relaxed">Generación y precalificación de pacientes en automático, liberando al personal de recepción.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 bg-zinc-950 text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Tu operación puede ser el próximo caso de éxito.</h2>
          <p className="text-zinc-400 text-lg mb-10 max-w-xl mx-auto">
            Contanos dónde está la fuga de tiempo en tu empresa y diseñamos la arquitectura exacta para cerrarla.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <a 
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
              target="_blank" rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-500 text-white font-black py-4 px-10 rounded-xl transition-all shadow-[0_0_30px_rgba(37,99,235,0.4)] active:scale-95"
            >
              Auditar mi empresa hoy
            </a>
            <Link href="/precios" className="bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-white font-bold py-4 px-10 rounded-xl transition-all">
              Ver Inversión B2B
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
