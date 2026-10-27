// Proposition I.10
PROP(10, {
  vb: [0, 0, 720, 600],
  build(S) {
    S.free("A", 250, 400); S.free("B", 470, 400);
    S.seg("AB", "A", "B");
    S.circ("cA", "A", "B", { st: "aux" }); S.circ("cB", "B", "A", { st: "aux" });
    S.ix("C", "cA", "cB", 0);
    S.seg("CA", "C", "A", { st: "blue" }); S.seg("CB", "C", "B", { st: "blue" });
    S.pt("D", g => V.mid(g("A"), g("B")), { ld: { x: 0, y: 1 } });
    S.seg("CD", "C", "D", { st: "ink" });
    S.ang("a1", "A", "C", "D", { st: "yel", r: 40 }); S.ang("a2", "D", "C", "B", { st: "yel", r: 40 });
    S.seg("AD", "A", "D", { st: "red" }); S.seg("DB", "D", "B", { st: "red" });
  },
  steps: [
    { show: ["A", "B", "AB"] },
    { show: ["cA", "cB", "C", "CA", "CB"], why: ["I.1"] },
    { show: ["D", "CD", "a1", "a2"], hide: ["cA", "cB"], why: ["I.9"] },
    { show: ["AD", "DB"], hl: ["CA", "CB", "CD", "AD", "DB"], why: ["I.4"] }
  ],
  text: {
    zh: [
      "设 AB 是已知有限直线。要求二等分 AB。",
      "在 AB 上作等边三角形 ABC。",
      "用直线 CD 二等分 ∠ACB，CD 与 AB 交于 D。断言：AB 在点 D 被二等分。",
      "因为 AC 等于 CB，CD 是公共边，所以两边 AC、CD 分别等于两边 BC、CD；又 ∠ACD 等于 ∠BCD，所以底 AD 等于底 BD。已知有限直线 AB 在 D 点被二等分。"
    ],
    en: [
      "Let AB be the given finite straight line. It is required to bisect the finite straight line AB.",
      "On AB let the equilateral triangle ABC be constructed.",
      "Let the angle ACB be bisected by the straight line CD, meeting AB at D. The claim: the straight line AB has been bisected at the point D.",
      "Since AC is equal to CB, and CD is common, the two sides AC, CD are equal to the two sides BC, CD respectively; and the angle ACD is equal to the angle BCD; therefore the base AD is equal to the base BD. So the given finite straight line AB has been bisected at D."
    ],
    es: [
      "Sea AB la recta finita dada. Hay que dividir en dos partes iguales la recta finita AB.",
      "Sobre AB constrúyase el triángulo equilátero ABC.",
      "Divídase el ángulo ACB en dos partes iguales por la recta CD, que corta a AB en D. Se afirma que la recta AB ha sido dividida en dos partes iguales en el punto D.",
      "Como AC es igual a CB y CD es común, los dos lados AC, CD son iguales respectivamente a los dos lados BC, CD; y el ángulo ACD es igual al ángulo BCD; por tanto la base AD es igual a la base BD. Así, la recta finita dada AB ha sido dividida en dos partes iguales en D."
    ],
    fr: [
      "Soit AB la droite finie donnée. Il faut partager la droite finie AB en deux parties égales.",
      "Sur AB, construisons le triangle équilatéral ABC.",
      "Partageons l'angle ACB en deux parties égales par la droite CD, qui coupe AB en D. Je dis que la droite AB est partagée en deux parties égales au point D.",
      "Puisque AC est égale à CB et que CD est commune, les deux côtés AC, CD sont égaux aux deux côtés BC, CD, chacun à chacun ; et l'angle ACD est égal à l'angle BCD ; donc la base AD est égale à la base BD. La droite finie donnée AB est donc partagée en deux parties égales en D."
    ],
    de: [
      "Die gegebene Strecke sei AB. Man soll die Strecke AB halbieren.",
      "Über AB errichte man das gleichseitige Dreieck ABC.",
      "Den Winkel ACB halbiere man durch die Strecke CD, die AB in D trifft. Behauptung: Die Strecke AB ist im Punkt D halbiert.",
      "Da AC gleich CB ist und CD gemeinsam ist, sind die zwei Seiten AC, CD den zwei Seiten BC, CD entsprechend gleich; auch ist der Winkel ACD gleich dem Winkel BCD; also ist die Grundlinie AD gleich der Grundlinie BD. Damit ist die gegebene Strecke AB in D halbiert."
    ],
    ru: [
      "Пусть AB — данная ограниченная прямая. Требуется рассечь ограниченную прямую AB пополам.",
      "Построим на AB равносторонний треугольник ABC.",
      "Рассечём угол ACB пополам прямой CD, пересекающей AB в точке D. Утверждается, что прямая AB рассечена пополам в точке D.",
      "Так как AC равна CB, а CD общая, то две стороны AC, CD равны соответственно двум сторонам BC, CD; и угол ACD равен углу BCD; значит, основание AD равно основанию BD. Итак, данная ограниченная прямая AB рассечена пополам в точке D."
    ],
    ar: [
      "ليكن AB الخط المستقيم المحدود المعلوم. ونريد أن نقسم AB بنصفين.",
      "نعمل على AB المثلث المتساوي الأضلاع ABC.",
      "ونقسم الزاوية ACB بنصفين بالخط CD، الذي يلقى AB عند D. فنقول: إن الخط AB قد قُسم بنصفين عند النقطة D.",
      "لأن AC مساوٍ لـ CB، وCD مشترك، يكون الضلعان AC، CD مساويين للضلعين BC، CD كلٌّ لنظيره؛ والزاوية ACD مساوية للزاوية BCD؛ فالقاعدة AD مساوية للقاعدة BD. فقد قُسم الخط المحدود المعلوم AB بنصفين عند D."
    ],
    hi: [
      "मान लीजिए AB दी गई सांत सरल रेखा है। सांत सरल रेखा AB को समद्विभाजित करना है।",
      "AB पर समबाहु त्रिभुज ABC बनाइए।",
      "कोण ACB को सरल रेखा CD से समद्विभाजित कीजिए, जो AB से D पर मिलती है। दावा: सरल रेखा AB बिंदु D पर समद्विभाजित है।",
      "चूँकि AC, CB के बराबर है और CD उभयनिष्ठ है, इसलिए दो भुजाएँ AC, CD क्रमशः दो भुजाओं BC, CD के बराबर हैं; और कोण ACD कोण BCD के बराबर है; इसलिए आधार AD आधार BD के बराबर है। इस प्रकार दी गई सांत सरल रेखा AB बिंदु D पर समद्विभाजित हो गई।"
    ],
    ja: [
      "AB を与えられた有限な直線とする。有限な直線 AB を 2 等分しなければならない。",
      "AB の上に正三角形 ABC を作図する。",
      "角 ACB を直線 CD で 2 等分し、CD が AB と交わる点を D とする。主張：直線 AB は点 D で 2 等分される。",
      "AC は CB に等しく、CD は共通だから、2 辺 AC、CD は 2 辺 BC、CD にそれぞれ等しい。また角 ACD は角 BCD に等しい。よって底辺 AD は底辺 BD に等しい。こうして与えられた有限な直線 AB は D で 2 等分された。"
    ]
  }
});
