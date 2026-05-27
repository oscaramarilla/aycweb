-- Supabase trigger: POST new anonymous_comments rows to n8n webhook
-- NOTE: This script uses the 'pg_net' extension to perform HTTP requests from the DB.
-- If your Supabase project does not allow pg_net, use an Edge Function or Realtime webhook instead.

-- 1) Replace the webhook URL below with your n8n webhook URL (e.g. https://n8n.example.com/webhook/supabase-anon-comments)
-- 2) Run this SQL in Supabase SQL editor (Project -> SQL)

-- Enable extension (may require project-level permission)
create extension if not exists pg_net;

-- Create function to POST the new record to n8n
create or replace function public.notify_n8n_on_insert()
returns trigger
language plpgsql
as $$
declare
  webhook_url text := 'https://your-n8n.example.com/webhook/supabase-anon-comments'; -- <-- REPLACE with your n8n webhook URL
  payload text;
begin
  payload := json_build_object('new', row_to_json(NEW))::text;

  perform pg_net.send_http_request(
    'POST',
    webhook_url,
    json_build_object('Content-Type','application/json'),
    payload
  );

  return NEW;
end;
$$;

-- Create trigger on anonymous_comments table
drop trigger if exists trg_notify_n8n on public.anonymous_comments;
create trigger trg_notify_n8n
after insert on public.anonymous_comments
for each row
execute function public.notify_n8n_on_insert();

-- Example: Test payload (simulate an insert) — you can use this to POST to the webhook directly
-- Example payload JSON that n8n expects (as body):
-- {
--   "new": {
--     "id": "00000000-0000-0000-0000-000000000000",
--     "article_slug": "dejar-de-cotizar-excel",
--     "comment": "Nuestro Excel tarda 10 minutos en generar una cotización con 50 items.",
--     "status": "pending",
--     "created_at": "2026-05-27T12:34:56.789Z"
--   }
-- }

-- If pg_net is not available in your project, use an Edge Function or configure Supabase Realtime -> HTTP webhook to n8n.
