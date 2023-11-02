'use client'

import { ReactNode } from 'react'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export function ServiceContainer({ children }: { children: ReactNode }) {
  const [ref, inView] = useInView({});

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="group mb-10 cursor-pointer space-y-2 rounded-lg border-b-8 border-red-500 bg-[#e6d8d8]/20 p-7 transition-all duration-300 hover:border-gray-500 hover:bg-red-500/90 md:m-6"
    >
      {children}
    </motion.div>
  )
}
