import { ReactNode } from "react";

export function Container({ children }: { children: ReactNode }) {
  return (
    <section 
      className="flex flex-col md:flex-row gap-6 md:gap-20 md:pt-5"
    >
      { children }
    </section>
  )
}