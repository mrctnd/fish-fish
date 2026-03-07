# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server at http://localhost:3000
npm run build    # Production build
npm run lint     # ESLint via next lint
npm start        # Start production server (after build)
```

No test framework is configured.

## Architecture

**Next.js 15 App Router** with TypeScript and Tailwind CSS v3. Icons from `lucide-react`. Font: Work Sans via `next/font/google`.

### Content Architecture

**`src/lib/content.ts` is the single source of truth for all website copy.** All text, business info, hours, FAQ items, menu categories, SEO metadata, and JSON-LD schema live here as typed `const` exports. Never hardcode content strings directly in components — import from `content.ts`.

Key exports: `BUSINESS`, `HOURS`, `HERO`, `ABOUT_SHORT`, `ABOUT_LONG`, `HIGHLIGHTS`, `SERVICES`, `MENU_CATEGORIES`, `FAQ_ITEMS`, `NAV_LINKS`, `PAGE_META`, `JSON_LD`.

### Pages (`src/app/`)

| Route | File | Notes |
|---|---|---|
| `/` | `page.tsx` | Hero, Highlights grid, Services, MapEmbed |
| `/about` | `about/page.tsx` | Short + long about sections |
| `/menu` | `menu/page.tsx` | Category cards only (no specific dishes) |
| `/reservations` | `reservations/page.tsx` | ReservationForm + phone CTA |
| `/visit` | `visit/page.tsx` | HoursTable, address, MapEmbed |
| `/faq` | `faq/page.tsx` | FAQAccordion |
| `/contact` | `contact/page.tsx` | ContactForm + MapEmbed |

Each page exports its own `metadata` using `PAGE_META` from `content.ts`.

### Components

- **Client components** (use browser APIs or state): `Navbar`, `MapEmbed`, `FAQAccordion`, `ReservationForm`, `ContactForm`, `ScrollReveal`
- **Server components**: `Footer`, `CTAButton`, `HoursTable`

### Design System

- **Primary color**: `#0a2747` (dark navy) — used for all brand elements
- **Background**: `#f6f7f8` = `bg-bg-light` in Tailwind
- **Font**: `var(--font-work-sans)` — mapped to `font-sans`, `font-display`, `font-body`
- All old color tokens (`navy`, `teal`, `coral`, `sand`) are aliased to `primary` or `bg-light` in `tailwind.config.ts`

### Language

All UI text must be in **Turkish (Türkçe)**. Content strings are in `content.ts`.

## Before Going Live

- Replace all `PLACEHOLDER_DOMAIN` occurrences in `content.ts` and `layout.tsx` with the real domain
- Wire up `ReservationForm.tsx` and `ContactForm.tsx` — both currently do a mock submit (`console.log` only); connect to Formspree, EmailJS, or a Next.js Server Action
- Verify `BUSINESS.mapEmbedUrl` resolves to the correct map location
- Add social URLs to `JSON_LD.sameAs` in `content.ts`
