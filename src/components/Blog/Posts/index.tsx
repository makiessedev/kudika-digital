import Image from "next/image";
import Link from "next/link"

import { PostContainer } from "./PostContainer";
import { Button } from "./Button";

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
  const response = await fetch('http://localhost:3000/post/all')
  const posts: Post[] = await response.json()

  return (
    <section 
      className="flex flex-col items-center px-6"
    >
      <section
        className="md:grid md:grid-cols-2 lg:grid-cols-3"
      >
        {
          posts.map(({props}) => (
            <PostContainer>
              <div
                className="space-y-4"
              >
                <Image 
                  src='/blog/ig-blog.png' 
                  width={595} 
                  height={399}
                  alt="computer"
                />
                <h3
                  className="font-bold text-xl text-gray-500"
                >{props.title}</h3>
                <p
                  className="font-normal text-base text-gray-500/50"
                >{ props.content?.length > 200
                  ? `${props.content.substring(0, 200)}...`
                  : props?.content }</p>
                
                <div
                  className="flex font-normal justify-between text-sm text-gray-500/50"
                >
                  <span>{props.author}</span>
                  <span>17 Mar | Leitura: 9min</span>
                </div>

                <button
                  className="px-6 py-3 bg-white text-gray-500/50 border border-gray-500/50 rounded-3xl"
                  
                >
                  <Link
                    href={`/blog/post/${props.id}`}
                  >
                    Ler mais
                  </Link>
                </button>
              </div>
            </PostContainer>
          ))
        }
      </section>
      <Button>ver mais posts</Button>
    </section>
  )
}