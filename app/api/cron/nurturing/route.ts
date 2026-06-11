import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'
import { renderNurturingEmail } from '@/lib/email-templates/nurturing-email'
/**
 * AGENTE DE NURTURING B2B
 * 
 * Función: Consultar diariamente leads Tier B y C con estado 'nuevo' en Supabase,
 * enviar emails de nurturing vía Resend, y actualizar estado a 'contactado'.
 * 
 * Configuración:
 * - Se ejecuta mediante Vercel Cron (agregar cron expression en vercel.json)
 * - O puede ejecutarse manualmente llamando a /api/cron/nurturing
 * 
 * Variables de entorno requeridas:
 * - SUPABASE_URL
 * - SUPABASE_SERVICE_KEY (preferiblemente) o SUPABASE_ANON_KEY
 * - RESEND_API_KEY
 * - NURTURING_EMAIL_FROM (ej: noreply@aycweb.com)
 */

// Inicializar Supabase con service key para máximos permisos
const SUPABASE_URL = process.env.SUPABASE_URL
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY || process.env.SUPABASE_ANON_KEY
const RESEND_API_KEY = process.env.RESEND_API_KEY
const NURTURING_EMAIL_FROM = process.env.NURTURING_EMAIL_FROM || 'noreply@aycweb.com'

const supabase = createClient(SUPABASE_URL || '', SUPABASE_SERVICE_KEY || '')

// Instanciación diferida (lazy) del cliente Resend: evita que el módulo
// falle al importarse durante el build (next build) cuando RESEND_API_KEY
// todavía no está disponible en el entorno. Se crea recién en runtime.
let _resend: Resend | null = null
function getResend(): Resend {
  if (!_resend) {
    _resend = new Resend(RESEND_API_KEY)
  }
  return _resend
}

interface Lead {
  id: string
  email: string
  nombre?: string
  empresa?: string
  tier: 'A' | 'B' | 'C'
  estado: string
  created_at?: string
  last_contacted?: string
}

interface NurturingResult {
  success: boolean
  leadsProcessed: number
  leadsContacted: number
  errors: Array<{
    leadId: string
    email: string
    reason: string
  }>
  executionTime: number
}

/**
 * Obtiene leads Tier B y C con estado 'nuevo' que no hayan sido contactados recientemente
 */
async function fetchNewLeads(): Promise<Lead[]> {
  try {
    const { data, error } = await supabase
      .from('leads_paraguay')
      .select('id, email, nombre, empresa, tier, estado, created_at, last_contacted')
      .in('tier', ['B', 'C'])
      .eq('estado', 'nuevo')
      .is('last_contacted', null) // Nunca contactados
      .order('created_at', { ascending: true })
      .limit(100) // Limitar a 100 por ejecución para evitar rate limits

    if (error) {
      throw new Error(`Error fetching leads: ${error.message}`)
    }

    return (data as Lead[]) || []
  } catch (error) {
    const errorMsg = error instanceof Error ? error.message : 'Unknown error'
    throw new Error(`[fetchNewLeads] ${errorMsg}`)
  }
}

/**
 * Envía email de nurturing vía Resend
 */
async function sendNurturingEmail(
  lead: Lead,
): Promise<{ success: boolean; messageId?: string; error?: string }> {
  try {
    if (!lead.email) {
      return { success: false, error: 'Email no disponible' }
    }

    const htmlContent = renderNurturingEmail({
      nombre: lead.nombre || 'Estimado contacto',
      empresa: lead.empresa || 'su empresa',
      tier: lead.tier as 'B' | 'C',
    })

    const subject =
      lead.tier === 'B'
        ? 'Optimicemos juntos tu operación | AYC Web'
        : 'Soluciones rápidas de infraestructura | AYC Web'

    const response = await getResend().emails.send({
      from: NURTURING_EMAIL_FROM,
      to: lead.email,
      subject,
      html: htmlContent,
      replyTo: 'ventas@aycweb.com',
      headers: {
        'X-Lead-ID': lead.id,
        'X-Lead-Tier': lead.tier,
      },
    })

    if (response.error) {
      return { success: false, error: response.error.message }
    }

    return { success: true, messageId: response.data?.id }
  } catch (error) {
    const errorMsg = error instanceof Error ? error.message : 'Unknown error'
    return { success: false, error: errorMsg }
  }
}

/**
 * Actualiza estado del lead en Supabase a 'contactado'
 */
async function updateLeadStatus(
  leadId: string,
  status: string,
  metadata?: Record<string, unknown>,
): Promise<{ success: boolean; error?: string }> {
  try {
    const updateData: Record<string, unknown> = {
      estado: status,
      last_contacted: new Date().toISOString(),
    }

    if (metadata) {
      updateData.metadata = JSON.stringify(metadata)
    }

    const { error } = await supabase
      .from('leads_paraguay')
      .update(updateData)
      .eq('id', leadId)

    if (error) {
      return { success: false, error: error.message }
    }

    return { success: true }
  } catch (error) {
    const errorMsg = error instanceof Error ? error.message : 'Unknown error'
    return { success: false, error: errorMsg }
  }
}

