import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export function SolutionOnDesktop() {
  return (
    <section className="mt-10 flex flex-col">
      <div className="flex">
        <div className="flex h-[364px] w-[151px] items-center justify-center bg-red-500 text-6xl font-black text-gray-100 ">
          1
        </div>

        <div className="flex flex-col items-center justify-center gap-5 px-6">
          <h3 className="w-[369px] text-3xl font-black uppercase text-gray-500">
            Gestão das redes sociais
          </h3>
          <p className="text-gray-400 w-[369px] text-lg font-normal">
            Criar, publicar e analisar conteúdo relevante para construir uma
            presença online sólida, interagindo com o público-alvo e ajustando a
            estratégia com base nos resultados e feedback dos usuários.
          </p>
        </div>

        <div className="flex h-[364px] w-[643px] justify-center bg-red-500">
          <Image
            className="bg-contain"
            src="/background/bg-social-media.png"
            alt="social media"
            width={643}
            height={394}
          />
        </div>
      </div>

      <div className="mt-10 flex justify-center gap-3">
        <button className="flex h-10 w-14 items-center justify-center bg-red-500 text-gray-100">
          <ChevronLeft />
        </button>

        <button className="flex h-10 w-14 items-center justify-center bg-red-500 text-gray-100">
          <ChevronRight />
        </button>
      </div>
    </section>
  )
}
