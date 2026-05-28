import Link from 'next/link';

export const metadata = {
  title: 'Infraestructura IA Paraguay | Proveedores y Cadena de Valor | AYCweb',
  description: 'Preparamos a empresas e industrias paraguayas para vender, operar y competir en la nueva economía de infraestructura, Inteligencia Artificial y data centers.',
};

export default function InfraestructuraIAParaguay() {
  return (
    <main className="bg-slate-950 text-slate-50 min-h-screen font-sans">
      
      {/* Hero Section */}
      <section className="relative px-6 py-24 md:py-32 max-w-7xl mx-auto border-b border-green-500/20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl -z-10"></div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          Paraguay entra al mapa mundial de la <span className="text-green-500">Inteligencia Artificial.</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mb-10 leading-relaxed">
          La energía hidroeléctrica, los nuevos proyectos de data centers y la demanda de proveedores locales abren una ventana histórica para las industrias paraguayas.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="#diagnostico" className="bg-green-600 hover:bg-green-500 text-white font-semibold py-4 px-8 rounded-lg transition-colors text-center">
            Preparar mi empresa como proveedor
          </Link>
          <Link href="/kwhcoin" className="bg-slate-800 hover:bg-slate-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors text-center border border-slate-700">
            Ver Calculadora de Ventaja Energética
          </Link>
        </div>
      </section>

      {/* Contexto Macro */}
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 border-l-4 border-green-500 pl-4">El Cambio de Paradigma</h2>
        <div className="grid md:grid-cols-2 gap-12 text-slate-300 text-lg">
          <div>
            <p className="mb-4">
              A mayo de 2026, Paraguay ha entrado en una fase de intención estratégica y predespliegue de infraestructura de IA. Acuerdos como los impulsados para el hub soberano y la llegada de inversiones en cloud computing están redefiniendo el terreno.
            </p>
            <p>
              Los gigantes tecnológicos aportan capital y capacidad de cómputo. Paraguay aporta energía limpia. Pero para que el ecosistema funcione, se requiere un eslabón crítico: <strong>proveedores locales calificados.</strong>
            </p>
          </div>
          <div className="bg-slate-900 p-8 rounded-xl border border-slate-800">
            <h3 className="text-xl font-bold text-white mb-4">Lo que demanda un Data Center:</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">✓ Estructuras metalmecánicas y racks</li>
              <li className="flex items-center gap-2">✓ Obras civiles y climatización industrial</li>
              <li className="flex items-center gap-2">✓ Sistemas de seguridad y control de acceso</li>
              <li className="flex items-center gap-2">✓ Logística técnica y plásticos industriales</li>
            </ul>
          </div>
        </div>
      </section>

      {/* La Solución: Proveedor Crítico Digital */}
      <section className="px-6 py-24 bg-slate-900 border-y border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Motor AYCweb: Proveedores de Infraestructura Crítica</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">No hacemos "páginas lindas". Construimos infraestructura comercial para vender en cadenas de valor críticas y licitaciones internacionales.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Packages */}
            <div className="p-8 bg-slate-950 rounded-xl border border-slate-800 hover:border-green-500/50 transition-colors">
              <h3 className="text-2xl font-bold text-white mb-2">Paquete Base</h3>
              <p className="text-green-500 text-xl font-mono mb-6">Desde USD 1.500</p>
              <ul className="space-y-3 text-slate-400 mb-8">
                <li>• Sitio institucional B2B bilingüe</li>
                <li>• Catálogo técnico inicial</li>
                <li>• Formularios para RFQ</li>
                <li>• Correo corporativo ordenado</li>
              </ul>
            </div>
            
            <div className="p-8 bg-slate-950 rounded-xl border border-green-500 relative transform md:-translate-y-4">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-green-500 text-slate-950 px-4 py-1 rounded-full text-sm font-bold">RECOMENDADO</div>
              <h3 className="text-2xl font-bold text-white mb-2">Proveedor Calificado</h3>
              <p className="text-green-500 text-xl font-mono mb-6">Desde USD 3.500</p>
              <ul className="space-y-3 text-slate-300 mb-8">
                <li>• Portal de cotización automatizado</li>
                <li>• Generador de Fichas Técnicas PDF</li>
                <li>• Presentación Supplier Deck</li>
                <li>• SEO Industrial y Energía</li>
              </ul>
            </div>

            <div className="p-8 bg-slate-950 rounded-xl border border-slate-800 hover:border-green-500/50 transition-colors">
              <h3 className="text-2xl font-bold text-white mb-2">Infraestructura Premium</h3>
              <p className="text-green-500 text-xl font-mono mb-6">Desde USD 8.000</p>
              <ul className="space-y-3 text-slate-400 mb-8">
                <li>• Integración con ERP/CRM</li>
                <li>• Portal de clientes privado</li>
                <li>• Automatización de flujos con IA</li>
                <li>• Documentación de compliance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section id="diagnostico" className="px-6 py-24 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Convierte tu industria en un proveedor homologado</h2>
        <p className="text-slate-400 mb-10 text-lg">Los gigantes tecnológicos no le compran al proveedor más simpático. Le compran al más claro, documentado y confiable. Solicita una auditoría de infraestructura digital hoy mismo.</p>
        <button className="bg-white text-slate-950 font-bold py-4 px-10 rounded-lg text-lg hover:bg-slate-200 transition-colors">
          Solicitar Diagnóstico Técnico
        </button>
      </section>

    </main>
  );
}
