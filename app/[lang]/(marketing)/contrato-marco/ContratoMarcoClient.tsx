"use client";

import { useState } from "react";
import Image from "next/image";
import { Printer } from "lucide-react";
import { LEGAL_INFO } from "@/lib/config/legal";

/* ──────────────────────────────────────────────
   Casilla de verificación reutilizable
   Funciona en pantalla (esmeralda) y en impresión (negro)
─────────────────────────────────────────────── */
type CasillaProps = {
  marcada: boolean;
  onClick: () => void;
  children: React.ReactNode;
};

const Casilla = ({ marcada, onClick, children }: CasillaProps) => (
  <button
    type="button"
    onClick={onClick}
    className="flex w-full items-start gap-3 text-left transition-colors group"
  >
    <span
      className={`mt-[2px] flex h-5 w-5 flex-shrink-0 items-center justify-center rounded border-2 text-[13px] font-black leading-none transition-all
        ${
          marcada
            ? "border-emerald-500 bg-emerald-500/10 text-emerald-400 print:border-black print:bg-transparent print:text-black"
            : "border-slate-600 text-transparent group-hover:border-slate-400 print:border-black"
        }`}
    >
      X
    </span>
    <span className="text-[14px] leading-relaxed text-slate-300 print:text-black">
      {children}
    </span>
  </button>
);

