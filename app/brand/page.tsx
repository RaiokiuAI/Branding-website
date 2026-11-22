import CopyValue from '@/components/CopyValue';
import { JsonLd, PageHero, SectionHead } from '@/components/ui';
import { SITE, pageJsonLd, pageMeta } from '@/lib/site';

const path = '/brand/';
const title = 'RaiokiuAI brand guidelines: logo, colours and type';
const description = 'The RaiokiuAI logo, colour palette, typography and naming rules, with logo files to download.';

// Internal page: not linked from the site and kept out of search results.
export const metadata = { ...pageMeta({ path, title, description, keywords: ['RaiokiuAI', 'RaiokiuAI logo', 'RaiokiuAI brand'] }), robots: { index: false, follow: false } };

const colors = [
  { name: 'Ink', role: 'Wordmark, headings, body text', hex: '#00052B', rgb: '0 5 43', dark: true },
  { name: 'Indigo', role: 'Primary brand colour, buttons, links, “AI”', hex: '#4B25FB', rgb: '75 37 251', dark: true },
  { name: 'Navy', role: 'Mark: source node, deep accents', hex: '#1E1A8E', rgb: '30 26 142', dark: true },
  { name: 'Violet', role: 'Mark: output node, highlights', hex: '#7953F2', rgb: '121 83 242', dark: true },
  { name: 'Mist', role: 'Divider in the lockup, borders', hex: '#C0C2C9', rgb: '192 194 201', dark: false },
  { name: 'Haze', role: 'Section and panel backgrounds', hex: '#F6F5FC', rgb: '246 245 252', dark: false },
  { name: 'White', role: 'Light theme background, logo background', hex: '#FFFFFF', rgb: '255 255 255', dark: false },
  { name: 'Ground', role: 'Dark theme background', hex: '#0A0B0D', rgb: '10 11 13', dark: true },
];

const downloads = [
  { file: '/logo.png', name: 'Logo, white background', meta: 'PNG · 1501 × 321' },
  { file: '/logo-transparent.png', name: 'Logo, transparent', meta: 'PNG · 1501 × 321' },
  { file: '/logo-dark.png', name: 'Logo for dark backgrounds, transparent', meta: 'PNG · 1501 × 321' },
  { file: '/logo-mark.png', name: 'Mark only, transparent', meta: 'PNG · 512 × 512' },
  { file: '/icon-512.png', name: 'App icon', meta: 'PNG · 512 × 512' },
  { file: '/favicon.ico', name: 'Favicon', meta: 'ICO · 16–64 px' },
];

const donts = [
  'Recolour the logo or any part of it',
  'Stretch, squash, rotate or add effects',
  'Rearrange the mark and the wordmark',
  'Put the standard logo on a dark background (use the dark version)',
  'Place it on busy or low-contrast backgrounds',
  'Redraw the wordmark in another font',
  'Write the name as “raiokiuai”, “Raiokiu AI” or “RAIOKIUAI”',
];

