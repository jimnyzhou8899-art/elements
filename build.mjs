// Builds the site into dist/: one pre-rendered HTML file per view and language, plus sitemap.xml, robots.txt and ads.txt.
//   node build.mjs
// index.html is the template. Its <!-- build:x --> blocks are filled in here using render.js, the same code the page runs,
// so a visitor (or a crawler) gets the right title, text and links before any script has loaded.
// dist/_l/x/p/12.html is I.12 with no language chosen yet (the page then picks one, as before); dist/_l/fr/p/12.html is
// the French copy. vercel.json rewrites /p/12 and /p/12?lang=fr to them. (Vercel serves an existing file before any
// rewrite, so no page may sit at its own path in dist/; and with cleanUrls the rewrite targets have no .html.)
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

const ROOT = path.dirname(new URL(import.meta.url).pathname);
const OUT = path.join(ROOT, "dist");
const TEMPLATE_ORIGIN = "https://elements-pink.vercel.app";
const read = f => fs.readFileSync(path.join(ROOT, f), "utf8");

const cfg = JSON.parse(read("site.config.json"));
const SITE = cfg.site.replace(/\/+$/, "");
// ADSENSE_CLIENT / ADSENSE_SLOT environment variables (e.g. set in Vercel) override site.config.json.
// adsense.multiplexSlot (ADSENSE_MULTIPLEX_SLOT) is a second, "autorelaxed" unit at the bottom of the page.
const ad = { client: process.env.ADSENSE_CLIENT ?? (cfg.adsense || {}).client ?? "", slot: process.env.ADSENSE_SLOT ?? (cfg.adsense || {}).slot ?? "", multiplex: process.env.ADSENSE_MULTIPLEX_SLOT ?? (cfg.adsense || {}).multiplexSlot ?? "" };
if (ad.client && !/^ca-pub-\d{10,20}$/.test(ad.client)) throw new Error(`adsense.client should look like ca-pub-1234567890123456, got "${ad.client}"`);
for (const k of ["slot", "multiplex"]) if (ad[k] && !/^\d{5,20}$/.test(ad[k])) throw new Error(`adsense ${k} should be the ad unit's number, got "${ad[k]}"`);
const CFG = { repo: cfg.repo, email: cfg.contactEmail || "", policyDate: cfg.policyDate };

// ---------------------------------------------------------------- load texts and render.js
const ctx = { LIVE: {}, I18N: {}, PAGES: {} };
ctx.window = ctx;
ctx.PROP = (n, def) => { ctx.LIVE[n] = def; };
vm.createContext(ctx);
const run = f => vm.runInContext(read(f), ctx, { filename: f });
run("lab.js");
run("render.js");
const R = vm.runInContext("({ LANGS, READY, KINDS, LEGAL, FONTS, LATIN_FONT, tr, attr, pathFor, headTexts, navHTML, selHTML, footHTML, subjHTML, homeHTML, labHTML, labOf, propHTML, introHTML, sandboxHTML, pageHTML })", ctx);
const CODES = Object.keys(R.LANGS);
for (const l of CODES) { run(`i18n/${l}.js`); run(`pages/${l}.js`); }
for (let n = 1; n <= 48; n++) run(`props/p${String(n).padStart(2, "0")}.js`);

const ROUTES = ["home", ...Array.from({ length: 48 }, (_, i) => "p" + (i + 1)), "intro", "sandbox", ...R.LEGAL, ...ctx.LAB.map(x => "lab/" + x[0])];
const hreflang = l => ctx.I18N[l].htmlLang;
const url = (r, l) => SITE + R.pathFor(r) + (l ? "?lang=" + l : "");
const esc = s => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");

// ---------------------------------------------------------------- one page
const template = read("index.html").split(TEMPLATE_ORIGIN).join(SITE);
function fill(html, name, content) {
  const re = new RegExp(`<!-- build:${name}\\b[^>]*-->[\\s\\S]*?<!-- /build:${name} -->`);
  if (!re.test(html)) throw new Error(`index.html has no build:${name} block`);
  return html.replace(re, () => content);
}
function replaceOnce(html, from, to) {
  if (!html.includes(from)) throw new Error(`index.html no longer contains ${from}`);
  return html.replace(from, () => to);
}

// lang: the language the page is pre-rendered in; inUrl: whether the address carries ?lang= (else it is the x-default copy)
function page(r, lang, inUrl, extraHead = "") {
  const T = ctx.I18N[lang], P = ctx.PAGES[lang], U = T.ui;
  const { title, desc } = R.headTexts(T, P, r);
  const self = url(r, inUrl ? lang : null);
  const n = /^p\d+$/.test(r) ? +r.slice(1) : 0;
  const head = [
    `<title>${esc(title)}</title>`,
    `<meta name="description" content="${R.attr(desc)}">`,
    `<link rel="canonical" href="${self}">`,
    ...CODES.map(l => `<link rel="alternate" hreflang="${hreflang(l)}" data-l="${l}" href="${url(r, l)}">`),
    `<link rel="alternate" hreflang="x-default" data-l="" href="${url(r, null)}">`,
    `<meta property="og:title" content="${R.attr(title)}">`,
    `<meta property="og:description" content="${R.attr(desc)}">`,
    `<meta property="og:url" content="${self}">`,
    `<meta property="og:locale" content="${hreflang(lang).replace("-", "_")}">`,
    `<link rel="preload" href="/i18n/${lang}.js" as="script">`,
    n ? `<link rel="preload" href="/props/p${String(n).padStart(2, "0")}.js" as="script">` : "",
    R.LEGAL.includes(r) ? `<link rel="preload" href="/pages/${lang}.js" as="script">` : "",
    R.FONTS[lang] && lang !== "zh" ? `<link id="font-${lang}" rel="stylesheet" href="https://fonts.googleapis.com/css2?family=${R.FONTS[lang][1]}&display=swap">` : "",
    extraHead
  ].filter(Boolean).join("\n");

  let view;
  if (r === "home") view = R.homeHTML(T, ctx.LAB);
  else if (r.startsWith("lab/")) view = R.labHTML(T, r.slice(4));
  else if (n) view = R.propHTML(T, n, ctx.LIVE[n], ctx.LIVE[n] && (ctx.LIVE[n].text[lang] || ctx.LIVE[n].text.en));
  else if (r === "intro") view = R.introHTML(T);
  else if (r === "sandbox") view = R.sandboxHTML(T);
  else view = R.pageHTML(T, P, r, CFG);
  const nav = R.navHTML(T).replace(`data-r="${r}"`, `data-r="${r}" aria-current="page"`);

  let h = template;
  const serif = (R.FONTS[lang] || [R.LATIN_FONT])[0];
  h = replaceOnce(h, '<html lang="zh-Hans">', `<html lang="${T.htmlLang}" dir="${T.dir || "ltr"}" data-baked="${lang}" data-view="${r === "home" ? "home" : r.startsWith("lab/") ? "lab" : "book"}"${R.FONTS[lang] ? "" : ' class="latin"'} style="--serif: ${R.attr(serif)}">`);
  h = fill(h, "head", head);
  h = fill(h, "ads-head", ad.client ? `<meta name="google-adsense-account" content="${ad.client}">\n<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ad.client}" crossorigin="anonymous"></script>` : "");
  // the config is a /* build:config */ comment pair inside the script
  h = h.replace(/\/\* build:config \*\/[\s\S]*?\/\* \/build:config \*\//, () => `const SITE = ${JSON.stringify(SITE)}, ADS = ${JSON.stringify({ client: ad.client || "", slot: ad.slot || "" })}, CFG = ${JSON.stringify(CFG)};`);
  h = replaceOnce(h, '<select id="lang" class="langsel"></select>', `<select id="lang" class="langsel" aria-label="${R.attr(U.language)}">${Object.entries(R.LANGS).map(([k, v]) => `<option value="${k}" lang="${k}"${k === lang ? " selected" : ""}>${v}</option>`).join("")}</select>`);
  h = replaceOnce(h, '<span id="h1a">几何原本</span> <span id="h1b" class="accent">卷一</span>', `<span id="h1a">${U.h1}</span> <span id="h1b" class="accent">${U.h1b}</span>`);
  h = replaceOnce(h, '<span class="bname" id="brand">原本</span><span class="bsub" id="brandSub"></span>', `<span class="bname" id="brand">${T.hub.brand}</span><span class="bsub" id="brandSub">${T.hub.brandSub}</span>`);
  h = replaceOnce(h, '<nav class="subjects" id="subjects"></nav>', `<nav class="subjects" id="subjects" aria-label="${R.attr(T.hub.home)}">${r === "home" ? R.subjHTML(T) : R.subjHTML(T).replace(`data-s="${r.startsWith("lab/") ? R.labOf(r.slice(4))[1] : "math"}"`, '$& aria-current="true"')}</nav>`);
  h = replaceOnce(h, '<a href="/#math" id="crumb">数学</a>', `<a href="/#math" id="crumb">${T.hub.subj.math}</a>`);
  h = replaceOnce(h, '<p id="tagline"></p>', `<p id="tagline">${U.tagline}</p>`);
  h = replaceOnce(h, '<nav id="nav">', `<nav id="nav" aria-label="${R.attr(U.contents)}">`);
  h = fill(h, "nav", nav);
  h = replaceOnce(h, '<select class="navsel" id="navsel"></select>', `<select class="navsel" id="navsel" aria-label="${R.attr(U.contents)}">${R.selHTML(T).replace(`value="${r}"`, `value="${r}" selected`)}</select>`);
  h = replaceOnce(h, '<div id="view">', `<div id="view" data-r="${r}">`);
  h = fill(h, "view", view);
  h = fill(h, "ad", ad.client && ad.slot ? `<p class="label">${U.ad}</p><ins class="adsbygoogle" style="display:block" data-ad-client="${ad.client}" data-ad-slot="${ad.slot}" data-ad-format="auto" data-full-width-responsive="true"></ins>` : "");
  h = fill(h, "ad2", ad.client && ad.multiplex ? `<p class="label">${U.ad}</p><ins class="adsbygoogle" style="display:block" data-ad-format="autorelaxed" data-ad-client="${ad.client}" data-ad-slot="${ad.multiplex}"></ins>` : "");
  h = fill(h, "foot", R.footHTML(T, r));
  return h;
}
// ---------------------------------------------------------------- write
fs.rmSync(OUT, { recursive: true, force: true });
const write = (f, s) => { const p = path.join(OUT, f); fs.mkdirSync(path.dirname(p), { recursive: true }); fs.writeFileSync(p, s); };
const fileFor = r => r === "home" ? "home.html" : R.pathFor(r).slice(1) + ".html";
// The x-default copy is pre-rendered in English: crawlers without a language preference get English from the page too.
const DEFAULT = "en";
let pages = 0;
for (const r of ROUTES) {
  write(`_l/x/${fileFor(r)}`, page(r, DEFAULT, false)); pages++;
  for (const l of CODES) { write(`_l/${l}/${fileFor(r)}`, page(r, l, true)); pages++; }
}
write("404.html", page("home", DEFAULT, false, '<meta name="robots" content="noindex">'));

for (const dir of ["i18n", "props", "pages", "lab"]) fs.cpSync(path.join(ROOT, dir), path.join(OUT, dir), { recursive: true });
for (const f of ["favicon.svg", "og.png", "render.js", "lab.js"]) fs.copyFileSync(path.join(ROOT, f), path.join(OUT, f));

write("robots.txt", `User-agent: *\nAllow: /\nDisallow: /api/\nDisallow: /_l/\nDisallow: /lab/files/\n\nSitemap: ${SITE}/sitemap.xml\n`);
// ads.txt names the accounts allowed to sell ads on this site; f08c47fec0942fa0 is Google's own certification ID.
write("ads.txt", ad.client
  ? `google.com, ${ad.client.replace(/^ca-/, "")}, DIRECT, f08c47fec0942fa0\n`
  : "# Add the AdSense publisher ID (ca-pub-…) to site.config.json and rebuild; this file then lists it.\n");

const alts = r => CODES.map(l => `    <xhtml:link rel="alternate" hreflang="${hreflang(l)}" href="${url(r, l)}"/>`).join("\n") +
  `\n    <xhtml:link rel="alternate" hreflang="x-default" href="${url(r, null)}"/>`;
const entries = ROUTES.flatMap(r => [null, ...CODES].map(l => `  <url>\n    <loc>${url(r, l)}</loc>\n${alts(r)}\n  </url>`));
write("sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${entries.join("\n")}\n</urlset>\n`);

console.log(`dist/: ${pages + 1} pages, ${entries.length} sitemap entries, ads ${ad.client ? [ad.slot && "slot", ad.multiplex && "multiplex"].filter(Boolean).join(" + ") || "script only (no slot)" : "off"}`);
