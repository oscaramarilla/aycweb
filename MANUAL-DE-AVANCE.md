# Manual de Avance — AYCweb

> Documento vivo. Cada vez que se completa un hito, se marca y se agrega el siguiente.
> No es una lista de deseos. Es una ruta de ejecución con prioridades claras.

---

## Estado actual del sistema

### Lo que ya funciona
- Repositorio Next.js 16 con Turbopack operativo
- Estructura de 4 capas implementada: `lib/config/`, `lib/domain/`, `lib/services/`, `app/`
- `whatsappBuilderService.ts` como servicio reusable en producción
- `cotizadorMuebles.ts` con interfaces tipadas (ParametrosCotizacion, ResultadoCotizacion)
- `cotizadorLogistico.ts` en dominio
- Configs por cliente: metalMad.ts, mascotasPir.ts, motorAycweb.ts
- `.aycweb-context/` con documentos maestros (00-identidad, 01-arquitectura, 03-sops)
- `aycweb-maestro.md` como cerebro operativo
- `COMO-TRABAJAMOS.md` como onboarding
- Verticales activas: home, autoppto, flete, modulares-kingspan, motor-logístico, servicios, sectores, casos
- aycweb.com en producción con deploy a Vercel
- drabiancapy.com en producción con mejoras aplicadas

### Lo que falta migrar
- Lógica de PDF atrapada dentro de `page.tsx` en autoppto → mover a `lib/services/pdfBuilderService.ts`
- WhatsApp hardcodeados en algunas páginas antiguas → consumir de `lib/config/`
- Copy hardcodeado en componentes → centralizar en configs o archivos de contenido
- Cotizador de muebles con interfaz todavía básica → mejorar UX manteniendo motor separado

---

## Prioridades de migración

Ordenadas por impacto inmediato. Hacer de arriba hacia abajo.

### Prioridad 1 — Extraer PDF a servicio

**Qué**: Mover toda la lógica de `jsPDF` + `autoTable` de `app/autoppto/page.tsx` a `lib/services/pdfBuilderService.ts`.

**Por qué**: Es el caso más claro de lógica atrapada en presentación. Viola la regla de oro. Y es el servicio que más se va a reutilizar en el Motor AYCweb.

**Cómo**: Usar el prompt de refactorización de COMO-TRABAJAMOS.md. Fase 1: crear servicio. Fase 2: refactorizar página para que solo llame al servicio.

**Criterio de éxito**: `page.tsx` no importa jsPDF. El PDF se genera llamando a una función de `lib/services/`. El resultado visual es idéntico.

### Prioridad 2 — Unificar WhatsApp en todas las páginas

**Qué**: Auditar todas las páginas de `app/` y reemplazar cualquier WhatsApp hardcodeado por llamadas a `whatsappBuilderService.ts` consumiendo el número de `lib/config/`.

**Por qué**: Evitar el error de Dra. Bianca (dos números distintos en la misma web). Si mañana cambia un número, se cambia en un solo lugar.

**Cómo**:
```bash
grep -rn "wa.me\|whatsapp\|595" app/ --include="*.tsx" --include="*.ts"
```
Revisar cada resultado. Si el número no viene de config, migrar.

**Criterio de éxito**: Cero instancias de números de WhatsApp literales en `app/`.

### Prioridad 3 — Crear `lib/services/pdfBuilderService.ts` genérico

**Qué**: Una vez migrado el PDF de autoppto, generalizarlo para que cualquier vertical pueda generar PDFs pasando datos y configuración.

**Por qué**: Esto es el corazón del Motor AYCweb. Si cada nuevo cliente del Motor puede generar PDFs con su marca, logo y datos sin código nuevo, el costo marginal baja a casi cero.

**Interfaz objetivo**:
```typescript
interface PdfConfig {
  empresa: { nombre: string; ruc: string; direccion: string; telefono: string; logo?: string };
  titulo: string;
  items: Array<{ descripcion: string; cantidad: number; precioUnitario: number; subtotal: number }>;
  total: number;
  notas?: string;
}

function generarPdfPresupuesto(config: PdfConfig): void;
```

