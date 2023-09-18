import Link from 'next/link'
import Image from 'next/image'
import { Container } from './Container'

type PostProps = {
  props: {
    id: string
    title: string
    content: string
    author: string
  }
}

export function EmphasisPost(post: PostProps) {
  return (
    <Container>
      <Image
        className="mx-auto mt-6 block md:hidden"
        src="/blog/ig-blog.png"
        width={595}
        height={399}
        alt="computer"
      />
      <div className="space-y-4">
        <Link href={`/blog/post/${post.props.id}`}>
          <h3 className="hover:text-red-00 text-center text-xl font-bold text-gray-500 transition-all duration-300 md:text-left md:text-4xl">
            {post.props.title}
          </h3>
        </Link>
        <p className="text-base font-normal text-gray-500/50 md:text-lg">
          {post.props.content?.length > 200
            ? `${post.props.content.substring(0, 200)}...`
            : post?.props.content}
        </p>
        <div className="flex justify-between text-sm font-normal text-gray-500/50 md:text-base">
          <span>{post.props.author}</span>
          <span>17 Mar | Leitura: 9min</span>
        </div>

        <button className="rounded-3xl border border-gray-500/50 bg-white px-7 py-[5px] text-gray-500/50">
          <Link href={`/blog/post/${post.props.id}`}>Ler mais</Link>
        </button>
      </div>
      <Image
        className="hidden md:my-auto md:block"
        src="/blog/ig-blog.png"
        width={470}
        height={150}
        alt="computer"
      />
    </Container>
  )
}
