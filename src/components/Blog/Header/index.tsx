import { Container } from './Container'
import { Paragraph } from './Paragraph'
import { RedLine } from './RedLine'
import { Title } from './Title'

type HeaderProps = {
  title: string
  text: string
}

export function Header({ text, title }: HeaderProps) {
  return (
    <Container>
      <Title>{title}</Title>
      <Paragraph>{text}</Paragraph>
      <RedLine />
    </Container>
  )
}
