// Proposition I.31
PROP(31, {
  vb: [0, 0, 720, 400],
  build(S) {
    S.free("B", 60, 320, { ld: { x: 0, y: 1 } }); S.free("C", 660, 320, { ld: { x: 0, y: 1 } });
    S.free("A", 380, 110, { ld: { x: 0.3, y: -1 } });
    S.glide("D", 0.32, (g, t) => V.lerp(g("B"), g("C"), t),
      (g, m) => Math.min(0.9, Math.max(0.1, V.dot(V.sub(m, g("B")), V.sub(g("C"), g("B"))) / V.dot(V.sub(g("C"), g("B")), V.sub(g("C"), g("B"))))), { ld: { x: 0, y: 1 } });
    const u = g => V.unit(V.sub(g("C"), g("B")));
    // AE makes the angle DAE equal to ADC, so it runs back toward B's side
    S.pt("E", g => V.sub(g("A"), V.mul(u(g), 230)));
    S.pt("F", g => V.add(g("A"), V.mul(u(g), 230)));
    S.seg("BC", "B", "C"); S.seg("AD", "A", "D", { st: "aux" });
    S.seg("AE", "A", "E", { st: "red" }); S.seg("AF", "A", "F", { st: "red" });
    S.ang("aDAE", "D", "A", "E", { st: "blue", r: 34 }); S.ang("aADC", "A", "D", "C", { st: "blue", r: 34 });
  },
  steps: [
    { show: ["A", "B", "C", "BC"] },
    { show: ["D", "AD"], why: ["P1"] },
    { show: ["E", "AE", "aDAE", "aADC"], why: ["I.23"] },
    { show: ["F", "AF"], why: ["P2"] },
    { hl: ["AE", "AF", "BC"], why: ["I.27"] }
  ],
  text: {
    zh: [
      "设 A 是已知点，BC 是已知直线。要求过点 A 作一条直线平行于 BC。（各点都可以拖动。）",
      "在 BC 上任取一点 D（可以拖动），连接 AD。",
      "在直线 DA 上的点 A 处作 ∠DAE 等于 ∠ADC。",
      "把 EA 延长到 F。",
      "因为直线 AD 落在两条直线 BC、EF 上，所成的内错角 ∠EAD、∠ADC 相等，所以 EF 平行于 BC。这样就过点 A 作出了平行于 BC 的直线 EAF。"
    ],
    en: [
      "Let A be the given point, and BC the given straight line. It is required to draw through the point A a straight line parallel to BC. (Every point can be dragged.)",
      "Let a point D be taken at random on BC (you can drag it), and let AD be joined.",
      "On the straight line DA, at the point A on it, let the angle DAE be constructed equal to the angle ADC.",
      "Let the straight line EA be produced in a straight line to F.",
      "Since the straight line AD falling on the two straight lines BC, EF makes the alternate angles EAD, ADC equal, EF is parallel to BC. Therefore through the given point A the straight line EAF has been drawn parallel to BC."
    ],
    es: [
      "Sea A el punto dado y BC la recta dada. Hay que trazar por el punto A una recta paralela a BC. (Todos los puntos se pueden arrastrar.)",
      "Tómese al azar un punto D en BC (puedes arrastrarlo) y trácese AD.",
      "Sobre la recta DA, en su punto A, constrúyase el ángulo DAE igual al ángulo ADC.",
      "Prolónguese la recta EA en línea recta hasta F.",
      "Como la recta AD, que cae sobre las dos rectas BC, EF, forma los ángulos alternos EAD, ADC iguales, EF es paralela a BC. Por tanto por el punto dado A se ha trazado la recta EAF paralela a BC."
    ],
    fr: [
      "Soit A le point donné et BC la droite donnée. Il faut mener par le point A une droite parallèle à BC. (Tous les points peuvent être déplacés.)",
      "Prenons au hasard un point D sur BC (vous pouvez le déplacer), et menons AD.",
      "Sur la droite DA, en son point A, construisons l'angle DAE égal à l'angle ADC.",
      "Prolongeons la droite EA en ligne droite jusqu'en F.",
      "Puisque la droite AD, tombant sur les deux droites BC, EF, fait les angles alternes EAD, ADC égaux, EF est parallèle à BC. Donc par le point donné A on a mené la droite EAF parallèle à BC."
    ],
    de: [
      "Der gegebene Punkt sei A und die gegebene Gerade BC. Man soll durch den Punkt A eine Gerade parallel zu BC ziehen. (Alle Punkte lassen sich ziehen.)",
      "Auf BC nehme man einen beliebigen Punkt D an (er lässt sich ziehen) und ziehe AD.",
      "An der Geraden DA errichte man im Punkt A den Winkel DAE gleich dem Winkel ADC.",
      "Man verlängere die Gerade EA geradlinig bis F.",
      "Da die Gerade AD, die auf die zwei Geraden BC, EF fällt, die Wechselwinkel EAD, ADC gleich macht, ist EF parallel zu BC. Also ist durch den gegebenen Punkt A die Gerade EAF parallel zu BC gezogen."
    ],
    ru: [
      "Пусть A — данная точка, а BC — данная прямая. Требуется через точку A провести прямую, параллельную BC. (Все точки можно перетаскивать.)",
      "Возьмём на BC произвольную точку D (её можно перетаскивать) и проведём AD.",
      "На прямой DA при точке A построим угол DAE, равный углу ADC.",
      "Продолжим прямую EA по прямой до F.",
      "Так как прямая AD, падая на две прямые BC, EF, образует равные накрест лежащие углы EAD, ADC, то EF параллельна BC. Итак, через данную точку A проведена прямая EAF, параллельная BC."
    ],
    ar: [
      "لتكن A النقطة المعلومة، وBC الخط المستقيم المعلوم. ونريد أن نُخرج من النقطة A خطًا مستقيمًا موازيًا لـ BC. (يمكن سحب جميع النقاط.)",
      "نأخذ على BC نقطة كيفما اتفق ولتكن D (يمكنك سحبها)، ونصل AD.",
      "ونعمل على الخط DA عند النقطة A الزاوية DAE مساوية للزاوية ADC.",
      "ونُخرج الخط EA على استقامته إلى F.",
      "لأن الخط AD الواقع على الخطين BC، EF جعل الزاويتين المتبادلتين EAD، ADC متساويتين، فـ EF موازٍ لـ BC. فقد أخرجنا من النقطة المعلومة A الخط EAF موازيًا لـ BC."
    ],
    hi: [
      "मान लीजिए A दिया गया बिंदु है और BC दी गई सरल रेखा है। बिंदु A से होकर BC के समांतर सरल रेखा खींचनी है। (सभी बिंदुओं को खींचा जा सकता है।)",
      "BC पर कोई भी बिंदु D लीजिए (इसे खींचा जा सकता है), और AD मिलाइए।",
      "सरल रेखा DA पर बिंदु A पर कोण DAE को कोण ADC के बराबर बनाइए।",
      "सरल रेखा EA को सीध में F तक बढ़ाइए।",
      "चूँकि सरल रेखा AD दो सरल रेखाओं BC, EF पर पड़कर एकांतर कोण EAD, ADC बराबर बनाती है, इसलिए EF, BC के समांतर है। अतः दिए गए बिंदु A से होकर BC के समांतर सरल रेखा EAF खींची गई।"
    ],
    ja: [
      "A を与えられた点、BC を与えられた直線とする。点 A を通って BC に平行な直線を引かなければならない。（すべての点をドラッグできます。）",
      "BC 上に任意の点 D をとり（ドラッグできます）、AD を結ぶ。",
      "直線 DA 上の点 A において、角 DAE を角 ADC に等しく作図する。",
      "直線 EA を一直線に F まで延長する。",
      "直線 AD は 2 直線 BC、EF に交わって錯角 EAD、ADC を等しくするから、EF は BC に平行である。よって与えられた点 A を通って BC に平行な直線 EAF が引かれた。"
    ]
  }
});
