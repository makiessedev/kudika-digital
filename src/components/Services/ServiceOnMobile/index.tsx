import { ChevronLeft, ChevronRight } from "lucide-react";

export function ServiceOnMobile() {
  return (
    <section>
      <span
        className=" inline-block md:block text-3xl font-bold text-gray-100 w-8 h-15 py-3 mr-3 bg-red-500 text-center"
      >1</span>
        <h3
          className="md:col-span-1 md:row-span-1 text-lg md:block font-bold text-gray-500 uppercase inline-block -top-12"
        >Gestão de redes sociais</h3>
        <p
          className="md:col-start-2 text-base font-normal text-gray-500 indent-10"
        >
          Criar, publicar e analisar conteúdo relevante para construir uma presença online sólida, interagindo com o público-alvo e ajustando a estratégia com base nos resultados e feedback dos usuários.
        </p>
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