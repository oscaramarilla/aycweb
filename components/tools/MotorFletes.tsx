"use client";

import React, { useEffect, useMemo, useState } from "react";
import { buildWaLink } from "@/lib/config/contact";

type VehicleKey = "canter" | "n300";

type VehicleConfig = {
  key: VehicleKey;
  nombre: string;
  capacidad: string;
  combustibleLabel: string;
  precioCombustible: number;
  rendimientoKmL: number;
  mantenimientoKm: number;
  kmMaximosPorDia: number;
};

const CHOFER_POR_DIA = 150000;
const AYUDANTE_POR_DIA = 100000;

const VEHICULOS_BASE: Record<VehicleKey, VehicleConfig> = {
  canter: {
    key: "canter",
    nombre: "Mitsubishi Canter",
    capacidad: "5.000 kg",
    combustibleLabel: "Diésel Porã",
    precioCombustible: 6700,
    rendimientoKmL: 5,
    mantenimientoKm: 1300,
    kmMaximosPorDia: 350,
  },
  n300: {
    key: "n300",
    nombre: "Chevrolet N300",
    capacidad: "1.000 kg",
    combustibleLabel: "Nafta Oikoite 93",
    precioCombustible: 6140,
    rendimientoKmL: 8.5,
    mantenimientoKm: 700,
    kmMaximosPorDia: 450,
  },
};

function gs(monto: number) {
  return new Intl.NumberFormat("es-PY", {
    style: "currency",
    currency: "PYG",
    maximumFractionDigits: 0,
  }).format(monto);
}

