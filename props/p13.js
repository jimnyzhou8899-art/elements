// Proposition I.13
PROP(13, {
  vb: [0, 0, 720, 440],
  build(S) {
    S.free("C", 70, 330); S.free("D", 650, 330);
    S.glide("B", 0.45, (g, t) => V.lerp(g("C"), g("D"), t),
      (g, m) => Math.min(0.85, Math.max(0.15, V.dot(V.sub(m, g("C")), V.sub(g("D"), g("C"))) / V.dot(V.sub(g("D"), g("C")), V.sub(g("D"), g("C"))))), { ld: { x: 0, y: 1 } });
    S.free("A", 470, 110);
    S.pt("E", g => { const u = V.unit(V.sub(g("D"), g("C"))); return V.add(g("B"), V.mul({ x: u.y, y: -u.x }, 230)); });
    S.seg("CD", "C", "D"); S.seg("BA", "B", "A");
    S.seg("BE", "B", "E", { st: "yel" });
    S.ang("aCBA", "C", "B", "A", { st: "red", r: 40 }); S.ang("aABD", "A", "B", "D", { st: "blue", r: 40 });
    S.rang("rE", "C", "B", "E");
    S.ang("aABE", "A", "B", "E", { st: "yel", r: 60 }); S.ang("aEBD", "E", "B", "D", { st: "blue", r: 60 });
  },
  steps: [
    { show: ["A", "B", "C", "D", "CD", "BA", "aCBA", "aABD"] },
    { why: ["D10"] },
    { show: ["E", "BE", "rE"], why: ["I.11"] },
    { show: ["aABE"], why: ["A2"] },
    { show: ["aEBD"], why: ["A2"] },
    { hl: ["BA", "BE"], why: ["A1"] }
  ],
  text: {
    zh: [
      "设直线 AB 立在直线 CD 上，形成 ∠CBA、∠ABD。断言：这两个角或者都是直角，或者它们的和等于两个直角。（拖动 A 或 B 试试。）",
      "如果 ∠CBA 等于 ∠ABD，那么它们是两个直角。",
      "如果不等，就从点 B 作 BE 与 CD 成直角。于是 ∠CBE、∠EBD 是两个直角。",
      "因为 ∠CBE 等于 ∠CBA 与 ∠ABE 之和，两边各加上 ∠EBD，所以 ∠CBE、∠EBD 之和等于 ∠CBA、∠ABE、∠EBD 三者之和。",
      "又因为 ∠DBA 等于 ∠DBE 与 ∠EBA 之和，两边各加上 ∠ABC，所以 ∠DBA、∠ABC 之和等于 ∠DBE、∠EBA、∠ABC 三者之和。",
      "∠CBE、∠EBD 之和与 ∠DBA、∠ABC 之和都等于同样的三个角之和，所以彼此相等。前者是两个直角，所以 ∠DBA、∠ABC 之和也等于两个直角。"
    ],
    en: [
      "Let the straight line AB set up on the straight line CD make the angles CBA, ABD. The claim: the angles CBA, ABD are either two right angles or equal to two right angles. (Try dragging A or B.)",
      "If the angle CBA is equal to the angle ABD, they are two right angles.",
      "If not, let BE be drawn from the point B at right angles to CD; therefore the angles CBE, EBD are two right angles.",
      "Since the angle CBE is equal to the two angles CBA, ABE, let the angle EBD be added to each; therefore the angles CBE, EBD are equal to the three angles CBA, ABE, EBD.",
      "Again, since the angle DBA is equal to the two angles DBE, EBA, let the angle ABC be added to each; therefore the angles DBA, ABC are equal to the three angles DBE, EBA, ABC.",
      "So the angles CBE, EBD and the angles DBA, ABC are equal to the same three angles, and therefore to one another. The angles CBE, EBD are two right angles; therefore the angles DBA, ABC are also equal to two right angles."
    ],
    es: [
      "Sea la recta AB levantada sobre la recta CD formando los ángulos CBA, ABD. Se afirma que los ángulos CBA, ABD son o dos rectos o iguales a dos rectos. (Prueba a arrastrar A o B.)",
      "Si el ángulo CBA es igual al ángulo ABD, son dos rectos.",
      "Si no, trácese desde el punto B la recta BE en ángulo recto con CD; los ángulos CBE, EBD son entonces dos rectos.",
      "Como el ángulo CBE es igual a los dos ángulos CBA, ABE, añádase a cada uno el ángulo EBD; por tanto los ángulos CBE, EBD son iguales a los tres ángulos CBA, ABE, EBD.",
      "De nuevo, como el ángulo DBA es igual a los dos ángulos DBE, EBA, añádase a cada uno el ángulo ABC; por tanto los ángulos DBA, ABC son iguales a los tres ángulos DBE, EBA, ABC.",
      "Así, los ángulos CBE, EBD y los ángulos DBA, ABC son iguales a los mismos tres ángulos, y por tanto entre sí. Los ángulos CBE, EBD son dos rectos; luego los ángulos DBA, ABC son también iguales a dos rectos."
    ],
    fr: [
      "Que la droite AB élevée sur la droite CD fasse les angles CBA, ABD. Je dis que les angles CBA, ABD sont ou deux droits, ou égaux à deux droits. (Essayez de déplacer A ou B.)",
      "Si l'angle CBA est égal à l'angle ABD, ce sont deux angles droits.",
      "Sinon, menons du point B la droite BE à angles droits avec CD ; les angles CBE, EBD sont alors deux droits.",
      "Puisque l'angle CBE est égal aux deux angles CBA, ABE, ajoutons à chacun l'angle EBD ; donc les angles CBE, EBD sont égaux aux trois angles CBA, ABE, EBD.",
      "De même, puisque l'angle DBA est égal aux deux angles DBE, EBA, ajoutons à chacun l'angle ABC ; donc les angles DBA, ABC sont égaux aux trois angles DBE, EBA, ABC.",
      "Ainsi les angles CBE, EBD et les angles DBA, ABC sont égaux aux trois mêmes angles, donc égaux entre eux. Les angles CBE, EBD sont deux droits ; donc les angles DBA, ABC sont aussi égaux à deux droits."
    ],
    de: [
      "Die auf die Gerade CD gestellte Gerade AB bilde die Winkel CBA, ABD. Behauptung: Die Winkel CBA, ABD sind entweder zwei Rechte oder zusammen zwei Rechten gleich. (Ziehen Sie A oder B.)",
      "Ist der Winkel CBA gleich dem Winkel ABD, so sind es zwei Rechte.",
      "Andernfalls errichte man in B die Gerade BE rechtwinklig zu CD; dann sind die Winkel CBE, EBD zwei Rechte.",
      "Da der Winkel CBE den zwei Winkeln CBA, ABE zusammen gleich ist, füge man beiderseits den Winkel EBD hinzu; dann sind die Winkel CBE, EBD den drei Winkeln CBA, ABE, EBD gleich.",
      "Ebenso ist der Winkel DBA den zwei Winkeln DBE, EBA zusammen gleich; man füge beiderseits den Winkel ABC hinzu; dann sind die Winkel DBA, ABC den drei Winkeln DBE, EBA, ABC gleich.",
      "Die Winkel CBE, EBD und die Winkel DBA, ABC sind also denselben drei Winkeln gleich und damit einander gleich. Die Winkel CBE, EBD sind zwei Rechte; also sind auch die Winkel DBA, ABC zusammen zwei Rechten gleich."
    ],
    ru: [
      "Пусть прямая AB, восставленная на прямой CD, образует углы CBA, ABD. Утверждается, что углы CBA, ABD либо два прямых, либо вместе равны двум прямым. (Попробуйте перетащить A или B.)",
      "Если угол CBA равен углу ABD, то это два прямых угла.",
      "Если нет, проведём из точки B прямую BE под прямыми углами к CD; тогда углы CBE, EBD — два прямых.",
      "Так как угол CBE равен двум углам CBA, ABE, прибавим к каждому угол EBD; значит, углы CBE, EBD равны трём углам CBA, ABE, EBD.",
      "Далее, так как угол DBA равен двум углам DBE, EBA, прибавим к каждому угол ABC; значит, углы DBA, ABC равны трём углам DBE, EBA, ABC.",
      "Итак, углы CBE, EBD и углы DBA, ABC равны одним и тем же трём углам, а значит, и между собой. Углы CBE, EBD — два прямых; значит, и углы DBA, ABC вместе равны двум прямым."
    ],
    ar: [
      "ليقم الخط المستقيم AB على الخط المستقيم CD فيُحدث الزاويتين CBA، ABD. فنقول: إن الزاويتين CBA، ABD إما قائمتان وإما مساويتان لقائمتين. (جرّب سحب A أو B.)",
      "فإن كانت الزاوية CBA مساوية للزاوية ABD فهما قائمتان.",
      "وإن لم تكن، نُخرج من النقطة B الخط BE على زوايا قائمة مع CD؛ فالزاويتان CBE، EBD قائمتان.",
      "ولأن الزاوية CBE مساوية لمجموع الزاويتين CBA، ABE، نزيد على كلٍّ منهما الزاوية EBD؛ فمجموع الزاويتين CBE، EBD مساوٍ لمجموع الزوايا الثلاث CBA، ABE، EBD.",
      "وأيضًا لأن الزاوية DBA مساوية لمجموع الزاويتين DBE، EBA، نزيد على كلٍّ منهما الزاوية ABC؛ فمجموع الزاويتين DBA، ABC مساوٍ لمجموع الزوايا الثلاث DBE، EBA، ABC.",
      "فمجموع الزاويتين CBE، EBD ومجموع الزاويتين DBA، ABC يساويان الزوايا الثلاث نفسها، فهما متساويان. والزاويتان CBE، EBD قائمتان؛ فالزاويتان DBA، ABC مساويتان لقائمتين أيضًا."
    ],
    hi: [
      "मान लीजिए सरल रेखा AB, सरल रेखा CD पर खड़ी होकर कोण CBA, ABD बनाती है। दावा: कोण CBA, ABD या तो दो समकोण हैं या उनका योग दो समकोणों के बराबर है। (A या B को खींचकर देखिए।)",
      "यदि कोण CBA कोण ABD के बराबर है, तो वे दो समकोण हैं।",
      "यदि नहीं, तो बिंदु B से CD पर समकोण बनाती BE खींचिए; तब कोण CBE, EBD दो समकोण हैं।",
      "चूँकि कोण CBE दो कोणों CBA, ABE के योग के बराबर है, दोनों में कोण EBD जोड़िए; तो कोण CBE, EBD का योग तीन कोणों CBA, ABE, EBD के योग के बराबर है।",
      "फिर, चूँकि कोण DBA दो कोणों DBE, EBA के योग के बराबर है, दोनों में कोण ABC जोड़िए; तो कोण DBA, ABC का योग तीन कोणों DBE, EBA, ABC के योग के बराबर है।",
      "अतः कोण CBE, EBD का योग और कोण DBA, ABC का योग, दोनों उन्हीं तीन कोणों के बराबर हैं, इसलिए परस्पर बराबर हैं। कोण CBE, EBD दो समकोण हैं; इसलिए कोण DBA, ABC का योग भी दो समकोणों के बराबर है।"
    ],
    ja: [
      "直線 AB が直線 CD の上に立って角 CBA、ABD をつくるとする。主張：角 CBA、ABD は 2 直角であるか、その和が 2 直角に等しい。（A や B をドラッグしてみてください。）",
      "角 CBA が角 ABD に等しければ、それらは 2 直角である。",
      "等しくなければ、点 B から CD に直角に BE を引く。すると角 CBE、EBD は 2 直角である。",
      "角 CBE は 2 角 CBA、ABE の和に等しいから、それぞれに角 EBD を加えると、角 CBE、EBD の和は 3 角 CBA、ABE、EBD の和に等しい。",
      "また角 DBA は 2 角 DBE、EBA の和に等しいから、それぞれに角 ABC を加えると、角 DBA、ABC の和は 3 角 DBE、EBA、ABC の和に等しい。",
      "よって角 CBE、EBD の和と角 DBA、ABC の和は同じ 3 角の和に等しく、したがって互いに等しい。角 CBE、EBD は 2 直角だから、角 DBA、ABC の和も 2 直角に等しい。"
    ]
  }
});
