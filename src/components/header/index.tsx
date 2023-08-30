'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { AlignJustify } from 'lucide-react'

export default function Header() {
  const [activeMobileMenu, setActiveMobileMenu] = useState<boolean>(false)

  return (
    <header className='fixed  px-10 h-28 w-full bg-white'>
      <div className='flex w-full md:w-[129px] h-full flex-row justify-between items-center'>
        <div className='w-[100px] md:w-[129px]'>
          <Image
            className='w-full'
            src="/logo_kudika_black.png" 
            alt="Kudika logo" 
            width='129' 
            height='63' 
          />
        </div>
      
        <AlignJustify className='cursor-pointer md:hidden'/>
      </div>
      <nav className='flex flex-col'>
        <ul className='md:flex'>
          <li className=''><Link href="#!">Home</Link></li>
          <li className=''><Link href="#!">Soluções</Link></li>
          <li className=''><Link href="#!">Cases</Link></li>
          <li className=''><Link href="#!">Serviços</Link></li>
          <li className=''><Link href="#!">Blog</Link></li>
          <li className=''><Link href="#!">Orçamento</Link></li>
        </ul>
      </nav>
    </header>
  )
}
