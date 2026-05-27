import fs from 'fs/promises'
import path from 'path'
import AnonymousCommentForm from '@/components/AnonymousCommentForm';
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote/rsc'

// 1. Corregimos el tipo para que acepte la Promesa
type Props = {
  params: Promise<{ lang: string; slug: string }>
}

// 2. Convertimos la lectura en asíncrona
export default async function Page({ params }: Props) {
  // 3. Esperamos a que los parámetros se resuelvan
  const { lang, slug } = await params;
  
  const contentPath = path.join(process.cwd(), 'app', '[lang]', '(marketing)', 'recursos', 'content', `${slug}.mdx`);
  let raw = '';
  
  try {
    raw = await fs.readFile(contentPath, 'utf8');
  } catch (err) {
    raw = '# No se encontró el artículo\nEl recurso solicitado no está disponible actualmente.';
  }

  const mdxSource = await serialize(raw);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 py-20">
      <div className="max-w-3xl mx-auto px-6">
        <article className="prose prose-invert lg:prose-xl">
          <MDXRemote source={raw} />
        </article>
        
        <hr className="border-slate-800 my-12" />
        
        <AnonymousCommentForm slug={slug} />
      </div>
    </div>
  );
}
