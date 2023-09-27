import { createClient } from '@/prismicio'
import { asText, asLink, asDate } from '@prismicio/helpers'

import { FreeCheck } from '@/components/Blog/FreeCheck'
import { Posts } from '@/components/Blog/Posts'
import { Header } from '@/components/Blog/Header'
import { EmphasisPost } from '@/components/Blog/EmphasisPost'

type Post = {
  uid: string
  title: string
  content: string
  coverUrl: string
  author: string
  authorUrl: string | null
  updatedAt: string
}

export default async function index() {
  const prismic = createClient()
  const postRaw = await prismic.getFirst()
  const post: Post = {
    uid: postRaw.uid,
    title: String(postRaw.data.title),
    content: asText(postRaw.data.content),
    coverUrl: String(postRaw.data.cover.url),
    author: String(postRaw.data.author),
    authorUrl: asLink(postRaw.data.authorurl),
    updatedAt: new Date(postRaw.last_publication_date).toLocaleDateString('pt', {
      day: '2-digit',
      month: 'short',
      year: '2-digit'
    })
  }

  return (
    <>
      <section className="flex flex-col items-center gap-8 px-6 pt-40 lg:px-20">
        <Header />
        <EmphasisPost data={post} />
      </section>
      <FreeCheck />
      <Posts />
    </>
  )
}
