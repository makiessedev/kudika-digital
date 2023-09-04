import { ReactNode } from "react";

export function Paragraph({ children }: { children: ReactNode }) {
  return (
    <p
      className="flex justify-center font-bold md:text-lg text-gray-500 text-center md:text-left md:w-full w-[300px]"
    >
      { children }
    </p>
  )
}