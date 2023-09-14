import { ReactNode } from 'react'

export function Title({ children }: { children: ReactNode }) {
  return (
    <h2 className="max-w-[400px] text-center text-2xl font-bold uppercase text-white md:text-4xl">
      {children}
    </h2>
  )
}
