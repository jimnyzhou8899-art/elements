// Proposition I.25
PROP(25, {
  vb: [0, 0, 720, 400],
  build(S) {
    S.free("A", 150, 70); S.free("B", 50, 330); S.free("C", 320, 330);
    S.free("D", 500, 70);
    const s = g => { const u = V.sub(g("C"), g("A")), w = V.sub(g("B"), g("A")); return Math.sign(u.x * w.y - u.y * w.x) || 1; };
    const th = g => Math.acos(Math.max(-1, Math.min(1, V.dot(V.unit(V.sub(g("B"), g("A"))), V.unit(V.sub(g("C"), g("A")))))));
    // DE = AB, DF = AC, and the base EF drawn shorter than BC
    S.pt("E", g => V.add(g("D"), V.sub(g("B"), g("A"))), { ld: { x: -0.4, y: 1 } });
    S.pt("F", g => V.add(g("D"), rot(V.sub(g("C"), g("A")), s(g) * 0.45 * th(g))), { ld: { x: 0.4, y: 1 } });
    S.seg("AB", "A", "B", { st: "red" }); S.seg("AC", "A", "C", { st: "blue" }); S.seg("BC", "B", "C", { st: "yel" });
    S.seg("DE", "D", "E", { st: "red" }); S.seg("DF", "D", "F", { st: "blue" }); S.seg("EF", "E", "F", { st: "yel" });
    S.ang("aBAC", "B", "A", "C", { st: "red", r: 40 }); S.ang("aEDF", "E", "D", "F", { st: "red", r: 40 });
  },
  steps: [
    { show: ["A", "B", "C", "D", "E", "F", "AB", "AC", "BC", "DE", "DF", "EF"] },
    { show: ["aBAC", "aEDF"] },
    { hl: ["BC", "EF"], why: ["I.4"] },
    { hl: ["BC", "EF"], why: ["I.24"] },
    { hl: ["AB", "AC", "DE", "DF"] }
  ],
  text: {
    zh: [
      "设 ABC、DEF 是两个三角形，两边 AB、AC 分别等于两边 DE、DF，而底 BC 大于底 EF。断言：∠BAC 也大于 ∠EDF。（可以拖动 A、B、C、D。）",
      "如果不然，∠BAC 或者等于 ∠EDF，或者小于它。",
      "∠BAC 不等于 ∠EDF，否则底 BC 就等于底 EF，而事实并非如此。",
      "∠BAC 也不小于 ∠EDF，否则底 BC 就小于底 EF，而事实并非如此。",
      "所以 ∠BAC 大于 ∠EDF。"
    ],
    en: [
      "Let ABC, DEF be two triangles having the two sides AB, AC equal to the two sides DE, DF respectively, and let the base BC be greater than the base EF. The claim: the angle BAC is also greater than the angle EDF. (A, B, C, D can be dragged.)",
      "For if not, the angle BAC is either equal to the angle EDF or less.",
      "Now the angle BAC is not equal to the angle EDF, for then the base BC would be equal to the base EF; but it is not.",
      "Neither is the angle BAC less than the angle EDF, for then the base BC would be less than the base EF; but it is not.",
      "Therefore the angle BAC is greater than the angle EDF."
    ],
    es: [
      "Sean ABC, DEF dos triángulos que tienen los dos lados AB, AC iguales respectivamente a los dos lados DE, DF, y sea la base BC mayor que la base EF. Se afirma que el ángulo BAC es también mayor que el ángulo EDF. (Se pueden arrastrar A, B, C, D.)",
      "Si no, el ángulo BAC es o igual al ángulo EDF o menor.",
      "Ahora bien, el ángulo BAC no es igual al ángulo EDF, pues entonces la base BC sería igual a la base EF; pero no lo es.",
      "Tampoco es el ángulo BAC menor que el ángulo EDF, pues entonces la base BC sería menor que la base EF; pero no lo es.",
      "Por tanto el ángulo BAC es mayor que el ángulo EDF."
    ],
    fr: [
      "Soient ABC, DEF deux triangles ayant les deux côtés AB, AC égaux respectivement aux deux côtés DE, DF, et que la base BC soit plus grande que la base EF. Je dis que l'angle BAC est aussi plus grand que l'angle EDF. (On peut déplacer A, B, C, D.)",
      "Sinon, l'angle BAC est ou égal à l'angle EDF, ou plus petit.",
      "Or l'angle BAC n'est pas égal à l'angle EDF, car alors la base BC serait égale à la base EF ; ce qui n'est pas.",
      "L'angle BAC n'est pas non plus plus petit que l'angle EDF, car alors la base BC serait plus petite que la base EF ; ce qui n'est pas.",
      "Donc l'angle BAC est plus grand que l'angle EDF."
    ],
    de: [
      "In den zwei Dreiecken ABC, DEF seien die zwei Seiten AB, AC den zwei Seiten DE, DF gleich, und die Grundlinie BC sei größer als die Grundlinie EF. Behauptung: Auch der Winkel BAC ist größer als der Winkel EDF. (A, B, C, D lassen sich ziehen.)",
      "Wäre es nicht so, so wäre der Winkel BAC entweder gleich dem Winkel EDF oder kleiner.",
      "Gleich dem Winkel EDF ist der Winkel BAC nicht, denn sonst wäre die Grundlinie BC gleich der Grundlinie EF; das ist sie aber nicht.",
      "Kleiner als der Winkel EDF ist der Winkel BAC auch nicht, denn sonst wäre die Grundlinie BC kleiner als die Grundlinie EF; das ist sie aber nicht.",
      "Also ist der Winkel BAC größer als der Winkel EDF."
    ],
    ru: [
      "Пусть ABC, DEF — два треугольника, у которых две стороны AB, AC соответственно равны двум сторонам DE, DF, а основание BC больше основания EF. Утверждается, что и угол BAC больше угла EDF. (Можно перетаскивать A, B, C, D.)",
      "Если нет, то угол BAC либо равен углу EDF, либо меньше.",
      "Но угол BAC не равен углу EDF, ибо тогда основание BC было бы равно основанию EF; а оно не равно.",
      "И угол BAC не меньше угла EDF, ибо тогда основание BC было бы меньше основания EF; а оно не меньше.",
      "Значит, угол BAC больше угла EDF."
    ],
    ar: [
      "ليكن ABC، DEF مثلثين، الضلعان AB، AC منهما مساويان للضلعين DE، DF كلٌّ لنظيره، والقاعدة BC أعظم من القاعدة EF. فنقول: إن الزاوية BAC أيضًا أعظم من الزاوية EDF. (يمكن سحب A، B، C، D.)",
      "وإلا فإن الزاوية BAC إما مساوية للزاوية EDF وإما أصغر منها.",
      "وليست الزاوية BAC مساوية للزاوية EDF، وإلا لكانت القاعدة BC مساوية للقاعدة EF، وليست كذلك.",
      "ولا الزاوية BAC أصغر من الزاوية EDF، وإلا لكانت القاعدة BC أصغر من القاعدة EF، وليست كذلك.",
      "فالزاوية BAC أعظم من الزاوية EDF."
    ],
    hi: [
      "मान लीजिए ABC, DEF दो त्रिभुज हैं जिनकी दो भुजाएँ AB, AC क्रमशः दो भुजाओं DE, DF के बराबर हैं, और आधार BC आधार EF से बड़ा है। दावा: कोण BAC भी कोण EDF से बड़ा है। (A, B, C, D को खींचा जा सकता है।)",
      "यदि नहीं, तो कोण BAC या तो कोण EDF के बराबर है या उससे छोटा।",
      "कोण BAC कोण EDF के बराबर नहीं है, नहीं तो आधार BC आधार EF के बराबर होता; पर ऐसा नहीं है।",
      "कोण BAC कोण EDF से छोटा भी नहीं है, नहीं तो आधार BC आधार EF से छोटा होता; पर ऐसा नहीं है।",
      "अतः कोण BAC कोण EDF से बड़ा है।"
    ],
    ja: [
      "ABC、DEF を 2 つの三角形とし、2 辺 AB、AC がそれぞれ 2 辺 DE、DF に等しく、底辺 BC が底辺 EF より大きいとする。主張：角 BAC も角 EDF より大きい。（A、B、C、D をドラッグできます。）",
      "そうでなければ、角 BAC は角 EDF に等しいか、より小さい。",
      "角 BAC は角 EDF に等しくない。もしそうなら底辺 BC は底辺 EF に等しいはずだが、そうではない。",
      "角 BAC は角 EDF より小さくもない。もしそうなら底辺 BC は底辺 EF より小さいはずだが、そうではない。",
      "よって角 BAC は角 EDF より大きい。"
    ]
  }
});
