import Link from "next/link";

export default function ExperienciaPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white px-6 py-20 lg:py-32">
      <div className="max-w-4xl mx-auto">
        
        {/* ENCABEZADO */}
        <div className="mb-20 border-b border-zinc-800 pb-12">
          <span className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-4 block">
            Dossier Corporativo
          </span>
          <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tighter">
            Nuestra Experiencia:<br />
            <span className="text-zinc-400">El Respaldo de una Trayectoria Impecable.</span>
          </h1>
          <p className="text-xl text-zinc-300 leading-relaxed">
            Cuando una empresa privada o un socio internacional decide forjar una alianza comercial, la confianza no se construye con promesas, sino con un historial comprobable de ejecución, logística y solvencia.
          </p>
        </div>

        {/* INTRODUCCIÓN */}
        <div className="prose prose-invert prose-lg max-w-none mb-20 text-zinc-400">
          <p>
            Bajo la dirección general de nuestro Socio Gerente, el <strong>Sr. Oscar Emigdio Amarilla Cáceres</strong>, A Y C S.R.L. ha construido uno de los portafolios de provisión B2G (Business-to-Government) más vastos, diversificados y exitosos de la República del Paraguay. Haber operado durante años bajo la estricta Ley N° 2051/03 de Contrataciones Públicas significa que nuestra empresa ha superado las auditorías más rigurosas, ha presentado garantías financieras por miles de millones de guaraníes y ha cumplido a cabalidad con los plazos de entrega más exigentes del Estado.
          </p>
          <p>
            A continuación, presentamos la historia de nuestra consolidación operativa, narrada a través de más de 30 mega-contratos ejecutados con éxito a lo largo y ancho del territorio nacional. <strong>Esta es nuestra carta de garantía.</strong>
          </p>
        </div>

        {/* TIMELINE / CAPÍTULOS */}
        <div className="space-y-16 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-zinc-800 before:to-transparent">
          
          {/* CAPÍTULO 1 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-zinc-800 bg-zinc-900 text-blue-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold">
              19
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-zinc-900 border border-zinc-800 shadow-xl group-hover:border-blue-500/50 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-black text-xl text-white">2019: Los Cimientos de la Diversificación Estratégica</h3>
              </div>
              <p className="text-zinc-400 text-sm mb-4 leading-relaxed">
                El año 2019 marcó un punto de inflexión, demostrando que nuestra capacidad logística no se limitaba a un solo rubro.
              </p>
              <ul className="space-y-2 text-sm text-zinc-300">
                <li><span className="text-blue-400 font-bold mr-2">•</span><strong>Fuerzas Armadas:</strong> Muebles y enseres al Comando Logístico.</li>
                <li><span className="text-blue-400 font-bold mr-2">•</span><strong>Desarrollo Urbano:</strong> Equipamiento completo de plazas en Itauguá y Emboscada.</li>
                <li><span className="text-blue-400 font-bold mr-2">•</span><strong>Salud Pública (IPS):</strong> Equipamiento de la Policlínica.</li>
                <li><span className="text-blue-400 font-bold mr-2">•</span><strong>Mega-Despliegues:</strong> Asientos tándem para la Fiscalía a nivel nacional y casi 1,000 mobiliarios escolares en el Chaco (Boquerón).</li>
              </ul>
            </div>
          </div>

          {/* CAPÍTULO 2 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-zinc-800 bg-zinc-900 text-blue-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold">
              20
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-zinc-900 border border-zinc-800 shadow-xl group-hover:border-blue-500/50 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-black text-xl text-white">2020: Capacidad de Respuesta en Tiempos Críticos</h3>
              </div>
              <p className="text-zinc-400 text-sm mb-4 leading-relaxed">
                Durante la pandemia global, probamos nuestra absoluta resiliencia y capacidad financiera para sostener cadenas de suministro en emergencia.
              </p>
              <ul className="space-y-2 text-sm text-zinc-300">
                <li><span className="text-blue-400 font-bold mr-2">•</span><strong>Salud en Pandemia:</strong> Equipamiento de Unidades de Salud Familiar (USF) a nivel nacional (Contrato por Gs. 1.197 millones).</li>
                <li><span className="text-blue-400 font-bold mr-2">•</span><strong>Soporte Educativo (MEC):</strong> Provisión continua para la ampliación de 822 establecimientos educativos bajo modalidad de vía de excepción.</li>
                <li><span className="text-blue-400 font-bold mr-2">•</span><strong>Logística Militar:</strong> Despliegue de equipos de climatización para el Comando del Ejército.</li>
              </ul>
            </div>
          </div>

          {/* CAPÍTULO 3 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-zinc-800 bg-zinc-900 text-blue-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold">
              21
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-zinc-900 border border-zinc-800 shadow-xl group-hover:border-blue-500/50 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-black text-xl text-white">2021: Alta Complejidad Médica y Corporativa</h3>
              </div>
              <p className="text-zinc-400 text-sm mb-4 leading-relaxed">
                Nos adentramos en licitaciones de altísima complejidad técnica, demostrando que no solo movemos volumen, sino precisión y tecnología.
              </p>
              <ul className="space-y-2 text-sm text-zinc-300">
                <li><span className="text-blue-400 font-bold mr-2">•</span><strong>Equipamiento Médico:</strong> Soporte de vida y diagnóstico de última generación (desfibriladores, autoclaves) para el IPS y 18 USF del Ministerio de Salud.</li>
                <li><span className="text-blue-400 font-bold mr-2">•</span><strong>Primera Infancia:</strong> Mobiliario y equipos para 32 CEBINFAS a nivel nacional.</li>
                <li><span className="text-blue-400 font-bold mr-2">•</span><strong>Soluciones Complejas:</strong> Sistema de archivos deslizante de alta gama para la Universidad Nacional de Villarrica (UNVES).</li>
              </ul>
            </div>
          </div>

          {/* CAPÍTULO 4 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-zinc-800 bg-zinc-900 text-blue-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold">
              22
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-zinc-900 border border-zinc-800 shadow-xl group-hover:border-blue-500/50 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-black text-xl text-white">2022: Supremacía Total y Resolución de Problemas</h3>
              </div>
              <p className="text-zinc-400 text-sm mb-4 leading-relaxed">
                Demostramos que tenemos la capacidad de rescatar proyectos donde otros proveedores fallan, consolidándonos como la solución definitiva.
              </p>
              <ul className="space-y-2 text-sm text-zinc-300">
                <li><span className="text-blue-400 font-bold mr-2">•</span><strong>El Rescate del Hospital INGAVI (IPS):</strong> Tras rescindir a otra empresa, el IPS confió en la solvencia de A Y C para equipar el hospital.</li>
                <li><span className="text-blue-400 font-bold mr-2">•</span><strong>Dominio Escolar:</strong> Provisión masiva a municipios y al MEC (25 instituciones y 20 supervisiones indígenas).</li>
                <li><span className="text-blue-400 font-bold mr-2">•</span><strong>Ingeniería Logística:</strong> Montaje de estantes tipo Picking de alta carga industrial para el depósito central de SENACSA.</li>
              </ul>
            </div>
          </div>

        </div>

        {/* CIERRE / CALL TO ACTION */}
        <div className="mt-24 p-10 bg-gradient-to-br from-blue-900/20 to-zinc-900 border border-zinc-800 rounded-3xl text-center">
          <h2 className="text-3xl font-black mb-6 text-white">De Contratista a Desarrollador B2B Global</h2>
          <p className="text-zinc-300 leading-relaxed max-w-2xl mx-auto mb-8">
            Detrás de esta impecable cronología se encuentra la mente comercial de Oscar Amarilla. Cumplir con más de 30 contratos estatales de alto impacto no es suerte; es un sistema de trabajo milimétricamente calculado. Hoy, todo ese conocimiento logístico y solvencia financiera se ha consolidado en un ecosistema empresarial superior: Metalmad EAS y Oriplast.
          </p>
          <p className="text-blue-400 font-bold text-lg mb-8">
            En A Y C S.R.L. no vendemos productos; garantizamos resultados a gran escala. Su proyecto es nuestro próximo Caso de Éxito.
          </p>
          <Link href="/contacto" className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-8 rounded-full transition-colors shadow-lg shadow-blue-500/30">
            Hablemos de Negocios
          </Link>
        </div>

      </div>
    </main>
  );
}
