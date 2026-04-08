import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Casos de Estudio y Resultados Operativos | AYCweb",
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
            Analizá cómo resolvimos cuellos de botella reales en manufactura, salud, y operaciones corporativas mediante software B2B.
          </p>
        </div>
      </section>

      {/* CASO 1: METAL MAD (Industria) - AHORA CON VIDEO Y COMPARATIVA */}
      <section id="metal-mad" className="py-24 bg-black border-b border-zinc-900 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="flex-1 space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 bg-emerald-950/30 border border-emerald-900/50 px-3 py-1 rounded-full text-[10px] font-bold text-emerald-400 uppercase tracking-widest mb-4">
                  <span className="text-emerald-500">✓</span> Sector Industrial
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
                  Caso: Automatización Logística
                </h2>
              </div>
              
              {/* BLOQUE ANTES / DESPUÉS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-red-950/10 border border-red-900/30 p-6 rounded-2xl">
                  <h4 className="text-red-400 font-black text-sm uppercase tracking-widest mb-3 flex items-center gap-2">
                    <span>❌</span> El Caos (Antes)
                  </h4>
                  <ul className="text-zinc-400 text-sm space-y-2">
                    <li>• Dependencia de Excel rotos</li>
                    <li>• Precios de flete calculados "a ojo"</li>
                    <li>• 2 horas para armar un presupuesto</li>
                    <li>• Fugas de margen por error humano</li>
                  </ul>
                </div>
                <div className="bg-emerald-950/10 border border-emerald-900/30 p-6 rounded-2xl">
                  <h4 className="text-emerald-400 font-black text-sm uppercase tracking-widest mb-3 flex items-center gap-2">
                    <span>✅</span> El Sistema (Después)
                  </h4>
                  <ul className="text-zinc-400 text-sm space-y-2">
                    <li>• Motor web 100% estandarizado</li>
                    <li>• Combustible calculado vía API</li>
                    <li>• Cotización exacta en 45 segundos</li>
                    <li>• PDF formal autogenerado</li>
                  </ul>
                </div>
              </div>

              {/* DEMO EN VIDEO */}
              <div className="pt-4 border-t border-zinc-900">
                <h4 className="text-white font-bold mb-4">Mirá el sistema operando en tiempo real:</h4>
                <div className="aspect-video w-full max-w-lg rounded-2xl border border-zinc-800 overflow-hidden shadow-2xl bg-black">
                  <iframe 
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/n1xOvGtHsIA" 
                    title="Demo Motor Logístico" 
                    frameBorder="0" 
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/flete" className="bg-zinc-800 hover:bg-zinc-700 text-white font-bold py-3 px-6 rounded-xl transition-all text-center">
                  Probar el Motor tú mismo &rarr;
                </Link>
              </div>
            </div>

            <div className="w-full lg:w-1/3 bg-zinc-900 border border-zinc-800 rounded-3xl p-8 flex flex-col justify-center text-center shadow-2xl sticky top-32">
               <p className="text-6xl font-black text-emerald-500 mb-4">45s</p>
               <p className="text-white font-bold text-lg mb-2">Tiempo de cotización récord</p>
               <p className="text-zinc-500 text-sm">Se eliminó el 98% del tiempo muerto administrativo y el 100% de los errores de cálculo humano.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CASO 2: AYC S.R.L. (Legal/SOW) */}
      <section id="legal" className="py-24 bg-zinc-950 border-b border-zinc-900 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row-reverse gap-12 items-start">
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center gap-2 bg-blue-950/30 border border-blue-900/50 px-3 py-1 rounded-full text-[10px] font-bold text-blue-400 uppercase tracking-widest">
                <span className="text-blue-500">✓</span> Sector Corporativo
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
                Generador de Contratos (SOW)
              </h2>
              
              <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-2xl">
                <h4 className="text-white font-bold mb-2">El Cuello de Botella:</h4>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Redactar un "Statement of Work" (Acuerdo de Trabajo) para cada nuevo cliente requería buscar plantillas viejas, copiar, pegar y rezar para no dejar el nombre del cliente anterior. Cero escalabilidad legal.
                </p>
              </div>

              <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-2xl">
                <h4 className="text-white font-bold mb-2">La Infraestructura:</h4>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Programamos un Generador de Contratos Dinámico. A través de un formulario guiado, el gerente comercial completa los datos clave (cliente, precio, alcance) y el sistema inyecta la información en un documento legal blindado y listo para firmar.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                 <Link href="/sos" className="bg-zinc-800 hover:bg-zinc-700 text-white font-bold py-3 px-6 rounded-xl transition-all text-center">
                  Ver demo del Generador &rarr;
                </Link>
              </div>
            </div>

            <div className="w-full lg:w-1/3 bg-black border border-blue-900/50 rounded-3xl p-8 flex flex-col justify-center text-center shadow-[0_0_40px_rgba(37,99,235,0.15)] sticky top-32">
               <p className="text-6xl font-black text-blue-500 mb-4">100%</p>
               <p className="text-white font-bold text-lg mb-2">Estandarización Legal</p>
               <p className="text-zinc-500 text-sm">Contratos comerciales emitidos al instante, sin dependencias de abogados externos para tareas repetitivas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CASO 3: DRA. BIANCA (Salud) */}
      <section id="clinica" className="py-24 bg-black border-b border-zinc-900 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center gap-2 bg-purple-950/30 border border-purple-900/50 px-3 py-1 rounded-full text-[10px] font-bold text-purple-400 uppercase tracking-widest">
                <span className="text-purple-500">✓</span> Sector Salud
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
                Infraestructura Clínica
              </h2>
              
              <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-2xl">
                <h4 className="text-white font-bold mb-2">El Cuello de Botella:</h4>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  La captación de pacientes dependía exclusivamente del boca en boca o de responder manualmente cientos de mensajes de WhatsApp pidiendo turnos y precios, saturando a la recepción.
                </p>
              </div>

              <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-2xl">
                <h4 className="text-white font-bold mb-2">La Infraestructura:</h4>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Desplegamos un embudo clínico completo. Una landing page persuasiva que filtra pacientes por especialidad, resuelve FAQs comunes y deriva al paciente directamente al flujo de agenda estructurado.
                </p>
              </div>
            </div>

            <div className="w-full lg:w-1/3 bg-zinc-900 border border-zinc-800 rounded-3xl p-8 flex flex-col justify-center text-center shadow-2xl sticky top-32">
               <p className="text-6xl font-black text-purple-500 mb-4">24/7</p>
               <p className="text-white font-bold text-lg mb-2">Captación Activa</p>
               <p className="text-zinc-500 text-sm">El consultorio genera leads y precalifica pacientes incluso fuera del horario de atención.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 bg-zinc-950 text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Tu operación puede ser el próximo caso de éxito.</h2>
          <p className="text-zinc-400 text-lg mb-10 max-w-xl mx-auto">
            Hablemos de negocios. Contanos dónde está la fuga de tiempo en tu empresa y diseñamos la arquitectura para cerrarla.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <a 
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
              target="_blank" rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-500 text-white font-black py-4 px-10 rounded-xl transition-all shadow-[0_0_30px_rgba(37,99,235,0.4)] active:scale-95"
            >
              Quiero algo similar para mi empresa
            </a>
            <Link href="/precios" className="bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-white font-bold py-4 px-10 rounded-xl transition-all">
              Ver Planes de Inversión
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
