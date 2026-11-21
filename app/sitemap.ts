import type { MetadataRoute } from 'next';
import { ROUTES, SITE } from '@/lib/site';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return ROUTES.map((r) => ({
    url: new URL(r.path, SITE.url).href,
    lastModified,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
