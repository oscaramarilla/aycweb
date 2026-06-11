"use client";

import { useActionState } from "react";
import { submitLeadParaguay, type ActionResult } from "@/app/[lang]/(funnels)/invertir-en-paraguay/actions";
import type { InvertirDict } from "@/lib/config/invertirParaguay";

const initialState: ActionResult | null = null;

type Props = {
  dict: InvertirDict["form"];
  lang: string;
};

export default function FormularioLead({ dict, lang }: Props) {
  const [result, dispatch, pending] = useActionState(
    submitLeadParaguay,
    initialState
  );

  if (result?.ok) {
    return (
      <div className="rounded-3xl border border-emerald-500/30 bg-emerald-950/20 p-8 text-center">
        <p className="mb-2 text-4xl">✅</p>
        <h3 className="mb-3 text-xl font-black text-white">
          {dict.successTitle}
        </h3>
        <p className="mb-6 text-stone-400">
          {dict.successBody}
        </p>
        <a
          href={result.waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-8 py-4 font-black text-zinc-950 transition hover:bg-[#1DA851] active:scale-95"
        >
          {dict.successCta}
        </a>
      </div>
    );
  }

  return (
    <form action={dispatch} className="space-y-4">
      <input type="hidden" name="locale" value={lang} />

      {result && !result.ok && (
        <p className="rounded-xl border border-red-800 bg-red-950/30 px-4 py-3 text-sm text-red-300">
          {result.error}
        </p>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-stone-500">{dict.name}</label>
          <input name="nombre" required minLength={2} maxLength={80}
            className="w-full rounded-xl border border-stone-700 bg-stone-950 px-4 py-3 text-sm text-white outline-none transition focus:border-amber-400" placeholder={dict.namePlaceholder} />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-stone-500">{dict.company}</label>
          <input name="empresa" maxLength={120}
            className="w-full rounded-xl border border-stone-700 bg-stone-950 px-4 py-3 text-sm text-white outline-none transition focus:border-amber-400" placeholder={dict.companyPlaceholder} />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-stone-500">{dict.email}</label>
          <input name="email" type="email" required
            className="w-full rounded-xl border border-stone-700 bg-stone-950 px-4 py-3 text-sm text-white outline-none transition focus:border-amber-400" placeholder={dict.emailPlaceholder} />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-stone-500">{dict.whatsapp}</label>
          <input name="whatsapp" required minLength={6} maxLength={20}
            className="w-full rounded-xl border border-stone-700 bg-stone-950 px-4 py-3 text-sm text-white outline-none transition focus:border-amber-400" placeholder={dict.whatsappPlaceholder} />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-stone-500">{dict.country}</label>
          <input name="pais" required minLength={2} maxLength={60}
            className="w-full rounded-xl border border-stone-700 bg-stone-950 px-4 py-3 text-sm text-white outline-none transition focus:border-amber-400" placeholder={dict.countryPlaceholder} />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-stone-500">{dict.sectorLabel}</label>
          <select name="sector" required className="w-full rounded-xl border border-stone-700 bg-stone-950 px-4 py-3 text-sm text-white outline-none transition focus:border-amber-400">
            <option value="">{dict.sectorPlaceholder}</option>
            <option value="energia">{dict.sectorEnergia}</option>
            <option value="agroindustria">{dict.sectorAgro}</option>
            <option value="tecnologia">{dict.sectorTec}</option>
            <option value="logistica">{dict.sectorLog}</option>
            <option value="real_estate">{dict.sectorRealEstate}</option>
            <option value="otro">{dict.sectorOtro}</option>
          </select>
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-stone-500">{dict.objectiveLabel}</label>
          <select name="objetivo" required className="w-full rounded-xl border border-stone-700 bg-stone-950 px-4 py-3 text-sm text-white outline-none transition focus:border-amber-400">
            <option value="">{dict.objectivePlaceholder}</option>
            <option value="invertir">{dict.objInvertir}</option>
            <option value="instalar_operacion">{dict.objInstalar}</option>
            <option value="socio_local">{dict.objSocio}</option>
            <option value="exportar_importar">{dict.objExportar}</option>
            <option value="explorar">{dict.objExplorar}</option>
          </select>
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-stone-500">{dict.capitalLabel}</label>
          <select name="capital" required className="w-full rounded-xl border border-stone-700 bg-stone-950 px-4 py-3 text-sm text-white outline-none transition focus:border-amber-400">
            <option value="">{dict.capitalPlaceholder}</option>
            <option value="menos_50k">{dict.capital1}</option>
            <option value="50k_250k">{dict.capital2}</option>
            <option value="250k_1m">{dict.capital3}</option>
            <option value="mas_1m">{dict.capital4}</option>
            <option value="prefiere_no_decir">{dict.capital5}</option>
          </select>
        </div>
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-stone-500">{dict.horizonLabel}</label>
        <select name="horizonte" required className="w-full rounded-xl border border-stone-700 bg-stone-950 px-4 py-3 text-sm text-white outline-none transition focus:border-amber-400">
          <option value="">{dict.horizonPlaceholder}</option>
          <option value="0_6m">{dict.horizon1}</option>
          <option value="6_18m">{dict.horizon2}</option>
          <option value="mas_18m">{dict.horizon3}</option>
        </select>
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-stone-500">{dict.messageLabel}</label>
        <textarea name="mensaje" maxLength={600} rows={3}
          className="w-full resize-none rounded-xl border border-stone-700 bg-stone-950 px-4 py-3 text-sm text-white outline-none transition focus:border-amber-400"
          placeholder={dict.messagePlaceholder}
        />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-xl bg-amber-400 px-6 py-4 font-black uppercase tracking-wide text-stone-950 transition hover:bg-amber-300 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {pending ? dict.submitting : dict.submit}
      </button>

      <p className="text-center text-xs text-stone-600">
        {dict.footnote}
      </p>
    </form>
  );
}
