import { FreeCheck } from '@/components/Blog/FreeCheck'
import { Posts } from '@/components/Blog/Posts'
import { Header } from '@/components/Blog/Header'
import { EmphasisPost } from '@/components/Blog/EmphasisPost'

type PostProps = {
  props: {
    id: string
    title: string
    content: string
    author: string
  }
}

export default async function index() {
  try {
    const response = await fetch(
      'http://localhost:3000/post/1ca017d9-297e-4a4e-843c-801642430c1c',
    )
    const json = await response.json()
  } catch (error) {
    console.log(error)
  }

  const response = await fetch(
    'http://localhost:3000/post/1ca017d9-297e-4a4e-843c-801642430c1c',
  )
  const json = await response.json()
  const post: PostProps = json
  console.log(post)

  return (
    <>
      <section className="flex flex-col items-center gap-8 px-6 pt-40 lg:px-20">
        <Header />
        <EmphasisPost props={post.props} />
      </section>
      <FreeCheck />
      <Posts />
    </>
  )
}
