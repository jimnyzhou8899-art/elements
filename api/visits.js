// Visit counter backed by Upstash Redis (connected through the Vercel Marketplace).
// GET /api/visits        -> { count }   read only
// GET /api/visits?hit=1  -> { count }   count this visit, then read
const KEY = "elements:visits";

module.exports = async (req, res) => {
  const url = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;
  res.setHeader("Cache-Control", "no-store");
  if (!url || !token) return res.status(503).json({ error: "counter not configured" });
  const hit = req.query && req.query.hit === "1";
  try {
    const r = await fetch(`${url}/${hit ? "incr" : "get"}/${KEY}`, { headers: { Authorization: `Bearer ${token}` } });
    if (!r.ok) throw new Error("upstash " + r.status);
    const { result } = await r.json();
    res.status(200).json({ count: Number(result) || 0 });
  } catch (e) {
    res.status(502).json({ error: "counter unavailable" });
  }
};
