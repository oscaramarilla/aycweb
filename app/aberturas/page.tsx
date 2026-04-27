"use client";

import { useMemo, useRef, useState } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { track } from "@vercel/analytics";

type ProductoKey =
  | "puerta_2h_incolor"
  | "puerta_4h_incolor"
  | "guia_desplazada_1h"
  | "guia_desplazada_2h";

type Cliente = {
  nombre: string;
  contacto: string;
  ruc: string;
  telefono: string;
  ubicacion: string;
  fecha: string;
};

type ItemTecnico = {
  categoria: "Fabricación" | "Premarco" | "Colocación";
  nombre: string;
  codigo?: string;
  formula: string;
  cantidad: number;
  precioUnitario: number;
  total: number;
};

type ResultadoCotizacion = {
  productoNombre: string;
  ancho: number;
  alto: number;
  cantidad: number;
  m2: number;
  subtotalFabricacion: number;
  subtotalPremarco: number;
  subtotalColocacion: number;
  costoUnitario: number;
  margenGs: number;
  precioVentaUnitario: number;
  precioVentaRedondeado: number;
  totalGeneral: number;
  items: ItemTecnico[];
};

const PRODUCTOS: Record<
  ProductoKey,
  {
    nombre: string;
    anchoDefault: number;
    altoDefault: number;
    descripcion: string;
  }
> = {
  puerta_2h_incolor: {
    nombre: "Puerta corrediza 2 hojas incolor",
    anchoDefault: 170,
    altoDefault: 210,
    descripcion: "Sistema corredizo de aluminio con vidrio incolor.",
  },
  puerta_4h_incolor: {
    nombre: "Puerta corrediza 4 hojas incolor",
    anchoDefault: 400,
    altoDefault: 210,
    descripcion: "Sistema corredizo de aluminio de mayor apertura con vidrio incolor.",
  },
  guia_desplazada_1h: {
    nombre: "Puerta guía desplazada 1 hoja",
    anchoDefault: 100,
    altoDefault: 210,
    descripcion: "Sistema de puerta con guía desplazada de una hoja.",
  },
  guia_desplazada_2h: {
    nombre: "Puerta guía desplazada 2 hojas",
    anchoDefault: 200,
    altoDefault: 210,
    descripcion: "Sistema de puerta con guía desplazada de dos hojas.",
  },
};

const PRECIOS = {
  marcoLateral: 176000,
  hojaSuperiorInferior: 168000,
  zocaloInferior: 368000,
  hojaLateralSinTubo: 165000,
  engancheInterno: 155000,
  engancheExterno: 145000,
  guiaSuperior: 261000,
  contraVidrioHorizontal: 55000,
  contraVidrioVertical: 47000,
  hojaLateralConTubo: 290000,
  complemento: 72000,
  cerradura: 75000,
  dreno: 5000,
  deslizante: 3000,
  rueditas: 15000,
  tornillo: 500,
  manoObraFabricacion: 30000,
  premarco: 70000,
  conector: 2000,
  patitaChumbador: 1000,
  escuadra: 7500,
  tubo50x50: 300000,
  vidrioIncolor8mm: 235000,
  ferreteria: 20000,
  silicona: 35000,
  contraMarco: 70000,
  penil: 1000,
  terminacionPiso: 70000,
  manoObraColocacion: 100000,
};

function gs(valor: number) {
  return Math.round(valor || 0).toLocaleString("es-PY");
}

function moneda(valor: number) {
  return `Gs. ${gs(valor)}`;
}

function calcularM2(ancho: number, alto: number) {
  return (ancho * alto) / 10000;
}

function redondear(valor: number, salto: number) {
  if (!salto || salto <= 0) return Math.round(valor);
  return Math.ceil(valor / salto) * salto;
}

function agregarItem(
  items: ItemTecnico[],
  categoria: ItemTecnico["categoria"],
  nombre: string,
  codigo: string | undefined,
  formula: string,
  cantidad: number,
  precioUnitario: number
) {
  const total = cantidad * precioUnitario;

  items.push({
    categoria,
    nombre,
    codigo,
    formula,
    cantidad,
    precioUnitario,
    total,
  });

  return total;
}

