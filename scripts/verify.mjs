import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import assert from 'node:assert/strict';
import { validateDownloads } from './config.mjs';
const dist = new URL('../dist/', import.meta.url).pathname.replace(/^\/(?=[A-Za-z]:)/, '');
function walk(dir) { return readdirSync(dir,{withFileTypes:true}).flatMap(e => e.isDirectory()?walk(join(dir,e.name)):[join(dir,e.name)]); }
validateDownloads(JSON.parse(readFileSync(new URL('../src/data/downloads.json',import.meta.url))));
const htmls=walk(dist).filter(f=>f.endsWith('.html'));
const sitemap=readFileSync(join(dist,'sitemap.xml'),'utf8');
for(const file of htmls){
 const html=readFileSync(file,'utf8'); const rel=file.slice(dist.length).replaceAll('\\','/');
 const canonical=html.match(/rel="canonical" href="([^"]+)"/)?.[1];
 assert.equal((html.match(/<h1(?:\s|>)/g)||[]).length,1,`${rel}: 应只有一个 h1`);
 assert.match(canonical||'',/^https:\/\/audacitycn\.com\//,`${rel}: canonical 错误`);
 assert.match(html,/<html lang="zh-CN"/); assert.match(html,/<meta name="description" content="[^"]{15,}"/);
 assert.ok(!/localhost|TODO|lorem ipsum|示例链接待替换/i.test(html),`${rel}: 存在临时内容`);
 for(const [,href] of html.matchAll(/(?:href|src)="(\/[^"#?]*)(?:[?#][^"]*)?"/g)){
   if(href.startsWith('//'))continue;const p=join(dist,href);assert.ok(existsSync(p)||existsSync(join(p,'index.html')),`${rel}: 链接失效 ${href}`);
 }
 if(!rel.includes('404'))assert.ok(sitemap.includes(`<loc>${canonical}</loc>`),`${rel}: 缺少 sitemap`);
}
assert.ok(!sitemap.includes('404')); assert.ok(existsSync(join(dist,'robots.txt')));
console.log(`PASS: ${htmls.length} HTML pages; canonical, h1, descriptions, local links, sitemap and downloads verified.`);
