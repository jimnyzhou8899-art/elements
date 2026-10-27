// Proposition I.48
PROP(48, {
  vb: [0, 0, 720, 560],
  build(S) {
    S.free("A", 250, 330, { ld: { x: -1, y: 0 } }); S.free("C", 430, 330, { ld: { x: 1, y: 0.3 } });
    const n = g => V.unit(V.perp(V.sub(g("C"), g("A"))));
    // B: the square on BC equals the squares on BA, AC, which puts B on the perpendicular at A
    S.glide("B", 130, (g, b) => V.add(g("A"), V.mul(n(g), b)),
      (g, m) => Math.min(200, Math.max(50, V.dot(V.sub(m, g("A")), n(g)))), { ld: { x: 0, y: -1 } });
    S.pt("D", g => V.sub(g("A"), V.mul(n(g), V.dist(g("A"), g("B")))), { ld: { x: 0, y: 1 } });
    // squares on the three sides
    const sq = (id, p, q, away, st) => {
      S.pt(id + "1", g => square(g(p), g(q), g(away))[0], { lab: false });
      S.pt(id + "2", g => square(g(p), g(q), g(away))[1], { lab: false });
      S.poly(id, [p, q, id + "2", id + "1"], { st });
    };
    sq("sBA", "B", "A", "C", "red"); sq("sAC", "A", "C", "B", "yel"); sq("sBC", "B", "C", "A", "blue");
    S.seg("AB", "A", "B", { st: "red" }); S.seg("AC", "A", "C"); S.seg("BC", "B", "C", { st: "blue" });
    S.seg("AD", "A", "D", { st: "red" }); S.seg("DC", "D", "C", { st: "blue" });
    S.rang("rDAC", "D", "A", "C"); S.rang("rBAC", "B", "A", "C");
  },
  steps: [
    { show: ["A", "B", "C", "AB", "AC", "BC", "sBA", "sAC", "sBC"] },
    { show: ["D", "AD", "DC", "rDAC"], hide: ["sBA", "sAC", "sBC"], why: ["I.11", "I.3", "P1"] },
    { hl: ["AD", "AB", "AC"], why: ["A2"] },
    { hl: ["DC", "BC"], why: ["I.47", "A1"] },
    { show: ["rBAC"], why: ["I.8"] }
  ],
  text: {
    zh: [
      "设三角形 ABC 中，BC 上的正方形等于 BA、AC 上的两个正方形之和。断言：∠BAC 是直角。（拖动 A、B 或 C 试试。）",
      "从点 A 作 AD 与直线 AC 成直角，使 AD 等于 AB，并连接 DC。",
      "因为 DA 等于 AB，所以 DA 上的正方形等于 AB 上的正方形。两边各加上 AC 上的正方形，于是 DA、AC 上的正方形之和等于 BA、AC 上的正方形之和。",
      "因为 ∠DAC 是直角，DC 上的正方形等于 DA、AC 上的正方形之和；而 BC 上的正方形按假设等于 BA、AC 上的正方形之和。所以 DC 上的正方形等于 BC 上的正方形，于是 DC 等于 BC。",
      "因为 DA 等于 AB，AC 是公共边，底 DC 等于底 BC，所以 ∠DAC 等于 ∠BAC。而 ∠DAC 是直角，所以 ∠BAC 也是直角。"
    ],
    en: [
      "In the triangle ABC let the square on one side BC be equal to the squares on the sides BA, AC. The claim: the angle BAC is right. (Try dragging A, B or C.)",
      "From the point A let AD be drawn at right angles to the straight line AC, let AD be made equal to AB, and let DC be joined.",
      "Since DA is equal to AB, the square on DA is equal to the square on AB. Let the square on AC be added to each; then the squares on DA, AC are equal to the squares on BA, AC.",
      "Since the angle DAC is right, the square on DC is equal to the squares on DA, AC; and the square on BC is equal by hypothesis to the squares on BA, AC. Therefore the square on DC is equal to the square on BC, so that DC is equal to BC.",
      "Since DA is equal to AB and AC is common, and the base DC is equal to the base BC, the angle DAC is equal to the angle BAC. But the angle DAC is right; therefore the angle BAC is also right."
    ],
    es: [
      "En el triángulo ABC sea el cuadrado sobre el lado BC igual a los cuadrados sobre los lados BA, AC. Se afirma que el ángulo BAC es recto. (Prueba a arrastrar A, B o C.)",
      "Desde el punto A trácese AD en ángulo recto con la recta AC, hágase AD igual a AB, y trácese DC.",
      "Como DA es igual a AB, el cuadrado sobre DA es igual al cuadrado sobre AB. Añádase a cada uno el cuadrado sobre AC; entonces los cuadrados sobre DA, AC son iguales a los cuadrados sobre BA, AC.",
      "Como el ángulo DAC es recto, el cuadrado sobre DC es igual a los cuadrados sobre DA, AC; y el cuadrado sobre BC es igual por hipótesis a los cuadrados sobre BA, AC. Por tanto el cuadrado sobre DC es igual al cuadrado sobre BC, de modo que DC es igual a BC.",
      "Como DA es igual a AB y AC es común, y la base DC es igual a la base BC, el ángulo DAC es igual al ángulo BAC. Pero el ángulo DAC es recto; por tanto el ángulo BAC es también recto."
    ],
    fr: [
      "Dans le triangle ABC, que le carré sur le côté BC soit égal aux carrés sur les côtés BA, AC. Je dis que l'angle BAC est droit. (Essayez de déplacer A, B ou C.)",
      "Du point A menons AD à angles droits avec la droite AC, faisons AD égale à AB, et menons DC.",
      "Puisque DA est égale à AB, le carré sur DA est égal au carré sur AB. Ajoutons à chacun le carré sur AC ; les carrés sur DA, AC sont alors égaux aux carrés sur BA, AC.",
      "Puisque l'angle DAC est droit, le carré sur DC est égal aux carrés sur DA, AC ; et le carré sur BC est égal par hypothèse aux carrés sur BA, AC. Donc le carré sur DC est égal au carré sur BC, de sorte que DC est égale à BC.",
      "Puisque DA est égale à AB et que AC est commune, et que la base DC est égale à la base BC, l'angle DAC est égal à l'angle BAC. Mais l'angle DAC est droit ; donc l'angle BAC est aussi droit."
    ],
    de: [
      "Im Dreieck ABC sei das Quadrat über der Seite BC den Quadraten über den Seiten BA, AC zusammen gleich. Behauptung: Der Winkel BAC ist ein Rechter. (Ziehen Sie A, B oder C.)",
      "Im Punkt A errichte man AD rechtwinklig zur Geraden AC, mache AD gleich AB und ziehe DC.",
      "Da DA gleich AB ist, ist das Quadrat über DA dem Quadrat über AB gleich. Man füge beiderseits das Quadrat über AC hinzu; dann sind die Quadrate über DA, AC den Quadraten über BA, AC gleich.",
      "Da der Winkel DAC ein Rechter ist, ist das Quadrat über DC den Quadraten über DA, AC gleich; und das Quadrat über BC ist nach Voraussetzung den Quadraten über BA, AC gleich. Also ist das Quadrat über DC dem Quadrat über BC gleich, und damit DC gleich BC.",
      "Da DA gleich AB und AC gemeinsam ist und die Grundlinie DC gleich der Grundlinie BC, ist der Winkel DAC gleich dem Winkel BAC. Der Winkel DAC ist aber ein Rechter; also ist auch der Winkel BAC ein Rechter."
    ],
    ru: [
      "Пусть в треугольнике ABC квадрат на стороне BC равен квадратам на сторонах BA, AC. Утверждается, что угол BAC прямой. (Попробуйте перетащить A, B или C.)",
      "Из точки A проведём AD под прямым углом к прямой AC, сделаем AD равной AB и проведём DC.",
      "Так как DA равна AB, квадрат на DA равен квадрату на AB. Прибавим к каждому квадрат на AC; тогда квадраты на DA, AC равны квадратам на BA, AC.",
      "Так как угол DAC прямой, квадрат на DC равен квадратам на DA, AC; а квадрат на BC по предположению равен квадратам на BA, AC. Значит, квадрат на DC равен квадрату на BC, и потому DC равна BC.",
      "Так как DA равна AB, AC общая, и основание DC равно основанию BC, то угол DAC равен углу BAC. Но угол DAC прямой; значит, и угол BAC прямой."
    ],
    ar: [
      "ليكن المربع الكائن من الضلع BC في المثلث ABC مساويًا لمجموع المربعين الكائنين من الضلعين BA، AC. فنقول: إن الزاوية BAC قائمة. (جرّب سحب A أو B أو C.)",
      "نُخرج من النقطة A الخط AD على زوايا قائمة مع الخط AC، ونجعل AD مساويًا لـ AB، ونصل DC.",
      "لأن DA مساوٍ لـ AB، فالمربع من DA مساوٍ للمربع من AB. نزيد على كلٍّ منهما المربع من AC، فمجموع المربعين من DA، AC مساوٍ لمجموع المربعين من BA، AC.",
      "ولأن الزاوية DAC قائمة، فالمربع من DC مساوٍ لمجموع المربعين من DA، AC؛ والمربع من BC مساوٍ بالفرض لمجموع المربعين من BA، AC. فالمربع من DC مساوٍ للمربع من BC، فـ DC مساوٍ لـ BC.",
      "ولأن DA مساوٍ لـ AB، وAC مشترك، والقاعدة DC مساوية للقاعدة BC، فالزاوية DAC مساوية للزاوية BAC. لكن الزاوية DAC قائمة؛ فالزاوية BAC أيضًا قائمة."
    ],
    hi: [
      "मान लीजिए त्रिभुज ABC में भुजा BC पर का वर्ग भुजाओं BA, AC पर के वर्गों के योग के बराबर है। दावा: कोण BAC समकोण है। (A, B या C को खींचकर देखिए।)",
      "बिंदु A से सरल रेखा AC पर समकोण बनाती AD खींचिए, AD को AB के बराबर बनाइए, और DC मिलाइए।",
      "चूँकि DA, AB के बराबर है, इसलिए DA पर का वर्ग AB पर के वर्ग के बराबर है। दोनों में AC पर का वर्ग जोड़िए; तो DA, AC पर के वर्गों का योग BA, AC पर के वर्गों के योग के बराबर है।",
      "चूँकि कोण DAC समकोण है, DC पर का वर्ग DA, AC पर के वर्गों के योग के बराबर है; और BC पर का वर्ग परिकल्पना से BA, AC पर के वर्गों के योग के बराबर है। अतः DC पर का वर्ग BC पर के वर्ग के बराबर है, इसलिए DC, BC के बराबर है।",
      "चूँकि DA, AB के बराबर है और AC उभयनिष्ठ है, और आधार DC आधार BC के बराबर है, इसलिए कोण DAC कोण BAC के बराबर है। पर कोण DAC समकोण है; अतः कोण BAC भी समकोण है।"
    ],
    ja: [
      "三角形 ABC において、辺 BC の上の正方形が辺 BA、AC の上の正方形の和に等しいとする。主張：角 BAC は直角である。（A、B、C をドラッグしてみてください。）",
      "点 A から直線 AC に直角に AD を引き、AD を AB に等しくし、DC を結ぶ。",
      "DA は AB に等しいから、DA の上の正方形は AB の上の正方形に等しい。それぞれに AC の上の正方形を加えると、DA、AC の上の正方形の和は BA、AC の上の正方形の和に等しい。",
      "角 DAC は直角だから、DC の上の正方形は DA、AC の上の正方形の和に等しい。また BC の上の正方形は仮定により BA、AC の上の正方形の和に等しい。よって DC の上の正方形は BC の上の正方形に等しく、DC は BC に等しい。",
      "DA は AB に等しく、AC は共通で、底辺 DC は底辺 BC に等しいから、角 DAC は角 BAC に等しい。しかし角 DAC は直角である。ゆえに角 BAC も直角である。"
    ]
  }
});
