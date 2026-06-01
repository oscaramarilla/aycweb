import { createClient, SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    '[supabaseClient] Variables de entorno SUPABASE_URL y SUPABASE_ANON_KEY ' +
    'son obligatorias. Definilas en .env.local (server-side únicamente). ' +
    'Ninguna variable NEXT_PUBLIC_ debe usarse para Supabase.'
  )
}

/**
 * Cliente Supabase singleton — Server-Side únicamente.
 * Arquitectura estricta: NO se exponen credenciales al bundle del cliente.
 * Las variables NEXT_PUBLIC_ NO se usan para Supabase.
 */
export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseAnonKey)