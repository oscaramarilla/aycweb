import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Casos de Éxito y Sistemas B2B | AYCweb",
  description: "Explorá cómo construimos infraestructura digital para industrias, logística, clínicas y corporaciones en Paraguay.",
};

export default function CasosPage() {
  const whatsappNumber = "595985864209";
  const whatsappMsg = encodeURIComponent("¡Hola! Estuve viendo los sistemas en su portafolio y quiero agendar un diagnóstico operativo.");

  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 text-zinc-50 font-sans pb-24 md:pb-0">
      
      {/* HEADER HERO */}
      <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 px-6 text-center overflow-hidden border-b border-zinc-900">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter leading-[1.05] text-white">
            No vendemos páginas. <br/> <span className="text-blue-500">Construimos sistemas.</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto">
            El diseño web tradicional ya no sirve. Las empresas B2B necesitan software que cotice, agende y opere de forma automática. <strong className="text-white">Probá nuestros motores en vivo.</strong>
          </p>
        </div>
      </section>

      {/* CASO 1: METAL MAD (Industria & Presupuestos) */}
      <section className="py-24 bg-black border-b border-zinc-900">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 rounded-full bg-blue-900/30 text-blue-400 text-xs font-bold uppercase tracking-widest border border-blue-900/50">Industria</span>
              <span className="px-3 py-1 rounded-full bg-zinc-900 text-zinc-400 text-xs font-bold uppercase tracking-widest border border-zinc-800">Manufactura</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Metal Mad E.A.S.</h2>
            <div className="space-y-4 mb-8">
              <p className="text-zinc-400 leading-relaxed">
                <strong className="text-red-400 block mb-1">El Cuello de Botella:</strong> 
                Las cotizaciones de estructuras metálicas se hacían a mano o en Excel, un proceso lento que generaba cuellos de botella en la respuesta a los clientes.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                <strong className="text-emerald-400 block mb-1">La Infraestructura:</strong> 
                Desarrollamos un Generador Dinámico de Presupuestos. El equipo carga las variables, y el sistema estructura los costos y emite un PDF comercial al instante.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a href="https://metalmadeas.com/presu" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-xl transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(37,99,235,0.3)]">
                Ver Cotizador en Vivo &rarr;
              </a>
            </div>
          </div>
          <div className="bg-zinc-900 rounded-[2rem] border border-zinc-800 p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
            <h3 className="text-xl font-bold text-white mb-6 relative z-10">Impacto Operativo</h3>
            <div className="space-y-3 relative z-10">
              <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 flex justify-between items-center">
                <span className="text-zinc-400 text-sm font-medium">Tiempo de Cotización</span>
                <span className="text-emerald-500 font-black text-xl">De 2h a 45 seg</span>
              </div>
              <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 flex justify-between items-center">
                <span className="text-zinc-400 text-sm font-medium">Fricción Comercial</span>
                <span className="text-emerald-500 font-black text-xl">Eliminada</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CASO 2: AYC S.R.L. (Logística & Fletes) */}
      <section className="py-24 bg-zinc-950 border-b border-zinc-900">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center flex-row-reverse">
          <div className="lg:order-2">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 rounded-full bg-orange-900/30 text-orange-400 text-xs font-bold uppercase tracking-widest border border-orange-900/50">Logística</span>
              <span className="px-3 py-1 rounded-full bg-zinc-900 text-zinc-400 text-xs font-bold uppercase tracking-widest border border-zinc-800">Transporte</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">AYC S.R.L.</h2>
            <div className="space-y-4 mb-8">
              <p className="text-zinc-400 leading-relaxed">
                <strong className="text-red-400 block mb-1">El Cuello de Botella:</strong> 
                Calcular la rentabilidad de un flete requería horas de cruzar datos variables: combustible, peajes, recursos humanos y desgaste de flota.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                <strong className="text-emerald-400 block mb-1">La Infraestructura:</strong> 
                Un Motor Inteligente de Fletes. Esta herramienta salva tantas horas útiles de cálculo manual que funciona, literalmente, como una <strong className="text-white">máquina del tiempo</strong> para la operación logística.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Link href="/flete" className="bg-orange-600 hover:bg-orange-500 text-white font-bold py-3 px-6 rounded-xl transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(249,115,22,0.2)]">
                Probar Motor Logístico &rarr;
              </Link>
            </div>
          </div>
          <div className="lg:order-1 bg-zinc-900 rounded-[2rem] border border-zinc-800 p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>
            <h3 className="text-xl font-bold text-white mb-6 relative z-10">Impacto Logístico</h3>
            <div className="space-y-3 relative z-10">
              <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 flex justify-between items-center">
                <span className="text-zinc-400 text-sm font-medium">Cálculo de Rentabilidad</span>
                <span className="text-emerald-500 font-black text-xl">Automático</span>
              </div>
              <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 flex justify-between items-center">
                <span className="text-zinc-400 text-sm font-medium">Horas Útiles Salvadas</span>
                <span className="text-emerald-500 font-black text-xl">Cientos al mes</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CASO 3: DRA. BIANCA AMARILLA (Salud & Agendamientos) */}
      <section className="py-24 bg-black border-b border-zinc-900">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-purple-900/30 text-purple-400 text-xs font-bold uppercase tracking-widest border border-purple-900/50 mb-6">Salud & Clínica</span>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Dra. Bianca Amarilla</h2>
            <div className="space-y-4 mb-8">
              <p className="text-zinc-400 leading-relaxed">
                <strong className="text-red-400 block mb-1">El Cuello de Botella:</strong> 
                Agendamientos manuales por WhatsApp, generando cruce de horarios, pacientes olvidados y una carga administrativa insostenible para la recepción.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                <strong className="text-emerald-400 block mb-1">La Infraestructura:</strong> 
                Sistema de autogestión de citas médicas 24/7. El paciente entra a la web, ve la disponibilidad real, reserva su turno y el sistema bloquea el horario automáticamente sin intervención humana.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a href="https://www.drabiancapy.com/" target="_blank" rel="noopener noreferrer" className="bg-purple-600 hover:bg-purple-500 text-white font-bold py-3 px-6 rounded-xl transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(147,51,234,0.2)]">
                Ver Autogestión de Citas &rarr;
              </a>
            </div>
          </div>
          <div className="bg-zinc-900 rounded-[2rem] border border-zinc-800 p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>
            <h3 className="text-xl font-bold text-white mb-6 relative z-10">Impacto Administrativo</h3>
            <div className="space-y-3 relative z-10">
              <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 flex justify-between items-center">
                <span className="text-zinc-400 text-sm font-medium">Captación de Pacientes</span>
                <span className="text-emerald-500 font-black text-xl">Activa 24/7</span>
              </div>
              <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 flex justify-between items-center">
                <span className="text-zinc-400 text-sm font-medium">Intervención Humana</span>
                <span className="text-emerald-500 font-black text-xl">Cero Fricción</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CASO 4: GENERADOR DE CONTRATOS (Corporativo & Legal) */}
      <section className="py-24 bg-zinc-950 border-b border-zinc-900">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center flex-row-reverse">
          <div className="lg:order-2">
            <span className="inline-block px-3 py-1 rounded-full bg-emerald-900/30 text-emerald-400 text-xs font-bold uppercase tracking-widest border border-emerald-900/50 mb-6">Corporativo & Legal</span>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">SOW Automatizado</h2>
            <div className="space-y-4 mb-8">
              <p className="text-zinc-400 leading-relaxed">
                <strong className="text-red-400 block mb-1">El Cuello de Botella:</strong> 
                Redactar Acuerdos de Nivel de Servicio (SOW) y contratos B2B tomaba horas de copiar y pegar cláusulas, retrasando el cierre de ventas importantes.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                <strong className="text-emerald-400 block mb-1">La Infraestructura:</strong> 
                Un motor documental inteligente. Toma las variables comerciales del trato y ensambla un contrato legal blindado en formato PDF en menos de 10 segundos.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Link href="/contrato" className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-6 rounded-xl transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                Probar Generador Legal &rarr;
              </Link>
            </div>
          </div>
          <div className="lg:order-1 bg-zinc-900 rounded-[2rem] border border-zinc-800 p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
            <h3 className="text-xl font-bold text-white mb-6 relative z-10">Impacto Comercial</h3>
            <div className="space-y-3 relative z-10">
              <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 flex justify-between items-center">
                <span className="text-zinc-400 text-sm font-medium">Redacción de Contratos</span>
                <span className="text-emerald-500 font-black text-xl">10 segundos</span>
              </div>
              <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 flex justify-between items-center">
                <span className="text-zinc-400 text-sm font-medium">Estandarización Legal</span>
                <span className="text-emerald-500 font-black text-xl">100% Segura</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL COMERCIAL */}
      <section className="py-24 bg-black text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-64 bg-blue-600/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">¿Querés un motor así para tu empresa?</h2>
          <p className="text-zinc-400 text-lg mb-8">
            Desarrollamos cotizadores, calculadoras, contratos dinámicos, agendamientos y dashboards a medida de tu operación comercial.
          </p>
          <div className="flex justify-center">
             <a 
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
              target="_blank" rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-500 text-white font-black py-4 px-10 rounded-xl transition-all shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_40px_rgba(37,99,235,0.6)] active:scale-95"
            >
              Agendar Diagnóstico Operativo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
