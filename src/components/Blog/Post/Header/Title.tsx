import { ReactNode } from 'react'

export function Title({ children }: { children: ReactNode }) {
  return (
    <h1 className="text-7xl font-black uppercase text-gray-500/30">
      {children}
    </h1>
  )
}
