// English versions of the science lessons in lab/files/.
// Each lesson is one HTML file with one module script; its Chinese text lives in string and template literals.
//   node tools/lab-i18n.js extract <slug>   -> lab/i18n/<slug>.zh.json   (every distinct Chinese string, in order)
//   node tools/lab-i18n.js apply <slug>     -> lab/files/en/<slug>.html  (from lab/i18n/common.en.json + <slug>.en.json: { zh: en })
// Template literals are listed with their ${…} parts as {$0}, {$1} …, which the English must keep.
// A string missing from the .en.json stays Chinese. The output script is parsed again before it is written.
const fs = require("fs"), path = require("path");
const acorn = require(process.env.ACORN || "acorn");
const ROOT = path.join(__dirname, "..");
const CJK = /[㐀-鿿！-～　-〿]/;
const HAN = /[㐀-鿿]/;

function load(slug) {
  const html = fs.readFileSync(path.join(ROOT, "lab/files", slug + ".html"), "utf8");
  const open = html.indexOf('<script type="module">') + '<script type="module">'.length, close = html.lastIndexOf("</script>");
  return { html, open, js: html.slice(open, close) };
}
// Every string or template literal that holds Han characters, with its place in the code. A template's ${…} parts
// are kept as source (exprs) and handled again on their own, so nested strings are never edited twice.
function strings(code, expr = false) {
  const opts = { ecmaVersion: "latest", sourceType: "module" };
  const ast = expr ? acorn.parseExpressionAt(code, 0, opts) : acorn.parse(code, opts), out = [];
  (function walk(n, parent) {
    if (!n || typeof n.type !== "string") return;
    if (n.type === "Literal" && typeof n.value === "string" && HAN.test(n.value)) {
      // object keys and imports stay as they are
      if (!(parent && parent.type === "Property" && parent.key === n && !parent.computed) && !(parent && /Import|Export/.test(parent.type)))
        out.push({ start: n.start, end: n.end, kind: "lit", text: n.value });
      return;
    }
    if (n.type === "TemplateLiteral" && !(parent && parent.type === "TaggedTemplateExpression") && n.quasis.some(q => HAN.test(q.value.cooked || ""))) {
      out.push({ start: n.start, end: n.end, kind: "tpl", text: n.quasis.map((q, i) => q.value.cooked + (i < n.expressions.length ? `{$${i}}` : "")).join(""), exprs: n.expressions.map(e => code.slice(e.start, e.end)) });
      return;
    }
    for (const k in n) {
      if (k === "start" || k === "end") continue;
      const v = n[k];
      if (Array.isArray(v)) v.forEach(c => walk(c, n)); else if (v && typeof v.type === "string") walk(v, n);
    }
  })(ast, null);
  return out.sort((a, b) => a.start - b.start);
}
// All the texts in the code, nested ones included.
const texts = (code, expr) => strings(code, expr).flatMap(s => [s, ...(s.exprs || []).flatMap(e => texts(e, true))]);
// Style sheets inside the script carry Chinese only in comments, which are dropped instead of translated.
const isCss = t => /\/\*[\s\S]*?\*\//.test(t) && /[{;]\s*[\w-]+\s*:/.test(t);
const plain = t => isCss(t) ? t.replace(/\/\*[\s\S]*?\*\//g, "") : t;
// …and their content:"…" labels are listed and translated one by one.
const CONTENT = /(content\s*:\s*)(["'])([^"'\n]*?)\2/g;
const pieces = t => isCss(t) ? [...plain(t).matchAll(CONTENT)].map(m => m[3]).filter(x => HAN.test(x)) : [t];
const tplEsc = s => s.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${");

const [cmd, slug] = process.argv.slice(2);
const { html, open, js } = load(slug);
const title = (html.match(/<title>([^<]*)<\/title>/) || [])[1] || "";
if (cmd === "extract") {
  const seen = new Set(), list = [];
  for (const t of [title, ...texts(js).flatMap(s => pieces(s.text))]) if (HAN.test(t) && !seen.has(t)) { seen.add(t); list.push(t); }
  fs.mkdirSync(path.join(ROOT, "lab/i18n"), { recursive: true });
  fs.writeFileSync(path.join(ROOT, "lab/i18n", slug + ".zh.json"), JSON.stringify(list, null, 1) + "\n");
  console.log(`${slug}: ${list.length} strings, ${list.join("").length} chars`);
} else if (cmd === "apply") {
  // common.en.json holds the strings most lessons share (the lesson shell); a lesson's own file wins over it
  const read = f => fs.existsSync(f) ? JSON.parse(fs.readFileSync(f, "utf8")) : {};
  const en = { ...read(path.join(ROOT, "lab/i18n/common.en.json")), ...read(path.join(ROOT, "lab/i18n", slug + ".en.json")) };
  let missing = 0;
  const translate = (code, expr) => {
    let out = code;
    for (const s of strings(code, expr).reverse()) {
      const p = plain(s.text);
      const t = isCss(s.text) ? p.replace(CONTENT, (m, a, q, v) => HAN.test(v) && en[v] != null ? a + q + en[v].replace(/["'\\]/g, "") + q : m) : en[p];
      let rep;
      if (s.kind === "lit") { if (t == null) { missing++; continue; } rep = JSON.stringify(t); }
      else {
        const exprs = s.exprs.map(e => translate(e, true));
        const parts = (t == null ? (missing++, s.text) : t).split(/\{\$(\d+)\}/);
        const used = parts.filter((_, i) => i % 2).map(Number).sort((x, y) => x - y).join();
        if (used !== s.exprs.map((_, i) => i).join()) throw new Error(`${slug}: placeholders changed in ${JSON.stringify(t)}`);
        rep = "`" + parts.map((p, i) => i % 2 ? "${" + exprs[+p] + "}" : tplEsc(p)).join("") + "`";
      }
      out = out.slice(0, s.start) + rep + out.slice(s.end);
    }
    return out;
  };
  const out = translate(js, false);
  acorn.parse(out, { ecmaVersion: "latest", sourceType: "module" });
  const left = (out.match(/[㐀-鿿]/g) || []).length;
  let page = html.slice(0, open) + out + html.slice(open + js.length);
  page = page.replace('<html lang="zh-CN">', '<html lang="en">').replace(/<title>[^<]*<\/title>/, `<title>${(en[title] || title).replace(/</g, "&lt;")}</title>`);
  fs.mkdirSync(path.join(ROOT, "lab/files/en"), { recursive: true });
  fs.writeFileSync(path.join(ROOT, "lab/files/en", slug + ".html"), page);
  // lab.js lists the lessons that have an English file, so the site opens that one for non-Chinese visitors
  const labjs = path.join(ROOT, "lab.js"), src = fs.readFileSync(labjs, "utf8");
  const have = fs.readdirSync(path.join(ROOT, "lab/files/en")).filter(f => f.endsWith(".html")).map(f => f.slice(0, -5)).sort();
  fs.writeFileSync(labjs, src.replace(/\n?\/\/ Lessons with an English version[\s\S]*$/, "") .trimEnd() + `\n// Lessons with an English version in lab/files/en/ (written by tools/lab-i18n.js).\nwindow.LAB_EN = ${JSON.stringify(have)};\n`);
  console.log(`${slug}: ${missing} strings untranslated (only developer error messages should be left), ${left} Han characters left`);
} else throw new Error("usage: node tools/lab-i18n.js extract|apply <slug>");
