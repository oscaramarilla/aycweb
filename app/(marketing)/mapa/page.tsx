import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Directorio B2B | AYCweb",
  description: "Mapa del sitio y centro de comando de infraestructura digital AYCweb.",
};

// Mapeo seguro de colores para Tailwind
const colorStyles = {
  blue: { text: "text-blue-400", bg: "bg-blue-500" },
  emerald: { text: "text-emerald-400", bg: "bg-emerald-500" },
  purple: { text: "text-purple-400", bg: "bg-purple-500" },
  orange: { text: "text-orange-400", bg: "bg-orange-500" },
  red: { text: "text-red-400", bg: "bg-red-500" },
};

type ColorKey = keyof typeof colorStyles;

const secciones = [
  {
    title: "Navegación Principal",
    color: "blue" as ColorKey,
    links: [
      { name: "Home (Inicio)", path: "/" },
      { name: "Servicios B2B", path: "/servicios" },
      { name: "Sectores", path: "/sectores" },
      { name: "Casos de Éxito", path: "/casos" },
      { name: "Experiencia", path: "/experiencia" },
      { name: "Biblioteca (Blog)", path: "/recursos" },
    ]
  },
  {
    title: "Embudo de Ventas",
    color: "emerald" as ColorKey,
    links: [
      { name: "Pricing Consultivo", path: "/precios" },
      { name: "Checkout Caliente (OS)", path: "/os" },
      { name: "Suscripción SaaS (SOS)", path: "/sos" },
    ]
  },
  {
    title: "Demos & Herramientas",
    color: "purple" as ColorKey,
    links: [
      { name: "Cotizador Fletes", path: "/flete" },
      { name: "Motor Logístico", path: "/motor-logistico" },
      { name: "Motor SaaS", path: "/motor-saas" },
    ]
  },
  {
    title: "Landings Verticales",
    color: "orange" as ColorKey,
    links: [
      { name: "Industria (Metal Mad)", path: "/metal-mad" },
      { name: "Mascotas Premium", path: "/mascotas-premium" },
      { name: "Modulares Kingspan", path: "/modulares-kingspan" },
    ]
  },
  {
    title: "Privado (Admin)",
    color: "red" as ColorKey,
    links: [
      { name: "Generador de Contratos", path: "/contrato" },
      { name: "Auto Presupuesto", path: "/autoppto" },
      { name: "Control Room", path: "/controlroom" },
      { name: "Documentos Legales", path: "/legales" },
    ]
  }
];

export default function MapaPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 pt-28 pb-20 px-6 font-sans">
      <div className="max-w-3xl mx-auto">
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 px-4 py-1.5 rounded-full text-xs font-bold text-zinc-400 mb-6 uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Centro de Comando
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white mb-4">Directorio <span className="text-blue-500">AYCweb</span></h1>
          <p className="text-zinc-400 text-lg">Mapa completo de la infraestructura digital.</p>
        </div>

        <div className="space-y-12">
          {secciones.map((seccion, idx) => {
            const styles = colorStyles[seccion.color];
            return (
              <div key={idx} className="animate-in fade-in slide-in-from-bottom-4" style={{ animationDelay: `${idx * 100}ms` }}>
                <h2 className={`text-sm font-bold uppercase tracking-widest mb-4 ${styles.text} flex items-center gap-3 border-b border-zinc-900 pb-3`}>
                  <span className={`w-2.5 h-2.5 rounded-full ${styles.bg} shadow-[0_0_10px_currentColor]`}></span>
                  {seccion.title}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {seccion.links.map((link, lIdx) => (
                    <Link
                      key={lIdx}
                      href={link.path}
                      className="bg-black border border-zinc-800 hover:border-zinc-600 p-5 rounded-2xl flex items-center justify-between group transition-all active:scale-95 shadow-lg"
                    >
                      <span className="font-bold text-zinc-300 group-hover:text-white transition-colors">{link.name}</span>
                      <span className="text-zinc-600 group-hover:text-zinc-400 font-mono text-xs px-2 py-1 bg-zinc-900 rounded-md transition-colors">{link.path}</span>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
