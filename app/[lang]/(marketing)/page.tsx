import Link from "next/link";
import { Metadata } from "next";
import { FranjaClientes } from "@/components/social/FranjaClientes";
import { buildWaLink } from "@/lib/config/contact";
import { FILTRO_ADMISION_COPY } from "@/lib/config/copy/filtro-admision";
import { CASOS_OBRAS } from "@/lib/config/obras";
import PricingCard from "@/components/pricing/PricingCard";
import PricingComparativa from "@/components/pricing/PricingComparativa";
import CasoCard from "@/components/CasoCard";
import HerramientasSection from "@/components/tools/HerramientasSection";

// 1. CACHÉ ULTRARRÁPIDO: Guarda la página en los servidores globales de Vercel por 1 hora
export const revalidate = 3600;

export const metadata: Metadata = {
  title: { absolute: "AYCweb Paraguay | Firma de Infraestructura Digital B2B" },
  description: "Construimos ecosistemas digitales que automatizan ventas y operaciones para empresas y profesionales. No somos para todos, postulá a una auditoría.",
};

const DOMINIOS_GESTIONADOS = [
  { nombre: "aycweb.com", url: "https://aycweb.com" },
  { nombre: "ayc.com.py", url: "https://ayc.com.py" },
  { nombre: "proteinasmart.com", url: "https://proteinasmart.com" },
  { nombre: "drabiancapy.com", url: "https://drabiancapy.com" },
  { nombre: "drjoselahaye.com", url: "https://drjoselahaye.com" },
  { nombre: "metalmadeas.com", url: "https://metalmadeas.com" },
  { nombre: "oriplastpy.com", url: "https://oriplastpy.com" },
  { nombre: "larocaemprendimientos.com", url: "https://larocaemprendimientos.com" },
  { nombre: "latabletapy.com", url: "https://latabletapy.com" },
  { nombre: "webprox.co", url: "https://webprox.co" },
];

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-slate-50 font-sans relative overflow-hidden">
      
      {/* 2. LCP FIX: Ruta local para el noise.svg */}
      <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay z-0"></div>

      {/* ================= 1) HERO POSICIONADO con ROI ================= */}
      <section className="relative pt-28 pb-12 md:pt-48 md:pb-32 px-6 text-center z-10 border-b border-white/[0.05]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
        
        <div className="max-w-5xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-600/20 to-blue-500/10 border border-blue-500/30 text-blue-300 text-[11px] md:text-xs font-bold uppercase tracking-widest mb-6 md:mb-8 shadow-sm">
            ⚡ Reducí 40–70% del tiempo operativo en cotizaciones y seguimiento
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-6 md:mb-8 tracking-tighter leading-tight md:leading-[1.05] text-white">
            Tu operación no necesita más improvisación.{" "}
            <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Necesita un sistema.</span>
          </h1>
          <p className="text-base md:text-2xl text-slate-400 mb-8 md:mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Cada hora que tu equipo pierde armando cotizaciones a mano, buscando archivos sueltos o corrigiendo errores manuales, es una oportunidad de venta que se diluye. Recuperá ese tiempo con un sistema diseñado para tu operación real.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/${lang}/diagnostico-comercial`}
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-full transition-all shadow-[0_0_30px_rgba(37,99,235,0.35)] text-[15px] md:text-lg"
            >
              Solicitar Diagnóstico B2B
            </Link>
            <Link
              href={`/${lang}/demo-cotizador`}
              className="w-full sm:w-auto border border-slate-600 hover:border-slate-400 text-slate-300 px-8 py-4 rounded-full transition-all text-[15px] md:text-lg"
            >
              Probar Cotizador en Vivo
            </Link>
          </div>
        </div>
      </section>

      {/* ================= 1b) PRUEBA SOCIAL: Franja de clientes ================= */}
      <FranjaClientes palette="neutral" />

      {/* ================= 2) EVIDENCIA DE RESULTADO con gráfico + testimonios ================= */}
      <section className="py-16 md:py-24 relative z-10 bg-[#04050a] border-b border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-12 md:mb-16 text-white leading-tight">
            Lo que cambia cuando el <br className="hidden md:block"/> motor entra en operación
          </h2>

          {/* Gráfico visual: Antes vs Después */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-12 md:mb-16">
            <div className="bg-slate-900/60 border border-red-500/20 rounded-2xl p-5 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">😫</span>
                <span className="text-[11px] md:text-xs font-bold uppercase tracking-widest text-red-400/80">Antes del sistema</span>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-slate-400 text-[13px] md:text-sm">
                  <span className="text-red-400/60 mt-0.5">✕</span>
                  Cotizaciones a mano entre archivos sueltos
                </li>
                <li className="flex items-start gap-3 text-slate-400 text-[13px] md:text-sm">
                  <span className="text-red-400/60 mt-0.5">✕</span>
                  Errores manuales en cada presupuesto
                </li>
                <li className="flex items-start gap-3 text-slate-400 text-[13px] md:text-sm">
                  <span className="text-red-400/60 mt-0.5">✕</span>
                  Clientes sin seguimiento estructurado
                </li>
                <li className="flex items-start gap-3 text-slate-400 text-[13px] md:text-sm">
                  <span className="text-red-400/60 mt-0.5">✕</span>
                  Dependencia de memoria humana
                </li>
              </ul>
            </div>
            <div className="bg-slate-900/60 border border-emerald-500/20 rounded-2xl p-5 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">✅</span>
                <span className="text-[11px] md:text-xs font-bold uppercase tracking-widest text-emerald-400/80">Después del sistema</span>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-slate-300 text-[13px] md:text-sm">
                  <span className="text-emerald-400 mt-0.5">✓</span>
                  Cotizaciones con lógica centralizada en segundos
                </li>
                <li className="flex items-start gap-3 text-slate-300 text-[13px] md:text-sm">
                  <span className="text-emerald-400 mt-0.5">✓</span>
                  Errores de cálculo reducidos a cero
                </li>
                <li className="flex items-start gap-3 text-slate-300 text-[13px] md:text-sm">
                  <span className="text-emerald-400 mt-0.5">✓</span>
                  Prospectos filtrados antes del primer contacto
                </li>
                <li className="flex items-start gap-3 text-slate-300 text-[13px] md:text-sm">
                  <span className="text-emerald-400 mt-0.5">✓</span>
                  Operación clara, medible y escalable
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              "Pasás de cotizar entre archivos sueltos a responder con lógica centralizada.",
              "Reducís errores manuales en presupuestos, seguimiento y documentación.",
              "Filtrás mejor antes de hablar con cada prospecto.",
              "Ordenás el proceso comercial sin depender de memoria humana o improvisación.",
              "Transformás una operación dispersa en un sistema claro de venta y atención."
            ].map((text, i) => (
              <div key={i} className="bg-slate-900/60 p-8 rounded-2xl border border-slate-800 hover:border-blue-500/30 transition-colors">
                <div className="w-8 h-8 bg-blue-600/10 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-2.5 h-2.5 bg-blue-500 rounded-full animate-pulse"></div>
                </div>
                <p className="text-slate-300 font-medium leading-relaxed text-[15px]">{text}</p>
              </div>
            ))}
            <div className="bg-gradient-to-br from-blue-600/20 to-transparent p-8 rounded-2xl border border-blue-500/20 flex flex-col justify-center items-center text-center">
              <p className="text-white font-bold text-lg mb-2">¿Querés verlo en vivo?</p>
              <Link href={`/${lang}/demo-cotizador`} className="text-blue-400 font-bold hover:underline mb-3 block">
                ⚡ Probar Cotizador en Vivo →
              </Link>
              <Link href={`/${lang}/obras`} className="text-slate-400 text-sm hover:text-slate-200 hover:underline transition-colors">Ver obras en producción →</Link>
            </div>
          </div>

          {/* Testimonios / prueba social breve */}
          <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-5 md:p-6">
              <div className="flex items-start gap-1 mb-2">
                {[1,2,3,4,5].map((s) => <span key={s} className="text-amber-400 text-xs">★</span>)}
              </div>
              <p className="text-slate-300 text-[13px] md:text-sm leading-relaxed italic mb-3">
                "Pasamos de 2 horas por cotización a 3 minutos. Los errores de cálculo desaparecieron por completo."
              </p>
              <span className="text-[11px] text-slate-500 font-bold uppercase tracking-wider">— Oriplast Paraguay</span>
            </div>
            <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-5 md:p-6">
              <div className="flex items-start gap-1 mb-2">
                {[1,2,3,4,5].map((s) => <span key={s} className="text-amber-400 text-xs">★</span>)}
              </div>
              <p className="text-slate-300 text-[13px] md:text-sm leading-relaxed italic mb-3">
                "Ahora tenemos control completo del ciclo de vida del cliente, desde la captación hasta la entrega."
              </p>
              <span className="text-[11px] text-slate-500 font-bold uppercase tracking-wider">— Metal Made</span>
            </div>
            <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-5 md:p-6">
              <div className="flex items-start gap-1 mb-2">
                {[1,2,3,4,5].map((s) => <span key={s} className="text-amber-400 text-xs">★</span>)}
              </div>
              <p className="text-slate-300 text-[13px] md:text-sm leading-relaxed italic mb-3">
                "Llegan pacientes precalificados, con expectativas claras. Se redujeron las cancelaciones de último momento."
              </p>
              <span className="text-[11px] text-slate-500 font-bold uppercase tracking-wider">— Dra. Bianca (Odontología)</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 3) SEGMENTACIÓN ================= */}
      <section className="py-16 md:py-24 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 md:mb-6 leading-tight">Dos caminos. Dos sistemas.</h2>
            <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              No todos compran igual. Diseñamos una arquitectura distinta para empresas con operación compleja y para profesionales que necesitan orden.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            <div className="bg-slate-900/60 border border-slate-800 rounded-[1.5rem] md:rounded-3xl p-6 md:p-10 hover:border-blue-500/50 transition-all group flex flex-col">
              <span className="text-4xl md:text-5xl mb-4 md:mb-6 block">🏭</span>
              <h3 className="text-2xl md:text-3xl font-black text-white mb-3 md:mb-4 group-hover:text-blue-400 transition-colors">Para Empresas</h3>
              <p className="text-slate-400 leading-relaxed mb-6 md:mb-8 flex-1 text-[15px] md:text-lg">
                Si tu operación ya no cabe en Excel, te diseñamos un sistema para cotizar más rápido, reducir errores y emitir documentos al instante.
              </p>
              <Link href={`/${lang}/empresas`} className="block w-full text-center bg-slate-800 hover:bg-slate-700 text-white font-bold py-3.5 md:py-4 rounded-xl transition-all border border-slate-700 text-[14px] md:text-base">
                Ver soluciones para empresas →
              </Link>
            </div>

            <div className="bg-slate-900/60 border border-slate-800 rounded-[1.5rem] md:rounded-3xl p-6 md:p-10 hover:border-emerald-500/50 transition-all group flex flex-col">
              <span className="text-4xl md:text-5xl mb-4 md:mb-6 block">🧑‍⚕️</span>
              <h3 className="text-2xl md:text-3xl font-black text-white mb-3 md:mb-4 group-hover:text-emerald-400 transition-colors">Para Profesionales</h3>
              <p className="text-slate-400 leading-relaxed mb-6 md:mb-8 flex-1 text-[15px] md:text-lg">
                Si dependés del boca a boca, armamos un sistema para captar mejor, filtrar prospectos y convertir más sin saturar tu tiempo.
              </p>
              <Link href={`/${lang}/profesionales`} className="block w-full text-center bg-slate-800 hover:bg-slate-700 text-white font-bold py-3.5 md:py-4 rounded-xl transition-all border border-slate-700 text-[14px] md:text-base">
                Ver soluciones para profesionales →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 3b) PIPELINE OPERATIVO (Timeline visual) ================= */}
      <section className="py-16 md:py-24 relative z-10 bg-[#04050a] border-b border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">
              No entregamos una web.<br className="hidden md:block" /> Entregamos un flujo operativo.
            </h2>
            <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto">
              Así funciona el proceso, desde el primer mensaje hasta el sistema en producción.
            </p>
          </div>

          {/* Barra de progreso horizontal (solo visible en lg+) */}
          <div className="hidden lg:flex justify-between items-center mb-6 px-2">
            {["Semana 1", "Semana 1", "Semana 2", "Semanas 2-3", "Semana 3", "Semana 4+", "Continuo"].map((tiempo, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400/70">{tiempo}</span>
              </div>
            ))}
          </div>

          {/* Línea de progreso conectora (solo lg+) */}
          <div className="hidden lg:block relative h-1 mb-8 mx-6">
            <div className="absolute inset-0 bg-white/[0.06] rounded-full"></div>
            <div className="absolute left-0 top-0 h-full w-[85%] bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400/40 rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 md:gap-4">
            {[
              { icon: "💬", step: "01", label: "Consulta", desc: "Nos contás tu operación y el problema central", tiempo: "Semana 1", duracion: "1-2 días" },
              { icon: "🔍", step: "02", label: "Filtro", desc: "Evaluamos si hay encaje real, sin vender por vender", tiempo: "Semana 1", duracion: "2-3 días" },
              { icon: "📋", step: "03", label: "Diagnóstico", desc: "Mapeamos el flujo actual, fricción por fricción", tiempo: "Semana 2", duracion: "3-5 días" },
              { icon: "⚙️", step: "04", label: "Sistema", desc: "Diseñamos y construimos el motor a medida", tiempo: "Semanas 2-3", duracion: "7-14 días" },
              { icon: "📄", step: "05", label: "PDF / WhatsApp", desc: "Cotizaciones y mensajes automatizados", tiempo: "Semana 3", duracion: "3-5 días" },
              { icon: "📊", step: "06", label: "Panel", desc: "Métricas y visibilidad en tiempo real", tiempo: "Semana 4+", duracion: "2-3 días" },
              { icon: "🔁", step: "07", label: "Seguimiento", desc: "Acompañamiento post-lanzamiento", tiempo: "Continuo", duracion: "Mensual" },
            ].map((item, i) => (
              <div key={i} className="relative flex flex-col">
                <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-4 md:p-5 text-center flex flex-col items-center flex-1 hover:border-blue-500/20 transition-colors group">
                  {/* Duración estimada (píldora visible en hover y siempre en lg) */}
                  <span className="text-[9px] font-bold uppercase tracking-widest text-emerald-400/60 mb-2 lg:opacity-0 group-hover:opacity-100 transition-opacity">
                    {item.duracion}
                  </span>
                  <span className="text-2xl md:text-3xl mb-2 block">{item.icon}</span>
                  <span className="text-[10px] text-blue-500/70 font-black tracking-widest mb-1.5 block">{item.step}</span>
                  <h4 className="text-white font-bold text-[12px] md:text-[13px] mb-2 leading-tight">{item.label}</h4>
                  <p className="text-slate-500 text-[10px] md:text-[11px] leading-relaxed hidden sm:block">{item.desc}</p>
                  {/* Indicador de tiempo en mobile */}
                  <span className="mt-2 text-[8px] text-slate-600 lg:hidden">{item.duracion}</span>
                </div>
                {i < 6 && (
                  <div className="absolute -right-2.5 top-1/2 -translate-y-1/2 text-slate-700 font-bold z-10 hidden lg:flex items-center text-2xl transition-colors group-hover:text-blue-500">›</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 4) FILTRO Y ADMISIÓN ================= */}
      <section className="py-16 md:py-32 relative z-10 border-y border-white/[0.05] overflow-hidden">
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <span className="text-blue-500 font-bold tracking-widest uppercase text-[11px] md:text-sm mb-3 md:mb-4 block">Filtro de Admisión</span>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4 md:mb-6 leading-tight">
                No trabajamos por volumen. <br/> Trabajamos por encaje.
              </h2>
              <div className="space-y-4 md:space-y-6 text-slate-400 text-[15px] md:text-lg leading-relaxed">
                <p>{FILTRO_ADMISION_COPY.texto}</p>
              </div>
            </div>
            
            <div className="bg-slate-950 border border-slate-800 rounded-[1.5rem] md:rounded-3xl p-6 md:p-8 shadow-2xl relative">
               <div className="absolute -left-3 -top-3 md:-left-4 md:-top-4 w-10 h-10 md:w-12 md:h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-black text-lg md:text-xl shadow-lg border-4 border-slate-950">!</div>
               <h3 className="text-lg md:text-xl font-bold text-white mb-5 md:mb-6 pl-4 md:pl-0">Cómo entrás a AYCweb:</h3>
               <ul className="space-y-4 md:space-y-6">
                 {[
                   { t: "Postulación", d: "Nos mostrás cómo vendés o cotizás hoy." },
                   { t: "Diagnóstico", d: "Detectamos si hay una fricción que valga la pena resolver." },
                   { t: "Arquitectura y Propuesta", d: "Si hay encaje, presentamos el sistema y el siguiente paso." }
                 ].map((item, i) => (
                   <li key={i} className="flex gap-3 md:gap-4">
                     <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-xs md:text-sm font-bold text-slate-400 shrink-0">{i+1}</div>
                     <div>
                       <h4 className="text-white font-bold mb-1 text-[15px] md:text-base">{item.t}</h4>
                       <p className="text-slate-500 text-[13px] md:text-sm leading-relaxed">{item.d}</p>
                     </div>
                   </li>
                 ))}
               </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 5b) CASOS EN PRODUCCIÓN con métricas ================= */}
      <section className="py-16 md:py-24 relative z-10 border-b border-white/[0.05]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">
              Casos en producción
            </h2>
            <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Esto no es teoría. Son sistemas funcionando hoy, con resultados medibles.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {CASOS_OBRAS.map((caso) => (
              <CasoCard key={caso.id} caso={caso} lang={lang} />
            ))}
          </div>

          <div className="mt-12">
            <h3 className="text-lg font-bold text-white mb-4 text-center">Infraestructura activa gestionada por nuestra firma</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {DOMINIOS_GESTIONADOS.map((dominio) => (
                <a
                  key={dominio.nombre}
                  href={dominio.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 text-sm hover:bg-white/10 hover:text-white transition-colors flex items-center gap-2"
                >
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
                    <circle cx="4" cy="4" r="4" fill="#22c55e"/>
                  </svg>
                  {dominio.nombre}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECCIÓN DE PRECIOS: Construcción + Mantenimiento mensual ================= */}
      <section className="py-16 md:py-24 relative z-10 bg-[#04050a] border-b border-white/[0.05]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">
              Inversión clara. Sin ambigüedad.
            </h2>
            <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto">
              Elegí el plan que se ajuste a tu operación. Sin ambigüedad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto">
            <PricingCard
              planId="business"
              accent="blue"
              badge="MÁS ELEGIDO"
              ctaHref={buildWaLink(`Hola Oscar, quiero agendar una Auditoría B2B para mi operación. Me interesa el plan Business.`)}
              ctaLabel="Solicitar diagnóstico comercial"
              tagline="Para empresas que necesitan convertir web + WhatsApp en un motor comercial con mejor seguimiento y menos tareas repetitivas."
              constructionLabel="Construcción del ecosistema comercial"
              monthlyText="USD 30/mes de mantenimiento, actualizaciones y limpieza operativa"
            />

            <PricingCard
              planId="enterprise"
              accent="violet"
              ctaHref={buildWaLink(`Hola Oscar, quiero agendar una Auditoría B2B para mi operación. Me interesa el plan Enterprise.`)}
              ctaLabel="Diseñar infraestructura"
              tagline="Para operaciones que necesitan cotizadores, automatización, integración y control operativo más robusto."
              constructionLabel="Construcción de infraestructura operativa"
              monthlyText="USD 45/mes de mantenimiento, actualizaciones y limpieza operativa"
            />
          </div>

          <PricingComparativa />

          <div className="text-center mt-8">
            <p className="text-[11px] md:text-xs text-slate-500 max-w-xl mx-auto leading-relaxed">
              Los planes se estructuran con construcción inicial del sistema + mantenimiento mensual operativo. La duración contractual y condiciones finales se definen en la propuesta formal.
            </p>
          </div>
        </div>
      </section>

      {/* ================= 5) GARANTÍA ================= */}
      <section className="py-16 md:py-24 relative z-10 bg-[#04050a]">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="bg-gradient-to-br from-slate-900/80 to-slate-950 border border-slate-800 rounded-[2rem] md:rounded-[3rem] p-6 md:p-16 text-center shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-blue-500/5 backdrop-blur-3xl z-0"></div>
            <div className="relative z-10">
              <span className="text-4xl md:text-6xl block mb-4 md:mb-8">🛡️</span>
              <h2 className="text-2xl md:text-5xl font-black text-white mb-4 md:mb-6">Garantía Inteligente por Etapas</h2>
              <p className="text-slate-400 text-[15px] md:text-xl max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed">
                Primero medimos cuánto tiempo pierde tu equipo. Luego diseñamos el sistema para reducir tareas repetitivas. Si en la primera etapa no logramos una mejora operativa validada, cancelamos el proyecto y devolvemos el pago inicial.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-6 mb-8 md:mb-12">
                <div className="bg-slate-950/80 border border-slate-800 p-4 md:p-6 rounded-[1rem] md:rounded-2xl">
                  <div className="font-bold text-white mb-1 md:mb-2 text-[14px] md:text-base">Compromiso mutuo</div>
                  <div className="text-[13px] md:text-sm text-slate-500 text-center">Intención real de construir.</div>
                </div>
                <div className="bg-slate-950/80 border border-slate-800 p-4 md:p-6 rounded-[1rem] md:rounded-2xl">
                  <div className="font-bold text-white mb-1 md:mb-2 text-[14px] md:text-base">Garantía Inteligente</div>
                  <div className="text-[13px] md:text-sm text-slate-500 text-center">Si en la primera etapa no logramos una mejora operativa validada, cancelamos el proyecto y devolvemos el pago inicial.</div>
                </div>
                <div className="bg-slate-950/80 border border-slate-800 p-4 md:p-6 rounded-[1rem] md:rounded-2xl">
                  <div className="font-bold text-white mb-1 md:mb-2 text-[14px] md:text-base">Cero sorpresas</div>
                  <div className="text-[13px] md:text-sm text-slate-500 text-center">Todo claro desde el inicio.</div>
                </div>
              </div>

              <Link
                href={`/${lang}/diagnostico-comercial`}
                className="block w-full sm:w-auto sm:inline-block bg-white text-slate-950 font-black py-3.5 md:py-4 px-6 md:px-10 rounded-xl transition-all shadow-lg hover:bg-slate-200 active:scale-95 text-[15px] md:text-base"
              >
                Solicitar Diagnóstico B2B
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 6) HERRAMIENTAS OPERATIVAS ABIERTAS (PLG) ================= */}
      <HerramientasSection />

    </div>
  );
}
