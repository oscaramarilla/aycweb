import fs from 'fs/promises'
import path from 'path'
import AnonymousCommentForm from '@/components/AnonymousCommentForm';
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote/rsc'

type Props = {
  params: { lang: string; slug: string }
}

export default async function Page({ params }: Props) {
  const { lang, slug } = params
  const contentPath = path.join(process.cwd(), 'app', lang, '(marketing)', 'recursos', 'content', `${slug}.mdx`)
  let raw = ''
  try {
    raw = await fs.readFile(contentPath, 'utf8')
  } catch (err) {
    raw = `# No se encontró el artículo: ${slug}`
  }

  const mdxSource = await serialize(raw, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
  })

  return (
    <main>
      <article>
        {/* Render MDX safely via next-mdx-remote for App Router server components */}
        {/* @ts-ignore */}
        <MDXRemote source={mdxSource} />
      </article>
      {/* @ts-ignore client component inside server component */}
      <AnonymousCommentForm slug={slug} />
    </main>
  )
}
