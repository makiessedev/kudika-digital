import { Container } from './Container'
import { Paragraph } from './Paragraph'
import RedBar from '@/components/Global/RedBar'
import { Title } from './Title'

export function Header() {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center gap-5">
        <Title>blog</Title>
        <Paragraph>Fique ligado aos nossos artigos</Paragraph>
        <RedBar />
      </div>
    </Container>
  )
}
