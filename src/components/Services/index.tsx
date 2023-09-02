'use client'

import { Container } from "./Container";
import { Title } from "./Title";
import { Paragraph } from "./Paragraph";
import { useMedia } from "@/Hooks/useMedia";
import { ServiceOnMobile } from "./ServiceOnMobile"
import { ServiceOnDesktop } from "./ServiceOnDesktop";

export default function index() {
  const isMobile = useMedia('(max-width: 767px)')
  return (
    <Container>
      <div
        className="flex flex-col justify-center items-center md:pt-8 space-y-4 md:space-y-6 py-9 md:py-0"
      >
        <Title>
          Se precisar
        </Title>
        
        <Paragraph>
          familiariza-se com as nossas soluções. personalizada para sua necessidade
        </Paragraph>

      </div>
      {
        isMobile ? <ServiceOnMobile /> : <ServiceOnDesktop/>
      }
    </Container>
  )
}
