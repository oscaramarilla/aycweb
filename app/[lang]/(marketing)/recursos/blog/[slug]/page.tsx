import fs from 'fs/promises'
import path from 'path'
import AnonymousCommentForm from '@/components/AnonymousCommentForm'
import CommentsList from '@/components/blog/CommentsList'
import { MDXRemote } from 'next-mdx-remote/rsc'

// 1. Tipo que acepta la Promesa de params (Next.js 15+)
type Props = {
  params: Promise<{ lang: string; slug: string }>
}

// 2. Página asíncrona que espera los parámetros
export default async function Page({ params }: Props) {
  const { lang, slug } = await params

  const contentPath = path.join(
    process.cwd(),
    'app',
    '[lang]',
    '(marketing)',
    'recursos',
    'content',
    `${slug}.mdx`
  )

  let raw = ''

  try {
    raw = await fs.readFile(contentPath, 'utf8')
  } catch {
    raw =
      '# No se encontró el artículo\nEl recurso solicitado no está disponible actualmente.'
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 py-20">
      <div className="max-w-3xl mx-auto px-6">
        <article className="prose prose-invert lg:prose-xl">
          <MDXRemote source={raw} />
        </article>

        <hr className="border-slate-800 my-12" />

        {/* Lista de comentarios aprobados */}
        <CommentsList slug={slug} />

        {/* Formulario para nuevos comentarios */}
        <AnonymousCommentForm slug={slug} />
      </div>
    </div>
  )
}
