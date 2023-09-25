'use client'

import { Container } from './Container'
import { Title } from './Title'
import { Paragraph } from './Paragraph'
import { Button } from './Button'
import { FormEvent, useState } from 'react'

export function Subscribe() {
  const [email, setEmail] = useState<string>()

  async function handleClick(e: FormEvent) {
    e.preventDefault()
    console.log(email)
    /* try {
      await fetch('http://localhost:3000/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })
    } catch (error) {
      console.log(error)
    } */
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
          <input
            className="h-12 w-72 rounded-full border-2 border-white bg-red-500 p-5 text-white outline-none placeholder:text-white/50 md:h-12 md:w-72"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="seu@email.com"
          />
          <Button type="submit" onClick={handleClick}>
            Enviar
          </Button>
        </form>
      </div>
    </Container>
  )
}
