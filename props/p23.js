// Proposition I.23
PROP(23, {
  vb: [0, 0, 720, 440],
  build(S) {
    S.free("C", 60, 330); S.free("D", 300, 350); S.free("E", 210, 140);
    S.free("A", 380, 390, { ld: { x: -0.4, y: 1 } }); S.free("B", 690, 390);
    S.pt("F", g => V.add(g("A"), V.mul(V.unit(V.sub(g("B"), g("A"))), V.dist(g("C"), g("D")))), { ld: { x: 0, y: 1 } });
    S.pt("G", g => carry(g("E"), g("C"), g("D"), g("A"), g("F"), 1));
    S.seg("AB", "A", "B");
    S.seg("CD", "C", "D", { st: "red" }); S.seg("CE", "C", "E", { st: "blue" }); S.seg("DE", "D", "E", { st: "yel" });
    S.seg("AF", "A", "F", { st: "red" }); S.seg("AG", "A", "G", { st: "blue" }); S.seg("FG", "F", "G", { st: "yel" });
    S.ang("aDCE", "D", "C", "E", { st: "yel", r: 40 });
    S.ang("aFAG", "F", "A", "G", { st: "yel", r: 40 });
  },
  steps: [
    { show: ["A", "B", "AB", "C", "D", "E", "CD", "CE", "aDCE"] },
    { show: ["DE"], why: ["P1"] },
    { show: ["F", "G", "AF", "AG", "FG"], why: ["I.22"] },
    { show: ["aFAG"], hl: ["CD", "CE", "DE", "AF", "AG", "FG"], why: ["I.8"] }
  ],
  text: {
    zh: [
      "设 AB 是已知直线，A 是它上面的点，∠DCE 是已知直线角。要求在直线 AB 上的点 A 处作一个角等于 ∠DCE。（各点都可以拖动。）",
      "在直线 CD、CE 上各任取点 D、E，连接 DE。",
      "用分别等于 CD、DE、CE 的三条直线作三角形 AFG，使 CD 等于 AF，CE 等于 AG，DE 等于 FG。",
      "因为两边 DC、CE 分别等于两边 FA、AG，底 DE 等于底 FG，所以 ∠DCE 等于 ∠FAG。这样就在直线 AB 上的点 A 处作出了等于已知直线角 ∠DCE 的 ∠FAG。"
    ],
    en: [
      "Let AB be the given straight line, A the point on it, and the angle DCE the given rectilineal angle. It is required to construct on the straight line AB at the point A an angle equal to the angle DCE. (Every point can be dragged.)",
      "On the straight lines CD, CE let the points D, E be taken at random, and let DE be joined.",
      "Out of three straight lines equal to CD, DE, CE let the triangle AFG be constructed, so that CD is equal to AF, CE to AG, and DE to FG.",
      "Since the two sides DC, CE are equal to the two sides FA, AG, and the base DE is equal to the base FG, the angle DCE is equal to the angle FAG. Therefore on the straight line AB at the point A the angle FAG has been constructed equal to the given rectilineal angle DCE."
    ],
    es: [
      "Sea AB la recta dada, A el punto en ella y el ángulo DCE el ángulo rectilíneo dado. Hay que construir sobre la recta AB, en el punto A, un ángulo igual al ángulo DCE. (Todos los puntos se pueden arrastrar.)",
      "Tómense al azar sobre las rectas CD, CE los puntos D, E, y trácese DE.",
      "Con tres rectas iguales a CD, DE, CE constrúyase el triángulo AFG, de modo que CD sea igual a AF, CE a AG, y DE a FG.",
      "Como los dos lados DC, CE son iguales a los dos lados FA, AG, y la base DE es igual a la base FG, el ángulo DCE es igual al ángulo FAG. Por tanto, sobre la recta AB, en el punto A, se ha construido el ángulo FAG igual al ángulo rectilíneo dado DCE."
    ],
    fr: [
      "Soit AB la droite donnée, A le point sur elle, et l'angle DCE l'angle rectiligne donné. Il faut construire sur la droite AB, au point A, un angle égal à l'angle DCE. (Tous les points peuvent être déplacés.)",
      "Prenons au hasard sur les droites CD, CE les points D, E, et menons DE.",
      "Avec trois droites égales à CD, DE, CE, construisons le triangle AFG, de sorte que CD soit égale à AF, CE à AG, et DE à FG.",
      "Puisque les deux côtés DC, CE sont égaux aux deux côtés FA, AG, et que la base DE est égale à la base FG, l'angle DCE est égal à l'angle FAG. Donc sur la droite AB, au point A, on a construit l'angle FAG égal à l'angle rectiligne donné DCE."
    ],
    de: [
      "Die gegebene Gerade sei AB, der Punkt auf ihr A und der gegebene geradlinige Winkel der Winkel DCE. Man soll an der Geraden AB im Punkt A einen Winkel gleich dem Winkel DCE errichten. (Alle Punkte lassen sich ziehen.)",
      "Auf den Geraden CD, CE nehme man beliebig die Punkte D, E an und ziehe DE.",
      "Aus drei Geraden, die CD, DE, CE gleich sind, errichte man das Dreieck AFG, so dass CD gleich AF, CE gleich AG und DE gleich FG ist.",
      "Da die zwei Seiten DC, CE den zwei Seiten FA, AG gleich sind und die Grundlinie DE gleich der Grundlinie FG, ist der Winkel DCE gleich dem Winkel FAG. Also ist an der Geraden AB im Punkt A der Winkel FAG gleich dem gegebenen geradlinigen Winkel DCE errichtet."
    ],
    ru: [
      "Пусть AB — данная прямая, A — точка на ней, а угол DCE — данный прямолинейный угол. Требуется на прямой AB при точке A построить угол, равный углу DCE. (Все точки можно перетаскивать.)",
      "Возьмём наудачу на прямых CD, CE точки D, E и проведём DE.",
      "Из трёх прямых, равных CD, DE, CE, построим треугольник AFG так, чтобы CD была равна AF, CE — AG, а DE — FG.",
      "Так как две стороны DC, CE равны двум сторонам FA, AG, и основание DE равно основанию FG, угол DCE равен углу FAG. Итак, на прямой AB при точке A построен угол FAG, равный данному прямолинейному углу DCE."
    ],
    ar: [
      "ليكن AB الخط المستقيم المعلوم، وA النقطة التي عليه، والزاوية DCE الزاوية المستقيمة الخطين المعلومة. ونريد أن نعمل على الخط AB عند النقطة A زاوية مساوية للزاوية DCE. (يمكن سحب جميع النقاط.)",
      "نأخذ على الخطين CD، CE نقطتين كيفما اتفق ولتكونا D، E، ونصل DE.",
      "ونعمل من ثلاثة خطوط مساوية لـ CD، DE، CE المثلث AFG، بحيث يكون CD مساويًا لـ AF، وCE لـ AG، وDE لـ FG.",
      "لأن الضلعين DC، CE مساويان للضلعين FA، AG، والقاعدة DE مساوية للقاعدة FG، فالزاوية DCE مساوية للزاوية FAG. فقد عملنا على الخط AB عند النقطة A الزاوية FAG مساوية للزاوية المعلومة DCE."
    ],
    hi: [
      "मान लीजिए AB दी गई सरल रेखा है, A उस पर बिंदु है, और कोण DCE दिया गया ऋजुरेखीय कोण है। सरल रेखा AB पर बिंदु A पर कोण DCE के बराबर कोण बनाना है। (सभी बिंदुओं को खींचा जा सकता है।)",
      "सरल रेखाओं CD, CE पर कोई भी बिंदु D, E लीजिए, और DE मिलाइए।",
      "CD, DE, CE के बराबर तीन सरल रेखाओं से त्रिभुज AFG बनाइए, ताकि CD, AF के बराबर हो, CE, AG के बराबर हो, और DE, FG के बराबर हो।",
      "चूँकि दो भुजाएँ DC, CE दो भुजाओं FA, AG के बराबर हैं, और आधार DE आधार FG के बराबर है, इसलिए कोण DCE कोण FAG के बराबर है। अतः सरल रेखा AB पर बिंदु A पर दिए गए ऋजुरेखीय कोण DCE के बराबर कोण FAG बन गया।"
    ],
    ja: [
      "AB を与えられた直線、A をその上の点、角 DCE を与えられた直線角とする。直線 AB 上の点 A において、角 DCE に等しい角を作図しなければならない。（すべての点をドラッグできます。）",
      "直線 CD、CE 上に任意に点 D、E をとり、DE を結ぶ。",
      "CD、DE、CE に等しい 3 直線で三角形 AFG を作図し、CD を AF に、CE を AG に、DE を FG に等しくする。",
      "2 辺 DC、CE は 2 辺 FA、AG に等しく、底辺 DE は底辺 FG に等しいから、角 DCE は角 FAG に等しい。よって直線 AB 上の点 A において、与えられた直線角 DCE に等しい角 FAG が作図された。"
    ]
  }
});
