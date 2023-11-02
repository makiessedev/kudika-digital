'use client'

import { ReactNode } from 'react'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export function Title({ children }: { children: ReactNode }) {
  const [ref, inView] = useInView({});

  return (
    <motion.h2 
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, delay: 0.2 }}
      className="text-center text-xl font-black uppercase text-gray-100 md:text-left md:text-2xl xl:text-4xl"
    >
      {children}
    </motion.h2>
  )
}
