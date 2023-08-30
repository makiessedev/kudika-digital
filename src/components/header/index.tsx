'use client'

import React, { useState } from 'react'
import Image from 'next/image'

import { Link } from './Link'
import { HumburguerIcon } from './HumburguerIcon'

export default function Header() {
  const [activeMobileMenu, setActiveMobileMenu] = useState<boolean>(false)
  
  return (
    <header 
      className='px-10 md:px-20 h-28 w-full md:grid md:grid-cols-2 grid-flow-col bg-white'
    >
      <div 
        className='flex w-full md:w-[129px] h-full flex-row justify-between items-center'
      >
        <div className='w-[100px] md:w-[129px]'>
          <Image
            className='w-full'
            src="/logo_kudika_black.png" 
            alt="Kudika logo" 
            width='129' 
            height='63' 
          />
        </div>
      
        <HumburguerIcon setActiveMobileMenu={setActiveMobileMenu} />
      </div>
      { 
        activeMobileMenu && 
        <>
          <ul 
            className='flex flex-col items-center md:flex-row md:justify-end justify-center'
          >
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
          </ul>
        </> }
    </header>
  )
}
