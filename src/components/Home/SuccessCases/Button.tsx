import Link from 'next/link'
import { AnchorHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode
  href: string
}

export function Button({ children, href, ...props }: ButtonProps) {
  return (
    <Link
      className="hover:transition-all hover:translate-x-1 hover:brightness-90 focus:brightness-90 flex items-center justify-center rounded-full px-8 py-2 text-[0.88rem] font-bold uppercase text-red-500 border-2 border-red-500"
      href={href}
      {...props}
    >
      {children}
    </Link>
  )
}
