"use client";

/**
 * Diagnóstico Comercial Express — Motor de Scoring B2B (componente client)
 * ─────────────────────────────────────────────────────
 * Recibe el diccionario del idioma y el lang por props desde el wrapper server.
 * Paso 1: Cuestionario de 3 preguntas con puntuación de ineficiencia.
 * Paso 2: Resultado (Crítico / Moderado / Optimizado) + form de contacto.
 * Al submit registra el lead y construye el mensaje de WhatsApp para Oscar.
 */

import { useState } from "react";
import Link from "next/link";
import { buildWhatsAppLink } from "@/lib/services/whatsapp-link";

type Dict = Record<string, string>;
type PreguntaId = "p1" | "p2" | "p3";

// Estructura del cuestionario: textos por clave de diccionario; scores fijos.
const PREGUNTAS: { id: PreguntaId; numero: string; qKey: string; opciones: { oKey: string; score: number }[] }[] = [
  { id: "p1", numero: "01", qKey: "diag.q1", opciones: [
    { oKey: "diag.q1o1", score: 3 }, { oKey: "diag.q1o2", score: 1 }, { oKey: "diag.q1o3", score: 0 },
  ] },
  { id: "p2", numero: "02", qKey: "diag.q2", opciones: [
    { oKey: "diag.q2o1", score: 3 }, { oKey: "diag.q2o2", score: 1 }, { oKey: "diag.q2o3", score: 0 },
  ] },
  { id: "p3", numero: "03", qKey: "diag.q3", opciones: [
    { oKey: "diag.q3o1", score: 3 }, { oKey: "diag.q3o2", score: 1 }, { oKey: "diag.q3o3", score: 0 },
  ] },
];

// Niveles: clave estable + estilos; textos desde diccionario.
const NIVELES = {
  critico: {
    labelKey: "diag.nivelCriticoLabel", rangoKey: "diag.nivelCriticoRango", descKey: "diag.nivelCriticoDesc",
    colorText: "text-rose-400", colorBorder: "border-rose-500/40", colorBg: "bg-rose-950/25",
    colorBar: "bg-rose-500", colorGlow: "shadow-[0_0_40px_rgba(244,63,94,0.15)]",
  },
  moderado: {
    labelKey: "diag.nivelModeradoLabel", rangoKey: "diag.nivelModeradoRango", descKey: "diag.nivelModeradoDesc",
    colorText: "text-amber-400", colorBorder: "border-amber-500/40", colorBg: "bg-amber-950/25",
    colorBar: "bg-amber-400", colorGlow: "shadow-[0_0_40px_rgba(251,191,36,0.12)]",
  },
  optimizado: {
    labelKey: "diag.nivelOptimizadoLabel", rangoKey: "diag.nivelOptimizadoRango", descKey: "diag.nivelOptimizadoDesc",
    colorText: "text-emerald-400", colorBorder: "border-emerald-500/40", colorBg: "bg-emerald-950/25",
    colorBar: "bg-emerald-500", colorGlow: "shadow-[0_0_40px_rgba(16,185,129,0.12)]",
  },
} as const;

type NivelKey = keyof typeof NIVELES;

function resolveNivel(total: number): NivelKey {
  if (total >= 7) return "critico";
  if (total >= 3) return "moderado";
  return "optimizado";
}

// Recomendación: key estable de fricción (para la lógica) + claves de texto.
type FriccionKey = "critico" | "alto" | "medio" | "bajo";
type Recomendacion = { friccionKey: FriccionKey; friccionLabelKey: string; planKey: string; bulletKeys: string[] };

function resolveRecomendacion(total: number): Recomendacion {
  if (total >= 7) {
    return { friccionKey: "critico", friccionLabelKey: "diag.friccionCriticoLabel", planKey: "diag.recCriticoPlan",
      bulletKeys: ["diag.recCriticoB1", "diag.recCriticoB2", "diag.recCriticoB3"] };
  }
  if (total >= 5) {
    return { friccionKey: "alto", friccionLabelKey: "diag.friccionAltoLabel", planKey: "diag.recAltoPlan",
      bulletKeys: ["diag.recAltoB1", "diag.recAltoB2", "diag.recAltoB3"] };
  }
  if (total >= 3) {
    return { friccionKey: "medio", friccionLabelKey: "diag.friccionMedioLabel", planKey: "diag.recMedioPlan",
      bulletKeys: ["diag.recMedioB1", "diag.recMedioB2"] };
  }
  return { friccionKey: "bajo", friccionLabelKey: "diag.friccionBajoLabel", planKey: "diag.recBajoPlan",
    bulletKeys: ["diag.recBajoB1", "diag.recBajoB2"] };
}

