import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Learn Code',
  description: ' Get inspired with tech stuffs, Articles, talks, inspirations, Sit down, take a rest and lear. ',
  manifest:'/manifest.json',
  themeColor:'#0D1117',
  keywords: [
    "learncode",
    "fonyuy",
    "learn coding",
    "code learn",
    "seed bamenda",
    "seed 50 days of code",
    "learncoding",
    "fomonyuy jude",
    "fonyuy jude fomonyuy",
    "nquami",
    "tech tutor vercel",
    "tech tutor",
    "tech tutor seed",
    "fonyuy gita"
  ],
  openGraph: {
    url: "https://learncode.vercel.app",
    type: "website",
    title: "Learn Code | SEED",
    description:"Get inspired with tech stuffs, Articles, talks, inspirations.",
    images: [
      {
        url: "https://i.ibb.co/9wwVdrM/studio-c38ec3ff8b3bff1213aa0851ab611dca-fdvkyhpv.jpg",
        width: 1200,
        height: 630,
        alt: "gita"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Learn Code, Coding Resources",
    description:"Get inspired with tech stuffs, Articles, talks, inspirations",
    creator: "@learncode",
    site: "@learncode",
    images: [
      {
        url: "https://i.ibb.co/9wwVdrM/studio-c38ec3ff8b3bff1213aa0851ab611dca-fdvkyhpv.jpg",
        width: 1200,
        height: 630,
        alt: "fonyuygita"
      }
    ]
  },
  alternates: {
    canonical: "https://learncode.vercel.app"
  }
  

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
