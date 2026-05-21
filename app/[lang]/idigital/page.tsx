"use client";

import React, { useMemo, useState } from "react";

type BenchmarkKey =
  | "worldBusiness"
  | "worldResidential"
  | "southAmericaBusiness"
  | "europeBusiness"
  | "usaBusiness"
  | "germanyBusiness"
  | "brazilBusiness"
  | "uruguayBusiness";

type Benchmark = {
  key: BenchmarkKey;
  label: string;
  tariff: number;
  description: string;
};

type ThesisScenario = {
  label: string;
  value: string;
  tone: "weak" | "neutral" | "strong";
  description: string;
};

const PARAGUAY_BUSINESS_TARIFF = 0.045;
const PARAGUAY_RESIDENTIAL_TARIFF = 0.054;
const PPA_REFERENCE_USD_PER_MWH = 44;

const benchmarks: Benchmark[] = [
  {
    key: "worldBusiness",
    label: "Promedio mundial empresarial",
    tariff: 0.164,
    description: "Referencia global para operaciones comerciales e industriales.",
  },
  {
    key: "worldResidential",
    label: "Promedio mundial residencial",
    tariff: 0.174,
    description: "Referencia global para consumo residencial.",
  },
  {
    key: "southAmericaBusiness",
    label: "Promedio Sudamérica empresarial",
    tariff: 0.199,
    description: "Comparación regional para empresas en Sudamérica.",
  },
  {
    key: "europeBusiness",
    label: "Promedio Europa empresarial",
    tariff: 0.217,
    description: "Mercado de alto costo eléctrico y alta presión operativa.",
  },
  {
    key: "usaBusiness",
    label: "Estados Unidos empresarial",
    tariff: 0.148,
    description: "Referencia para negocios digitales y operaciones tecnológicas.",
  },
  {
    key: "germanyBusiness",
    label: "Alemania empresarial",
    tariff: 0.285,
    description: "Mercado industrial avanzado con energía significativamente cara.",
  },
  {
    key: "brazilBusiness",
    label: "Brasil empresarial",
    tariff: 0.132,
    description: "Comparación cercana para operaciones regionales.",
  },
  {
    key: "uruguayBusiness",
    label: "Uruguay empresarial",
    tariff: 0.125,
    description: "Comparación regional cercana a Paraguay.",
  },
];

const strategicSignals = [
  {
    title: "Yguazú Digital",
    metric: "10 → 100 → 1.000 MW",
    text: "Paraguay y Taiwán plantean un centro soberano de IA con modelo binacional y expansión por fases.",
  },
  {
    title: "X8 Cloud",
    metric: "6 MW → 250 MW",
    text: "La tesis de data centers en Paraguay ya no es solo gobierno: aparecen jugadores privados con GPU infrastructure.",
  },
  {
    title: "Producto real",
    metric: "Cómputo IA",
    text: "La energía deja de venderse solo como commodity cuando se transforma en capacidad de procesamiento.",
  },
];

const useCases = [
  {
    title: "Proveedores industriales",
    text: "Metalúrgicas, plásticos, cableado, climatización, racks, ductos, estructuras y servicios técnicos.",
  },
  {
    title: "Portales técnicos B2B",
    text: "Catálogos, fichas descargables, RFQ, cotizadores, supplier decks y presencia bilingüe.",
  },
  {
    title: "Integración PyME + IA",
    text: "Asistentes comerciales, legales, médicos, agro y logísticos corriendo sobre infraestructura local o regional.",
  },
  {
    title: "Control operativo",
    text: "Dashboards que miden energía, margen, costo, productividad, inventario, ventas y oportunidad.",
  },
];

const thesisScenarios: ThesisScenario[] = [
  {
    label: "BTC mining con halvings",
    value: "VPN USD 1.570M",
    tone: "weak",
    description:
      "La producción protocolar cae por halvings. Extrapolar hashprice actual sin curva declinante sobrestima el flujo.",
  },
  {
    label: "Venta de energía fija",
    value: "VPN USD 4.178M",
    tone: "neutral",
    description:
      "Un PPA estable a largo plazo puede superar al flujo minero si el modelo BTC no compensa halvings, dificultad y capex.",
  },
  {
    label: "Modelo Yguazú / cómputo IA",
    value: "VPN USD 8.463M",
    tone: "strong",
    description:
      "La tesis superior no es vender kWh: es convertir energía en capacidad de cómputo vendible a largo plazo.",
  },
];

const faqs = [
  {
    q: "¿KWH Index es una inversión financiera?",
    a: "No. Es una herramienta educativa y comercial de AYCweb para visualizar arbitraje energético, infraestructura digital y oportunidades B2B. No es token, security, promesa de rentabilidad ni asesoría financiera.",
  },
  {
    q: "¿Por qué ya no conviene mirar solo minería Bitcoin?",
    a: "Porque el flujo de BTC producido cae por halvings. Si el modelo toma el hashprice actual y lo extiende durante décadas, ignora una caída programada de emisión cada cuatro años.",
  },
  {
    q: "¿Cuál es la oportunidad superior para Paraguay?",
    a: "Transformar energía hidroeléctrica competitiva en servicios de cómputo, infraestructura crítica, proveedores industriales, automatización e inteligencia aplicada a empresas.",
  },
  {
    q: "¿Dónde entra AYCweb?",
    a: "AYCweb no construye data centers. Prepara a empresas paraguayas para vender, cotizar, documentar y operar dentro de esta nueva cadena de valor.",
  },
  {
    q: "¿Qué necesita una empresa local para capturar esta oportunidad?",
    a: "Claridad técnica, catálogo profesional, fichas, documentación, portal bilingüe, cotizador, trazabilidad, métricas y una propuesta apta para compradores corporativos.",
  },
];

const sourceLinks = [
  {
    label: "ABC Color — Yguazú Digital",
    href: "https://www.abc.com.py/economia/2026/05/11/paraguay-y-taiwan-crearan-yguazu-digital-un-gigante-de-ia-que-consumira-una-turbina-y-media-de-itaipu/",
  },
  {
    label: "DPL News — X8 Cloud Paraguay",
    href: "https://dplnews.com/x8-cloud-construiria-data-center-para-inteligencia-artificial-en-paraguay/",
  },
  {
    label: "GlobalPetrolPrices — Electricity Prices Q1 2026",
    href: "https://www.globalpetrolprices.com/electricity_prices/",
  },
];

function formatUSD(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

function formatKwh(value: number) {
  return new Intl.NumberFormat("es-PY", {
    maximumFractionDigits: 0,
  }).format(value);
}

function formatTariff(value: number) {
  return `$${value.toFixed(3)} / kWh`;
}

export default function IdigitalPageClient() {
  return <div />;
}
