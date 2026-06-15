// ============================================================
// sonda-eco — función de diagnóstico (TEMPORAL)
// ============================================================
// Vuelca el payload completo que Kapso envía al nodo función a una variable,
// para confirmar la RUTA EXACTA donde llega el texto del mensaje entrante
// (no está documentada en la skill). Tras confirmarla en una ejecución real
// (get-execution.js / get-context-value.js), ajustar extraerTexto() en
// clasificar-prefill/index.js y BORRAR esta función + el workflow sonda.

async function handler(request, env) {
  const body = await request.json();
  return new Response(
    JSON.stringify({
      vars: {
        _payload_completo: JSON.stringify(body),
        _context: JSON.stringify(body.execution_context ? body.execution_context.context : null),
        _flow_events: JSON.stringify(body.flow_events || null),
      },
    }),
    { headers: { "Content-Type": "application/json" } }
  );
}
