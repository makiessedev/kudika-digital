import { createClient } from '@/prismicio'
import { asHTML } from '@prismicio/helpers'

import { Post } from '@/components/Blog/Post'

type Slug = {
  params: {
    id: string
  }
}

export default async function index({ params }: Slug) {
  const prismic = createClient()
  const postRaw = await prismic.getByUID('post', params.id)
  const post = {
    title: String(postRaw.data.title),
    description: String(postRaw.data.description),
    content: asHTML(postRaw.data.content)
  }

  return <Post data={post} />
}
