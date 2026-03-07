# Fish&Fish — Restaurant Website

Production-ready Next.js 14+ website for **Fish&Fish**, a halal seafood restaurant in Çankaya, Ankara.

---

## Tech Stack

| Layer        | Choice                                 |
|--------------|----------------------------------------|
| Framework    | Next.js 14.2 (App Router)              |
| Language     | TypeScript                             |
| Styling      | Tailwind CSS v3                        |
| Icons        | lucide-react                           |
| Fonts        | Google Fonts via `next/font/google`    |
| Deploy       | Vercel (zero-config)                   |

---

## Project Structure

```
fish-fish-web/
├── src/
│   ├── app/                     # Next.js App Router pages
│   │   ├── layout.tsx           # Root layout (Navbar, Footer, fonts, metadata)
│   │   ├── globals.css          # Tailwind base + CSS variables
│   │   ├── page.tsx             # Home page (Hero, Highlights, Services, Map)
│   │   ├── about/page.tsx       # About page
│   │   ├── menu/page.tsx        # Menu categories page
│   │   ├── reservations/page.tsx# Reservation form page
│   │   ├── visit/page.tsx       # Location, hours, parking page
│   │   ├── faq/page.tsx         # FAQ accordion page
│   │   └── contact/page.tsx     # Contact form + map page
│   ├── components/
│   │   ├── Navbar.tsx           # Sticky nav + mobile hamburger (client)
│   │   ├── Footer.tsx           # Multi-column footer (server)
│   │   ├── CTAButton.tsx        # Reusable CTA button with variants (server)
│   │   ├── HoursTable.tsx       # Opening hours table (server)
│   │   ├── MapEmbed.tsx         # Consent-aware Google Maps iframe (client)
│   │   ├── FAQAccordion.tsx     # Accessible accordion (client)
│   │   ├── ReservationForm.tsx  # Reservation form + validation (client)
│   │   └── ContactForm.tsx      # Contact form + validation (client)
│   └── lib/
│       └── content.ts           # ← ALL website copy lives here
├── tailwind.config.ts           # Brand color palette + font families
├── next.config.ts
├── tsconfig.json
└── postcss.config.js
```

---

## Where Content Comes From

All website copy, business data, hours, FAQ, menu categories, meta titles, and JSON-LD schema are defined in a **single file**:

```
src/lib/content.ts
```

This file is the typed source of truth derived from `website-content.md`. To update any text on the website — address, phone number, hours, FAQ answers — edit `content.ts` only.

---

## Setup & Running Locally

**Prerequisites:** Node.js 18+ and npm (or yarn/pnpm)

```bash
# 1. Navigate to the project directory
cd fish-fish-web

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

```bash
# Production build
npm run build

# Start production server
npm start

# Lint
npm run lint
```

---

## Deploy to Vercel

```bash
# Option A — Vercel CLI
npm i -g vercel
vercel

# Option B — GitHub import
# Push this directory to a GitHub repo, then import at vercel.com
```

No special `vercel.json` required.

---

## Before Going Live — Checklist

### 1. Domain
- [ ] Replace every instance of `PLACEHOLDER_DOMAIN` in `src/lib/content.ts` with your actual domain (e.g. `www.fishandfishankara.com`)
- [ ] Update `metadataBase` in `src/app/layout.tsx`

### 2. Map Coordinates
- [ ] Verify the Google Maps embed URL in `content.ts` → `BUSINESS.mapEmbedUrl` resolves to the correct location
- [ ] If needed, get the precise embed URL from Google Maps → Share → Embed a map → copy the `src` value

### 3. Photos / Images
- [ ] Add real restaurant photos to `/public/images/`
- [ ] Update the Hero section in `src/app/page.tsx` to use `next/image` with actual photos instead of the gradient background
- [ ] Follow photo style guide in `website-content.md` Section 5

### 4. Form Endpoints
- [ ] Both `ReservationForm.tsx` and `ContactForm.tsx` currently do a **mock submit** (console.log only)
- [ ] Wire them up to a real backend using one of:
  - [Formspree](https://formspree.io) — easiest, no backend needed
  - [EmailJS](https://www.emailjs.com) — client-side email sending
  - Next.js [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations) — full control, email via Nodemailer / Resend

  Example with Formspree: replace the `console.log` in `handleSubmit` with:
  ```ts
  await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form),
  })
  ```

### 5. Analytics (optional)
- [ ] Add [Vercel Analytics](https://vercel.com/analytics) or Google Analytics
- [ ] If using Google Analytics, add a KVKK/cookie consent banner (required by Turkish law)

### 6. Social Media
- [ ] Add social profile URLs to the `sameAs` array in `JSON_LD` inside `content.ts`
- [ ] Add social links to the Footer component if applicable

### 7. SEO Final Checks
- [ ] Verify JSON-LD with [Google's Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Submit sitemap to Google Search Console (Next.js auto-generates `/sitemap.xml` if you add a `sitemap.ts` file)
- [ ] Test all pages with Lighthouse (target: Performance ≥ 90, Accessibility 100 on mobile)

---

## Accessibility Notes

- Skip-to-content link at top of every page (`Tab` on keyboard to reveal)
- All form fields have proper `<label>` associations
- Form errors announced with `role="alert"` and `aria-live`
- Navigation announces current page with `aria-current="page"`
- Map embed includes descriptive `title` attribute
- All icons are `aria-hidden="true"` with text alternatives where needed
- Color contrast ratios meet WCAG 2.1 AA (navy on white: 8.5:1, coral CTA on white: 3.1:1 for large text)

---

## Color Palette Reference

| Token    | Hex       | Usage                    |
|----------|-----------|--------------------------|
| navy     | `#1A2E44` | Primary, backgrounds     |
| teal     | `#2D7D8A` | Accent, icons, focus     |
| sand     | `#F5ECD7` | Warm section backgrounds |
| offwhite | `#FAFAF7` | Main page background     |
| charcoal | `#2C2C2C` | Body text                |
| coral    | `#E8603C` | CTAs, highlights         |

---

*Website content sourced from: `../website-content.md` (Fish&Fish Website Content Package v1.0, 2026-03-07)*
