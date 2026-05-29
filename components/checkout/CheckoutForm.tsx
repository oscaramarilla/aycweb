"use client";

/**
 * CheckoutForm – Checkout directo via USDT TRC20
 * Permite al cliente pagar sin intervención humana previa.
 *
 * Uso:
 *   <CheckoutForm planes={[...]} colorScheme="emerald" />
 *
 * ⚠️  Cambiá WALLET_USDT_TRC20 por la dirección real de la wallet antes de producción.
 */

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { buildWhatsAppLink } from "@/lib/services/whatsapp-link";

// ─────────────────────────────────────────────────────────────
// CONFIGURACIÓN – EDITAR ANTES DE PRODUCCIÓN
// ─────────────────────────────────────────────────────────────
const WALLET_USDT_TRC20 = "TLUzuQDLjVwp4UDFAEFuypw5LmFf1K1PRQ";
// ─────────────────────────────────────────────────────────────

export type PlanOption = {
  nombre: string;
  precio: string;
};

type ColorScheme = "emerald" | "blue";

export interface CheckoutFormProps {
  /** Lista de planes disponibles para el dropdown */
  planes: PlanOption[];
  /** Paleta de colores según la página (Profesionales = emerald, Empresas = blue) */
  colorScheme?: ColorScheme;
  /** Texto del botón trigger */
  triggerLabel?: string;
  /** Si true, el botón trigger ocupa el ancho completo del contenedor */
  fullWidth?: boolean;
}

// ─────────────────────────────────────────────────────────────
// ESTILOS DINÁMICOS POR PALETA
// ─────────────────────────────────────────────────────────────
const palette: Record<
  ColorScheme,
  {
    glow: string;
    border: string;
    borderHover: string;
    bg: string;
    badge: string;
    badgeBorder: string;
    badgeText: string;
    check: string;
    checkBg: string;
    btn: string;
    btnShadow: string;
    btnWa: string;
    btnWaShadow: string;
    triggerBorder: string;
    triggerText: string;
    triggerBg: string;
    triggerHover: string;
    inputFocus: string;
  }
> = {
  emerald: {
    glow: "shadow-[0_0_80px_rgba(16,185,129,0.18)]",
    border: "border-emerald-500/30",
    borderHover: "hover:border-emerald-400/60",
    bg: "from-emerald-900/20",
    badge: "bg-emerald-950/60",
    badgeBorder: "border-emerald-500/30",
    badgeText: "text-emerald-300",
    check: "text-emerald-400",
    checkBg: "bg-emerald-500/10",
    btn: "bg-emerald-600 hover:bg-emerald-500",
    btnShadow: "shadow-[0_0_30px_rgba(16,185,129,0.45)]",
    btnWa: "bg-green-600 hover:bg-green-500",
    btnWaShadow: "shadow-[0_0_30px_rgba(22,163,74,0.45)]",
    triggerBorder: "border-emerald-500/40",
    triggerText: "text-emerald-300",
    triggerBg: "bg-emerald-950/30",
    triggerHover: "hover:bg-emerald-950/60 hover:border-emerald-400/70",
    inputFocus: "focus:border-emerald-500/60 focus:ring-emerald-500/20",
  },
  blue: {
    glow: "shadow-[0_0_80px_rgba(37,99,235,0.18)]",
    border: "border-blue-500/30",
    borderHover: "hover:border-blue-400/60",
    bg: "from-blue-900/20",
    badge: "bg-blue-950/60",
    badgeBorder: "border-blue-500/30",
    badgeText: "text-blue-300",
    check: "text-emerald-400",
    checkBg: "bg-emerald-500/10",
    btn: "bg-blue-600 hover:bg-blue-500",
    btnShadow: "shadow-[0_0_30px_rgba(37,99,235,0.45)]",
    btnWa: "bg-green-600 hover:bg-green-500",
    btnWaShadow: "shadow-[0_0_30px_rgba(22,163,74,0.45)]",
    triggerBorder: "border-emerald-500/40",
    triggerText: "text-emerald-300",
    triggerBg: "bg-emerald-950/30",
    triggerHover: "hover:bg-emerald-950/60 hover:border-emerald-400/70",
    inputFocus: "focus:border-blue-500/60 focus:ring-blue-500/20",
  },
};

