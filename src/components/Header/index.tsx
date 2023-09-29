'use client'

import React, { useState } from 'react'

import { Link } from './Link'
import NextLink from 'next/link'
import { HumburguerIcon } from './HumburguerIcon'
import { HeaderContainer } from './HeaderContainer'
import { useMedia } from '@/Hooks/useMedia'
import { LinksContainer } from './LinksContainer'
import { KudikaLogo } from './KudikaLogo'
import { BlogLink } from './BlogLink'
import { SmoothScrollLink } from './SmoothScrollLink'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [activeMobileMenu, setActiveMobileMenu] = useState<boolean>(false)
  const isMobile = useMedia('(max-width: 767px)')
  const pathname = usePathname()

  function closeMenu() {
    setTimeout(() => {
      setActiveMobileMenu((value) => value === false)
    }, 200)
  }

  return (
    <HeaderContainer>
      <div className="flex h-full w-full flex-row items-center justify-between md:w-[129px]">
        <NextLink href="/">
          <KudikaLogo />
        </NextLink>
        <HumburguerIcon setActiveMobileMenu={setActiveMobileMenu} />
      </div>
      <LinksContainer isMobile={!!isMobile} activeMobileMenu={activeMobileMenu}>
        <Link href="/" onClick={closeMenu}>
          Home
        </Link>
        {
          pathname !== '/' ? 
            <>
              <Link href="/#cases" onClick={closeMenu}>
                Cases
              </Link>
              <Link href="/#solutions" onClick={closeMenu}>
                Solução
              </Link>
              <Link href="/#services" onClick={closeMenu}>
                Serviços
              </Link>
              <Link href="/#bugdet" onClick={closeMenu}>
                Orçamento
              </Link>
            </> : 
            <>
              <SmoothScrollLink text='Cases' targetId='cases'  offset={ isMobile ? 55 : 90} setActiveMobileMenu={setActiveMobileMenu} />
              <SmoothScrollLink text='Solução' targetId='solutions' offset={isMobile ? 75 : 80} setActiveMobileMenu={setActiveMobileMenu} />
              <SmoothScrollLink text='Serviços' targetId='services' offset={isMobile ? 80 : 90} setActiveMobileMenu={setActiveMobileMenu} />
              <SmoothScrollLink text='Orçamento' targetId='bugdet' setActiveMobileMenu={setActiveMobileMenu} />
            </>
        }
        
        <BlogLink href="/blog" onClick={closeMenu}>
          Blog
        </BlogLink>
      </LinksContainer>
    </HeaderContainer>
  )
}
