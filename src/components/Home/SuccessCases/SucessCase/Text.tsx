import { ReactNode } from 'react'

export function Text({ children }: { children: ReactNode }) {
  return (
    <p className="font-regular mb-1 text-center text-base text-gray-500 md:text-lg">
      {children}
    </p>
  )
}
