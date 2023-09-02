import { Button } from "./Button";
import { Title } from "./Title";

export function MarketingTransform() {
  return (
    <section
      className="flex flex-col justify-center items-center md:justify-start gap-6 w-full h-[550px] md:h-[500px] bg-[url('/background/bg-free-consultation.svg')] bg-cover px-6"
    >
      <Title>
        Transforme seu marketing connosco juntos podemos fazer a diferença
      </Title>
      <p
        className="font-normal text-center text-base text-gray-100 uppercase md:w-[649px]"
      >
        Entre em contacto connosco, vamos trabalhar juntos para descobrir as tuas necessidades e alcançar os teus objetivos da forma mais eficaz e inovadora possível
      </p>
      <Button> Consulta Grátis </Button>
    </section>
  )
}