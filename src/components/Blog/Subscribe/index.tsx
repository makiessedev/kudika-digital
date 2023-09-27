'use client'

import { Container } from './Container'
import { Title } from './Title'
import { Paragraph } from './Paragraph'
import { Button } from './Button'
import { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'

export function Subscribe() {
  const [email, setEmail] = useState<string>()
  const router = useRouter()

  async function handleClick(e: FormEvent) {
    e.preventDefault()
    router.push('https://makiesse.systeme.io/makiesse')
  }

  return (
    <Container>
      <div className="flex flex-col items-center justify-center space-y-4 py-20 md:-mt-2 md:h-[666px] md:space-y-6 md:py-0">
        <Title>
          <strong>Inscreva-se </strong>
          em nosso Blog
        </Title>
        <Paragraph>
          Acesse, em primeira mão, nossos principais posts diretamente em seu
          email
        </Paragraph>
        <form className="flex flex-col items-center justify-center gap-4">
          <Button type="button" onClick={handleClick}>
            Subscrever
          </Button>
        </form>
      </div>
    </Container>
  )
}
