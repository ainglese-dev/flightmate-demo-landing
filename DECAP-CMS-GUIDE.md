# Decap CMS Setup Guide for FlightMate

This guide explains how to use Decap CMS (formerly Netlify CMS) to manage dynamic content for the FlightMate landing page without a database.

## 📋 Table of Contents
- [What is Decap CMS?](#what-is-decap-cms)
- [Content Collections](#content-collections)
- [Accessing the CMS](#accessing-the-cms)
- [GitHub OAuth Setup](#github-oauth-setup)
- [Creating Content](#creating-content)
- [Using CMS Content in Components](#using-cms-content-in-components)
- [Local Development](#local-development)
- [Deployment Workflow](#deployment-workflow)

---

## What is Decap CMS?

Decap CMS is a Git-based headless CMS that:
- Stores content as markdown files in your Git repository
- Provides a user-friendly admin interface at `/admin`
- Requires no database or backend server
- Works perfectly with static site generators like Next.js
- Commits content changes directly to GitHub

---

## Content Collections

Three collections are configured:

### 1. **Popular Products** (`/content/popular-products/`)
Manage products customers can buy via Amazon/Apple links.

**Fields:**
- Product Name
- Description
- Price (USD)
- Category (Electronics, Fashion, Beauty, Food, Other)
- Amazon Link (optional)
- Apple Link (optional)
- Product Image
- Featured (boolean - show on homepage)
- Publish Date

### 2. **Verified Travelers** (`/content/verified-travelers/`)
Showcase trusted travelers on your platform.

**Fields:**
- Traveler Name
- Rating (1-5 stars)
- Profile Photo
- Bio
- Trips Completed
- Routes (list of routes like "Lima → Miami")
- Verification Status
- Join Date

### 3. **Testimonials** (`/content/testimonials/`)
Display customer reviews and feedback.

**Fields:**
- Customer Name
- Testimonial Text
- Rating (1-5 stars)
- Customer Type (Sender or Traveler)
- Route Used (optional)
- Date
- Featured (boolean - show on homepage)

---

## Accessing the CMS

### Option 1: Production Site (Requires GitHub OAuth)
1. Visit: `https://ainglese-dev.github.io/flightmate-demo-landing/admin`
2. Click "Login with GitHub"
3. Authorize the application
4. Start editing content

### Option 2: Local Development (No OAuth Required)
See [Local Development](#local-development) section below.

---

## GitHub OAuth Setup

To use Decap CMS in production, you need to set up GitHub OAuth authentication.

### Step 1: Create a GitHub OAuth App

1. Go to [GitHub Settings > Developer settings > OAuth Apps](https://github.com/settings/developers)
2. Click **"New OAuth App"**
3. Fill in the details:
   - **Application name:** `FlightMate CMS`
   - **Homepage URL:** `https://ainglese-dev.github.io/flightmate-demo-landing`
   - **Authorization callback URL:** `https://api.netlify.com/auth/done`
4. Click **"Register application"**
5. Note your **Client ID** and generate a **Client Secret**

### Step 2: Configure Netlify Identity (Free OAuth Gateway)

Since GitHub Pages doesn't provide server-side authentication, we use Netlify's free OAuth gateway:

1. Create a free account at [Netlify](https://www.netlify.com/)
2. Go to **Site settings > Identity > External providers**
3. Enable **GitHub** as a provider
4. Enter your GitHub OAuth **Client ID** and **Client Secret**
5. Save settings

### Alternative: Self-hosted OAuth (Advanced)

If you prefer not to use Netlify, you can set up your own OAuth server:
- Use [netlify-cms-github-oauth-provider](https://github.com/vencax/netlify-cms-github-oauth-provider)
- Deploy on a free service like Vercel, Railway, or Render
- Update `base_url` in `/public/admin/config.yml`

---

## Creating Content

### Via CMS Admin UI

1. Access `/admin` (production or local)
2. Login with GitHub (or use local backend)
3. Select a collection (e.g., "Popular Products")
4. Click **"New Product"** (or respective collection item)
5. Fill in all required fields
6. Upload images (stored in `/public/images/cms/`)
7. Click **"Save"** → CMS commits to GitHub
8. Changes trigger GitHub Actions rebuild automatically

### Manual Markdown Creation

You can also create content files manually:

**Example: `/content/popular-products/macbook-pro.md`**

```markdown
---
name: "MacBook Pro M3"
description: "Latest MacBook Pro with M3 chip, 16GB RAM, and 512GB SSD."
price: 1999
category: "Electronics"
amazonLink: "https://www.amazon.com/..."
appleLink: "https://www.apple.com/..."
image: "/flightmate-demo-landing/images/cms/macbook-pro.jpg"
featured: true
date: "2025-10-23T12:00:00Z"
---

The MacBook Pro M3 delivers exceptional performance for creative professionals...
```

---

## Using CMS Content in Components

### Import Content Functions

```tsx
import {
  getPopularProducts,
  getVerifiedTravelers,
  getTestimonials,
  getFeaturedProducts,
  getFeaturedTestimonials,
} from "@/lib/cms-content";
```

### Example: Display Products in a Page

```tsx
// app/products/page.tsx
import PopularProductsList from "@/components/cms-examples/PopularProductsList";

export default function ProductsPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-8">Popular Products</h1>
      {/* Shows all products, sorted by featured first */}
      <PopularProductsList />
    </div>
  );
}
```

### Example: Display Featured Testimonials

```tsx
// app/page.tsx (Homepage)
import TestimonialsList from "@/components/cms-examples/TestimonialsList";

export default function HomePage() {
  return (
    <section className="py-16">
      <h2 className="text-2xl font-bold mb-6">What Our Users Say</h2>
      {/* Shows only featured testimonials, limit to 3 */}
      <TestimonialsList featuredOnly={true} limit={3} />
    </section>
  );
}
```

### Example: Custom Query

```tsx
import { getPopularProducts } from "@/lib/cms-content";

export default function ElectronicsPage() {
  // Fetch all products at build time
  const allProducts = getPopularProducts();

  // Filter for electronics only
  const electronics = allProducts.filter(
    (product) => product.content.category === "Electronics"
  );

  return (
    <div>
      {electronics.map((product) => (
        <div key={product.slug}>
          <h3>{product.content.name}</h3>
          <p>${product.content.price}</p>
        </div>
      ))}
    </div>
  );
}
```

---

## Local Development

For local development, use the Decap CMS local backend (no OAuth required):

### Step 1: Enable Local Backend

In `/public/admin/config.yml`, uncomment:

```yaml
local_backend: true
```

### Step 2: Run the Local Backend Server

```bash
# In a separate terminal
npx decap-server
```

This starts a local proxy server on `http://localhost:8081`.

### Step 3: Run Next.js Dev Server

```bash
npm run dev
```

### Step 4: Access Local CMS

Visit `http://localhost:3000/admin` - you can now edit content without GitHub authentication.

**Note:** Remember to comment out `local_backend: true` before deploying to production.

---

## Deployment Workflow

### How Content Updates Work

1. **Edit Content:** Admin makes changes via CMS at `/admin`
2. **Commit to GitHub:** Decap CMS commits changes to the `main` branch
3. **Trigger Build:** GitHub Actions detects the commit
4. **Rebuild Site:** Next.js reads updated markdown files and rebuilds static pages
5. **Deploy:** Updated site is deployed to GitHub Pages automatically

### Manual Build & Deploy

```bash
# Build locally
npm run build

# Preview build
npm run start

# Commit and push (triggers GitHub Actions)
git add .
git commit -m "Update CMS content"
git push origin main
```

---

## File Structure

```
flightmate-demo-landing/
├── content/                         # CMS content storage
│   ├── popular-products/            # Product markdown files
│   ├── verified-travelers/          # Traveler markdown files
│   └── testimonials/                # Testimonial markdown files
├── public/
│   ├── admin/
│   │   ├── index.html              # CMS entry point
│   │   └── config.yml              # CMS configuration
│   └── images/
│       └── cms/                     # Uploaded images from CMS
├── lib/
│   ├── types.ts                     # TypeScript types for CMS content
│   └── cms-content.ts               # Content reading utilities
└── components/
    └── cms-examples/                # Example components
        ├── PopularProductsList.tsx
        ├── VerifiedTravelersList.tsx
        └── TestimonialsList.tsx
```

---

## Troubleshooting

### Issue: Can't access `/admin`
**Solution:** Make sure you've deployed to GitHub Pages and the site is live.

### Issue: "Error loading config.yml"
**Solution:** Check that `/public/admin/config.yml` is properly formatted (valid YAML syntax).

### Issue: OAuth login fails
**Solution:**
- Verify GitHub OAuth app callback URL: `https://api.netlify.com/auth/done`
- Ensure Netlify Identity is properly configured
- Check that the repository name in `config.yml` matches your GitHub repo

### Issue: Images not showing after upload
**Solution:**
- Verify `media_folder` is set to `"public/images/cms"`
- Verify `public_folder` is set to `"/flightmate-demo-landing/images/cms"`
- Rebuild the site after uploading images

### Issue: Content not updating after CMS edit
**Solution:**
- Check GitHub Actions logs for build errors
- Ensure the commit was pushed to the `main` branch
- Clear your browser cache and hard reload

---

## Next Steps

1. **Set up GitHub OAuth** following the steps above
2. **Create your first content entry** via `/admin`
3. **Integrate CMS components** into your existing pages
4. **Customize the collections** in `config.yml` as needed
5. **Add custom preview templates** (advanced - see Decap CMS docs)

---

## Resources

- [Decap CMS Documentation](https://decapcms.org/docs/)
- [Next.js Static Export Docs](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [GitHub OAuth Apps Guide](https://docs.github.com/en/developers/apps/building-oauth-apps)
- [Netlify Identity Setup](https://docs.netlify.com/visitor-access/identity/)

---

**Questions?** Check the [Decap CMS Community](https://github.com/decaporg/decap-cms/discussions) or open an issue in this repository.
