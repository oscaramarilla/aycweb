# 🤖 AYCWEB - Guía de Colaboración Dev & IA

## 1. Objetivo de este Documento

Este archivo define el estándar de trabajo y la arquitectura para colaborar en el repositorio de **AYCweb** (ya sea por desarrolladores humanos o agentes de IA). El propósito principal es escalar el desarrollo sin romper la arquitectura, manteniendo el enfoque B2B del proyecto y la estricta separación de responsabilidades.

Cualquier mejora de código, copy o estructura **debe** respetar estas reglas.

---

## 2. Jerarquía de Documentación

Antes de proponer o ejecutar cambios, es obligatorio leer la documentación core:

1. `COMO-TRABAJAMOS.md` (Reglas de negocio y filosofía operativa).
2. `README.md` (Setup y comandos básicos).
3. `AYCWEB-COLABORACION-DEV-IA.md` (Este documento: arquitectura y estándares de código).

*Nota para IA:* En caso de contradicción entre documentos, **siempre prevalece `COMO-TRABAJAMOS.md`**.

---

## 3. Arquitectura del Proyecto (Strict Layering)

El repositorio utiliza Next.js 14+ (App Router) y está organizado bajo un patrón de capas estricto dentro del directorio `lib/`. **No se permite mezclar responsabilidades.**

### `lib/config/` (Fuente de la Verdad)
- **Rol:** Configuración estática y textos de negocio.
- **Contenido:** Textos comerciales, números de WhatsApp, listas de precios, promesas de valor, configuraciones por cliente/vertical.
- **Regla:** Es la única fuente de verdad para información variable. **Cero hardcoding** de datos comerciales en los componentes visuales.

### `lib/domain/` (Core de Negocio)
- **Rol:** Lógica de negocio pura e independiente del framework.
- **Contenido:** Reglas de cotización, cálculos de márgenes (ej. calculadoras B2B), validaciones y transformación de leads.
- **Regla:** Esta capa no sabe nada de React, UI, rutas ni componentes. Solo recibe datos, procesa y devuelve resultados.

### `lib/services/` (Infraestructura y Helpers)
- **Rol:** Funciones operativas y reutilizables.
- **Contenido:** Generadores de URLs para WhatsApp, integraciones con APIs externas, generación de PDFs, formateadores de moneda/fecha.
- **Regla:** Actúan como puente conectando `config` y `domain` con la capa de presentación.

### `app/` y `components/` (Capa de Presentación)
- **Rol:** Renderizado de UI (React / Tailwind CSS).
- **Contenido:** Páginas (Server y Client components), layouts, botones, tarjetas.
- **Regla:** Solo deben leer datos importados de `config`, `domain` o `services`. **Prohibido incluir lógica de negocio compleja aquí.**

---

## 4. Convenciones de Naming y Estructura

Al crear o refactorizar archivos, se debe respetar la siguiente estructura y nomenclatura:

```text
lib/
  config/
    clients/
      oriplast.ts       ← Configuración específica del cliente (ej. Industria)
      bianca.ts         ← Configuración específica del cliente (ej. Salud)
      lahaye.ts         ← Configuración específica del cliente (ej. Salud)
    site.ts             ← Datos globales AYCweb (nombre, RUC, contacto general)
    verticals.ts        ← Data genérica por industria (Salud, Metalúrgica, B2B)

  domain/
    quoter.ts           ← Reglas matemáticas de cotización/márgenes
    pdf.ts              ← Reglas de estructura para documentos
    leads.ts            ← Validaciones y scoring de clientes potenciales

  services/
    whatsapp.ts         ← Construcción dinámica de URLs (wa.me)
    pdf-generator.ts    ← Integración técnica con la librería PDF
    formatters.ts       ← Helpers visuales (monedas, fechas, strings)
```

## 5. Estándares obligatorios

- Usar formato `kebab-case` para nombres de archivo: `pdf-generator.ts`, nunca `pdfGenerator.ts` ni `PdfGenerator.ts`.
- Modularidad estricta: un archivo por dominio o cliente. No mezclar la configuración de Oriplast con la de los clientes del sector salud.
- Refactor preventivo: si un archivo supera las ~150 líneas, la IA o el desarrollador debe proponer su división en submódulos lógicos.

## 6. Reglas de Oro (Checklist Pre-Commit)

