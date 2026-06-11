-- Tabla de leads del hub Invertir en Paraguay
-- Ejecutar en el SQL Editor de Supabase (una sola vez).
-- Si la tabla ya existe, ejecutar solo los ALTER TABLE del final.

create table if not exists public.leads_paraguay (
  id          uuid primary key default gen_random_uuid(),
  created_at  timestamptz not null default now(),
  source      text not null default 'invertir-en-paraguay',

  nombre      text not null,
  empresa     text,
  email       text not null,
  whatsapp    text not null,
  pais        text not null,
  sector      text not null,
  objetivo    text not null,
  capital     text not null,
  horizonte   text not null,
  mensaje     text,

  -- Internacionalización: idioma del visitante al enviar (es/en/pt/de)
  locale      text,

  -- Scoring automático (lib/domain/leadScoring.ts)
  score       integer,
  tier        text check (tier in ('A', 'B', 'C')),

  -- Seguimiento manual
  estado      text not null default 'nuevo'
              check (estado in ('nuevo', 'contactado', 'llamada', 'propuesta', 'cliente', 'descartado')),
  notas       text
);

-- Si la tabla ya existía sin estas columnas:
alter table public.leads_paraguay add column if not exists locale text;
alter table public.leads_paraguay add column if not exists score integer;
alter table public.leads_paraguay add column if not exists tier text;
alter table public.leads_paraguay add column if not exists estado text default 'nuevo';
alter table public.leads_paraguay add column if not exists notas text;

-- Índices para el panel
create index if not exists leads_paraguay_created_idx on public.leads_paraguay (created_at desc);
create index if not exists leads_paraguay_tier_idx on public.leads_paraguay (tier);

-- RLS: la service key (server) bypasea RLS; bloquear acceso anónimo.
alter table public.leads_paraguay enable row level security;
