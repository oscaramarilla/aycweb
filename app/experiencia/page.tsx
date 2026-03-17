import Link from "next/link";

export default function ExperienciaPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white px-6 py-20 lg:py-32">
      <div className="max-w-5xl mx-auto">
        
        {/* ENCABEZADO */}
        <div className="mb-20 border-b border-zinc-800 pb-12">
          <span className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-4 block">
            Dossier Corporativo Institucional
          </span>
          <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tighter">
            Nuestra Experiencia:<br />
            <span className="text-zinc-400">La Historia de un Líder en Provisiones B2G.</span>
          </h1>
        </div>

        {/* INTRODUCCIÓN */}
        <div className="prose prose-invert prose-lg max-w-none mb-24 text-zinc-400 leading-relaxed">
          <p>
            En el mundo de los negocios a gran escala, la confianza no se exige; se demuestra. Para <strong>Metalmad EAS</strong>, <strong>Oriplast</strong> y todo el ecosistema empresarial fundado por el <strong>Sr. Oscar Emigdio Amarilla Cáceres</strong>, esa demostración de capacidad técnica, financiera y logística tiene un respaldo irrefutable: nuestra impecable trayectoria como contratistas del Estado Paraguayo bajo la firma <strong>A Y C S.R.L.</strong>
          </p>
          <p>
            Operar bajo las estrictas exigencias de la Ley N° 2051/03 de Contrataciones Públicas significa superar auditorías exhaustivas, garantizar entregas en plazos inflexibles y respaldar operaciones con pólizas de seguros multimillonarias. A lo largo de los años, Oscar Amarilla ha liderado la adjudicación y ejecución perfecta de <strong>más de 30 contratos de gran envergadura</strong> con las instituciones más exigentes del país.
          </p>
          <p className="text-blue-400 font-medium">
            Esta es la historia de cómo construimos nuestra maquinaria operativa, año a año, contrato a contrato. Esta es la garantía absoluta para nuestros futuros socios corporativos B2B en Paraguay y el mundo.
          </p>
        </div>

        {/* TIMELINE / CAPÍTULOS */}
        <div className="space-y-16 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-blue-500/20 before:via-blue-500/50 before:to-transparent">
          
          {/* CAPÍTULO 1 */}
          <div className="relative flex flex-col md:flex-row items-center justify-between md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-zinc-950 bg-blue-600 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-black text-lg">
              '19
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 shadow-2xl hover:border-blue-500/30 transition-colors mt-6 md:mt-0 backdrop-blur-sm">
              <h3 className="font-black text-2xl text-white mb-4">El Despegue y la Diversificación Total</h3>
              <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
                El año 2019 fue el punto de inflexión. Fue el periodo donde A Y C S.R.L. demostró al mercado que su infraestructura podía abarcar desde el suministro corporativo hasta el desarrollo urbano, sin perder la excelencia.
              </p>
              <div className="space-y-4 text-sm text-zinc-300">
                <div><strong className="text-blue-400 block mb-1">Fuerzas Armadas e Infraestructura Militar:</strong> En mayo, la firma comenzó equipando al Comando Logístico de las FF.AA. (Contrato N° 61/19).</div>
                <div><strong className="text-blue-400 block mb-1">Desarrollo Urbano en Municipios:</strong> Equipamiento completo de plazas con parques infantiles para la Municipalidad de Itauguá (Gs. 153.195.000) y la Municipalidad de Emboscada (Contrato N° 11/2019) dotando a cuatro barrios de parques e iluminación por Gs. 148.335.982.</div>
                <div><strong className="text-blue-400 block mb-1">Alta Complejidad Médica:</strong> En julio, el IPS confió en la empresa para equipar la Policlínica del IPS (Contrato N° 273/2019).</div>
                <div><strong className="text-blue-400 block mb-1">Renovación Corporativa de Ministerios:</strong> Reacondicionamiento del Salón Auditorio del MINNA con mamparas de vidrio templado y tabiques. Simultáneamente, dos contratos (N° 17 y 21/2019) con la Secretaría de Repatriados para la entrega integral de mobiliario operativo.</div>
                <div><strong className="text-blue-400 block mb-1">Logística a Escala Nacional:</strong> Provisión de 352 mobiliarios tándem para la Fiscalía por Gs. 249.335.300 y un reto logístico en el inhóspito Chaco: 988 sillas y pupitres para la Gobernación de Boquerón (Contrato N° 53/2019) por Gs. 252.690.500.</div>
              </div>
            </div>
          </div>

          {/* CAPÍTULO 2 */}
          <div className="relative flex flex-col md:flex-row items-center justify-between md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-zinc-950 bg-blue-600 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-black text-lg">
              '20
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 shadow-2xl hover:border-blue-500/30 transition-colors mt-6 md:mt-0 backdrop-blur-sm">
              <h3 className="font-black text-2xl text-white mb-4">Resiliencia y Capacidad de Respuesta en Pandemia</h3>
              <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
                El 2020 paralizó la economía global, pero las instituciones de salud y educación no podían detenerse. Fue aquí donde la cadena de suministro de Oscar Amarilla probó ser inquebrantable.
              </p>
              <div className="space-y-4 text-sm text-zinc-300">
                <div><strong className="text-blue-400 block mb-1">Primera Línea de Salud:</strong> En el inicio de la crisis sanitaria (marzo), el MSPyBS adjudicó un contrato monumental (UGP 11/2020) de <strong>Gs. 1.197.622.250</strong> para el equipamiento crítico de Unidades de Salud Familiar (USF) a nivel nacional.</div>
                <div><strong className="text-blue-400 block mb-1">Soporte Educativo Nacional:</strong> Entre julio y agosto, el MEC recurrió a la empresa mediante tres contratos abiertos (N° 5, 6 y 7/2020) por vía de la excepción para su Programa de Ampliación de 822 establecimientos educativos en plena pandemia.</div>
                <div><strong className="text-blue-400 block mb-1">Climatización Militar:</strong> Para diciembre, la firma ejecutó el Contrato 81/2020 con el Comando del Ejército, proveyendo e instalando masivamente equipos split y muebles por Gs. 292.032.659.</div>
              </div>
            </div>
          </div>

          {/* CAPÍTULO 3 */}
          <div className="relative flex flex-col md:flex-row items-center justify-between md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-zinc-950 bg-blue-600 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-black text-lg">
              '21
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 shadow-2xl hover:border-blue-500/30 transition-colors mt-6 md:mt-0 backdrop-blur-sm">
              <h3 className="font-black text-2xl text-white mb-4">Especialización Técnica y Dominio Financiero</h3>
              <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
                Con la logística dominada, el 2021 demostró que no solo movíamos volumen, sino también tecnología de punta y soluciones corporativas de altísimo nivel.
              </p>
              <div className="space-y-4 text-sm text-zinc-300">
                <div><strong className="text-blue-400 block mb-1">Tecnología Médica de Soporte de Vida:</strong> En julio, el MSPyBS (Contrato UGP 11/2021) adjudicó <strong>Gs. 776.902.000</strong> para proveer equipos complejos a 18 USF (desfibriladores automáticos, autoclaves, detectores fetales ultrasónicos). Además, se equiparon 32 CEBINFAS por Gs. 122.450.000.</div>
                <div><strong className="text-blue-400 block mb-1">El Récord Corporativo:</strong> En noviembre, el Crédito Agrícola de Habilitación (CAH) confió la renovación de sus oficinas a nivel país. A Y C entregó 1.399 ítems por un valor récord de <strong>Gs. 2.014.415.000</strong>.</div>
                <div><strong className="text-blue-400 block mb-1">Ingeniería y Electrodomésticos:</strong> La UNVES adquirió un sofisticado sistema de archivos deslizante por Gs. 158.000.000. Paralelamente, se proveyó a la Secretaría de Repatriados y a SENACSA.</div>
                <div><strong className="text-blue-400 block mb-1">El Chaco Paraguayo:</strong> Consolidación en la región occidental con el Contrato N° 40/2021 para proveer más de mil pupitres a la Gobernación de Boquerón.</div>
              </div>
            </div>
          </div>

          {/* CAPÍTULO 4 */}
          <div className="relative flex flex-col md:flex-row items-center justify-between md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-zinc-950 bg-blue-600 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-black text-lg">
              '22
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 shadow-2xl hover:border-blue-500/30 transition-colors mt-6 md:mt-0 backdrop-blur-sm">
              <h3 className="font-black text-2xl text-white mb-4">El Liderazgo Municipal y la "Supremacía"</h3>
              <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
                El año 2022 representó la cúspide operativa. A Y C S.R.L. se consolidó como el motor detrás de la infraestructura escolar y médica de múltiples entidades de alto rango.
              </p>
              <div className="space-y-4 text-sm text-zinc-300">
                <div><strong className="text-blue-400 block mb-1">Presencia Municipal:</strong> Equipamiento masivo a las Municipalidades de Nueva Colombia, Guarambaré y Piribebuy a lo largo del año.</div>
                <div><strong className="text-blue-400 block mb-1">Solucionando Crisis en el IPS (Hospital Ingavi):</strong> Tras rescindir contrato a otro proveedor por graves incumplimientos, la administración central recurrió a la firma de Oscar Amarilla (Resolución N° 076-046/2022) para asumir y salvar la adjudicación, demostrando nuestra absoluta liquidez y garantía operativa.</div>
                <div><strong className="text-blue-400 block mb-1">Ingeniería y Universidades:</strong> Dotación al Laboratorio CITEC de la FIUNA (UNA) y montaje de mamparas de yeso/vidrio en la UNVES. Además, montaje de estantes metálicos Tipo Picking de alta carga para el depósito de SENACSA (Gs. 183.012.950).</div>
                <div><strong className="text-blue-400 block mb-1">El Gigante del MEC:</strong> Adjudicación del Contrato N° 1/2022 para proveer mobiliario a 25 instituciones y 20 Supervisiones Indígenas (Gs. 559.903.500).</div>
                <div className="bg-blue-900/20 p-4 rounded-xl border border-blue-500/20 mt-4"><strong className="text-white block mb-1">🔥 EL GRAN HITO: Municipalidad de Lambaré:</strong> En diciembre, la ciudad sede adjudicó a A Y C el Contrato UOC N° 65/2022. Oscar Amarilla lideró la provisión logística de <strong>6.890 sillas y mesas pedagógicas</strong> por <strong>Gs. 903.279.000</strong>, la máxima prueba de capacidad de producción en masa.</div>
              </div>
            </div>
          </div>

        </div>

        {/* CIERRE / EL FUTURO */}
        <div className="mt-28 p-10 md:p-14 bg-gradient-to-br from-blue-900/30 via-zinc-900 to-zinc-950 border border-zinc-800 rounded-[2rem] text-center relative overflow-hidden">
          {/* Decorative glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-blue-500/10 blur-[100px] pointer-events-none"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-black mb-6 text-white tracking-tight">De Proveedores del Estado a Desarrolladores B2B Internacionales</h2>
            <div className="text-zinc-300 leading-relaxed max-w-3xl mx-auto space-y-6 mb-10 text-lg">
              <p>
                El historial de A Y C S.R.L. no es un simple currículum; es una hoja de ruta de cómo se domina el mercado paraguayo. Oscar Amarilla ha tomado todo este conocimiento —la rigurosidad técnica de los ministerios, la logística masiva de los municipios, la arquitectura corporativa de las universidades y la solvencia financiera asegurada— y lo ha transformado.
              </p>
              <p>
                Hoy, la nueva era liderada por <strong>Metalmad EAS</strong> (fabricación de mobiliarios de máxima resistencia) y <strong>Oriplast</strong> (soluciones industriales plásticas) ya no busca simplemente ganar licitaciones. Busca el desarrollo comercial B2B y la expansión internacional.
              </p>
              <p className="text-blue-400 font-bold text-xl bg-blue-900/20 py-4 px-6 rounded-2xl border border-blue-500/20">
                Si nuestra estructura pudo cumplir en tiempo y forma más de 30 contratos estatales de máxima exigencia sin una sola falla, estamos listos para ser el motor que escale tu próximo proyecto privado a nivel global.
              </p>
            </div>
            
            <p className="text-white font-black text-2xl mb-8 uppercase tracking-widest">
              Esta es nuestra historia. Estás en manos de expertos.
            </p>

            <Link href="https://wa.me/595991701000?text=Hola%20Oscar,%20le%20el%20dossier%20corporativo%20de%20A%20Y%20C%20y%20me%20gustaría%20agendar%20una%20reunión%20comercial." 
                  target="_blank"
                  className="inline-block bg-white text-blue-900 hover:bg-zinc-200 font-black py-5 px-10 rounded-full transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] hover:scale-105">
              Agendar Reunión Comercial
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}
