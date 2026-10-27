// Proposition I.41
PROP(41, {
  vb: [0, 0, 720, 400],
  build(S) {
    S.free("B", 80, 330, { ld: { x: 0, y: 1 } }); S.free("C", 320, 330, { ld: { x: 0, y: 1 } });
    S.free("A", 140, 90, { ld: { x: 0, y: -1 } });
    const w = g => V.sub(g("C"), g("B"));
    S.pt("D", g => V.add(g("A"), w(g)), { ld: { x: 0, y: -1 } });
    S.glide("E", 1.7, (g, t) => V.add(g("A"), V.mul(w(g), t)),
      (g, m) => Math.min(2.3, Math.max(-0.8, V.dot(V.sub(m, g("A")), w(g)) / V.dot(w(g), w(g)))), { ld: { x: 0, y: -1 } });
    S.poly("tABC", ["A", "B", "C"], { st: "red" }); S.poly("tACD", ["A", "C", "D"], { st: "red" });
    S.poly("tEBC", ["E", "B", "C"], { st: "blue" });
    S.seg("AB", "A", "B"); S.seg("BC", "B", "C"); S.seg("CD", "C", "D"); S.seg("AD", "A", "D");
    S.seg("DE", "D", "E", { st: "aux" }); S.seg("EB", "E", "B"); S.seg("EC", "E", "C");
    S.seg("AC", "A", "C", { st: "aux" });
  },
  steps: [
    { show: ["A", "B", "C", "D", "E", "AB", "BC", "CD", "AD", "DE", "EB", "EC"] },
    { show: ["AC"], why: ["P1"] },
    { show: ["tABC", "tEBC"], why: ["I.37"] },
    { show: ["tACD"], hl: ["AC"], why: ["I.34"] }
  ],
  text: {
    zh: [
      "设平行四边形 ABCD 与三角形 EBC 在同一底 BC 上、在同一对平行线 BC、AE 之间。断言：平行四边形 ABCD 是三角形 BEC 的两倍。（拖动 A、B、C 或 E 试试。）",
      "连接 AC。",
      "三角形 ABC 与三角形 EBC 在同一底 BC 上、在同一对平行线 BC、AE 之间，所以相等。",
      "对角线 AC 平分平行四边形 ABCD，所以 ABCD 是三角形 ABC 的两倍，因而也是三角形 EBC 的两倍。"
    ],
    en: [
      "Let the parallelogram ABCD have the same base BC with the triangle EBC, and let it be in the same parallels BC, AE. The claim: the parallelogram ABCD is double of the triangle BEC. (Try dragging A, B, C or E.)",
      "Let AC be joined.",
      "The triangle ABC is equal to the triangle EBC, for it is on the same base BC with it and in the same parallels BC, AE.",
      "But the diameter AC bisects the parallelogram ABCD, so ABCD is double of the triangle ABC; therefore it is also double of the triangle EBC."
    ],
    es: [
      "Tenga el paralelogramo ABCD la misma base BC que el triángulo EBC, y esté entre las mismas paralelas BC, AE. Se afirma que el paralelogramo ABCD es el doble del triángulo BEC. (Prueba a arrastrar A, B, C o E.)",
      "Trácese AC.",
      "El triángulo ABC es igual al triángulo EBC, pues está sobre la misma base BC y entre las mismas paralelas BC, AE.",
      "Pero la diagonal AC divide el paralelogramo ABCD en dos partes iguales, así que ABCD es el doble del triángulo ABC; por tanto es también el doble del triángulo EBC."
    ],
    fr: [
      "Que le parallélogramme ABCD ait la même base BC que le triangle EBC, et soit entre les mêmes parallèles BC, AE. Je dis que le parallélogramme ABCD est double du triangle BEC. (Essayez de déplacer A, B, C ou E.)",
      "Menons AC.",
      "Le triangle ABC est égal au triangle EBC, car il est sur la même base BC et entre les mêmes parallèles BC, AE.",
      "Mais la diagonale AC partage le parallélogramme ABCD en deux parties égales, donc ABCD est double du triangle ABC ; il est donc aussi double du triangle EBC."
    ],
    de: [
      "Das Parallelogramm ABCD habe mit dem Dreieck EBC dieselbe Grundlinie BC und liege zwischen denselben Parallelen BC, AE. Behauptung: Das Parallelogramm ABCD ist doppelt so groß wie das Dreieck BEC. (Ziehen Sie A, B, C oder E.)",
      "Man ziehe AC.",
      "Das Dreieck ABC ist dem Dreieck EBC gleich, denn es steht auf derselben Grundlinie BC und zwischen denselben Parallelen BC, AE.",
      "Die Diagonale AC halbiert aber das Parallelogramm ABCD, also ist ABCD doppelt so groß wie das Dreieck ABC und damit auch doppelt so groß wie das Dreieck EBC."
    ],
    ru: [
      "Пусть параллелограмм ABCD имеет то же основание BC, что и треугольник EBC, и находится между теми же параллельными BC, AE. Утверждается, что параллелограмм ABCD вдвое больше треугольника BEC. (Попробуйте перетащить A, B, C или E.)",
      "Проведём AC.",
      "Треугольник ABC равен треугольнику EBC, ибо он стоит на том же основании BC и между теми же параллельными BC, AE.",
      "Но диаметр AC делит параллелограмм ABCD пополам, так что ABCD вдвое больше треугольника ABC; значит, он вдвое больше и треугольника EBC."
    ],
    ar: [
      "ليكن متوازي الأضلاع ABCD على القاعدة نفسها BC مع المثلث EBC، وبين المتوازيين نفسيهما BC، AE. فنقول: إن متوازي الأضلاع ABCD ضعف المثلث BEC. (جرّب سحب A أو B أو C أو E.)",
      "نصل AC.",
      "المثلث ABC مساوٍ للمثلث EBC، لأنهما على القاعدة نفسها BC وبين المتوازيين نفسيهما BC، AE.",
      "لكن القطر AC ينصّف متوازي الأضلاع ABCD، فـ ABCD ضعف المثلث ABC؛ فهو إذن ضعف المثلث EBC أيضًا."
    ],
    hi: [
      "मान लीजिए समांतर चतुर्भुज ABCD और त्रिभुज EBC का आधार एक ही BC है, और वे एक ही समांतर रेखाओं BC, AE के बीच हैं। दावा: समांतर चतुर्भुज ABCD त्रिभुज BEC का दुगुना है। (A, B, C या E को खींचकर देखिए।)",
      "AC मिलाइए।",
      "त्रिभुज ABC त्रिभुज EBC के बराबर है, क्योंकि वे एक ही आधार BC पर और एक ही समांतर रेखाओं BC, AE के बीच हैं।",
      "पर विकर्ण AC समांतर चतुर्भुज ABCD को समद्विभाजित करता है, अतः ABCD त्रिभुज ABC का दुगुना है; इसलिए वह त्रिभुज EBC का भी दुगुना है।"
    ],
    ja: [
      "平行四辺形 ABCD が三角形 EBC と同じ底辺 BC をもち、同じ平行線 BC、AE の間にあるとする。主張：平行四辺形 ABCD は三角形 BEC の 2 倍である。（A、B、C、E をドラッグしてみてください。）",
      "AC を結ぶ。",
      "三角形 ABC は三角形 EBC に等しい。同じ底辺 BC の上、同じ平行線 BC、AE の間にあるからである。",
      "しかし対角線 AC は平行四辺形 ABCD を 2 等分するから、ABCD は三角形 ABC の 2 倍である。よって三角形 EBC の 2 倍でもある。"
    ]
  }
});
