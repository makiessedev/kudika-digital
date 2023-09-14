import { ReactNode } from 'react'

export function Container({ children }: { children: ReactNode }) {
  return (
    <footer className="flex flex-col items-center justify-center bg-gray-500 px-[65px] pb-[20px] pt-[50px]">
      {children}
    </footer>
  )
}
