import { ReactNode } from 'react'

export function Paragraph({ children }: { children: ReactNode }) {
  return (
    <p className="text-xl font-bold text-gray-500/30 md:text-3xl">{children}</p>
  )
}
