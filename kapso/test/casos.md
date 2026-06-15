# Casos de prueba — whatsapp-recepcion

Dos niveles:

- **Matcher (capa 1, offline):** `npm run test:matcher`. Verifica la función
  determinística sin Kapso. 21 casos, ya en verde.
- **E2E (sandbox):** enviar WhatsApp desde el teléfono personal al número
  **sandbox** y revisar la ejecución:
  ```
  node ../.agents/skills/automate-whatsapp/scripts/list-executions.js <workflow_id>
  node ../.agents/skills/automate-whatsapp/scripts/get-execution.js <execution_id>
  ```
  Comprobar: ruta tomada (labels), `vars`, y los `send_text` enviados.

## Matriz E2E

| # | Mensaje | Ruta esperada | Resultado |
|---|---------|---------------|-----------|
| 1 | "Hola Oscar. Quiero agendar una Auditoría B2B para mi operación." | `web_auditoria` (sin pasar por AI) → tx_auditoria → wait → handoff | |
| 2 | "Hola Oscar. Vi los casos en AYCweb/obras..." | `web_auditoria` | |
| 3 | Plantilla 🏢 Diagnóstico completa (datos dummy) | `web_diagnostico` → handoff inmediato | |
| 4 | "...Invertir en Paraguay... Quiero recibir el dossier." | `web_invertir_dossier` → tx_inv_dossier → wait → handoff | |
| 5 | "...agendar la llamada estratégica de 30 minutos." | `web_invertir_llamada` → tx_inv_llamada → handoff | |
| 6 | Resumen "*Nuevo lead · Invertir en Paraguay* ... Tier A" | `web_invertir_lead`, `vars.tier="A"`, handoff | |
| 7 | "hola, ¿cuánto sale el sistema de cotizaciones?" | AI → `auditoria_b2b` o `demo_cotizador` | |
| 8 | "necesito 40 pupitres para una escuela en Luque" | AI → `muebles` | |
| 9 | "¿hacen pintura electrostática de estructuras?" | AI → `metalurgia` | |
| 10 | "llevo mercadería a Encarnación todas las semanas, ¿trabajan eso?" | AI → `logistica` | |
| 11 | "quiero hablar con una persona" | AI → `humano` → handoff (sin pregunta) | |
| 12 | "HACE 3 DÍAS ESPERO MI PEDIDO, UNA VERGÜENZA" | AI → `humano` (enojo) | |
| 13 | "tenemos licitación del MEC para mobiliario escolar, pliego adjunto" | AI → `humano` (licitación, NO muebles) | |
| 14 | "Hi, I'm interested in investing in Paraguay" | `web_otro_idioma` o AI `otro_idioma` → handoff | |
| 15 | Audio / imagen sin texto | `sin_texto` → tx_humano → handoff | |
| 16 | "hola" | AI → `fallback` (una sola pregunta) → handoff | |
| 17 | Mensaje DESPUÉS de un handoff | NO debe re-clasificar / re-responder. Si lo hace → aplicar guard KV (ver README) | |
| 18 | Respuesta a la pregunta calificadora ("construcción, 3 vendedores") | Resume el `wait_for_response` (guarda `vars.respuesta_calificacion`), sin nueva respuesta automática | |

## Notas

- Casos 1–6 y 15 los cubre también el matcher offline.
- Casos 7–16 dependen del decide AI: revisar que la condición elegida sea la
  esperada; si no, refinar las `description` de las conditions en
  `workflows/whatsapp-recepcion/workflow.ts`.
- El caso 13 es la prueba clave de la "regla de oro": una licitación NUNCA
  debe auto-responderse como venta de muebles.
