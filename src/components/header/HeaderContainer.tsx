import { ReactNode } from "react";

export function HeaderContainer({ children }: { children: ReactNode }) {
  return (
    <header 
      className='fixed px-6 lg:px-20 h-28 w-full md:grid md:grid-cols-2 grid-flow-col bg-white'
    >
      {children}
    </header>
  )
}