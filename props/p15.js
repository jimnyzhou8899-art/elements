// Proposition I.15
PROP(15, {
  vb: [0, 0, 720, 460],
  build(S) {
    S.free("A", 110, 120); S.free("B", 610, 360); S.free("C", 140, 370); S.free("D", 590, 90);
    S.pt("E", g => {
      const a = g("A"), b = g("B"), c = g("C"), d = g("D");
      const r = intersect({ k: "L", a, b, seg: false }, { k: "L", a: c, b: d, seg: false })[0];
      return r;
    }, { ld: { x: 0, y: 1 } });
    S.seg("AB", "A", "B"); S.seg("CD", "C", "D");
    S.ang("aAEC", "A", "E", "C", { st: "red", r: 34 }); S.ang("aDEB", "D", "E", "B", { st: "red", r: 34 });
    S.ang("aAED", "A", "E", "D", { st: "yel", r: 26 });
    S.ang("aCEB", "C", "E", "B", { st: "blue", r: 26 });
    S.ang("aDEA", "D", "E", "A", { st: "blue", r: 26 });
  },
  steps: [
    { show: ["A", "B", "C", "D", "E", "AB", "CD"] },
    { show: ["aAEC", "aAED"], why: ["I.13"] },
    { show: ["aDEB"], why: ["I.13"] },
    { hl: ["AB", "CD"], why: ["P4", "A1", "A3"] },
    { show: ["aCEB", "aDEA"], hide: ["aAED"] }
  ],
  text: {
    zh: [
      "设直线 AB、CD 相交于点 E。断言：∠AEC 等于 ∠DEB，∠CEB 等于 ∠AED。（四个端点都可以拖动。）",
      "因为直线 AE 立在直线 CD 上，所成的 ∠CEA、∠AED 之和等于两个直角。",
      "又因为直线 DE 立在直线 AB 上，所成的 ∠AED、∠DEB 之和也等于两个直角。",
      "所以 ∠CEA、∠AED 之和等于 ∠AED、∠DEB 之和。两边各减去 ∠AED，余下的 ∠CEA 等于余下的 ∠BED。",
      "同理可证 ∠CEB 等于 ∠DEA。"
    ],
    en: [
      "Let the straight lines AB, CD cut one another at the point E. The claim: the angle AEC is equal to the angle DEB, and the angle CEB to the angle AED. (All four ends can be dragged.)",
      "Since the straight line AE stands on the straight line CD, making the angles CEA, AED, these angles are equal to two right angles.",
      "Again, since the straight line DE stands on the straight line AB, making the angles AED, DEB, these angles are also equal to two right angles.",
      "Therefore the angles CEA, AED are equal to the angles AED, DEB. Let the angle AED be subtracted from each; then the remaining angle CEA is equal to the remaining angle BED.",
      "Similarly it can be proved that the angle CEB is equal to the angle DEA."
    ],
    es: [
      "Córtense las rectas AB, CD en el punto E. Se afirma que el ángulo AEC es igual al ángulo DEB, y el ángulo CEB al ángulo AED. (Los cuatro extremos se pueden arrastrar.)",
      "Como la recta AE está levantada sobre la recta CD formando los ángulos CEA, AED, estos ángulos son iguales a dos rectos.",
      "De nuevo, como la recta DE está levantada sobre la recta AB formando los ángulos AED, DEB, estos ángulos también son iguales a dos rectos.",
      "Por tanto los ángulos CEA, AED son iguales a los ángulos AED, DEB. Quítese de cada uno el ángulo AED; el ángulo restante CEA es igual al ángulo restante BED.",
      "Del mismo modo se demuestra que el ángulo CEB es igual al ángulo DEA."
    ],
    fr: [
      "Que les droites AB, CD se coupent au point E. Je dis que l'angle AEC est égal à l'angle DEB, et l'angle CEB à l'angle AED. (Les quatre extrémités peuvent être déplacées.)",
      "Puisque la droite AE est élevée sur la droite CD en faisant les angles CEA, AED, ces angles sont égaux à deux droits.",
      "De même, puisque la droite DE est élevée sur la droite AB en faisant les angles AED, DEB, ces angles sont aussi égaux à deux droits.",
      "Donc les angles CEA, AED sont égaux aux angles AED, DEB. Retranchons de part et d'autre l'angle AED ; l'angle restant CEA est égal à l'angle restant BED.",
      "On démontrerait de même que l'angle CEB est égal à l'angle DEA."
    ],
    de: [
      "Die Geraden AB, CD mögen einander im Punkt E schneiden. Behauptung: Der Winkel AEC ist gleich dem Winkel DEB und der Winkel CEB gleich dem Winkel AED. (Alle vier Endpunkte lassen sich ziehen.)",
      "Da die Gerade AE auf der Geraden CD steht und die Winkel CEA, AED bildet, sind diese zusammen zwei Rechten gleich.",
      "Ebenso steht die Gerade DE auf der Geraden AB und bildet die Winkel AED, DEB; auch diese sind zusammen zwei Rechten gleich.",
      "Also sind die Winkel CEA, AED den Winkeln AED, DEB gleich. Man nehme beiderseits den Winkel AED weg; dann ist der übrige Winkel CEA gleich dem übrigen Winkel BED.",
      "Ebenso lässt sich zeigen, dass der Winkel CEB gleich dem Winkel DEA ist."
    ],
    ru: [
      "Пусть прямые AB, CD пересекаются в точке E. Утверждается, что угол AEC равен углу DEB, а угол CEB равен углу AED. (Все четыре конца можно перетаскивать.)",
      "Так как прямая AE восставлена на прямой CD и образует углы CEA, AED, эти углы вместе равны двум прямым.",
      "Далее, так как прямая DE восставлена на прямой AB и образует углы AED, DEB, эти углы также вместе равны двум прямым.",
      "Значит, углы CEA, AED равны углам AED, DEB. Отнимем от каждых угол AED; тогда остающийся угол CEA равен остающемуся углу BED.",
      "Подобным же образом доказывается, что угол CEB равен углу DEA."
    ],
    ar: [
      "ليتقاطع الخطان المستقيمان AB، CD عند النقطة E. فنقول: إن الزاوية AEC مساوية للزاوية DEB، والزاوية CEB مساوية للزاوية AED. (يمكن سحب الأطراف الأربعة.)",
      "لأن الخط AE قائم على الخط CD ويُحدث الزاويتين CEA، AED، فهاتان الزاويتان مساويتان لقائمتين.",
      "وأيضًا لأن الخط DE قائم على الخط AB ويُحدث الزاويتين AED، DEB، فهاتان الزاويتان مساويتان لقائمتين أيضًا.",
      "فمجموع الزاويتين CEA، AED مساوٍ لمجموع الزاويتين AED، DEB. ننقص من كلٍّ منهما الزاوية AED، فتبقى الزاوية CEA مساوية للزاوية الباقية BED.",
      "وبمثل ذلك يتبيّن أن الزاوية CEB مساوية للزاوية DEA."
    ],
    hi: [
      "मान लीजिए सरल रेखाएँ AB, CD एक-दूसरे को बिंदु E पर काटती हैं। दावा: कोण AEC कोण DEB के बराबर है, और कोण CEB कोण AED के बराबर है। (चारों सिरों को खींचा जा सकता है।)",
      "चूँकि सरल रेखा AE सरल रेखा CD पर खड़ी होकर कोण CEA, AED बनाती है, इसलिए इनका योग दो समकोणों के बराबर है।",
      "फिर, चूँकि सरल रेखा DE सरल रेखा AB पर खड़ी होकर कोण AED, DEB बनाती है, इसलिए इनका योग भी दो समकोणों के बराबर है।",
      "अतः कोण CEA, AED का योग कोण AED, DEB के योग के बराबर है। दोनों में से कोण AED घटाइए; तो शेष कोण CEA शेष कोण BED के बराबर है।",
      "इसी प्रकार सिद्ध किया जा सकता है कि कोण CEB कोण DEA के बराबर है।"
    ],
    ja: [
      "直線 AB、CD が点 E で交わるとする。主張：角 AEC は角 DEB に、角 CEB は角 AED に等しい。（4 つの端点はすべてドラッグできます。）",
      "直線 AE は直線 CD の上に立って角 CEA、AED をつくるから、その和は 2 直角に等しい。",
      "また直線 DE は直線 AB の上に立って角 AED、DEB をつくるから、その和も 2 直角に等しい。",
      "よって角 CEA、AED の和は角 AED、DEB の和に等しい。それぞれから角 AED を引くと、残りの角 CEA は残りの角 BED に等しい。",
      "同様にして、角 CEB は角 DEA に等しいことが示される。"
    ]
  }
});
