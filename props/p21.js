// Proposition I.21
PROP(21, {
  vb: [0, 0, 720, 440],
  build(S) {
    S.free("B", 70, 390); S.free("C", 650, 390); S.free("A", 300, 60);
    S.free("D", 360, 300, { ld: { x: 0, y: 1 } });
    S.pt("E", g => intersect({ k: "L", a: g("B"), b: g("D"), seg: false }, { k: "L", a: g("A"), b: g("C"), seg: false })[0], { ld: { x: 1, y: -0.3 } });
    S.seg("AB", "A", "B", { st: "red" }); S.seg("BC", "B", "C");
    S.seg("AE", "A", "E", { st: "red" }); S.seg("EC", "E", "C", { st: "red" });
    S.seg("BD", "B", "D", { st: "blue" }); S.seg("DC", "D", "C", { st: "blue" });
    S.seg("DE", "D", "E", { st: "aux" });
    S.ang("aBAC", "B", "A", "C", { st: "yel", r: 34 });
    S.ang("aBDC", "B", "D", "C", { st: "yel", r: 30 });
    S.ang("aCED", "C", "E", "D", { st: "yel", r: 26 });
  },
  steps: [
    { show: ["A", "B", "C", "D", "AB", "BC", "AE", "EC", "BD", "DC", "aBAC", "aBDC"] },
    { show: ["E", "DE"], hide: ["aBAC", "aBDC"], why: ["P2"] },
    { hl: ["AB", "AE", "BD", "DE"], why: ["I.20"] },
    { hl: ["EC", "DE", "DC"], why: ["I.20"] },
    { hl: ["AB", "AE", "EC", "BD", "DC"] },
    { show: ["aBDC", "aCED"], why: ["I.16"] },
    { show: ["aBAC"], why: ["I.16"] }
  ],
  text: {
    zh: [
      "设 ABC 是三角形，从边 BC 的两端向三角形内作两条直线 BD、DC 相交于 D。断言：BD、DC 之和小于 BA、AC 之和，但 ∠BDC 大于 ∠BAC。（D 可以在三角形内拖动。）",
      "延长 BD 交 AC 于 E。",
      "在三角形 ABE 中，两边 AB、AE 之和大于 BE。两边各加上 EC，于是 BA、AC 之和大于 BE、EC 之和。",
      "又在三角形 CED 中，两边 CE、ED 之和大于 CD。两边各加上 DB，于是 CE、EB 之和大于 CD、DB 之和。",
      "所以 BA、AC 之和更大于 BD、DC 之和。",
      "又因为三角形 CDE 的外角 ∠BDC 大于内对角 ∠CED，",
      "同理，三角形 ABE 的外角 ∠CEB 大于内对角 ∠BAE，所以 ∠BDC 更大于 ∠BAC。"
    ],
    en: [
      "Let ABC be a triangle, and on BC, one of its sides, from its extremities let the two straight lines BD, DC be constructed meeting within the triangle at D. The claim: BD, DC are less than BA, AC, but contain a greater angle, the angle BDC greater than the angle BAC. (D can be dragged inside the triangle.)",
      "Let BD be drawn through to meet AC at E.",
      "In the triangle ABE the two sides AB, AE are greater than BE. Let EC be added to each; therefore BA, AC are greater than BE, EC.",
      "Again, in the triangle CED the two sides CE, ED are greater than CD. Let DB be added to each; therefore CE, EB are greater than CD, DB.",
      "Therefore BA, AC are much greater than BD, DC.",
      "Again, since in the triangle CDE the exterior angle BDC is greater than the interior and opposite angle CED,",
      "and likewise in the triangle ABE the exterior angle CEB is greater than the interior and opposite angle BAE, the angle BDC is much greater than the angle BAC."
    ],
    es: [
      "Sea ABC un triángulo, y sobre uno de sus lados, BC, desde sus extremos, constrúyanse dos rectas BD, DC que se encuentren dentro del triángulo en D. Se afirma que BD, DC son menores que BA, AC, pero comprenden un ángulo mayor: el ángulo BDC es mayor que el ángulo BAC. (D se puede arrastrar dentro del triángulo.)",
      "Prolónguese BD hasta encontrar AC en E.",
      "En el triángulo ABE los dos lados AB, AE son mayores que BE. Añádase a cada uno EC; por tanto BA, AC son mayores que BE, EC.",
      "De nuevo, en el triángulo CED los dos lados CE, ED son mayores que CD. Añádase a cada uno DB; por tanto CE, EB son mayores que CD, DB.",
      "Por tanto BA, AC son mucho mayores que BD, DC.",
      "Además, como en el triángulo CDE el ángulo exterior BDC es mayor que el ángulo interior y opuesto CED,",
      "y del mismo modo en el triángulo ABE el ángulo exterior CEB es mayor que el ángulo interior y opuesto BAE, el ángulo BDC es mucho mayor que el ángulo BAC."
    ],
    fr: [
      "Soit ABC un triangle, et sur l'un de ses côtés, BC, par ses extrémités, construisons deux droites BD, DC se rencontrant à l'intérieur du triangle en D. Je dis que BD, DC sont plus petites que BA, AC, mais comprennent un angle plus grand : l'angle BDC est plus grand que l'angle BAC. (On peut déplacer D à l'intérieur du triangle.)",
      "Prolongeons BD jusqu'à sa rencontre avec AC en E.",
      "Dans le triangle ABE, les deux côtés AB, AE sont plus grands que BE. Ajoutons à chacun EC ; donc BA, AC sont plus grands que BE, EC.",
      "De même, dans le triangle CED, les deux côtés CE, ED sont plus grands que CD. Ajoutons à chacun DB ; donc CE, EB sont plus grands que CD, DB.",
      "Donc BA, AC sont beaucoup plus grands que BD, DC.",
      "De plus, puisque dans le triangle CDE l'angle extérieur BDC est plus grand que l'angle intérieur et opposé CED,",
      "et que de même dans le triangle ABE l'angle extérieur CEB est plus grand que l'angle intérieur et opposé BAE, l'angle BDC est beaucoup plus grand que l'angle BAC."
    ],
    de: [
      "Es sei ABC ein Dreieck, und über der Seite BC errichte man von ihren Endpunkten aus zwei Geraden BD, DC, die sich innerhalb des Dreiecks in D treffen. Behauptung: BD, DC sind zusammen kleiner als BA, AC, umfassen aber einen größeren Winkel: Der Winkel BDC ist größer als der Winkel BAC. (D lässt sich innerhalb des Dreiecks ziehen.)",
      "Man verlängere BD bis zum Schnitt mit AC in E.",
      "Im Dreieck ABE sind die zwei Seiten AB, AE größer als BE. Man füge beiderseits EC hinzu; also sind BA, AC größer als BE, EC.",
      "Ebenso sind im Dreieck CED die zwei Seiten CE, ED größer als CD. Man füge beiderseits DB hinzu; also sind CE, EB größer als CD, DB.",
      "Also sind BA, AC erst recht größer als BD, DC.",
      "Da ferner im Dreieck CDE der Außenwinkel BDC größer ist als der innen gegenüberliegende Winkel CED,",
      "und ebenso im Dreieck ABE der Außenwinkel CEB größer als der innen gegenüberliegende Winkel BAE, ist der Winkel BDC erst recht größer als der Winkel BAC."
    ],
    ru: [
      "Пусть ABC — треугольник, и на одной из его сторон, BC, от её концов построены две прямые BD, DC, встречающиеся внутри треугольника в точке D. Утверждается, что BD, DC вместе меньше BA, AC, но заключают больший угол: угол BDC больше угла BAC. (Точку D можно перетаскивать внутри треугольника.)",
      "Продолжим BD до встречи с AC в точке E.",
      "В треугольнике ABE две стороны AB, AE больше BE. Прибавим к каждому EC; значит, BA, AC больше BE, EC.",
      "Далее, в треугольнике CED две стороны CE, ED больше CD. Прибавим к каждому DB; значит, CE, EB больше CD, DB.",
      "Тем более BA, AC больше BD, DC.",
      "Далее, так как в треугольнике CDE внешний угол BDC больше внутреннего противолежащего угла CED,",
      "а также в треугольнике ABE внешний угол CEB больше внутреннего противолежащего угла BAE, то угол BDC тем более больше угла BAC."
    ],
    ar: [
      "ليكن ABC مثلثًا، ولنعمل على أحد أضلاعه BC من طرفيه خطين مستقيمين BD، DC يلتقيان داخل المثلث عند D. فنقول: إن BD، DC معًا أصغر من BA، AC، لكنهما يحيطان بزاوية أعظم: فالزاوية BDC أعظم من الزاوية BAC. (يمكن سحب D داخل المثلث.)",
      "نُخرج BD حتى يلقى AC عند E.",
      "في المثلث ABE الضلعان AB، AE أعظم من BE. نزيد على كلٍّ منهما EC؛ فـ BA، AC أعظم من BE، EC.",
      "وأيضًا في المثلث CED الضلعان CE، ED أعظم من CD. نزيد على كلٍّ منهما DB؛ فـ CE، EB أعظم من CD، DB.",
      "فـ BA، AC أعظم كثيرًا من BD، DC.",
      "وأيضًا لأن الزاوية الخارجة BDC من المثلث CDE أعظم من الزاوية الداخلة المقابلة CED،",
      "وكذلك الزاوية الخارجة CEB من المثلث ABE أعظم من الزاوية الداخلة المقابلة BAE، فالزاوية BDC أعظم كثيرًا من الزاوية BAC."
    ],
    hi: [
      "मान लीजिए ABC एक त्रिभुज है, और उसकी भुजा BC के सिरों से दो सरल रेखाएँ BD, DC खींची गई हैं जो त्रिभुज के भीतर D पर मिलती हैं। दावा: BD, DC मिलकर BA, AC से छोटी हैं, पर बड़ा कोण बनाती हैं: कोण BDC कोण BAC से बड़ा है। (D को त्रिभुज के भीतर खींचा जा सकता है।)",
      "BD को बढ़ाइए ताकि वह AC से E पर मिले।",
      "त्रिभुज ABE में दो भुजाएँ AB, AE मिलकर BE से बड़ी हैं। दोनों में EC जोड़िए; अतः BA, AC मिलकर BE, EC से बड़ी हैं।",
      "फिर, त्रिभुज CED में दो भुजाएँ CE, ED मिलकर CD से बड़ी हैं। दोनों में DB जोड़िए; अतः CE, EB मिलकर CD, DB से बड़ी हैं।",
      "इसलिए BA, AC मिलकर BD, DC से और भी बड़ी हैं।",
      "फिर, चूँकि त्रिभुज CDE का बहिष्कोण BDC अंतः सम्मुख कोण CED से बड़ा है,",
      "और इसी प्रकार त्रिभुज ABE का बहिष्कोण CEB अंतः सम्मुख कोण BAE से बड़ा है, इसलिए कोण BDC कोण BAC से और भी बड़ा है।"
    ],
    ja: [
      "ABC を三角形とし、その辺 BC の両端から 2 直線 BD、DC を引いて三角形の内部の点 D で交わらせる。主張：BD、DC の和は BA、AC の和より小さいが、より大きい角をはさむ。すなわち角 BDC は角 BAC より大きい。（D は三角形の内部でドラッグできます。）",
      "BD を延長して AC と E で交わらせる。",
      "三角形 ABE において 2 辺 AB、AE の和は BE より大きい。それぞれに EC を加えると、BA、AC の和は BE、EC の和より大きい。",
      "また三角形 CED において 2 辺 CE、ED の和は CD より大きい。それぞれに DB を加えると、CE、EB の和は CD、DB の和より大きい。",
      "よって BA、AC の和は BD、DC の和よりなおさら大きい。",
      "また三角形 CDE の外角 BDC は内対角 CED より大きく、",
      "同様に三角形 ABE の外角 CEB は内対角 BAE より大きいから、角 BDC は角 BAC よりなおさら大きい。"
    ]
  }
});
