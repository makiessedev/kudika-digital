import { ReactNode } from 'react'

export function Title({ children }: { children: ReactNode }) {
  return (
    <h1 className="text-6xl font-black uppercase text-gray-500/30 md:text-7xl">
      {children}
    </h1>
  )
}
