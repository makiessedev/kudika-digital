import { ReactNode } from "react";

export function Title({ children }: { children: ReactNode }) {
  return (
    <h2
      className="text-white text-center md:text-left uppercase font-medium text-xl md:text-2xl xl:text-4xl"
    >
      { children }
    </h2>
  )
}