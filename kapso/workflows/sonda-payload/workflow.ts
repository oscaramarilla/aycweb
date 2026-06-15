// ============================================================
// sonda-payload — workflow de diagnóstico (TEMPORAL)
// ============================================================
// Captura el payload real del primer mensaje entrante para confirmar dónde
// llega el texto. Pasos:
//   1) kapso build && kapso push workflow sonda-payload
//   2) activar su trigger al SANDBOX y enviar un WhatsApp de prueba
//   3) node ../.agents/skills/automate-whatsapp/scripts/list-executions.js <id>
//      node ../.agents/skills/automate-whatsapp/scripts/get-execution.js <exec-id>
//      → leer vars._context / vars._flow_events / vars._payload_completo
//   4) ajustar extraerTexto() en clasificar-prefill/index.js si difiere
//   5) BORRAR este workflow y la función sonda-eco
//
// Estado: draft, trigger inactivo. NO apuntar al número real.

import { START, Workflow } from "@kapso/workflows";

const SANDBOX_PHONE_NUMBER_ID =
  process.env.KAPSO_PHONE_NUMBER_ID ?? "REEMPLAZAR_CON_PHONE_NUMBER_ID_SANDBOX";

const workflow = new Workflow("sonda-payload", {
  name: "Sonda payload (temporal)",
  status: "draft",
});

workflow.addTrigger({
  type: "inbound_message",
  phoneNumberId: SANDBOX_PHONE_NUMBER_ID,
  active: false,
});

workflow.addNode(START, { position: { x: 200, y: 0 } });

workflow.addNode(
  "fn_eco",
  { type: "function", functionSlug: "sonda-eco", saveResponseTo: "eco" },
  { position: { x: 200, y: 140 } }
);

workflow.addNode(
  "fin",
  { type: "handoff", reason: "Sonda: payload capturado" },
  { position: { x: 200, y: 280 } }
);

workflow.addEdge(START, "fn_eco");
workflow.addEdge("fn_eco", "fin");

export default workflow;
