import { site } from '../data/site';
export function getStaticPaths() { return [{ params: { key: site.indexNowKey } }]; }
export function GET() { return new Response(site.indexNowKey, { headers: { 'Content-Type': 'text/plain' } }); }
