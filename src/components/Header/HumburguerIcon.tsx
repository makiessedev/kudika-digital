import { AlignJustify } from 'lucide-react'
import { SetStateAction } from 'react'

type HumburguerIconProps = {
  setActiveMobileMenu: (value: SetStateAction<boolean>) => void
}

export function HumburguerIcon({ setActiveMobileMenu }: HumburguerIconProps) {
  return (
    <AlignJustify
      className="border-md cursor-pointer bg-gray-500/5 md:hidden"
      onClick={() => {
        setActiveMobileMenu((status) => !status)
      }}
    />
  )
}
