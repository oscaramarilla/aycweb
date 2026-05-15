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

const PARAGUAY_BUSINESS_TARIFF = 0.045;
const PARAGUAY_RESIDENTIAL_TARIFF = 0.054;

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
    tariff: 0.145,
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
    tariff: 0.173,
    description: "Comparación cercana para operaciones regionales.",
  },
  {
    key: "uruguayBusiness",
    label: "Uruguay empresarial",
    tariff: 0.202,
    description: "Comparación regional de alto costo relativo.",
  },
];

const useCases = [
  {
    title: "Sistemas internos",
    text: "Cotizadores, paneles, CRMs, dashboards y automatizaciones que reducen horas manuales.",
  },
  {
    title: "Operaciones digitales",
    text: "Workflows, IA, procesos de venta y atención conectados a WhatsApp o formularios.",
  },
  {
    title: "Industria liviana",
    text: "Negocios que necesitan calcular energía, margen, logística, producción y precio final.",
  },
  {
    title: "Nearshoring digital",
    text: "Empresas que buscan ejecutar procesos desde países con menor costo estructural.",
  },
];

const faqs = [
  {
    q: "¿Cuánto cuesta el kWh empresarial en Paraguay?",
    a: "La referencia usada en esta calculadora es USD 0.045/kWh para tarifa empresarial. El valor puede variar según categoría, consumo, contrato, cargos e impuestos aplicables.",
  },
  {
    q: "¿Por qué comparar Paraguay contra el promedio mundial?",
    a: "Porque el costo eléctrico es una variable estructural. Cuando una empresa consume energía para operar, producir, automatizar o procesar datos, una tarifa más baja puede mejorar su competitividad.",
  },
  {
    q: "¿Esto significa que Paraguay siempre es mejor para operar?",
    a: "No. El kWh barato es una ventaja, pero no es la única variable. También importan internet, talento, estabilidad legal, logística, impuestos, calidad de servicio y acceso a clientes.",
  },
  {
    q: "¿Qué vende AYCweb con esta herramienta?",
    a: "AYCweb convierte ventajas estructurales en sistemas comerciales: calculadoras, cotizadores, embudos, automatizaciones, paneles internos y flujos de venta para empresas.",
  },
  {
    q: "¿KWHCoin es una inversión financiera?",
    a: "No. Esta página presenta una calculadora educativa de arbitraje energético y oportunidades operativas. No ofrece asesoría financiera, inversión, token regulado ni promesa de rentabilidad.",
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

export default function InvestorArbitrageDashboard() {
  const [monthlyKwh, setMonthlyKwh] = useState(13000);
  const [benchmarkKey, setBenchmarkKey] =
    useState<BenchmarkKey>("worldBusiness");

  const selectedBenchmark =
    benchmarks.find((item) => item.key === benchmarkKey) ?? benchmarks[0];

  const calculation = useMemo(() => {
    const paraguayMonthlyCost = monthlyKwh * PARAGUAY_BUSINESS_TARIFF;
    const benchmarkMonthlyCost = monthlyKwh * selectedBenchmark.tariff;
    const monthlyAdvantage = benchmarkMonthlyCost - paraguayMonthlyCost;
    const annualAdvantage = monthlyAdvantage * 12;
    const benchmarkAnnualCost = benchmarkMonthlyCost * 12;
    const paraguayAnnualCost = paraguayMonthlyCost * 12;

    const advantagePercent =
      benchmarkMonthlyCost > 0
        ? (monthlyAdvantage / benchmarkMonthlyCost) * 100
        : 0;

    return {
      paraguayMonthlyCost,
      benchmarkMonthlyCost,
      monthlyAdvantage,
      annualAdvantage,
      benchmarkAnnualCost,
      paraguayAnnualCost,
      advantagePercent,
    };
  }, [monthlyKwh, selectedBenchmark]);

  const whatsappText = encodeURIComponent(
    `Hola AYCweb, quiero analizar la ventaja energética de Paraguay para una operación de ${formatKwh(
      monthlyKwh
    )} kWh/mes comparada contra ${selectedBenchmark.label}.`
  );

  const whatsappUrl = `https://wa.me/595981000000?text=${whatsappText}`;

  return (
    <main className="min-h-screen bg-stone-950 text-stone-100">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-amber-500/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.18),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.12),transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-4xl">
            <p className="mb-4 inline-flex rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-amber-300">
              Índice KWH Paraguay
            </p>

            <h1 className="text-4xl font-black tracking-tight text-white md:text-6xl">
              Paraguay no solo tiene energía barata. Tiene una oportunidad de
              infraestructura digital.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-300">
              Calculá cuánto cambia el costo operativo de una empresa, sistema,
              data workflow o infraestructura digital cuando se ejecuta desde un
              país con electricidad competitiva.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#calculadora"
                className="rounded-xl bg-amber-400 px-6 py-4 text-center text-sm font-black uppercase tracking-wide text-stone-950 transition hover:bg-amber-300"
              >
                Calcular mi escenario
              </a>

              <a
                href="#oportunidades"
                className="rounded-xl border border-stone-700 px-6 py-4 text-center text-sm font-bold uppercase tracking-wide text-stone-200 transition hover:border-amber-400/60 hover:text-white"
              >
                Ver oportunidades
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
                Paraguay residencial
              </p>
              <p className="mt-2 text-3xl font-black text-emerald-300">
                {formatTariff(PARAGUAY_RESIDENTIAL_TARIFF)}
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
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section id="calculadora" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-amber-300">
            Calculadora de arbitraje energético
          </p>
          <h2 className="mt-3 text-3xl font-black text-white md:text-4xl">
            Visualizá la ventaja mensual y anual de operar con tarifa
            paraguaya.
          </h2>
          <p className="mt-4 text-stone-400">
            Ingresá un consumo estimado de energía y compará el costo operativo
            de Paraguay contra diferentes referencias internacionales.
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
                Comparar contra
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

            <div className="mt-8 rounded-2xl border border-amber-500/20 bg-amber-500/10 p-5">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-amber-300">
                Lectura estratégica
              </p>
              <p className="mt-3 text-sm leading-7 text-stone-300">
                A este nivel de consumo, Paraguay muestra una ventaja estimada
                de{" "}
                <strong className="text-amber-200">
                  {calculation.advantagePercent.toFixed(1)}%
                </strong>{" "}
                frente a la referencia seleccionada. Ese diferencial puede
                convertirse en precio, margen, reinversión, automatización o
                capacidad operativa.
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
                  Ventaja operativa mensual estimada
                </p>
                <p className="mt-2 text-5xl font-black text-amber-200">
                  {formatUSD(calculation.monthlyAdvantage)}
                </p>
              </div>

              <div className="rounded-2xl border border-stone-800 bg-stone-950/80 p-5 sm:col-span-2">
                <p className="text-xs uppercase tracking-widest text-stone-500">
                  Ventaja anual estimada
                </p>
                <p className="mt-2 text-4xl font-black text-white">
                  {formatUSD(calculation.annualAdvantage)}
                </p>
                <p className="mt-3 text-sm leading-6 text-stone-400">
                  Comparación anual: Paraguay{" "}
                  <strong className="text-emerald-300">
                    {formatUSD(calculation.paraguayAnnualCost)}
                  </strong>{" "}
                  vs. referencia{" "}
                  <strong className="text-rose-300">
                    {formatUSD(calculation.benchmarkAnnualCost)}
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

      {/* Strategic Ranking */}
      <section id="ranking" className="border-y border-stone-800 bg-stone-900/30">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-emerald-300">
              Ranking estratégico
            </p>
            <h2 className="mt-3 text-3xl font-black text-white md:text-4xl">
              Paraguay compite por costo, pero gana cuando se combina con
              sistemas.
            </h2>
            <p className="mt-4 text-stone-400">
              La electricidad barata por sí sola no crea negocio. La
              oportunidad aparece cuando se conecta con automatización, ventas,
              infraestructura digital y procesos medibles.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-stone-800">
            <table className="w-full border-collapse text-left text-sm">
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
                    <tr
                      key={benchmark.key}
                      className="border-t border-stone-800"
                    >
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
                        +{formatUSD(diff)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-xs leading-6 text-stone-500">
            Datos de referencia basados en precios promedio internacionales
            USD/kWh. Los valores pueden variar según tarifa, consumo, impuestos,
            cargos de distribución, categoría de usuario y fecha de actualización.
          </p>
        </div>
      </section>

      {/* Opportunities */}
      <section id="oportunidades" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-amber-300">
            Oportunidades reales
          </p>
          <h2 className="mt-3 text-3xl font-black text-white md:text-4xl">
            Dónde se convierte esta ventaja en dinero.
          </h2>
          <p className="mt-4 text-stone-400">
            El activo no es solo pagar menos luz. El activo es usar esa ventaja
            para construir operaciones más eficientes, vendibles y medibles.
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

        <div className="mt-10 rounded-3xl border border-amber-500/20 bg-gradient-to-br from-amber-500/10 to-emerald-500/10 p-8">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-amber-300">
            Producto AYCweb
          </p>
          <h3 className="mt-3 text-3xl font-black text-white">
            Convertimos esta lectura en una calculadora para tu empresa.
          </h3>
          <p className="mt-4 max-w-3xl text-stone-300">
            Podemos crear un motor personalizado que combine energía, mano de
            obra, insumos, logística, margen, impuestos y precio sugerido. Ideal
            para industrias, distribuidores, metalúrgicas, servicios técnicos,
            logística y negocios B2B.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-amber-400 px-6 py-4 text-center text-sm font-black uppercase tracking-wide text-stone-950 transition hover:bg-amber-300"
            >
              Quiero mi calculadora
            </a>

            <a
              href="/contacto"
              className="rounded-xl border border-stone-700 px-6 py-4 text-center text-sm font-bold uppercase tracking-wide text-stone-200 transition hover:border-amber-400/60 hover:text-white"
            >
              Contactar AYCweb
            </a>
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="border-y border-stone-800 bg-stone-900/30">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-emerald-300">
                Lectura mundial
              </p>
              <h2 className="mt-3 text-3xl font-black text-white md:text-4xl">
                La energía se está convirtiendo en una variable estratégica.
              </h2>
            </div>

            <div className="space-y-5 text-sm leading-8 text-stone-300">
              <p>
                A medida que crecen la inteligencia artificial, los data
                workflows, la automatización, la refrigeración, los vehículos
                eléctricos y la digitalización industrial, el costo de la
                electricidad deja de ser un gasto invisible y pasa a ser una
                ventaja competitiva.
              </p>

              <p>
                En ese contexto, Paraguay tiene una posición interesante: no
                basta con tener electricidad competitiva; el desafío es
                convertir ese diferencial en sistemas, procesos, herramientas y
                modelos comerciales que generen valor medible.
              </p>

              <p>
                Esta calculadora existe para visualizar ese diferencial y abrir
                conversaciones con empresas que necesitan vender mejor, calcular
                mejor y operar con más precisión.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-amber-300">
            Preguntas frecuentes
          </p>
          <h2 className="mt-3 text-3xl font-black text-white md:text-4xl">
            Lo que un inversor, empresario o comprador debería entender.
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
              Esta página es una herramienta educativa y comercial de AYCweb.
              No constituye asesoría financiera, legal, energética, tributaria
              ni promesa de rentabilidad. KWHCoin se presenta aquí como concepto
              de análisis de arbitraje energético, no como oferta pública,
              instrumento financiero, token regulado ni recomendación de
              inversión. Los cálculos son estimaciones y deben validarse con
              facturas, contratos, tarifas vigentes y asesoramiento profesional.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
