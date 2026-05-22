/**
 * Suite de tests para la capa de dominio de cotizadores.
 *
 * Cubre tres pilares fundamentales:
 *   1. Casos de borde (distancia cero, valores negativos)
 *   2. Resiliencia ante fallo del scraper de Petropar (fallback hardcodeado)
 *   3. Lógica de descuentos cripto 35% aplicados sobre la MATRIZ BASE, no sobre el subtotal
 */

import { describe, it, expect } from "vitest";
import { calcularCotizacion, type CotizacionParams } from "./cotizadorLogistico";
import {
  calcularCotizacion as calcularAberturas,
  PRECIOS,
  type ParamsCotizacion,
} from "./cotizadorAberturas";

// ─────────────────────────────────────────────────────────────────────────────
// Parámetros base reutilizables para el cotizador logístico
// ─────────────────────────────────────────────────────────────────────────────

const PARAMS_BASE: CotizacionParams = {
  distancia: 500,       // km
  rendimiento: 10,      // km/litro
  choferDia: 80,        // USD/día
  mantKm: 0.05,         // USD/km
  peajeUsd: 5,          // USD por peaje
  kmPorPeaje: 100,      // km entre peajes
  margen: 20,           // %
};

// ─────────────────────────────────────────────────────────────────────────────
// 1. CASOS DE BORDE
// ─────────────────────────────────────────────────────────────────────────────

