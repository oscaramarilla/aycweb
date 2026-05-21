import Image from "next/image";
import Link from "next/link";

const WHATSAPP = "595985864209";
const waLink = (msg: string) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;

const BENEFICIOS = [
  {
    title: "Cotización a medida",
    desc: "Motor de precios parametrizable por metro, mano de obra y logística.",
  },
  {
    title: "PDFs listos para cliente",
    desc: "Documentos profesionales listos para enviar al cliente o a la obra.",
  },
  {
    title: "Integración logística",
    desc: "Cálculo de fletes y tiempos en base a origen, destino y modalidad.",
  },
  {
    title: "Gestión de subcontratos",
    desc: "Módulos para tercerización y costo por etapa.",
  },
];

export default function ObrasPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <section className="px-6 pt-28 pb-12 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black mb-4">Soluciones para obras</h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Cotizadores por etapa, certificaciones, logística de obra y documentación técnica lista para presentar.
          </p>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-slate-800 p-6 bg-slate-900/40">
            <h3 className="font-black text-white mb-3">Motor de cotización</h3>
            <p className="text-slate-400 mb-4">Parametros por unidad, por metro, por etapa. Control total del margen.</p>
            <ul className="list-disc pl-5 text-slate-300 space-y-2">
              <li>Precios por material y mano de obra</li>
              <li>Variantes por proveedores</li>
              <li>Exportable a Excel/PDF</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-800 p-6 bg-slate-900/40">
            <h3 className="font-black text-white mb-3">Documentación profesional</h3>
            <p className="text-slate-400 mb-4">Presupuestos con desglose técnico y presentación lista para cliente o fiscalización.</p>
            <ul className="list-disc pl-5 text-slate-300 space-y-2">
              <li>Planillas de materiales</li>
              <li>Hoja de ruta por etapa</li>
              <li>PDF con identidad corporativa</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6 py-12 border-t border-white/[0.04]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-black mb-3">¿Querés probarlo?</h2>
          <p className="text-slate-400 mb-6">Agendá una demo donde adaptamos el motor a tu forma de cotizar.</p>
          <a
            href={waLink("Hola Oscar, quiero agendar una demo para soluciones de obras.")}
            className="inline-block bg-emerald-600 hover:bg-emerald-500 text-white font-black py-3 px-8 rounded-xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            Agendar demo
          </a>
        </div>
      </section>
    </div>
  );
}
