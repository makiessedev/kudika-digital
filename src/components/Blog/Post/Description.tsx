import { ReactNode } from 'react'

export function Description({ children }: { children: ReactNode }) {
  return (
    <p className="text-base font-normal text-gray-500/60 md:text-lg">
      {children}
    </p>
  )
}
