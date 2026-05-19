"use client";

import React, { useMemo, useState } from "react";

type BenchmarkKey =
  | "worldBusiness"
  | "worldResidential"
  | "southAmericaBusiness"
  | "europeBusiness"
  | "usaBusiness"
  | "germanyBusiness"
  | "brazilBusiness"
  | "uruguayBusiness";

type Benchmark = {
  key: BenchmarkKey;
  label: string;
  tariff: number;
  description: string;
};

type ThesisScenario = {
  label: string;
  value: string;
  tone: "weak" | "neutral" | "strong";
  description: string;
};

const PARAGUAY_BUSINESS_TARIFF = 0.045;
const PARAGUAY_RESIDENTIAL_TARIFF = 0.054;
const PPA_REFERENCE_USD_PER_MWH = 44;

const benchmarks: Benchmark[] = [
  {
    key: "worldBusiness",
    label: "Promedio mundial empresarial",
    tariff: 0.164,
    description: "Referencia global para operaciones comerciales e industriales.",
  },
  {
    key: "worldResidential",
    label: "Promedio mundial residencial",
    tariff: 0.174,
    description: "Referencia global para consumo residencial.",
  },
  {
    key: "southAmericaBusiness",
    label: "Promedio Sudamérica empresarial",
    tariff: 0.199,
    description: "Comparación regional para empresas en Sudamérica.",
  },
  {
    key: "europeBusiness",
    label: "Promedio Europa empresarial",
    tariff: 0.217,
    description: "Mercado de alto costo eléctrico y alta presión operativa.",
  },
  {
    key: "usaBusiness",
    label: "Estados Unidos empresarial",
    tariff: 0.148,
    description: "Referencia para negocios digitales y operaciones tecnológicas.",
  },
  {
    key: "germanyBusiness",
    label: "Alemania empresarial",
    tariff: 0.285,
    description: "Mercado industrial avanzado con energía significativamente cara.",
  },
  {
    key: "brazilBusiness",
    label: "Brasil empresarial",
    tariff: 0.132,
    description: "Comparación cercana para operaciones regionales.",
  },
  {
    key: "uruguayBusiness",
    label: "Uruguay empresarial",
    tariff: 0.125,
    description: "Comparación regional cercana a Paraguay.",
  },
];

const strategicSignals = [
  {
    title: "Yguazú Digital",
    metric: "10 → 100 → 1.000 MW",
    text: "Paraguay y Taiwán plantean un centro soberano de IA con modelo binacional y expansión por fases.",
  },
  {
    title: "X8 Cloud",
    metric: "6 MW → 250 MW",
    text: "La tesis de data centers en Paraguay ya no es solo gobierno: aparecen jugadores privados con GPU infrastructure.",
  },
  {
    title: "Producto real",
    metric: "Cómputo IA",
    text: "La energía deja de venderse solo como commodity cuando se transforma en capacidad de procesamiento.",
  },
];

const useCases = [
  {
    title: "Proveedores industriales",
    text: "Metalúrgicas, plásticos, cableado, climatización, racks, ductos, estructuras y servicios técnicos.",
  },
  {
    title: "Portales técnicos B2B",
    text: "Catálogos, fichas descargables, RFQ, cotizadores, supplier decks y presencia bilingüe.",
  },
  {
    title: "Integración PyME + IA",
    text: "Asistentes comerciales, legales, médicos, agro y logísticos corriendo sobre infraestructura local o regional.",
  },
  {
    title: "Control operativo",
    text: "Dashboards que miden energía, margen, costo, productividad, inventario, ventas y oportunidad.",
  },
];

const thesisScenarios: ThesisScenario[] = [
  {
    label: "BTC mining con halvings",
    value: "VPN USD 1.570M",
    tone: "weak",
    description:
      "La producción protocolar cae por halvings. Extrapolar hashprice actual sin curva declinante sobrestima el flujo.",
  },
  {
    label: "Venta de energía fija",
    value: "VPN USD 4.178M",
    tone: "neutral",
    description:
      "Un PPA estable a largo plazo puede superar al flujo minero si el modelo BTC no compensa halvings, dificultad y capex.",
  },
  {
    label: "Modelo Yguazú / cómputo IA",
    value: "VPN USD 8.463M",
    tone: "strong",
    description:
      "La tesis superior no es vender kWh: es convertir energía en capacidad de cómputo vendible a largo plazo.",
  },
];

