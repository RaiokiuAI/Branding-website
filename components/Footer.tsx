import Link from 'next/link';
import { SITE } from '@/lib/site';
import { Logo } from './ui';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <Link className="logo" href="/" aria-label="raiokiuai home"><Logo /><span>raiokiuai</span></Link>
            <p>Conversational AI agents that talk, and visual workflows that act. Built in India for WhatsApp, web, app and voice.</p>
          </div>
          <div>
            <h2>Platform</h2>
            <ul>
              <li><Link href="/agents/">AI agents</Link></li>
              <li><Link href="/flows/">Flows</Link></li>
              <li><Link href="/channels/">Channels</Link></li>
              <li><Link href="/security/">Security</Link></li>
            </ul>
          </div>
          <div>
            <h2>Solutions</h2>
            <ul>
              <li><Link href="/use-cases/#sales">Sales &amp; discovery</Link></li>
              <li><Link href="/use-cases/#booking">Booking</Link></li>
              <li><Link href="/use-cases/#finance">Financial services</Link></li>
              <li><Link href="/use-cases/#support">Customer support</Link></li>
              <li><Link href="/use-cases/#voice">Voice &amp; calling</Link></li>
            </ul>
          </div>
          <div>
            <h2>Company</h2>
            <ul>
              <li><Link href="/about/">About</Link></li>
              <li><Link href="/contact/">Early access</Link></li>
              <li><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
            </ul>
          </div>
        </div>
        <div className="foot-word" aria-hidden="true">raiokiuai</div>
        <div className="foot-bottom">
          <span>© {new Date().getFullYear()} raiokiuai. All rights reserved.</span>
          <span className="mono">Conversations that act</span>
        </div>
      </div>
    </footer>
  );
}
