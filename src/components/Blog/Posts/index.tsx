'use client'

import Image from 'next/image'
import Link from 'next/link'
import { RichText } from 'prismic-dom'

import { PostContainer } from './PostContainer'
import { Button } from './Button'
import { Container } from './Container'
import { PostsWrapper } from './PostsWrapper'
import { Title } from './Title'
import { Content } from './Content'
import { FooterContainer } from './FooterContainer'
import { randomUUID } from 'crypto'
import { createClient } from '@/prismicio'

type Post = {
  props: {
    id: string
    title: string
    imageUrl: string
    description: string
    content: string
    author: string
    authorUrl: string
  }
}

export async function Posts() {
  const prismic = createClient()

  const postsRaw = await prismic.getAllByType('post')

  const posts = postsRaw.map((post) => {
    return {
      uid: post.uid,
      title: post.data.title,
      cover: post.data.cover,
      description: post.data.description,
      content: RichText.asHtml(post.data.content)
    }
  })

  console.log(JSON.stringify(posts, null, 2))

  /* const response = await fetch('http://localhost:3000/post/all', {
    next: {
      revalidate: 5,
    },
  })

  const posts: Post[] = await response.json() */

  return (
    <Container>
      <PostsWrapper>
        {posts.map((post) => (
          <PostContainer key={post.uid}>
            <Image
              src={String(post.cover.url)}
              width={595}
              height={399}
              alt="computer"
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
