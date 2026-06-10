"use client";

/**
 * Diagnóstico Comercial Express — Motor de Scoring B2B
 * ─────────────────────────────────────────────────────
 * Paso 1: Cuestionario de 3 preguntas con puntuación de ineficiencia.
 * Paso 2: Resultado (Nivel Crítico / Moderado / Optimizado) + form de contacto.
 * Sin backend. Al submit construye el mensaje con el score y abre WhatsApp.
 */

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { buildWhatsAppLink } from "@/lib/services/whatsapp-link";

// ─── Cuestionario ─────────────────────────────────────────────────────────────

type PreguntaId = "p1" | "p2" | "p3";

const PREGUNTAS: {
  id: PreguntaId;
  numero: string;
  texto: string;
  opciones: { label: string; score: number }[];
}[] = [
  {
    id: "p1",
    numero: "01",
    texto: "¿Cómo gestionás actualmente tus cotizaciones?",
    opciones: [
      { label: "Excel o proceso manual", score: 3 },
      { label: "Software genérico (Google Sheets, etc.)", score: 1 },
      { label: "Sistema propio o CRM dedicado", score: 0 },
    ],
  },
  {
    id: "p2",
    numero: "02",
    texto: "¿Cuánto tiempo te toma emitir una proforma o presupuesto al cliente?",
    opciones: [
      { label: "Más de 1 hora", score: 3 },
      { label: "15 a 60 minutos", score: 1 },
      { label: "Menos de 5 minutos", score: 0 },
    ],
  },
  {
    id: "p3",
    numero: "03",
    texto: "¿Cómo captás y das seguimiento a los prospectos?",
    opciones: [
      { label: "WhatsApp desordenado / sin sistema", score: 3 },
      { label: "CRM básico con seguimiento manual", score: 1 },
      { label: "Flujo automatizado de captación", score: 0 },
    ],
  },
];

// ─── Niveles de resultado ──────────────────────────────────────────────────────

const NIVELES = {
  critico: {
    label: "Nivel Crítico",
    rango: "7 – 9 pts",
    colorText: "text-rose-400",
    colorBorder: "border-rose-500/40",
    colorBg: "bg-rose-950/25",
    colorBar: "bg-rose-500",
    colorGlow: "shadow-[0_0_40px_rgba(244,63,94,0.15)]",
    descripcion:
      "Tu operación está perdiendo capital por ineficiencia manual. Necesitás infraestructura B2B urgente.",
  },
  moderado: {
    label: "Nivel Moderado",
    rango: "3 – 6 pts",
    colorText: "text-amber-400",
    colorBorder: "border-amber-500/40",
    colorBg: "bg-amber-950/25",
    colorBar: "bg-amber-400",
    colorGlow: "shadow-[0_0_40px_rgba(251,191,36,0.12)]",
    descripcion:
      "Tenés cuellos de botella que limitan tu capacidad de escalar.",
  },
  optimizado: {
    label: "Nivel Optimizado",
    rango: "0 – 2 pts",
    colorText: "text-emerald-400",
    colorBorder: "border-emerald-500/40",
    colorBg: "bg-emerald-950/25",
    colorBar: "bg-emerald-500",
    colorGlow: "shadow-[0_0_40px_rgba(16,185,129,0.12)]",
    descripcion:
      "Tu operación es sólida, podemos enfocarnos en escalabilidad.",
  },
} as const;

type NivelKey = keyof typeof NIVELES;

function resolveNivel(total: number): NivelKey {
  if (total >= 7) return "critico";
  if (total >= 3) return "moderado";
  return "optimizado";
}

// ─── Recomendación comercial ───────────────────────────────────────────────

type Recomendacion = {
  friccion: string;
  plan: string;
  bullets: string[];
};

