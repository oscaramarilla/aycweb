# Cómo Trabajamos en AYCweb

> Documento de onboarding para desarrolladores, colaboradores y agentes IA.
> Última actualización: Abril 2026.

---

## Qué es AYCweb

AYCweb no es una agencia de diseño web. Es una fábrica de sistemas digitales B2B orientados a conversión, operación y escalabilidad.

Construimos activos digitales para PyMEs: cotizadores automáticos, landings de alta conversión, embudos conectados a WhatsApp y sistemas operativos que reemplazan Excel, papel y caos manual.

Nuestro diferenciador es que cada proyecto se construye sobre una arquitectura estandarizada con lógica de negocio centralizada, resiliencia operativa y cierre comercial directo por WhatsApp. Eso no lo hace nadie más en Paraguay a precio de PyME.

---

## La idea central

Sacamos de la cabeza del operador todo lo repetible del proceso y lo convertimos en sistema: reglas maestras, contexto comercial, arquitectura, servicios reusables, configuración por cliente y flujo de QA.

En vez de empezar cada proyecto desde cero, trabajamos sobre una base estandarizada que acelera producción y reduce errores.

La IA no reemplaza al desarrollador. La IA opera dentro de un marco que nosotros definimos. El desarrollador aporta criterio, arquitectura, validación y refinamiento. Lo que cambia es que el 70-80% repetible se produce con más velocidad y consistencia.

---

## Estructura del repositorio

```
aycweb/
├── .aycweb-context/              ← CEREBRO: contexto, reglas, SOPs
│   ├── 00-identidad-aycweb.md
│   ├── 01-arquitectura.md
│   ├── 03-sops.md
│   ├── templates/
│   └── clientes/
│       └── [nombre-cliente]/
│           └── brief.md
│
├── lib/                          ← MOTOR: lógica reusable
│   ├── config/                   ← Configuración por cliente
│   │   ├── client.ts                (mascotasPir.ts, metalMad.ts, motorAycweb.ts, etc.)
│   │   ├── brand.ts
│   │   └── seo.ts
│   ├── domain/                   ← Lógica de negocio pura
│   │   ├── cotizadorMuebles.ts
│   │   ├── cotizadorLogistico.ts
│   │   └── ...
│   ├── services/                 ← Servicios reusables
│   │   ├── whatsappBuilderService.ts
│   │   ├── pdfService.ts
│   │   └── ...
│   └── infrastructure/           ← Cache, circuit breaker, integraciones
│
├── app/                          ← MOSTRADOR: lo que el cliente ve
│   ├── page.tsx                     (home de aycweb.com)
│   ├── autoppto/
│   ├── flete/
│   ├── modulares-kingspan/
│   ├── motor-logistico/
│   ├── servicios/
│   ├── sectores/
│   ├── casos/
│   └── ...
│
├── components/                   ← Componentes visuales compartidos
├── context/                      ← Providers de React (si aplica)
├── public/                       ← Assets estáticos (logos, imágenes, QR)
├── aycweb-maestro.md             ← DOCUMENTO MADRE del sistema
└── package.json
```

### Las 3 capas herméticas

**1. Capa de Configuración (El Cerebro) — `lib/config/`**
Acá vive la verdad del negocio. Son archivos TypeScript planos con textos persuasivos, números de WhatsApp, servicios y promesas de valor. No saben de diseño, solo saben de ventas.

**2. Capa de Servicios y Dominio (El Motor) — `lib/services/` y `lib/domain/`**
Son los engranajes matemáticos y lógicos. El `whatsappBuilderService` agarra datos del cerebro y los transforma en URLs de conversión. Los archivos de `domain/` calculan precios, márgenes y reglas de negocio. No saben qué es un botón ni qué es el color azul.

**3. Capa de Presentación (El Mostrador) — `app/`**
Son cascarones visuales. Componentes React + Tailwind que no tienen texto propio ni toman decisiones. Leen de la Capa de Configuración y la dibujan en pantalla.

---

## Reglas de oro

### 1. No hardcodear datos variables en componentes

Mal:
```tsx
const whatsappNumber = "595985864209";
```

Bien:
```tsx
import { clientConfig } from "@/lib/config/client";
const whatsappNumber = clientConfig.whatsapp;
```

