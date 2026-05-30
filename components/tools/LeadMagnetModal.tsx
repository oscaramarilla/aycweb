"use client";

/**
 * LeadMagnetModal — Modal de captura de leads para descarga de Matriz PDF
 * ─────────────────────────────────────────────────────────────────────────
 * Pide nombre y email, inserta en leads_magnet y fuerza la descarga del PDF.
 * Bloque try/catch/finally para que la descarga siempre ocurra.
 */

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { supabase } from "@/lib/supabaseClient";

interface LeadMagnetModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const PDF_URL = "/docs/Matriz-Cotizacion.pdf";

export default function LeadMagnetModal({
  open,
  onOpenChange,
}: LeadMagnetModalProps) {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<{ nombre?: string; email?: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [success, setSuccess] = useState(false);

  function resetForm() {
    setNombre("");
    setEmail("");
    setErrors({});
    setSubmitted(false);
    setSuccess(false);
  }

  function handleOpenChange(nextOpen: boolean) {
    if (!nextOpen) resetForm();
    onOpenChange(nextOpen);
  }

  function triggerDownload() {
    const a = document.createElement("a");
    a.href = PDF_URL;
    a.download = "Matriz-Cotizacion-AYCweb.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const errs: typeof errors = {};
    if (!nombre.trim()) errs.nombre = "Ingresá tu nombre.";
    if (!email.trim()) {
      errs.email = "Ingresá tu email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      errs.email = "Ingresá un email válido.";
    }

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setSubmitted(true);

    try {
      await supabase.from("leads_magnet").insert({
        nombre: nombre.trim(),
        email: email.trim(),
        recurso: "Matriz de Cotización PDF",
        created_at: new Date().toISOString(),
      });
    } catch (err) {
      console.error("[leads_magnet] Error capturando lead:", err);
    } finally {
      setSuccess(true);
      triggerDownload();

      setTimeout(() => {
        handleOpenChange(false);
      }, 2500);
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent
        className="bg-slate-900 border border-slate-700 text-white sm:max-w-md"
        showCloseButton={!submitted}
      >
        <DialogHeader>
          <DialogTitle className="text-lg font-black text-white">
            📄 Matriz de Cotización de Alta Conversión
          </DialogTitle>
          <DialogDescription className="text-slate-400 text-sm">
            Completá tus datos y descargá la plantilla al instante. Sin costo.
          </DialogDescription>
        </DialogHeader>

        {success ? (
          <div className="py-6 text-center space-y-3">
            <span className="text-4xl block">✅</span>
            <p className="text-emerald-400 font-bold text-base">
              ¡Descarga iniciada!
            </p>
            <p className="text-slate-500 text-sm">
              Revisá tu carpeta de descargas. Este modal se cerrará
              automáticamente.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="space-y-4 pt-2">
            {/* Nombre */}
            <div className="space-y-1.5">
              <label
                htmlFor="lm-nombre"
                className="block text-sm font-bold text-slate-200"
              >
                Nombre <span className="text-blue-400">*</span>
              </label>
              <input
                id="lm-nombre"
                type="text"
                autoComplete="given-name"
                placeholder="ej. Juan Pérez"
                value={nombre}
                onChange={(e) => {
                  setNombre(e.target.value);
                  if (errors.nombre)
                    setErrors((p) => ({ ...p, nombre: undefined }));
                }}
                className={`w-full bg-slate-950/60 border rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm outline-none transition-all ${
                  errors.nombre
                    ? "border-red-500/60 focus:border-red-500"
                    : "border-slate-700 focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/30"
                }`}
              />
              {errors.nombre && (
                <p className="text-red-400 text-xs font-medium">
                  ⚠ {errors.nombre}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <label
                htmlFor="lm-email"
                className="block text-sm font-bold text-slate-200"
              >
                Email <span className="text-blue-400">*</span>
              </label>
              <input
                id="lm-email"
                type="email"
                autoComplete="email"
                placeholder="ej. juan@empresa.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (errors.email)
                    setErrors((p) => ({ ...p, email: undefined }));
                }}
                className={`w-full bg-slate-950/60 border rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm outline-none transition-all ${
                  errors.email
                    ? "border-red-500/60 focus:border-red-500"
                    : "border-slate-700 focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/30"
                }`}
              />
              {errors.email && (
                <p className="text-red-400 text-xs font-medium">
                  ⚠ {errors.email}
                </p>
              )}
            </div>

            {/* Botón submit */}
            <button
              type="submit"
              disabled={submitted}
              className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 disabled:cursor-not-allowed text-white font-black py-3 px-6 rounded-xl transition-all shadow-[0_0_30px_rgba(37,99,235,0.3)] active:scale-95 text-sm flex items-center justify-center gap-2"
            >
              {submitted ? (
                <>
                  <span className="animate-spin inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full" />
                  Descargando…
                </>
              ) : (
                <>
                  <span>⬇️</span>
                  Descargar Matriz Gratis
                </>
              )}
            </button>

            <p className="text-center text-[11px] text-slate-600">
              Sin compromiso. Solo usamos tu email para enviarte recursos
              relevantes.
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}