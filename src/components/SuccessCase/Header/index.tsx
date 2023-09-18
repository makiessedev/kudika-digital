import { Container } from './Container'
import { Paragraph } from './Paragraph'
import { RedLine } from './RedLine'
import { Title } from './Title'

export function Header() {
  return (
    <Container>
      <Title>bminds</Title>
      <Paragraph>
        O Lançamento da Maior Plataforma de Networking de Angola
      </Paragraph>
      <RedLine />
    </Container>
  )
}