/**
 * Procesa un lote de leads: envía emails y actualiza estados
 */
async function processLeads(leads: Lead[]): Promise<{
  contacted: number
  failed: number
  errors: Array<{ leadId: string; email: string; reason: string }>
}> {
  const results = {
    contacted: 0,
    failed: 0,
    errors: [] as Array<{ leadId: string; email: string; reason: string }>,
  }

  for (const lead of leads) {
    try {
      // 1. Enviar email
      const emailResult = await sendNurturingEmail(lead)

      if (!emailResult.success) {
        results.failed++
        results.errors.push({
          leadId: lead.id,
          email: lead.email,
          reason: emailResult.error || 'Unknown email error',
        })
        console.error(
          `[nurturing] Failed to send email to ${lead.email} (Lead ${lead.id}): ${emailResult.error}`,
        )
        continue
      }

      // 2. Actualizar estado a 'contactado'
      const statusResult = await updateLeadStatus(lead.id, 'contactado', {
        email_message_id: emailResult.messageId,
        email_sent_at: new Date().toISOString(),
        nurturing_tier: lead.tier,
      })

      if (!statusResult.success) {
        results.failed++
        results.errors.push({
          leadId: lead.id,
          email: lead.email,
          reason: `Email sent but DB update failed: ${statusResult.error}`,
        })
        console.error(
          `[nurturing] Failed to update status for ${lead.email} (Lead ${lead.id}): ${statusResult.error}`,
        )
        continue
      }

      results.contacted++
      console.log(`[nurturing] ✓ Lead ${lead.id} (${lead.email}) contactado exitosamente`)

      // Pequeña pausa para evitar rate limits
      await new Promise((resolve) => setTimeout(resolve, 500))
    } catch (error) {
      const errorMsg = error instanceof Error ? error.message : 'Unknown error'
      results.failed++
      results.errors.push({
        leadId: lead.id,
        email: lead.email,
        reason: errorMsg,
      })
      console.error(`[nurturing] Unexpected error processing lead ${lead.id}: ${errorMsg}`)
    }
  }

  return results
}

/**
 * Validar variables de entorno
 */
function validateEnvironment(): { valid: boolean; error?: string } {
  if (!SUPABASE_URL) return { valid: false, error: 'SUPABASE_URL not set' }
  if (!SUPABASE_SERVICE_KEY) return { valid: false, error: 'SUPABASE_SERVICE_KEY not set' }
  if (!RESEND_API_KEY) return { valid: false, error: 'RESEND_API_KEY not set' }
  return { valid: true }
}

/**
 * Handler principal del cron job
 */
export async function GET(req: Request): Promise<NextResponse> {
  const startTime = Date.now()

  try {
    // Validar entorno
    const envCheck = validateEnvironment()
    if (!envCheck.valid) {
      console.error(`[nurturing] Environment validation failed: ${envCheck.error}`)
      return NextResponse.json(
        {
          success: false,
          error: envCheck.error,
        },
        { status: 400 },
      )
    }

    // Validar Cron Secret (opcional, para seguridad)
    const cronSecret = req.headers.get('x-api-key')
    const expectedSecret = process.env.CRON_SECRET
    if (expectedSecret && cronSecret !== expectedSecret) {
      console.warn('[nurturing] Unauthorized cron execution attempt')
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 },
      )
    }

    console.log('[nurturing] Starting nurturing agent execution...')

    // 1. Obtener leads nuevos
    const leads = await fetchNewLeads()
    console.log(`[nurturing] Found ${leads.length} new leads to contact`)

    if (leads.length === 0) {
      const result: NurturingResult = {
        success: true,
        leadsProcessed: 0,
        leadsContacted: 0,
        errors: [],
        executionTime: Date.now() - startTime,
      }
      console.log('[nurturing] No leads to process')
      return NextResponse.json(result, { status: 200 })
    }

    // 2. Procesar leads
    const processResult = await processLeads(leads)

    const result: NurturingResult = {
      success: true,
      leadsProcessed: leads.length,
      leadsContacted: processResult.contacted,
      errors: processResult.errors,
      executionTime: Date.now() - startTime,
    }

    console.log(
      `[nurturing] Execution complete: ${processResult.contacted}/${leads.length} leads contacted, ${processResult.failed} failed. Time: ${result.executionTime}ms`,
    )

    return NextResponse.json(result, { status: 200 })
  } catch (error) {
    const errorMsg = error instanceof Error ? error.message : 'Unknown error'
    console.error(`[nurturing] Fatal error: ${errorMsg}`)

    const result: NurturingResult = {
      success: false,
      leadsProcessed: 0,
      leadsContacted: 0,
      errors: [
        {
          leadId: 'system',
          email: 'N/A',
          reason: errorMsg,
        },
      ],
      executionTime: Date.now() - startTime,
    }

    return NextResponse.json(result, { status: 500 })
  }
}

/**
 * POST handler para trigger manual (opcional, para testing)
 */
export async function POST(req: Request): Promise<NextResponse> {
  return GET(req)
}

// Configuración de ejecución máxima
export const maxDuration = 300 // 5 minutos para Vercel Serverless
export const dynamic = 'force-dynamic'