/**
 * Mensaje de WhatsApp para Oscar — siempre en español (es quien lo recibe y opera),
 * consistente con el resto de funnels. friccionLabel/plan en español vía el dict ES no
 * está disponible aquí; usamos labels neutros por friccionKey.
 */
const FRICCION_ES: Record<FriccionKey, string> = {
  critico: "Crítico", alto: "Alto", medio: "Medio", bajo: "Bajo",
};
const PLAN_ES: Record<FriccionKey, string> = {
  critico: "Enterprise / Arquitectura a medida",
  alto: "Business (con posible salto a Enterprise)",
  medio: "Business",
  bajo: "Starter (sistema liviano)",
};

function buildMensajeRecomendacion(nombre: string, empresa: string, friccionKey: FriccionKey, score: number): string {
  const lines: string[] = [];
  if (nombre.trim() && empresa.trim()) lines.push(`Hola Oscar, soy ${nombre.trim()} de ${empresa.trim()}.`);
  else if (nombre.trim()) lines.push(`Hola Oscar, soy ${nombre.trim()}.`);
  else lines.push(`Hola Oscar.`);
  lines.push(`Completé el diagnóstico comercial de AYCweb.`);
  lines.push(`Mi nivel de fricción salió: ${FRICCION_ES[friccionKey]} (${score}/9).`);
  lines.push(`La recomendación fue: ${PLAN_ES[friccionKey]}.`);
  lines.push(`Quiero que revises mi caso y me digas cuál sería el siguiente paso.`);
  return lines.join("\n");
}

function fieldCls(hasError: boolean): string {
  return [
    "w-full bg-slate-900/60 border rounded-xl px-4 py-4",
    "text-white placeholder-slate-600 text-base outline-none transition-all",
    hasError
      ? "border-red-500/60 focus:border-red-500 focus:ring-1 focus:ring-red-500/30"
      : "border-slate-700 focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/30",
  ].join(" ");
}

const errorCls =
  "text-red-400 text-xs font-medium flex items-center gap-1 before:content-['⚠'] before:text-red-400";

