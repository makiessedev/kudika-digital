import { ReactNode } from "react";

export function Containe({ children }: { children: ReactNode }) {
  return (
    <section
      className="space-y-2"
    >
      { children }
    </section>
  )
}