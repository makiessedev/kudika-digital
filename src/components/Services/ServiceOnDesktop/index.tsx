import Image from 'next/image'
import { ChevronLeft, ChevronRight } from "lucide-react";

export function ServiceOnDesktop() {
  return (
    <section
      className='flex flex-col mt-10'
    >
      <div
      className='flex'
      >
        <div
          className="flex items-center justify-center w-[151px] text-6xl text-gray-100 font-black h-[394px] bg-red-500 "
        >1</div>

        <div
          className='flex items-center justify-center flex-col px-6 gap-5'
        >
          <h3
            className="font-black text-3xl w-[349px] text-gray-500 uppercase"
          >Gestão das redes sociais</h3>
          <p
            className="text-lg font-normal w-[349px] text-gray-400"
          >
            Criar, publicar e analisar conteúdo relevante para construir uma presença online sólida, interagindo com o público-alvo e ajustando a estratégia com base nos resultados e feedback dos usuários.
          </p>
        </div>

        <div 
          className='flex justify-center w-[643px] h-[394px] bg-red-500'
        >
          <Image 
            className='bg-contain'
            src='/background/bg-social-media.png' 
            alt='social media' 
            width={643}
            height={394} 
          />
        </div>
      </div>

      <div
        className="flex justify-center gap-3 mt-6"
      >
        <button
          className="flex items-center justify-center w-14 h-10 bg-red-500 text-gray-100"
        >
          <ChevronLeft />
        </button>

        <button
          className="flex items-center justify-center w-14 h-10 bg-red-500 text-gray-100"
        >
          <ChevronRight />
        </button>
      </div>
    </section>
  )
}