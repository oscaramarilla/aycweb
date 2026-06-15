// ============================================================
// clasificar-prefill — Capa 1 de clasificación (determinística)
// ============================================================
// Nodo decide (decision_type: function) del workflow whatsapp-recepcion.
// Matchea el mensaje entrante contra los textos prellenados que genera
// el sitio ayc.com.py. Fuente de los strings (mantener en sincronía):
//   - lib/config/contacto.ts            (WHATSAPP_TEXTS, buildMensajeDiagnostico)
//   - lib/config/invertirParaguay.ts    (wa.dossier, wa.call)
//   - app/[lang]/(funnels)/invertir-en-paraguay/actions.ts (resumen "Nuevo lead")
// Lo que no matchea sale por "no_match" hacia el decide AI (capa 2).
// Contrato: request/response de nodo decide en
// .agents/skills/automate-whatsapp/references/functions-payloads.md
// Reglas Kapso: sin export, sin arrow functions en el handler, retornar Response.

async function handler(request, env) {
  const body = await request.json();
  const edges = Array.isArray(body.available_edges) ? body.available_edges : [];

  const texto = extraerTexto(body);
  const t = normalizar(texto);

  const vars = { mensaje_entrante: texto.slice(0, 500) };
  let label;

  if (!t) {
    label = "sin_texto";
  } else if (t.includes("nuevo lead") && t.includes("invertir en paraguay")) {
    // Resumen generado por submitLeadParaguay (siempre en español).
    label = "web_invertir_lead";
    const tier = t.match(/\btier\s+([abc])\b/);
    if (tier) vars.tier = tier[1].toUpperCase();
  } else if (esOtroIdioma(t)) {
    label = "web_otro_idioma";
  } else if (t.includes("diagnostico comercial express")) {
    label = "web_diagnostico";
  } else if (t.includes("invertir en paraguay") && /\bdossier\b/.test(t)) {
    label = "web_invertir_dossier";
  } else if (t.includes("llamada estrategica de 30")) {
    label = "web_invertir_llamada";
  } else if (esAuditoria(t)) {
    label = "web_auditoria";
  } else {
    label = "no_match";
  }

  vars.prefill_label = label;

  let next_edge = label;
  if (edges.length > 0 && !edges.includes(next_edge)) {
    next_edge = edges.includes("no_match") ? "no_match" : edges[0];
  }

  return new Response(JSON.stringify({ next_edge, vars }), {
    headers: { "Content-Type": "application/json" },
  });
}

// Prefills de auditoría/diagnóstico en español (contacto.ts → WHATSAPP_TEXTS.es).
function esAuditoria(t) {
  return (
    t.includes("auditoria b2b") ||
    t.includes("agendar un diagnostico") ||
    t.includes("sistematizar mi negocio") ||
    t.includes("captar mas clientes con un sistema propio") ||
    t.includes("aycweb obras") ||
    t.includes("aycweb profesionales") ||
    t.includes("aycweb empresas")
  );
}

// Firmas de los prefills en/pt-br (el de "de" usa el texto en inglés).
// Regex con \b para no matchear substrings en español
// (ej.: "hola oscar" contiene "ola oscar" pero \bola\b no matchea dentro de "hola").
function esOtroIdioma(t) {
  const firmas = [
    /\bhi oscar\b/,
    /\bb2b audit\b/,
    /\bschedule\b/,
    /\bcommercial diagnostic\b/,
    /\binvesting in paraguay\b/,
    /\bi d like\b/,
    /\bola oscar\b/,
    /\bquero\b/,
    /\bminha\b/,
    /\bmeu negocio\b/,
    /\bgargalo\b/,
    /\bequipe comercial\b/,
    /\bsetor\b/,
    /\bdossie\b/,
    /\binvestir no paraguai\b/,
    /\buma auditoria\b/,
  ];
  for (const firma of firmas) {
    if (firma.test(t)) return true;
  }
  return false;
}

// lowercase, sin tildes, sin emojis ni puntuación; espacios colapsados.
function normalizar(texto) {
  return String(texto)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

// La ruta exacta del texto entrante en el payload NO está documentada en la
// skill ("Never guess variable paths"): se confirma con el workflow sonda
// (kapso/workflows/sonda-payload) y, si difiere, se ajusta SOLO esta función.
// Mientras tanto, extracción defensiva por claves conocidas.
function extraerTexto(body) {
  const candidatos = [];

  const ec = body.execution_context || {};
  const ctx = ec.context || {};
  agregarString(ctx.message_text, candidatos);
  agregarString(ctx.last_message, candidatos);
  agregarString(ctx.text, candidatos);
  agregarString(ctx.body, candidatos);
  agregarString(ctx.message, candidatos);
  if (ctx.message && typeof ctx.message === "object") {
    buscarTextoConocido(ctx.message, candidatos, 0);
  }
  if (ec.vars) agregarString(ec.vars.mensaje_entrante, candidatos);

  const eventos = Array.isArray(body.flow_events) ? body.flow_events : [];
  for (const ev of eventos) {
    if (ev && ev.payload && typeof ev.payload === "object") {
      buscarTextoConocido(ev.payload, candidatos, 0);
    }
  }

  return candidatos.length > 0 ? candidatos[0] : "";
}

function agregarString(valor, out) {
  if (typeof valor === "string" && valor.trim()) out.push(valor.trim());
}

// Busca solo en claves típicas de contenido de mensaje, para no capturar
// teléfonos, ids ni metadatos.
function buscarTextoConocido(obj, out, profundidad) {
  if (!obj || typeof obj !== "object" || profundidad > 4) return;
  const claves = ["text", "body", "message_text", "caption", "message", "content"];
  for (const clave of claves) {
    const valor = obj[clave];
    if (typeof valor === "string" && valor.trim()) {
      out.push(valor.trim());
    } else if (valor && typeof valor === "object") {
      buscarTextoConocido(valor, out, profundidad + 1);
    }
  }
}
