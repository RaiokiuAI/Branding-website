import type { Metadata, Viewport } from 'next';
import { Bricolage_Grotesque, Hanken_Grotesk, JetBrains_Mono } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';
import Interactions from '@/components/Interactions';
import { JsonLd } from '@/components/ui';
import { SITE } from '@/lib/site';
import './globals.css';

const display = Bricolage_Grotesque({ subsets: ['latin'], variable: '--font-display', display: 'swap' });
const sans = Hanken_Grotesk({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });
const mono = JetBrains_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-mono', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: `${SITE.name} — ${SITE.tagline}`, template: `%s | ${SITE.name}` },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  keywords: SITE.keywords,
  category: 'technology',
  formatDetection: { telephone: false, email: false, address: false },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
  },
  verification: { google: SITE.googleVerification },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  openGraph: { type: 'website', siteName: SITE.name, locale: 'en_IN', images: [{ url: SITE.ogImage, width: 1200, height: 630 }] },
  twitter: { card: 'summary_large_image', site: SITE.xHandle, creator: SITE.xHandle },
};

export const viewport: Viewport = {
  themeColor: '#0A0B0D',
  colorScheme: 'dark light',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

const siteJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE.url}/#organization`,
      name: SITE.name,
      alternateName: SITE.alternateNames,
      url: `${SITE.url}/`,
      // Google prefers a square logo for the knowledge panel; the wide wordmark goes in `image`.
      logo: { '@type': 'ImageObject', '@id': `${SITE.url}/#logo`, url: `${SITE.url}/icon-512.png`, width: 512, height: 512, caption: SITE.name },
      image: { '@type': 'ImageObject', url: `${SITE.url}/logo.png`, width: 1501, height: 321 },
      email: SITE.email,
      slogan: SITE.tagline,
      description: 'RaiokiuAI builds conversational AI agents for messaging, web, app and voice, connected to business systems through visual workflows.',
      areaServed: { '@type': 'Country', name: 'India' },
      knowsAbout: ['Conversational AI', 'AI agents', 'Large language models', 'Workflow automation', 'WhatsApp Business API', 'Voice AI', 'Multilingual AI'],
      sameAs: Object.values(SITE.social),
      contactPoint: [{ '@type': 'ContactPoint', contactType: 'sales', email: SITE.email, url: `${SITE.url}/contact/`, areaServed: 'IN' }],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE.url}/#website`,
      url: `${SITE.url}/`,
      name: SITE.name,
      alternateName: SITE.alternateNames,
      description: SITE.description,
      inLanguage: 'en-IN',
      publisher: { '@id': `${SITE.url}/#organization` },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${display.variable} ${sans.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        {/* Hide reveal-on-scroll content only when JS is running, so crawlers and no-JS users see everything. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        {/* Apply the saved theme before first paint (dark by default) so the page never flashes. */}
        <script dangerouslySetInnerHTML={{ __html: "try{var t=localStorage.getItem('theme');document.documentElement.dataset.theme=t==='light'?'light':'dark'}catch(e){document.documentElement.dataset.theme='dark'}" }} />
        <script src="https://analytics.ahrefs.com/analytics.js" data-key="fQDvAlktwK1NICXyuti55A" async />
        <JsonLd data={siteJsonLd} />
      </head>
      <body>
        <a className="skip" href="#main">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <Reveal />
        <Interactions />
      </body>
    </html>
  );
}
