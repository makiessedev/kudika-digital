import { createClient } from '@/prismicio'
import { asText, asLink } from '@prismicio/helpers'

import { FreeCheck } from '@/components/Blog/FreeCheck'
import { Posts } from '@/components/Blog/Posts'
import { Header } from '@/components/Blog/Header'
import { EmphasisPost } from '@/components/Blog/EmphasisPost'
import { readingRate } from '@/Helpers/ReadingRate'

type Post = {
  uid: string
  title: string
  content: string
  description?: string
  coverUrl: string
  author: string
  authorUrl: string | null
  updatedAt: string
  readingRateInMinuts: number
}

export default async function index() {
  const prismic = createClient()

  const emphasisPostRaw = await prismic.getFirst()
  const emphasisPost: Post = {
    uid: emphasisPostRaw.uid,
    title: String(emphasisPostRaw.data.title),
    content: asText(emphasisPostRaw.data.content),
    readingRateInMinuts: readingRate(asText(emphasisPostRaw.data.content)),
    coverUrl: String(emphasisPostRaw.data.cover.url),
    author: String(emphasisPostRaw.data.author),
    authorUrl: asLink(emphasisPostRaw.data.authorurl),
    updatedAt: new Date(emphasisPostRaw.last_publication_date).toLocaleDateString('pt', {
      day: '2-digit',
      month: 'short',
      year: '2-digit'
    })
  }

  const allPostsRaw = await prismic.getAllByType('post', {
    orderings: [
      {
        field: 'my.post.date',
        direction: 'desc'
      }
    ]
  })

  const allPosts: Post[] = allPostsRaw.map((post) => {
    return {
      uid: post.uid,
      title: String(post.data.title),
      coverUrl: String(post.data.cover.url),
      description: String(post.data.description),
      content: asText(post.data.content),
      readingRateInMinuts: readingRate(asText(post.data.content)),
      author: String(post.data.author),
      authorUrl: asLink(post.data.authorurl),
      updatedAt: new Date(post.last_publication_date).toLocaleDateString('pt', {
        day: '2-digit',
        month: 'short',
        year: '2-digit'
      })
    }
  })

  return (
    <>
      <section className="flex flex-col items-center gap-8 px-6 pt-40 lg:px-20">
        <Header />
        <EmphasisPost data={emphasisPost} />
      </section>
      <FreeCheck />
      <Posts posts={allPosts} />
    </>
  )
}
