// Proposition I.38
PROP(38, {
  vb: [0, 0, 720, 400],
  build(S) {
    S.free("B", 150, 330, { ld: { x: 0, y: 1 } }); S.free("C", 300, 330, { ld: { x: 0, y: 1 } });
    S.free("A", 260, 100, { ld: { x: 0, y: -1 } });
    const w = g => V.sub(g("C"), g("B"));
    const along = (o, lo, hi) => (g, m) => Math.min(hi, Math.max(lo, V.dot(V.sub(m, g(o)), w(g)) / V.dot(w(g), w(g))));
    S.glide("E", 1.6, (g, t) => V.add(g("B"), V.mul(w(g), t)), along("B", 1.1, 2.4), { ld: { x: 0, y: 1 } });
    S.pt("F", g => V.add(g("E"), w(g)), { ld: { x: 0, y: 1 } });
    S.glide("D", 1.4, (g, t) => V.add(g("A"), V.mul(w(g), t)), along("A", 0.6, 2.4), { ld: { x: 0, y: -1 } });
    // BG parallel to CA, FH parallel to DE
    S.pt("G", g => V.add(g("A"), V.sub(g("B"), g("C"))), { ld: { x: 0, y: -1 } });
    S.pt("H", g => V.add(g("D"), w(g)), { ld: { x: 0, y: -1 } });
    S.poly("qGBCA", ["G", "B", "C", "A"], { st: "red" }); S.poly("qDEFH", ["D", "E", "F", "H"], { st: "blue" });
    S.poly("tABC", ["A", "B", "C"], { st: "red" }); S.poly("tDEF", ["D", "E", "F"], { st: "blue" });
    S.seg("AD", "A", "D"); S.seg("BC", "B", "C"); S.seg("EF", "E", "F"); S.seg("CE", "C", "E", { st: "aux" });
    S.seg("AB", "A", "B"); S.seg("CA", "C", "A"); S.seg("DE", "D", "E"); S.seg("DF", "D", "F");
    S.seg("GA", "G", "A", { st: "aux" }); S.seg("DH", "D", "H", { st: "aux" });
    S.seg("BG", "B", "G"); S.seg("FH", "F", "H");
  },
  steps: [
    { show: ["A", "B", "C", "D", "E", "F", "AD", "BC", "EF", "CE", "AB", "CA", "DE", "DF"] },
    { show: ["G", "H", "GA", "DH", "BG", "FH"], why: ["P2", "I.31"] },
    { show: ["qGBCA", "qDEFH"], why: ["I.36"] },
    { show: ["tABC", "tDEF"], hide: ["qGBCA", "qDEFH"], hl: ["AB", "DF"], why: ["I.34"] },
    { hide: ["G", "H", "GA", "DH", "BG", "FH"] }
  ],
  text: {
    zh: [
      "设 ABC、DEF 是在相等的底 BC、EF 上、并且在同一对平行线 BF、AD 之间的三角形。断言：三角形 ABC 等于三角形 DEF。（拖动各点试试。）",
      "把 AD 向两方延长到 G、H；过 B 作 BG 平行于 CA，过 F 作 FH 平行于 DE。",
      "于是 GBCA、DEFH 都是平行四边形，它们在相等的底 BC、EF 上、在同一对平行线 BF、GH 之间，所以彼此相等。",
      "对角线 AB 平分 GBCA，所以三角形 ABC 是 GBCA 的一半；对角线 DF 平分 DEFH，所以三角形 FED 是 DEFH 的一半。",
      "相等的东西的一半也彼此相等，所以三角形 ABC 等于三角形 DEF。"
    ],
    en: [
      "Let ABC, DEF be triangles on the equal bases BC, EF and in the same parallels BF, AD. The claim: the triangle ABC is equal to the triangle DEF. (Try dragging the points.)",
      "Let AD be produced in both directions to G, H; through B let BG be drawn parallel to CA, and through F let FH be drawn parallel to DE.",
      "Then each of the figures GBCA, DEFH is a parallelogram; and they are on the equal bases BC, EF and in the same parallels BF, GH; therefore they are equal.",
      "The diameter AB bisects GBCA, so the triangle ABC is half of GBCA; and the diameter DF bisects DEFH, so the triangle FED is half of DEFH.",
      "But the halves of equal things are equal to one another; therefore the triangle ABC is equal to the triangle DEF."
    ],
    es: [
      "Sean ABC, DEF triángulos sobre las bases iguales BC, EF y entre las mismas paralelas BF, AD. Se afirma que el triángulo ABC es igual al triángulo DEF. (Prueba a arrastrar los puntos.)",
      "Prolónguese AD en ambas direcciones hasta G, H; por B trácese BG paralela a CA, y por F trácese FH paralela a DE.",
      "Entonces cada una de las figuras GBCA, DEFH es un paralelogramo; están sobre las bases iguales BC, EF y entre las mismas paralelas BF, GH; por tanto son iguales.",
      "La diagonal AB divide GBCA en dos partes iguales, así que el triángulo ABC es la mitad de GBCA; y la diagonal DF divide DEFH, así que el triángulo FED es la mitad de DEFH.",
      "Pero las mitades de cosas iguales son iguales entre sí; por tanto el triángulo ABC es igual al triángulo DEF."
    ],
    fr: [
      "Soient ABC, DEF des triangles sur les bases égales BC, EF et entre les mêmes parallèles BF, AD. Je dis que le triangle ABC est égal au triangle DEF. (Essayez de déplacer les points.)",
      "Prolongeons AD des deux côtés jusqu'en G, H ; par B menons BG parallèle à CA, et par F menons FH parallèle à DE.",
      "Alors chacune des figures GBCA, DEFH est un parallélogramme ; elles sont sur les bases égales BC, EF et entre les mêmes parallèles BF, GH ; donc elles sont égales.",
      "La diagonale AB partage GBCA en deux parties égales, donc le triangle ABC est la moitié de GBCA ; et la diagonale DF partage DEFH, donc le triangle FED est la moitié de DEFH.",
      "Or les moitiés de choses égales sont égales entre elles ; donc le triangle ABC est égal au triangle DEF."
    ],
    de: [
      "ABC, DEF seien Dreiecke auf den gleichen Grundlinien BC, EF und zwischen denselben Parallelen BF, AD. Behauptung: Das Dreieck ABC ist dem Dreieck DEF gleich. (Ziehen Sie die Punkte.)",
      "Man verlängere AD nach beiden Seiten bis G, H; durch B ziehe man BG parallel zu CA und durch F ziehe man FH parallel zu DE.",
      "Dann ist jede der Figuren GBCA, DEFH ein Parallelogramm; sie stehen auf den gleichen Grundlinien BC, EF und zwischen denselben Parallelen BF, GH; also sind sie gleich.",
      "Die Diagonale AB halbiert GBCA, also ist das Dreieck ABC die Hälfte von GBCA; die Diagonale DF halbiert DEFH, also ist das Dreieck FED die Hälfte von DEFH.",
      "Die Hälften von Gleichem sind aber einander gleich; also ist das Dreieck ABC dem Dreieck DEF gleich."
    ],
    ru: [
      "Пусть ABC, DEF — треугольники на равных основаниях BC, EF и между одними и теми же параллельными BF, AD. Утверждается, что треугольник ABC равен треугольнику DEF. (Попробуйте перетащить точки.)",
      "Продолжим AD в обе стороны до G, H; через B проведём BG параллельно CA, а через F проведём FH параллельно DE.",
      "Тогда каждая из фигур GBCA, DEFH — параллелограмм; они стоят на равных основаниях BC, EF и между одними параллельными BF, GH; значит, они равны.",
      "Диаметр AB делит GBCA пополам, так что треугольник ABC — половина GBCA; а диаметр DF делит пополам DEFH, так что треугольник FED — половина DEFH.",
      "Но половины равных равны между собой; значит, треугольник ABC равен треугольнику DEF."
    ],
    ar: [
      "ليكن ABC، DEF مثلثين على قاعدتين متساويتين BC، EF وبين خطين متوازيين بعينهما BF، AD. فنقول: إن المثلث ABC مساوٍ للمثلث DEF. (جرّب سحب النقاط.)",
      "نُخرج AD في الجهتين إلى G، H؛ ونُخرج من B الخط BG موازيًا لـ CA، ومن F الخط FH موازيًا لـ DE.",
      "فكلٌّ من الشكلين GBCA، DEFH متوازي أضلاع، وهما على قاعدتين متساويتين BC، EF وبين المتوازيين نفسيهما BF، GH؛ فهما متساويان.",
      "والقطر AB ينصّف GBCA، فالمثلث ABC نصف GBCA؛ والقطر DF ينصّف DEFH، فالمثلث FED نصف DEFH.",
      "وأنصاف الأشياء المتساوية متساوية؛ فالمثلث ABC مساوٍ للمثلث DEF."
    ],
    hi: [
      "मान लीजिए ABC, DEF बराबर आधारों BC, EF पर और एक ही समांतर रेखाओं BF, AD के बीच स्थित त्रिभुज हैं। दावा: त्रिभुज ABC त्रिभुज DEF के बराबर है। (बिंदुओं को खींचकर देखिए।)",
      "AD को दोनों ओर G, H तक बढ़ाइए; B से होकर CA के समांतर BG खींचिए, और F से होकर DE के समांतर FH खींचिए।",
      "तब आकृतियाँ GBCA, DEFH दोनों समांतर चतुर्भुज हैं; वे बराबर आधारों BC, EF पर और एक ही समांतर रेखाओं BF, GH के बीच हैं; अतः वे बराबर हैं।",
      "विकर्ण AB, GBCA को समद्विभाजित करता है, अतः त्रिभुज ABC, GBCA का आधा है; और विकर्ण DF, DEFH को समद्विभाजित करता है, अतः त्रिभुज FED, DEFH का आधा है।",
      "बराबर वस्तुओं के आधे भी परस्पर बराबर होते हैं; अतः त्रिभुज ABC त्रिभुज DEF के बराबर है।"
    ],
    ja: [
      "ABC、DEF を等しい底辺 BC、EF の上にあり、同じ平行線 BF、AD の間にある三角形とする。主張：三角形 ABC は三角形 DEF に等しい。（点をドラッグしてみてください。）",
      "AD を両方向に G、H まで延長し、B を通って CA に平行に BG を、F を通って DE に平行に FH を引く。",
      "すると GBCA、DEFH はどちらも平行四辺形であり、等しい底辺 BC、EF の上、同じ平行線 BF、GH の間にあるから、互いに等しい。",
      "対角線 AB は GBCA を 2 等分するから、三角形 ABC は GBCA の半分である。対角線 DF は DEFH を 2 等分するから、三角形 FED は DEFH の半分である。",
      "等しいものの半分どうしは互いに等しい。よって三角形 ABC は三角形 DEF に等しい。"
    ]
  }
});
