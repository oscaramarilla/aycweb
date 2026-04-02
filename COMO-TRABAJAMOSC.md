# Cómo Trabajamos en AYCweb

Lo que construimos no es un proyecto en Next.js con IA. Es una fábrica de software orientada a activos digitales B2B. Sacamos de la cabeza del operador todo lo repetible y lo convertimos en sistema: reglas maestras, contexto comercial, arquitectura, servicios reusables, configuración por cliente y flujo de QA.

La IA no reemplaza criterio técnico. Lo que hace este sistema es bajar fricción, capturar conocimiento y acelerar el 70-80% repetible del trabajo. El valor humano se mueve hacia arquitectura, control de calidad, estrategia y refinamiento.

---

## Principio rector

Cuatro capas, cuatro responsabilidades. Sin excepciones.

**Configuración define.** Todo dato variable del cliente (nombre, WhatsApp, dirección, servicios, colores, SEO) vive en `lib/config/`. Ningún componente inventa datos.

**Dominio decide.** Toda lógica de negocio (cálculos, reglas comerciales, validaciones) vive en `lib/domain/`. Pura matemática. No sabe qué es un botón.

**Servicios ejecutan.** Toda operación reutilizable (construir URL de WhatsApp, generar PDF, formatear precios) vive en `lib/services/`. Engranajes que conectan capas.

**Presentación muestra.** Todo lo visual (páginas, componentes, formularios) vive en `app/` y `components/`. Cascarones que leen de las capas anteriores y dibujan en pantalla.

Si algo no encaja en una de estas cuatro capas, probablemente no debería existir.

---

## Estructura del repositorio

```
aycweb/
├── aycweb-maestro.md             ← DOCUMENTO MADRE del sistema
├── COMO-TRABAJAMOS.md            ← Este documento
│
├── .aycweb-context/              ← CEREBRO: contexto, reglas, SOPs
│   ├── 00-identidad-aycweb.md
│   ├── 01-arquitectura.md
│   ├── 03-sops.md
│   ├── templates/
│   │   └── client-brief-template.md
│   └── clientes/
│       └── [nombre-cliente]/
│           └── brief.md
│
├── lib/                          ← MOTOR: lógica reusable
│   ├── config/                   ← Fuente única de verdad por cliente
│   │   ├── client.ts
│   │   ├── metalMad.ts
│   │   ├── mascotasPir.ts
│   │   └── motorAycweb.ts
│   ├── domain/                   ← Lógica de negocio pura
│   │   ├── cotizadorMuebles.ts
│   │   └── cotizadorLogistico.ts
│   ├── services/                 ← Servicios reusables
│   │   ├── whatsappBuilderService.ts
│   │   └── pdfBuilderService.ts
│   └── infrastructure/           ← Cache, circuit breaker
│
├── app/                          ← MOSTRADOR: lo que el usuario ve
│   ├── page.tsx                     (home aycweb.com)
│   ├── autoppto/
│   ├── flete/
│   ├── modulares-kingspan/
│   ├── motor-logistico/
│   ├── servicios/
│   ├── sectores/
│   └── casos/
│
├── components/                   ← Componentes visuales compartidos
└── public/                       ← Assets estáticos (logos, QR, imágenes)
```

### Resumen de capas

| Capa | Carpeta | Responsabilidad | Qué NO hace |
|------|---------|-----------------|-------------|
| Configuración | `lib/config/` | Define datos del cliente | No dibuja UI |
| Dominio | `lib/domain/` | Calcula y aplica reglas | No sabe de botones ni colores |
| Servicios | `lib/services/` | Ejecuta operaciones reutilizables | No toma decisiones de negocio |
| Presentación | `app/` + `components/` | Muestra en pantalla | No inventa datos ni calcula |

---

## Reglas de oro

**1. No hardcodear datos variables.** Si un dato aparece en más de un lugar del UI, debe venir de `lib/config/`. Un WhatsApp suelto en un `page.tsx` es deuda técnica inmediata.

