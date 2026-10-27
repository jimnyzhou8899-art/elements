// Proposition I.9
PROP(9, {
  vb: [0, 0, 720, 580],
  build(S) {
    S.free("A", 120, 450); S.free("B", 620, 450); S.free("C", 520, 120);
    S.seg("AB", "A", "B"); S.seg("AC", "A", "C");
    S.glide("D", 0.42, (g, t) => V.lerp(g("A"), g("B"), t),
      (g, m) => Math.min(0.95, Math.max(0.08, V.dot(V.sub(m, g("A")), V.sub(g("B"), g("A"))) / V.dot(V.sub(g("B"), g("A")), V.sub(g("B"), g("A"))))));
    S.pt("E", g => V.add(g("A"), V.mul(V.unit(V.sub(g("C"), g("A"))), V.dist(g("A"), g("D")))));
    S.circ("cA", "A", "D", { st: "aux" });
    S.seg("DE", "D", "E", { st: "yel" });
    S.circ("cD", "D", "E", { st: "aux" }); S.circ("cE", "E", "D", { st: "aux" });
    S.pt("F", g => apex(g("D"), g("E"), g("A")));
    S.seg("DF", "D", "F", { st: "blue" }); S.seg("EF", "E", "F", { st: "blue" });
    S.seg("AF", "A", "F", { st: "red" });
    S.ang("aD", "D", "A", "F", { st: "red", r: 46 }); S.ang("aE", "F", "A", "E", { st: "yel", r: 38 });
  },
  steps: [
    { show: ["A", "B", "C", "AB", "AC"] },
    { show: ["D"], hl: ["D"] },
    { show: ["cA", "E"], why: ["I.3"] },
    { show: ["DE"], why: ["P1"] },
    { show: ["cD", "cE", "F", "DF", "EF"], why: ["I.1"] },
    { show: ["AF"], hide: ["cA", "cD", "cE"], why: ["P1"] },
    { show: ["aD", "aE"], hl: ["DF", "EF", "AF"], why: ["I.8"] }
  ],
  text: {
    zh: [
      "设 ∠BAC 是已知直线角。要求二等分它。",
      "在 AB 上任取一点 D（可以拖动它）。",
      "在 AC 上截取 AE 等于 AD。",
      "连接 DE。",
      "在 DE 上作等边三角形 DEF，使 F 在与 A 相对的一侧。",
      "连接 AF。断言：∠BAC 被直线 AF 二等分。",
      "因为 AD 等于 AE，AF 是公共边，所以两边 DA、AF 分别等于两边 EA、AF；又底 DF 等于底 EF，所以 ∠DAF 等于 ∠EAF。已知直线角 BAC 被直线 AF 二等分。"
    ],
    en: [
      "Let the angle BAC be the given rectilineal angle. It is required to bisect it.",
      "Let a point D be taken at random on AB (you can drag it).",
      "From AC let AE be cut off equal to AD.",
      "Let DE be joined.",
      "On DE let the equilateral triangle DEF be constructed, with F on the side away from A.",
      "Let AF be joined. The claim: the angle BAC has been bisected by the straight line AF.",
      "Since AD is equal to AE, and AF is common, the two sides DA, AF are equal to the two sides EA, AF respectively; and the base DF is equal to the base EF; therefore the angle DAF is equal to the angle EAF. So the given rectilineal angle BAC has been bisected by the straight line AF."
    ],
    es: [
      "Sea el ángulo BAC el ángulo rectilíneo dado. Hay que dividirlo en dos partes iguales.",
      "Tómese en AB un punto cualquiera D (puedes arrastrarlo).",
      "Quítese de AC la recta AE igual a AD.",
      "Trácese DE.",
      "Sobre DE constrúyase el triángulo equilátero DEF, con F en el lado opuesto a A.",
      "Trácese AF. Se afirma que el ángulo BAC ha sido dividido en dos partes iguales por la recta AF.",
      "Como AD es igual a AE y AF es común, los dos lados DA, AF son iguales respectivamente a los dos lados EA, AF; y la base DF es igual a la base EF; por tanto el ángulo DAF es igual al ángulo EAF. Así, el ángulo rectilíneo dado BAC ha sido dividido en dos partes iguales por la recta AF."
    ],
    fr: [
      "Soit l'angle BAC l'angle rectiligne donné. Il faut le partager en deux parties égales.",
      "Prenons sur AB un point quelconque D (vous pouvez le déplacer).",
      "Retranchons de AC la droite AE égale à AD.",
      "Menons DE.",
      "Sur DE, construisons le triangle équilatéral DEF, avec F du côté opposé à A.",
      "Menons AF. Je dis que l'angle BAC est partagé en deux parties égales par la droite AF.",
      "Puisque AD est égale à AE et que AF est commune, les deux côtés DA, AF sont égaux aux deux côtés EA, AF, chacun à chacun ; et la base DF est égale à la base EF ; donc l'angle DAF est égal à l'angle EAF. L'angle rectiligne donné BAC est donc partagé en deux parties égales par la droite AF."
    ],
    de: [
      "Der gegebene geradlinige Winkel sei der Winkel BAC. Man soll ihn halbieren.",
      "Auf AB nehme man einen beliebigen Punkt D an (Sie können ihn ziehen).",
      "Von AC trage man AE gleich AD ab.",
      "Man ziehe DE.",
      "Über DE errichte man das gleichseitige Dreieck DEF, wobei F auf der von A abgewandten Seite liegt.",
      "Man ziehe AF. Behauptung: Der Winkel BAC wird von der Strecke AF halbiert.",
      "Da AD gleich AE ist und AF gemeinsam ist, sind die zwei Seiten DA, AF den zwei Seiten EA, AF entsprechend gleich; auch ist die Grundlinie DF gleich der Grundlinie EF; also ist der Winkel DAF gleich dem Winkel EAF. Damit ist der gegebene geradlinige Winkel BAC von der Strecke AF halbiert."
    ],
    ru: [
      "Пусть угол BAC — данный прямолинейный угол. Требуется рассечь его пополам.",
      "Возьмём на AB произвольную точку D (её можно перетаскивать).",
      "Отнимем от AC прямую AE, равную AD.",
      "Проведём DE.",
      "Построим на DE равносторонний треугольник DEF так, чтобы точка F лежала по другую сторону от A.",
      "Проведём AF. Утверждается, что угол BAC рассечён пополам прямой AF.",
      "Так как AD равна AE, а AF общая, то две стороны DA, AF равны соответственно двум сторонам EA, AF; и основание DF равно основанию EF; значит, угол DAF равен углу EAF. Итак, данный прямолинейный угол BAC рассечён пополам прямой AF."
    ],
    ar: [
      "لتكن الزاوية BAC الزاوية المستقيمة الخطين المعلومة. ونريد أن نقسمها بنصفين.",
      "نأخذ على AB نقطة كيفما اتفق ولتكن D (يمكنك سحبها).",
      "ونفصل من AC الخط AE مساويًا لـ AD.",
      "ونصل DE.",
      "ونعمل على DE المثلث المتساوي الأضلاع DEF، بحيث تكون F في الجهة المقابلة لـ A.",
      "ونصل AF. فنقول: إن الزاوية BAC قد قُسمت بنصفين بالخط AF.",
      "لأن AD مساوٍ لـ AE، وAF مشترك، يكون الضلعان DA، AF مساويين للضلعين EA، AF كلٌّ لنظيره؛ والقاعدة DF مساوية للقاعدة EF؛ فالزاوية DAF مساوية للزاوية EAF. فقد قُسمت الزاوية المعلومة BAC بنصفين بالخط AF."
    ],
    hi: [
      "मान लीजिए कोण BAC दिया गया ऋजुरेखीय कोण है। इसे समद्विभाजित करना है।",
      "AB पर कोई भी बिंदु D लीजिए (इसे खींचा जा सकता है)।",
      "AC में से AD के बराबर AE काटिए।",
      "DE मिलाइए।",
      "DE पर समबाहु त्रिभुज DEF बनाइए, जिसमें F बिंदु A की विपरीत ओर हो।",
      "AF मिलाइए। दावा: कोण BAC सरल रेखा AF द्वारा समद्विभाजित होता है।",
      "चूँकि AD, AE के बराबर है और AF उभयनिष्ठ है, इसलिए दो भुजाएँ DA, AF क्रमशः दो भुजाओं EA, AF के बराबर हैं; और आधार DF आधार EF के बराबर है; इसलिए कोण DAF कोण EAF के बराबर है। इस प्रकार दिया गया ऋजुरेखीय कोण BAC सरल रेखा AF द्वारा समद्विभाजित हो गया।"
    ],
    ja: [
      "角 BAC を与えられた直線角とする。これを 2 等分しなければならない。",
      "AB 上に任意の点 D をとる（ドラッグできます）。",
      "AC から AD に等しい AE を切り取る。",
      "DE を結ぶ。",
      "DE の上に正三角形 DEF を、F が A と反対側にくるように作図する。",
      "AF を結ぶ。主張：角 BAC は直線 AF によって 2 等分される。",
      "AD は AE に等しく、AF は共通だから、2 辺 DA、AF は 2 辺 EA、AF にそれぞれ等しい。また底辺 DF は底辺 EF に等しい。よって角 DAF は角 EAF に等しい。こうして与えられた直線角 BAC は直線 AF によって 2 等分された。"
    ]
  }
});
