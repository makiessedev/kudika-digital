import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

type CardPartnersProps = {
  imagePartners: string
  title: string
  link: string
}

export default function SectionPartners({
  imagePartners,
  title,
  link,
}: CardPartnersProps) {
  return (
    <>
      <Link
        className="grayscale-100 hover:grayscale-0' href={link} cursor-pointer opacity-25 filter transition-all duration-300 ease-in hover:opacity-100"
        target="_blank"
        href={link}
      >
        <Image
          className="w-20"
          src={imagePartners}
          alt={title}
          width={60}
          height={53}
          title={title}
        />
      </Link>
    </>
  )
}
