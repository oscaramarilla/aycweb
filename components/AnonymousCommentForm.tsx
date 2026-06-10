"use client"
import { useState } from 'react'

export default function AnonymousCommentForm({ slug }: { slug: string }) {
  const [status, setStatus] = useState<string>('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const comment = (form.elements.namedItem('comment') as HTMLTextAreaElement).value

    try {
      const res = await fetch('/api/submit-comment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ comment, slug }),
      })
      const json = await res.json()
      if (!res.ok) throw new Error(json.error || 'Error')
      setStatus('¡Comentario enviado y en revisión!')
      form.reset()
    } catch (err: unknown) {
      setStatus(err instanceof Error ? err.message : 'Error al enviar')
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: 24 }}>
      <label style={{ display: 'block', marginBottom: 8 }}>Comentarios (anónimo)</label>
      <textarea name="comment" required rows={4} style={{ width: '100%' }} placeholder="Cuenta tu experiencia..." />
      <input type="hidden" name="slug" value={slug} />
      <button type="submit" style={{ marginTop: 8 }}>Enviar</button>
      {status && <p style={{ marginTop: 8 }}>{status}</p>}
    </form>
  )
}