### Prioridad 4 — Crear config completa del Motor AYCweb

**Qué**: Definir `lib/config/motorAycweb.ts` con la estructura completa del producto SaaS: planes, precios, features por plan, comparativas.

**Por qué**: La landing de aycweb.com/os o /motor necesita datos centralizados para mostrar los planes y la comparativa contra competidores.

### Prioridad 5 — Template de onboarding para clientes del Motor

**Qué**: Crear en `.aycweb-context/templates/` un kit de activación rápida para nuevos clientes del Motor: brief simplificado, config base, página base, cotizador base.

**Por qué**: Cada nuevo cliente del Motor debería activarse en 2-4 horas, no en semanas.

---

## Roadmap del Motor AYCweb (producto SaaS)

### Fase 1 — MVP (actual → 2 semanas)

**Objetivo**: Tener un demo funcional del Motor para mostrar a prospectos.

- [ ] PDF como servicio genérico funcionando
- [ ] Landing del Motor en aycweb.com/motor con planes y comparativa
- [ ] Demo interactivo: cotizador real enlazado al motor de Metal Mad
- [ ] Caso de éxito visual: antes/después del proceso de cotización
- [ ] 3 planes definidos con precios: Básico (USD 50/mes), Pro (USD 100/mes), Enterprise (a medida)

### Fase 2 — Primeros clientes (semanas 3-6)

**Objetivo**: Activar 3-5 clientes reales del Motor.

- [ ] Kit de activación probado con al menos 2 clientes
- [ ] WhatsApp + PDF + Landing funcionando para cada uno
- [ ] Dashboard mínimo: cuántas cotizaciones se generaron por cliente
- [ ] Proceso de facturación mensual definido
- [ ] Feedback de clientes recopilado y absorbido al sistema

### Fase 3 — Escala (semanas 7-12)

**Objetivo**: 10-20 clientes activos con costo marginal bajo.

- [ ] Activación de nuevo cliente en menos de 4 horas
- [ ] Subdominios o dominios propios por cliente
- [ ] Reportes mensuales automáticos
- [ ] Blog SEO con 5+ artículos posicionando para "sistema de cotización Paraguay", "automatización PyME"
- [ ] Primer caso de expansión a Argentina (Clínica Autónoma 24/7)

---

## Deuda técnica a resolver

| Deuda | Dónde | Impacto | Urgencia |
|-------|-------|---------|----------|
| PDF atrapado en page.tsx | app/autoppto/ | Bloquea Motor SaaS | Alta |
| WhatsApp hardcodeados | Varias páginas | Riesgo de inconsistencia | Alta |
| Formulario duplicado en drabiancapy.com | drabiancapy.com | Afecta conversión | Media |
| Meta tags incompletos en algunas verticales | app/ varias | Afecta SEO | Media |
| Sin tests unitarios en domain | lib/domain/ | Riesgo en refactors | Baja (por ahora) |
| Sin CI/CD formal | Repo | Riesgo en deploy | Baja (por ahora) |

---

## Pipeline de clientes activos

### En producción
| Cliente | URL | Estado | Pendientes |
|---------|-----|--------|------------|
| AYCweb (propia) | aycweb.com | ✅ Live | Inyectar 3 pilares, mejorar casos |
| Dra. Bianca Amarilla | drabiancapy.com | ✅ Live | Diferenciador, testimonios, eliminar formulario duplicado, Google Maps |
| Metal Mad | metalmadeas.com | ✅ Live | Migrar cotizador a Motor genérico |

### En desarrollo
| Cliente/Vertical | Ruta | Estado | Siguiente paso |
|------------------|------|--------|----------------|
| Autoppto (cotizador muebles) | app/autoppto/ | 🔨 Activo | Extraer PDF a servicio |
| Motor Logístico | app/motor-logistico/ | 🔨 Activo | Conectar cotizador a WhatsApp |
| Modulares Kingspan | app/modulares-kingspan/ | 🔨 Activo | Brief completo, config, landing |
| Flete | app/flete/ | 🔨 Activo | Revisar integración con domain |

