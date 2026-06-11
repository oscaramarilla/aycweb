# 🤖 Agente de Nurturing B2B con Resend

Sistema automatizado para enviar emails de nurturing a leads Tier B y C mediante un cron job en Next.js + Supabase + Resend.

## 📋 Requisitos Previos

1. **Tabla en Supabase**: `leads_paraguay` con estructura:
   ```sql
   -- Campos requeridos:
   - id (UUID, PK)
   - email (STRING, unique)
   - nombre (STRING)
   - empresa (STRING)
   - tier (STRING: 'A', 'B', 'C')
   - estado (STRING: 'nuevo', 'contactado', 'calificado', etc.)
   - created_at (TIMESTAMP)
   - last_contacted (TIMESTAMP, nullable)
   - metadata (JSONB, optional)
   ```

2. **Cuentas de servicio**:
   - ✅ Supabase con API Key y URL
   - ✅ Resend (resend.com) con API Key

## 🚀 Instalación

### 1. Instalar dependencias

```bash
npm install
```

Las dependencias ya están agregadas a `package.json`:
- `resend@^4.0.0` - SDK para envío de emails
- `@supabase/supabase-js` - Cliente Supabase (ya existente)

### 2. Configurar variables de entorno (`.env.local`)

```bash
# Supabase
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
# O usar SUPABASE_ANON_KEY como fallback:
# SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# Resend
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# Email
NURTURING_EMAIL_FROM=noreply@aycweb.com

# Seguridad (opcional pero recomendado)
CRON_SECRET=your-secure-random-string-here
```

**⚠️ Notas de seguridad**:
- Nunca commitear `.env.local` a git
- Usar `SUPABASE_SERVICE_KEY` en lugar de `SUPABASE_ANON_KEY` para máximos permisos
- En Vercel, agregar variables bajo **Settings → Environment Variables**

### 3. Crear tabla en Supabase

```sql
CREATE TABLE leads_paraguay (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) NOT NULL UNIQUE,
  nombre VARCHAR(255),
  empresa VARCHAR(255),
  tier CHAR(1) NOT NULL CHECK(tier IN ('A', 'B', 'C')),
  estado VARCHAR(50) NOT NULL DEFAULT 'nuevo',
  created_at TIMESTAMP NOT NULL DEFAULT now(),
  last_contacted TIMESTAMP,
  metadata JSONB DEFAULT '{}'::jsonb,
  
  CONSTRAINT valid_tier CHECK(tier IN ('A', 'B', 'C')),
  CONSTRAINT valid_estado CHECK(estado IN ('nuevo', 'contactado', 'calificado', 'descartado'))
);

-- Índices para optimización
CREATE INDEX idx_leads_paraguay_tier_estado 
  ON leads_paraguay(tier, estado);
CREATE INDEX idx_leads_paraguay_last_contacted 
  ON leads_paraguay(last_contacted);
CREATE INDEX idx_leads_paraguay_created_at 
  ON leads_paraguay(created_at);
```

### 4. Verificar dominio en Resend (si usas email propio)

Si usas `NURTURING_EMAIL_FROM=noreply@aycweb.com`:

