'use client'

import Image from 'next/image'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import { Container } from './Container'
import { Title } from './Title'
import { Paragraph } from './Paragraph'
import { Button } from './Button'

export default function Index() {
  const [ref, inView] = useInView({});

  return (
    <>
      <Container>
        <motion.div 
            className="flex flex-col items-center justify-center space-y-4 pb-9 font-montserrat md:-mt-2 md:items-start md:space-y-6 md:py-0"
            ref={ref} 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.1 }}
          >
          <Title>Marketing e Publicidade</Title>
          <Paragraph>
            <span className="font-bold">
              Transforme sua marca em um sucesso online{' '}
            </span>{' '}
            com nossos serviços de marketing e publicidade.
          </Paragraph>
          <Button>Consulta grátis</Button>
        </motion.div>
        <div ref={ref} className=''>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className='space-y-4 md:space-y-6'
          >
            <Image
              className="mx-auto w-96 md:w-[550px]"
              src="/girl.png"
              width={550}
              height={420}
              alt="girl"
            />
          </motion.div>
        </div>
      </Container>
    </>
  )
}
