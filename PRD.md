# PRD: FlightMate Demo Landing

## Project Overview
**Repository:** `https://github.com/ainglese-dev/flightmate-demo-landing.git`  
**Type:** Static demo landing with form capture capabilities  
**Purpose:** P2P package delivery marketplace between travelers (Peru ↔ Miami focus)

## Tech Stack

```yaml
CORE:
  framework: Next.js 14+ (App Router)
  language: TypeScript
  styling: Tailwind CSS + Shadcn/ui
  deployment: GitHub Pages (static export)
  
FORMS & DATA:
  forms: React Hook Form + Zod
  storage: LocalStorage (demo) → Supabase ready
  email: EmailJS (contact form)
  
ENHANCEMENTS:
  animations: Framer Motion
  icons: Lucide React
  images: Next/Image with optimization
  analytics: Google Analytics (gtag)
```

## Core Pages & Content

### 1. Homepage (`/`)
```typescript
// Hero Section
- Headline: "Send Packages with Trusted Travelers"
- Subheading: "Peru ↔ Miami from $15/kg"
- CTA: "Post Your Trip" | "Send a Package"
- Hero Image: Airplane + package visual

// How It Works (3 steps)
1. "Travelers post their flight details"
2. "Senders book available space"  
3. "Meet, deliver, and earn/save"

// Trust Indicators
- "500+ successful deliveries"
- "Verified travelers only"
- "Secure payments"
- "Full insurance coverage"

// Popular Routes
- Lima → Miami: "Starting $15/kg"
- Miami → Lima: "Starting $18/kg"
- Cusco → Miami: "Starting $20/kg"
```

### 2. Post Trip (`/post-trip`)
```typescript
// Form Fields
- Route: Origin → Destination (select)
- Travel Date: Calendar picker
- Available Space: kg (1-20)
- Price per kg: USD
- Return Date: Optional
- Contact: WhatsApp/Email
- Notes: Free text

// Static validation, localStorage save
```

### 3. Find Trips (`/trips`)
```typescript
// Filter Bar
- From: [Lima/Cusco/Arequipa/Miami]
- To: [Miami/Lima/Cusco/Arequipa]
- Date Range: Next 30 days
- Max Price: Slider

// Mock Data (10 trips)
const mockTrips = [
  {
    id: 1,
    traveler: "Maria S.",
    route: "Lima → Miami",
    date: "Nov 15, 2024",
    space: "8kg available",
    price: "$15/kg",
    verified: true,
    rating: 4.8
  },
  // ... more trips
]
```

### 4. How It Works (`/how-it-works`)
```typescript
// Detailed process
- For Travelers (earn money)
- For Senders (save money)
- Safety & Insurance
- Prohibited Items
- FAQ section
```

### 5. Contact (`/contact`)
```typescript
// Simple contact form → EmailJS
- Name, Email, Subject, Message
- WhatsApp button: +1 xxx-xxx-xxxx
```

## Component Structure

```typescript
src/
├── app/
│   ├── layout.tsx          // Root layout with nav/footer
│   ├── page.tsx            // Homepage
│   ├── post-trip/page.tsx  
│   ├── trips/page.tsx      
│   ├── how-it-works/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── ui/                // Shadcn components
│   ├── NavBar.tsx         // Sticky navigation
│   ├── Hero.tsx           
│   ├── TripCard.tsx       // Reusable trip display
│   ├── TrustBadges.tsx    
│   └── Footer.tsx         
└── lib/
    ├── constants.ts       // Routes, prices, cities
    └── mock-data.ts       // Demo trips data
```

## Static Data Structure

```typescript
// lib/constants.ts
export const ROUTES = {
  peru_cities: ["Lima", "Cusco", "Arequipa"],
  usa_cities: ["Miami", "Fort Lauderdale", "Orlando"],
  popular: [
    { from: "Lima", to: "Miami", price: 15 },
    { from: "Miami", to: "Lima", price: 18 }
  ]
}

export const FEATURES = {
  travelers: [
    "Earn $100-300 per trip",
    "Verified sender identity",
    "Flexible pickup locations"
  ],
  senders: [
    "Save 50-70% vs courier",
    "Track your package",
    "Direct communication"
  ]
}
```

## GitHub Actions Workflow

```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: '20'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build static site
        run: npm run build
        env:
          NEXT_PUBLIC_GA_ID: ${{ secrets.GA_ID }}
          
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

## Implementation Commands

```bash
# Initial setup
npx create-next-app@latest flightmate-demo-landing \
  --typescript --tailwind --app --no-src-dir

cd flightmate-demo-landing

# Add dependencies
npm install lucide-react framer-motion
npm install react-hook-form @hookform/resolvers zod
npm install @emailjs/browser

# Shadcn UI
npx shadcn-ui@latest init
npx shadcn-ui@latest add button card select calendar badge

# Configure for static export
# next.config.js:
# output: 'export'
# basePath: '/flightmate-demo-landing'

# Git setup
git init
git remote add origin https://github.com/ainglese-dev/flightmate-demo-landing.git
git add .
git commit -m "Initial FlightMate demo setup"
git push -u origin main
```

## MVP Priorities

1. **Phase 1 (Static)** - Week 1
   - [ ] Homepage with hero
   - [ ] Post trip form (localStorage)
   - [ ] Mock trips display
   - [ ] Mobile responsive

2. **Phase 2 (Interactive)** - Week 2
   - [ ] EmailJS integration
   - [ ] Form validations
   - [ ] Filter/search trips
   - [ ] WhatsApp links

3. **Phase 3 (Enhanced)** - Week 3
   - [ ] Animations
   - [ ] SEO optimization
   - [ ] Analytics
   - [ ] Deploy to GitHub Pages

## Future Scale (Post-MVP)

```yaml
BACKEND_READY:
  database: Supabase (users, trips, messages)
  payments: Stripe Connect or MercadoPago
  auth: NextAuth with providers
  storage: Cloudinary (package photos)
  
FEATURES:
  - User dashboard
  - Rating system  
  - Real-time chat
  - Email notifications
  - KYC verification
```
