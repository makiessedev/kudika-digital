import { ReactNode } from "react";

export function Text({ children }: { children: ReactNode }) {
  return (
    <p
      className="font-regular text-base md:text-lg text-center text-gray-500 mb-1"
    >{ children }</p>
  )
}