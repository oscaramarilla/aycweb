// ============================================================
// run-matcher-tests.js — pruebas OFFLINE del matcher determinístico
// ============================================================
// Carga el handler de functions/clasificar-prefill/index.js sin Kapso y le
// pasa payloads simulados (forma del nodo decide). Verifica next_edge y vars.
// Ejecutar: npm run test:matcher   (desde kapso/)
//
// No cubre el decide AI (capa 2): eso se prueba E2E en sandbox (test/casos.md).

const fs = require("fs");
const path = require("path");

// --- Cargar el handler sin `export` (es un function declaration). ---
const src = fs.readFileSync(
  path.join(__dirname, "..", "functions", "clasificar-prefill", "index.js"),
  "utf8"
);
class MockResponse {
  constructor(body) {
    this.body = body;
  }
}
const factory = new Function("Response", `${src}\nreturn handler;`);
const handler = factory(MockResponse);

// --- Helpers para construir payloads y ejecutar ---
const EDGES = [
  "web_auditoria",
  "web_diagnostico",
  "web_invertir_dossier",
  "web_invertir_llamada",
  "web_invertir_lead",
  "web_otro_idioma",
  "sin_texto",
  "no_match",
];

function payloadConTexto(texto) {
  return {
    execution_context: { vars: {}, context: { message_text: texto }, system: {}, metadata: {} },
    available_edges: EDGES,
    flow_events: [],
  };
}
function payloadSinTexto() {
  return {
    execution_context: { vars: {}, context: {}, system: {}, metadata: {} },
    available_edges: EDGES,
    flow_events: [{ event_type: "message", payload: { type: "audio" } }],
  };
}

async function clasificar(payload) {
  const res = await handler({ json: async () => payload }, {});
  return JSON.parse(res.body);
}

// --- Casos (prefills reales de lib/config/* y actions.ts) ---
const casos = [
  // web_auditoria (WHATSAPP_TEXTS.es)
  ["home", "Hola Oscar. Quiero agendar una Auditoría B2B para mi operación.", "web_auditoria"],
  ["obras", "Hola Oscar. Vi los casos en AYCweb/obras y me interesa hablar sobre un sistema similar para mi empresa.", "web_auditoria"],
  ["empresas", "Hola Oscar. Estoy viendo AYCweb/empresas y quiero agendar una Auditoría B2B para sistematizar mi operación.", "web_auditoria"],
  ["profesionales", "Hola Oscar. Estoy en AYCweb/profesionales y quiero información sobre cómo captar más clientes con un sistema propio.", "web_auditoria"],
  ["general", "¡Hola! Estoy en la web de AYC y busco agendar un diagnóstico para sistematizar mi negocio.", "web_auditoria"],
  ["auditB2B", "Hola Oscar, quiero agendar una Auditoría B2B.", "web_auditoria"],
  // web_diagnostico (buildMensajeDiagnostico es)
  [
    "diagnostico",
    "🏢 *Diagnóstico Comercial Express – AYCweb*\n\n📌 *Empresa:* Metalúrgica Sur\n🏭 *Sector:* Metalurgia\n👥 *Equipo comercial:* 4 personas\n🚧 *Cuello de botella:* Cotizaciones lentas\n💻 *Stack actual:* Excel\n📱 *WhatsApp del responsable:* +595981000000\n\nSolicito un diagnóstico comercial personalizado para mi empresa.",
    "web_diagnostico",
  ],
  // web_invertir_dossier / llamada (invertirParaguay.ts es)
  ["inv_dossier", "Hola, vengo de la página Invertir en Paraguay (aycweb.com/invertir-en-paraguay). Mi sector de interés es energía. Quiero recibir el dossier.", "web_invertir_dossier"],
  ["inv_call", "Hola Oscar, vengo de aycweb.com/invertir-en-paraguay y quiero agendar la llamada estratégica de 30 minutos.", "web_invertir_llamada"],
  // web_invertir_lead (resumen de actions.ts) — verifica vars.tier
  [
    "inv_lead_A",
    "*Nuevo lead · Invertir en Paraguay*\nScore: 82/100 · Tier A\nNombre: Juan Pérez\nEmail: juan@fondo.com\nWhatsApp: +1 555 0100\nPaís: Estados Unidos\nIdioma: ES\nSector: Energía\nCapital: > US$ 250k\nHorizonte: 0-6 meses",
    "web_invertir_lead",
  ],
  // web_otro_idioma (en / pt-br)
  ["home_en", "Hi Oscar. I'd like to schedule a B2B Audit for my operation.", "web_otro_idioma"],
  ["home_pt", "Olá Oscar. Quero agendar uma Auditoria B2B para minha operação.", "web_otro_idioma"],
  ["inv_en", "Hi, I'm coming from the Investing in Paraguay page. My sector of interest is energy. I'd like to receive the dossier.", "web_otro_idioma"],
  // no_match (lenguaje natural → decide AI)
  ["nat_precio", "hola, ¿cuánto sale el sistema de cotizaciones?", "no_match"],
  ["nat_muebles", "necesito 40 pupitres para una escuela en Luque", "no_match"],
  ["nat_metal", "¿hacen pintura electrostática de estructuras?", "no_match"],
  ["nat_logi", "llevo mercadería a Encarnación todas las semanas, ¿trabajan eso?", "no_match"],
  ["nat_humano", "quiero hablar con una persona", "no_match"],
  ["nat_hola", "hola", "no_match"],
];

(async () => {
  let ok = 0;
  let fail = 0;
  for (const [nombre, texto, esperado] of casos) {
    const r = await clasificar(payloadConTexto(texto));
    const pass = r.next_edge === esperado;
    if (pass) ok++;
    else fail++;
    console.log(`${pass ? "✓" : "✗"} ${nombre.padEnd(16)} → ${r.next_edge}${pass ? "" : `  (esperado: ${esperado})`}`);
  }

  // sin_texto
  const st = await clasificar(payloadSinTexto());
  const stPass = st.next_edge === "sin_texto";
  stPass ? ok++ : fail++;
  console.log(`${stPass ? "✓" : "✗"} ${"sin_texto".padEnd(16)} → ${st.next_edge}${stPass ? "" : "  (esperado: sin_texto)"}`);

  // vars.tier extraído del lead A
  const leadA = await clasificar(payloadConTexto(casos.find((c) => c[0] === "inv_lead_A")[1]));
  const tierPass = leadA.vars && leadA.vars.tier === "A";
  tierPass ? ok++ : fail++;
  console.log(`${tierPass ? "✓" : "✗"} ${"vars.tier=A".padEnd(16)} → ${leadA.vars ? leadA.vars.tier : "(sin vars)"}`);

  console.log(`\n${ok} ok, ${fail} fail`);
  process.exit(fail === 0 ? 0 : 1);
})();
