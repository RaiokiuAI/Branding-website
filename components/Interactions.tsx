'use client';

import { useEffect } from 'react';

/**
 * Site-wide pointer and scroll effects, attached once with event delegation:
 * - scroll progress bar along the top edge
 * - hero parallax: the glow and the mark drift with the cursor
 * - spotlight: cards and rows light up where the cursor is
 * - magnetic buttons: primary buttons and arrow circles lean toward the cursor
 * Pointer effects run only with a fine pointer (mouse/trackpad) and without reduced motion.
 */
const SPOT = '.card, .door, .tick, .case, .build-steps li, .product-visual, .swatch';
const MAGNET = '.btn-primary, .door-go, .theme-btn';

export default function Interactions() {
  useEffect(() => {
    const root = document.documentElement;
    const bar = document.getElementById('scroll-progress');
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const max = root.scrollHeight - window.innerHeight;
        bar?.style.setProperty('transform', `scaleX(${max > 0 ? window.scrollY / max : 0})`);
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const fine = window.matchMedia('(pointer: fine)').matches;
    if (reduced || !fine) return () => window.removeEventListener('scroll', onScroll);

    let magnet: HTMLElement | null = null;
    const release = () => {
      if (magnet) magnet.style.transform = '';
      magnet = null;
    };

    const onMove = (e: PointerEvent) => {
      const t = e.target as Element | null;
      if (!t?.closest) return;

      // Spotlight: tell the element where the cursor is.
      const spot = t.closest<HTMLElement>(SPOT);
      if (spot) {
        const r = spot.getBoundingClientRect();
        spot.style.setProperty('--mx', `${e.clientX - r.left}px`);
        spot.style.setProperty('--my', `${e.clientY - r.top}px`);
      }

      // Hero parallax: -1..1 from the centre of the section.
      const hero = t.closest<HTMLElement>('.hero, .page-hero, .close-act');
      if (hero) {
        const r = hero.getBoundingClientRect();
        hero.style.setProperty('--px', (((e.clientX - r.left) / r.width) * 2 - 1).toFixed(3));
        hero.style.setProperty('--py', (((e.clientY - r.top) / r.height) * 2 - 1).toFixed(3));
      }

      // Magnetic pull, capped so the element never leaves its spot by much.
      const m = t.closest<HTMLElement>(MAGNET);
      if (m !== magnet) release();
      if (m) {
        magnet = m;
        const r = m.getBoundingClientRect();
        const dx = (e.clientX - (r.left + r.width / 2)) * 0.28;
        const dy = (e.clientY - (r.top + r.height / 2)) * 0.38;
        m.style.transform = `translate(${dx.toFixed(1)}px, ${dy.toFixed(1)}px)`;
      }
    };

    document.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('pointerleave', release);
    window.addEventListener('blur', release);
    return () => {
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerleave', release);
      window.removeEventListener('blur', release);
    };
  }, []);

  return <div id="scroll-progress" aria-hidden="true" />;
}
