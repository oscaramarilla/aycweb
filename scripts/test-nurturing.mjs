#!/usr/bin/env node

/**
 * Script de Testing del Agente de Nurturing
 * 
 * Uso:
 *   npm run test:nurturing
 * 
 * O con Node.js directo:
 *   node scripts/test-nurturing.mjs
 */

import http from 'http'
import https from 'https'
import 'dotenv/config'

const API_URL = process.env.API_URL || 'http://localhost:3000'
const CRON_SECRET = process.env.CRON_SECRET || ''

console.log(`
╔════════════════════════════════════════╗
║    AGENTE DE NURTURING - TEST SCRIPT    ║
╚════════════════════════════════════════╝

🔧 Configuración:
   - URL: ${API_URL}
   - Secret: ${CRON_SECRET ? '✓ Configurado' : '⚠️ No configurado'}
   - Timestamp: ${new Date().toISOString()}

`)

function makeRequest(url, headers = {}) {
  return new Promise((resolve, reject) => {
    const isHttps = url.startsWith('https://')
    const client = isHttps ? https : http

    const urlObj = new URL(url)
    const options = {
      hostname: urlObj.hostname,
      port: urlObj.port,
      path: urlObj.pathname + urlObj.search,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      timeout: 30000,
    }

    const req = client.request(options, (res) => {
      let data = ''

      res.on('data', (chunk) => {
        data += chunk
      })

      res.on('end', () => {
        resolve({
          status: res.statusCode,
          headers: res.headers,
          body: data,
        })
      })
    })

    req.on('error', reject)
    req.on('timeout', () => {
      req.destroy()
      reject(new Error('Request timeout'))
    })

    req.end()
  })
}

async function testNurturingAgent() {
  try {
    console.log('📡 Enviando request a /api/cron/nurturing...\n')

    const headers = CRON_SECRET ? { 'x-api-key': CRON_SECRET } : {}

    const response = await makeRequest(`${API_URL}/api/cron/nurturing`, headers)

    console.log(`Status: ${response.status}`)
    console.log(`Headers:`, Object.entries(response.headers).slice(0, 5))

    let body
    try {
      body = JSON.parse(response.body)
    } catch {
      body = response.body
    }

    console.log(`\n📊 Response:`)
    console.log(JSON.stringify(body, null, 2))

    // Análisis de resultado
    console.log(`\n✅ Test Results:`)

    if (response.status === 200 && body.success) {
      console.log(`  ✓ Agente ejecutado exitosamente`)
      console.log(`  ✓ Leads procesados: ${body.leadsProcessed}`)
      console.log(`  ✓ Leads contactados: ${body.leadsContacted}`)

      if (body.errors && body.errors.length > 0) {
        console.log(`  ⚠️ Errores: ${body.errors.length}`)
        body.errors.forEach((err, idx) => {
          console.log(`     ${idx + 1}. ${err.email} - ${err.reason}`)
        })
      }

      console.log(`  ⏱️ Tiempo de ejecución: ${body.executionTime}ms`)
    } else if (response.status === 400) {
      console.log(`  ✗ Error de validación: ${body.error}`)
      console.log(`  → Verifica variables de entorno en .env.local`)
    } else if (response.status === 401) {
      console.log(`  ✗ No autorizado (CRON_SECRET inválido)`)
      console.log(`  → Verifica header x-api-key`)
    } else {
      console.log(`  ✗ Error del servidor (${response.status})`)
    }
  } catch (error) {
    const errorMsg = error instanceof Error ? error.message : 'Unknown error'
    console.error(`\n❌ Error en el request:`)
    console.error(`   ${errorMsg}`)

    if (errorMsg.includes('ECONNREFUSED')) {
      console.log(`\n💡 Tip: ¿Está ejecutándose el dev server?`)
      console.log(`   npm run dev`)
    } else if (errorMsg.includes('getaddrinfo')) {
      console.log(`\n💡 Tip: Verifica la URL en API_URL`)
    }
  }
}

// Validar entorno
if (!process.env.SUPABASE_URL) {
  console.warn('⚠️  SUPABASE_URL no está configurada en .env.local')
}
if (!process.env.RESEND_API_KEY) {
  console.warn('⚠️  RESEND_API_KEY no está configurada en .env.local')
}

console.log('\n')
testNurturingAgent()
