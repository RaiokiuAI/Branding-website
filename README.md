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

## Deploy (GitHub Actions → GitHub Pages)

`.github/workflows/deploy.yml` builds and deploys on every push to `main`.

One-time setup:

1. **GitHub → Settings → Pages → Build and deployment → Source: GitHub Actions.**
2. Push to `main` (or run the workflow manually). `public/CNAME` sets the custom domain to `raiokiuai.com`.
3. **Hostinger → Domains → raiokiuai.com → DNS / Nameservers → Manage DNS records**, keep the Hostinger nameservers (`aurora.dns-parking.com`, `nebula.dns-parking.com`) and set:

   | Type | Name | Value |
   | --- | --- | --- |
   | A | `@` | `185.199.108.153` |
   | A | `@` | `185.199.109.153` |
   | A | `@` | `185.199.110.153` |
   | A | `@` | `185.199.111.153` |
   | CNAME | `www` | `raiokiuai.github.io` |
   | TXT | `@` | `google-site-verification=pD_A6esc7pXNT6zjpIr39VTtAd4gfvhR9Ha9sEccFEc` (optional, DNS verification) |

   Delete any existing parking `A`/`CNAME` records for `@` and `www` first.
4. Once DNS resolves (minutes to a few hours), go back to **Settings → Pages**, confirm the custom domain shows `raiokiuai.com`, and tick **Enforce HTTPS**.
5. In Google Search Console, verify the property and submit `https://raiokiuai.com/sitemap.xml`.

## TODO

- [ ] Confirm `hello@raiokiuai.com` exists, or change `SITE.email` in `lib/site.ts`
- [ ] Swap the mailto early-access form for a real form backend (Formspree, Tally, etc.)
- [ ] Add analytics and a privacy notice before launch

## License

All rights reserved. See [NOTICE](NOTICE).
