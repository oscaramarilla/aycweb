# FUNNELS B2B — Manual de Ventas y Conversión

> Mapa completo de los flujos de captación, conversión y onboarding de AYCweb.
> Última actualización: 2026-05-30

---

## Índice

1. [Motor de Scoring B2B (Diagnóstico Comercial)](#1-motor-de-scoring-b2b)
2. [Lead Magnet — Descarga de Matriz PDF](#2-lead-magnet--descarga-de-matriz-pdf)
3. [Flujo de Onboarding y Firma del MSA](#3-flujo-de-onboarding-y-firma-del-msa)
4. [Diagrama de Flujo General](#4-diagrama-de-flujo-general)

---

## 1. Motor de Scoring B2B

**Ruta:** `[lang]/(funnels)/diagnostico-comercial`
**Componente:** `app/[lang]/(funnels)/diagnostico-comercial/page.tsx`
**Tabla Supabase:** `leads_b2b`

### 1.1 Descripción

El Motor de Scoring es un funnel de captación de leads B2B de alta cualificación. Presenta un cuestionario de 3 preguntas que mide el nivel de fricción operativa de una empresa, genera un score, y envía el resultado junto con los datos de contacto del prospecto directamente a WhatsApp de Oscar.

### 1.2 Arquitectura del Flujo

```
┌─────────────────────────────────────────────────────────┐
│  PASO 1: Cuestionario (3 preguntas × 3 opciones)        │
│                                                         │
│  P1: ¿Cómo gestionás cotizaciones?         → 0 / 1 / 3 │
│  P2: ¿Cuánto tiempo emitís un presupuesto? → 0 / 1 / 3 │
│  P3: ¿Cómo captás y seguís prospectos?     → 0 / 1 / 3 │
│                                                         │
│  Score total: 0–9 puntos                                │
├─────────────────────────────────────────────────────────┤
│  PASO 2: Resultado + Formulario de Contacto             │
│                                                         │
│  Score 7–9  → "Nivel Crítico"   (rose)                 │
│  Score 3–6  → "Nivel Moderado"  (amber)                │
│  Score 0–2  → "Nivel Optimizado"(emerald)              │
│                                                         │
│  Campos: Nombre · Empresa · WhatsApp (con código país)  │
├─────────────────────────────────────────────────────────┤
│  INTERCEPCIÓN SILENCIOSA → Supabase                     │
│  Envío del payload → WhatsApp (window.open)             │
└─────────────────────────────────────────────────────────┘
```

### 1.3 Motor de Scoring — Tabla de Puntuación

| Pregunta | Opción A (Manual) | Opción B (Mixto) | Opción C (Sistema) |
|----------|-------------------|-------------------|---------------------|
| P1: Gestión de cotizaciones | Excel/manual → **3 pts** | Google Sheets → **1 pts** | Sistema propio/CRM → **0 pts** |
| P2: Tiempo de emisión | >1 hora → **3 pts** | 15–60 min → **1 pts** | <5 min → **0 pts** |
| P3: Captación de prospectos | WhatsApp desordenado → **3 pts** | CRM básico → **1 pts** | Flujo automatizado → **0 pts** |

### 1.4 Intercepción Silenciosa — Supabase

En `handleSubmitContact()`, el componente realiza un `try/catch` con inserción a Supabase **antes** de abrir WhatsApp:

```typescript
try {
  await supabase.from("leads_b2b").insert({
    nombre: nombre.trim(),
    empresa: empresa.trim(),
    whatsapp: `+${digits}`,
    score,
    nivel: nivelLabel,        // "Nivel Crítico" | "Nivel Moderado" | "Nivel Optimizado"
    created_at: new Date().toISOString(),
  });
} catch (err) {
  console.error("[leads_b2b] Error capturando lead:", err);
}
```

**Columnas de `leads_b2b`:**

| Columna      | Tipo      | Descripción                          |
|--------------|-----------|--------------------------------------|
| `nombre`     | text      | Nombre completo del prospecto        |
| `empresa`    | text      | Razón social de la empresa           |
| `whatsapp`   | text      | Número con código país (+595...)     |
| `score`      | integer   | Puntuación total (0–9)               |
| `nivel`      | text      | Label del nivel de fricción          |
| `created_at` | timestamp | Fecha/hora de la captación           |

**Nota de diseño:** La inserción a Supabase es *fire-and-forget*. Si falla, el flujo continúa igualmente hacia WhatsApp. El lead siempre llega al canal de WhatsApp; Supabase es un espejo de datos para CRM.

### 1.5 Envío del Payload a WhatsApp

Después de la inserción (o si falla), en el bloque `finally`:

1. Se construye el mensaje con formato markdown de WhatsApp:

```
Hola Oscar, realicé el diagnóstico B2B de AYCweb.

📊 Mi nivel de fricción operativa es *Nivel Crítico* (9/9).
👤 Nombre: Juan Pérez
🏢 Empresa: Distribuidora Norte S.A.
📱 WhatsApp: +595985864209

Quiero agendar una conversación para evaluar encaje.
```

2. Se genera el link con `buildWhatsAppLink(message)` → `https://wa.me/{number}?text={encoded}`
3. Se intenta abrir en nueva ventana con `window.open(url, "_blank", "noopener,noreferrer")`
4. **Fallback anti-popup:** Si el navegador bloquea la ventana emergente, se muestra un botón manual con el link directo.

### 1.6 Dependencias Clave

| Archivo | Rol |
|---------|-----|
| `lib/supabaseClient.ts` | Cliente Supabase singleton |
| `lib/services/whatsapp-link.ts` | Constructor de links wa.me |
| `lib/config/contacto.ts` | Fuente única del número WhatsApp |

---

## 2. Lead Magnet — Descarga de Matriz PDF

**Ruta:** Home → sección "Herramientas Operativas Abiertas"
**Componentes:** `HerramientasSection.tsx` + `LeadMagnetModal.tsx`
**Tabla Supabase:** `leads_magnet`

### 2.1 Descripción

El Lead Magnet ofrece la "Matriz de Cotización de Alta Conversión" — un PDF gratuito que resuelve un problema concreto del ICP (Ideal Customer Profile): estructurar presupuestos B2B profesionales. La descarga está condicionada al registro de nombre y email, capturando leads de bajo fricción.

### 2.2 Arquitectura del Flujo

```
┌─────────────────────────────────────────────────────────┐
│  HOME → HerramientasSection (grid de 3 herramientas)    │
│                                                         │
│  ┌─────────────────────────────────────────────┐        │
│  │ Tarjeta "Matriz de Cotización PDF"          │        │
│  │ href="#matriz-pdf"                          │        │
│  │ onClick → e.preventDefault() + setModalOpen │        │
│  └─────────────────────────────────────────────┘        │
│         ↓ (click)                                       │
│  ┌─────────────────────────────────────────────┐        │
│  │ LeadMagnetModal (Dialog)                    │        │
│  │                                             │        │
│  │  1. Formulario: Nombre + Email              │        │
│  │  2. Validación client-side                  │        │
│  │  3. Insert → leads_magnet (Supabase)        │        │
│  │  4. triggerDownload() → PDF forzado         │        │
│  │  5. Auto-close modal (2.5s)                 │        │
│  └─────────────────────────────────────────────┘        │
└─────────────────────────────────────────────────────────┘
```

### 2.3 Trigger del Modal

En `HerramientasSection.tsx`, la tarjeta con `href="#matriz-pdf"` intercepta el click:

```typescript
function handleClick(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  if (href === "#matriz-pdf") {
    e.preventDefault();      // No navegar
    setModalOpen(true);      // Abrir modal
  }
}
```

El modal se renderiza al final del componente:

```tsx
<LeadMagnetModal open={modalOpen} onOpenChange={setModalOpen} />
```

### 2.4 LeadMagnetModal — Flujo Interno

**Archivo:** `components/tools/LeadMagnetModal.tsx`

**Paso 1 — Formulario:**
- Campo: Nombre (obligatorio, trim)
- Campo: Email (obligatorio, validación regex `^[^\s@]+@[^\s@]+\.[^\s@]+$`)
- Validación inline con mensajes de error

**Paso 2 — Submit:**

```typescript
async function handleSubmit(e: React.FormEvent) {
  e.preventDefault();
  // ... validación ...
  setSubmitted(true);

  try {
    await supabase.from("leads_magnet").insert({
      nombre: nombre.trim(),
      email: email.trim(),
      recurso: "Matriz de Cotización PDF",
      created_at: new Date().toISOString(),
    });
  } catch (err) {
    console.error("[leads_magnet] Error capturando lead:", err);
  } finally {
    setSuccess(true);         // Mostrar estado de éxito
    triggerDownload();        // Forzar descarga del PDF
    setTimeout(() => handleOpenChange(false), 2500);  // Auto-close
  }
}
```

**Paso 3 — Descarga Forzada del PDF:**

```typescript
function triggerDownload() {
  const a = document.createElement("a");
  a.href = "/docs/Matriz-Cotizacion.pdf";
  a.download = "Matriz-Cotizacion-AYCweb.pdf";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
```

La descarga se ejecuta **siempre** (bloque `finally`), independientemente de si la inserción a Supabase falla.

### 2.5 Columnas de `leads_magnet`

| Columna      | Tipo      | Descripción                          |
|--------------|-----------|--------------------------------------|
| `nombre`     | text      | Nombre completo del lead             |
| `email`      | text      | Email del lead                       |
| `recurso`    | text      | Identificador del recurso descargado |
| `created_at` | timestamp | Fecha/hora de la captación           |

### 2.6 PDF Entregable

- **Archivo:** `public/docs/Matriz-Cotizacion.pdf`
- **Nombre de descarga:** `Matriz-Cotizacion-AYCweb.pdf`
- **Tipo:** Plantilla base para estructurar presupuestos B2B de alta conversión

---

## 3. Flujo de Onboarding y Firma del MSA

**Ruta:** `[lang]/onboarding`
**Componentes:** `onboarding/page.tsx` + `ContratoMarcoClient.tsx`
**Canal de cierre:** WhatsApp (envío de comprobante + contrato firmado)

### 3.1 Descripción

La página de Onboarding es el punto final del embudo B2B. Solo se accede después de completar el diagnóstico comercial o por activaciones express acordadas. Presenta tres riel de pago y el MSA (Master Service Agreement) para firma.

### 3.2 Arquitectura del Flujo

```
┌─────────────────────────────────────────────────────────┐
│  SECCIÓN 1: Tarjeta de Confianza Institucional          │
│  Foto de Oscar · RUC 4499507-5 · DNIT verificado        │
├─────────────────────────────────────────────────────────┤
│  SECCIÓN 2: Rieles de Pago (3 opciones)                 │
│                                                         │
│  🇵🇾 Transferencia Local (PYG)                          │
│     QR CI Ueno / Alias Cel Itaú                         │
│     → Botón "Ya transferí — Enviar comprobante"         │
│       → wa.me/?text=Hola Oscar. Acabo de hacer la       │
│         transferencia inicial...                         │
│                                                         │
│  🌎 Banca Internacional (USD)                           │
│     Datos protegidos (Swift previa validación)          │
│     → Botón "Solicitar cuenta USD"                      │
│       → wa.me/?text=Hola Oscar. Quiero los datos...     │
│                                                         │
│  ⚡ Cripto (USDT TRC20)                                │
│     QR wallet TRC20                                     │
│     → Botón "Enviar Hash (TXID)"                        │
│       → wa.me/?text=Hola Oscar. Acabo de transferir...  │
├─────────────────────────────────────────────────────────┤
│  SECCIÓN 3: Contrato Marco (MSA)                        │
│  Caja de lectura scrollable del contrato                │
│  → Botón "Descargar Contrato en PDF"                    │
│  → Botón "Enviar Contrato Firmado" (WhatsApp)           │
├─────────────────────────────────────────────────────────┤
│  SECCIÓN 4: Metodología (IA + Profesionales)            │
│  Agentes IA + Coding Agents + Supervisor Profesional    │
└─────────────────────────────────────────────────────────┘
```

### 3.3 Rieles de Pago — Detalle

| Riel | Moneda | Destino | CTA WhatsApp |
|------|--------|---------|--------------|
| Transferencia Local | PYG | CI Ueno: `4499507` / Itaú: `0985864209` (Cta: `720601573`) | "Ya transferí — Enviar comprobante" |
| Banca Internacional | USD | Datos por WhatsApp previa validación | "Solicitar cuenta USD" |
| Cripto | USDT TRC20 | `TLUzuQDLjVwp4UDFAEFuypw5LmFf1K1PRQ` | "Enviar Hash (TXID)" |

**Nota de seguridad:** La cuenta USD se provee únicamente previa validación del cliente, nunca se exone en la UI.

### 3.4 El Contrato Marco (MSA) — Caja de Lectura

En la sección "Paso 2: Firma del Contrato Marco (MSA)", se renderiza:

1. **Caja de lectura scrollable** (`max-h-96 overflow-y-auto`) con el texto completo del contrato:
   - Cláusula 1: Objeto del Contrato (MVP, suscripción 12 meses)
   - Cláusula 2: Estructura Financiera (setup + mantenimiento mensual)
   - Cláusula 3: Reportes Quincenales
   - Cláusula 4: Salida a los 12 Meses y Pérdida de Derechos sobre el Código
   - Cláusula 5: Confidencialidad

2. **Botón de descarga PDF:**
   ```html
   <a href="/docs/Contrato-Marco-AYCweb.pdf" download>
     📄 Descargar Contrato en PDF
   </a>
   ```

3. **Botón de envío por WhatsApp:**
   ```html
   <a href="https://wa.me/{number}?text=Hola Oscar, ya leí y firmé el Contrato Marco. Te adjunto el PDF para iniciar el despliegue de mi infraestructura.">
     📲 Enviar Contrato Firmado
   </a>
   ```

### 3.5 ContratoMarcoClient — Versión Interactiva

**Archivo:** `app/[lang]/(marketing)/contrato-marco/ContratoMarcoClient.tsx`

Componente client-side que renderiza el contrato completo con casillas interactivas de selección:

| Cláusula | Selección Interactiva |
|----------|-----------------------|
| Cláusula 1: Plan | Starter ($60) / Business ($900) / Enterprise ($1800) |
| Cláusula 2: Pago del Setup | Ejecución por Hitos (20/30/20/30) / Fast-Track (100%) |
| Cláusula 3: Canon mensual | $15/mes / $30/mes / $45/mes |

**Función de impresión:** `window.print()` con estilos `@media print` que ocultan UI global, nav, footer, y ajustan márgenes para exportación a PDF limpia.

### 3.6 Dependencias Clave

| Archivo | Rol |
|---------|-----|
| `lib/config/contacto.ts` | Número WhatsApp + mensajes pre-armados |
| `lib/config/precios.ts` | Datos de planes y precios |
| `lib/config/legal.ts` | Datos legales (RUC, razón social, dirección) |
| `public/docs/Contrato-Marco-AYCweb.pdf` | PDF descargable del contrato |

---

## 4. Diagrama de Flujo General

```
                        ┌──────────────────┐
                        │   VISITANTE      │
                        │   (Home AYCweb)  │
                        └────────┬─────────┘
                                 │
                    ┌────────────┼────────────┐
                    ▼            ▼            ▼
            ┌──────────┐ ┌──────────┐ ┌──────────┐
            │SCORING   │ │LEAD      │ │ONBOARDING│
            │B2B       │ │MAGNET    │ │(post-    │
            │(diagnós- │ │(Matriz  │ │ aprobado)│
            │ tico)    │ │ PDF)    │ │          │
            └────┬─────┘ └────┬────┘ └────┬─────┘
                 │            │            │
     ┌───────────┘            │            │
     ▼                        ▼            ▼
┌─────────┐            ┌──────────┐  ┌──────────┐
│Supabase │            │Supabase  │  │WhatsApp  │
│leads_b2b│            │leads_    │  │(pago +   │
│(fire &  │            │magnet    │  │contrato) │
│ forget) │            │(fire &   │  └──────────┘
└────┬────┘            │ forget)  │
     │                 └────┬─────┘
     ▼                      ▼
┌─────────┐            ┌──────────┐
│WhatsApp │            │PDF       │
│(scoring │            │descarga  │
│+ datos) │            │forzada   │
└─────────┘            └──────────┘
```

---

## Métricas de Conversión por Funnel

| Funnel | Entry Point | Acción Final | Canal de Cierre |
|--------|-------------|--------------|-----------------|
| Scoring B2B | CTA "Solicitar Diagnóstico B2B" en Home | WhatsApp con score pre-cargado | WhatsApp |
| Lead Magnet | Tarjeta "Matriz de Cotización" en Herramientas | Descarga PDF + email capturado | PDF + Supabase |
| Onboarding | Post-aprobación comercial | Pago + contrato firmado por WhatsApp | WhatsApp |

---

## Notas para el Equipo

1. **Supabase es espejo, WhatsApp es canal real.** Todas las inserciones a Supabase son fire-and-forget. Si Supabase cae, el lead siempre llega por WhatsApp.

2. **Los funnels están en `app/[lang]/` (marketing) o `app/(funnels)/`.** Los funnels bajo `(funnels)` son rutas de experiencia completa sin layout de marketing (sin navbar/footer).

3. **No hay backend propio.** Toda la lógica de scoring, validación y envío ocurre en el cliente. Supabase actúa como base de datos pasiva.

4. **El Onboarding tiene una puerta de entrada implícita.** La página es pública, pero el copy deja claro que es "exclusivamente después de haber completado el diagnóstico comercial".

5. **El Contrato Marco tiene dos versiones:** Una resumida en la página de Onboarding y una interactiva completa en `/contrato-marco` con casillas seleccionables y exportación a PDF.