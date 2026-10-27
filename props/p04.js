// Proposition I.4
PROP(4, {
  vb: [0, 0, 720, 560],
  build(S) {
    S.free("A", 150, 170); S.free("B", 90, 400); S.free("C", 300, 380);
    S.free("D", 470, 200);
    // E turns about D; F follows so that DEF is always a copy of ABC
    S.glide("E", -0.3, (g, t) => V.add(g("D"), rot(V.sub(g("B"), g("A")), t)),
      (g, m) => angOf(V.sub(m, g("D"))) - angOf(V.sub(g("B"), g("A"))));
    S.pt("F", g => V.add(g("D"), rot(V.sub(g("C"), g("A")), angOf(V.sub(g("E"), g("D"))) - angOf(V.sub(g("B"), g("A"))))));
    S.param("t", 0);
    const moved = p => g => carry(g(p), g("A"), g("B"), g("D"), g("E"), g("t").x);
    S.pt("A1", moved("A"), { lab: false }); S.pt("B1", moved("B"), { lab: false }); S.pt("C1", moved("C"), { lab: false });
    S.poly("ghost", ["A1", "B1", "C1"], { st: "yel" });
    S.seg("AB", "A", "B", { st: "red" }); S.seg("AC", "A", "C", { st: "blue" }); S.seg("BC", "B", "C");
    S.seg("DE", "D", "E", { st: "red" }); S.seg("DF", "D", "F", { st: "blue" }); S.seg("EF", "E", "F");
    S.ang("aA", "B", "A", "C", { st: "yel", r: 30 }); S.ang("aD", "E", "D", "F", { st: "yel", r: 30 });
    S.ang("aB", "A", "B", "C", { st: "red", r: 26 }); S.ang("aE", "D", "E", "F", { st: "red", r: 26 });
    S.ang("aC", "A", "C", "B", { st: "blue", r: 26 }); S.ang("aF", "D", "F", "E", { st: "blue", r: 26 });
  },
  steps: [
    { show: ["A", "B", "C", "D", "E", "F", "AB", "AC", "BC", "DE", "DF", "EF", "aA", "aD"] },
    { show: ["ghost"], tween: ["t", 0, 1], hl: ["AB", "DE"] },
    { hl: ["AC", "DF", "aA", "aD"] },
    { hl: ["BC", "EF"], why: ["A4"] },
    { show: ["aB", "aE", "aC", "aF"], hide: ["ghost"], why: ["A4"] }
  ],
  text: {
    zh: [
      "设三角形 ABC、DEF 中，AB 等于 DE，AC 等于 DF，且 ∠BAC 等于 ∠EDF。断言：底 BC 等于底 EF，三角形 ABC 等于三角形 DEF，其余的角也分别相等：∠ABC 等于 ∠DEF，∠ACB 等于 ∠DFE。（拖动 E 可以转动三角形 DEF。）",
      "把三角形 ABC 移到三角形 DEF 上，使点 A 落在点 D 上，直线 AB 落在 DE 上。因为 AB 等于 DE，所以点 B 与点 E 重合。",
      "AB 与 DE 重合后，因为 ∠BAC 等于 ∠EDF，直线 AC 也落在 DF 上；又因为 AC 等于 DF，所以点 C 与点 F 重合。",
      "B 与 E 重合，C 与 F 重合，所以底 BC 与底 EF 重合（否则两条直线将围成一块面积，这是不可能的）。彼此重合的东西相等，所以 BC 等于 EF。",
      "于是整个三角形 ABC 与整个三角形 DEF 重合，两者相等；其余的角也与其余的角重合而相等：∠ABC 等于 ∠DEF，∠ACB 等于 ∠DFE。"
    ],
    en: [
      "Let ABC, DEF be two triangles with AB equal to DE, AC equal to DF, and the angle BAC equal to the angle EDF. The claim: the base BC is equal to the base EF, the triangle ABC is equal to the triangle DEF, and the remaining angles are equal, namely ABC to DEF and ACB to DFE. (Drag E to turn the triangle DEF.)",
      "Let the triangle ABC be applied to the triangle DEF, with the point A placed on the point D and the straight line AB on DE. Since AB is equal to DE, the point B will coincide with E.",
      "With AB on DE, the straight line AC will fall on DF, because the angle BAC is equal to the angle EDF; and since AC is equal to DF, the point C will coincide with F.",
      "B coincides with E and C with F, so the base BC coincides with the base EF (otherwise two straight lines would enclose a space, which is impossible). Things which coincide with one another are equal, so BC is equal to EF.",
      "So the whole triangle ABC coincides with the whole triangle DEF and is equal to it, and the remaining angles coincide with the remaining angles and are equal to them: the angle ABC to DEF, and ACB to DFE."
    ],
    es: [
      "Sean ABC, DEF dos triángulos con AB igual a DE, AC igual a DF y el ángulo BAC igual al ángulo EDF. Se afirma que la base BC es igual a la base EF, el triángulo ABC es igual al triángulo DEF, y los ángulos restantes son iguales: ABC a DEF y ACB a DFE. (Arrastra E para girar el triángulo DEF.)",
      "Aplíquese el triángulo ABC sobre el triángulo DEF, colocando el punto A sobre el punto D y la recta AB sobre DE. Como AB es igual a DE, el punto B coincidirá con E.",
      "Estando AB sobre DE, la recta AC caerá sobre DF, porque el ángulo BAC es igual al ángulo EDF; y como AC es igual a DF, el punto C coincidirá con F.",
      "B coincide con E y C con F, así que la base BC coincide con la base EF (de lo contrario dos rectas encerrarían un espacio, lo cual es imposible). Las cosas que coinciden entre sí son iguales; por tanto BC es igual a EF.",
      "Así, el triángulo ABC entero coincide con el triángulo DEF entero y es igual a él, y los ángulos restantes coinciden con los restantes y son iguales: el ángulo ABC a DEF, y ACB a DFE."
    ],
    fr: [
      "Soient ABC, DEF deux triangles où AB est égale à DE, AC égale à DF, et l'angle BAC égal à l'angle EDF. Je dis que la base BC est égale à la base EF, que le triangle ABC est égal au triangle DEF, et que les angles restants sont égaux : ABC à DEF et ACB à DFE. (Déplacez E pour faire tourner le triangle DEF.)",
      "Appliquons le triangle ABC sur le triangle DEF, le point A sur le point D et la droite AB sur DE. Puisque AB est égale à DE, le point B coïncidera avec E.",
      "AB étant sur DE, la droite AC tombera sur DF, parce que l'angle BAC est égal à l'angle EDF ; et puisque AC est égale à DF, le point C coïncidera avec F.",
      "B coïncide avec E et C avec F, donc la base BC coïncide avec la base EF (sinon deux droites enfermeraient un espace, ce qui est impossible). Les choses qui coïncident sont égales ; donc BC est égale à EF.",
      "Ainsi le triangle ABC tout entier coïncide avec le triangle DEF tout entier et lui est égal, et les angles restants coïncident avec les angles restants et leur sont égaux : l'angle ABC à DEF, et ACB à DFE."
    ],
    de: [
      "In den Dreiecken ABC, DEF sei AB gleich DE, AC gleich DF und der Winkel BAC gleich dem Winkel EDF. Behauptung: Die Grundlinie BC ist gleich der Grundlinie EF, das Dreieck ABC ist gleich dem Dreieck DEF, und die übrigen Winkel sind gleich, nämlich ABC gleich DEF und ACB gleich DFE. (Ziehen Sie E, um das Dreieck DEF zu drehen.)",
      "Man lege das Dreieck ABC so auf das Dreieck DEF, dass der Punkt A auf den Punkt D und die Strecke AB auf DE fällt. Da AB gleich DE ist, fällt der Punkt B auf E.",
      "Liegt AB auf DE, so fällt die Strecke AC auf DF, weil der Winkel BAC gleich dem Winkel EDF ist; und da AC gleich DF ist, fällt der Punkt C auf F.",
      "B fällt auf E und C auf F, also deckt die Grundlinie BC die Grundlinie EF (sonst würden zwei Strecken eine Fläche umschließen, was unmöglich ist). Was einander deckt, ist einander gleich; also ist BC gleich EF.",
      "Damit deckt das ganze Dreieck ABC das ganze Dreieck DEF und ist ihm gleich, und die übrigen Winkel decken die übrigen Winkel und sind ihnen gleich: der Winkel ABC dem Winkel DEF und ACB dem Winkel DFE."
    ],
    ru: [
      "Пусть в треугольниках ABC, DEF сторона AB равна DE, AC равна DF и угол BAC равен углу EDF. Утверждается, что основание BC равно основанию EF, треугольник ABC равен треугольнику DEF, и остальные углы равны: ABC углу DEF и ACB углу DFE. (Перетаскивайте E, чтобы поворачивать треугольник DEF.)",
      "Наложим треугольник ABC на треугольник DEF так, чтобы точка A совпала с точкой D, а прямая AB легла на DE. Так как AB равна DE, точка B совпадёт с E.",
      "Когда AB лежит на DE, прямая AC ляжет на DF, потому что угол BAC равен углу EDF; а так как AC равна DF, точка C совпадёт с F.",
      "B совпадает с E, а C с F, поэтому основание BC совпадёт с основанием EF (иначе две прямые ограничивали бы площадь, что невозможно). Совмещающиеся друг с другом равны, значит, BC равна EF.",
      "Итак, весь треугольник ABC совмещается со всем треугольником DEF и равен ему, и остальные углы совмещаются с остальными углами и равны им: угол ABC углу DEF, а ACB углу DFE."
    ],
    ar: [
      "ليكن المثلثان ABC، DEF، وفيهما AB مساوٍ لـ DE، وAC مساوٍ لـ DF، والزاوية BAC مساوية للزاوية EDF. فنقول: إن القاعدة BC مساوية للقاعدة EF، والمثلث ABC مساوٍ للمثلث DEF، والزاويتين الباقيتين متساويتان: ABC للزاوية DEF، وACB للزاوية DFE. (اسحب E لتدوير المثلث DEF.)",
      "نطبّق المثلث ABC على المثلث DEF، فنضع النقطة A على النقطة D والخط AB على DE. ولأن AB مساوٍ لـ DE تنطبق النقطة B على E.",
      "وإذا انطبق AB على DE وقع الخط AC على DF، لأن الزاوية BAC مساوية للزاوية EDF؛ ولأن AC مساوٍ لـ DF تنطبق النقطة C على F.",
      "انطبقت B على E وC على F، فتنطبق القاعدة BC على القاعدة EF (وإلا أحاط خطان مستقيمان بسطح، وهذا محال). والأشياء التي ينطبق بعضها على بعض متساوية؛ فـ BC مساوٍ لـ EF.",
      "فالمثلث ABC بكامله ينطبق على المثلث DEF بكامله ويساويه، والزاويتان الباقيتان تنطبقان على الباقيتين وتساويانهما: الزاوية ABC للزاوية DEF، وACB للزاوية DFE."
    ],
    hi: [
      "मान लीजिए त्रिभुजों ABC, DEF में AB, DE के बराबर है, AC, DF के बराबर है, और कोण BAC कोण EDF के बराबर है। दावा: आधार BC आधार EF के बराबर है, त्रिभुज ABC त्रिभुज DEF के बराबर है, और शेष कोण भी बराबर हैं: ABC, DEF के और ACB, DFE के। (त्रिभुज DEF को घुमाने के लिए E को खींचिए।)",
      "त्रिभुज ABC को त्रिभुज DEF पर इस प्रकार रखिए कि बिंदु A बिंदु D पर पड़े और सरल रेखा AB, DE पर। चूँकि AB, DE के बराबर है, इसलिए बिंदु B बिंदु E से संपाती होगा।",
      "AB के DE पर पड़ने पर सरल रेखा AC, DF पर पड़ेगी, क्योंकि कोण BAC कोण EDF के बराबर है; और चूँकि AC, DF के बराबर है, इसलिए बिंदु C बिंदु F से संपाती होगा।",
      "B, E से और C, F से संपाती है, इसलिए आधार BC आधार EF से संपाती होगा (वरना दो सरल रेखाएँ एक क्षेत्र घेर लेंगी, जो असंभव है)। जो वस्तुएँ संपाती हों वे बराबर होती हैं; इसलिए BC, EF के बराबर है।",
      "अतः पूरा त्रिभुज ABC पूरे त्रिभुज DEF से संपाती है और उसके बराबर है, और शेष कोण शेष कोणों से संपाती होकर बराबर हैं: कोण ABC कोण DEF के, और ACB कोण DFE के।"
    ],
    ja: [
      "三角形 ABC、DEF において、AB が DE に、AC が DF に等しく、角 BAC が角 EDF に等しいとする。主張：底辺 BC は底辺 EF に等しく、三角形 ABC は三角形 DEF に等しく、残りの角も等しい。すなわち角 ABC は DEF に、ACB は DFE に等しい。（E をドラッグすると三角形 DEF が回転します。）",
      "三角形 ABC を三角形 DEF に重ね、点 A を点 D に、直線 AB を DE に重ねる。AB は DE に等しいから、点 B は E と一致する。",
      "AB が DE に重なると、角 BAC は角 EDF に等しいから、直線 AC は DF に重なる。また AC は DF に等しいから、点 C は F と一致する。",
      "B が E と、C が F と一致するから、底辺 BC は底辺 EF と一致する（さもなければ 2 本の直線が面を囲むことになり、不可能である）。互いに重なり合うものは等しいから、BC は EF に等しい。",
      "こうして三角形 ABC 全体は三角形 DEF 全体と一致して等しく、残りの角も残りの角と一致して等しい。すなわち角 ABC は DEF に、ACB は DFE に等しい。"
    ]
  }
});