**2. Contexto primero, código después.** Siempre leer `aycweb-maestro.md`, `.aycweb-context/01-arquitectura.md` y el brief del cliente antes de tocar una sola línea.

**3. Plan primero, acción después.** Pedir estructura, archivos a tocar, riesgos y reusabilidad antes de generar archivos.

**4. Un objetivo por sesión.** No mezclar arquitectura + copy + frontend + QA en un solo bloque. Trabajar por fases: comercial → visual → lógica → QA.

**5. Todo lo reusable sube al sistema madre.** Funciones a `lib/services/`, reglas a `.aycweb-context/03-sops.md`, patrones a `templates/`, convenciones a `01-arquitectura.md`. La experiencia no se pierde. Se convierte en infraestructura.

**6. La IA no decide la estrategia.** La IA produce. El humano define: promesa, mercado, cierre, prioridad comercial y criterio final.

**7. Nunca deploy por fe.** Sin verificar: build limpio, WhatsApp correcto, responsive probado, CTA funcionando.

---

## Flujo de trabajo diario

### Inicio
Abrir el repo como arquitecto, no como picador de código. Revisar qué cliente o vertical toca hoy. Leer `aycweb-maestro.md`. Definir una tarea concreta: no "mejorar la landing" sino "crear hero y CTA de modulares-kingspan".

### Producción por fases

**Fase comercial** — Promesa, CTA, beneficios, FAQ, tono. Resultado: copy listo.

**Fase visual** — Hero, secciones, cards, formulario, responsive. Resultado: página montada.

**Fase lógica** — Domain, services, config, cálculos, builders. Resultado: motor conectado.

**Fase QA** — Coherencia contra config, WhatsApp, SEO, mobile 375px, build. Resultado: aprobado o bloqueado.

### Cierre
`npm run build` debe pasar. Revisar en navegador real. Subir mejoras reutilizables al sistema madre. Commit con `feat:`, `fix:`, `refactor:`, `docs:`.

---

## Cómo entra un cliente nuevo

**1. Brief.** Crear `.aycweb-context/clientes/[nombre]/brief.md` con datos bloqueantes: nombre comercial, rubro, WhatsApp, dirección, horarios, servicios completos, diferenciador en sus palabras, prueba social. Sin brief con datos bloqueantes, no se arranca.

**2. Configuración.** Crear `lib/config/[nombre].ts` con datos estructurados en TypeScript. Este archivo es la fuente única de verdad.

**3. Copy.** Generar textos usando el brief y la voz de marca: hero, servicios, FAQ, mensajes de WhatsApp, metadata SEO.

**4. Interfaz.** Crear `app/[nombre]/page.tsx` que consuma config y copy. Usar componentes y servicios existentes. Mobile-first.

**5. Lógica.** Si hay cotizador, crear dominio en `lib/domain/` con tipos, cálculo puro y reglas de negocio separadas del UI.

**6. QA.** Verificar contra config: datos coherentes, WhatsApp correcto, formulario no duplicado, responsive 375px, build limpio.

**7. Deploy.** Push a Vercel, verificar en producción, enviar mensaje de entrega al cliente.

---

## Cómo hablarle a la IA

### Para crear algo nuevo

```
"Leé aycweb-maestro.md y 01-arquitectura.md.
Leé el brief del cliente en .aycweb-context/clientes/[nombre]/brief.md.
No generes código todavía.
Proponé: estructura de la landing, mensaje principal, secciones necesarias,
CTA y qué partes pueden reutilizar servicios existentes."
```

### Para correcciones quirúrgicas

```
"Afilá el hero para sonar más industrial y menos genérico.
Cambiá el CTA principal a 'Solicitar Cotización'.
Agregá una sección 'Aplicaciones frecuentes'.
No toques la estructura general."
```

### Para refactorizar arquitectura