function calcularCotizacion(params: {
  producto: ProductoKey;
  ancho: number;
  alto: number;
  cantidad: number;
  margenPorcentaje: number;
  redondeo: number;
  incluirPremarco: boolean;
  incluirColocacion: boolean;
  descuentoGs: number;
  adicionalGs: number;
}) {
  const {
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
  } = params;

  const productoData = PRODUCTOS[producto];
  const items: ItemTecnico[] = [];
  const m2 = calcularM2(ancho, alto);

  let subtotalFabricacion = 0;
  let subtotalPremarco = 0;
  let subtotalColocacion = 0;

  if (producto === "puerta_2h_incolor") {
    subtotalFabricacion += agregarItem(items, "Fabricación", "Marco lateral", "IN003", "alto × 2 / 550", (alto * 2) / 550, PRECIOS.marcoLateral);
    subtotalFabricacion += agregarItem(items, "Fabricación", "Hoja superior e inferior", "IN004", "ancho / 550", ancho / 550, PRECIOS.hojaSuperiorInferior);
    subtotalFabricacion += agregarItem(items, "Fabricación", "Zócalo inferior", "IN005", "ancho / 550", ancho / 550, PRECIOS.zocaloInferior);
    subtotalFabricacion += agregarItem(items, "Fabricación", "Enganche interno sin tubo", "IN007", "alto / 550", alto / 550, PRECIOS.engancheInterno);
    subtotalFabricacion += agregarItem(items, "Fabricación", "Enganche externo sin tubo", "IN008", "alto / 550", alto / 550, PRECIOS.engancheExterno);
    subtotalFabricacion += agregarItem(items, "Fabricación", "Guía superior", "IN012", "ancho / 550", ancho / 550, PRECIOS.guiaSuperior);
    subtotalFabricacion += agregarItem(items, "Fabricación", "Contra vidrio horizontal", "IN017", "ancho × 2 / 550", (ancho * 2) / 550, PRECIOS.contraVidrioHorizontal);
    subtotalFabricacion += agregarItem(items, "Fabricación", "Contra vidrio vertical", "IN018", "alto × 4 / 550", (alto * 4) / 550, PRECIOS.contraVidrioVertical);
    subtotalFabricacion += agregarItem(items, "Fabricación", "Hoja lateral con tubo", "IN079", "alto × 2 / 550", (alto * 2) / 550, PRECIOS.hojaLateralConTubo);
    subtotalFabricacion += agregarItem(items, "Fabricación", "Cerradura con ganchito", "FRA6115", "2 unidades", 2, PRECIOS.cerradura);
    subtotalFabricacion += agregarItem(items, "Fabricación", "Dreno", "NYL452", "3 unidades", 3, PRECIOS.dreno);
    subtotalFabricacion += agregarItem(items, "Fabricación", "Deslizante", "NYL454", "8 unidades", 8, PRECIOS.deslizante);
    subtotalFabricacion += agregarItem(items, "Fabricación", "Rueditas puerta", "ROL439", "4 unidades", 4, PRECIOS.rueditas);
    subtotalFabricacion += agregarItem(items, "Fabricación", "Tornillos", undefined, "16 unidades", 16, PRECIOS.tornillo);
    subtotalFabricacion += agregarItem(items, "Fabricación", "Mano de obra fabricación", undefined, "1 unidad", 1, PRECIOS.manoObraFabricacion);
  }

  if (producto === "puerta_4h_incolor") {
    subtotalFabricacion += agregarItem(items, "Fabricación", "Marco lateral", "IN003", "alto × 2 / 550", (alto * 2) / 550, PRECIOS.marcoLateral);
    subtotalFabricacion += agregarItem(items, "Fabricación", "Hoja superior e inferior", "IN004", "ancho / 550", ancho / 550, PRECIOS.hojaSuperiorInferior);
    subtotalFabricacion += agregarItem(items, "Fabricación", "Zócalo inferior", "IN005", "ancho / 550", ancho / 550, PRECIOS.zocaloInferior);
    subtotalFabricacion += agregarItem(items, "Fabricación", "Hoja lateral sin tubo", "IN006", "alto × 2 / 550", (alto * 2) / 550, PRECIOS.hojaLateralSinTubo);
    subtotalFabricacion += agregarItem(items, "Fabricación", "Enganche interno sin tubo", "IN007", "alto × 2 / 550", (alto * 2) / 550, PRECIOS.engancheInterno);
    subtotalFabricacion += agregarItem(items, "Fabricación", "Enganche externo sin tubo", "IN008", "alto × 2 / 550", (alto * 2) / 550, PRECIOS.engancheExterno);
    subtotalFabricacion += agregarItem(items, "Fabricación", "Guía superior", "IN012", "ancho / 550", ancho / 550, PRECIOS.guiaSuperior);
    subtotalFabricacion += agregarItem(items, "Fabricación", "Contra vidrio horizontal", "IN017", "ancho × 2 / 550", (ancho * 2) / 550, PRECIOS.contraVidrioHorizontal);
    subtotalFabricacion += agregarItem(items, "Fabricación", "Contra vidrio vertical", "IN018", "alto × 8 / 550", (alto * 8) / 550, PRECIOS.contraVidrioVertical);
    subtotalFabricacion += agregarItem(items, "Fabricación", "Hoja lateral con tubo", "IN079", "alto × 2 / 550", (alto * 2) / 550, PRECIOS.hojaLateralConTubo);
    subtotalFabricacion += agregarItem(items, "Fabricación", "Complemento", "IN037", "alto / 550", alto / 550, PRECIOS.complemento);
    subtotalFabricacion += agregarItem(items, "Fabricación", "Cerradura con ganchito", "FRA6115", "1 unidad", 1, PRECIOS.cerradura);
    subtotalFabricacion += agregarItem(items, "Fabricación", "Dreno", "NYL452", "4 unidades", 4, PRECIOS.dreno);
    subtotalFabricacion += agregarItem(items, "Fabricación", "Deslizante", "NYL454", "16 unidades", 16, PRECIOS.deslizante);
    subtotalFabricacion += agregarItem(items, "Fabricación", "Rueditas puerta", "ROL439", "4 unidades", 4, PRECIOS.rueditas);
    subtotalFabricacion += agregarItem(items, "Fabricación", "Tornillos", undefined, "24 unidades", 24, PRECIOS.tornillo);
    subtotalFabricacion += agregarItem(items, "Fabricación", "Mano de obra fabricación", undefined, "2 unidades", 2, PRECIOS.manoObraFabricacion);
  }

  if (producto === "guia_desplazada_1h") {
    subtotalFabricacion += agregarItem(items, "Fabricación", "Hoja superior e inferior", "IN004", "ancho / 550", ancho / 550, PRECIOS.hojaSuperiorInferior);
    subtotalFabricacion += agregarItem(items, "Fabricación", "Zócalo inferior", "IN005", "ancho / 550", ancho / 550, PRECIOS.zocaloInferior);
    subtotalFabricacion += agregarItem(items, "Fabricación", "Enganche interno sin tubo", "IN007", "alto / 550", alto / 550, PRECIOS.engancheInterno);
    subtotalFabricacion += agregarItem(items, "Fabricación", "Guía superior", "IN012", "ancho × 2 / 550", (ancho * 2) / 550, PRECIOS.guiaSuperior);
    subtotalFabricacion += agregarItem(items, "Fabricación", "Contra vidrio horizontal", "IN017", "ancho × 2 / 550", (ancho * 2) / 550, PRECIOS.contraVidrioHorizontal);
    subtotalFabricacion += agregarItem(items, "Fabricación", "Contra vidrio vertical", "IN018", "alto × 2 / 550", (alto * 2) / 550, PRECIOS.contraVidrioVertical);
    subtotalFabricacion += agregarItem(items, "Fabricación", "Hoja lateral con tubo", "IN079", "alto / 550", alto / 550, PRECIOS.hojaLateralConTubo);
    subtotalFabricacion += agregarItem(items, "Fabricación", "Complemento", "IN037", "alto / 550", alto / 550, PRECIOS.complemento);
    subtotalFabricacion += agregarItem(items, "Fabricación", "Cerradura con ganchito", "FRA6115", "1 unidad", 1, PRECIOS.cerradura);
    subtotalFabricacion += agregarItem(items, "Fabricación", "Deslizante", "NYL454", "4 unidades", 4, PRECIOS.deslizante);
    subtotalFabricacion += agregarItem(items, "Fabricación", "Rueditas puerta", "ROL439", "2 unidades", 2, PRECIOS.rueditas);
    subtotalFabricacion += agregarItem(items, "Fabricación", "Tubo 50 x 50", undefined, "(ancho × 2 + alto × 2) / 550", (ancho * 2 + alto * 2) / 550, PRECIOS.tubo50x50);
    subtotalFabricacion += agregarItem(items, "Fabricación", "Mano de obra fabricación", undefined, "1 unidad", 1, PRECIOS.manoObraFabricacion);
  }

  if (producto === "guia_desplazada_2h") {
    subtotalFabricacion += agregarItem(items, "Fabricación", "Hoja superior e inferior", "IN004", "ancho / 550", ancho / 550, PRECIOS.hojaSuperiorInferior);
    subtotalFabricacion += agregarItem(items, "Fabricación", "Zócalo inferior", "IN005", "ancho / 550", ancho / 550, PRECIOS.zocaloInferior);
    subtotalFabricacion += agregarItem(items, "Fabricación", "Enganche interno sin tubo", "IN007", "alto × 2 / 550", (alto * 2) / 550, PRECIOS.engancheInterno);
    subtotalFabricacion += agregarItem(items, "Fabricación", "Guía superior", "IN012", "ancho × 2 / 550", (ancho * 2) / 550, PRECIOS.guiaSuperior);
    subtotalFabricacion += agregarItem(items, "Fabricación", "Contra vidrio horizontal", "IN017", "ancho × 2 / 550", (ancho * 2) / 550, PRECIOS.contraVidrioHorizontal);
    subtotalFabricacion += agregarItem(items, "Fabricación", "Contra vidrio vertical", "IN018", "alto × 4 / 550", (alto * 4) / 550, PRECIOS.contraVidrioVertical);
    subtotalFabricacion += agregarItem(items, "Fabricación", "Hoja lateral con tubo", "IN079", "alto × 2 / 550", (alto * 2) / 550, PRECIOS.hojaLateralConTubo);
    subtotalFabricacion += agregarItem(items, "Fabricación", "Complemento", "IN037", "alto / 550", alto / 550, PRECIOS.complemento);
    subtotalFabricacion += agregarItem(items, "Fabricación", "Cerradura con ganchito", "FRA6115", "1 unidad", 1, PRECIOS.cerradura);
    subtotalFabricacion += agregarItem(items, "Fabricación", "Deslizante", "NYL454", "8 unidades", 8, PRECIOS.deslizante);
    subtotalFabricacion += agregarItem(items, "Fabricación", "Rueditas puerta", "ROL439", "4 unidades", 4, PRECIOS.rueditas);
    subtotalFabricacion += agregarItem(items, "Fabricación", "Tubo 50 x 50", undefined, "(ancho × 2 + alto × 2) / 550", (ancho * 2 + alto * 2) / 550, PRECIOS.tubo50x50);
    subtotalFabricacion += agregarItem(items, "Fabricación", "Mano de obra fabricación", undefined, "2 unidades", 2, PRECIOS.manoObraFabricacion);
  }

  if (incluirPremarco && (producto === "puerta_2h_incolor" || producto === "puerta_4h_incolor")) {
    subtotalPremarco += agregarItem(items, "Premarco", "Premarco de aluminio", undefined, "(ancho × 2 + alto × 2) / 550", (ancho * 2 + alto * 2) / 550, PRECIOS.premarco);
    subtotalPremarco += agregarItem(items, "Premarco", "Conector", undefined, "2 unidades", 2, PRECIOS.conector);
    subtotalPremarco += agregarItem(items, "Premarco", "Patita chumbador", undefined, producto === "puerta_4h_incolor" ? "16 unidades" : "8 unidades", producto === "puerta_4h_incolor" ? 16 : 8, PRECIOS.patitaChumbador);
    subtotalPremarco += agregarItem(items, "Premarco", "Escuadra", undefined, "2 unidades", 2, PRECIOS.escuadra);
  }

  if (incluirColocacion) {
    const factorVidrio = producto === "puerta_2h_incolor" || producto === "puerta_4h_incolor" ? 0.8 : 1;

    subtotalColocacion += agregarItem(items, "Colocación", "Vidrio incolor 8mm", undefined, producto.includes("puerta") ? "m² × 80%" : "m²", m2 * factorVidrio, PRECIOS.vidrioIncolor8mm);
    subtotalColocacion += agregarItem(items, "Colocación", "Ferretería", undefined, "1 unidad", 1, PRECIOS.ferreteria);
    subtotalColocacion += agregarItem(items, "Colocación", "Silicona", undefined, "m² / 1.6", m2 / 1.6, PRECIOS.silicona);

    if (producto === "puerta_2h_incolor" || producto === "puerta_4h_incolor") {
      subtotalColocacion += agregarItem(items, "Colocación", "Contramarco", undefined, "(ancho + alto + alto) / 550", (ancho + alto + alto) / 550, PRECIOS.contraMarco);
      subtotalColocacion += agregarItem(items, "Colocación", "Penil", undefined, producto === "puerta_4h_incolor" ? "15 unidades" : "10 unidades", producto === "puerta_4h_incolor" ? 15 : 10, PRECIOS.penil);
      subtotalColocacion += agregarItem(items, "Colocación", "Terminación de piso", undefined, "ancho × 2 / 550", (ancho * 2) / 550, PRECIOS.terminacionPiso);
      subtotalColocacion += agregarItem(items, "Colocación", "Mano de obra colocación", undefined, "m²", m2, PRECIOS.manoObraColocacion);
    } else {
      subtotalColocacion += agregarItem(items, "Colocación", "Terminación lateral", undefined, "ancho × 4 / 550", (ancho * 4) / 550, PRECIOS.terminacionPiso);
      subtotalColocacion += agregarItem(items, "Colocación", "Mano de obra colocación", undefined, "m² × 2", m2 * 2, PRECIOS.manoObraColocacion);
    }
  }

  const costoUnitario = subtotalFabricacion + subtotalPremarco + subtotalColocacion + adicionalGs - descuentoGs;
  const margenGs = costoUnitario * (margenPorcentaje / 100);
  const precioVentaUnitario = costoUnitario + margenGs;
  const precioVentaRedondeado = redondear(precioVentaUnitario, redondeo);
  const totalGeneral = precioVentaRedondeado * cantidad;

  return {
    productoNombre: productoData.nombre,
    ancho,
    alto,
    cantidad,
    m2,
    subtotalFabricacion,
    subtotalPremarco,
    subtotalColocacion,
    costoUnitario,
    margenGs,
    precioVentaUnitario,
    precioVentaRedondeado,
    totalGeneral,
    items,
  } satisfies ResultadoCotizacion;
}

