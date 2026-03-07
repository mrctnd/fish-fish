import Link from 'next/link'
import Image from 'next/image'
import { BUSINESS } from '@/lib/content'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-primary/8 bg-white" aria-label="Site footer">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-5 px-6 py-10 sm:flex-row sm:justify-between">

        <Link
          href="/"
          className="flex items-center gap-2.5 transition-opacity hover:opacity-70"
          aria-label="Fish&Fish ana sayfası"
        >
          <Image
            src="/fish-fish/logo.png"
            alt="Fish&Fish logosu"
            width={28}
            height={28}
            className="rounded-lg object-contain"
          />
          <span className="text-[14px] font-semibold tracking-tight text-primary">
            Fish&amp;Fish
          </span>
        </Link>

        <p className="text-center text-[11px] text-slate-400 sm:text-right">
          © {currentYear} Fish&amp;Fish &middot; {BUSINESS.address.city}
        </p>

      </div>
    </footer>
  )
}
