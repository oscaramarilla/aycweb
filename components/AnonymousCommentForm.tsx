"use client"
import { useState } from 'react'

export default function AnonymousCommentForm({ slug }: { slug: string }) {
  const [status, setStatus] = useState<string>('')

  async function handleSubmit(e: any) {
    e.preventDefault()
    const form = e.target
    const comment = form.comment.value

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
    } catch (err: any) {
      setStatus(err?.message || 'Error al enviar')
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
