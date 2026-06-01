import { describe, it, expect } from "vitest";
import { PLANES_PRECIOS } from "./precios";

describe("PLANES_PRECIOS — integridad estructural", () => {
  const planes = Object.values(PLANES_PRECIOS);

  it("cada plan tiene setupTotal > 0", () => {
    for (const plan of planes) {
      expect(plan.setupTotal, `${plan.id}: setupTotal debe ser > 0`).toBeGreaterThan(0);
    }
  });

  it("cada plan tiene mantenimientoMensual > 0", () => {
    for (const plan of planes) {
      expect(plan.mantenimientoMensual, `${plan.id}: mantenimientoMensual debe ser > 0`).toBeGreaterThan(0);
    }
  });

  it("la suma de hitos es EXACTAMENTE igual a setupTotal en cada plan", () => {
    for (const plan of planes) {
      const { anticipo, definicion, implementacion, pruebas } = plan.hitos;
      const suma = anticipo + definicion + implementacion + pruebas;
      expect(suma, `${plan.id}: hitos (${suma}) ≠ setupTotal (${plan.setupTotal})`).toBe(plan.setupTotal);
    }
  });

  it("ningún plan contiene el campo prohibido totalAnualInversion", () => {
    for (const plan of planes) {
      expect(
        "totalAnualInversion" in plan,
        `${plan.id}: el campo 'totalAnualInversion' no debe existir en el objeto`
      ).toBe(false);
    }
  });
});
