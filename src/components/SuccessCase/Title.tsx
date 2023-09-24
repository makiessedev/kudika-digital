import { ReactNode } from 'react'

export function Title({ children }: { children: ReactNode }) {
  return (
    <h3 className="text-center text-xl font-bold uppercase text-gray-500 md:mx-auto md:text-left md:text-3xl">
      {children}
    </h3>
  )
}
