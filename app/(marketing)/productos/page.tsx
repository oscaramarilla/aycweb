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
              <h2 className="text-3xl font-black text-white mb-6">Industria & Logística</h2>
              
              <div className="space-y-4 mb-10">
                <div className="bg-zinc-900/50 p-5 rounded-2xl border border-zinc-800">
                  <p className="text-xs font-bold text-red-400 uppercase tracking-widest mb-2">Cuello de botella típico</p>
                  <p className="text-sm text-zinc-300">Cotizaciones manuales lentas en Excel, cálculo de fletes a ojo y pérdida de margen por variaciones de combustible.</p>
                </div>
                <div className="bg-zinc-900/50 p-5 rounded-2xl border border-zinc-800">
                  <p className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-2">Infraestructura AYCweb</p>
                  <p className="text-sm text-zinc-300">Motores logísticos integrados a APIs de combustible. Cotizadores dinámicos que emiten PDFs automáticos formales.</p>
                </div>
              </div>
              
              {/* DEEP LINK AL CASO ESPECÍFICO */}
              <Link href="/casos#metal-mad" className="text-emerald-500 font-bold hover:underline inline-flex items-center gap-2 text-lg">
                Ver caso resuelto: Metal Mad E.A.S. &rarr;
              </Link>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 shadow-2xl h-full min-h-[300px] flex items-center justify-center relative overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <p className="text-zinc-400 font-bold text-xl relative z-10 text-center leading-relaxed">
                 "De tardar 2 horas cotizando fletes, a generar un contrato formal en <span className="text-emerald-400">45 segundos</span>."
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTOR 2: SALUD & CLÍNICAS */}
      <section className="py-24 bg-zinc-950 border-b border-zinc-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 bg-zinc-900 border border-zinc-800 rounded-3xl p-10 shadow-2xl h-full min-h-[300px] flex items-center justify-center relative overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <p className="text-zinc-400 font-bold text-xl relative z-10 text-center leading-relaxed">
                 "Atención automatizada <span className="text-purple-400">24/7</span> sin saturar la recepción de la clínica médica."
               </p>
            </div>
            <div className="order-1 md:order-2">
              <div className="text-4xl mb-4">🏥</div>
              <h2 className="text-3xl font-black text-white mb-6">Salud & Clínicas</h2>
              
              <div className="space-y-4 mb-10">
                <div className="bg-black/50 p-5 rounded-2xl border border-zinc-800">
                  <p className="text-xs font-bold text-red-400 uppercase tracking-widest mb-2">Cuello de botella típico</p>
                  <p className="text-sm text-zinc-300">Recepción saturada respondiendo precios por WhatsApp. Pacientes perdidos fuera de horario comercial por falta de respuesta.</p>
                </div>
                <div className="bg-black/50 p-5 rounded-2xl border border-zinc-800">
                  <p className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-2">Infraestructura AYCweb</p>
                  <p className="text-sm text-zinc-300">Embudos de captación clínica precalificada. Sistemas de derivación inteligente a agenda automática.</p>
                </div>
              </div>

              {/* DEEP LINK AL CASO ESPECÍFICO */}
              <Link href="/casos#clinica" className="text-purple-500 font-bold hover:underline inline-flex items-center gap-2 text-lg">
                Ver caso resuelto: Infraestructura Clínica &rarr;
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
              <h2 className="text-3xl font-black text-white mb-6">Corporativo & Legal</h2>
              
              <div className="space-y-4 mb-10">
                <div className="bg-zinc-900/50 p-5 rounded-2xl border border-zinc-800">
                  <p className="text-xs font-bold text-red-400 uppercase tracking-widest mb-2">Cuello de botella típico</p>
                  <p className="text-sm text-zinc-300">Redacción repetitiva de Acuerdos (SOW), copiando y pegando en Word con alto riesgo de error de tipeo.</p>
                </div>
                <div className="bg-zinc-900/50 p-5 rounded-2xl border border-zinc-800">
                  <p className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-2">Infraestructura AYCweb</p>
                  <p className="text-sm text-zinc-300">Generadores automáticos de contratos. Formularios que inyectan datos directamente en documentos blindados.</p>
                </div>
              </div>

              {/* DEEP LINK AL CASO ESPECÍFICO */}
              <Link href="/casos#legal" className="text-blue-500 font-bold hover:underline inline-flex items-center gap-2 text-lg">
                Ver caso resuelto: Generador SOW &rarr;
              </Link>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 shadow-2xl h-full min-h-[300px] flex items-center justify-center relative overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <p className="text-zinc-400 font-bold text-xl relative z-10 text-center leading-relaxed">
                 "De redactar un Word manual a generar contratos legales automáticos en <span className="text-blue-400">10 segundos</span>."
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 bg-black text-center relative overflow-hidden border-t border-zinc-900">
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">¿No encontrás tu sector?</h2>
          <p className="text-zinc-400 text-lg mb-10 max-w-xl mx-auto">
            La ingeniería de software se adapta a cualquier rubro. Si tenés un cuello de botella manual repetitivo, nosotros podemos automatizarlo.
          </p>
          <div className="flex justify-center">
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
