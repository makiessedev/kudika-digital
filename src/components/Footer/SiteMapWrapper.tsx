import { ReactNode } from 'react'

export function SiteMapWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="hidden md:block md:border-x md:border-white/25 md:px-5 lg:px-16">
      {children}
    </div>
  )
}
