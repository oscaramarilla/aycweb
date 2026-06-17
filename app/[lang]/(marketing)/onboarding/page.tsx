"use client";

import { useState } from "react";
import Image from "next/image";
import { WHATSAPP_NUMBER } from "@/lib/config/contacto";
import { LEGAL_INFO } from "@/lib/config/legal";

type CampoCopiaProps = {
  etiqueta: string;
  valor: string;
};

const CampoCopia = ({ etiqueta, valor }: CampoCopiaProps) => {
  const [copiado, setCopiado] = useState(false);

  const ejecutarCopia = async () => {
    try {
      await navigator.clipboard.writeText(valor);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    } catch (error) {
      console.error("No se pudo copiar:", error);
    }
  };

  return (
    <div className="mt-2 flex items-center justify-between gap-2 rounded-xl border border-zinc-800 bg-zinc-950/70 p-3 text-sm group">
      <div className="flex min-w-0 flex-col gap-1 overflow-hidden sm:flex-row sm:items-center">
        <span className="flex-shrink-0 text-[10px] font-bold uppercase tracking-widest text-zinc-500">
          {etiqueta}
        </span>
        <span className="truncate font-mono text-sm text-zinc-200">{valor}</span>
      </div>

      <button
        onClick={ejecutarCopia}
        className={`flex-shrink-0 rounded-lg px-3 py-1.5 text-xs font-bold transition-all active:scale-95 ${
          copiado
            ? "bg-emerald-500 text-zinc-950 shadow-[0_0_12px_rgba(16,185,129,0.4)]"
            : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
        }`}
      >
        {copiado ? "¡Copiado!" : "Copiar"}
      </button>
    </div>
  );
};

