// Proposition I.2
PROP(2, {
  vb: [0, 0, 720, 560],
  build(S) {
    S.free("A", 300, 330); S.free("B", 400, 330); S.free("C", 470, 410);
    S.seg("BC", "B", "C", { st: "red" });
    S.seg("AB", "A", "B");
    S.pt("D", g => apex(g("A"), g("B"), g("C")));
    S.seg("DA", "D", "A"); S.seg("DB", "D", "B");
    // G on DB produced with BG = BC; L on DA produced with DL = DG.
    S.pt("G", g => V.add(g("B"), V.mul(V.unit(V.sub(g("B"), g("D"))), V.dist(g("B"), g("C")))));
    S.pt("L", g => V.add(g("D"), V.mul(V.unit(V.sub(g("A"), g("D"))), V.dist(g("D"), g("G")))));
    const beyond = (from, to) => g => V.add(g(from), V.mul(V.unit(V.sub(g(to), g(from))), V.dist(g("D"), g("G")) + 50));
    S.pt("E", beyond("D", "A")); S.pt("F", beyond("D", "B"));
    S.seg("AE", "A", "E"); S.seg("BF", "B", "F");
    S.circ("cB", "B", "C", { st: "blue" });
    S.pt("H", g => V.sub(V.mul(g("B"), 2), g("C")));
    S.circ("cD", "D", "G", { st: "yel" });
    S.pt("K", g => V.sub(V.mul(g("D"), 2), g("G")));
    S.seg("DG", "D", "G", { st: "yel" }); S.seg("DL", "D", "L", { st: "yel" });
    S.seg("BG", "B", "G", { st: "red" }); S.seg("AL", "A", "L", { st: "red" });
  },
  steps: [
    { show: ["A", "B", "C", "BC"] },
    { show: ["AB"], why: ["P1"] },
    { show: ["D", "DA", "DB"], why: ["I.1"] },
    { show: ["E", "F", "AE", "BF"], why: ["P2"] },
    { show: ["cB", "G", "H"], why: ["P3"] },
    { show: ["cD", "K", "L"], why: ["P3"] },
    { show: ["BG"], hl: ["BC", "BG"], why: ["D15"] },
    { show: ["DG", "DL"], hl: ["DG", "DL"], why: ["D15"] },
    { show: ["AL"], hide: ["DG", "DL"], hl: ["AL", "BG"], why: ["A3"] },
    { hl: ["AL", "BC"], why: ["A1"] }
  ],
  text: {
    zh: [
      "设 A 是已知点，BC 是已知线段。要求以 A 为端点作一条线段等于 BC。",
      "从点 A 到点 B 连接线段 AB。",
      "在 AB 上作等边三角形 DAB。",
      "延长 DA、DB 成直线 AE、BF。",
      "以 B 为圆心、BC 为距离作圆 CGH，它与 BF 交于 G。",
      "再以 D 为圆心、DG 为距离作圆 GKL，它与 AE 交于 L。",
      "因为点 B 是圆 CGH 的圆心，所以 BC 等于 BG。",
      "又因为点 D 是圆 GKL 的圆心，所以 DL 等于 DG。",
      "其中 DA 等于 DB，从等量 DL、DG 中分别减去 DA、DB，所以余量 AL 等于余量 BG。",
      "已证 BC 也等于 BG，所以 AL、BC 都等于 BG。等于同量的量彼此相等，所以 AL 也等于 BC。于是在已知点 A 作出了线段 AL 等于已知线段 BC。"
    ],
    en: [
      "Let A be the given point, and BC the given straight line. It is required to place at the point A a straight line equal to BC.",
      "From the point A to the point B let the straight line AB be joined.",
      "On AB let the equilateral triangle DAB be constructed.",
      "Let the straight lines AE, BF be produced in a straight line with DA, DB.",
      "With centre B and distance BC let the circle CGH be described; it meets BF at G.",
      "Again, with centre D and distance DG let the circle GKL be described; it meets AE at L.",
      "Since the point B is the centre of the circle CGH, BC is equal to BG.",
      "Again, since the point D is the centre of the circle GKL, DL is equal to DG.",
      "And in these DA is equal to DB; subtracting DA, DB from the equals DL, DG, the remainder AL is equal to the remainder BG.",
      "But BC was also proved equal to BG; therefore each of the straight lines AL, BC is equal to BG. Things which are equal to the same thing are also equal to one another; therefore AL is also equal to BC. So at the given point A the straight line AL has been placed equal to the given straight line BC."
    ],
    es: [
      "Sea A el punto dado y BC la recta dada. Hay que colocar en el punto A una recta igual a BC.",
      "Trácese la recta AB desde el punto A hasta el punto B.",
      "Sobre AB constrúyase el triángulo equilátero DAB.",
      "Prolónguense DA, DB en línea recta, formando las rectas AE, BF.",
      "Con centro B y distancia BC descríbase el círculo CGH; corta a BF en G.",
      "De nuevo, con centro D y distancia DG descríbase el círculo GKL; corta a AE en L.",
      "Como el punto B es el centro del círculo CGH, BC es igual a BG.",
      "De nuevo, como el punto D es el centro del círculo GKL, DL es igual a DG.",
      "De ellas, DA es igual a DB; si de las iguales DL, DG se quitan DA, DB, el resto AL es igual al resto BG.",
      "Pero se demostró que BC es también igual a BG; por tanto cada una de las rectas AL, BC es igual a BG. Las cosas iguales a una misma cosa son iguales entre sí; por tanto AL es también igual a BC. Así se ha colocado en el punto dado A la recta AL igual a la recta dada BC."
    ],
    fr: [
      "Soit A le point donné et BC la droite donnée. Il faut placer au point A une droite égale à BC.",
      "Du point A au point B, menons la droite AB.",
      "Sur AB, construisons le triangle équilatéral DAB.",
      "Prolongeons DA, DB en ligne droite par les droites AE, BF.",
      "Du centre B et de l'intervalle BC, décrivons le cercle CGH ; il coupe BF en G.",
      "De nouveau, du centre D et de l'intervalle DG, décrivons le cercle GKL ; il coupe AE en L.",
      "Puisque le point B est le centre du cercle CGH, BC est égale à BG.",
      "De même, puisque le point D est le centre du cercle GKL, DL est égale à DG.",
      "Or DA est égale à DB ; en retranchant DA, DB des égales DL, DG, le reste AL est égal au reste BG.",
      "Mais on a montré que BC est aussi égale à BG ; donc chacune des droites AL, BC est égale à BG. Les choses égales à une même chose sont égales entre elles ; donc AL est aussi égale à BC. On a donc placé au point donné A la droite AL égale à la droite donnée BC."
    ],
    de: [
      "Der gegebene Punkt sei A, die gegebene Strecke BC. Man soll an den Punkt A eine Strecke gleich BC hinlegen.",
      "Vom Punkt A nach dem Punkt B ziehe man die Strecke AB.",
      "Über AB errichte man das gleichseitige Dreieck DAB.",
      "Man verlängere DA, DB geradlinig zu den Strecken AE, BF.",
      "Mit dem Mittelpunkt B und dem Abstand BC zeichne man den Kreis CGH; er schneidet BF in G.",
      "Ferner zeichne man mit dem Mittelpunkt D und dem Abstand DG den Kreis GKL; er schneidet AE in L.",
      "Da der Punkt B Mittelpunkt des Kreises CGH ist, ist BC gleich BG.",
      "Ebenso ist, da der Punkt D Mittelpunkt des Kreises GKL ist, DL gleich DG.",
      "Davon ist DA gleich DB; nimmt man DA, DB von den gleichen Strecken DL, DG weg, so ist der Rest AL gleich dem Rest BG.",
      "Wie gezeigt, ist auch BC gleich BG; also ist jede der Strecken AL, BC gleich BG. Was demselben gleich ist, ist auch einander gleich; also ist auch AL gleich BC. Damit ist an den gegebenen Punkt A die Strecke AL gleich der gegebenen Strecke BC hingelegt."
    ],
    ru: [
      "Пусть A — данная точка, BC — данная прямая. Требуется от точки A отложить прямую, равную BC.",
      "Проведём от точки A к точке B прямую AB.",
      "Построим на AB равносторонний треугольник DAB.",
      "Продолжим DA, DB по прямой до прямых AE, BF.",
      "Из центра B раствором BC опишем круг CGH; он пересекает BF в точке G.",
      "И далее из центра D раствором DG опишем круг GKL; он пересекает AE в точке L.",
      "Так как точка B — центр круга CGH, то BC равна BG.",
      "Далее, так как точка D — центр круга GKL, то DL равна DG.",
      "Из них DA равна DB; если от равных DL, DG отнять DA, DB, то остаток AL равен остатку BG.",
      "Доказано же, что и BC равна BG; значит, каждая из прямых AL, BC равна BG. Равные одному и тому же равны и между собой; значит, и AL равна BC. Итак, от данной точки A отложена прямая AL, равная данной прямой BC."
    ],
    ar: [
      "لتكن A النقطة المعلومة، وBC الخط المستقيم المعلوم. ونريد أن نضع عند النقطة A خطًا مستقيمًا مساويًا لـ BC.",
      "نصل من النقطة A إلى النقطة B الخط AB.",
      "ونعمل على AB المثلث المتساوي الأضلاع DAB.",
      "ونُخرج DA، DB على استقامتهما إلى الخطين AE، BF.",
      "ونرسم على المركز B وببُعد BC دائرة CGH، فتقطع BF عند G.",
      "ونرسم أيضًا على المركز D وببُعد DG دائرة GKL، فتقطع AE عند L.",
      "فلأن النقطة B مركز دائرة CGH، يكون BC مساويًا لـ BG.",
      "ولأن النقطة D مركز دائرة GKL، يكون DL مساويًا لـ DG.",
      "ومنهما DA مساوٍ لـ DB؛ فإذا نقصنا DA، DB من المتساويين DL، DG بقي AL مساويًا للباقي BG.",
      "وقد تبيّن أن BC أيضًا مساوٍ لـ BG؛ فكلٌّ من الخطين AL، BC مساوٍ لـ BG. والأشياء المساوية لشيء واحد متساوية؛ فـ AL مساوٍ لـ BC. فقد وُضع عند النقطة المعلومة A الخط AL مساويًا للخط المعلوم BC."
    ],
    hi: [
      "मान लीजिए A दिया गया बिंदु है और BC दी गई सरल रेखा है। बिंदु A पर BC के बराबर एक सरल रेखा रखनी है।",
      "बिंदु A से बिंदु B तक सरल रेखा AB मिलाइए।",
      "AB पर समबाहु त्रिभुज DAB बनाइए।",
      "DA, DB को सीध में बढ़ाकर सरल रेखाएँ AE, BF बनाइए।",
      "केंद्र B और दूरी BC से वृत्त CGH खींचिए; यह BF को G पर काटता है।",
      "फिर केंद्र D और दूरी DG से वृत्त GKL खींचिए; यह AE को L पर काटता है।",
      "चूँकि बिंदु B वृत्त CGH का केंद्र है, इसलिए BC, BG के बराबर है।",
      "फिर, चूँकि बिंदु D वृत्त GKL का केंद्र है, इसलिए DL, DG के बराबर है।",
      "इनमें DA, DB के बराबर है; बराबर DL, DG में से DA, DB घटाने पर शेष AL शेष BG के बराबर है।",
      "पहले दिखाया जा चुका है कि BC भी BG के बराबर है; अतः AL और BC दोनों BG के बराबर हैं। जो एक ही वस्तु के बराबर हों वे परस्पर भी बराबर होते हैं; इसलिए AL भी BC के बराबर है। इस प्रकार दिए गए बिंदु A पर दी गई सरल रेखा BC के बराबर सरल रेखा AL रख दी गई।"
    ],
    ja: [
      "A を与えられた点、BC を与えられた直線とする。点 A に BC に等しい直線を置かなければならない。",
      "点 A から点 B へ直線 AB を引く。",
      "AB の上に正三角形 DAB を作図する。",
      "DA、DB を一直線に延長して直線 AE、BF とする。",
      "中心 B、距離 BC で円 CGH を描く。それは BF と G で交わる。",
      "また中心 D、距離 DG で円 GKL を描く。それは AE と L で交わる。",
      "点 B は円 CGH の中心だから、BC は BG に等しい。",
      "また点 D は円 GKL の中心だから、DL は DG に等しい。",
      "このうち DA は DB に等しい。等しい DL、DG からそれぞれ DA、DB を引けば、残りの AL は残りの BG に等しい。",
      "BC も BG に等しいことはすでに示した。よって AL、BC はどちらも BG に等しい。同じものに等しいものは互いにも等しいから、AL は BC にも等しい。こうして与えられた点 A に、与えられた直線 BC に等しい直線 AL が置かれた。"
    ]
  }
});
