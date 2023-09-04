import { ReactNode } from "react";

export function Paragraph({ children }: { children: ReactNode }) {
  return (
    <p
      className="text-base text-white font-normal text-center md:text-left md:w-[370px] w-[300px]"
    >
      { children }
    </p>
  )
}