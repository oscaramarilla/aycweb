"use client";

import { useMemo, useState, useCallback } from "react";
import { useParams } from "next/navigation";
import {
  calcularIneficiencia,
  buildCalculadoraWaUrl,
  type CalculadoraParams,
} from "@/lib/services/buildCalculadoraMessage";

// ─── Defaults ──────────────────────────────────────────────────

const DEFAULTS: CalculadoraParams = {
  cotizacionesMes: 50,
  minutosPorCotizacion: 45,
  tasaError: 10,
  costoSocio: 15,
};

// ─── Formateadores ─────────────────────────────────────────────

function fmtNum(n: number): string {
  return n.toLocaleString("es-PY");
}

function fmtUsd(n: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);
}

// ─── Componente Slider custom ──────────────────────────────────

function SliderField({
  label,
  sublabel,
  value,
  min,
  max,
  step,
  onChange,
  displayValue,
  unit,
}: {
  label: string;
  sublabel?: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
  displayValue: string;
  unit?: string;
}) {
  const pct = ((value - min) / (max - min)) * 100;

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-bold text-slate-200">{label}</p>
          {sublabel && <p className="text-xs text-slate-500">{sublabel}</p>}
        </div>
        <span className="text-sm font-black px-3 py-1 rounded-full border bg-blue-600/20 text-blue-300 border-blue-500/30">
          {displayValue}
          {unit && <span className="text-blue-400/60 ml-0.5 text-[11px]">{unit}</span>}
        </span>
      </div>
      <div className="relative">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full h-2 rounded-full appearance-none cursor-pointer bg-slate-800 accent-blue-500"
          style={{
            background: `linear-gradient(to right, rgb(59 130 246) ${pct}%, rgb(30 41 59) ${pct}%)`,
          }}
        />
        <div className="flex justify-between text-[10px] text-slate-600 mt-1 font-medium">
          <span>{min}</span>
          <span>{max}</span>
        </div>
      </div>
    </div>
  );
}

// ─── Componente principal ──────────────────────────────────────

