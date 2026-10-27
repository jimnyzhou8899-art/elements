// Proposition I.45
PROP(45, {
  vb: [0, 0, 720, 460],
  build(S) {
    // the given rectilineal figure ABCD and the given angle E
    S.free("A", 80, 50, { ld: { x: -0.6, y: -1 } }); S.free("B", 40, 220, { ld: { x: -1, y: 0.4 } });
    S.free("C", 230, 250, { ld: { x: 0.6, y: 1 } }); S.free("D", 240, 70, { ld: { x: 0.8, y: -0.8 } });
    S.free("E", 50, 420, { ld: { x: -1, y: 0.3 } }); S.free("E1", 200, 420, { lab: false }); S.free("E2", 120, 320, { lab: false });
    const th = g => Math.acos(Math.max(-1, Math.min(1, V.dot(V.unit(V.sub(g("E1"), g("E"))), V.unit(V.sub(g("E2"), g("E")))))));
    const tri = (p, q, r) => { const a = V.sub(q, p), b = V.sub(r, p); return Math.abs(a.x * b.y - a.y * b.x) / 2; };
    const h = 130;
    const v = g => V.mul(rot({ x: 1, y: 0 }, -th(g)), h);
    const len = (g, area) => area / (h * Math.max(0.05, Math.sin(th(g))));
    S.free("K", 320, 380, { ld: { x: 0, y: 1 } });
    // FKHG equal to ABD (I.42), and GHML equal to DBC applied to GH (I.44), both in the angle E
    S.pt("H", g => V.add(g("K"), { x: len(g, tri(g("A"), g("B"), g("D"))), y: 0 }), { ld: { x: 0, y: 1 } });
    S.pt("M", g => V.add(g("H"), { x: len(g, tri(g("D"), g("B"), g("C"))), y: 0 }), { ld: { x: 0, y: 1 } });
    S.pt("F", g => V.add(g("K"), v(g)), { ld: { x: 0, y: -1 } });
    S.pt("G", g => V.add(g("H"), v(g)), { ld: { x: 0, y: -1 } });
    S.pt("L", g => V.add(g("M"), v(g)), { ld: { x: 0, y: -1 } });
    S.poly("tABD", ["A", "B", "D"], { st: "red" }); S.poly("tDBC", ["D", "B", "C"], { st: "blue" });
    S.poly("qFKHG", ["F", "K", "H", "G"], { st: "red" }); S.poly("qGHML", ["G", "H", "M", "L"], { st: "blue" });
    S.seg("AB", "A", "B"); S.seg("BC", "B", "C"); S.seg("CD", "C", "D"); S.seg("DA", "D", "A");
    S.seg("DB", "D", "B", { st: "aux" });
    S.seg("EE1", "E", "E1"); S.seg("EE2", "E", "E2");
    S.seg("KH", "K", "H"); S.seg("HM", "H", "M"); S.seg("FG", "F", "G"); S.seg("GL", "G", "L");
    S.seg("KF", "K", "F"); S.seg("HG", "H", "G"); S.seg("ML", "M", "L");
    S.ang("aE", "E1", "E", "E2", { st: "yel", r: 30 }); S.ang("aHKF", "H", "K", "F", { st: "yel", r: 30 });
    S.ang("aGHM", "G", "H", "M", { st: "yel", r: 30 }); S.ang("aKHG", "K", "H", "G", { st: "red", r: 22 });
  },
  steps: [
    { show: ["A", "B", "C", "D", "AB", "BC", "CD", "DA", "E", "E1", "E2", "EE1", "EE2", "aE"] },
    { show: ["DB", "tABD", "tDBC"], why: ["P1"] },
    { show: ["K", "H", "F", "G", "KH", "FG", "KF", "HG", "qFKHG", "aHKF"], why: ["I.42"] },
    { show: ["M", "L", "HM", "GL", "ML", "qGHML", "aGHM"], why: ["I.44"] },
    { show: ["aKHG"], hl: ["KH", "HM", "FG", "GL"], why: ["A1", "A2", "I.29", "I.14"] },
    { hide: ["aKHG", "aGHM"], hl: ["KF", "ML"], why: ["I.30", "I.33", "A2"] }
  ],
  text: {
    zh: [
      "设 ABCD 是已知直线形，E 是已知直线角。要求在等于 ∠E 的角内作一个平行四边形，使它等于 ABCD。（各点都可以拖动。）",
      "连接 DB，把 ABCD 分成两个三角形 ABD、DBC。",
      "作平行四边形 FKHG 等于三角形 ABD，使 ∠HKF 等于 ∠E。",
      "在直线 GH 上贴合作平行四边形 GHML 等于三角形 DBC，使 ∠GHM 等于 ∠E。",
      "因为 ∠HKF、∠GHM 都等于 ∠E，两边各加上 ∠KHG，于是 ∠KHG、∠GHM 之和等于 ∠FKH、∠KHG 之和，即两个直角，所以 KH 与 HM 在同一条直线上。同理 FG 与 GL 也在同一条直线上。",
      "于是 KFLM 是平行四边形，它等于两个三角形 ABD、DBC 之和，即等于 ABCD，并且 ∠FKM 等于 ∠E。"
    ],
    en: [
      "Let ABCD be the given rectilineal figure and E the given rectilineal angle. It is required to construct, in the given angle E, a parallelogram equal to ABCD. (Every point can be dragged.)",
      "Let DB be joined, dividing ABCD into the two triangles ABD, DBC.",
      "Let the parallelogram FKHG be constructed equal to the triangle ABD, in the angle HKF equal to the angle E.",
      "To the straight line GH let the parallelogram GHML be applied equal to the triangle DBC, in the angle GHM equal to the angle E.",
      "Since each of the angles HKF, GHM is equal to the angle E, let the angle KHG be added to each; then the angles KHG, GHM are equal to the angles FKH, KHG, that is, to two right angles; therefore KH is in a straight line with HM. Similarly FG is in a straight line with GL.",
      "Therefore KFLM is a parallelogram; it is equal to the two triangles ABD, DBC, that is, to ABCD, and it has the angle FKM equal to the angle E."
    ],
    es: [
      "Sea ABCD la figura rectilínea dada y E el ángulo rectilíneo dado. Hay que construir, en el ángulo dado E, un paralelogramo igual a ABCD. (Todos los puntos se pueden arrastrar.)",
      "Trácese DB, que divide ABCD en los dos triángulos ABD, DBC.",
      "Constrúyase el paralelogramo FKHG igual al triángulo ABD, en el ángulo HKF igual al ángulo E.",
      "Aplíquese a la recta GH el paralelogramo GHML igual al triángulo DBC, en el ángulo GHM igual al ángulo E.",
      "Como cada uno de los ángulos HKF, GHM es igual al ángulo E, añádase a cada uno el ángulo KHG; entonces los ángulos KHG, GHM son iguales a los ángulos FKH, KHG, es decir, a dos rectos; por tanto KH está en línea recta con HM. Del mismo modo FG está en línea recta con GL.",
      "Por tanto KFLM es un paralelogramo; es igual a los dos triángulos ABD, DBC, es decir, a ABCD, y tiene el ángulo FKM igual al ángulo E."
    ],
    fr: [
      "Soit ABCD la figure rectiligne donnée et E l'angle rectiligne donné. Il faut construire, dans l'angle donné E, un parallélogramme égal à ABCD. (Tous les points peuvent être déplacés.)",
      "Menons DB, qui partage ABCD en deux triangles ABD, DBC.",
      "Construisons le parallélogramme FKHG égal au triangle ABD, dans l'angle HKF égal à l'angle E.",
      "Appliquons à la droite GH le parallélogramme GHML égal au triangle DBC, dans l'angle GHM égal à l'angle E.",
      "Puisque chacun des angles HKF, GHM est égal à l'angle E, ajoutons à chacun l'angle KHG ; les angles KHG, GHM sont alors égaux aux angles FKH, KHG, c'est-à-dire à deux droits ; donc KH est en ligne droite avec HM. De même FG est en ligne droite avec GL.",
      "Donc KFLM est un parallélogramme ; il est égal aux deux triangles ABD, DBC, c'est-à-dire à ABCD, et il a l'angle FKM égal à l'angle E."
    ],
    de: [
      "Die gegebene geradlinige Figur sei ABCD und der gegebene geradlinige Winkel E. Man soll im gegebenen Winkel E ein Parallelogramm errichten, das ABCD gleich ist. (Alle Punkte lassen sich ziehen.)",
      "Man ziehe DB, das ABCD in die zwei Dreiecke ABD, DBC teilt.",
      "Man errichte das Parallelogramm FKHG gleich dem Dreieck ABD im Winkel HKF gleich dem Winkel E.",
      "An die Gerade GH lege man das Parallelogramm GHML gleich dem Dreieck DBC im Winkel GHM gleich dem Winkel E an.",
      "Da jeder der Winkel HKF, GHM dem Winkel E gleich ist, füge man beiderseits den Winkel KHG hinzu; dann sind die Winkel KHG, GHM den Winkeln FKH, KHG gleich, also zwei Rechten; also liegt KH mit HM in gerader Linie. Ebenso liegt FG mit GL in gerader Linie.",
      "Also ist KFLM ein Parallelogramm; es ist den zwei Dreiecken ABD, DBC gleich, also ABCD, und hat den Winkel FKM gleich dem Winkel E."
    ],
    ru: [
      "Пусть ABCD — данная прямолинейная фигура, а E — данный прямолинейный угол. Требуется построить в данном угле E параллелограмм, равный ABCD. (Все точки можно перетаскивать.)",
      "Проведём DB, делящую ABCD на два треугольника ABD, DBC.",
      "Построим параллелограмм FKHG, равный треугольнику ABD, в угле HKF, равном углу E.",
      "Приложим к прямой GH параллелограмм GHML, равный треугольнику DBC, в угле GHM, равном углу E.",
      "Так как каждый из углов HKF, GHM равен углу E, прибавим к каждому угол KHG; тогда углы KHG, GHM равны углам FKH, KHG, то есть двум прямым; значит, KH находится на одной прямой с HM. Подобным же образом FG находится на одной прямой с GL.",
      "Значит, KFLM — параллелограмм; он равен двум треугольникам ABD, DBC, то есть ABCD, и имеет угол FKM, равный углу E."
    ],
    ar: [
      "ليكن ABCD الشكل المستقيم الخطوط المعلوم، وE الزاوية المستقيمة الخطين المعلومة. ونريد أن نعمل في الزاوية المعلومة E متوازي أضلاع مساويًا لـ ABCD. (يمكن سحب جميع النقاط.)",
      "نصل DB، فينقسم ABCD إلى المثلثين ABD، DBC.",
      "ونعمل متوازي الأضلاع FKHG مساويًا للمثلث ABD في الزاوية HKF المساوية للزاوية E.",
      "ونضيف إلى الخط GH متوازي الأضلاع GHML مساويًا للمثلث DBC في الزاوية GHM المساوية للزاوية E.",
      "لأن كلًّا من الزاويتين HKF، GHM مساوية للزاوية E، نزيد على كلٍّ منهما الزاوية KHG؛ فالزاويتان KHG، GHM مساويتان للزاويتين FKH، KHG، أي لقائمتين؛ فـ KH على استقامة HM. وبمثل ذلك FG على استقامة GL.",
      "فـ KFLM متوازي أضلاع، وهو مساوٍ للمثلثين ABD، DBC، أي لـ ABCD، وزاويته FKM مساوية للزاوية E."
    ],
    hi: [
      "मान लीजिए ABCD दी गई ऋजुरेखीय आकृति है और E दिया गया ऋजुरेखीय कोण है। दिए गए कोण E में ABCD के बराबर एक समांतर चतुर्भुज बनाना है। (सभी बिंदुओं को खींचा जा सकता है।)",
      "DB मिलाइए, जो ABCD को दो त्रिभुजों ABD, DBC में बाँटती है।",
      "त्रिभुज ABD के बराबर समांतर चतुर्भुज FKHG बनाइए, जिसका कोण HKF कोण E के बराबर हो।",
      "सरल रेखा GH पर त्रिभुज DBC के बराबर समांतर चतुर्भुज GHML लगाइए, जिसका कोण GHM कोण E के बराबर हो।",
      "चूँकि कोण HKF, GHM दोनों कोण E के बराबर हैं, दोनों में कोण KHG जोड़िए; तो कोण KHG, GHM का योग कोण FKH, KHG के योग के बराबर है, यानी दो समकोणों के; अतः KH, HM की सीध में है। इसी प्रकार FG, GL की सीध में है।",
      "इसलिए KFLM समांतर चतुर्भुज है; वह दोनों त्रिभुजों ABD, DBC के योग के बराबर है, यानी ABCD के, और उसका कोण FKM कोण E के बराबर है।"
    ],
    ja: [
      "ABCD を与えられた直線図形、E を与えられた直線角とする。与えられた角 E に等しい角をもち、ABCD に等しい平行四辺形を作図しなければならない。（すべての点をドラッグできます。）",
      "DB を結び、ABCD を 2 つの三角形 ABD、DBC に分ける。",
      "三角形 ABD に等しく、角 HKF が角 E に等しい平行四辺形 FKHG を作図する。",
      "直線 GH に、三角形 DBC に等しく、角 GHM が角 E に等しい平行四辺形 GHML を付置する。",
      "角 HKF、GHM はどちらも角 E に等しいから、それぞれに角 KHG を加えると、角 KHG、GHM の和は角 FKH、KHG の和、すなわち 2 直角に等しい。よって KH は HM と一直線をなす。同様に FG は GL と一直線をなす。",
      "ゆえに KFLM は平行四辺形であり、2 つの三角形 ABD、DBC の和、すなわち ABCD に等しく、角 FKM は角 E に等しい。"
    ]
  }
});
