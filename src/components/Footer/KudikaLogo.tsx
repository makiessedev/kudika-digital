import Image from 'next/image'
import React from 'react'

export function KudikaLogo() {
  return (
    <Image
      className='md:w-[180px] md:h-[108px] md:my-auto md:pr-8'
      src="/logo-white.png" 
      alt="Kudika logo" 
      width={180} 
      height={108} 
    />
  )
}