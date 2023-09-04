import Link from "next/link";
import Image from "next/image";
import { Container } from "./Container";
import { Title } from "./Title";
import { Paragraph } from "./Paragraph";
import { Button } from "./Button";

export function Subscribe() {
  return (
    <Container>
      <div
        className="flex flex-col justify-center items-center md:-mt-2 space-y-4 md:space-y-6 py-20 md:py-0 md:h-[666px]"
      >
        <Title>
          <strong>
            Inscreva-se {' '}
          </strong>
          em nosso Blog
        </Title>
        <Paragraph>
          Acesse, em primeira mão, nossos principais posts diretamente em seu email
        </Paragraph>
        <input 
          className="rounded-full text-white md:w-80 w-72 h-12 md:h-14 bg-red-500 border-2 border-white placeholder:text-white"
          type="email" 
          placeholder="seu email"
        />
        <Button>
          Inscrever
        </Button>
      </div>
    </Container>
  )
}
