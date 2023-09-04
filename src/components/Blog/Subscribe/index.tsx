'use client'

import { Container } from "./Container";
import { Title } from "./Title";
import { Paragraph } from "./Paragraph";
import { Button } from "./Button";
import { FormEvent, useState } from "react";

export function Subscribe() {
  const [ email, setEmail ] = useState<string>()

  async function handleClick(e: FormEvent) {
    e.preventDefault()

    try {
      await fetch('http://localhost:3000/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email })
    })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container>
      <div
        className="flex flex-col justify-center items-center md:-mt-2 space-y-4 md:space-y-6 py-20 md:py-0 md:h-[666px]"
      >
        <Title>
          <strong>
            Inscreva-se {' '}
          </strong>
          em nosso Blog
        </Title>
        <Paragraph>
          Acesse, em primeira mão, nossos principais posts diretamente em seu email
        </Paragraph>
        <form 
          className="flex flex-col justify-center items-center gap-4"
        >
          <input 
            className="rounded-full text-white md:w-80 w-72 h-12 md:h-14 bg-red-500 border-2 border-white placeholder:text-white"
            type="email" 
            onChange={e => setEmail(e.target.value)}
            placeholder="seu email"
          />
          <Button type="submit" onClick={handleClick}>
            Inscrever
          </Button>
        </form>
      </div>
    </Container>
  )
}
