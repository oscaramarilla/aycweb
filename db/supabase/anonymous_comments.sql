-- Supabase: create table for anonymous comments
-- Run this in your Supabase SQL editor

create table if not exists public.anonymous_comments (
  id uuid default gen_random_uuid() primary key,
  article_slug text not null,
  comment text not null,
  status text not null default 'pending',
  created_at timestamptz not null default now()
);

-- Optional: allow inserts from the public anon role but restrict selects
-- Grant insert only (be careful with public write access)
-- grant insert on public.anonymous_comments to anon;