// ─────────────────────────────────────────────────────────────
// COMPONENTE PRINCIPAL
// ─────────────────────────────────────────────────────────────
export function CheckoutForm({
  planes,
  colorScheme = "emerald",
  triggerLabel = "⚡ Pagar con USDT",
  fullWidth = false,
}: CheckoutFormProps) {
  const c = palette[colorScheme];

  // Obtener lang desde la URL para construir el enlace a /legal
  const params = useParams();
  const lang = (params?.lang as string) ?? "es";

  // Filtra planes con precio "Cotización" (no aplican al pago directo)
  const planesDisponibles = planes.filter((p) => p.precio !== "Cotización");

  // ── Estado del formulario ──
  const [abierto, setAbierto] = useState(false);
  const [paso, setPaso] = useState<"form" | "pago">("form");
  const [nombre, setNombre] = useState("");
  const [dominio, setDominio] = useState("");
  const [email, setEmail] = useState("");
  const [planSeleccionado, setPlanSeleccionado] = useState(
    planesDisponibles[0]?.nombre ?? ""
  );
  const [terminosAceptados, setTerminosAceptados] = useState(false);
  const [errores, setErrores] = useState<Record<string, string>>({});
  const [copiado, setCopiado] = useState(false);

  const planInfo = planesDisponibles.find((p) => p.nombre === planSeleccionado);

  // ── Mensaje de WhatsApp pre-armado ──
  const waMessage =
    `Hola, acabo de pagar el Setup *${planSeleccionado}* (${planInfo?.precio ?? ""}) por Cripto (USDT TRC20).\n\n` +
    `🏢 Empresa / Profesional: ${nombre}\n` +
    `🌐 Dominio web: ${dominio}\n` +
    `📧 Email: ${email}\n\n` +
    `Aquí está mi hash de transacción: [PEGAR HASH AQUÍ]\n\n` +
    `Solicito activación inmediata del despliegue. ¡Gracias!`;

  const waLink = buildWhatsAppLink(waMessage);

  // ── Validación simple ──
  const validar = useCallback(() => {
    const e: Record<string, string> = {};
    if (!nombre.trim()) e.nombre = "Requerido";
    if (!dominio.trim()) e.dominio = "Requerido";
    if (!email.trim() || !email.includes("@")) e.email = "Email inválido";
    if (!planSeleccionado) e.plan = "Seleccioná un plan";
    setErrores(e);
    return Object.keys(e).length === 0;
  }, [nombre, dominio, email, planSeleccionado]);

  const handleProceder = () => {
    if (validar()) setPaso("pago");
  };

  const copiarWallet = () => {
    navigator.clipboard.writeText(WALLET_USDT_TRC20).then(() => {
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2500);
    });
  };

  const cerrar = () => {
    setAbierto(false);
    setTimeout(() => {
      setPaso("form");
    }, 400);
  };

  return (
    <>
      {/* ── BOTÓN TRIGGER ── */}
      <button
        onClick={() => {
          setAbierto(true);
          setPaso("form");
        }}
        className={`
          inline-flex items-center justify-center gap-2
          px-8 py-4 rounded-xl font-black text-sm
          border transition-all duration-200 active:scale-95
          ${fullWidth ? "w-full" : ""}
          ${c.triggerBg} ${c.triggerBorder} ${c.triggerText} ${c.triggerHover}
          shadow-[0_0_20px_rgba(16,185,129,0.15)]
        `}
      >
        {triggerLabel}
      </button>

      {/* ── MODAL OVERLAY ── */}
      <AnimatePresence>
        {abierto && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={(e) => {
              if (e.target === e.currentTarget) cerrar();
            }}
          >
            <motion.div
              key="modal"
              initial={{ opacity: 0, scale: 0.94, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 24 }}
              transition={{ type: "spring", damping: 22, stiffness: 280 }}
              className={`
                relative w-full max-w-lg max-h-[92vh] overflow-y-auto
                bg-slate-950 border rounded-3xl p-6 md:p-8
                ${c.border} ${c.glow}
              `}
            >
              {/* Gradiente decorativo */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${c.bg} to-transparent pointer-events-none rounded-3xl`}
              />

              {/* ── BOTÓN CERRAR ── */}
              <button
                onClick={cerrar}
                aria-label="Cerrar"
                className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
              >
                ✕
              </button>

              {/* ─────────────────────────────────────────── */}
              {/* PASO 1 – FORMULARIO                        */}
              {/* ─────────────────────────────────────────── */}
              <AnimatePresence mode="wait">
                {paso === "form" && (
                  <motion.div
                    key="formulario"
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -16 }}
                    transition={{ duration: 0.22 }}
                    className="relative z-10"
                  >
                    {/* Cabecera */}
                    <span
                      className={`inline-block text-[10px] font-black uppercase tracking-[0.18em] ${c.badgeText} ${c.badge} border ${c.badgeBorder} px-3 py-1 rounded-full mb-4`}
                    >
                      Checkout Directo · USDT TRC20
                    </span>
                    <h2 className="text-2xl md:text-3xl font-black text-white mb-1 tracking-tight">
                      Activá tu plan ahora
                    </h2>
                    <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                      Sin esperas. Completá los datos, transferí el USDT y envianos el comprobante por WhatsApp. Tu sistema se despliega de inmediato.
                    </p>

                    {/* Campos */}
                    <div className="space-y-4">
                      {/* Plan */}
                      <div>
                        <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-1.5">
                          Plan
                        </label>
                        <select
                          value={planSeleccionado}
                          onChange={(e) => setPlanSeleccionado(e.target.value)}
                          className={`
                            w-full bg-slate-900 border rounded-xl px-4 py-3
                            text-white text-sm appearance-none
                            border-slate-700 focus:outline-none focus:ring-2
                            transition-colors ${c.inputFocus}
                            ${errores.plan ? "border-red-500/60" : ""}
                          `}
                        >
                          {planesDisponibles.map((p) => (
                            <option key={p.nombre} value={p.nombre}>
                              {p.nombre} — {p.precio}
                            </option>
                          ))}
                        </select>
                        {errores.plan && (
                          <p className="text-red-400 text-xs mt-1">{errores.plan}</p>
                        )}
                      </div>

                      {/* Nombre */}
                      <div>
                        <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-1.5">
                          Nombre de empresa / profesional
                        </label>
                        <input
                          type="text"
                          value={nombre}
                          onChange={(e) => setNombre(e.target.value)}
                          placeholder="Ej: TechPY S.A. o Dr. García"
                          className={`
                            w-full bg-slate-900 border rounded-xl px-4 py-3
                            text-white text-sm placeholder:text-slate-600
                            focus:outline-none focus:ring-2 transition-colors
                            ${c.inputFocus}
                            ${errores.nombre ? "border-red-500/60" : "border-slate-700"}
                          `}
                        />
                        {errores.nombre && (
                          <p className="text-red-400 text-xs mt-1">{errores.nombre}</p>
                        )}
                      </div>

                      {/* Dominio */}
                      <div>
                        <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-1.5">
                          Dominio web (existente o deseado)
                        </label>
                        <input
                          type="text"
                          value={dominio}
                          onChange={(e) => setDominio(e.target.value)}
                          placeholder="Ej: miempresa.com.py"
                          className={`
                            w-full bg-slate-900 border rounded-xl px-4 py-3
                            text-white text-sm placeholder:text-slate-600
                            focus:outline-none focus:ring-2 transition-colors
                            ${c.inputFocus}
                            ${errores.dominio ? "border-red-500/60" : "border-slate-700"}
                          `}
                        />
                        {errores.dominio && (
                          <p className="text-red-400 text-xs mt-1">{errores.dominio}</p>
                        )}
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-1.5">
                          Email de contacto
                        </label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="tu@email.com"
                          className={`
                            w-full bg-slate-900 border rounded-xl px-4 py-3
                            text-white text-sm placeholder:text-slate-600
                            focus:outline-none focus:ring-2 transition-colors
                            ${c.inputFocus}
                            ${errores.email ? "border-red-500/60" : "border-slate-700"}
                          `}
                        />
                        {errores.email && (
                          <p className="text-red-400 text-xs mt-1">{errores.email}</p>
                        )}
                      </div>
                    </div>

                    {/* Resumen */}
                    {planInfo && (
                      <div className="mt-5 rounded-xl border border-slate-800 bg-slate-900/50 px-4 py-3 flex items-center justify-between">
                        <span className="text-slate-400 text-sm">{planInfo.nombre}</span>
                        <span className="font-black text-white text-lg">
                          {planInfo.precio}
                          <span className="text-slate-500 text-xs font-normal ml-1">USD</span>
                        </span>
                      </div>
                    )}

                    {/* ── Checkbox Términos y Condiciones ── */}
                    <label className="flex items-start gap-3 mt-6 cursor-pointer group">
                      <div className="relative flex-shrink-0 mt-0.5">
                        <input
                          type="checkbox"
                          checked={terminosAceptados}
                          onChange={(e) => setTerminosAceptados(e.target.checked)}
                          className="sr-only"
                        />
                        <div
                          className={`
                            w-5 h-5 rounded border-2 flex items-center justify-center
                            transition-all duration-150
                            ${terminosAceptados
                              ? "bg-emerald-500 border-emerald-500"
                              : "bg-slate-900 border-slate-600 group-hover:border-slate-500"
                            }
                          `}
                        >
                          {terminosAceptados && (
                            <svg viewBox="0 0 12 10" fill="none" className="w-3 h-2.5">
                              <path
                                d="M1 5l3 3 7-7"
                                stroke="white"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          )}
                        </div>
                      </div>
                      <span className="text-xs text-slate-400 leading-relaxed">
                        He leído y acepto los{" "}
                        <Link
                          href={`/${lang}/legal`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-emerald-400 hover:text-emerald-300 underline underline-offset-4 font-semibold transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Términos y Condiciones
                        </Link>
                        , incluyendo la{" "}
                        <Link
                          href={`/${lang}/legal#cripto`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-emerald-400 hover:text-emerald-300 underline underline-offset-4 font-semibold transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Política de Pagos con Criptoactivos (USDT TRC20)
                        </Link>
                        . Entiendo que las transacciones en blockchain son irreversibles.
                      </span>
                    </label>

                    {/* CTA */}
                    <button
                      onClick={handleProceder}
                      disabled={!terminosAceptados}
                      title={!terminosAceptados ? "Debés aceptar los Términos y Condiciones para continuar" : undefined}
                      className={`
                        mt-4 w-full py-4 rounded-xl font-black text-sm
                        transition-all duration-200
                        ${terminosAceptados
                          ? `text-white active:scale-95 ${c.btn} ${c.btnShadow}`
                          : "bg-slate-800 text-slate-500 border border-slate-700 cursor-not-allowed"
                        }
                      `}
                    >
                      Proceder al Pago Cripto →
                    </button>

                    <p className="text-center text-xs text-slate-600 mt-3">
                      Sin intermediarios. Despliegue inmediato tras confirmación.
                    </p>
                  </motion.div>
                )}

                {/* ─────────────────────────────────────────── */}
                {/* PASO 2 – INSTRUCCIONES DE PAGO             */}
                {/* ─────────────────────────────────────────── */}
                {paso === "pago" && (
                  <motion.div
                    key="pago"
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 16 }}
                    transition={{ duration: 0.22 }}
                    className="relative z-10"
                  >
                    {/* Cabecera */}
                    <span className="inline-block text-[10px] font-black uppercase tracking-[0.18em] text-emerald-300 bg-emerald-950/60 border border-emerald-500/30 px-3 py-1 rounded-full mb-4">
                      ✅ Datos confirmados · Instrucciones de Pago
                    </span>
                    <h2 className="text-2xl md:text-3xl font-black text-white mb-2 tracking-tight">
                      Transferí USDT (TRC20)
                    </h2>
                    <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                      Enviá exactamente{" "}
                      <span className="font-bold text-white">{planInfo?.precio} USD</span> a la siguiente wallet TRC20. Confirmaciones necesarias: <strong>1</strong>. Luego confirmá en WhatsApp.
                    </p>

                    {/* QR + Wallet */}
                    <div className="rounded-2xl border border-emerald-500/25 bg-slate-900/60 p-5 mb-5">
                      <div className="flex flex-col sm:flex-row items-center gap-5">
                        {/* QR Code */}
                        <div className="relative w-36 h-36 flex-shrink-0 rounded-xl overflow-hidden border border-slate-700 bg-white p-1">
                          <Image
                            src="/qr-crypto.webp"
                            alt="QR Wallet USDT TRC20"
                            fill
                            className="object-contain"
                            sizes="144px"
                          />
                        </div>

                        {/* Wallet info */}
                        <div className="flex-1 min-w-0 text-center sm:text-left">
                          <p className="text-[10px] uppercase tracking-widest text-emerald-400 font-bold mb-2">
                            Dirección USDT · Red TRC20
                          </p>
                          <div className="bg-slate-950 border border-slate-800 rounded-lg px-3 py-2.5 mb-3 break-all">
                            <code className="text-emerald-300 text-xs font-mono leading-relaxed">
                              {WALLET_USDT_TRC20}
                            </code>
                          </div>
                          <button
                            onClick={copiarWallet}
                            className={`
                              text-xs font-bold px-4 py-2 rounded-lg transition-all
                              border flex items-center gap-1.5 mx-auto sm:mx-0
                              ${copiado
                                ? "bg-emerald-950/60 border-emerald-500/40 text-emerald-400"
                                : "bg-slate-800 border-slate-700 text-slate-300 hover:border-slate-600 hover:text-white"
                              }
                            `}
                          >
                            {copiado ? "✓ Copiado" : "📋 Copiar dirección"}
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6 text-xs text-slate-300">
                      <div className="rounded-2xl border border-slate-800/80 bg-slate-950/60 p-3 text-center">
                        <p className="text-slate-400 uppercase tracking-[0.18em] font-bold mb-1">Red</p>
                        <p className="text-white font-black">TRC20 (TRON)</p>
                      </div>
                      <div className="rounded-2xl border border-slate-800/80 bg-slate-950/60 p-3 text-center">
                        <p className="text-slate-400 uppercase tracking-[0.18em] font-bold mb-1">Depósito mínimo</p>
                        <p className="text-white font-black">0.01 USDT</p>
                      </div>
                      <div className="rounded-2xl border border-slate-800/80 bg-slate-950/60 p-3 text-center">
                        <p className="text-slate-400 uppercase tracking-[0.18em] font-bold mb-1">Confirmaciones</p>
                        <p className="text-white font-black">1</p>
                      </div>
                    </div>

                    {/* Pasos */}
                    <ol className="space-y-2.5 mb-6">
                      {[
                        "Abrí tu wallet (Trust Wallet, Binance, etc.)",
                        `Enviá ${planInfo?.precio ?? "..."} USDT en la red TRC20 a la dirección de arriba`,
                        "Copiá el hash (ID) de la transacción",
                        "Tocá el botón de abajo → pegá el hash en el chat de WhatsApp",
                      ].map((paso, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-black flex items-center justify-center mt-0.5">
                            {i + 1}
                          </span>
                          {paso}
                        </li>
                      ))}
                    </ol>

                    {/* Aviso red */}
                    <div className="rounded-xl border border-amber-500/20 bg-amber-950/20 px-4 py-3 mb-6 text-xs text-amber-300 space-y-2">
                      <div className="flex items-start gap-2">
                        <span className="text-lg leading-none">⚠️</span>
                        <p>
                          <strong>Importante:</strong> Usá <strong>exclusivamente la red TRC20</strong>. Envíos en otras redes (ERC20, BEP20) no son recuperables.
                        </p>
                      </div>
                      <p>· No enviar NFT a esta dirección.</p>
                      <p>· No enviar desde contratos inteligentes no soportados.</p>
                      <p>· No operar con entidades sancionadas.</p>
                    </div>

                    {/* CTA WhatsApp */}
                    <a
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`
                        flex items-center justify-center gap-2.5
                        w-full py-4 rounded-xl font-black text-white text-sm
                        transition-all active:scale-95
                        ${c.btnWa} ${c.btnWaShadow}
                      `}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5 flex-shrink-0"
                        aria-hidden="true"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      Confirmar Pago en WhatsApp
                    </a>

                    <p className="text-center text-xs text-slate-500 mt-3 leading-relaxed">
                      Al hacer clic se abre WhatsApp con tus datos y el mensaje pre-cargado. Solo pegá el hash de transacción.
                    </p>

                    {/* Volver */}
                    <button
                      onClick={() => setPaso("form")}
                      className="mt-4 w-full text-center text-xs text-slate-600 hover:text-slate-400 transition-colors py-1"
                    >
                      ← Volver al formulario
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
