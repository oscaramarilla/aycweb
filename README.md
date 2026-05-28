README para devs nuevos
1. Documento principal
En este repo usamos COMO-TRABAJAMOS.md como documento maestro.
Ahí se define arquitectura, reglas, flujo de trabajo y cómo se organiza el equipo; cualquier duda conceptual se revisa primero ahí.

2. Arquitectura del repo
El proyecto está dividido en 4 capas:

config
Configuración de negocio: textos, teléfonos de WhatsApp, precios, promesas, datos específicos por cliente/vertical.
Es la única fuente de verdad para información variable. No se hardcodea en componentes algo que ya exista acá.

domain
Lógica de negocio pura: cálculos, reglas comerciales, validaciones, transformaciones de datos.
No sabe nada de UI ni de rutas; recibe datos y devuelve datos.

services
Funciones reutilizables: armado de URLs de WhatsApp, generación de PDFs, formateos y helpers.
Conectan config/domain con la capa de presentación.

app y components
Capa visual (Next.js).
Solo leen datos de config/domain/services y dibujan la interfaz.
No deben contener lógica de negocio ni datos de cliente fijos.

3. Reglas clave
No hardcodear datos variables en page.tsx ni en componentes.

Si un dato se usa más de una vez, debe salir de config.

app es para mostrar, no para decidir.

domain es para calcular, no para dibujar.

services es para operaciones reutilizables que apoyan al dominio y a la UI.

Antes de codear: definir estructura y flujo; después recién escribir código.

4. Flujo para trabajar en una tarea nueva
Leer aycweb-maestro.md y COMO-TRABAJAMOS.md.

Ubicar el brief o la configuración del módulo/vertical que vas a tocar.

Revisar qué datos ya existen en config y reutilizarlos.

Si creás una landing nueva:

Crear o actualizar config en config/.

Crear la página en app/.

Usar componentes compartidos y servicios existentes.

Ejecutar npm run build y probar que el CTA/WhatsApp funcione bien.

5. Qué hay en este proyecto
Proyecto Next.js con enfoque B2B.

Varias landings/verticales (por ejemplo: flete, oscar, modulares-kingspan, etc.).

Cada vertical debe apoyarse en config, no en textos duros en la UI.

6. Explicación rápida para onboarding
“Este repo es una fábrica de sistemas B2B. Tiene una capa de datos/configuración, una capa de lógica de negocio, una capa de servicios reutilizables y una capa visual. COMO-TRABAJAMOS.md define el estilo y el workflow: no se codifica sin plan, no se repite información y la UI solo muestra lo que decide el dominio/configuración.”

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
# AYCWEB — Arquitectura Técnica y Guía de Contribución

**Versión:** 1.1 | **Última actualización:** Mayo 2026 | **Status:** Production

---

## 📋 Tabla de Contenidos

1. [Stack Tecnológico](#stack-tecnológico)
2. [Estructura de Carpetas](#estructura-de-carpetas)
3. [Patrones de Arquitectura](#patrones-de-arquitectura)
4. [Flujos de Datos](#flujos-de-datos)
5. [Guía de Contribución](#guía-de-contribución)
6. [Decisiones de Arquitectura](#decisiones-de-arquitectura)
7. [Escalabilidad y Roadmap](#escalabilidad-y-roadmap)

---

## 1. Stack Tecnológico

### Runtime & Framework
| Componente | Versión | Propósito |
|-----------|---------|----------|
| **Next.js** | 16.1.6 | Framework React con SSR, SSG, API routes y App Router |
| **React** | 19.2.3 | UI library con Server Components y hooks |
| **TypeScript** | 5.x | Type safety estricto en todo el codebase |
| **Tailwind CSS** | 4.x | Utility-first CSS optimizado con espacios de color OKLCH |
| **Radix UI / shadcn** | 1.4.3 | Componentes accesibles y personalizables |

### Persistencia & Integración
| Componente | Versión | Propósito |
|-----------|---------|----------|
| **Supabase** | 2.106.2 | PostgreSQL (Aislamiento de comentarios anónimos y webhooks) |
| **n8n** | Cloud | Orquestación de flujos, OpenAI y WhatsApp Business API |
| **jsPDF** | 4.2.0 | Generación de PDFs dinámicos en cliente (cotizaciones) |

### Herramientas de Desarrollo
| Componente | Versión | Propósito |
|-----------|---------|----------|
| **Vitest** | 4.1.7 | Testing automatizado de lógica de dominio y servicios |
| **ESLint** | 9.x | Linting y code quality |

### Build & Deployment
- **Hosting:** Vercel (Serverless functions + Edge, auto-deploy)
- **Dominios:** Squarespace (DNS management)
- **CDN:** Vercel Edge Network (optimización de imágenes y estáticos)
- **i18n:** Segmento dinámico `[lang]/` nativo de Next.js

---

## 2. Estructura de Carpetas

```text
aycweb/
├── app/                      # Next.js App Router
│   ├── [lang]/               # Segmento dinámico para i18n
│   │   ├── (marketing)/      # Grupo: rutas de exploración y contenido
│   │   │   ├── page.tsx      # Home multiidioma
│   │   │   ├── empresas/     
│   │   │   ├── obras/        # Portfolio con métricas de impacto
│   │   │   └── recursos/     # Librería B2B y Blog MDX
│   │   ├── (funnels)/        # Grupo: embudos de conversión directos
│   │   │   ├── diagnostico-comercial/ # Pre-calificación de leads
│   │   │   └── motor/demo/   # Demo interactiva del cotizador
│   │   └── (demos)/          # Demos técnicas aisladas
│   │       ├── aberturas/
│   │       ├── logística/
│   │       └── {...}
│   ├── api/                  # Server routes y Webhooks
│   │   └── submit-comment/   # POST comentarios anónimos a Supabase
│   ├── soluciones/           # Landings SEO programáticas por nicho
│   ├── globals.css           # Tailwind v4 globals + OKLCH variables
│   └── sitemap.ts            # Generación dinámica de sitemap.xml
│
├── components/               # Componentes React (UI)
│   ├── Navbar.tsx            # Navegación responsive
│   ├── obras/                # Tarjetas de impacto y portfolio
│   ├── soluciones/           # SolucionPageTemplate (SEO template)
│   ├── ui/                   # Floating FABs, Modals, Buttons
│   └── AnonymousCommentForm.tsx # Formulario interactivo del blog
│
├── lib/                      # Lógica de negocio core (No-UI)
│   ├── config/               # FUENTES ÚNICAS DE VERDAD (SSOT)
│   │   ├── contacto.ts       # WhatsApp numbers, plantillas de mensajes
│   │   ├── obras.ts          # Datos puros de portfolio y métricas
│   │   └── soluciones/       # Configuraciones de landings SEO
│   ├── services/             # Servicios de integración
│   │   ├── whatsapp-message.ts # Serialización y builder de wa.me
│   │   └── pdfBuilderService.ts # Motor de renderizado PDF
│   ├── domain/               # Motores de cálculo puros (testables)
│   └── i18n.ts               # Lógica de diccionarios e idiomas
│
├── public/                   # Assets estáticos
├── db/                       # Scripts SQL y esquemas de Supabase
├── vitest.config.ts          # Configuración de testing
└── next.config.ts            # Reglas de compilación y middleware