1. Ve a [Resend Dashboard](https://resend.com/emails)
2. Configura tu dominio `aycweb.com`
3. Agrega registros DNS (DKIM, SPF, DMARC)
4. Verifica el dominio

Para testing rápido, usa un email de dominio Resend:
```bash
NURTURING_EMAIL_FROM=onboarding@resend.dev
```

## 📅 Configuración del Cron Job

### Opción A: Vercel Crons (Recomendado)

Ya está configurado en `vercel.json`:

```json
{
  "crons": [
    {
      "path": "/api/cron/nurturing",
      "schedule": "0 9 * * *",
      "description": "Agente de Nurturing: 9 AM UTC diariamente"
    }
  ]
}
```

**Cambiar horario**:
- `0 9 * * *` → 09:00 UTC diariamente
- `0 9 * * 1-5` → Lunes a viernes
- `0 */3 * * *` → Cada 3 horas
- Usar [cron.guru](https://cron.guru) para validar

### Opción B: Ejecución Local/Manual

```bash
# Terminal 1: Iniciar dev server
npm run dev

# Terminal 2: Llamar al endpoint manualmente
curl -X GET http://localhost:3000/api/cron/nurturing \
  -H "x-api-key: your-cron-secret"

# O con PowerShell:
Invoke-WebRequest -Uri http://localhost:3000/api/cron/nurturing `
  -Headers @{'x-api-key'='your-cron-secret'}
```

## 🔧 Funcionalidad del Agente

### Flujo de Ejecución

```
1. GET /api/cron/nurturing
   ↓
2. Validar variables de entorno
   ↓
3. Consultar Supabase: leads_paraguay (tier IN ('B', 'C') AND estado = 'nuevo')
   ↓
4. Para cada lead:
   a) Renderizar plantilla de email (HTML profesional)
   b) Enviar vía Resend API
   c) Si éxito: actualizar estado a 'contactado' + metadata
   d) Si error: registrar en logs
   ↓
5. Retornar JSON con resumen de ejecución
```

### Ejemplo de Respuesta

```json
{
  "success": true,
  "leadsProcessed": 45,
  "leadsContacted": 43,
  "errors": [
    {
      "leadId": "abc123",
      "email": "invalid@example.com",
      "reason": "Invalid email address"
    }
  ],
  "executionTime": 12453
}
```

## 📧 Plantilla de Email

La plantilla se personaliza según el `tier` del lead:

### Tier B - "Optimización Operativa a Escala"
- Enfoque en provisión de mobiliario institucional
- CTA: "Solicitar Demo"
- Mensaje: 800+ unidades en 60 días

### Tier C - "Soluciones Rápidas de Infraestructura"
- Enfoque en cabañas modulares térmicas
- CTA: "Conocer Soluciones"
- Mensaje: 100+ unidades en 60 días

**Personalización**: Editar `lib/email-templates/nurturing-email.tsx`

## 🐛 Monitoreo y Debugging

### Logs en Consola

El agente genera logs detallados:

```
[nurturing] Starting nurturing agent execution...
[nurturing] Found 45 new leads to contact
[nurturing] ✓ Lead abc123 (lead@company.com) contactado exitosamente
[nurturing] Execution complete: 43/45 leads contacted, 2 failed. Time: 12453ms
```

### Verificar ejecución en Vercel

1. Ve a tu proyecto en Vercel Dashboard
2. **Deployments → Functions** (o **Cron Jobs**)
3. Busca `/api/cron/nurturing`
4. Ver logs de última ejecución

### Debugging Local

```bash
# Archivo .env.local con valores de testing
npm run dev

# En otra terminal:
curl -v http://localhost:3000/api/cron/nurturing
```

## 🔐 Seguridad

### Proteger el endpoint

Agregua `CRON_SECRET` en `.env.local`:

```bash
CRON_SECRET=abc123def456ghi789
```

El agente validará este header en cada request:

```bash
curl -X GET http://localhost:3000/api/cron/nurturing \
  -H "x-api-key: abc123def456ghi789"
```

### En Vercel

Vercel automáticamente valida Cron Jobs, pero es buena práctica:

1. Generar secret aleatorio:
   ```bash
   openssl rand -base64 32
   ```
2. Agregar a Vercel Settings → Environment Variables
3. Validar en el código (ya implementado)

## 📊 Caso de Uso: Simulación

### Datos en Supabase

```sql
INSERT INTO leads_paraguay (email, nombre, empresa, tier, estado)
VALUES
  ('contact1@techcorp.py', 'Juan García', 'TechCorp', 'B', 'nuevo'),
  ('contact2@buildit.py', 'María López', 'BuildIt', 'C', 'nuevo'),
  ('contact3@logistics.py', 'Carlos Ruiz', 'Logistics+', 'A', 'nuevo');  -- No procesado (Tier A)
