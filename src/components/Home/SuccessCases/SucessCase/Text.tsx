import { ReactNode } from 'react'

export function Text({ children }: { children: ReactNode }) {
  return (
    <p className="font-regular text-base text-gray-500 md:text-base">
      {children}
    </p>
  )
}
