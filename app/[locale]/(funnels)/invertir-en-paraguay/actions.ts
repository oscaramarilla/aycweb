"use server";

import { getTranslations } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { leadParaguaySchema, SECTOR_LABELS, CAPITAL_LABELS, type LeadParaguay } from "@/lib/domain/leadParaguay";
import { AYCWEB_CONTACT } from "@/lib/config/contact";

export type ActionResult =
  | { ok: true; waUrl: string }
  | { ok: false; error: string };

export async function submitLeadParaguay(
  _prevState: ActionResult | null,
  formData: FormData
): Promise<ActionResult> {
  // El locale viaja como campo oculto del formulario para localizar errores.
  const rawLocale = formData.get("locale");
  const locale = hasLocale(routing.locales, rawLocale)
    ? rawLocale
    : routing.defaultLocale;
  const t = await getTranslations({ locale, namespace: "invest.form" });

  const raw = {
    nombre:    formData.get("nombre"),
    empresa:   formData.get("empresa") ?? "",
    email:     formData.get("email"),
    whatsapp:  formData.get("whatsapp"),
    pais:      formData.get("pais"),
    sector:    formData.get("sector"),
    objetivo:  formData.get("objetivo"),
    capital:   formData.get("capital"),
    horizonte: formData.get("horizonte"),
    mensaje:   formData.get("mensaje") ?? "",
  };

  const parsed = leadParaguaySchema.safeParse(raw);
  if (!parsed.success) {
    return { ok: false, error: t("errorInvalid") };
  }

  const lead: LeadParaguay = parsed.data;

  // Persist to Supabase REST API (requires SUPABASE_URL + SUPABASE_SERVICE_KEY env vars)
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_KEY;

  if (supabaseUrl && supabaseKey) {
    try {
      await fetch(`${supabaseUrl}/rest/v1/leads_paraguay`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: supabaseKey,
          Authorization: `Bearer ${supabaseKey}`,
          Prefer: "return=minimal",
        },
        body: JSON.stringify({
          ...lead,
          source: "invertir-en-paraguay",
          locale,
          created_at: new Date().toISOString(),
        }),
      });
    } catch {
      // Non-blocking: log but don't fail the user flow
    }
  }

  // Build WhatsApp notification link for Oscar
  const resumen = [
    `*Nuevo lead · Invertir en Paraguay*`,
    `Nombre: ${lead.nombre}`,
    lead.empresa ? `Empresa: ${lead.empresa}` : null,
    `Email: ${lead.email}`,
    `WhatsApp: ${lead.whatsapp}`,
    `País: ${lead.pais}`,
    `Idioma: ${locale.toUpperCase()}`,
    `Sector: ${SECTOR_LABELS[lead.sector]}`,
    `Capital: ${CAPITAL_LABELS[lead.capital]}`,
    `Horizonte: ${lead.horizonte}`,
    lead.mensaje ? `Mensaje: ${lead.mensaje}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  const waUrl = `https://wa.me/${AYCWEB_CONTACT.whatsappNumber}?text=${encodeURIComponent(resumen)}`;

  return { ok: true, waUrl };
}
