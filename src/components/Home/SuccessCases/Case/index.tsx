'use client'

import Image from 'next/image'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import { Button } from '../Button'
import { Container } from './Container'
import { Title } from './Title'
import { StrongText } from './StrongText'
import { Text } from './Text'

type SuccessCaseProps = {
  imagePosition: string | 'left' | 'right'
  title: string
  link: string
  strongText: string
  text: string
  imgSrc: string
}

export function Case({
  imagePosition,
  imgSrc,
  link,
  strongText,
  text,
  title,
}: SuccessCaseProps) {
  const [ref, inView] = useInView({});

  return (
    <Container imagePosition={imagePosition}>
      <div className="flex flex-col items-center justify-center space-y-1 lg:items-start md:space-y-3">
        <Title>{title}</Title>
        <StrongText>{strongText}</StrongText>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Image
            className="lg:hidden"
            src={imgSrc}
            width={553}
            height={365}
            alt="girl"
          />
        </motion.div>
        <Text>{text}</Text>
        <Button href={link}>conheça este case</Button>
      </div>
      { imagePosition === 'right' ? (
        <motion.div
        ref={ref}
        initial={{ opacity: 0, x: 20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Image
          className="hidden lg:block"
          src={imgSrc}
          width={553}
          height={365}
          alt="girl"
        />
      </motion.div>
      ) : (
        <motion.div
        ref={ref}
        initial={{ opacity: 0, x: -20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Image
          className="hidden lg:block"
          src={imgSrc}
          width={553}
          height={365}
          alt="girl"
        />
      </motion.div>
      ) }
      
    </Container>
  )
}
