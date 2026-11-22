import type { Metadata } from 'next';
import Link from 'next/link';
import { Arrow, Prism } from '@/components/ui';

export const metadata: Metadata = {
  title: { absolute: 'Page not found | RaiokiuAI' },
  description: "The page you were looking for doesn't exist. Head back to RaiokiuAI to explore AI agents, Flows and channels.",
};

export default function NotFound() {
  return (
    <section className="hero grain" style={{ minHeight: '90svh', alignItems: 'center' }}>
      <Prism />
      <div className="wrap" style={{ position: 'relative', zIndex: 2 }}>
        <span className="eyebrow">Error 404</span>
        <h1 style={{ fontSize: 'clamp(56px,10vw,140px)', marginTop: 20, letterSpacing: '-.05em' }}>
          This thread<br /><span className="grad-text">went nowhere.</span>
        </h1>
        <p className="lede" style={{ marginTop: 24 }}>The page you were looking for doesn&apos;t exist or has moved.</p>
        <div className="ctas">
          <Link className="btn btn-primary" href="/">Back to home <Arrow /></Link>
          <Link className="btn btn-ghost" href="/use-cases/">See use cases</Link>
        </div>
      </div>
    </section>
  );
}