export default function OnboardingPage() {
  const whatsappNumber = WHATSAPP_NUMBER;
  const whatsappClosingMsg = encodeURIComponent("Hola AYC, acabo de completar mi onboarding y pago para iniciar la construcción de mi sistema. Adjunto comprobante.");
  
  // Estado para controlar qué cuenta internacional mostrar
  const [tabIntl, setTabIntl] = useState<'USA' | 'EUR' | 'MEX'>('USA');

  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-slate-50 font-sans relative overflow-hidden pb-24">
      <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay z-0"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      <section className="relative pt-28 pb-12 md:pt-40 md:pb-16 px-6 text-center z-10">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-emerald-400 text-[11px] md:text-xs font-bold uppercase tracking-widest mb-6 shadow-sm">
            Área de Clientes
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 tracking-tighter leading-[1.05] text-white">
            Tres formas de <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">encender el motor.</span>
          </h1>
          <h2 className="mb-3 text-lg text-slate-200 font-bold opacity-90">
            Onboarding operativo para clientes aprobados
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed mb-6">
            Esta pasarela de activación y pago se utiliza exclusivamente después de haber completado el diagnóstico comercial, o para activaciones express previamente acordadas con la firma.
          </p>
          <p className="text-base md:text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
            Asegurá tu lugar en la agenda técnica. Elegí el riel financiero que mejor se adapte a la operativa de tu empresa.
          </p>
        </div>
      </section>

      {/* ── TARJETA DE CONFIANZA INSTITUCIONAL ── */}
      <section className="relative z-10 px-6 max-w-5xl mx-auto mb-8">
        <div className="relative bg-slate-900/50 border border-slate-700/60 rounded-2xl p-6 md:p-8 overflow-hidden backdrop-blur-sm">
          {/* Borde sutil con brillo */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-slate-700/20 via-transparent to-emerald-900/10 pointer-events-none" />

          <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-5">
            {/* Foto de perfil */}
            <div className="flex-shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/oscar.jpg"
                alt="Oscar Amarilla"
                className="w-16 h-16 rounded-full object-cover bg-slate-800 border-2 border-slate-700"
              />
            </div>

            {/* Texto */}
            <div className="flex-1">
              <p className="text-white font-bold text-base mb-1">
                Soy Oscar Amarilla, director de AYCweb y tu responsable técnico.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Operamos bajo el{" "}
                <span className="text-slate-300 font-semibold">RUC 4499507-5</span>,
                registrado y actualizado en la{" "}
                <span className="text-slate-300 font-semibold">DNIT (Dirección Nacional de Ingresos Tributarios)</span>.
                Cada pago que realizás queda respaldado por una empresa formalmente constituida en Paraguay.
              </p>
            </div>

            {/* Badge RUC */}
            <div className="flex-shrink-0 text-center hidden md:block">
              <div className="bg-emerald-950/60 border border-emerald-500/30 rounded-xl px-4 py-3">
                <p className="text-[9px] font-black uppercase tracking-[0.15em] text-emerald-400 mb-0.5">RUC Verificado</p>
                <p className="text-white font-mono font-bold text-sm">4499507-5</p>
                <p className="text-[9px] text-slate-500 mt-0.5">DNIT Paraguay</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-6 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* ── TARJETA PYG ── */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-[1.5rem] p-6 md:p-8 flex flex-col relative transition-all hover:border-emerald-500/50">
            <div className="mb-6 flex items-center justify-between">
              <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-xl">🇵🇾</div>
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 bg-slate-950 px-3 py-1 rounded-full border border-slate-800">PYG</span>
            </div>

            <div className="flex justify-center mb-5">
              <div className="relative h-40 w-40 rounded-xl border-4 border-emerald-500/30 bg-white p-2">
                <Image src="/qr-fiat.webp" alt="QR Transferencia PYG" fill className="rounded-lg object-contain p-1" />
              </div>
            </div>

            <h3 className="font-bold text-xl text-white mb-2">Transferencia Local</h3>
            <p className="text-slate-400 text-[13px] mb-6 border-b border-slate-800 pb-6">
              Ideal para empresas y profesionales radicados en Paraguay operando con banca local.
            </p>
            <div className="space-y-4 mb-8 flex-1">
              <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800/50">
                <div className="mb-3 border-b border-zinc-800 pb-3">
                  <p className="mb-0.5 text-[10px] font-bold uppercase tracking-widest text-zinc-500">Titular de cuenta</p>
                  <p className="font-bold text-white">Oscar Emigdio Amarilla Caceres</p>
                </div>

                <p className="mt-4 mb-2 text-[10px] font-bold uppercase tracking-widest text-emerald-400">Opción 1: Alias CI Ueno</p>
                <CampoCopia etiqueta="CI / Documento" valor="4499507" />

                <p className="mt-5 mb-2 text-[10px] font-bold uppercase tracking-widest text-zinc-400">Opción 2: Alias Cel Itaú</p>
                <CampoCopia etiqueta="Celular / Alias" valor="0985864209" />
                <CampoCopia etiqueta="N° Cuenta C.A." valor="720601573" />
              </div>
            </div>
            <a href={`https://wa.me/${whatsappNumber}?text=${whatsappClosingMsg}`} target="_blank" rel="noopener noreferrer" className="block w-full text-center py-3.5 rounded-xl font-bold text-[14px] bg-[#25D366] hover:bg-[#1DA851] text-zinc-950 transition-all shadow-[0_0_20px_-5px_rgba(37,211,102,0.4)] mt-auto">
              Ya transferí — Enviar comprobante
            </a>
          </div>

          {/* ── TARJETA INTERNACIONAL (MODIFICADA) ── */}
          <div className="bg-[#070810] border border-blue-500/30 shadow-[0_0_30px_rgba(37,99,235,0.1)] rounded-[1.5rem] p-6 md:p-8 flex flex-col relative transition-all">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-widest whitespace-nowrap">
              Expansión LATAM
            </div>
            <div className="mb-6 flex items-center justify-between mt-2">
              <div className="w-12 h-12 bg-blue-900/30 border border-blue-500/30 rounded-xl flex items-center justify-center text-xl text-blue-400">🌎</div>
              <span className="text-[10px] font-black uppercase tracking-widest text-blue-400 bg-blue-950/50 px-3 py-1 rounded-full border border-blue-900/50">INTL</span>
            </div>
            <h3 className="font-bold text-xl text-white mb-2">Banca Internacional</h3>
            <p className="text-slate-400 text-[13px] mb-6 border-b border-slate-800 pb-6">
              Cuentas locales en Estados Unidos, Europa o México para recibir tus pagos sin fricción transfronteriza.
            </p>

            {/* Selector de Tabs */}
            <div className="flex gap-1.5 mb-5 bg-slate-900/80 p-1.5 rounded-xl border border-slate-800/80">
              <button
                onClick={() => setTabIntl('USA')}
                className={`flex-1 py-1.5 text-[11px] font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 ${tabIntl === 'USA' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'}`}
              >
                <span>🇺🇸</span> USA
              </button>
              <button
                onClick={() => setTabIntl('EUR')}
                className={`flex-1 py-1.5 text-[11px] font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 ${tabIntl === 'EUR' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'}`}
              >
                <span>🇪🇺</span> EUR
              </button>
              <button
                onClick={() => setTabIntl('MEX')}
                className={`flex-1 py-1.5 text-[11px] font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 ${tabIntl === 'MEX' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'}`}
              >
                <span>🇲🇽</span> MEX
              </button>
            </div>

            {/* Contenido Dinámico según el Tab */}
            <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800/50 mb-8 flex-1">
              {tabIntl === 'USA' && (
                <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <div className="mb-3 border-b border-zinc-800 pb-3">
                    <p className="mb-0.5 text-[10px] font-bold uppercase tracking-widest text-zinc-500">Titular de cuenta</p>
                    <p className="font-bold text-white text-sm">Oscar Emigdio Amarilla Caceres</p>
                  </div>
                  <div className="space-y-1 mb-3">
                    <CampoCopia etiqueta="N° Cuenta" valor="216348580540" />
                    <CampoCopia etiqueta="Routing" valor="101019644" />
                  </div>
                  <div className="text-[11px] text-slate-400 leading-relaxed bg-slate-900/50 p-2.5 rounded-lg border border-slate-800/50">
                    <p><strong className="text-slate-300">Banco:</strong> Lead Bank</p>
                    <p><strong className="text-slate-300">Tipo:</strong> Checking (Corriente o Cheques)</p>
                    <p><strong className="text-slate-300">Dir:</strong> 1801 Main St., Kansas City, MO 64108</p>
                  </div>
                </div>
              )}

              {tabIntl === 'EUR' && (
                <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <div className="mb-3 border-b border-zinc-800 pb-3">
                    <p className="mb-0.5 text-[10px] font-bold uppercase tracking-widest text-zinc-500">Titular de cuenta</p>
                    <p className="font-bold text-white text-[13px]">Bridge Building Sp. Z.o.o.</p>
                    <p className="text-[9px] text-emerald-400 mt-1 font-medium bg-emerald-500/10 inline-block px-2 py-0.5 rounded border border-emerald-500/20">IBAN único exclusivo para ti</p>
                  </div>
                  <div className="space-y-1 mb-3">
                    <CampoCopia etiqueta="IBAN" valor="LU144080000029777809" />
                    <CampoCopia etiqueta="BIC" valor="BCIRLULL" />
                  </div>
                  <div className="text-[11px] text-slate-400 leading-relaxed bg-slate-900/50 p-2.5 rounded-lg border border-slate-800/50">
                    <p><strong className="text-slate-300">Banco:</strong> Banking Circle S.A.</p>
                    <p><strong className="text-slate-300">Dir:</strong> 2 Boulevard de la Foire, L-1528 Luxembourg</p>
                  </div>
                </div>
              )}

              {tabIntl === 'MEX' && (
                <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <div className="mb-3 border-b border-zinc-800 pb-3">
                    <p className="mb-0.5 text-[10px] font-bold uppercase tracking-widest text-zinc-500">Titular de cuenta</p>
                    <p className="font-bold text-white text-sm">Oscar Emigdio Amarilla Caceres</p>
                  </div>
                  <div className="space-y-1 mb-4">
                    <CampoCopia etiqueta="CLABE" valor="646180546711227774" />
                  </div>
                  <div className="text-[11px] text-slate-400 leading-relaxed bg-slate-900/50 p-3 rounded-lg border border-slate-800/50 space-y-1.5">
                    <p className="flex items-start gap-1.5"><span className="text-emerald-500">✓</span> <span>Depósitos: Costo 1 USD, mín. 50 MXN.</span></p>
                    <p className="flex items-start gap-1.5"><span className="text-emerald-500">✓</span> <span>Conversión automática a USDC.</span></p>
                  </div>
                </div>
              )}
            </div>
            
            <a href={`https://wa.me/${whatsappNumber}?text=${whatsappClosingMsg}`} target="_blank" rel="noopener noreferrer" className="block w-full text-center py-3.5 rounded-xl font-bold text-[14px] bg-blue-600 hover:bg-blue-500 text-white transition-all shadow-[0_0_20px_-5px_rgba(37,99,235,0.4)] mt-auto">
              Ya transferí — Enviar comprobante
            </a>
          </div>

          {/* ── TARJETA CRIPTO ── */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-[1.5rem] p-6 md:p-8 flex flex-col relative transition-all hover:border-teal-500/50">
            <div className="mb-6 flex items-center justify-between">
              <div className="w-12 h-12 bg-teal-900/20 border border-teal-500/20 rounded-xl flex items-center justify-center text-xl text-teal-400">⚡</div>
              <span className="text-[10px] font-black uppercase tracking-widest text-teal-400 bg-teal-950/50 px-3 py-1 rounded-full border border-teal-900/50">TRC20</span>
            </div>
            <h3 className="font-bold text-xl text-white mb-2">Cripto (USDT)</h3>
            <p className="text-slate-400 text-[13px] mb-6 border-b border-slate-800 pb-6">
              Ideal para pagos inmediatos, sin fricción burocrática bancaria ni demoras transfronterizas.
            </p>
            <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800/50 mb-8 flex-1 flex flex-col justify-center">
              <div className="flex justify-center mb-4">
                <div className="relative h-40 w-40 rounded-xl border-4 border-teal-500/30 bg-white p-2">
                   <Image src="/qr-crypto.webp" alt="QR USDT TRC20" fill className="rounded-lg object-contain p-1" />
                </div>
              </div>

              <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-1 text-center font-bold mt-2">Red Tron (TRC20)</p>
              <CampoCopia etiqueta="Wallet" valor="TLUzuQDLjVwp4UDFAEFuypw5LmFf1K1PRQ" />
            </div>
            <a href={`https://wa.me/${whatsappNumber}?text=${whatsappClosingMsg}`} target="_blank" rel="noopener noreferrer" className="block w-full text-center py-3.5 rounded-xl font-bold text-[14px] bg-zinc-800 hover:bg-zinc-700 text-white transition-all border border-zinc-700 mt-auto">
              Enviar Hash (TXID)
            </a>
          </div>

        </div>
      </section>

      {/* ── PASO 2: CONTRATO MARCO (MSA) ── */}
      <section className="relative z-10 px-6 max-w-5xl mx-auto py-12 md:py-16">
        <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 md:p-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/10 via-transparent to-slate-900/20 pointer-events-none rounded-2xl" />

          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-2xl">📝</span>
              <h3 className="text-lg md:text-xl font-black text-white">
                Paso 2: Firma del Contrato Marco (MSA)
              </h3>
            </div>

            {/* Texto de instrucción */}
            <p className="text-sm text-slate-400 bg-slate-950/60 border border-slate-700 rounded-xl px-5 py-4 mb-6 leading-relaxed">
              Para proteger tu infraestructura y nuestro tiempo de desarrollo, operamos bajo acuerdos formales. Descarga el contrato, fírmalo digitalmente o a mano, y envíalo por WhatsApp para liberar tu proyecto en nuestra agenda.
            </p>

            {/* Contenedor con scroll del contrato */}
            <div className="max-h-96 overflow-y-auto bg-slate-900 border border-slate-800 p-6 rounded-md text-sm text-slate-300 mb-6">
              <h3 className="text-base font-black text-white mb-4 tracking-tight">
                CONTRATO MARCO DE PRESTACIÓN DE SERVICIOS DE INFRAESTRUCTURA DIGITAL
              </h3>

              <h4 className="text-sm font-bold text-emerald-400 mt-5 mb-2">Cláusula 1 — Objeto del Contrato</h4>
              <p className="mb-3 leading-relaxed">
     AYC se compromete a desarrollar, desplegar y mantener la infraestructura digital del Cliente bajo un modelo de suscripción anual obligatoria. El entregable mínimo viable (MVP) consiste en el dominio en producción completamente funcional, con las características técnicas y comerciales acordadas en el diagnóstico y la cotización previa. El Cliente se obliga a contratar el servicio por un período mínimo de doce (12) meses contados desde la fecha de puesta en producción del MVP.
              </p>

              <h4 className="text-sm font-bold text-emerald-400 mt-5 mb-2">Cláusula 2 — Estructura Financiera</h4>
              <p className="mb-3 leading-relaxed">
                El Cliente abonará un costo único de configuración (setup) según el plan seleccionado, más un canon de mantenimiento mensual obligatorio durante todo el período contractual. Los mantenimientos disponibles son:
              </p>
              <ul className="list-disc pl-5 mb-3 space-y-1 text-slate-400">
                <li><strong className="text-slate-200">Plan Starter:</strong> USD 15/mes — Hosting compartido optimizado, certificado SSL, respaldos semanales y soporte por ticket.</li>
                <li><strong className="text-slate-200">Plan Business:</strong> USD 30/mes — VPS dedicado, SSL Wildcard, respaldos diarios, soporte prioritario y uptime monitoreado.</li>
                <li><strong className="text-slate-200">Plan Enterprise:</strong> USD 45/mes — Infraestructura escalable en cloud, SSL avanzado, respaldos en tiempo real, soporte 24/7 y CDN.</li>
              </ul>
              <p className="mb-3 leading-relaxed">
                El canon de mantenimiento se abonará indefectiblemente los días 15 de cada mes, iniciando el mes siguiente a la puesta en producción. El incumplimiento de dos (2) pagos consecutivos faculta a AYCweb a suspender el servicio sin responsabilidad.
              </p>

              <h4 className="text-sm font-bold text-emerald-400 mt-5 mb-2">Cláusula 3 — Reportes Quincenales</h4>
              <p className="mb-3 leading-relaxed">
                Durante la etapa de desarrollo y construcción del MVP, AYCweb entregará reportes quincenales de avance al Cliente, detallando el porcentaje completado, los hitos alcanzados, los bloqueos identificados y la proyección para la siguiente quincena. Estos reportes serán enviados por correo electrónico o WhatsApp corporativo y constituirán la única fuente de verdad para medir el progreso del proyecto. El Cliente dispondrá de 48 horas hábiles para formular objeciones; vencido ese plazo, el reporte se tendrá por aprobado.
              </p>

              <h4 className="text-sm font-bold text-emerald-400 mt-5 mb-2">Cláusula 4 — Salida a los 12 Meses y Pérdida de Derechos sobre el Código</h4>
              <p className="mb-3 leading-relaxed">
                El Cliente se obliga a mantener la suscripción activa por un plazo mínimo de doce (12) meses. En caso de rescisión anticipada por decisión unilateral del Cliente, abandono del servicio, impago del canon de mantenimiento por más de treinta (30) días corridos, o incumplimiento de cualquiera de las obligaciones esenciales del presente contrato:
              </p>
              <ul className="list-disc pl-5 mb-3 space-y-1 text-slate-400">
                <li>El Cliente <strong className="text-red-400">perderá automáticamente todo derecho</strong> sobre el código fuente, la propiedad intelectual del software desarrollado, las configuraciones proprietarias y cualquier activo digital derivado del trabajo de AYCweb.</li>
                <li>El dominio en producción será devuelto al Cliente en su estado actual, sin el respaldo del código ni las funcionalidades desarrolladas.</li>
                <li>Los datos de clientes, métricas y contenidos ingresados por el Cliente durante la vigencia del contrato le serán entregados en un formato estándar de exportación (CSV/JSON) dentro de los 15 días hábiles siguientes a la solicitud formal.</li>
              </ul>
              <p className="mb-3 leading-relaxed">
                Cumplido el período mínimo de doce (12) meses, el Cliente podrá optar por: (a) continuar con la suscripción en los términos pactados, o (b) solicitar la desvinculación, en cuyo caso se le entregará una copia del código fuente desarrollado exclusivamente para su proyecto, licenciado bajo los términos que ambas partes acuerden al momento de la salida.
              </p>

              <h4 className="text-sm font-bold text-emerald-400 mt-5 mb-2">Cláusula 5 — Confidencialidad</h4>
              <p className="mb-3 leading-relaxed">
                Ambas partes se comprometen a mantener la más estricta confidencialidad sobre toda la información técnica, comercial, financiera y estratégica intercambiada durante la vigencia del contrato y por un período de dos (2) años posteriores a su terminación. La información confidencial incluye, sin limitación: datos de clientes, métricas de negocio, algoritmos, configuraciones de infraestructura, credenciales de acceso y cualquier otro dato marcado como confidencial o que razonablemente deba ser considerado como tal. El incumplimiento de esta cláusula dará derecho a la parte afectada a reclamar daños y perjuicios.
              </p>

              <p className="mt-6 pt-4 border-t border-slate-700 text-[11px] text-slate-500 text-center">
                Este documento es una versión resumida del Contrato Marco completo. La versión íntegra estará disponible para su firma digital.
              </p>
            </div>

            {/* Botones de acción */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="/docs/Contrato-Marco-AYCweb.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-600 bg-transparent px-5 py-3 text-sm font-bold text-slate-300 transition-all hover:border-emerald-500 hover:text-emerald-400 active:scale-95 flex-1"
              >
                📄 Descargar Contrato en PDF
              </a>
              <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappClosingMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white transition-all hover:bg-emerald-500 active:scale-95 shadow-[0_0_20px_-5px_rgba(16,185,129,0.4)] flex-1"
              >
                📲 Enviar Contrato Firmado
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── METODOLOGÍA: IA + PROFESIONALES ── */}
      <section className="relative z-10 px-6 max-w-5xl mx-auto py-12 md:py-16">
        <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 md:p-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-slate-900/20 pointer-events-none rounded-2xl" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🤖</span>
              <h3 className="text-lg md:text-xl font-black text-white">Metodología: Agentes IA + Profesionales</h3>
            </div>
            
            <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6">
              Utilizamos <strong>agentes de inteligencia artificial</strong> y <strong>coding agents</strong> para hacer los trabajos asistidos por IA, 
              <strong> guiados por un profesional en ayuda mutua</strong>. 
              Esto significa que cada entrega combina:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4">
                <p className="text-blue-400 font-bold text-sm mb-2">🤖 Agentes IA</p>
                <p className="text-slate-400 text-[12px] leading-relaxed">
                  Análisis automatizado, generación de código y optimización en tiempo real.
                </p>
              </div>
              
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4">
                <p className="text-cyan-400 font-bold text-sm mb-2">⚙️ Coding Agents</p>
                <p className="text-slate-400 text-[12px] leading-relaxed">
                  Desarrollo asistido, pruebas automatizadas e integración de sistemas.
                </p>
              </div>
              
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4">
                <p className="text-emerald-400 font-bold text-sm mb-2">👨‍💼 Supervisor Profesional</p>
                <p className="text-slate-400 text-[12px] leading-relaxed">
                  Revisión, validación y dirección estratégica de cada paso del proyecto.
                </p>
              </div>
            </div>
            
            <p className="text-slate-500 text-xs md:text-sm mt-6 bg-slate-950/60 border border-slate-700 rounded-lg px-4 py-3">
              <strong>Resultado:</strong> Infraestructuras digitales más rápidas, confiables y auditables. Cada línea de código, cada decisión, pasa por validación humana.
            </p>
          </div>
        </div>
      </section>

      {/* Microfirma institucional */}
      <div className="relative z-10 px-6 max-w-5xl mx-auto mt-6 mb-2">
        <p className="text-center text-[11px] text-slate-600 border-t border-white/[0.04] pt-5">
          Factura emitida por {LEGAL_INFO.razonSocial} · RUC {LEGAL_INFO.ruc}
        </p>
      </div>
    </div>
  );
}
