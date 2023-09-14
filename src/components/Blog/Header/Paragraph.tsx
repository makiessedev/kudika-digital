import { ReactNode } from 'react'

export function Paragraph({ children }: { children: ReactNode }) {
  return <p className="text-xl font-bold text-gray-500">{children}</p>
}
