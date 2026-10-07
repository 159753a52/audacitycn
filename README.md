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

编辑 `src/data/downloads.json` 的 `mirrors`。分享链接必须来自你已经获准推广且完成渠道绑定的账号；不要将别人的分享链接视为自己的推广链接。

- `enabled`：开启后显示网盘按钮；关闭时不显示空白二维码或未完成的入口。
- `url`：完整 HTTPS 分享链接，夸克必须使用 `pan.quark.cn/s/…`，百度必须使用 `pan.baidu.com/s/…`。
- `code`：提取码，可为空。
- `version` 与 `fileLabel`：实际分享的版本与内容，例如 `4.0.1` / `Windows x64 MSI 安装包及对应源码`。
- `affiliate`：推广链接设为 true，页面会展示佣金说明并为链接加 `sponsored`。

构建时由 qrcode 本地生成二维码，扫码与直接打开使用完全相同的 URL。页面支持弹窗、ESC 关闭、点击遮罩关闭、焦点恢复、复制链接和提取码。没有向第三方二维码 API 发送分享链接。

## 内容与版本

`src/data/guides.ts` 是教程内容。4.x 与 3.x 操作差异需要明确标注，不能机械替换版本号。下载文件来源和 SHA-256 核对官方 Windows 下载页；每次修改链接都要更新真实核对日期。官网安装包链接可能因版本发布发生变化。

镜像分发时保留版权与许可证，并按相应许可证提供匹配版本源码。软件本身免费，不得把网盘会员描述为使用 Audacity 的必要条件。

## 发布检查

构建末尾自动检查 h1、canonical、描述、站内链接、sitemap、下载链接域名及校验值。`npm run indexnow` 只在正式域名线上密钥可访问时提交，收录和排名由搜索引擎决定。

反馈入口暂使用 `https://github.com/159753a52/audacitycn/issues`。网站不伪装官方，不编造使用量、评分或测试结论。
