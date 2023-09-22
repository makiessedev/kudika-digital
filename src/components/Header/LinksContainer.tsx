import { ReactNode } from 'react'

type LinksContainer = {
  children: ReactNode
  isMobile: boolean
  activeMobileMenu: boolean
}

export function LinksContainer({
  children,
  isMobile,
  activeMobileMenu,
}: LinksContainer) {
  return (
    <ul
      className={`flex flex-col items-center justify-center rounded-b bg-white shadow md:flex-row md:justify-end md:rounded-none md:shadow-none ${
        isMobile && !activeMobileMenu && 'hidden'
      }`}
    >
      {children}
    </ul>
  )
}
