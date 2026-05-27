// ============================================================
// TEST: lib/services/whatsapp-message.ts
// ============================================================
// Garantiza que buildDiagnosticoMessage y buildDiagnosticoWaUrl
// generan el formato correcto con todos los campos del formulario.
// Ejecutar con: npx vitest run lib/services/whatsapp-message.test.ts
// ============================================================

import { describe, it, expect } from "vitest";
import {
  buildDiagnosticoMessage,
  buildDiagnosticoWaUrl,
  type DiagnosticoData,
} from "./whatsapp-message";

// ─── Fixture de datos válidos ─────────────────────────────────────────────────

const SAMPLE_DATA: DiagnosticoData = {
  empresa: "Distribuidora Norte S.A.",
  sector: "Comercio",
  tamanoEquipo: "4–10",
  cuelloBottella: "Cotizaciones lentas",
  stackActual: "Excel + WhatsApp",
  whatsapp: "+595985123456",
};

// ─── Suite: buildDiagnosticoMessage ──────────────────────────────────────────

describe("buildDiagnosticoMessage", () => {
  it("incluye el encabezado del diagnóstico", () => {
    const msg = buildDiagnosticoMessage(SAMPLE_DATA);
    expect(msg).toContain("Diagnóstico Comercial Express – AYCweb");
  });

  it("incluye el nombre de la empresa", () => {
    const msg = buildDiagnosticoMessage(SAMPLE_DATA);
    expect(msg).toContain("Distribuidora Norte S.A.");
  });

  it("incluye el sector", () => {
    const msg = buildDiagnosticoMessage(SAMPLE_DATA);
    expect(msg).toContain("Comercio");
  });

  it("incluye el tamaño del equipo con la palabra 'personas'", () => {
    const msg = buildDiagnosticoMessage(SAMPLE_DATA);
    expect(msg).toContain("4–10 personas");
  });

  it("incluye el cuello de botella", () => {
    const msg = buildDiagnosticoMessage(SAMPLE_DATA);
    expect(msg).toContain("Cotizaciones lentas");
  });

  it("incluye el stack actual", () => {
    const msg = buildDiagnosticoMessage(SAMPLE_DATA);
    expect(msg).toContain("Excel + WhatsApp");
  });

  it("incluye el número de WhatsApp del responsable", () => {
    const msg = buildDiagnosticoMessage(SAMPLE_DATA);
    expect(msg).toContain("+595985123456");
  });

  it("incluye la línea de cierre de solicitud", () => {
    const msg = buildDiagnosticoMessage(SAMPLE_DATA);
    expect(msg).toContain(
      "Solicito un diagnóstico comercial personalizado para mi empresa."
    );
  });

  it("todos los campos del spec están presentes en el mensaje", () => {
    const msg = buildDiagnosticoMessage(SAMPLE_DATA);
    // Verifica labels clave
    expect(msg).toContain("Empresa:");
    expect(msg).toContain("Sector:");
    expect(msg).toContain("Equipo comercial:");
    expect(msg).toContain("Cuello de botella:");
    expect(msg).toContain("Stack actual:");
    expect(msg).toContain("WhatsApp del responsable:");
  });

  it("el mensaje tiene formato multilínea (contiene saltos de línea)", () => {
    const msg = buildDiagnosticoMessage(SAMPLE_DATA);
    expect(msg.split("\n").length).toBeGreaterThan(5);
  });

  it("es determinista: mismo input → mismo output", () => {
    const msg1 = buildDiagnosticoMessage(SAMPLE_DATA);
    const msg2 = buildDiagnosticoMessage(SAMPLE_DATA);
    expect(msg1).toBe(msg2);
  });

  it("refleja correctamente cada sector del spec", () => {
    const sectores = [
      "Industrial",
      "Médico / Salud",
      "Servicios profesionales",
      "Comercio",
      "Otro",
    ];
    for (const sector of sectores) {
      const msg = buildDiagnosticoMessage({ ...SAMPLE_DATA, sector });
      expect(msg, `Sector '${sector}' no aparece en el mensaje`).toContain(
        sector
      );
    }
  });

  it("refleja correctamente cada cuello de botella del spec", () => {
    const cuellos = [
      "Cotizaciones lentas",
      "Excel descontrolado",
      "Sin trazabilidad de ventas",
      "Sin sistema de turnos",
      "Captación dependiente de boca a boca",
      "Otro",
    ];
    for (const cuello of cuellos) {
      const msg = buildDiagnosticoMessage({
        ...SAMPLE_DATA,
        cuelloBottella: cuello,
      });
      expect(msg, `Cuello '${cuello}' no aparece en el mensaje`).toContain(
        cuello
      );
    }
  });
});

// ─── Suite: buildDiagnosticoWaUrl ────────────────────────────────────────────

describe("buildDiagnosticoWaUrl", () => {
  it("genera una URL de WhatsApp válida", () => {
    const url = buildDiagnosticoWaUrl(SAMPLE_DATA);
    expect(url).toMatch(/^https:\/\/wa\.me\/\d+\?text=.+/);
  });

  it("NUNCA genera una URL sin número (wa.me/?text=...)", () => {
    const url = buildDiagnosticoWaUrl(SAMPLE_DATA);
    expect(url).not.toMatch(/^https:\/\/wa\.me\/\?text=/);
  });

  it("el número en la URL tiene al menos 8 dígitos", () => {
    const url = buildDiagnosticoWaUrl(SAMPLE_DATA);
    const match = url.match(/wa\.me\/(\d+)\?/);
    expect(match).not.toBeNull();
    expect(match![1].length).toBeGreaterThanOrEqual(8);
  });

  it("el mensaje está URL-encodeado en la query string", () => {
    const url = buildDiagnosticoWaUrl(SAMPLE_DATA);
    // El mensaje tiene espacios → deben aparecer encodeados (%20 o +)
    expect(url).toMatch(/text=.+/);
    // Verifica que el nombre de empresa aparece encodeado
    const encoded = encodeURIComponent("Distribuidora Norte S.A.");
    expect(url).toContain(encoded);
  });

  it("no hardcodea el número de destino (lo toma de WHATSAPP_NUMBER)", async () => {
    // Verifica que el número en la URL coincide con WHATSAPP_NUMBER de contacto.ts
    const { WHATSAPP_NUMBER } = await import("@/lib/config/contacto");
    const url = buildDiagnosticoWaUrl(SAMPLE_DATA);
    expect(url).toContain(`wa.me/${WHATSAPP_NUMBER}`);
  });
});
