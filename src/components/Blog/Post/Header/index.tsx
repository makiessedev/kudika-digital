import Link from 'next/link'
import { Paragraph } from './Paragraph'
import { Title } from './Title'
import RedBar from '@/components/Global/RedBar'

export function Header() {
  return (
    <>
      <Link
        href="/blog"
        className="flex flex-col items-start justify-start gap-3 py-12"
      >
        <Title>blog</Title>
        <Paragraph>Fique ligado aos nossos artigos</Paragraph>
        <RedBar />
      </Link>
    </>
  )
}
