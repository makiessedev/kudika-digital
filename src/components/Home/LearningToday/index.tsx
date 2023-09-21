import Image from 'next/image'
import { Paragraph } from './Paragraph'
import { Title } from './Title'
import { redirect } from 'next/navigation'
import { Post } from './Post'

type PostProps = {
  props: {
    id: string
    title: string
    imageUrl: string
    content: string
    author: string
  }
}

export async function LearningToday() {
  const response = await fetch('http://localhost:3000/post/all')
  const json = await response.json()
  const allPost: PostProps[] = json
  const lastThreePosts = allPost.slice(-3)

  return (
    <section className="mb-6 mt-8 space-y-4 px-6 py-10 lg:px-20">
      <div className="flex flex-col items-center gap-4">
        <Title>aprendizado de hoje</Title>
        <Paragraph>Veja os últimos textos da equipe kudika digital</Paragraph>
      </div>
      <section className="md:grid md:grid-cols-2 lg:grid-cols-3">
        {lastThreePosts.map(({ props }) => (
          <Post key={props.id} props={props} />
        ))}
      </section>
    </section>
  )
}
