// Proposition I.35
PROP(35, {
  vb: [0, 0, 720, 400],
  build(S) {
    S.free("B", 60, 330, { ld: { x: 0, y: 1 } }); S.free("C", 300, 330, { ld: { x: 0, y: 1 } });
    S.free("A", 110, 90, { ld: { x: 0, y: -1 } });
    const w = g => V.sub(g("C"), g("B"));
    S.pt("D", g => V.add(g("A"), w(g)), { ld: { x: 0, y: -1 } });
    S.glide("E", 1.45, (g, t) => V.add(g("A"), V.mul(w(g), t)),
      (g, m) => Math.min(1.95, Math.max(1.08, V.dot(V.sub(m, g("A")), w(g)) / V.dot(w(g), w(g)))), { ld: { x: 0, y: -1 } });
    S.pt("F", g => V.add(g("E"), w(g)), { ld: { x: 0, y: -1 } });
    S.pt("G", g => intersect({ k: "L", a: g("B"), b: g("E"), seg: false }, { k: "L", a: g("D"), b: g("C"), seg: false })[0], { ld: { x: 1, y: 0.2 } });
    S.poly("tEAB", ["E", "A", "B"], { st: "yel" }); S.poly("tFDC", ["F", "D", "C"], { st: "yel" });
    S.poly("qABGD", ["A", "B", "G", "D"], { st: "red" }); S.poly("qEGCF", ["E", "G", "C", "F"], { st: "blue" });
    S.poly("tGBC", ["G", "B", "C"], { st: "yel" });
    S.seg("AD", "A", "D"); S.seg("DE", "D", "E"); S.seg("EF", "E", "F");
    S.seg("BC", "B", "C"); S.seg("AB", "A", "B"); S.seg("DC", "D", "C");
    S.seg("BE", "B", "E"); S.seg("CF", "C", "F");
    S.ang("aEAB", "E", "A", "B", { st: "red", r: 34 }); S.ang("aFDC", "F", "D", "C", { st: "red", r: 34 });
  },
  steps: [
    { show: ["A", "B", "C", "D", "E", "F", "AD", "DE", "EF", "BC", "AB", "DC", "BE", "CF"] },
    { hl: ["AD", "EF", "BC"], why: ["I.34", "A1"] },
    { hl: ["AD", "DE", "EF"], why: ["A2"] },
    { show: ["aEAB", "aFDC"], hl: ["AB", "DC"], why: ["I.34", "I.29"] },
    { show: ["tEAB", "tFDC"], why: ["I.4"] },
    { show: ["G", "qABGD", "qEGCF"], hide: ["tEAB", "tFDC", "aEAB", "aFDC"], why: ["A3"] },
    { show: ["tGBC"], why: ["A2"] }
  ],
  text: {
    zh: [
      "设 ABCD、EBCF 是在同一底 BC 上、并且在同一对平行线 AF、BC 之间的平行四边形。断言：平行四边形 ABCD 等于平行四边形 EBCF。（拖动 A、B、C 或 E 试试。）",
      "因为 ABCD 是平行四边形，所以 AD 等于 BC。同理 EF 也等于 BC，所以 AD 等于 EF。",
      "两边各加上 DE，于是整个 AE 等于整个 DF。",
      "又 AB 等于 DC，而外角 ∠FDC 等于内角 ∠EAB。",
      "所以两边 EA、AB 分别等于两边 FD、DC，夹角也相等，于是三角形 EAB 等于三角形 FDC。",
      "设 BE、DC 交于 G。两边各减去三角形 DGE，余下的梯形 ABGD 等于余下的梯形 EGCF。",
      "两边各加上三角形 GBC，于是整个平行四边形 ABCD 等于整个平行四边形 EBCF。"
    ],
    en: [
      "Let ABCD, EBCF be parallelograms on the same base BC and in the same parallels AF, BC. The claim: the parallelogram ABCD is equal to the parallelogram EBCF. (Try dragging A, B, C or E.)",
      "Since ABCD is a parallelogram, AD is equal to BC. For the same reason EF is also equal to BC; so that AD is also equal to EF.",
      "Let DE be added to each; therefore the whole AE is equal to the whole DF.",
      "But AB is also equal to DC, and the exterior angle FDC is equal to the interior angle EAB.",
      "Therefore the two sides EA, AB are equal to the two sides FD, DC, and they contain equal angles; so the triangle EAB is equal to the triangle FDC.",
      "Let BE, DC meet at G, and let the triangle DGE be subtracted from each; then the trapezium ABGD which remains is equal to the trapezium EGCF which remains.",
      "Let the triangle GBC be added to each; therefore the whole parallelogram ABCD is equal to the whole parallelogram EBCF."
    ],
    es: [
      "Sean ABCD, EBCF paralelogramos sobre la misma base BC y entre las mismas paralelas AF, BC. Se afirma que el paralelogramo ABCD es igual al paralelogramo EBCF. (Prueba a arrastrar A, B, C o E.)",
      "Como ABCD es un paralelogramo, AD es igual a BC. Por la misma razón EF es también igual a BC; de modo que AD es igual a EF.",
      "Añádase a cada uno DE; por tanto la entera AE es igual a la entera DF.",
      "Pero AB es también igual a DC, y el ángulo exterior FDC es igual al ángulo interior EAB.",
      "Por tanto los dos lados EA, AB son iguales a los dos lados FD, DC, y comprenden ángulos iguales; así el triángulo EAB es igual al triángulo FDC.",
      "Córtense BE, DC en G, y quítese de cada uno el triángulo DGE; el trapecio restante ABGD es igual al trapecio restante EGCF.",
      "Añádase a cada uno el triángulo GBC; por tanto el paralelogramo entero ABCD es igual al paralelogramo entero EBCF."
    ],
    fr: [
      "Soient ABCD, EBCF des parallélogrammes sur la même base BC et entre les mêmes parallèles AF, BC. Je dis que le parallélogramme ABCD est égal au parallélogramme EBCF. (Essayez de déplacer A, B, C ou E.)",
      "Puisque ABCD est un parallélogramme, AD est égale à BC. Pour la même raison EF est aussi égale à BC ; de sorte que AD est égale à EF.",
      "Ajoutons à chacune DE ; donc la droite entière AE est égale à la droite entière DF.",
      "Mais AB est aussi égale à DC, et l'angle extérieur FDC est égal à l'angle intérieur EAB.",
      "Donc les deux côtés EA, AB sont égaux aux deux côtés FD, DC, et ils comprennent des angles égaux ; ainsi le triangle EAB est égal au triangle FDC.",
      "Que BE, DC se coupent en G, et retranchons de part et d'autre le triangle DGE ; le trapèze restant ABGD est égal au trapèze restant EGCF.",
      "Ajoutons de part et d'autre le triangle GBC ; donc le parallélogramme entier ABCD est égal au parallélogramme entier EBCF."
    ],
    de: [
      "ABCD, EBCF seien Parallelogramme auf derselben Grundlinie BC und zwischen denselben Parallelen AF, BC. Behauptung: Das Parallelogramm ABCD ist dem Parallelogramm EBCF gleich. (Ziehen Sie A, B, C oder E.)",
      "Da ABCD ein Parallelogramm ist, ist AD gleich BC. Aus demselben Grund ist auch EF gleich BC; also ist AD gleich EF.",
      "Man füge beiderseits DE hinzu; dann ist die ganze AE gleich der ganzen DF.",
      "Ferner ist AB gleich DC, und der Außenwinkel FDC ist gleich dem Innenwinkel EAB.",
      "Also sind die zwei Seiten EA, AB den zwei Seiten FD, DC gleich und umfassen gleiche Winkel; also ist das Dreieck EAB dem Dreieck FDC gleich.",
      "BE, DC mögen sich in G schneiden; man nehme beiderseits das Dreieck DGE weg; dann ist das übrige Trapez ABGD dem übrigen Trapez EGCF gleich.",
      "Man füge beiderseits das Dreieck GBC hinzu; dann ist das ganze Parallelogramm ABCD dem ganzen Parallelogramm EBCF gleich."
    ],
    ru: [
      "Пусть ABCD, EBCF — параллелограммы на одном основании BC и между одними и теми же параллельными AF, BC. Утверждается, что параллелограмм ABCD равен параллелограмму EBCF. (Попробуйте перетащить A, B, C или E.)",
      "Так как ABCD — параллелограмм, AD равна BC. По той же причине и EF равна BC; так что AD равна EF.",
      "Прибавим к каждой DE; значит, вся AE равна всей DF.",
      "Но и AB равна DC, а внешний угол FDC равен внутреннему углу EAB.",
      "Значит, две стороны EA, AB равны двум сторонам FD, DC и заключают равные углы; поэтому треугольник EAB равен треугольнику FDC.",
      "Пусть BE, DC пересекаются в точке G; отнимем от каждого треугольник DGE; тогда остающаяся трапеция ABGD равна остающейся трапеции EGCF.",
      "Прибавим к каждой треугольник GBC; значит, весь параллелограмм ABCD равен всему параллелограмму EBCF."
    ],
    ar: [
      "ليكن ABCD، EBCF متوازيي أضلاع على قاعدة واحدة BC وبين خطين متوازيين بعينهما AF، BC. فنقول: إن متوازي الأضلاع ABCD مساوٍ لمتوازي الأضلاع EBCF. (جرّب سحب A أو B أو C أو E.)",
      "لأن ABCD متوازي أضلاع، فـ AD مساوٍ لـ BC. ولمثل ذلك EF أيضًا مساوٍ لـ BC؛ فـ AD مساوٍ لـ EF.",
      "نزيد على كلٍّ منهما DE، فـ AE كله مساوٍ لـ DF كله.",
      "وAB أيضًا مساوٍ لـ DC، والزاوية الخارجة FDC مساوية للزاوية الداخلة EAB.",
      "فالضلعان EA، AB مساويان للضلعين FD، DC، ويحيطان بزاويتين متساويتين؛ فالمثلث EAB مساوٍ للمثلث FDC.",
      "ليتقاطع BE، DC عند G، ولننقص من كلٍّ منهما المثلث DGE، فيبقى شبه المنحرف ABGD مساويًا لشبه المنحرف الباقي EGCF.",
      "نزيد على كلٍّ منهما المثلث GBC، فمتوازي الأضلاع ABCD كله مساوٍ لمتوازي الأضلاع EBCF كله."
    ],
    hi: [
      "मान लीजिए ABCD, EBCF एक ही आधार BC पर और एक ही समांतर रेखाओं AF, BC के बीच स्थित समांतर चतुर्भुज हैं। दावा: समांतर चतुर्भुज ABCD समांतर चतुर्भुज EBCF के बराबर है। (A, B, C या E को खींचकर देखिए।)",
      "चूँकि ABCD समांतर चतुर्भुज है, इसलिए AD, BC के बराबर है। इसी कारण EF भी BC के बराबर है; अतः AD, EF के बराबर है।",
      "दोनों में DE जोड़िए; तो पूरी AE पूरी DF के बराबर है।",
      "AB भी DC के बराबर है, और बहिष्कोण FDC अंतः कोण EAB के बराबर है।",
      "अतः दो भुजाएँ EA, AB दो भुजाओं FD, DC के बराबर हैं और बराबर कोण बनाती हैं; इसलिए त्रिभुज EAB त्रिभुज FDC के बराबर है।",
      "मान लीजिए BE, DC बिंदु G पर काटती हैं; दोनों में से त्रिभुज DGE घटाइए; तो शेष समलंब ABGD शेष समलंब EGCF के बराबर है।",
      "दोनों में त्रिभुज GBC जोड़िए; तो पूरा समांतर चतुर्भुज ABCD पूरे समांतर चतुर्भुज EBCF के बराबर है।"
    ],
    ja: [
      "ABCD、EBCF を同じ底辺 BC の上にあり、同じ平行線 AF、BC の間にある平行四辺形とする。主張：平行四辺形 ABCD は平行四辺形 EBCF に等しい。（A、B、C、E をドラッグしてみてください。）",
      "ABCD は平行四辺形だから AD は BC に等しい。同じ理由で EF も BC に等しい。よって AD は EF に等しい。",
      "それぞれに DE を加えると、AE 全体は DF 全体に等しい。",
      "また AB は DC に等しく、外角 FDC は内角 EAB に等しい。",
      "よって 2 辺 EA、AB は 2 辺 FD、DC に等しく、はさむ角も等しいから、三角形 EAB は三角形 FDC に等しい。",
      "BE、DC が G で交わるとし、それぞれから三角形 DGE を引くと、残りの台形 ABGD は残りの台形 EGCF に等しい。",
      "それぞれに三角形 GBC を加えると、平行四辺形 ABCD 全体は平行四辺形 EBCF 全体に等しい。"
    ]
  }
});
