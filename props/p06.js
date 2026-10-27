// Proposition I.6
PROP(6, {
  vb: [0, 0, 720, 500],
  build(S) {
    S.free("B", 200, 400); S.free("C", 520, 400);
    // A sits where two rays at the same base angle meet; drag A to change that angle
    S.glide("A", 0.95, (g, a) => {
      const B = g("B"), C = g("C"), u = V.unit(V.sub(C, B)), n = { x: u.y, y: -u.x };
      return V.add(V.mid(B, C), V.mul(n, Math.tan(a) * V.dist(B, C) / 2));
    }, (g, m) => {
      const B = g("B"), C = g("C"), u = V.unit(V.sub(C, B)), n = { x: u.y, y: -u.x };
      const h = V.dot(V.sub(m, V.mid(B, C)), n);
      return Math.min(1.25, Math.max(0.3, Math.atan2(h, V.dist(B, C) / 2)));
    }, { ld: { x: 0, y: -1 } });
    // D is where the cut DB = AC would fall if AB were greater: drawn below A to show the argument
    S.pt("D", g => V.lerp(g("B"), g("A"), 0.68), { ld: { x: -1, y: -0.3 } });
    S.poly("tDBC", ["D", "B", "C"], { st: "red" }); S.poly("tACB", ["A", "C", "B"], { st: "blue" });
    S.seg("AB", "A", "B"); S.seg("AC", "A", "C"); S.seg("BC", "B", "C");
    S.seg("DB", "D", "B", { st: "red" }); S.seg("DC", "D", "C", { st: "red" });
    S.ang("aB", "A", "B", "C", { st: "yel", r: 30 }); S.ang("aC", "B", "C", "A", { st: "yel", r: 30 });
  },
  steps: [
    { show: ["A", "B", "C", "AB", "AC", "BC", "aB", "aC"] },
    { show: ["D", "DB"], hl: ["DB", "AC"], why: ["I.3"] },
    { show: ["DC"], why: ["P1"] },
    { show: ["tACB", "tDBC"], why: ["I.4"] },
    { why: ["A5"] }
  ],
  text: {
    zh: [
      "设三角形 ABC 中 ∠ABC 等于 ∠ACB。断言：边 AB 也等于边 AC。（拖动 A 会同时改变两个底角，它们始终相等。）",
      "假如 AB 不等于 AC，那么其中一个较大，设 AB 较大。从较大的 AB 上截取 DB 等于较小的 AC。（图中的 D 是按这个假设画的。）",
      "连接 DC。",
      "因为 DB 等于 AC，BC 是公共边，两边 DB、BC 分别等于两边 AC、CB，且 ∠DBC 等于 ∠ACB，所以底 DC 等于底 AB，三角形 DBC 等于三角形 ACB。",
      "这样较小的三角形 DBC 就等于较大的三角形 ACB，而整体大于部分，这是荒谬的。所以 AB 不会不等于 AC，即 AB 等于 AC。"
    ],
    en: [
      "In the triangle ABC let the angle ABC be equal to the angle ACB. The claim: the side AB is also equal to the side AC. (Dragging A changes both base angles together; they stay equal.)",
      "If AB is unequal to AC, one of them is greater; let AB be greater. From the greater AB let DB be cut off equal to the less AC. (D is drawn as this assumption would place it.)",
      "Let DC be joined.",
      "Since DB is equal to AC, and BC is common, the two sides DB, BC are equal to the two sides AC, CB, and the angle DBC is equal to the angle ACB; therefore the base DC is equal to the base AB, and the triangle DBC is equal to the triangle ACB.",
      "So the less triangle DBC is equal to the greater ACB, which is absurd, since the whole is greater than the part. Therefore AB is not unequal to AC; it is equal to it."
    ],
    es: [
      "En el triángulo ABC sea el ángulo ABC igual al ángulo ACB. Se afirma que el lado AB es también igual al lado AC. (Al arrastrar A cambian a la vez los dos ángulos de la base, que siguen siendo iguales.)",
      "Si AB no fuera igual a AC, uno de ellos sería mayor; sea AB el mayor. De la mayor AB quítese DB igual a la menor AC. (D está dibujado donde lo situaría esta suposición.)",
      "Trácese DC.",
      "Como DB es igual a AC y BC es común, los dos lados DB, BC son iguales a los dos lados AC, CB, y el ángulo DBC es igual al ángulo ACB; por tanto la base DC es igual a la base AB, y el triángulo DBC es igual al triángulo ACB.",
      "Así, el triángulo menor DBC sería igual al mayor ACB, lo cual es absurdo, pues el todo es mayor que la parte. Por tanto AB no es desigual a AC; es igual a él."
    ],
    fr: [
      "Dans le triangle ABC, soit l'angle ABC égal à l'angle ACB. Je dis que le côté AB est aussi égal au côté AC. (En déplaçant A, les deux angles à la base changent ensemble et restent égaux.)",
      "Si AB n'était pas égale à AC, l'une serait plus grande ; soit AB la plus grande. Retranchons de la plus grande AB la droite DB égale à la plus petite AC. (D est placé comme le voudrait cette supposition.)",
      "Menons DC.",
      "Puisque DB est égale à AC et que BC est commune, les deux côtés DB, BC sont égaux aux deux côtés AC, CB, et l'angle DBC est égal à l'angle ACB ; donc la base DC est égale à la base AB, et le triangle DBC est égal au triangle ACB.",
      "Ainsi le plus petit triangle DBC serait égal au plus grand ACB, ce qui est absurde, car le tout est plus grand que la partie. Donc AB n'est pas inégale à AC ; elle lui est égale."
    ],
    de: [
      "Im Dreieck ABC sei der Winkel ABC gleich dem Winkel ACB. Behauptung: Auch die Seite AB ist gleich der Seite AC. (Ziehen an A ändert beide Basiswinkel zugleich; sie bleiben gleich.)",
      "Wäre AB ungleich AC, so wäre eine von beiden größer; AB sei die größere. Auf der größeren AB trage man DB gleich der kleineren AC ab. (D ist so gezeichnet, wie diese Annahme es verlangen würde.)",
      "Man ziehe DC.",
      "Da DB gleich AC ist und BC gemeinsam, sind die zwei Seiten DB, BC den zwei Seiten AC, CB gleich, und der Winkel DBC ist gleich dem Winkel ACB; also ist die Grundlinie DC gleich der Grundlinie AB und das Dreieck DBC gleich dem Dreieck ACB.",
      "Dann wäre das kleinere Dreieck DBC dem größeren ACB gleich, was absurd ist, denn das Ganze ist größer als der Teil. Also ist AB nicht ungleich AC, sondern gleich."
    ],
    ru: [
      "Пусть в треугольнике ABC угол ABC равен углу ACB. Утверждается, что и сторона AB равна стороне AC. (Перетаскивание A меняет оба угла при основании одновременно, и они остаются равными.)",
      "Если AB не равна AC, то одна из них больше; пусть AB больше. Отнимем от большей AB прямую DB, равную меньшей AC. (Точка D нарисована там, где её поместило бы это допущение.)",
      "Проведём DC.",
      "Так как DB равна AC, а BC общая, то две стороны DB, BC равны двум сторонам AC, CB, и угол DBC равен углу ACB; значит, основание DC равно основанию AB, и треугольник DBC равен треугольнику ACB.",
      "Тогда меньший треугольник DBC был бы равен большему ACB, что нелепо, так как целое больше части. Значит, AB не может быть не равна AC, то есть равна ей."
    ],
    ar: [
      "ليكن في المثلث ABC الزاوية ABC مساوية للزاوية ACB. فنقول: إن الضلع AB مساوٍ أيضًا للضلع AC. (سحب A يغيّر زاويتي القاعدة معًا، فتبقيان متساويتين.)",
      "فإن لم يكن AB مساويًا لـ AC فأحدهما أعظم؛ وليكن AB الأعظم. نفصل من الأعظم AB الخط DB مساويًا للأصغر AC. (رُسمت D حيث يضعها هذا الفرض.)",
      "ونصل DC.",
      "لأن DB مساوٍ لـ AC، وBC مشترك، يكون الضلعان DB، BC مساويين للضلعين AC، CB، والزاوية DBC مساوية للزاوية ACB؛ فالقاعدة DC مساوية للقاعدة AB، والمثلث DBC مساوٍ للمثلث ACB.",
      "فيكون المثلث الأصغر DBC مساويًا للأعظم ACB، وهذا محال، لأن الكل أعظم من الجزء. فليس AB غير مساوٍ لـ AC؛ بل هو مساوٍ له."
    ],
    hi: [
      "मान लीजिए त्रिभुज ABC में कोण ABC कोण ACB के बराबर है। दावा: भुजा AB भी भुजा AC के बराबर है। (A को खींचने से दोनों आधार-कोण साथ-साथ बदलते हैं और बराबर रहते हैं।)",
      "यदि AB, AC के बराबर न हो, तो उनमें से एक बड़ा होगा; मान लीजिए AB बड़ा है। बड़ी AB में से छोटी AC के बराबर DB काटिए। (D को इसी मान्यता के अनुसार दिखाया गया है।)",
      "DC मिलाइए।",
      "चूँकि DB, AC के बराबर है और BC उभयनिष्ठ है, इसलिए दो भुजाएँ DB, BC दो भुजाओं AC, CB के बराबर हैं, और कोण DBC कोण ACB के बराबर है; अतः आधार DC आधार AB के बराबर है, और त्रिभुज DBC त्रिभुज ACB के बराबर है।",
      "तब छोटा त्रिभुज DBC बड़े त्रिभुज ACB के बराबर होगा, जो असंगत है, क्योंकि पूर्ण भाग से बड़ा होता है। इसलिए AB, AC से असमान नहीं हो सकता; वह उसके बराबर है।"
    ],
    ja: [
      "三角形 ABC において角 ABC が角 ACB に等しいとする。主張：辺 AB も辺 AC に等しい。（A をドラッグすると 2 つの底角が同時に変わり、等しいままです。）",
      "AB が AC に等しくないなら、一方が大きい。AB の方が大きいとする。大きい AB から、小さい AC に等しい DB を切り取る。（D はこの仮定のもとでの位置に描いてあります。）",
      "DC を結ぶ。",
      "DB は AC に等しく、BC は共通だから、2 辺 DB、BC は 2 辺 AC、CB に等しく、角 DBC は角 ACB に等しい。よって底辺 DC は底辺 AB に等しく、三角形 DBC は三角形 ACB に等しい。",
      "すると小さい三角形 DBC が大きい三角形 ACB に等しくなるが、全体は部分より大きいのでこれは不合理である。よって AB は AC に等しくないことはなく、等しい。"
    ]
  }
});
