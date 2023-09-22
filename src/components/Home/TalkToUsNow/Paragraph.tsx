import { ReactNode } from 'react'

export function Paragraph({ children }: { children: ReactNode }) {
  return (
    <p className="text-center text-lg font-normal text-gray-100 md:w-[450px] xl:text-xl">
      {children}
    </p>
  )
}
