// app/servicios/page.tsx
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Servicios de Ingeniería Digital B2B | AYCweb Paraguay",
  description:
    "Landings B2B, cotizadores PDF automáticos, generación de contratos y portales de clientes. Infraestructura digital para empresas en Paraguay.",
};

export default function ServiciosPage() {
  const whatsappNumber = "595985864209";
  const whatsappMsg = encodeURIComponent("¡Hola Oscar! Quiero que auditen mi operación para decirme exactamente qué arquitectura de software necesito para destrabarla hoy.");

  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 text-zinc-50 font-sans pb-24 md:pb-0">
      
      {/* HERO SECTION */}
      <section className="relative pt-20 pb-20 md:pt-32 md:pb-28 px-6 text-center overflow-hidden border-b border-zinc-900">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>
        
        <div className="max-w-5xl mx-auto relative z-10">
          <span className="inline-block px-5 py-2 rounded-full bg-blue-900/30 text-blue-400 text-xs font-bold uppercase tracking-widest border border-blue-900/50 mb-8 shadow-inner">
            Ingeniería Digital B2B
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tighter leading-[1.02] text-white">
            Dejá de comprar herramientas sueltas. <br className="hidden md:block"/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Implementá Ecosistemas.</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            No somos una agencia que te hace una web y desaparece. Diseñamos infraestructura digital para que tu equipo deje de hacer tareas manuales y tu empresa empiece a escalar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-500 text-white font-black py-5 px-12 rounded-xl transition-all shadow-2xl active:scale-95 text-lg"
            >
              Diseñar mi Ecosistema
            </a>
            <Link 
              href="/casos"
              className="border-2 border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white font-bold py-5 px-12 rounded-xl transition-all text-lg"
            >
              Ver Ecosistemas Activos
            </Link>
          </div>
        </div>
      </section>

      {/* 6 SERVICIOS PRINCIPALES (Orientados a Resultados) */}
      <section className="py-28 bg-black border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
              Qué cambia en tu operación el lunes a las 8AM
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              Resultados operativos medibles. Construimos la herramienta exacta que necesitás para matar el trabajo manual.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Servicio 1: Captación */}
            <div className="group bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 p-10 rounded-3xl border border-zinc-800 hover:border-blue-700/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/20">
              <div className="w-16 h-16 rounded-2xl bg-blue-600/10 border border-blue-600/30 flex items-center justify-center mb-6 group-hover:bg-blue-600/20 transition-all">
                <span className="text-3xl">🧲</span>
              </div>
              <h3 className="text-2xl font-black text-white mb-4 group-hover:text-blue-400 transition-colors">
                1. Captación y Filtrado B2B
              </h3>
              <p className="text-zinc-400 leading-relaxed mb-6">
                Tu empresa recibe leads mejor calificados. El cliente entra a un embudo que lo educa, resuelve sus dudas y lo envía a tu WhatsApp listo para comprar.
              </p>
              <ul className="space-y-3 border-t border-zinc-800 pt-4">
                <li className="flex gap-3 text-zinc-300 text-sm font-medium">
                  <span className="text-blue-500 font-black mt-0.5">→</span>
                  Landings de Alta Fricción (Cero curiosos)
                </li>
                <li className="flex gap-3 text-zinc-300 text-sm font-medium">
                  <span className="text-blue-500 font-black mt-0.5">→</span>
                  Integración directa con tu fuerza de ventas
                </li>
              </ul>
            </div>

            {/* Servicio 2: Cotización */}
            <div className="group bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 p-10 rounded-3xl border border-zinc-800 hover:border-emerald-700/50 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-900/20">
              <div className="w-16 h-16 rounded-2xl bg-emerald-600/10 border border-emerald-600/30 flex items-center justify-center mb-6 group-hover:bg-emerald-600/20 transition-all">
                <span className="text-3xl">⏱️</span>
              </div>
              <h3 className="text-2xl font-black text-white mb-4 group-hover:text-emerald-400 transition-colors">
                2. Cotización Automática
              </h3>
              <p className="text-zinc-400 leading-relaxed mb-6">
                Tu equipo deja de pelear con Excel. Un sistema web estandarizado calcula márgenes complejos y genera un presupuesto VIP en menos de un minuto.
              </p>
              <ul className="space-y-3 border-t border-zinc-800 pt-4">
                <li className="flex gap-3 text-zinc-300 text-sm font-medium">
                  <span className="text-emerald-500 font-black mt-0.5">→</span>
                  Autogeneración de PDFs formales
                </li>
                <li className="flex gap-3 text-zinc-300 text-sm font-medium">
                  <span className="text-emerald-500 font-black mt-0.5">→</span>
                  Cero errores de cálculo humano
                </li>
              </ul>
            </div>

            {/* Servicio 3: Operación/Legal */}
            <div className="group bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 p-10 rounded-3xl border border-zinc-800 hover:border-purple-700/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-900/20">
              <div className="w-16 h-16 rounded-2xl bg-purple-600/10 border border-purple-600/30 flex items-center justify-center mb-6 group-hover:bg-purple-600/20 transition-all">
                <span className="text-3xl">⚖️</span>
              </div>
              <h3 className="text-2xl font-black text-white mb-4 group-hover:text-purple-400 transition-colors">
                3. Estandarización Legal (SOW)
              </h3>
              <p className="text-zinc-400 leading-relaxed mb-6">
                Basta de "copiar y pegar" en Word. Diseñamos generadores que inyectan los datos del cliente en contratos comerciales blindados, listos para firmar.
              </p>
              <ul className="space-y-3 border-t border-zinc-800 pt-4">
                <li className="flex gap-3 text-zinc-300 text-sm font-medium">
                  <span className="text-purple-500 font-black mt-0.5">→</span>
                  Templates legales dinámicos
                </li>
                <li className="flex gap-3 text-zinc-300 text-sm font-medium">
                  <span className="text-purple-500 font-black mt-0.5">→</span>
                  Contratos emitidos en el acto
                </li>
              </ul>
            </div>

            {/* Servicio 4: Portales */}
            <div className="group bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 p-10 rounded-3xl border border-zinc-800 hover:border-orange-700/50 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-900/20">
              <div className="w-16 h-16 rounded-2xl bg-orange-600/10 border border-orange-600/30 flex items-center justify-center mb-6 group-hover:bg-orange-600/20 transition-all">
                <span className="text-3xl">🏢</span>
              </div>
              <h3 className="text-2xl font-black text-white mb-4 group-hover:text-orange-400 transition-colors">
                4. Portales B2B Corporativos
              </h3>
              <p className="text-zinc-400 leading-relaxed mb-6">
                Tus clientes corporativos acceden a su propia plataforma para ver pedidos, subir documentos o descargar facturas. Reducís el soporte telefónico un 80%.
              </p>
              <ul className="space-y-3 border-t border-zinc-800 pt-4">
                <li className="flex gap-3 text-zinc-300 text-sm font-medium">
                  <span className="text-orange-500 font-black mt-0.5">→</span>
                  Acceso seguro con Login propio
                </li>
                <li className="flex gap-3 text-zinc-300 text-sm font-medium">
                  <span className="text-orange-500 font-black mt-0.5">→</span>
                  Tracking y autogestión de clientes
                </li>
              </ul>
            </div>

            {/* Servicio 5: Dashboards */}
            <div className="group bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 p-10 rounded-3xl border border-zinc-800 hover:border-cyan-700/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-900/20">
              <div className="w-16 h-16 rounded-2xl bg-cyan-600/10 border border-cyan-600/30 flex items-center justify-center mb-6 group-hover:bg-cyan-600/20 transition-all">
                <span className="text-3xl">📊</span>
              </div>
              <h3 className="text-2xl font-black text-white mb-4 group-hover:text-cyan-400 transition-colors">
                5. Paneles de Control (KPIs)
              </h3>
              <p className="text-zinc-400 leading-relaxed mb-6">
                Dejás de volar a ciegas. Unificamos la data de tu operación comercial en tableros visuales en tiempo real para que tomes decisiones informadas.
              </p>
              <ul className="space-y-3 border-t border-zinc-800 pt-4">
                <li className="flex gap-3 text-zinc-300 text-sm font-medium">
                  <span className="text-cyan-500 font-black mt-0.5">→</span>
                  Métricas de ventas en tiempo real
                </li>
                <li className="flex gap-3 text-zinc-300 text-sm font-medium">
                  <span className="text-cyan-500 font-black mt-0.5">→</span>
                  Integración con tu ERP existente
                </li>
              </ul>
            </div>

            {/* Servicio 6: Custom */}
            <div className="group bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 p-10 rounded-3xl border border-zinc-800 hover:border-pink-700/50 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-900/20">
              <div className="w-16 h-16 rounded-2xl bg-pink-600/10 border border-pink-600/30 flex items-center justify-center mb-6 group-hover:bg-pink-600/20 transition-all">
                <span className="text-3xl">🧠</span>
              </div>
              <h3 className="text-2xl font-black text-white mb-4 group-hover:text-pink-400 transition-colors">
                6. Sistemas SaaS a Medida
              </h3>
              <p className="text-zinc-400 leading-relaxed mb-6">
                Ingeniería pura. Si tu proceso de manufactura, logística o ventas es único, programamos el software desde cero para que se adapte a tu operación, no al revés.
              </p>
              <ul className="space-y-3 border-t border-zinc-800 pt-4">
                <li className="flex gap-3 text-zinc-300 text-sm font-medium">
                  <span className="text-pink-500 font-black mt-0.5">→</span>
                  Arquitectura Next.js estricta
                </li>
                <li className="flex gap-3 text-zinc-300 text-sm font-medium">
                  <span className="text-pink-500 font-black mt-0.5">→</span>
                  Servidores dedicados (Vercel)
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* CTA FINAL DE AUTORIDAD */}
      <section className="py-32 bg-gradient-to-br from-zinc-950 via-black to-zinc-950 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="mb-8">
            <span className="inline-block px-5 py-2 rounded-full bg-blue-900/30 text-blue-400 text-xs font-bold uppercase tracking-widest border border-blue-900/50 shadow-inner">
              Análisis Gratuito de Viabilidad
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 tracking-tight leading-[1.05]">
            No adivines qué software necesitás. <br/><span className="text-blue-500">Nosotros te lo decimos.</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Agendá una llamada técnica con nuestro equipo. Analizamos tu cuello de botella actual y te diseñamos la arquitectura exacta para destrabar tu operación hoy mismo.
          </p>

          <div className="flex justify-center mb-12">
            <a 
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-500 text-white font-black py-6 px-12 rounded-2xl transition-all shadow-[0_0_40px_rgba(37,99,235,0.5)] active:scale-95 text-xl"
            >
              Auditar mi Operación &rarr;
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
