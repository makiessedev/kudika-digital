import { ReactNode } from "react";

export function Container({ children }: {children: ReactNode}) {
  return (
    <footer className='flex flex-col items-center justify-center px-[65px] py-[50px] bg-gray-500'>
      { children }
    </footer>
  )
}