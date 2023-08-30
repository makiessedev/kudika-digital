"use client"

import { 
  Dispatch, 
  ReactNode, 
  SetStateAction, 
  createContext, 
  useContext, 
  useState 
} from "react";

type HeaderContextData = {
  isActiveMobileMenu: boolean,
  setIsactiveMobileMenu: Dispatch<SetStateAction<boolean>>
}

const HeaderContext = createContext<HeaderContextData | undefined>(undefined)

export const HeaderProvider = ({ children }: { children: ReactNode }) => {
  const [
    isActiveMobileMenu, 
    setIsactiveMobileMenu
  ]: [
    isActiveMobileMenu: boolean,
    setIsactiveMobileMenu: Dispatch<SetStateAction<boolean>>
  ] = useState(false)

  const value: HeaderContextData = {
    isActiveMobileMenu,
    setIsactiveMobileMenu
  }

  return (
    <HeaderContext.Provider value={value}>
      {children}
    </HeaderContext.Provider>
    )
}

export const useHeader = (): HeaderContextData => {
  const context = useContext(HeaderContext)

  if(!context) throw new Error("useHeader must be used within a HeaderProvider");

  return context
}