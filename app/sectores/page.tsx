import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Soluciones por Industria | AYCweb",
  description: "Desarrollamos infraestructura digital B2B adaptada a las lógicas operativas de la manufactura, salud, B2G y corporativo en Paraguay.",
};

export default function SectoresPage() {
  const whatsappNumber = "595985864209";
  const whatsappMsg = encodeURIComponent("¡Hola Oscar! Estoy viendo las soluciones por industria de AYCweb y quiero automatizar mi empresa.");

  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 text-zinc-50 font-sans pb-24 md:pb-0">
      
      <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 px-6 text-center overflow-hidden border-b border-zinc-900">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter leading-[1.05] text-white">
            Soluciones por <span className="text-blue-500">Industria.</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            No aplicamos la misma plantilla para todos; diseñamos la arquitectura exacta que tu operativa exige.
          </p>
        </div>
      </section>

      {/* SECTOR 1: INDUSTRIA & LOGÍSTICA */}
      <section className="py-24 bg-black border-b border-zinc-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-4xl mb-4">🏭</div>
              <h2 className="text-3xl font-black text-white mb-4">Industria & Logística</h2>
              
              <div className="space-y-4 mb-8">
                <div className="bg-zinc-900/50 p-4 rounded-xl border border-zinc-800">
                  <p className="text-xs font-bold text-red-400 uppercase tracking-widest mb-1">Cuello de botella típico</p>
                  <p className="text-sm text-zinc-300">Cotizaciones manuales lentas, cálculo de fletes a ojo y pérdida de margen por variaciones de combustible.</p>
                </div>
                <div className="bg-zinc-900/50 p-4 rounded-xl border border-zinc-800">
                  <p className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-1">Infraestructura AYCweb</p>
                  <p className="text-sm text-zinc-300">Motores logísticos conectados a APIs de combustible. Cotizadores que emiten PDFs automáticos.</p>
                </div>
                <div className="bg-zinc-900/50 p-4 rounded-xl border border-zinc-800">
                  <p className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-1">Resultado esperado</p>
                  <p className="text-sm text-zinc-300">Reducción del 90% en tiempos administrativos y cero errores de cálculo humano.</p>
                </div>
              </div>
              
              {/* DEEP LINK AL CASO ESPECÍFICO */}
              <Link href="/casos#metal-mad" className="text-emerald-500 font-bold hover:underline inline-flex items-center gap-2">
                Ver caso operativo: Metal Mad &rarr;
              </Link>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 shadow-2xl h-full min-h-[300px] flex items-center justify-center relative overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <p className="text-zinc-500 font-bold text-lg relative z-10 text-center px-4">
                 "De tardar 2 horas cotizando fletes, a generar un contrato formal en 45 segundos."
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTOR 2: SALUD & CLÍNICAS */}
      <section className="py-24 bg-zinc-950 border-b border-zinc-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 bg-zinc-900 border border-zinc-800 rounded-3xl p-8 shadow-2xl h-full min-h-[300px] flex items-center justify-center relative overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <p className="text-zinc-500 font-bold text-lg relative z-10 text-center px-4">
                 "Atención automatizada 24/7 sin saturar la recepción de la clínica."
               </p>
            </div>
            <div className="order-1 md:order-2">
              <div className="text-4xl mb-4">🏥</div>
              <h2 className="text-3xl font-black text-white mb-4">Salud & Clínicas Especializadas</h2>
              
              <div className="space-y-4 mb-8">
                <div className="bg-black/50 p-4 rounded-xl border border-zinc-800">
                  <p className="text-xs font-bold text-red-400 uppercase tracking-widest mb-1">Cuello de botella típico</p>
                  <p className="text-sm text-zinc-300">Recepción saturada respondiendo precios por WhatsApp. Pacientes perdidos fuera de horario comercial.</p>
                </div>
                <div className="bg-black/50 p-4 rounded-xl border border-zinc-800">
                  <p className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-1">Infraestructura AYCweb</p>
                  <p className="text-sm text-zinc-300">Embudos de captación precalificada. Sistemas de derivación inteligente a agenda.</p>
                </div>
                <div className="bg-black/50 p-4 rounded-xl border border-zinc-800">
                  <p className="text-xs font-bold text-purple-400 uppercase tracking-widest mb-1">Resultado esperado</p>
                  <p className="text-sm text-zinc-300">Captación de pacientes 24/7 y liberación de carga humana en tareas repetitivas.</p>
                </div>
              </div>

              {/* DEEP LINK AL CASO ESPECÍFICO */}
              <Link href="/casos#clinica" className="text-purple-500 font-bold hover:underline inline-flex items-center gap-2">
                Ver caso operativo: Dra. Bianca &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTOR 3: CORPORATIVO & LEGAL */}
      <section className="py-24 bg-black border-b border-zinc-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-4xl mb-4">💼</div>
              <h2 className="text-3xl font-black text-white mb-4">Corporativo & Legal</h2>
              
              <div className="space-y-4 mb-8">
                <div className="bg-zinc-900/50 p-4 rounded-xl border border-zinc-800">
                  <p className="text-xs font-bold text-red-400 uppercase tracking-widest mb-1">Cuello de botella típico</p>
                  <p className="text-sm text-zinc-300">Redacción repetitiva de Acuerdos de Trabajo (SOW), copiando y pegando plantillas en Word con alto riesgo de error.</p>
                </div>
                <div className="bg-zinc-900/50 p-4 rounded-xl border border-zinc-800">
                  <p className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-1">Infraestructura AYCweb</p>
                  <p className="text-sm text-zinc-300">Generadores automáticos de contratos. Formularios que inyectan datos en documentos blindados listos para firma.</p>
                </div>
                <div className="bg-zinc-900/50 p-4 rounded-xl border border-zinc-800">
                  <p className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-1">Resultado esperado</p>
                  <p className="text-sm text-zinc-300">Estandarización 100% segura. Cero dependencia de abogados para tareas rutinarias de ventas.</p>
                </div>
              </div>

              {/* DEEP LINK AL CASO ESPECÍFICO */}
              <Link href="/casos#legal" className="text-blue-500 font-bold hover:underline inline-flex items-center gap-2">
                Ver caso operativo: Generador SOW &rarr;
              </Link>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 shadow-2xl h-full min-h-[300px] flex items-center justify-center relative overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <p className="text-zinc-500 font-bold text-lg relative z-10 text-center px-4">
                 "De redactar Word manual a generar contratos legales automáticos en 10 segundos."
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTOR 4: EDUCACIÓN B2G */}
      <section className="py-24 bg-zinc-950 border-b border-zinc-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 bg-zinc-900 border border-zinc-800 rounded-3xl p-8 shadow-2xl h-full min-h-[300px] flex items-center justify-center relative overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <p className="text-zinc-500 font-bold text-lg relative z-10 text-center px-4">
                 "Infraestructura escalable capaz de soportar la concurrencia de miles de usuarios simultáneos."
               </p>
            </div>
            <div className="order-1 md:order-2">
              <div className="text-4xl mb-4">🏛️</div>
              <h2 className="text-3xl font-black text-white mb-4">Educación & Gobierno (B2G)</h2>
              
              <div className="space-y-4 mb-8">
                <div className="bg-black/50 p-4 rounded-xl border border-zinc-800">
                  <p className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-1">Infraestructura AYCweb</p>
                  <p className="text-sm text-zinc-300">Portales web institucionales de alto tráfico. Arquitecturas seguras en la nube (AWS/Vercel) para garantizar estabilidad.</p>
                </div>
                <div className="bg-black/50 p-4 rounded-xl border border-zinc-800">
                  <p className="text-xs font-bold text-orange-400 uppercase tracking-widest mb-1">Resultado esperado</p>
                  <p className="text-sm text-zinc-300">Disponibilidad 99.9% y cumplimiento de estándares técnicos para licitaciones públicas.</p>
                </div>
              </div>

              <a href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hola Oscar, quiero agendar una auditoría técnica para nuestra institución.")}`} target="_blank" rel="noopener noreferrer" className="text-orange-500 font-bold hover:underline inline-flex items-center gap-2">
                Consultar por arquitectura institucional &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 bg-black text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">¿No encontrás tu sector?</h2>
          <p className="text-zinc-400 text-lg mb-10 max-w-xl mx-auto">
            La ingeniería de software se adapta a cualquier rubro. Si tenés un cuello de botella manual, podemos automatizarlo.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <a 
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
              target="_blank" rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-500 text-white font-black py-4 px-10 rounded-xl transition-all shadow-[0_0_30px_rgba(37,99,235,0.4)] active:scale-95"
            >
              Agendar Diagnóstico Operativo
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
