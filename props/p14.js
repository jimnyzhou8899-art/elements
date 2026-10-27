// Proposition I.14
PROP(14, {
  vb: [0, 0, 720, 440],
  build(S) {
    S.free("B", 360, 320); S.free("A", 300, 90); S.free("C", 90, 360);
    // D: where the angles ABC, ABD add up to two right angles, i.e. CB produced
    S.pt("D", g => V.add(g("B"), V.mul(V.unit(V.sub(g("B"), g("C"))), 260)));
    // E: the line in a straight line with CB if BD were not, drawn slightly off toward A
    S.pt("E", g => {
      const d = V.unit(V.sub(g("B"), g("C"))), a = V.sub(g("A"), g("B"));
      return V.add(g("B"), V.mul(rot(d, Math.sign(d.x * a.y - d.y * a.x) * 0.3), 250));
    });
    S.seg("BA", "B", "A"); S.seg("CB", "C", "B"); S.seg("BD", "B", "D");
    S.seg("BE", "B", "E", { st: "aux" });
    S.ang("aABC", "A", "B", "C", { st: "red", r: 40 }); S.ang("aABD", "A", "B", "D", { st: "blue", r: 40 });
    S.ang("aABE", "A", "B", "E", { st: "yel", r: 60 });
  },
  steps: [
    { show: ["A", "B", "C", "D", "BA", "CB", "BD", "aABC", "aABD"] },
    { show: ["E", "BE"] },
    { show: ["aABE"], why: ["I.13"] },
    { why: ["P4", "A1"] },
    { hide: ["E", "BE", "aABE"], hl: ["CB", "BD"], why: ["A3", "A5"] }
  ],
  text: {
    zh: [
      "在直线 AB 上的点 B，不在 AB 同一侧的两条直线 BC、BD 所成的相邻角 ∠ABC、∠ABD 之和等于两个直角。断言：BD 与 CB 在同一条直线上。（拖动各点，D 总是落在 CB 的延长线上。）",
      "假如 BD 不与 CB 在同一条直线上，设 BE 与 CB 在同一条直线上。（图中的 E 是按这个假设画的。）",
      "因为直线 AB 立在直线 CBE 上，所以 ∠ABC 与 ∠ABE 之和等于两个直角。",
      "而 ∠ABC 与 ∠ABD 之和也等于两个直角，所有直角都相等，所以 ∠CBA、∠ABE 之和等于 ∠CBA、∠ABD 之和。",
      "两边各减去 ∠CBA，余下的 ∠ABE 等于余下的 ∠ABD，较小的等于较大的，这是不可能的。所以 BE 不与 CB 在同一条直线上；同理，除 BD 以外的任何直线都不与 CB 在同一条直线上。所以 CB 与 BD 在同一条直线上。"
    ],
    en: [
      "With the straight line AB, and at the point B on it, let the two straight lines BC, BD, not lying on the same side, make the adjacent angles ABC, ABD equal to two right angles. The claim: BD is in a straight line with CB. (Drag the points: D always lands on CB produced.)",
      "If BD is not in a straight line with CB, let BE be in a straight line with CB. (E is drawn as this assumption would place it.)",
      "Since the straight line AB stands on the straight line CBE, the angles ABC, ABE are equal to two right angles.",
      "But the angles ABC, ABD are also equal to two right angles, and all right angles are equal; therefore the angles CBA, ABE are equal to the angles CBA, ABD.",
      "Let the angle CBA be subtracted from each; then the remaining angle ABE is equal to the remaining angle ABD, the less to the greater, which is impossible. So BE is not in a straight line with CB, and in the same way no other straight line except BD is. Therefore CB is in a straight line with BD."
    ],
    es: [
      "Con la recta AB y en su punto B, formen las dos rectas BC, BD, no situadas del mismo lado, ángulos adyacentes ABC, ABD iguales a dos rectos. Se afirma que BD está en línea recta con CB. (Arrastra los puntos: D siempre cae en la prolongación de CB.)",
      "Si BD no está en línea recta con CB, sea BE la que está en línea recta con CB. (E está dibujado donde lo situaría esta suposición.)",
      "Como la recta AB está levantada sobre la recta CBE, los ángulos ABC, ABE son iguales a dos rectos.",
      "Pero los ángulos ABC, ABD también son iguales a dos rectos, y todos los rectos son iguales; por tanto los ángulos CBA, ABE son iguales a los ángulos CBA, ABD.",
      "Quítese de cada uno el ángulo CBA; el ángulo restante ABE es igual al ángulo restante ABD, el menor al mayor, lo cual es imposible. Así, BE no está en línea recta con CB, y del mismo modo ninguna otra recta salvo BD. Por tanto CB está en línea recta con BD."
    ],
    fr: [
      "Avec la droite AB et en son point B, que les deux droites BC, BD, non placées du même côté, fassent les angles adjacents ABC, ABD égaux à deux droits. Je dis que BD est en ligne droite avec CB. (Déplacez les points : D tombe toujours sur le prolongement de CB.)",
      "Si BD n'est pas en ligne droite avec CB, soit BE en ligne droite avec CB. (E est placé comme le voudrait cette supposition.)",
      "Puisque la droite AB est élevée sur la droite CBE, les angles ABC, ABE sont égaux à deux droits.",
      "Mais les angles ABC, ABD sont aussi égaux à deux droits, et tous les angles droits sont égaux ; donc les angles CBA, ABE sont égaux aux angles CBA, ABD.",
      "Retranchons de part et d'autre l'angle CBA ; l'angle restant ABE est égal à l'angle restant ABD, le plus petit au plus grand, ce qui est impossible. Donc BE n'est pas en ligne droite avec CB, ni aucune autre droite que BD. Donc CB est en ligne droite avec BD."
    ],
    de: [
      "An der Geraden AB bilden im Punkt B auf ihr zwei nicht auf derselben Seite liegende Geraden BC, BD Nebenwinkel ABC, ABD, die zusammen zwei Rechten gleich sind. Behauptung: BD liegt mit CB in gerader Linie. (Ziehen Sie die Punkte: D liegt stets auf der Verlängerung von CB.)",
      "Läge BD nicht mit CB in gerader Linie, so liege BE mit CB in gerader Linie. (E ist so gezeichnet, wie diese Annahme es verlangen würde.)",
      "Da die Gerade AB auf der Geraden CBE steht, sind die Winkel ABC, ABE zusammen zwei Rechten gleich.",
      "Aber auch die Winkel ABC, ABD sind zusammen zwei Rechten gleich, und alle rechten Winkel sind gleich; also sind die Winkel CBA, ABE den Winkeln CBA, ABD gleich.",
      "Man nehme beiderseits den Winkel CBA weg; dann ist der übrige Winkel ABE gleich dem übrigen Winkel ABD, der kleinere dem größeren, was unmöglich ist. Also liegt BE nicht mit CB in gerader Linie, und ebenso keine andere Gerade außer BD. Also liegt CB mit BD in gerader Linie."
    ],
    ru: [
      "Пусть к прямой AB в её точке B две прямые BC, BD, лежащие не по одну сторону, образуют смежные углы ABC, ABD, вместе равные двум прямым. Утверждается, что BD находится на одной прямой с CB. (Перетаскивайте точки: D всегда лежит на продолжении CB.)",
      "Если BD не на одной прямой с CB, пусть BE будет на одной прямой с CB. (Точка E нарисована там, где её поместило бы это допущение.)",
      "Так как прямая AB восставлена на прямой CBE, углы ABC, ABE вместе равны двум прямым.",
      "Но и углы ABC, ABD вместе равны двум прямым, а все прямые углы равны; значит, углы CBA, ABE равны углам CBA, ABD.",
      "Отнимем от каждых угол CBA; тогда остающийся угол ABE равен остающемуся углу ABD, меньший большему, что невозможно. Значит, BE не на одной прямой с CB, и так же никакая другая прямая, кроме BD. Итак, CB находится на одной прямой с BD."
    ],
    ar: [
      "ليُحدث خطان مستقيمان BC، BD، عند النقطة B من الخط المستقيم AB وليسا في جهة واحدة منه، زاويتين متجاورتين ABC، ABD مساويتين لقائمتين. فنقول: إن BD على استقامة CB. (اسحب النقاط: تقع D دائمًا على امتداد CB.)",
      "فإن لم يكن BD على استقامة CB، فليكن BE على استقامة CB. (رُسمت E حيث يضعها هذا الفرض.)",
      "ولأن الخط AB قائم على الخط CBE، فالزاويتان ABC، ABE مساويتان لقائمتين.",
      "لكن الزاويتين ABC، ABD أيضًا مساويتان لقائمتين، والقوائم كلها متساوية؛ فمجموع الزاويتين CBA، ABE مساوٍ لمجموع الزاويتين CBA، ABD.",
      "ننقص من كلٍّ منهما الزاوية CBA، فتبقى الزاوية ABE مساوية للزاوية الباقية ABD، الصغرى للعظمى، وهذا محال. فليس BE على استقامة CB، ولا أي خط آخر غير BD. فـ CB على استقامة BD."
    ],
    hi: [
      "सरल रेखा AB के बिंदु B पर, उसकी एक ही ओर न पड़ी दो सरल रेखाएँ BC, BD आसन्न कोण ABC, ABD बनाती हैं जिनका योग दो समकोणों के बराबर है। दावा: BD, CB के साथ एक सीध में है। (बिंदुओं को खींचिए: D हमेशा CB के बढ़ाव पर रहता है।)",
      "यदि BD, CB की सीध में न हो, तो मान लीजिए BE, CB की सीध में है। (E को इसी मान्यता के अनुसार दिखाया गया है।)",
      "चूँकि सरल रेखा AB सरल रेखा CBE पर खड़ी है, इसलिए कोण ABC, ABE का योग दो समकोणों के बराबर है।",
      "पर कोण ABC, ABD का योग भी दो समकोणों के बराबर है, और सभी समकोण बराबर होते हैं; अतः कोण CBA, ABE का योग कोण CBA, ABD के योग के बराबर है।",
      "दोनों में से कोण CBA घटाइए; तो शेष कोण ABE शेष कोण ABD के बराबर होगा, छोटा बड़े के बराबर, जो असंभव है। अतः BE, CB की सीध में नहीं है, और इसी प्रकार BD के सिवा कोई अन्य रेखा भी नहीं। इसलिए CB, BD के साथ एक सीध में है।"
    ],
    ja: [
      "直線 AB とその上の点 B において、同じ側にない 2 直線 BC、BD が隣り合う角 ABC、ABD をつくり、その和が 2 直角に等しいとする。主張：BD は CB と一直線をなす。（点をドラッグしてみてください。D はつねに CB の延長上にきます。）",
      "BD が CB と一直線をなさないなら、BE が CB と一直線をなすとする。（E はこの仮定のもとでの位置に描いてあります。）",
      "直線 AB は直線 CBE の上に立つから、角 ABC、ABE の和は 2 直角に等しい。",
      "しかし角 ABC、ABD の和も 2 直角に等しく、すべての直角は等しい。よって角 CBA、ABE の和は角 CBA、ABD の和に等しい。",
      "それぞれから角 CBA を引くと、残りの角 ABE は残りの角 ABD に等しくなり、小さいものが大きいものに等しいことになって不可能である。よって BE は CB と一直線をなさず、同様に BD 以外のどの直線もなさない。ゆえに CB は BD と一直線をなす。"
    ]
  }
});
