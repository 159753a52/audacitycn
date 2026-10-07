# audacitycn.com

独立 Audacity 中文教程与下载指引站。沿用 ModelVRAM 的 Astro 静态 HTML + Cloudflare Pages + GitHub 自动部署方式，单独仓库与域名，不修改原站。

## 本地运行

```sh
npm ci
npm run dev
npm test
npm run check
npm run build
```

Cloudflare Pages：生产分支 `main`；构建命令 `npm run build`；输出目录 `dist`；Node `22.19.0`。域名为 `audacitycn.com`，配置位于 `astro.config.mjs` 与 `src/data/site.ts`。

## 网盘链接与二维码

编辑 `src/data/downloads.json` 的 `mirrors`。普通镜像使用本站维护账号创建、已核对文件的分享链接。只有完成渠道绑定和推广审核后才能将相应入口标为计佣推广；不要将别人的分享链接视为自己的推广链接。当前版与 `legacy` 旧版各自配置文件和分享。夸克、UC、迅雷均提供两套全平台文件，百度只覆盖当前 Windows x64。`scope` 限定系统与架构，`affiliate` 均为 false。百度链接、提取码和六个文件清单由站点维护者确认。迅雷使用平台原生微信小程序码，`linkEnabled: false`，未核对的普通浏览器链接不展示。

- `enabled`：开启后显示网盘按钮；关闭时不显示空白二维码或未完成的入口。
- `url`：完整 HTTPS 分享链接；支持夸克 `pan.quark.cn/s/…`、百度 `pan.baidu.com/s/…`、UC `drive.uc.cn/s/…`、迅雷 `pan.xunlei.com/s/…`。平台与域名必须对应，提取码要核对。
- `code`：提取码，可为空。
- `version` 与 `fileLabel`：实际分享的版本与内容，例如 `4.0.1` / `Windows x64 MSI 安装包及对应源码`。
- `affiliate`：推广链接设为 true，页面会展示佣金说明并为链接加 `sponsored`。

普通分享码由 qrcode 在构建时本地生成，扫码与直接打开使用相同 URL。迅雷使用平台“复制二维码”提供的原生微信小程序码，已含提取码，不另行生成普通扫码链接。下载页每次只显示所选网盘的一个二维码，普通链接及提取码支持复制。没有向第三方二维码 API 发送分享链接。

## 内容与版本

`src/data/guides.ts` 维护 8 篇教程：首屏设置、适用版本、实际核对日期、步骤、对照表、参考资料和相关问题。4.x 与 3.x 操作差异需要明确标注，不能机械替换版本号；`.aup4`、Noise only 等以当前官方手册为准。下载文件来源和 SHA-256 核对官方各系统下载页与 GitHub 对应版本 CHECKSUMS.txt。日期只在实际核对或内容更新后修改。

镜像分发时保留版权与许可证，并按相应许可证提供匹配版本源码。软件本身免费，不得把网盘会员描述为使用 Audacity 的必要条件。

## 发布检查

构建末尾检查唯一标题/描述、本页 canonical、h1、目录锚点、JSON-LD、站内链接、sitemap、下载域名及校验值。Google 所有权验证文件单独核对其精确内容，不当作文章加入 sitemap；不要移除 `public/google2d95f7b9770ef0ba.html`。`npm run indexnow` 在正式域名线上密钥可访问时提交，收录和排名由搜索引擎决定。

反馈入口暂使用 `https://github.com/159753a52/audacitycn/issues`。网站不伪装官方，不编造使用量、评分或测试结论。

Bing 站长工具所有权通过 `public/BingSiteAuth.xml` 验证；保留该文件以维持已授权的验证状态。

下载入口仅使用网盘分享链接和二维码；构建时禁止在页面或 JSON-LD 中渲染安装包直链。原始文件 URL 只用于构建期核对来源、文件名与校验值。

下载分类：`/download/` 是系统入口；`/download/windows/`、`/download/macos/`、`/download/linux/` 用单选卡片依次选择版本、电脑架构和网盘。不适用的选项保留显示并标注原因（如“仅 3.7.9”“仅 4.0.1 · x64”），切换后自动回到可用选项；每次仅显示一个二维码。安装包来源 URL 仅供构建时核对，不进入 HTML / JSON-LD。

页面样式：`src/styles/` 下分为 base（变量、页头页脚、按钮）、home、download、content 四个文件，由 global.css 引入。图标在 `src/components/Icon.astro`；教程卡片的图标与配色、各系统的架构选项文字在 `src/data/ui.ts`。首页插图是代码绘制的通用音频编辑窗口，不是 Audacity 截图。