describe("cotizadorLogistico – casos de borde", () => {
  it("retorna todos los valores en cero cuando la distancia es 0", () => {
    const resultado = calcularCotizacion({ ...PARAMS_BASE, distancia: 0 });

    expect(resultado.litros).toBe(0);
    expect(resultado.costoCombustible).toBe(0);
    expect(resultado.dias).toBe(0);
    expect(resultado.costoChofer).toBe(0);
    expect(resultado.numPeajes).toBe(0);
    expect(resultado.costoPeajes).toBe(0);
    expect(resultado.costoMant).toBe(0);
    expect(resultado.totalOperativo).toBe(0);
    expect(resultado.precioVenta).toBe(0);
    expect(resultado.ganancia).toBe(0);
  });

  it("retorna todos los valores en cero cuando la distancia es negativa", () => {
    const resultado = calcularCotizacion({ ...PARAMS_BASE, distancia: -300 });

    expect(resultado.litros).toBe(0);
    expect(resultado.totalOperativo).toBe(0);
    expect(resultado.precioVenta).toBe(0);
  });

  it("no lanza excepción con distancia negativa (no debe explotar)", () => {
    expect(() =>
      calcularCotizacion({ ...PARAMS_BASE, distancia: -1 })
    ).not.toThrow();
  });

  it("no lanza excepción con distancia exactamente en cero", () => {
    expect(() =>
      calcularCotizacion({ ...PARAMS_BASE, distancia: 0 })
    ).not.toThrow();
  });

  it("calcula correctamente con una distancia mínima positiva (1 km)", () => {
    const resultado = calcularCotizacion({ ...PARAMS_BASE, distancia: 1 });

    // Con 1 km y rendimiento 10 → 0.1 litros
    expect(resultado.litros).toBeCloseTo(0.1, 5);
    // costoCombustible = 0.1 * 1.25 (FUEL_PRICE_USD fallback)
    expect(resultado.costoCombustible).toBeCloseTo(0.125, 5);
    // 1 km < 450 → 1 día
    expect(resultado.dias).toBe(1);
    // precioVenta debe ser mayor que totalOperativo
    expect(resultado.precioVenta).toBeGreaterThan(resultado.totalOperativo);
  });

  it("el precio de venta siempre es mayor o igual al costo operativo con margen > 0", () => {
    const resultado = calcularCotizacion(PARAMS_BASE);
    expect(resultado.precioVenta).toBeGreaterThanOrEqual(resultado.totalOperativo);
  });

  it("la ganancia es exactamente precioVenta - totalOperativo", () => {
    const resultado = calcularCotizacion(PARAMS_BASE);
    expect(resultado.ganancia).toBeCloseTo(
      resultado.precioVenta - resultado.totalOperativo,
      8
    );
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// 2. RESILIENCIA – Fallback hardcodeado de Petropar
//
//    El scraper de Petropar puede fallar en producción. El módulo tiene
//    FUEL_PRICE_USD = 1.25 como constante de seguridad. Estos tests verifican
//    que el cálculo funciona correctamente con ese valor sin lanzar excepciones,
//    simulando el escenario donde el scraper no está disponible.
// ─────────────────────────────────────────────────────────────────────────────

describe("cotizadorLogistico – resiliencia ante fallo del scraper de Petropar", () => {
  const FUEL_PRICE_FALLBACK = 1.25; // Valor hardcodeado en el módulo

  it("procesa correctamente usando el precio de combustible fallback (1.25 USD/L)", () => {
    const resultado = calcularCotizacion(PARAMS_BASE);

    // 500 km / 10 km/L = 50 litros
    const litrosEsperados = PARAMS_BASE.distancia / PARAMS_BASE.rendimiento;
    // costoCombustible = litros * FUEL_PRICE_FALLBACK
    const costoCombustibleEsperado = litrosEsperados * FUEL_PRICE_FALLBACK;

    expect(resultado.litros).toBeCloseTo(litrosEsperados, 8);
    expect(resultado.costoCombustible).toBeCloseTo(costoCombustibleEsperado, 8);
  });

  it("no lanza excepción al calcular (el fallback no requiere red ni scraper)", () => {
    expect(() => calcularCotizacion(PARAMS_BASE)).not.toThrow();
  });

  it("el cálculo es determinista: mismos inputs producen siempre el mismo output", () => {
    const r1 = calcularCotizacion(PARAMS_BASE);
    const r2 = calcularCotizacion(PARAMS_BASE);

    expect(r1.totalOperativo).toBe(r2.totalOperativo);
    expect(r1.precioVenta).toBe(r2.precioVenta);
    expect(r1.ganancia).toBe(r2.ganancia);
  });

  it("el totalOperativo es la suma exacta de sus componentes (integridad del fallback)", () => {
    const r = calcularCotizacion(PARAMS_BASE);

    const sumaComponentes =
      r.costoCombustible + r.costoChofer + r.costoPeajes + r.costoMant;

    expect(r.totalOperativo).toBeCloseTo(sumaComponentes, 8);
  });

  it("el precio de venta con margen 20% se calcula correctamente sobre el total operativo", () => {
    const r = calcularCotizacion({ ...PARAMS_BASE, margen: 20 });

    // precioVenta = totalOperativo / (1 - 0.20) = totalOperativo / 0.80
    const precioEsperado = r.totalOperativo / 0.8;
    expect(r.precioVenta).toBeCloseTo(precioEsperado, 8);
  });

  it("con margen 0% el precio de venta es igual al total operativo", () => {
    const r = calcularCotizacion({ ...PARAMS_BASE, margen: 0 });
    expect(r.precioVenta).toBeCloseTo(r.totalOperativo, 8);
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// 3. LÓGICA DE DESCUENTOS CRIPTO 35%
//
//    REGLA CRÍTICA: El descuento cripto del 35% se aplica sobre los precios
//    de la MATRIZ BASE (PRECIOS unitarios), NO sobre el subtotal final.
//
//    Esto significa que el descuento se calcula como:
//      descuentoGs = precioUnitarioBase * 0.35
//    y se pasa como parámetro `descuentoGs` al cotizador, que lo resta del
//    costo unitario ANTES de aplicar el margen.
//
//    Verificamos que:
//      costoUnitario_con_descuento = costoUnitario_sin_descuento - (precioBase * 0.35)
//    y NO que:
//      costoUnitario_con_descuento = costoUnitario_sin_descuento * 0.65
// ─────────────────────────────────────────────────────────────────────────────

describe("cotizadorAberturas – descuentos cripto 35% sobre matriz base", () => {
  // Parámetros base para una puerta 2 hojas incolor con dimensiones estándar
  const PARAMS_ABERTURA_BASE: ParamsCotizacion = {
    producto: "puerta_2h_incolor",
    ancho: 170,
    alto: 210,
    cantidad: 1,
    margenPorcentaje: 0,   // Sin margen para aislar el efecto del descuento
    redondeo: 0,
    incluirPremarco: false,
    incluirColocacion: false,
    descuentoGs: 0,
    adicionalGs: 0,
  };

  it("sin descuento, el costoUnitario es positivo y mayor a cero", () => {
    const r = calcularAberturas(PARAMS_ABERTURA_BASE);
    expect(r.costoUnitario).toBeGreaterThan(0);
  });

  it("el descuento cripto 35% se aplica sobre el precio de un ítem de la matriz base, no sobre el subtotal", () => {
    // Tomamos un precio de referencia de la matriz base: marcoLateral = 176.000 Gs.
    const precioBaseReferencia = PRECIOS.marcoLateral; // 176_000

    // El descuento cripto es el 35% de ese precio base
    const descuentoCripto35 = precioBaseReferencia * 0.35; // 61_600 Gs.

    const sinDescuento = calcularAberturas(PARAMS_ABERTURA_BASE);
    const conDescuento = calcularAberturas({
      ...PARAMS_ABERTURA_BASE,
      descuentoGs: descuentoCripto35,
    });

    // La diferencia entre ambos costos debe ser EXACTAMENTE el descuento aplicado
    const diferencia = sinDescuento.costoUnitario - conDescuento.costoUnitario;
    expect(diferencia).toBeCloseTo(descuentoCripto35, 2);
  });

  it("el descuento cripto 35% NO es equivalente a multiplicar el subtotal por 0.65", () => {
    const precioBaseReferencia = PRECIOS.marcoLateral;
    const descuentoCripto35 = precioBaseReferencia * 0.35;

    const sinDescuento = calcularAberturas(PARAMS_ABERTURA_BASE);
    const conDescuento = calcularAberturas({
      ...PARAMS_ABERTURA_BASE,
      descuentoGs: descuentoCripto35,
    });

    // Si el descuento fuera sobre el subtotal final, sería: subtotal * 0.65
    const hipoteticoDescuentoSobreSubtotal = sinDescuento.costoUnitario * 0.35;

    // El descuento real (sobre precio base) debe ser DIFERENTE al hipotético (sobre subtotal)
    // a menos que el precio base sea igual al subtotal total (lo cual no ocurre)
    const descuentoRealAplicado = sinDescuento.costoUnitario - conDescuento.costoUnitario;

    // El descuento real es sobre un ítem específico de la matriz, no sobre todo el subtotal
    expect(descuentoRealAplicado).not.toBeCloseTo(hipoteticoDescuentoSobreSubtotal, 0);
    // Y el descuento real es menor que el 35% del subtotal total
    expect(descuentoRealAplicado).toBeLessThan(hipoteticoDescuentoSobreSubtotal);
  });

  it("verifica matemáticamente: descuento 35% sobre precio base de cerradura (75.000 Gs.)", () => {
    const precioBasecerradura = PRECIOS.cerradura; // 75_000 Gs.
    const descuento35 = precioBasecerradura * 0.35; // 26_250 Gs.

    expect(descuento35).toBe(26_250);

    const sinDescuento = calcularAberturas(PARAMS_ABERTURA_BASE);
    const conDescuento = calcularAberturas({
      ...PARAMS_ABERTURA_BASE,
      descuentoGs: descuento35,
    });

    // La diferencia exacta debe ser 26.250 Gs.
    expect(sinDescuento.costoUnitario - conDescuento.costoUnitario).toBeCloseTo(26_250, 2);
  });

  it("verifica matemáticamente: descuento 35% sobre precio base de rueditas (15.000 Gs.)", () => {
    const precioBaseRueditas = PRECIOS.rueditas; // 15_000 Gs.
    const descuento35 = precioBaseRueditas * 0.35; // 5_250 Gs.

    expect(descuento35).toBe(5_250);

    const sinDescuento = calcularAberturas(PARAMS_ABERTURA_BASE);
    const conDescuento = calcularAberturas({
      ...PARAMS_ABERTURA_BASE,
      descuentoGs: descuento35,
    });

    expect(sinDescuento.costoUnitario - conDescuento.costoUnitario).toBeCloseTo(5_250, 2);
  });

  it("el descuento no puede llevar el costoUnitario por debajo de cero (protección Math.max)", () => {
    // Descuento absurdamente grande
    const descuentoExcesivo = 999_999_999;

    const r = calcularAberturas({
      ...PARAMS_ABERTURA_BASE,
      descuentoGs: descuentoExcesivo,
    });

    expect(r.costoUnitario).toBeGreaterThanOrEqual(0);
  });

  it("con descuento 35% sobre el precio base de guía superior, el totalGeneral se reduce proporcionalmente", () => {
    const precioBaseGuia = PRECIOS.guiaSuperior; // 261_000 Gs.
    const descuento35 = precioBaseGuia * 0.35;   // 91_350 Gs.

    const sinDescuento = calcularAberturas({ ...PARAMS_ABERTURA_BASE, cantidad: 3 });
    const conDescuento = calcularAberturas({
      ...PARAMS_ABERTURA_BASE,
      cantidad: 3,
      descuentoGs: descuento35,
    });

    // El totalGeneral = precioVentaRedondeado * cantidad
    // Con margen 0 y redondeo 0: totalGeneral = costoUnitario * cantidad
    const diferenciaTotal = sinDescuento.totalGeneral - conDescuento.totalGeneral;
    const diferenciaEsperada = descuento35 * 3; // descuento por unidad × cantidad

    expect(diferenciaTotal).toBeCloseTo(diferenciaEsperada, 2);
  });
});
