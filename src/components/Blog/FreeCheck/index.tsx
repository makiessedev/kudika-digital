import Image from "next/image";
import { Container } from "./Container";
import { Title } from "./Title";
import { Paragraph } from "./Paragraph";
import { Button } from "./Button";

export function FreeCheck() {
  return (
    <Container>
      <div className="w-[345px] h-[666px] md:flex items-center hidden">      
        <Image
          className="hidden md:block w-[345px] h-[446px]" 
          src='/boy.png' 
          width={565} 
          height={666} 
          alt="girl"
        />
      </div>
      <div
        className="flex flex-col justify-center items-center md:items-start md:-mt-2 space-y-4 md:space-y-6 py-20 md:py-0"
      >
        <Title>
          Humanizando Marcas
        </Title>
        <Paragraph>
          <strong
            className="font-bold"
          > 
            Nossa paixão {' '}
          </strong>
            é criar conexões autênticas entre negócios e clientes.
        </Paragraph>
        <Button>
          Conheça a Kudika
        </Button>
      </div>
    </Container>
  )
}
