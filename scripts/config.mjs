export function validateDownloads(config) {
  for (const file of config.files) {
    const url = new URL(file.url);
    if (url.protocol !== 'https:' || url.hostname !== 'github.com' || !url.pathname.startsWith('/audacity/audacity/releases/download/')) throw Error('安装包必须来自 Audacity 官方发布仓库');
    if (!/^[a-f0-9]{64}$/.test(file.sha256)) throw Error('安装包缺少有效 SHA-256');
  }
  const hosts = { quark: 'pan.quark.cn', baidu: 'pan.baidu.com' };
  for (const mirror of config.mirrors.filter(m => m.enabled)) {
    const url = new URL(mirror.url);
    if (url.protocol !== 'https:' || url.hostname !== hosts[mirror.id] || !url.pathname.startsWith('/s/')) throw Error('网盘须填写对应平台的 HTTPS 分享链接');
    if (!mirror.version || !mirror.fileLabel) throw Error('启用网盘前须填写文件版本及内容');
  }
  return config;
}
