import { ReactNode } from 'react'

export function Paragraph({ children }: { children: ReactNode }) {
  return (
    <p className="flex w-[300px] justify-center text-center font-bold text-gray-500 md:w-full md:text-left md:text-lg">
      {children}
    </p>
  )
}
