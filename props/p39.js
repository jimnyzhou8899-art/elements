// Proposition I.39
PROP(39, {
  vb: [0, 0, 720, 400],
  build(S) {
    S.free("B", 200, 330, { ld: { x: 0, y: 1 } }); S.free("C", 440, 330, { ld: { x: 0, y: 1 } });
    S.free("A", 260, 90, { ld: { x: 0, y: -1 } });
    const w = g => V.sub(g("C"), g("B"));
    // D on the parallel through A, so that DBC equals ABC
    S.glide("D", 0.9, (g, t) => V.add(g("A"), V.mul(w(g), t)),
      (g, m) => Math.min(1.8, Math.max(0.3, V.dot(V.sub(m, g("A")), w(g)) / V.dot(w(g), w(g)))), { ld: { x: 0, y: -1 } });
    // E: where AE would meet BD if AE (not AD) were the parallel (contrary to the claim)
    S.pt("E", g => V.lerp(g("B"), g("D"), 0.74), { ld: { x: 1, y: -0.2 } });
    S.poly("tABC", ["A", "B", "C"], { st: "red" }); S.poly("tDBC", ["D", "B", "C"], { st: "red" });
    S.poly("tEBC", ["E", "B", "C"], { st: "blue" });
    S.seg("BC", "B", "C"); S.seg("AB", "A", "B"); S.seg("AC", "A", "C");
    S.seg("DB", "D", "B"); S.seg("DC", "D", "C"); S.seg("AD", "A", "D", { st: "yel" });
    S.seg("AE", "A", "E", { st: "aux" }); S.seg("EC", "E", "C", { st: "aux" });
  },
  steps: [
    { show: ["A", "B", "C", "D", "BC", "AB", "AC", "DB", "DC", "AD"] },
    { show: ["E", "AE", "EC"], why: ["I.31", "P1"] },
    { show: ["tABC", "tEBC"], why: ["I.37"] },
    { show: ["tDBC"], hide: ["tABC"], why: ["A1", "A5"] },
    { hide: ["E", "AE", "EC", "tDBC", "tEBC"], hl: ["AD", "BC"] }
  ],
  text: {
    zh: [
      "设 ABC、DBC 是在同一底 BC 上、在它同一侧的相等三角形。断言：它们在同一对平行线之间，即 AD 平行于 BC。（拖动 A、B、C 或 D 试试。）",
      "如果不然，过点 A 作 AE 平行于直线 BC，连接 EC。（图中的 E 是按这个假设画的。）",
      "那么三角形 ABC 等于三角形 EBC，因为它们在同一底 BC 上、在同一对平行线之间。",
      "但 ABC 等于 DBC，所以 DBC 也等于 EBC，较大的等于较小的，这是不可能的。",
      "所以 AE 不平行于 BC；同理，除 AD 以外的任何直线都不平行于 BC。所以 AD 平行于 BC。"
    ],
    en: [
      "Let ABC, DBC be equal triangles on the same base BC and on the same side of it. The claim: they are also in the same parallels, that is, AD is parallel to BC. (Try dragging A, B, C or D.)",
      "If not, through the point A let AE be drawn parallel to the straight line BC, and let EC be joined. (E is drawn as this assumption would place it.)",
      "Then the triangle ABC is equal to the triangle EBC, for it is on the same base BC with it and in the same parallels.",
      "But ABC is equal to DBC; therefore DBC is also equal to EBC, the greater to the less, which is impossible.",
      "Therefore AE is not parallel to BC; and similarly no other straight line except AD is. Therefore AD is parallel to BC."
    ],
    es: [
      "Sean ABC, DBC triángulos iguales sobre la misma base BC y del mismo lado de ella. Se afirma que están también entre las mismas paralelas, es decir, AD es paralela a BC. (Prueba a arrastrar A, B, C o D.)",
      "Si no, trácese por el punto A la recta AE paralela a la recta BC, y trácese EC. (E está dibujado donde lo situaría esta suposición.)",
      "Entonces el triángulo ABC es igual al triángulo EBC, pues está sobre la misma base BC y entre las mismas paralelas.",
      "Pero ABC es igual a DBC; por tanto DBC es también igual a EBC, el mayor al menor, lo cual es imposible.",
      "Por tanto AE no es paralela a BC; y del mismo modo ninguna otra recta salvo AD. Por tanto AD es paralela a BC."
    ],
    fr: [
      "Soient ABC, DBC des triangles égaux sur la même base BC et du même côté de celle-ci. Je dis qu'ils sont aussi entre les mêmes parallèles, c'est-à-dire que AD est parallèle à BC. (Essayez de déplacer A, B, C ou D.)",
      "Sinon, menons par le point A la droite AE parallèle à la droite BC, et menons EC. (E est placé comme le voudrait cette supposition.)",
      "Alors le triangle ABC est égal au triangle EBC, car il est sur la même base BC et entre les mêmes parallèles.",
      "Mais ABC est égal à DBC ; donc DBC est aussi égal à EBC, le plus grand au plus petit, ce qui est impossible.",
      "Donc AE n'est pas parallèle à BC ; et de même aucune autre droite que AD. Donc AD est parallèle à BC."
    ],
    de: [
      "ABC, DBC seien gleiche Dreiecke auf derselben Grundlinie BC und auf derselben Seite von ihr. Behauptung: Sie liegen auch zwischen denselben Parallelen, das heißt, AD ist parallel zu BC. (Ziehen Sie A, B, C oder D.)",
      "Andernfalls ziehe man durch den Punkt A die Gerade AE parallel zur Geraden BC und ziehe EC. (E ist so gezeichnet, wie diese Annahme es verlangen würde.)",
      "Dann ist das Dreieck ABC dem Dreieck EBC gleich, denn es steht auf derselben Grundlinie BC und zwischen denselben Parallelen.",
      "Aber ABC ist gleich DBC; also wäre auch DBC gleich EBC, das größere dem kleineren, was unmöglich ist.",
      "Also ist AE nicht parallel zu BC, und ebenso keine andere Gerade außer AD. Also ist AD parallel zu BC."
    ],
    ru: [
      "Пусть ABC, DBC — равные треугольники на одном основании BC и по одну сторону от него. Утверждается, что они находятся и между одними параллельными, то есть AD параллельна BC. (Попробуйте перетащить A, B, C или D.)",
      "Если нет, проведём через точку A прямую AE, параллельную прямой BC, и проведём EC. (Точка E нарисована там, где её поместило бы это допущение.)",
      "Тогда треугольник ABC равен треугольнику EBC, ибо он стоит на том же основании BC и между теми же параллельными.",
      "Но ABC равен DBC; значит, и DBC равен EBC, больший меньшему, что невозможно.",
      "Значит, AE не параллельна BC; и так же никакая другая прямая, кроме AD. Итак, AD параллельна BC."
    ],
    ar: [
      "ليكن ABC، DBC مثلثين متساويين على قاعدة واحدة BC وفي جهة واحدة منها. فنقول: إنهما بين خطين متوازيين بعينهما، أي إن AD موازٍ لـ BC. (جرّب سحب A أو B أو C أو D.)",
      "وإلا فلنُخرج من النقطة A الخط AE موازيًا للخط BC، ونصل EC. (رُسمت E حيث يضعها هذا الفرض.)",
      "فيكون المثلث ABC مساويًا للمثلث EBC، لأنهما على القاعدة نفسها BC وبين المتوازيين نفسيهما.",
      "لكن ABC مساوٍ لـ DBC؛ فـ DBC أيضًا مساوٍ لـ EBC، الأعظم للأصغر، وهذا محال.",
      "فليس AE موازيًا لـ BC، ولا أي خط آخر غير AD. فـ AD موازٍ لـ BC."
    ],
    hi: [
      "मान लीजिए ABC, DBC एक ही आधार BC पर और उसकी एक ही ओर स्थित बराबर त्रिभुज हैं। दावा: वे एक ही समांतर रेखाओं के बीच भी हैं, अर्थात AD, BC के समांतर है। (A, B, C या D को खींचकर देखिए।)",
      "यदि नहीं, तो बिंदु A से होकर सरल रेखा BC के समांतर AE खींचिए, और EC मिलाइए। (E को इसी मान्यता के अनुसार दिखाया गया है।)",
      "तब त्रिभुज ABC त्रिभुज EBC के बराबर है, क्योंकि वे एक ही आधार BC पर और एक ही समांतर रेखाओं के बीच हैं।",
      "पर ABC, DBC के बराबर है; अतः DBC भी EBC के बराबर होगा, बड़ा छोटे के बराबर, जो असंभव है।",
      "अतः AE, BC के समांतर नहीं है; और इसी प्रकार AD के सिवा कोई अन्य रेखा भी नहीं। इसलिए AD, BC के समांतर है।"
    ],
    ja: [
      "ABC、DBC を同じ底辺 BC の上、その同じ側にある等しい三角形とする。主張：これらは同じ平行線の間にある。すなわち AD は BC に平行である。（A、B、C、D をドラッグしてみてください。）",
      "そうでなければ、点 A を通って直線 BC に平行に AE を引き、EC を結ぶ。（E はこの仮定のもとでの位置に描いてあります。）",
      "すると三角形 ABC は三角形 EBC に等しい。同じ底辺 BC の上、同じ平行線の間にあるからである。",
      "しかし ABC は DBC に等しい。よって DBC も EBC に等しくなり、大きいものが小さいものに等しいことになって不可能である。",
      "よって AE は BC に平行でなく、同様に AD 以外のどの直線も平行でない。ゆえに AD は BC に平行である。"
    ]
  }
});
