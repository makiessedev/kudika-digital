import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export function Button({ children, ...props }: ButtonProps) {
  return (
    <button 
      {...props}
      className="flex items-center justify-center rounded-full uppercase text-white md:w-80 w-72 h-12 md:h-14 bg-gray-500 border-2 border-red-500 font-black text-lg"
    >
      { children }
    </button>
  )
}