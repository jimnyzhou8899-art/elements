// Markup shared by the page and by build.mjs, which runs this file to pre-render every page in every language.
// Everything here is a plain function of the locale T (and the page texts P), with no access to the DOM.
const LANGS = { zh: "中文", en: "English", es: "Español", fr: "Français", de: "Deutsch", ru: "Русский", ar: "العربية", hi: "हिन्दी", ja: "日本語" };
const READY = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48];
// 作 = problem (ends Q.E.F.), 证 = theorem (ends Q.E.D.), for I.1 … I.48
const KINDS = "作作作证证证证证作作作作证证证证证证证证证作作证证证证证证证作证证证证证证证证证证作证作作作证证";
const LEGAL = ["about", "privacy", "contact"];
// Subjects on the home page. Math is Euclid; the others are Tongjiang Lab's lessons (lab.js, files in lab/), used with the author's permission.
const SUBJECTS = ["math", "phys", "chem", "bio", "geo"];
const labOf = slug => (typeof LAB !== "undefined" ? LAB : []).find(x => x[0] === slug);
const labTitle = (T, x) => T.htmlLang.startsWith("zh") ? x[2] : x[3];
// Scripts that need their own serif; the rest use EB Garamond ("latin").
const FONTS = {
  zh: ["\"Noto Serif SC\", \"Songti SC\", serif", "Noto+Serif+SC:wght@400;600;900"],
  ja: ["\"Noto Serif JP\", \"Hiragino Mincho ProN\", serif", "Noto+Serif+JP:wght@400;600;900"],
  hi: ["\"Noto Serif Devanagari\", \"Kohinoor Devanagari\", serif", "Noto+Serif+Devanagari:wght@400;600;800"],
  ar: ["\"Noto Naskh Arabic\", \"Geeza Pro\", serif", "Noto+Naskh+Arabic:wght@400;600;700"]
};
const LATIN_FONT = "\"EB Garamond\", Georgia, \"Times New Roman\", serif";

