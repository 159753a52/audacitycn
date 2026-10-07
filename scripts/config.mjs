export function validateDownloads(config) {
  for (const group of [config, ...(config.legacy ? [config.legacy] : [])]) {
    for (const file of group.files) {
      const url = new URL(file.url);
      if (url.protocol !== 'https:' || url.hostname !== 'github.com' || !url.pathname.startsWith('/audacity/audacity/releases/download/')) throw Error('安装包必须来自 Audacity 官方发布仓库');
      if (!/^[a-f0-9]{64}$/.test(file.sha256)) throw Error('安装包缺少有效 SHA-256');
      if (!['windows','macos','linux','shared'].includes(file.platform) || !file.architecture || !file.filename) throw Error('文件缺少系统、架构或文件名');
      if (!url.pathname.endsWith(`/${file.filename}`) || !url.pathname.includes(`/Audacity-${group.version}/`)) throw Error('文件名或版本与来源不符');
    }
    const hosts = { quark: 'pan.quark.cn', baidu: 'pan.baidu.com', uc: 'drive.uc.cn', xunlei: 'pan.xunlei.com' };
    for (const mirror of group.mirrors.filter(m => m.enabled)) {
      const url = new URL(mirror.url);
      if (url.protocol !== 'https:' || url.hostname !== hosts[mirror.id] || !url.pathname.startsWith('/s/')) throw Error('网盘须填写对应平台的 HTTPS 分享链接');
      if (mirror.version !== group.version || !mirror.fileLabel) throw Error('启用网盘前须填写对应文件版本及内容');
      if (!mirror.scope?.length || mirror.scope.some(s=>! /^(windows|macos|linux):(\*|x64|arm64|universal|x86)$/.test(s))) throw Error('网盘缺少有效的系统与架构范围');
      if (mirror.qrKind === 'wechat-mini' && (mirror.id !== 'xunlei' || mirror.qrImage !== `/netdisk-qr/xunlei-${group.version}.png` || mirror.linkEnabled !== false)) throw Error('迅雷小程序码须匹配版本，未核对提取码时不能显示普通链接');
      if (mirror.linkEnabled === false && !mirror.qrImage) throw Error('关闭链接时须有可用二维码');
    }
    }
    return config;
  }

  export function availableMirrors(group, platform, architecture) {
    return group.mirrors.filter(m => m.enabled && (m.scope.includes(`${platform}:*`) || m.scope.includes(`${platform}:${architecture}`)));
  }
