import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AYCweb OS | El Sistema Operativo para PyMEs",
  description: "Reemplazá tu página web inútil por una máquina que cotiza, genera PDFs y cierra ventas 24/7. Software B2B por suscripción desde USD $50/mes.",
};

export default function OSLanding() {
  const whatsappNumber = "595985864209";
  const whatsappMsgBasic = encodeURIComponent("¡Hola Oscar! Quiero suscribirme al plan AYCweb OS Básico (USD $50/mes) para sistematizar mi empresa.");
  const whatsappMsgPro = encodeURIComponent("¡Hola Oscar! Quiero el plan AYCweb OS Pro (USD $100/mes) con dashboard y automatizaciones avanzadas.");

  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 text-zinc-50 font-sans pb-24 md:pb-0">
      
      {/* HERO: EL POSICIONAMIENTO */}
      <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 px-6 text-center overflow-hidden border-b border-zinc-900">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-blue-900/50 bg-blue-950/30 text-sm font-semibold text-blue-300 shadow-inner">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            Lanzamiento: Software as a Service (SaaS)
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter leading-[1.05] text-white">
            Tu página web no sirve. <br/> <span className="text-blue-500">Necesitás un Sistema Operativo.</span>
          </h1>
          <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Las agencias tradicionales te venden un "folleto digital". Nosotros te instalamos un motor que cotiza, emite PDFs y organiza tus ventas por WhatsApp. Todo desde <strong className="text-white">USD $50/mes</strong>.
          </p>
          <div className="flex justify-center gap-4">
            <a href="#planes" className="bg-blue-600 hover:bg-blue-500 text-white font-black py-4 px-8 rounded-xl transition-all shadow-[0_0_30px_-5px_rgba(37,99,235,0.4)] active:scale-95">
              Ver Planes de Suscripción &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* EL CUADRO COMPARATIVO (Destruyendo a la competencia) */}
      <section className="py-24 bg-black border-b border-zinc-900">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">¿Por qué el 90% de las PyMEs tiran la plata en marketing?</h2>
            <p className="text-zinc-400">Porque traen clientes a un proceso interno roto (Excel y WhatsApp manual).</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Competencia 1 */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 opacity-70">
              <h3 className="text-xl font-bold text-zinc-300 mb-4">Agencias Tradicionales</h3>
              <p className="text-red-400 font-bold mb-4">El "Folleto Digital"</p>
              <ul className="space-y-3 text-sm text-zinc-500">
                <li>❌ Páginas estáticas (WordPress).</li>
                <li>❌ Formularios que van a un mail que nadie lee.</li>
                <li>❌ Cero impacto en tu operación diaria.</li>
                <li className="pt-4 border-t border-zinc-800">Costo: USD $300 a $800 (Pago único, luego queda obsoleta).</li>
              </ul>
            </div>

            {/* AYCweb OS */}
            <div className="bg-zinc-950 border-2 border-blue-600 rounded-2xl p-8 transform md:-translate-y-4 shadow-[0_0_40px_rgba(37,99,235,0.15)] relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-xs font-bold uppercase tracking-widest py-1 px-4 rounded-full">
                La Solución Real
              </div>
              <h3 className="text-xl font-bold text-white mb-4">AYCweb OS</h3>
              <p className="text-blue-400 font-bold mb-4">La Máquina Operativa</p>
              <ul className="space-y-3 text-sm text-zinc-300">
                <li>✅ Cotizadores dinámicos integrados.</li>
                <li>✅ Generación automática de presupuestos PDF.</li>
                <li>✅ Conexión directa a WhatsApp con el pedido estructurado.</li>
                <li className="pt-4 border-t border-zinc-800 font-bold">Costo: Desde USD $50/mes (Software siempre actualizado).</li>
              </ul>
            </div>

            {/* Competencia 2 */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 opacity-70">
              <h3 className="text-xl font-bold text-zinc-300 mb-4">Software Houses</h3>
              <p className="text-red-400 font-bold mb-4">El "Sistema a Medida"</p>
              <ul className="space-y-3 text-sm text-zinc-500">
                <li>❌ Tardan de 6 a 8 meses en desarrollar.</li>
                <li>❌ Complejidad innecesaria para una PyME.</li>
                <li>❌ Riesgo alto de abandono del proyecto.</li>
                <li className="pt-4 border-t border-zinc-800">Costo: USD $5.000 a $15.000+</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CASO DE ÉXITO RÁPIDO */}
      <section className="py-20 bg-zinc-950 border-b border-zinc-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-4">Caso de Estudio: Metal Mad E.A.S.</p>
          <h2 className="text-2xl md:text-4xl font-black text-white mb-8">
            "Pasamos de tardar 2 horas cotizando en Excel a generar un presupuesto PDF en 3 minutos."
          </h2>
          <Link href="/flete" className="text-zinc-400 hover:text-white underline decoration-zinc-700 transition-colors">
            Probar el motor logístico en vivo &rarr;
          </Link>
        </div>
      </section>

      {/* LOS PLANES (El Cierre) */}
      <section id="planes" className="py-24 bg-black relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-64 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Planes de Suscripción</h2>
            <p className="text-zinc-400">Implementación rápida en 7 días. Cancela cuando quieras.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* PLAN BÁSICO */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 flex flex-col">
              <h3 className="text-2xl font-black text-white mb-2">Motor Básico</h3>
              <p className="text-zinc-500 text-sm mb-6">Para empresas que necesitan dejar el Excel.</p>
              <div className="mb-8">
                <span className="text-5xl font-black text-white">USD $50</span><span className="text-zinc-500">/mes</span>
              </div>
              <ul className="space-y-4 mb-8 flex-grow text-zinc-300 text-sm">
                <li className="flex items-center gap-3">✅ <span>Landing Page Profesional (Alta conversión)</span></li>
                <li className="flex items-center gap-3">✅ <span>1 Cotizador Dinámico (Ej. Fletes o Servicios)</span></li>
                <li className="flex items-center gap-3">✅ <span>Generación Automática de Presupuesto PDF</span></li>
                <li className="flex items-center gap-3">✅ <span>Derivación de pedidos por WhatsApp (Deep Link)</span></li>
                <li className="flex items-center gap-3">✅ <span>Soporte técnico directo por WhatsApp</span></li>
              </ul>
              <a href={`https://wa.me/${whatsappNumber}?text=${whatsappMsgBasic}`} target="_blank" rel="noopener noreferrer" className="w-full text-center bg-zinc-800 hover:bg-zinc-700 text-white font-bold py-4 rounded-xl transition-all border border-zinc-700">
                Suscribirse al Básico
              </a>
            </div>

            {/* PLAN PRO */}
            <div className="bg-gradient-to-b from-blue-900/40 to-zinc-950 border-2 border-blue-600 rounded-3xl p-8 flex flex-col relative shadow-[0_0_30px_rgba(37,99,235,0.15)]">
              <div className="absolute top-0 right-8 -translate-y-1/2 bg-blue-600 text-white text-xs font-bold uppercase tracking-widest py-1 px-4 rounded-full">
                Más Elegido
              </div>
              <h3 className="text-2xl font-black text-white mb-2">Motor Pro</h3>
              <p className="text-zinc-400 text-sm mb-6">Control total sobre la operación comercial.</p>
              <div className="mb-8">
                <span className="text-5xl font-black text-blue-400">USD $100</span><span className="text-zinc-500">/mes</span>
              </div>
              <ul className="space-y-4 mb-8 flex-grow text-zinc-300 text-sm">
                <li className="flex items-center gap-3">🔥 <span className="font-bold text-white">Todo lo del Plan Básico, más:</span></li>
                <li className="flex items-center gap-3">✅ <span>Mini-Dashboard de Métricas (Visitas y Cierres)</span></li>
                <li className="flex items-center gap-3">✅ <span>CRM Básico (Seguimiento de estados de cotización)</span></li>
                <li className="flex items-center gap-3">✅ <span>Hasta 3 Cotizadores o Formularios Complejos</span></li>
                <li className="flex items-center gap-3">✅ <span>Sistema de Agendamiento Automático (Ej. Turnos)</span></li>
              </ul>
              <a href={`https://wa.me/${whatsappNumber}?text=${whatsappMsgPro}`} target="_blank" rel="noopener noreferrer" className="w-full text-center bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl transition-all shadow-lg active:scale-95">
                Suscribirse al Pro
              </a>
            </div>

          </div>
          
          <div className="text-center mt-12">
            <p className="text-zinc-500 text-sm">
              ¿Necesitás integraciones con ERP, bases de datos complejas o múltiples usuarios? <br/>
              <a href={`https://wa.me/${whatsappNumber}?text=Hola! Busco un sistema a medida (Plan Enterprise).`} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Hablemos del Plan Enterprise (A medida)</a>.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
