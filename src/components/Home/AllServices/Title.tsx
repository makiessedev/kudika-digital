import { ReactNode } from 'react'

export function Title({ children }: { children: ReactNode }) {
  return (
    <h1
      id="services"
      className="mb-7 text-center font-montserrat text-3xl font-black uppercase text-red-500 md:text-left md:text-5xl xl:text-6xl"
    >
      {children}
    </h1>
  )
}
