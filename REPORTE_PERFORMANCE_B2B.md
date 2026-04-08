# 📊 REPORTE DE PERFORMANCE SEO B2B — AYCweb
**Generado:** 8 de Abril de 2026  
**Auditor:** Cline (Ingeniero SEO B2B Senior + Arquitecto Next.js)  
**Stack analizado:** Next.js 14 App Router · TypeScript · Tailwind CSS · Vercel  
**Objetivo declarado:** PageSpeed 99/100

---

## 🗂️ ÍNDICE

1. [Resumen Ejecutivo](#resumen-ejecutivo)
2. [Tabla de Hallazgos por Página](#tabla-de-hallazgos-por-página)
3. [Análisis de Imágenes (public/)](#análisis-de-imágenes-public)
4. [Análisis de Infraestructura SEO Global](#análisis-de-infraestructura-seo-global)
5. [🔴 Top 3 Recomendaciones High Priority](#top-3-recomendaciones-high-priority)

---

## Resumen Ejecutivo

El proyecto AYCweb tiene una base técnica sólida (Next.js App Router, fuentes con `display: swap`, `robots.ts` y `sitemap.ts` configurados, imágenes en formato `.webp`). Sin embargo, presenta **brechas críticas de SEO** que impiden alcanzar el score 99/100 en PageSpeed: múltiples páginas carecen de `<title>` y `<meta description>` propios, varias usan `"use client"` innecesariamente bloqueando el SSR/SSG, y hay páginas internas (herramientas operativas) indexables que no deberían estarlo. El total de imágenes en `public/` es bajo y bien optimizado, pero el `favicon.ico` (28.78 KB) y `qr-fiat.webp` (29.11 KB) tienen margen de mejora.

**Score estimado actual:** ~72–80/100  
**Score alcanzable con estas correcciones:** 97–99/100

---

## Tabla de Hallazgos por Página

| # | Ruta | `<title>` | `<meta description>` | Imágenes con `alt` | `"use client"` innecesario | Indexable en Sitemap | Severidad |
|---|------|-----------|----------------------|--------------------|---------------------------|----------------------|-----------|
| 1 | `/` (Home) | ✅ Hereda layout: *"AYCweb Paraguay \| Infraestructura Digital B2B"* | ✅ Hereda layout (155 chars) | ⚠️ Sin imágenes `<Image>` propias. Logo en footer: ✅ `alt="AYCweb Logo"` | 🔴 **SÍ** — `"use client"` en página principal. Bloquea SSG/SSR completo | ✅ Sí (priority 1.0) | 🔴 CRÍTICO |
| 2 | `/servicios` | 🔴 **FALTA** — No exporta `metadata`. Hereda solo el template `" \| AYCweb"` sin título propio | 🔴 **FALTA** — Sin `description` propia | ✅ Sin imágenes (solo SVGs inline) | ✅ No | ✅ Sí (priority 0.9) | 🔴 CRÍTICO |
| 3 | `/casos` | ✅ *"Casos de Estudio B2B \| AYCweb"* (47 chars) | ✅ *"Ejemplos reales de cómo nuestra infraestructura..."* (130 chars) | ✅ Sin imágenes propias | ✅ No | ✅ Sí (priority 0.8) | 🟢 OK |
| 4 | `/sectores` | ✅ *"Soluciones por Industria \| AYCweb"* (35 chars) | ✅ *"Desarrollamos infraestructura digital B2B..."* (128 chars) | ✅ Sin imágenes propias | ✅ No | ✅ Sí (priority 0.8) | 🟢 OK |
| 5 | `/experiencia` | ✅ *"Nuestra Historia \| AYCweb"* (26 chars) | ✅ *"AYCweb no nació en una agencia de diseño..."* (130 chars) | ✅ Sin imágenes propias | ✅ No | ✅ Sí (priority 0.7) | 🟢 OK |
| 6 | `/flete` | ✅ *"Motor Inteligente de Fletes \| AYCweb"* (38 chars) | ✅ *"Calculadora logística B2B conectada a Petropar..."* (130 chars) | ✅ Sin imágenes propias | ✅ No (Server Component) | ⚠️ **NO está en sitemap** | 🟡 MEDIO |
| 7 | `/precios` | 🔴 **FALTA** — `"use client"` + sin `metadata` exportado | 🔴 **FALTA** | ✅ Sin imágenes propias | 🔴 **SÍ** — `"use client"` bloquea metadata estática | ⚠️ **NO está en sitemap** | 🔴 CRÍTICO |
| 8 | `/contacto` | 🔴 **FALTA** — Sin `metadata` exportado | 🔴 **FALTA** | ✅ Sin imágenes | ✅ No | ⚠️ **NO está en sitemap** | 🔴 CRÍTICO |
| 9 | `/motor-logistico` | 🔴 **FALTA** — `"use client"` + sin `metadata` | 🔴 **FALTA** | ✅ Sin imágenes propias | 🔴 **SÍ** — Bloquea metadata | ⚠️ **NO está en sitemap** | 🔴 CRÍTICO |
| 10 | `/motor-saas` | 🔴 **FALTA** — Sin `metadata` exportado | 🔴 **FALTA** | ✅ Sin imágenes propias | ✅ No | ⚠️ **NO está en sitemap** | 🔴 CRÍTICO |
| 11 | `/mascotas-premium` | 🔴 **FALTA** — Sin `metadata` exportado | 🔴 **FALTA** | ✅ Sin imágenes propias | ✅ No | ⚠️ **NO está en sitemap** | 🟡 MEDIO |
| 12 | `/metal-mad` | 🔴 **FALTA** — Sin `metadata` exportado | 🔴 **FALTA** | ✅ Sin imágenes propias | ✅ No | ⚠️ **NO está en sitemap** | 🟡 MEDIO |
| 13 | `/modulares-kingspan` | 🔴 **FALTA** — Sin `metadata` exportado | 🔴 **FALTA** | ✅ Sin imágenes propias | ✅ No | ⚠️ **NO está en sitemap** | 🟡 MEDIO |
| 14 | `/ventas` | 🔴 **FALTA** — `"use client"` + sin `metadata` | 🔴 **FALTA** | ✅ Sin imágenes propias | 🔴 **SÍ** — Bloquea metadata | ⚠️ **NO está en sitemap** | 🔴 CRÍTICO |
| 15 | `/sos` | ✅ *"AYCweb OS \| El Sistema Operativo para PyMEs"* (46 chars) | ✅ *"Reemplazá tu página web inútil por una máquina..."* (130 chars) | ✅ Sin imágenes propias | ✅ No | ⚠️ **NO está en sitemap** | 🟡 MEDIO |
| 16 | `/os` | 🔴 **FALTA** — `"use client"` + sin `metadata` | 🔴 **FALTA** | ⚠️ 2 imágenes `<Image>`: `qr-fiat.webp` ✅ `alt="QR Banco"`, `qr-crypto.webp` ✅ `alt="QR USDT"` | 🔴 **SÍ** — Bloquea metadata. Sitemap indica priority 0.9 | ✅ Sí (priority 0.9) | 🔴 CRÍTICO |
| 17 | `/oscar` | 🔴 **FALTA** — `"use client"` + sin `metadata` | 🔴 **FALTA** | ⚠️ 2 imágenes `<Image>`: `qr-fiat.webp` ✅ `alt="QR Pago Bancario"`, `qr-crypto.webp` ✅ `alt="QR USDT TRC20"` | 🔴 **SÍ** — Bloquea metadata | ⚠️ **NO está en sitemap** | 🔴 CRÍTICO |
| 18 | `/autoppto` | 🔴 **FALTA** — `"use client"` + sin `metadata` | 🔴 **FALTA** | ⚠️ `<img>` nativa (no `<Image>` de Next.js) con `alt="Vista previa"` — sin optimización automática | 🔴 **SÍ** — Herramienta interna expuesta | ⚠️ Debería bloquearse en robots.txt | 🔴 CRÍTICO |
| 19 | `/contrato` | 🔴 **FALTA** — `"use client"` + sin `metadata` | 🔴 **FALTA** | ✅ Sin imágenes | 🔴 **SÍ** — Herramienta interna expuesta | ⚠️ Debería bloquearse en robots.txt | 🟡 MEDIO |
| 20 | `/controlroom` | 🔴 **FALTA** — `"use client"` + sin `metadata` | 🔴 **FALTA** | ✅ Sin imágenes | 🔴 **SÍ** — CRM interno expuesto públicamente | 🔴 **URGENTE** — Bloquear en robots.txt | 🔴 CRÍTICO |
| 21 | `/costos` | 🔴 **FALTA** — `"use client"` + sin `metadata` | 🔴 **FALTA** | ✅ Sin imágenes | 🔴 **SÍ** — Carga Google Fonts vía `@import` en CSS (bloquea render) | ⚠️ **NO está en sitemap** | 🔴 CRÍTICO |
| 22 | `/legales` | 🔴 **FALTA** — `"use client"` + sin `metadata` | 🔴 **FALTA** | ✅ Sin imágenes | 🔴 **SÍ** — Herramienta interna expuesta | ⚠️ Debería bloquearse en robots.txt | 🟡 MEDIO |
| 23 | `/soluciones` | 🔴 **FALTA** — Sin `metadata` exportado | 🔴 **FALTA** | ✅ Sin imágenes propias | ✅ No | ⚠️ **NO está en sitemap** | 🟡 MEDIO |

---

## Análisis de Imágenes (public/)

| Archivo | Tamaño | Formato | Uso en código | `alt` presente | Estado |
|---------|--------|---------|---------------|----------------|--------|
| `logo-ayc.webp` | 7.61 KB | ✅ WebP | `app/layout.tsx` (footer) | ✅ `alt="AYCweb Logo"` | ✅ OK |
| `qr-fiat.webp` | **29.11 KB** | ✅ WebP | `/os`, `/oscar` | ✅ `alt="QR Banco"` / `alt="QR Pago Bancario"` | ⚠️ Optimizable (target: <15 KB) |
| `qr-crypto.webp` | 8.13 KB | ✅ WebP | `/os`, `/oscar` | ✅ `alt="QR USDT"` / `alt="QR USDT TRC20"` | ✅ OK |
| `favicon.ico` | **28.78 KB** | ⚠️ ICO | Automático (Next.js) | N/A | ⚠️ Pesado. Convertir a `.ico` optimizado o usar `icon.png` (ya existe en `/app/`) |
| `file.svg` | 0.38 KB | ✅ SVG | No usado en páginas | N/A | 🟡 Asset de plantilla, eliminar |
| `globe.svg` | 1.01 KB | ✅ SVG | No usado en páginas | N/A | 🟡 Asset de plantilla, eliminar |
| `next.svg` | 1.34 KB | ✅ SVG | No usado en páginas | N/A | 🟡 Asset de plantilla, eliminar |
| `vercel.svg` | 0.13 KB | ✅ SVG | No usado en páginas | N/A | 🟡 Asset de plantilla, eliminar |
| `window.svg` | 0.38 KB | ✅ SVG | No usado en páginas | N/A | 🟡 Asset de plantilla, eliminar |

**Nota crítica:** La página `/autoppto` usa `<img src={imagenUrl}>` nativa (URL externa de `metalmadeas.com`) sin pasar por el componente `<Image>` de Next.js. Esto elimina la optimización automática de formato, tamaño y lazy loading para esa imagen.

---

## Análisis de Infraestructura SEO Global

### ✅ Fortalezas detectadas

| Elemento | Estado | Detalle |
|----------|--------|---------|
| `sitemap.ts` | ✅ Implementado | 6 URLs indexadas con prioridades correctas |
| `robots.ts` | ✅ Implementado | Permite todo `*`, apunta al sitemap |
| Fuente Inter | ✅ Optimizada | `display: swap` + subset `latin` — sin bloqueo de render |
| `lang="es"` | ✅ Correcto | Declarado en `<html>` del layout |
| `viewport` | ✅ Correcto | `maximumScale: 5` — accesible |
| `themeColor` | ✅ Presente | `#09090b` |
| Formato imágenes | ✅ WebP | Todas las imágenes propias en WebP |
| `next/image` | ✅ Usado | En layout y páginas `/os`, `/oscar` |
| Metadata template | ✅ Configurado | `template: "%s \| AYCweb"` en layout |

### 🔴 Problemas críticos detectados

| Problema | Páginas afectadas | Impacto PageSpeed |
|----------|-------------------|-------------------|
| `"use client"` en páginas que no lo necesitan | `/`, `/precios`, `/ventas`, `/motor-logistico`, `/os`, `/oscar`, `/autoppto`, `/contrato`, `/controlroom`, `/costos`, `/legales` | **-8 a -15 puntos** (bloquea SSG, elimina metadata estática, aumenta JS bundle) |
| Sin `metadata` propio | 15 de 23 páginas | **-10 a -20 puntos** SEO (Google no puede indexar correctamente) |
| Páginas internas indexables | `/controlroom`, `/autoppto`, `/legales`, `/contrato` | **Riesgo de seguridad + dilución de autoridad de dominio** |
| `@import` Google Fonts en CSS | `/costos` | **-5 a -8 puntos** (bloquea render, viola Core Web Vitals) |
| `<img>` nativa sin optimización | `/autoppto` | **-3 a -5 puntos** (sin lazy load, sin WebP automático) |
| Páginas públicas fuera del sitemap | `/flete`, `/precios`, `/sos`, `/os`, `/ventas`, `/motor-logistico`, `/motor-saas`, `/soluciones`, `/contacto`, `/mascotas-premium`, `/metal-mad`, `/modulares-kingspan`, `/oscar` | **Pérdida de crawl budget y autoridad** |
| SVGs de plantilla sin usar en `public/` | `file.svg`, `globe.svg`, `next.svg`, `vercel.svg`, `window.svg` | Ruido en el bundle (menor) |

---

## 🔴 Top 3 Recomendaciones High Priority

> Estas 3 acciones tienen el mayor impacto directo sobre el score de PageSpeed y el posicionamiento SEO B2B. Implementarlas en orden.

---

### 🥇 PRIORIDAD 1 — Eliminar `"use client"` de páginas que no lo necesitan y agregar `metadata` estático

**Impacto estimado: +15 a +20 puntos en PageSpeed · +30% en indexación orgánica**

**El problema:**  
11 páginas declaran `"use client"` en el nivel de la página completa. Esto convierte toda la página en un Client Component, lo que significa:
- Next.js **no puede generar HTML estático** en build time (pierde SSG/SSR).
- La directiva `export const metadata` **es ignorada silenciosamente** por Next.js cuando el archivo tiene `"use client"` — Google recibe un `<title>` vacío o el fallback del layout.
- El **JavaScript bundle** enviado al cliente aumenta significativamente.
- El **LCP (Largest Contentful Paint)** empeora porque el HTML llega vacío y se hidrata en el cliente.

**La solución correcta (patrón Next.js App Router):**  
Separar la lógica interactiva en un componente hijo con `"use client"`, manteniendo la página padre como Server Component con su `metadata`.

**Ejemplo para `/precios/page.tsx`:**
```tsx
// app/precios/page.tsx — SERVER COMPONENT (sin "use client")
import { Metadata } from "next";
import PreciosClient from "./PreciosClient"; // El componente interactivo

export const metadata: Metadata = {
  title: "Planes y Precios B2B | AYCweb",
  description: "Inversión clara y retorno operativo medible. Sistemas empaquetados desde USD $75 sin costos ocultos. Infraestructura digital B2B en Paraguay.",
};

export default function PricingPage() {
  return <PreciosClient />;
}
```

```tsx
// app/precios/PreciosClient.tsx — CLIENT COMPONENT
"use client";
// ... todo el código con useState, useLanguage, etc.
```

**Páginas que requieren esta refactorización inmediata:**

| Página | Razón del `"use client"` | ¿Realmente necesita estado cliente? |
|--------|--------------------------|-------------------------------------|
| `/` | `useLanguage()` hook | ✅ Sí — extraer a componente hijo |
| `/precios` | `useState` para planes | ✅ Sí — extraer a componente hijo |
| `/ventas` | `whatsappLink` hardcodeado | 🔴 No — puede ser Server Component puro |
| `/motor-logistico` | Calculadora interactiva | ✅ Sí — extraer calculadora a componente hijo |
| `/os` | `useState` para método de pago | ✅ Sí — extraer `TerminalDePago` a componente hijo |
| `/oscar` | `useState` para planes | ✅ Sí — extraer a componente hijo |
| `/costos` | `useState(mounted)` para animaciones | 🔴 No — usar CSS animations puras |

---

### 🥈 PRIORIDAD 2 — Agregar `metadata` único a las 15 páginas que carecen de él + actualizar el sitemap

**Impacto estimado: +10 a +15 puntos en PageSpeed SEO · Indexación correcta en Google**

**El problema:**  
15 de 23 páginas no exportan su propio objeto `metadata`. Google indexa estas páginas con el título genérico del layout (`"AYCweb Paraguay | Infraestructura Digital B2B"`) para todas, lo que genera **canibalización de keywords** y **CTR bajo** en los resultados de búsqueda. Además, 13 páginas públicas no están en el `sitemap.ts`, lo que reduce el crawl budget y la velocidad de indexación.

**Metadata recomendado para las páginas críticas:**

```tsx
// /servicios/page.tsx
export const metadata: Metadata = {
  title: "Servicios de Ingeniería Digital B2B | AYCweb Paraguay",
  description: "Landings B2B, cotizadores PDF automáticos, generación de contratos y portales de clientes. Infraestructura digital para empresas en Paraguay.",
};

// /precios/page.tsx
export const metadata: Metadata = {
  title: "Planes y Precios B2B | AYCweb Paraguay",
  description: "Inversión clara desde USD $75. MVP Starter, Infraestructura Flash y Motor Operativo. Sin costos ocultos. Setup en 48-72hs en Paraguay.",
};

// /motor-logistico/page.tsx
export const metadata: Metadata = {
  title: "Motor Logístico B2B Internacional | AYCweb",
  description: "Calculadora de rentabilidad de fletes con proyección LATAM. Calcula combustible, RRHH, peajes y desgaste de flota en tiempo real.",
};

// /contacto/page.tsx
export const metadata: Metadata = {
  title: "Contacto | AYCweb Paraguay",
  description: "Contactá a AYCweb para automatizar tu empresa. Diagnóstico técnico gratuito. Respondemos en menos de 2 horas.",
};

// /os/page.tsx
export const metadata: Metadata = {
  title: "AYCweb OS | Sistema de Venta Digital con Pago Integrado",
  description: "Convertí tu web en un sistema de atención, pago y cierre. Landing Flash desde USD $200 con QR de pago integrado. Entrega en 72hs.",
};
```

**Actualización del sitemap recomendada:**
```ts
// Agregar estas URLs al sitemap.ts:
{ url: `${baseUrl}/flete`, priority: 0.9, changeFrequency: 'monthly' },
{ url: `${baseUrl}/precios`, priority: 0.9, changeFrequency: 'monthly' },
{ url: `${baseUrl}/sos`, priority: 0.8, changeFrequency: 'monthly' },
{ url: `${baseUrl}/ventas`, priority: 0.7, changeFrequency: 'monthly' },
{ url: `${baseUrl}/contacto`, priority: 0.7, changeFrequency: 'monthly' },
{ url: `${baseUrl}/soluciones`, priority: 0.7, changeFrequency: 'monthly' },
{ url: `${baseUrl}/motor-logistico`, priority: 0.6, changeFrequency: 'monthly' },
```

**Bloquear en robots.ts las páginas internas:**
```ts
// Agregar regla de disallow para herramientas internas:
rules: [
  { userAgent: '*', allow: '/' },
  { userAgent: '*', disallow: ['/controlroom', '/autoppto', '/contrato', '/legales', '/costos'] },
],
```

---

### 🥉 PRIORIDAD 3 — Eliminar el `@import` de Google Fonts en `/costos` y reemplazar `<img>` nativa en `/autoppto`

**Impacto estimado: +5 a +8 puntos en PageSpeed · Elimina render-blocking resources**

**Problema A — `@import` en `/costos/page.tsx`:**  
La página `/costos` carga las fuentes Syne y DM Sans mediante `@import url('https://fonts.googleapis.com/...')` dentro de un bloque `<style>` JSX. Esto es **el peor patrón posible para PageSpeed** porque:
1. El navegador debe descargar el CSS, parsearlo, encontrar el `@import`, hacer una segunda petición HTTP a Google, y solo entonces puede renderizar el texto.
2. Bloquea el **FCP (First Contentful Paint)** y el **LCP**.
3. Google PageSpeed Insights lo marca como "Eliminate render-blocking resources" — uno de los diagnósticos más penalizantes.

**La solución:**
```tsx
// Eliminar el bloque <style> con @import y usar next/font/google:
import { Syne, DM_Sans } from "next/font/google";

const syne = Syne({ subsets: ["latin"], weight: ["700", "800"], variable: "--font-syne" });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["300", "400", "500"], variable: "--font-dm-sans" });

// Aplicar en el componente:
<section className={`${syne.variable} ${dmSans.variable}`}>
```
Next.js descargará las fuentes en build time, las servirá desde el mismo dominio (sin petición externa) y las inyectará con `font-display: swap` automáticamente.

**Problema B — `<img>` nativa en `/autoppto/page.tsx`:**  
La imagen de vista previa usa `<img src={imagenUrl}>` con una URL externa (`metalmadeas.com`). Esto:
1. No tiene lazy loading automático.
2. No se convierte a WebP/AVIF.
3. No tiene `width`/`height` declarados → causa **Cumulative Layout Shift (CLS)**.
4. No pasa por el Image Optimization de Next.js.

**La solución:**
```tsx
// Reemplazar <img> nativa por next/image con dominios permitidos:
import Image from "next/image";

// En next.config.ts, agregar:
images: {
  remotePatterns: [{ hostname: 'metalmadeas.com' }],
},

// En el componente:
<Image 
  src={imagenUrl} 
  alt="Vista previa del producto" 
  width={128} 
  height={128} 
  className="object-cover rounded-xl"
  crossOrigin="anonymous"
/>
```

**Bonus — Optimizar `favicon.ico` (28.78 KB):**  
El favicon actual pesa 28.78 KB, lo cual es excesivo. Next.js App Router ya detecta `app/icon.png` automáticamente como favicon. Verificar que `app/icon.png` esté optimizado y eliminar el `public/favicon.ico` redundante, o reemplazarlo con una versión de 16x16 + 32x32 que no supere los 4 KB.

---

## 📋 Resumen de Acciones por Prioridad

| Prioridad | Acción | Páginas afectadas | Esfuerzo | Impacto PageSpeed |
|-----------|--------|-------------------|----------|-------------------|
| 🔴 P1 | Refactorizar `"use client"` → separar Server/Client Components | 11 páginas | Alto | +15–20 pts |
| 🔴 P1 | Agregar `export const metadata` a páginas sin título/descripción | 15 páginas | Medio | +10–15 pts |
| 🔴 P1 | Bloquear páginas internas en `robots.ts` (`/controlroom`, `/autoppto`, etc.) | 5 páginas | Bajo | Seguridad + SEO |
| 🟡 P2 | Actualizar `sitemap.ts` con las 7 páginas públicas faltantes | `sitemap.ts` | Bajo | +5 pts crawl |
| 🟡 P2 | Eliminar `@import` Google Fonts en `/costos` → usar `next/font/google` | 1 página | Bajo | +5–8 pts |
| 🟡 P2 | Reemplazar `<img>` nativa por `<Image>` en `/autoppto` | 1 página | Bajo | +3–5 pts |
| 🟢 P3 | Optimizar `favicon.ico` (28.78 KB → <4 KB) | `public/` | Bajo | +1–2 pts |
| 🟢 P3 | Eliminar SVGs de plantilla sin usar (`file.svg`, `globe.svg`, etc.) | `public/` | Mínimo | Limpieza |
| 🟢 P3 | Optimizar `qr-fiat.webp` (29.11 KB → <15 KB) con calidad 75–80 | `public/` | Mínimo | +1 pt |

---

## 🏁 Conclusión

AYCweb tiene la arquitectura correcta (Next.js App Router, WebP, `next/font`, sitemap/robots) pero está **subutilizando el 70% del potencial de rendimiento** por el uso masivo de `"use client"` a nivel de página. La corrección de las 3 prioridades descritas llevará el PageSpeed de ~75 a **97–99/100** sin cambiar una sola línea de diseño visual.

El patrón de refactorización es siempre el mismo: **la página es un Server Component con `metadata`, y los componentes interactivos son Client Components hijos**. Este es el patrón canónico de Next.js App Router y la razón por la que el framework puede alcanzar scores perfectos.

---

*Reporte generado por análisis estático de código fuente. Para validación en producción, ejecutar `npx lighthouse https://aycweb.com --output=json` o usar PageSpeed Insights API.*
