// ============================================================
// whatsapp-recepcion — Recepción automática de WhatsApp de AYC
// ============================================================
// Clasifica el mensaje entrante, responde lo repetitivo/bajo riesgo con copy
// FIJO y deriva el resto a Oscar (handoff). La IA SOLO clasifica; nunca genera
// texto hacia el cliente. Dos capas de decisión:
//   1) decide_prefill  → función determinística clasificar-prefill (costo ~0)
//   2) decide_ai        → solo para lo que no matchea un prefill del sitio
//
// Estado: draft. El trigger apunta SOLO al número SANDBOX hasta que Oscar
// confirme el go-live (ver kapso/README.md). NADA se activa sobre el +595 sin
// confirmación explícita.
//
// Reglas Kapso respetadas: un solo start; labels de edges = conditions[].label;
// nodos no-decide con 0-1 edge saliente (los send_text convergen en un único
// handoff). Ver .agents/skills/automate-whatsapp/references/node-types.md.

import { START, Workflow } from "@kapso/workflows";

// ------------------------------------------------------------
// Configuración por entorno (se resuelve en `kapso build`).
// Reemplazar vía .env o editar el fallback antes de pushear.
// ------------------------------------------------------------
const SANDBOX_PHONE_NUMBER_ID =
  process.env.KAPSO_PHONE_NUMBER_ID ?? "REEMPLAZAR_CON_PHONE_NUMBER_ID_SANDBOX";

// provider_model_id para el decide AI. Obtener con:
//   node ../.agents/skills/automate-whatsapp/scripts/list-provider-models.js
const DECIDE_MODEL =
  process.env.KAPSO_DECIDE_MODEL_ID ?? "REEMPLAZAR_CON_PROVIDER_MODEL_ID";

// ------------------------------------------------------------
// Copy de las respuestas automáticas (es). Máx ~3 líneas + 1 pregunta.
// ------------------------------------------------------------
const TX = {
  auditoria:
    "¡Hola! Gracias por escribir desde ayc.com.py. La Auditoría B2B es una sesión de 30 min donde mapeamos tu proceso comercial y detectamos dónde estás perdiendo ventas. Para adelantar: ¿a qué se dedica tu empresa y cuántas personas venden hoy?",
  demo:
    "¡Hola! El motor cotizador genera presupuestos en minutos, con tus precios y tus reglas. Puedo prepararte una demo con tus propios productos. ¿Qué cotizás hoy y cómo lo hacés (Excel, a mano, sistema)?",
  diagnostico:
    "¡Gracias! Tu Diagnóstico Comercial Express llegó completo. Oscar lo revisa y te escribe hoy mismo con los primeros hallazgos. ¿Preferís seguir por aquí o por llamada?",
  invDossier:
    "¡Bienvenido/a! Preparamos el dossier de tu sector con datos verificados de Paraguay (energía, grado de inversión, corredor bioceánico). ¿Tu interés principal es energía, agroindustria, logística u otro sector?",
  invLlamada:
    "Perfecto. Agendamos tu llamada estratégica de 30 minutos con Oscar; te confirma el horario por este mismo chat. ¿Desde qué país escribís y qué franja horaria te conviene?",
  muebles:
    "¡Hola! Fabricamos mobiliario escolar e institucional con entrega en todo Paraguay. Para pasarte presupuesto: ¿qué necesitás (pupitres, sillas, mesas), en qué cantidad aproximada y para qué institución?",
  metalurgia:
    "¡Hola! Hacemos trabajos metalúrgicos y pintura industrial para empresas. ¿Qué tipo de pieza o estructura querés tratar y en qué ciudad está el trabajo?",
  logistica:
    "¡Hola! Ofrecemos logística para empresas dentro de Paraguay. ¿Qué tipo de carga necesitás mover, en qué ruta y con qué frecuencia?",
  humano:
    "Entendido. Te conecto con Oscar, que ve este chat y te responde personalmente a la brevedad (horario hábil de Paraguay).",
  idioma:
    "Thanks for your message — Oscar will reply personally shortly. / Obrigado pela mensagem — o Oscar responde em breve. / Danke für Ihre Nachricht — Oscar meldet sich in Kürze.",
  fallback:
    "¡Hola! Gracias por escribir a AYC. ¿Tu consulta es sobre servicios digitales (cotizadores y automatización), muebles institucionales, metalurgia y pintura, o logística? Contame brevemente y te derivo con Oscar.",
};

