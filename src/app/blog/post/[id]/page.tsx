import { Post } from '@/components/Blog/Post'

type Slug = {
  params: {
    id: string
  }
}

type Post = {
  props: {
    title: string
    content: string
    description: string
  }
}

export default async function index({ params }: Slug) {
  const response = await fetch(`http://localhost:3000/post/${params.id}`, {
    next: {
      revalidate: 5,
    },
  })

  const post: Post = await response.json()

  return <Post props={post.props} />
}
