import Image from 'next/image'
import { Container } from './Container'
import { Title } from './Title'
import { Paragraph } from './Paragraph'
import { Button } from './Button'
import Boy from '../..//../../public/boy.png'

export default function index() {
  return (
    <Container>
      <div className="hidden h-[666px] w-[365px] items-center md:flex">
        <Image
          className="hidden h-[446px] w-[365px] md:block"
          src={Boy}
          height={650}
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
