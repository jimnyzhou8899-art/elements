// Proposition I.28
PROP(28, {
  vb: [0, 0, 720, 440],
  build(S) {
    S.free("G", 260, 140, { ld: { x: 0.6, y: -1 } }); S.free("H", 400, 310, { ld: { x: -0.6, y: 1 } });
    S.free("B", 600, 130);
    const d = g => V.unit(V.sub(g("B"), g("G")));
    const t = g => V.unit(V.sub(g("H"), g("G")));
    S.pt("A", g => V.sub(g("G"), V.mul(d(g), 210)));
    // CD through H in the same direction as AB (the equal angles make it so)
    S.pt("C", g => V.sub(g("H"), V.mul(d(g), 340)));
    S.pt("D", g => V.add(g("H"), V.mul(d(g), 240)));
    S.pt("E", g => V.sub(g("G"), V.mul(t(g), 100)));
    S.pt("F", g => V.add(g("H"), V.mul(t(g), 100)));
    S.seg("AB", "A", "B"); S.seg("CD", "C", "D"); S.seg("EF", "E", "F");
    S.ang("aEGB", "E", "G", "B", { st: "red", r: 30 });
    S.ang("aAGH", "A", "G", "H", { st: "red", r: 30 });
    S.ang("aGHD", "G", "H", "D", { st: "red", r: 30 });
    S.ang("aBGH", "B", "G", "H", { st: "blue", r: 42 });
  },
  steps: [
    { show: ["A", "B", "C", "D", "E", "F", "G", "H", "AB", "CD", "EF", "aEGB", "aGHD"] },
    { show: ["aAGH"], why: ["I.15", "A1"] },
    { hl: ["AB", "CD"], why: ["I.27"] },
    { show: ["aBGH"], hide: ["aEGB", "aAGH"] },
    { show: ["aAGH"], why: ["I.13", "P4", "A1", "A3"] },
    { hl: ["AB", "CD"], why: ["I.27"] }
  ],
  text: {
    zh: [
      "设直线 EF 落在两条直线 AB、CD 上，所成的外角 ∠EGB 等于同侧的内对角 ∠GHD。断言：AB 平行于 CD。（拖动 G、H 或 B 试试。）",
      "因为 ∠EGB 等于它的对顶角 ∠AGH，所以 ∠AGH 也等于 ∠GHD，而它们是内错角，",
      "所以 AB 平行于 CD。",
      "再设同侧的两个内角 ∠BGH、∠GHD 之和等于两个直角。",
      "而 ∠AGH、∠BGH 之和也等于两个直角，所以 ∠AGH、∠BGH 之和等于 ∠BGH、∠GHD 之和。两边各减去 ∠BGH，余下的 ∠AGH 等于余下的 ∠GHD。",
      "它们是内错角，所以 AB 平行于 CD。"
    ],
    en: [
      "Let the straight line EF falling on the two straight lines AB, CD make the exterior angle EGB equal to the interior and opposite angle GHD on the same side. The claim: AB is parallel to CD. (Try dragging G, H or B.)",
      "Since the angle EGB is equal to its vertical angle AGH, the angle AGH is also equal to the angle GHD; and they are alternate;",
      "therefore AB is parallel to CD.",
      "Next, let the interior angles on the same side, BGH, GHD, be equal to two right angles.",
      "The angles AGH, BGH are also equal to two right angles; therefore the angles AGH, BGH are equal to the angles BGH, GHD. Let the angle BGH be subtracted from each; then the remaining angle AGH is equal to the remaining angle GHD.",
      "And they are alternate; therefore AB is parallel to CD."
    ],
    es: [
      "Sea la recta EF que cae sobre las dos rectas AB, CD y forma el ángulo exterior EGB igual al ángulo interior y opuesto del mismo lado GHD. Se afirma que AB es paralela a CD. (Prueba a arrastrar G, H o B.)",
      "Como el ángulo EGB es igual a su opuesto por el vértice AGH, el ángulo AGH es también igual al ángulo GHD; y son alternos;",
      "por tanto AB es paralela a CD.",
      "Sean ahora los ángulos interiores del mismo lado, BGH, GHD, iguales a dos rectos.",
      "Los ángulos AGH, BGH son también iguales a dos rectos; por tanto los ángulos AGH, BGH son iguales a los ángulos BGH, GHD. Quítese de cada uno el ángulo BGH; el ángulo restante AGH es igual al ángulo restante GHD.",
      "Ambos son alternos; por tanto AB es paralela a CD."
    ],
    fr: [
      "Que la droite EF tombant sur les deux droites AB, CD fasse l'angle extérieur EGB égal à l'angle intérieur et opposé GHD du même côté. Je dis que AB est parallèle à CD. (Essayez de déplacer G, H ou B.)",
      "Puisque l'angle EGB est égal à son opposé par le sommet AGH, l'angle AGH est aussi égal à l'angle GHD ; et ils sont alternes ;",
      "donc AB est parallèle à CD.",
      "Que maintenant les angles intérieurs du même côté, BGH, GHD, soient égaux à deux droits.",
      "Les angles AGH, BGH sont aussi égaux à deux droits ; donc les angles AGH, BGH sont égaux aux angles BGH, GHD. Retranchons de part et d'autre l'angle BGH ; l'angle restant AGH est égal à l'angle restant GHD.",
      "Et ils sont alternes ; donc AB est parallèle à CD."
    ],
    de: [
      "Die Gerade EF falle auf die zwei Geraden AB, CD und bilde den Außenwinkel EGB gleich dem auf derselben Seite innen gegenüberliegenden Winkel GHD. Behauptung: AB ist parallel zu CD. (Ziehen Sie G, H oder B.)",
      "Da der Winkel EGB seinem Scheitelwinkel AGH gleich ist, ist auch der Winkel AGH gleich dem Winkel GHD; und sie sind Wechselwinkel;",
      "also ist AB parallel zu CD.",
      "Nun seien die Innenwinkel auf derselben Seite, BGH, GHD, zusammen zwei Rechten gleich.",
      "Auch die Winkel AGH, BGH sind zusammen zwei Rechten gleich; also sind die Winkel AGH, BGH den Winkeln BGH, GHD gleich. Man nehme beiderseits den Winkel BGH weg; dann ist der übrige Winkel AGH gleich dem übrigen Winkel GHD.",
      "Und sie sind Wechselwinkel; also ist AB parallel zu CD."
    ],
    ru: [
      "Пусть прямая EF, падающая на две прямые AB, CD, образует внешний угол EGB, равный внутреннему противолежащему углу GHD с той же стороны. Утверждается, что AB параллельна CD. (Попробуйте перетащить G, H или B.)",
      "Так как угол EGB равен вертикальному с ним углу AGH, то и угол AGH равен углу GHD; и они накрест лежащие;",
      "значит, AB параллельна CD.",
      "Теперь пусть внутренние углы с одной стороны, BGH, GHD, вместе равны двум прямым.",
      "Углы AGH, BGH также вместе равны двум прямым; значит, углы AGH, BGH равны углам BGH, GHD. Отнимем от каждых угол BGH; тогда остающийся угол AGH равен остающемуся углу GHD.",
      "И они накрест лежащие; значит, AB параллельна CD."
    ],
    ar: [
      "ليقع الخط المستقيم EF على الخطين المستقيمين AB، CD ويجعل الزاوية الخارجة EGB مساوية للزاوية الداخلة المقابلة لها في الجهة نفسها GHD. فنقول: إن AB موازٍ لـ CD. (جرّب سحب G أو H أو B.)",
      "لأن الزاوية EGB مساوية لمقابلتها بالرأس AGH، فالزاوية AGH أيضًا مساوية للزاوية GHD؛ وهما متبادلتان؛",
      "فـ AB موازٍ لـ CD.",
      "ثم لتكن الزاويتان الداخلتان في جهة واحدة BGH، GHD مساويتين لقائمتين.",
      "والزاويتان AGH، BGH أيضًا مساويتان لقائمتين؛ فمجموع الزاويتين AGH، BGH مساوٍ لمجموع الزاويتين BGH، GHD. ننقص من كلٍّ منهما الزاوية BGH، فتبقى الزاوية AGH مساوية للزاوية الباقية GHD.",
      "وهما متبادلتان؛ فـ AB موازٍ لـ CD."
    ],
    hi: [
      "मान लीजिए सरल रेखा EF दो सरल रेखाओं AB, CD पर पड़कर बहिष्कोण EGB को उसी ओर के अंतः सम्मुख कोण GHD के बराबर बनाती है। दावा: AB, CD के समांतर है। (G, H या B को खींचकर देखिए।)",
      "चूँकि कोण EGB अपने शीर्षाभिमुख कोण AGH के बराबर है, इसलिए कोण AGH भी कोण GHD के बराबर है; और ये एकांतर कोण हैं;",
      "अतः AB, CD के समांतर है।",
      "अब मान लीजिए एक ही ओर के अंतः कोण BGH, GHD का योग दो समकोणों के बराबर है।",
      "कोण AGH, BGH का योग भी दो समकोणों के बराबर है; अतः कोण AGH, BGH का योग कोण BGH, GHD के योग के बराबर है। दोनों में से कोण BGH घटाइए; तो शेष कोण AGH शेष कोण GHD के बराबर है।",
      "और ये एकांतर कोण हैं; अतः AB, CD के समांतर है।"
    ],
    ja: [
      "直線 EF が 2 直線 AB、CD に交わって、外角 EGB を同じ側の内対角 GHD に等しくするとする。主張：AB は CD に平行である。（G、H、B をドラッグしてみてください。）",
      "角 EGB はその対頂角 AGH に等しいから、角 AGH も角 GHD に等しい。そしてこれらは錯角である。",
      "よって AB は CD に平行である。",
      "次に、同じ側の内角 BGH、GHD の和が 2 直角に等しいとする。",
      "角 AGH、BGH の和も 2 直角に等しい。よって角 AGH、BGH の和は角 BGH、GHD の和に等しい。それぞれから角 BGH を引くと、残りの角 AGH は残りの角 GHD に等しい。",
      "そしてこれらは錯角である。よって AB は CD に平行である。"
    ]
  }
});
