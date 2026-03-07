import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Phone, Clock, ArrowRight } from 'lucide-react'
import { MapEmbed } from '@/components/MapEmbed'
import { BUSINESS, PAGE_META, JSON_LD } from '@/lib/content'

export const metadata: Metadata = {
  title: PAGE_META.home.title,
  description: PAGE_META.home.description,
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />

      {/* ── HERO ───────────────────────────────────────────────────── */}
      <section
        className="relative flex min-h-[100svh] items-center overflow-hidden bg-primary"
        aria-label="Ana bölüm"
      >
        {/* ── Desktop: 3 photos side by side ── */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 hidden md:flex"
        >
          <div className="relative flex-1 overflow-hidden">
            <Image
              src="/ic-mekan-3.webp"
              alt=""
              fill
              className="object-cover object-center brightness-[0.45]"
              priority
            />
          </div>
          <div className="relative flex-1 overflow-hidden">
            <Image
              src="/menu-foto-1.webp"
              alt=""
              fill
              className="object-cover object-center brightness-[0.45]"
              priority
            />
          </div>
          <div className="relative flex-1 overflow-hidden">
            <Image
              src="/dis-mekan.webp"
              alt=""
              fill
              className="object-cover object-center brightness-[0.45]"
              priority
            />
          </div>
          {/* Unified dark overlay */}
          <div className="absolute inset-0 bg-primary/82" />
        </div>

        {/* ── Mobile: photo as background ── */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 md:hidden"
        >
          <Image
            src="/menu-foto-2-musteri-teslim.webp"
            alt=""
            fill
            className="object-cover object-center brightness-[0.25]"
            priority
          />
          <div className="absolute inset-0 bg-primary/96" />
        </div>

        {/* Dot grid */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[1]"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(255,255,255,0.045) 1px, transparent 1px)',
            backgroundSize: '38px 38px',
          }}
        />

        {/* Warm accent glow — left zone */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-1/2 z-[1] h-[45vh] w-[50vw] -translate-x-1/2"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(77,184,232,0.08) 0%, transparent 68%)',
          }}
        />

        {/* ── Content ── */}
        <div className="relative z-10 flex w-full flex-col items-center px-6 py-24 text-center md:mx-auto md:max-w-2xl md:py-0">
          {/* Logo */}
          <div className="mb-10 animate-fade-up">
            <Image
              src="/logo.png"
              alt="Fish&Fish logosu"
              width={100}
              height={100}
              className="rounded-2xl object-contain drop-shadow-lg"
              priority
            />
          </div>

          {/* Eyebrow */}
          <p className="mb-5 animate-fade-up-d1 text-[10px] font-semibold uppercase tracking-[0.22em] text-accent">
            Çankaya &middot; Ankara
          </p>

          {/* Heading */}
          <h1
            className="animate-fade-up-d1 font-display text-[3.1rem] font-light leading-[1.12] tracking-tight text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.8)] sm:text-[3.75rem] md:text-[4.5rem]"
          >
            Denizin Tazeligiyle,{' '}
            <span className="text-white/80">Çankaya&apos;nın Kalbinde.</span>
          </h1>

          {/* Thin accent rule */}
          <div
            className="my-8 h-px w-10 animate-fade-up-d2 bg-accent/35"
            aria-hidden="true"
          />

          {/* Subtext */}
          <p className="animate-fade-up-d2 max-w-[30ch] text-[0.9rem] font-light leading-relaxed text-white/90 sm:max-w-sm">
            Taze helal deniz ürünleri &mdash; sade, samimi, özenli.
          </p>

          {/* CTAs */}
          <div className="animate-fade-up-d3 mt-10 flex flex-col items-center gap-3 sm:flex-row">
            <Link
              href="/menu"
              className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-[0.82rem] font-bold uppercase tracking-[0.14em] text-primary shadow-lg shadow-black/20 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/25"
            >
              Menüyü Gör
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
            <a
              href={`tel:${BUSINESS.phoneTel}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/18 px-7 py-4 text-[0.82rem] font-semibold uppercase tracking-[0.14em] text-white/70 transition-all duration-200 hover:border-white/35 hover:text-white"
            >
              <Phone className="h-3.5 w-3.5" aria-hidden="true" />
              Rezervasyon
            </a>
          </div>

        </div>

        {/* Scroll cue */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-up-d4 md:left-[28%]"
          aria-hidden="true"
        >
          <div
            className="mx-auto h-9 w-px"
            style={{
              background:
                'linear-gradient(to bottom, transparent, rgba(255,255,255,0.16), transparent)',
            }}
          />
        </div>
      </section>

      {/* ── HAKKIMIZDA ─────────────────────────────────────────────── */}
      <section className="bg-white px-6 py-20 md:py-28" aria-label="Hakkımızda">
        <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-2 md:gap-20">
          {/* Text */}
          <div className="order-2 text-center md:order-1 md:text-left">
            <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary/28">
              Hakkımızda
            </p>
            <p className="font-display text-[1.1rem] font-light leading-[1.85] text-slate-500 md:text-[1.2rem]">
              Fish&amp;Fish, Çankaya, Ankara&apos;da bulunan samimi bir deniz ürünleri restoranıdır —
              kaliteli malzemelerin ve rahat atmosferin bir araya geldiği huzurlu bir mekan.
              Yalnız öğle yemeğine, aile yemeğine veya arkadaşlarla bir arada olmaya gelseniz de,
              özenli masa servisi ve dürüst fiyatlara sahip bir menü bulacaksınız.
            </p>
            <Link
              href="/menu"
              className="mt-8 inline-flex items-center gap-2 text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-primary/50 transition-colors hover:text-primary"
            >
              Menüye Göz At
              <ArrowRight className="h-3 w-3" aria-hidden="true" />
            </Link>
          </div>

          {/* Photo */}
          <div className="relative order-1 aspect-[4/5] overflow-hidden rounded-2xl md:order-2">
            <Image
              src="/musteriler.webp"
              alt="Fish&Fish restoranında mutlu müşteriler"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Subtle bottom fade */}
            <div
              className="pointer-events-none absolute bottom-0 left-0 right-0 h-24"
              style={{
                background: 'linear-gradient(to top, rgba(255,255,255,0.5), transparent)',
              }}
            />
          </div>
        </div>
      </section>

      {/* ── ATMOSFER GALERİSİ ──────────────────────────────────────── */}
      <section aria-label="Mekan atmosferi" className="overflow-hidden bg-bg-light">
        <div className="grid grid-cols-3">
          <div className="relative aspect-[2/3] overflow-hidden">
            <Image
              src="/foto-3.webp"
              alt="Fish&Fish tabakları"
              fill
              className="object-cover object-center transition-transform duration-700 hover:scale-[1.04]"
              sizes="33vw"
            />
          </div>
          <div className="relative aspect-[2/3] overflow-hidden">
            <Image
              src="/ic-mekan-3.webp"
              alt="Fish&Fish iç mekan"
              fill
              className="object-cover object-center transition-transform duration-700 hover:scale-[1.04]"
              sizes="33vw"
            />
          </div>
          <div className="relative aspect-[2/3] overflow-hidden">
            <Image
              src="/dis-mekan-menu-1.webp"
              alt="Fish&Fish dış mekan yemek"
              fill
              className="object-cover object-center transition-transform duration-700 hover:scale-[1.04]"
              sizes="33vw"
            />
          </div>
        </div>
      </section>

      {/* ── BİLGİ ─────────────────────────────────────────────────── */}
      <section
        className="border-y border-primary/8 bg-bg-light px-6 py-16"
        aria-label="Bilgi"
      >
        <div className="mx-auto grid max-w-3xl gap-10 sm:grid-cols-3 sm:gap-6">

          <div className="flex flex-col items-center gap-4 text-center">
            <Clock className="h-[17px] w-[17px] text-primary/32" aria-hidden="true" />
            <div>
              <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-primary/32">
                Çalışma Saatleri
              </p>
              <p className="text-[0.87rem] leading-relaxed text-slate-500">
                Pzt – Cmt&ensp;11:30 – 21:00
                <br />
                Pazar&emsp;&emsp;&ensp;13:00 – 21:00
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 text-center">
            <MapPin className="h-[17px] w-[17px] text-primary/32" aria-hidden="true" />
            <div>
              <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-primary/32">
                Adres
              </p>
              <address className="not-italic text-[0.87rem] leading-relaxed text-slate-500">
                {BUSINESS.address.street},<br />
                {BUSINESS.address.city}
              </address>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 text-center">
            <Phone className="h-[17px] w-[17px] text-primary/32" aria-hidden="true" />
            <div>
              <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-primary/32">
                Telefon
              </p>
              <a
                href={`tel:${BUSINESS.phoneTel}`}
                className="text-[0.87rem] text-slate-500 transition-colors hover:text-primary"
              >
                {BUSINESS.phone}
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* ── HARİTA ────────────────────────────────────────────────── */}
      <section className="bg-white px-6 pb-16 pt-12" aria-label="Konum">
        <div className="mx-auto max-w-4xl">
          <p className="mb-6 text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-primary/28">
            Konum
          </p>
          <MapEmbed height="300px" />
          <div className="mt-4 text-center">
            <a
              href={BUSINESS.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[0.78rem] text-primary/38 underline underline-offset-4 transition-colors hover:text-primary/65"
            >
              Google Haritalar&apos;da aç
              <ArrowRight className="h-3 w-3" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

    </>
  )
}
