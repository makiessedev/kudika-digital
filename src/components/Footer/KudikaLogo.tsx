import Image from 'next/image'
import React from 'react'

export function KudikaLogo() {
  return (
    <Image
      className=''
      src="/logo-white.png" 
      alt="Kudika logo" 
      width={180} 
      height={108} 
    />
  )
}