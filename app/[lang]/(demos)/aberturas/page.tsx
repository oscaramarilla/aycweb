"use client";

import { useMemo, useState } from "react";
import {
  generarPdfAberturas,
  type ClienteAberturas,
} from "@/lib/services/pdfService";
import { buildWhatsAppLink } from "@/lib/services/whatsapp-link";
import {
  calcularCotizacion,
  moneda,
  PRODUCTOS,
  type ProductoKey,
} from "@/lib/domain/cotizadorAberturas";

type Cliente = ClienteAberturas;

export default function PresupuestoAberturasPage() {
  const [cargando, setCargando] = useState(false);

  const [cliente, setCliente] = useState<Cliente>({
    nombre: "",
    contacto: "",
    ruc: "",
    telefono: "",
    ubicacion: "",
    fecha: new Date().toLocaleDateString("es-PY"),
  });

  const [producto, setProducto] = useState<ProductoKey>("puerta_2h_incolor");
  const [ancho, setAncho] = useState(PRODUCTOS.puerta_2h_incolor.anchoDefault);
  const [alto, setAlto] = useState(PRODUCTOS.puerta_2h_incolor.altoDefault);
  const [cantidad, setCantidad] = useState(1);
  const [margenPorcentaje, setMargenPorcentaje] = useState(35);
  const [redondeo, setRedondeo] = useState(1000);
  const [incluirPremarco, setIncluirPremarco] = useState(true);
  const [incluirColocacion, setIncluirColocacion] = useState(true);
  const [descuentoGs, setDescuentoGs] = useState(0);
  const [adicionalGs, setAdicionalGs] = useState(0);
  const inputClass =
    "w-full rounded-lg border border-zinc-300 bg-white p-2 text-sm font-semibold text-zinc-950 placeholder:text-zinc-500 caret-zinc-950 shadow-sm outline-none transition focus:border-zinc-950 focus:ring-2 focus:ring-zinc-200";

  const inputHalfClass =
    "w-1/2 rounded-lg border border-zinc-300 bg-white p-2 text-sm font-semibold text-zinc-950 placeholder:text-zinc-500 caret-zinc-950 shadow-sm outline-none transition focus:border-zinc-950 focus:ring-2 focus:ring-zinc-200";

  const inputMeasureClass =
    "w-full rounded-lg border border-zinc-300 bg-white p-2 text-sm font-black text-zinc-950 placeholder:text-zinc-500 caret-zinc-950 shadow-sm outline-none transition focus:border-zinc-950 focus:ring-2 focus:ring-zinc-200";

  const [mostrarDesglose, setMostrarDesglose] = useState(false);

  const resultado = useMemo(() => {
    return calcularCotizacion({
      producto,
      ancho,
      alto,
      cantidad,
      margenPorcentaje,
      redondeo,
      incluirPremarco,
      incluirColocacion,
      descuentoGs,
      adicionalGs,
    });
  }, [
    producto,
    ancho,
    alto,
    cantidad,
    margenPorcentaje,
    redondeo,
    incluirPremarco,
    incluirColocacion,
    descuentoGs,
    adicionalGs,
  ]);

  const formularioValido = ancho > 0 && alto > 0 && cantidad > 0;

  const cambiarProducto = (nuevoProducto: ProductoKey) => {
    setProducto(nuevoProducto);
    setAncho(PRODUCTOS[nuevoProducto].anchoDefault);
    setAlto(PRODUCTOS[nuevoProducto].altoDefault);

    if (nuevoProducto === "guia_desplazada_1h" || nuevoProducto === "guia_desplazada_2h") {
      setIncluirPremarco(false);
    } else {
      setIncluirPremarco(true);
    }
  };

  const generarPDF = async () => {
    if (!formularioValido) return;
    setCargando(true);
    try {
      // ✅ Lógica PDF delegada al servicio — la UI no toca jsPDF directamente
      await generarPdfAberturas({
        cliente,
        resultado,
        incluirPremarco,
        incluirColocacion,
        mostrarDesglose,
      });
      console.log("Cotizacion_Aberturas_Generada", {
        producto: resultado.productoNombre,
        total_gs: resultado.totalGeneral,
        m2: resultado.m2,
        cantidad: resultado.cantidad,
      });
    } catch (error: unknown) {
      const msg = error instanceof Error ? error.message : "Error desconocido";
      console.error("Error al generar PDF:", error);
      alert("Error técnico al generar el PDF: " + msg);
    }
    setCargando(false);
  };

  const abrirWhatsApp = () => {
    if (!formularioValido) return;

    // Número del cliente (solo dígitos). Si está vacío, buildWhatsAppLink
    // usa WHATSAPP_NUMBER como fallback (AYCweb) con validación incluida.
    const telefonoCliente = cliente.telefono.replace(/\D/g, "") || undefined;

    const mensajeTexto =
      `Hola, te comparto el presupuesto solicitado:\n\n` +
      `Cliente: ${cliente.nombre || "Sin nombre"}\n` +
      `Producto: ${resultado.productoNombre}\n` +
      `Medidas: ${resultado.ancho} x ${resultado.alto} cm\n` +
      `Cantidad: ${resultado.cantidad}\n` +
      `Superficie: ${resultado.m2.toFixed(2)} m²\n` +
      `Incluye premarco: ${incluirPremarco ? "Sí" : "No"}\n` +
      `Incluye colocación: ${incluirColocacion ? "Sí" : "No"}\n\n` +
      `Precio unitario: ${moneda(resultado.precioVentaRedondeado)}\n` +
      `Total general: ${moneda(resultado.totalGeneral)}\n\n` +
      `Validez del presupuesto: 7 días.\n` +
      `Para avanzar podemos coordinar medición, seña y fecha de instalación.`;

    const url = buildWhatsAppLink(mensajeTexto, telefonoCliente);
    window.open(url, "_blank");
  };

  const medidasRapidas = [
    { label: "170 x 210", ancho: 170, alto: 210 },
    { label: "200 x 210", ancho: 200, alto: 210 },
    { label: "300 x 210", ancho: 300, alto: 210 },
    { label: "400 x 210", ancho: 400, alto: 210 },
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-zinc-100 font-sans">
      <div className="relative z-10 flex min-h-screen w-full justify-center bg-zinc-100 p-4 pb-32 md:p-8">
        <div className="flex h-fit w-full max-w-xl flex-col gap-6 rounded-3xl border border-zinc-200 bg-white p-6 shadow-xl">
          <div className="text-center">
            <p className="mb-2 text-xs font-black uppercase tracking-[0.25em] text-zinc-400">
              Terminal de ventas B2B
            </p>
            <h2 className="text-3xl font-black tracking-tight text-zinc-950">
              Cotizador Automático de Aberturas
            </h2>
            <p className="mt-2 text-sm text-zinc-500">
              Cargá medidas, calculá el precio y generá el presupuesto en PDF en menos de 1 minuto.
            </p>
          </div>

          <div className="grid grid-cols-4 gap-2 rounded-2xl bg-zinc-950 p-3 text-center text-[10px] font-black uppercase tracking-wide text-zinc-400">
            <div className="rounded-xl bg-white px-2 py-2 text-zinc-950">1 Cliente</div>
            <div className="rounded-xl bg-zinc-800 px-2 py-2">2 Producto</div>
            <div className="rounded-xl bg-zinc-800 px-2 py-2">3 Medidas</div>
            <div className="rounded-xl bg-zinc-800 px-2 py-2">4 PDF</div>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
            <h3 className="mb-3 border-b pb-2 font-bold text-zinc-800">1. Datos del cliente</h3>

            <div className="space-y-3">
              <input
                type="text"
                placeholder="Ej: Vidriería San Miguel / Juan Pérez"
                className={inputClass}
                value={cliente.nombre}
                onChange={(e) => setCliente({ ...cliente, nombre: e.target.value })}
              />

              <input
                type="text"
                placeholder="Ej: Carlos González"
                className={inputClass}
                value={cliente.contacto}
                onChange={(e) => setCliente({ ...cliente, contacto: e.target.value })}
              />

              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Ej: 80123456-7"
                  className={inputHalfClass}
                  value={cliente.ruc}
                  onChange={(e) => setCliente({ ...cliente, ruc: e.target.value })}
                />

                <input
                  type="text"
                  placeholder="Ej: 0981 123 456"
                  className={inputHalfClass}
                  value={cliente.telefono}
                  onChange={(e) => setCliente({ ...cliente, telefono: e.target.value })}
                />
              </div>

              <input
                type="text"
                placeholder="Ej: Obra en San Lorenzo / Asunción"
                className={inputClass}
                value={cliente.ubicacion}
                onChange={(e) => setCliente({ ...cliente, ubicacion: e.target.value })}
              />
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
            <h3 className="mb-1 font-black text-zinc-900">2. Elegí el tipo de abertura</h3>
            <p className="mb-3 text-xs text-zinc-500">
              Seleccioná el modelo, cargá las medidas del vano y el sistema calcula materiales, vidrio,
              colocación y margen.
            </p>

            <div className="grid grid-cols-2 gap-2">
              {(Object.entries(PRODUCTOS) as [ProductoKey, (typeof PRODUCTOS)[ProductoKey]][]).map(
                ([key, item]) => {
                  const activo = producto === key;

                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => cambiarProducto(key)}
                      className={`rounded-2xl border p-3 text-left transition active:scale-[0.98] ${
                        activo
                          ? "border-zinc-950 bg-zinc-950 text-white shadow-lg"
                          : "border-zinc-200 bg-white text-zinc-800 hover:border-zinc-400"
                      }`}
                    >
                      <p className="text-sm font-black">{item.nombreCorto}</p>
                      <p className={`mt-1 text-[11px] ${activo ? "text-zinc-300" : "text-zinc-500"}`}>
                        {item.anchoDefault} x {item.altoDefault} cm
                      </p>
                    </button>
                  );
                }
              )}
            </div>

            <div className="mt-4 grid grid-cols-3 gap-2">
              <div>
                <label className="mb-1 block text-xs font-bold text-zinc-500">Ancho cm</label>
                <input
                  type="number"
                  className={inputMeasureClass}
                  value={ancho}
                  onChange={(e) => setAncho(Number(e.target.value))}
                />
              </div>

              <div>
                <label className="mb-1 block text-xs font-bold text-zinc-500">Alto cm</label>
                <input
                  type="number"
                  className={inputMeasureClass}
                  value={alto}
                  onChange={(e) => setAlto(Number(e.target.value))}
                />
              </div>

              <div>
                <label className="mb-1 block text-xs font-bold text-zinc-500">Cant.</label>
                <input
                  type="number"
                  min={1}
                  className={inputMeasureClass}
                  value={cantidad}
                  onChange={(e) => setCantidad(Number(e.target.value))}
                />
              </div>
            </div>

            <div className="mt-3">
              <p className="mb-2 text-xs font-bold uppercase text-zinc-500">Medidas rápidas</p>
              <div className="grid grid-cols-2 gap-2">
                {medidasRapidas.map((medida) => (
                  <button
                    key={medida.label}
                    type="button"
                    onClick={() => {
                      setAncho(medida.ancho);
                      setAlto(medida.alto);
                    }}
                    className="rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm font-bold text-zinc-700 hover:border-zinc-900 hover:bg-zinc-100"
                  >
                    {medida.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2">
              <label className="flex items-center justify-between rounded-xl border bg-white p-3 text-sm font-semibold">
                Incluir premarco
                <input
                  type="checkbox"
                  checked={incluirPremarco}
                  onChange={(e) => setIncluirPremarco(e.target.checked)}
                />
              </label>

              <label className="flex items-center justify-between rounded-xl border bg-white p-3 text-sm font-semibold">
                Incluir colocación
                <input
                  type="checkbox"
                  checked={incluirColocacion}
                  onChange={(e) => setIncluirColocacion(e.target.checked)}
                />
              </label>
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
            <h3 className="mb-3 border-b pb-2 font-bold text-zinc-800">3. Margen y ajustes</h3>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="mb-1 block text-xs font-bold text-zinc-500">Margen %</label>
                <input
                  type="number"
                  className={inputMeasureClass}
                  value={margenPorcentaje}
                  onChange={(e) => setMargenPorcentaje(Number(e.target.value))}
                />
              </div>

              <div>
                <label className="mb-1 block text-xs font-bold text-zinc-500">Redondeo Gs.</label>
                <input
                  type="number"
                  className={inputMeasureClass}
                  value={redondeo}
                  onChange={(e) => setRedondeo(Number(e.target.value))}
                />
              </div>

              <div>
                <label className="mb-1 block text-xs font-bold text-zinc-500">Adicional Gs.</label>
                <input
                  type="number"
                  className={inputMeasureClass}
                  value={adicionalGs}
                  onChange={(e) => setAdicionalGs(Number(e.target.value))}
                />
              </div>

              <div>
                <label className="mb-1 block text-xs font-bold text-zinc-500">Descuento Gs.</label>
                <input
                  type="number"
                  className={inputMeasureClass}
                  value={descuentoGs}
                  onChange={(e) => setDescuentoGs(Number(e.target.value))}
                />
              </div>
            </div>

            <label className="mt-3 flex items-center justify-between rounded-xl border bg-white p-3 text-sm font-semibold">
              Mostrar desglose técnico en PDF
              <input
                type="checkbox"
                checked={mostrarDesglose}
                onChange={(e) => setMostrarDesglose(e.target.checked)}
              />
            </label>
          </div>

          {!formularioValido && (
            <div className="rounded-xl border border-red-200 bg-red-50 p-3 text-sm font-bold text-red-700">
              Revisá las medidas y la cantidad. No pueden estar en cero.
            </div>
          )}

          <div className="rounded-2xl border border-zinc-200 bg-zinc-950 p-4 text-white">
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <p className="text-xs uppercase text-zinc-400">Producto</p>
                <p className="font-bold">{resultado.productoNombre}</p>
              </div>

              <div>
                <p className="text-xs uppercase text-zinc-400">Superficie</p>
                <p className="font-bold">{resultado.m2.toFixed(2)} m²</p>
              </div>

              <div>
                <p className="text-xs uppercase text-zinc-400">Precio unitario</p>
                <p className="font-bold">{moneda(resultado.precioVentaRedondeado)}</p>
              </div>

              <div>
                <p className="text-xs uppercase text-zinc-400">Total</p>
                <p className="text-xl font-black text-emerald-400">{moneda(resultado.totalGeneral)}</p>
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={generarPDF}
              disabled={cargando || !formularioValido}
              className="w-1/2 rounded-xl bg-zinc-950 py-4 font-black text-white shadow-lg transition hover:bg-zinc-800 disabled:bg-zinc-400 active:scale-95"
            >
              {cargando ? "Generando..." : "Descargar PDF"}
            </button>

            <button
              onClick={abrirWhatsApp}
              disabled={!formularioValido}
              className="w-1/2 rounded-xl bg-emerald-600 py-4 font-black text-white shadow-lg transition hover:bg-emerald-700 disabled:bg-zinc-400 active:scale-95"
            >
              Enviar WhatsApp
            </button>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-white p-4">
            <h3 className="mb-3 font-bold text-zinc-800">Resumen técnico rápido</h3>

            {(["Fabricación", "Premarco", "Colocación"] as const).map((categoria) => {
              const items = resultado.items.filter((item) => item.categoria === categoria);

              if (!items.length) return null;

              return (
                <div key={categoria} className="mb-4">
                  <p className="mb-2 text-xs font-black uppercase text-zinc-500">{categoria}</p>

                  <div className="space-y-1">
                    {items.slice(0, 6).map((item, index) => (
                      <div key={index} className="flex justify-between gap-3 text-xs">
                        <span className="truncate text-zinc-600">{item.nombre}</span>
                        <span className="font-bold text-zinc-900">{moneda(item.total)}</span>
                      </div>
                    ))}

                    {items.length > 6 && (
                      <p className="text-xs text-zinc-400">+ {items.length - 6} ítems más en el PDF</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-zinc-200 bg-white/95 p-3 shadow-2xl backdrop-blur md:hidden">
        <div className="mx-auto flex max-w-xl items-center gap-3">
          <div className="flex-1">
            <p className="text-xs font-bold uppercase text-zinc-500">Total</p>
            <p className="text-xl font-black text-zinc-950">{moneda(resultado.totalGeneral)}</p>
          </div>

          <button
            onClick={generarPDF}
            disabled={cargando || !formularioValido}
            className="rounded-xl bg-zinc-950 px-4 py-3 text-sm font-black text-white disabled:bg-zinc-400"
          >
            PDF
          </button>

          <button
            onClick={abrirWhatsApp}
            disabled={!formularioValido}
            className="rounded-xl bg-emerald-600 px-4 py-3 text-sm font-black text-white disabled:bg-zinc-400"
          >
            WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}
