'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import { Button } from './Button'
import { Container } from './Container'
import { Title } from './Title'

export function MarketingTransform() {
  const [ref, inView] = useInView({});

  return (
    <Container>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Title>
          Transforme seu marketing connosco juntos podemos fazer a diferença
        </Title>
      </motion.div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <p className="py-5 text-center text-xl font-normal text-white md:w-[440px]">
          Entre em contacto connosco, vamos trabalhar juntos para descobrir as
          tuas necessidades e alcançar os teus objetivos da forma mais eficaz e
          inovadora possível
        </p>
        <Button> Consulta Grátis </Button>
      </motion.div>
    </Container>
  )
}
