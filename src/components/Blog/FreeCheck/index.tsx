import Image from "next/image";
import { Container } from "./Container";
import { Title } from "./Title";
import { Paragraph } from "./Paragraph";
import { Button } from "./Button";

export function FreeCheck() {
  return (
    <Container>
      <div
        className="flex flex-col justify-center items-center md:items-start md:pt-14 md:-mt-2 space-y-4 md:space-y-6 py-20 md:py-0"
      >
        <Title>
        Dificuldades em {' '}
        <strong className="font-black"> 
          gerenciar as redes
          sociais da sua empresa? 
        </strong>
        </Title>
        <Paragraph>
          Entre em contacto connosco, vamos trabalhar juntos para descobrir as tuas necessidades e alcançar os teus objetivos da forma mais eficaz e inovadora possível
        </Paragraph>
        <Button>
          Consulta grátis
        </Button>
      </div>
      <div className="w-[550] h-full md:flex items-center hidden">      
        <Image
          className="hidden md:block w-[550px] h-[446px]" 
          src='/girl.png' 
          width={550} 
          height={420} 
          alt="girl"
        />
      </div>
    </Container>
  )
}
