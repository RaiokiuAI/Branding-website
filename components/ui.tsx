import Link from 'next/link';
import type { ReactNode } from 'react';
import { SITE } from '@/lib/site';

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // JSON-LD must be raw JSON; escape "<" so it can't close the script tag.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  );
}

export function Logo({ size = 26 }: { size?: number }) {
  return (
    <svg viewBox="0 0 28 28" width={size} height={size} aria-hidden="true">
      <circle cx="14" cy="14" r="5" fill="#fff" />
      <g stroke="#fff" strokeWidth="1.5" strokeLinecap="round">
        <path d="M14 9V3M14 19v6M9 14H3M19 14h6M10.5 10.5 6 6M17.5 17.5 22 22M17.5 10.5 22 6M10.5 17.5 6 22" />
      </g>
      <g fill="#FF9254">
        <circle cx="14" cy="3" r="2.2" />
        <circle cx="25" cy="14" r="2.2" />
        <circle cx="6" cy="22" r="2.2" />
      </g>
    </svg>
  );
}

export function Arrow() {
  return <span className="arr" aria-hidden="true">→</span>;
}

export function Prism({ second = false, fade = true }: { second?: boolean; fade?: boolean }) {
  return (
    <div className="prism" aria-hidden="true">
      <div className="band" />
      {second && <div className="band b2" />}
      {fade && <div className="fade" />}
    </div>
  );
}

export function PageHero({ crumb, title, accent, lede, children }: { crumb: string; title: ReactNode; accent: ReactNode; lede: ReactNode; children?: ReactNode }) {
  return (
    <section className="page-hero grain">
      <Prism />
      <div className="wrap">
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{crumb}</span>
        </nav>
        <h1 className="reveal">
          {title} <span className="grad-text">{accent}</span>
        </h1>
        <p className="lede reveal d1">{lede}</p>
        {children && <div className="ctas reveal d2">{children}</div>}
      </div>
    </section>
  );
}

export function SectionHead({ eyebrow, id, title, children, style }: { eyebrow: string; id?: string; title: ReactNode; children?: ReactNode; style?: React.CSSProperties }) {
  return (
    <div className="section-head reveal">
      <span className="eyebrow">{eyebrow}</span>
      <h2 id={id} style={style}>{title}</h2>
      {children}
    </div>
  );
}

export function Cta({ title = <>Your next customer journey<br />is a canvas away.</> }: { title?: ReactNode }) {
  return (
    <section className="section" aria-labelledby="cta-title">
      <div className="wrap">
        <div className="cta grain reveal">
          <Prism fade={false} />
          <span className="eyebrow">Early access</span>
          <h2 id="cta-title" style={{ marginTop: 20 }}>{title}</h2>
          <p>Build the workflow, then give it a voice. We&apos;re opening early access to a small group of teams.</p>
          <div className="ctas">
            <Link className="btn btn-primary" href="/contact/">Get early access <Arrow /></Link>
            <Link className="btn btn-ghost" href="/use-cases/">See use cases</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export type Step = { dot: string; ai?: boolean; title: ReactNode; text: ReactNode };

export function FlowSteps({ steps }: { steps: Step[] }) {
  return (
    <div className="flow">
      {steps.map((s, i) => (
        <div className="fstep" key={i}>
          <div className={s.ai ? 'dot ai' : 'dot'}>{s.ai ? 'AI' : s.dot}</div>
          <div className="ft"><b>{s.title}</b><small>{s.text}</small></div>
        </div>
      ))}
    </div>
  );
}

export function Meta({ items }: { items: string[] }) {
  return <div className="meta">{items.map((m) => <span key={m}>{m}</span>)}</div>;
}

export const Icon = {
  pen: <path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z" />,
  wrench: <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.4-.6-.6-2.4z" />,
  lock: <><rect x="3" y="11" width="18" height="10" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></>,
  chat: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />,
  image: <><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="m21 15-5-5L5 21" /></>,
  bolt: <path d="M13 2 3 14h9l-1 8 10-12h-9z" />,
  lines: <path d="M4 6h16M4 12h10M4 18h6" />,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  lang: <path d="M3 5h12M9 3v2m1.05 9.5A18 18 0 0 1 6.4 9M12.5 18H19M11 21l5-10 5 10M4 18c3.5-1.5 6.5-4.5 8-9" />,
  shield: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
  chart: <path d="M3 3v18h18M7 15l4-4 3 3 5-6" />,
};

export function Ic({ children }: { children: ReactNode }) {
  return (
    <div className="ic">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">{children}</svg>
    </div>
  );
}

export const email = SITE.email;
