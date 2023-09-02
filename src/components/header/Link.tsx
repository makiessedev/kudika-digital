import NextLink from 'next/link'
import { AnchorHTMLAttributes, ReactNode } from 'react'

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode
  href: string
}

export function Link({children, href, ...props}: LinkProps) {
  return (
    <li 
      className='text-center text-base md:text-base text-gray-500 font-semibold w-full py-4 md:px-3 transition ease-in-out duration-300 focus:text-red-500 hover:text-red-500'
    >
      <NextLink href={href} {...props} >{children}</NextLink>
    </li>
  )
}