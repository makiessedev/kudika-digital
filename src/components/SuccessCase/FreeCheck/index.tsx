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
          podemos ajudar você a
          <strong className="font-black">
            transformar sua ideia em um case de sucesso
          </strong>
        </Title>
        <Paragraph>
          Entre em contato conosco hoje mesmo e descubra como a Kudika Digital
          pode impulsionar seus projetos para o próximo nível!
        </Paragraph>
        <Button>Consulta grátis</Button>
      </div>
    </Container>
  )
}
