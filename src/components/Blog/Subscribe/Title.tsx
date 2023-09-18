import { ReactNode } from 'react'

export function Title({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-center text-2xl font-semibold text-white md:text-left md:text-4xl xl:text-5xl">
      {children}
    </h2>
  )
}
