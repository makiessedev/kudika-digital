'use client'

import { Container } from './Container'
import { Title } from './Title'
import { Paragraph } from './Paragraph'
import { useMedia } from '@/Hooks/useMedia'
import { SolutionOnMobile } from './SolutionOnMobile'
import { SolutionOnDesktop } from './SolutionOnDesktop'

export default function Index() {
  const isMobile = useMedia('(max-width: 767px)')
  return (
    <Container>
      <div className="flex flex-col items-center justify-center space-y-4 py-9 md:space-y-6 md:py-0 md:pt-8">
        <Title>Se precisar</Title>

        <Paragraph>
          familiariza-se com as nossas soluções. personalizada para sua
          necessidade
        </Paragraph>
      </div>
      {isMobile ? <SolutionOnMobile /> : <SolutionOnDesktop />}
    </Container>
  )
}
