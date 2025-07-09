import type { Metadata } from 'next'
import './globals.css'
import './fonts.css'

export const metadata: Metadata = {
  title: 'ZBIO',
  description: "Bali's First Circular Food Ecosystem",
  generator: 'Bali Micro Technology',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
