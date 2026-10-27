// Proposition I.11
PROP(11, {
  vb: [0, 0, 720, 480],
  build(S) {
    S.free("A", 80, 360); S.free("B", 640, 360);
    const u = g => V.unit(V.sub(g("B"), g("A")));
    S.glide("C", 0.5, (g, t) => V.lerp(g("A"), g("B"), t),
      (g, m) => Math.min(0.85, Math.max(0.15, V.dot(V.sub(m, g("A")), u(g)) / V.dist(g("A"), g("B")))), { ld: { x: 0.3, y: 1 } });
    // D on AC; E on CB with CE = CD
    S.glide("D", 0.55, (g, s) => V.add(g("C"), V.mul(u(g), -s * V.dist(g("A"), g("C")))),
      (g, m) => Math.min(0.95, Math.max(0.2, -V.dot(V.sub(m, g("C")), u(g)) / V.dist(g("A"), g("C")))), { ld: { x: 0, y: 1 } });
    S.pt("E", g => V.add(g("C"), V.mul(u(g), V.dist(g("C"), g("D")))), { ld: { x: 0, y: 1 } });
    S.pt("F", g => { const n = { x: u(g).y, y: -u(g).x }; return V.add(g("C"), V.mul(n, V.dist(g("D"), g("E")) * Math.sqrt(3) / 2)); }, { ld: { x: 0, y: -1 } });
    S.seg("AB", "A", "B");
    S.circ("cD", "D", "E", { st: "aux" }); S.circ("cE", "E", "D", { st: "aux" });
    S.seg("DF", "D", "F", { st: "blue" }); S.seg("EF", "E", "F", { st: "blue" });
    S.seg("DC", "D", "C", { st: "red" }); S.seg("CE", "C", "E", { st: "red" });
    S.seg("FC", "F", "C", { st: "ink" });
    S.ang("a1", "D", "C", "F", { st: "yel", r: 34 }); S.ang("a2", "F", "C", "E", { st: "yel", r: 34 });
    S.rang("rC", "E", "C", "F");
  },
  steps: [
    { show: ["A", "B", "C", "AB"] },
    { show: ["D", "E", "DC", "CE"], why: ["I.3"] },
    { show: ["cD", "cE", "F", "DF", "EF"], why: ["I.1"] },
    { show: ["FC"], hide: ["cD", "cE"], why: ["P1"] },
    { show: ["a1", "a2"], hl: ["DC", "CE", "DF", "EF", "FC"], why: ["I.8"] },
    { show: ["rC"], hide: ["a1", "a2"], hl: ["FC"], why: ["D10"] }
  ],
  text: {
    zh: [
      "设 AB 是已知直线，C 是它上面的已知点（可以拖动）。要求从点 C 作一条直线与 AB 成直角。",
      "在 AC 上任取一点 D（可以拖动），截取 CE 等于 CD。",
      "在 DE 上作等边三角形 FDE。",
      "连接 FC。断言：FC 就是从 C 所作、与 AB 成直角的直线。",
      "因为 DC 等于 CE，CF 是公共边，两边 DC、CF 分别等于两边 EC、CF，而且底 DF 等于底 FE，所以 ∠DCF 等于 ∠ECF。",
      "这两个角是相邻的，彼此相等的相邻角都是直角。所以 ∠DCF、∠FCE 都是直角，FC 与 AB 成直角。"
    ],
    en: [
      "Let AB be the given straight line and C the given point on it (you can drag it). It is required to draw from the point C a straight line at right angles to AB.",
      "Let a point D be taken at random on AC (you can drag it), and let CE be made equal to CD.",
      "On DE let the equilateral triangle FDE be constructed.",
      "Let FC be joined. The claim: FC is the straight line drawn from C at right angles to AB.",
      "Since DC is equal to CE, and CF is common, the two sides DC, CF are equal to the two sides EC, CF, and the base DF is equal to the base FE; therefore the angle DCF is equal to the angle ECF.",
      "And they are adjacent. When a straight line set up on a straight line makes the adjacent angles equal, each of them is right; therefore each of the angles DCF, FCE is right, and FC is at right angles to AB."
    ],
    es: [
      "Sea AB la recta dada y C el punto dado en ella (puedes arrastrarlo). Hay que trazar desde el punto C una recta que forme ángulos rectos con AB.",
      "Tómese en AC un punto cualquiera D (puedes arrastrarlo) y hágase CE igual a CD.",
      "Sobre DE constrúyase el triángulo equilátero FDE.",
      "Trácese FC. Se afirma que FC es la recta trazada desde C en ángulo recto con AB.",
      "Como DC es igual a CE y CF es común, los dos lados DC, CF son iguales a los dos lados EC, CF, y la base DF es igual a la base FE; por tanto el ángulo DCF es igual al ángulo ECF.",
      "Ambos son adyacentes. Cuando una recta levantada sobre otra forma ángulos adyacentes iguales, cada uno es recto; por tanto cada uno de los ángulos DCF, FCE es recto, y FC forma ángulos rectos con AB."
    ],
    fr: [
      "Soit AB la droite donnée et C le point donné sur elle (vous pouvez le déplacer). Il faut mener du point C une droite à angles droits avec AB.",
      "Prenons sur AC un point quelconque D (vous pouvez le déplacer), et faisons CE égale à CD.",
      "Sur DE, construisons le triangle équilatéral FDE.",
      "Menons FC. Je dis que FC est la droite menée de C à angles droits avec AB.",
      "Puisque DC est égale à CE et que CF est commune, les deux côtés DC, CF sont égaux aux deux côtés EC, CF, et la base DF est égale à la base FE ; donc l'angle DCF est égal à l'angle ECF.",
      "Et ils sont adjacents. Lorsqu'une droite élevée sur une droite fait les angles adjacents égaux, chacun d'eux est droit ; donc chacun des angles DCF, FCE est droit, et FC est à angles droits avec AB."
    ],
    de: [
      "Die gegebene Gerade sei AB und C der gegebene Punkt auf ihr (er lässt sich ziehen). Man soll im Punkt C eine Gerade rechtwinklig zu AB errichten.",
      "Auf AC nehme man einen beliebigen Punkt D an (er lässt sich ziehen) und mache CE gleich CD.",
      "Über DE errichte man das gleichseitige Dreieck FDE.",
      "Man ziehe FC. Behauptung: FC ist die in C rechtwinklig zu AB errichtete Gerade.",
      "Da DC gleich CE ist und CF gemeinsam, sind die zwei Seiten DC, CF den zwei Seiten EC, CF gleich, und die Grundlinie DF ist gleich der Grundlinie FE; also ist der Winkel DCF gleich dem Winkel ECF.",
      "Und sie sind Nebenwinkel. Bildet eine auf eine Gerade gestellte Gerade gleiche Nebenwinkel, so ist jeder ein Rechter; also ist jeder der Winkel DCF, FCE ein Rechter, und FC steht rechtwinklig auf AB."
    ],
    ru: [
      "Пусть AB — данная прямая, а C — данная точка на ней (её можно перетаскивать). Требуется из точки C провести прямую под прямыми углами к AB.",
      "Возьмём на AC произвольную точку D (её можно перетаскивать) и отложим CE, равную CD.",
      "Построим на DE равносторонний треугольник FDE.",
      "Проведём FC. Утверждается, что FC — прямая, проведённая из C под прямыми углами к AB.",
      "Так как DC равна CE, а CF общая, то две стороны DC, CF равны двум сторонам EC, CF, и основание DF равно основанию FE; значит, угол DCF равен углу ECF.",
      "И они смежные. Когда прямая, восставленная на прямой, образует равные смежные углы, каждый из них прямой; значит, каждый из углов DCF, FCE прямой, и FC проведена под прямыми углами к AB."
    ],
    ar: [
      "ليكن AB الخط المستقيم المعلوم، وC النقطة المعلومة عليه (يمكنك سحبها). ونريد أن نُخرج من النقطة C خطًا مستقيمًا على زوايا قائمة مع AB.",
      "نأخذ على AC نقطة كيفما اتفق ولتكن D (يمكنك سحبها)، ونجعل CE مساويًا لـ CD.",
      "ونعمل على DE المثلث المتساوي الأضلاع FDE.",
      "ونصل FC. فنقول: إن FC هو الخط الخارج من C على زوايا قائمة مع AB.",
      "لأن DC مساوٍ لـ CE، وCF مشترك، يكون الضلعان DC، CF مساويين للضلعين EC، CF، والقاعدة DF مساوية للقاعدة FE؛ فالزاوية DCF مساوية للزاوية ECF.",
      "وهما متجاورتان. وإذا قام خط مستقيم على خط مستقيم فجعل الزاويتين المتجاورتين متساويتين فكل منهما قائمة؛ فكلٌّ من الزاويتين DCF، FCE قائمة، وFC على زوايا قائمة مع AB."
    ],
    hi: [
      "मान लीजिए AB दी गई सरल रेखा है और C उस पर दिया गया बिंदु है (इसे खींचा जा सकता है)। बिंदु C से AB पर समकोण बनाती सरल रेखा खींचनी है।",
      "AC पर कोई भी बिंदु D लीजिए (इसे खींचा जा सकता है), और CE को CD के बराबर बनाइए।",
      "DE पर समबाहु त्रिभुज FDE बनाइए।",
      "FC मिलाइए। दावा: FC ही C से AB पर समकोण बनाती खींची गई सरल रेखा है।",
      "चूँकि DC, CE के बराबर है और CF उभयनिष्ठ है, इसलिए दो भुजाएँ DC, CF दो भुजाओं EC, CF के बराबर हैं, और आधार DF आधार FE के बराबर है; अतः कोण DCF कोण ECF के बराबर है।",
      "और ये आसन्न कोण हैं। जब किसी सरल रेखा पर खड़ी सरल रेखा बराबर आसन्न कोण बनाती है, तो प्रत्येक समकोण होता है; अतः कोण DCF, FCE दोनों समकोण हैं, और FC, AB पर समकोण बनाती है।"
    ],
    ja: [
      "AB を与えられた直線、C をその上の与えられた点とする（ドラッグできます）。点 C から AB に直角に直線を引かなければならない。",
      "AC 上に任意の点 D をとり（ドラッグできます）、CE を CD に等しくする。",
      "DE の上に正三角形 FDE を作図する。",
      "FC を結ぶ。主張：FC が C から AB に直角に引かれた直線である。",
      "DC は CE に等しく、CF は共通だから、2 辺 DC、CF は 2 辺 EC、CF に等しく、底辺 DF は底辺 FE に等しい。よって角 DCF は角 ECF に等しい。",
      "そしてこれらは隣り合う角である。直線上に立つ直線が隣り合う角を等しくするとき、それぞれは直角である。よって角 DCF、FCE はどちらも直角であり、FC は AB に直角である。"
    ]
  }
});
