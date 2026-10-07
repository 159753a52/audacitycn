import { readFileSync } from 'node:fs';
const xml=readFileSync(new URL('../dist/sitemap.xml',import.meta.url),'utf8');
const urlList=[...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(m=>m[1]);
const key='f087dab7e1c4456ca9b12048ed335aa2';
const check=await fetch(`https://audacitycn.com/${key}.txt`);
if(!check.ok||(await check.text()).trim()!==key)throw Error('线上密钥尚不可访问，未提交 IndexNow');
const result=await fetch('https://api.indexnow.org/indexnow',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({host:'audacitycn.com',key,keyLocation:`https://audacitycn.com/${key}.txt`,urlList})});
console.log(`IndexNow: ${result.status}; ${urlList.length} URLs`);if(![200,202].includes(result.status))process.exitCode=1;
