"use client";

import { useActionState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { submitLeadParaguay, type ActionResult } from "@/app/[locale]/(funnels)/invertir-en-paraguay/actions";

const initialState: ActionResult | null = null;

export default function FormularioLead() {
  const t = useTranslations("invest.form");
  const locale = useLocale();
  const [result, dispatch, pending] = useActionState(
    submitLeadParaguay,
    initialState
  );

  if (result?.ok) {
    return (
      <div className="rounded-3xl border border-emerald-500/30 bg-emerald-950/20 p-8 text-center">
        <p className="mb-2 text-4xl">✅</p>
        <h3 className="mb-3 text-xl font-black text-white">
          {t("successTitle")}
        </h3>
        <p className="mb-6 text-stone-400">
          {t("successBody")}
        </p>
        <a
          href={result.waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-8 py-4 font-black text-zinc-950 transition hover:bg-[#1DA851] active:scale-95"
        >
          {t("successCta")}
        </a>
      </div>
    );
  }

  return (
    <form action={dispatch} className="space-y-4">
      <input type="hidden" name="locale" value={locale} />

      {result && !result.ok && (
        <p className="rounded-xl border border-red-800 bg-red-950/30 px-4 py-3 text-sm text-red-300">
          {result.error}
        </p>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-stone-500">{t("name")}</label>
          <input name="nombre" required minLength={2} maxLength={80}
            className="w-full rounded-xl border border-stone-700 bg-stone-950 px-4 py-3 text-sm text-white outline-none transition focus:border-amber-400" placeholder={t("namePlaceholder")} />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-stone-500">{t("company")}</label>
          <input name="empresa" maxLength={120}
            className="w-full rounded-xl border border-stone-700 bg-stone-950 px-4 py-3 text-sm text-white outline-none transition focus:border-amber-400" placeholder={t("companyPlaceholder")} />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-stone-500">{t("email")}</label>
          <input name="email" type="email" required
            className="w-full rounded-xl border border-stone-700 bg-stone-950 px-4 py-3 text-sm text-white outline-none transition focus:border-amber-400" placeholder={t("emailPlaceholder")} />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-stone-500">{t("whatsapp")}</label>
          <input name="whatsapp" required minLength={6} maxLength={20}
            className="w-full rounded-xl border border-stone-700 bg-stone-950 px-4 py-3 text-sm text-white outline-none transition focus:border-amber-400" placeholder={t("whatsappPlaceholder")} />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-stone-500">{t("country")}</label>
          <input name="pais" required minLength={2} maxLength={60}
            className="w-full rounded-xl border border-stone-700 bg-stone-950 px-4 py-3 text-sm text-white outline-none transition focus:border-amber-400" placeholder={t("countryPlaceholder")} />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-stone-500">{t("sectorLabel")}</label>
          <select name="sector" required className="w-full rounded-xl border border-stone-700 bg-stone-950 px-4 py-3 text-sm text-white outline-none transition focus:border-amber-400">
            <option value="">{t("sectorPlaceholder")}</option>
            <option value="energia">{t("sectorEnergia")}</option>
            <option value="agroindustria">{t("sectorAgro")}</option>
            <option value="tecnologia">{t("sectorTec")}</option>
            <option value="logistica">{t("sectorLog")}</option>
            <option value="real_estate">{t("sectorRealEstate")}</option>
            <option value="otro">{t("sectorOtro")}</option>
          </select>
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-stone-500">{t("objectiveLabel")}</label>
          <select name="objetivo" required className="w-full rounded-xl border border-stone-700 bg-stone-950 px-4 py-3 text-sm text-white outline-none transition focus:border-amber-400">
            <option value="">{t("objectivePlaceholder")}</option>
            <option value="invertir">{t("objInvertir")}</option>
            <option value="instalar_operacion">{t("objInstalar")}</option>
            <option value="socio_local">{t("objSocio")}</option>
            <option value="exportar_importar">{t("objExportar")}</option>
            <option value="explorar">{t("objExplorar")}</option>
          </select>
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-stone-500">{t("capitalLabel")}</label>
          <select name="capital" required className="w-full rounded-xl border border-stone-700 bg-stone-950 px-4 py-3 text-sm text-white outline-none transition focus:border-amber-400">
            <option value="">{t("capitalPlaceholder")}</option>
            <option value="menos_50k">{t("capital1")}</option>
            <option value="50k_250k">{t("capital2")}</option>
            <option value="250k_1m">{t("capital3")}</option>
            <option value="mas_1m">{t("capital4")}</option>
            <option value="prefiere_no_decir">{t("capital5")}</option>
          </select>
        </div>
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-stone-500">{t("horizonLabel")}</label>
        <select name="horizonte" required className="w-full rounded-xl border border-stone-700 bg-stone-950 px-4 py-3 text-sm text-white outline-none transition focus:border-amber-400">
          <option value="">{t("horizonPlaceholder")}</option>
          <option value="0_6m">{t("horizon1")}</option>
          <option value="6_18m">{t("horizon2")}</option>
          <option value="mas_18m">{t("horizon3")}</option>
        </select>
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-stone-500">{t("messageLabel")}</label>
        <textarea name="mensaje" maxLength={600} rows={3}
          className="w-full resize-none rounded-xl border border-stone-700 bg-stone-950 px-4 py-3 text-sm text-white outline-none transition focus:border-amber-400"
          placeholder={t("messagePlaceholder")}
        />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-xl bg-amber-400 px-6 py-4 font-black uppercase tracking-wide text-stone-950 transition hover:bg-amber-300 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {pending ? t("submitting") : t("submit")}
      </button>

      <p className="text-center text-xs text-stone-600">
        {t("footnote")}
      </p>
    </form>
  );
}
