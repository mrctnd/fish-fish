import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, ArrowRight } from 'lucide-react'
import { PAGE_META, PAYMENT_PARTNERS, BUSINESS } from '@/lib/content'

export const metadata: Metadata = {
  title: PAGE_META.partners.title,
  description: PAGE_META.partners.description,
}

export default function CozumOrtaklariPage() {
  return (
    <>
      {/* ── HERO BAND ─────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden bg-primary px-6 pb-16 pt-20 text-center"
        aria-label="Ödeme seçenekleri başlığı"
      >
        {/* Dot grid */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(255,255,255,0.045) 1px, transparent 1px)',
            backgroundSize: '36px 36px',
          }}
        />
        {/* Bottom glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-1/2 h-40 w-[60vw] -translate-x-1/2"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(184,149,106,0.12) 0%, transparent 70%)',
          }}
        />

        <div className="relative z-10">
          <p className="animate-fade-up mb-5 text-[10px] font-semibold uppercase tracking-[0.22em] text-accent/70">
            Ödeme Seçenekleri
          </p>
          <h1 className="animate-fade-up-d1 font-display text-[2.4rem] font-light leading-tight tracking-tight text-white sm:text-[3rem]">
            Çözüm Ortaklarımız
          </h1>
          <div
            className="mx-auto my-7 h-px w-10 animate-fade-up-d2 bg-accent/40"
            aria-hidden="true"
          />
          <p className="animate-fade-up-d2 mx-auto max-w-xs text-[0.9rem] font-light leading-relaxed text-white/40">
            Aşağıdaki yemek kartlarıyla ödeme yapabilirsiniz.
          </p>
        </div>
      </section>

      {/* ── LOGO GRID ─────────────────────────────────────────────── */}
      <section
        className="bg-bg-light px-5 py-14 sm:px-8"
        aria-label="Ödeme ortakları"
      >
        <div className="mx-auto grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
          {PAYMENT_PARTNERS.map((p, i) => (
            <div
              key={p.name}
              className="animate-fade-up flex flex-col items-center justify-center gap-3 rounded-2xl border border-slate-200/70 bg-white px-6 py-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/15 hover:shadow-md sm:px-8 sm:py-10"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <Image
                src={p.logo}
                alt={p.name}
                width={280}
                height={110}
                className={`${p.logoClass} w-auto object-contain`}
              />
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-300">
                {p.name}
              </p>
            </div>
          ))}
        </div>

        {/* Info strip */}
        <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-primary/10 bg-white px-6 py-5">
          <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
            <div className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" aria-hidden="true" />
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-primary/40">
                  Bilgi & Rezervasyon
                </p>
                <a
                  href={`tel:${BUSINESS.phoneTel}`}
                  className="text-[0.92rem] font-semibold text-primary transition-colors hover:text-primary/70"
                >
                  {BUSINESS.phone}
                </a>
              </div>
            </div>
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-[0.78rem] font-semibold uppercase tracking-[0.1em] text-white transition-all hover:bg-primary/85"
            >
              Menüyü Gör
              <ArrowRight className="h-3 w-3" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