### En pipeline comercial
| Prospecto | Rubro | Estado | Siguiente acción |
|-----------|-------|--------|-------------------|
| Clínica Autónoma 24/7 | Salud (Argentina) | Planificado | Landing de producto + primer artículo SEO |
| Motor AYCweb (producto) | SaaS | En diseño | Terminar MVP, crear landing /motor |

---

## Protocolo de aprendizaje continuo

Cada vez que se termina un proyecto o se resuelve un problema nuevo, aplicar este ciclo:

**1. Detectar.** ¿Hubo un error que se repitió? ¿Un patrón que se podría reutilizar? ¿Un proceso que fue más lento de lo necesario?

**2. Extraer.** Sacar la solución del contexto específico del proyecto.

**3. Generalizar.** Convertirla en función, regla, template o convención.

**4. Absorber.** Subirla al lugar correcto del sistema madre:
- Código reusable → `lib/services/` o `lib/domain/`
- Regla operativa → `.aycweb-context/03-sops.md`
- Convención técnica → `.aycweb-context/01-arquitectura.md`
- Template → `.aycweb-context/templates/`
- Checklist → `COMO-TRABAJAMOS.md`

**5. Documentar.** Agregar una línea en este manual marcando qué se absorbió y cuándo.

---

## Hitos de la fábrica

| Hito | Señal de que se cumplió | Estado |
|------|-------------------------|--------|
| Separación de capas | `lib/` tiene config, domain y services funcionando | ✅ Cumplido |
| Cerebro operativo | `aycweb-maestro.md` + `.aycweb-context/` guían la producción | ✅ Cumplido |
| Primer servicio reusable | `whatsappBuilderService.ts` en producción | ✅ Cumplido |
| Primer dominio puro | `cotizadorMuebles.ts` sin dependencia de UI | ✅ Cumplido |
| Config por cliente | Múltiples archivos en `lib/config/` | ✅ Cumplido |
| Onboarding documentado | `COMO-TRABAJAMOS.md` listo | ✅ Cumplido |
| PDF como servicio | `pdfBuilderService.ts` genérico y reusable | ⬜ Pendiente |
| Motor AYCweb MVP | Landing + demo + planes + primer cliente | ⬜ Pendiente |
| 5 clientes del Motor | Facturando USD 250/mes recurrentes | ⬜ Pendiente |
| 20 clientes del Motor | Facturando USD 1.000/mes recurrentes | ⬜ Pendiente |
| Primer cliente Argentina | Clínica Autónoma operando en USD | ⬜ Pendiente |
| Equipo de 2-3 personas | Junior + senior usando el sistema | ⬜ Pendiente |

---

## Próxima sesión de trabajo

Cuando abras VS Code mañana, esto es lo que hay que hacer:

**1.** Leer este documento y ubicar dónde estás en las prioridades de migración.

**2.** Abrir Cline y ejecutar:

```
Leé COMO-TRABAJAMOS.md para entender la arquitectura de 4 capas.

Tu tarea: crear lib/services/pdfBuilderService.ts.

Extraé toda la lógica de jsPDF, autoTable, inyección de imágenes y guardado
que actualmente está en app/autoppto/page.tsx.

Exporta una función que reciba datos por parámetro:
- empresa (nombre, RUC, dirección, teléfono, logo)
- items (descripción, cantidad, precio, subtotal)
- total
- notas opcionales

Ningún dato duro hardcodeado en el servicio.
Después refactorizá page.tsx para que solo llame a este servicio.
Mantené la estética visual idéntica.

Regla de oro: El Mostrador solo dibuja. El Servicio ejecuta.
```

**3.** Verificar que el PDF se genera igual que antes. `npm run build`. Commit: `refactor: extract PDF generation to lib/services/pdfBuilderService.ts`.

**4.** Marcar Prioridad 1 como completada en este documento.

**5.** Pasar a Prioridad 2: auditar WhatsApp hardcodeados.

---

*Última actualización: Abril 2026*
*Siguiente revisión: después de completar Prioridad 1 (PDF como servicio)*
