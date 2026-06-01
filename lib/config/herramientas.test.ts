import { describe, it, expect } from "vitest";
import { HERRAMIENTAS_B2B } from "./herramientas";

describe("HERRAMIENTAS_B2B — integridad de enlaces", () => {
  it("ningún href es una ancla muerta (empieza con #)", () => {
    for (const h of HERRAMIENTAS_B2B) {
      expect(
        h.href.startsWith("#"),
        `herramienta '${h.id}': href='${h.href}' es una ancla muerta`
      ).toBe(false);
    }
  });

  it("ningún href es el genérico https://wa.link/ sin ruta", () => {
    for (const h of HERRAMIENTAS_B2B) {
      expect(
        h.href,
        `herramienta '${h.id}': href no debe ser el link genérico de wa.link`
      ).not.toBe("https://wa.link/");
    }
  });

  it("todos los id son únicos", () => {
    const ids = HERRAMIENTAS_B2B.map((h) => h.id);
    const unicos = new Set(ids);
    expect(unicos.size).toBe(ids.length);
  });
});
