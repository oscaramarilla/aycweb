# kapso/ — Recepción automática de WhatsApp (AYC)

Workflows y funciones de [Kapso](https://kapso.ai) para el WhatsApp de AYC
(+595 985 864 209). Paquete **anidado y autónomo**: tiene su propio
`package.json` y `node_modules`, y **no forma parte del build de Next.js**
(`kapso/` está en el `exclude` de `tsconfig.json` y en los ignores de ESLint).

## Qué hace

Clasifica cada mensaje entrante, responde lo repetitivo/bajo riesgo con copy
**fijo** y deriva el resto a Oscar (handoff). La IA **solo clasifica**; nunca
genera texto hacia el cliente.

Cubre los dos tráficos del número: servicios digitales B2B (auditorías,
cotizadores, inversores) y negocio físico (muebles institucionales, metalurgia
y pintura, logística).

Arquitectura (ver `workflows/whatsapp-recepcion/workflow.ts`):

```
inbound_message → decide_prefill (función determinística, costo ~0)
                    ├─ prefills del sitio → respuesta fija → [pregunta] → handoff
                    └─ no_match → decide_ai (temp 0) → bucket → respuesta → handoff
```

## Estructura

```
functions/clasificar-prefill/   matcher determinístico (capa 1)
functions/sonda-eco/            diagnóstico TEMPORAL (borrar tras usar)
workflows/whatsapp-recepcion/   workflow principal (draft)
workflows/sonda-payload/        workflow de diagnóstico TEMPORAL (borrar)
test/run-matcher-tests.js       pruebas offline del matcher
test/casos.md                   matriz de pruebas (offline + E2E sandbox)
```

Los scripts del Platform API viven en
`../.agents/skills/automate-whatsapp/scripts/`.

## Setup (una vez)

1. Crear cuenta en app.kapso.ai y un proyecto ("AYC WhatsApp").
2. `npm install -g @kapso/cli` y `kapso login`.
3. Copiar `KAPSO_API_KEY` del dashboard a la raíz `.env.local`.
4. **Sandbox** (NO tocar el +595): `kapso setup` con `provision_phone_number: true`
   (número de prueba US). Confirmar con
   `kapso whatsapp numbers list --output json` y guardar su `phone_number_id`
   en `.env.local` como `KAPSO_PHONE_NUMBER_ID`.
5. Dentro de `kapso/`: `npm install`, luego `kapso link --project <id>` y
   `kapso pull` (esto genera `kapso.yaml` y `.kapso/`).

Variables (en la raíz `.env.local`, nunca en Vercel en fase 1):
`KAPSO_API_KEY`, `KAPSO_API_BASE_URL` (= `https://api.kapso.ai`),
`KAPSO_PHONE_NUMBER_ID` (sandbox), `KAPSO_DECIDE_MODEL_ID` (ver abajo).

## Flujo de trabajo

```bash
# 0) (una vez) descubrir la ruta del texto entrante — ver "Sonda" abajo
# 1) modelo del decide AI:
node ../.agents/skills/automate-whatsapp/scripts/list-provider-models.js
#    → copiar un provider_model_id económico a KAPSO_DECIDE_MODEL_ID
# 2) probar el matcher offline:
npm run test:matcher
# 3) compilar y pushear (draft, trigger inactivo):
kapso build
kapso push --dry-run
kapso push
# 4) pruebas E2E en sandbox (test/casos.md)
```

## Sonda (descubrir la ruta del texto entrante)

La ruta exacta donde Kapso entrega el texto del mensaje **no está documentada**.
Antes de confiar en el matcher:

1. `kapso push workflow sonda-payload` y activar su trigger al sandbox:
   `node ../.agents/skills/automate-whatsapp/scripts/list-triggers.js <id>`
   `... /update-trigger.js --trigger-id <tid> --active true`
2. Enviar un WhatsApp de prueba al número sandbox.
3. `... /list-executions.js <workflow_id>` → `... /get-execution.js <exec_id>`
   y leer `vars._context`, `vars._flow_events`, `vars._payload_completo`.
4. Si el texto no llega por `context.message_text`, ajustar `extraerTexto()`
   en `functions/clasificar-prefill/index.js` y volver a correr `test:matcher`.
5. **Borrar** `workflows/sonda-payload/` y `functions/sonda-eco/`, y eliminarlos
   en remoto.

## Go-live (SOLO con confirmación explícita de Oscar)

> Hasta acá todo vive en **draft** y apunta al **sandbox**. Nada toca el +595.

1. Conectar el +595 985 864 209 con un setup link en modo **coexistencia**
   (`allowed_connection_types: ["coexistence"]`). La app de WhatsApp Business
   **sigue funcionando** (Oscar ve y responde todo desde la app). Ver
   `../.agents/skills/integrate-whatsapp/references/setup-links.md`.
   **NUNCA "dedicated" para el número real**: migra a API-only y se pierde la app.
2. Guardar el nuevo `phone_number_id` como `KAPSO_PHONE_NUMBER_ID_PROD` y apuntar
   el trigger de `whatsapp-recepcion` a ese id (editar `workflow.ts` o el trigger).
3. Activar el trigger y pasar el workflow a `active`.

## Kill switch (apaga todo en < 1 min, sin tocar el número)

```bash
node ../.agents/skills/automate-whatsapp/scripts/list-triggers.js <workflow_id>
node ../.agents/skills/automate-whatsapp/scripts/update-trigger.js \
  --trigger-id <trigger_id> --active false
```

Con el trigger inactivo, todos los mensajes entrantes los atiende Oscar
manualmente desde la app (coexistencia), como antes.

## Reglas de oro (fase 1)

- Solo se auto-responde lo repetitivo y de bajo riesgo + 1 pregunta calificadora.
- A humano siempre: negociación, descuentos, pagos, reclamos, enojo, ambigüedad,
  licitaciones/órdenes de compra, inversores (tier A prioritario), otros idiomas.
- La IA solo clasifica. El texto al cliente es copy fijo en `send_text`.
- NO se escribe en Supabase ni se llaman endpoints del sitio (eso es fase 2).
