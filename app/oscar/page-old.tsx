"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "../../context/LanguageContext";

type AccentColor = "emerald" | "blue" | "violet";

// --- CONFIGURACIÓN DE PLANES ---
const PLANES = [
  {
    id: "mvp-starter",
    badge: "Ideal para empezar",
    nombre: "MVP Starter",
    emoji: "🚀",
    precioUSD: "USD $75",
    precioGs: "Gs. 580.000",
    descripcion:
      "El sistema mínimo que ya vende. Presencia real, botones de WhatsApp estratégicos y copy B2B. Listo en 48hs.",
    features: [
      "Landing page profesional (1 página)",
      "Copywriting orientado a conversión",
      "Botones y mensajes preconfigurados a WhatsApp",
      "Integración de pasarela de pago (QR)",
      "Optimizado para celulares y desktop",
    ],
    accent: "emerald" as AccentColor,
    featured: false,
    ctaText: "Consultar por MVP Starter",
    msgValue: "Hola Oscar, me interesa el plan MVP Starter de USD $75. ¿Podemos hablar?"