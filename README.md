# 几何原本 · 卷一

欧几里得《几何原本》第一卷的交互网站：23 条定义、5 条公设、5 条公理，48 个命题的陈述，
以及可拖动的尺规作图与逐步证明动画。

## 目前的内容

- **开篇**：定义、公设、公理全文。
- **交互命题**：第一卷全部 48 个命题（I.1 作等边三角形 … I.47 勾股定理、I.48 其逆定理）。
  图中红圈的点可以拖动，图形随之改变而证明每一步仍然成立；证明可以逐步播放，每一步都标出所依据的
  公设、公理、定义或前面的命题。反证法的命题（如 I.6、I.7、I.14、I.19、I.27、I.39）里，按假设画出的点会在文字里注明。
- **自由作图**：点、线段、直线、圆四个工具，交点自动吸附，并随原来的点一起移动。
- **访客数**：页头语言切换旁显示累计访问次数（阿拉伯语下在右侧），同一浏览器会话只计一次。

## 多语言

支持 9 种语言：中文、English、Español、Français、Deutsch、Русский、العربية（从右到左排版）、हिन्दी、日本語。
右上角可以切换，选择会记在浏览器里，网址也会带上 `?lang=xx`，可以直接分享某个语言的链接。
第一次打开时按浏览器语言自动选择。

界面文字、定义、公设、公理和 48 个命题的陈述在 `i18n/<语言代码>.js` 里；每个交互命题的图形、步骤和 9 种语言的
证明文字在 `props/pNN.js` 里，打开该命题时才加载。图中的字母 A、B、C… 各语言通用，每一步里出现的字母
各语言必须和中文版一致。英文以 Heath 的英译本为底本；其他语言的译文没有经过母语者审校。

## 运行

纯静态页面，没有构建步骤，没有依赖：

```sh
python3 -m http.server 8000
```

然后打开 http://localhost:8000 。

## 部署

Vercel 上作为静态站点部署即可（Framework Preset 选 Other，不需要 build 命令，
Output Directory 留空）。`vercel.json` 只设置了干净 URL 和缓存头。

- **访客计数**：`api/visits.js` 是一个 Vercel Function，计数存在 Upstash Redis（在 Vercel 的 Storage 里连接到项目，
  会自动注入 `KV_REST_API_URL`/`KV_REST_API_TOKEN` 或 `UPSTASH_REDIS_REST_URL`/`UPSTASH_REDIS_REST_TOKEN`）。
  没有配置时接口返回 503，页面上就不显示计数。
- **Web Analytics**：页面里引用了 `/_vercel/insights/script.js`，需要在 Vercel 项目的 Analytics 页面点 Enable。

## SEO

- 每种语言一个地址（`/?lang=xx`），`<head>` 里有 hreflang 互指和 `x-default`，切换语言时同步更新
  `<title>`、description、canonical 和 Open Graph 标签；打开某个命题时标题会带上命题名。
- `sitemap.xml`、`robots.txt`、`favicon.svg`、分享图 `og.png`（1200×630），以及 schema.org 的 `LearningResource` 结构化数据。
- 不运行 JavaScript 的爬虫会看到 `<noscript>` 里的中英文简介和 48 个命题列表。
- 正式域名变了的话，要改 `index.html` 里的 `SITE` 和 `<head>` 中的地址，以及 `sitemap.xml`、`robots.txt`。

## 图形是怎么画的

页面自带一个很小的几何引擎（`index.html` 里的 `Scene` 和 `Renderer`）：每个点、线、圆都按
依赖关系求值，所以拖动一个自由点时，交点、等边三角形的顶点、垂足等都会跟着重新计算。配色取自
Byrne 1847 年的彩色版《几何原本》。

后续可以把绘图部分换成 [GeoGebra Apps API](https://www.geogebra.org/manual/en/Reference:GeoGebra_Apps_Embedding)
（`deployggb.js`）——那需要页面能从 geogebra.org 加载脚本，自有域名上没有问题。
