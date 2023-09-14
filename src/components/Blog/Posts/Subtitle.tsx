import { ReactNode } from 'react'

export function Subtitle({ children }: { children: ReactNode }) {
  return (
    <h3 className="text-xl font-black uppercase text-gray-500">{children}</h3>
  )
}
