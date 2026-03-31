import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Motor de Cotización Logística B2B | AYCweb",
  description: "Sistematizá tu empresa de transporte. Software de cotización de fletes en tiempo real, cálculo de combustible, peajes y generación de contratos PDF.",
};

export default function MotorLogisticoLanding() {
  const whatsappNumber = "595985864209";
  const whatsappMsg = encodeURIComponent("¡Hola Oscar! Quiero implementar el Motor de Cotización Logística en mi empresa de transporte. ¿Agendamos una auditoría?");

  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 text-zinc-50 font-sans pb-24 md:pb-0">
      
      {/* HERO: EL DOLOR Y LA SOLUCIÓN */}
      <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 px-6 text-center overflow-hidden border-b border-zinc-900">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-emerald-900/50 bg-emerald-950/30 text-sm font-semibold text-emerald-400 shadow-inner">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Software B2B para Empresas de Transporte
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter leading-[1.05] text-white">
            Dejá de perder dinero en <span className="text-emerald-500">cotizaciones a ojo.</span>
          </h1>
          <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Implementamos un Motor Logístico a medida de tu flota. Calcula combustible en tiempo real, peajes, RRHH y desgaste, generando un presupuesto PDF en 45 segundos.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
              target="_blank" rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-black font-black py-4 px-8 rounded-xl transition-all shadow-[0_0_30px_-5px_rgba(16,185,129,0.4)] active:scale-95"
            >
              Cotizar Implementación (Desde USD $1.500)
            </a>
            <Link 
              href="/flete" 
              className="bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-white font-bold py-4 px-8 rounded-xl transition-all flex items-center justify-center gap-2"
            >
              Probar Demo en Vivo &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* EL COSTO DE NO TENERLO (Neuroventas) */}
      <section className="py-24 bg-black border-b border-zinc-900">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Un error de cálculo en Excel anula tu rentabilidad.</h2>
            <div className="space-y-6">
              <p className="text-zinc-400 leading-relaxed text-lg">
                La mayoría de las transportistas cotizan basándose en la "experiencia" del operador o usando planillas de Excel desactualizadas.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl">❌</span>
                  <span className="text-zinc-300">Variaciones en el precio del Diésel no reflejadas.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl">❌</span>
                  <span className="text-zinc-300">Desgaste de neumáticos (mantenimiento por km) ignorado.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl">❌</span>
                  <span className="text-zinc-300">Horas de trabajo manual para emitir un simple presupuesto.</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-zinc-900 rounded-[2rem] border border-zinc-800 p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-red-500/10 rounded-full blur-3xl pointer-events-none"></div>
            <h3 className="text-xl font-bold text-white mb-6 relative z-10">La fuga de capital oculta</h3>
            <div className="space-y-4 relative z-10">
              <div className="bg-zinc-950 p-5 rounded-xl border border-zinc-800">
                <p className="text-zinc-400 text-sm mb-1">Costo de 1 hora administrativa al día por cotizar manual:</p>
                <p className="text-red-400 font-black text-2xl">~ USD $300 / mes</p>
              </div>
              <div className="bg-zinc-950 p-5 rounded-xl border border-zinc-800">
                <p className="text-zinc-400 text-sm mb-1">Pérdida por no calcular desgaste de flota:</p>
                <p className="text-red-400 font-black text-2xl">Rentabilidad irreal</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CARACTERÍSTICAS DEL PRODUCTO */}
      <section className="py-24 bg-zinc-950 border-b border-zinc-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Arquitectura de grado corporativo</h2>
            <p className="text-zinc-400">Desarrollamos el motor e integramos tus variables operativas.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
              <div className="text-4xl mb-4">📡</div>
              <h3 className="text-xl font-bold text-white mb-2">API de Combustibles</h3>
              <p className="text-zinc-500 text-sm">Conectamos el sistema a las bases oficiales (ej. Petropar) para que el costo por litro se actualice solo.</p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-bold text-white mb-2">Lógica de RRHH</h3>
              <p className="text-zinc-500 text-sm">El motor calcula automáticamente los días operativos por tope de kilómetros y suma los viáticos de choferes.</p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
              <div className="text-4xl mb-4">📄</div>
              <h3 className="text-xl font-bold text-white mb-2">Emisión PDF al instante</h3>
              <p className="text-zinc-500 text-sm">El sistema ensambla un documento formal con tu logo listo para enviarle a tu cliente corporativo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CIERRE Y ANCLAJE DE PRECIO */}
      <section className="py-24 bg-black text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-64 bg-emerald-600/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Tu competencia sigue usando la calculadora del celular.</h2>
          <p className="text-zinc-400 text-lg mb-8">
            La implementación de este sistema tiene un valor base de <strong className="text-white">USD $1.500</strong>. Un costo que se recupera en el primer mes al dejar de cotizar viajes a pérdida.
          </p>
          <div className="flex justify-center">
             <a 
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
              target="_blank" rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-black font-black py-4 px-10 rounded-xl transition-all shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:shadow-[0_0_40px_rgba(16,185,129,0.5)] active:scale-95"
            >
              Agendar Auditoría de Implementación
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
