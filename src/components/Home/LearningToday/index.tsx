import Image from 'next/image'
import { Paragraph } from './Paragraph'
import Link from 'next/link'
import { createClient } from '@/prismicio'
import { PostsWrapper } from '@/components/Blog/Posts/PostsWrapper'
import { PostContainer } from '@/components/Blog/Posts/PostContainer'
import { FooterContainer } from '@/components/Blog/Posts/FooterContainer'
import { Button } from '@/components/Blog/Posts/Button'
import { asLink, asText } from '@prismicio/helpers'
import { readingRate } from '@/Helpers/ReadingRate'
import { Content } from '@/components/Blog/Posts/Content'
import { Title } from '@/components/Blog/Posts/Title'

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
  const prismic = createClient()
  const lastThreePostsRaw = await prismic.getAllByType('post', {
    limit: 3,
    orderings: [
      {
        field: 'my.post.date',
        direction: 'desc',
      }
    ]
  })

  const lastThreePosts = lastThreePostsRaw.map((post) => {
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
    <section className="mb-6 mt-8 space-y-4 px-6 py-10 lg:px-20">
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-center font-montserrat text-3xl font-black uppercase text-red-500 md:text-left md:text-5xl xl:text-6xl">
          aprendizado de hoje
        </h2>
        <Paragraph>Veja os últimos textos da equipe kudika digital</Paragraph>
      </div>
      <PostsWrapper>
        {lastThreePosts.map((post) => (
          <PostContainer key={post.uid}>
            <Image
              src={String(post.coverUrl)}
              width={595}
              height={399}
              alt="cover"
            />
            <Title>
              {String(post.title).length > 30
                ? `${String(post.title).substring(0, 30)}...`
                : post?.title}
            </Title>
            <Content>
              {post.content?.length > 200
                ? `${post.content.substring(0, 200)}...`
                : post?.content}
            </Content>
            <FooterContainer>
              <span className='text-xs text-gray-500 font-medium'>{post.author}</span>|
              <span className='text-xs text-gray-500 font-medium'>{post.updatedAt}</span>|
              <span className='text-xs text-gray-500 font-medium'>Leitura: {post.readingRateInMinuts} min</span>
            </FooterContainer>

            <button className="rounded-3xl border border-gray-500/50 bg-white px-5 py-1 text-sm text-gray-500/50">
              <Link href={`/blog/post/${post.uid}`}>Ler mais</Link>
            </button>
          </PostContainer>
        ))}
      </PostsWrapper>
    </section>
  )
}
