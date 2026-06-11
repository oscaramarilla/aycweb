"use client";

import { useActionState } from "react";
import { submitLeadParaguay, type ActionResult } from "@/app/[locale]/(funnels)/invertir-en-paraguay/actions";

const initialState: ActionResult | null = null;

export default function FormularioLead() {
  const [result, dispatch, pending] = useActionState(
    submitLeadParaguay,
    initialState
  );

  if (result?.ok) {
    return (
      <div className="rounded-3xl border border-emerald-500/30 bg-emerald-950/20 p-8 text-center">
        <p className="mb-2 text-4xl">✅</p>
        <h3 className="mb-3 text-xl font-black text-white">
          ¡Recibimos tu solicitud!
        </h3>
        <p className="mb-6 text-stone-400">
          En 24 h hábiles nos ponemos en contacto. Podés también enviarnos el
          resumen directamente por WhatsApp:
        </p>
        <a
          href={result.waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-8 py-4 font-black text-zinc-950 transition hover:bg-[#1DA851] active:scale-95"
        >
          Enviar resumen por WhatsApp →
        </a>
      </div>
    );
  }

  return (
    <form action={dispatch} className="space-y-4">
      {result && !result.ok && (
        <p className="rounded-xl border border-red-800 bg-red-950/30 px-4 py-3 text-sm text-red-300">
          {result.error}
        </p>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-stone-500">Nombre *</label>
          <input name="nombre" required minLength={2} maxLength={80}
            className="w-full rounded-xl border border-stone-700 bg-stone-950 px-4 py-3 text-sm text-white outline-none transition focus:border-amber-400" placeholder="Tu nombre" />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-stone-500">Empresa (opcional)</label>
          <input name="empresa" maxLength={120}
            className="w-full rounded-xl border border-stone-700 bg-stone-950 px-4 py-3 text-sm text-white outline-none transition focus:border-amber-400" placeholder="Tu empresa" />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-stone-500">Email *</label>
          <input name="email" type="email" required
            className="w-full rounded-xl border border-stone-700 bg-stone-950 px-4 py-3 text-sm text-white outline-none transition focus:border-amber-400" placeholder="correo@empresa.com" />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-stone-500">WhatsApp *</label>
          <input name="whatsapp" required minLength={6} maxLength={20}
            className="w-full rounded-xl border border-stone-700 bg-stone-950 px-4 py-3 text-sm text-white outline-none transition focus:border-amber-400" placeholder="+54 9 11 1234-5678" />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-stone-500">País *</label>
          <input name="pais" required minLength={2} maxLength={60}
            className="w-full rounded-xl border border-stone-700 bg-stone-950 px-4 py-3 text-sm text-white outline-none transition focus:border-amber-400" placeholder="Argentina, Brasil, España..." />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-stone-500">Sector de interés *</label>
          <select name="sector" required className="w-full rounded-xl border border-stone-700 bg-stone-950 px-4 py-3 text-sm text-white outline-none transition focus:border-amber-400">
            <option value="">Seleccioná un sector</option>
            <option value="energia">Energía e industrialización</option>
            <option value="agroindustria">Agroindustria</option>
            <option value="tecnologia">Tecnología e infraestructura digital</option>
            <option value="logistica">Logística y corredor bioceánico</option>
            <option value="real_estate">Real Estate productivo</option>
            <option value="otro">Otro / Explorar</option>
          </select>
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-stone-500">Objetivo *</label>
          <select name="objetivo" required className="w-full rounded-xl border border-stone-700 bg-stone-950 px-4 py-3 text-sm text-white outline-none transition focus:border-amber-400">
            <option value="">¿Qué buscás?</option>
            <option value="invertir">Invertir capital</option>
            <option value="instalar_operacion">Instalar una operación</option>
            <option value="socio_local">Encontrar socio local</option>
            <option value="exportar_importar">Exportar / importar</option>
            <option value="explorar">Explorar opciones</option>
          </select>
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-stone-500">Rango de capital *</label>
          <select name="capital" required className="w-full rounded-xl border border-stone-700 bg-stone-950 px-4 py-3 text-sm text-white outline-none transition focus:border-amber-400">
            <option value="">Seleccioná un rango</option>
            <option value="menos_50k">Menos de US$ 50.000</option>
            <option value="50k_250k">US$ 50.000 – 250.000</option>
            <option value="250k_1m">US$ 250.000 – 1.000.000</option>
            <option value="mas_1m">Más de US$ 1.000.000</option>
            <option value="prefiere_no_decir">Prefiero no decirlo</option>
          </select>
        </div>
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-stone-500">Horizonte de decisión *</label>
        <select name="horizonte" required className="w-full rounded-xl border border-stone-700 bg-stone-950 px-4 py-3 text-sm text-white outline-none transition focus:border-amber-400">
          <option value="">¿En cuánto tiempo decidís?</option>
          <option value="0_6m">0 – 6 meses</option>
          <option value="6_18m">6 – 18 meses</option>
          <option value="mas_18m">Más de 18 meses</option>
        </select>
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-stone-500">Mensaje adicional (opcional)</label>
        <textarea name="mensaje" maxLength={600} rows={3}
          className="w-full resize-none rounded-xl border border-stone-700 bg-stone-950 px-4 py-3 text-sm text-white outline-none transition focus:border-amber-400"
          placeholder="Contexto adicional, preguntas específicas, tamaño del proyecto..."
        />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-xl bg-amber-400 px-6 py-4 font-black uppercase tracking-wide text-stone-950 transition hover:bg-amber-300 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {pending ? "Enviando..." : "Solicitar dossier y llamada estratégica →"}
      </button>

      <p className="text-center text-xs text-stone-600">
        Sin costo. Sin spam. Respondemos en 24 h hábiles.
      </p>
    </form>
  );
}
