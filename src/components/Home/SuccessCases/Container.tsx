import { ReactNode } from "react";

export function Container({ children }: { children: ReactNode }) {
  return (
    <section 
      className="px-6 lg:px-20 h-full md:mt-1"
    >
      { children }
    </section>
  )
}