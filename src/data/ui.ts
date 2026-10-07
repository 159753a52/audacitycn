// 教程卡片的图标与配色，只影响外观。
export const guideIcons: Record<string, string> = {
  install: 'download',
  'record-voice': 'mic',
  'record-desktop': 'monitor',
  'edit-audio': 'scissors',
  'noise-reduction': 'wave',
  'export-audio': 'export',
  ffmpeg: 'layers',
  'no-sound': 'mute',
};

export const categoryTones: Record<string, string> = {
  安装: 'blue',
  录音: 'rose',
  剪辑: 'violet',
  声音处理: 'teal',
  导出: 'amber',
  排查: 'orange',
};

export const platformIcons: Record<string, string> = { windows: 'windows', macos: 'macos', linux: 'linux' };
export const platformShort: Record<string, string> = { windows: 'x64 · ARM64 · 32 位旧版', macos: 'Apple 芯片 · Intel · 通用版', linux: 'x86_64 · ARM64 AppImage' };

// 下载页“电脑类型”选项：顺序、名称与判断方法。
export const archChoices: Record<string, { id: string; label: string; short: string; hint: string }[]> = {
  windows: [
    { id: 'x64', label: 'Intel / AMD x64', short: 'x64', hint: '系统类型显示“基于 x64 的处理器”，普通电脑选这个' },
    { id: 'arm64', label: 'ARM64', short: 'ARM64', hint: '系统类型显示“基于 ARM 的处理器”' },
    { id: 'x86', label: '32 位', short: '32 位', hint: '32 位 Windows 系统' },
  ],
  macos: [
    { id: 'universal', label: '通用版', short: '通用版', hint: '同时包含两种芯片的程序，不确定时选；文件较大' },
    { id: 'arm64', label: 'Apple 芯片（M 系列）', short: 'Apple 芯片', hint: '“关于本机”显示 Apple M1、M2 等' },
    { id: 'x64', label: 'Intel 芯片', short: 'Intel', hint: '“关于本机”显示 Intel 处理器' },
  ],
  linux: [
    { id: 'x64', label: 'x86_64', short: 'x86_64', hint: '终端运行 uname -m 显示 x86_64' },
    { id: 'arm64', label: 'ARM64 / aarch64', short: 'ARM64', hint: '终端运行 uname -m 显示 aarch64' },
  ],
};

// 网盘方块上的简称与品牌色，不使用平台商标图片。
export const providerBadges: Record<string, { short: string; color: string }> = {
  quark: { short: '夸', color: '#3b5bfd' },
  uc: { short: 'UC', color: '#f26b1d' },
  xunlei: { short: '迅', color: '#1a8cff' },
  baidu: { short: '百', color: '#2f6fe4' },
};
