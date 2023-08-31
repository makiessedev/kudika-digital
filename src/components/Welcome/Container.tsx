import { ReactNode } from "react";

export function Container({ children }: { children: ReactNode }) {
  return (
    <section 
      className="px-6 lg:px-20 md:grid md:grid-cols-2 md:grid-flow-col pt-28 h-full"
    >
      { children }
    </section>
  )
}