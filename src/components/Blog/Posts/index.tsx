'use client'

import Image from 'next/image'
import Link from 'next/link'
import { asLink, asText } from '@prismicio/helpers'

import { PostContainer } from './PostContainer'
import { Button } from './Button'
import { Container } from './Container'
import { PostsWrapper } from './PostsWrapper'
import { Title } from './Title'
import { Content } from './Content'
import { FooterContainer } from './FooterContainer'
import { createClient } from '@/prismicio'
import { readingRate } from '@/Helpers/ReadingRate'
import { useState } from 'react'

type Post = {
  uid: string
  title: string
  coverUrl: string
  content: string
  author: string
  authorUrl: string | null
  updatedAt: string
  readingRateInMinuts: number
}

type PostProps = {
  posts: Post[]
}

export function Posts({posts}: PostProps) {
  const [postsToShow, setPostsToShow] = useState(6)
  const handleLoadMore = () => {
    setPostsToShow(postsToShow + 6);
  };

  return (
    <Container>
      <PostsWrapper>
        {posts.slice(0, postsToShow).map((post) => (
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
      { postsToShow < posts.length && <Button onClick={handleLoadMore}>ver mais</Button> }
    </Container>
  )
}
