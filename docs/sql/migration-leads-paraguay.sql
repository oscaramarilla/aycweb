/**
 * SQL Migration: Tabla leads_paraguay
 * Guardar como: supabase/migrations/20260611000000_create_leads_paraguay.sql
 * 
 * O ejecutar directamente en Supabase SQL Editor
 */

-- ============================================
-- CREATE TABLE: leads_paraguay
-- ============================================

CREATE TABLE IF NOT EXISTS leads_paraguay (
  -- Primary Key
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  
  -- Contact Info
  email VARCHAR(255) NOT NULL UNIQUE,
  nombre VARCHAR(255),
  empresa VARCHAR(255),
  telefono VARCHAR(20),
  
  -- Lead Qualification
  tier CHAR(1) NOT NULL DEFAULT 'C' CHECK(tier IN ('A', 'B', 'C')),
  estado VARCHAR(50) NOT NULL DEFAULT 'nuevo' CHECK(
    estado IN ('nuevo', 'contactado', 'calificado', 'descartado', 'cliente')
  ),
  
  -- Timestamps
  created_at TIMESTAMP NOT NULL DEFAULT now(),
  last_contacted TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT now(),
  
  -- Metadata
  metadata JSONB DEFAULT '{}'::jsonb,
  source VARCHAR(50), -- 'website', 'referral', 'manual', etc.
  notes TEXT,
  
  -- Indexing optimization
  CONSTRAINT valid_email CHECK(email LIKE '%@%.%')
);

-- ============================================
-- CREATE INDEXES
-- ============================================

CREATE INDEX IF NOT EXISTS idx_leads_paraguay_tier_estado 
  ON leads_paraguay(tier, estado);

CREATE INDEX IF NOT EXISTS idx_leads_paraguay_email 
  ON leads_paraguay(email);

CREATE INDEX IF NOT EXISTS idx_leads_paraguay_created_at 
  ON leads_paraguay(created_at DESC);

CREATE INDEX IF NOT EXISTS idx_leads_paraguay_last_contacted 
  ON leads_paraguay(last_contacted DESC);

CREATE INDEX IF NOT EXISTS idx_leads_paraguay_tier 
  ON leads_paraguay(tier);

-- ============================================
-- CREATE UPDATED_AT TRIGGER
-- ============================================

CREATE OR REPLACE FUNCTION update_leads_paraguay_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER leads_paraguay_updated_at_trigger
BEFORE UPDATE ON leads_paraguay
FOR EACH ROW
EXECUTE FUNCTION update_leads_paraguay_updated_at();

-- ============================================
-- ENABLE ROW LEVEL SECURITY (Optional pero recomendado)
-- ============================================

ALTER TABLE leads_paraguay ENABLE ROW LEVEL SECURITY;

-- Policy: Service role puede hacer todo
CREATE POLICY leads_paraguay_service_role
  ON leads_paraguay
  USING (auth.role() = 'service_role')
  WITH CHECK (auth.role() = 'service_role');

-- Policy: Anon role solo lectura (si necesitas)
-- CREATE POLICY leads_paraguay_anon_read
--   ON leads_paraguay
--   FOR SELECT
--   USING (true);

-- ============================================
-- SAMPLE DATA (Para testing)
-- ============================================

-- Descomentar para insertar datos de prueba:
/*
INSERT INTO leads_paraguay (email, nombre, empresa, tier, estado, source)
VALUES
  ('test.tierb@example.com', 'Juan García', 'TechCorp Paraguay', 'B', 'nuevo', 'manual'),
  ('test.tierc@example.com', 'María López', 'BuildIt SRL', 'C', 'nuevo', 'website'),
  ('test.tierad@example.com', 'Carlos Ruiz', 'Logistics+ Inc', 'A', 'nuevo', 'referral'),
  ('contactado@example.com', 'Ana Martínez', 'Innovate Ltd', 'B', 'contactado', 'manual');
*/

-- ============================================
-- VERIFICATION QUERIES
-- ============================================

-- Verificar tabla creada:
-- SELECT * FROM leads_paraguay;

-- Contar leads por tier:
-- SELECT tier, COUNT(*) as count FROM leads_paraguay GROUP BY tier;

-- Leads nuevos sin contactar:
-- SELECT id, email, empresa, tier FROM leads_paraguay 
-- WHERE estado = 'nuevo' AND last_contacted IS NULL;

-- Leads Tier B y C nuevos (lo que procesa el agente):
-- SELECT id, email, nombre, empresa, tier 
-- FROM leads_paraguay 
-- WHERE tier IN ('B', 'C') AND estado = 'nuevo' AND last_contacted IS NULL
-- ORDER BY created_at ASC
-- LIMIT 100;
