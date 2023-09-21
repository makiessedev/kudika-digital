import Link from 'next/link'
import { AnchorHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode
  href: string
}

export function Button({ children, href, ...props }: ButtonProps) {
  return (
    <Link
      className="flex items-center justify-center rounded-full bg-red-500 px-8 py-2 text-[0.88rem] font-bold uppercase text-white"
      href={href}
      {...props}
    >
      {children}
    </Link>
  )
}