```

### Ejecución

```bash
curl http://localhost:3000/api/cron/nurturing
```

### Resultado

- ✅ `contact1@techcorp.py` → Email Tier B → Estado = 'contactado'
- ✅ `contact2@buildit.py` → Email Tier C → Estado = 'contactado'
- ⏭️ `contact3@logistics.py` → No procesado (Tier A para WhatsApp)

### En Supabase

```sql
SELECT id, email, tier, estado, last_contacted, metadata
FROM leads_paraguay
ORDER BY last_contacted DESC;

-- Resultado:
-- id          | email                   | tier | estado      | last_contacted        | metadata
-- abc123      | contact1@techcorp.py    | B    | contactado  | 2026-06-11 09:15:00   | {"email_message_id": "..."}
-- def456      | contact2@buildit.py     | C    | contactado  | 2026-06-11 09:16:00   | {"email_message_id": "..."}
-- ghi789      | contact3@logistics.py   | A    | nuevo       | NULL                  | {}
```

## 🚨 Troubleshooting

### Error: "SUPABASE_URL not set"

**Causa**: Variable de entorno faltante
**Solución**: Agregar `SUPABASE_URL` a `.env.local` y reiniciar dev server

### Error: "RESEND_API_KEY not set"

**Causa**: API Key de Resend faltante
**Solución**: 
1. Ve a https://resend.com/api-keys
2. Genera una nueva API Key
3. Agregar a `.env.local`: `RESEND_API_KEY=re_...`

### Error: "Invalid email address"

**Causa**: Email inválido en Supabase
**Solución**: Validar datos en `leads_paraguay`, ejecutar:
```sql
DELETE FROM leads_paraguay WHERE email NOT LIKE '%@%';
```

### Error: "Email sent but DB update failed"

**Causa**: Permiso insuficiente en Supabase
**Solución**: Usar `SUPABASE_SERVICE_KEY` en lugar de `SUPABASE_ANON_KEY`

### Error: "Too many requests" (Rate limiting de Resend)

**Causa**: Resend tiene límites de rate
**Solución**: 
- Reducir `limit` en `fetchNewLeads()` de 100 a 50
- Aumentar delay en `processLeads()` de 500ms a 1000ms

## 📚 Archivos Clave

| Archivo | Propósito |
|---------|-----------|
| `app/api/cron/nurturing/route.ts` | Lógica principal del agente |
| `lib/email-templates/nurturing-email.tsx` | Plantilla HTML del email |
| `vercel.json` | Configuración del cron schedule |
| `lib/supabaseClient.ts` | Cliente Supabase (existente) |

## 🔄 Flujo Completo (Visual)

```
Daily 09:00 UTC
       ↓
Vercel triggers GET /api/cron/nurturing
       ↓
fetchNewLeads() → Supabase query (Tier B,C + estado='nuevo')
       ↓
processLeads() 
  ├→ sendNurturingEmail() → Resend API
  ├→ updateLeadStatus() → Supabase (estado='contactado')
  └→ Log results
       ↓
Return JSON summary
       ↓
Alert if failures (opcional: Slack, Telegram, etc.)
```

## 🎯 Próximas Mejoras (Optional)

- [ ] Integración con Slack/Telegram para alertas de fallas
- [ ] Dashboard de métricas (leads contactados, tasa de apertura, etc.)
- [ ] A/B testing de asuntos de emails
- [ ] Seguimiento automático (retry si no abrieron en 3 días)
- [ ] Webhook de Resend para tracking de eventos (opened, clicked, bounced)

## 📞 Soporte

Para problemas:
1. Verificar logs en Vercel o consola local
2. Validar variables de entorno
3. Probar manualmente el endpoint
4. Revisar tabla `leads_paraguay` en Supabase Dashboard

---

**Creado**: 2026-06-11  
**Versión**: 1.0.0  
**Status**: Production Ready ✅
