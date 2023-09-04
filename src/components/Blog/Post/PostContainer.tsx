import { ReactNode } from "react";

export function PostContainer({ children }: {children: ReactNode}) {
  return (
    <section
      className="pt-10 md:pt-20 space-y-4 max-w-3xl"
    >
      {children}
    </section>
  )
}