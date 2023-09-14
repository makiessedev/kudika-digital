import { ReactNode } from 'react'

export function Content({ children }: { children: ReactNode }) {
  return <p className="text-base font-normal text-gray-500/50">{children}</p>
}
