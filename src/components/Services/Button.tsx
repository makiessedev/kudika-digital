import Link from "next/link";
import { ReactNode } from "react";

export function Button({ children }: { children: ReactNode }) {
  return (
    <Link 
      className="flex items-center justify-center rounded-full uppercase text-white md:w-80 w-72 h-12 md:h-14 bg-red-500 font-black text-lg"
      href='#!'
    >
      { children }
    </Link>
  )
}