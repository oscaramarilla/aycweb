"use client";

import { useMemo, useState } from "react";
import { buildWaLink } from "@/lib/config/contact";

// ─────────────────────────────────────────────
// TIPOS
// ─────────────────────────────────────────────
type TipoServicio = "cotizador" | "panel" | "automatizacion" | "ecosistema";

interface QuoterParams {
  tipoServicio: TipoServicio;
  volumenOps: number; // operaciones/mes
  cantidadUsuarios: number; // usuarios internos
  margenEsperado: number; // % margen deseado
}

interface QuoterResult {
  costoBase: number;
  costoEscalado: number;
  ahorroEstimadoMes: number;
  roiMeses: number;
  precioSugerido: number;
  gananciaEstimada: number;
  descripcionServicio: string;
  modulos: string[];
}

// ─────────────────────────────────────────────
// CONFIGURACIÓN DE SERVICIOS
// ─────────────────────────────────────────────
const SERVICIOS: Record<
  TipoServicio,
  {
    label: string;
    emoji: string;
    descripcion: string;
    costoBase: number;
    costoXOp: number;
    costoXUsuario: number;
    ahorroXOp: number;
    modulos: string[];
  }
> = {
  cotizador: {
    label: "Motor Cotizador",
    emoji: "⚡",
    descripcion: "Sistema de cotización automática con PDF y WhatsApp integrado",
    costoBase: 800,
    costoXOp: 0.8,
    costoXUsuario: 120,
    ahorroXOp: 4.5,
    modulos: [
      "Cotizador web embebido",
      "Generación de PDF automática",
      "Envío por WhatsApp con 1 clic",
      "Panel de historial de cotizaciones",
    ],
  },
  panel: {
    label: "Panel Operativo",
    emoji: "📊",
    descripcion: "Dashboard interno para gestión de operaciones y seguimiento",
    costoBase: 1200,
    costoXOp: 1.2,
    costoXUsuario: 180,
    ahorroXOp: 6.0,
    modulos: [
      "Dashboard en tiempo real",
      "Gestión de clientes y prospectos",
      "Seguimiento de operaciones",
      "Reportes exportables",
    ],
  },
  automatizacion: {
    label: "Automatización Comercial",
    emoji: "🤖",
    descripcion: "Flujos automáticos de captación, seguimiento y cierre",
    costoBase: 1500,
    costoXOp: 1.5,
    costoXUsuario: 200,
    ahorroXOp: 8.0,
    modulos: [
      "Flujos de captación automáticos",
      "Seguimiento sin intervención manual",
      "Notificaciones y alertas inteligentes",
      "Integración WhatsApp + Email",
    ],
  },
  ecosistema: {
    label: "Ecosistema Completo",
    emoji: "🏭",
    descripcion: "Infraestructura digital completa: cotizador + panel + automatización",
    costoBase: 2800,
    costoXOp: 2.5,
    costoXUsuario: 350,
    ahorroXOp: 15.0,
    modulos: [
      "Motor Cotizador completo",
      "Panel Operativo centralizado",
      "Automatización comercial",
      "Integraciones a medida",
      "Soporte prioritario 30 días",
    ],
  },
};

// ─────────────────────────────────────────────
// LÓGICA DE CÁLCULO
// ─────────────────────────────────────────────
function calcularCotizacion(params: QuoterParams): QuoterResult {
  const { tipoServicio, volumenOps, cantidadUsuarios, margenEsperado } = params;
  const config = SERVICIOS[tipoServicio];

  const costoBase = config.costoBase;
  const costoEscalado =
    costoBase +
    volumenOps * config.costoXOp +
    cantidadUsuarios * config.costoXUsuario;

  const ahorroEstimadoMes = volumenOps * config.ahorroXOp;

  const margenDecimal = margenEsperado / 100;
  const precioSugerido =
    margenDecimal < 1 ? costoEscalado / (1 - margenDecimal) : costoEscalado * 2;

  const gananciaEstimada = precioSugerido - costoEscalado;

  const roiMeses =
    ahorroEstimadoMes > 0
      ? Math.ceil(costoEscalado / ahorroEstimadoMes)
      : 99;

  return {
    costoBase,
    costoEscalado,
    ahorroEstimadoMes,
    roiMeses,
    precioSugerido,
    gananciaEstimada,
    descripcionServicio: config.descripcion,
    modulos: config.modulos,
  };
}

