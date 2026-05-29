"use client";

/**
 * app/[lang]/(funnels)/motor/demo/page.tsx
 * ─────────────────────────────────────────────────────────────
 * Demo público del Motor AYCweb — Cotizador de Muebles a Medida.
 *
 * Propósito: mostrar EN VIVO exactamente lo que instalamos en el
 * sitio del cliente. El motor que cotiza aquí es el mismo código
 * que opera en producción (MetalMad, OriplastPy, etc.)
 *
 * Flujo: selección → precio en vivo → PDF descargable → WhatsApp.
 * Zero datos persistentes. Todo en memoria React.
 */

import { useMemo, useState } from "react";
import Link from "next/link";

import { CATALOGO_DEMO, type ProductoDemo } from "@/lib/config/demo/productos";
import {
  calcularCotizacion,
  formatearMoneda,
  buildResumenWhatsApp,
  type ResultadoCotizacion,
} from "@/lib/domain/cotizacion";
import { generarPdfCotizacion } from "@/lib/services/pdf-cotizacion";
import { buildWhatsAppLink } from "@/lib/services/whatsapp-link";

// ─── Tipos locales ────────────────────────────────────────────────────────────

interface ClienteForm {
  nombre: string;
  empresa: string;
  telefono: string;
}

// ─── Componente ───────────────────────────────────────────────────────────────

