import './globals.css'
import type { Metadata } from 'next'
import { Lora } from 'next/font/google'
const font = Lora({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'HELIVAN RESEARCH',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        {children}
      </body>
    </html>
  )
}
