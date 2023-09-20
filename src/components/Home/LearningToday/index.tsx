import { Paragraph } from './Paragraph'
import { Title } from './Title'

type PostProps = {
  props: {
    id: string
    title: string
    content: string
    author: string
  }
}

export async function LearningToday() {
  const response = await fetch('http://localhost:3000/post/all')
  const json = await response.json()
  const allPost: PostProps = json

  return (
    <section className="mb-6 mt-8 space-y-4 px-6 py-10 lg:px-20">
      <div className="flex flex-col items-center gap-4">
        <Title>aprendizado de hoje</Title>
        <Paragraph>Veja os últimos textos da equipe kudika digital</Paragraph>
      </div>
      <section className="md:grid md:grid-cols-2 lg:grid-cols-3">
        {}
        <div className="mb-4 flex h-[305px] items-center justify-center space-y-2 bg-red-500 p-7 text-2xl font-black text-gray-100 md:m-6">
          POST_1
        </div>
        <div className="mb-4 flex h-[305px] items-center justify-center space-y-2 bg-red-500 p-7 text-2xl font-black text-gray-100 md:m-6">
          POST_2
        </div>
        <div className="mb-4 flex h-[305px] items-center justify-center space-y-2 bg-red-500 p-7 text-2xl font-black text-gray-100 md:m-6">
          POST_3
        </div>
      </section>
    </section>
  )
}
