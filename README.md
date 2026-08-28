# Pakzameen Travels and Tours — Website

Marketing website for **Pakzameen Travels and Tours** (Sargodha, Pakistan), built
with [Astro](https://astro.build/). Fast, static, SEO-friendly and fully responsive.

## Pages

- **Home** (`/`) — hero, services, popular destinations, Umrah packages, why-us, testimonials
- **Umrah** (`/umrah`) — packages, what's included, booking steps, FAQs
- **Hajj** (`/hajj`) — packages and guidance
- **Tours** (`/tours`) — filterable domestic & international tour packages
- **Services** (`/services`) — air ticketing, visa, hotel booking + all services
- **About** (`/about`) — story, values, why choose us
- **Contact** (`/contact`) — contact cards, WhatsApp enquiry form, map

## Getting started

```bash
npm install       # install dependencies
npm run dev       # start dev server at http://localhost:4321
npm run build     # build the static site into dist/
npm run preview   # preview the production build locally
```

## How to update content

All editable content lives in two files — no need to touch page layouts:

| What | File |
| --- | --- |
| Business name, phone, WhatsApp, email, address, hours, social links | `src/data/site.ts` |
| Services, Umrah/Hajj packages, tours, testimonials, FAQs | `src/data/content.ts` |
| Stock image URLs | `src/data/images.ts` |

### Things to replace before launch

Values marked `PLACEHOLDER` in `src/data/site.ts` and `src/data/content.ts`:

- **Email address** — currently `info@pakzameen.com`
- **Package prices & inclusions** — Umrah/Hajj/tour prices are indicative examples
- **Social media links** — add Facebook/Instagram/TikTok/YouTube URLs (empty = hidden)
- **Business hours** — currently "Mon – Sat: 9:00 AM – 8:00 PM"

### The logo

The header/footer logo is an SVG recreation of the brand mark in
`src/components/Logo.astro`. To use the original artwork instead, drop the file
into `public/` (e.g. `public/logo.png`) and replace the `<svg>` in `Logo.astro`
with `<img src="/logo.png" alt="Pakzameen Travels and Tours" />`.

### Images

Stock photos in `src/data/images.ts` are Unsplash CDN links that load in the
visitor's browser. Replace any URL with your own photo, or a local file placed in
`public/`. If an image ever fails to load, it falls back to a branded gradient —
never a broken image box.

### The domain

Set your real domain in `astro.config.mjs` (the `site` field) and in
`public/robots.txt`. This powers canonical URLs, Open Graph tags and the sitemap.

## Contact form

The enquiry form on the Contact page composes a pre-filled WhatsApp message and
opens WhatsApp — no server or backend required. The WhatsApp number comes from
`src/data/site.ts`.

## Deploying

The site builds to static files in `dist/` and can be hosted free on Netlify,
Vercel, Cloudflare Pages or GitHub Pages. Point the host at this repo, set the
build command to `npm run build` and the publish directory to `dist`.
