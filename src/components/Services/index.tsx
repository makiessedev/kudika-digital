import { Container } from "./Container";
import { Title } from "./Title";
import { Paragraph } from "./Paragraph";
import Image from "next/image";
import { ArrowRight, ArrowRightCircle, ArrowRightIcon, ArrowRightSquare, ChevronLeft, ChevronRight, MoveRightIcon, SpaceIcon } from "lucide-react";

export default function index() {
  return (
    <Container>
      <div
        className="flex flex-col justify-center items-center md:-mt-2 space-y-4 md:space-y-6 py-9 md:py-0"
      >
        <Title>
          Se precisar
        </Title>
        
        <Paragraph>
          familiariza-se com as nossas soluções. personalizada para sua necessidade
        </Paragraph>

      </div>
      <section
        className=""
      >
        <span
          className="inline-block text-3xl font-bold text-gray-100 w-8 h-15 py-3 mr-3 bg-red-500 md:w-[151px] md:h-[394px] md:rounded-none text-center"
        >1</span>
        <h3
          className="text-lg font-bold text-gray-500 uppercase inline-block -top-12"
        >Gestão de redes sociais</h3>
        <p
          className="text-base font-normal text-gray-500 indent-10"
        >
          Criar, publicar e analisar conteúdo relevante para construir uma presença online sólida, interagindo com o público-alvo e ajustando a estratégia com base nos resultados e feedback dos usuários.
        </p>
        <Image 
          className="hidden md:block"
          src='/background/bg-social-media.png' 
          alt="social media" 
          width={643}
          height={394}
        />
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
            <ChevronRight
              className=""
            />
          </button>
        </div>
      </section>
    </Container>
  )
}
