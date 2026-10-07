import { guides } from '../data/guides';
import { site } from '../data/site';
import downloads from '../data/downloads.json';
export function GET() {
  const pages = [
    { path: '/', updated: '2026-10-07' },
    { path: '/download/', updated: downloads.verified },
    ...['windows','macos','linux'].map(platform=>({path:`/download/${platform}/`,updated:downloads.verified})),
    { path: '/guides/', updated: '2026-10-07' },
    { path: '/faq/', updated: '2026-10-07' },
    { path: '/about/', updated: '2026-10-07' },
    { path: '/privacy/', updated: '2026-10-07' },
    ...guides.map(g => ({ path: `/guides/${g.slug}/`, updated: g.updated })),
  ];
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${pages.map(p => `<url><loc>${site.url}${p.path}</loc>${p.updated ? `<lastmod>${p.updated}</lastmod>` : ''}</url>`).join('')}</urlset>`, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
