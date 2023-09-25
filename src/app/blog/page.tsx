import { FreeCheck } from '@/components/Blog/FreeCheck'
import { Posts } from '@/components/Blog/Posts'
import { Header } from '@/components/Blog/Header'
import { EmphasisPost } from '@/components/Blog/EmphasisPost'
import { createClient } from '@/prismicio'

type PostProps = {
  props: {
    id: string
    title: string
    content: string
    author: string
  }
}

export default async function index() {
  const prismic = createClient()
  const post = await prismic.getFirst()

  return (
    <>
      <section className="flex flex-col items-center gap-8 px-6 pt-40 lg:px-20">
        <Header />
        <EmphasisPost props={post} />
      </section>
      <FreeCheck />
      <Posts />
    </>
  )
}
