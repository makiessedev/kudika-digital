import Link from 'next/link'
import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export function Button({ children, ...rest }: ButtonProps) {
  return (
    <button
      className="mt-10 flex items-center justify-center rounded-full bg-red-500 px-8 py-2 text-[0.88rem] font-bold uppercase text-white"
      {...rest}
    >
      {children}
    </button>
  )
}
