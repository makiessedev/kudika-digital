'use client'

import { inView, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import SectionPartners from './SectionPartners'
import SectionProdcts from './SectionProdcts'
import { Title } from './Title'
import { data } from './data'
import { title } from 'process'

export function Partners() {
  const [ref, inView] = useInView({});

  return (
    <section className="gap-6 space-y-10 px-6 py-12 md:flex md:flex-col md:items-center md:justify-center">
      <section className="flex flex-col items-center justify-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <Title>
            serviços
          </Title>
        </motion.div>
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
          {data.map(({ image, link, title }) => (
            <SectionPartners
              key={title}
              imagePartners={image}
              link={link}
              title={title}
            />
          ))}
        </div>
      </section>
      <section className="flex flex-col items-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <Title>
            Produto
          </Title>
        </motion.div>
        <SectionProdcts />
      </section>
    </section>
  )
}
