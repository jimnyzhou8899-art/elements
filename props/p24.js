// Proposition I.24
PROP(24, {
  vb: [0, 0, 720, 440],
  build(S) {
    S.free("A", 150, 70); S.free("B", 50, 330); S.free("C", 320, 330);
    S.free("D", 470, 70);
    const s = g => { const u = V.sub(g("C"), g("A")), w = V.sub(g("B"), g("A")); return Math.sign(u.x * w.y - u.y * w.x) || 1; };
    const th = g => Math.acos(Math.max(-1, Math.min(1, V.dot(V.unit(V.sub(g("B"), g("A"))), V.unit(V.sub(g("C"), g("A")))))));
    // DE = AB and DF = AC; the angle EDF is drawn smaller than BAC
    S.pt("E", g => V.add(g("D"), V.sub(g("B"), g("A"))), { ld: { x: -0.4, y: 1 } });
    S.pt("F", g => V.add(g("D"), rot(V.sub(g("C"), g("A")), s(g) * 0.45 * th(g))), { ld: { x: 0, y: 1 } });
    // G: the angle EDG made equal to BAC, and DG equal to AC
    S.pt("G", g => V.add(g("D"), V.sub(g("C"), g("A"))), { ld: { x: 0.4, y: 1 } });
    S.seg("AB", "A", "B", { st: "red" }); S.seg("AC", "A", "C", { st: "blue" }); S.seg("BC", "B", "C", { st: "yel" });
    S.seg("DE", "D", "E", { st: "red" }); S.seg("DF", "D", "F", { st: "blue" }); S.seg("EF", "E", "F");
    S.seg("DG", "D", "G", { st: "blue" }); S.seg("EG", "E", "G", { st: "yel" }); S.seg("FG", "F", "G", { st: "aux" });
    S.ang("aBAC", "B", "A", "C", { st: "red", r: 40 }); S.ang("aEDF", "E", "D", "F", { st: "red", r: 30 });
    S.ang("aEDG", "E", "D", "G", { st: "red", r: 40 });
    S.ang("aDGF", "D", "G", "F", { st: "blue", r: 36 }); S.ang("aDFG", "D", "F", "G", { st: "blue", r: 26 });
    S.ang("aEFG", "E", "F", "G", { st: "yel", r: 20 }); S.ang("aEGF", "E", "G", "F", { st: "yel", r: 52 });
  },
  steps: [
    { show: ["A", "B", "C", "D", "E", "F", "AB", "AC", "BC", "DE", "DF", "EF", "aBAC", "aEDF"] },
    { show: ["G", "DG", "aEDG"], hide: ["aEDF"], why: ["I.23", "I.3"] },
    { show: ["EG", "FG"], why: ["P1"] },
    { hl: ["AB", "AC", "DE", "DG", "BC", "EG"], why: ["I.4"] },
    { show: ["aDGF", "aDFG"], hide: ["aBAC", "aEDG"], hl: ["DF", "DG"], why: ["I.5"] },
    { show: ["aEFG", "aEGF"], why: ["A5"] },
    { hide: ["aDGF", "aDFG"], hl: ["EG", "EF", "BC"], why: ["I.19"] }
  ],
  text: {
    zh: [
      "设 ABC、DEF 是两个三角形，两边 AB、AC 分别等于两边 DE、DF，即 AB 等于 DE，AC 等于 DF，但 A 处的角大于 D 处的角。断言：底 BC 也大于底 EF。（可以拖动 A、B、C、D。）",
      "在直线 DE 上的点 D 处作 ∠EDG 等于 ∠BAC，并使 DG 等于 AC 或 DF。",
      "连接 EG、FG。",
      "因为 AB 等于 DE，AC 等于 DG，而 ∠BAC 等于 ∠EDG，所以底 BC 等于底 EG。",
      "又因为 DF 等于 DG，所以 ∠DGF 等于 ∠DFG。",
      "所以 ∠DFG 大于 ∠EGF，于是 ∠EFG 更大于 ∠EGF。",
      "在三角形 EFG 中，∠EFG 大于 ∠EGF，而大角所对的边较大，所以 EG 大于 EF。而 EG 等于 BC，所以 BC 也大于 EF。"
    ],
    en: [
      "Let ABC, DEF be two triangles having the two sides AB, AC equal to the two sides DE, DF respectively, namely AB to DE and AC to DF, and let the angle at A be greater than the angle at D. The claim: the base BC is also greater than the base EF. (A, B, C, D can be dragged.)",
      "On the straight line DE, at the point D, let the angle EDG be constructed equal to the angle BAC, and let DG be made equal to either of the two straight lines AC, DF.",
      "Let EG, FG be joined.",
      "Since AB is equal to DE and AC to DG, and the angle BAC is equal to the angle EDG, the base BC is equal to the base EG.",
      "Again, since DF is equal to DG, the angle DGF is equal to the angle DFG.",
      "Therefore the angle DFG is greater than the angle EGF, and the angle EFG is much greater than the angle EGF.",
      "In the triangle EFG the angle EFG is greater than the angle EGF, and the greater angle is subtended by the greater side; therefore EG is greater than EF. But EG is equal to BC; therefore BC is also greater than EF."
    ],
    es: [
      "Sean ABC, DEF dos triángulos que tienen los dos lados AB, AC iguales respectivamente a los dos lados DE, DF, a saber AB a DE y AC a DF, y sea el ángulo en A mayor que el ángulo en D. Se afirma que la base BC es también mayor que la base EF. (Se pueden arrastrar A, B, C, D.)",
      "Sobre la recta DE, en el punto D, constrúyase el ángulo EDG igual al ángulo BAC, y hágase DG igual a cualquiera de las dos rectas AC, DF.",
      "Trácense EG, FG.",
      "Como AB es igual a DE y AC a DG, y el ángulo BAC es igual al ángulo EDG, la base BC es igual a la base EG.",
      "De nuevo, como DF es igual a DG, el ángulo DGF es igual al ángulo DFG.",
      "Por tanto el ángulo DFG es mayor que el ángulo EGF, y el ángulo EFG es mucho mayor que el ángulo EGF.",
      "En el triángulo EFG el ángulo EFG es mayor que el ángulo EGF, y al ángulo mayor lo subtiende el lado mayor; por tanto EG es mayor que EF. Pero EG es igual a BC; por tanto BC es también mayor que EF."
    ],
    fr: [
      "Soient ABC, DEF deux triangles ayant les deux côtés AB, AC égaux respectivement aux deux côtés DE, DF, à savoir AB à DE et AC à DF, et que l'angle en A soit plus grand que l'angle en D. Je dis que la base BC est aussi plus grande que la base EF. (On peut déplacer A, B, C, D.)",
      "Sur la droite DE, au point D, construisons l'angle EDG égal à l'angle BAC, et faisons DG égale à l'une ou l'autre des droites AC, DF.",
      "Menons EG, FG.",
      "Puisque AB est égale à DE et AC à DG, et que l'angle BAC est égal à l'angle EDG, la base BC est égale à la base EG.",
      "De plus, puisque DF est égale à DG, l'angle DGF est égal à l'angle DFG.",
      "Donc l'angle DFG est plus grand que l'angle EGF, et l'angle EFG est beaucoup plus grand que l'angle EGF.",
      "Dans le triangle EFG, l'angle EFG est plus grand que l'angle EGF, et le plus grand angle est sous-tendu par le plus grand côté ; donc EG est plus grande que EF. Mais EG est égale à BC ; donc BC est aussi plus grande que EF."
    ],
    de: [
      "In den zwei Dreiecken ABC, DEF seien die zwei Seiten AB, AC den zwei Seiten DE, DF gleich, nämlich AB gleich DE und AC gleich DF, und der Winkel bei A sei größer als der Winkel bei D. Behauptung: Auch die Grundlinie BC ist größer als die Grundlinie EF. (A, B, C, D lassen sich ziehen.)",
      "An der Geraden DE errichte man im Punkt D den Winkel EDG gleich dem Winkel BAC und mache DG gleich einer der beiden Geraden AC, DF.",
      "Man ziehe EG, FG.",
      "Da AB gleich DE und AC gleich DG ist und der Winkel BAC gleich dem Winkel EDG, ist die Grundlinie BC gleich der Grundlinie EG.",
      "Ferner ist, da DF gleich DG ist, der Winkel DGF gleich dem Winkel DFG.",
      "Also ist der Winkel DFG größer als der Winkel EGF und der Winkel EFG erst recht größer als der Winkel EGF.",
      "Im Dreieck EFG ist der Winkel EFG größer als der Winkel EGF, und dem größeren Winkel liegt die größere Seite gegenüber; also ist EG größer als EF. EG ist aber gleich BC; also ist auch BC größer als EF."
    ],
    ru: [
      "Пусть ABC, DEF — два треугольника, у которых две стороны AB, AC соответственно равны двум сторонам DE, DF, а именно AB равна DE и AC равна DF, а угол при A больше угла при D. Утверждается, что и основание BC больше основания EF. (Можно перетаскивать A, B, C, D.)",
      "На прямой DE при точке D построим угол EDG, равный углу BAC, и отложим DG, равную любой из двух прямых AC, DF.",
      "Проведём EG, FG.",
      "Так как AB равна DE, а AC равна DG, и угол BAC равен углу EDG, то основание BC равно основанию EG.",
      "Далее, так как DF равна DG, угол DGF равен углу DFG.",
      "Значит, угол DFG больше угла EGF, и тем более угол EFG больше угла EGF.",
      "В треугольнике EFG угол EFG больше угла EGF, а против большего угла лежит большая сторона; значит, EG больше EF. Но EG равна BC; значит, и BC больше EF."
    ],
    ar: [
      "ليكن ABC، DEF مثلثين، الضلعان AB، AC منهما مساويان للضلعين DE، DF كلٌّ لنظيره، أي AB لـ DE وAC لـ DF، والزاوية عند A أعظم من الزاوية عند D. فنقول: إن القاعدة BC أيضًا أعظم من القاعدة EF. (يمكن سحب A، B، C، D.)",
      "نعمل على الخط DE عند النقطة D الزاوية EDG مساوية للزاوية BAC، ونجعل DG مساويًا لأيٍّ من الخطين AC، DF.",
      "ونصل EG، FG.",
      "لأن AB مساوٍ لـ DE، وAC لـ DG، والزاوية BAC مساوية للزاوية EDG، فالقاعدة BC مساوية للقاعدة EG.",
      "وأيضًا لأن DF مساوٍ لـ DG، فالزاوية DGF مساوية للزاوية DFG.",
      "فالزاوية DFG أعظم من الزاوية EGF، والزاوية EFG أعظم كثيرًا من الزاوية EGF.",
      "ففي المثلث EFG الزاوية EFG أعظم من الزاوية EGF، والزاوية العظمى يوترها الضلع الأعظم؛ فـ EG أعظم من EF. لكن EG مساوٍ لـ BC؛ فـ BC أيضًا أعظم من EF."
    ],
    hi: [
      "मान लीजिए ABC, DEF दो त्रिभुज हैं जिनकी दो भुजाएँ AB, AC क्रमशः दो भुजाओं DE, DF के बराबर हैं, यानी AB, DE के और AC, DF के, पर A पर का कोण D पर के कोण से बड़ा है। दावा: आधार BC भी आधार EF से बड़ा है। (A, B, C, D को खींचा जा सकता है।)",
      "सरल रेखा DE पर बिंदु D पर कोण EDG को कोण BAC के बराबर बनाइए, और DG को AC या DF के बराबर बनाइए।",
      "EG, FG मिलाइए।",
      "चूँकि AB, DE के बराबर है और AC, DG के बराबर है, और कोण BAC कोण EDG के बराबर है, इसलिए आधार BC आधार EG के बराबर है।",
      "फिर, चूँकि DF, DG के बराबर है, कोण DGF कोण DFG के बराबर है।",
      "अतः कोण DFG कोण EGF से बड़ा है, और कोण EFG कोण EGF से और भी बड़ा है।",
      "त्रिभुज EFG में कोण EFG कोण EGF से बड़ा है, और बड़े कोण के सामने बड़ी भुजा होती है; अतः EG, EF से बड़ी है। पर EG, BC के बराबर है; अतः BC भी EF से बड़ी है।"
    ],
    ja: [
      "ABC、DEF を 2 つの三角形とし、2 辺 AB、AC がそれぞれ 2 辺 DE、DF に等しい、すなわち AB は DE に、AC は DF に等しく、A における角が D における角より大きいとする。主張：底辺 BC も底辺 EF より大きい。（A、B、C、D をドラッグできます。）",
      "直線 DE 上の点 D において角 EDG を角 BAC に等しく作図し、DG を AC すなわち DF に等しくする。",
      "EG、FG を結ぶ。",
      "AB は DE に、AC は DG に等しく、角 BAC は角 EDG に等しいから、底辺 BC は底辺 EG に等しい。",
      "また DF は DG に等しいから、角 DGF は角 DFG に等しい。",
      "よって角 DFG は角 EGF より大きく、角 EFG は角 EGF よりなおさら大きい。",
      "三角形 EFG において角 EFG は角 EGF より大きく、大きい角には大きい辺が対する。よって EG は EF より大きい。しかし EG は BC に等しい。よって BC も EF より大きい。"
    ]
  }
});
