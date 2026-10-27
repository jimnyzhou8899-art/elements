// Proposition I.22
PROP(22, {
  vb: [0, 0, 720, 630],
  build(S) {
    // the three given straight lines A, B, C (drag the right ends to change their lengths)
    S.free("A", 60, 50); S.free("A2", 260, 50, { lab: false });
    S.free("B", 60, 90); S.free("B2", 320, 90, { lab: false });
    S.free("C", 60, 130); S.free("C2", 230, 130, { lab: false });
    const a = g => V.dist(g("A"), g("A2")), b = g => V.dist(g("B"), g("B2")), c = g => V.dist(g("C"), g("C2"));
    S.seg("sA", "A", "A2", { st: "red" }); S.seg("sB", "B", "B2", { st: "blue" }); S.seg("sC", "C", "C2", { st: "yel" });
    S.free("D", 20, 400, { ld: { x: 0, y: 1 } });
    S.pt("F", g => V.add(g("D"), { x: a(g), y: 0 }), { ld: { x: -0.4, y: 1 } });
    S.pt("G", g => V.add(g("F"), { x: b(g), y: 0 }), { ld: { x: 0.4, y: 1 } });
    S.pt("H", g => V.add(g("G"), { x: c(g), y: 0 }), { ld: { x: 0, y: 1 } });
    S.pt("E", g => V.add(g("H"), { x: 36, y: 0 }), { ld: { x: 0, y: 1 } });
    S.seg("DE", "D", "E");
    S.seg("DF", "D", "F", { st: "red" }); S.seg("FG", "F", "G", { st: "blue" }); S.seg("GH", "G", "H", { st: "yel" });
    S.circ("cF", "F", "D", { st: "aux" }); S.circ("cG", "G", "H", { st: "aux" });
    S.ix("K", "cF", "cG", 0, { ld: { x: 0, y: -1 } }); S.ix("L", "cF", "cG", 1);
    S.seg("KF", "K", "F", { st: "red" }); S.seg("KG", "K", "G", { st: "yel" });
  },
  steps: [
    { show: ["A", "A2", "B", "B2", "C", "C2", "sA", "sB", "sC"] },
    { show: ["D", "E", "DE"] },
    { show: ["F", "G", "H", "DF", "FG", "GH"], why: ["I.3"] },
    { show: ["cF", "K", "L"], why: ["P3"] },
    { show: ["cG"], why: ["P3"] },
    { show: ["KF", "KG"], why: ["P1"] },
    { hl: ["DF", "KF", "sA"], why: ["D15", "A1"] },
    { hl: ["GH", "KG", "sC"], why: ["D15", "A1"] },
    { hide: ["cF", "cG", "L"], hl: ["KF", "FG", "KG"] }
  ],
  text: {
    zh: [
      "设 A、B、C 是三条已知直线，其中任意两条之和大于第三条。要求用与 A、B、C 相等的三条直线作一个三角形。（拖动线段的右端可以改变长度。）",
      "作直线 DE，它在 D 端有限，向 E 的方向无限延长。",
      "在 DE 上截取 DF 等于 A，FG 等于 B，GH 等于 C。",
      "以 F 为圆心、FD 为距离作圆 DKL。",
      "以 G 为圆心、GH 为距离作圆 KLH。",
      "两圆相交于 K，连接 KF、KG。断言：三角形 KFG 就是由与 A、B、C 相等的三条直线作成的。",
      "因为 F 是圆 DKL 的圆心，所以 FD 等于 FK。而 FD 等于 A，所以 KF 也等于 A。",
      "又因为 G 是圆 LKH 的圆心，所以 GH 等于 GK。而 GH 等于 C，所以 KG 也等于 C。",
      "而 FG 等于 B。所以三条直线 KF、FG、GK 分别等于 A、B、C，三角形 KFG 作成了。"
    ],
    en: [
      "Let the three given straight lines be A, B, C, of which any two taken together are greater than the remaining one. It is required to construct a triangle out of three straight lines equal to A, B, C. (Drag the right ends of the lines to change their lengths.)",
      "Let there be set out a straight line DE, limited at D but unlimited in the direction of E.",
      "On DE let DF be made equal to A, FG equal to B, and GH equal to C.",
      "With centre F and distance FD let the circle DKL be described.",
      "With centre G and distance GH let the circle KLH be described.",
      "The circles meet at K; let KF, KG be joined. The claim: the triangle KFG has been constructed out of three straight lines equal to A, B, C.",
      "Since the point F is the centre of the circle DKL, FD is equal to FK. But FD is equal to A; therefore KF is also equal to A.",
      "Again, since the point G is the centre of the circle LKH, GH is equal to GK. But GH is equal to C; therefore KG is also equal to C.",
      "And FG is also equal to B. Therefore the three straight lines KF, FG, GK are equal to A, B, C, and the triangle KFG has been constructed."
    ],
    es: [
      "Sean A, B, C las tres rectas dadas, de las cuales dos cualesquiera juntas son mayores que la restante. Hay que construir un triángulo con tres rectas iguales a A, B, C. (Arrastra los extremos derechos de las rectas para cambiar sus longitudes.)",
      "Tómese una recta DE, limitada en D pero ilimitada en la dirección de E.",
      "Sobre DE hágase DF igual a A, FG igual a B, y GH igual a C.",
      "Con centro F y distancia FD descríbase el círculo DKL.",
      "Con centro G y distancia GH descríbase el círculo KLH.",
      "Los círculos se cortan en K; trácense KF, KG. Se afirma que el triángulo KFG está construido con tres rectas iguales a A, B, C.",
      "Como el punto F es el centro del círculo DKL, FD es igual a FK. Pero FD es igual a A; por tanto KF es también igual a A.",
      "De nuevo, como el punto G es el centro del círculo LKH, GH es igual a GK. Pero GH es igual a C; por tanto KG es también igual a C.",
      "Además FG es igual a B. Por tanto las tres rectas KF, FG, GK son iguales a A, B, C, y queda construido el triángulo KFG."
    ],
    fr: [
      "Soient A, B, C les trois droites données, dont deux quelconques, prises ensemble, sont plus grandes que la troisième. Il faut construire un triangle avec trois droites égales à A, B, C. (Déplacez les extrémités droites des segments pour changer leurs longueurs.)",
      "Prenons une droite DE, limitée en D mais illimitée du côté de E.",
      "Sur DE, faisons DF égale à A, FG égale à B, et GH égale à C.",
      "Du centre F et de l'intervalle FD, décrivons le cercle DKL.",
      "Du centre G et de l'intervalle GH, décrivons le cercle KLH.",
      "Les cercles se coupent en K ; menons KF, KG. Je dis que le triangle KFG est construit avec trois droites égales à A, B, C.",
      "Puisque le point F est le centre du cercle DKL, FD est égale à FK. Mais FD est égale à A ; donc KF est aussi égale à A.",
      "De même, puisque le point G est le centre du cercle LKH, GH est égale à GK. Mais GH est égale à C ; donc KG est aussi égale à C.",
      "Et FG est égale à B. Donc les trois droites KF, FG, GK sont égales à A, B, C, et le triangle KFG est construit."
    ],
    de: [
      "Die drei gegebenen Geraden seien A, B, C, von denen je zwei zusammen größer sind als die dritte. Man soll aus drei Geraden, die A, B, C gleich sind, ein Dreieck errichten. (Ziehen Sie die rechten Enden der Strecken, um ihre Längen zu ändern.)",
      "Man lege eine Gerade DE hin, in D begrenzt, in Richtung E unbegrenzt.",
      "Auf DE mache man DF gleich A, FG gleich B und GH gleich C.",
      "Mit dem Mittelpunkt F und dem Abstand FD zeichne man den Kreis DKL.",
      "Mit dem Mittelpunkt G und dem Abstand GH zeichne man den Kreis KLH.",
      "Die Kreise schneiden sich in K; man ziehe KF, KG. Behauptung: Das Dreieck KFG ist aus drei Geraden errichtet, die A, B, C gleich sind.",
      "Da der Punkt F Mittelpunkt des Kreises DKL ist, ist FD gleich FK. FD ist aber gleich A; also ist auch KF gleich A.",
      "Ebenso ist, da der Punkt G Mittelpunkt des Kreises LKH ist, GH gleich GK. GH ist aber gleich C; also ist auch KG gleich C.",
      "Und FG ist gleich B. Also sind die drei Geraden KF, FG, GK den Geraden A, B, C gleich, und das Dreieck KFG ist errichtet."
    ],
    ru: [
      "Пусть A, B, C — три данные прямые, из которых любые две вместе больше оставшейся. Требуется построить треугольник из трёх прямых, равных A, B, C. (Перетаскивайте правые концы отрезков, чтобы менять их длины.)",
      "Возьмём прямую DE, ограниченную в D и неограниченную в сторону E.",
      "Отложим на DE отрезок DF, равный A, FG, равный B, и GH, равный C.",
      "Из центра F раствором FD опишем круг DKL.",
      "Из центра G раствором GH опишем круг KLH.",
      "Круги пересекаются в точке K; проведём KF, KG. Утверждается, что треугольник KFG построен из трёх прямых, равных A, B, C.",
      "Так как точка F — центр круга DKL, FD равна FK. Но FD равна A; значит, и KF равна A.",
      "Далее, так как точка G — центр круга LKH, GH равна GK. Но GH равна C; значит, и KG равна C.",
      "И FG равна B. Значит, три прямые KF, FG, GK равны A, B, C, и треугольник KFG построен."
    ],
    ar: [
      "لتكن A، B، C الخطوط المستقيمة الثلاثة المعلومة، وكل اثنين منها معًا أعظم من الباقي. ونريد أن نعمل مثلثًا من ثلاثة خطوط مستقيمة مساوية لـ A، B، C. (اسحب الأطراف اليمنى للخطوط لتغيير أطوالها.)",
      "نضع خطًا مستقيمًا DE محدودًا عند D وغير محدود في جهة E.",
      "ونجعل على DE الخط DF مساويًا لـ A، وFG مساويًا لـ B، وGH مساويًا لـ C.",
      "ونرسم على المركز F وببُعد FD دائرة DKL.",
      "ونرسم على المركز G وببُعد GH دائرة KLH.",
      "تتقاطع الدائرتان عند K؛ ونصل KF، KG. فنقول: إن المثلث KFG قد عُمل من ثلاثة خطوط مساوية لـ A، B، C.",
      "لأن النقطة F مركز الدائرة DKL، فـ FD مساوٍ لـ FK. لكن FD مساوٍ لـ A؛ فـ KF أيضًا مساوٍ لـ A.",
      "وأيضًا لأن النقطة G مركز الدائرة LKH، فـ GH مساوٍ لـ GK. لكن GH مساوٍ لـ C؛ فـ KG أيضًا مساوٍ لـ C.",
      "وFG مساوٍ لـ B. فالخطوط الثلاثة KF، FG، GK مساوية لـ A، B، C، وقد عُمل المثلث KFG."
    ],
    hi: [
      "मान लीजिए A, B, C तीन दी गई सरल रेखाएँ हैं, जिनमें से कोई भी दो मिलकर तीसरी से बड़ी हैं। A, B, C के बराबर तीन सरल रेखाओं से एक त्रिभुज बनाना है। (रेखाओं के दाएँ सिरों को खींचकर उनकी लंबाई बदलिए।)",
      "एक सरल रेखा DE लीजिए, जो D पर सीमित है पर E की दिशा में असीमित है।",
      "DE पर DF को A के बराबर, FG को B के बराबर, और GH को C के बराबर बनाइए।",
      "केंद्र F और दूरी FD से वृत्त DKL खींचिए।",
      "केंद्र G और दूरी GH से वृत्त KLH खींचिए।",
      "वृत्त K पर मिलते हैं; KF, KG मिलाइए। दावा: त्रिभुज KFG, A, B, C के बराबर तीन सरल रेखाओं से बना है।",
      "चूँकि बिंदु F वृत्त DKL का केंद्र है, FD, FK के बराबर है। पर FD, A के बराबर है; अतः KF भी A के बराबर है।",
      "फिर, चूँकि बिंदु G वृत्त LKH का केंद्र है, GH, GK के बराबर है। पर GH, C के बराबर है; अतः KG भी C के बराबर है।",
      "और FG, B के बराबर है। अतः तीनों सरल रेखाएँ KF, FG, GK क्रमशः A, B, C के बराबर हैं, और त्रिभुज KFG बन गया।"
    ],
    ja: [
      "A、B、C を与えられた 3 直線とし、そのどの 2 つの和も残りの 1 つより大きいとする。A、B、C に等しい 3 直線で三角形を作図しなければならない。（線分の右端をドラッグすると長さを変えられます。）",
      "D で限られ、E の方向には限られない直線 DE をとる。",
      "DE 上に、DF を A に、FG を B に、GH を C に等しくとる。",
      "中心 F、距離 FD で円 DKL を描く。",
      "中心 G、距離 GH で円 KLH を描く。",
      "2 円は K で交わる。KF、KG を結ぶ。主張：三角形 KFG は A、B、C に等しい 3 直線で作図されている。",
      "点 F は円 DKL の中心だから、FD は FK に等しい。しかし FD は A に等しい。よって KF も A に等しい。",
      "また点 G は円 LKH の中心だから、GH は GK に等しい。しかし GH は C に等しい。よって KG も C に等しい。",
      "そして FG は B に等しい。よって 3 直線 KF、FG、GK は A、B、C に等しく、三角形 KFG が作図された。"
    ]
  }
});