export default function DiagnosticoClient({ dict, lang }: { dict: Dict; lang: string }) {
  const t = (k: string) => dict[k] ?? k;

  const [step, setStep] = useState<"quiz" | "result">("quiz");
  const [answers, setAnswers] = useState<Record<PreguntaId, number | null>>({ p1: null, p2: null, p3: null });
  const [quizError, setQuizError] = useState(false);
  const [score, setScore] = useState(0);
  const [nivel, setNivel] = useState<NivelKey>("critico");
  const [nombre, setNombre] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [whatsappLocal, setWhatsappLocal] = useState("");
  const [email, setEmail] = useState("");
  const [contactErrors, setContactErrors] = useState<{ nombre?: string; empresa?: string; whatsappLocal?: string; email?: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [showResultado, setShowResultado] = useState(false);

  function handleSelectAnswer(preguntaId: PreguntaId, s: number) {
    setAnswers((prev) => ({ ...prev, [preguntaId]: s }));
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
    setNombre(""); setEmpresa(""); setWhatsappLocal(""); setEmail("");
    setContactErrors({});
    setShowResultado(false);
  }

  async function handleSubmitContact(e: React.FormEvent) {
    e.preventDefault();
    const errs: typeof contactErrors = {};
    if (!nombre.trim()) errs.nombre = t("diag.errName");
    if (!empresa.trim()) errs.empresa = t("diag.errCompany");
    const digits = whatsappLocal.replace(/\D/g, "");
    if (!digits) errs.whatsappLocal = t("diag.errWhatsappEmpty");
    else if (digits.length < 7 || digits.length > 15) errs.whatsappLocal = t("diag.errWhatsappInvalid");

    if (Object.keys(errs).length > 0) { setContactErrors(errs); return; }
    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setContactErrors((p) => ({ ...p, email: t("diag.errEmail") }));
      return;
    }

    setSubmitted(true);
    const recomendacion = resolveRecomendacion(score);
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
          nivel: FRICCION_ES[recomendacion.friccionKey],
          locale: lang,
        }),
      });
      if (!res.ok) console.error("[leads_b2b] Error del servidor:", await res.text());
    } catch (err) {
      console.error("[leads_b2b] Error capturando lead:", err);
    }
    setShowResultado(true);
    setSubmitted(false);
  }

  const allAnswered = answers.p1 !== null && answers.p2 !== null && answers.p3 !== null;
  const nivelConfig = NIVELES[nivel];
  const recomendacion = resolveRecomendacion(score);
  const isHighFriction = recomendacion.friccionKey === "critico" || recomendacion.friccionKey === "alto";

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-50 overflow-hidden">
      <div className="fixed inset-0 bg-[url('/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay z-0" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none z-0" />

      {/* Header mínimo */}
      <header className="relative z-10 px-6 py-5 flex items-center justify-between border-b border-white/[0.06] max-w-5xl mx-auto">
        {step === "quiz" ? (
          <Link href={`/${lang}`} className="text-slate-400 hover:text-white transition-colors text-sm font-semibold flex items-center gap-2">
            <span className="text-lg">←</span>
            <span className="hidden sm:inline">{t("diag.backFull")}</span>
            <span className="sm:hidden">{t("diag.backShort")}</span>
          </Link>
        ) : (
          <button type="button" onClick={handleRepetir} className="text-slate-400 hover:text-white transition-colors text-sm font-semibold flex items-center gap-2">
            <span className="text-lg">←</span>
            {t("diag.repeat")}
          </button>
        )}
        <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-blue-400/80">{t("diag.scoringTag")}</span>
      </header>

      <main className="relative z-10 px-6 py-12 md:py-20 max-w-2xl mx-auto">

        {/* PASO 1 — Cuestionario */}
        {step === "quiz" && (
          <>
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/50 border border-blue-500/20 text-blue-300 text-[11px] font-bold uppercase tracking-[0.2em] mb-5">
                <span>⚡</span>
                {t("diag.quizBadge")}
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight tracking-tighter text-white mb-4">
                {t("diag.quizH1a")}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">{t("diag.quizH1b")}</span>
              </h1>
              <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-xl mx-auto">{t("diag.quizSub")}</p>
            </div>

            <div className="space-y-5">
              {PREGUNTAS.map((pregunta) => (
                <div key={pregunta.id} className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <span className="text-[11px] font-black text-blue-400/60 uppercase tracking-widest mt-[3px] shrink-0">{pregunta.numero}</span>
                    <p className="text-white font-bold text-base leading-snug">{t(pregunta.qKey)}</p>
                  </div>
                  <div className="space-y-2.5">
                    {pregunta.opciones.map((opcion) => {
                      const selected = answers[pregunta.id] === opcion.score;
                      return (
                        <button
                          key={opcion.oKey}
                          type="button"
                          onClick={() => handleSelectAnswer(pregunta.id, opcion.score)}
                          className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl border text-left transition-all text-sm font-medium ${
                            selected ? "bg-blue-600/20 border-blue-500 text-blue-200" : "bg-slate-950/60 border-slate-700 text-slate-400 hover:border-slate-500 hover:text-slate-200 hover:bg-slate-900/80"
                          }`}
                        >
                          <span className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 ${selected ? "border-blue-400" : "border-slate-600"}`}>
                            {selected && <span className="w-2 h-2 rounded-full bg-blue-400 block" />}
                          </span>
                          {t(opcion.oKey)}
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
                {t("diag.quizError")}
              </p>
            )}

            <div className="mt-8">
              <button
                type="button"
                onClick={handleCalcular}
                className={`w-full font-black py-4 px-8 rounded-xl transition-all text-base flex items-center justify-center gap-3 ${
                  allAnswered ? "bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_40px_rgba(37,99,235,0.35)] active:scale-95" : "bg-slate-800 text-slate-500 cursor-not-allowed"
                }`}
              >
                <span>📊</span>
                {t("diag.calcButton")}
              </button>
              <p className="text-center text-xs text-slate-500 mt-3">{t("diag.calcNote")}</p>
            </div>
          </>
        )}

        {/* PASO 2 — Resultado + Formulario */}
        {step === "result" && (
          <>
            <div className="text-center mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/60 border border-slate-700 text-slate-300 text-[11px] font-bold uppercase tracking-[0.2em] mb-5">
                {t("diag.resultBadge")}
              </span>
              <h1 className="text-3xl sm:text-4xl font-black leading-tight tracking-tighter text-white mb-3">
                {t("diag.resultYour")}{" "}
                <span className={nivelConfig.colorText}>{t(nivelConfig.labelKey)}</span>
              </h1>
              <p className="text-slate-400 text-base leading-relaxed max-w-xl mx-auto">{t(nivelConfig.descKey)}</p>
            </div>

            <div className={`rounded-2xl border ${nivelConfig.colorBorder} ${nivelConfig.colorBg} ${nivelConfig.colorGlow} p-6 mb-8`}>
              <div className="flex items-center justify-between mb-4">
                <span className={`text-xs font-bold ${nivelConfig.colorText} uppercase tracking-widest`}>{t("diag.indexLabel")}</span>
                <span className={`text-3xl font-black ${nivelConfig.colorText}`}>{score}<span className="text-slate-500 text-lg font-normal">/9</span></span>
              </div>
              <div className="h-2.5 bg-slate-800 rounded-full overflow-hidden">
                <div className={`h-full rounded-full transition-all duration-700 ${nivelConfig.colorBar}`} style={{ width: `${(score / 9) * 100}%` }} />
              </div>
              <div className="flex justify-between mt-2 text-[10px] text-slate-600 font-bold uppercase tracking-wider">
                <span>{t("diag.scaleOpt")}</span>
                <span>{t("diag.scaleMod")}</span>
                <span>{t("diag.scaleCrit")}</span>
              </div>
              <div className="mt-5 pt-4 border-t border-white/[0.05] grid grid-cols-3 gap-2 text-center">
                {(Object.keys(NIVELES) as NivelKey[]).map((key) => {
                  const cfg = NIVELES[key];
                  return (
                    <div key={key} className={`rounded-lg px-2 py-2 transition-all ${key === nivel ? `${cfg.colorBg} border ${cfg.colorBorder}` : "opacity-30"}`}>
                      <p className={`font-bold text-[11px] ${cfg.colorText}`}>{t(cfg.labelKey)}</p>
                      <p className="text-slate-500 text-[10px] mt-0.5">{t(cfg.rangoKey)}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {showResultado ? (
              <div className="rounded-2xl border border-emerald-500/40 bg-emerald-950/25 p-8 text-center shadow-[0_0_40px_rgba(16,185,129,0.12)]">
                <span className="text-5xl mb-4 block">✅</span>
                <h2 className="text-2xl font-black text-white mb-2">{t("diag.successTitle")}</h2>
                <p className="text-emerald-300 text-sm font-semibold mb-6">{isHighFriction ? t("diag.successHigh") : t("diag.successLow")}</p>

                <div className="bg-slate-900/60 border border-slate-700 rounded-xl p-5 mb-6 text-left space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 text-sm">{t("diag.frictionLevelLabel")}</span>
                    <span className="text-xl font-black text-white">{t(recomendacion.friccionLabelKey)}</span>
                  </div>
                  <div className="h-px bg-slate-700/50" />
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 text-sm">{t("diag.recLabel")}</span>
                    <span className="text-base font-black text-blue-400">{t(recomendacion.planKey)}</span>
                  </div>
                  <div className="h-px bg-slate-700/50" />
                  <div className="pt-1">
                    <span className="text-slate-400 text-sm block mb-2">{t("diag.whyLabel")}</span>
                    <ul className="space-y-1.5">
                      {recomendacion.bulletKeys.map((bk) => (
                        <li key={bk} className="text-slate-300 text-sm flex items-start gap-2">
                          <span className="text-emerald-400 mt-0.5 shrink-0">•</span>
                          {t(bk)}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <a
                  href={buildWhatsAppLink(buildMensajeRecomendacion(nombre, empresa, recomendacion.friccionKey, score))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-black py-4 px-8 rounded-xl transition-all shadow-[0_0_40px_rgba(37,99,235,0.35)] active:scale-95 text-base mb-4"
                >
                  <span>💬</span>
                  {t("diag.sendWhatsapp")}
                </a>

                <div>
                  <Link href={`/${lang}/demo-cotizador`} className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-semibold underline underline-offset-2">
                    🔍 {t("diag.seeDemoLink")}
                  </Link>
                </div>
              </div>
            ) : (
              <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
                <h2 className="text-lg font-black text-white mb-1">{t("diag.formTitle")}</h2>
                <p className="text-slate-400 text-sm mb-6">{t("diag.formSub")}</p>

                <form onSubmit={handleSubmitContact} noValidate className="space-y-4">
                  <div className="space-y-1.5">
                    <label htmlFor="nombre" className="block text-sm font-bold text-slate-200">
                      {t("diag.fieldName")} <span className="text-blue-400">*</span>
                    </label>
                    <input id="nombre" type="text" autoComplete="given-name" placeholder={t("diag.fieldNamePh")} value={nombre}
                      onChange={(e) => { setNombre(e.target.value); if (contactErrors.nombre) setContactErrors((p) => ({ ...p, nombre: undefined })); }}
                      className={fieldCls(!!contactErrors.nombre)} />
                    {contactErrors.nombre && <p className={errorCls}>{contactErrors.nombre}</p>}
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="empresa" className="block text-sm font-bold text-slate-200">
                      {t("diag.fieldCompany")} <span className="text-blue-400">*</span>
                    </label>
                    <input id="empresa" type="text" autoComplete="organization" placeholder={t("diag.fieldCompanyPh")} value={empresa}
                      onChange={(e) => { setEmpresa(e.target.value); if (contactErrors.empresa) setContactErrors((p) => ({ ...p, empresa: undefined })); }}
                      className={fieldCls(!!contactErrors.empresa)} />
                    {contactErrors.empresa && <p className={errorCls}>{contactErrors.empresa}</p>}
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="whatsappLocal" className="block text-sm font-bold text-slate-200">
                      {t("diag.fieldWhatsapp")} <span className="text-blue-400">*</span>
                    </label>
                    <p className="text-xs text-slate-500">{t("diag.fieldWhatsappHint")}</p>
                    <div className="flex items-center rounded-xl border border-slate-700 bg-slate-900/60 overflow-hidden focus-within:border-blue-500/60 focus-within:ring-1 focus-within:ring-blue-500/30 transition-all">
                      <span className="px-4 py-4 text-slate-400 font-mono text-base font-semibold bg-slate-800/60 border-r border-slate-700 shrink-0 select-none">+</span>
                      <input id="whatsappLocal" type="tel" inputMode="numeric" placeholder="595 985 864 209" autoComplete="tel" value={whatsappLocal}
                        onChange={(e) => { const val = e.target.value.replace(/[^\d\s]/g, "").slice(0, 20); setWhatsappLocal(val); if (contactErrors.whatsappLocal) setContactErrors((p) => ({ ...p, whatsappLocal: undefined })); }}
                        className="flex-1 bg-transparent px-4 py-4 text-white placeholder-slate-600 text-base font-mono outline-none" />
                    </div>
                    <p className={`text-[11px] ${whatsappLocal.replace(/\D/g, "").length >= 7 ? "text-emerald-400" : "text-slate-600"}`}>
                      {whatsappLocal.replace(/\D/g, "").length > 0 ? t("diag.digitsCount").replace("{n}", String(whatsappLocal.replace(/\D/g, "").length)) : t("diag.digitsHint")}
                    </p>
                    {contactErrors.whatsappLocal && <p className={errorCls}>{contactErrors.whatsappLocal}</p>}
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="block text-sm font-bold text-slate-200">
                      {t("diag.fieldEmail")} <span className="text-slate-500 font-normal">{t("diag.fieldEmailOpt")}</span>
                    </label>
                    <input id="email" type="email" autoComplete="email" placeholder={t("diag.fieldEmailPh")} value={email}
                      onChange={(e) => { setEmail(e.target.value); if (contactErrors.email) setContactErrors((p) => ({ ...p, email: undefined })); }}
                      className={fieldCls(!!contactErrors.email)} />
                    {contactErrors.email && <p className={errorCls}>{contactErrors.email}</p>}
                  </div>

                  <div className="pt-2">
                    <button type="submit" disabled={submitted}
                      className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 disabled:cursor-not-allowed text-white font-black py-4 px-8 rounded-xl transition-all shadow-[0_0_40px_rgba(37,99,235,0.35)] active:scale-95 text-base flex items-center justify-center gap-3">
                      {submitted ? (
                        <>
                          <span className="animate-spin inline-block w-5 h-5 border-2 border-white/30 border-t-white rounded-full" />
                          {t("diag.submitting")}
                        </>
                      ) : (
                        <>
                          <span>💬</span>
                          {t("diag.submit")}
                        </>
                      )}
                    </button>
                    <p className="text-center text-xs text-slate-500 mt-3">{t("diag.submitNote")}</p>
                  </div>
                </form>
              </div>
            )}

            <div className="mt-6 text-center">
              <button type="button" onClick={handleRepetir} className="text-slate-500 hover:text-slate-300 text-sm transition-colors underline underline-offset-2">
                ← {t("diag.repeatLink")}
              </button>
            </div>
          </>
        )}

        <footer className="mt-16 text-center text-xs text-slate-600">
          <p>© {new Date().getFullYear()} AYCweb · Infraestructura Digital B2B Paraguay</p>
        </footer>
      </main>
    </div>
  );
}
