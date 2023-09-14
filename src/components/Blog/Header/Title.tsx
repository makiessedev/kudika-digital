import { ReactNode } from 'react'

export function Title({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-center text-5xl font-black uppercase text-red-500 md:text-7xl">
      {children}
    </h2>
  )
}
