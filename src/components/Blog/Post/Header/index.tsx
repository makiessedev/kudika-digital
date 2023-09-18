import { Paragraph } from './Paragraph'
import { Title } from './Title'

export function Header() {
  return (
    <section className="space-y-2">
      <Title>blog</Title>
      <Paragraph>Fique ligado aos nossos artigos</Paragraph>
      <div className="h-[3px] w-24 bg-red-500" />
    </section>
  )
}
