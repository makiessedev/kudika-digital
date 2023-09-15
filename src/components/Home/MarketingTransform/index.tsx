import { Button } from './Button'
import { Container } from './Container'
import { Title } from './Title'

export function MarketingTransform() {
  return (
    <Container>
      <Title>
        Transforme seu marketing connosco juntos podemos fazer a diferença
      </Title>
      <p className="py-5 text-center text-xl font-normal text-white md:w-[440px]">
        Entre em contacto connosco, vamos trabalhar juntos para descobrir as
        tuas necessidades e alcançar os teus objetivos da forma mais eficaz e
        inovadora possível
      </p>
      <Button> Consulta Grátis </Button>
    </Container>
  )
}
