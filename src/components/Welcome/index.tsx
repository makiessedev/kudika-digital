import Link from "next/link";
import Image from "next/image";
import { Container } from "./Container";
import { Title } from "./Title";
import { Paragraph } from "./Paragraph";
import { Button } from "./Button";

export default function index() {
  return (
    <Container>
      <div
        className="flex flex-col justify-center items-center md:items-start md:-mt-2 space-y-4 md:space-y-6 py-9 md:py-0 font-montserrat"
      >
        <Title>
          Marketing e Publicidade
        </Title>
        <Paragraph>
          <span className="font-bold">Transforme sua marca em um sucesso online </span> com nossos serviços de marketing e publicidade.
        </Paragraph>
        <Button>
          Consulta grátis
        </Button>
      </div>
      <Image
        className="hidden md:block" 
        src='/girl.png' 
        width={550} 
        height={420} 
        alt="girl"
      />
    </Container>
  )
}
