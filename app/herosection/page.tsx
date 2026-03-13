export default function HeroSection() {
  return (
    <section className="relative bg-zinc-950 text-white overflow-hidden py-24 lg:py-32 min-h-screen flex items-center">
      {/* Efecto de luz de fondo (Glow) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-zinc-950 to-zinc-950"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center text-center">
        
        {/* Etiqueta parpadeante estilo "Sistema Activo" */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-bold tracking-wide mb-8 uppercase">
          <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
          AYC | Automatización y Contratos
        </div>

        {/* Titular Principal (El gancho) */}
        <h1 className="text-5xl md:text-7xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-400 mb-6 max-w-5xl leading-tight">
          No hacemos páginas web.<br /> 
          <span className="text-blue-500">Construimos máquinas de tiempo.</span>
        </h1>

        {/* Subtítulo (La promesa) */}
        <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl leading-relaxed">
          Eliminamos los cuellos de botella de tu empresa con software a medida, inteligencia artificial y automatización de procesos B2B para que escales tu facturación.
        </p>

        {/* Botones de Acción (Call to Action) */}
        <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
          <button className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-black text-lg rounded-xl transition-all hover:-translate-y-1 shadow-[0_0_20px_rgba(37,99,235,0.4)]">
            Auditar mi empresa (Gratis)
          </button>
          
          <button className="px-8 py-4 bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-lg rounded-xl transition-all border border-zinc-700 hover:border-zinc-500 flex items-center justify-center gap-2">
            Ver caso de éxito: Metal Mad
          </button>
        </div>

        {/* Prueba Social / Tecnologías */}
        <div className="mt-20 pt-10 border-t border-zinc-800/50 w-full max-w-3xl">
          <p className="text-xs text-zinc-500 uppercase tracking-widest font-bold mb-6">Tecnologías que dominamos para tu negocio</p>
          <div className="flex justify-center gap-8 md:gap-16 text-zinc-600 font-bold text-lg">
            <span>Next.js</span>
            <span>React</span>
            <span>Inteligencia Artificial</span>
            <span>Sistemas Cloud</span>
          </div>
        </div>

      </div>
    </section>
  );
}