const workflow = new Workflow("whatsapp-recepcion", {
  name: "Recepción WhatsApp AYC",
  status: "draft",
});

workflow.addTrigger({
  type: "inbound_message",
  phoneNumberId: SANDBOX_PHONE_NUMBER_ID,
  active: false, // se activa al go-live; ver README (kill switch)
});

// ------------------------------------------------------------
// Nodos
// ------------------------------------------------------------
workflow.addNode(START, { position: { x: 400, y: 0 } });

// Capa 1: clasificación determinística contra los prefills del sitio.
workflow.addNode(
  "decide_prefill",
  {
    type: "decide",
    decisionType: "function",
    functionSlug: "clasificar-prefill",
    conditions: [
      { label: "web_auditoria", description: "Prefill de Auditoría B2B / diagnóstico (web es)" },
      { label: "web_diagnostico", description: "Plantilla estructurada Diagnóstico Comercial Express" },
      { label: "web_invertir_dossier", description: "Prefill: pedir dossier de inversión" },
      { label: "web_invertir_llamada", description: "Prefill: agendar llamada estratégica" },
      { label: "web_invertir_lead", description: "Resumen 'Nuevo lead · Invertir en Paraguay' del formulario" },
      { label: "web_otro_idioma", description: "Prefill del sitio en inglés/portugués/alemán" },
      { label: "sin_texto", description: "Mensaje sin texto (audio, imagen, sticker)" },
      { label: "no_match", description: "No matchea ningún prefill: pasa al decide AI" },
    ],
  },
  { position: { x: 400, y: 120 } }
);

// Capa 2: clasificación AI (temperatura 0) solo para lenguaje natural.
workflow.addNode(
  "decide_ai",
  {
    type: "decide",
    decisionType: "ai",
    providerModel: DECIDE_MODEL,
    llmTemperature: 0,
    conditions: [
      {
        label: "auditoria_b2b",
        description:
          "Interés en sistematizar/automatizar el proceso comercial, CRM, embudo, o consulta por precios de los servicios digitales de AYC.",
      },
      {
        label: "demo_cotizador",
        description:
          "Interés específico en un motor/sistema de cotización o presupuestos automáticos (aberturas, muebles a medida, etc.).",
      },
      {
        label: "inversores",
        description:
          "Consulta sobre invertir en Paraguay, oportunidades de inversión, dossier por sector o capital. Cualquier inversor se deriva a humano.",
      },
      {
        label: "muebles",
        description:
          "Quiere comprar/cotizar muebles institucionales o escolares (pupitres, sillas, mesas). Si menciona licitación, pliego u orden de compra, NO usar esta etiqueta: usar 'humano'.",
      },
      {
        label: "metalurgia",
        description:
          "Quiere un trabajo metalúrgico o de pintura industrial/electrostática de piezas o estructuras. Reclamo sobre un trabajo en curso => usar 'humano'.",
      },
      {
        label: "logistica",
        description:
          "Quiere mover carga / servicio de logística o transporte de mercadería para empresas dentro de Paraguay.",
      },
      {
        label: "humano",
        description:
          "Pide explícitamente hablar con una persona, o el mensaje implica negociación, descuentos, pagos, reclamo, enojo, licitación/orden de compra, o ambigüedad que necesita criterio humano.",
      },
      {
        label: "otro_idioma",
        description: "El mensaje está escrito en un idioma distinto del español.",
      },
      {
        label: "fallback",
        description:
          "Saludo o mensaje genérico sin intención clara (ej. 'hola', 'info'). Solo cuando ninguna otra etiqueta aplica.",
      },
    ],
  },
  { position: { x: 400, y: 260 } }
);

// Respuestas (send_text). Reutilizadas por ambas capas cuando el copy coincide.
const sendText = (id: string, message: string, x: number, y: number) =>
  workflow.addNode(id, { type: "send_text", message }, { position: { x, y } });

