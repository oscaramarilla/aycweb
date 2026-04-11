import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Servicios de Ingeniería Digital B2B | AYCweb Paraguay",
  description:
    "Landings B2B, cotizadores PDF automáticos, generación de contratos y portales de clientes. Infraestructura digital para empresas en Paraguay.",
};

export default function ServiciosPage() {
  const whatsappNumber = "595985864209";
  const whatsappMsg = encodeURIComponent("¡Hola! Vi sus servicios en AYCweb y quiero agendar un diagnóstico técnico.");

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
            No somos una agencia tradicional que te vende una web y desaparece. Desarrollamos la infraestructura digital que tu empresa necesita para captar, cotizar y operar en automático.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-500 text-white font-black py-5 px-12 rounded-xl transition-all shadow-2xl active:scale-95 text-lg"
            >
              Agendar Diagnóstico Técnico
            </a>
            <Link 
              href="/casos"
              className="border-2 border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white font-bold py-5 px-12 rounded-xl transition-all text-lg"
            >
              Ver Casos de Éxito
            </Link>
          </div>
        </div>
      </section>

      {/* 6 SERVICIOS PRINCIPALES */}
      <section className="py-28 bg-black border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
              Servicios de Ingeniería Digital
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              Soluciones técnicas diseñadas para empresas que necesitan escalar sus operaciones comerciales y operativas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Servicio 1: Landings B2B */}
            <div className="group bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 p-10 rounded-3xl border border-zinc-800 hover:border-blue-700/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/20">
              <div className="w-16 h-16 rounded-2xl bg-blue-600/10 border border-blue-600/30 flex items-center justify-center mb-6 group-hover:bg-blue-600/20 transition-all">
                <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-white mb-4 group-hover:text-blue-400 transition-colors">
                Landings B2B de Alta Conversión
              </h3>
              <p className="text-zinc-400 leading-relaxed mb-6">
                Páginas de aterrizaje diseñadas para convertir tráfico calificado en leads comerciales. Optimizadas para decisores empresariales con copy directo y CTAs estratégicos.
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3 text-zinc-300 text-sm">
                  <span className="text-blue-500 font-black mt-0.5">✓</span>
                  <span>Diseño orientado a conversión B2B</span>
                </li>
                <li className="flex gap-3 text-zinc-300 text-sm">
                  <span className="text-blue-500 font-black mt-0.5">✓</span>
                  <span>Integración directa con WhatsApp Business</span>
                </li>
                <li className="flex gap-3 text-zinc-300 text-sm">
                  <span className="text-blue-500 font-black mt-0.5">✓</span>
                  <span>Optimización SEO para búsquedas comerciales</span>
                </li>
              </ul>
            </div>

            {/* Servicio 2: Cotizadores Automáticos */}
            <div className="group bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 p-10 rounded-3xl border border-zinc-800 hover:border-emerald-700/50 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-900/20">
              <div className="w-16 h-16 rounded-2xl bg-emerald-600/10 border border-emerald-600/30 flex items-center justify-center mb-6 group-hover:bg-emerald-600/20 transition-all">
                <svg className="w-8 h-8 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-white mb-4 group-hover:text-emerald-400 transition-colors">
                Cotizadores PDF Automáticos
              </h3>
              <p className="text-zinc-400 leading-relaxed mb-6">
                Sistemas de cotización inteligentes que generan presupuestos profesionales en PDF. Eliminan errores manuales y aceleran tu ciclo de ventas hasta 10x.
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3 text-zinc-300 text-sm">
                  <span className="text-emerald-500 font-black mt-0.5">✓</span>
                  <span>Generación automática de PDFs branded</span>
                </li>
                <li className="flex gap-3 text-zinc-300 text-sm">
                  <span className="text-emerald-500 font-black mt-0.5">✓</span>
                  <span>Cálculos complejos sin errores humanos</span>
                </li>
                <li className="flex gap-3 text-zinc-300 text-sm">
                  <span className="text-emerald-500 font-black mt-0.5">✓</span>
                  <span>Envío directo por WhatsApp o email</span>
                </li>
              </ul>
            </div>

            {/* Servicio 3: Generación de Contratos */}
            <div className="group bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 p-10 rounded-3xl border border-zinc-800 hover:border-purple-700/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-900/20">
              <div className="w-16 h-16 rounded-2xl bg-purple-600/10 border border-purple-600/30 flex items-center justify-center mb-6 group-hover:bg-purple-600/20 transition-all">
                <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-white mb-4 group-hover:text-purple-400 transition-colors">
                Generación de Contratos B2B
              </h3>
              <p className="text-zinc-400 leading-relaxed mb-6">
                Automatización de documentos legales y comerciales. Contratos, órdenes de compra y acuerdos generados dinámicamente con datos del cliente.
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3 text-zinc-300 text-sm">
                  <span className="text-purple-500 font-black mt-0.5">✓</span>
                  <span>Templates legales personalizables</span>
                </li>
                <li className="flex gap-3 text-zinc-300 text-sm">
                  <span className="text-purple-500 font-black mt-0.5">✓</span>
                  <span>Llenado automático de datos</span>
                </li>
                <li className="flex gap-3 text-zinc-300 text-sm">
                  <span className="text-purple-500 font-black mt-0.5">✓</span>
                  <span>Exportación lista para firma digital</span>
                </li>
              </ul>
            </div>

            {/* Servicio 4: Portales de Clientes */}
            <div className="group bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 p-10 rounded-3xl border border-zinc-800 hover:border-orange-700/50 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-900/20">
              <div className="w-16 h-16 rounded-2xl bg-orange-600/10 border border-orange-600/30 flex items-center justify-center mb-6 group-hover:bg-orange-600/20 transition-all">
                <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-white mb-4 group-hover:text-orange-400 transition-colors">
                Portales de Clientes B2B/B2G
              </h3>
              <p className="text-zinc-400 leading-relaxed mb-6">
                Plataformas web exclusivas donde tus clientes corporativos acceden a pedidos, documentación, tracking y soporte. Reduce consultas repetitivas en 80%.
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3 text-zinc-300 text-sm">
                  <span className="text-orange-500 font-black mt-0.5">✓</span>
                  <span>Acceso seguro con autenticación</span>
                </li>
                <li className="flex gap-3 text-zinc-300 text-sm">
                  <span className="text-orange-500 font-black mt-0.5">✓</span>
                  <span>Historial de pedidos y documentos</span>
                </li>
                <li className="flex gap-3 text-zinc-300 text-sm">
                  <span className="text-orange-500 font-black mt-0.5">✓</span>
                  <span>Sistema de tickets y soporte</span>
                </li>
              </ul>
            </div>

            {/* Servicio 5: Dashboards de Control */}
            <div className="group bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 p-10 rounded-3xl border border-zinc-800 hover:border-cyan-700/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-900/20">
              <div className="w-16 h-16 rounded-2xl bg-cyan-600/10 border border-cyan-600/30 flex items-center justify-center mb-6 group-hover:bg-cyan-600/20 transition-all">
                <svg className="w-8 h-8 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-white mb-4 group-hover:text-cyan-400 transition-colors">
                Dashboards de Control Operativo
              </h3>
              <p className="text-zinc-400 leading-relaxed mb-6">
                Paneles de control en tiempo real para monitorear KPIs críticos. Visualización de datos comerciales, operativos y financieros en una sola pantalla.
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3 text-zinc-300 text-sm">
                  <span className="text-cyan-500 font-black mt-0.5">✓</span>
                  <span>Métricas en tiempo real</span>
                </li>
                <li className="flex gap-3 text-zinc-300 text-sm">
                  <span className="text-cyan-500 font-black mt-0.5">✓</span>
                  <span>Gráficos interactivos y reportes</span>
                </li>
                <li className="flex gap-3 text-zinc-300 text-sm">
                  <span className="text-cyan-500 font-black mt-0.5">✓</span>
                  <span>Integración con tus sistemas existentes</span>
                </li>
              </ul>
            </div>

            {/* Servicio 6: Sistemas a Medida */}
            <div className="group bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 p-10 rounded-3xl border border-zinc-800 hover:border-pink-700/50 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-900/20">
              <div className="w-16 h-16 rounded-2xl bg-pink-600/10 border border-pink-600/30 flex items-center justify-center mb-6 group-hover:bg-pink-600/20 transition-all">
                <svg className="w-8 h-8 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-white mb-4 group-hover:text-pink-400 transition-colors">
                Sistemas a Medida
              </h3>
              <p className="text-zinc-400 leading-relaxed mb-6">
                Ingeniería pura para resolver cuellos de botella específicos de tu operación. Desarrollamos la herramienta exacta que necesitás, sin soluciones genéricas.
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3 text-zinc-300 text-sm">
                  <span className="text-pink-500 font-black mt-0.5">✓</span>
                  <span>Análisis profundo de tu proceso</span>
                </li>
                <li className="flex gap-3 text-zinc-300 text-sm">
                  <span className="text-pink-500 font-black mt-0.5">✓</span>
                  <span>Desarrollo 100% personalizado</span>
                </li>
                <li className="flex gap-3 text-zinc-300 text-sm">
                  <span className="text-pink-500 font-black mt-0.5">✓</span>
                  <span>Escalable y mantenible en el tiempo</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* BLOQUE DE BENEFICIOS */}
      <section className="py-28 bg-zinc-950 border-b border-zinc-900 relative overflow-hidden">
        <div className="absolute top-1/2 right-0 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
              Por qué empresas B2B eligen AyCWEB
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              No vendemos plantillas ni soluciones genéricas. Construimos infraestructura digital que resuelve problemas reales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div className="text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-blue-900/50">
                <span className="text-4xl font-black text-white">10x</span>
              </div>
              <h3 className="text-xl font-black text-white mb-3">Velocidad de Cotización</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Reducí el tiempo de generación de presupuestos de horas a minutos con automatización inteligente.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-600 to-emerald-700 flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-emerald-900/50">
                <span className="text-4xl font-black text-white">0</span>
              </div>
              <h3 className="text-xl font-black text-white mb-3">Errores Manuales</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Eliminá errores de cálculo, tipeo y formato. Los sistemas automáticos no se equivocan.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-600 to-purple-700 flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-purple-900/50">
                <span className="text-4xl font-black text-white">24/7</span>
              </div>
              <h3 className="text-xl font-black text-white mb-3">Disponibilidad</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Tus sistemas trabajan mientras dormís. Captación y cotización sin horarios de oficina.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-600 to-orange-700 flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-orange-900/50">
                <span className="text-4xl font-black text-white">∞</span>
              </div>
              <h3 className="text-xl font-black text-white mb-3">Escalabilidad</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Atendé 10 o 1000 clientes con la misma infraestructura. Sin contratar más personal.
              </p>
            </div>

          </div>

          <div className="mt-20 bg-gradient-to-br from-zinc-900/80 to-black border border-zinc-800 rounded-3xl p-12 md:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl md:text-4xl font-black text-white mb-6">
                  Tecnología de nivel enterprise, accesible para PyMEs paraguayas
                </h3>
                <p className="text-zinc-400 leading-relaxed mb-6">
                  Utilizamos el mismo stack tecnológico que usan empresas Fortune 500: Next.js, TypeScript, arquitectura serverless y cloud computing. Pero lo adaptamos a la realidad y presupuesto de empresas locales.
                </p>
                <p className="text-zinc-400 leading-relaxed">
                  No necesitás un equipo de desarrollo interno. Nosotros construimos, desplegamos y mantenemos tu infraestructura digital mientras vos te enfocás en vender y operar.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4 bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800">
                  <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-600/30 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-2">Sin costos de infraestructura inicial</h4>
                    <p className="text-zinc-400 text-sm">Hosting, dominio y mantenimiento incluidos en el servicio.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800">
                  <div className="w-12 h-12 rounded-xl bg-emerald-600/10 border border-emerald-600/30 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-2">Actualizaciones y mejoras continuas</h4>
                    <p className="text-zinc-400 text-sm">Tu sistema evoluciona con tu negocio, sin costos ocultos.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800">
                  <div className="w-12 h-12 rounded-xl bg-purple-600/10 border border-purple-600/30 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-2">Soporte técnico directo</h4>
                    <p className="text-zinc-400 text-sm">Hablás directo con quien desarrolló tu sistema, no con un call center.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESO DE TRABAJO */}
      <section className="py-28 bg-black border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
              Cómo trabajamos
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              Metodología probada en más de 50 proyectos B2B. Desde el diagnóstico hasta el deploy en producción.
            </p>
          </div>

          <div className="relative">
            {/* Línea conectora vertical en mobile, horizontal en desktop */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-purple-600 to-pink-600 lg:hidden"></div>
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"></div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6 relative">
              
              {/* Paso 1 */}
              <div className="relative pl-20 lg:pl-0 lg:pt-0">
                <div className="absolute left-0 lg:left-1/2 lg:-translate-x-1/2 lg:top-1/2 lg:-translate-y-1/2 w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 border-4 border-black flex items-center justify-center shadow-2xl shadow-blue-900/50 z-10">
                  <span className="text-2xl font-black text-white">1</span>
                </div>
                <div className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800 lg:mt-24">
                  <h3 className="text-xl font-black text-white mb-3">Diagnóstico Técnico</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                    Reunión de 60-90 minutos donde analizamos tu proceso comercial y operativo actual. Identificamos cuellos de botella y oportunidades de automatización.
                  </p>
                  <span className="text-xs text-blue-500 font-bold uppercase tracking-wider">Duración: 1-2 días</span>
                </div>
              </div>

              {/* Paso 2 */}
              <div className="relative pl-20 lg:pl-0 lg:pt-0">
                <div className="absolute left-0 lg:left-1/2 lg:-translate-x-1/2 lg:top-1/2 lg:-translate-y-1/2 w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-purple-700 border-4 border-black flex items-center justify-center shadow-2xl shadow-purple-900/50 z-10">
                  <span className="text-2xl font-black text-white">2</span>
                </div>
                <div className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800 lg:mt-24">
                  <h3 className="text-xl font-black text-white mb-3">Propuesta & Arquitectura</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                    Te presentamos la solución técnica diseñada específicamente para tu caso. Incluye wireframes, flujos de usuario y cotización detallada.
                  </p>
                  <span className="text-xs text-purple-500 font-bold uppercase tracking-wider">Duración: 3-5 días</span>
                </div>
              </div>

              {/* Paso 3 */}
              <div className="relative pl-20 lg:pl-0 lg:pt-0">
                <div className="absolute left-0 lg:left-1/2 lg:-translate-x-1/2 lg:top-1/2 lg:-translate-y-1/2 w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-600 to-pink-700 border-4 border-black flex items-center justify-center shadow-2xl shadow-pink-900/50 z-10">
                  <span className="text-2xl font-black text-white">3</span>
                </div>
                <div className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800 lg:mt-24">
                  <h3 className="text-xl font-black text-white mb-3">Desarrollo & Testing</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                    Construimos tu sistema con actualizaciones semanales. Podés ver el progreso en tiempo real y solicitar ajustes durante el desarrollo.
                  </p>
                  <span className="text-xs text-pink-500 font-bold uppercase tracking-wider">Duración: 2-6 semanas</span>
                </div>
              </div>

              {/* Paso 4 */}
              <div className="relative pl-20 lg:pl-0 lg:pt-0">
                <div className="absolute left-0 lg:left-1/2 lg:-translate-x-1/2 lg:top-1/2 lg:-translate-y-1/2 w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-600 to-emerald-700 border-4 border-black flex items-center justify-center shadow-2xl shadow-emerald-900/50 z-10">
                  <span className="text-2xl font-black text-white">4</span>
                </div>
                <div className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800 lg:mt-24">
                  <h3 className="text-xl font-black text-white mb-3">Deploy & Capacitación</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                    Lanzamos tu sistema a producción y capacitamos a tu equipo. Incluye documentación completa y soporte post-lanzamiento.
                  </p>
                  <span className="text-xs text-emerald-500 font-bold uppercase tracking-wider">Duración: 1 semana</span>
                </div>
              </div>

            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="inline-block bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
              <p className="text-zinc-400 mb-2">
                <span className="text-white font-bold">Tiempo promedio total:</span> 3-8 semanas desde diagnóstico hasta producción
              </p>
              <p className="text-zinc-500 text-sm">
                Proyectos complejos pueden extenderse según alcance y requerimientos específicos
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL A WHATSAPP */}
      <section className="py-32 bg-gradient-to-br from-zinc-950 via-black to-zinc-950 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="mb-8">
            <span className="inline-block px-5 py-2 rounded-full bg-emerald-900/30 text-emerald-400 text-xs font-bold uppercase tracking-widest border border-emerald-900/50 shadow-inner">
              Diagnóstico sin costo
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 tracking-tight leading-[1.05]">
            ¿Listo para automatizar tu operación comercial?
          </h2>
          
          <p className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Agendá un diagnóstico técnico gratuito. Analizamos tu proceso actual y te mostramos exactamente cómo podemos optimizarlo.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <a 
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-black py-6 px-14 rounded-2xl transition-all shadow-2xl shadow-blue-900/50 active:scale-95 text-lg flex items-center gap-3"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Agendar Diagnóstico por WhatsApp
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-600/30 flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-zinc-400 text-sm font-medium">Respuesta en menos de 2 horas</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-xl bg-emerald-600/10 border border-emerald-600/30 flex items-center justify-center">
                <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-zinc-400 text-sm font-medium">Sin compromiso de compra</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-xl bg-purple-600/10 border border-purple-600/30 flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <p className="text-zinc-400 text-sm font-medium">Atención directa del equipo técnico</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
