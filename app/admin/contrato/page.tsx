"use client";

import React, { useState } from 'react';

export default function GeneradorContrato() {
  // Estados para guardar los datos del cliente en tiempo real
  const [datos, setDatos] = useState({
    empresa: '',
    ruc: '',
    direccion: '',
    representante: '',
    servicio: 'Pack Digital Express',
  });

  // Lógica de precios según el servicio seleccionado
  const planes = {
    "Pack Digital Express": { precio: "1.500.000", anticipo: "750.000", saldo: "750.000" },
    "Automatización Empresarial": { precio: "4.500.000", anticipo: "2.250.000", saldo: "2.250.000" },
    "Motor de Cotizaciones PRO": { precio: "8.000.000", anticipo: "4.000.000", saldo: "4.000.000" }
  };

  const planSeleccionado = planes[datos.servicio as keyof typeof planes];

  // Función para imprimir/guardar como PDF
  const generarPDF = () => {
    window.print();
  };

  const whatsappLink = `https://wa.me/595985864209?text=Hola%20Oscar,%20ya%20generé%20y%20firmé%20el%20contrato%20por%20el%20${datos.servicio}.%20Te%20paso%20el%20comprobante%20de%20transferencia%20del%20anticipo%20para%20coordinar%20la%20entrega%20física.`;

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-300 font-sans selection:bg-blue-500/30">
      
      {/* ==========================================
          VISTA WEB (OCULTA AL IMPRIMIR EL PDF)
          ========================================== */}
      <div className="print:hidden py-12 px-4 sm:px-6 max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
        
        {/* Columna Izquierda (FORMULARIO): Abajo en celular (order-2), Izquierda en PC (lg:order-1) */}
        <div className="w-full lg:w-2/5 order-2 lg:order-1 space-y-8">
          
          <div>
            <h1 className="text-4xl font-black text-white mb-4">Generador de Contrato</h1>
            <p className="text-zinc-400 mb-8">Completa tus datos corporativos. El contrato se actualizará en tiempo real. Luego descárgalo, fírmalo y envíanos el comprobante de anticipo.</p>

            <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl space-y-4 mb-8">
              <div>
                <label className="block text-xs font-bold text-blue-400 uppercase mb-1">Nombre de la Empresa o Cliente</label>
                <input type="text" className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-white focus:border-blue-500 outline-none" placeholder="Ej: Metalúrgica del Sur S.A." onChange={e => setDatos({...datos, empresa: e.target.value})} />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-blue-400 uppercase mb-1">RUC</label>
                  <input type="text" className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-white focus:border-blue-500 outline-none" placeholder="Ej: 80012345-6" onChange={e => setDatos({...datos, ruc: e.target.value})} />
                </div>
                <div>
                  <label className="block text-xs font-bold text-blue-400 uppercase mb-1">Representante Legal</label>
                  <input type="text" className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-white focus:border-blue-500 outline-none" placeholder="Nombre de quien firma" onChange={e => setDatos({...datos, representante: e.target.value})} />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-blue-400 uppercase mb-1">Dirección Física</label>
                <input type="text" className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-white focus:border-blue-500 outline-none" placeholder="Ej: Av. Principal 123, Asunción" onChange={e => setDatos({...datos, direccion: e.target.value})} />
              </div>
              <div>
                <label className="block text-xs font-bold text-blue-400 uppercase mb-1">Servicio a Contratar</label>
                <select className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-white focus:border-blue-500 outline-none" onChange={e => setDatos({...datos, servicio: e.target.value})}>
                  <option value="Pack Digital Express">Pack Digital Express (Gs. 1.500.000)</option>
                  <option value="Automatización Empresarial">Automatización Empresarial (Gs. 4.500.000)</option>
                  <option value="Motor de Cotizaciones PRO">Motor de Cotizaciones PRO (Gs. 8.000.000)</option>
                </select>
              </div>
            </div>

            <div className="bg-blue-900/20 border border-blue-500/30 p-6 rounded-2xl">
              <h3 className="text-white font-bold mb-4">Siguientes Pasos (Onboarding)</h3>
              <ol className="list-decimal pl-4 space-y-3 text-sm text-zinc-300">
                <li>Haz clic en <strong>"Generar PDF"</strong> y guárdalo en tu dispositivo.</li>
                <li>Imprime el documento y haz que el Representante Legal lo firme.</li>
                <li>Realiza la transferencia del <strong>50% de anticipo (Gs. {planSeleccionado.anticipo})</strong>.</li>
                <li>Envíanos el comprobante por WhatsApp.</li>
                <li className="text-blue-400 font-bold">¡Listo! Nosotros pasamos a retirar el físico o coordinamos una reunión.</li>
              </ol>
              
              <div className="mt-6 flex flex-col gap-3">
                <button onClick={generarPDF} className="w-full bg-white text-zinc-950 hover:bg-zinc-200 font-black py-4 rounded-xl shadow-xl transition-all">
                  🖨️ Generar y Descargar PDF
                </button>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-black py-4 rounded-xl text-center shadow-lg transition-all">
                  💬 Enviar Comprobante por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Columna Derecha (VISTA PREVIA REAL): Arriba en celular (order-1), Derecha en PC (lg:order-2) */}
        <div className="w-full lg:w-3/5 order-1 lg:order-2">
          <div className="sticky top-6">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
              <p className="text-blue-400 font-bold text-sm tracking-wide uppercase">Contrato en Tiempo Real</p>
            </div>
            
            {/* Hoja de Papel */}
            <div className="bg-white text-black p-6 sm:p-10 font-serif rounded-xl shadow-2xl border border-zinc-800 max-h-[800px] overflow-y-auto">
              <div className="border-b-2 border-zinc-300 pb-4 mb-6 text-center">
                <h1 className="text-xl sm:text-2xl font-black">AYCweb.com</h1>
                <p className="text-xs sm:text-sm font-sans text-zinc-600 font-bold tracking-widest uppercase mt-1">Automatizaciones Corporativas</p>
                <p className="text-xs mt-2 text-zinc-500">Titular: Oscar Emigdio Amarilla Cáceres - RUC: 4499507-5</p>
              </div>

              <h2 className="text-lg font-bold text-center mb-6 uppercase underline">
                Contrato de Desarrollo de Software
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-justify leading-relaxed">
                <p>
                  <strong>REUNIDOS:</strong><br/>
                  De una parte, <strong>Oscar Emigdio Amarilla Cáceres</strong> (en adelante "AYCweb"), con RUC 4499507-5.<br/>
                  De otra parte, <strong className="bg-yellow-100">{datos.empresa || '[NOMBRE DE LA EMPRESA]'}</strong>, con RUC <strong className="bg-yellow-100">{datos.ruc || '[RUC]'}</strong> y domicilio en <strong className="bg-yellow-100">{datos.direccion || '[DIRECCIÓN]'}</strong> (en adelante "El Cliente").
                </p>

                <p>
                  <strong>PRIMERA: OBJETO DEL CONTRATO</strong><br/>
                  AYCweb se compromete al desarrollo y despliegue del sistema: <strong className="bg-yellow-100 text-blue-800">{datos.servicio}</strong>, diseñado a medida para optimizar los procesos operativos de El Cliente.
                </p>

                <p>
                  <strong>SEGUNDA: INVERSIÓN Y FORMA DE PAGO</strong><br/>
                  La inversión total para el desarrollo y entrega del sistema es de <strong>Gs. {planSeleccionado.precio}</strong>. El pago se estructura así:<br/>
                  1. <strong>Anticipo (50%):</strong> La suma de <strong>Gs. {planSeleccionado.anticipo}</strong> abonada a la firma de este contrato.<br/>
                  2. <strong>Saldo:</strong> El remanente de <strong>Gs. {planSeleccionado.saldo}</strong> a ser cancelado contra entrega.
                </p>

                <p>
                  <strong>TERCERA: CONDICIONES DE FIRMA</strong><br/>
                  El presente contrato se perfecciona con la firma física. El Cliente enviará el documento firmado y el comprobante de transferencia bancaria a AYCweb para iniciar el desarrollo.
                </p>
              </div>

              <div className="mt-16 grid grid-cols-2 gap-8 text-center text-sm">
                <div>
                  <div className="border-b border-black mb-2 w-full mx-auto"></div>
                  <p className="font-bold">Oscar Emigdio Amarilla</p>
                  <p className="text-xs text-zinc-500">AYCweb.com</p>
                </div>
                <div>
                  <div className="border-b border-black mb-2 w-full mx-auto"></div>
                  <p className="font-bold bg-yellow-100">{datos.representante || '[FIRMA CLIENTE]'}</p>
                  <p className="text-xs text-zinc-500">Representante Legal</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ==========================================
          VISTA DE IMPRESIÓN (SOLO SE VE EN EL PDF)
          ========================================== */}
      <div className="hidden print:block bg-white text-black p-10 font-serif max-w-4xl mx-auto">
        <div className="border-b-2 border-zinc-300 pb-4 mb-8 text-center">
          <h1 className="text-2xl font-black">AYCweb.com | Automatizaciones Corporativas</h1>
          <p className="text-sm">Titular: Oscar Emigdio Amarilla Cáceres - RUC: 4499507-5</p>
          <p className="text-sm">Cel: +595 985 864209 | Lambaré, Paraguay</p>
        </div>

        <h2 className="text-xl font-bold text-center mb-8 uppercase underline">
          Contrato de Desarrollo e Implementación de Software B2B
        </h2>

        <div className="space-y-6 text-justify leading-relaxed">
          <p>
            <strong>REUNIDOS:</strong><br/>
            De una parte, <strong>Oscar Emigdio Amarilla Cáceres</strong> (en adelante "AYCweb"), con RUC 4499507-5.<br/>
            De otra parte, <strong>{datos.empresa || '_________________________'}</strong>, con RUC <strong>{datos.ruc || '_________________'}</strong> y domicilio en <strong>{datos.direccion || '_________________________'}</strong> (en adelante "El Cliente"), representada en este acto por <strong>{datos.representante || '_________________________'}</strong>.
          </p>

          <p>
            <strong>PRIMERA: OBJETO DEL CONTRATO</strong><br/>
            AYCweb se compromete al desarrollo, programación y despliegue del sistema tecnológico denominado: <strong>{datos.servicio}</strong>, diseñado a medida para optimizar los procesos operativos de El Cliente.
          </p>

          <p>
            <strong>SEGUNDA: INVERSIÓN Y FORMA DE PAGO</strong><br/>
            La inversión total para el desarrollo y entrega del sistema es de <strong>Gs. {planSeleccionado.precio}</strong>. El pago se estructura de la siguiente manera:<br/>
            1. <strong>Anticipo (50%):</strong> La suma de <strong>Gs. {planSeleccionado.anticipo}</strong> abonada a la firma de este contrato.<br/>
            2. <strong>Saldo:</strong> El remanente de <strong>Gs. {planSeleccionado.saldo}</strong> a ser cancelado contra entrega y puesta en marcha del sistema.
          </p>

          <p>
            <strong>TERCERA: CONDICIONES DE LOGÍSTICA Y FIRMA</strong><br/>
            El presente contrato se perfecciona con la firma física del mismo. El Cliente enviará el documento firmado y el comprobante de transferencia bancaria a AYCweb para coordinar el inicio formal del desarrollo. AYCweb enviará su factura legal correspondiente una vez validado el anticipo.
          </p>
        </div>

        <div className="mt-24 grid grid-cols-2 gap-20 text-center">
          <div>
            <div className="border-b border-black mb-2"></div>
            <p className="font-bold">Oscar Emigdio Amarilla C.</p>
            <p className="text-sm">AYCweb.com | RUC: 4499507-5</p>
          </div>
          <div>
            <div className="border-b border-black mb-2"></div>
            <p className="font-bold">{datos.representante || 'Firma de El Cliente'}</p>
            <p className="text-sm">{datos.empresa || 'Representante Legal'}</p>
          </div>
        </div>
      </div>

    </main>
  );
}

