import Link from "next/link";
import Image from "next/image";

export default function CasosPage() {
  const whatsappNumber = "595985864209";
  const whatsappMsg = encodeURIComponent("¡Hola Oscar! Estuve viendo los casos de éxito en la web y quiero ver cómo podemos aplicar un sistema similar en mi empresa.");

  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-blue-500 selection:text-white">
      
      {/* 🛑 NAVEGACIÓN (Consistente con el resto del sitio) */}
      <nav className="flex justify-between items-center px-6 py-4 border-b border-zinc-900 bg-zinc-950/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-3">
          <Link href="/" className="flex items-center justify-center mt-1 md:mt-0 gap-2">
            <div className="w-8 h-8 relative flex items-center justify-center">
               <Image src="/logo-ayc.webp" alt="AYCweb Logo" width={32} height={32} className="object-contain" />
            </div>
            <span className="font-black text-2xl tracking-tighter text-white italic">AYCweb</span>
          </Link>
          <nav className="flex items-center justify-center gap-4 sm:gap-6 text-[12px] sm:text-sm font-semibold text-zinc-300 w-full md:w-auto pb-1 md:pb-0 flex-wrap">
            <Link href="/experiencia" className="hover:text-white transition-colors text-blue-400">Trayectoria B2G</Link>
            <span className="text-zinc-700 hidden sm:inline">|</span>
            <Link href="/casos" className="text-white font-bold">Casos Reales</Link>
            <Link href="/servicios" className="hover:text-white transition-colors">Sistemas SaaS</Link>
            <Link href="/sectores" className="hover:text-white transition-colors">Industrias</Link>
          </nav>
        </div>
      </nav>

      {/* 🚀 HERO SECTION: Casos Reales */}
      <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 px-6 text-center overflow-hidden border-b border-zinc-900">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter leading-[1.05] text-white">
            No vendemos humo. <br/> <span className="text-blue-500">Construimos sistemas.</span>
          </h1>
          <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Explorá cómo hemos ayudado a fábricas, profesionales de la salud, corporaciones e industrias gastronómicas a automatizar sus ventas y procesos.
          </p>
        </div>
      </section>

      {/* 💼 CASO 1: B2B INDUSTRIAL (Metal Mad) */}
      <section className="py-20 bg-black border-b border-zinc-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-blue-900/30 text-blue-400 text-xs font-bold uppercase tracking-widest border border-blue-900/50 mb-6">
                Industria & B2B
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Metal Mad E.A.S.</h2>
              <p className="text-zinc-400 leading-relaxed mb-6">
                <strong>El Problema:</strong> El equipo comercial perdía horas valiosas armando cotizaciones en Excel para colegios e instituciones, generando cuellos de botella en el cierre de ventas.
              </p>
              <p className="text-zinc-400 leading-relaxed mb-8">
                <strong>La Solución:</strong> Desarrollamos un Ecosistema Digital con un <em>Generador Automático de Presupuestos en PDF</em>. Ahora, cualquier vendedor ingresa los datos y en 3 segundos tiene un documento oficial listo para enviar por WhatsApp.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="https://metalmadeas.com/presu" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-xl transition-all flex items-center gap-2">
                  Ver Cotizador en Vivo &rarr;
                </a>
              </div>
            </div>
            {/* Tarjeta Visual de Resultados */}
            <div className="bg-zinc-900 rounded-[2rem] border border-zinc-800 p-8 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
              <h3 className="text-xl font-bold text-white mb-6">Impacto Operativo</h3>
              <div className="space-y-4">
                <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 flex justify-between items-center">
                  <span className="text-zinc-400 font-medium">Tiempo de Cotización</span>
                  <span className="text-emerald-500 font-black text-xl">De 2h a 3 min</span>
                </div>
                <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 flex justify-between items-center">
                  <span className="text-zinc-400 font-medium">Rendimiento Técnico</span>
                  <span className="text-emerald-500 font-black text-xl">99/100 PageSpeed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 💼 CASO 2: OPERATIVA LEGAL (Contratos AYC) */}
      <section className="py-20 bg-zinc-950 border-b border-zinc-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center flex-row-reverse">
            <div className="lg:order-2">
              <span className="inline-block px-3 py-1 rounded-full bg-emerald-900/30 text-emerald-400 text-xs font-bold uppercase tracking-widest border border-emerald-900/50 mb-6">
                Operaciones & Legal
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Automatización de Contratos</h2>
              <p className="text-zinc-400 leading-relaxed mb-6">
                <strong>El Problema:</strong> El <em>onboarding</em> de nuevos clientes requería redactar documentos legales repetitivos, retrasando el inicio de los proyectos y generando fricción administrativa.
              </p>
              <p className="text-zinc-400 leading-relaxed mb-8">
                <strong>La Solución:</strong> Implementamos un sistema interno de generación de contratos. Con solo llenar un formulario rápido, el sistema compila un documento legal blindado y listo para la firma digital.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/legales" className="bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-white font-bold py-3 px-6 rounded-xl transition-all flex items-center gap-2">
                  Ver Demo del Sistema &rarr;
                </Link>
              </div>
            </div>
            <div className="lg:order-1 bg-zinc-900 rounded-[2rem] border border-zinc-800 p-8 shadow-2xl flex items-center justify-center min-h-[300px]">
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-950/50 rounded-2xl border border-emerald-900 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                </div>
                <h3 className="text-xl font-bold text-white">Generador Legal Activo</h3>
                <p className="text-zinc-500 text-sm mt-2">Documentación estandarizada B2B</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 💼 CASO 3: PROFESIONALES DE LA SALUD (Dra. Bianca) */}
      <section className="py-20 bg-black border-b border-zinc-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-purple-900/30 text-purple-400 text-xs font-bold uppercase tracking-widest border border-purple-900/50 mb-6">
                Salud & Marca Personal
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Dra. Bianca (Odontología)</h2>
              <p className="text-zinc-400 leading-relaxed mb-6">
                <strong>El Problema:</strong> Depender exclusivamente de Instagram para conseguir pacientes limitaba el crecimiento y restaba autoridad corporativa frente a clínicas más grandes.
              </p>
              <p className="text-zinc-400 leading-relaxed mb-8">
                <strong>La Solución:</strong> Desarrollamos un consultorio digital 24/7. Una web de alta conversión que proyecta extrema confianza, expone los tratamientos de forma clara y centraliza la captación de reservas directamente a WhatsApp.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="https://drabiancapy.com" target="_blank" rel="noopener noreferrer" className="bg-purple-600 hover:bg-purple-500 text-white font-bold py-3 px-6 rounded-xl transition-all flex items-center gap-2">
                  Visitar Ecosistema Médico &rarr;
                </a>
              </div>
            </div>
            <div className="bg-zinc-900 rounded-[2rem] border border-zinc-800 p-8 shadow-2xl">
              <div className="bg-zinc-950 p-6 rounded-2xl border border-zinc-800">
                <p className="text-sm text-zinc-400 font-mono mb-4">&gt; Módulos implementados:</p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-zinc-300"><span className="text-purple-500">✔</span> Posicionamiento de Autoridad</li>
                  <li className="flex items-center gap-3 text-zinc-300"><span className="text-purple-500">✔</span> Embudo de Agendamiento Directo</li>
                  <li className="flex items-center gap-3 text-zinc-300"><span className="text-purple-500">✔</span> Diseño Mobile-First para Pacientes</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 💼 CASO 4: GASTRONOMÍA & E-COMMERCE */}
      <section className="py-20 bg-zinc-950 border-b border-zinc-900">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-orange-900/30 text-orange-400 text-xs font-bold uppercase tracking-widest border border-orange-900/50 mb-6">
            Retail & Gastronomía
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Sistematización de Pedidos</h2>
          <p className="text-xl text-zinc-400 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            Hemos ayudado a líderes del rubro gastronómico a dejar de colapsar en horas pico. Integramos sistemas que muestran el menú, toman el pedido y lo envían estructurado, reduciendo errores humanos a cero.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { marca: "La Tableta", url: "https://latabletapy.com" },
              { marca: "Empanadas Areco", url: "#" },
              { marca: "Pizzazos", url: "#" }
            ].map((cliente, i) => (
              <div key={i} className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl hover:border-orange-500/50 transition-colors group">
                <h3 className="text-2xl font-black text-white mb-2">{cliente.marca}</h3>
                <p className="text-sm text-zinc-500 mb-6">Sistema de Captación de Pedidos</p>
                {cliente.url !== "#" ? (
                  <a href={cliente.url} target="_blank" rel="noopener noreferrer" className="text-orange-400 text-sm font-bold group-hover:text-orange-300">Ver proyecto &rarr;</a>
                ) : (
                  <span className="text-zinc-600 text-sm font-medium">Caso confidencial / Offline</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 💼 CASO 5: CORPORATIVO E INSTITUCIONAL */}
      <section className="py-20 bg-black border-b border-zinc-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 text-xs font-bold uppercase tracking-widest border border-zinc-700 mb-6">
              Corporaciones & B2G
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Infraestructura de Alta Confianza</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">Sistemas robustos desarrollados para instituciones educativas, financieras y de servicios corporativos B2B.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { nombre: "Colegio Cristo Rey", url: "https://cristorey.edu.py" },
              { nombre: "Caja Mutual UC", url: "https://cajamutualuc.com" },
              { nombre: "Webprox", url: "https://webprox.co" },
              { nombre: "AYC Consultora", url: "https://ayc.com.py" }
            ].map((inst, i) => (
              <a key={i} href={inst.url} target="_blank" rel="noopener noreferrer" className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-2xl flex flex-col items-center justify-center text-center hover:bg-zinc-900 transition-colors">
                <div className="w-10 h-10 rounded-full bg-zinc-800 mb-3 flex items-center justify-center text-zinc-500 font-bold">{inst.nombre.charAt(0)}</div>
                <h4 className="text-white font-bold text-sm mb-1">{inst.nombre}</h4>
                <p className="text-[10px] text-zinc-500 uppercase tracking-wider">Ver Web ↗</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 🚀 CTA FINAL */}
      <section className="py-24 bg-zinc-950 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">¿Viste tu empresa reflejada acá?</h2>
          <p className="text-xl text-zinc-400 mb-10 leading-relaxed">
            Tu negocio es el siguiente. Dejá de usar herramientas genéricas y construyamos un sistema digital que trabaje, ordene y venda por vos.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <a 
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
              target="_blank" rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-500 text-white font-black py-4 px-8 rounded-xl transition-all shadow-lg active:scale-95"
            >
              Agendar Diagnóstico sin costo
            </a>
            <Link 
              href="/os" 
              className="bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-emerald-400 font-bold py-4 px-8 rounded-xl transition-all flex items-center justify-center gap-2"
            >
              Ver Ecosistema de Venta &rarr;
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
