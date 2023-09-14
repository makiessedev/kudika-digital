import { ReactNode } from "react";

export function CopyrightWrapper({ children }: {children: ReactNode}) {
  return (
    <section className='flex items-center justify-center text-white mt-10 md:mt-20'>
      { children }
    </section>
  )  
}