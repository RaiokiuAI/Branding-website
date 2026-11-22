import { Fragment } from 'react';

/**
 * Splits a line into words that rise into view one after another (pure CSS, no JS).
 * `wordClass` goes on every word, so a gradient class like "soft" still paints each word.
 */
export default function SplitWords({ text, start = 0, step = 0.07, wordClass = '' }: { text: string; start?: number; step?: number; wordClass?: string }) {
  const words = text.split(' ');
  return (
    <>
      {words.map((w, i) => (
        <Fragment key={i}>
          <span className="rise-mask">
            <span className={`rise ${wordClass}`} style={{ animationDelay: `${(start + i * step).toFixed(2)}s` }}>{w}</span>
          </span>
          {i < words.length - 1 ? ' ' : ''}
        </Fragment>
      ))}
    </>
  );
}
