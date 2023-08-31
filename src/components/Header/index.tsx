'use client'

import React, { useState } from 'react'

import { Link } from './Link'
import { HumburguerIcon } from './HumburguerIcon'
import { HeaderContainer } from './HeaderContainer'
import { useMedia } from '@/Hooks/useMedia'
import { LinksContainer } from './LinksContainer'
import { KudikaLogo } from './KudikaLogo'

export default function Header() {
  const [activeMobileMenu, setActiveMobileMenu] = useState<boolean>(false)
  const isMobile = useMedia('(max-width: 767px)')
  console.log(isMobile, activeMobileMenu)

  return (
    <HeaderContainer >
      <div 
        className='flex w-full md:w-[129px] h-full flex-row justify-between items-center'
      >
        <KudikaLogo />
        <HumburguerIcon setActiveMobileMenu={setActiveMobileMenu} />
      </div>
      <LinksContainer isMobile={!!isMobile} activeMobileMenu={activeMobileMenu}>
        <Link href='#!'>
          Home
        </Link>
        <Link href='#!'>
          Solução
        </Link>
        <Link href='#!'>
          Cases
        </Link>
        <Link href='#!'>
          Serviços
        </Link>
        <Link href='#!'>
          Blog
        </Link>
        <Link href='#!'>
          Orçamento
        </Link>
      </LinksContainer>
    </HeaderContainer>
  )
}
