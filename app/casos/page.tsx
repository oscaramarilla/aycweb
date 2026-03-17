export default function CasosPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white px-6 py-20">
      <div className="max-w-5xl mx-auto">
        
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Casos de Éxito Reales</h1>
          <p className="text-zinc-400 text-lg">Cómo transformamos problemas operativos en rentabilidad pura.</p>
        </div>

        {/* CASO DE ESTUDIO: METAL MAD */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl">
          <div className="bg-blue-900/20 p-8 border-b border-zinc-800">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Industria Metalúrgica</span>
            </div>
            <h2 className="text-3xl font-black text-white">Sistematización Logística y Comercial: Metal Mad</h2>
            <p className="text-blue-400 mt-2 font-medium">De Excel manual a contratos automatizados en segundos.</p>
          </div>

          <div className="p-8 grid md:grid-cols-3 gap-10">
            
            {/* El Problema */}
            <div className="md:col-span-1">
              <h3 className="text-red-400 font-bold uppercase text-sm mb-3 flex items-center gap-2">⚠️ El Problema</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Generar cotizaciones para mobiliario escolar y licitaciones tomaba horas de trabajo manual. El control de contratos, fechas de entrega de sillas/pupitres y logística dependía de procesos en papel y hojas de cálculo desorganizadas, generando cuellos de botella en la atención a colegios e instituciones.
              </p>
            </div>

            {/* La Solución */}
            <div className="md:col-span-1">
              <h3 className="text-blue-400 font-bold uppercase text-sm mb-3 flex items-center gap-2">⚙️ La Solución AYC</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Implementación de un sistema B2B a medida. Desarrollamos un motor de generación de contratos automáticos y un CRM centralizado para controlar el ciclo completo: desde el prospecto inicial hasta la entrega final del lote de muebles, con firmas digitales en sitio.
              </p>
            </div>

            {/* Los Resultados */}
            <div className="md:col-span-1 bg-black/30 p-5 rounded-2xl border border-zinc-800/50">
              <h3 className="text-green-400 font-bold uppercase text-sm mb-4 flex items-center gap-2">📈 Los Resultados</h3>
              <ul className="space-y-4 text-sm text-zinc-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span> 
                  <span><strong>+300% velocidad:</strong> Cotizaciones generadas en 15 segundos exactos.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span> 
                  <span>Cero pérdida de documentos legales gracias a la nube.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span> 
                  <span>Infraestructura tecnológica lista y replicable para la apertura de nuevas sucursales en Santa Cruz de la Sierra, Bolivia.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
        
      </div>
    </main>
  );
}
