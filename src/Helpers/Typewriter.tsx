import { useEffect, useState } from "react";
import { clearTimeout } from "timers";

type TypewriterProps = {
  text: string, 
  speed: number
}

export function Typewriter({ speed, text }: TypewriterProps) {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    let timer: NodeJS.Timeout

    if(currentIndex < text.length) {
        timer = setTimeout(() => {
          setDisplayText((prevText) => prevText + text[currentIndex])
          setCurrentIndex(currentIndex + 1)
        }, speed)
    }
  }, [currentIndex, text, speed])

  return <>{displayText}</>
}