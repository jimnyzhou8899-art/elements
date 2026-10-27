// Proposition I.37
PROP(37, {
  vb: [0, 0, 720, 400],
  build(S) {
    S.free("B", 220, 330, { ld: { x: 0, y: 1 } }); S.free("C", 420, 330, { ld: { x: 0, y: 1 } });
    S.free("A", 300, 100, { ld: { x: 0, y: -1 } });
    const w = g => V.sub(g("C"), g("B"));
    S.glide("D", 0.9, (g, t) => V.add(g("A"), V.mul(w(g), t)),
      (g, m) => Math.min(1.8, Math.max(0.3, V.dot(V.sub(m, g("A")), w(g)) / V.dot(w(g), w(g)))), { ld: { x: 0, y: -1 } });
    // BE parallel to CA, CF parallel to BD
    S.pt("E", g => V.add(g("A"), V.sub(g("B"), g("C"))), { ld: { x: 0, y: -1 } });
    S.pt("F", g => V.add(g("D"), w(g)), { ld: { x: 0, y: -1 } });
    S.poly("qEBCA", ["E", "B", "C", "A"], { st: "red" }); S.poly("qDBCF", ["D", "B", "C", "F"], { st: "blue" });
    S.poly("tABC", ["A", "B", "C"], { st: "red" }); S.poly("tDBC", ["D", "B", "C"], { st: "blue" });
    S.seg("AD", "A", "D"); S.seg("BC", "B", "C");
    S.seg("AB", "A", "B"); S.seg("CA", "C", "A"); S.seg("DB", "D", "B"); S.seg("DC", "D", "C");
    S.seg("EA", "E", "A", { st: "aux" }); S.seg("DF", "D", "F", { st: "aux" });
    S.seg("BE", "B", "E"); S.seg("CF", "C", "F");
  },
  steps: [
    { show: ["A", "B", "C", "D", "AD", "BC", "AB", "CA", "DB", "DC"] },
    { show: ["E", "F", "EA", "DF", "BE", "CF"], why: ["P2", "I.31"] },
    { show: ["qEBCA", "qDBCF"], why: ["I.35"] },
    { show: ["tABC", "tDBC"], hide: ["qEBCA", "qDBCF"], hl: ["AB", "DC"], why: ["I.34"] },
    { hide: ["E", "F", "EA", "DF", "BE", "CF"] }
  ],
  text: {
    zh: [
      "设 ABC、DBC 是在同一底 BC 上、并且在同一对平行线 AD、BC 之间的三角形。断言：三角形 ABC 等于三角形 DBC。（拖动 A、B、C 或 D 试试。）",
      "把 AD 向两方延长到 E、F；过 B 作 BE 平行于 CA，过 C 作 CF 平行于 BD。",
      "于是 EBCA、DBCF 都是平行四边形，它们在同一底 BC 上、在同一对平行线 BC、EF 之间，所以彼此相等。",
      "对角线 AB 平分平行四边形 EBCA，所以三角形 ABC 是 EBCA 的一半；对角线 DC 平分 DBCF，所以三角形 DBC 是 DBCF 的一半。",
      "相等的东西的一半也彼此相等，所以三角形 ABC 等于三角形 DBC。"
    ],
    en: [
      "Let ABC, DBC be triangles on the same base BC and in the same parallels AD, BC. The claim: the triangle ABC is equal to the triangle DBC. (Try dragging A, B, C or D.)",
      "Let AD be produced in both directions to E, F; through B let BE be drawn parallel to CA, and through C let CF be drawn parallel to BD.",
      "Then each of the figures EBCA, DBCF is a parallelogram; and they are on the same base BC and in the same parallels BC, EF; therefore they are equal.",
      "The diameter AB bisects the parallelogram EBCA, so the triangle ABC is half of EBCA; and the diameter DC bisects DBCF, so the triangle DBC is half of DBCF.",
      "But the halves of equal things are equal to one another; therefore the triangle ABC is equal to the triangle DBC."
    ],
    es: [
      "Sean ABC, DBC triángulos sobre la misma base BC y entre las mismas paralelas AD, BC. Se afirma que el triángulo ABC es igual al triángulo DBC. (Prueba a arrastrar A, B, C o D.)",
      "Prolónguese AD en ambas direcciones hasta E, F; por B trácese BE paralela a CA, y por C trácese CF paralela a BD.",
      "Entonces cada una de las figuras EBCA, DBCF es un paralelogramo; están sobre la misma base BC y entre las mismas paralelas BC, EF; por tanto son iguales.",
      "La diagonal AB divide en dos partes iguales el paralelogramo EBCA, así que el triángulo ABC es la mitad de EBCA; y la diagonal DC divide DBCF, así que el triángulo DBC es la mitad de DBCF.",
      "Pero las mitades de cosas iguales son iguales entre sí; por tanto el triángulo ABC es igual al triángulo DBC."
    ],
    fr: [
      "Soient ABC, DBC des triangles sur la même base BC et entre les mêmes parallèles AD, BC. Je dis que le triangle ABC est égal au triangle DBC. (Essayez de déplacer A, B, C ou D.)",
      "Prolongeons AD des deux côtés jusqu'en E, F ; par B menons BE parallèle à CA, et par C menons CF parallèle à BD.",
      "Alors chacune des figures EBCA, DBCF est un parallélogramme ; elles sont sur la même base BC et entre les mêmes parallèles BC, EF ; donc elles sont égales.",
      "La diagonale AB partage en deux parties égales le parallélogramme EBCA, donc le triangle ABC est la moitié de EBCA ; et la diagonale DC partage DBCF, donc le triangle DBC est la moitié de DBCF.",
      "Or les moitiés de choses égales sont égales entre elles ; donc le triangle ABC est égal au triangle DBC."
    ],
    de: [
      "ABC, DBC seien Dreiecke auf derselben Grundlinie BC und zwischen denselben Parallelen AD, BC. Behauptung: Das Dreieck ABC ist dem Dreieck DBC gleich. (Ziehen Sie A, B, C oder D.)",
      "Man verlängere AD nach beiden Seiten bis E, F; durch B ziehe man BE parallel zu CA und durch C ziehe man CF parallel zu BD.",
      "Dann ist jede der Figuren EBCA, DBCF ein Parallelogramm; sie stehen auf derselben Grundlinie BC und zwischen denselben Parallelen BC, EF; also sind sie gleich.",
      "Die Diagonale AB halbiert das Parallelogramm EBCA, also ist das Dreieck ABC die Hälfte von EBCA; die Diagonale DC halbiert DBCF, also ist das Dreieck DBC die Hälfte von DBCF.",
      "Die Hälften von Gleichem sind aber einander gleich; also ist das Dreieck ABC dem Dreieck DBC gleich."
    ],
    ru: [
      "Пусть ABC, DBC — треугольники на одном основании BC и между одними и теми же параллельными AD, BC. Утверждается, что треугольник ABC равен треугольнику DBC. (Попробуйте перетащить A, B, C или D.)",
      "Продолжим AD в обе стороны до E, F; через B проведём BE параллельно CA, а через C проведём CF параллельно BD.",
      "Тогда каждая из фигур EBCA, DBCF — параллелограмм; они стоят на одном основании BC и между одними параллельными BC, EF; значит, они равны.",
      "Диаметр AB делит параллелограмм EBCA пополам, так что треугольник ABC — половина EBCA; а диаметр DC делит пополам DBCF, так что треугольник DBC — половина DBCF.",
      "Но половины равных равны между собой; значит, треугольник ABC равен треугольнику DBC."
    ],
    ar: [
      "ليكن ABC، DBC مثلثين على قاعدة واحدة BC وبين خطين متوازيين بعينهما AD، BC. فنقول: إن المثلث ABC مساوٍ للمثلث DBC. (جرّب سحب A أو B أو C أو D.)",
      "نُخرج AD في الجهتين إلى E، F؛ ونُخرج من B الخط BE موازيًا لـ CA، ومن C الخط CF موازيًا لـ BD.",
      "فكلٌّ من الشكلين EBCA، DBCF متوازي أضلاع، وهما على القاعدة نفسها BC وبين المتوازيين نفسيهما BC، EF؛ فهما متساويان.",
      "والقطر AB ينصّف متوازي الأضلاع EBCA، فالمثلث ABC نصف EBCA؛ والقطر DC ينصّف DBCF، فالمثلث DBC نصف DBCF.",
      "وأنصاف الأشياء المتساوية متساوية؛ فالمثلث ABC مساوٍ للمثلث DBC."
    ],
    hi: [
      "मान लीजिए ABC, DBC एक ही आधार BC पर और एक ही समांतर रेखाओं AD, BC के बीच स्थित त्रिभुज हैं। दावा: त्रिभुज ABC त्रिभुज DBC के बराबर है। (A, B, C या D को खींचकर देखिए।)",
      "AD को दोनों ओर E, F तक बढ़ाइए; B से होकर CA के समांतर BE खींचिए, और C से होकर BD के समांतर CF खींचिए।",
      "तब आकृतियाँ EBCA, DBCF दोनों समांतर चतुर्भुज हैं; वे एक ही आधार BC पर और एक ही समांतर रेखाओं BC, EF के बीच हैं; अतः वे बराबर हैं।",
      "विकर्ण AB समांतर चतुर्भुज EBCA को समद्विभाजित करता है, अतः त्रिभुज ABC, EBCA का आधा है; और विकर्ण DC, DBCF को समद्विभाजित करता है, अतः त्रिभुज DBC, DBCF का आधा है।",
      "बराबर वस्तुओं के आधे भी परस्पर बराबर होते हैं; अतः त्रिभुज ABC त्रिभुज DBC के बराबर है।"
    ],
    ja: [
      "ABC、DBC を同じ底辺 BC の上にあり、同じ平行線 AD、BC の間にある三角形とする。主張：三角形 ABC は三角形 DBC に等しい。（A、B、C、D をドラッグしてみてください。）",
      "AD を両方向に E、F まで延長し、B を通って CA に平行に BE を、C を通って BD に平行に CF を引く。",
      "すると EBCA、DBCF はどちらも平行四辺形であり、同じ底辺 BC の上、同じ平行線 BC、EF の間にあるから、互いに等しい。",
      "対角線 AB は平行四辺形 EBCA を 2 等分するから、三角形 ABC は EBCA の半分である。対角線 DC は DBCF を 2 等分するから、三角形 DBC は DBCF の半分である。",
      "等しいものの半分どうしは互いに等しい。よって三角形 ABC は三角形 DBC に等しい。"
    ]
  }
});
