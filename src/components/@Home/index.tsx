import Header from "@/components/header"
import Image from "next/image"
import Container from "@/components/container"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <>
      <Header />
      <h1 className="font-sans bg-slate-500">Kudika </h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, error cupiditate iure ullam optio beatae id a quam unde dolores placeat nihil nulla ducimus sed rem recusandae omnis. Eum, voluptatem!</p>
      <Footer />
    </>
  )
}
