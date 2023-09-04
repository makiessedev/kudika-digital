import { ReactNode } from "react";

export function Paragraph({ children }: { children: ReactNode }) {
  return (
    <p
      className="font-normal text-center lg:text-left text-lg xl:text-2xl text-gray-100 md:w-[649px]"
    >
      { children }
    </p>
  )
}