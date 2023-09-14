import { ReactNode } from 'react'

type ContainerProps = {
  imagePosition: string
  children: ReactNode
}

export function Container({ imagePosition, children }: ContainerProps) {
  return (
    <section
      className={`mb-6 md:my-20 md:flex md:flex-row md:justify-center xl:gap-20 ${
        imagePosition === 'left' && 'md:flex-row-reverse'
      }`}
    >
      {children}
    </section>
  )
}
