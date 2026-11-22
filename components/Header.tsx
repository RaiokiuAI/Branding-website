'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { NAV } from '@/lib/site';
import ThemeToggle from './ThemeToggle';
import { Arrow, Logo } from './ui';

export default function Header() {
  const pathname = usePathname() || '/';
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const btn = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile menu on navigation and on Escape.
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setOpen(false); btn.current?.focus(); }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  const isCurrent = (href: string) => pathname === href || pathname.startsWith(href);
  const links = NAV.map((n) => (
    <Link key={n.href} href={n.href} aria-current={isCurrent(n.href) ? 'page' : undefined}>{n.label}</Link>
  ));

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}${open ? ' open' : ''}`}>
      <div className="wrap">
        <Link className="logo" href="/" aria-label="RaiokiuAI home"><Logo /></Link>
        <nav className="nav" aria-label="Primary">{links}</nav>
        <div className="header-tools">
          <ThemeToggle />
          <Link className="btn btn-primary btn-sm header-cta" href="/contact/">Get early access <Arrow /></Link>
          <button
            ref={btn}
            className="menu-btn"
            type="button"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((o) => !o)}
          >
            <span />
          </button>
        </div>
      </div>
      <nav className="mobile-nav" id="mobile-nav" aria-label="Mobile">
        {links}
        <Link className="btn btn-primary" href="/contact/">Get early access <Arrow /></Link>
      </nav>
    </header>
  );
}
