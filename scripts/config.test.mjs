import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { validateDownloads } from './config.mjs';
const data = JSON.parse(readFileSync(new URL('../src/data/downloads.json', import.meta.url)));
test('发布包的所有下载入口配置有效', () => { assert.equal(validateDownloads(data), data); });
test('拒绝伪装网盘域名、非 HTTPS 及缺少版本信息的推广入口', () => {
  for (const url of ['https://pan.quark.cn.example.com/s/abc', 'http://pan.quark.cn/s/abc', 'https://example.com/s/abc']) {
    const c = structuredClone(data); Object.assign(c.mirrors[0], { enabled: true, url, version: '4.0.1', fileLabel: 'Windows x64 MSI' }); assert.throws(() => validateDownloads(c));
  }
  const c = structuredClone(data); Object.assign(c.mirrors[0], { enabled: true, url: 'https://pan.quark.cn/s/example', version: '', fileLabel: '' }); assert.throws(() => validateDownloads(c));
});
test('允许配置完整的真实平台分享入口', () => { const c = structuredClone(data); Object.assign(c.mirrors[0], { enabled: true, url: 'https://pan.quark.cn/s/example', version: '4.0.1', fileLabel: 'Windows x64 MSI' }); assert.equal(validateDownloads(c), c); });

test('UC 和迅雷须使用各自的分享域名，不能交叉或伪装', () => {
  for (const [id,host] of [['uc','drive.uc.cn'],['xunlei','pan.xunlei.com']]) {
    const c = structuredClone(data);
    Object.assign(c.mirrors[0], { id, enabled: true, url: `https://${host}/s/example`, version: '4.0.1', fileLabel: 'Windows x64 MSI' });
    assert.equal(validateDownloads(c), c);
    c.mirrors[0].url = `https://${host}.example.com/s/example`; assert.throws(()=>validateDownloads(c));
    c.mirrors[0].url = 'https://pan.quark.cn/s/example'; assert.throws(()=>validateDownloads(c));
  }
});
