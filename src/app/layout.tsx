import type { Metadata } from 'next'
import { Work_Sans, Cormorant_Garamond } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { BUSINESS, PAGE_META } from '@/lib/content'

const workSans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-work-sans',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '900'],
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
  weight: ['300', '400', '600'],
})

export const metadata: Metadata = {
  title: {
    default: PAGE_META.home.title,
    template: '%s | Fish&Fish',
  },
  description: PAGE_META.home.description,
  metadataBase: new URL('https://PLACEHOLDER_DOMAIN'),
  openGraph: {
    type: 'website',
    siteName: BUSINESS.name,
    locale: 'tr_TR',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={`${workSans.variable} ${cormorant.variable}`}>
      <body className="flex min-h-screen flex-col">
        {/* Skip-to-content (WCAG 2.1 AA) */}
        <a href="#main-content" className="skip-link">
          Ana içeriğe geç
        </a>

        <Navbar />

        <main id="main-content" className="flex-1" tabIndex={-1}>
          {children}
        </main>

        <Footer />
      </body>
    </html>
  )
}
