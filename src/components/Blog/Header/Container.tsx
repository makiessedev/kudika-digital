import { ReactNode } from 'react'

export function Container({ children }: { children: ReactNode }) {
  return <div className="space-y-2 py-12 md:pt-0">{children}</div>
}
