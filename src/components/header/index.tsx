import React from 'react'
import Link from 'next/link'
import Container from '../container'

export default function Header() {
  return (
    <header className='px-[65px] py-[50px] flex flex-row justify-between items-center bg-white'>
      <div>
        <img src="/src/assets/logo/logo_kudika_black.png" alt="Tentando" />
      </div>
      <nav>
        <ul className='flex  items-center gap-[42px]'>
          <li><Link href="#!">Home</Link></li>
          <li><Link href="#!">Soluções</Link></li>
          <li><Link href="#!">Cases</Link></li>
          <li><Link href="#!">Serviços</Link></li>
          <li><Link href="#!">Blog</Link></li>
          <li><Link href="#!">Orçamento</Link></li>
        </ul>
      </nav>
    </header>
  )
}
