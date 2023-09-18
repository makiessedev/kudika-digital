import { ReactNode } from 'react'

export function StrongText({ children }: { children: ReactNode }) {
  return (
    <p className="text-center text-sm font-bold  text-gray-500 md:w-[378px] md:text-start md:text-lg lg:text-start xl:text-start">
      {children}
    </p>
  )
}
