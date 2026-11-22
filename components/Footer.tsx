import Link from 'next/link';
import { SITE } from '@/lib/site';
import { Logo } from './ui';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <Link className="logo" href="/" aria-label="RaiokiuAI home"><Logo /></Link>
            <p>Conversational AI agents that talk, and visual workflows that act. Built in India for every channel your customers use.</p>
            <div className="foot-social">
              <a href={SITE.social.linkedin} target="_blank" rel="noopener me" aria-label="RaiokiuAI on LinkedIn">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                  <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
                </svg>
              </a>
              <a href={SITE.social.x} target="_blank" rel="noopener me" aria-label="RaiokiuAI on X">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                  <path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.65l-5.21-6.82-5.97 6.82H1.68l7.73-8.84L1.25 2.25h6.82l4.71 6.23 5.46-6.23zm-1.16 17.52h1.83L7.08 4.13H5.12l11.96 15.64z" />
                </svg>
              </a>
            </div>
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
            <h2>Use cases</h2>
            <ul>
              <li><Link href="/use-cases/#answer">Answer questions</Link></li>
              <li><Link href="/use-cases/#capture">Capture leads</Link></li>
              <li><Link href="/use-cases/#schedule">Scheduling</Link></li>
              <li><Link href="/use-cases/#follow-up">Follow-ups</Link></li>
              <li><Link href="/use-cases/#handoff">Human handoff</Link></li>
            </ul>
          </div>
          <div>
            <h2>Company</h2>
            <ul>
              <li><Link href="/about/">About</Link></li>
              <li><Link href="/contact/">Early access</Link></li>
              <li><a href={SITE.social.linkedin} target="_blank" rel="noopener me">LinkedIn</a></li>
              <li><a href={SITE.social.x} target="_blank" rel="noopener me">X (Twitter)</a></li>
              <li><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© {new Date().getFullYear()} RaiokiuAI. All rights reserved.</span>
          <span className="mono">Conversations that act</span>
        </div>
      </div>
    </footer>
  );
}
