import { ReactNode } from "react";

export function PostsWrapper({ children }: { children: ReactNode }) {
  return (
    <section
      className="md:grid md:grid-cols-2 lg:grid-cols-3"
    >
      { children }
    </section>
  )
}