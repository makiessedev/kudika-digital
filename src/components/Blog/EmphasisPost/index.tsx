import Link from 'next/link'
import Image from 'next/image'
import { Container } from './Container'

type Post = {
  uid: string
  title: string
  content: string
  coverUrl: string
  author: string
  authorUrl: string | null
  updatedAt: string
  readingRateInMinuts: number
}

type PostProps = {
  data: Post
}
export function EmphasisPost({data}: PostProps) {
  return (
    <Container>
      <Image
        className="mx-auto mt-6 block md:hidden"
        src={data.coverUrl}
        width={595}
        height={399}
        alt="cover image"
      />
      <div className="space-y-4">
        <Link href={`/blog/post/${data.uid}`}>
          <h3 className="hover:text-red-00 text-center text-xl font-bold text-gray-500 transition-all duration-300 md:text-left md:text-4xl">
            {data.title}
          </h3>
        </Link>
        <p className="text-base font-normal text-gray-500/50 md:text-lg">
          {data.content.length > 200
            ? `${data.content.substring(0, 200)}...`
            : data.content}
        </p>
        <div className="flex justify-between text-sm font-normal text-gray-500/50 md:text-base">
          <span>{data.author}</span>|
          <span>{data.updatedAt}</span>|
          <span>Leitura: {data.readingRateInMinuts} min</span>
        </div>

        <button className="rounded-3xl border border-gray-500/50 bg-white px-7 py-[5px] text-gray-500/50">
          <Link href={`/blog/post/${data.uid}`}>Ler mais</Link>
        </button>
      </div>
      <Image
        className="hidden md:my-auto md:block"
        src={data.coverUrl}
        width={470}
        height={150}
        alt="computer"
      />
    </Container>
  )
}
