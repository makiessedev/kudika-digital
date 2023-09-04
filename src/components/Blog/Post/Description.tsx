import { ReactNode } from "react";

export function Description({ children }: {children: ReactNode}) {
  return (
    <p
      className="font-normal text-base md:text-lg text-gray-500/60"
    >{ children }</p>
  )
}