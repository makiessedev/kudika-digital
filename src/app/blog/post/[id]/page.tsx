import { Post } from '@/components/Blog/Post'
import { createClient } from '@/prismicio'

type Slug = {
  params: {
    id: string
  }
}

type PostProps = {
  data: {
    title: string
    description: string
    content: string
  }
}

export default async function index({ params }: Slug) {
  const prismic = createClient()
  const post: any = await prismic.getByUID('post', params.id)

  return <Post data={post} />
}
