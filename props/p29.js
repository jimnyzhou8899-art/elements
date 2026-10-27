// Proposition I.29
PROP(29, {
  vb: [0, 0, 720, 440],
  build(S) {
    S.free("G", 260, 140, { ld: { x: 0.6, y: -1 } }); S.free("H", 400, 310, { ld: { x: -0.6, y: 1 } });
    S.free("B", 600, 130);
    const d = g => V.unit(V.sub(g("B"), g("G")));
    const t = g => V.unit(V.sub(g("H"), g("G")));
    S.pt("A", g => V.sub(g("G"), V.mul(d(g), 210)));
    // CD through H parallel to AB
    S.pt("C", g => V.sub(g("H"), V.mul(d(g), 340)));
    S.pt("D", g => V.add(g("H"), V.mul(d(g), 240)));
    S.pt("E", g => V.sub(g("G"), V.mul(t(g), 100)));
    S.pt("F", g => V.add(g("H"), V.mul(t(g), 100)));
    S.seg("AB", "A", "B"); S.seg("CD", "C", "D"); S.seg("EF", "E", "F");
    S.ang("aAGH", "A", "G", "H", { st: "red", r: 30 });
    S.ang("aGHD", "G", "H", "D", { st: "red", r: 30 });
    S.ang("aEGB", "E", "G", "B", { st: "red", r: 30 });
    S.ang("aBGH", "B", "G", "H", { st: "blue", r: 42 });
  },
  steps: [
    { show: ["A", "B", "C", "D", "E", "F", "G", "H", "AB", "CD", "EF", "aAGH", "aGHD"] },
    { show: ["aBGH"] },
    { why: ["I.13"] },
    { hl: ["AB", "CD"], why: ["P5", "D23"] },
    { show: ["aEGB"], hide: ["aBGH"], why: ["I.15", "A1"] },
    { show: ["aBGH"], hide: ["aAGH"], why: ["A2", "I.13"] }
  ],
  text: {
    zh: [
      "设直线 EF 落在平行直线 AB、CD 上。断言：内错角 ∠AGH、∠GHD 相等，外角 ∠EGB 等于同侧的内对角 ∠GHD，同侧内角 ∠BGH、∠GHD 之和等于两个直角。（拖动 G、H 或 B 试试。）",
      "如果 ∠AGH 不等于 ∠GHD，设 ∠AGH 较大。两边各加上 ∠BGH，于是 ∠AGH、∠BGH 之和大于 ∠BGH、∠GHD 之和。",
      "而 ∠AGH、∠BGH 之和等于两个直角，所以 ∠BGH、∠GHD 之和小于两个直角。",
      "但两条直线从小于两个直角的那一侧无限延长必定相交，而 AB、CD 平行，不会相交，矛盾。所以 ∠AGH 等于 ∠GHD。",
      "又 ∠AGH 等于它的对顶角 ∠EGB，所以 ∠EGB 也等于 ∠GHD。",
      "两边各加上 ∠BGH，于是 ∠EGB、∠BGH 之和等于 ∠BGH、∠GHD 之和。前者等于两个直角，所以 ∠BGH、∠GHD 之和也等于两个直角。"
    ],
    en: [
      "Let the straight line EF fall on the parallel straight lines AB, CD. The claim: it makes the alternate angles AGH, GHD equal, the exterior angle EGB equal to the interior and opposite angle GHD, and the interior angles on the same side, BGH, GHD, equal to two right angles. (Try dragging G, H or B.)",
      "If the angle AGH is unequal to the angle GHD, let the angle AGH be greater. Let the angle BGH be added to each; then the angles AGH, BGH are greater than the angles BGH, GHD.",
      "But the angles AGH, BGH are equal to two right angles; therefore the angles BGH, GHD are less than two right angles.",
      "But straight lines produced indefinitely from angles less than two right angles meet; so AB, CD would meet, yet they are parallel and do not meet, which is impossible. Therefore the angle AGH is equal to the angle GHD.",
      "Again, the angle AGH is equal to its vertical angle EGB; therefore the angle EGB is also equal to the angle GHD.",
      "Let the angle BGH be added to each; then the angles EGB, BGH are equal to the angles BGH, GHD. The former are equal to two right angles; therefore the angles BGH, GHD are also equal to two right angles."
    ],
    es: [
      "Caiga la recta EF sobre las rectas paralelas AB, CD. Se afirma que forma los ángulos alternos AGH, GHD iguales, el ángulo exterior EGB igual al ángulo interior y opuesto GHD, y los ángulos interiores del mismo lado, BGH, GHD, iguales a dos rectos. (Prueba a arrastrar G, H o B.)",
      "Si el ángulo AGH no es igual al ángulo GHD, sea mayor el ángulo AGH. Añádase a cada uno el ángulo BGH; entonces los ángulos AGH, BGH son mayores que los ángulos BGH, GHD.",
      "Pero los ángulos AGH, BGH son iguales a dos rectos; por tanto los ángulos BGH, GHD son menores que dos rectos.",
      "Pero las rectas prolongadas indefinidamente desde ángulos menores que dos rectos se encuentran; así AB, CD se encontrarían, aunque son paralelas y no se encuentran, lo cual es imposible. Por tanto el ángulo AGH es igual al ángulo GHD.",
      "Además, el ángulo AGH es igual a su opuesto por el vértice EGB; por tanto el ángulo EGB es también igual al ángulo GHD.",
      "Añádase a cada uno el ángulo BGH; entonces los ángulos EGB, BGH son iguales a los ángulos BGH, GHD. Los primeros son iguales a dos rectos; por tanto los ángulos BGH, GHD son también iguales a dos rectos."
    ],
    fr: [
      "Que la droite EF tombe sur les droites parallèles AB, CD. Je dis qu'elle fait les angles alternes AGH, GHD égaux, l'angle extérieur EGB égal à l'angle intérieur et opposé GHD, et les angles intérieurs du même côté, BGH, GHD, égaux à deux droits. (Essayez de déplacer G, H ou B.)",
      "Si l'angle AGH n'est pas égal à l'angle GHD, que l'angle AGH soit le plus grand. Ajoutons à chacun l'angle BGH ; les angles AGH, BGH sont alors plus grands que les angles BGH, GHD.",
      "Mais les angles AGH, BGH sont égaux à deux droits ; donc les angles BGH, GHD sont plus petits que deux droits.",
      "Or des droites prolongées à l'infini du côté où les angles sont plus petits que deux droits se rencontrent ; donc AB, CD se rencontreraient, alors qu'elles sont parallèles et ne se rencontrent pas, ce qui est impossible. Donc l'angle AGH est égal à l'angle GHD.",
      "De plus, l'angle AGH est égal à son opposé par le sommet EGB ; donc l'angle EGB est aussi égal à l'angle GHD.",
      "Ajoutons à chacun l'angle BGH ; les angles EGB, BGH sont alors égaux aux angles BGH, GHD. Les premiers sont égaux à deux droits ; donc les angles BGH, GHD sont aussi égaux à deux droits."
    ],
    de: [
      "Die Gerade EF falle auf die parallelen Geraden AB, CD. Behauptung: Sie bildet die Wechselwinkel AGH, GHD gleich, den Außenwinkel EGB gleich dem innen gegenüberliegenden Winkel GHD, und die Innenwinkel auf derselben Seite, BGH, GHD, zusammen zwei Rechten gleich. (Ziehen Sie G, H oder B.)",
      "Wäre der Winkel AGH ungleich dem Winkel GHD, so sei der Winkel AGH größer. Man füge beiderseits den Winkel BGH hinzu; dann sind die Winkel AGH, BGH größer als die Winkel BGH, GHD.",
      "Die Winkel AGH, BGH sind aber zusammen zwei Rechten gleich; also sind die Winkel BGH, GHD zusammen kleiner als zwei Rechte.",
      "Geraden, die von Winkeln kleiner als zwei Rechte aus ins Unendliche verlängert werden, treffen sich aber; also träfen sich AB, CD, obwohl sie parallel sind und sich nicht treffen, was unmöglich ist. Also ist der Winkel AGH gleich dem Winkel GHD.",
      "Ferner ist der Winkel AGH seinem Scheitelwinkel EGB gleich; also ist auch der Winkel EGB gleich dem Winkel GHD.",
      "Man füge beiderseits den Winkel BGH hinzu; dann sind die Winkel EGB, BGH den Winkeln BGH, GHD gleich. Jene sind zusammen zwei Rechten gleich; also sind auch die Winkel BGH, GHD zusammen zwei Rechten gleich."
    ],
    ru: [
      "Пусть прямая EF падает на параллельные прямые AB, CD. Утверждается, что она образует равные накрест лежащие углы AGH, GHD, внешний угол EGB, равный внутреннему противолежащему углу GHD, и внутренние углы с одной стороны, BGH, GHD, вместе равные двум прямым. (Попробуйте перетащить G, H или B.)",
      "Если угол AGH не равен углу GHD, пусть угол AGH больше. Прибавим к каждому угол BGH; тогда углы AGH, BGH больше углов BGH, GHD.",
      "Но углы AGH, BGH вместе равны двум прямым; значит, углы BGH, GHD вместе меньше двух прямых.",
      "Но прямые, неограниченно продолженные со стороны углов, меньших двух прямых, встречаются; значит, AB, CD встретились бы, хотя они параллельны и не встречаются, что невозможно. Значит, угол AGH равен углу GHD.",
      "Далее, угол AGH равен вертикальному с ним углу EGB; значит, и угол EGB равен углу GHD.",
      "Прибавим к каждому угол BGH; тогда углы EGB, BGH равны углам BGH, GHD. Первые вместе равны двум прямым; значит, и углы BGH, GHD вместе равны двум прямым."
    ],
    ar: [
      "ليقع الخط المستقيم EF على الخطين المتوازيين AB، CD. فنقول: إنه يجعل الزاويتين المتبادلتين AGH، GHD متساويتين، والزاوية الخارجة EGB مساوية للزاوية الداخلة المقابلة GHD، والزاويتين الداخلتين في جهة واحدة BGH، GHD مساويتين لقائمتين. (جرّب سحب G أو H أو B.)",
      "فإن لم تكن الزاوية AGH مساوية للزاوية GHD فلتكن AGH أعظم. نزيد على كلٍّ منهما الزاوية BGH، فمجموع الزاويتين AGH، BGH أعظم من مجموع الزاويتين BGH، GHD.",
      "لكن الزاويتين AGH، BGH مساويتان لقائمتين؛ فمجموع الزاويتين BGH، GHD أصغر من قائمتين.",
      "والخطان إذا أُخرجا بلا نهاية في جهة الزاويتين اللتين هما أصغر من قائمتين التقيا؛ فيلتقي AB، CD، وهما متوازيان لا يلتقيان، وهذا محال. فالزاوية AGH مساوية للزاوية GHD.",
      "وأيضًا الزاوية AGH مساوية لمقابلتها بالرأس EGB؛ فالزاوية EGB أيضًا مساوية للزاوية GHD.",
      "نزيد على كلٍّ منهما الزاوية BGH، فمجموع الزاويتين EGB، BGH مساوٍ لمجموع الزاويتين BGH، GHD. والأولان مساويان لقائمتين؛ فالزاويتان BGH، GHD أيضًا مساويتان لقائمتين."
    ],
    hi: [
      "मान लीजिए सरल रेखा EF समांतर सरल रेखाओं AB, CD पर पड़ती है। दावा: वह एकांतर कोण AGH, GHD बराबर बनाती है, बहिष्कोण EGB अंतः सम्मुख कोण GHD के बराबर बनाती है, और एक ही ओर के अंतः कोण BGH, GHD का योग दो समकोणों के बराबर बनाती है। (G, H या B को खींचकर देखिए।)",
      "यदि कोण AGH कोण GHD के बराबर न हो, तो मान लीजिए कोण AGH बड़ा है। दोनों में कोण BGH जोड़िए; तो कोण AGH, BGH का योग कोण BGH, GHD के योग से बड़ा है।",
      "पर कोण AGH, BGH का योग दो समकोणों के बराबर है; अतः कोण BGH, GHD का योग दो समकोणों से कम है।",
      "पर दो समकोणों से कम कोणों की ओर अनंत तक बढ़ाई गई सरल रेखाएँ मिलती हैं; तो AB, CD मिलेंगी, जबकि वे समांतर हैं और नहीं मिलतीं, जो असंभव है। अतः कोण AGH कोण GHD के बराबर है।",
      "फिर, कोण AGH अपने शीर्षाभिमुख कोण EGB के बराबर है; अतः कोण EGB भी कोण GHD के बराबर है।",
      "दोनों में कोण BGH जोड़िए; तो कोण EGB, BGH का योग कोण BGH, GHD के योग के बराबर है। पहला योग दो समकोणों के बराबर है; अतः कोण BGH, GHD का योग भी दो समकोणों के बराबर है।"
    ],
    ja: [
      "直線 EF が平行な 2 直線 AB、CD に交わるとする。主張：錯角 AGH、GHD は等しく、外角 EGB は同じ側の内対角 GHD に等しく、同じ側の内角 BGH、GHD の和は 2 直角に等しい。（G、H、B をドラッグしてみてください。）",
      "角 AGH が角 GHD に等しくなければ、角 AGH が大きいとする。それぞれに角 BGH を加えると、角 AGH、BGH の和は角 BGH、GHD の和より大きい。",
      "しかし角 AGH、BGH の和は 2 直角に等しい。よって角 BGH、GHD の和は 2 直角より小さい。",
      "ところが 2 直角より小さい角の側に限りなく延長された直線は交わる。すると AB、CD は交わることになるが、これらは平行で交わらないから不可能である。よって角 AGH は角 GHD に等しい。",
      "また角 AGH はその対頂角 EGB に等しい。よって角 EGB も角 GHD に等しい。",
      "それぞれに角 BGH を加えると、角 EGB、BGH の和は角 BGH、GHD の和に等しい。前者は 2 直角に等しいから、角 BGH、GHD の和も 2 直角に等しい。"
    ]
  }
});
