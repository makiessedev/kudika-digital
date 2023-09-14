import { ReactNode } from 'react'

export function Title({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-center text-2xl font-bold uppercase text-white md:text-left md:text-5xl xl:text-6xl">
      {children}
    </h2>
  )
}
