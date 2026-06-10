"use client";

import { useMemo, useState } from "react";
import { AYCWEB_CONTACT } from "@/lib/config/contact";

const PARAGUAY_BUSINESS_TARIFF = 0.045;

type BenchmarkKey =
  | "worldBusiness"
  | "worldResidential"
  | "southAmericaBusiness"
  | "europeBusiness"
  | "usaBusiness"
  | "germanyBusiness"
  | "brazilBusiness"
  | "uruguayBusiness";

const benchmarks = [
  { key: "worldBusiness" as BenchmarkKey,       label: "Promedio mundial empresarial",  tariff: 0.164 },
  { key: "worldResidential" as BenchmarkKey,    label: "Promedio mundial residencial",  tariff: 0.174 },
  { key: "southAmericaBusiness" as BenchmarkKey,label: "Promedio Sudamérica empresarial", tariff: 0.199 },
  { key: "europeBusiness" as BenchmarkKey,      label: "Promedio Europa empresarial",   tariff: 0.217 },
  { key: "usaBusiness" as BenchmarkKey,         label: "Estados Unidos empresarial",    tariff: 0.145 },
  { key: "germanyBusiness" as BenchmarkKey,     label: "Alemania empresarial",          tariff: 0.285 },
  { key: "brazilBusiness" as BenchmarkKey,      label: "Brasil empresarial",            tariff: 0.173 },
  { key: "uruguayBusiness" as BenchmarkKey,     label: "Uruguay empresarial",           tariff: 0.202 },
];

function fmt(n: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);
}

export default function CalculadoraKwh() {
  const [kwh, setKwh] = useState(13000);
  const [benchmarkKey, setBenchmarkKey] = useState<BenchmarkKey>("worldBusiness");

  const selected = benchmarks.find((b) => b.key === benchmarkKey) ?? benchmarks[0];

  const calc = useMemo(() => {
    const py = kwh * PARAGUAY_BUSINESS_TARIFF;
    const ref = kwh * selected.tariff;
    const diff = ref - py;
    return { py, ref, diff, annual: diff * 12, pct: ref > 0 ? (diff / ref) * 100 : 0 };
  }, [kwh, selected]);

  const waMsg = encodeURIComponent(
    AYCWEB_CONTACT.clientMessages?.invertirParaguay?.dossier ??
      AYCWEB_CONTACT.globalMessages.generalInquiry
  );
  const waUrl = `https://wa.me/${AYCWEB_CONTACT.whatsappNumber}?text=${waMsg}`;

  return (
    <div className="rounded-3xl border border-amber-500/20 bg-stone-900/60 p-6 md:p-8">
      <p className="mb-1 text-xs font-bold uppercase tracking-[0.22em] text-amber-300">
        Calculadora de arbitraje energético
      </p>
      <h3 className="mb-6 text-2xl font-black text-white">
        ¿Cuánto vale operar con tarifa paraguaya?
      </h3>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Inputs */}
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">
              Consumo mensual (kWh)
            </label>
            <input
              type="number"
              min={0}
              value={kwh}
              onChange={(e) => setKwh(Number(e.target.value))}
              className="w-full rounded-xl border border-stone-700 bg-stone-950 px-4 py-3 text-xl font-black text-white outline-none focus:border-amber-400"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">
              Comparar contra
            </label>
            <select
              value={benchmarkKey}
              onChange={(e) => setBenchmarkKey(e.target.value as BenchmarkKey)}
              className="w-full rounded-xl border border-stone-700 bg-stone-950 px-4 py-3 text-sm font-bold text-white outline-none focus:border-amber-400"
            >
              {benchmarks.map((b) => (
                <option key={b.key} value={b.key}>
                  {b.label} — ${b.tariff.toFixed(3)}/kWh
                </option>
              ))}
            </select>
          </div>

          <div className="rounded-2xl border border-amber-500/20 bg-amber-500/10 p-4">
            <p className="text-xs font-bold uppercase tracking-widest text-amber-300 mb-2">
              Ventaja Paraguay
            </p>
            <p className="text-sm text-stone-300">
              A este consumo, Paraguay muestra una ventaja estimada de{" "}
              <strong className="text-amber-200">{calc.pct.toFixed(1)}%</strong>{" "}
              frente a la referencia seleccionada.
            </p>
          </div>
        </div>

        {/* Results */}
        <div className="grid grid-cols-2 gap-3 content-start">
          <div className="rounded-2xl border border-stone-800 bg-stone-950 p-4">
            <p className="text-xs uppercase tracking-widest text-stone-500">Paraguay/mes</p>
            <p className="mt-1 text-2xl font-black text-emerald-400">{fmt(calc.py)}</p>
          </div>
          <div className="rounded-2xl border border-stone-800 bg-stone-950 p-4">
            <p className="text-xs uppercase tracking-widest text-stone-500">Referencia/mes</p>
            <p className="mt-1 text-2xl font-black text-rose-300">{fmt(calc.ref)}</p>
          </div>
          <div className="col-span-2 rounded-2xl border border-amber-500/30 bg-amber-500/10 p-4">
            <p className="text-xs font-bold uppercase tracking-widest text-amber-300">Ventaja mensual</p>
            <p className="mt-1 text-4xl font-black text-amber-200">{fmt(calc.diff)}</p>
          </div>
          <div className="col-span-2 rounded-2xl border border-stone-800 bg-stone-950 p-4">
            <p className="text-xs uppercase tracking-widest text-stone-500">Ventaja anual estimada</p>
            <p className="mt-1 text-3xl font-black text-white">{fmt(calc.annual)}</p>
          </div>
        </div>
      </div>

      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-amber-400 px-6 py-4 text-sm font-black uppercase tracking-wide text-stone-950 transition hover:bg-amber-300 active:scale-95"
      >
        Solicitar diagnóstico energético →
      </a>
    </div>
  );
}
