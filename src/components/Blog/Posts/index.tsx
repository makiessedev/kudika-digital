import Image from 'next/image'
import Link from 'next/link'

import { PostContainer } from './PostContainer'
import { Button } from './Button'
import { Container } from './Container'
import { PostsWrapper } from './PostsWrapper'
import { Title } from './Title'
import { Content } from './Content'
import { FooterContainer } from './FooterContainer'
import { randomUUID } from 'crypto'

type Post = {
  props: {
    id: string
    title: string
    description: string
    content: string
    author: string
    authorUrl: string
  }
}

export async function Posts() {
  const response = await fetch('http://localhost:3000/post/all', {
    next: {
      revalidate: 5,
    },
  })

  const posts: Post[] = await response.json()

  return (
    <Container>
      <PostsWrapper>
        {posts.map(({ props }) => (
          <PostContainer key={randomUUID()}>
            <Image
              src="/blog/ig-blog.png"
              width={595}
              height={399}
              alt="computer"
            />
            <Title>{props.title}</Title>
            <Content>
              {props.content?.length > 200
                ? `${props.content.substring(0, 200)}...`
                : props?.content}
            </Content>
            <FooterContainer>
              <span>{props.author}</span>
              <span>17 Mar | Leitura: 9min</span>
            </FooterContainer>

            <Link
              className="rounded-3xl border border-gray-500/50 bg-white px-6 py-3 text-gray-500/50"
              href={`/blog/post/${props.id}`}
            >
              Ler mais
            </Link>
          </PostContainer>
        ))}
      </PostsWrapper>
      <Button>ver mais posts</Button>
    </Container>
  )
}
