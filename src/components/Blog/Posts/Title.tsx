import { ReactNode } from 'react'

export function Title({ children }: { children: ReactNode }) {
  return (
    <h3 className="cursor-pointer text-xl font-bold text-gray-500 transition-all duration-300 hover:text-red-500">
      {children}
    </h3>
  )
}
