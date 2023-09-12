import { ReactNode } from "react";

type LinksContainer = {
  children: ReactNode,
  isMobile: boolean,
  activeMobileMenu: boolean
}

export function LinksContainer({ children, isMobile, activeMobileMenu }: LinksContainer) {
  return (
    <ul 
      className={`flex flex-col items-center md:flex-row md:justify-end justify-center ${isMobile && !activeMobileMenu && 'hidden'}`}
    >
      {children}
    </ul>
  )
}