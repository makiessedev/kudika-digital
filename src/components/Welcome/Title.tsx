import { ReactNode } from "react";

export function Title({ children }: { children: ReactNode }) {
  return (
    <h1
      className="text-red-500 font-montserrat text-center md:text-left uppercase font-black text-3xl md:text-5xl xl:text-6xl"
    >
      { children }
    </h1>
  )
}