sendText("tx_auditoria", TX.auditoria, 0, 420);
sendText("tx_demo", TX.demo, 160, 420);
sendText("tx_diagnostico", TX.diagnostico, 320, 420);
sendText("tx_inv_dossier", TX.invDossier, 480, 420);
sendText("tx_inv_llamada", TX.invLlamada, 640, 420);
sendText("tx_muebles", TX.muebles, 800, 420);
sendText("tx_metal", TX.metalurgia, 0, 560);
sendText("tx_logi", TX.logistica, 160, 560);
sendText("tx_humano", TX.humano, 320, 560);
sendText("tx_idioma", TX.idioma, 480, 560);
sendText("tx_fallback", TX.fallback, 640, 560);

// Espera la respuesta a la pregunta calificadora antes de derivar.
// timeoutSeconds: a las 24h, si no respondió, igual deriva a Oscar.
const waitNode = (id: string, x: number, y: number) =>
  workflow.addNode(
    id,
    { type: "wait_for_response", saveResponseTo: "respuesta_calificacion", timeoutSeconds: 86400 },
    { position: { x, y } }
  );

waitNode("wait_aud", 0, 700);
waitNode("wait_demo", 160, 700);
waitNode("wait_inv", 480, 700);
waitNode("wait_mue", 800, 700);
waitNode("wait_met", 0, 840);
waitNode("wait_log", 160, 840);

// Punto único de derivación a humano.
workflow.addNode(
  "handoff",
  { type: "handoff", reason: "Recepción automática: derivado a Oscar" },
  { position: { x: 400, y: 980 } }
);

// ------------------------------------------------------------
// Edges
// ------------------------------------------------------------
workflow.addEdge(START, "decide_prefill");

// Capa 1 → ramas
workflow.addEdge("decide_prefill", "tx_auditoria", { label: "web_auditoria" });
workflow.addEdge("decide_prefill", "tx_diagnostico", { label: "web_diagnostico" });
workflow.addEdge("decide_prefill", "tx_inv_dossier", { label: "web_invertir_dossier" });
workflow.addEdge("decide_prefill", "tx_inv_llamada", { label: "web_invertir_llamada" });
workflow.addEdge("decide_prefill", "tx_inv_llamada", { label: "web_invertir_lead" });
workflow.addEdge("decide_prefill", "tx_idioma", { label: "web_otro_idioma" });
workflow.addEdge("decide_prefill", "tx_humano", { label: "sin_texto" });
workflow.addEdge("decide_prefill", "decide_ai", { label: "no_match" });

// Capa 2 (AI) → ramas
workflow.addEdge("decide_ai", "tx_auditoria", { label: "auditoria_b2b" });
workflow.addEdge("decide_ai", "tx_demo", { label: "demo_cotizador" });
workflow.addEdge("decide_ai", "tx_inv_dossier", { label: "inversores" });
workflow.addEdge("decide_ai", "tx_muebles", { label: "muebles" });
workflow.addEdge("decide_ai", "tx_metal", { label: "metalurgia" });
workflow.addEdge("decide_ai", "tx_logi", { label: "logistica" });
workflow.addEdge("decide_ai", "tx_humano", { label: "humano" });
workflow.addEdge("decide_ai", "tx_idioma", { label: "otro_idioma" });
workflow.addEdge("decide_ai", "tx_fallback", { label: "fallback" });

// send_text → (wait) → handoff
workflow.addEdge("tx_auditoria", "wait_aud");
workflow.addEdge("tx_demo", "wait_demo");
workflow.addEdge("tx_inv_dossier", "wait_inv");
workflow.addEdge("tx_muebles", "wait_mue");
workflow.addEdge("tx_metal", "wait_met");
workflow.addEdge("tx_logi", "wait_log");

workflow.addEdge("wait_aud", "handoff");
workflow.addEdge("wait_demo", "handoff");
workflow.addEdge("wait_inv", "handoff");
workflow.addEdge("wait_mue", "handoff");
workflow.addEdge("wait_met", "handoff");
workflow.addEdge("wait_log", "handoff");

// Ramas con handoff inmediato (sin pregunta).
workflow.addEdge("tx_diagnostico", "handoff");
workflow.addEdge("tx_inv_llamada", "handoff");
workflow.addEdge("tx_humano", "handoff");
workflow.addEdge("tx_idioma", "handoff");
workflow.addEdge("tx_fallback", "handoff");

export default workflow;
