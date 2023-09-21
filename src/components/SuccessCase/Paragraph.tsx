import { ReactNode } from 'react'

export function Paragraph({ children }: { children: ReactNode }) {
  return (
    <p className="text-center text-base font-normal text-gray-500 md:text-left">
      {children}
    </p>
  )
}
