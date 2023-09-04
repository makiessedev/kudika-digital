import { ReactNode } from "react";

export function Container({ children }: {children: ReactNode}) {
  return (
    <section
      className="md:flex md:flex-col md:items-center px-6 lg:px-20 pt-28"
    >
      { children }
    </section>
  )
}