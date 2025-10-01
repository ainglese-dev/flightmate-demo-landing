# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

FlightMate Demo Landing is a static demo landing page for a P2P package delivery marketplace connecting travelers and senders between Peru and Miami. This is a demo/MVP implementation using Next.js with static export for GitHub Pages deployment.

**Repository:** `https://github.com/ainglese-dev/flightmate-demo-landing.git`

## Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + Shadcn/ui
- **Forms:** React Hook Form + Zod validation
- **Storage:** LocalStorage (demo mode, Supabase-ready for future)
- **Email:** EmailJS for contact form
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** GitHub Pages (static export)
- **Analytics:** Google Analytics (gtag)

## Development Commands

```bash
# Initial setup
npx create-next-app@latest flightmate-demo-landing \
  --typescript --tailwind --app --no-src-dir

# Install dependencies
npm install lucide-react framer-motion
npm install react-hook-form @hookform/resolvers zod
npm install @emailjs/browser

# Add Shadcn UI components
npx shadcn-ui@latest init
npx shadcn-ui@latest add button card select calendar badge

# Development
npm run dev          # Start dev server

# Build & Deploy
npm run build        # Build static site (output: 'export')
npm run start        # Preview production build locally

# Deployment
# Push to main → GitHub Actions auto-deploys to GitHub Pages
```

## Configuration Requirements

**next.config.js must include:**
```javascript
output: 'export'
basePath: '/flightmate-demo-landing'
```

This enables static site generation for GitHub Pages deployment.

## Architecture

### Pages Structure
- `/` - Homepage with hero, how it works, trust indicators, popular routes
- `/post-trip` - Form for travelers to post their trip details (saves to localStorage)
- `/trips` - Browse available trips with mock data (10 sample trips)
- `/how-it-works` - Detailed process explanation for travelers and senders
- `/contact` - Contact form integrated with EmailJS

### Component Organization
```
src/
├── app/
│   ├── layout.tsx          # Root layout with navigation and footer
│   ├── page.tsx            # Homepage
│   ├── post-trip/page.tsx  # Post trip form
│   ├── trips/page.tsx      # Browse trips with filters
│   ├── how-it-works/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── ui/                 # Shadcn UI components
│   ├── NavBar.tsx          # Sticky navigation
│   ├── Hero.tsx            # Homepage hero section
│   ├── TripCard.tsx        # Reusable trip display component
│   ├── TrustBadges.tsx     # Trust indicators
│   └── Footer.tsx
└── lib/
    ├── constants.ts        # Routes, prices, cities, features
    └── mock-data.ts        # Demo trips data (10 sample trips)
```

### Static Data Structure

**lib/constants.ts** contains:
- `ROUTES`: Peru cities (Lima, Cusco, Arequipa), USA cities (Miami, Fort Lauderdale, Orlando), and popular routes with pricing
- `FEATURES`: Key benefits for travelers (earn $100-300/trip) and senders (save 50-70% vs courier)

**lib/mock-data.ts** contains:
- 10 mock trips with traveler names, routes, dates, available space, pricing, verification status, and ratings

### Form Handling

- **Post Trip Form:** Uses React Hook Form + Zod for validation
  - Fields: Route (origin/destination), travel date, available space (1-20kg), price/kg, return date (optional), contact info, notes
  - Saves to localStorage in demo mode

- **Contact Form:** Integrates with EmailJS
  - Fields: Name, email, subject, message
  - Includes WhatsApp button link

### Routes and Pricing

- **Popular Routes:**
  - Lima → Miami: Starting $15/kg
  - Miami → Lima: Starting $18/kg
  - Cusco → Miami: Starting $20/kg

### Trust Indicators
- "500+ successful deliveries"
- "Verified travelers only"
- "Secure payments"
- "Full insurance coverage"

## Deployment

The project uses GitHub Actions for automated deployment to GitHub Pages.

**Workflow:** Push to main branch triggers build and deploy.

**Key environment variables:**
- `NEXT_PUBLIC_GA_ID`: Google Analytics ID (set as GitHub secret)

The workflow:
1. Sets up Node.js 20
2. Runs `npm ci`
3. Runs `npm run build` with environment variables
4. Deploys `./out` directory to GitHub Pages using `peaceiris/actions-gh-pages@v3`

## Future Scalability

The codebase is structured to be "Supabase-ready" for future backend integration:
- Replace localStorage with Supabase database
- Add authentication with NextAuth
- Integrate Stripe Connect or MercadoPago for payments
- Add Cloudinary for package photo storage
- Implement user dashboard, rating system, real-time chat, and KYC verification

## Current MVP Status

**Phase 1 (Static):** Homepage, post trip form, mock trips display, mobile responsive
**Phase 2 (Interactive):** EmailJS, form validations, filter/search trips, WhatsApp links
**Phase 3 (Enhanced):** Animations, SEO optimization, analytics, GitHub Pages deployment
