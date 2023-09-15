import { ReactNode } from 'react'

export function StrongText({ children }: { children: ReactNode }) {
  return (
    <p className="text-sm font-bold text-gray-500 md:w-[378px] md:text-lg">
      {children}
    </p>
  )
}
