import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Learn Code',
  description: 'Sit down, take a rest and lear.',
  manifest:'/manifest.json',
  themeColor:'#0D1117'
  

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
       <Script src='/register-sw.ts' />
      <body className="min-h-screen bg-black-100 font-poppins">
        
        {children}
        
       </body>
    </html>
  )
}
