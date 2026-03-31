import Link from "next/link";
import { Metadata } from "next";

// 🚀 EL FIX DEL SEO: Esto destruye el "Create Next App" en Google
export const metadata: Metadata = {
  title: "Ingeniería Comercial y Sistemas B2B | AYCweb",
  description: "Construimos infraestructura digital y software operativo B2B en Paraguay. Cotizadores, embudos y portales para industrias y empresas que buscan escalar.",
};

export default function Home() {
  const whatsappNumber = "595985864209";
  const whatsappMsg = encodeURIComponent("¡Hola! Quiero agendar una sesión de diagnóstico para automatizar mi empresa.");

  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 text-zinc-50">
      
      <section className="relative pt-20 pb-20 md:pt-32 md:pb-24 px-6 text-center overflow-hidden border-b border-zinc-900">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-blue-900/50 bg-blue-950/30 text-sm font-semibold text-blue-300 shadow-inner">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            Ingeniería Comercial & Automatización
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter leading-[1.05] text-white">
            Diseño sistemas digitales que <span className="text-blue-500">venden, ordenan y aceleran</span> empresas.
          </h1>
          <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            No hacemos "sitios web bonitos". Construimos activos digitales (cotizadores, embudos, paneles) que convierten procesos manuales en máquinas comerciales 24/7.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
              target="_blank" rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-500 text-white font-black py-4 px-8 rounded-xl transition-all shadow-[0_0_30px_-5px_rgba(37,99,235,0.4)] active:scale-95"
            >
              Agendar Diagnóstico Gratuito
            </a>
            <Link 
              href="/os" 
              className="bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-white font-bold py-4 px-8 rounded-xl transition-all"
            >
              Ver Sistema "Máquina 24/7"
            </Link>
          </div>
        </div>
      </section>

      {/* FRANJA DE PRUEBA RÁPIDA (Rubros) */}
      <section className="py-12 bg-black border-b border-zinc-900">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-zinc-600 mb-8">
            Sistemas desarrollados para industria, salud, corporativo y legal:
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-zinc-300 font-bold text-sm md:text-base">
            <span className="flex items-center gap-2"><span className="text-blue-500">■</span> Metal Mad</span>
            <span className="flex items-center gap-2"><span className="text-purple-500">■</span> Dra. Bianca</span>
            <span className="flex items-center gap-2"><span className="text-zinc-500">■</span> A y C</span>
            <span className="flex items-center gap-2"><span className="text-emerald-500">■</span> Coop y Cia</span>
          </div>
        </div>
      </section>

      {/* MICROFRANJA DE MÉTRICAS */}
      <section className="py-10 bg-zinc-950 border-b border-zinc-900 overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:divide-x md:divide-zinc-800">
            <div className="px-4">
              <p className="text-4xl font-black text-white mb-2">99<span className="text-blue-500 text-2xl">/100</span></p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">PageSpeed Google</p>
            </div>
            <div className="px-4">
              <p className="text-4xl font-black text-white mb-2">+15</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Sistemas B2B Activos</p>
            </div>
            <div className="px-4">
              <p className="text-4xl font-black text-white mb-2">100<span className="text-emerald-500 text-2xl">%</span></p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Trazabilidad Operativa</p>
            </div>
            <div className="px-4">
              <p className="text-4xl font-black text-white mb-2">24<span className="text-blue-500 text-2xl">/7</span></p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Captación Automática</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black border-b border-zinc-900">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-black mb-6 text-zinc-300">Un enfoque diferente al de la agencia común.</h2>
          <p className="text-lg text-zinc-500 max-w-3xl mx-auto leading-relaxed">
            <strong>AYCweb combina ingeniería comercial, automatización y software B2B</strong> para transformar procesos manuales en sistemas que venden y operan mejor. Analizamos cómo encajará la herramienta en tu proceso para asegurar retorno de inversión real.
          </p>
        </div>
      </section>

      <section className="py-24 bg-zinc-900/30 border-b border-zinc-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Ecosistemas a tu medida</h2>
            <p className="text-zinc-400">Implementamos soluciones modulares con objetivos claros.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-zinc-950 p-8 rounded-3xl border border-zinc-800 hover:border-blue-900 transition-colors">
              <h3 className="text-2xl font-bold text-white mb-3">Captación & Ventas</h3>
              <p className="text-zinc-500 mb-6 text-sm">Embudos y landings B2B de alta conversión.</p>
              <Link href="/servicios" className="text-blue-500 text-sm font-bold hover:underline">Ver embudos tácticos &rarr;</Link>
            </div>
            <div className="bg-zinc-950 p-8 rounded-3xl border border-zinc-800 hover:border-emerald-900 transition-colors">
              <h3 className="text-2xl font-bold text-white mb-3">Operativa Automática</h3>
              <p className="text-zinc-500 mb-6 text-sm">Cotizadores PDF y emisión de contratos sin errores.</p>
              <Link href="/servicios" className="text-emerald-500 text-sm font-bold hover:underline">Ver motores de cálculo &rarr;</Link>
            </div>
            <div className="bg-zinc-950 p-8 rounded-3xl border border-zinc-800 hover:border-purple-900 transition-colors">
              <h3 className="text-2xl font-bold text-white mb-3">Sistemas a Medida</h3>
              <p className="text-zinc-500 mb-6 text-sm">Portales B2B y dashboards de control.</p>
              <Link href="/servicios" className="text-purple-500 text-sm font-bold hover:underline">Ver portales corporativos &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-zinc-950 text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Dependé menos del caos manual.</h2>
          <div className="flex justify-center mt-8">
             <a 
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
              target="_blank" rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-500 text-white font-black py-4 px-10 rounded-xl transition-all shadow-[0_0_30px_rgba(37,99,235,0.3)] active:scale-95"
            >
              Agendar Diagnóstico
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
