import Image from 'next/image'
import { Container } from './Container'
import { Title } from './Title'
import { Paragraph } from './Paragraph'
import { Button } from './Button'

export default function index() {
  return (
    <Container>
      <div className="hidden h-[666px] w-[345px] items-center md:flex">
        <Image
          className="hidden h-[446px] w-[345px] md:block"
          src="/boy.png"
          width={565}
          height={666}
          alt="girl"
        />
      </div>
      <div className="flex flex-col items-center justify-center space-y-4 py-20 md:-mt-2 md:items-start md:space-y-6 md:py-0">
        <Title>Humanizando Marcas</Title>
        <Paragraph>
          <strong className="font-bold">Nossa paixão </strong>é criar conexões
          autênticas entre negócios e clientes.
        </Paragraph>
        <Button>Conheça a Kudika</Button>
      </div>
    </Container>
  )
}
