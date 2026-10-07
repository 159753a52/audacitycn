import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import assert from 'node:assert/strict';
import { validateDownloads } from './config.mjs';
const dist = new URL('../dist/', import.meta.url).pathname.replace(/^\/(?=[A-Za-z]:)/, '');
function walk(dir) { return readdirSync(dir,{withFileTypes:true}).flatMap(e => e.isDirectory()?walk(join(dir,e.name)):[join(dir,e.name)]); }
validateDownloads(JSON.parse(readFileSync(new URL('../src/data/downloads.json',import.meta.url))));
const googleVerificationName='google2d95f7b9770ef0ba.html';
assert.equal(readFileSync(join(dist,googleVerificationName),'utf8').trim(),`google-site-verification: ${googleVerificationName}`);
const htmls=walk(dist).filter(f=>f.endsWith('.html') && f!==join(dist,googleVerificationName));
const sitemap=readFileSync(join(dist,'sitemap.xml'),'utf8');
const titles = new Set(), descriptions = new Set(), canonicals = new Set();
for(const file of htmls){
 const html=readFileSync(file,'utf8'); const rel=file.slice(dist.length).replaceAll('\\','/');
 const canonical=html.match(/rel="canonical" href="([^"]+)"/)?.[1];
 assert.equal((html.match(/<h1(?:\s|>)/g)||[]).length,1,`${rel}: 应只有一个 h1`);
 assert.match(canonical||'',/^https:\/\/audacitycn\.com\//,`${rel}: canonical 错误`);
 assert.ok(!canonicals.has(canonical), `${rel}: 重复 canonical`); canonicals.add(canonical);
 if(!rel.includes('404')) assert.equal(new URL(canonical).pathname, '/' + rel.replace(/^\//, '').replace(/index\.html$/, ''), `${rel}: canonical 必须指向本页`);
 const title=html.match(/<title>(.*?)<\/title>/s)?.[1];
 const description=html.match(/<meta name="description" content="([^"]+)"/)?.[1];
 assert.ok(title && !titles.has(title), `${rel}: 标题缺失或重复`); titles.add(title);
 assert.ok(description && !descriptions.has(description), `${rel}: 描述缺失或重复`); descriptions.add(description);
 assert.match(html,/<html lang="zh-CN"/); assert.match(html,/<meta name="description" content="[^"]{15,}"/);
 assert.ok(!/localhost|TODO|lorem ipsum|示例链接待替换/i.test(html),`${rel}: 存在临时内容`);
 assert.ok(!html.includes('/releases/download/'), `${rel}: 用户要求仅网盘入口，不能渲染安装包直链（包括结构化数据）`);
 for(const [,href] of html.matchAll(/(?:href|src)="(\/[^"#?]*)(?:[?#][^"]*)?"/g)){
   if(href.startsWith('//'))continue;const p=join(dist,href);assert.ok(existsSync(p)||existsSync(join(p,'index.html')),`${rel}: 链接失效 ${href}`);
 }
 const ids = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]));
 for(const [,anchor] of html.matchAll(/href="#([^"]+)"/g)) assert.ok(ids.has(anchor), `${rel}: 页内目录指向不存在的 ${anchor}`);
 for(const [,json] of html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)) JSON.parse(json);
 if(!rel.includes('404'))assert.ok(sitemap.includes(`<loc>${canonical}</loc>`),`${rel}: 缺少 sitemap`);
}
assert.ok(!sitemap.includes('404')); assert.ok(existsSync(join(dist,'robots.txt')));
console.log(`PASS: ${htmls.length} HTML pages; unique titles/descriptions, exact canonical, h1, anchors, JSON-LD, local links, sitemap and downloads verified.`);
