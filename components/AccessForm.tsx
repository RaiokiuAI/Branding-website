'use client';

import { useRef, useState } from 'react';
import { SITE } from '@/lib/site';
import { Arrow } from './ui';

/**
 * Early-access form. There is no backend on a static GitHub Pages site, so submitting
 * opens the visitor's email app with the details filled in. Swap this for a form
 * service (Formspree, Tally, a serverless function) when one is available.
 */
export default function AccessForm() {
  const [sent, setSent] = useState(false);
  const status = useRef<HTMLDivElement>(null);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.reportValidity()) return;
    const d = new FormData(form);
    const get = (k: string) => String(d.get(k) ?? '');
    const subject = `Early access request: ${get('company') || get('name')}`;
    const body = [
      `Name: ${get('name')}`,
      `Work email: ${get('email')}`,
      `Company: ${get('company')}`,
      `Role: ${get('role')}`,
      `Primary channel: ${get('channel')}`,
      '',
      'What we want to build:',
      get('details'),
    ].join('\n');
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
    setTimeout(() => status.current?.focus(), 0);
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <div className="row">
        <div className="field"><label htmlFor="f-name">Name</label><input id="f-name" name="name" autoComplete="name" required /></div>
        <div className="field"><label htmlFor="f-email">Work email</label><input id="f-email" name="email" type="email" autoComplete="email" required /></div>
      </div>
      <div className="row">
        <div className="field"><label htmlFor="f-company">Company</label><input id="f-company" name="company" autoComplete="organization" required /></div>
        <div className="field"><label htmlFor="f-role">Role</label><input id="f-role" name="role" autoComplete="organization-title" /></div>
      </div>
      <div className="field">
        <label htmlFor="f-channel">Primary channel</label>
        <select id="f-channel" name="channel" defaultValue="WhatsApp">
          <option>WhatsApp</option><option>Web or app chat</option><option>Voice</option><option>Several channels</option><option>Not sure yet</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="f-details">The journey you want to automate</label>
        <textarea id="f-details" name="details" placeholder="e.g. Qualify leads on WhatsApp, check availability and book a visit." />
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center', justifyContent: 'space-between' }}>
        <p className="form-note">Submitting opens your email app with these details filled in.</p>
        <button className="btn btn-primary" type="submit">Request access <Arrow /></button>
      </div>
      <div ref={status} className={`form-status${sent ? ' show' : ''}`} role="status" tabIndex={-1}>
        Thanks! Your email app should open with your request. If it doesn&apos;t, write to {SITE.email}.
      </div>
    </form>
  );
}
