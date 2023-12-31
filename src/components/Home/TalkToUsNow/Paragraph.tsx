'use client'

import { ReactNode } from 'react'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export function Paragraph({ children }: { children: ReactNode }) {
  const [ref, inView] = useInView({});

  return (
    <motion.p 
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, delay: 0.2 }}
      className="text-center text-lg font-normal text-gray-100 md:w-[450px] xl:text-xl"
    >
      {children}
    </motion.p>
  )
}
