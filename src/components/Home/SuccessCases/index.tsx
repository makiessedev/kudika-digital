'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import { Container } from './Container'
import { Title } from './Title'
import { Paragraph } from './Paragraph'
import { Case } from './Case'
import { cases } from './Case/cases'
import { randomUUID } from 'crypto'
import RedBar from '../../Global/RedBar'

export default function Index() {
  const [ref, inView] = useInView({});

  return (
    <Container>
      <div className="flex flex-col items-center justify-center space-y-4 py-9 md:-mt-2 md:space-y-2 md:py-0">
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
          Confia em nos e vê os resultados com seus proprios olhos.
        </Paragraph>

        <RedBar />
      </div>
      {cases.map(({ imagePosition, imgSrc, strongText, link, text, title }) => (
        <Case
          key={title}
          title={title}
          link={link}
          strongText={strongText}
          text={text}
          imgSrc={imgSrc}
          imagePosition={imagePosition}
        />
      ))}
    </Container>
  )
}
