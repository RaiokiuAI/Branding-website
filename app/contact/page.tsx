import AccessForm from '@/components/AccessForm';
import { JsonLd, PageHero, SectionHead } from '@/components/ui';
import { SITE, pageJsonLd, pageMeta } from '@/lib/site';

const path = '/contact/';
const title = 'Get early access to RaiokiuAI';
const description = "Request early access to RaiokiuAI. Tell us the customer journey you want to automate on WhatsApp, web, app or voice, and we'll get in touch.";

export const metadata = pageMeta({
  path, title, description,
  ogTitle: 'Get early access to RaiokiuAI',
  keywords: ['RaiokiuAI early access', 'AI agent demo', 'contact RaiokiuAI', 'WhatsApp AI agent pricing'],
});

export default function ContactPage() {
  return (
    <>
      <JsonLd data={pageJsonLd({ path, name: 'Early access', title, description, type: 'ContactPage' })} />
      <PageHero
        crumb="Early access"
        title="Bring us your"
        accent="last mile."
        lede="We're opening early access to a small group of teams. Tell us the journey you want to automate and we'll get back to you."
      />

      <section className="section" aria-labelledby="form-title" style={{ paddingTop: 40 }}>
        <div className="wrap split">
          <SectionHead eyebrow="Request access" id="form-title" title="Tell us what you're building." style={{ fontSize: 'clamp(32px,3.6vw,48px)' }}>
            <p>Prefer email? Write to <a className="link-arrow" href={`mailto:${SITE.email}`}>{SITE.email}</a></p>
            <p>Or follow us on <a className="link-arrow" href={SITE.social.linkedin} target="_blank" rel="noopener me">LinkedIn</a> and <a className="link-arrow" href={SITE.social.x} target="_blank" rel="noopener me">X</a></p>
          </SectionHead>
          <div className="card reveal d1" style={{ padding: 'clamp(24px,4vw,40px)' }}>
            <AccessForm />
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="next-title" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <SectionHead eyebrow="What happens next" id="next-title" title="From first call to first live journey." />
          <div className="steps">
            <article className="step reveal"><div className="num">01 · TALK</div><h3>Scope the journey</h3><p>A short call to understand the customer journey, the channel and the systems it touches.</p></article>
            <article className="step reveal d1"><div className="num">02 · BUILD</div><h3>Wire the flows</h3><p>We connect your APIs and data as flows and set up the agent with you.</p></article>
            <article className="step reveal d2"><div className="num">03 · SHIP</div><h3>Go live and measure</h3><p>Launch on the channel and score every conversation against your rules.</p></article>
          </div>
        </div>
      </section>
    </>
  );
}