Si un dato aparece en más de un lugar del UI, debe venir de una sola fuente.

### 2. Contexto primero, código después

Nunca arrancar con código. Siempre arrancar leyendo:
1. `aycweb-maestro.md`
2. `.aycweb-context/01-arquitectura.md`
3. `.aycweb-context/03-sops.md`
4. El brief del cliente

### 3. Plan primero, acción después

Antes de generar cualquier archivo, pedir estructura, archivos a tocar, riesgos y qué se puede reutilizar. Después ejecutar.

### 4. Un objetivo por sesión de trabajo

No mezclar arquitectura + copy + frontend + QA en un solo bloque. Trabajar por fases:
- Fase comercial: promesa, CTA, beneficios, FAQ, tono
- Fase visual: hero, secciones, cards, formulario, responsive
- Fase lógica: domain, services, config, cálculo, builders
- Fase QA: coherencia, WhatsApp, SEO, mobile, build

### 5. Todo lo reusable sube al sistema madre

Si hoy resolviste algo que probablemente vuelva a aparecer:
- Una función → `lib/services/`
- Una regla → `.aycweb-context/03-sops.md`
- Un patrón → `templates/`
- Una convención → `.aycweb-context/01-arquitectura.md`

La experiencia no se pierde, se convierte en infraestructura.

### 6. La IA no decide la estrategia sola

La IA produce. El humano define: promesa, mercado, cierre, prioridad comercial y criterio final de calidad.

### 7. Nunca deploy por fe

Antes de subir: `npm run build` pasa, se ve bien en móvil, el CTA funciona, los datos son coherentes, los WhatsApp abren con el mensaje correcto.

---

## Flujo de trabajo diario

### Inicio del día

1. Abrir el repo
2. Revisar qué cliente o vertical se trabaja hoy
3. Revisar `aycweb-maestro.md`
4. Definir la tarea concreta (no "mejorar la landing", sino "crear hero y CTA de modulares-kingspan")

### Producción

1. **Brief**: si es cliente nuevo, crear `.aycweb-context/clientes/[nombre]/brief.md`
2. **Plan**: pedir a la IA estructura antes de código
3. **Generación**: producir por capa (copy → visual → lógica)
4. **Revisión**: `npm run dev` y revisar en navegador como director
5. **Corrección**: ajustes quirúrgicos, no rehacer todo

### Cierre del día

1. `npm run build` — debe pasar
2. Revisar links, responsive, WhatsApp
3. Subir mejoras reutilizables al sistema madre
4. Commit con formato: `feat:`, `fix:`, `refactor:`, `docs:`

---

## Cómo entra un cliente nuevo

### Paso 1 — Crear el brief

Crear archivo en `.aycweb-context/clientes/[nombre]/brief.md` con:
- Nombre comercial y rubro
- Problema que resuelve
- Oferta principal
- WhatsApp
- Ubicación y horarios
- Diferenciador (en sus palabras)
- Servicios completos
- Prueba social (Google rating, testimonios)

### Paso 2 — Crear la configuración

Crear `lib/config/[nombre].ts` con los datos del brief estructurados en TypeScript. Este archivo es la fuente única de verdad. Todo componente lee de acá.

### Paso 3 — Generar copy

Usando el brief y la voz de marca, generar los textos: hero, servicios, FAQ, mensajes de WhatsApp, SEO.

### Paso 4 — Construir la interfaz

Crear `app/[nombre]/page.tsx` que consuma la config y el copy. Usar componentes existentes cuando sea posible. Mobile-first.

### Paso 5 — Conectar lógica (si aplica)

Si hay cotizador, crear el archivo de dominio en `lib/domain/` con tipos, cálculo puro y reglas de negocio separadas.

### Paso 6 — QA

Verificar: datos coherentes contra config, WhatsApp links funcionando, formulario no duplicado, responsive en 375px, build limpio.

### Paso 7 — Deploy y entrega

Push a Vercel, verificar en producción, enviar mensaje de entrega al cliente por WhatsApp.

---

## Cómo hablarle a la IA dentro del repo

### Mal
```
"haceme una landing poderosa"
```

