import Image from 'next/image'
import Link from 'next/link'
import { asText } from '@prismicio/helpers'

import { PostContainer } from './PostContainer'
import { Button } from './Button'
import { Container } from './Container'
import { PostsWrapper } from './PostsWrapper'
import { Title } from './Title'
import { Content } from './Content'
import { FooterContainer } from './FooterContainer'
import { createClient } from '@/prismicio'

type Post = {
  uid: string
  title: string
  coverUrl: string
  description: string
  content: string
}

type PostProps = {
  props: Post
}

export async function Posts() {
  const prismic = createClient()

  const postsRaw = await prismic.getAllByType('post')

  const posts: Post[] = postsRaw.map((post) => {
    return {
      uid: post.uid,
      title: String(post.data.title),
      coverUrl: String(post.data.cover.url),
      description: String(post.data.description),
      content: asText(post.data.content)
    }
  })

  return (
    <Container>
      <PostsWrapper>
        {posts.map((post) => (
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
              <span>Domingos Henriques</span>
              <span>17 Mar | Leitura: 9min</span>
            </FooterContainer>

            <button className="rounded-3xl border border-gray-500/50 bg-white px-5 py-1 text-sm text-gray-500/50">
              <Link href={`/blog/post/${post.uid}`}>Ler mais</Link>
            </button>
          </PostContainer>
        ))}
      </PostsWrapper>
      <Button>ver mais</Button>
    </Container>
  )
}
