'use client'

import Image from 'next/image'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import { Container } from './Container'
import { Title } from './Title'
import { Paragraph } from './Paragraph'
import { Button } from './Button'
import Boy from '../..//../../public/boy.png'

export default function Index() {
  const [ref, inView] = useInView({});

  return (
    <Container>
      <motion.div 
        ref={ref}
        className="hidden h-[666px] w-[365px] items-center md:flex"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Image
          className="hidden h-[446px] w-[365px] md:block"
          src={Boy}
          height={650}
          alt="girl"
        />
      </motion.div>
      
      <div className="flex flex-col items-center justify-center space-y-4 py-20 md:-mt-2 md:items-start md:space-y-6 md:py-0">
        <div ref={ref} className=''>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className='space-y-4 md:space-y-6'
          >
            <Title>Humanizando Marcas</Title>
            <Paragraph>
              <strong className="font-bold">Nossa paixão </strong>é criar conexões
              autênticas entre negócios e clientes.
            </Paragraph>
            <Button>Conheça a Kudika</Button>
          </motion.div>
        </div>
      </div>
    </Container>
  )
}