const faqs = [
  {
    q: "¿KWH Index es una inversión financiera?",
    a: "No. Es una herramienta educativa y comercial de AYCweb para visualizar arbitraje energético, infraestructura digital y oportunidades B2B. No es token, security, promesa de rentabilidad ni asesoría financiera.",
  },
  {
    q: "¿Por qué ya no conviene mirar solo minería Bitcoin?",
    a: "Porque el flujo de BTC producido cae por halvings. Si el modelo toma el hashprice actual y lo extiende durante décadas, ignora una caída programada de emisión cada cuatro años.",
  },
  {
    q: "¿Cuál es la oportunidad superior para Paraguay?",
    a: "Transformar energía hidroeléctrica competitiva en servicios de cómputo, infraestructura crítica, proveedores industriales, automatización e inteligencia aplicada a empresas.",
  },
  {
    q: "¿Dónde entra AYCweb?",
    a: "AYCweb no construye data centers. Prepara a empresas paraguayas para vender, cotizar, documentar y operar dentro de esta nueva cadena de valor.",
  },
  {
    q: "¿Qué necesita una empresa local para capturar esta oportunidad?",
    a: "Claridad técnica, catálogo profesional, fichas, documentación, portal bilingüe, cotizador, trazabilidad, métricas y una propuesta apta para compradores corporativos.",
  },
];

const sourceLinks = [
  {
    label: "ABC Color — Yguazú Digital",
    href: "https://www.abc.com.py/economia/2026/05/11/paraguay-y-taiwan-crearan-yguazu-digital-un-gigante-de-ia-que-consumira-una-turbina-y-media-de-itaipu/",
  },
  {
    label: "DPL News — X8 Cloud Paraguay",
    href: "https://dplnews.com/x8-cloud-construiria-data-center-para-inteligencia-artificial-en-paraguay/",
  },
  {
    label: "GlobalPetrolPrices — Electricity Prices Q1 2026",
    href: "https://www.globalpetrolprices.com/electricity_prices/",
  },
];

