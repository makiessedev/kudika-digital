import Image from 'next/image'
import { Container } from './Container'
import { Title } from './Title'
import { Paragraph } from './Paragraph'
import { Button } from './Button'

export function FreeCheck() {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center space-y-4 py-20 md:-mt-2 md:items-start md:space-y-6 md:py-0 md:pt-14">
        <Title>
          Dificuldades em{' '}
          <strong className="font-black">
            gerenciar as redes sociais da sua empresa?
          </strong>
        </Title>
        <Paragraph>
          Entre em contacto connosco, vamos trabalhar juntos para descobrir as
          tuas necessidades e alcançar os teus objetivos da forma mais eficaz e
          inovadora possível
        </Paragraph>
        <Button>Consulta grátis</Button>
      </div>
      <div className="hidden h-full w-[550] items-center md:flex">
        <Image
          className="hidden h-[446px] w-[550px] md:block"
          src="/girl.png"
          width={550}
          height={420}
          alt="girl"
        />
      </div>
    </Container>
  )
}