export default function PresupuestoAberturasPage() {
  const pdfRef = useRef<HTMLDivElement>(null);
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
  const [mostrarDesglose, setMostrarDesglose] = useState(true);

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
    if (!pdfRef.current) return;

    setCargando(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 300));

      const canvas = await html2canvas(pdfRef.current, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: "#ffffff",
      });

      const imgData = canvas.toDataURL("image/jpeg", 1.0);
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, "JPEG", 0, 0, pdfWidth, pdfHeight);
      pdf.save(`Presupuesto_Aberturas_${cliente.nombre || "Cliente"}.pdf`);

      track("Cotizacion_Aberturas_Generada", {
        producto: resultado.productoNombre,
        total_gs: resultado.totalGeneral,
        m2: resultado.m2,
        cantidad: resultado.cantidad,
      });
    } catch (error: any) {
      console.error("Error al generar PDF:", error);
      alert("Error técnico al generar el PDF: " + error.message);
    }

    setCargando(false);
  };

  const abrirWhatsApp = () => {
    const telefono = cliente.telefono.replace(/\D/g, "");

    const mensaje = encodeURIComponent(
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
        `Para avanzar podemos coordinar medición, seña y fecha de instalación.`
    );

    const url = telefono ? `https://wa.me/${telefono}?text=${mensaje}` : `https://wa.me/?text=${mensaje}`;
    window.open(url, "_blank");
  };

  const itemsPorCategoria = {
    Fabricación: resultado.items.filter((item) => item.categoria === "Fabricación"),
    Premarco: resultado.items.filter((item) => item.categoria === "Premarco"),
    Colocación: resultado.items.filter((item) => item.categoria === "Colocación"),
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-zinc-100 font-sans">
      {/* DOCUMENTO A4 PARA PDF */}
      <div className="absolute left-0 top-0 z-0 flex w-full justify-center pointer-events-none">
        <div
          ref={pdfRef}
          className="relative shrink-0 bg-[#ffffff] text-[#000000]"
          style={{ width: "210mm", minHeight: "297mm", padding: "14mm" }}
        >
          <div className="mb-6 flex items-start justify-between border-b-2 border-[#111827] pb-5">
            <div className="flex items-center gap-4">
              <div className="flex h-20 w-20 items-center justify-center rounded-xl border border-[#d1d5db] bg-[#f9fafb]">
                <span className="text-3xl font-black italic tracking-tighter text-[#111827]">AYC</span>
              </div>
              <div>
                <h1 className="text-3xl font-black tracking-tighter text-[#111827]">AYCweb</h1>
                <p className="text-xs font-bold text-[#374151]">Sistema de Cotización para Aberturas</p>
                <p className="text-[10px] text-[#6b7280]">Asunción, Paraguay · Automatización comercial B2B</p>
              </div>
            </div>

            <div className="text-right">
              <h2 className="text-2xl font-black uppercase tracking-widest text-[#d1d5db]">Presupuesto</h2>
              <p className="mt-1 text-sm font-bold text-[#111827]">Fecha: {cliente.fecha}</p>
              <p className="text-xs text-[#6b7280]">Validez: 7 días</p>
            </div>
          </div>

          <div className="mb-6 rounded-xl border border-[#e5e7eb] bg-[#f9fafb] p-4">
            <h3 className="mb-2 text-xs font-black uppercase text-[#111827]">Preparado para:</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <p>
                <span className="font-bold">Cliente:</span> {cliente.nombre || "___________________"}
              </p>
              <p>
                <span className="font-bold">RUC/CI:</span> {cliente.ruc || "___________________"}
              </p>
              <p>
                <span className="font-bold">Contacto:</span> {cliente.contacto || "___________________"}
              </p>
              <p>
                <span className="font-bold">Teléfono:</span> {cliente.telefono || "___________________"}
              </p>
              <p className="col-span-2">
                <span className="font-bold">Ubicación/obra:</span> {cliente.ubicacion || "___________________"}
              </p>
            </div>
          </div>

          <div className="mb-6 rounded-xl border border-[#e5e7eb] p-4">
            <h3 className="mb-2 text-xs font-black uppercase text-[#111827]">Detalle del trabajo:</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <p>
                <span className="font-bold">Producto:</span> {resultado.productoNombre}
              </p>
              <p>
                <span className="font-bold">Cantidad:</span> {resultado.cantidad}
              </p>
              <p>
                <span className="font-bold">Medidas:</span> {resultado.ancho} x {resultado.alto} cm
              </p>
              <p>
                <span className="font-bold">Superficie:</span> {resultado.m2.toFixed(2)} m²
              </p>
              <p>
                <span className="font-bold">Premarco:</span> {incluirPremarco ? "Incluido" : "No incluido"}
              </p>
              <p>
                <span className="font-bold">Colocación:</span> {incluirColocacion ? "Incluida" : "No incluida"}
              </p>
            </div>
          </div>

          <table className="mb-6 w-full text-sm">
            <thead>
              <tr className="bg-[#111827] text-left text-[#ffffff]">
                <th className="rounded-tl-lg p-3">Concepto</th>
                <th className="p-3 text-right">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#e5e7eb]">
                <td className="p-3 font-medium">Fabricación de abertura</td>
                <td className="p-3 text-right font-bold">{moneda(resultado.subtotalFabricacion)}</td>
              </tr>
              <tr className="border-b border-[#e5e7eb]">
                <td className="p-3 font-medium">Premarco</td>
                <td className="p-3 text-right font-bold">{moneda(resultado.subtotalPremarco)}</td>
              </tr>
              <tr className="border-b border-[#e5e7eb]">
                <td className="p-3 font-medium">Vidrio, terminaciones y colocación</td>
                <td className="p-3 text-right font-bold">{moneda(resultado.subtotalColocacion)}</td>
              </tr>
            </tbody>
          </table>

          <div className="mb-8 flex justify-end">
            <div className="w-1/2 rounded-xl border border-[#e5e7eb] bg-[#f9fafb] p-4 text-right">
              <p className="mb-1 text-sm text-[#6b7280]">Precio unitario</p>
              <p className="text-xl font-black text-[#111827]">{moneda(resultado.precioVentaRedondeado)}</p>
              <p className="mt-3 text-sm text-[#6b7280]">Total general</p>
              <p className="text-3xl font-black text-[#111827]">{moneda(resultado.totalGeneral)}</p>
            </div>
          </div>

          {mostrarDesglose && (
            <div className="mb-8">
              <h3 className="mb-3 text-sm font-black uppercase tracking-widest text-[#111827]">Desglose técnico interno</h3>
              <table className="w-full text-[10px]">
                <thead>
                  <tr className="bg-[#e5e7eb] text-left">
                    <th className="p-2">Cat.</th>
                    <th className="p-2">Item</th>
                    <th className="p-2">Fórmula</th>
                    <th className="p-2 text-right">Cant.</th>
                    <th className="p-2 text-right">Unit.</th>
                    <th className="p-2 text-right">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {resultado.items.map((item, index) => (
                    <tr key={index} className="border-b border-[#f3f4f6]">
                      <td className="p-2">{item.categoria}</td>
                      <td className="p-2 font-medium">{item.nombre}</td>
                      <td className="p-2 text-[#6b7280]">{item.formula}</td>
                      <td className="p-2 text-right">{item.cantidad.toFixed(2)}</td>
                      <td className="p-2 text-right">{gs(item.precioUnitario)}</td>
                      <td className="p-2 text-right font-bold">{gs(item.total)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          <div className="mt-auto border-t border-[#e5e7eb] pt-6">
            <h3 className="mb-3 text-sm font-black uppercase tracking-widest text-[#111827]">
              Condiciones comerciales
            </h3>
            <div className="grid grid-cols-2 gap-6 text-[11px] leading-relaxed text-[#4b5563]">
              <div>
                <p className="mb-1 font-bold text-[#111827]">Forma de pago:</p>
                <p>50% de anticipo para confirmación de orden. Saldo contra entrega o instalación.</p>
              </div>
              <div>
                <p className="mb-1 font-bold text-[#111827]">Observaciones:</p>
                <p>Precio sujeto a verificación final de medidas en obra, disponibilidad de materiales y condiciones de instalación.</p>
              </div>
            </div>
          </div>

          <div className="mt-14 flex justify-center">
            <div className="w-64 border-t border-[#9ca3af] pt-2 text-center">
              <p className="text-sm font-bold text-[#111827]">Dpto. Comercial</p>
              <p className="text-xs text-[#6b7280]">Sistema generado por AYCweb</p>
            </div>
          </div>
        </div>
      </div>

      {/* PANEL DE CONTROL */}
      <div className="relative z-10 flex min-h-screen w-full justify-center bg-zinc-100 p-4 pb-32 md:p-8">
        <div className="flex h-fit w-full max-w-xl flex-col gap-6 rounded-3xl border border-zinc-200 bg-white p-6 shadow-xl">
          <div className="text-center">
            <h2 className="text-2xl font-black text-zinc-950">Cotizador de Aberturas</h2>
            <p className="text-sm text-zinc-500">Motor interno AYCweb · Puertas corredizas y guía desplazada</p>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
            <h3 className="mb-3 border-b pb-2 font-bold text-zinc-800">1. Datos del cliente</h3>

            <div className="space-y-3">
              <input
                type="text"
                placeholder="Cliente / Empresa"
                className="w-full rounded-lg border bg-white p-2 text-sm"
                value={cliente.nombre}
                onChange={(e) => setCliente({ ...cliente, nombre: e.target.value })}
              />

              <input
                type="text"
                placeholder="Nombre del contacto"
                className="w-full rounded-lg border bg-white p-2 text-sm"
                value={cliente.contacto}
                onChange={(e) => setCliente({ ...cliente, contacto: e.target.value })}
              />

              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="RUC / CI"
                  className="w-1/2 rounded-lg border bg-white p-2 text-sm"
                  value={cliente.ruc}
                  onChange={(e) => setCliente({ ...cliente, ruc: e.target.value })}
                />

                <input
                  type="text"
                  placeholder="WhatsApp"
                  className="w-1/2 rounded-lg border bg-white p-2 text-sm"
                  value={cliente.telefono}
                  onChange={(e) => setCliente({ ...cliente, telefono: e.target.value })}
                />
              </div>

              <input
                type="text"
                placeholder="Ubicación / obra"
                className="w-full rounded-lg border bg-white p-2 text-sm"
                value={cliente.ubicacion}
                onChange={(e) => setCliente({ ...cliente, ubicacion: e.target.value })}
              />
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
            <h3 className="mb-3 border-b pb-2 font-bold text-zinc-800">2. Producto y medidas</h3>

            <div className="space-y-3">
              <select
                value={producto}
                onChange={(e) => cambiarProducto(e.target.value as ProductoKey)}
                className="w-full rounded-lg border bg-white p-2 text-sm font-semibold"
              >
                {Object.entries(PRODUCTOS).map(([key, item]) => (
                  <option key={key} value={key}>
                    {item.nombre}
                  </option>
                ))}
              </select>

              <div className="grid grid-cols-3 gap-2">
                <div>
                  <label className="mb-1 block text-xs font-bold text-zinc-500">Ancho cm</label>
                  <input
                    type="number"
                    className="w-full rounded-lg border bg-white p-2 text-sm"
                    value={ancho}
                    onChange={(e) => setAncho(Number(e.target.value))}
                  />
                </div>

                <div>
                  <label className="mb-1 block text-xs font-bold text-zinc-500">Alto cm</label>
                  <input
                    type="number"
                    className="w-full rounded-lg border bg-white p-2 text-sm"
                    value={alto}
                    onChange={(e) => setAlto(Number(e.target.value))}
                  />
                </div>

                <div>
                  <label className="mb-1 block text-xs font-bold text-zinc-500">Cant.</label>
                  <input
                    type="number"
                    min={1}
                    className="w-full rounded-lg border bg-white p-2 text-sm"
                    value={cantidad}
                    onChange={(e) => setCantidad(Number(e.target.value))}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
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
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
            <h3 className="mb-3 border-b pb-2 font-bold text-zinc-800">3. Margen y ajustes</h3>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="mb-1 block text-xs font-bold text-zinc-500">Margen %</label>
                <input
                  type="number"
                  className="w-full rounded-lg border bg-white p-2 text-sm"
                  value={margenPorcentaje}
                  onChange={(e) => setMargenPorcentaje(Number(e.target.value))}
                />
              </div>

              <div>
                <label className="mb-1 block text-xs font-bold text-zinc-500">Redondeo Gs.</label>
                <input
                  type="number"
                  className="w-full rounded-lg border bg-white p-2 text-sm"
                  value={redondeo}
                  onChange={(e) => setRedondeo(Number(e.target.value))}
                />
              </div>

              <div>
                <label className="mb-1 block text-xs font-bold text-zinc-500">Adicional Gs.</label>
                <input
                  type="number"
                  className="w-full rounded-lg border bg-white p-2 text-sm"
                  value={adicionalGs}
                  onChange={(e) => setAdicionalGs(Number(e.target.value))}
                />
              </div>

              <div>
                <label className="mb-1 block text-xs font-bold text-zinc-500">Descuento Gs.</label>
                <input
                  type="number"
                  className="w-full rounded-lg border bg-white p-2 text-sm"
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
              onClick={abrirWhatsApp}
              className="w-1/2 rounded-xl bg-emerald-600 py-4 font-black text-white shadow-lg transition hover:bg-emerald-700 active:scale-95"
            >
              WhatsApp
            </button>

            <button
              onClick={generarPDF}
              disabled={cargando}
              className="w-1/2 rounded-xl bg-red-600 py-4 font-black text-white shadow-lg transition hover:bg-red-700 disabled:bg-zinc-400 active:scale-95"
            >
              {cargando ? "Generando..." : "Descargar PDF"}
            </button>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-white p-4">
            <h3 className="mb-3 font-bold text-zinc-800">Resumen técnico rápido</h3>

            {(["Fabricación", "Premarco", "Colocación"] as const).map((categoria) => {
              const items = itemsPorCategoria[categoria];

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
    </div>
  );
}
