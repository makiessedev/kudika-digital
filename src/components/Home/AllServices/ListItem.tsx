import { randomUUID } from 'crypto'
import { ReactNode } from 'react'

export function ListItem({ children }: { children: ReactNode }) {
  return (
    <li key={randomUUID()} className="group-hover:text-gray-100 text-base font-medium text-gray-500">
      {children}
    </li>
  )
}
