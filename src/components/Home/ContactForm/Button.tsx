import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export function Button({ children, ...props }: ButtonProps) {
  return (
    <button {...props} className="hover:brightness-90 cursor-pointer z-50 mx-auto h-12 w-[300px] rounded-lg bg-gray-500 font-semibold uppercase text-gray-100">
      {children}
    </button>
  )
}
