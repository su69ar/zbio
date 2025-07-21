// app/layout.tsx
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ZBIO',
  description: "Bali's First Circular Food Ecosystem",
  generator: 'Bali Micro Technology',
  icons: {
    icon: './favicon.png', // Path ke favicon Anda
    apple: './favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
