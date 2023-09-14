import { ReactNode } from 'react'

export function Container({ children }: { children: ReactNode }) {
  return (
    <footer className="flex flex-col items-center justify-center bg-gray-500 px-[65px] py-[50px]">
      {children}
    </footer>
  )
}
