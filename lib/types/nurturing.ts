/**
 * Tipos para el Agente de Nurturing B2B
 * Ubicación: lib/types/nurturing.ts
 */

/**
 * Tier de clasificación del lead
 * - A: Alto potencial → WhatsApp directo
 * - B: Medio-Alto → Email nurturing + demo
 * - C: Medio → Email nurturing + información
 */
export type LeadTier = 'A' | 'B' | 'C'

/**
 * Estados posibles de un lead
 */
export type LeadStatus = 'nuevo' | 'contactado' | 'calificado' | 'descartado' | 'cliente'

/**
 * Lead en Supabase
 */
export interface Lead {
  id: string
  email: string
  nombre?: string | null
  empresa?: string | null
  tier: LeadTier
  estado: LeadStatus
  created_at?: string
  last_contacted?: string | null
  metadata?: Record<string, unknown>
}

/**
 * Email de nurturing personalizado
 */
export interface NurturingEmailData {
  nombre: string
  empresa: string
  tier: 'B' | 'C'
}

/**
 * Resultado de envío de email
 */
export interface EmailSendResult {
  success: boolean
  messageId?: string
  error?: string
}

/**
 * Resultado de actualización de status
 */
export interface UpdateStatusResult {
  success: boolean
  error?: string
}

/**
 * Error en procesamiento de lead
 */
export interface LeadProcessError {
  leadId: string
  email: string
  reason: string
}

/**
 * Resultado de procesamiento de lote de leads
 */
export interface LeadProcessResult {
  contacted: number
  failed: number
  errors: LeadProcessError[]
}

/**
 * Respuesta del cron job
 */
export interface NurturingCronResponse {
  success: boolean
  leadsProcessed: number
  leadsContacted: number
  errors: LeadProcessError[]
  executionTime: number
}

/**
 * Configuración del agente
 */
export interface NurturingConfig {
  supabaseUrl: string
  supabaseServiceKey: string
  resendApiKey: string
  nurturingEmailFrom: string
  cronSecret?: string
  maxLeadsPerExecution: number
  delayBetweenEmails: number
}

/**
 * Metadata de lead procesado
 */
export interface LeadProcessMetadata {
  email_message_id: string
  email_sent_at: string
  nurturing_tier: LeadTier
  email_opened?: boolean
  email_clicked?: boolean
  last_attempted_at?: string
}
