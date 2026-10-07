export const platforms = [
  {
    id: 'windows', name: 'Windows', defaultArchitecture: 'x64',
    summary: 'Intel / AMD x64、ARM64；3.7.9 另有 32 位版。',
    title: 'Audacity Windows 中文下载：x64、ARM64 与 32 位旧版',
    description: '按架构和版本选择 Audacity Windows 网盘下载。提供 4.0.1 MSI / 7Z、3.7.9 EXE / ZIP，夸克、UC、迅雷及 Windows x64 百度分享，附文件名与 SHA-256。',
    intro: '普通 Intel / AMD 电脑通常选 x64。ARM 设备和 32 位系统请先核对“设置 → 系统 → 系统信息”中的系统类型。',
    notes: [
      ['4.0.1：安装版还是便携版？', 'MSI 按向导安装；7Z 需要完整解压后运行。当前版官方测试系统是 Windows 10 / 11。ARM64 版面向 Windows 11 ARM，官方注明暂不支持插件；FFmpeg 也需要匹配 ARM 架构。'],
      ['3.7.9：保留旧工作流', '3.7.9 提供 32 位、64 位、ARM64 的 EXE 和 ZIP。需要 32 位程序或继续处理 3.x 工程时，可以选这个版本。存在 32 位安装包不代表支持所有旧版 Windows。'],
      ['安装后先做一次短录音', '首次启动先选择录音与回放设备，录制 10 秒并试听。工程保存在本机磁盘，完成后再备份到网盘。中文界面已包含在程序中，无需另找汉化包。'],
    ],
    official: 'https://www.audacityteam.org/download/windows/',
  },
  {
    id: 'macos', name: 'macOS', defaultArchitecture: 'universal',
    summary: 'Apple Silicon、Intel、通用版；DMG 与旧版 PKG。',
    title: 'Audacity Mac 中文下载：Apple Silicon、Intel 与通用版',
    description: 'Audacity macOS 网盘下载与版本选择。覆盖 4.0.1 和 3.7.9 的 Apple Silicon ARM64、Intel x64、通用版 DMG，以及 3.7.9 PKG，附安装说明与 SHA-256。',
    intro: '在苹果菜单的“关于本机”查看芯片：M 系列选 Apple Silicon，Intel 处理器选 Intel。不确定时可选通用版，再留意系统版本限制。',
    notes: [
      ['先看芯片，再看 macOS 版本', '当前 4.0.1 官方测试于 macOS 14 / 15。macOS 10.14 及更早系统不要选择通用 DMG，官方说明应使用 Intel DMG；这也不代表所有旧系统都经过测试。'],
      ['DMG 和 PKG 怎么用？', 'DMG 打开后将 Audacity 拖到“应用程序”，再从应用程序启动。3.7.9 还提供通用 PKG 安装包。首次录音时允许麦克风访问，录音无声先检查系统权限和输入设备。'],
      ['Apple Silicon 与插件', '官方当前 Apple Silicon ARM64 下载标注了插件限制。依赖已有插件的工程，升级前先备份，并核对插件及 FFmpeg 是否支持对应架构。3.x 与 4.x 的工程格式和编辑操作也有差异。'],
    ],
    official: 'https://www.audacityteam.org/download/mac/',
  },
  {
    id: 'linux', name: 'Linux', defaultArchitecture: 'x64',
    summary: '4.0.1 x86_64 / ARM64 AppImage；3.7.9 x64。',
    title: 'Audacity Linux 下载：x86_64、ARM64 AppImage 与旧版',
    description: '通过夸克、UC、迅雷获取 Audacity Linux 原始 AppImage。整理 4.0.1 x86_64 / ARM64 和 3.7.9 x64 的 20.04 / 22.04 文件，说明运行权限、FUSE 2 与 SHA-256 核对。',
    intro: '先确认系统架构。x86_64 的 Intel / AMD 电脑选 x64；aarch64 设备选 ARM64。3.7.9 的官方发布包只有这里列出的 x64 AppImage。',
    notes: [
      ['AppImage 启动前', '下载到本机目录，在文件属性中允许“作为程序执行”。当前版官方测试于 Ubuntu 22.04，运行 AppImage 需要 FUSE 2；缺少运行依赖时按发行版文档安装对应软件包。'],
      ['3.7.9 的两个 Linux 文件', '旧版发布记录分别列出 x64-20.04 和 x64-22.04 AppImage。下载页保留完整文件名，按你的系统环境选择；这两个文件都不是 ARM64 版本。'],
      ['设备与插件要单独核对', '启动后先检查录音输入和回放输出。当前 Linux ARM64 下载同样有官方标注的插件限制；发行版软件仓库中的 Audacity 版本可能与本站整理的发布包不同。'],
    ],
    official: 'https://www.audacityteam.org/download/linux/',
  },
] as const;

export const architectureNames: Record<string, string> = {
  x64: 'Intel / AMD x64', arm64: 'ARM64', universal: '通用版', x86: '32 位（仅 3.7.9）',
};
