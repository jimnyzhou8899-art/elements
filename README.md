# 原本 · 动手学数学与科学

首页按学科分组：**数学**是本站自己的欧几里得《几何原本》第一卷交互演示；**物理、化学、生物、地理**是
[铜匠实验室](https://lab.tongjiang.app)的 54 门 3D 互动课件，在本站的 `/lab/<slug>` 页面里打开。

> 铜匠实验室的课件原以 CC BY-NC 4.0（署名—非商业性使用）公开，本站已取得作者授权使用（含带广告的商业使用）。
> 首页和每个课件页都注明出处，`lab/NOTICE.md` 写明来源和课件里打包的 three.js（MIT）许可。

## 数学：几何原本 · 卷一

欧几里得《几何原本》第一卷的交互网站：23 条定义、5 条公设、5 条公理，48 个命题的陈述，
以及可拖动的尺规作图与逐步证明动画。

## 目前的内容

- **开篇**：定义、公设、公理全文。
- **交互命题**：第一卷全部 48 个命题（I.1 作等边三角形 … I.47 勾股定理、I.48 其逆定理）。
  图中红圈的点可以拖动，图形随之改变而证明每一步仍然成立；证明可以逐步播放，每一步都标出所依据的
  公设、公理、定义或前面的命题。反证法的命题（如 I.6、I.7、I.14、I.19、I.27、I.39）里，按假设画出的点会在文字里注明。
- **自由作图**：点、线段、直线、圆四个工具，交点自动吸附，并随原来的点一起移动。
- **访客数**：页头语言切换旁显示累计访问次数（阿拉伯语下在右侧），同一浏览器会话只计一次。
- **关于、隐私政策、联系**：页脚链接，9 种语言；隐私政策写明了 Google 广告 Cookie。

## 多语言

支持 9 种语言：中文、English、Español、Français、Deutsch、Русский、العربية（从右到左排版）、हिन्दी、日本語。
右上角可以切换，选择会记在浏览器里，网址也会带上 `?lang=xx`，可以直接分享某个语言的链接（例如 `/p/47?lang=ja`）。
第一次打开时按浏览器语言自动选择。

界面文字、定义、公设、公理和 48 个命题的陈述在 `i18n/<语言代码>.js` 里；每个交互命题的图形、步骤和 9 种语言的
证明文字在 `props/pNN.js` 里，打开该命题时才加载。图中的字母 A、B、C… 各语言通用，每一步里出现的字母
各语言必须和中文版一致。英文以 Heath 的英译本为底本；其他语言的译文没有经过母语者审校。

## 运行

没有依赖。`index.html` 是模板，`build.mjs` 用它为每个页面、每种语言生成一份已经写好标题和正文的 HTML，放进 `dist/`：

```sh
node build.mjs && node serve.mjs
```

然后打开 http://localhost:8000 。`serve.mjs` 按 `vercel.json` 的规则提供 `dist/`（干净 URL、`?lang=`、404），只用于本地预览。

## 网址

- 每个视图有自己的地址：`/` 是学科首页，`/p/1` … `/p/48`，`/intro`（定义、公设、公理），`/sandbox`（作图板），
  `/about`、`/privacy`、`/contact`。站内链接不刷新页面；旧的 `#p12` 链接会自动换成 `/p/12`。
- 不带 `?lang=` 的地址预先生成的是英文（`dist/_l/x/p/12.html`），打开后页面照旧按浏览器语言或上次的选择切换；
  `/p/12?lang=fr` 改写到 `dist/_l/fr/p/12.html`，直接就是法文（都由 `vercel.json` 的 rewrites 完成；Vercel 会先找同名文件，所以 `dist/` 根目录下不放页面）。
- 视图的共用标记（目录、命题页、关于/隐私/联系页、地址规则）在 `render.js`，页面和 `build.mjs` 都用它，所以预先生成的内容和页面自己画的一致。
- 关于、隐私政策、联系页面的 9 种语言文字在 `pages/<语言代码>.js`。
- 首页和课件页的文字在 `i18n/<语言代码>.js` 的 `hub` 里；理科课件列表在 `lab.js`（从铜匠实验室的 `catalog.json` 整理，课件是中文界面，
  中文以外的语言显示英文标题）。
- 课件：`lab/files/<slug>.html` 是原样的单文件课件，`lab/covers/` 是封面。`/lab/<slug>` 是本站的课件页（页头、出处、广告，
  中间用 iframe 打开课件）；课件左上角的“目录”会回到首页对应学科。

## 部署

Vercel 上 `vercel.json` 已经写好 `buildCommand: node build.mjs` 和 `outputDirectory: dist`，不需要别的设置。

- **访客计数**：`api/visits.js` 是一个 Vercel Function，计数存在 Upstash Redis（在 Vercel 的 Storage 里连接到项目，
  会自动注入 `KV_REST_API_URL`/`KV_REST_API_TOKEN` 或 `UPSTASH_REDIS_REST_URL`/`UPSTASH_REDIS_REST_TOKEN`）。
  没有配置时接口返回 503，页面上就不显示计数。
- **Web Analytics**：页面里引用了 `/_vercel/insights/script.js`，需要在 Vercel 项目的 Analytics 页面点 Enable。

## 站点设置（`site.config.json`）

- `site`：正式域名，例如 `https://example.com`。换域名只改这里，canonical、hreflang、sitemap、robots、分享图地址都跟着变。
- `contactEmail`：联系页面上显示的邮箱，留空就只显示 GitHub issues。
- `policyDate`：隐私政策顶部的“最后更新”日期。
- `adsense.client` / `adsense.slot`：AdSense 发布商 ID（`ca-pub-…`）和广告单元 ID。也可以在 Vercel 的环境变量里设
  `ADSENSE_CLIENT` / `ADSENSE_SLOT`，会覆盖这里的值。
  - 只填 `client`：每页 `<head>` 里加上 AdSense 代码和 `google-adsense-account` 标记（申请审核用），`ads.txt` 写上发布商 ID。
  - 再填 `slot`：在证明下方显示一个自适应广告位（不压在作图区上，也不影响拖动），关于/隐私/联系页面不放。
  - 都不填：没有任何广告代码，`ads.txt` 只有一行说明。
  - `adsense.multiplexSlot`（环境变量 `ADSENSE_MULTIPLEX_SLOT`）：第二个广告单元（多重广告，`autorelaxed`），放在页脚上方，横跨整页。
  - 现在填的是 `ca-pub-9040644887436670`，证明下方是广告单元 `8395410975`（AdSense 里叫 toubuguangao），页脚上方是多重广告 `9233849923`。

## SEO

- 每个页面、每种语言都有自己的 `<title>`、description、canonical、Open Graph，以及 hreflang 互指和 `x-default`；
  在页面里切换时同步更新。
- `sitemap.xml`、`robots.txt`、`ads.txt` 由 `build.mjs` 生成；`favicon.svg`、分享图 `og.png`（1200×630），
  以及 schema.org 的 `LearningResource` 结构化数据。
- 不运行 JavaScript 的爬虫也能看到完整的目录、命题陈述和证明步骤文字。

## 图形是怎么画的

页面自带一个很小的几何引擎（`index.html` 里的 `Scene` 和 `Renderer`）：每个点、线、圆都按
依赖关系求值，所以拖动一个自由点时，交点、等边三角形的顶点、垂足等都会跟着重新计算。配色取自
Byrne 1847 年的彩色版《几何原本》。

后续可以把绘图部分换成 [GeoGebra Apps API](https://www.geogebra.org/manual/en/Reference:GeoGebra_Apps_Embedding)
（`deployggb.js`）——那需要页面能从 geogebra.org 加载脚本，自有域名上没有问题。
