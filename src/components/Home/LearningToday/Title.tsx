'use client'

import { inView, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export function Title() {
  const [ref, inView] = useInView({});
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, delay: 0.2 }}
    >
      <h2 className="text-center font-montserrat text-3xl font-black uppercase text-red-500 md:text-left md:text-5xl xl:text-6xl">
        aprendizado de hoje
      </h2>
    </motion.div>
  )
}