export default function ContratoMarcoClient() {
  const [plan, setPlan] = useState<string | null>(null);
  const [pago, setPago] = useState<string | null>(null);
  const [canon, setCanon] = useState<string | null>(null);

  const alternar = (
    valor: string,
    actual: string | null,
    setter: (v: string | null) => void
  ) => setter(actual === valor ? null : valor);

  const imprimir = () => window.print();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 print:bg-white print:text-black">
      {/* ═══════════════════════════════════════════
          ESTILOS DE IMPRESIÓN — Ocultan UI global
      ═══════════════════════════════════════════ */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @media print {
              nav, footer, a[aria-label^="Biblioteca B2B"] { display: none !important; }
              html, body { background: #ffffff !important; }
              @page { margin: 18mm 16mm; }
            }
          `,
        }}
      />

      {/* ── Barra de acción (no se imprime) ── */}
      <div className="sticky top-0 z-20 border-b border-white/[0.06] bg-slate-950/90 backdrop-blur-md print:hidden">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-6 py-4">
          <p className="text-[12px] text-slate-500">
            Documento operativo privado · No vinculante hasta su firma
          </p>
          <button
            onClick={imprimir}
            className="inline-flex flex-shrink-0 items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2.5 text-[13px] font-bold text-slate-950 shadow-[0_0_20px_-5px_rgba(16,185,129,0.5)] transition-all hover:bg-emerald-400 active:scale-95"
          >
            <Printer className="h-4 w-4" />
            Exportar a PDF / Imprimir
          </button>
        </div>
      </div>

      {/* ═══════════════════════════════════════════
          DOCUMENTO
      ═══════════════════════════════════════════ */}
      <div className="mx-auto max-w-3xl px-6 py-12 print:py-0">
        {/* ── Encabezado con logo ── */}
        <header className="mb-10 flex flex-col items-center gap-4 border-b border-slate-800 pb-8 text-center print:border-slate-300">
          <Image
            src="/logo-ayc.webp"
            alt="AYCweb"
            width={140}
            height={40}
            className="h-auto w-[140px] object-contain"
            priority
          />
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 print:text-slate-600">
              {LEGAL_INFO.razonSocial} · RUC {LEGAL_INFO.ruc}
            </p>
            <p className="text-[11px] text-slate-600 print:text-slate-600">
              {LEGAL_INFO.direccion}
            </p>
          </div>
        </header>

        {/* ── Título ── */}
        <div className="mb-10 text-center">
          <span className="mb-4 inline-block rounded-full border border-slate-800 bg-slate-900 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 print:hidden">
            Contrato Marco · Master Service Agreement
          </span>
          <h1 className="text-2xl font-black leading-tight tracking-tight text-white md:text-3xl print:text-black">
            Contrato Marco de Prestación de Servicios
            <span className="mt-1 block text-base font-bold text-slate-500 md:text-lg print:text-slate-700">
              de Infraestructura Digital
            </span>
          </h1>
        </div>

        {/* ── Preámbulo ── */}
        <p className="mb-12 text-[14px] leading-relaxed text-slate-400 print:text-black">
          Entre <strong className="text-white print:text-black">A Y C S.R.L.</strong>{" "}
          (en adelante <strong className="text-white print:text-black">&ldquo;AYCweb&rdquo;</strong>),
          con RUC <strong className="text-white print:text-black">{LEGAL_INFO.ruc}</strong>,
          domiciliada en {LEGAL_INFO.direccion}, y{" "}
          <span className="inline-block min-w-[180px] border-b border-dotted border-slate-500 text-slate-200 print:text-black">
            &nbsp;
          </span>{" "}
          (en adelante <strong className="text-white print:text-black">&ldquo;El Cliente&rdquo;</strong>),
          con RUC{" "}
          <span className="inline-block min-w-[120px] border-b border-dotted border-slate-500 print:text-black">
            &nbsp;
          </span>
          , acuerdan lo siguiente:
        </p>

        <div className="space-y-10">
          {/* ── CLÁUSULA 1 ── */}
          <section>
            <h2 className="mb-3 border-b border-slate-800 pb-2 text-[15px] font-black uppercase tracking-wide text-white print:border-slate-300 print:text-black">
              Cláusula 1: Objeto del Contrato
            </h2>
            <p className="mb-4 text-[14px] leading-relaxed text-slate-400 print:text-black">
              AYCweb se compromete a desarrollar, desplegar y mantener la infraestructura
              digital B2B del Cliente, operando bajo la modalidad de &ldquo;Software as a
              Service&rdquo; (SaaS) y arquitectura a medida, de acuerdo con el plan
              seleccionado:
            </p>
            <div className="space-y-3 rounded-xl border border-slate-800/60 bg-slate-900/30 p-4 print:border-slate-300 print:bg-transparent">
              <Casilla
                marcada={plan === "start"}
                onClick={() => alternar("start", plan, setPlan)}
              >
                <strong className="text-white print:text-black">AYCweb Start</strong>{" "}
                (Setup: USD 60)
              </Casilla>
              <Casilla
                marcada={plan === "business"}
                onClick={() => alternar("business", plan, setPlan)}
              >
                <strong className="text-white print:text-black">AYCweb Business</strong>{" "}
                (Setup: USD 900)
              </Casilla>
              <Casilla
                marcada={plan === "enterprise"}
                onClick={() => alternar("enterprise", plan, setPlan)}
              >
                <strong className="text-white print:text-black">AYCweb Enterprise</strong>{" "}
                (Setup: USD 1.800)
              </Casilla>
            </div>
          </section>

          {/* ── CLÁUSULA 2 ── */}
          <section>
            <h2 className="mb-3 border-b border-slate-800 pb-2 text-[15px] font-black uppercase tracking-wide text-white print:border-slate-300 print:text-black">
              Cláusula 2: Modalidad de Pago del Setup
            </h2>
            <p className="mb-4 text-[14px] leading-relaxed text-slate-400 print:text-black">
              El Cliente opta por la siguiente modalidad para la liquidación de la
              arquitectura inicial:
            </p>
            <div className="space-y-3 rounded-xl border border-slate-800/60 bg-slate-900/30 p-4 print:border-slate-300 print:bg-transparent">
              <Casilla
                marcada={pago === "hitos"}
                onClick={() => alternar("hitos", pago, setPago)}
              >
                <strong className="text-white print:text-black">
                  Ejecución por Hitos
                </strong>{" "}
                (Solo Business/Enterprise): 20% para Onboarding, 30% contra Primer Avance,
                20% tras Sprint de Ajustes, y 30% contra Entrega Final en Producción.
              </Casilla>
              <Casilla
                marcada={pago === "fasttrack"}
                onClick={() => alternar("fasttrack", pago, setPago)}
              >
                <strong className="text-white print:text-black">
                  Fast-Track Administrativo
                </strong>{" "}
                (Pago Único): Liquidación del 100% al inicio del proyecto para
                simplificación contable. (Obligatorio para plan Start).
              </Casilla>
            </div>
            <p className="mt-4 text-[13px] italic leading-relaxed text-slate-500 print:text-black">
              Los pagos realizados mediante criptoactivos (USDT TRC20) son finales e
              irreversibles.
            </p>
          </section>

          {/* ── CLÁUSULA 3 ── */}
          <section>
            <h2 className="mb-3 border-b border-slate-800 pb-2 text-[15px] font-black uppercase tracking-wide text-white print:border-slate-300 print:text-black">
              Cláusula 3: Mantenimiento y Soporte
            </h2>
            <p className="mb-4 text-[14px] leading-relaxed text-slate-400 print:text-black">
              Una vez desplegado el sistema, el Cliente abonará un canon de mantenimiento
              mensual que incluye hosting, dominio, seguridad y soporte técnico, según el
              plan:
            </p>
            <div className="grid gap-3 rounded-xl border border-slate-800/60 bg-slate-900/30 p-4 sm:grid-cols-3 print:border-slate-300 print:bg-transparent">
              <Casilla
                marcada={canon === "15"}
                onClick={() => alternar("15", canon, setCanon)}
              >
                <strong className="text-white print:text-black">USD 15/mes</strong> (Start)
              </Casilla>
              <Casilla
                marcada={canon === "30"}
                onClick={() => alternar("30", canon, setCanon)}
              >
                <strong className="text-white print:text-black">USD 30/mes</strong>{" "}
                (Business)
              </Casilla>
              <Casilla
                marcada={canon === "45"}
                onClick={() => alternar("45", canon, setCanon)}
              >
                <strong className="text-white print:text-black">USD 45/mes</strong>{" "}
                (Enterprise)
              </Casilla>
            </div>
            <p className="mt-4 text-[13px] leading-relaxed text-slate-500 print:text-black">
              <strong className="text-slate-300 print:text-black">Vencimiento:</strong> El
              canon se abonará indefectiblemente los días 15 de cada mes.
            </p>
          </section>

          {/* ── CLÁUSULA 4 ── */}
          <section>
            <h2 className="mb-3 border-b border-slate-800 pb-2 text-[15px] font-black uppercase tracking-wide text-white print:border-slate-300 print:text-black">
              Cláusula 4: Alcance y Revisiones
            </h2>
            <p className="text-[14px] leading-relaxed text-slate-400 print:text-black">
              El desarrollo incluye un (1) &ldquo;Sprint de Ajustes&rdquo; estipulado antes
              de la entrega final. Todo cambio solicitado por fuera del alcance original
              acordado en el diagnóstico será cotizado como horas de desarrollo
              adicionales.
            </p>
          </section>

          {/* ── CLÁUSULA 5 ── */}
          <section>
            <h2 className="mb-3 border-b border-slate-800 pb-2 text-[15px] font-black uppercase tracking-wide text-white print:border-slate-300 print:text-black">
              Cláusula 5: Garantía por Etapas
            </h2>
            <p className="text-[14px] leading-relaxed text-slate-400 print:text-black">
              Si durante la primera etapa funcional el sistema no responde al objetivo
              acordado, el Cliente puede solicitar la cancelación sin exigencia de los pagos
              restantes. Los pagos ya realizados cubren el trabajo técnico ejecutado.
            </p>
          </section>

          {/* ── CLÁUSULA 6 ── */}
          <section>
            <h2 className="mb-3 border-b border-slate-800 pb-2 text-[15px] font-black uppercase tracking-wide text-white print:border-slate-300 print:text-black">
              Cláusula 6: Propiedad y Confidencialidad
            </h2>
            <p className="text-[14px] leading-relaxed text-slate-400 print:text-black">
              La base de datos, clientes y métricas generadas son propiedad exclusiva del
              Cliente. El código fuente base, motor lógico y algoritmos de cotización son
              propiedad intelectual de AYCweb, otorgando al Cliente una licencia de uso
              perpetua e intransferible mientras se mantenga activo el servicio.
            </p>
          </section>
        </div>

        {/* ── Cierre y firmas ── */}
        <div className="mt-12 border-t border-slate-800 pt-10 print:border-slate-300">
          <p className="mb-12 text-[14px] leading-relaxed text-slate-400 print:text-black">
            En prueba de conformidad, se firma el presente acuerdo a los{" "}
            <span className="inline-block min-w-[40px] border-b border-dotted border-slate-500">
              &nbsp;
            </span>{" "}
            días del mes de{" "}
            <span className="inline-block min-w-[90px] border-b border-dotted border-slate-500">
              &nbsp;
            </span>{" "}
            de 2026.
          </p>

          <div className="grid gap-12 sm:grid-cols-2">
            <div className="text-center">
              <div className="mb-2 h-10 border-b border-slate-500 print:border-black" />
              <p className="text-[13px] font-bold text-white print:text-black">
                Por AYCweb
              </p>
              <p className="text-[11px] text-slate-500 print:text-slate-600">
                {LEGAL_INFO.titular} · RUC {LEGAL_INFO.ruc}
              </p>
            </div>
            <div className="text-center">
              <div className="mb-2 h-10 border-b border-slate-500 print:border-black" />
              <p className="text-[13px] font-bold text-white print:text-black">
                Por El Cliente
              </p>
              <p className="text-[11px] text-slate-500 print:text-slate-600">
                Nombre / RUC
              </p>
            </div>
          </div>
        </div>

        {/* ── Pie de documento ── */}
        <p className="mt-12 border-t border-slate-900 pt-6 text-center text-[11px] text-slate-600 print:border-slate-300 print:text-slate-600">
          {LEGAL_INFO.razonSocial} · RUC {LEGAL_INFO.ruc} · aycweb.com
        </p>
      </div>
    </div>
  );
}