```
"Leé COMO-TRABAJAMOS.md para entender la arquitectura de 4 capas.
Extraé el cálculo de precios de app/autoppto/page.tsx a lib/domain/.
Extraé la generación de PDF a lib/services/pdfBuilderService.ts.
La UI no debe calcular. La página solo consume resultados.
Respetá la regla: el Mostrador solo dibuja y captura, el Servicio ejecuta."
```

### Para migrar lógica atrapada en una página

```
"Leé COMO-TRABAJAMOS.md y el módulo actual.

Tu tarea en fases:

Fase 1 — Servicio (El Motor):
Crea lib/services/pdfBuilderService.ts.
Extrae toda la lógica de jsPDF, autoTable, inyección de imágenes y guardado.
Exporta una función que reciba datos (cliente, productos, imagenUrl, granTotal)
y genere el PDF. Ningún dato duro hardcodeado; todo viene por parámetro o config.

Fase 2 — Presentación (El Mostrador):
Refactorizá app/autoppto/page.tsx.
Mantené la estética visual, inputs y estados exactamente iguales.
Refactorizá handleGenerarPDF para que solo llame al nuevo servicio.

Regla de oro: El Mostrador solo dibuja y captura. El Servicio ejecuta."
```

---

## Roles y gobernanza

### Quién hace qué

| Rol | Persona | Responsabilidad |
|-----|---------|-----------------|
| Arquitecto | Oscar | Estructura, producto, reglas, decisión comercial |
| Frontend | Developer / IA | Páginas, componentes, responsive, CTA visual |
| Comercial | Oscar / IA | Hero, FAQs, WhatsApp, SEO, tono |
| QA | Todos | Consistencia, links, responsive, build |

### Quién aprueba qué

| Decisión | Aprueba |
|----------|---------|
| Arquitectura (nuevos módulos en domain, services, config) | Oscar |
| Copy comercial (hero, promesa, CTA, FAQ) | Oscar |
| Deploy a producción | Oscar |
| Cambios visuales dentro de patrones existentes | Developer con QA aprobado |
| Nuevas reglas en el sistema madre | Oscar |

Ningún deploy sale sin aprobación. Ninguna regla del sistema madre cambia sin revisión.

---

## Definition of Done

Una tarea se considera terminada cuando se cumplen TODOS estos puntos:

- [ ] `npm run build` pasa sin errores
- [ ] CTA principal probado (WhatsApp abre con mensaje correcto)
- [ ] Datos del cliente coherentes (verificados contra `lib/config/`)
- [ ] Responsive verificado en 375px y 1440px
- [ ] Lógica reusable extraída fuera del JSX (domain o services)
- [ ] No hay datos hardcodeados en componentes
- [ ] Formularios no duplicados, con validación y feedback post-envío
- [ ] Aprendizaje reusable absorbido al sistema madre
- [ ] Aprobación de Oscar para deploy a producción

---

## Qué NO hacer

- Pegar lógica de negocio en `page.tsx`
- Hardcodear WhatsApp, dirección o precios en componentes
- Saltarse el contexto antes de producir
- Usar la IA sin darle `aycweb-maestro.md` como contexto
- Mezclar varios roles (arquitectura + copy + QA) en un solo prompt
- Deployar sin verificar en móvil real
- Dejar conocimiento nuevo enterrado en una página sin subirlo al sistema

## Qué SÍ hacer

- Leer contexto antes de actuar
- Pedir plan antes de código
- Trabajar por fases
- Centralizar datos en `lib/config/`
- Reutilizar servicios existentes antes de crear nuevos
- Subir cada aprendizaje al sistema madre
- Cerrar cada día con build limpio y QA visual

---

## El mensaje central

No automatizamos por moda. Convertimos conocimiento en sistema para reducir fricción, bajar errores y hacer viable un modelo de producción escalable.

AYCweb no compite por hacer más ruido. AYCweb compite por construir sistemas digitales que funcionan.
