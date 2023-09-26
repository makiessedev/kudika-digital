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

export default function Header() {
  const [activeMobileMenu, setActiveMobileMenu] = useState<boolean>(false)
  const isMobile = useMedia('(max-width: 767px)')

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
        <Link href="/#solutions" onClick={closeMenu}>
          Solução
        </Link>
        <Link href="/#cases" onClick={closeMenu}>
          Cases
        </Link>
        <Link href="/#services" onClick={closeMenu}>
          Serviços
        </Link>
        <Link href="/#bugdet" onClick={closeMenu}>
          Orçamento
        </Link>
        <BlogLink href="/blog" onClick={closeMenu}>
          Blog
        </BlogLink>
      </LinksContainer>
    </HeaderContainer>
  )
}
