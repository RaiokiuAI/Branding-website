# RaiokiuAI — Branding website

Marketing site for **RaiokiuAI**: conversational AI agents that talk, and visual workflows that act, on messaging, web, app and voice.

Built with **Next.js (App Router)** and exported as a fully static site (`output: 'export'`), deployed to **GitHub Pages** at <https://raiokiuai.com>.

## Pages

| Route | File |
| --- | --- |
| `/` | `app/page.tsx` |
| `/agents/` | `app/agents/page.tsx` |
| `/flows/` | `app/flows/page.tsx` |
| `/channels/` | `app/channels/page.tsx` |
| `/use-cases/` | `app/use-cases/page.tsx` |
| `/security/` | `app/security/page.tsx` |
| `/about/` | `app/about/page.tsx` |
| `/contact/` | `app/contact/page.tsx` (early-access form) |
| `/brand/` | `app/brand/page.tsx` (brand guidelines; not linked, `noindex`) |
| 404 | `app/not-found.tsx` |

Site-wide settings (domain, email, Google verification, nav, sitemap routes) live in `lib/site.ts`.

## Brand & theme

- `logo.png` (repo root) is the source logo. Everything in `public/` (`logo*.png`, favicons, app icons, `og-image.png`) is generated from it. `logo-dark.png` is the same logo with a light wordmark for dark backgrounds.
- The site is dark by default with a light theme toggle (`components/ThemeToggle.tsx`). Colour tokens for both themes are at the top of `app/globals.css`.
- Motion: headline word reveals (`components/SplitWords.tsx`), scroll-lit statement (`components/ScrollWords.tsx`), and pointer effects plus the scroll progress bar (`components/Interactions.tsx`). All respect `prefers-reduced-motion`.

## SEO

- Per-page `<title>`, description, keywords, canonical URL and `hreflang` (`pageMeta()` in `lib/site.ts`)
- Open Graph + Twitter large-image cards using `public/og-image.png` (1200×630)
- JSON-LD: Organization, WebSite, WebPage, BreadcrumbList on every page; SoftwareApplication on the home page; ItemList on use cases
- `sitemap.xml` (`app/sitemap.ts`) and `robots.txt` (`app/robots.ts`) generated at build
- Google Search Console verification meta tag
- Favicons, Apple touch icon and web manifest in `public/`

When you add a page, also add it to `ROUTES` in `lib/site.ts` so it lands in the sitemap.

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static output in ./out
npx serve out      # preview the production build
```

## License

All rights reserved. See [NOTICE](NOTICE).
