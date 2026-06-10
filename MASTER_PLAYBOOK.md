# MASTER PLAYBOOK — AYCweb Platform
**Versión:** 1.0 · **Última actualización:** Junio 2026  
**Repositorio:** `c:\Proyectos\aycweb` · **Stack:** Next.js 16 / Supabase / n8n / Vercel

> Este documento es el contrato de entendimiento compartido entre todos los actores del sistema: clientes, dirección, arquitectura, desarrollo e inteligencias artificiales. Cada sección habla en el idioma de su audiencia. No se resume el código; se explica cómo operarlo y cómo escalarlo.

---

## ÍNDICE

1. [👤 Manual para Clientes](#1--manual-para-clientes)
2. [👔 Manual para el CEO](#2--manual-para-el-ceo)
3. [🏗️ Manual para el CTO](#3--manual-para-el-cto)
4. [💻 Manual para Devs](#4--manual-para-devs)
5. [🤖 Manual para IAs y Agentes](#5--manual-para-ias-y-agentes)

---

## 1. 👤 MANUAL PARA CLIENTES

> **Audiencia:** Gerentes, dueños de empresa, responsables de compras. Sin conocimiento técnico requerido.

---

### ¿Qué problema resuelve AYCweb para usted?

Usted probablemente hoy cotiza así: recibe un pedido por WhatsApp, busca precios en una planilla Excel, calcula manualmente, escribe un PDF a mano y lo envía. Este proceso toma entre 45 minutos y 2 horas **por cotización**. Si tiene 10 pedidos al día, pierde hasta 20 horas semanales en trabajo administrativo repetitivo.

**AYCweb le entrega un sistema que hace ese trabajo en 3 minutos.**

El resultado de Oriplast (empresa de muebles escolares en Paraguay): pasó de **2 horas** por cotización a **3 minutos**. Misma calidad, mismo precio correcto, sin depender de que el vendedor esté disponible.

---

### ¿Cómo funciona el Motor de Cotización?

Cuando usted accede a su Motor de Cotización personalizado (por ejemplo, el demo en `/es/demo-cotizador`):

1. **Ingresa los datos del pedido**: dimensiones, materiales, cantidades.
2. **El sistema calcula automáticamente**: costo de materiales, mano de obra, IVA, margen de ganancia, descuentos aplicables.
3. **Genera un presupuesto en PDF** listo para enviar al cliente final.
4. **Dispara un aviso por WhatsApp** a su equipo de ventas con el resumen.

No hay fórmulas que aprender. No hay Excel que mantener. Si cambia el precio de un material, su equipo técnico actualiza un solo número en el sistema y todos los cálculos futuros lo reflejan automáticamente.

---

### ¿Qué pasa con sus datos?

Sus datos (cotizaciones, leads, información de clientes) se guardan en una base de datos llamada **Supabase**, alojada en servidores seguros con **Row-Level Security (RLS)** activada. Eso significa:

- **Sus datos son suyos**: nadie externo puede leerlos sin credenciales específicas.
- **Nadie de AYCweb puede acceder a sus registros** sin su autorización explícita.
- Los datos de diagnóstico que usted completa (el formulario de diagnóstico comercial) se usan únicamente para prepararle una propuesta personalizada. No se venden ni se comparten.

---

### Beneficios del sistema de automatización B2B

| Situación sin AYCweb | Situación con AYCweb |
|---|---|
| Respuesta a consultas en horario laboral | Respuestas automáticas 24/7 por WhatsApp |
| Cotización manual en 1-2 horas | Presupuesto generado en 3 minutos |
| Datos de clientes en planillas dispersas | Registro centralizado con historial |
| Seguimiento de leads por memoria | Pipeline automatizado con alertas |
| PDF cotizaciones con errores de tipeo | PDFs exactos generados por el sistema |

**El sistema no duerme, no toma vacaciones y no comete errores aritméticos.**

---

### ¿Cómo contactar para una consulta?

Desde cualquier página del sitio hay un botón de WhatsApp preconfigurado. Al tocarlo, se abre WhatsApp con un mensaje ya redactado con contexto de qué página usted estaba viendo. Usted solo necesita enviarlo. La respuesta llega en minutos (automática) o en horas (humana) dependiendo de la consulta.

---

## 2. 👔 MANUAL PARA EL CEO

> **Audiencia:** Dirección general, socios, inversores. Foco en modelo de negocio, escalabilidad y decisiones basadas en datos.

---

### Radiografía del Modelo de Negocio Tech-Enabled

AYCweb no es una agencia de desarrollo web. Es una **plataforma Tech-Enabled Manufacturing**: vende infraestructura digital de producción para empresas manufactureras y de servicios B2B en Paraguay y el cono sur.

**Los tres flujos de ingreso del modelo:**

```
1. SETUP FEE (único)         → $60 (Starter) | $900 (Business) | $1,800 (Enterprise)
2. CUOTA MENSUAL (recurrente)→ $15/mo (Starter) | $30/mo (Business) | $45/mo (Enterprise)  
3. VERTICALES (upsell)       → Módulos adicionales: CRM, logística, PDF, WhatsApp API
```

**Modelo de hitos para Business/Enterprise:**
- 20% anticipo al contratar
- 20% al cerrar definición
- 30% al completar implementación
- 30% al aprobar pruebas

Este modelo protege el flujo de caja y alinea los incentivos: el cliente solo paga el siguiente hito cuando está satisfecho con el anterior.

---

### Escalabilidad: 10 leads vs. 10,000 leads

La arquitectura actual opera sobre **costo marginal prácticamente cero** para escalar leads:

| Componente | Costo fijo | Costo por lead adicional |
|---|---|---|
| Vercel (hosting) | ~$0 (Free/Pro) | $0 (Edge Functions) |
| Supabase (DB) | ~$25/mo (Pro) | $0 (hasta 500M rows) |
| n8n (automatización) | ~$20/mo self-hosted | $0 (workflows ilimitados) |
| WhatsApp (mensajería) | $0 (wa.me links) | $0 |

**Lo que escala:** La atención humana (ventas, onboarding). Lo que NO escala: el sistema.

Esto significa que si mañana aparecen 200 leads nuevos por una campaña de pauta, el sistema los captura, los califica automáticamente, les envía un mensaje de WhatsApp personalizado y los registra en la base de datos. **Sin contratar más personal administrativo.**

---

### Los 40 Motores de Solución: el activo de distribución

El repositorio contiene **40 landing pages de soluciones** preconfiguradas, cada una indexada por "punto de dolor" del cliente:

- `/soluciones/cotizador-industrial` → Para gerentes industriales buscando automatizar presupuestos
- `/soluciones/reemplazar-excel-cotizaciones` → Para empresas que saben que deben modernizarse
- `/soluciones/automatizar-ventas-b2b` → Para directores comerciales
- `/soluciones/dentista`, `/abogado`, `/arquitecto` → Verticales profesionales

**Implicación estratégica:** Cada uno de estos URLs es un activo SEO que puede rankear en Google de forma orgánica, generando leads sin costo de adquisición.

---

### Puntos de Apalancamiento: Datos Clave en Supabase

Estas son las tablas que debe monitorear para tomar decisiones comerciales:

**Tabla `leads_b2b`**
```
Pregunta estratégica              | Campo a mirar
----------------------------------|------------------------------------------
¿Qué sector pide más?             | sector (campo del formulario diagnóstico)
¿Qué cuello de botella repite?    | cuelloBottella
¿Cuántos leads por semana?        | COUNT(*) GROUP BY DATE_TRUNC('week', created_at)
¿Qué stack usan los prospectos?   | stackActual
¿Qué tamaño de empresa entra?     | tamanoEquipo
```

**Tabla `anonymous_comments`**
```
Pregunta estratégica              | Campo a mirar
----------------------------------|------------------------------------------
¿Qué artículos generan más debate?| article_slug con más comments
¿Hay feedback negativo pendiente? | status = 'pending' con texto crítico
```

**Dashboard recomendado:** Conectar Supabase a un dashboard de Metabase o Retool para visualizar tendencias de leads sin tocar el código.

---

### Roadmap de Crecimiento (Prioridad por ROI)

| Palanca | Impacto | Esfuerzo |
|---|---|---|
| Activar WhatsApp Business API (Cloud API) | Alto — respuestas automatizadas con plantillas aprobadas | Medio |
| Integrar Stripe para pagos en línea | Alto — cierra la brecha entre cotización y pago | Medio |
| Expandir i18n al 100% (es/en/pt-br) | Medio — habilita mercado Brasil y mercado anglófono | Bajo |
| Lanzar módulo CRM (panel.ts ya configurado) | Alto — fidelización y retención | Alto |
| Conectar Metabase a Supabase | Medio — visibilidad de datos para dirección | Bajo |

---

## 3. 🏗️ MANUAL PARA EL CTO

> **Audiencia:** Arquitecto de sistemas, CTO, DevOps lead. Foco en decisiones de infraestructura, seguridad y escalabilidad técnica.

---

### Stack Tecnológico y Decisiones de Infraestructura

#### ¿Por qué Vercel + Next.js App Router?

- **Edge runtime**: Las páginas de marketing se sirven desde los servidores más cercanos al usuario (CDN global). Latencia < 50ms para Paraguay, Brasil, Argentina.
- **Server Components por defecto**: El HTML se genera en el servidor. El cliente no descarga lógica de negocio ni credenciales. Bundle del cliente reducido al mínimo.
- **ISR (Incremental Static Regeneration)**: Las páginas de soluciones se generan estáticamente en build y se revalidan automáticamente. Sin servidor que mantener.
- **Route Handlers**: Los API endpoints corren como funciones serverless. Sin infraestructura de servidor dedicada para el API.

#### ¿Por qué Supabase?

- **RLS nativa**: Seguridad a nivel de fila configurada directamente en PostgreSQL. Los datos de un cliente no son accesibles desde el contexto de otro, sin lógica adicional en el API.
- **Postgrest integrado**: API REST auto-generada desde el schema. Zero boilerplate para CRUD básico.
- **Realtime (disponible, no activo)**: Si se activa, permite dashboards en vivo sin polling.
- **Credenciales server-side únicamente**: `SUPABASE_URL` y `SUPABASE_ANON_KEY` viven en variables de entorno sin prefijo `NEXT_PUBLIC_`. **Nunca llegan al bundle del cliente.**

#### ¿Por qué n8n self-hosted?

- **Control total sobre el flujo de automatización**: Los workflows no dependen de un SaaS tercero que puede cambiar precios o terminar el servicio.
- **Proxy de webhooks**: `app/api/webhook/cotizacion/route.ts` actúa como proxy que oculta la URL de n8n al cliente. Si n8n cambia de URL, se actualiza solo la variable de entorno, sin tocar el frontend.
- **Extensibilidad**: n8n puede conectar Supabase → WhatsApp API → Gmail → Slack → cualquier sistema en un mismo workflow sin código.

---

### Flujos de Datos (Data Pipelines)

#### Pipeline 1: Captura de Lead (Diagnóstico Comercial)

```
[Usuario llena formulario /es/diagnostico-comercial]
        ↓
[React state → POST /api/submit-diagnostico]
        ↓ (server-side, credenciales seguras)
[Route Handler valida campos requeridos]
        ↓
[supabaseClient.from('leads_b2b').insert(data)]
        ↓
[Supabase DB trigger → notifica a n8n (via webhook configurado en DB)]
        ↓
[n8n workflow: lee el lead → construye mensaje → envía WhatsApp al equipo de ventas]
        ↓
[Vendedor recibe alerta en WhatsApp con datos del prospecto]
```

#### Pipeline 2: Cotización Pública

```
[Usuario usa motor de cotización en /es/demo-cotizador o /es/aberturas]
        ↓
[lib/domain/cotizacion.ts calcula (solo client-side, sin acceso a DB)]
        ↓
[Usuario hace clic en "Enviar cotización"]
        ↓
[POST /api/webhook/cotizacion — proxy server-side]
        ↓ (enriquece: timestamp + source="aycweb-cotizador")
[Fetch a N8N_WEBHOOK_COTIZACIONES_URL (env var, oculto)]
        ↓
[n8n recibe cotización → notifica vendedor → responde al cliente por WhatsApp]
```

#### Pipeline 3: Precio de Combustible (Motor Logístico)

```
[Componente cotizadorLogistico monta]
        ↓
[GET /api/petropar con revalidación ISR 6 horas]
        ↓
[Route Handler hace scraping de PETROPAR (sitio oficial)]
        ↓ (si falla)
[Lee caché del sistema de archivos como fallback]
        ↓ (si tampoco hay caché)
[Devuelve precios hardcoded: diesel=6700, nafta=6140]
        ↓
[Componente recibe precio actual y lo inyecta en la fórmula de costo logístico]
```

---

### Gestión de Entornos

#### Variables de Entorno (jerarquía)

```bash
# PRODUCCIÓN (Vercel Dashboard → Environment Variables)
SUPABASE_URL=https://[project].supabase.co
SUPABASE_ANON_KEY=eyJ...          # Server-side únicamente
SUPABASE_SERVICE_ROLE_KEY=eyJ...   # Solo para operaciones privilegiadas
N8N_WEBHOOK_URL=https://n8n.dominio.com/webhook/leads
N8N_WEBHOOK_COTIZACIONES_URL=https://n8n.dominio.com/webhook/cotizaciones
PETROPAR_PRICES_URL=https://www.petropar.gov.py/...
ADMIN_USER=...                     # HTTP Basic Auth para /panel, /controlroom
ADMIN_PASS=...

# DESARROLLO (archivo .env.local — NO committear)
# Usar staging de Supabase, n8n en local o staging, credenciales de test
```

#### Regla crítica de seguridad
**NINGUNA variable de Supabase o n8n debe tener el prefijo `NEXT_PUBLIC_`.** Si la agregás con ese prefijo, Next.js la inyecta en el bundle del cliente y cualquier persona con DevTools ve tus credenciales de base de datos.

#### Test vs. Producción

| Aspecto | Test/Local | Producción |
|---|---|---|
| Supabase | Proyecto de staging separado | Proyecto de producción |
| n8n | Instancia local (docker) o staging | Instancia self-hosted |
| Credenciales | `.env.local` (gitignored) | Variables en Vercel Dashboard |
| PETROPAR scraping | Puede usar fallback hardcoded | Scraping en vivo |
| HTTP Auth (admin) | Bypass en desarrollo | Obligatorio en producción |

---

### Seguridad: Puntos Críticos

#### 1. proxy.ts — Guardia de Rutas Admin

El archivo `proxy.ts` (reemplaza `middleware.ts` en Next.js 16) implementa HTTP Basic Auth para:
- `/controlroom/*`
- `/panel/*`
- `/autoppto/*`
- `/legales/*`
- `/admin/*`

**Advertencia:** Si `ADMIN_USER` o `ADMIN_PASS` no están configuradas en producción, el middleware devuelve **HTTP 500** (no 401). Esto es intencional: previene exposición accidental de rutas admin si el deploy está mal configurado.

#### 2. Webhook Proxy — Ocultamiento de n8n

El endpoint `POST /api/webhook/cotizacion` nunca expone `N8N_WEBHOOK_COTIZACIONES_URL` al cliente. Si un atacante inspecciona el frontend, solo ve `/api/webhook/cotizacion` — no la URL real de n8n.

#### 3. Supabase RLS

Las tablas `leads_b2b` y `anonymous_comments` tienen RLS activado. Las operaciones de escritura se hacen desde Route Handlers server-side con `SUPABASE_ANON_KEY`. Para operaciones que requieren privilegios elevados (delete, admin queries), se usa `SUPABASE_SERVICE_ROLE_KEY` — **nunca exponer esta clave al cliente bajo ninguna circunstancia.**

---

### Cuellos de Botella Potenciales y Roadmap de Escalabilidad

| Cuello de botella | Condición de riesgo | Solución recomendada |
|---|---|---|
| Scraping de PETROPAR | Si el sitio oficial cambia su HTML, el scraper falla | Implementar parser robusto + alerta de fallo en n8n |
| n8n self-hosted | Si el servidor de n8n cae, las cotizaciones se pierden | Agregar cola de mensajes (Redis/BullMQ) o retry en Route Handler |
| HTTP Basic Auth | Credenciales estáticas en env (no expiran) | Migrar a Supabase Auth o JWT para admin routes |
| PDFs client-side | jsPDF corre en el browser; en mobile puede ser lento | Mover PDF generation a una Edge Function server-side |
| i18n parcial | Dictionaries tienen solo 6 claves; el resto está hardcoded en español | Completar migración i18n (plan en `plan-i18nMigration.prompt.md`) |
| 40 soluciones estáticas | Build time crece con cada nueva solución | Implementar On-Demand ISR (`revalidateTag`) para updates sin rebuild |

---

## 4. 💻 MANUAL PARA DEVS

> **Audiencia:** Desarrolladores que trabajan en el repo. Código, patrones, reglas de contribución, troubleshooting.

---

### Estructura de Carpetas Explicada

```
aycweb/
│
├── app/                          # Next.js App Router — SOLO capas de UI y routing
│   ├── api/                      # Route Handlers (server-side, no exponer a cliente)
│   │   ├── petropar/             # GET: scraping PETROPAR con ISR 6h
│   │   ├── webhook/cotizacion/   # POST: proxy seguro a n8n
│   │   ├── submit-diagnostico/   # POST: inserta lead en Supabase
│   │   └── submit-comment/       # POST: inserta comentario de blog
│   ├── [lang]/                   # Rutas localizadas (es/en/pt-br)
│   │   ├── (marketing)/          # Landing pages públicas con SEO
│   │   ├── (funnels)/            # Formularios de captura (diagnóstico, calculadora)
│   │   └── (demos)/              # Cotizadores interactivos (demos y cliente-específicos)
│   ├── soluciones/               # Hub SEO de 40 landings (sin prefijo de idioma)
│   └── layout.tsx                # Root layout (fuente, metadata global)
│
├── lib/                          # Lógica pura — SIN dependencias de React/Next
│   ├── config/                   # SSOT: precios, mensajes, soluciones, contacto
│   │   ├── contacto.ts           # ← SSOT para WhatsApp y templates de mensajes
│   │   ├── precios.ts            # ← SSOT para planes y precios
│   │   ├── soluciones/index.ts   # ← SSOT para las 40 soluciones
│   │   └── obras.ts              # ← SSOT para casos de estudio
│   ├── domain/                   # Motores de cotización (testables en aislamiento)
│   │   ├── cotizacion.ts         # Motor genérico (universal)
│   │   ├── cotizadorAberturas.ts # Motor de aberturas de aluminio
│   │   ├── cotizadorLogistico.ts # Motor logístico (combustible/chofer/peajes)
│   │   └── cotizadorMuebles.ts   # Motor de muebles (material/labor/IVA)
│   ├── services/                 # Helpers de servicios externos
│   │   ├── whatsapp-link.ts      # ← Única función que construye URLs wa.me
│   │   ├── whatsapp-message.ts   # Templates de mensajes por contexto
│   │   └── pdfService.ts         # Generación de PDFs (jsPDF)
│   ├── dictionaries/             # Traducciones (es.json, en.json, pt-br.json)
│   ├── i18n.ts                   # Detecta locale, carga diccionario
│   └── supabaseClient.ts         # Singleton de Supabase (server-side only)
│
├── components/                   # Componentes React — presentación únicamente
│   ├── ui/                       # Shadcn/Radix primitives (Button, Card, etc.)
│   ├── demos/                    # Cotizadores interactivos (usan lib/domain)
│   ├── soluciones/               # Template de landing de solución
│   ├── obras/                    # Componentes de casos de estudio
│   └── pricing/                  # Cards de planes de precios
│
├── context/                      # React Context providers
│   └── LanguageContext.tsx        # Proveedor de idioma actual
│
├── proxy.ts                      # Middleware: auth guard + i18n redirect
├── next.config.ts                # Redirects legacy, compresión
└── public/                       # Activos estáticos (imágenes, PDFs)
```

---

### Reglas Estrictas de Contribución

#### Regla 1: SSOT — Nunca hardcodear datos en componentes

**MAL:**
```tsx
// ❌ En un componente React
const precio = "$900";
const whatsapp = "https://wa.me/595985864209?text=Hola";
```

**BIEN:**
```tsx
// ✅ Importar desde el config SSOT
import { PLANES } from "@/lib/config/precios";
import { buildWaLink } from "@/lib/services/whatsapp-link";

const precio = PLANES.business.setup;
const whatsapp = buildWaLink("Hola, quiero el plan Business");
```

**¿Por qué?** Si el número de WhatsApp cambia, hay un solo archivo para editar: `lib/config/contacto.ts`. Si el precio del plan Business cambia, un solo archivo: `lib/config/precios.ts`. Sin SSOT, los cambios se convierten en búsquedas en todo el repo.

#### Regla 2: Server Components por defecto

Todo componente en `app/` es un Server Component por defecto. Solo agregar `"use client"` cuando el componente necesite:
- `useState` / `useEffect`
- Event listeners (`onClick`, `onChange`)
- APIs del browser (`window`, `localStorage`)
- React Context

**Regla de oro:** Si podés renderizarlo sin interactividad, no pongas `"use client"`.

#### Regla 3: Lógica de negocio en `lib/domain/`, nunca en componentes

Los motores de cotización en `lib/domain/` son funciones puras. No conocen React, no conocen Next.js. Esto permite:
- Testearlos con Vitest sin montar el DOM
- Reutilizarlos en múltiples interfaces (web, mobile con Capacitor, PDF)
- Modificarlos sin riesgo de romper UI

**MAL:**
```tsx
// ❌ Lógica de negocio dentro del componente
function CotizadorComponent() {
  const calcular = (dim) => {
    const precio = dim.ancho * dim.alto * 150; // ← Esto no es UI
    return precio * 1.1; // IVA hardcodeado en el componente
  }
}
```

**BIEN:**
```tsx
// ✅ Componente llama a la función de dominio
import { calcularCotizacion } from "@/lib/domain/cotizacion";

function CotizadorComponent() {
  const resultado = calcularCotizacion(items, { tasaIVA: 0.1 });
}
```

#### Regla 4: Rutas localizadas bajo `[lang]/`

Toda ruta pública que tenga contenido visible al usuario **debe** estar bajo `app/[lang]/`. Las únicas excepciones son:
- `app/api/*` — Route Handlers (no tienen UI)
- `app/soluciones/*` — SEO hub con canonical único (sin variantes de idioma)
- `app/robots.ts` y `app/sitemap.ts`

**MAL:** Crear `app/empresas/page.tsx`  
**BIEN:** Crear `app/[lang]/(marketing)/empresas/page.tsx`

Si una ruta está fuera de `[lang]/`, el middleware en `proxy.ts` intenta redirigirla a `/es/[ruta]`, lo cual puede causar loops de redirección o 404s.

#### Regla 5: Traducciones en el diccionario, no en el código

**MAL:**
```tsx
// ❌ Texto hardcodeado en español
<h1>Automatizá tus cotizaciones</h1>
```

**BIEN:**
```tsx
// ✅ Desde el diccionario
const dict = await getDictionary(lang);
<h1>{dict.heroTitle}</h1>
```

Si la clave no existe en el diccionario, agregarla en los tres archivos: `es.json`, `en.json`, `pt-br.json`.

---

### Cómo Crear un Nuevo Motor de Cotización (Paso a Paso)

**Ejemplo:** Cotizador de Pintura Industrial

**Paso 1: Crear la lógica de dominio en `lib/domain/`**
```typescript
// lib/domain/cotizadorPintura.ts

export interface ParamsPintura {
  metrosCuadrados: number;
  tipoPintura: "epoxi" | "latex" | "anticorrosivo";
  cantidadManos: number;
  incluirPrimer: boolean;
  margenPorcentaje: number;
}

const PRECIOS_PINTURA = {
  epoxi: 45000,       // Gs. por litro
  latex: 28000,
  anticorrosivo: 62000,
};

const RENDIMIENTO_M2_POR_LITRO = 8;
const COSTO_MANO_OBRA_M2 = 15000; // Gs.
const TASA_IVA = 0.10;

export interface ResultadoPintura {
  litrosNecesarios: number;
  costoPintura: number;
  costoManoObra: number;
  subtotal: number;
  margen: number;
  iva: number;
  total: number;
}

export function calcularCotizacionPintura(params: ParamsPintura): ResultadoPintura {
  const litros = (params.metrosCuadrados * params.cantidadManos) / RENDIMIENTO_M2_POR_LITRO;
  const costoPintura = litros * PRECIOS_PINTURA[params.tipoPintura];
  const costoManoObra = params.metrosCuadrados * COSTO_MANO_OBRA_M2;
  const subtotal = costoPintura + costoManoObra;
  const margen = subtotal * (params.margenPorcentaje / 100);
  const iva = (subtotal + margen) * TASA_IVA;
  const total = subtotal + margen + iva;

  return { litrosNecesarios: litros, costoPintura, costoManoObra, subtotal, margen, iva, total };
}
```

**Paso 2: Agregar tests en `lib/domain/`**
```typescript
// lib/domain/cotizadorPintura.test.ts
import { describe, it, expect } from "vitest";
import { calcularCotizacionPintura } from "./cotizadorPintura";

describe("calcularCotizacionPintura", () => {
  it("calcula correctamente para 100m² de epoxi", () => {
    const resultado = calcularCotizacionPintura({
      metrosCuadrados: 100,
      tipoPintura: "epoxi",
      cantidadManos: 2,
      incluirPrimer: false,
      margenPorcentaje: 20,
    });
    expect(resultado.litrosNecesarios).toBe(25);
    expect(resultado.total).toBeGreaterThan(0);
  });
});
```

Ejecutar: `npx vitest run lib/domain/cotizadorPintura.test.ts`

**Paso 3: Crear el componente de UI en `components/demos/`**
```tsx
// components/demos/CotizadorPintura.tsx
"use client"
import { useState } from "react";
import { calcularCotizacionPintura, type ResultadoPintura } from "@/lib/domain/cotizadorPintura";

export function CotizadorPintura() {
  const [params, setParams] = useState({ metrosCuadrados: 100, tipoPintura: "epoxi", ... });
  const [resultado, setResultado] = useState<ResultadoPintura | null>(null);

  const calcular = () => setResultado(calcularCotizacionPintura(params));

  return (
    // UI del cotizador — inputs + botón calcular + tabla de resultados
  );
}
```

**Paso 4: Crear la página de demostración**
```tsx
// app/[lang]/(demos)/cotizador-pintura/page.tsx
import { CotizadorPintura } from "@/components/demos/CotizadorPintura";

export default function CotizadorPinturaPage() {
  return (
    <main>
      <h1>Cotizador de Pintura Industrial</h1>
      <CotizadorPintura />
    </main>
  );
}
```

**Paso 5 (opcional): Agregar al webhook de cotizaciones**

Si el usuario debe recibir la cotización por WhatsApp, hacer `POST /api/webhook/cotizacion` desde el componente cuando el usuario solicite envío.

---

### Cómo Crear una Nueva Landing Page de Solución (Paso a Paso)

**Ejemplo:** Nueva solución para talleres mecánicos

**Paso 1: Agregar la configuración en `lib/config/soluciones/index.ts`**
```typescript
// Dentro del array TODAS_SOLUCIONES, agregar:
{
  slug: "cotizador-taller-mecanico",
  metaTitle: "Cotizador para Talleres Mecánicos | AYCweb",
  metaDescription: "Presupuesta mano de obra y repuestos en 2 minutos. Sin Excel.",
  hero: {
    titulo: "Presupuesta más rápido que la competencia",
    subtitulo: "Tu taller merece un sistema que no duerme",
    cta: "Ver demo gratis"
  },
  problema: "Calcular el costo de una reparación toma...",
  solucion: [
    { paso: 1, titulo: "El cliente describe la falla", descripcion: "..." },
    { paso: 2, titulo: "El sistema calcula repuestos + mano de obra", descripcion: "..." },
    { paso: 3, titulo: "PDF listo para enviar por WhatsApp", descripcion: "..." }
  ],
  casosRelacionados: ["metal-mad"],
  faq: [
    { pregunta: "¿Funciona sin internet?", respuesta: "No, requiere conexión." }
  ]
}
```

**Paso 2: No se necesita crear ningún archivo de página.**

El template `app/soluciones/[slug]/page.tsx` lee la configuración del slug y renderiza la página automáticamente. El sitemap y robots.txt se actualizan en el próximo deploy por `app/sitemap.ts` que itera `TODAS_SOLUCIONES`.

---

### Troubleshooting: Los 3 Errores Más Comunes

#### Error 1: RLS Violation — "new row violates row-level security policy"

**Síntoma:** `POST /api/submit-diagnostico` devuelve 500 o el log de Supabase muestra `violates row-level security policy`.

**Causa:** La tabla tiene RLS activado pero la política de `INSERT` no permite inserciones con el rol `anon`.

**Solución:**
```sql
-- En el SQL Editor de Supabase Dashboard:
-- 1. Verificar políticas existentes
SELECT * FROM pg_policies WHERE tablename = 'leads_b2b';

-- 2. Si no hay política de INSERT para anon, crearla:
CREATE POLICY "allow_anon_insert" ON leads_b2b
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- 3. Verificar que RLS está habilitado (debe estarlo):
ALTER TABLE leads_b2b ENABLE ROW LEVEL SECURITY;
```

**Prevención:** Cada tabla nueva en Supabase requiere políticas explícitas antes de ser usada desde el frontend.

#### Error 2: Links Huérfanos — Página 404 por ruta fuera de `[lang]/`

**Síntoma:** Un link a `/empresas` o `/diagnostico-comercial` da 404 o redirige en loop.

**Causa:** La ruta existe en `app/empresas/page.tsx` en vez de `app/[lang]/(marketing)/empresas/page.tsx`, o hay un `<Link href="/empresas">` sin el prefijo de idioma.

**Diagnóstico:**
```bash
# Buscar links sin prefijo de idioma (deben tener /es/, /en/ o /pt-br/ o ser dinámicos)
grep -r "href=\"/[^_]" components/ app/ --include="*.tsx" | grep -v '"\/api\|\/soluciones\|\/es\/\|\/en\/\|\/pt-br\/\|\`\/'
```

**Solución para links:**
```tsx
// ❌ MAL
<Link href="/empresas">Ver planes</Link>

// ✅ BIEN — usando el lang del contexto
const { lang } = useLanguage(); // o recibir lang como prop desde el layout
<Link href={`/${lang}/empresas`}>Ver planes</Link>
```

**Solución para la ruta:** Mover el archivo de página a la carpeta correcta bajo `[lang]/`.

#### Error 3: Variables de Entorno no disponibles en producción

**Síntoma:** En Vercel el deploy pasa, pero `/api/submit-diagnostico` devuelve 500. El log de la función dice `supabaseClient: SUPABASE_URL is not defined`.

**Causa:** Las variables de entorno no están configuradas en el Vercel Dashboard, o están configuradas solo para un entorno (Preview) y no para Production.

**Solución:**
1. Ir a Vercel Dashboard → Proyecto → Settings → Environment Variables
2. Verificar que `SUPABASE_URL`, `SUPABASE_ANON_KEY`, `N8N_WEBHOOK_COTIZACIONES_URL` están presentes
3. **Crítico:** Verificar que están habilitadas para el entorno "Production" (no solo "Preview" o "Development")
4. Hacer un nuevo deploy después de agregar variables (las funciones serverless no se reinician automáticamente)

**Verificación rápida en Vercel Functions logs:**
```
Vercel Dashboard → Proyecto → Functions → seleccionar la función → Ver logs
```

---

## 5. 🤖 MANUAL PARA IAs Y AGENTES

> **Audiencia:** Modelos de lenguaje, agentes de código, herramientas de generación automática. Este es un system prompt de instrucciones para futuros agentes que lean este repositorio.

---

### Reglas de Oro para Agentes IA

#### REGLA 1: Toda modificación de precios, mensajes o contacto SOLO en `lib/config/`

Si un agente necesita cambiar el precio de un plan, el número de WhatsApp, o el texto de un CTA, el único lugar donde hacerlo es `lib/config/`. No buscar esos valores en componentes React; los componentes los consumen desde la config, no los definen.

```
ANTES de modificar cualquier string o número de negocio:
1. Verificar que NO existe en lib/config/contacto.ts
2. Verificar que NO existe en lib/config/precios.ts
3. Verificar que NO existe en lib/config/soluciones/index.ts
Solo si no está en ninguno de esos, puede estar hardcodeado (y debería moverse).
```

#### REGLA 2: Los motores de dominio son contratos públicos

Las funciones en `lib/domain/` tienen firmas tipadas que son contratos. Si un agente modifica la firma de `calcularCotizacion()` o cualquier función de dominio, **debe** verificar todos los lugares que la llaman:

```bash
# Antes de modificar lib/domain/cotizacion.ts:
grep -r "calcularCotizacion\|cotizacion\.ts" app/ components/ --include="*.tsx" --include="*.ts"
```

Si hay más de 3 consumers, proponer una función nueva en vez de modificar la existente.

#### REGLA 3: NUNCA agregar `NEXT_PUBLIC_` a variables de Supabase o n8n

Esta es una vulnerabilidad de seguridad crítica. Si un agente sugiere o genera código con `process.env.NEXT_PUBLIC_SUPABASE_KEY`, el código es incorrecto y no debe aplicarse.

#### REGLA 4: Las rutas nuevas van bajo `[lang]/`, no en la raíz de `app/`

Cualquier página nueva que no sea un Route Handler de API debe crearse en:
```
app/[lang]/(marketing)/nueva-ruta/page.tsx  — para marketing
app/[lang]/(funnels)/nueva-ruta/page.tsx    — para captura de leads
app/[lang]/(demos)/nueva-ruta/page.tsx      — para demos de motores
```

Excepciones: `app/soluciones/[slug]/`, `app/robots.ts`, `app/sitemap.ts`, `app/api/*`.

#### REGLA 5: Verificar que la ruta aparece en el sitemap

Si se crea una nueva landing importante, verificar que `app/sitemap.ts` la incluye. Las soluciones se incluyen automáticamente via `TODAS_SOLUCIONES`. Las rutas de marketing bajo `[lang]/` deben agregarse manualmente al sitemap.

---

### Dependencias Críticas que NO Deben Modificarse sin Validación Cruzada

| Archivo | Dependientes críticos | Riesgo si se modifica sin auditoría |
|---|---|---|
| `lib/config/contacto.ts` (WHATSAPP_NUMBER) | Todos los componentes con CTA de WhatsApp | Links rotos en toda la plataforma |
| `lib/config/precios.ts` (estructura de PLANES) | `components/pricing/`, `app/[lang]/(marketing)/empresas/` | Precios incorrectos visibles al público |
| `lib/domain/cotizacion.ts` (ResultadoCotizacion type) | Todos los cotizadores, pdfService.ts, webhook proxy | Errores en cálculos o en generación de PDF |
| `lib/supabaseClient.ts` | `app/api/submit-diagnostico/`, `app/api/submit-comment/` | Pérdida de leads (inserción silenciosa fallida) |
| `proxy.ts` (matcher config) | Rutas protegidas admin | Exposición accidental de rutas admin |
| `lib/config/soluciones/index.ts` (TODAS_SOLUCIONES) | `app/sitemap.ts`, `app/soluciones/[slug]/page.tsx` | Páginas de solución sin indexar o 404 en producción |

---

### Dónde Inyectar Nuevo Código sin Romper la Arquitectura

#### Para agregar un nuevo motor de cotización:
```
1. CREAR: lib/domain/cotizadorNuevo.ts          (lógica pura, testeable)
2. CREAR: lib/domain/cotizadorNuevo.test.ts     (vitest tests)
3. CREAR: components/demos/CotizadorNuevo.tsx   (UI "use client")
4. CREAR: app/[lang]/(demos)/nuevo/page.tsx     (ruta)
5. OPCIONAL: agregar entrada en app/sitemap.ts  (si es pública)
```

#### Para agregar una nueva landing de solución:
```
1. EDITAR: lib/config/soluciones/index.ts       (agregar objeto al array)
2. NADA MÁS — el template genera la página automáticamente
```

#### Para agregar un nuevo webhook/API:
```
1. CREAR: app/api/nuevo-endpoint/route.ts
2. AGREGAR: variable de entorno al .env.example (documentar)
3. AGREGAR: variable en Vercel Dashboard (no olvidar en producción)
```

#### Para agregar un nuevo caso de estudio (obra):
```
1. EDITAR: lib/config/obras.ts                  (agregar CasoObra)
2. CREAR: lib/config/obras/nuevo-cliente.ts     (métricas detalladas)
3. NADA MÁS — components/obras/ lee desde la config
```

#### Para agregar una nueva traducción:
```
1. AGREGAR clave en: lib/dictionaries/es.json
2. AGREGAR clave en: lib/dictionaries/en.json
3. AGREGAR clave en: lib/dictionaries/pt-br.json
4. USAR en componente: const dict = await getDictionary(lang); dict.nuevaClave
```

---

### Protocolo de Seguridad para Agentes

Antes de ejecutar cualquier cambio en este repositorio, un agente debe validar:

1. **¿El cambio afecta `lib/config/`?** → Auditar todos los consumers con grep.
2. **¿El cambio modifica una firma de tipo en `lib/domain/`?** → Verificar compatibilidad con todos los callers.
3. **¿El cambio crea una nueva variable de entorno?** → Agregarla a `.env.example` y documentarla.
4. **¿El cambio agrega una ruta pública?** → Verificar que está bajo `[lang]/` y en el sitemap.
5. **¿El cambio usa credenciales?** → Verificar que NO tienen prefijo `NEXT_PUBLIC_`.
6. **¿El cambio modifica `proxy.ts`?** → Testear en local que las rutas admin siguen protegidas.

---

### Contexto de Negocio para Decisiones Técnicas

Cuando un agente deba decidir entre dos implementaciones técnicas, priorizar en este orden:

1. **Seguridad de datos del cliente** (RLS, credenciales server-side)
2. **Coherencia del SSOT** (no duplicar datos de configuración)
3. **Velocidad de respuesta al usuario** (Server Components, ISR, Edge)
4. **Mantenibilidad** (funciones puras testeables > lógica en componentes)
5. **Experiencia del desarrollador** (convenciones del proyecto > preferencias personales)

El idioma por defecto del contenido es **Español paraguayo** (`es`). Las interfaces técnicas (nombres de funciones, variables, comentarios de código) van en **inglés**. Los strings de UI van en los archivos de diccionario (`lib/dictionaries/`), **nunca hardcodeados en componentes**.

---

*Fin del Master Playbook — AYCweb Platform v1.0*  
*Generado mediante análisis estático profundo del repositorio en Junio 2026.*  
*Para actualizaciones: modificar este archivo en sync con cambios arquitecturales significativos.*
