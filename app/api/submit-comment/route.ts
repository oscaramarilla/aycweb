import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = process.env.SUPABASE_URL
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY || process.env.SUPABASE_ANON_KEY

const supabase = createClient(SUPABASE_URL || '', SUPABASE_SERVICE_KEY || '')

export async function POST(req: Request) {
  try {
    const data = await req.json()
    const { comment, slug } = data
    if (!comment || !slug) return NextResponse.json({ error: 'Faltan datos' }, { status: 400 })

    const { error } = await supabase.from('anonymous_comments').insert([{ article_slug: slug, comment, status: 'pending' }])
    if (error) return NextResponse.json({ error: error.message }, { status: 500 })

    return NextResponse.json({ success: true })
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : 'Unknown error';
    return NextResponse.json({ error: errorMessage }, { status: 500 })
  }
}
