import { FreeCheck } from "@/components/Blog/FreeCheck"
import Image from "next/image"

export default function index() {
  return (
    <>
      <section 
        className="flex flex-col items-center pt-40 px-6 lg:px-20 gap-8"
        >
        
        <div
          className="space-y-2"
        >
          <h2
            className="font-black text-center text-5xl md:text-7xl text-red-500 uppercase"
          >blog</h2>
          <p
            className="font-bold text-xl text-gray-500"
          >Fique ligado aos nossos artigos</p>
          <div 
            className="mx-auto w-48 md:w-[180px] h-1 md:h-[14px] rounded bg-red-500"
          />
        </div>
        <section 
          className="flex flex-col md:flex-row gap-6 md:gap-20 md:pt-5"
        >
          <div
            className="space-y-4"
          >
            <h3
              className="font-bold text-xl text-center md:text-left md:text-3xl text-gray-500"
            >Como criar uma estratégia de marketing eficaz: um guia passo passo</h3>
            <p
              className="font-normal text-base md:text-lg text-gray-500/50"
            >Uma estratégia de marketing eficaz é essencial para o sucesso de qualquer negócio...</p>
            
            <div
              className="flex font-normal justify-between text-sm md:text-base text-gray-500/50"
            >
              <span>Domingos Henriques</span>
              <span>17 Mar | Leitura: 9min</span>
            </div>

            <button
              className="px-6 py-3 bg-white text-gray-500/50 border border-gray-500/50 rounded-3xl"
            >Ler mais</button>
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
    </>
  )
}