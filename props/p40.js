// Proposition I.40
PROP(40, {
  vb: [0, 0, 720, 400],
  build(S) {
    S.free("B", 90, 330, { ld: { x: 0, y: 1 } }); S.free("C", 330, 330, { ld: { x: 0, y: 1 } });
    S.pt("E", g => V.add(g("C"), V.sub(g("C"), g("B"))), { ld: { x: 0, y: 1 } });
    S.free("A", 180, 90, { ld: { x: 0, y: -1 } });
    const w = g => V.sub(g("C"), g("B"));
    // D on the parallel through A, so that DCE equals ABC
    S.glide("D", 1.4, (g, t) => V.add(g("A"), V.mul(w(g), t)),
      (g, m) => Math.min(2.3, Math.max(0.6, V.dot(V.sub(m, g("A")), w(g)) / V.dot(w(g), w(g)))), { ld: { x: 0, y: -1 } });
    // F: where AF would meet CD if AF (not AD) were the parallel (contrary to the claim)
    S.pt("F", g => V.lerp(g("C"), g("D"), 0.74), { ld: { x: 1, y: -0.2 } });
    S.poly("tABC", ["A", "B", "C"], { st: "red" }); S.poly("tDCE", ["D", "C", "E"], { st: "red" });
    S.poly("tFCE", ["F", "C", "E"], { st: "blue" });
    S.seg("BC", "B", "C"); S.seg("CE", "C", "E"); S.seg("AB", "A", "B"); S.seg("AC", "A", "C");
    S.seg("DC", "D", "C"); S.seg("DE", "D", "E"); S.seg("AD", "A", "D", { st: "yel" });
    S.seg("AF", "A", "F", { st: "aux" }); S.seg("FE", "F", "E", { st: "aux" });
  },
  steps: [
    { show: ["A", "B", "C", "D", "E", "BC", "CE", "AB", "AC", "DC", "DE", "AD"] },
    { show: ["F", "AF", "FE"], why: ["I.31", "P1"] },
    { show: ["tABC", "tFCE"], why: ["I.38"] },
    { show: ["tDCE"], hide: ["tABC"], why: ["A1", "A5"] },
    { hide: ["F", "AF", "FE", "tDCE", "tFCE"], hl: ["AD", "BC", "CE"] }
  ],
  text: {
    zh: [
      "设 ABC、CDE 是在相等的底 BC、CE 上、在同一侧的相等三角形。断言：它们在同一对平行线之间，即 AD 平行于 BE。（拖动 A、B、C 或 D 试试。）",
      "如果不然，过 A 作 AF 平行于 BE，连接 FE。（图中的 F 是按这个假设画的。）",
      "那么三角形 ABC 等于三角形 FCE，因为它们在相等的底 BC、CE 上、在同一对平行线 BE、AF 之间。",
      "但 ABC 等于 DCE，所以 DCE 也等于 FCE，较大的等于较小的，这是不可能的。",
      "所以 AF 不平行于 BE；同理，除 AD 以外的任何直线都不平行于 BE。所以 AD 平行于 BE。"
    ],
    en: [
      "Let ABC, CDE be equal triangles on the equal bases BC, CE and on the same side. The claim: they are also in the same parallels, that is, AD is parallel to BE. (Try dragging A, B, C or D.)",
      "If not, through A let AF be drawn parallel to BE, and let FE be joined. (F is drawn as this assumption would place it.)",
      "Then the triangle ABC is equal to the triangle FCE, for they are on the equal bases BC, CE and in the same parallels BE, AF.",
      "But ABC is equal to DCE; therefore DCE is also equal to FCE, the greater to the less, which is impossible.",
      "Therefore AF is not parallel to BE; and similarly no other straight line except AD is. Therefore AD is parallel to BE."
    ],
    es: [
      "Sean ABC, CDE triángulos iguales sobre las bases iguales BC, CE y del mismo lado. Se afirma que están también entre las mismas paralelas, es decir, AD es paralela a BE. (Prueba a arrastrar A, B, C o D.)",
      "Si no, trácese por A la recta AF paralela a BE, y trácese FE. (F está dibujado donde lo situaría esta suposición.)",
      "Entonces el triángulo ABC es igual al triángulo FCE, pues están sobre las bases iguales BC, CE y entre las mismas paralelas BE, AF.",
      "Pero ABC es igual a DCE; por tanto DCE es también igual a FCE, el mayor al menor, lo cual es imposible.",
      "Por tanto AF no es paralela a BE; y del mismo modo ninguna otra recta salvo AD. Por tanto AD es paralela a BE."
    ],
    fr: [
      "Soient ABC, CDE des triangles égaux sur les bases égales BC, CE et du même côté. Je dis qu'ils sont aussi entre les mêmes parallèles, c'est-à-dire que AD est parallèle à BE. (Essayez de déplacer A, B, C ou D.)",
      "Sinon, menons par A la droite AF parallèle à BE, et menons FE. (F est placé comme le voudrait cette supposition.)",
      "Alors le triangle ABC est égal au triangle FCE, car ils sont sur les bases égales BC, CE et entre les mêmes parallèles BE, AF.",
      "Mais ABC est égal à DCE ; donc DCE est aussi égal à FCE, le plus grand au plus petit, ce qui est impossible.",
      "Donc AF n'est pas parallèle à BE ; et de même aucune autre droite que AD. Donc AD est parallèle à BE."
    ],
    de: [
      "ABC, CDE seien gleiche Dreiecke auf den gleichen Grundlinien BC, CE und auf derselben Seite. Behauptung: Sie liegen auch zwischen denselben Parallelen, das heißt, AD ist parallel zu BE. (Ziehen Sie A, B, C oder D.)",
      "Andernfalls ziehe man durch A die Gerade AF parallel zu BE und ziehe FE. (F ist so gezeichnet, wie diese Annahme es verlangen würde.)",
      "Dann ist das Dreieck ABC dem Dreieck FCE gleich, denn sie stehen auf den gleichen Grundlinien BC, CE und zwischen denselben Parallelen BE, AF.",
      "Aber ABC ist gleich DCE; also wäre auch DCE gleich FCE, das größere dem kleineren, was unmöglich ist.",
      "Also ist AF nicht parallel zu BE, und ebenso keine andere Gerade außer AD. Also ist AD parallel zu BE."
    ],
    ru: [
      "Пусть ABC, CDE — равные треугольники на равных основаниях BC, CE и по одну сторону. Утверждается, что они находятся и между одними параллельными, то есть AD параллельна BE. (Попробуйте перетащить A, B, C или D.)",
      "Если нет, проведём через A прямую AF, параллельную BE, и проведём FE. (Точка F нарисована там, где её поместило бы это допущение.)",
      "Тогда треугольник ABC равен треугольнику FCE, ибо они стоят на равных основаниях BC, CE и между одними параллельными BE, AF.",
      "Но ABC равен DCE; значит, и DCE равен FCE, больший меньшему, что невозможно.",
      "Значит, AF не параллельна BE; и так же никакая другая прямая, кроме AD. Итак, AD параллельна BE."
    ],
    ar: [
      "ليكن ABC، CDE مثلثين متساويين على قاعدتين متساويتين BC، CE وفي جهة واحدة. فنقول: إنهما بين خطين متوازيين بعينهما، أي إن AD موازٍ لـ BE. (جرّب سحب A أو B أو C أو D.)",
      "وإلا فلنُخرج من A الخط AF موازيًا لـ BE، ونصل FE. (رُسمت F حيث يضعها هذا الفرض.)",
      "فيكون المثلث ABC مساويًا للمثلث FCE، لأنهما على قاعدتين متساويتين BC، CE وبين المتوازيين نفسيهما BE، AF.",
      "لكن ABC مساوٍ لـ DCE؛ فـ DCE أيضًا مساوٍ لـ FCE، الأعظم للأصغر، وهذا محال.",
      "فليس AF موازيًا لـ BE، ولا أي خط آخر غير AD. فـ AD موازٍ لـ BE."
    ],
    hi: [
      "मान लीजिए ABC, CDE बराबर आधारों BC, CE पर और एक ही ओर स्थित बराबर त्रिभुज हैं। दावा: वे एक ही समांतर रेखाओं के बीच भी हैं, अर्थात AD, BE के समांतर है। (A, B, C या D को खींचकर देखिए।)",
      "यदि नहीं, तो A से होकर BE के समांतर AF खींचिए, और FE मिलाइए। (F को इसी मान्यता के अनुसार दिखाया गया है।)",
      "तब त्रिभुज ABC त्रिभुज FCE के बराबर है, क्योंकि वे बराबर आधारों BC, CE पर और एक ही समांतर रेखाओं BE, AF के बीच हैं।",
      "पर ABC, DCE के बराबर है; अतः DCE भी FCE के बराबर होगा, बड़ा छोटे के बराबर, जो असंभव है।",
      "अतः AF, BE के समांतर नहीं है; और इसी प्रकार AD के सिवा कोई अन्य रेखा भी नहीं। इसलिए AD, BE के समांतर है।"
    ],
    ja: [
      "ABC、CDE を等しい底辺 BC、CE の上、同じ側にある等しい三角形とする。主張：これらは同じ平行線の間にある。すなわち AD は BE に平行である。（A、B、C、D をドラッグしてみてください。）",
      "そうでなければ、A を通って BE に平行に AF を引き、FE を結ぶ。（F はこの仮定のもとでの位置に描いてあります。）",
      "すると三角形 ABC は三角形 FCE に等しい。等しい底辺 BC、CE の上、同じ平行線 BE、AF の間にあるからである。",
      "しかし ABC は DCE に等しい。よって DCE も FCE に等しくなり、大きいものが小さいものに等しいことになって不可能である。",
      "よって AF は BE に平行でなく、同様に AD 以外のどの直線も平行でない。ゆえに AD は BE に平行である。"
    ]
  }
});