### Bien
```
"Leé aycweb-maestro.md y 01-arquitectura.md.
Leé el brief del cliente en .aycweb-context/clientes/modulares-kingspan/brief.md.
No generes código todavía.
Proponé: estructura de la landing, mensaje principal, secciones necesarias,
CTA y qué partes pueden reutilizar servicios existentes."
```

### Para correcciones
No decir "mejoralo". Decir:
```
"Afilá el hero para sonar más industrial y menos genérico.
Cambiá el CTA principal a 'Solicitar Cotización'.
Agregá una sección 'Aplicaciones frecuentes'.
No toques la estructura general."
```

### Para refactoring
```
"Leé aycweb-maestro.md y 01-arquitectura.md.
Refactorizá app/modulares-kingspan/page.tsx para que los datos variables
(WhatsApp, títulos, beneficios, CTA y textos comerciales)
salgan de lib/config/client.ts.
No cambies el diseño general.
Mantené whatsappBuilderService como servicio reusable."
```

---

## Roles dentro del sistema

### Arquitecto (Oscar / Senior)
- Arquitectura, producto, reglas, QA final, decisión comercial
- Crea servicios, refactoriza, separa capas, diseña dominio
- Define qué es reusable y qué sube al sistema madre

### Frontend (Developer / IA)
- Secciones, cards, páginas, responsive, CTA visual
- Consume de `lib/config/` y `lib/domain/`, nunca inventa datos
- Mobile-first, Tailwind, Server Components por defecto

### Comercial (Oscar / IA)
- Hero, subtítulo, FAQs, mensajes WhatsApp, SEO
- Adapta tono al rubro del cliente
- Nunca usa "tecnología de punta" ni frases vacías

### QA (Todos)
- Consistencia de datos contra config
- WhatsApp links funcionando
- Formularios no duplicados
- Responsive en 375px
- `npm run build` limpio

No mezclar estos roles en un solo prompt si se quiere calidad alta.

---

## Qué hace cada archivo clave

| Archivo | Función |
|---------|---------|
| `aycweb-maestro.md` | Documento madre. Reglas globales, pilares, patrones |
| `.aycweb-context/00-identidad-aycweb.md` | Quién es AYCweb, posicionamiento, voz |
| `.aycweb-context/01-arquitectura.md` | Stack, estructura, convenciones técnicas |
| `.aycweb-context/03-sops.md` | Procedimientos operativos estándar |
| `lib/config/[cliente].ts` | Fuente única de verdad del cliente |
| `lib/domain/[módulo].ts` | Lógica de negocio pura (cálculos, reglas) |
| `lib/services/whatsappBuilderService.ts` | Genera URLs de WhatsApp con mensaje |
| `app/[vertical]/page.tsx` | Lo que el usuario final ve |

---

## Qué NO hacer

- No pegar lógica de negocio en `page.tsx`
- No hardcodear datos del cliente en componentes
- No saltarse el contexto (brief + maestro) antes de producir
- No usar la IA como tragamonedas de código
- No mezclar varios roles en un solo prompt
- No deployar sin verificar WhatsApp, responsive y build
- No dejar conocimiento nuevo enterrado en una página sin subirlo al sistema

---

## Qué SÍ hacer

- Leer contexto antes de actuar
- Pedir plan antes de código
- Trabajar por fases (comercial → visual → lógica → QA)
- Centralizar datos variables en `lib/config/`
- Reutilizar servicios existentes antes de crear nuevos
- Subir cada aprendizaje al sistema madre
- Cerrar cada día con build limpio y QA visual

---

## Por qué funciona

Este sistema resuelve cinco problemas:

1. **Estandarización**: cada proyecto parte de un marco claro, no de cero.
2. **Velocidad**: patrones probados se reutilizan en vez de reinventarse.
3. **Calidad consistente**: menos errores de datos, CTAs rotos y copy genérico.
4. **Separación de responsabilidades**: arquitectura, frontend, copy y QA no se mezclan.
5. **Escalabilidad**: el costo marginal por cliente nuevo baja porque el motor es el mismo.

---

## El mensaje central

No automatizamos por moda. Convertimos conocimiento en sistema para reducir fricción, bajar errores y hacer viable un modelo de producción escalable.

AYCweb no compite por hacer más ruido.
AYCweb compite por construir sistemas digitales que funcionan.
