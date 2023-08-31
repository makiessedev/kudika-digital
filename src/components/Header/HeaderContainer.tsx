import { ReactNode } from "react";

export function HeaderContainer({ children }: { children: ReactNode }) {
  return (
    <header 
      className='px-10 md:px-20 h-28 w-full md:grid md:grid-cols-2 grid-flow-col bg-white shadow'
    >
      {children}
    </header>
  )
}