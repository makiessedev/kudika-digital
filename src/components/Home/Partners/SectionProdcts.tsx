import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function SectionProdcts() {
  return (
    <div className="flex flex-row items-center justify-center gap-10 py-10 md:flex-row xl:flex-row">
      <Link href="https://bminds.ao/">
        <Image
          src="/partners/bminds.png"
          className="grayscale-100 w-36 cursor-pointer opacity-25 filter transition-all duration-300 ease-in hover:opacity-100 hover:grayscale-0"
          alt="X"
          width={70}
          height={70}
          title="BMinds"
        />
      </Link>
      {/* <Link href="https://www.facebook.com/profile.php?id=100093199014957">
        <Image
          src="/partners/ims.png"
          className="grayscale-100 w-28 cursor-pointer opacity-25 filter transition-all duration-300 ease-in hover:opacity-100 hover:grayscale-0"
          alt="X"
          width={70}
          height={70}
          title="IMS Estúdio"
        />
      </Link> */}
    </div>
  )
}
