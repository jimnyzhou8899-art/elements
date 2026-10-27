// Proposition I.36
PROP(36, {
  vb: [0, 0, 720, 400],
  build(S) {
    S.free("B", 30, 330, { ld: { x: 0, y: 1 } }); S.free("C", 210, 330, { ld: { x: 0, y: 1 } });
    S.free("A", 80, 100, { ld: { x: 0, y: -1 } });
    const w = g => V.sub(g("C"), g("B"));
    const along = (o, lo, hi) => (g, m) => Math.min(hi, Math.max(lo, V.dot(V.sub(m, g(o)), w(g)) / V.dot(w(g), w(g))));
    S.pt("D", g => V.add(g("A"), w(g)), { ld: { x: 0, y: -1 } });
    S.glide("F", 2.1, (g, t) => V.add(g("B"), V.mul(w(g), t)), along("B", 1.1, 2.4), { ld: { x: 0, y: 1 } });
    S.pt("G", g => V.add(g("F"), w(g)), { ld: { x: 0, y: 1 } });
    S.glide("E", 1.6, (g, t) => V.add(g("A"), V.mul(w(g), t)), along("A", 1.05, 2.6), { ld: { x: 0, y: -1 } });
    S.pt("H", g => V.add(g("E"), w(g)), { ld: { x: 0, y: -1 } });
    S.poly("qABCD", ["A", "B", "C", "D"], { st: "red" }); S.poly("qEFGH", ["E", "F", "G", "H"], { st: "blue" });
    S.poly("qEBCH", ["E", "B", "C", "H"], { st: "yel" });
    S.seg("AD", "A", "D"); S.seg("AB", "A", "B"); S.seg("BC", "B", "C"); S.seg("CD", "C", "D");
    S.seg("EH", "E", "H"); S.seg("EF", "E", "F"); S.seg("FG", "F", "G"); S.seg("GH", "G", "H");
    S.seg("DE", "D", "E", { st: "aux" }); S.seg("CF", "C", "F", { st: "aux" });
    S.seg("BE", "B", "E"); S.seg("CH", "C", "H");
  },
  steps: [
    { show: ["A", "B", "C", "D", "E", "F", "G", "H", "AD", "AB", "BC", "CD", "EH", "EF", "FG", "GH", "DE", "CF"] },
    { show: ["BE", "CH"], why: ["P1"] },
    { hl: ["BC", "FG", "EH"], why: ["I.34", "A1"] },
    { show: ["qEBCH"], hl: ["BE", "CH"], why: ["I.33"] },
    { show: ["qABCD"], why: ["I.35"] },
    { show: ["qEFGH"], hide: ["qABCD"], why: ["I.35"] },
    { show: ["qABCD"], hide: ["qEBCH"], why: ["A1"] }
  ],
  text: {
    zh: [
      "设 ABCD、EFGH 是在相等的底 BC、FG 上、并且在同一对平行线 AH、BG 之间的平行四边形。断言：平行四边形 ABCD 等于平行四边形 EFGH。（拖动各点试试。）",
      "连接 BE、CH。",
      "因为 BC 等于 FG，而 FG 等于 EH，所以 BC 等于 EH，而且它们平行。",
      "连接它们端点的 EB、HC 也相等且平行，所以 EBCH 是平行四边形。",
      "平行四边形 EBCH 与 ABCD 在同一底 BC 上、在同一对平行线之间，所以 EBCH 等于 ABCD。",
      "同理，EBCH 与 EFGH 在同一底 EH 上，所以 EBCH 等于 EFGH。",
      "所以平行四边形 ABCD 等于平行四边形 EFGH。"
    ],
    en: [
      "Let ABCD, EFGH be parallelograms on the equal bases BC, FG and in the same parallels AH, BG. The claim: the parallelogram ABCD is equal to the parallelogram EFGH. (Try dragging the points.)",
      "Let BE, CH be joined.",
      "Since BC is equal to FG, and FG is equal to EH, BC is also equal to EH; and they are parallel.",
      "So EB, HC, which join them at their ends, are also equal and parallel; therefore EBCH is a parallelogram.",
      "The parallelogram EBCH is on the same base BC as ABCD and in the same parallels; therefore EBCH is equal to ABCD.",
      "For the same reason, EBCH is on the same base EH as EFGH; therefore EBCH is equal to EFGH.",
      "Therefore the parallelogram ABCD is equal to the parallelogram EFGH."
    ],
    es: [
      "Sean ABCD, EFGH paralelogramos sobre las bases iguales BC, FG y entre las mismas paralelas AH, BG. Se afirma que el paralelogramo ABCD es igual al paralelogramo EFGH. (Prueba a arrastrar los puntos.)",
      "Trácense BE, CH.",
      "Como BC es igual a FG, y FG es igual a EH, BC es también igual a EH; y son paralelas.",
      "Así, EB, HC, que las unen por sus extremos, son también iguales y paralelas; por tanto EBCH es un paralelogramo.",
      "El paralelogramo EBCH está sobre la misma base BC que ABCD y entre las mismas paralelas; por tanto EBCH es igual a ABCD.",
      "Por la misma razón, EBCH está sobre la misma base EH que EFGH; por tanto EBCH es igual a EFGH.",
      "Por tanto el paralelogramo ABCD es igual al paralelogramo EFGH."
    ],
    fr: [
      "Soient ABCD, EFGH des parallélogrammes sur les bases égales BC, FG et entre les mêmes parallèles AH, BG. Je dis que le parallélogramme ABCD est égal au parallélogramme EFGH. (Essayez de déplacer les points.)",
      "Menons BE, CH.",
      "Puisque BC est égale à FG, et FG égale à EH, BC est aussi égale à EH ; et elles sont parallèles.",
      "Donc EB, HC, qui les joignent par leurs extrémités, sont aussi égales et parallèles ; donc EBCH est un parallélogramme.",
      "Le parallélogramme EBCH est sur la même base BC que ABCD et entre les mêmes parallèles ; donc EBCH est égal à ABCD.",
      "Pour la même raison, EBCH est sur la même base EH que EFGH ; donc EBCH est égal à EFGH.",
      "Donc le parallélogramme ABCD est égal au parallélogramme EFGH."
    ],
    de: [
      "ABCD, EFGH seien Parallelogramme auf den gleichen Grundlinien BC, FG und zwischen denselben Parallelen AH, BG. Behauptung: Das Parallelogramm ABCD ist dem Parallelogramm EFGH gleich. (Ziehen Sie die Punkte.)",
      "Man ziehe BE, CH.",
      "Da BC gleich FG und FG gleich EH ist, ist auch BC gleich EH; und sie sind parallel.",
      "Also sind auch EB, HC, die sie an den Enden verbinden, gleich und parallel; also ist EBCH ein Parallelogramm.",
      "Das Parallelogramm EBCH steht auf derselben Grundlinie BC wie ABCD und zwischen denselben Parallelen; also ist EBCH gleich ABCD.",
      "Aus demselben Grund steht EBCH auf derselben Grundlinie EH wie EFGH; also ist EBCH gleich EFGH.",
      "Also ist das Parallelogramm ABCD dem Parallelogramm EFGH gleich."
    ],
    ru: [
      "Пусть ABCD, EFGH — параллелограммы на равных основаниях BC, FG и между одними и теми же параллельными AH, BG. Утверждается, что параллелограмм ABCD равен параллелограмму EFGH. (Попробуйте перетащить точки.)",
      "Проведём BE, CH.",
      "Так как BC равна FG, а FG равна EH, то и BC равна EH; и они параллельны.",
      "Значит, и EB, HC, соединяющие их концы, равны и параллельны; следовательно, EBCH — параллелограмм.",
      "Параллелограмм EBCH стоит на том же основании BC, что и ABCD, и между теми же параллельными; значит, EBCH равен ABCD.",
      "По той же причине EBCH стоит на том же основании EH, что и EFGH; значит, EBCH равен EFGH.",
      "Итак, параллелограмм ABCD равен параллелограмму EFGH."
    ],
    ar: [
      "ليكن ABCD، EFGH متوازيي أضلاع على قاعدتين متساويتين BC، FG وبين خطين متوازيين بعينهما AH، BG. فنقول: إن متوازي الأضلاع ABCD مساوٍ لمتوازي الأضلاع EFGH. (جرّب سحب النقاط.)",
      "نصل BE، CH.",
      "لأن BC مساوٍ لـ FG، وFG مساوٍ لـ EH، فـ BC أيضًا مساوٍ لـ EH، وهما متوازيان.",
      "فالخطان EB، HC الواصلان بين طرفيهما متساويان متوازيان أيضًا؛ فـ EBCH متوازي أضلاع.",
      "ومتوازي الأضلاع EBCH على القاعدة نفسها BC مع ABCD وبين المتوازيين نفسيهما؛ فـ EBCH مساوٍ لـ ABCD.",
      "ولمثل ذلك EBCH على القاعدة نفسها EH مع EFGH؛ فـ EBCH مساوٍ لـ EFGH.",
      "فمتوازي الأضلاع ABCD مساوٍ لمتوازي الأضلاع EFGH."
    ],
    hi: [
      "मान लीजिए ABCD, EFGH बराबर आधारों BC, FG पर और एक ही समांतर रेखाओं AH, BG के बीच स्थित समांतर चतुर्भुज हैं। दावा: समांतर चतुर्भुज ABCD समांतर चतुर्भुज EFGH के बराबर है। (बिंदुओं को खींचकर देखिए।)",
      "BE, CH मिलाइए।",
      "चूँकि BC, FG के बराबर है, और FG, EH के बराबर है, इसलिए BC भी EH के बराबर है; और वे समांतर हैं।",
      "अतः उनके सिरों को जोड़ने वाली EB, HC भी बराबर और समांतर हैं; इसलिए EBCH समांतर चतुर्भुज है।",
      "समांतर चतुर्भुज EBCH, ABCD के साथ एक ही आधार BC पर और एक ही समांतर रेखाओं के बीच है; अतः EBCH, ABCD के बराबर है।",
      "इसी कारण EBCH, EFGH के साथ एक ही आधार EH पर है; अतः EBCH, EFGH के बराबर है।",
      "इसलिए समांतर चतुर्भुज ABCD समांतर चतुर्भुज EFGH के बराबर है।"
    ],
    ja: [
      "ABCD、EFGH を等しい底辺 BC、FG の上にあり、同じ平行線 AH、BG の間にある平行四辺形とする。主張：平行四辺形 ABCD は平行四辺形 EFGH に等しい。（点をドラッグしてみてください。）",
      "BE、CH を結ぶ。",
      "BC は FG に等しく、FG は EH に等しいから、BC も EH に等しい。そしてこれらは平行である。",
      "よってその端を結ぶ EB、HC も等しく平行であり、EBCH は平行四辺形である。",
      "平行四辺形 EBCH は ABCD と同じ底辺 BC の上にあり、同じ平行線の間にある。よって EBCH は ABCD に等しい。",
      "同じ理由で、EBCH は EFGH と同じ底辺 EH の上にある。よって EBCH は EFGH に等しい。",
      "ゆえに平行四辺形 ABCD は平行四辺形 EFGH に等しい。"
    ]
  }
});