function tr(s, vars) { return s.replace(/\{(\w+)\}/g, (m, k) => (k in vars ? vars[k] : m)); }
// Figure letters: runs of 1–5 capitals not touching other Latin letters (so "Tómese" or "Über" stay plain).
const fmt = s => s.replace(/(?<![\p{Script=Latin}\d])([A-Z]{1,5})(?![\p{Script=Latin}\d'’])/gu, "<var>$1</var>");
const strip = s => s.replace(/<[^>]*>/g, "");
const attr = s => strip(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;");
function refText(T, r) {
  const m = r.match(/^([DPA])(\d+)$/);
  if (m) {
    const n = +m[2];
    const [lab, arr] = m[1] === "D" ? [T.ui.def, T.defs] : m[1] === "P" ? [T.ui.post, T.posts] : [T.ui.ax, T.axioms];
    return [lab + " " + n, arr[n - 1]];
  }
  const n = +r.slice(2);
  return [T.ui.prop + " I." + n, T.props[n - 1][0]];
}

// ---------------------------------------------------------------- addresses
// Routes are "home" (the subject index at /), "p1" … "p48", "intro", "sandbox", "about", "privacy", "contact",
// and "lab/<slug>" for each science lesson (/lab/haber-step).
const pathFor = r => r === "home" ? "/" : /^p\d+$/.test(r) ? "/p/" + r.slice(1) : "/" + r;
function routeOf(path) {
  const m = path.match(/^\/p\/(\d{1,2})\/?$/);
  if (m) return +m[1] >= 1 && +m[1] <= 48 ? "p" + +m[1] : null;
  const w = path.replace(/^\/|\/$/g, "");
  const lm = w.match(/^lab\/([\w-]+)$/);
  if (lm) return labOf(lm[1]) ? w : null;
  return w === "" ? "home" : ["intro", "sandbox", ...LEGAL].includes(w) ? w : null;
}

// ---------------------------------------------------------------- head
function headTexts(T, P, r) {
  const U = T.ui, n = /^p\d+$/.test(r) ? +r.slice(1) : 0, pg = P && P[r];
  if (r === "home") return { title: T.hub.title, desc: T.hub.desc };
  if (r.startsWith("lab/")) {
    const x = labOf(r.slice(4)), t = labTitle(T, x);
    return { title: `${t} · ${T.hub.subj[x[1]]} — ${T.hub.brand}`, desc: tr(T.hub.labDesc, { t, s: T.hub.subj[x[1]] }) };
  }
  if (n) return { title: `${U.prop} I.${n} · ${T.props[n - 1][1]} — ${U.title}`, desc: `${U.prop} I.${n}${U.colon}${strip(T.props[n - 1][0])}` };
  if (r === "intro") return { title: `${U.navIntro} — ${U.title}`, desc: U.metaDesc };
  if (r === "sandbox") return { title: `${U.navSandbox} — ${U.title}`, desc: U.metaDesc };
  if (pg) return { title: `${pg.title} — ${U.title}`, desc: pg.desc };
  return { title: U.title, desc: U.metaDesc };
}

// ---------------------------------------------------------------- chrome
function navHTML(T) {
  const U = T.ui;
  return `<h2>${U.navOpen}</h2><a href="/intro" data-r="intro"><span class="n">·</span><span class="t">${U.navIntro}</span></a>` +
    `<h2>${U.navHands}</h2><a href="/sandbox" data-r="sandbox"><span class="n">·</span><span class="t">${U.navSandbox}</span></a>` +
    `<h2>${U.navProps}</h2>` + T.props.map((p, i) => `<a href="${pathFor("p" + (i + 1))}" data-r="p${i + 1}" class="${READY.includes(i + 1) ? "live" : ""}" title="${attr(p[0])}"><span class="n">${i + 1}</span><span class="t">${p[1]}</span></a>`).join("");
}
function selHTML(T) {
  const U = T.ui;
  return `<option value="home">${T.hub.home}</option><option value="intro">${U.navOpen}${U.colon}${U.navIntro}</option><option value="sandbox">${U.navSandbox}</option>` +
    T.props.map((p, i) => `<option value="p${i + 1}">${U.prop} I.${i + 1} · ${p[1]}${READY.includes(i + 1) ? " ●" : ""}</option>`).join("") +
    LEGAL.map(k => `<option value="${k}">${U[k]}</option>`).join("");
}
function footHTML(T, r) {
  const path = pathFor(r);
  return `<p class="links"><a href="/">${T.hub.home}</a>${LEGAL.map(k => `<a href="/${k}">${T.ui[k]}</a>`).join("")}</p>` +
    `<p class="langs">${Object.entries(LANGS).map(([k, v]) => `<a href="${path}?lang=${k}" lang="${k}" hreflang="${k}">${v}</a>`).join("")}</p>`;
}

// Subject links in the page header; each jumps to its section of the home page.
function subjHTML(T) {
  return SUBJECTS.map(s => `<a href="/#${s}" class="pill" data-s="${s}">${T.hub.subj[s]}</a>`).join("");
}

// ---------------------------------------------------------------- views
// The home page: Euclid as the math subject, then the science lessons from lab.js (window.LAB), which open on the lab's site.
// The lessons are in Chinese; other languages show their English titles.
function homeHTML(T, lab) {
  const U = T.ui, H = T.hub, zh = T.htmlLang.startsWith("zh");
  const section = (s, count, cards) => `<section class="subject" id="${s}" data-s="${s}">
      <div class="shead"><h2>${H.subj[s]}</h2><span class="count">${tr(H.count, { n: count })}</span></div>
      <div class="cards">${cards}</div>
    </section>`;
  const math = `<a class="card feature" href="${pathFor("p1")}">
        <svg class="emblem" viewBox="0 0 120 80" aria-hidden="true"><circle cx="45" cy="52" r="26" class="e-blue"/><circle cx="75" cy="52" r="26" class="e-red"/><path d="M45 52 L75 52 L60 26 Z" class="e-yel"/></svg>
        <span class="ct">${U.h1} · ${U.h1b}</span><span class="cd">${H.euclid}</span><span class="cm">${H.start} <span class="arr">→</span></span>
      </a>
      <a class="card" href="/intro"><span class="ct">${U.navIntro}</span><span class="cd">${U.tagline}</span><span class="cm">${U.navOpen} <span class="arr">→</span></span></a>
      <a class="card" href="/sandbox"><span class="ct">${U.navSandbox}</span><span class="cd">${U.sbTitle}</span><span class="cm">${U.navHands} <span class="arr">→</span></span></a>`;
  const lessons = s => lab.filter(x => x[1] === s);
  return `<div class="hub">
    <section class="hero">
      <p class="eyebrow">${H.brandSub}</p>
      <h1 class="hero-t">${H.hero}</h1>
      <p class="hero-p">${H.heroText}</p>
    </section>
    ${section("math", 3, math)}
    ${SUBJECTS.slice(1).map(s => section(s, lessons(s).length, lessons(s).map(x =>
      `<a class="card lesson" href="/lab/${x[0]}"><img class="cover" src="/lab/covers/${x[0]}.webp" alt="" loading="lazy" width="800" height="450"><span class="ct"${zh ? "" : ` lang="en"`}>${labTitle(T, x)}</span><span class="cm">${tr(H.steps, { n: x[4] })} <span class="arr">→</span></span></a>`).join(""))).join("")}
  </div>`;
}
function propHTML(T, n, def, texts) {
  const U = T.ui, kind = KINDS[n - 1];
  const head = `<p class="eyebrow">${U.prop} I.${n} · <span class="kind">${kind === "作" ? U.problem : U.theorem}</span></p><h2 class="stmt">${fmt(T.props[n - 1][0])}</h2>`;
  if (!def) {
    const done = READY.map(k => `<a href="${pathFor("p" + k)}">I.${k}</a>`).join(U.sep);
    return head + `<div class="todo">${tr(U.todo, { done, sandbox: `<a href="/sandbox">${U.navSandbox}</a>` })}</div>`;
  }
  const [, , w, h] = def.vb;
  return head + `
    <div class="prop">
      <div>
        <div class="plate" dir="ltr"><svg class="fig" role="img" aria-label="${tr(U.figLabel, { n: "I." + n })}" viewBox="${def.vb.join(" ")}" width="${w}" height="${h}"></svg></div>
        <div class="hint">${U.hint}</div>
      </div>
      <div>
        <div class="controls">
          <button class="btn" id="prev">${U.prev}</button>
          <button class="btn primary" id="play">${U.play}</button>
          <button class="btn" id="next">${U.next}</button>
          <span class="count" id="count" dir="ltr"></span>
        </div>
        <ol class="steps" id="steps">${def.steps.map((s, i) => {
          const why = (s.why || []).map(x => refText(T, x));
          return `<li data-i="${i}"><div>${fmt(texts[i])}${why.length ? `<div class="why">${why.map(w => `<span class="chip">${w[0]}</span>`).join("")}</div>` + why.map(w => `<div class="quote">${w[0]}${U.colon}${w[1]}</div>`).join("") : ""}</div></li>`;
        }).join("")}</ol>
        <p class="qed" id="qed" hidden>${kind === "作" ? U.qef : U.qed}</p>
      </div>
    </div>`;
}
function introHTML(T) {
  const U = T.ui, list = arr => `<ol class="deflist">${arr.map((t, i) => `<li><span class="n">${i + 1}</span><span>${t}</span></li>`).join("")}</ol>`;
  return `<div class="prose">
    <p class="eyebrow">${U.introEyebrow}</p>
    <h2>${U.defsTitle}</h2><p class="sub"><span lang="grc">ὅροι</span> · ${U.defsSub}</p>${list(T.defs)}
    <h2>${U.postsTitle}</h2><p class="sub"><span lang="grc">αἰτήματα</span> · ${U.postsSub}</p>${list(T.posts)}
    <h2>${U.axiomsTitle}</h2><p class="sub"><span lang="grc">κοιναὶ ἔννοιαι</span> · ${U.axiomsSub}</p>${list(T.axioms)}
  </div>`;
}
function sandboxHTML(T) {
  const U = T.ui;
  return `
    <p class="eyebrow">${U.sbEyebrow}</p>
    <h2 class="stmt">${U.sbTitle}</h2>
    <div class="prop">
      <div>
        <div class="tools" role="toolbar" aria-label="${U.toolbar}">
          ${["move", "point", "seg", "line", "circ"].map(t => `<button class="tool" data-t="${t}">${U.tools[t]}</button>`).join("")}
          <button class="btn" id="undo">${U.undo}</button>
          <button class="btn" id="clear">${U.clear}</button>
        </div>
        <div class="plate" dir="ltr"><svg class="fig" role="img" aria-label="${U.board}" viewBox="0 0 720 560" width="720" height="560"></svg></div>
        <div class="hint" id="shint"></div>
      </div>
      <div class="side">
        <h3>${U.howTo}</h3>
        <ul>${U.howItems.map(x => `<li>${x}</li>`).join("")}</ul>
        <h3 style="margin-top:18px">${U.tryIt}</h3>
        <ul>${U.tryItems.map(x => `<li>${fmt(x)}</li>`).join("")}</ul>
      </div>
    </div>`;
}
// One science lesson: the lab's self-contained HTML file in a frame, with the site's header and ads around it.
function labHTML(T, slug) {
  const H = T.hub, x = labOf(slug), zh = T.htmlLang.startsWith("zh");
  return `<div class="lesson-page" data-s="${x[1]}">
    <p class="crumb"><a href="/#${x[1]}">${H.subj[x[1]]}</a></p>
    <div class="lhead"><h1 class="stmt"${zh ? "" : ` lang="en"`}>${labTitle(T, x)}</h1>
      <span class="lmeta">${tr(H.steps, { n: x[4] })}${zh ? "" : ` · ${H.zhOnly}`}</span>
      <button class="btn" id="full">${H.full}</button></div>
    <div class="lframe"><iframe id="lesson" src="/lab/files/${slug}" title="${attr(labTitle(T, x))}" allow="fullscreen" allowfullscreen loading="lazy"></iframe></div>
  </div>`;
}
// About, privacy policy, contact. cfg = { repo, email, policyDate } from site.config.json.
function pageHTML(T, P, name, cfg) {
  const pg = P[name];
  const email = cfg.email ? `<p>${tr(pg.email || "{email}", { email: `<a href="mailto:${cfg.email}" dir="ltr">${cfg.email}</a>` })}</p>` : "";
  const date = new Intl.DateTimeFormat(T.htmlLang, { dateStyle: "long", timeZone: "UTC" }).format(new Date(cfg.policyDate + "T00:00:00Z"));
  return `<div class="prose legal">
    <h2 class="stmt">${pg.title}</h2>${name === "privacy" ? `<p class="updated">${tr(P.updated, { d: date })}</p>` : ""}
    ${tr(pg.body, { repo: cfg.repo, email })}
  </div>`;
}
