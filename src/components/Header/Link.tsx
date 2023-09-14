import NextLink from 'next/link'
import { AnchorHTMLAttributes, ReactNode } from 'react'

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode
  href: string
}

export function Link({ children, href, ...props }: LinkProps) {
  return (
    <li className="w-full py-4 text-center text-base font-semibold text-gray-500 transition duration-300 ease-in-out hover:text-red-500 focus:text-red-500 md:px-3 md:text-base">
      <NextLink href={href} {...props}>
        {children}
      </NextLink>
    </li>
  )
}
