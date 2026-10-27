// Proposition I.43
PROP(43, {
  vb: [0, 0, 720, 420],
  build(S) {
    S.free("A", 150, 60, { ld: { x: -0.6, y: -1 } }); S.free("D", 620, 60, { ld: { x: 0.6, y: -1 } });
    S.free("B", 80, 360, { ld: { x: -0.6, y: 1 } });
    S.pt("C", g => V.add(g("B"), V.sub(g("D"), g("A"))), { ld: { x: 0.6, y: 1 } });
    S.glide("K", 0.42, (g, t) => V.lerp(g("A"), g("C"), t),
      (g, m) => { const d = V.sub(g("C"), g("A")); return Math.min(0.85, Math.max(0.15, V.dot(V.sub(m, g("A")), d) / V.dot(d, d))); }, { ld: { x: 0.8, y: -0.6 } });
    const t = g => g("K") && V.dist(g("A"), g("K")) / V.dist(g("A"), g("C"));
    S.pt("E", g => V.lerp(g("A"), g("B"), t(g)), { ld: { x: -1, y: 0 } });
    S.pt("H", g => V.lerp(g("A"), g("D"), t(g)), { ld: { x: 0, y: -1 } });
    S.pt("G", g => V.lerp(g("B"), g("C"), t(g)), { ld: { x: 0, y: 1 } });
    S.pt("F", g => V.lerp(g("D"), g("C"), t(g)), { ld: { x: 1, y: 0 } });
    S.poly("tABC", ["A", "B", "C"], { st: "red" }); S.poly("tACD", ["A", "C", "D"], { st: "blue" });
    S.poly("tAEK", ["A", "E", "K"], { st: "yel" }); S.poly("tAHK", ["A", "H", "K"], { st: "yel" });
    S.poly("tKGC", ["K", "G", "C"], { st: "yel" }); S.poly("tKFC", ["K", "F", "C"], { st: "yel" });
    S.poly("qEBGK", ["E", "B", "G", "K"], { st: "red" }); S.poly("qHKFD", ["H", "K", "F", "D"], { st: "blue" });
    S.seg("AB", "A", "B"); S.seg("BC", "B", "C"); S.seg("CD", "C", "D"); S.seg("DA", "D", "A");
    S.seg("AC", "A", "C", { st: "aux" }); S.seg("EF", "E", "F"); S.seg("HG", "H", "G");
  },
  steps: [
    { show: ["A", "B", "C", "D", "K", "E", "F", "G", "H", "AB", "BC", "CD", "DA", "AC", "EF", "HG"] },
    { show: ["tABC", "tACD"], why: ["I.34"] },
    { show: ["tAEK", "tAHK"], hide: ["tABC", "tACD"], why: ["I.34"] },
    { show: ["tKGC", "tKFC"], why: ["I.34"] },
    { show: ["qEBGK", "qHKFD"], hide: ["tAEK", "tAHK", "tKGC", "tKFC"], why: ["A3"] }
  ],
  text: {
    zh: [
      "设 ABCD 是平行四边形，AC 是它的对角线，EH、FG 是围绕 AC 的平行四边形，BK、KD 是所谓的补形。断言：补形 BK 等于补形 KD。（拖动 A、B、D 或 K 试试。）",
      "因为 ABCD 是平行四边形，AC 是它的对角线，所以三角形 ABC 等于三角形 ACD。",
      "同理，因为 EH 是平行四边形，AK 是它的对角线，所以三角形 AEK 等于三角形 AHK。",
      "同理，三角形 KFC 等于三角形 KGC。",
      "从相等的 ABC、ACD 中分别减去相等的 AEK、KGC 与 AHK、KFC，余下的补形 BK 等于余下的补形 KD。"
    ],
    en: [
      "Let ABCD be a parallelogram, and AC its diameter; about AC let EH, FG be parallelograms, and BK, KD the so-called complements. The claim: the complement BK is equal to the complement KD. (Try dragging A, B, D or K.)",
      "Since ABCD is a parallelogram, and AC its diameter, the triangle ABC is equal to the triangle ACD.",
      "Again, since EH is a parallelogram, and AK is its diameter, the triangle AEK is equal to the triangle AHK.",
      "For the same reason the triangle KFC is also equal to the triangle KGC.",
      "From the equal triangles ABC, ACD let the equal parts AEK, KGC and AHK, KFC be subtracted; then the complement BK which remains is equal to the complement KD which remains."
    ],
    es: [
      "Sea ABCD un paralelogramo y AC su diagonal; alrededor de AC sean EH, FG paralelogramos, y BK, KD los llamados complementos. Se afirma que el complemento BK es igual al complemento KD. (Prueba a arrastrar A, B, D o K.)",
      "Como ABCD es un paralelogramo y AC su diagonal, el triángulo ABC es igual al triángulo ACD.",
      "De nuevo, como EH es un paralelogramo y AK su diagonal, el triángulo AEK es igual al triángulo AHK.",
      "Por la misma razón el triángulo KFC es también igual al triángulo KGC.",
      "De los triángulos iguales ABC, ACD quítense las partes iguales AEK, KGC y AHK, KFC; el complemento restante BK es igual al complemento restante KD."
    ],
    fr: [
      "Soit ABCD un parallélogramme et AC sa diagonale ; autour de AC soient EH, FG des parallélogrammes, et BK, KD ce qu'on appelle les compléments. Je dis que le complément BK est égal au complément KD. (Essayez de déplacer A, B, D ou K.)",
      "Puisque ABCD est un parallélogramme et AC sa diagonale, le triangle ABC est égal au triangle ACD.",
      "De même, puisque EH est un parallélogramme et AK sa diagonale, le triangle AEK est égal au triangle AHK.",
      "Pour la même raison le triangle KFC est aussi égal au triangle KGC.",
      "Des triangles égaux ABC, ACD retranchons les parties égales AEK, KGC et AHK, KFC ; le complément restant BK est égal au complément restant KD."
    ],
    de: [
      "Es sei ABCD ein Parallelogramm und AC seine Diagonale; um AC seien EH, FG Parallelogramme und BK, KD die sogenannten Ergänzungen. Behauptung: Die Ergänzung BK ist der Ergänzung KD gleich. (Ziehen Sie A, B, D oder K.)",
      "Da ABCD ein Parallelogramm und AC seine Diagonale ist, ist das Dreieck ABC dem Dreieck ACD gleich.",
      "Ebenso ist, da EH ein Parallelogramm und AK seine Diagonale ist, das Dreieck AEK dem Dreieck AHK gleich.",
      "Aus demselben Grund ist auch das Dreieck KFC dem Dreieck KGC gleich.",
      "Man nehme von den gleichen Dreiecken ABC, ACD die gleichen Teile AEK, KGC und AHK, KFC weg; dann ist die übrige Ergänzung BK der übrigen Ergänzung KD gleich."
    ],
    ru: [
      "Пусть ABCD — параллелограмм, AC — его диаметр; около AC пусть будут параллелограммы EH, FG, а BK, KD — так называемые дополнения. Утверждается, что дополнение BK равно дополнению KD. (Попробуйте перетащить A, B, D или K.)",
      "Так как ABCD — параллелограмм, а AC — его диаметр, треугольник ABC равен треугольнику ACD.",
      "Далее, так как EH — параллелограмм, а AK — его диаметр, треугольник AEK равен треугольнику AHK.",
      "По той же причине и треугольник KFC равен треугольнику KGC.",
      "Отнимем от равных треугольников ABC, ACD равные части AEK, KGC и AHK, KFC; тогда остающееся дополнение BK равно остающемуся дополнению KD."
    ],
    ar: [
      "ليكن ABCD متوازي أضلاع، وAC قطره، وحول AC متوازيا الأضلاع EH، FG، وBK، KD ما يسمّى المتمّمين. فنقول: إن المتمّم BK مساوٍ للمتمّم KD. (جرّب سحب A أو B أو D أو K.)",
      "لأن ABCD متوازي أضلاع وAC قطره، فالمثلث ABC مساوٍ للمثلث ACD.",
      "وأيضًا لأن EH متوازي أضلاع وAK قطره، فالمثلث AEK مساوٍ للمثلث AHK.",
      "ولمثل ذلك المثلث KFC أيضًا مساوٍ للمثلث KGC.",
      "ننقص من المثلثين المتساويين ABC، ACD الأجزاء المتساوية AEK، KGC وAHK، KFC، فيبقى المتمّم BK مساويًا للمتمّم الباقي KD."
    ],
    hi: [
      "मान लीजिए ABCD एक समांतर चतुर्भुज है, AC उसका विकर्ण है; AC के इर्द-गिर्द EH, FG समांतर चतुर्भुज हैं, और BK, KD तथाकथित पूरक हैं। दावा: पूरक BK पूरक KD के बराबर है। (A, B, D या K को खींचकर देखिए।)",
      "चूँकि ABCD समांतर चतुर्भुज है और AC उसका विकर्ण है, इसलिए त्रिभुज ABC त्रिभुज ACD के बराबर है।",
      "फिर, चूँकि EH समांतर चतुर्भुज है और AK उसका विकर्ण है, इसलिए त्रिभुज AEK त्रिभुज AHK के बराबर है।",
      "इसी कारण त्रिभुज KFC भी त्रिभुज KGC के बराबर है।",
      "बराबर त्रिभुजों ABC, ACD में से बराबर भाग AEK, KGC और AHK, KFC घटाइए; तो शेष पूरक BK शेष पूरक KD के बराबर है।"
    ],
    ja: [
      "ABCD を平行四辺形、AC をその対角線とし、AC のまわりの平行四辺形を EH、FG、いわゆる補形を BK、KD とする。主張：補形 BK は補形 KD に等しい。（A、B、D、K をドラッグしてみてください。）",
      "ABCD は平行四辺形で AC はその対角線だから、三角形 ABC は三角形 ACD に等しい。",
      "また EH は平行四辺形で AK はその対角線だから、三角形 AEK は三角形 AHK に等しい。",
      "同じ理由で、三角形 KFC も三角形 KGC に等しい。",
      "等しい三角形 ABC、ACD から、等しい部分 AEK、KGC と AHK、KFC をそれぞれ引くと、残りの補形 BK は残りの補形 KD に等しい。"
    ]
  }
});
