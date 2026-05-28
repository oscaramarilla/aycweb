'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'

interface Comment {
  id: string
  article_slug: string
  comment: string
  status: string
  created_at: string
}

interface CommentsListProps {
  slug: string
}

export default function CommentsList({ slug }: CommentsListProps) {
  const [comments, setComments] = useState<Comment[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchComments() {
      setLoading(true)
      const { data, error } = await supabase
        .from('anonymous_comments')
        .select('*')
        .eq('article_slug', slug)
        .eq('status', 'approved')
        .order('created_at', { ascending: false })

      if (!error && data) {
        setComments(data)
      }
      setLoading(false)
    }

    fetchComments()
  }, [slug])

  function formatDate(dateString: string) {
    return new Date(dateString).toLocaleDateString('es-PY', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  return (
    <section className="mt-12 mb-10">
      {/* Encabezado */}
      <div className="flex items-center gap-3 mb-6">
        <h2 className="text-lg font-semibold text-slate-200 tracking-tight">
          Experiencias de la comunidad
        </h2>
        {!loading && comments.length > 0 && (
          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-800 border border-slate-700 text-xs text-slate-400 font-medium">
            {comments.length}
          </span>
        )}
      </div>

      {/* Loading state */}
      {loading && (
        <div className="space-y-4">
          {[...Array(2)].map((_, i) => (
            <div
              key={i}
              className="w-full p-5 rounded-2xl bg-slate-900/40 border border-slate-800/60 animate-pulse"
            >
              <div className="h-3 bg-slate-800 rounded w-24 mb-3" />
              <div className="h-4 bg-slate-800 rounded w-full mb-2" />
              <div className="h-4 bg-slate-800 rounded w-3/4" />
            </div>
          ))}
        </div>
      )}

      {/* Empty state */}
      {!loading && comments.length === 0 && (
        <div className="w-full py-12 flex flex-col items-center justify-center text-center rounded-2xl bg-slate-900/30 border border-slate-800/40">
          <div className="text-3xl mb-3">💬</div>
          <p className="text-slate-400 text-sm max-w-xs leading-relaxed">
            Aún no hay experiencias compartidas.
            <br />
            <span className="text-slate-500">Sé el primero en sumar la tuya.</span>
          </p>
        </div>
      )}

      {/* Lista de comentarios */}
      {!loading && comments.length > 0 && (
        <ul className="space-y-4">
          {comments.map((comment) => (
            <li key={comment.id}>
              <div
                className="
                  w-full p-5 rounded-2xl
                  bg-slate-900/40
                  border border-slate-800/60
                  backdrop-blur-sm
                  transition-colors duration-200
                  hover:bg-slate-900/60
                  hover:border-slate-700/60
                "
              >
                {/* Fecha */}
                <p className="text-xs text-slate-500 mb-2 font-medium tracking-wide uppercase">
                  {formatDate(comment.created_at)}
                </p>

                {/* Contenido del comentario */}
                <p className="text-slate-300 text-sm md:text-base leading-relaxed whitespace-pre-wrap">
                  {comment.comment}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