export default function ExcelToSystemCalculator() {
  const params = useParams<{ lang: string }>();
  const lang = params?.lang ?? "es";

  // Estado de inputs
  const [cotizacionesMes, setCotizacionesMes] = useState(DEFAULTS.cotizacionesMes);
  const [minutosPorCotizacion, setMinutosPorCotizacion] = useState(
    DEFAULTS.minutosPorCotizacion
  );
  const [tasaError, setTasaError] = useState(DEFAULTS.tasaError);
  const [costoSocio, setCostoSocio] = useState(DEFAULTS.costoSocio);

  // Estado para el botón WhatsApp
  const [sending, setSending] = useState(false);

  // Cálculo reactivo
  const p: CalculadoraParams = useMemo(
    () => ({
      cotizacionesMes,
      minutosPorCotizacion,
      tasaError,
      costoSocio,
    }),
    [cotizacionesMes, minutosPorCotizacion, tasaError, costoSocio]
  );

  const result = useMemo(() => calcularIneficiencia(p), [p]);

  // Severidad
  const severity =
    result.costoMensual >= 20000
      ? { label: "Crítico", color: "text-red-400", bg: "bg-red-950/40", border: "border-red-500/30" }
      : result.costoMensual >= 5000
        ? { label: "Moderado", color: "text-amber-400", bg: "bg-amber-950/40", border: "border-amber-500/30" }
        : { label: "Bajo", color: "text-emerald-400", bg: "bg-emerald-950/40", border: "border-emerald-500/30" };

  // Handler WhatsApp
  const handleWhatsApp = useCallback(() => {
    setSending(true);
    const url = buildCalculadoraWaUrl(p, result, lang);
    const win = window.open(url, "_blank", "noopener,noreferrer");
    if (!win || win.closed || typeof win.closed === "undefined") {
      // Fallback si popup bloqueado
      window.location.href = url;
    }
    setTimeout(() => setSending(false), 2000);
  }, [p, result, lang]);

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="bg-slate-900/80 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
        {/* ── Header ── */}
        <div className="relative bg-gradient-to-br from-slate-900 to-slate-950 border-b border-slate-800 p-6 sm:p-8 text-center overflow-hidden">
          <div className="absolute inset-x-0 top-0 mx-auto w-96 h-48 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
          <span className="inline-block px-3 py-1 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-400 text-[11px] font-black uppercase tracking-widest mb-4 relative z-10">
            Demo interactiva · Sin registro
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white relative z-10 leading-tight">
            ¿Cuánto te cuesta{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
              hacer cotizaciones a mano?
            </span>
          </h2>
          <p className="text-slate-400 mt-3 max-w-2xl mx-auto relative z-10 text-sm sm:text-base">
            Ajustá los parámetros de tu operación. El motor calcula en tiempo real
            cuántas horas y dinero estás perdiendo con procesos manuales en Excel.
          </p>
        </div>

        {/* ── Grid: Inputs | Resultados ── */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-0 xl:gap-0">
          {/* ── Panel izquierdo: controles ── */}
          <div className="p-6 sm:p-8 space-y-7 border-b xl:border-b-0 xl:border-r border-slate-800">
            <div>
              <p className="text-xs font-black uppercase tracking-widest text-slate-500 mb-5">
                1. Parámetros de tu operación
              </p>

              <div className="space-y-6">
                <SliderField
                  label="Cotizaciones por mes"
                  sublabel="Presupuestos, órdenes o propuestas que generás al mes"
                  value={cotizacionesMes}
                  min={10}
                  max={500}
                  step={5}
                  onChange={setCotizacionesMes}
                  displayValue={fmtNum(cotizacionesMes)}
                  unit="/mes"
                />

                <SliderField
                  label="Minutos por cotización"
                  sublabel="Tiempo promedio que toma preparar una cotización en Excel"
                  value={minutosPorCotizacion}
                  min={15}
                  max={120}
                  step={5}
                  onChange={setMinutosPorCotizacion}
                  displayValue={String(minutosPorCotizacion)}
                  unit="min"
                />

                <SliderField
                  label="Tasa de error / retrabajo"
                  sublabel="% de cotizaciones que requieren correcciones o reenvío"
                  value={tasaError}
                  min={0}
                  max={30}
                  step={1}
                  onChange={setTasaError}
                  displayValue={`${tasaError}%`}
                />

                {/* Costo hora-hombre: input numérico personalizado */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-bold text-slate-200">
                        Costo hora-hombre
                      </p>
                      <p className="text-xs text-slate-500">
                        USD por hora del personal involucrado
                      </p>
                    </div>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-sm">
                        $
                      </span>
                      <input
                        type="number"
                        min={5}
                        max={100}
                        step={1}
                        value={costoSocio}
                        onChange={(e) => {
                          const v = Math.min(100, Math.max(5, Number(e.target.value) || 5));
                          setCostoSocio(v);
                        }}
                        className="w-20 bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 pl-7 text-white font-black text-sm text-center outline-none focus:border-blue-500/60 transition-all [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between text-[10px] text-slate-600 font-medium px-1">
                    <span>$5</span>
                    <span>$100</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Leyenda de severidad ── */}
            <div className="bg-slate-800/30 rounded-2xl p-4 border border-slate-800">
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-3">
                Nivel de severidad
              </p>
              <div className="space-y-2 text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0" />
                  <span className="text-slate-400">
                    {"Bajo < $5,000/año — Optimizable"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500 shrink-0" />
                  <span className="text-slate-400">
                    Moderado $5k–$20k/año — Requiere atención
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500 shrink-0" />
                  <span className="text-slate-400">
                    {"Crítico > $20,000/año — Urgente sistematizar"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ── Panel derecho: resultados ── */}
          <div className="p-6 sm:p-8 flex flex-col justify-between gap-6">
            <div>
              <p className="text-xs font-black uppercase tracking-widest text-slate-500 mb-5">
                2. Resultado en tiempo real
              </p>

              {/* Desglose de horas */}
              <div className="space-y-3 mb-6">
                <div className="bg-slate-800/50 rounded-2xl p-4 border border-slate-700 flex justify-between items-center">
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-widest text-slate-500">
                      Horas/mes cotizando
                    </p>
                    <p className="text-xs text-slate-600 mt-0.5">
                      {fmtNum(cotizacionesMes)} cotizaciones × {minutosPorCotizacion} min
                    </p>
                  </div>
                  <p className="text-xl font-black text-white">
                    {result.horasCotizaciones} h
                  </p>
                </div>

                <div className="bg-slate-800/50 rounded-2xl p-4 border border-slate-700 flex justify-between items-center">
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-widest text-slate-500">
                      Horas/mes en retrabajo
                    </p>
                    <p className="text-xs text-slate-600 mt-0.5">
                      {tasaError}% de error sobre horas de cotización
                    </p>
                  </div>
                  <p className="text-xl font-black text-white">
                    {result.horasRetrabajo} h
                  </p>
                </div>

                <div className="bg-slate-800/50 rounded-2xl p-4 border border-slate-700 flex justify-between items-center">
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-widest text-slate-500">
                      Total horas perdidas/mes
                    </p>
                  </div>
                  <p className="text-2xl font-black text-white">
                    {result.totalHorasPerdidas} h
                  </p>
                </div>
              </div>

              {/* Costo de ineficiencia — el número grande */}
              <div
                className={`rounded-2xl p-6 border text-center ${severity.bg} ${severity.border}`}
              >
                <p className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-1">
                  Costo mensual de ineficiencia
                </p>
                <p className={`text-5xl sm:text-6xl font-black leading-none mb-2 ${severity.color}`}>
                  {fmtUsd(result.costoMensual)}
                </p>
                <p className="text-xs text-slate-500 mb-4">
                  Equivalente a {fmtUsd(result.costoMensual * 12)}/año perdidos en procesos manuales
                </p>

                {/* Badge de severidad */}
                <span
                  className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border text-[11px] font-black uppercase tracking-widest ${severity.bg} ${severity.color} ${severity.border}`}
                >
                  <span
                    className={`w-2 h-2 rounded-full ${
                      result.costoMensual >= 20000
                        ? "bg-red-400"
                        : result.costoMensual >= 5000
                          ? "bg-amber-400"
                          : "bg-emerald-400"
                    }`}
                  />
                  {severity.label}
                </span>
              </div>

              {/* Ahorro potencial */}
              <div className="mt-4 bg-gradient-to-r from-emerald-600/10 to-blue-600/10 rounded-2xl p-5 border border-emerald-500/20 text-center">
                <p className="text-[11px] font-black uppercase tracking-widest text-emerald-400 mb-1">
                  Ahorro potencial estimado
                </p>
                <p className="text-3xl sm:text-4xl font-black text-emerald-400 leading-none">
                  {fmtUsd(result.ahorroMensual)}/mes
                </p>
                <p className="text-xs text-slate-500 mt-2">
                  {fmtUsd(result.ahorroMensual * 12)}/año · Basado en 70% de reducción
                  al sistematizar
                </p>
              </div>
            </div>

            {/* ── Botón CTA ── */}
            <div className="space-y-3">
              <button
                onClick={handleWhatsApp}
                disabled={sending}
                className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 disabled:cursor-not-allowed text-white font-black py-4 px-8 rounded-2xl transition-all shadow-[0_0_30px_rgba(37,99,235,0.3)] hover:shadow-[0_0_40px_rgba(37,99,235,0.45)] active:scale-[0.98] flex items-center justify-center gap-3 text-[15px]"
              >
                {sending ? (
                  <>
                    <span className="animate-spin inline-block w-5 h-5 border-2 border-white/30 border-t-white rounded-full" />
                    Abriendo WhatsApp…
                  </>
                ) : (
                  <>
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Enviar resultado por WhatsApp
                  </>
                )}
              </button>

              <p className="text-[11px] text-slate-600 text-center">
                Recibí un análisis personalizado con los números de tu operación
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <p className="text-center text-xs text-slate-600 mt-4 max-w-2xl mx-auto">
        Esta calculadora es una herramienta demostrativa del Motor de Cotización B2B
        de AYCweb. Los valores son estimaciones orientativas. El ahorro real se
        determina en una auditoría personalizada.
      </p>
    </div>
  );
}