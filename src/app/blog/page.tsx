import Image from "next/image"
import { FreeCheck } from "@/components/Blog/FreeCheck"
import { Posts } from "@/components/Blog/Posts"
import Link from "next/link"
import { Header } from "@/components/Blog/Header"
import { EmphasisPost } from "@/components/Blog/EmphasisPost"

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
        <EmphasisPost props={post.props} />
      </section>
      <FreeCheck/>
      <Posts/>
    </>
  )
}