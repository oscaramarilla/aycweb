"use client";

import { useMemo, useState } from "react";
import jsPDF from "jspdf";

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
    nombreCorto: string;
    anchoDefault: number;
    altoDefault: number;
    descripcion: string;
  }
> = {
  puerta_2h_incolor: {
    nombre: "Puerta corrediza 2 hojas incolor",
    nombreCorto: "Puerta 2 hojas",
    anchoDefault: 170,
    altoDefault: 210,
    descripcion: "Sistema corredizo de aluminio con vidrio incolor.",
  },
  puerta_4h_incolor: {
    nombre: "Puerta corrediza 4 hojas incolor",
    nombreCorto: "Puerta 4 hojas",
    anchoDefault: 400,
    altoDefault: 210,
    descripcion: "Sistema corredizo de mayor apertura con vidrio incolor.",
  },
  guia_desplazada_1h: {
    nombre: "Puerta guía desplazada 1 hoja",
    nombreCorto: "Guía 1 hoja",
    anchoDefault: 100,
    altoDefault: 210,
    descripcion: "Sistema de puerta con guía desplazada de una hoja.",
  },
  guia_desplazada_2h: {
    nombre: "Puerta guía desplazada 2 hojas",
    nombreCorto: "Guía 2 hojas",
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
    subtotalPremarco += agregarItem(
      items,
      "Premarco",
      "Patita chumbador",
      undefined,
      producto === "puerta_4h_incolor" ? "16 unidades" : "8 unidades",
      producto === "puerta_4h_incolor" ? 16 : 8,
      PRECIOS.patitaChumbador
    );
    subtotalPremarco += agregarItem(items, "Premarco", "Escuadra", undefined, "2 unidades", 2, PRECIOS.escuadra);
  }

  if (incluirColocacion) {
    const factorVidrio = producto === "puerta_2h_incolor" || producto === "puerta_4h_incolor" ? 0.8 : 1;

    subtotalColocacion += agregarItem(
      items,
      "Colocación",
      "Vidrio incolor 8mm",
      undefined,
      factorVidrio === 0.8 ? "m² × 80%" : "m²",
      m2 * factorVidrio,
      PRECIOS.vidrioIncolor8mm
    );
    subtotalColocacion += agregarItem(items, "Colocación", "Ferretería", undefined, "1 unidad", 1, PRECIOS.ferreteria);
    subtotalColocacion += agregarItem(items, "Colocación", "Silicona", undefined, "m² / 1.6", m2 / 1.6, PRECIOS.silicona);

    if (producto === "puerta_2h_incolor" || producto === "puerta_4h_incolor") {
      subtotalColocacion += agregarItem(items, "Colocación", "Contramarco", undefined, "(ancho + alto + alto) / 550", (ancho + alto + alto) / 550, PRECIOS.contraMarco);
      subtotalColocacion += agregarItem(
        items,
        "Colocación",
        "Penil",
        undefined,
        producto === "puerta_4h_incolor" ? "15 unidades" : "10 unidades",
        producto === "puerta_4h_incolor" ? 15 : 10,
        PRECIOS.penil
      );
      subtotalColocacion += agregarItem(items, "Colocación", "Terminación de piso", undefined, "ancho × 2 / 550", (ancho * 2) / 550, PRECIOS.terminacionPiso);
      subtotalColocacion += agregarItem(items, "Colocación", "Mano de obra colocación", undefined, "m²", m2, PRECIOS.manoObraColocacion);
    } else {
      subtotalColocacion += agregarItem(items, "Colocación", "Terminación lateral", undefined, "ancho × 4 / 550", (ancho * 4) / 550, PRECIOS.terminacionPiso);
      subtotalColocacion += agregarItem(items, "Colocación", "Mano de obra colocación", undefined, "m² × 2", m2 * 2, PRECIOS.manoObraColocacion);
    }
  }

  const costoUnitario = Math.max(0, subtotalFabricacion + subtotalPremarco + subtotalColocacion + adicionalGs - descuentoGs);
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
      const pdf = new jsPDF("p", "mm", "a4");

      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const margin = 14;
      const contentWidth = pageWidth - margin * 2;

      let y = 16;

      const addPageIfNeeded = (neededSpace = 20) => {
        if (y + neededSpace > pageHeight - 18) {
          pdf.addPage();
          y = 16;
        }
      };

      const money = (value: number) => `Gs. ${gs(value)}`;

      pdf.setFillColor(17, 24, 39);
      pdf.roundedRect(margin, y, contentWidth, 28, 3, 3, "F");

      pdf.setTextColor(255, 255, 255);
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(20);
      pdf.text("AYCweb", margin + 6, y + 11);

      pdf.setFontSize(9);
      pdf.setFont("helvetica", "normal");
      pdf.text("Sistema de Cotización para Aberturas", margin + 6, y + 18);
      pdf.text("Asunción, Paraguay - Automatización comercial B2B", margin + 6, y + 23);

      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(16);
      pdf.text("PRESUPUESTO", pageWidth - margin - 6, y + 12, { align: "right" });

      pdf.setFontSize(9);
      pdf.setFont("helvetica", "normal");
      pdf.text(`Fecha: ${cliente.fecha}`, pageWidth - margin - 6, y + 20, { align: "right" });

      y += 38;

      pdf.setTextColor(17, 24, 39);
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(11);
      pdf.text("Preparado para:", margin, y);

      y += 6;

      pdf.setDrawColor(229, 231, 235);
      pdf.setFillColor(249, 250, 251);
      pdf.roundedRect(margin, y, contentWidth, 30, 3, 3, "FD");

      pdf.setFontSize(9);
      pdf.setFont("helvetica", "normal");
      pdf.text(`Cliente: ${cliente.nombre || "___________________"}`, margin + 5, y + 8);
      pdf.text(`RUC/CI: ${cliente.ruc || "___________________"}`, margin + 105, y + 8);
      pdf.text(`Contacto: ${cliente.contacto || "___________________"}`, margin + 5, y + 17);
      pdf.text(`Telefono: ${cliente.telefono || "___________________"}`, margin + 105, y + 17);
      pdf.text(`Ubicacion/obra: ${cliente.ubicacion || "___________________"}`, margin + 5, y + 26);

      y += 42;

      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(11);
      pdf.text("Detalle del trabajo:", margin, y);

      y += 6;

      pdf.setFillColor(255, 255, 255);
      pdf.roundedRect(margin, y, contentWidth, 34, 3, 3, "D");

      pdf.setFontSize(9);
      pdf.setFont("helvetica", "normal");
      pdf.text(`Producto: ${resultado.productoNombre}`, margin + 5, y + 8);
      pdf.text(`Cantidad: ${resultado.cantidad}`, margin + 105, y + 8);
      pdf.text(`Medidas: ${resultado.ancho} x ${resultado.alto} cm`, margin + 5, y + 17);
      pdf.text(`Superficie: ${resultado.m2.toFixed(2)} m2`, margin + 105, y + 17);
      pdf.text(`Premarco: ${incluirPremarco ? "Incluido" : "No incluido"}`, margin + 5, y + 26);
      pdf.text(`Colocacion: ${incluirColocacion ? "Incluida" : "No incluida"}`, margin + 105, y + 26);

      y += 46;

      pdf.setFillColor(17, 24, 39);
      pdf.rect(margin, y, contentWidth, 9, "F");

      pdf.setTextColor(255, 255, 255);
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(9);
      pdf.text("Concepto", margin + 4, y + 6);
      pdf.text("Subtotal", pageWidth - margin - 4, y + 6, { align: "right" });

      y += 9;

      const filas: [string, number][] = [
        ["Fabricacion de abertura", resultado.subtotalFabricacion],
        ["Premarco", resultado.subtotalPremarco],
        ["Vidrio, terminaciones y colocacion", resultado.subtotalColocacion],
      ];

      pdf.setTextColor(17, 24, 39);
      pdf.setFont("helvetica", "normal");

      filas.forEach(([label, value]) => {
        pdf.setDrawColor(229, 231, 235);
        pdf.line(margin, y + 8, pageWidth - margin, y + 8);

        pdf.text(label, margin + 4, y + 6);
        pdf.setFont("helvetica", "bold");
        pdf.text(money(value), pageWidth - margin - 4, y + 6, { align: "right" });
        pdf.setFont("helvetica", "normal");

        y += 9;
      });

      y += 8;

      pdf.setFillColor(249, 250, 251);
      pdf.roundedRect(pageWidth - margin - 80, y, 80, 34, 3, 3, "FD");

      pdf.setTextColor(107, 114, 128);
      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(9);
      pdf.text("Precio unitario", pageWidth - margin - 5, y + 8, { align: "right" });

      pdf.setTextColor(17, 24, 39);
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(14);
      pdf.text(money(resultado.precioVentaRedondeado), pageWidth - margin - 5, y + 16, {
        align: "right",
      });

      pdf.setTextColor(107, 114, 128);
      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(9);
      pdf.text("Total general", pageWidth - margin - 5, y + 25, { align: "right" });

      pdf.setTextColor(17, 24, 39);
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(18);
      pdf.text(money(resultado.totalGeneral), pageWidth - margin - 5, y + 32, {
        align: "right",
      });

      y += 46;

      if (mostrarDesglose) {
        addPageIfNeeded(40);

        pdf.setTextColor(17, 24, 39);
        pdf.setFont("helvetica", "bold");
        pdf.setFontSize(11);
        pdf.text("Desglose tecnico interno", margin, y);

        y += 8;

        pdf.setFillColor(229, 231, 235);
        pdf.rect(margin, y, contentWidth, 8, "F");

        pdf.setFontSize(7);
        pdf.text("Cat.", margin + 2, y + 5);
        pdf.text("Item", margin + 22, y + 5);
        pdf.text("Cant.", margin + 115, y + 5, { align: "right" });
        pdf.text("Unit.", margin + 145, y + 5, { align: "right" });
        pdf.text("Total", pageWidth - margin - 2, y + 5, { align: "right" });

        y += 8;

        resultado.items.forEach((item) => {
          addPageIfNeeded(8);

          pdf.setFont("helvetica", "normal");
          pdf.setFontSize(7);
          pdf.setTextColor(17, 24, 39);

          const itemName = item.nombre.length > 40 ? item.nombre.slice(0, 40) + "..." : item.nombre;

          pdf.text(item.categoria, margin + 2, y + 5);
          pdf.text(itemName, margin + 22, y + 5);
          pdf.text(item.cantidad.toFixed(2), margin + 115, y + 5, { align: "right" });
          pdf.text(gs(item.precioUnitario), margin + 145, y + 5, { align: "right" });

          pdf.setFont("helvetica", "bold");
          pdf.text(gs(item.total), pageWidth - margin - 2, y + 5, { align: "right" });

          pdf.setDrawColor(243, 244, 246);
          pdf.line(margin, y + 7, pageWidth - margin, y + 7);

          y += 8;
        });

        y += 6;
      }

      addPageIfNeeded(42);

      pdf.setTextColor(17, 24, 39);
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(11);
      pdf.text("Condiciones comerciales", margin, y);

      y += 8;

      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(8);
      pdf.setTextColor(75, 85, 99);

      const condiciones =
        "Forma de pago: 50% de anticipo para confirmacion de orden. Saldo contra entrega o instalacion. " +
        "Precio sujeto a verificacion final de medidas en obra, disponibilidad de materiales y condiciones de instalacion. " +
        "Validez del presupuesto: 7 dias.";

      const condicionesLines = pdf.splitTextToSize(condiciones, contentWidth);
      pdf.text(condicionesLines, margin, y);

      y += condicionesLines.length * 4 + 18;

      addPageIfNeeded(25);

      pdf.setDrawColor(156, 163, 175);
      pdf.line(pageWidth / 2 - 35, y, pageWidth / 2 + 35, y);

      y += 5;

      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(9);
      pdf.setTextColor(17, 24, 39);
      pdf.text("Dpto. Comercial", pageWidth / 2, y, { align: "center" });

      y += 5;

      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(8);
      pdf.setTextColor(107, 114, 128);
      pdf.text("Sistema generado por AYCweb", pageWidth / 2, y, { align: "center" });

      const nombreArchivo = `Presupuesto_Aberturas_${cliente.nombre || "Cliente"}.pdf`
        .replace(/\s+/g, "_")
        .replace(/[^\w.-]/g, "");

      pdf.save(nombreArchivo);

      console.log("Cotizacion_Aberturas_Generada", {
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
    if (!formularioValido) return;

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
