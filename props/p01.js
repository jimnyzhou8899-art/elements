// Proposition I.1
PROP(1, {
  vb: [0, 0, 720, 580],
  build(S) {
    S.free("A", 270, 360); S.free("B", 450, 360);
    S.seg("AB", "A", "B");
    S.circ("cA", "A", "B", { st: "blue" }); S.circ("cB", "B", "A", { st: "yel" });
    S.pt("D", g => V.sub(V.mul(g("A"), 2), g("B")));
    S.pt("E", g => V.sub(V.mul(g("B"), 2), g("A")));
    S.ix("C", "cA", "cB", 0);
    S.seg("CA", "C", "A", { st: "red" }); S.seg("CB", "C", "B", { st: "red" });
  },
  steps: [
    { show: ["A", "B", "AB"] },
    { show: ["cA", "D"], why: ["P3"] },
    { show: ["cB", "E"], why: ["P3"] },
    { show: ["C", "CA", "CB"], hl: ["C"], why: ["P1"] },
    { hl: ["CA", "AB"], why: ["D15"] },
    { hl: ["CB", "AB"], why: ["D15"] },
    { hl: ["CA", "CB", "AB"], why: ["A1"] }
  ],
  text: {
    zh: [
      "设 AB 是已知有限直线。要求在 AB 上作一个等边三角形。",
      "以 A 为圆心、AB 为距离作圆 BCD。",
      "再以 B 为圆心、BA 为距离作圆 ACE。",
      "从两圆的交点 C 到 A、B 分别连线段 CA、CB。",
      "因为点 A 是圆 CDB 的圆心，所以 AC 等于 AB。",
      "又因为点 B 是圆 CAE 的圆心，所以 BC 等于 BA。",
      "CA、CB 都等于 AB，而等于同量的量彼此相等，所以 CA 也等于 CB。三条线段 CA、AB、BC 彼此相等，三角形 ABC 是等边三角形，且作在已知有限直线 AB 上。"
    ],
    en: [
      "Let AB be the given finite straight line. It is required to construct an equilateral triangle on AB.",
      "With centre A and distance AB let the circle BCD be described.",
      "Again, with centre B and distance BA let the circle ACE be described.",
      "From the point C, in which the circles cut one another, to the points A, B let the straight lines CA, CB be joined.",
      "Now, since the point A is the centre of the circle CDB, AC is equal to AB.",
      "Again, since the point B is the centre of the circle CAE, BC is equal to BA.",
      "But CA was also proved equal to AB; therefore each of the straight lines CA, CB is equal to AB. Things which are equal to the same thing are also equal to one another; therefore CA is also equal to CB. So the three straight lines CA, AB, BC are equal to one another, and the triangle ABC is equilateral, constructed on the given finite straight line AB."
    ],
    es: [
      "Sea AB la recta finita dada. Hay que construir un triángulo equilátero sobre AB.",
      "Con centro A y distancia AB descríbase el círculo BCD.",
      "De nuevo, con centro B y distancia BA descríbase el círculo ACE.",
      "Desde el punto C, donde se cortan los círculos, trácense las rectas CA, CB hasta los puntos A, B.",
      "Como el punto A es el centro del círculo CDB, AC es igual a AB.",
      "De nuevo, como el punto B es el centro del círculo CAE, BC es igual a BA.",
      "Así, cada una de las rectas CA, CB es igual a AB. Las cosas iguales a una misma cosa son iguales entre sí; por tanto CA es también igual a CB. Las tres rectas CA, AB, BC son iguales entre sí, y el triángulo ABC es equilátero y está construido sobre la recta finita dada AB."
    ],
    fr: [
      "Soit AB la droite finie donnée. Il faut construire un triangle équilatéral sur AB.",
      "Du centre A et de l'intervalle AB, décrivons le cercle BCD.",
      "De nouveau, du centre B et de l'intervalle BA, décrivons le cercle ACE.",
      "Du point C, où les cercles se coupent, menons aux points A, B les droites CA, CB.",
      "Puisque le point A est le centre du cercle CDB, AC est égale à AB.",
      "De même, puisque le point B est le centre du cercle CAE, BC est égale à BA.",
      "Ainsi chacune des droites CA, CB est égale à AB. Les choses égales à une même chose sont égales entre elles ; donc CA est aussi égale à CB. Les trois droites CA, AB, BC sont donc égales entre elles, et le triangle ABC est équilatéral, construit sur la droite finie donnée AB."
    ],
    de: [
      "Die gegebene Strecke sei AB. Man soll über AB ein gleichseitiges Dreieck errichten.",
      "Mit dem Mittelpunkt A und dem Abstand AB zeichne man den Kreis BCD.",
      "Ferner zeichne man mit dem Mittelpunkt B und dem Abstand BA den Kreis ACE.",
      "Vom Punkt C, in dem die Kreise einander schneiden, ziehe man nach den Punkten A, B die Strecken CA, CB.",
      "Da der Punkt A Mittelpunkt des Kreises CDB ist, ist AC gleich AB.",
      "Ebenso ist, da der Punkt B Mittelpunkt des Kreises CAE ist, BC gleich BA.",
      "Also ist jede der Strecken CA, CB gleich AB. Was demselben gleich ist, ist auch einander gleich; also ist auch CA gleich CB. Die drei Strecken CA, AB, BC sind also einander gleich, und das Dreieck ABC ist gleichseitig und über der gegebenen Strecke AB errichtet."
    ],
    ru: [
      "Пусть AB — данная ограниченная прямая. Требуется построить на AB равносторонний треугольник.",
      "Из центра A раствором AB опишем круг BCD.",
      "И далее из центра B раствором BA опишем круг ACE.",
      "Из точки C, в которой круги пересекают друг друга, проведём к точкам A, B прямые CA, CB.",
      "Так как точка A — центр круга CDB, то AC равна AB.",
      "Далее, так как точка B — центр круга CAE, то BC равна BA.",
      "Значит, каждая из прямых CA, CB равна AB. Равные одному и тому же равны и между собой; значит, и CA равна CB. Итак, три прямые CA, AB, BC равны между собой, и треугольник ABC равносторонний и построен на данной ограниченной прямой AB."
    ],
    ar: [
      "ليكن AB الخط المستقيم المحدود المعلوم. ونريد أن نعمل على AB مثلثًا متساوي الأضلاع.",
      "نرسم على المركز A وببُعد AB دائرة BCD.",
      "ونرسم أيضًا على المركز B وببُعد BA دائرة ACE.",
      "ومن النقطة C، حيث تتقاطع الدائرتان، نصل إلى النقطتين A، B الخطين CA، CB.",
      "فلأن النقطة A مركز دائرة CDB، يكون AC مساويًا لـ AB.",
      "ولأن النقطة B مركز دائرة CAE، يكون BC مساويًا لـ BA.",
      "فكلٌّ من الخطين CA، CB مساوٍ لـ AB. والأشياء المساوية لشيء واحد متساوية؛ فـ CA مساوٍ لـ CB. فالخطوط الثلاثة CA، AB، BC متساوية، والمثلث ABC متساوي الأضلاع، وقد عُمل على الخط المحدود المعلوم AB."
    ],
    hi: [
      "मान लीजिए AB दी गई सांत सरल रेखा है। AB पर एक समबाहु त्रिभुज बनाना है।",
      "केंद्र A और दूरी AB से वृत्त BCD खींचिए।",
      "फिर केंद्र B और दूरी BA से वृत्त ACE खींचिए।",
      "जिस बिंदु C पर दोनों वृत्त कटते हैं, उससे बिंदुओं A, B तक सरल रेखाएँ CA, CB मिलाइए।",
      "चूँकि बिंदु A वृत्त CDB का केंद्र है, इसलिए AC, AB के बराबर है।",
      "फिर, चूँकि बिंदु B वृत्त CAE का केंद्र है, इसलिए BC, BA के बराबर है।",
      "अतः CA और CB दोनों AB के बराबर हैं। जो एक ही वस्तु के बराबर हों वे परस्पर भी बराबर होते हैं; इसलिए CA भी CB के बराबर है। इस प्रकार तीनों सरल रेखाएँ CA, AB, BC परस्पर बराबर हैं, और त्रिभुज ABC समबाहु है तथा दी गई सांत सरल रेखा AB पर बना है।"
    ],
    ja: [
      "AB を与えられた有限な直線とする。AB の上に正三角形を作図しなければならない。",
      "中心 A、距離 AB で円 BCD を描く。",
      "また中心 B、距離 BA で円 ACE を描く。",
      "2 つの円が交わる点 C から、点 A、B へ直線 CA、CB を引く。",
      "点 A は円 CDB の中心だから、AC は AB に等しい。",
      "また点 B は円 CAE の中心だから、BC は BA に等しい。",
      "よって CA、CB はどちらも AB に等しい。同じものに等しいものは互いにも等しいから、CA は CB にも等しい。こうして 3 直線 CA、AB、BC は互いに等しく、三角形 ABC は正三角形であり、与えられた有限な直線 AB の上に作図された。"
    ]
  }
});
