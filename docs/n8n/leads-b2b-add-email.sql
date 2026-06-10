-- Migration: Add email column to leads_b2b table
-- Run this in the Supabase SQL Editor (Project → SQL)
-- Safe to run multiple times (IF NOT EXISTS)

ALTER TABLE public.leads_b2b
  ADD COLUMN IF NOT EXISTS email text;

-- Optional: index for lookup/dedup by email
CREATE INDEX IF NOT EXISTS idx_leads_b2b_email ON public.leads_b2b (email)
  WHERE email IS NOT NULL;

-- Verify
-- SELECT column_name, data_type FROM information_schema.columns
-- WHERE table_name = 'leads_b2b' AND table_schema = 'public';
