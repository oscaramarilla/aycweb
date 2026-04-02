export interface CotizacionParams {
  distancia: number;
  rendimiento: number;
  choferDia: number;
  mantKm: number;
  peajeUsd: number;
  kmPorPeaje: number;
  margen: number;
}

export interface CotizacionResultados {
  litros: number;
  costoCombustible: number;
  dias: number;
  costoChofer: number;
  numPeajes: number;
  costoPeajes: number;
  costoMant: number;
  totalOperativo: number;
  precioVenta: number;
  ganancia: number;
}

const TIPO_CAMBIO_PYG = 7700; // Tasa de cambio referencial Gs/USD
const FUEL_PRICE_USD = 1.25;  // Promedio LATAM proyectado al 2030 + 10% margen seguridad

export function calcularCotizacion(params: CotizacionParams): CotizacionResultados {
  const { distancia, rendimiento, choferDia, mantKm, peajeUsd, kmPorPeaje, margen } = params;

  if (distancia <= 0) {
    return {
      litros: 0,
      costoCombustible: 0,
      dias: 0,
      costoChofer: 0,
      numPeajes: 0,
      costoPeajes: 0,
      costoMant: 0,
      totalOperativo: 0,
      precioVenta: 0,
      ganancia: 0
    };
  }

  const litros = distancia / rendimiento;
  const costoCombustible = litros * FUEL_PRICE_USD;
  
  // Cálculo de días (tope seguro 450 km por jornada)
  const dias = Math.ceil(distancia / 450) || 1;
  const costoChofer = dias * choferDia;

  const numPeajes = Math.floor(distancia / kmPorPeaje);
  const costoPeajes = numPeajes * peajeUsd;

  const costoMant = distancia * mantKm;

  const totalOperativo = costoCombustible + costoChofer + costoPeajes + costoMant;
  
  const margenDecimal = margen / 100;
  const precioVenta = totalOperativo / (1 - margenDecimal);
  const ganancia = precioVenta - totalOperativo;

  return {
    litros, costoCombustible, dias, costoChofer, numPeajes, costoPeajes, costoMant, totalOperativo, precioVenta, ganancia
  };
}

export const formatters = {
  fmtUsd: (n: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(n),
  fmtPyg: (n: number) => new Intl.NumberFormat('es-PY', { style: 'currency', currency: 'PYG', maximumFractionDigits: 0 }).format(n * TIPO_CAMBIO_PYG),
};