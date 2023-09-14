import { ReactNode } from 'react'

export function FooterContainer({ children }: { children: ReactNode }) {
  return (
    <div className="flex justify-between text-sm font-normal text-gray-500/50">
      {children}
    </div>
  )
}
