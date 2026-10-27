// Proposition I.3
PROP(3, {
  vb: [0, 0, 720, 560],
  build(S) {
    S.free("A", 240, 330); S.free("B", 640, 330);
    S.free("C", 380, 70); S.free("C2", 580, 70, { lab: false });
    S.seg("AB", "A", "B"); S.seg("sC", "C", "C2", { st: "red" });
    const r = g => V.dist(g("C"), g("C2"));
    const u = g => V.unit(V.sub(g("B"), g("A")));
    // AD = C, placed at A by I.2 (direction chosen to keep the figure clear of AB).
    S.pt("D", g => { const d = u(g), c = Math.cos(-0.96), s = Math.sin(-0.96);
      return V.add(g("A"), V.mul({ x: d.x * c - d.y * s, y: d.x * s + d.y * c }, r(g))); });
    S.seg("AD", "A", "D", { st: "red" });
    S.circ("cA", "A", "D", { st: "blue" });
    // E exists only while C is shorter than AB.
    S.pt("E", g => r(g) < V.dist(g("A"), g("B")) ? V.add(g("A"), V.mul(u(g), r(g))) : null, { ld: { x: 0.4, y: 1 } });
    S.pt("F", g => V.sub(g("A"), V.mul(u(g), r(g))));
    S.seg("AE", "A", "E", { st: "red" });
  },
  steps: [
    { show: ["A", "B", "AB", "C", "C2", "sC"] },
    { show: ["D", "AD"], why: ["I.2"] },
    { show: ["cA", "E", "F"], why: ["P3"] },
    { show: ["AE"], hl: ["AD", "AE"], why: ["D15"] },
    { hl: ["AE", "sC"], why: ["A1"] }
  ],
  text: {
    zh: [
      "设 AB 和 C 是两条不相等的线段，AB 较长。要求从较长的 AB 上截取一段等于较短的 C。（拖动 C 的端点可以改变它的长度。）",
      "在点 A 作线段 AD 等于 C。",
      "以 A 为圆心、AD 为距离作圆 DEF，它与 AB 交于 E。",
      "因为点 A 是圆 DEF 的圆心，所以 AE 等于 AD。",
      "而 C 也等于 AD，所以 AE、C 都等于 AD。等于同量的量彼此相等，所以 AE 也等于 C。于是从较长的 AB 上截取了 AE，等于较短的 C。"
    ],
    en: [
      "Let AB, C be the two given unequal straight lines, and let AB be the greater. It is required to cut off from the greater AB a straight line equal to the less C. (Drag the ends of C to change its length.)",
      "At the point A let AD be placed equal to the straight line C.",
      "With centre A and distance AD let the circle DEF be described; it meets AB at E.",
      "Since the point A is the centre of the circle DEF, AE is equal to AD.",
      "But C is also equal to AD; therefore each of the straight lines AE, C is equal to AD, and so AE is also equal to C. Thus from the greater AB the straight line AE has been cut off equal to the less C."
    ],
    es: [
      "Sean AB y C las dos rectas desiguales dadas, y sea AB la mayor. Hay que quitar de la mayor AB una recta igual a la menor C. (Arrastra los extremos de C para cambiar su longitud.)",
      "En el punto A colóquese AD igual a la recta C.",
      "Con centro A y distancia AD descríbase el círculo DEF; corta a AB en E.",
      "Como el punto A es el centro del círculo DEF, AE es igual a AD.",
      "Pero C es también igual a AD; por tanto cada una de las rectas AE, C es igual a AD, y así AE es también igual a C. Se ha quitado, pues, de la mayor AB la recta AE igual a la menor C."
    ],
    fr: [
      "Soient AB et C les deux droites inégales données, AB étant la plus grande. Il faut retrancher de la plus grande AB une droite égale à la plus petite C. (Déplacez les extrémités de C pour changer sa longueur.)",
      "Au point A, plaçons AD égale à la droite C.",
      "Du centre A et de l'intervalle AD, décrivons le cercle DEF ; il coupe AB en E.",
      "Puisque le point A est le centre du cercle DEF, AE est égale à AD.",
      "Mais C est aussi égale à AD ; donc chacune des droites AE, C est égale à AD, et ainsi AE est aussi égale à C. On a donc retranché de la plus grande AB la droite AE égale à la plus petite C."
    ],
    de: [
      "Die zwei gegebenen ungleichen Strecken seien AB und C, und AB sei die größere. Man soll auf der größeren AB eine der kleineren C gleiche Strecke abtragen. (Ziehen Sie die Enden von C, um ihre Länge zu ändern.)",
      "An den Punkt A lege man AD gleich der Strecke C hin.",
      "Mit dem Mittelpunkt A und dem Abstand AD zeichne man den Kreis DEF; er schneidet AB in E.",
      "Da der Punkt A Mittelpunkt des Kreises DEF ist, ist AE gleich AD.",
      "Auch C ist gleich AD; also ist jede der Strecken AE, C gleich AD, und somit ist auch AE gleich C. Damit ist auf der größeren AB die Strecke AE gleich der kleineren C abgetragen."
    ],
    ru: [
      "Пусть AB и C — две данные неравные прямые, и пусть AB большая. Требуется от большей AB отнять прямую, равную меньшей C. (Перетаскивайте концы C, чтобы менять её длину.)",
      "Отложим от точки A прямую AD, равную прямой C.",
      "Из центра A раствором AD опишем круг DEF; он пересекает AB в точке E.",
      "Так как точка A — центр круга DEF, то AE равна AD.",
      "Но и C равна AD; значит, каждая из прямых AE, C равна AD, и поэтому AE равна C. Итак, от большей AB отнята прямая AE, равная меньшей C."
    ],
    ar: [
      "ليكن AB وC الخطين المستقيمين المعلومين غير المتساويين، وليكن AB الأعظم. ونريد أن نفصل من الأعظم AB خطًا مساويًا للأصغر C. (اسحب طرفي C لتغيير طوله.)",
      "نضع عند النقطة A الخط AD مساويًا للخط C.",
      "ونرسم على المركز A وببُعد AD دائرة DEF، فتقطع AB عند E.",
      "فلأن النقطة A مركز دائرة DEF، يكون AE مساويًا لـ AD.",
      "وC أيضًا مساوٍ لـ AD؛ فكلٌّ من AE، C مساوٍ لـ AD، فـ AE مساوٍ لـ C. فقد فُصل من الأعظم AB الخط AE مساويًا للأصغر C."
    ],
    hi: [
      "मान लीजिए AB और C दो दी गई असमान सरल रेखाएँ हैं, और AB बड़ी है। बड़ी AB में से छोटी C के बराबर सरल रेखा काटनी है। (C के सिरों को खींचकर उसकी लंबाई बदलिए।)",
      "बिंदु A पर सरल रेखा C के बराबर AD रखिए।",
      "केंद्र A और दूरी AD से वृत्त DEF खींचिए; यह AB को E पर काटता है।",
      "चूँकि बिंदु A वृत्त DEF का केंद्र है, इसलिए AE, AD के बराबर है।",
      "पर C भी AD के बराबर है; अतः AE और C दोनों AD के बराबर हैं, और इसलिए AE भी C के बराबर है। इस प्रकार बड़ी AB में से छोटी C के बराबर AE काट ली गई।"
    ],
    ja: [
      "AB と C を与えられた等しくない 2 直線とし、AB の方が大きいとする。大きい AB から、小さい C に等しい直線を切り取らなければならない。（C の両端をドラッグすると長さが変わります。）",
      "点 A に直線 C に等しい AD を置く。",
      "中心 A、距離 AD で円 DEF を描く。それは AB と E で交わる。",
      "点 A は円 DEF の中心だから、AE は AD に等しい。",
      "C も AD に等しい。よって AE、C はどちらも AD に等しく、したがって AE は C に等しい。こうして大きい AB から、小さい C に等しい AE が切り取られた。"
    ]
  }
});
