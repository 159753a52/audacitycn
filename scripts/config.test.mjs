import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { validateDownloads, availableMirrors } from './config.mjs';
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

test('百度只覆盖当前 Windows x64，其余架构和旧版不显示', () => {
  assert.ok(availableMirrors(data,'windows','x64').some(m=>m.id==='baidu'));
  for(const [platform,architecture] of [['windows','arm64'],['macos','universal'],['linux','x64']]) assert.ok(!availableMirrors(data,platform,architecture).some(m=>m.id==='baidu'));
  assert.ok(!availableMirrors(data.legacy,'windows','x64').some(m=>m.id==='baidu'));
});

test('旧版文件也要校验；拒绝版本错配及伪装网盘', () => {
  for(const change of [c=>c.legacy.files[0].sha256='broken',c=>c.legacy.mirrors[0].version='4.0.1',c=>c.legacy.mirrors[0].url='https://pan.quark.cn.evil.test/s/example']) {
    const c=structuredClone(data);change(c);assert.throws(()=>validateDownloads(c));
  }
});

test('迅雷原生码必须对应版本且保持二维码入口', () => {
  const c=structuredClone(data);const m=c.legacy.mirrors.find(m=>m.id==='xunlei');
  m.qrImage='/netdisk-qr/xunlei-4.0.1.png';assert.throws(()=>validateDownloads(c));
  m.qrImage='/netdisk-qr/xunlei-3.7.9.png';m.linkEnabled=true;assert.throws(()=>validateDownloads(c));
});
