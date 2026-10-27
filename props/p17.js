// Proposition I.17
PROP(17, {
  vb: [0, 0, 720, 440],
  build(S) {
    S.free("B", 80, 340); S.free("C", 380, 340); S.free("A", 250, 90);
    S.pt("D", g => V.add(g("C"), V.mul(V.unit(V.sub(g("C"), g("B"))), 240)), { ld: { x: 0, y: 1 } });
    S.seg("AB", "A", "B"); S.seg("BC", "B", "C"); S.seg("CA", "C", "A"); S.seg("CD", "C", "D");
    S.ang("aABC", "A", "B", "C", { st: "blue", r: 38 });
    S.ang("aACD", "A", "C", "D", { st: "blue", r: 38 });
    S.ang("aACB", "A", "C", "B", { st: "red", r: 30 });
    S.ang("aBAC", "B", "A", "C", { st: "yel", r: 30 });
  },
  steps: [
    { show: ["A", "B", "C", "AB", "BC", "CA"] },
    { show: ["D", "CD"], why: ["P2"] },
    { show: ["aACD", "aABC"], why: ["I.16"] },
    { show: ["aACB"] },
    { hl: ["BC", "CD"], why: ["I.13"] },
    { show: ["aBAC"] }
  ],
  text: {
    zh: [
      "设 ABC 是三角形。断言：三角形 ABC 中任意两个角之和小于两个直角。（拖动顶点试试。）",
      "把 BC 延长到 D。",
      "因为 ∠ACD 是三角形 ABC 的外角，它大于内对角 ∠ABC。",
      "两边各加上 ∠ACB，于是 ∠ACD、∠ACB 之和大于 ∠ABC、∠BCA 之和。",
      "但 ∠ACD、∠ACB 之和等于两个直角，所以 ∠ABC、∠BCA 之和小于两个直角。",
      "同理可证 ∠BAC、∠ACB 之和以及 ∠CAB、∠ABC 之和也都小于两个直角。"
    ],
    en: [
      "Let ABC be a triangle. The claim: any two angles of the triangle ABC are together less than two right angles. (Try dragging the vertices.)",
      "Let BC be produced to D.",
      "Since the angle ACD is an exterior angle of the triangle ABC, it is greater than the interior and opposite angle ABC.",
      "Let the angle ACB be added to each; then the angles ACD, ACB are greater than the angles ABC, BCA.",
      "But the angles ACD, ACB are equal to two right angles; therefore the angles ABC, BCA are less than two right angles.",
      "Similarly it can be proved that the angles BAC, ACB, and also the angles CAB, ABC, are less than two right angles."
    ],
    es: [
      "Sea ABC un triángulo. Se afirma que dos ángulos cualesquiera del triángulo ABC son menores que dos rectos. (Prueba a arrastrar los vértices.)",
      "Prolónguese BC hasta D.",
      "Como el ángulo ACD es un ángulo exterior del triángulo ABC, es mayor que el ángulo interior y opuesto ABC.",
      "Añádase a cada uno el ángulo ACB; entonces los ángulos ACD, ACB son mayores que los ángulos ABC, BCA.",
      "Pero los ángulos ACD, ACB son iguales a dos rectos; por tanto los ángulos ABC, BCA son menores que dos rectos.",
      "Del mismo modo se demuestra que los ángulos BAC, ACB, y también los ángulos CAB, ABC, son menores que dos rectos."
    ],
    fr: [
      "Soit ABC un triangle. Je dis que deux angles quelconques du triangle ABC, pris ensemble, sont plus petits que deux droits. (Essayez de déplacer les sommets.)",
      "Prolongeons BC jusqu'en D.",
      "Puisque l'angle ACD est un angle extérieur du triangle ABC, il est plus grand que l'angle intérieur et opposé ABC.",
      "Ajoutons à chacun l'angle ACB ; les angles ACD, ACB sont alors plus grands que les angles ABC, BCA.",
      "Mais les angles ACD, ACB sont égaux à deux droits ; donc les angles ABC, BCA sont plus petits que deux droits.",
      "On démontrerait de même que les angles BAC, ACB, ainsi que les angles CAB, ABC, sont plus petits que deux droits."
    ],
    de: [
      "Es sei ABC ein Dreieck. Behauptung: Je zwei Winkel des Dreiecks ABC sind zusammen kleiner als zwei Rechte. (Ziehen Sie die Ecken.)",
      "Man verlängere BC bis D.",
      "Da der Winkel ACD ein Außenwinkel des Dreiecks ABC ist, ist er größer als der innen gegenüberliegende Winkel ABC.",
      "Man füge beiderseits den Winkel ACB hinzu; dann sind die Winkel ACD, ACB größer als die Winkel ABC, BCA.",
      "Die Winkel ACD, ACB sind aber zusammen zwei Rechten gleich; also sind die Winkel ABC, BCA zusammen kleiner als zwei Rechte.",
      "Ebenso lässt sich zeigen, dass auch die Winkel BAC, ACB und die Winkel CAB, ABC zusammen kleiner als zwei Rechte sind."
    ],
    ru: [
      "Пусть ABC — треугольник. Утверждается, что любые два угла треугольника ABC вместе меньше двух прямых. (Попробуйте перетащить вершины.)",
      "Продолжим BC до D.",
      "Так как угол ACD — внешний угол треугольника ABC, он больше внутреннего противолежащего угла ABC.",
      "Прибавим к каждому угол ACB; тогда углы ACD, ACB больше углов ABC, BCA.",
      "Но углы ACD, ACB вместе равны двум прямым; значит, углы ABC, BCA вместе меньше двух прямых.",
      "Подобным же образом доказывается, что и углы BAC, ACB, и углы CAB, ABC вместе меньше двух прямых."
    ],
    ar: [
      "ليكن ABC مثلثًا. فنقول: إن كل زاويتين من المثلث ABC مجموعهما أصغر من قائمتين. (جرّب سحب الرؤوس.)",
      "نُخرج BC إلى D.",
      "ولأن الزاوية ACD زاوية خارجة من المثلث ABC، فهي أعظم من الزاوية الداخلة المقابلة ABC.",
      "نزيد على كلٍّ منهما الزاوية ACB، فمجموع الزاويتين ACD، ACB أعظم من مجموع الزاويتين ABC، BCA.",
      "لكن الزاويتين ACD، ACB مساويتان لقائمتين؛ فمجموع الزاويتين ABC، BCA أصغر من قائمتين.",
      "وبمثل ذلك يتبيّن أن مجموع الزاويتين BAC، ACB، ومجموع الزاويتين CAB، ABC، أصغر من قائمتين."
    ],
    hi: [
      "मान लीजिए ABC एक त्रिभुज है। दावा: त्रिभुज ABC के किन्हीं दो कोणों का योग दो समकोणों से कम है। (शीर्षों को खींचकर देखिए।)",
      "BC को D तक बढ़ाइए।",
      "चूँकि कोण ACD त्रिभुज ABC का बहिष्कोण है, यह अंतः सम्मुख कोण ABC से बड़ा है।",
      "दोनों में कोण ACB जोड़िए; तो कोण ACD, ACB का योग कोण ABC, BCA के योग से बड़ा है।",
      "पर कोण ACD, ACB का योग दो समकोणों के बराबर है; अतः कोण ABC, BCA का योग दो समकोणों से कम है।",
      "इसी प्रकार सिद्ध किया जा सकता है कि कोण BAC, ACB का योग, और कोण CAB, ABC का योग भी दो समकोणों से कम है।"
    ],
    ja: [
      "ABC を三角形とする。主張：三角形 ABC のどの 2 角の和も 2 直角より小さい。（頂点をドラッグしてみてください。）",
      "BC を D まで延長する。",
      "角 ACD は三角形 ABC の外角だから、内対角 ABC より大きい。",
      "それぞれに角 ACB を加えると、角 ACD、ACB の和は角 ABC、BCA の和より大きい。",
      "しかし角 ACD、ACB の和は 2 直角に等しい。よって角 ABC、BCA の和は 2 直角より小さい。",
      "同様に、角 BAC、ACB の和も、角 CAB、ABC の和も 2 直角より小さいことが示される。"
    ]
  }
});
