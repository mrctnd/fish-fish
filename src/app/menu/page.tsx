import type { Metadata } from 'next'
import { CheckCircle, Droplets } from 'lucide-react'
import { PAGE_META, BUSINESS } from '@/lib/content'
import { MenuClient } from '@/components/MenuClient'

export const metadata: Metadata = {
  title: PAGE_META.menu.title,
  description: PAGE_META.menu.description,
}

export default function MenuPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col">
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="mx-auto mt-6 w-full max-w-7xl px-4 sm:mt-8 sm:px-6 lg:px-10">
        <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
          <div className="flex flex-col lg:flex-row">
            {/* Hero image — taller on mobile */}
            <div
              className="h-56 w-full bg-cover bg-center sm:h-72 lg:h-auto lg:w-1/2"
              style={{
                backgroundImage:
                  'url(https://lh3.googleusercontent.com/aida-public/AB6AXuCRl8nmxWnwGOYDhMLARRQOKJISY1OkVIOAHz-RZGHbVsekOCMaVVZGBgWZ7CftsyviQDr4jhF8PyqeIFs4p3j6R-yntg4G56NumrgD3sg98CCoXMQacsuNdzbswS4DWNXXNO9-etpR3R0r3mA2JzcjqWtr7QfEc4oR66i_tYCmdu7JZO_7SlbuQSyNT8Oss3Fw3rkgroVQcCdhX240ZV8t2gbam8uCCS8A9j2GOSd6p1tgb582HfY3yE0qpOX60uU6jJO5yAEcsw)',
              }}
              role="img"
              aria-label="Izgara somon ve sebze tabağı"
            />

            {/* Hero text */}
            <div className="flex flex-col justify-center p-6 sm:p-10 lg:w-1/2 lg:p-16">
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="flex items-center gap-1.5 rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">
                  <CheckCircle className="h-3 w-3" aria-hidden="true" />
                  Helal Sertifikalı
                </span>
                <span className="flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                  <Droplets className="h-3 w-3" aria-hidden="true" />
                  Günlük Taze
                </span>
              </div>

              <h1 className="mb-3 text-3xl font-black tracking-tight text-primary sm:text-4xl lg:text-5xl">
                Menümüz
              </h1>
              <p className="mb-6 text-base leading-relaxed text-slate-600 sm:text-lg">
                Yerel balıkçılardan günlük temin edilen en taze deniz ürünleriyle hazırlanan
                lezzetleri keşfedin.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={`tel:${BUSINESS.phoneTel}`}
                  className="flex h-11 items-center justify-center rounded-xl bg-primary px-6 text-sm font-bold text-white shadow-md shadow-primary/20 transition-all hover:bg-primary/90"
                >
                  Rezervasyon İçin Ara
                </a>
                <a
                  href={BUSINESS.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 items-center justify-center rounded-xl border border-primary/15 bg-transparent px-6 text-sm font-bold text-primary transition-colors hover:bg-primary/5"
                >
                  Yol Tarifi Al
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Interactive menu (client component) ──────────── */}
      <MenuClient />
    </div>
  )
}