- **Cero Hardcoding:** No escribir textos, precios ni teléfonos fijos en `page.tsx` ni en componentes. Usar `config/`.
- **DRY en Config:** Si un dato (por ejemplo, porcentaje de descuento o RUC) se usa en dos o más lugares, debe vivir en `config/`.
- **UI "Tonta":** La capa `app/` está para mostrar e interactuar, no para tomar decisiones comerciales ni hacer cálculos complejos.
- **Dominio Puro:** La capa `domain/` está para calcular, validar y decidir.
- **Pensar antes de codear:** Antes de escribir la primera línea de código, definir mentalmente (o en el chat de la IA) la estructura, el flujo y el origen de los datos.
- **Validación final:** Asumir siempre que al terminar el cambio se correrá `npm run build`. Probar mentalmente el flujo de los CTAs (especialmente los enlaces a WhatsApp).

## 7. Protocolo para Refactorización y Mejoras de UI

Cuando una IA o un desarrollador reciba la tarea de mejorar un módulo existente, debe ejecutar este protocolo:

1. **Auditoría:** Identificar el archivo principal (ej: `app/(marketing)/servicios/page.tsx`).
2. **Extracción:** Revisar textos, métricas y promesas. Proponer mover todo dato duro a `config/`.
3. **Limpieza de Lógica:** Detectar condicionales complejos o cálculos matemáticos en la UI y sugerir moverlos a `domain/` o `services/`.
4. **Copywriting B2B:** Mantener el tono corporativo enfocado en resultados operativos concretos (ej: "Reducción de presupuestos de 2 horas a 45 segundos", no usar frases genéricas de "diseño web").
5. **Dependencias:** No agregar nuevas librerías al `package.json` sin una justificación de peso aprobada por el Director.

## 8. Prompts Recomendados para Agentes IA

- "Revisa este `page.tsx` y propón cómo extraer los textos comerciales y datos estáticos a la carpeta `config`, respetando la arquitectura estricta del repo en `AYCWEB-COLABORACION-DEV-IA.md`."
- "Detecto lógica de negocio en este componente de React. Sugiere una refactorización para moverla a `domain/quoter.ts` y usar `services` para la UI."
- "Mejora la claridad del copy de esta landing. Mantén la estructura visual, pero enfoca el texto en automatización y B2B, usando el caso de éxito de [Cliente X] configurado en `config/clients/`."
- "Crea el sistema base para el nuevo cliente. Antes de escribir código, explícame la estructura de archivos que crearás en `config`, `domain` y `app`."

## 9. Backlog de Mejoras Aprobadas

Usar esta sección como TO-DO list viva. Marcar con `[x]` al implementar en la rama principal.

⏳ Pendientes
- [ ] Extraer textos del hero (H1, subtítulo, bullets) de `app/(marketing)/page.tsx` a `config/site.ts`.
- [ ] Mover todas las lógicas de construcción de URLs de WhatsApp dispersas en componentes hacia `services/whatsapp.ts`.
- [ ] Unificar los números de teléfono de WhatsApp en un único lugar global dentro de `config/site.ts`.
- [ ] Construir un componente UI genérico para "Caso de Éxito", alimentado dinámicamente con los datos de `config/clients/oriplast.ts`.
- [ ] Crear bloque "Cómo trabajamos" (3 pasos de automatización) como componente reutilizable.

✅ Completadas
- (Espacio para documentar tareas finalizadas)

## 10. Notas de Contexto del Proyecto

- Tech Stack: Next.js 14+ (App Router), Node.js, TypeScript, Tailwind CSS, Vercel, Git.
- Conversión Principal: WhatsApp. Todos los botones de acción (CTAs) deben abrir la API de WhatsApp con un mensaje pre-formateado y dinámico basado en la intención del usuario.
- Posicionamiento Comercial: AYCweb no es una agencia de "diseño web". Es un proveedor de automatización operativa B2B, sitios web inteligentes, calculadoras de presupuestos integradas y portales de cliente.
- Mercado y Casos de Uso Activos:
  - Industrial/B2B: Oriplast (importación/exportación), Metal Mad (Calculadoras de presupuestos B2B automatizadas).
  - Salud/Profesionales: Dra. Bianca Amarilla (drabiancapy.com), Dr. Jose Lahaye (drjoselahaye.com).
- Métrica Insignia: "De 2 horas a 45 segundos por cotización" (Foco absoluto en la eficiencia operativa).

