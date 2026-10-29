// A text outline of each science lesson, for its page on the site: the lesson itself runs in a frame, so without this
// a search engine sees little more than its title.
//   node tools/lab-outline.js   -> lab/outline/<slug>.json  { zh: [step…], en: [step…] }, step = { tag, q, concl, points }
// The steps are the lesson's own array of step objects (the one whose objects carry `concl`), read from
// lab/files/<slug>.html and from its English file in lab/files/en/. Text built at run time (template ${…}) is skipped.
const fs = require("fs"), path = require("path");
const acorn = require(process.env.ACORN || "acorn");
const ROOT = path.join(__dirname, "..");

function steps(file) {
  if (!fs.existsSync(file)) return null;
  const html = fs.readFileSync(file, "utf8");
  const open = html.indexOf('<script type="module">') + '<script type="module">'.length, close = html.lastIndexOf("</script>");
  const ast = acorn.parse(html.slice(open, close), { ecmaVersion: "latest", sourceType: "module" });
  const text = n => !n ? null
    : n.type === "Literal" && typeof n.value === "string" ? n.value
    : n.type === "TemplateLiteral" && !n.expressions.length ? n.quasis[0].value.cooked
    : null;
  const clean = s => s && s.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim() || null;
  let found = null;
  (function walk(n) {
    if (found || !n || typeof n.type !== "string") return;
    if (n.type === "ArrayExpression" && n.elements.length >= 2 && n.elements.every(e => e && e.type === "ObjectExpression")) {
      const objs = n.elements.map(o => Object.fromEntries(o.properties.filter(p => p.key).map(p => [p.key.name || p.key.value, p.value])));
      if (objs.every(o => o.concl && o.q)) {
        found = objs.map(o => ({
          tag: clean(text(o.tag)), q: clean(text(o.q)), concl: clean(text(o.concl)),
          points: o.points && o.points.type === "ArrayExpression" ? o.points.elements.map(e => clean(text(e))).filter(Boolean) : []
        }));
        return;
      }
    }
    for (const k in n) {
      const v = n[k];
      if (Array.isArray(v)) v.forEach(walk); else if (v && typeof v.type === "string") walk(v);
    }
  })(ast);
  return found;
}

fs.mkdirSync(path.join(ROOT, "lab/outline"), { recursive: true });
for (const f of fs.readdirSync(path.join(ROOT, "lab/files")).filter(f => f.endsWith(".html") && f !== "index.html").sort()) {
  const slug = f.slice(0, -5);
  const zh = steps(path.join(ROOT, "lab/files", f)), en = steps(path.join(ROOT, "lab/files/en", f));
  if (!zh) { console.log(`${slug}: no step array found`); continue; }
  // points that are notes on the lesson's design ("去掉这一步…": why the step exists) are not lesson content
  zh.forEach((s, i) => {
    const keep = s.points.map(p => !/^[①-⑨]?\s*(去掉|没有新|少了这)/.test(p));
    s.points = s.points.filter((_, j) => keep[j]);
    if (en && en[i] && en[i].points.length === keep.length) en[i].points = en[i].points.filter((_, j) => keep[j]);
  });
  fs.writeFileSync(path.join(ROOT, "lab/outline", slug + ".json"), JSON.stringify(en ? { zh, en } : { zh }) + "\n");
  console.log(`${slug}: ${zh.length} steps${en ? "" : " (no English)"}`);
}
