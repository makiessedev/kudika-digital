import { ReactNode } from 'react'

export function Title({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-center text-3xl font-black uppercase text-gray-100 md:text-left md:text-5xl xl:text-6xl">
      {children}
    </h2>
  )
}
