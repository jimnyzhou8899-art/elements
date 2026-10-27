// Local preview of dist/ that answers like Vercel does with vercel.json: clean URLs, the _l/ copies, /p/1 → /, 404 page.
//   node build.mjs && node serve.mjs   →   http://localhost:8000
// /api/visits is not served here, so the visit counter stays hidden.
import http from "node:http";
import fs from "node:fs";
import path from "node:path";

const DIST = path.join(path.dirname(new URL(import.meta.url).pathname), "dist");
const vercel = JSON.parse(fs.readFileSync(new URL("./vercel.json", import.meta.url), "utf8"));
const TYPES = { ".html": "text/html; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".svg": "image/svg+xml", ".png": "image/png", ".xml": "application/xml", ".txt": "text/plain; charset=utf-8" };
// path-to-regexp subset used in vercel.json: /:name(regex) and literal segments
const compile = src => new RegExp("^" + src.replace(/:(\w+)\(([^)]*)\)/g, "(?<$1>$2)").replace(/:(\w+)/g, "(?<$1>[^/]+)") + "$");
const subst = (dest, groups) => dest.replace(/:(\w+)/g, (m, k) => groups[k] ?? m);

http.createServer((req, res) => {
  const u = new URL(req.url, "http://localhost");
  let p = decodeURIComponent(u.pathname);
  for (const r of vercel.redirects || []) {
    const m = p.match(compile(r.source));
    if (m) { res.writeHead(r.permanent ? 308 : 307, { Location: subst(r.destination, m.groups || {}) + u.search }); return res.end(); }
  }
  // like Vercel: an existing file wins over the rewrites
  const exists = x => { const f = path.join(DIST, x); return f.startsWith(DIST) && fs.existsSync(f) && fs.statSync(f).isFile(); };
  if (!exists(p) && !exists(p + ".html")) for (const r of vercel.rewrites || []) {
    const m = p.match(compile(r.source));
    if (!m) continue;
    const groups = { ...m.groups };
    const ok = (r.has || []).every(h => {
      const v = u.searchParams.get(h.key);
      const hm = v != null && v.match(new RegExp("^" + h.value + "$"));
      if (hm) Object.assign(groups, hm.groups);
      return hm;
    });
    if (ok) { p = subst(r.destination, groups); break; }
  }
  const tryFiles = [p, p.endsWith("/") ? p + "index.html" : p + ".html"];
  const f = tryFiles.map(x => path.join(DIST, x)).find(x => x.startsWith(DIST) && fs.existsSync(x) && fs.statSync(x).isFile());
  const file = f || path.join(DIST, "404.html");
  res.writeHead(f ? 200 : 404, { "Content-Type": TYPES[path.extname(file)] || "application/octet-stream", "Cache-Control": "no-cache" });
  fs.createReadStream(file).pipe(res);
}).listen(process.env.PORT || 8000, () => console.log(`http://localhost:${process.env.PORT || 8000}`));