export default function MotorFletes() {
  const [vehiculo, setVehiculo] = useState<VehicleKey>("canter");
  const [distancia, setDistancia] = useState<number | "">("");
  const [idaYVuelta, setIdaYVuelta] = useState(true);
  const [llevaAyudante, setLlevaAyudante] = useState(false);

  const [precioPeaje, setPrecioPeaje] = useState(15000);
  const [kmPorPeaje, setKmPorPeaje] = useState(120);
  const [margen, setMargen] = useState(30);

  const [preciosPetropar, setPreciosPetropar] = useState({
    dieselPora: 6700,
    naftaOikoite93: 6140,
    fuente: "fallback",
  });

  const [cargandoPrecios, setCargandoPrecios] = useState(true);

  useEffect(() => {
    async function loadFuelPrices() {
      try {
        const res = await fetch("/api/petropar", { cache: "no-store" });
        const data = await res.json();

        setPreciosPetropar({
          dieselPora: data?.precios?.dieselPora ?? 6700,
          naftaOikoite93: data?.precios?.naftaOikoite93 ?? 6140,
          fuente: data?.ok ? "PETROPAR" : "datos internos",
        });
      } catch {
        setPreciosPetropar({
          dieselPora: 6700,
          naftaOikoite93: 6140,
          fuente: "datos internos",
        });
      } finally {
        setCargandoPrecios(false);
      }
    }

    loadFuelPrices();
  }, []);

  const configVehiculo = useMemo(() => {
    const base = VEHICULOS_BASE[vehiculo];
    return {
      ...base,
      precioCombustible:
        vehiculo === "canter"
          ? preciosPetropar.dieselPora
          : preciosPetropar.naftaOikoite93,
    };
  }, [vehiculo, preciosPetropar]);

  const totalKm =
    typeof distancia === "number" && distancia > 0
      ? distancia * (idaYVuelta ? 2 : 1)
      : 0;

  const litrosNecesarios =
    totalKm > 0 ? totalKm / configVehiculo.rendimientoKmL : 0;

  const costoCombustible = litrosNecesarios * configVehiculo.precioCombustible;

  const cantidadPeajes =
    totalKm > 0 && kmPorPeaje > 0 ? Math.floor(totalKm / kmPorPeaje) : 0;

  const costoPeajes = cantidadPeajes * precioPeaje;

  const costoMantenimiento = totalKm * configVehiculo.mantenimientoKm;

  const diasOperativos =
    totalKm > 0
      ? Math.max(1, Math.ceil(totalKm / configVehiculo.kmMaximosPorDia))
      : 0;

  const costoPersonal =
    diasOperativos *
    (CHOFER_POR_DIA + (llevaAyudante ? AYUDANTE_POR_DIA : 0));

  const costoOperativo =
    costoCombustible + costoPeajes + costoMantenimiento + costoPersonal;

  const margenDecimal = margen / 100;
  const precioVenta =
    costoOperativo > 0 && margenDecimal < 1
      ? costoOperativo / (1 - margenDecimal)
      : 0;

  const ganancia = precioVenta - costoOperativo;

  const handleWhatsApp = () => {
    const vehiculoNombre = VEHICULOS_BASE[vehiculo].nombre;
    const mensaje =
      `¡Hola! Acabo de usar el Motor de Fletes de AYCweb y quiero consultar por una cotización.\n\n` +
      `🚚 *Resumen del flete calculado:*\n` +
      `• Vehículo: ${vehiculoNombre}\n` +
      `• Distancia: ${typeof distancia === "number" ? distancia : 0} km (${idaYVuelta ? "ida y vuelta" : "tramo único"}) → ${totalKm} km totales\n` +
      `• Personal: Chofer${llevaAyudante ? " + Peón/Ayudante" : ""}\n` +
      `• Duración estimada: ${diasOperativos} ${diasOperativos === 1 ? "día" : "días"}\n\n` +
      `💰 *Desglose de costos:*\n` +
      `• Combustible: ${gs(costoCombustible)}\n` +
      `• Peajes: ${gs(costoPeajes)} (${cantidadPeajes} casetas)\n` +
      `• Desgaste de flota: ${gs(costoMantenimiento)}\n` +
      `• Recursos humanos: ${gs(costoPersonal)}\n\n` +
      `📊 *Resultado:*\n` +
      `• Costo operativo base: ${gs(costoOperativo)}\n` +
      `• Utilidad neta (${margen}%): ${gs(ganancia)}\n` +
      `• *Cotización final sugerida: ${gs(precioVenta)}*\n\n` +
      `Quiero coordinar el servicio de flete.`;

    // ── Fire-and-forget: notifica al pipeline n8n en segundo plano.
    // El try/catch garantiza que un fallo o demora del webhook
    // nunca bloquee la redirección a WhatsApp.
    try {
      fetch("/api/webhook/cotizacion", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          herramienta: "motor-fletes",
          vehiculo: vehiculoNombre,
          distanciaBase: typeof distancia === "number" ? distancia : 0,
          totalKm,
          idaYVuelta,
          llevaAyudante,
          diasOperativos,
          costoCombustible,
          costoPeajes,
          cantidadPeajes,
          costoMantenimiento,
          costoPersonal,
          costoOperativoBase: costoOperativo,
          utilidadNeta: ganancia,
          margenPorcentaje: margen,
          cotizacionFinalSugerida: precioVenta,
          fuentePrecios: preciosPetropar.fuente,
        }),
      });
    } catch {
      // Silencioso: el usuario ya está siendo redirigido a WhatsApp
    }

    const url = buildWaLink(mensaje);
    window.open(url, "_blank");
  };

  return (
    <div className="w-full max-w-6xl mx-auto bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl text-zinc-100">
      <div className="bg-zinc-900 border-b border-zinc-800 p-6 sm:p-8 text-center relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 mx-auto w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <h2 className="text-2xl sm:text-4xl font-black text-white relative z-10">
          Motor Inteligente de Fletes AYCweb
        </h2>
        <p className="text-zinc-400 mt-2 max-w-3xl mx-auto relative z-10">
          Una prueba viviente de eficiencia, transparencia y control operativo.
          Calcula costos reales según vehículo, combustible oficial Petropar,
          personal, peajes, mantenimiento y margen de utilidad.
        </p>

        <div className="mt-4 inline-block bg-zinc-950/80 border border-zinc-800 rounded-full px-4 py-1.5 text-xs text-zinc-400 relative z-10">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse mr-2"></span>
          {cargandoPrecios
            ? "Consultando precios oficiales de Petropar..."
            : `Precios base sincronizados con ${preciosPetropar.fuente}`}
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 p-6 sm:p-8">
        <div className="space-y-6">
          <div className="bg-zinc-900/60 rounded-2xl p-5 border border-zinc-800">
            <p className="text-xs uppercase tracking-widest text-zinc-500 font-bold mb-4">
              1. Elegí la Flota Operativa
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {(["canter", "n300"] as VehicleKey[]).map((key) => {
                const item =
                  key === "canter"
                    ? {
                        nombre: "Mitsubishi Canter",
                        capacidad: "5.000 kg",
                        combustible: "Diésel Porã",
                      }
                    : {
                        nombre: "Chevrolet N300",
                        capacidad: "1.000 kg",
                        combustible: "Nafta Oikoite 93",
                      };

                const active = vehiculo === key;

                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setVehiculo(key)}
                    className={`rounded-2xl border p-4 text-left transition-all ${
                      active
                        ? "border-emerald-500 bg-emerald-500/10 shadow-[0_0_15px_rgba(16,185,129,0.1)]"
                        : "border-zinc-800 bg-zinc-950 hover:border-zinc-600"
                    }`}
                  >
                    <div className="text-lg font-black text-white">
                      {item.nombre}
                    </div>
                    <div className="text-sm text-zinc-400 mt-1">
                      Capacidad: <span className="text-zinc-200 font-bold">{item.capacidad}</span>
                    </div>
                    <div className="text-sm text-zinc-400">
                      Combustible: {item.combustible}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="bg-zinc-900/60 rounded-2xl p-5 border border-zinc-800">
            <p className="text-xs uppercase tracking-widest text-zinc-500 font-bold mb-4">
              2. Parámetros de Ruta
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-zinc-300 mb-2">
                  Distancia base de la ruta (solo un tramo)
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={distancia}
                    onChange={(e) =>
                      setDistancia(e.target.value === "" ? "" : Number(e.target.value))
                    }
                    placeholder="Ej: 320"
                    className="w-full bg-zinc-950 border border-zinc-700 rounded-xl py-4 pl-4 pr-12 text-2xl font-black text-white outline-none focus:border-emerald-500"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 font-bold">Km</span>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between bg-zinc-950 p-3 rounded-xl border border-zinc-800">
                <label className="flex items-center gap-3 text-sm text-zinc-300 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={idaYVuelta}
                    onChange={(e) => setIdaYVuelta(e.target.checked)}
                    className="w-4 h-4 accent-emerald-500"
                  />
                  Calcular ida y vuelta a base AYCweb
                </label>

                <label className="flex items-center gap-3 text-sm text-zinc-300 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={llevaAyudante}
                    onChange={(e) => setLlevaAyudante(e.target.checked)}
                    className="w-4 h-4 accent-emerald-500"
                  />
                  Incluir peón/ayudante
                </label>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900/60 rounded-2xl p-5 border border-zinc-800">
            <p className="text-xs uppercase tracking-widest text-zinc-500 font-bold mb-4">
              3. Entorno de Variables
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-bold text-zinc-500 uppercase mb-1">
                  Combustible (PETROPAR)
                </label>
                <input
                  type="number"
                  value={configVehiculo.precioCombustible}
                  readOnly
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2.5 text-sm text-emerald-300 font-bold cursor-not-allowed"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-zinc-500 uppercase mb-1">
                  Rendimiento (km/l)
                </label>
                <input
                  type="number"
                  value={configVehiculo.rendimientoKmL}
                  readOnly
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2.5 text-sm text-zinc-300 cursor-not-allowed"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-zinc-500 uppercase mb-1">
                  Mantenimiento (Gs/km)
                </label>
                <input
                  type="number"
                  value={configVehiculo.mantenimientoKm}
                  readOnly
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2.5 text-sm text-zinc-300 cursor-not-allowed"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-zinc-500 uppercase mb-1">
                  Tope diario (Km/día)
                </label>
                <input
                  type="number"
                  value={configVehiculo.kmMaximosPorDia}
                  readOnly
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2.5 text-sm text-zinc-300 cursor-not-allowed"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-zinc-500 uppercase mb-1">
                  Precio por peaje
                </label>
                <input
                  type="number"
                  value={precioPeaje}
                  onChange={(e) => setPrecioPeaje(Number(e.target.value))}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2.5 text-sm text-zinc-300 focus:border-emerald-500 outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-zinc-500 uppercase mb-1">
                  Km por peaje
                </label>
                <input
                  type="number"
                  value={kmPorPeaje}
                  onChange={(e) => setKmPorPeaje(Number(e.target.value))}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2.5 text-sm text-zinc-300 focus:border-emerald-500 outline-none transition-colors"
                />
              </div>

              <div className="col-span-2 mt-2">
                <label className="block text-[11px] font-bold text-blue-400 uppercase mb-1">
                  Margen deseado de utilidad (%)
                </label>
                <input
                  type="number"
                  value={margen}
                  onChange={(e) => setMargen(Number(e.target.value))}
                  className="w-full bg-blue-950/30 border border-blue-900/50 rounded-lg p-3 text-lg text-blue-300 font-bold focus:border-blue-500 outline-none transition-colors"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-black rounded-2xl border border-zinc-800 p-6 relative overflow-hidden flex flex-col justify-center">
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          {totalKm > 0 ? (
            <div className="space-y-4 relative z-10 animate-in fade-in duration-500">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-zinc-900/80 rounded-xl p-4 border border-zinc-800">
                  <p className="text-[11px] uppercase tracking-widest text-zinc-500 font-bold">
                    Operación
                  </p>
                  <p className="text-lg font-black text-white mt-1">
                    {totalKm.toLocaleString("es-PY")} km
                  </p>
                  <p className="text-sm text-zinc-400">
                    {idaYVuelta ? "Viaje redondo" : "Tramo único"}
                  </p>
                </div>

                <div className="bg-zinc-900/80 rounded-xl p-4 border border-zinc-800">
                  <p className="text-[11px] uppercase tracking-widest text-zinc-500 font-bold">
                    Duración
                  </p>
                  <p className="text-lg font-black text-white mt-1">
                    {diasOperativos} {diasOperativos === 1 ? 'Día' : 'Días'}
                  </p>
                  <p className="text-sm text-zinc-400">
                    Calculado por km tope
                  </p>
                </div>
              </div>

              <div className="space-y-2 mt-4">
                <div className="bg-zinc-900/80 p-3 rounded-xl border border-zinc-800 flex justify-between items-center">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-widest text-zinc-500">Combustible</p>
                    <p className="text-xs text-zinc-600">{litrosNecesarios.toFixed(1)} L × {gs(configVehiculo.precioCombustible)}</p>
                  </div>
                  <p className="text-lg font-bold text-white">{gs(costoCombustible)}</p>
                </div>

                <div className="bg-zinc-900/80 p-3 rounded-xl border border-zinc-800 flex justify-between items-center">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-widest text-zinc-500">Peajes</p>
                    <p className="text-xs text-zinc-600">{cantidadPeajes} casetas est.</p>
                  </div>
                  <p className="text-lg font-bold text-white">{gs(costoPeajes)}</p>
                </div>

                <div className="bg-zinc-900/80 p-3 rounded-xl border border-zinc-800 flex justify-between items-center">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-widest text-zinc-500">Desgaste Flota</p>
                    <p className="text-xs text-zinc-600">{gs(configVehiculo.mantenimientoKm)} por km</p>
                  </div>
                  <p className="text-lg font-bold text-white">{gs(costoMantenimiento)}</p>
                </div>

                <div className="bg-zinc-900/80 p-3 rounded-xl border border-zinc-800 flex justify-between items-center">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-widest text-zinc-500">Recursos Humanos</p>
                    <p className="text-xs text-zinc-600">Chofer {llevaAyudante ? "+ Peón" : ""}</p>
                  </div>
                  <p className="text-lg font-bold text-white">{gs(costoPersonal)}</p>
                </div>
              </div>

              <div className="pt-4 mt-2 border-t border-zinc-800">
                <div className="flex justify-between items-center mb-2">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-red-400">Costo Operativo Base</p>
                  <p className="text-xl font-black text-red-400">{gs(costoOperativo)}</p>
                </div>
                
                <div className="flex justify-between items-center">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-blue-400">Utilidad Neta ({margen}%)</p>
                  <p className="text-xl font-black text-blue-400">{gs(ganancia)}</p>
                </div>
              </div>

              <div className="pt-6 mt-2 border-t border-zinc-800 text-center">
                <p className="text-[11px] font-bold uppercase tracking-widest text-emerald-500 mb-2">
                  Cotización Final Sugerida
                </p>
                <p className="text-4xl sm:text-5xl font-black text-white">
                  {gs(precioVenta)}
                </p>
              </div>

              <div className="pt-4">
                <button
                  onClick={handleWhatsApp}
                  className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-black py-4 rounded-2xl transition-all shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:shadow-[0_0_30px_rgba(16,185,129,0.35)] active:scale-[0.98] flex items-center justify-center gap-2 text-[15px]"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Coordinar este flete por WhatsApp
                </button>
                <p className="text-[11px] text-zinc-600 text-center mt-2">
                  El mensaje incluye el desglose completo de costos y la cotización
                </p>
              </div>
            </div>
          ) : (
            <div className="text-center text-zinc-500 py-10 relative z-10">
              <svg className="w-16 h-16 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path></svg>
              <p className="font-bold text-lg text-zinc-400">
                Parametrizá la ruta para calcular
              </p>
              <p className="text-sm mt-2">
                El sistema estructurará automáticamente los costos operativos reales y el precio comercial sugerido.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
