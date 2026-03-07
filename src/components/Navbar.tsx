'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS, BUSINESS } from '@/lib/content'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when mobile overlay is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm shadow-primary/5'
            : 'border-b border-primary/10 bg-white/80 backdrop-blur-sm'
        }`}
      >
        <nav
          aria-label="Ana gezinti"
          className="mx-auto flex h-14 max-w-[1200px] items-center justify-between px-5 md:px-8"
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 transition-opacity hover:opacity-70"
            aria-label="Fish&Fish — ana sayfaya git"
          >
            <Image
              src="/fish-fish/logo.png"
              alt="Fish&Fish logosu"
              width={32}
              height={32}
              className="rounded-md object-contain"
            />
            <span className="text-[15px] font-semibold tracking-tight text-primary">
              Fish<span className="text-accent">&amp;</span>Fish
            </span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-7 md:flex" role="list">
            {NAV_LINKS.map(({ href, label }) => {
              const active = pathname === href
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`relative pb-0.5 text-[11px] font-semibold uppercase tracking-[0.1em] transition-colors duration-150 ${
                      active
                        ? "text-primary after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full after:bg-accent after:content-['']"
                        : 'text-slate-400 hover:text-primary'
                    }`}
                    aria-current={active ? 'page' : undefined}
                  >
                    {label}
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* Desktop CTA */}
          <Link
            href="/menu"
            className="hidden items-center rounded-full bg-primary px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-white transition-all duration-150 hover:bg-primary/85 hover:shadow-md hover:shadow-primary/20 md:inline-flex"
          >
            Menüyü Gör
          </Link>

          {/* Mobile hamburger */}
          <button
            className="flex min-h-[44px] min-w-[44px] items-center justify-center text-primary transition-opacity hover:opacity-70 md:hidden"
            onClick={() => setOpen(true)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Menüyü aç"
          >
            <Menu className="h-[22px] w-[22px]" aria-hidden="true" />
          </button>
        </nav>
      </header>

      {/* Mobile full-screen overlay */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Gezinti menüsü"
        className={`fixed inset-0 z-[100] flex flex-col bg-white transition-opacity duration-300 md:hidden ${
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        {/* Overlay top bar */}
        <div className="flex items-center justify-between border-b border-primary/10 px-5 py-4">
          <Link
            href="/"
            className="flex items-center gap-2.5"
            onClick={() => setOpen(false)}
          >
            <Image
              src="/fish-fish/logo.png"
              alt="Fish&Fish logosu"
              width={32}
              height={32}
              className="rounded-md object-contain"
            />
            <span className="text-[15px] font-semibold tracking-tight text-primary">
              Fish<span className="text-accent">&amp;</span>Fish
            </span>
          </Link>
          <button
            className="flex min-h-[44px] min-w-[44px] items-center justify-center text-slate-400 transition-colors hover:text-primary"
            onClick={() => setOpen(false)}
            aria-label="Menüyü kapat"
          >
            <X className="h-[22px] w-[22px]" aria-hidden="true" />
          </button>
        </div>

        {/* Nav links — staggered fade-up on open */}
        <nav className="flex flex-1 flex-col justify-center px-8">
          <ul className="flex flex-col items-center" role="list">
            {NAV_LINKS.map(({ href, label }, i) => {
              const active = pathname === href
              return (
                <li
                  key={href}
                  style={{
                    opacity: open ? 1 : 0,
                    transform: open ? 'translateY(0)' : 'translateY(10px)',
                    transitionProperty: 'opacity, transform',
                    transitionDuration: '0.3s',
                    transitionTimingFunction: 'ease',
                    transitionDelay: open ? `${i * 45 + 60}ms` : '0ms',
                  }}
                >
                  <Link
                    href={href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center gap-3 py-3.5 font-display text-[2rem] font-light tracking-tight transition-colors ${
                      active ? 'text-primary' : 'text-slate-300 hover:text-primary'
                    }`}
                    aria-current={active ? 'page' : undefined}
                  >
                    {label}
                    {active && (
                      <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Bottom CTA */}
        <div className="px-8 pb-10">
          <Link
            href="/menu"
            onClick={() => setOpen(false)}
            className="flex min-h-[52px] w-full items-center justify-center rounded-full bg-primary text-[12px] font-semibold uppercase tracking-[0.1em] text-white transition-all hover:bg-primary/85"
          >
            Menüyü Gör
          </Link>
          <p className="mt-4 text-center text-[11px] tracking-wide text-slate-400">
            {BUSINESS.phone}
          </p>
        </div>
      </div>
    </>
  )
}
