import { ReactNode } from 'react'

export function Container({ children }: { children: ReactNode }) {
  return (
    <footer className="flex flex-col items-center justify-center bg-gray-500 pb-[20px] pt-[50px] md:px-[20px] lg:px-[65px]">
      {children}
    </footer>
  )
}