// ─────────────────────────────────────────────
// FORMATTERS
// ─────────────────────────────────────────────
function fmtUsd(n: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);
}

// ─────────────────────────────────────────────
// COMPONENTE SLIDER
// ─────────────────────────────────────────────
function SliderControl({
  label,
  sublabel,
  value,
  min,
  max,
  step,
  onChange,
  displayValue,
  color = "blue",
}: {
  label: string;
  sublabel?: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
  displayValue: string;
  color?: "blue" | "emerald" | "violet";
}) {
  const colorMap = {
    blue: {
      track: "accent-blue-500",
      badge: "bg-blue-600/20 text-blue-300 border-blue-500/30",
    },
    emerald: {
      track: "accent-emerald-500",
      badge: "bg-emerald-600/20 text-emerald-300 border-emerald-500/30",
    },
    violet: {
      track: "accent-violet-500",
      badge: "bg-violet-600/20 text-violet-300 border-violet-500/30",
    },
  };
  const c = colorMap[color];
  const pct = ((value - min) / (max - min)) * 100;

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-bold text-slate-200">{label}</p>
          {sublabel && <p className="text-xs text-slate-500">{sublabel}</p>}
        </div>
        <span
          className={`text-sm font-black px-3 py-1 rounded-full border ${c.badge}`}
        >
          {displayValue}
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
          className={`w-full h-2 rounded-full appearance-none cursor-pointer bg-slate-800 ${c.track}`}
          style={{
            background: `linear-gradient(to right, currentColor ${pct}%, rgb(30 41 59) ${pct}%)`,
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

// ─────────────────────────────────────────────
// MODAL DE RESUMEN
// ─────────────────────────────────────────────
function ResumenModal({
  open,
  onClose,
  params,
  result,
}: {
  open: boolean;
  onClose: () => void;
  params: QuoterParams;
  result: QuoterResult;
}) {
  if (!open) return null;

  const servicio = SERVICIOS[params.tipoServicio];
  const fecha = new Date().toLocaleDateString("es-PY", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-slate-900 border border-slate-700 rounded-3xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600/20 to-violet-600/20 border-b border-slate-700 p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-widest text-blue-400 mb-1">
                Resumen de Cotización
              </p>
              <h3 className="text-xl font-black text-white">
                {servicio.emoji} {servicio.label}
              </h3>
              <p className="text-sm text-slate-400 mt-1">{fecha}</p>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 space-y-5">
          {/* Parámetros */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: "Operaciones/mes", value: params.volumenOps.toLocaleString("es-PY") },
              { label: "Usuarios internos", value: params.cantidadUsuarios.toString() },
              { label: "Margen esperado", value: `${params.margenEsperado}%` },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-slate-800/60 rounded-xl p-3 text-center border border-slate-700"
              >
                <p className="text-[10px] uppercase tracking-wide text-slate-500 font-bold mb-1">
                  {item.label}
                </p>
                <p className="text-base font-black text-white">{item.value}</p>
              </div>
            ))}
          </div>

          {/* Módulos incluidos */}
          <div className="bg-slate-800/40 rounded-2xl p-4 border border-slate-700">
            <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-3">
              Módulos incluidos
            </p>
            <ul className="space-y-1.5">
              {result.modulos.map((m) => (
                <li key={m} className="flex items-center gap-2 text-sm text-slate-300">
                  <span className="w-4 h-4 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-[9px] text-blue-400 font-black shrink-0">
                    ✓
                  </span>
                  {m}
                </li>
              ))}
            </ul>
          </div>

          {/* Números clave */}
          <div className="space-y-2">
            {[
              {
                label: "Inversión estimada",
                value: fmtUsd(result.costoEscalado),
                color: "text-slate-300",
              },
              {
                label: "Ahorro mensual estimado",
                value: fmtUsd(result.ahorroEstimadoMes),
                color: "text-emerald-400",
              },
              {
                label: "ROI estimado",
                value:
                  result.roiMeses < 99
                    ? `${result.roiMeses} ${result.roiMeses === 1 ? "mes" : "meses"}`
                    : "Consultar",
                color: "text-blue-400",
              },
            ].map((row) => (
              <div
                key={row.label}
                className="flex justify-between items-center py-2 border-b border-slate-800"
              >
                <span className="text-sm text-slate-400">{row.label}</span>
                <span className={`text-sm font-black ${row.color}`}>{row.value}</span>
              </div>
            ))}
          </div>

          {/* Precio final */}
          <div className="bg-gradient-to-r from-blue-600/10 to-violet-600/10 border border-blue-500/20 rounded-2xl p-4 text-center">
            <p className="text-xs font-black uppercase tracking-widest text-blue-400 mb-1">
              Precio de referencia
            </p>
            <p className="text-4xl font-black text-white">{fmtUsd(result.precioSugerido)}</p>
            <p className="text-xs text-slate-500 mt-1">
              Estimación orientativa · Sujeto a auditoría
            </p>
          </div>

          <p className="text-[11px] text-slate-600 text-center leading-relaxed">
            Esta cotización es una simulación demostrativa. Los valores reales se
            definen tras una auditoría B2B personalizada.
          </p>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// TOAST
// ─────────────────────────────────────────────
function Toast({ visible, message }: { visible: boolean; message: string }) {
  return (
    <div
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <div className="bg-emerald-600 text-white font-bold text-sm px-6 py-3 rounded-full shadow-2xl flex items-center gap-2">
        <span>✓</span>
        {message}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// COMPONENTE PRINCIPAL
// ─────────────────────────────────────────────
export default function B2BQuoterDemo() {
  // Parámetros
  const [tipoServicio, setTipoServicio] = useState<TipoServicio>("cotizador");
  const [volumenOps, setVolumenOps] = useState(150);
  const [cantidadUsuarios, setCantidadUsuarios] = useState(3);
  const [margenEsperado, setMargenEsperado] = useState(35);

  // UI state
  const [modalOpen, setModalOpen] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMsg, setToastMsg] = useState("");

  // Cálculo reactivo
  const params: QuoterParams = {
    tipoServicio,
    volumenOps,
    cantidadUsuarios,
    margenEsperado,
  };
  const result = useMemo(() => calcularCotizacion(params), [
    tipoServicio,
    volumenOps,
    cantidadUsuarios,
    margenEsperado,
  ]);

  // ── Handlers ──
  const showToast = (msg: string) => {
    setToastMsg(msg);
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 3000);
  };

  const handleGenerarPDF = () => {
    setModalOpen(true);
    showToast("Resumen generado correctamente");
  };

  const handleWhatsApp = () => {
    const servicio = SERVICIOS[tipoServicio];
    const mensaje =
      `¡Hola Oscar! Acabo de usar el Motor Cotizador B2B de AYCweb y me interesa avanzar.\n\n` +
      `📋 *Resumen de mi cotización:*\n` +
      `• Servicio: ${servicio.label}\n` +
      `• Volumen de operaciones: ${volumenOps}/mes\n` +
      `• Usuarios internos: ${cantidadUsuarios}\n` +
      `• Margen esperado: ${margenEsperado}%\n\n` +
      `💰 *Estimación:*\n` +
      `• Inversión: ${fmtUsd(result.costoEscalado)}\n` +
      `• Ahorro mensual est.: ${fmtUsd(result.ahorroEstimadoMes)}\n` +
      `• ROI estimado: ${result.roiMeses < 99 ? result.roiMeses + " meses" : "a consultar"}\n` +
      `• Precio referencia: ${fmtUsd(result.precioSugerido)}\n\n` +
      `Quiero agendar una Auditoría B2B para ver si hay encaje.`;

    const url = buildWaLink(mensaje);
    window.open(url, "_blank");
  };

  const servicio = SERVICIOS[tipoServicio];

  return (
    <>
      <div className="w-full max-w-5xl mx-auto">
        {/* ── Header ── */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
          <div className="relative bg-gradient-to-br from-slate-900 to-slate-950 border-b border-slate-800 p-6 sm:p-8 text-center overflow-hidden">
            <div className="absolute inset-x-0 top-0 mx-auto w-96 h-48 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
            <span className="inline-block px-3 py-1 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-400 text-[11px] font-black uppercase tracking-widest mb-4 relative z-10">
              Demo interactiva · Motor Cotizador B2B
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white relative z-10 leading-tight">
              Calculá el valor de tu{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
                infraestructura digital
              </span>
            </h2>
            <p className="text-slate-400 mt-3 max-w-2xl mx-auto relative z-10 text-sm sm:text-base">
              Ajustá los parámetros de tu operación y el motor calcula en tiempo real la
              inversión estimada, el ahorro mensual y el retorno esperado.
            </p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-0 xl:gap-0">
            {/* ── Panel izquierdo: controles ── */}
            <div className="p-6 sm:p-8 space-y-7 border-b xl:border-b-0 xl:border-r border-slate-800">
              {/* Selector de servicio */}
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-slate-500 mb-3">
                  1. Tipo de infraestructura
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {(Object.entries(SERVICIOS) as [TipoServicio, typeof SERVICIOS[TipoServicio]][]).map(
                    ([key, s]) => (
                      <button
                        key={key}
                        type="button"
                        onClick={() => setTipoServicio(key)}
                        className={`rounded-2xl border p-3 text-left transition-all active:scale-[0.98] ${
                          tipoServicio === key
                            ? "border-blue-500 bg-blue-600/10 shadow-[0_0_15px_rgba(37,99,235,0.15)]"
                            : "border-slate-800 bg-slate-900/40 hover:border-slate-600"
                        }`}
                      >
                        <span className="text-xl block mb-1">{s.emoji}</span>
                        <p className="text-sm font-black text-white leading-tight">{s.label}</p>
                        <p
                          className={`text-[11px] mt-0.5 leading-tight ${
                            tipoServicio === key ? "text-blue-300" : "text-slate-500"
                          }`}
                        >
                          {s.descripcion.split(" ").slice(0, 5).join(" ")}…
                        </p>
                      </button>
                    )
                  )}
                </div>
              </div>

              {/* Sliders */}
              <div className="space-y-6">
                <p className="text-xs font-black uppercase tracking-widest text-slate-500">
                  2. Parámetros de tu operación
                </p>

                <SliderControl
                  label="Volumen de operaciones"
                  sublabel="Cotizaciones, pedidos o transacciones por mes"
                  value={volumenOps}
                  min={10}
                  max={1000}
                  step={10}
                  onChange={setVolumenOps}
                  displayValue={`${volumenOps}/mes`}
                  color="blue"
                />

                <SliderControl
                  label="Usuarios internos"
                  sublabel="Personas que usarán el sistema"
                  value={cantidadUsuarios}
                  min={1}
                  max={20}
                  step={1}
                  onChange={setCantidadUsuarios}
                  displayValue={`${cantidadUsuarios} ${cantidadUsuarios === 1 ? "usuario" : "usuarios"}`}
                  color="violet"
                />

                <SliderControl
                  label="Margen esperado"
                  sublabel="Rentabilidad objetivo sobre la inversión"
                  value={margenEsperado}
                  min={10}
                  max={60}
                  step={5}
                  onChange={setMargenEsperado}
                  displayValue={`${margenEsperado}%`}
                  color="emerald"
                />
              </div>

              {/* Módulos incluidos */}
              <div className="bg-slate-800/30 rounded-2xl p-4 border border-slate-800">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-3">
                  Módulos del paquete seleccionado
                </p>
                <ul className="space-y-1.5">
                  {servicio.modulos.map((m) => (
                    <li key={m} className="flex items-center gap-2 text-xs text-slate-400">
                      <span className="w-3.5 h-3.5 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-[8px] text-blue-400 font-black shrink-0">
                        ✓
                      </span>
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* ── Panel derecho: resultados ── */}
            <div className="p-6 sm:p-8 flex flex-col justify-between gap-6">
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-slate-500 mb-5">
                  3. Resultado en tiempo real
                </p>

                {/* Métricas principales */}
                <div className="space-y-3">
                  {/* Inversión */}
                  <div className="bg-slate-800/50 rounded-2xl p-4 border border-slate-700 flex justify-between items-center">
                    <div>
                      <p className="text-[11px] font-black uppercase tracking-widest text-slate-500">
                        Inversión estimada
                      </p>
                      <p className="text-xs text-slate-600 mt-0.5">Costo de implementación</p>
                    </div>
                    <p className="text-2xl font-black text-white">
                      {fmtUsd(result.costoEscalado)}
                    </p>
                  </div>

                  {/* Ahorro */}
                  <div className="bg-emerald-900/20 rounded-2xl p-4 border border-emerald-800/40 flex justify-between items-center">
                    <div>
                      <p className="text-[11px] font-black uppercase tracking-widest text-emerald-500">
                        Ahorro mensual est.
                      </p>
                      <p className="text-xs text-slate-600 mt-0.5">Tiempo + errores + seguimiento</p>
                    </div>
                    <p className="text-2xl font-black text-emerald-400">
                      {fmtUsd(result.ahorroEstimadoMes)}
                    </p>
                  </div>

                  {/* ROI */}
                  <div className="bg-blue-900/20 rounded-2xl p-4 border border-blue-800/40 flex justify-between items-center">
                    <div>
                      <p className="text-[11px] font-black uppercase tracking-widest text-blue-400">
                        ROI estimado
                      </p>
                      <p className="text-xs text-slate-600 mt-0.5">Meses para recuperar inversión</p>
                    </div>
                    <p className="text-2xl font-black text-blue-300">
                      {result.roiMeses < 99
                        ? `${result.roiMeses} ${result.roiMeses === 1 ? "mes" : "meses"}`
                        : "Consultar"}
                    </p>
                  </div>

                  {/* Precio sugerido */}
                  <div className="bg-gradient-to-r from-blue-600/10 to-violet-600/10 rounded-2xl p-5 border border-blue-500/20 text-center mt-2">
                    <p className="text-[11px] font-black uppercase tracking-widest text-blue-400 mb-1">
                      Precio de referencia
                    </p>
                    <p className="text-5xl font-black text-white leading-none">
                      {fmtUsd(result.precioSugerido)}
                    </p>
                    <p className="text-xs text-slate-500 mt-2">
                      Estimación orientativa · Sujeto a auditoría B2B
                    </p>
                  </div>
                </div>
              </div>

              {/* Botones de acción */}
              <div className="space-y-3">
                <button
                  onClick={handleGenerarPDF}
                  className="w-full bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-600 text-white font-black py-4 rounded-2xl transition-all active:scale-[0.98] flex items-center justify-center gap-2 text-[15px]"
                >
                  <span>📄</span>
                  Ver resumen completo
                </button>

                <button
                  onClick={handleWhatsApp}
                  className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-black py-4 rounded-2xl transition-all shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:shadow-[0_0_30px_rgba(16,185,129,0.35)] active:scale-[0.98] flex items-center justify-center gap-2 text-[15px]"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Enviar cotización por WhatsApp
                </button>

                <p className="text-[11px] text-slate-600 text-center">
                  El mensaje incluye el resumen completo de tu cotización
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-center text-xs text-slate-600 mt-4">
          Esta es una simulación demostrativa del Motor Cotizador B2B de AYCweb. Los valores son
          orientativos y se ajustan en la auditoría personalizada.
        </p>
      </div>

      {/* Modal */}
      <ResumenModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        params={params}
        result={result}
      />

      {/* Toast */}
      <Toast visible={toastVisible} message={toastMsg} />
    </>
  );
}
