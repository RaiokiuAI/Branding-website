import type { Metadata } from 'next';

export const SITE = {
  name: 'RaiokiuAI',
  url: 'https://raiokiuai.com',
  // TODO: confirm this inbox exists before launch. The contact form and footer use it.
  email: 'hello@raiokiuai.com',
  googleVerification: 'pD_A6esc7pXNT6zjpIr39VTtAd4gfvhR9Ha9sEccFEc',
  tagline: 'Agents that talk. Workflows that act.',
  description:
    'Build conversational AI agents for WhatsApp, web, app and voice, and connect them to your APIs, data and LLMs with visual workflows. Multilingual, production-ready, made in India.',
  keywords: [
    'conversational AI',
    'AI agents',
    'WhatsApp AI agent',
    'voice AI',
    'AI workflow builder',
    'no-code AI automation',
    'chatbot platform India',
    'multilingual voice bot',
  ],
  ogImage: '/og-image.png',
};

export const NAV = [
  { href: '/agents/', label: 'Agents' },
  { href: '/flows/', label: 'Flows' },
  { href: '/channels/', label: 'Channels' },
  { href: '/use-cases/', label: 'Use cases' },
  { href: '/security/', label: 'Security' },
  { href: '/about/', label: 'About' },
];

/** Every indexable route, used by sitemap.ts. */
export const ROUTES: { path: string; priority: number; changeFrequency: 'weekly' | 'monthly' }[] = [
  { path: '/', priority: 1, changeFrequency: 'weekly' },
  { path: '/agents/', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/flows/', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/channels/', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/use-cases/', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/security/', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/about/', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/contact/', priority: 0.7, changeFrequency: 'monthly' },
];

type PageMetaInput = {
  path: string;
  title: string; // used as-is for <title>
  ogTitle?: string;
  description: string;
  keywords?: string[];
};

/** Canonical, Open Graph and Twitter tags for a page. */
export function pageMeta({ path, title, ogTitle, description, keywords }: PageMetaInput): Metadata {
  const t = ogTitle ?? title;
  const image = { url: SITE.ogImage, width: 1200, height: 630, alt: `${SITE.name} — ${SITE.tagline}` };
  return {
    title: { absolute: title },
    description,
    keywords: keywords ?? SITE.keywords,
    alternates: { canonical: path, languages: { 'en-IN': path, 'x-default': path } },
    openGraph: {
      type: 'website',
      siteName: SITE.name,
      locale: 'en_IN',
      url: path,
      title: t,
      description,
      images: [image],
    },
    twitter: { card: 'summary_large_image', title: t, description, images: [image] },
  };
}

/** Breadcrumb + WebPage structured data for a sub page. */
export function pageJsonLd(opts: { path: string; name: string; title: string; description: string; type?: string; extra?: object[] }) {
  const url = new URL(opts.path, SITE.url).href;
  const crumbs = opts.path === '/' ? [{ name: 'Home', path: '/' }] : [{ name: 'Home', path: '/' }, { name: opts.name, path: opts.path }];
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': opts.type ?? 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: opts.title,
        description: opts.description,
        inLanguage: 'en-IN',
        isPartOf: { '@id': `${SITE.url}/#website` },
        about: { '@id': `${SITE.url}/#organization` },
        primaryImageOfPage: { '@type': 'ImageObject', url: new URL(SITE.ogImage, SITE.url).href },
        breadcrumb: { '@id': `${url}#breadcrumb` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${url}#breadcrumb`,
        itemListElement: crumbs.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: new URL(c.path, SITE.url).href })),
      },
      ...(opts.extra ?? []),
    ],
  };
}
