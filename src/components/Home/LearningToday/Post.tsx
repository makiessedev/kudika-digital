'use client'

import { redirect, useRouter } from 'next/navigation'

type PostProps = {
  props: {
    id: string
    title: string
    imageUrl: string
    content: string
    author: string
  }
}

export function Post(post: any) {
  const router = useRouter()

  return (
    <div
      className="relative cursor-pointer"
      onClick={() => router.push(`/blog/post/${post.props.uid}`)}
    >
      <div
        className={`mb-4 flex h-[305px] items-center justify-center rounded-3xl bg-cover text-2xl font-black text-gray-100 blur-[3px] md:m-6 md:gap-4`}
        style={{ backgroundImage: `url('${post.props.data.cover.url}')` }}
      />
      <h3 className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] text-4xl font-black uppercase text-gray-500">
        {post.props.data.title}
      </h3>
    </div>
  )
}
