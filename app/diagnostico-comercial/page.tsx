"use client";

/**
 * Diagnóstico Comercial Express
 * ─────────────────────────────
 * Formulario de pre-calificación de leads para AYCweb.
 * Sin backend. Al submit arma el mensaje y abre WhatsApp.
 * Validación nativa con React (sin zod / react-hook-form).
 * El número de destino se lee SIEMPRE desde lib/config/contact.ts.
 */

import { useState } from "react";
import Link from "next/link";
import {
  buildDiagnosticoWaUrl,
  type DiagnosticoData,
} from "@/lib/services/whatsapp-message";

// ─── Opciones de selects y radios ────────────────────────────────────────────

const SECTORES = [
  "Industrial",
  "Médico / Salud",
  "Servicios profesionales",
  "Otro",
] as const;

const TAMANOS = ["1–3", "4–10", "10+"] as const;

const CUELLOS = [
  "Cotizaciones lentas",
  "Excel descontrolado",
  "Sin trazabilidad de ventas",
  "Otro",
] as const;

// ─── Tipos ───────────────────────────────────────────────────────────────────

type FormFields = Omit<DiagnosticoData, "whatsapp"> & { whatsappLocal: string };
type Errors = Partial<Record<keyof FormFields | "whatsappLocal", string>>;

const INITIAL: FormFields = {
  empresa: "",
  sector: "",
  tamanoEquipo: "",
  cuelloBottella: "",
  stackActual: "",
  whatsappLocal: "",
};

// ─── Validación ──────────────────────────────────────────────────────────────

function validate(data: FormFields): Errors {
  const errors: Errors = {};

  if (!data.empresa.trim()) {
    errors.empresa = "Ingresá el nombre de tu empresa.";
  }
  if (!data.sector) {
    errors.sector = "Seleccioná el sector de tu empresa.";
  }
  if (!data.tamanoEquipo) {
    errors.tamanoEquipo = "Seleccioná el tamaño del equipo comercial.";
  }
  if (!data.cuelloBottella) {
    errors.cuelloBottella = "Seleccioná el cuello de botella principal.";
  }
  if (!data.stackActual.trim()) {
    errors.stackActual = "Contanos qué herramientas usás actualmente.";
  }

  const digits = data.whatsappLocal.replace(/\D/g, "");
  if (!digits) {
    errors.whatsappLocal = "Ingresá tu número de WhatsApp.";
  } else if (digits.length !== 9) {
    errors.whatsappLocal = "Ingresá exactamente 9 dígitos (número paraguayo).";
  }

  return errors;
}

// ─── Componente ──────────────────────────────────────────────────────────────

