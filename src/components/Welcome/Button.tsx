import Link from "next/link";
import { ReactNode } from "react";

export function Button({ children }: { children: ReactNode }) {
  return (
    <Link 
      className="flex items-center justify-center rounded-full uppercase text-white px-6 py-2 bg-red-500 font-black text-sm"
      href='#!'
    >
      { children }
    </Link>
  )
}