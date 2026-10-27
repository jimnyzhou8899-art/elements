// Proposition I.30
PROP(30, {
  vb: [0, 0, 720, 440],
  build(S) {
    S.free("G", 250, 80, { ld: { x: 0.6, y: -1 } }); S.free("B", 620, 70);
    S.free("H", 320, 220, { ld: { x: -1, y: -0.7 } }); S.free("D", 650, 370);
    const d = g => V.unit(V.sub(g("B"), g("G")));
    S.pt("A", g => V.sub(g("G"), V.mul(d(g), 200)));
    S.pt("E", g => V.sub(g("H"), V.mul(d(g), 270)));
    S.pt("F", g => V.add(g("H"), V.mul(d(g), 300)));
    S.pt("C", g => V.sub(g("D"), V.mul(d(g), 590)));
    S.pt("K", g => intersect({ k: "L", a: g("G"), b: g("H"), seg: false }, { k: "L", a: g("C"), b: g("D"), seg: false })[0], { ld: { x: -0.6, y: 1 } });
    S.seg("AB", "A", "B"); S.seg("EF", "E", "F"); S.seg("CD", "C", "D");
    S.seg("GK", "G", "K", { st: "aux" });
    S.ang("aAGK", "A", "G", "K", { st: "red", r: 30 });
    S.ang("aGHF", "G", "H", "F", { st: "red", r: 30 });
    S.ang("aGKD", "G", "K", "D", { st: "red", r: 30 });
  },
  steps: [
    { show: ["A", "B", "C", "D", "E", "F", "AB", "EF", "CD"] },
    { show: ["G", "H", "K", "GK"] },
    { show: ["aAGK", "aGHF"], hl: ["AB", "EF"], why: ["I.29"] },
    { show: ["aGKD"], hl: ["EF", "CD"], why: ["I.29"] },
    { hl: ["AB", "CD"], why: ["A1", "I.27"] }
  ],
  text: {
    zh: [
      "设直线 AB、CD 都平行于 EF。断言：AB 也平行于 CD。（拖动各点试试。）",
      "作直线 GK 落在它们上面。",
      "因为直线 GK 落在平行直线 AB、EF 上，所以 ∠AGK 等于 ∠GHF。",
      "又因为直线 GK 落在平行直线 EF、CD 上，所以 ∠GHF 等于 ∠GKD。",
      "所以 ∠AGK 也等于 ∠GKD，而它们是内错角，所以 AB 平行于 CD。"
    ],
    en: [
      "Let each of the straight lines AB, CD be parallel to EF. The claim: AB is also parallel to CD. (Try dragging the points.)",
      "Let the straight line GK fall upon them.",
      "Since the straight line GK falls on the parallel straight lines AB, EF, the angle AGK is equal to the angle GHF.",
      "Again, since the straight line GK falls on the parallel straight lines EF, CD, the angle GHF is equal to the angle GKD.",
      "Therefore the angle AGK is also equal to the angle GKD; and they are alternate. Therefore AB is parallel to CD."
    ],
    es: [
      "Sea cada una de las rectas AB, CD paralela a EF. Se afirma que AB es también paralela a CD. (Prueba a arrastrar los puntos.)",
      "Caiga sobre ellas la recta GK.",
      "Como la recta GK cae sobre las rectas paralelas AB, EF, el ángulo AGK es igual al ángulo GHF.",
      "De nuevo, como la recta GK cae sobre las rectas paralelas EF, CD, el ángulo GHF es igual al ángulo GKD.",
      "Por tanto el ángulo AGK es también igual al ángulo GKD; y son alternos. Por tanto AB es paralela a CD."
    ],
    fr: [
      "Que chacune des droites AB, CD soit parallèle à EF. Je dis que AB est aussi parallèle à CD. (Essayez de déplacer les points.)",
      "Que la droite GK tombe sur elles.",
      "Puisque la droite GK tombe sur les droites parallèles AB, EF, l'angle AGK est égal à l'angle GHF.",
      "De même, puisque la droite GK tombe sur les droites parallèles EF, CD, l'angle GHF est égal à l'angle GKD.",
      "Donc l'angle AGK est aussi égal à l'angle GKD ; et ils sont alternes. Donc AB est parallèle à CD."
    ],
    de: [
      "Jede der Geraden AB, CD sei parallel zu EF. Behauptung: Auch AB ist parallel zu CD. (Ziehen Sie die Punkte.)",
      "Die Gerade GK falle auf sie.",
      "Da die Gerade GK auf die parallelen Geraden AB, EF fällt, ist der Winkel AGK gleich dem Winkel GHF.",
      "Ebenso ist, da die Gerade GK auf die parallelen Geraden EF, CD fällt, der Winkel GHF gleich dem Winkel GKD.",
      "Also ist auch der Winkel AGK gleich dem Winkel GKD; und sie sind Wechselwinkel. Also ist AB parallel zu CD."
    ],
    ru: [
      "Пусть каждая из прямых AB, CD параллельна EF. Утверждается, что и AB параллельна CD. (Попробуйте перетащить точки.)",
      "Пусть на них падает прямая GK.",
      "Так как прямая GK падает на параллельные прямые AB, EF, угол AGK равен углу GHF.",
      "Далее, так как прямая GK падает на параллельные прямые EF, CD, угол GHF равен углу GKD.",
      "Значит, и угол AGK равен углу GKD; и они накрест лежащие. Значит, AB параллельна CD."
    ],
    ar: [
      "ليكن كلٌّ من الخطين AB، CD موازيًا لـ EF. فنقول: إن AB أيضًا موازٍ لـ CD. (جرّب سحب النقاط.)",
      "وليقع عليها الخط المستقيم GK.",
      "لأن الخط GK وقع على الخطين المتوازيين AB، EF، فالزاوية AGK مساوية للزاوية GHF.",
      "وأيضًا لأن الخط GK وقع على الخطين المتوازيين EF، CD، فالزاوية GHF مساوية للزاوية GKD.",
      "فالزاوية AGK أيضًا مساوية للزاوية GKD، وهما متبادلتان. فـ AB موازٍ لـ CD."
    ],
    hi: [
      "मान लीजिए सरल रेखाएँ AB, CD दोनों EF के समांतर हैं। दावा: AB भी CD के समांतर है। (बिंदुओं को खींचकर देखिए।)",
      "मान लीजिए सरल रेखा GK उन पर पड़ती है।",
      "चूँकि सरल रेखा GK समांतर सरल रेखाओं AB, EF पर पड़ती है, इसलिए कोण AGK कोण GHF के बराबर है।",
      "फिर, चूँकि सरल रेखा GK समांतर सरल रेखाओं EF, CD पर पड़ती है, इसलिए कोण GHF कोण GKD के बराबर है।",
      "अतः कोण AGK भी कोण GKD के बराबर है; और ये एकांतर कोण हैं। इसलिए AB, CD के समांतर है।"
    ],
    ja: [
      "直線 AB、CD がどちらも EF に平行であるとする。主張：AB も CD に平行である。（点をドラッグしてみてください。）",
      "直線 GK をこれらに交わるように引く。",
      "直線 GK は平行な直線 AB、EF に交わるから、角 AGK は角 GHF に等しい。",
      "また直線 GK は平行な直線 EF、CD に交わるから、角 GHF は角 GKD に等しい。",
      "よって角 AGK も角 GKD に等しく、これらは錯角である。ゆえに AB は CD に平行である。"
    ]
  }
});
