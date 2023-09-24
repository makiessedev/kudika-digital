import NextImage from 'next/image'

export function Image({ alt, src }: { src: string; alt: string }) {
  return (
    <NextImage
      className="hidden md:block"
      src={src}
      width={623}
      height={345}
      alt={alt}
    />
  )
}
