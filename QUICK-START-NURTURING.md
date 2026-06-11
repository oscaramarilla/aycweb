# ⚡ Quick Start - Agente de Nurturing B2B

## 📋 Setup en 5 Pasos

### 1️⃣ **Configurar Variables de Entorno**

```bash
# Copiar template
cp .env.local.example .env.local

# Editar con tus credenciales reales
# - SUPABASE_URL + SUPABASE_SERVICE_KEY (desde Supabase Dashboard)
# - RESEND_API_KEY (desde resend.com)
# - NURTURING_EMAIL_FROM (debe estar verificado en Resend)
# - CRON_SECRET (opcional, para seguridad)
```

### 2️⃣ **Crear Tabla en Supabase**

```bash
# Opción A: SQL Editor en Supabase Dashboard
# → Copy & paste: docs/sql/migration-leads-paraguay.sql
# → Execute

# Opción B: CLI Supabase
supabase db push
```

**Estructura de tabla (validar):**
```sql
SELECT column_name, data_type, is_nullable
FROM information_schema.columns
WHERE table_name = 'leads_paraguay'
ORDER BY ordinal_position;
```

### 3️⃣ **Testear Localmente**

```bash
# Terminal 1: Inicia servidor
npm run dev

# Terminal 2: En otra terminal, ejecuta test
npm run test:nurturing
```

**Resultado esperado:**
```json
{
  "success": true,
  "leadsProcessed": 5,
  "leadsContacted": 5,
  "errors": [],
  "executionTime": 3421
}
```

### 4️⃣ **Verificar Configuración en Vercel**

```bash
# Vercel → Settings → Environment Variables
# Agregar todas las variables de .env.local:
- SUPABASE_URL
- SUPABASE_SERVICE_KEY
- RESEND_API_KEY
- NURTURING_EMAIL_FROM
- CRON_SECRET
```

### 5️⃣ **Deploy & Verificar**

```bash
# Push a main (git commit + push)
git add -A
git commit -m "feat: nurturing agent setup"
git push origin main

# Vercel desplegará automáticamente
# El cron se ejecutará todos los días a las 9 AM UTC
```

---

## 🧪 Testing & Debugging

### Test Manual

```bash
# Con secret
curl -H "x-api-key: your-secret-key" \
  http://localhost:3000/api/cron/nurturing

# Sin secret
curl http://localhost:3000/api/cron/nurturing
```

### Ver Logs en Vercel

```bash
vercel logs --project=aycweb --follow

# Buscar [nurturing] en los logs
```

### SQL para Verificar Leads

```sql
-- Leads contactados recientemente
SELECT id, email, tier, estado, last_contacted
FROM leads_paraguay
WHERE estado = 'contactado'
  AND last_contacted > NOW() - INTERVAL '24 hours'
ORDER BY last_contacted DESC;

-- Leads pendientes
SELECT id, email, tier, estado, created_at
FROM leads_paraguay
WHERE estado = 'nuevo'
  AND tier IN ('B', 'C')
ORDER BY created_at ASC
LIMIT 10;
```

---

## 🔍 Archivos Clave

| Archivo | Propósito |
|---------|----------|
| `app/api/cron/nurturing/route.ts` | Handler del cron job |
| `lib/email-templates/nurturing-email.tsx` | Plantilla HTML del email |
| `scripts/test-nurturing.mjs` | Script de testing |
| `vercel.json` | Configuración del cron (schedule) |
| `.env.local.example` | Variables de entorno |
| `docs/AGENTE-NURTURING.md` | Documentación completa |
| `docs/sql/migration-leads-paraguay.sql` | Script SQL |

---

## ⚠️ Checklist de Seguridad

- [ ] CRON_SECRET configurado en Vercel
- [ ] SUPABASE_SERVICE_KEY (no ANON_KEY) en producción
- [ ] RESEND_API_KEY está configurada
- [ ] Dominio de email verificado en Resend
- [ ] `.env.local` NO está en git (.gitignore activo)
- [ ] RLS (Row Level Security) habilitado en tabla

---

## 🐛 Troubleshooting Rápido

| Problema | Solución |
|----------|----------|
| "SUPABASE_SERVICE_KEY not set" | Verifica `.env.local` y `vercel env pull` |
| "Unauthorized cron execution" | Header `x-api-key` no coincide con `CRON_SECRET` |
| "Invalid email format from Resend" | Valida emails en BD: `SELECT email FROM leads_paraguay WHERE email NOT LIKE '%@%'` |
| El cron no se ejecuta | Plan Vercel debe ser Pro+. Checkea logs: `vercel logs --follow` |
| Email no se envía | Verifica Resend API Key y dominio verificado |

---

## 📊 Métricas por Ejecutar

```sql
-- Tasa de éxito
SELECT 
  COUNT(*) as total_leads,
  COUNT(CASE WHEN estado = 'contactado' THEN 1 END) as contacted,
  ROUND(100.0 * COUNT(CASE WHEN estado = 'contactado' THEN 1 END) / COUNT(*), 2) as success_rate
FROM leads_paraguay
WHERE tier IN ('B', 'C')
  AND created_at > NOW() - INTERVAL '7 days';

-- Distribución por tier
SELECT tier, COUNT(*) as count, estado
FROM leads_paraguay
WHERE tier IN ('B', 'C')
GROUP BY tier, estado
ORDER BY tier, estado;
```

---

## 📞 Próximos Pasos

1. **[Opcional] Integración con n8n**
   - Webhook para agregar leads automáticamente a Supabase
   - Scoring automático de tiers

2. **[Opcional] Dashboard de Analytics**
   - Ver tasa de éxito de emails
   - Tiempo de respuesta de leads
   - Conversión por tier

3. **[Opcional] Seguimiento Automático**
   - Emails de seguimiento después de 5 días sin respuesta
   - Escalación a ventas si hay respuesta

---

**Documentación completa:** Vé a `docs/AGENTE-NURTURING.md`  
**Última actualización:** 2026-06-11
