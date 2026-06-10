// ============================================================
// Route Handler: /api/submit-diagnostico
// ──────────────────────────────────────────────────────────
// Recibe datos del formulario Diagnóstico Comercial Express
// e inserta en Supabase del lado del servidor.
// Evita exponer las credenciales de Supabase al bundle client.
// ============================================================

import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { nombre, empresa, whatsapp, email, score, nivel } = body;

    // Validación básica
    if (!nombre || !empresa || !whatsapp) {
      return NextResponse.json(
        { error: "Faltan campos obligatorios: nombre, empresa, whatsapp." },
        { status: 400 }
      );
    }

    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseAnonKey) {
      console.error("[submit-diagnostico] SUPABASE_URL o SUPABASE_ANON_KEY no definidas.");
      return NextResponse.json(
        { error: "Error de configuración del servidor." },
        { status: 500 }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseAnonKey);

    const { data, error } = await supabase.from("leads_b2b").insert({
      nombre,
      empresa,
      whatsapp,
      email: email ?? null,
      score: score ?? 0,
      nivel: nivel ?? "N/A",
      created_at: new Date().toISOString(),
    });

    if (error) {
      console.error("[submit-diagnostico] Error insertando lead:", error);
      return NextResponse.json(
        { error: "Error al guardar el lead en la base de datos." },
        { status: 500 }
      );
    }

    // Disparar secuencia de email en n8n si hay email y webhook configurado (fire-and-forget)
    const nurturingUrl = process.env.N8N_WEBHOOK_NURTURING_URL;
    if (email && nurturingUrl) {
      fetch(nurturingUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, empresa, whatsapp, email, score: score ?? 0, nivel: nivel ?? "N/A" }),
      }).catch((err) => {
        console.error("[submit-diagnostico] Error disparando nurturing n8n:", err);
      });
    }

    return NextResponse.json({ success: true, data });
  } catch (err) {
    console.error("[submit-diagnostico] Error inesperado:", err);
    return NextResponse.json(
      { error: "Error interno del servidor." },
      { status: 500 }
    );
  }
}