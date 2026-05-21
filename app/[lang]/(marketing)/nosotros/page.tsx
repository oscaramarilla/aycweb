import Image from "next/image";
import { buildWaLink } from "@/lib/config/contact";

export default function NosotrosPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <section className="px-6 pt-28 pb-12 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black mb-4">Quiénes somos</h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Equipo técnico y de producto que construye herramientas para operaciones que necesitan escala.
          </p>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-slate-800 p-6 bg-slate-900/40 text-center">
            <div className="text-3xl mb-3">👨‍💻</div>
            <h3 className="font-black text-white mb-2">Producto</h3>
            <p className="text-slate-400">Diseñamos flujos para usuarios reales y medibles.</p>
          </div>

          <div className="rounded-2xl border border-slate-800 p-6 bg-slate-900/40 text-center">
            <div className="text-3xl mb-3">⚙️</div>
            <h3 className="font-black text-white mb-2">Ingeniería</h3>
            <p className="text-slate-400">Sistemas escalables y mantenibles, con métricas reales.</p>
          </div>

          <div className="rounded-2xl border border-slate-800 p-6 bg-slate-900/40 text-center">
            <div className="text-3xl mb-3">🤝</div>
            <h3 className="font-black text-white mb-2">Operaciones</h3>
            <p className="text-slate-400">Acompañamos la implementación y la capacitación en campo.</p>
          </div>
        </div>
      </section>

      <section className="px-6 py-12 border-t border-white/[0.04] text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-black mb-3">Hablemos</h2>
          <p className="text-slate-400 mb-6">Si querés entender cómo podemos ayudar tu operación, agendá una llamada.</p>
          <a
            href={buildWaLink("Hola Oscar, me interesa conocer al equipo y coordinar una llamada.")}
            className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-black py-3 px-8 rounded-xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contactar
          </a>
        </div>
      </section>
    </div>
  );
}
