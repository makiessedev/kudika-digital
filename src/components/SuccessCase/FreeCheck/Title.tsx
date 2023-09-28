import { ReactNode } from 'react'

export function Title({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-center text-xl font-medium uppercase text-white md:text-2xl xl:text-4xl">
      {children}
    </h2>
  )
}
