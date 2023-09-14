import { Container } from './Container'
import { Paragraph } from './Paragraph'
import { RedLine } from './RedLine'
import { Title } from './Title'

export function Header() {
  return (
    <Container>
      <Title>blog</Title>
      <Paragraph>Fique ligado aos nossos artigos</Paragraph>
      <RedLine />
    </Container>
  )
}
