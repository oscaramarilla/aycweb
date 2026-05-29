// ============================================================
// SERVICIO: Mensaje WhatsApp para la Calculadora Excel → Sistema
// ============================================================
// Construye el texto del mensaje con los resultados de la
// calculadora, en el idioma del prospecto.
// ============================================================

import { buildWhatsAppLink } from "@/lib/services/whatsapp-link";
import { PLANES_PRECIOS, formatCurrencyUSD } from "@/lib/config/precios";

export interface CalculadoraParams {
  cotizacionesMes: number;
  minutosPorCotizacion: number;
  tasaError: number; // 0–30
  costoSocio: number; // USD/hora
}

export interface CalculadoraResult {
  horasCotizaciones: number;
  horasRetrabajo: number;
  totalHorasPerdidas: number;
  costoMensual: number;
  costoSocioLetras: number;
  ahorroMensual: number;
}

// ─── Logica de calculo (pura, sin side effects) ────────────────

export function calcularIneficiencia(p: CalculadoraParams): CalculadoraResult {
  const horasCotizaciones = (p.cotizacionesMes * p.minutosPorCotizacion) / 60;
  const horasRetrabajo = horasCotizaciones * (p.tasaError / 100);
  const totalHorasPerdidas = horasCotizaciones + horasRetrabajo;
  const costoMensual = totalHorasPerdidas * p.costoSocio;
  const costoSocioLetras = totalHorasPerdidas * p.costoSocio;
  const ahorroMensual = costoMensual * 0.7;

  return {
    horasCotizaciones: Math.round(horasCotizaciones * 10) / 10,
    horasRetrabajo: Math.round(horasRetrabajo * 10) / 10,
    totalHorasPerdidas: Math.round(totalHorasPerdidas * 10) / 10,
    costoMensual: Math.round(costoMensual),
    costoSocioLetras: Math.round(costoSocioLetras),
    ahorroMensual: Math.round(ahorroMensual),
  };
}

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

// ─── Templates por idioma ──────────────────────────────────────

function buildMensajeES(p: CalculadoraParams, r: CalculadoraResult): string {
  const severityEmoji = r.costoMensual >= 20000 ? "🔴" : r.costoMensual >= 5000 ? "🟡" : "🟢";
  const labelSeveridad =
    r.costoMensual >= 20000
      ? "Crítico"
      : r.costoMensual >= 5000
        ? "Moderado"
        : "Bajo";

  return [
    `📊 *Calculadora Excel → Sistema – AYCweb*`,
    ``,
    `*Tus parámetros:*`,
    `• Cotizaciones por mes: ${fmtNum(p.cotizacionesMes)}`,
    `• Minutos por cotización: ${p.minutosPorCotizacion} min`,
    `• Tasa de error/retrabajo: ${p.tasaError}%`,
    `• Costo hora-hombre: ${fmtUsd(p.costoSocio)}`,
    ``,
    `*Resultados:*`,
    `• Horas/mes en cotizaciones: ${r.horasCotizaciones} h`,
    `• Horas/mes en retrabajo: ${r.horasRetrabajo} h`,
    `• Total horas perdidas/mes: ${r.totalHorasPerdidas} h`,
    ``,
    `${severityEmoji} *Costo mensual de ineficiencia: ${fmtUsd(r.costoMensual)}*`,
    `${severityEmoji} *Severidad: ${labelSeveridad}*`,
    ``,
    `💰 *Ahorro potencial (70%): ${fmtUsd(r.ahorroMensual)}/mes*`,
    `${fmtUsd(r.ahorroMensual * 12)}/año`,
    ``,
    `Quiero saber cómo automatizar esto con un sistema a medida.`,
    "",
    `*Ofertas rápidas de AYCweb:*`,
    ...Object.values(PLANES_PRECIOS).map((plan) =>
      [
        `- ${plan.nombre}: El mantenimiento es de ${formatCurrencyUSD(plan.mantenimientoMensual)}/mes.`,
        `  El setup único es de ${formatCurrencyUSD(plan.setupTotal)}, el cual podés liquidar hasta en 4 pagos financiados durante los meses de configuración.`,
      ].join("\n")
    ),
  ].join("\n");
}

