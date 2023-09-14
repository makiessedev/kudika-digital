import { ReactNode } from 'react'

export function SocialMidiaWrapper({ children }: { children: ReactNode }) {
  return <section className="flex gap-3 md:flex-wrap">{children}</section>
}