export default function MotorDemoPage() {
  // Estado del formulario de cliente
  const [cliente, setCliente] = useState<ClienteForm>({
    nombre: "",
    empresa: "",
    telefono: "",
  });

  // Mapa productoId → cantidad seleccionada
  const [seleccionados, setSeleccionados] = useState<Record<string, number>>({});

  // Estado de carga del PDF
  const [cargandoPdf, setCargandoPdf] = useState(false);

  // ── Cálculo del resultado en tiempo real ─────────────────────────────────

  const itemsParaCotizar = useMemo(() => {
    return CATALOGO_DEMO.filter(
      (p) => seleccionados[p.id] && seleccionados[p.id] > 0
    ).map((p) => ({
      productoId: p.id,
      nombre: p.nombre,
      cantidad: seleccionados[p.id],
      precioUnitario: p.precioUSD,
    }));
  }, [seleccionados]);

  const resultado: ResultadoCotizacion = useMemo(() => {
    return calcularCotizacion(itemsParaCotizar, { moneda: "USD", tasaIVA: 0.1 });
  }, [itemsParaCotizar]);

  const hayItems = resultado.items.length > 0;

  // ── Handlers ─────────────────────────────────────────────────────────────

  const cambiarCantidad = (id: string, delta: number) => {
    setSeleccionados((prev) => {
      const actual = prev[id] ?? 0;
      const nueva = Math.max(0, actual + delta);
      if (nueva === 0) {
        // Quitar del mapa
        const { [id]: _, ...resto } = prev;
        return resto;
      }
      return { ...prev, [id]: nueva };
    });
  };

  const setCantidadDirecta = (id: string, valor: number) => {
    const v = Math.max(0, Math.floor(valor));
    setSeleccionados((prev) => {
      if (v === 0) {
        const { [id]: _, ...resto } = prev;
        return resto;
      }
      return { ...prev, [id]: v };
    });
  };

  const limpiarSeleccion = () => setSeleccionados({});

  const handleGenerarPDF = async () => {
    if (!hayItems) return;
    setCargandoPdf(true);
    try {
      await generarPdfCotizacion({
        titulo: "Cotización – Muebles a Medida",
        cliente: {
          nombre: cliente.nombre || "Cliente Demo",
          empresa: cliente.empresa || undefined,
          telefono: cliente.telefono || undefined,
        },
        resultado,
        validezDias: 7,
        nombreArchivo: `Cotizacion_MotorAYCweb_${Date.now()}.pdf`,
      });
    } catch (err) {
      console.error("Error al generar PDF:", err);
      alert("Ocurrió un error al generar el PDF. Intentá de nuevo.");
    } finally {
      setCargandoPdf(false);
    }
  };

  const handleWhatsApp = () => {
    if (!hayItems) return;
    const mensaje = buildResumenWhatsApp(resultado, cliente.nombre, cliente.empresa);
    const url = buildWhatsAppLink(mensaje);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  // ── UI ───────────────────────────────────────────────────────────────────

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">

      {/* ══════════════════════════════════════════════════════════════
          BANNER PERMANENTE — propósito comercial + conversión
      ══════════════════════════════════════════════════════════════ */}
      <div className="sticky top-0 z-50 bg-gradient-to-r from-blue-700 via-blue-600 to-violet-700 shadow-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2.5">
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="hidden sm:flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/20 text-sm font-black">
              ⚡
            </span>
            <div className="text-left">
              <p className="text-[12px] sm:text-sm font-semibold text-white leading-snug">
                <span className="font-black">Esto es exactamente lo que instalamos en tu sitio.</span>
              </p>
              <p className="text-[12px] sm:text-sm text-yellow-300 font-bold mt-1">
                Modelo SaaS Simple: Desde USD 50/mes (Catálogo estandarizado, despliegue en 3–5 días).
              </p>
              <p className="text-[11px] sm:text-[12px] text-white/80 mt-1">
                Infraestructura B2B a Medida: Desde USD 900 (Arquitectura completa, PDFs dinámicos, panel operativo e integración profunda). Ver planes completos en la sección Empresas.
              </p>
            </div>
          </div>
          <Link
            href="/es/diagnostico-comercial"
            className="shrink-0 rounded-lg bg-white px-3 py-1.5 text-[11px] sm:text-xs font-black text-blue-700 transition hover:bg-yellow-300 hover:text-blue-900 active:scale-95 whitespace-nowrap"
          >
            Quiero este motor →
          </Link>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════
          HERO del demo
      ══════════════════════════════════════════════════════════════ */}
      <header className="border-b border-white/[0.06] bg-[#04050a] px-4 py-8 md:py-12 text-center">
        <div className="mx-auto max-w-2xl">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/30 bg-blue-950/40 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-blue-300 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
            Demo público · Sin registro · Motor real
          </span>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white mb-3 leading-tight">
            Cotizador de{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
              Muebles a Medida
            </span>
          </h1>

          <p className="text-slate-400 text-sm md:text-base max-w-lg mx-auto leading-relaxed">
            Seleccioná productos, ajustá cantidades y obtené tu cotización al instante.
            PDF descargable y envío por WhatsApp incluidos.
          </p>
        </div>
      </header>

      {/* ══════════════════════════════════════════════════════════════
          CUERPO PRINCIPAL: catálogo + resumen
      ══════════════════════════════════════════════════════════════ */}
      <main className="mx-auto max-w-7xl px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-6 items-start">

          {/* ── COLUMNA IZQUIERDA: catálogo ─────────────────────────── */}
          <div className="space-y-6">

            {/* Datos del cliente */}
            <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <h2 className="mb-4 text-sm font-black uppercase tracking-widest text-slate-400">
                1 · Datos del cliente (opcional)
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {(
                  [
                    { key: "nombre", label: "Nombre / Razón social", placeholder: "Ej: Juan Pérez" },
                    { key: "empresa", label: "Empresa", placeholder: "Ej: Distribuidora Norte" },
                    { key: "telefono", label: "Teléfono", placeholder: "Ej: 0981 123 456" },
                  ] as const
                ).map(({ key, label, placeholder }) => (
                  <div key={key}>
                    <label className="mb-1 block text-[11px] font-bold uppercase tracking-wider text-slate-500">
                      {label}
                    </label>
                    <input
                      type="text"
                      placeholder={placeholder}
                      value={cliente[key]}
                      onChange={(e) => setCliente({ ...cliente, [key]: e.target.value })}
                      className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-white placeholder:text-slate-600 outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30"
                    />
                  </div>
                ))}
              </div>
            </section>

            {/* Catálogo de productos */}
            <section>
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-sm font-black uppercase tracking-widest text-slate-400">
                  2 · Seleccioná productos
                </h2>
                {Object.keys(seleccionados).length > 0 && (
                  <button
                    onClick={limpiarSeleccion}
                    className="text-[11px] font-bold text-slate-500 hover:text-red-400 transition-colors"
                  >
                    Limpiar selección ×
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {CATALOGO_DEMO.map((producto) => {
                  const cant = seleccionados[producto.id] ?? 0;
                  const activo = cant > 0;

                  return (
                    <ProductoCard
                      key={producto.id}
                      producto={producto}
                      cantidad={cant}
                      activo={activo}
                      onIncrement={() => cambiarCantidad(producto.id, +1)}
                      onDecrement={() => cambiarCantidad(producto.id, -1)}
                      onSetCantidad={(v) => setCantidadDirecta(producto.id, v)}
                    />
                  );
                })}
              </div>
            </section>
          </div>

          {/* ── COLUMNA DERECHA: resumen sticky ─────────────────────── */}
          <aside className="lg:sticky lg:top-[52px]">
            <ResumenCotizacion
              resultado={resultado}
              hayItems={hayItems}
              cargandoPdf={cargandoPdf}
              onGenerarPDF={handleGenerarPDF}
              onWhatsApp={handleWhatsApp}
            />
          </aside>
        </div>
      </main>

      {/* ══════════════════════════════════════════════════════════════
          BOTTOM BAR MOBILE: acciones fijas
      ══════════════════════════════════════════════════════════════ */}
      {hayItems && (
        <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-slate-800 bg-slate-950/95 backdrop-blur px-4 py-3 lg:hidden">
          <div className="mx-auto flex max-w-xl items-center gap-3">
            <div className="flex-1 min-w-0">
              <p className="text-[10px] font-bold uppercase text-slate-500 truncate">
                Total ({resultado.cantidadTotal} items)
              </p>
              <p className="text-lg font-black text-white">
                {formatearMoneda(resultado.total)}
              </p>
            </div>
            <button
              onClick={handleGenerarPDF}
              disabled={cargandoPdf}
              className="rounded-xl bg-slate-800 border border-slate-700 px-4 py-2.5 text-xs font-black text-white transition hover:bg-slate-700 disabled:opacity-50 active:scale-95"
            >
              {cargandoPdf ? "⏳" : "📄 PDF"}
            </button>
            <button
              onClick={handleWhatsApp}
              className="rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-black text-white transition hover:bg-emerald-500 active:scale-95"
            >
              💬 WhatsApp
            </button>
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════════════════════════
          CTA FINAL
      ══════════════════════════════════════════════════════════════ */}
      <footer className="border-t border-white/[0.05] bg-[#04050a] px-4 py-16 mt-8 text-center">
        <div className="mx-auto max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-950/40 border border-blue-500/20 px-4 py-1.5 mb-5">
            <span className="text-blue-400 text-xs font-black uppercase tracking-widest">
              Motor AYCweb SaaS
            </span>
          </div>

          <h2 className="text-2xl md:text-4xl font-black text-white mb-4 leading-tight">
            Este motor en tu sitio,{" "}
            <span className="text-blue-400">funcionando esta semana.</span>
          </h2>

          <p className="text-slate-400 text-sm md:text-base mb-8 leading-relaxed max-w-lg mx-auto">
            Lo que acabás de probar —catálogo, precios en vivo, PDF, WhatsApp— es exactamente
            lo que instalamos en 3–5 días hábiles. Adaptado a tu rubro, tus márgenes, tu branding.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/es/diagnostico-comercial"
              className="w-full sm:w-auto rounded-xl bg-blue-600 px-8 py-4 font-black text-white shadow-[0_0_30px_rgba(37,99,235,0.4)] transition hover:bg-blue-500 active:scale-95 text-center"
            >
              Quiero este motor en mi sitio
            </Link>
            <Link
              href="/es/obras"
              className="w-full sm:w-auto rounded-xl border border-slate-700 bg-slate-900 px-8 py-4 font-bold text-slate-300 transition hover:bg-slate-800 text-center"
            >
              Ver casos reales →
            </Link>
          </div>

          <div className="mt-5 text-xs text-slate-600 space-y-1">
            <p>
              <strong>Modelo SaaS Simple:</strong> Desde USD 50/mes — Catálogo estandarizado, despliegue en 3–5 días.
            </p>
            <p>
              <strong>Infraestructura B2B a Medida:</strong> Desde USD 900 — Arquitectura completa, PDFs dinámicos, panel operativo e integración profunda. Ver planes en Empresas.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// SUB-COMPONENTES
// ─────────────────────────────────────────────────────────────────────────────

// ── Tarjeta de producto ───────────────────────────────────────────────────────

interface ProductoCardProps {
  producto: ProductoDemo;
  cantidad: number;
  activo: boolean;
  onIncrement: () => void;
  onDecrement: () => void;
  onSetCantidad: (v: number) => void;
}

function ProductoCard({
  producto,
  cantidad,
  activo,
  onIncrement,
  onDecrement,
  onSetCantidad,
}: ProductoCardProps) {
  return (
    <div
      className={`group relative rounded-2xl border p-4 transition-all duration-200 ${
        activo
          ? "border-blue-500/50 bg-blue-950/30 shadow-[0_0_20px_rgba(37,99,235,0.1)]"
          : "border-slate-800 bg-slate-900/40 hover:border-slate-700"
      }`}
    >
      {/* Emoji + categoria */}
      <div className="mb-2 flex items-start justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="text-2xl leading-none">{producto.emoji}</span>
          <span
            className={`text-[9px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded ${
              activo
                ? "text-blue-300 bg-blue-900/50"
                : "text-slate-500 bg-slate-800"
            }`}
          >
            {producto.categoria}
          </span>
        </div>

        <span className="text-base font-black text-white shrink-0">
          {formatearMoneda(producto.precioUSD)}
        </span>
      </div>

      {/* Nombre y descripcion */}
      <h3 className="font-black text-white text-sm mb-1 leading-snug">
        {producto.nombre}
      </h3>
      <p className="text-[11px] text-slate-500 leading-relaxed mb-3 line-clamp-2">
        {producto.descripcion}
      </p>

      {/* Entrega */}
      <p className="text-[10px] font-bold text-slate-600 mb-3">
        🕐 {producto.plazoEntrega}
      </p>

      {/* Control de cantidad */}
      {activo ? (
        <div className="flex items-center gap-2">
          <button
            onClick={onDecrement}
            aria-label="Reducir cantidad"
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-700 bg-slate-800 text-white font-black text-lg transition hover:border-red-500/50 hover:bg-red-900/20 hover:text-red-400 active:scale-95"
          >
            −
          </button>
          <input
            type="number"
            min={0}
            value={cantidad}
            onChange={(e) => onSetCantidad(Number(e.target.value))}
            className="h-8 w-14 rounded-lg border border-blue-500/40 bg-blue-950/40 text-center text-sm font-black text-white outline-none focus:ring-1 focus:ring-blue-500"
          />
          <button
            onClick={onIncrement}
            aria-label="Aumentar cantidad"
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-blue-500/40 bg-blue-600 text-white font-black text-lg transition hover:bg-blue-500 active:scale-95"
          >
            +
          </button>
          <span className="text-[10px] text-slate-500 font-bold">
            = {formatearMoneda(cantidad * producto.precioUSD)}
          </span>
        </div>
      ) : (
        <button
          onClick={onIncrement}
          className="w-full rounded-xl border border-slate-700 bg-slate-800 py-2 text-xs font-black text-slate-300 transition hover:border-blue-500/50 hover:bg-blue-950/30 hover:text-blue-300 active:scale-95"
        >
          + Agregar al presupuesto
        </button>
      )}
    </div>
  );
}

// ── Panel de resumen / acciones ───────────────────────────────────────────────

interface ResumenCotizacionProps {
  resultado: ResultadoCotizacion;
  hayItems: boolean;
  cargandoPdf: boolean;
  onGenerarPDF: () => void;
  onWhatsApp: () => void;
}

function ResumenCotizacion({
  resultado,
  hayItems,
  cargandoPdf,
  onGenerarPDF,
  onWhatsApp,
}: ResumenCotizacionProps) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/60 overflow-hidden">
      {/* Header del resumen */}
      <div className="bg-slate-900 px-5 py-4 border-b border-slate-800">
        <h2 className="text-sm font-black uppercase tracking-widest text-slate-400">
          3 · Resumen de cotización
        </h2>
      </div>

      <div className="p-5 space-y-4">
        {/* Estado vacío */}
        {!hayItems && (
          <div className="flex flex-col items-center justify-center py-10 text-center">
            <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-slate-800 text-3xl">
              🛒
            </div>
            <p className="text-sm font-bold text-slate-400 mb-1">Ningún producto seleccionado</p>
            <p className="text-xs text-slate-600">
              Agregá productos del catálogo para ver el precio en tiempo real
            </p>
          </div>
        )}

        {/* Items seleccionados */}
        {hayItems && (
          <div className="space-y-2">
            {resultado.items.map((item) => (
              <div
                key={item.productoId}
                className="flex items-start justify-between gap-2 text-sm"
              >
                <div className="min-w-0">
                  <p className="font-semibold text-slate-200 leading-snug text-[13px] truncate">
                    {item.nombre}
                  </p>
                  <p className="text-[11px] text-slate-500">
                    {item.cantidad} × {formatearMoneda(item.precioUnitario)}
                  </p>
                </div>
                <span className="font-black text-white shrink-0 text-[13px]">
                  {formatearMoneda(item.subtotal)}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Totales */}
        {hayItems && (
          <>
            <div className="border-t border-slate-800 pt-4 space-y-2">
              <div className="flex justify-between text-sm text-slate-400">
                <span>Subtotal</span>
                <span className="font-semibold text-slate-200">
                  {formatearMoneda(resultado.subtotal)}
                </span>
              </div>
              <div className="flex justify-between text-sm text-slate-400">
                <span>IVA (10%)</span>
                <span className="font-semibold text-slate-200">
                  {formatearMoneda(resultado.iva)}
                </span>
              </div>
            </div>

            {/* TOTAL */}
            <div className="rounded-xl bg-gradient-to-r from-blue-600/20 to-violet-600/20 border border-blue-500/30 px-4 py-3 flex justify-between items-center">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-blue-300">
                  Total cotización
                </p>
                <p className="text-[10px] text-slate-500">
                  {resultado.cantidadTotal} item{resultado.cantidadTotal !== 1 ? "s" : ""}
                </p>
              </div>
              <p className="text-2xl font-black text-white">
                {formatearMoneda(resultado.total)}
              </p>
            </div>

            {/* Disclaimer demo */}
            <p className="text-[10px] text-slate-600 text-center">
              * Precios de muestra. En producción se configuran los precios reales del cliente.
            </p>

            {/* Acciones */}
            <div className="space-y-2 pt-1">
              <button
                onClick={onGenerarPDF}
                disabled={cargandoPdf}
                className="w-full rounded-xl bg-slate-800 border border-slate-700 py-3 text-sm font-black text-white transition hover:bg-slate-700 hover:border-blue-500/40 disabled:opacity-50 active:scale-95 flex items-center justify-center gap-2"
              >
                {cargandoPdf ? (
                  <>
                    <span className="h-4 w-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                    Generando PDF…
                  </>
                ) : (
                  <>
                    📄 Descargar PDF
                  </>
                )}
              </button>

              <button
                onClick={onWhatsApp}
                className="w-full rounded-xl bg-emerald-600 py-3 text-sm font-black text-white transition hover:bg-emerald-500 active:scale-95 flex items-center justify-center gap-2"
              >
                💬 Enviar por WhatsApp
              </button>
            </div>
          </>
        )}

        {/* Divisor */}
        <div className="border-t border-slate-800 pt-4">
          <div className="rounded-xl bg-gradient-to-br from-blue-950/50 to-violet-950/50 border border-blue-500/20 p-4 text-center">
            <p className="text-[11px] font-black uppercase tracking-wider text-blue-300 mb-1">
              Motor AYCweb SaaS
            </p>
            <p className="text-[12px] text-slate-400 mb-3 leading-relaxed">
              Este cotizador funciona en el sitio de tu empresa. Configurado con tu catálogo y precios.
            </p>
            <Link
              href="/es/diagnostico-comercial"
              className="inline-block rounded-lg bg-blue-600 px-4 py-2 text-[11px] font-black text-white transition hover:bg-blue-500 active:scale-95"
            >
              Desde USD 50/mes →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
