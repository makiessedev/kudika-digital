import { useEffect, useState } from "react";

export function useMedia( media: string) {
  const [match, setMatch] = useState<boolean>()
 
  useEffect(() => {
    function changeMatch() {
      const { matches } = matchMedia(media)

      setMatch(matches)
    }

    changeMatch()
    addEventListener('resize', changeMatch)

    return () => removeEventListener('resize', changeMatch)
  }, [media])

  return match
}