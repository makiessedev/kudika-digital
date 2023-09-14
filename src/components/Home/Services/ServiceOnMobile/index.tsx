import { ChevronLeft, ChevronRight } from 'lucide-react'

export function ServiceOnMobile() {
  return (
    <section>
      <span className=" h-15 mr-3 inline-block w-8 bg-red-500 py-3 text-center text-3xl font-bold text-gray-100 md:block">
        1
      </span>
      <h3 className="-top-12 inline-block text-lg font-bold uppercase text-gray-500 md:col-span-1 md:row-span-1 md:block">
        Gestão de redes sociais
      </h3>
      <p className="indent-10 text-base font-normal text-gray-500 md:col-start-2">
        Criar, publicar e analisar conteúdo relevante para construir uma
        presença online sólida, interagindo com o público-alvo e ajustando a
        estratégia com base nos resultados e feedback dos usuários.
      </p>
      <div className="mt-6 flex justify-center gap-3">
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