function formatUSD(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

function formatKwh(value: number) {
  return new Intl.NumberFormat("es-PY", {
    maximumFractionDigits: 0,
  }).format(value);
}

function formatTariff(value: number) {
  return `$${value.toFixed(3)} / kWh`;
}

function getScenarioClass(tone: ThesisScenario["tone"]) {
  if (tone === "strong") {
    return "border-emerald-500/30 bg-emerald-500/10 text-emerald-200";
  }

  if (tone === "neutral") {
    return "border-amber-500/30 bg-amber-500/10 text-amber-200";
  }

  return "border-rose-500/30 bg-rose-500/10 text-rose-200";
}

export default function InvestorArbitrageDashboard() {
  const [monthlyKwh, setMonthlyKwh] = useState(13000);
  const [benchmarkKey, setBenchmarkKey] =
    useState<BenchmarkKey>("worldBusiness");
  const [btcMonthlyValueToday, setBtcMonthlyValueToday] = useState(1200);
  const [aiComputeUsdPerMwh, setAiComputeUsdPerMwh] = useState(140);

  const selectedBenchmark =
    benchmarks.find((item) => item.key === benchmarkKey) ?? benchmarks[0];

  const calculation = useMemo(() => {
    const paraguayMonthlyCost = monthlyKwh * PARAGUAY_BUSINESS_TARIFF;
    const benchmarkMonthlyCost = monthlyKwh * selectedBenchmark.tariff;
    const monthlyAdvantage = benchmarkMonthlyCost - paraguayMonthlyCost;
    const annualAdvantage = monthlyAdvantage * 12;
    const benchmarkAnnualCost = benchmarkMonthlyCost * 12;
    const paraguayAnnualCost = paraguayMonthlyCost * 12;
    const annualMwh = (monthlyKwh * 12) / 1000;
    const averageMw = monthlyKwh / 720 / 1000;

    const advantagePercent =
      benchmarkMonthlyCost > 0
        ? (monthlyAdvantage / benchmarkMonthlyCost) * 100
        : 0;

    const ppaAnnualGross = annualMwh * PPA_REFERENCE_USD_PER_MWH;
    const aiComputeAnnualGross = annualMwh * aiComputeUsdPerMwh;

    const naiveBtcThirtyYear = btcMonthlyValueToday * 12 * 30;

    const halvingAdjustedBtcThirtyYear =
      btcMonthlyValueToday *
      12 *
      (2 * 1 + 4 * 0.5 + 4 * 0.25 + 4 * 0.125 + 16 * 0.0625);

    const halvingPenalty =
      naiveBtcThirtyYear > 0
        ? (1 - halvingAdjustedBtcThirtyYear / naiveBtcThirtyYear) * 100
        : 0;

    return {
      paraguayMonthlyCost,
      benchmarkMonthlyCost,
      monthlyAdvantage,
      annualAdvantage,
      benchmarkAnnualCost,
      paraguayAnnualCost,
      advantagePercent,
      annualMwh,
      averageMw,
      ppaAnnualGross,
      aiComputeAnnualGross,
      naiveBtcThirtyYear,
      halvingAdjustedBtcThirtyYear,
      halvingPenalty,
    };
  }, [monthlyKwh, selectedBenchmark, btcMonthlyValueToday, aiComputeUsdPerMwh]);

  const whatsappText = encodeURIComponent(
    `Hola AYCweb, quiero analizar cómo preparar mi empresa para la oportunidad de energía, IA e infraestructura crítica en Paraguay. Mi escenario inicial es ${formatKwh(
      monthlyKwh
    )} kWh/mes comparado contra ${selectedBenchmark.label}. Vi el KWH Index en aycweb.com/kwhcoin.`
  );

  const whatsappUrl = `https://wa.me/595985864209?text=${whatsappText}`;

  return (
    <main className="min-h-screen bg-stone-950 text-stone-100">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-amber-500/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.18),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.12),transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-5xl">
            <p className="mb-4 inline-flex rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-amber-300">
              KWH Index Paraguay · Terminal Estratégico
            </p>

            <h1 className="text-4xl font-black tracking-tight text-white md:text-6xl">
              Paraguay ya no solo vende energía. Puede vender cómputo,
              infraestructura y ventaja operativa.
            </h1>

            <p className="mt-6 max-w-4xl text-lg leading-8 text-stone-300">
              Recalibramos la tesis: el negocio superior no es extrapolar minería
              Bitcoin con hashprice actual. Es convertir energía competitiva en
              capacidad de cómputo, proveedores críticos y sistemas B2B medibles.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#terminal"
                className="rounded-xl bg-amber-400 px-6 py-4 text-center text-sm font-black uppercase tracking-wide text-stone-950 transition hover:bg-amber-300"
              >
                Abrir terminal
              </a>

              <a
                href="#pitch"
                className="rounded-xl border border-stone-700 px-6 py-4 text-center text-sm font-bold uppercase tracking-wide text-stone-200 transition hover:border-amber-400/60 hover:text-white"
              >
                Ver jugada B2B
              </a>
            </div>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-stone-800 bg-stone-900/60 p-5">
              <p className="text-xs uppercase tracking-widest text-stone-500">
                Paraguay empresarial
              </p>
              <p className="mt-2 text-3xl font-black text-emerald-400">
                {formatTariff(PARAGUAY_BUSINESS_TARIFF)}
              </p>
            </div>

            <div className="rounded-2xl border border-stone-800 bg-stone-900/60 p-5">
              <p className="text-xs uppercase tracking-widest text-stone-500">
                Promedio mundial empresarial
              </p>
              <p className="mt-2 text-3xl font-black text-rose-300">
                {formatTariff(0.164)}
              </p>
            </div>

            <div className="rounded-2xl border border-stone-800 bg-stone-900/60 p-5">
              <p className="text-xs uppercase tracking-widest text-stone-500">
                Cambio de tesis
              </p>
              <p className="mt-2 text-3xl font-black text-amber-300">
                BTC → IA
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Signals */}
      <section className="border-b border-stone-800 bg-stone-900/30">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
          <div className="mb-8 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-emerald-300">
              Mayo 2026: señal institucional
            </p>
            <h2 className="mt-3 text-3xl font-black text-white md:text-4xl">
              La macro empieza a validar la tesis de energía + cómputo.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {strategicSignals.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-stone-800 bg-stone-950/60 p-6"
              >
                <p className="text-xs uppercase tracking-[0.25em] text-stone-500">
                  {item.title}
                </p>
                <p className="mt-3 text-3xl font-black text-white">
                  {item.metric}
                </p>
                <p className="mt-4 text-sm leading-7 text-stone-400">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Terminal */}
      <section id="terminal" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-amber-300">
            Terminal de recalibración
          </p>
          <h2 className="mt-3 text-3xl font-black text-white md:text-4xl">
            Compará kWh barato, venta fija de energía y cómputo IA.
          </h2>
          <p className="mt-4 text-stone-400">
            La minería Bitcoin puede servir como laboratorio, pero el modelo de
            largo plazo debe incorporar halvings, dificultad, capex, energía,
            compradores y captura local de valor.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-3xl border border-stone-800 bg-stone-900/70 p-6 shadow-2xl shadow-black/20">
            <label className="block text-xs font-bold uppercase tracking-[0.22em] text-stone-500">
              Volumen de energía
            </label>

            <div className="mt-3 flex items-center gap-3">
              <input
                type="number"
                min={0}
                value={monthlyKwh}
                onChange={(event) => setMonthlyKwh(Number(event.target.value))}
                className="w-full rounded-xl border border-stone-700 bg-stone-950 px-4 py-4 text-2xl font-black text-white outline-none transition focus:border-amber-400"
              />
              <span className="whitespace-nowrap rounded-xl border border-stone-800 bg-stone-950 px-4 py-4 text-sm font-bold text-stone-400">
                kWh/mes
              </span>
            </div>

            <div className="mt-6">
              <label className="block text-xs font-bold uppercase tracking-[0.22em] text-stone-500">
                Comparar Paraguay contra
              </label>

              <select
                value={benchmarkKey}
                onChange={(event) =>
                  setBenchmarkKey(event.target.value as BenchmarkKey)
                }
                className="mt-3 w-full rounded-xl border border-stone-700 bg-stone-950 px-4 py-4 text-sm font-bold text-white outline-none transition focus:border-amber-400"
              >
                {benchmarks.map((benchmark) => (
                  <option key={benchmark.key} value={benchmark.key}>
                    {benchmark.label} — {formatTariff(benchmark.tariff)}
                  </option>
                ))}
              </select>

              <p className="mt-3 text-sm leading-6 text-stone-500">
                {selectedBenchmark.description}
              </p>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div>
                <label className="block text-xs font-bold uppercase tracking-[0.22em] text-stone-500">
                  BTC mensual si extrapolás hoy
                </label>
                <input
                  type="number"
                  min={0}
                  value={btcMonthlyValueToday}
                  onChange={(event) =>
                    setBtcMonthlyValueToday(Number(event.target.value))
                  }
                  className="mt-3 w-full rounded-xl border border-stone-700 bg-stone-950 px-4 py-4 text-lg font-black text-white outline-none transition focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-[0.22em] text-stone-500">
                  Proxy cómputo IA USD/MWh
                </label>
                <input
                  type="number"
                  min={0}
                  value={aiComputeUsdPerMwh}
                  onChange={(event) =>
                    setAiComputeUsdPerMwh(Number(event.target.value))
                  }
                  className="mt-3 w-full rounded-xl border border-stone-700 bg-stone-950 px-4 py-4 text-lg font-black text-white outline-none transition focus:border-amber-400"
                />
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-amber-500/20 bg-amber-500/10 p-5">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-amber-300">
                Lectura del Terminal
              </p>
              <p className="mt-3 text-sm leading-7 text-stone-300">
                La ventaja paraguaya estimada frente a{" "}
                <strong className="text-amber-200">
                  {selectedBenchmark.label}
                </strong>{" "}
                es de{" "}
                <strong className="text-amber-200">
                  {calculation.advantagePercent.toFixed(1)}%
                </strong>
                . Pero la decisión estratégica no es solo “cuánto cuesta el
                kWh”, sino qué producto se construye encima: commodity,
                minería, cómputo, proveedor crítico o sistema operativo.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-stone-800 bg-stone-900/70 p-6 shadow-2xl shadow-black/20">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-stone-800 bg-stone-950/80 p-5">
                <p className="text-xs uppercase tracking-widest text-stone-500">
                  Costo Paraguay mensual
                </p>
                <p className="mt-2 text-3xl font-black text-emerald-400">
                  {formatUSD(calculation.paraguayMonthlyCost)}
                </p>
              </div>

              <div className="rounded-2xl border border-stone-800 bg-stone-950/80 p-5">
                <p className="text-xs uppercase tracking-widest text-stone-500">
                  Costo referencia mensual
                </p>
                <p className="mt-2 text-3xl font-black text-rose-300">
                  {formatUSD(calculation.benchmarkMonthlyCost)}
                </p>
              </div>

              <div className="rounded-2xl border border-amber-500/30 bg-amber-500/10 p-5 sm:col-span-2">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-amber-300">
                  Ventaja operativa anual estimada
                </p>
                <p className="mt-2 text-5xl font-black text-amber-200">
                  {formatUSD(calculation.annualAdvantage)}
                </p>
              </div>

              <div className="rounded-2xl border border-stone-800 bg-stone-950/80 p-5">
                <p className="text-xs uppercase tracking-widest text-stone-500">
                  Potencia promedio equivalente
                </p>
                <p className="mt-2 text-3xl font-black text-white">
                  {calculation.averageMw.toFixed(4)} MW
                </p>
              </div>

              <div className="rounded-2xl border border-stone-800 bg-stone-950/80 p-5">
                <p className="text-xs uppercase tracking-widest text-stone-500">
                  Energía anual
                </p>
                <p className="mt-2 text-3xl font-black text-white">
                  {calculation.annualMwh.toFixed(1)} MWh
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-4">
              <div className="rounded-2xl border border-stone-800 bg-stone-950/70 p-5">
                <p className="text-xs uppercase tracking-widest text-stone-500">
                  Venta fija tipo PPA a USD {PPA_REFERENCE_USD_PER_MWH}/MWh
                </p>
                <p className="mt-2 text-3xl font-black text-amber-200">
                  {formatUSD(calculation.ppaAnnualGross)} / año
                </p>
              </div>

              <div className="rounded-2xl border border-stone-800 bg-stone-950/70 p-5">
                <p className="text-xs uppercase tracking-widest text-stone-500">
                  Proxy cómputo IA a USD {aiComputeUsdPerMwh}/MWh
                </p>
                <p className="mt-2 text-3xl font-black text-emerald-300">
                  {formatUSD(calculation.aiComputeAnnualGross)} / año
                </p>
              </div>

              <div className="rounded-2xl border border-rose-500/20 bg-rose-500/10 p-5">
                <p className="text-xs uppercase tracking-widest text-rose-200">
                  BTC 30 años: naive vs halvings
                </p>
                <p className="mt-2 text-sm leading-7 text-stone-300">
                  Extrapolación simple:{" "}
                  <strong className="text-white">
                    {formatUSD(calculation.naiveBtcThirtyYear)}
                  </strong>{" "}
                  · Ajustado por halvings:{" "}
                  <strong className="text-rose-200">
                    {formatUSD(calculation.halvingAdjustedBtcThirtyYear)}
                  </strong>{" "}
                  · Penalización estructural aproximada:{" "}
                  <strong className="text-rose-200">
                    {calculation.halvingPenalty.toFixed(1)}%
                  </strong>
                  .
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 rounded-xl bg-amber-400 px-6 py-4 text-center text-sm font-black uppercase tracking-wide text-stone-950 transition hover:bg-amber-300"
              >
                Solicitar diagnóstico
              </a>

              <a
                href="#ranking"
                className="flex-1 rounded-xl border border-stone-700 px-6 py-4 text-center text-sm font-bold uppercase tracking-wide text-stone-200 transition hover:border-amber-400/60 hover:text-white"
              >
                Ver ranking
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Thesis Scenarios */}
      <section className="border-y border-stone-800 bg-stone-900/30">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="mb-10 max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-emerald-300">
              Modelo de tesis · 1.000 MW / 30 años
            </p>
            <h2 className="mt-3 text-3xl font-black text-white md:text-4xl">
              El salto mental: de minar Bitcoin a vender cómputo.
            </h2>
            <p className="mt-4 text-stone-400">
              Esta sección resume una tesis interna de comparación estratégica:
              no usar el kWh barato como fin, sino como input para capturar una
              capa superior de valor.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {thesisScenarios.map((scenario) => (
              <div
                key={scenario.label}
                className={`rounded-3xl border p-6 ${getScenarioClass(
                  scenario.tone
                )}`}
              >
                <p className="text-xs font-bold uppercase tracking-[0.22em] opacity-80">
                  {scenario.label}
                </p>
                <p className="mt-4 text-4xl font-black">{scenario.value}</p>
                <p className="mt-4 text-sm leading-7 text-stone-300">
                  {scenario.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-3xl border border-stone-800 bg-stone-950/70 p-6">
            <p className="text-sm leading-7 text-stone-400">
              Nota: estos valores deben tratarse como escenario analítico, no
              como valuación oficial. La utilidad estratégica está en el orden
              de magnitud: vender energía como commodity captura menos valor que
              convertirla en servicios, software, infraestructura, cómputo y
              capacidad productiva local.
            </p>
          </div>
        </div>
      </section>

      {/* Ranking */}
      <section id="ranking" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-amber-300">
            Ranking operativo
          </p>
          <h2 className="mt-3 text-3xl font-black text-white md:text-4xl">
            Paraguay compite por costo, pero gana cuando se combina con
            sistemas.
          </h2>
          <p className="mt-4 text-stone-400">
            La electricidad barata por sí sola no crea negocio. La oportunidad
            aparece cuando se conecta con automatización, ventas, infraestructura
            digital, documentación y procesos medibles.
          </p>
        </div>

        <div className="overflow-x-auto rounded-3xl border border-stone-800">
          <table className="w-full min-w-[820px] border-collapse text-left text-sm">
            <thead className="bg-stone-950 text-xs uppercase tracking-widest text-stone-500">
              <tr>
                <th className="px-5 py-4">Referencia</th>
                <th className="px-5 py-4">USD/kWh</th>
                <th className="px-5 py-4">Costo mensual</th>
                <th className="px-5 py-4">Diferencia vs Paraguay</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-stone-800 bg-emerald-500/5">
                <td className="px-5 py-4 font-bold text-emerald-300">
                  Paraguay empresarial
                </td>
                <td className="px-5 py-4 text-stone-300">
                  {formatTariff(PARAGUAY_BUSINESS_TARIFF)}
                </td>
                <td className="px-5 py-4 text-stone-300">
                  {formatUSD(monthlyKwh * PARAGUAY_BUSINESS_TARIFF)}
                </td>
                <td className="px-5 py-4 text-emerald-300">Base</td>
              </tr>

              {benchmarks.map((benchmark) => {
                const cost = monthlyKwh * benchmark.tariff;
                const diff = cost - monthlyKwh * PARAGUAY_BUSINESS_TARIFF;

                return (
                  <tr key={benchmark.key} className="border-t border-stone-800">
                    <td className="px-5 py-4 font-semibold text-white">
                      {benchmark.label}
                    </td>
                    <td className="px-5 py-4 text-stone-300">
                      {formatTariff(benchmark.tariff)}
                    </td>
                    <td className="px-5 py-4 text-stone-300">
                      {formatUSD(cost)}
                    </td>
                    <td className="px-5 py-4 font-bold text-amber-300">
                      {diff >= 0 ? "+" : ""}
                      {formatUSD(diff)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-xs leading-6 text-stone-500">
          Los valores son referencias promedio internacionales USD/kWh. Pueden
          variar según tarifa, consumo, impuestos, cargos de distribución,
          categoría de usuario, contrato y fecha de actualización.
        </p>
      </section>

      {/* B2B Pitch */}
      <section id="pitch" className="border-y border-stone-800 bg-stone-900/30">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-emerald-300">
                Oferta AYCweb
              </p>
              <h2 className="mt-3 text-3xl font-black text-white md:text-4xl">
                Proveedor Crítico Digital.
              </h2>
              <p className="mt-4 text-stone-400">
                El nuevo producto de AYCweb para industrias paraguayas que
                quieren presentarse ante compradores de infraestructura,
                energía, IA, data centers y cadenas B2B exigentes.
              </p>
            </div>

            <div className="rounded-3xl border border-amber-500/20 bg-gradient-to-br from-amber-500/10 to-emerald-500/10 p-8">
              <h3 className="text-2xl font-black text-white">
                No alcanza con tener fábrica. Hay que parecer proveedor
                calificable.
              </h3>

              <p className="mt-4 text-sm leading-8 text-stone-300">
                Los data centers, integradores y compradores internacionales no
                compran solo precio: compran documentación, capacidad productiva,
                trazabilidad, respuesta rápida y claridad técnica. AYCweb
                construye el portal, el catálogo, las fichas, el cotizador y el
                sistema comercial para que una empresa paraguaya pueda entrar en
                esa conversación.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "Portal técnico B2B",
                  "Catálogo industrial",
                  "Fichas PDF descargables",
                  "Cotizador RFQ",
                  "Supplier deck",
                  "Versión bilingüe",
                  "SEO industrial",
                  "WhatsApp + CRM",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-stone-700 bg-stone-950/60 px-4 py-3 text-sm font-bold text-stone-200"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex rounded-xl bg-amber-400 px-6 py-4 text-center text-sm font-black uppercase tracking-wide text-stone-950 transition hover:bg-amber-300"
              >
                Preparar mi empresa
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Opportunities */}
      <section id="oportunidades" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-amber-300">
            Dónde se convierte en dinero
          </p>
          <h2 className="mt-3 text-3xl font-black text-white md:text-4xl">
            La oportunidad está en la capa media.
          </h2>
          <p className="mt-4 text-stone-400">
            Los hyperscalers ponen capital. Paraguay pone energía. AYCweb prepara
            a empresas locales para capturar valor como proveedores,
            integradores y operadores.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {useCases.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-stone-800 bg-stone-900/70 p-6"
            >
              <h3 className="text-lg font-black text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-stone-400">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SEO Content */}
      <section className="border-y border-stone-800 bg-stone-900/30">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-emerald-300">
                Lectura nacional
              </p>
              <h2 className="mt-3 text-3xl font-black text-white md:text-4xl">
                Paraguay puede pasar de exportar energía a exportar capacidad.
              </h2>
            </div>

            <div className="space-y-5 text-sm leading-8 text-stone-300">
              <p>
                La tesis no es que todos deban construir data centers. Ese
                negocio exige capital intensivo, transmisión, permisos,
                refrigeración, seguridad, conectividad, talento y compradores de
                largo plazo.
              </p>

              <p>
                La oportunidad para empresas locales está en otro lugar:
                preparar proveedores industriales, digitalizar catálogos
                técnicos, crear cotizadores, ordenar propuestas y construir
                sistemas que permitan competir en cadenas de infraestructura
                crítica.
              </p>

              <p>
                Para AYCweb, esto redefine la venta: ya no es “te hacemos una
                web”. Es “preparamos tu empresa para ser visible, medible y
                comprable en la nueva economía de energía, IA e infraestructura”.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sources */}
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="rounded-3xl border border-stone-800 bg-stone-900/60 p-6">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-stone-500">
            Fuentes y referencias públicas
          </p>

          <div className="mt-5 grid gap-3 md:grid-cols-3">
            {sourceLinks.map((source) => (
              <a
                key={source.href}
                href={source.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-stone-800 bg-stone-950/70 p-4 text-sm font-bold text-stone-300 transition hover:border-amber-400/50 hover:text-white"
              >
                {source.label}
              </a>
            ))}
          </div>

          <p className="mt-5 text-xs leading-6 text-stone-500">
            El análisis de escenarios financieros comparativos se presenta como
            tesis estratégica interna. Debe validarse con modelos auditables,
            contratos, supuestos de tarifa, capex, opex, transmisión,
            disponibilidad, compradores, regulación y costo de capital.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-amber-300">
            Preguntas frecuentes
          </p>
          <h2 className="mt-3 text-3xl font-black text-white md:text-4xl">
            Lo que un empresario paraguayo debería entender ahora.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {faqs.map((item) => (
            <div
              key={item.q}
              className="rounded-3xl border border-stone-800 bg-stone-900/70 p-6"
            >
              <h3 className="font-black text-white">{item.q}</h3>
              <p className="mt-3 text-sm leading-7 text-stone-400">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Disclaimer */}
      <section className="border-t border-stone-800 bg-stone-950">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
          <div className="rounded-3xl border border-stone-800 bg-stone-900/60 p-6">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-stone-500">
              Aviso importante
            </p>
            <p className="mt-3 text-sm leading-7 text-stone-400">
              Esta página es una herramienta educativa y comercial de AYCweb. No
              constituye asesoría financiera, legal, energética, tributaria,
              técnica ni promesa de rentabilidad. KWH Index Paraguay se presenta
              como análisis de arbitraje energético e infraestructura digital,
              no como oferta pública, instrumento financiero, token regulado ni
              recomendación de inversión. Los cálculos son estimaciones y deben
              validarse con facturas, contratos, tarifas vigentes, estudios
              eléctricos, modelos financieros auditables y asesoramiento
              profesional.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