function resolveRecomendacion(total: number): Recomendacion {
  if (total >= 7) {
    return {
      friccion: "Crítico",
      plan: "Enterprise / Arquitectura a medida",
      bullets: [
        "La operación pierde capital por ineficiencia manual.",
        "Se requiere una transformación digital integral.",
        "Arquitectura B2B modular para escalar sin fricción.",
      ],
    };
  }
  if (total >= 5) {
    return {
      friccion: "Alto",
      plan: "Business (con posible salto a Enterprise)",
      bullets: [
        "La ineficiencia ya limita tu capacidad de escalar.",
        "Business resuelve la mayoría de los cuellos de botella.",
        "Si operás múltiples áreas o alto volumen, evaluamos Enterprise.",
      ],
    };
  }
  if (total >= 3) {
    return {
      friccion: "Medio",
      plan: "Business",
      bullets: [
        "Hay cuellos de botella medios que frenan tu operación.",
        "Business cubre automatización de cotizaciones + CRM + reporting.",
      ],
    };
  }
  return {
    friccion: "Bajo",
    plan: "Starter (sistema liviano)",
    bullets: [
      "Tu operación es ágil; un sistema liviano puede potenciarte.",
      "Starter incluye lo esencial para mantener el ritmo de crecimiento.",
    ],
  };
}

/**
 * Construye el mensaje de WhatsApp con los datos del diagnóstico.
 */
function buildMensajeRecomendacion(
  nombre: string,
  empresa: string,
  friccion: string,
  plan: string,
  score: number
): string {
  const lines: string[] = [];

  if (nombre.trim() && empresa.trim()) {
    lines.push(`Hola Oscar, soy ${nombre.trim()} de ${empresa.trim()}.`);
  } else if (nombre.trim()) {
    lines.push(`Hola Oscar, soy ${nombre.trim()}.`);
  } else {
    lines.push(`Hola Oscar.`);
  }

  lines.push(`Completé el diagnóstico comercial de AYCweb.`);
  lines.push(`Mi nivel de fricción salió: ${friccion} (${score}/9).`);
  lines.push(`La recomendación fue: ${plan}.`);
  lines.push(`Quiero que revises mi caso y me digas cuál sería el siguiente paso.`);

  return lines.join("\n");
}

// ─── Helpers de clases ────────────────────────────────────────────────────────

function fieldCls(hasError: boolean): string {
  return [
    "w-full bg-slate-900/60 border rounded-xl px-4 py-4",
    "text-white placeholder-slate-600 text-base",
    "outline-none transition-all",
    hasError
      ? "border-red-500/60 focus:border-red-500 focus:ring-1 focus:ring-red-500/30"
      : "border-slate-700 focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/30",
  ].join(" ");
}

const errorCls =
  "text-red-400 text-xs font-medium flex items-center gap-1 before:content-['⚠'] before:text-red-400";

// ─── Componente ───────────────────────────────────────────────────────────────

