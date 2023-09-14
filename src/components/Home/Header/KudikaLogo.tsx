import Image from 'next/image'

export function KudikaLogo() {
  return (
    <div className="w-[100px] md:w-[129px]">
      <Image
        className="w-full"
        src="/logo_kudika_black.png"
        alt="Kudika logo"
        width="129"
        height="63"
      />
    </div>
  )
}
