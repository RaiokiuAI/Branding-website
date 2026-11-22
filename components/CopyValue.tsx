'use client';

import { useState } from 'react';

/** A button that copies a value (e.g. a hex code) and briefly confirms it. */
export default function CopyValue({ value, label }: { value: string; label?: string }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch {
      /* clipboard blocked: the value is still visible to select by hand */
    }
  };
  return (
    <button type="button" className="copy" onClick={copy} aria-label={`Copy ${label ?? value}`}>
      <span>{value}</span>
      <span className="copy-state" aria-live="polite">{copied ? 'Copied' : 'Copy'}</span>
    </button>
  );
}
