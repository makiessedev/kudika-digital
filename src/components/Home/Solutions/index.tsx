'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import { Container } from './Container'
import { Title } from './Title'
import { Paragraph } from './Paragraph'
import { useMedia } from '@/Hooks/useMedia'
import { SolutionOnMobile } from './SolutionOnMobile'
import { SolutionOnDesktop } from './SolutionOnDesktop'

export default function Index() {
  const isMobile = useMedia('(max-width: 767px)')
  const [ref, inView] = useInView({});

  return (
    <Container>
      <div className="flex flex-col items-center justify-center space-y-4 py-9 md:space-y-6 md:py-0 md:pt-8">
      <div ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <Title>Casos de sucesso</Title>
          </motion.div>
        </div>

        <Paragraph>
          familiariza-se com as nossas soluções. personalizada para sua
          necessidade
        </Paragraph>
      </div>
      {isMobile ? <SolutionOnMobile /> : <SolutionOnDesktop />}
    </Container>
  )
}
