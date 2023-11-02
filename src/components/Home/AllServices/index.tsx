'use client'

import Image from 'next/image'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import { Title } from './Title'
import { Subtitle } from './Subtitle'
import { ListItem } from './ListItem'
import { ServiceContainer } from './ServiceContainer'
import { services } from './content'
import { randomUUID } from 'crypto'
import RedBar from '@/components/Global/RedBar'

export function AllServices() {
  const [ref, inView] = useInView({});

  return (
    <section
      id="services"
      className="flex flex-col items-center px-6 py-10 md:mt-6 lg:px-20"
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <Title>
          O que <br className="md:hidden" /> oferecemos
        </Title>
      </motion.div>
      <RedBar />
      <section className="mt-10 gap-3 md:grid md:grid-cols-2 lg:grid-cols-3">
        {services.map(({ title, imgSrc, descriptions }) => (
          <ServiceContainer key={title}>
            <Image src={imgSrc} alt="icon" width={60} height={60} />
            <Subtitle>{title}</Subtitle>

            <ul className='space-y-1'>
              {descriptions.map((value) => (
                <ListItem key={value}>{value}</ListItem>
              ))}
            </ul>
          </ServiceContainer>
        ))}
      </section>
    </section>
  )
}
