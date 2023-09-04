import Header from '@/components/Home/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ 
  subsets: ['latin'], 
  weight: [
    '100', 
    '200',
    '300',
    '400',
    '500',
    '600',
    '700',
    '800',
    '900'
  ],
})

export const metadata: Metadata = {
  title: 'Kudika Digital',
  description: 'Nascemos com o objetivo de humanizar marcas e formar pontes entre os negócios e seus clientes.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body className={`montserrat.className`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
