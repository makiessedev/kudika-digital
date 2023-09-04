import { ReactNode } from "react";

export function Paragraph({ children }: {children: ReactNode}) {
  return (
    <p
      className="font-bold text-3xl text-gray-500/30"
    >
      { children }
    </p>
  )
}