export default function BrandPage() {
  return (
    <>
      <JsonLd data={pageJsonLd({ path, name: 'Brand', title, description })} />
      <PageHero
        crumb="Brand"
        title="The RaiokiuAI"
        accent="brand."
        lede="Our logo, colours and type, and how to use them. Download the files at the bottom of the page."
      />

      <section className="section tight" aria-labelledby="logo-title">
        <div className="wrap">
          <SectionHead eyebrow="01 · Logo" id="logo-title" title="One logo. Use it as it is.">
            <p>The mark shows one conversation branching into actions. Use the standard logo on light backgrounds and the light-wordmark version on dark ones.</p>
          </SectionHead>
          <div className="brand-logo reveal d1">
            <figure className="brand-stage brand-stage-main">
              <img src="/logo.png" alt="RaiokiuAI logo" width={1501} height={321} />
              <figcaption>Primary lockup</figcaption>
            </figure>
            <figure className="brand-stage">
              <img src="/logo-mark.png" alt="RaiokiuAI mark" width={160} height={160} className="brand-mark" />
              <figcaption>Mark</figcaption>
            </figure>
            <figure className="brand-stage brand-stage-dark">
              <img src="/logo-dark.png" alt="RaiokiuAI logo for dark backgrounds" width={1501} height={321} />
              <figcaption>On dark backgrounds</figcaption>
            </figure>
            <figure className="brand-stage brand-stage-tint">
              <img src="/icon-512.png" alt="RaiokiuAI app icon" width={120} height={120} className="brand-icon" />
              <figcaption>App icon &amp; favicon</figcaption>
            </figure>
          </div>

          <div className="grid g2" style={{ marginTop: 16 }}>
            <article className="card reveal">
              <span className="k">Clear space</span>
              <h3>Give it room</h3>
              <p>Keep empty space around the logo at least the height of one node square in the mark. Nothing else goes inside that space.</p>
              <div className="clearspace" aria-hidden="true"><img src="/logo.png" alt="" width={1501} height={321} /></div>
            </article>
            <article className="card reveal d1">
              <span className="k">Minimum size</span>
              <h3>Keep it legible</h3>
              <p>Show the full lockup at least 120&nbsp;px wide on screen or 30&nbsp;mm wide in print. Below that, use the mark on its own, at 16&nbsp;px or larger.</p>
              <div className="minsize" aria-hidden="true">
                <img src="/logo.png" alt="" width={120} height={26} />
                <img src="/logo-mark.png" alt="" width={24} height={24} />
                <img src="/logo-mark.png" alt="" width={16} height={16} />
              </div>
            </article>
          </div>

          <div className="card dont-card reveal" style={{ marginTop: 16 }}>
            <span className="k">Please don&apos;t</span>
            <ul className="donts">
              {donts.map((d) => <li key={d}>{d}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="color-title" style={{ paddingTop: 40 }}>
        <div className="wrap">
          <SectionHead eyebrow="02 · Colour" id="color-title" title="Colours taken from the logo.">
            <p>Indigo is the primary colour. Use Ink for text, and keep Navy and Violet for small accents.</p>
          </SectionHead>
          <div className="swatches reveal d1">
            {colors.map((c) => (
              <div className="swatch" key={c.hex}>
                <div className={`swatch-chip${c.dark ? ' on-dark' : ''}`} style={{ background: c.hex }}><span>{c.name}</span></div>
                <div className="swatch-body">
                  <CopyValue value={c.hex} label={`${c.name} hex`} />
                  <span className="mono swatch-rgb">RGB {c.rgb}</span>
                  <p>{c.role}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="ratio reveal" aria-label="Approximate colour proportions">
            <span style={{ flex: 62, background: '#FFFFFF' }}>White</span>
            <span style={{ flex: 18, background: '#00052B', color: '#fff' }}>Ink</span>
            <span style={{ flex: 12, background: '#4B25FB', color: '#fff' }}>Indigo</span>
            <span style={{ flex: 4, background: '#1E1A8E' }} />
            <span style={{ flex: 4, background: '#7953F2' }} />
          </div>
          <p className="ratio-note reveal">Use mostly white, then Ink, with Indigo as the accent.</p>
        </div>
      </section>

      <section className="section" aria-labelledby="type-title" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <SectionHead eyebrow="03 · Typography" id="type-title" title="Three typefaces." />
          <div className="type-specs reveal d1">
            <article className="card type-spec">
              <span className="k">Display · Headings</span>
              <div className="type-sample display">Agents that talk.</div>
              <p>Bricolage Grotesque, SemiBold 600, tight tracking (−3%).</p>
            </article>
            <article className="card type-spec">
              <span className="k">Body · UI</span>
              <div className="type-sample sans">Workflows that act, on every channel your customers use.</div>
              <p>Hanken Grotesk, Regular 400 and SemiBold 600, 1.6 line height.</p>
            </article>
            <article className="card type-spec">
              <span className="k">Mono · Labels &amp; code</span>
              <div className="type-sample mono">trigger → api → reply</div>
              <p>JetBrains Mono, Medium 500, uppercase with wide tracking for labels.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="name-title" style={{ paddingTop: 0 }}>
        <div className="wrap split">
          <SectionHead eyebrow="04 · Name & voice" id="name-title" title="How we write it." />
          <div className="grid g2">
            <article className="card reveal">
              <span className="k">Name</span>
              <h3 className="brand-name">Raiokiu<span>AI</span></h3>
              <p>One word, with a capital R and a capital AI. In code, URLs and handles, use lowercase: <span className="mono">raiokiuai</span>.</p>
            </article>
            <article className="card reveal d1">
              <span className="k">Tagline</span>
              <h3>{SITE.tagline}</h3>
              <p>Use it as written, on two lines when there is room.</p>
            </article>
            <article className="card reveal">
              <span className="k">Voice</span>
              <h3>Clear and plain</h3>
              <p>Say what the product does in plain words. Short sentences, no hype, no jargon.</p>
            </article>
            <article className="card reveal d1">
              <span className="k">Proof</span>
              <h3>Outcomes over features</h3>
              <p>Talk about the job done for the customer, not model names.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="dl-title" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <SectionHead eyebrow="05 · Downloads" id="dl-title" title="Logo files." />
          <ul className="downloads reveal d1">
            {downloads.map((d) => (
              <li key={d.file}>
                <a href={d.file} download>
                  <span className="dl-name">{d.name}</span>
                  <span className="mono dl-meta">{d.meta}</span>
                  <span className="dl-go" aria-hidden="true">↓</span>
                </a>
              </li>
            ))}
          </ul>
          <p className="ratio-note">For anything else, email <a className="inline-link" href={`mailto:${SITE.email}`}>{SITE.email}</a>.</p>
        </div>
      </section>
    </>
  );
}
