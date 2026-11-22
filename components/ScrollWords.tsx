'use client';

import { useEffect, useRef } from 'react';

/**
 * A statement whose words light up one by one as it scrolls through the viewport.
 * Without JS, or with reduced motion, every word is simply shown at full strength.
 */
export default function ScrollWords({ text, as: Tag = 'p', className = '' }: { text: string; as?: 'p' | 'h2'; className?: string }) {
  const ref = useRef<HTMLElement>(null);
  const words = text.split(' ');

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const spans = Array.from(el.querySelectorAll<HTMLSpanElement>('.sw'));
    el.classList.add('sw-on');
    let frame = 0;
    const update = () => {
      frame = 0;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // 0 when the block's top reaches 85% of the viewport, 1 when its bottom reaches 45%.
      const p = Math.min(1, Math.max(0, (vh * 0.85 - r.top) / (r.height + vh * 0.4)));
      const lit = p * spans.length;
      spans.forEach((s, i) => s.style.setProperty('--lit', String(Math.min(1, Math.max(0, lit - i)))));
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <Tag ref={ref as never} className={`scroll-words ${className}`}>
      {words.map((w, i) => (
        <span key={i} className="sw">{w}{i < words.length - 1 ? ' ' : ''}</span>
      ))}
    </Tag>
  );
}
