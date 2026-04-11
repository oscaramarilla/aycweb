// app/page.tsx
import VideoAutoridad from "@/components/VideoAutoridad";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-slate-50">
      
      {/* HERO SECTION VIP */}
      <section className="w-full pt-32 pb-20 px-4 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Columna Izquierda: Copywriting y Llamado a la Acción */}
          <div className="text-left space-y-6">
            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">
              Agencia de Desarrollo B2B
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight">
              Escala tus ventas <br />
              <span className="text-blue-600">sin perder horas</span> en presupuestos.
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-xl">
              Construimos máquinas de adquisición de clientes. Cotiza en 45 segundos, cierra tratos por WhatsApp y domina tu mercado con infraestructura de nivel VIP.
            </p>
            
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <a 
                href="#contacto" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full shadow-lg shadow-blue-600/30 transition-all transform hover:scale-105 text-center"
              >
                Agendar Auditoría Gratuita
              </a>
              <a 
                href="#casos-de-exito" 
                className="bg-transparent border-2 border-slate-300 hover:border-slate-800 text-slate-700 font-bold py-4 px-8 rounded-full transition-all text-center"
              >
                Ver Casos de Éxito
              </a>
            </div>
          </div>

          {/* Columna Derecha: Prueba de Autoridad en Vivo (Lazy Loaded) */}
          <div className="flex justify-center lg:justify-end w-full relative">
            {/* Efecto de resplandor sutil detrás del video */}
            <div className="absolute inset-0 bg-blue-500/10 blur-[100px] rounded-full w-full h-full -z-10"></div>
            
            <VideoAutoridad />
          </div>

        </div>
      </section>

      {/* Aquí continúan el resto de tus secciones (Servicios, Clientes, etc.) */}
      
    </main>
  );
}
