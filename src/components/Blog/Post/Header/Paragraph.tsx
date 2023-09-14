import { ReactNode } from 'react'

export function Paragraph({ children }: { children: ReactNode }) {
  return <p className="text-3xl font-bold text-gray-500/30">{children}</p>
}
