// ============================================================
// TEST: lib/services/whatsapp-link.ts
// ============================================================
// Garantiza que buildWhatsAppLink NUNCA genere un link sin número.
// Ejecutar con: npx vitest run lib/services/whatsapp-link.test.ts
//           o: npx jest lib/services/whatsapp-link.test.ts
// ============================================================

import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { buildWhatsAppLink } from "./whatsapp-link";

// ─── Constantes de referencia ─────────────────────────────────────────────────

const EXPECTED_NUMBER = "595985864209";
const EXPECTED_PREFIX = `https://wa.me/${EXPECTED_NUMBER}?text=`;
const TEST_MSG = "Mensaje de prueba";

// ─── Suite principal ──────────────────────────────────────────────────────────

describe("buildWhatsAppLink", () => {
  // ── Caso feliz: con número explícito ──────────────────────────────────────

  it("genera URL correcta con número explícito", () => {
    const url = buildWhatsAppLink(TEST_MSG, EXPECTED_NUMBER);
    expect(url).toMatch(/^https:\/\/wa\.me\/595985864209\?text=.+/);
    expect(url).not.toContain("wa.me/?text="); // nunca sin número
  });

  it("encodea el mensaje correctamente", () => {
    const url = buildWhatsAppLink("Hola Oscar!", EXPECTED_NUMBER);
    expect(url).toContain(encodeURIComponent("Hola Oscar!"));
  });

  // ── Caso feliz: sin número (usa default) ──────────────────────────────────

  it("usa WHATSAPP_NUMBER por defecto cuando number es undefined", () => {
    const url = buildWhatsAppLink(TEST_MSG);
    expect(url).toMatch(/^https:\/\/wa\.me\/\d+\?text=.+/);
    expect(url).not.toMatch(/^https:\/\/wa\.me\/\?text=/); // no URL sin número
  });

  it("usa WHATSAPP_NUMBER por defecto cuando number es undefined (explícito)", () => {
    const url = buildWhatsAppLink(TEST_MSG, undefined);
    expect(url).not.toMatch(/wa\.me\/\?/); // jamás wa.me/ sin número
  });

  // ── Invariante crítica: NUNCA un link sin número ───────────────────────────

  it("NUNCA produce https://wa.me/?text= (sin número)", () => {
    const urlSinParam = buildWhatsAppLink(TEST_MSG);
    expect(urlSinParam).not.toBe("https://wa.me/?text=" + encodeURIComponent(TEST_MSG));
    expect(urlSinParam).toContain(`wa.me/${EXPECTED_NUMBER}`);
  });

  it("el número en la URL tiene al menos 8 dígitos", () => {
    const url = buildWhatsAppLink(TEST_MSG);
    // Extrae el número de la URL
    const match = url.match(/wa\.me\/(\d+)\?/);
    expect(match).not.toBeNull();
    const num = match![1];
    expect(num.length).toBeGreaterThanOrEqual(8);
  });

  // ── Contextos de página (multilingüe) ─────────────────────────────────────

  it("genera links correctos para todos los contextos WHATSAPP_TEXTS en todos los idiomas", async () => {
    const { WHATSAPP_TEXTS, SUPPORTED_LOCALES } = await import("@/lib/config/contacto");

    for (const locale of SUPPORTED_LOCALES) {
      for (const [ctx, texto] of Object.entries(WHATSAPP_TEXTS[locale])) {
        const url = buildWhatsAppLink(texto);
        expect(url, `[${locale}] Contexto '${ctx}' generó URL sin número`).not.toMatch(
          /^https:\/\/wa\.me\/\?text=/
        );
        expect(url, `[${locale}] Contexto '${ctx}' no contiene número`).toMatch(
          /^https:\/\/wa\.me\/\d+\?text=.+/
        );
      }
    }
  });

  // ── Error en development con string vacío ─────────────────────────────────

  it("lanza error en development cuando number es string vacío", () => {
    const originalEnv = process.env.NODE_ENV;
    // @ts-expect-error forzar env para test
    process.env.NODE_ENV = "development";

    expect(() => buildWhatsAppLink(TEST_MSG, "")).toThrow();

    // @ts-expect-error restaurar
    process.env.NODE_ENV = originalEnv;
  });
});
