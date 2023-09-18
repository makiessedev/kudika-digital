import { ReactNode } from 'react'

export function Title({ children }: { children: ReactNode }) {
  return <h3 className="text-5xl font-bold text-gray-500">{children}</h3>
}
