'use client'

import React, { useState } from 'react'

import { Link } from './Link'
import NextLink from 'next/link'
import { HumburguerIcon } from './HumburguerIcon'
import { HeaderContainer } from './HeaderContainer'
import { useMedia } from '@/Hooks/useMedia'
import { LinksContainer } from './LinksContainer'
import { KudikaLogo } from './KudikaLogo'

export default function Header() {
  const [activeMobileMenu, setActiveMobileMenu] = useState<boolean>(false)
  const isMobile = useMedia('(max-width: 767px)')

  return (
    <HeaderContainer>
      <div className="flex h-full w-full flex-row items-center justify-between md:w-[129px]">
        <NextLink href="/">
          <KudikaLogo />
        </NextLink>
        <HumburguerIcon setActiveMobileMenu={setActiveMobileMenu} />
      </div>
      <LinksContainer isMobile={!!isMobile} activeMobileMenu={activeMobileMenu}>
        <Link href="/">Home</Link>
        <Link href="#!">Solução</Link>
        <Link href="#!">Cases</Link>
        <Link href="#!">Serviços</Link>
        <Link href="/blog">Blog</Link>
        <Link href="#!">Orçamento</Link>
      </LinksContainer>
    </HeaderContainer>
  )
}