function buildMensajeEN(p: CalculadoraParams, r: CalculadoraResult): string {
  const severityEmoji = r.costoMensual >= 20000 ? "🔴" : r.costoMensual >= 5000 ? "🟡" : "🟢";
  const labelSeveridad =
    r.costoMensual >= 20000
      ? "Critical"
      : r.costoMensual >= 5000
        ? "Moderate"
        : "Low";

  return [
    `📊 *Excel → System Calculator – AYCweb*`,
    ``,
    `*Your parameters:*`,
    `• Quotes per month: ${fmtNum(p.cotizacionesMes)}`,
    `• Minutes per quote: ${p.minutosPorCotizacion} min`,
    `• Error/rework rate: ${p.tasaError}%`,
    `• Hourly cost: ${fmtUsd(p.costoSocio)}`,
    ``,
    `*Results:*`,
    `• Hours/month quoting: ${r.horasCotizaciones} h`,
    `• Hours/month rework: ${r.horasRetrabajo} h`,
    `• Total hours lost/month: ${r.totalHorasPerdidas} h`,
    ``,
    `${severityEmoji} *Monthly inefficiency cost: ${fmtUsd(r.costoMensual)}*`,
    `${severityEmoji} *Severity: ${labelSeveridad}*`,
    ``,
    `💰 *Potential savings (70%): ${fmtUsd(r.ahorroMensual)}/month*`,
    `${fmtUsd(r.ahorroMensual * 12)}/year`,
    ``,
    `I'd like to know how to automate this with a custom system.`,
    "",
    `*Quick offers from AYCweb:*`,
    ...Object.values(PLANES_PRECIOS).map((plan) =>
      [
        `- ${plan.nombre}: ${formatCurrencyUSD(plan.setupTotal)}`,
        `  Breakdown: Deposit ${formatCurrencyUSD(plan.hitos.anticipo)} · Definition ${formatCurrencyUSD(
          plan.hitos.definicion
        )} · Implementation ${formatCurrencyUSD(plan.hitos.implementacion)} · Testing ${formatCurrencyUSD(
          plan.hitos.pruebas
        )}`,
        `  Maintenance: ${formatCurrencyUSD(plan.mantenimientoMensual)}/month`,
      ].join("\n")
    ),
  ].join("\n");
}

function buildMensajePT(p: CalculadoraParams, r: CalculadoraResult): string {
  const severityEmoji = r.costoMensual >= 20000 ? "🔴" : r.costoMensual >= 5000 ? "🟡" : "🟢";
  const labelSeveridad =
    r.costoMensual >= 20000
      ? "Crítico"
      : r.costoMensual >= 5000
        ? "Moderado"
        : "Baixo";

  return [
    `📊 *Calculadora Excel → Sistema – AYCweb*`,
    ``,
    `*Seus parâmetros:*`,
    `• Cotações por mês: ${fmtNum(p.cotizacionesMes)}`,
    `• Minutos por cotação: ${p.minutosPorCotizacion} min`,
    `• Taxa de erro/retrabalho: ${p.tasaError}%`,
    `• Custo hora-homem: ${fmtUsd(p.costoSocio)}`,
    ``,
    `*Resultados:*`,
    `• Horas/mês em cotações: ${r.horasCotizaciones} h`,
    `• Horas/mês em retrabalho: ${r.horasRetrabajo} h`,
    `• Total horas perdidas/mês: ${r.totalHorasPerdidas} h`,
    ``,
    `${severityEmoji} *Custo mensal de ineficiência: ${fmtUsd(r.costoMensual)}*`,
    `${severityEmoji} *Severidade: ${labelSeveridad}*`,
    ``,
    `💰 *Economia potencial (70%): ${fmtUsd(r.ahorroMensual)}/mês*`,
    `${fmtUsd(r.ahorroMensual * 12)}/ano`,
    ``,
    `Quero saber como automatizar isso com um sistema sob medida.`,
    "",
    `*Ofertas rápidas da AYCweb:*`,
    ...Object.values(PLANES_PRECIOS).map((plan) =>
      [
        `- ${plan.nombre}: ${formatCurrencyUSD(plan.setupTotal)}`,
        `  Desdobramento: Entrada ${formatCurrencyUSD(plan.hitos.anticipo)} · Definição ${formatCurrencyUSD(
          plan.hitos.definicion
        )} · Implementação ${formatCurrencyUSD(plan.hitos.implementacion)} · Testes ${formatCurrencyUSD(
          plan.hitos.pruebas
        )}`,
        `  Manutenção: ${formatCurrencyUSD(plan.mantenimientoMensual)}/mês`,
      ].join("\n")
    ),
  ].join("\n");
}

// ─── Función pública ───────────────────────────────────────────

/** Construye el link de WhatsApp con el mensaje de la calculadora. */
export function buildCalculadoraWaUrl(
  params: CalculadoraParams,
  result: CalculadoraResult,
  lang: string = "es"
): string {
  let mensaje: string;

  switch (lang) {
    case "en":
      mensaje = buildMensajeEN(params, result);
      break;
    case "pt-br":
      mensaje = buildMensajePT(params, result);
      break;
    default:
      mensaje = buildMensajeES(params, result);
  }

  return buildWhatsAppLink(mensaje);
}