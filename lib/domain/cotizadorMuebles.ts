
export interface ParametrosCotizacion {
  cantidadUnidades: number;
  tipoMaterial: "madera" | "metal" | "mixto";
  incluyePiezasPlasticas: boolean;
  metrosCuadradosEstructura?: number; // Opcional para estructuras
}

export interface ResultadoCotizacion {
  costoBase: number;
  margenGananciaB2B: number;
  impuestos: number;
  precioFinal: number;
}

const configuracionInterna = {
  preciosMateriales: {
    madera: 1500, // Precio por unidad o m2, a definir según la lógica
    metal: 2500,
    mixto: 2000,
  },
  precioPiezaPlastica: 500,
  costoHoraHombre: 5000,
  margenB2B: 0.20, // 20% de margen
  impuestoIVA: 0.10, // 10% de IVA
};

/**
 * Calcula el presupuesto para la fabricación de muebles y estructuras.
 *
 * @param params - Parámetros de entrada para la cotización.
 * @returns Resultado de la cotización con costo base, margen, impuestos y precio final.
 */
export function calcularPresupuestoMuebles(params: ParametrosCotizacion): ResultadoCotizacion {
  let costoBase = 0;

  // Cálculo del costo base según el tipo de material
  switch (params.tipoMaterial) {
    case "madera":
      costoBase += params.cantidadUnidades * configuracionInterna.preciosMateriales.madera;
      break;
    case "metal":
      costoBase += params.cantidadUnidades * configuracionInterna.preciosMateriales.metal;
      break;
    case "mixto":
      costoBase += params.cantidadUnidades * configuracionInterna.preciosMateriales.mixto;
      break;
  }

  // Añadir costo por piezas plásticas si aplica
  if (params.incluyePiezasPlasticas) {
    costoBase += params.cantidadUnidades * configuracionInterna.precioPiezaPlastica;
  }

  // Añadir costo por metros cuadrados de estructura si aplica
  if (params.metrosCuadradosEstructura) {
    costoBase += params.metrosCuadradosEstructura * configuracionInterna.preciosMateriales.metal; // Asumimos que la estructura es principalmente de metal
  }

  // Cálculo del margen de ganancia B2B
  const margenGananciaB2B = costoBase * configuracionInterna.margenB2B;
  const subtotal = costoBase + margenGananciaB2B;

  // Cálculo de impuestos
  const impuestos = subtotal * configuracionInterna.impuestoIVA;

  // Cálculo del precio final
  const precioFinal = subtotal + impuestos;

  return {
    costoBase,
    margenGananciaB2B,
    impuestos,
    precioFinal,
  };
}
