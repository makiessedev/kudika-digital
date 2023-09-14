import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className="flex h-12 w-72 items-center justify-center rounded-full border-2 border-red-500 bg-gray-500 text-lg font-black uppercase text-white md:h-14 md:w-80"
    >
      {children}
    </button>
  )
}
