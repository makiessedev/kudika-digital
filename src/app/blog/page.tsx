import Image from "next/image"
import { FreeCheck } from "@/components/Blog/FreeCheck"
import { Posts } from "@/components/Blog/Posts"
import Link from "next/link"
import { Header } from "@/components/Blog/Header"

type PostProps = {
    props: {
    id: string,
    title: string,
    content: string,
    author: string,
  }
}

export default async function index() {
  const response = await fetch('http://localhost:3000/post/all')
  const json = await response.json()
  const post: PostProps = json[0]

  return (
    <>
      <section 
        className="flex flex-col items-center pt-40 px-6 lg:px-20 gap-8"
      >
        <Header/>
        <section 
          className="flex flex-col md:flex-row gap-6 md:gap-20 md:pt-5"
        >
          <div
            className="space-y-4"
          >
            <h3
              className="font-bold text-xl text-center md:text-left md:text-3xl text-gray-500"
            >{ post.props.title }</h3>
            <p
              className="font-normal text-base md:text-lg text-gray-500/50"
            >{

              post.props.content?.length > 200
                  ? `${post.props.content.substring(0, 200)}...`
                  : post?.props.content
            }</p>
            
            <div
              className="flex font-normal justify-between text-sm md:text-base text-gray-500/50"
            >
              <span>{post.props.author}</span>
              <span>17 Mar | Leitura: 9min</span>
            </div>

            <button
              className="px-6 py-3 bg-white text-gray-500/50 border border-gray-500/50 rounded-3xl"
            >
              <Link href={`/blog/post/${post.props.id}`}>
                Ler mais
              </Link>
            </button>
          </div>
          <Image 
            src='/blog/ig-blog.png' 
            width={595} 
            height={399}
            alt="computer"
          />
        </section>
      </section>
      <FreeCheck/>
      <Posts/>
    </>
  )
}