import { ReactNode } from 'react'

export function HeaderContainer({ children }: { children: ReactNode }) {
  return (
    <header className="fixed z-30 h-28 w-full grid-flow-col bg-white px-6 shadow-sm md:grid md:grid-cols-2 lg:px-20">
      {children}
    </header>
  )
}
