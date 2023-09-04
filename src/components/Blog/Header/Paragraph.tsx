import { ReactNode } from "react";

export function Paragraph({ children }: { children: ReactNode }) {
  return (
    <p
      className="font-bold text-xl text-gray-500"
    >{ children }</p>
  )
}