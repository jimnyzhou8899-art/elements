// Proposition I.12
PROP(12, {
  vb: [0, 0, 720, 520],
  build(S) {
    S.free("A", 60, 250); S.free("B", 660, 250); S.free("C", 330, 110);
    const foot = g => V.proj(g("C"), g("A"), g("B"));
    // D on the far side of AB from C
    S.glide("D", 0.6, (g, k) => { const P = foot(g), u = V.unit(V.sub(g("B"), g("A"))); return V.add(V.add(P, V.mul(V.sub(P, g("C")), k)), V.mul(u, 70)); },
      (g, m) => { const P = foot(g), d = V.sub(P, g("C")), L = V.dot(d, d) || 1; return Math.min(1.6, Math.max(0.25, V.dot(V.sub(m, P), d) / L)); });
    S.line("lAB", "A", "B");
    S.circ("cC", "C", "D", { st: "blue" });
    S.ix("E", "lAB", "cC", 0, { ld: { x: -0.7, y: -1 } }); S.ix("G", "lAB", "cC", 1, { ld: { x: 0.7, y: -1 } });
    S.pt("F", g => V.add(g("C"), rot(V.sub(g("D"), g("C")), 0.55)));
    S.pt("H", g => V.mid(g("E"), g("G")), { ld: { x: 0.4, y: 1 } });
    S.seg("CG", "C", "G", { st: "red" }); S.seg("CE", "C", "E", { st: "red" }); S.seg("CH", "C", "H");
    S.seg("GH", "G", "H", { st: "yel" }); S.seg("HE", "H", "E", { st: "yel" });
    S.ang("a1", "C", "H", "G", { st: "blue", r: 26 }); S.ang("a2", "E", "H", "C", { st: "blue", r: 34 });
    S.rang("rH", "G", "H", "C");
  },
  steps: [
    { show: ["A", "B", "C", "lAB"] },
    { show: ["D"] },
    { show: ["cC", "E", "F", "G"], why: ["P3"] },
    { show: ["H", "GH", "HE"], why: ["I.10"] },
    { show: ["CG", "CH", "CE"], why: ["P1"] },
    { show: ["a1", "a2"], hl: ["GH", "HE", "CG", "CE", "CH"], why: ["I.8"] },
    { show: ["rH"], hide: ["a1", "a2", "cC"], hl: ["CH"], why: ["D10"] }
  ],
  text: {
    zh: [
      "设 AB 是已知的无限直线，C 是不在它上面的已知点。要求从点 C 向 AB 作垂线。",
      "在 AB 的另一侧任取一点 D（可以拖动）。",
      "以 C 为圆心、CD 为距离作圆 EFG，它与 AB 交于 E、G。",
      "把 EG 二等分于点 H。",
      "连接 CG、CH、CE。断言：CH 就是从 C 向 AB 所作的垂线。",
      "因为 GH 等于 HE，HC 是公共边，两边 GH、HC 分别等于两边 EH、HC，而且底 CG 等于底 CE，所以 ∠CHG 等于 ∠EHC。",
      "这两个角是相邻的，彼此相等的相邻角都是直角，而立着的直线叫做垂线。所以 CH 就是从 C 向 AB 所作的垂线。"
    ],
    en: [
      "Let AB be the given infinite straight line, and C the given point which is not on it. It is required to draw a perpendicular from the point C to AB.",
      "Let a point D be taken at random on the other side of AB (you can drag it).",
      "With centre C and distance CD let the circle EFG be described; it cuts AB at E and G.",
      "Let EG be bisected at H.",
      "Let CG, CH, CE be joined. The claim: CH is the perpendicular drawn from C to AB.",
      "Since GH is equal to HE, and HC is common, the two sides GH, HC are equal to the two sides EH, HC, and the base CG is equal to the base CE; therefore the angle CHG is equal to the angle EHC.",
      "And they are adjacent. When a straight line set up on a straight line makes the adjacent angles equal, each is right, and the line standing on the other is called a perpendicular. Therefore CH is the perpendicular drawn from C to AB."
    ],
    es: [
      "Sea AB la recta infinita dada y C el punto dado que no está en ella. Hay que trazar desde el punto C una perpendicular a AB.",
      "Tómese un punto cualquiera D al otro lado de AB (puedes arrastrarlo).",
      "Con centro C y distancia CD descríbase el círculo EFG; corta a AB en E y G.",
      "Divídase EG en dos partes iguales en H.",
      "Trácense CG, CH, CE. Se afirma que CH es la perpendicular trazada desde C a AB.",
      "Como GH es igual a HE y HC es común, los dos lados GH, HC son iguales a los dos lados EH, HC, y la base CG es igual a la base CE; por tanto el ángulo CHG es igual al ángulo EHC.",
      "Ambos son adyacentes. Cuando una recta levantada sobre otra forma ángulos adyacentes iguales, cada uno es recto y la recta levantada se llama perpendicular. Por tanto CH es la perpendicular trazada desde C a AB."
    ],
    fr: [
      "Soit AB la droite infinie donnée, et C le point donné qui n'est pas sur elle. Il faut abaisser du point C une perpendiculaire sur AB.",
      "Prenons un point quelconque D de l'autre côté de AB (vous pouvez le déplacer).",
      "Du centre C et de l'intervalle CD, décrivons le cercle EFG ; il coupe AB en E et G.",
      "Partageons EG en deux parties égales en H.",
      "Menons CG, CH, CE. Je dis que CH est la perpendiculaire abaissée de C sur AB.",
      "Puisque GH est égale à HE et que HC est commune, les deux côtés GH, HC sont égaux aux deux côtés EH, HC, et la base CG est égale à la base CE ; donc l'angle CHG est égal à l'angle EHC.",
      "Et ils sont adjacents. Lorsqu'une droite élevée sur une droite fait les angles adjacents égaux, chacun est droit, et la droite élevée s'appelle perpendiculaire. Donc CH est la perpendiculaire abaissée de C sur AB."
    ],
    de: [
      "Die gegebene unbegrenzte Gerade sei AB und C der gegebene Punkt, der nicht auf ihr liegt. Man soll von C aus das Lot auf AB fällen.",
      "Auf der anderen Seite von AB nehme man einen beliebigen Punkt D an (er lässt sich ziehen).",
      "Mit dem Mittelpunkt C und dem Abstand CD zeichne man den Kreis EFG; er schneidet AB in E und G.",
      "Man halbiere EG in H.",
      "Man ziehe CG, CH, CE. Behauptung: CH ist das von C auf AB gefällte Lot.",
      "Da GH gleich HE ist und HC gemeinsam, sind die zwei Seiten GH, HC den zwei Seiten EH, HC gleich, und die Grundlinie CG ist gleich der Grundlinie CE; also ist der Winkel CHG gleich dem Winkel EHC.",
      "Und sie sind Nebenwinkel. Bildet eine auf eine Gerade gestellte Gerade gleiche Nebenwinkel, so ist jeder ein Rechter, und die stehende Gerade heißt Lot. Also ist CH das von C auf AB gefällte Lot."
    ],
    ru: [
      "Пусть AB — данная неограниченная прямая, а C — данная точка, не лежащая на ней. Требуется из точки C опустить на AB перпендикуляр.",
      "Возьмём по другую сторону от AB произвольную точку D (её можно перетаскивать).",
      "Из центра C раствором CD опишем круг EFG; он пересекает AB в точках E и G.",
      "Рассечём EG пополам в точке H.",
      "Проведём CG, CH, CE. Утверждается, что CH — перпендикуляр, опущенный из C на AB.",
      "Так как GH равна HE, а HC общая, то две стороны GH, HC равны двум сторонам EH, HC, и основание CG равно основанию CE; значит, угол CHG равен углу EHC.",
      "И они смежные. Когда прямая, восставленная на прямой, образует равные смежные углы, каждый из них прямой, а восставленная прямая называется перпендикуляром. Значит, CH — перпендикуляр, опущенный из C на AB."
    ],
    ar: [
      "ليكن AB الخط المستقيم المعلوم غير المحدود، وC النقطة المعلومة التي ليست عليه. ونريد أن نُخرج من النقطة C عمودًا على AB.",
      "نأخذ في الجهة الأخرى من AB نقطة كيفما اتفق ولتكن D (يمكنك سحبها).",
      "ونرسم على المركز C وببُعد CD دائرة EFG، فتقطع AB عند E، G.",
      "ونقسم EG بنصفين عند H.",
      "ونصل CG، CH، CE. فنقول: إن CH هو العمود الخارج من C على AB.",
      "لأن GH مساوٍ لـ HE، وHC مشترك، يكون الضلعان GH، HC مساويين للضلعين EH، HC، والقاعدة CG مساوية للقاعدة CE؛ فالزاوية CHG مساوية للزاوية EHC.",
      "وهما متجاورتان. وإذا قام خط مستقيم على خط مستقيم فجعل الزاويتين المتجاورتين متساويتين فكل منهما قائمة، ويُسمّى الخط القائم عمودًا. فـ CH هو العمود الخارج من C على AB."
    ],
    hi: [
      "मान लीजिए AB दी गई अनंत सरल रेखा है, और C दिया गया बिंदु है जो उस पर नहीं है। बिंदु C से AB पर लंब डालना है।",
      "AB की दूसरी ओर कोई भी बिंदु D लीजिए (इसे खींचा जा सकता है)।",
      "केंद्र C और दूरी CD से वृत्त EFG खींचिए; यह AB को E और G पर काटता है।",
      "EG को H पर समद्विभाजित कीजिए।",
      "CG, CH, CE मिलाइए। दावा: CH ही C से AB पर डाला गया लंब है।",
      "चूँकि GH, HE के बराबर है और HC उभयनिष्ठ है, इसलिए दो भुजाएँ GH, HC दो भुजाओं EH, HC के बराबर हैं, और आधार CG आधार CE के बराबर है; अतः कोण CHG कोण EHC के बराबर है।",
      "और ये आसन्न कोण हैं। जब किसी सरल रेखा पर खड़ी सरल रेखा बराबर आसन्न कोण बनाती है, तो प्रत्येक समकोण होता है और खड़ी रेखा लंब कहलाती है। अतः CH ही C से AB पर डाला गया लंब है।"
    ],
    ja: [
      "AB を与えられた無限直線、C をその上にない与えられた点とする。点 C から AB に垂線を下ろさなければならない。",
      "AB の反対側に任意の点 D をとる（ドラッグできます）。",
      "中心 C、距離 CD で円 EFG を描く。それは AB と E、G で交わる。",
      "EG を H で 2 等分する。",
      "CG、CH、CE を結ぶ。主張：CH が C から AB に下ろした垂線である。",
      "GH は HE に等しく、HC は共通だから、2 辺 GH、HC は 2 辺 EH、HC に等しく、底辺 CG は底辺 CE に等しい。よって角 CHG は角 EHC に等しい。",
      "そしてこれらは隣り合う角である。直線上に立つ直線が隣り合う角を等しくするとき、それぞれは直角であり、立つ直線は垂線とよばれる。よって CH が C から AB に下ろした垂線である。"
    ]
  }
});