export default function DiagnosticoComercialPage() {
  const params = useParams<{ lang: string }>();
  const lang = params?.lang ?? "es";

  // ── Paso activo
  const [step, setStep] = useState<"quiz" | "result">("quiz");

  // ── Estado del cuestionario
  const [answers, setAnswers] = useState<Record<PreguntaId, number | null>>({
    p1: null,
    p2: null,
    p3: null,
  });
  const [quizError, setQuizError] = useState(false);

  // ── Estado de resultado
  const [score, setScore] = useState(0);
  const [nivel, setNivel] = useState<NivelKey>("critico");

  // ── Estado del formulario de contacto
  const [nombre, setNombre] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [whatsappLocal, setWhatsappLocal] = useState("");
  const [email, setEmail] = useState("");
  const [contactErrors, setContactErrors] = useState<{
    nombre?: string;
    empresa?: string;
    whatsappLocal?: string;
    email?: string;
  }>({});
  const [submitted, setSubmitted] = useState(false);
  const [showResultado, setShowResultado] = useState(false);

  // ── Handlers

  function handleSelectAnswer(preguntaId: PreguntaId, score: number) {
    setAnswers((prev) => ({ ...prev, [preguntaId]: score }));
    if (quizError) setQuizError(false);
  }

  function handleCalcular() {
    if (answers.p1 === null || answers.p2 === null || answers.p3 === null) {
      setQuizError(true);
      return;
    }
    const total = (answers.p1 as number) + (answers.p2 as number) + (answers.p3 as number);
    setScore(total);
    setNivel(resolveNivel(total));
    setStep("result");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleRepetir() {
    setStep("quiz");
    setAnswers({ p1: null, p2: null, p3: null });
    setQuizError(false);
    setNombre("");
    setEmpresa("");
    setWhatsappLocal("");
    setEmail("");
    setContactErrors({});
    setShowResultado(false);
  }

  async function handleSubmitContact(e: React.FormEvent) {
    e.preventDefault();

    const errs: typeof contactErrors = {};
    if (!nombre.trim()) errs.nombre = "Ingresá tu nombre.";
    if (!empresa.trim()) errs.empresa = "Ingresá el nombre de tu empresa.";
    const digits = whatsappLocal.replace(/\D/g, "");
    if (!digits) {
      errs.whatsappLocal = "Ingresá tu número de WhatsApp.";
    } else if (digits.length < 7 || digits.length > 15) {
      errs.whatsappLocal = "Ingresá un número válido (ej: 595 985 123 456 para Paraguay).";
    }

    if (Object.keys(errs).length > 0) {
      setContactErrors(errs);
      return;
    }

    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setContactErrors((p) => ({ ...p, email: "Ingresá un email válido." }));
      return;
    }

    setSubmitted(true);

    const nivelLabel = NIVELES[nivel].label;

    try {
      const res = await fetch("/api/submit-diagnostico", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: nombre.trim(),
          empresa: empresa.trim(),
          whatsapp: `+${digits}`,
          email: email.trim() || null,
          score,
          nivel: nivelLabel,
        }),
      });

      if (!res.ok) {
        console.error("[leads_b2b] Error del servidor:", await res.text());
      }
    } catch (err) {
      console.error("[leads_b2b] Error capturando lead:", err);
    }

    setShowResultado(true);
    setSubmitted(false);
  }

  const allAnswered =
    answers.p1 !== null && answers.p2 !== null && answers.p3 !== null;
  const nivelConfig = NIVELES[nivel];
  const recomendacion = resolveRecomendacion(score);

  // ── Render

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-50 overflow-hidden">
      {/* Noise overlay */}
      <div className="fixed inset-0 bg-[url('/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay z-0" />

      {/* Glow de fondo */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none z-0" />

      {/* ── Header mínimo ── */}
      <header className="relative z-10 px-6 py-5 flex items-center justify-between border-b border-white/[0.06] max-w-5xl mx-auto">
        {step === "quiz" ? (
          <Link
            href={`/${lang}`}
            className="text-slate-400 hover:text-white transition-colors text-sm font-semibold flex items-center gap-2"
          >
            <span className="text-lg">←</span>
            <span className="hidden sm:inline">Volver a AYCweb</span>
            <span className="sm:hidden">Volver</span>
          </Link>
        ) : (
          <button
            type="button"
            onClick={handleRepetir}
            className="text-slate-400 hover:text-white transition-colors text-sm font-semibold flex items-center gap-2"
          >
            <span className="text-lg">←</span>
            Repetir diagnóstico
          </button>
        )}
        <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-blue-400/80">
          AYCweb · Scoring B2B
        </span>
      </header>

      {/* ── Contenido principal ── */}
      <main className="relative z-10 px-6 py-12 md:py-20 max-w-2xl mx-auto">

        {/* ══════════════════════════════════════════════════════════ */}
        {/* PASO 1 — Cuestionario                                     */}
        {/* ══════════════════════════════════════════════════════════ */}
        {step === "quiz" && (
          <>
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/50 border border-blue-500/20 text-blue-300 text-[11px] font-bold uppercase tracking-[0.2em] mb-5">
                <span>⚡</span>
                3 preguntas · 2 minutos
              </span>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight tracking-tighter text-white mb-4">
                Diagnóstico de{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                  Fricción Comercial
                </span>
              </h1>

              <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-xl mx-auto">
                Respondé 3 preguntas sobre tu operación. Calculamos tu nivel de fricción y te decimos qué infraestructura necesitás.
              </p>
            </div>

            <div className="space-y-5">
              {PREGUNTAS.map((pregunta) => (
                <div
                  key={pregunta.id}
                  className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6"
                >
                  <div className="flex items-start gap-3 mb-4">
                    <span className="text-[11px] font-black text-blue-400/60 uppercase tracking-widest mt-[3px] shrink-0">
                      {pregunta.numero}
                    </span>
                    <p className="text-white font-bold text-base leading-snug">
                      {pregunta.texto}
                    </p>
                  </div>

                  <div className="space-y-2.5">
                    {pregunta.opciones.map((opcion) => {
                      const selected = answers[pregunta.id] === opcion.score;
                      return (
                        <button
                          key={opcion.label}
                          type="button"
                          onClick={() =>
                            handleSelectAnswer(pregunta.id, opcion.score)
                          }
                          className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl border text-left transition-all text-sm font-medium ${
                            selected
                              ? "bg-blue-600/20 border-blue-500 text-blue-200"
                              : "bg-slate-950/60 border-slate-700 text-slate-400 hover:border-slate-500 hover:text-slate-200 hover:bg-slate-900/80"
                          }`}
                        >
                          <span
                            className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 ${
                              selected ? "border-blue-400" : "border-slate-600"
                            }`}
                          >
                            {selected && (
                              <span className="w-2 h-2 rounded-full bg-blue-400 block" />
                            )}
                          </span>
                          {opcion.label}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {quizError && (
              <p className="mt-5 text-red-400 text-sm font-medium text-center flex items-center justify-center gap-1.5">
                <span>⚠</span>
                Respondé las 3 preguntas para calcular tu nivel.
              </p>
            )}

            <div className="mt-8">
              <button
                type="button"
                onClick={handleCalcular}
                className={`w-full font-black py-4 px-8 rounded-xl transition-all text-base flex items-center justify-center gap-3 ${
                  allAnswered
                    ? "bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_40px_rgba(37,99,235,0.35)] active:scale-95"
                    : "bg-slate-800 text-slate-500 cursor-not-allowed"
                }`}
              >
                <span>📊</span>
                Calcular Nivel de Fricción
              </button>
              <p className="text-center text-xs text-slate-500 mt-3">
                Sin costo ni compromiso. Resultado inmediato.
              </p>
            </div>
          </>
        )}

        {/* ══════════════════════════════════════════════════════════ */}
        {/* PASO 2 — Resultado + Formulario de contacto               */}
        {/* ══════════════════════════════════════════════════════════ */}
        {step === "result" && (
          <>
            {/* Encabezado de resultado */}
            <div className="text-center mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/60 border border-slate-700 text-slate-300 text-[11px] font-bold uppercase tracking-[0.2em] mb-5">
                Resultado del diagnóstico
              </span>

              <h1 className="text-3xl sm:text-4xl font-black leading-tight tracking-tighter text-white mb-3">
                Tu{" "}
                <span className={nivelConfig.colorText}>
                  {nivelConfig.label}
                </span>
              </h1>

              <p className="text-slate-400 text-base leading-relaxed max-w-xl mx-auto">
                {nivelConfig.descripcion}
              </p>
            </div>

            {/* Tarjeta de score */}
            <div
              className={`rounded-2xl border ${nivelConfig.colorBorder} ${nivelConfig.colorBg} ${nivelConfig.colorGlow} p-6 mb-8`}
            >
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`text-xs font-bold ${nivelConfig.colorText} uppercase tracking-widest`}
                >
                  Índice de fricción operativa
                </span>
                <span className={`text-3xl font-black ${nivelConfig.colorText}`}>
                  {score}
                  <span className="text-slate-500 text-lg font-normal">/9</span>
                </span>
              </div>

              {/* Barra de progreso */}
              <div className="h-2.5 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-700 ${nivelConfig.colorBar}`}
                  style={{ width: `${(score / 9) * 100}%` }}
                />
              </div>

              <div className="flex justify-between mt-2 text-[10px] text-slate-600 font-bold uppercase tracking-wider">
                <span>Optimizado</span>
                <span>Moderado</span>
                <span>Crítico</span>
              </div>

              {/* Referencia de rangos */}
              <div className="mt-5 pt-4 border-t border-white/[0.05] grid grid-cols-3 gap-2 text-center">
                {(Object.keys(NIVELES) as NivelKey[]).map((key) => {
                  const cfg = NIVELES[key];
                  return (
                    <div
                      key={key}
                      className={`rounded-lg px-2 py-2 transition-all ${
                        key === nivel
                          ? `${cfg.colorBg} border ${cfg.colorBorder}`
                          : "opacity-30"
                      }`}
                    >
                      <p className={`font-bold text-[11px] ${cfg.colorText}`}>
                        {cfg.label}
                      </p>
                      <p className="text-slate-500 text-[10px] mt-0.5">
                        {cfg.rango}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Formulario de contacto / Éxito con CTA a onboarding */}
            {showResultado ? (
              <div className="rounded-2xl border border-emerald-500/40 bg-emerald-950/25 p-8 text-center shadow-[0_0_40px_rgba(16,185,129,0.12)]">
                <span className="text-5xl mb-4 block">✅</span>
                <h2 className="text-2xl font-black text-white mb-2">
                  Diagnóstico completo
                </h2>
                <p className="text-emerald-300 text-sm font-semibold mb-6">
                  {recomendacion.friccion === "Crítico" || recomendacion.friccion === "Alto"
                    ? "Tenemos una oportunidad clara de mejora para tu operación."
                    : "Tu operación está en buen camino, podemos potenciarla."}
                </p>

                {/* Score + Recomendación */}
                <div className="bg-slate-900/60 border border-slate-700 rounded-xl p-5 mb-6 text-left space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 text-sm">Nivel de fricción comercial</span>
                    <span className="text-xl font-black text-white">{recomendacion.friccion}</span>
                  </div>
                  <div className="h-px bg-slate-700/50" />
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 text-sm">Recomendación AYCweb</span>
                    <span className="text-base font-black text-blue-400">{recomendacion.plan}</span>
                  </div>
                  <div className="h-px bg-slate-700/50" />
                  <div className="pt-1">
                    <span className="text-slate-400 text-sm block mb-2">¿Por qué?</span>
                    <ul className="space-y-1.5">
                      {recomendacion.bullets.map((b, i) => (
                        <li key={i} className="text-slate-300 text-sm flex items-start gap-2">
                          <span className="text-emerald-400 mt-0.5 shrink-0">•</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA principal: WhatsApp */}
                <a
                  href={buildWhatsAppLink(
                    buildMensajeRecomendacion(
                      nombre,
                      empresa,
                      recomendacion.friccion,
                      recomendacion.plan,
                      score
                    )
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-black py-4 px-8 rounded-xl transition-all shadow-[0_0_40px_rgba(37,99,235,0.35)] active:scale-95 text-base mb-4"
                >
                  <span>💬</span>
                  Enviar diagnóstico por WhatsApp
                </a>

                {/* CTA secundario: Demo cotizador */}
                <div>
                  <Link
                    href={`/${lang}/demo-cotizador`}
                    className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-semibold underline underline-offset-2"
                  >
                    🔍 Ver demo cotizador
                  </Link>
                </div>
              </div>
            ) : (
              <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
                <h2 className="text-lg font-black text-white mb-1">
                  Agendá tu diagnóstico con Oscar
                </h2>
                <p className="text-slate-400 text-sm mb-6">
                  En 15 minutos evaluamos si hay encaje real. Sin compromiso.
                </p>

                <form
                  onSubmit={handleSubmitContact}
                  noValidate
                  className="space-y-4"
                >
                  {/* Nombre */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="nombre"
                      className="block text-sm font-bold text-slate-200"
                    >
                      Nombre <span className="text-blue-400">*</span>
                    </label>
                    <input
                      id="nombre"
                      type="text"
                      autoComplete="given-name"
                      placeholder="ej. Juan Pérez"
                      value={nombre}
                      onChange={(e) => {
                        setNombre(e.target.value);
                        if (contactErrors.nombre)
                          setContactErrors((p) => ({ ...p, nombre: undefined }));
                      }}
                      className={fieldCls(!!contactErrors.nombre)}
                    />
                    {contactErrors.nombre && (
                      <p className={errorCls}>{contactErrors.nombre}</p>
                    )}
                  </div>

                  {/* Empresa */}
                  <div className="space-y-1.5">
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
                      value={empresa}
                      onChange={(e) => {
                        setEmpresa(e.target.value);
                        if (contactErrors.empresa)
                          setContactErrors((p) => ({
                            ...p,
                            empresa: undefined,
                          }));
                      }}
                      className={fieldCls(!!contactErrors.empresa)}
                    />
                    {contactErrors.empresa && (
                      <p className={errorCls}>{contactErrors.empresa}</p>
                    )}
                  </div>

                  {/* WhatsApp */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="whatsappLocal"
                      className="block text-sm font-bold text-slate-200"
                    >
                      WhatsApp <span className="text-blue-400">*</span>
                    </label>
                    <p className="text-xs text-slate-500">
                      Con código de país · ej: 595 985 123 456
                    </p>
                    <div className="flex items-center rounded-xl border border-slate-700 bg-slate-900/60 overflow-hidden focus-within:border-blue-500/60 focus-within:ring-1 focus-within:ring-blue-500/30 transition-all">
                      <span className="px-4 py-4 text-slate-400 font-mono text-base font-semibold bg-slate-800/60 border-r border-slate-700 shrink-0 select-none">
                        +
                      </span>
                      <input
                        id="whatsappLocal"
                        type="tel"
                        inputMode="numeric"
                        placeholder="595 985 864 209"
                        autoComplete="tel"
                        value={whatsappLocal}
                        onChange={(e) => {
                          const val = e.target.value
                            .replace(/[^\d\s]/g, "")
                            .slice(0, 20);
                          setWhatsappLocal(val);
                          if (contactErrors.whatsappLocal)
                            setContactErrors((p) => ({
                              ...p,
                              whatsappLocal: undefined,
                            }));
                        }}
                        className="flex-1 bg-transparent px-4 py-4 text-white placeholder-slate-600 text-base font-mono outline-none"
                      />
                    </div>
                    <p
                      className={`text-[11px] ${
                        whatsappLocal.replace(/\D/g, "").length >= 7
                          ? "text-emerald-400"
                          : "text-slate-600"
                      }`}
                    >
                      {whatsappLocal.replace(/\D/g, "").length > 0
                        ? `${whatsappLocal.replace(/\D/g, "").length} dígitos`
                        : "Incluí el código de país (595 para Paraguay)"}
                    </p>
                    {contactErrors.whatsappLocal && (
                      <p className={errorCls}>{contactErrors.whatsappLocal}</p>
                    )}
                  </div>

                  {/* Email (opcional) */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="email"
                      className="block text-sm font-bold text-slate-200"
                    >
                      Email{" "}
                      <span className="text-slate-500 font-normal">(opcional — para recibir tu análisis por escrito)</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      autoComplete="email"
                      placeholder="ej. juan@empresa.com"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (contactErrors.email)
                          setContactErrors((p) => ({ ...p, email: undefined }));
                      }}
                      className={fieldCls(!!contactErrors.email)}
                    />
                    {contactErrors.email && (
                      <p className={errorCls}>{contactErrors.email}</p>
                    )}
                  </div>

                  {/* Botón submit */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={submitted}
                      className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 disabled:cursor-not-allowed text-white font-black py-4 px-8 rounded-xl transition-all shadow-[0_0_40px_rgba(37,99,235,0.35)] active:scale-95 text-base flex items-center justify-center gap-3"
                    >
                      {submitted ? (
                        <>
                          <span className="animate-spin inline-block w-5 h-5 border-2 border-white/30 border-t-white rounded-full" />
                          Enviando…
                        </>
                      ) : (
                        <>
                          <span>💬</span>
                          Enviar resultado y agendar diagnóstico
                        </>
                      )}
                    </button>
                    <p className="text-center text-xs text-slate-500 mt-3">
                      Tu información será registrada. Sin compromiso.
                    </p>
                  </div>
                </form>
              </div>
            )}

            {/* Link para repetir */}
            <div className="mt-6 text-center">
              <button
                type="button"
                onClick={handleRepetir}
                className="text-slate-500 hover:text-slate-300 text-sm transition-colors underline underline-offset-2"
              >
                ← Repetir el diagnóstico
              </button>
            </div>
          </>
        )}

        {/* ── Footer mínimo ── */}
        <footer className="mt-16 text-center text-xs text-slate-600">
          <p>
            © {new Date().getFullYear()} AYCweb · Infraestructura Digital B2B
            Paraguay
          </p>
        </footer>
      </main>
    </div>
  );
}