export default function DiagnosticoComercialPage() {
  const [form, setForm] = useState<FormFields>(INITIAL);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  // Helper genérico para campos de texto
  const handleChange =
    (field: keyof FormFields) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
      // Limpia error al editar
      if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
    };

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const errs = validate(form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      // Hace scroll al primer error
      const firstKey = Object.keys(errs)[0];
      document.getElementById(firstKey)?.focus();
      return;
    }

    setSubmitted(true);

    const waData: DiagnosticoData = {
      empresa: form.empresa.trim(),
      sector: form.sector,
      tamanoEquipo: form.tamanoEquipo,
      cuelloBottella: form.cuelloBottella,
      stackActual: form.stackActual.trim(),
      whatsapp: `+595${form.whatsappLocal.replace(/\D/g, "")}`,
    };

    const url = buildDiagnosticoWaUrl(waData);
    window.open(url, "_blank", "noopener,noreferrer");

    // Resetea después de abrir WA
    setTimeout(() => {
      setForm(INITIAL);
      setErrors({});
      setSubmitted(false);
    }, 3000);
  }

  // ─── Render ────────────────────────────────────────────────────────────────

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-50 overflow-hidden">
      {/* Noise overlay */}
      <div className="fixed inset-0 bg-[url('/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay z-0" />

      {/* Glow de fondo */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none z-0" />

      {/* ── Header mínimo ── */}
      <header className="relative z-10 px-6 py-5 flex items-center justify-between border-b border-white/[0.06] max-w-5xl mx-auto">
        <Link
          href="/es"
          className="text-slate-400 hover:text-white transition-colors text-sm font-semibold flex items-center gap-2"
        >
          <span className="text-lg">←</span>
          <span className="hidden sm:inline">Volver a AYCweb</span>
          <span className="sm:hidden">Volver</span>
        </Link>
        <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-blue-400/80">
          AYCweb · Diagnóstico
        </span>
      </header>

      {/* ── Contenido principal ── */}
      <main className="relative z-10 px-6 py-12 md:py-20 max-w-2xl mx-auto">
        {/* Cabecera */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/50 border border-blue-500/20 text-blue-300 text-[11px] font-bold uppercase tracking-[0.2em] mb-5">
            <span>⚡</span>
            5 minutos · Sin compromiso
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight tracking-tighter text-white mb-4">
            Diagnóstico Comercial{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Express
            </span>
          </h1>

          <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-xl mx-auto">
            Completá 6 preguntas rápidas y te enviamos un diagnóstico
            personalizado sobre cómo sistematizar tu operación comercial.
          </p>
        </div>

        {/* ── Formulario ── */}
        <form
          onSubmit={handleSubmit}
          noValidate
          className="space-y-6"
          aria-label="Formulario de diagnóstico comercial"
        >
          {/* 1. Empresa */}
          <div className="space-y-2">
            <label
              htmlFor="empresa"
              className="block text-sm font-bold text-slate-200"
            >
              Empresa <span className="text-blue-400">*</span>
            </label>
            <input
              id="empresa"
              type="text"
              autoComplete="organization"
              placeholder="ej. Distribuidora Norte S.A."
              value={form.empresa}
              onChange={handleChange("empresa")}
              className={fieldCls(!!errors.empresa)}
              aria-describedby={errors.empresa ? "empresa-error" : undefined}
              aria-invalid={!!errors.empresa}
            />
            {errors.empresa && (
              <p id="empresa-error" className={errorCls}>
                {errors.empresa}
              </p>
            )}
          </div>

          {/* 2. Sector */}
          <div className="space-y-2">
            <label
              htmlFor="sector"
              className="block text-sm font-bold text-slate-200"
            >
              Sector <span className="text-blue-400">*</span>
            </label>
            <select
              id="sector"
              value={form.sector}
              onChange={handleChange("sector")}
              className={fieldCls(!!errors.sector)}
              aria-describedby={errors.sector ? "sector-error" : undefined}
              aria-invalid={!!errors.sector}
            >
              <option value="" disabled>
                — Seleccioná tu sector —
              </option>
              {SECTORES.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
            {errors.sector && (
              <p id="sector-error" className={errorCls}>
                {errors.sector}
              </p>
            )}
          </div>

          {/* 3. Tamaño equipo comercial (radio) */}
          <fieldset className="space-y-3">
            <legend className="text-sm font-bold text-slate-200">
              Tamaño del equipo comercial{" "}
              <span className="text-blue-400">*</span>
            </legend>
            <div
              id="tamanoEquipo"
              role="group"
              aria-describedby={
                errors.tamanoEquipo ? "tamano-error" : undefined
              }
              className="flex flex-wrap gap-3"
            >
              {TAMANOS.map((t) => (
                <label
                  key={t}
                  className={`
                    flex items-center gap-2.5 px-5 py-3.5 rounded-xl border cursor-pointer transition-all
                    text-sm font-semibold select-none
                    ${
                      form.tamanoEquipo === t
                        ? "bg-blue-600/20 border-blue-500 text-blue-300"
                        : "bg-slate-900/60 border-slate-700 text-slate-400 hover:border-slate-500 hover:text-slate-200"
                    }
                  `}
                >
                  <input
                    type="radio"
                    name="tamanoEquipo"
                    value={t}
                    checked={form.tamanoEquipo === t}
                    onChange={handleChange("tamanoEquipo")}
                    className="sr-only"
                    aria-label={`${t} personas`}
                  />
                  <span
                    className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 ${
                      form.tamanoEquipo === t
                        ? "border-blue-400"
                        : "border-slate-600"
                    }`}
                  >
                    {form.tamanoEquipo === t && (
                      <span className="w-2 h-2 rounded-full bg-blue-400 block" />
                    )}
                  </span>
                  {t} personas
                </label>
              ))}
            </div>
            {errors.tamanoEquipo && (
              <p id="tamano-error" className={errorCls}>
                {errors.tamanoEquipo}
              </p>
            )}
          </fieldset>

          {/* 4. Cuello de botella */}
          <div className="space-y-2">
            <label
              htmlFor="cuelloBottella"
              className="block text-sm font-bold text-slate-200"
            >
              Principal cuello de botella <span className="text-blue-400">*</span>
            </label>
            <select
              id="cuelloBottella"
              value={form.cuelloBottella}
              onChange={handleChange("cuelloBottella")}
              className={fieldCls(!!errors.cuelloBottella)}
              aria-describedby={
                errors.cuelloBottella ? "cuello-error" : undefined
              }
              aria-invalid={!!errors.cuelloBottella}
            >
              <option value="" disabled>
                — ¿Cuál es tu mayor dolor comercial? —
              </option>
              {CUELLOS.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
            {errors.cuelloBottella && (
              <p id="cuello-error" className={errorCls}>
                {errors.cuelloBottella}
              </p>
            )}
          </div>

          {/* 5. Stack actual */}
          <div className="space-y-2">
            <label
              htmlFor="stackActual"
              className="block text-sm font-bold text-slate-200"
            >
              Stack / herramientas actuales{" "}
              <span className="text-blue-400">*</span>
            </label>
            <p className="text-xs text-slate-500">
              ej. Excel + WhatsApp, Google Sheets, SAP, sin sistema
            </p>
            <input
              id="stackActual"
              type="text"
              placeholder="ej. Excel + WhatsApp"
              inputMode="text"
              autoComplete="off"
              value={form.stackActual}
              onChange={handleChange("stackActual")}
              className={fieldCls(!!errors.stackActual)}
              aria-describedby={
                errors.stackActual ? "stack-error" : undefined
              }
              aria-invalid={!!errors.stackActual}
            />
            {errors.stackActual && (
              <p id="stack-error" className={errorCls}>
                {errors.stackActual}
              </p>
            )}
          </div>

          {/* 6. WhatsApp */}
          <div className="space-y-2">
            <label
              htmlFor="whatsappLocal"
              className="block text-sm font-bold text-slate-200"
            >
              WhatsApp del responsable{" "}
              <span className="text-blue-400">*</span>
            </label>
            <p className="text-xs text-slate-500">
              9 dígitos · número paraguayo
            </p>
            <div className="flex items-center rounded-xl border border-slate-700 bg-slate-900/60 overflow-hidden focus-within:border-blue-500/60 focus-within:ring-1 focus-within:ring-blue-500/30 transition-all">
              {/* Prefijo estático */}
              <span className="px-4 py-4 text-slate-400 font-mono text-base font-semibold bg-slate-800/60 border-r border-slate-700 shrink-0 select-none whitespace-nowrap">
                +595
              </span>
              <input
                id="whatsappLocal"
                type="tel"
                inputMode="numeric"
                pattern="[0-9]{9}"
                placeholder="985864209"
                maxLength={9}
                autoComplete="tel-local"
                value={form.whatsappLocal}
                onChange={(e) => {
                  // Solo dígitos
                  const val = e.target.value.replace(/\D/g, "").slice(0, 9);
                  setForm((prev) => ({ ...prev, whatsappLocal: val }));
                  if (errors.whatsappLocal)
                    setErrors((prev) => ({
                      ...prev,
                      whatsappLocal: undefined,
                    }));
                }}
                className="flex-1 bg-transparent px-4 py-4 text-white placeholder-slate-600 text-base font-mono outline-none"
                aria-describedby={
                  errors.whatsappLocal ? "wa-error" : "wa-hint"
                }
                aria-invalid={!!errors.whatsappLocal}
              />
            </div>
            <p
              id="wa-hint"
              className={`text-[11px] ${
                form.whatsappLocal.replace(/\D/g, "").length === 9
                  ? "text-emerald-400"
                  : "text-slate-600"
              }`}
            >
              {form.whatsappLocal.replace(/\D/g, "").length}/9 dígitos
            </p>
            {errors.whatsappLocal && (
              <p id="wa-error" className={errorCls}>
                {errors.whatsappLocal}
              </p>
            )}
          </div>

          {/* ── Botón Submit ── */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={submitted}
              className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 disabled:cursor-not-allowed text-white font-black py-4 px-8 rounded-xl transition-all shadow-[0_0_40px_rgba(37,99,235,0.35)] active:scale-95 text-base flex items-center justify-center gap-3"
            >
              {submitted ? (
                <>
                  <span className="animate-spin inline-block w-5 h-5 border-2 border-white/30 border-t-white rounded-full" />
                  Abriendo WhatsApp…
                </>
              ) : (
                <>
                  <span>💬</span>
                  Enviar diagnóstico por WhatsApp
                </>
              )}
            </button>
            <p className="text-center text-xs text-slate-500 mt-3">
              Se abrirá WhatsApp con tu diagnóstico pre-cargado. Sin costo ni compromiso.
            </p>
          </div>
        </form>

        {/* ── Footer mínimo ── */}
        <footer className="mt-16 text-center text-xs text-slate-600">
          <p>
            © {new Date().getFullYear()} AYCweb · Infraestructura Digital B2B Paraguay
          </p>
        </footer>
      </main>
    </div>
  );
}

// ─── Helpers de clases ────────────────────────────────────────────────────────

function fieldCls(hasError: boolean): string {
  return [
    "w-full bg-slate-900/60 border rounded-xl px-4 py-4",
    "text-white placeholder-slate-600 text-base",
    "outline-none transition-all",
    "appearance-none", // para selects en Safari
    hasError
      ? "border-red-500/60 focus:border-red-500 focus:ring-1 focus:ring-red-500/30"
      : "border-slate-700 focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/30",
  ].join(" ");
}

const errorCls =
  "text-red-400 text-xs font-medium flex items-center gap-1 before:content-['⚠'] before:text-red-400";
