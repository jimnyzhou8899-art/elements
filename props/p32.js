// Proposition I.32
PROP(32, {
  vb: [0, 0, 720, 420],
  build(S) {
    S.free("B", 60, 350); S.free("C", 400, 350); S.free("A", 230, 90);
    S.pt("D", g => V.add(g("C"), V.mul(V.unit(V.sub(g("C"), g("B"))), 260)), { ld: { x: 0, y: 1 } });
    // CE parallel to AB
    S.pt("E", g => V.add(g("C"), V.mul(V.unit(V.sub(g("A"), g("B"))), 0.85 * V.dist(g("A"), g("B")))));
    S.seg("AB", "A", "B"); S.seg("BC", "B", "C"); S.seg("CA", "C", "A"); S.seg("CD", "C", "D");
    S.seg("CE", "C", "E", { st: "aux" });
    S.ang("aBAC", "B", "A", "C", { st: "red", r: 34 }); S.ang("aACE", "A", "C", "E", { st: "red", r: 34 });
    S.ang("aABC", "A", "B", "C", { st: "blue", r: 40 }); S.ang("aECD", "E", "C", "D", { st: "blue", r: 46 });
    S.ang("aACB", "A", "C", "B", { st: "yel", r: 40 });
  },
  steps: [
    { show: ["A", "B", "C", "D", "AB", "BC", "CA", "CD"] },
    { show: ["E", "CE"], why: ["I.31"] },
    { show: ["aBAC", "aACE"], hl: ["AB", "CE", "CA"], why: ["I.29"] },
    { show: ["aABC", "aECD"], hl: ["AB", "CE", "BC", "CD"], why: ["I.29"] },
    { why: ["A2"] },
    { show: ["aACB"], why: ["I.13"] }
  ],
  text: {
    zh: [
      "设 ABC 是三角形，把边 BC 延长到 D。断言：外角 ∠ACD 等于两个内对角 ∠CAB、∠ABC 之和，而三角形的三个内角 ∠ABC、∠BCA、∠CAB 之和等于两个直角。（拖动顶点试试。）",
      "过点 C 作 CE 平行于直线 AB。",
      "因为 AB 平行于 CE，而 AC 落在它们上面，所以内错角 ∠BAC、∠ACE 相等。",
      "又因为 AB 平行于 CE，而直线 BD 落在它们上面，所以外角 ∠ECD 等于内对角 ∠ABC。",
      "而 ∠ACE 等于 ∠BAC，所以整个 ∠ACD 等于两个内对角 ∠BAC、∠ABC 之和。",
      "两边各加上 ∠ACB，于是 ∠ACD、∠ACB 之和等于 ∠ABC、∠BCA、∠CAB 三者之和。而 ∠ACD、∠ACB 之和等于两个直角，所以三角形的三个内角之和也等于两个直角。"
    ],
    en: [
      "Let ABC be a triangle, and let one side of it, BC, be produced to D. The claim: the exterior angle ACD is equal to the two interior and opposite angles CAB, ABC, and the three interior angles of the triangle, ABC, BCA, CAB, are equal to two right angles. (Try dragging the vertices.)",
      "Through the point C let CE be drawn parallel to the straight line AB.",
      "Since AB is parallel to CE, and AC has fallen upon them, the alternate angles BAC, ACE are equal to one another.",
      "Again, since AB is parallel to CE, and the straight line BD has fallen upon them, the exterior angle ECD is equal to the interior and opposite angle ABC.",
      "But the angle ACE was also proved equal to the angle BAC; therefore the whole angle ACD is equal to the two interior and opposite angles BAC, ABC.",
      "Let the angle ACB be added to each; then the angles ACD, ACB are equal to the three angles ABC, BCA, CAB. But the angles ACD, ACB are equal to two right angles; therefore the three angles of the triangle are also equal to two right angles."
    ],
    es: [
      "Sea ABC un triángulo, y prolónguese uno de sus lados, BC, hasta D. Se afirma que el ángulo exterior ACD es igual a los dos ángulos interiores y opuestos CAB, ABC, y que los tres ángulos interiores del triángulo, ABC, BCA, CAB, son iguales a dos rectos. (Prueba a arrastrar los vértices.)",
      "Por el punto C trácese CE paralela a la recta AB.",
      "Como AB es paralela a CE y AC ha caído sobre ellas, los ángulos alternos BAC, ACE son iguales entre sí.",
      "De nuevo, como AB es paralela a CE y la recta BD ha caído sobre ellas, el ángulo exterior ECD es igual al ángulo interior y opuesto ABC.",
      "Pero también se ha demostrado que el ángulo ACE es igual al ángulo BAC; por tanto el ángulo entero ACD es igual a los dos ángulos interiores y opuestos BAC, ABC.",
      "Añádase a cada uno el ángulo ACB; entonces los ángulos ACD, ACB son iguales a los tres ángulos ABC, BCA, CAB. Pero los ángulos ACD, ACB son iguales a dos rectos; por tanto los tres ángulos del triángulo son también iguales a dos rectos."
    ],
    fr: [
      "Soit ABC un triangle, et prolongeons l'un de ses côtés, BC, jusqu'en D. Je dis que l'angle extérieur ACD est égal aux deux angles intérieurs et opposés CAB, ABC, et que les trois angles intérieurs du triangle, ABC, BCA, CAB, sont égaux à deux droits. (Essayez de déplacer les sommets.)",
      "Par le point C, menons CE parallèle à la droite AB.",
      "Puisque AB est parallèle à CE et que AC tombe sur elles, les angles alternes BAC, ACE sont égaux entre eux.",
      "De même, puisque AB est parallèle à CE et que la droite BD tombe sur elles, l'angle extérieur ECD est égal à l'angle intérieur et opposé ABC.",
      "Mais on a aussi démontré que l'angle ACE est égal à l'angle BAC ; donc l'angle entier ACD est égal aux deux angles intérieurs et opposés BAC, ABC.",
      "Ajoutons à chacun l'angle ACB ; les angles ACD, ACB sont alors égaux aux trois angles ABC, BCA, CAB. Mais les angles ACD, ACB sont égaux à deux droits ; donc les trois angles du triangle sont aussi égaux à deux droits."
    ],
    de: [
      "Es sei ABC ein Dreieck, und man verlängere eine seiner Seiten, BC, bis D. Behauptung: Der Außenwinkel ACD ist den beiden innen gegenüberliegenden Winkeln CAB, ABC zusammen gleich, und die drei Innenwinkel des Dreiecks, ABC, BCA, CAB, sind zusammen zwei Rechten gleich. (Ziehen Sie die Ecken.)",
      "Durch den Punkt C ziehe man CE parallel zur Geraden AB.",
      "Da AB parallel zu CE ist und AC auf sie fällt, sind die Wechselwinkel BAC, ACE einander gleich.",
      "Ebenso ist, da AB parallel zu CE ist und die Gerade BD auf sie fällt, der Außenwinkel ECD gleich dem innen gegenüberliegenden Winkel ABC.",
      "Es wurde aber auch gezeigt, dass der Winkel ACE gleich dem Winkel BAC ist; also ist der ganze Winkel ACD den beiden innen gegenüberliegenden Winkeln BAC, ABC gleich.",
      "Man füge beiderseits den Winkel ACB hinzu; dann sind die Winkel ACD, ACB den drei Winkeln ABC, BCA, CAB gleich. Die Winkel ACD, ACB sind aber zusammen zwei Rechten gleich; also sind auch die drei Winkel des Dreiecks zusammen zwei Rechten gleich."
    ],
    ru: [
      "Пусть ABC — треугольник, и пусть одна из его сторон, BC, продолжена до D. Утверждается, что внешний угол ACD равен двум внутренним противолежащим углам CAB, ABC, а три внутренних угла треугольника, ABC, BCA, CAB, вместе равны двум прямым. (Попробуйте перетащить вершины.)",
      "Через точку C проведём CE параллельно прямой AB.",
      "Так как AB параллельна CE, а AC падает на них, накрест лежащие углы BAC, ACE равны между собой.",
      "Далее, так как AB параллельна CE, а прямая BD падает на них, внешний угол ECD равен внутреннему противолежащему углу ABC.",
      "Но доказано также, что угол ACE равен углу BAC; значит, весь угол ACD равен двум внутренним противолежащим углам BAC, ABC.",
      "Прибавим к каждому угол ACB; тогда углы ACD, ACB равны трём углам ABC, BCA, CAB. Но углы ACD, ACB вместе равны двум прямым; значит, и три угла треугольника вместе равны двум прямым."
    ],
    ar: [
      "ليكن ABC مثلثًا، ولنُخرج أحد أضلاعه BC إلى D. فنقول: إن الزاوية الخارجة ACD مساوية لمجموع الزاويتين الداخلتين المقابلتين CAB، ABC، وإن زوايا المثلث الداخلة الثلاث ABC، BCA، CAB مساوية لقائمتين. (جرّب سحب الرؤوس.)",
      "نُخرج من النقطة C الخط CE موازيًا للخط المستقيم AB.",
      "لأن AB موازٍ لـ CE، وقد وقع عليهما AC، فالزاويتان المتبادلتان BAC، ACE متساويتان.",
      "وأيضًا لأن AB موازٍ لـ CE، وقد وقع عليهما الخط BD، فالزاوية الخارجة ECD مساوية للزاوية الداخلة المقابلة ABC.",
      "وقد تبيّن أن الزاوية ACE مساوية للزاوية BAC؛ فالزاوية ACD كلها مساوية لمجموع الزاويتين الداخلتين المقابلتين BAC، ABC.",
      "نزيد على كلٍّ منهما الزاوية ACB، فمجموع الزاويتين ACD، ACB مساوٍ لمجموع الزوايا الثلاث ABC، BCA، CAB. لكن الزاويتين ACD، ACB مساويتان لقائمتين؛ فزوايا المثلث الثلاث أيضًا مساوية لقائمتين."
    ],
    hi: [
      "मान लीजिए ABC एक त्रिभुज है, और उसकी एक भुजा BC को D तक बढ़ाया गया है। दावा: बहिष्कोण ACD दोनों अंतः सम्मुख कोणों CAB, ABC के योग के बराबर है, और त्रिभुज के तीनों अंतः कोण ABC, BCA, CAB मिलकर दो समकोणों के बराबर हैं। (शीर्षों को खींचकर देखिए।)",
      "बिंदु C से होकर सरल रेखा AB के समांतर CE खींचिए।",
      "चूँकि AB, CE के समांतर है और AC उन पर पड़ती है, इसलिए एकांतर कोण BAC, ACE परस्पर बराबर हैं।",
      "फिर, चूँकि AB, CE के समांतर है और सरल रेखा BD उन पर पड़ती है, इसलिए बहिष्कोण ECD अंतः सम्मुख कोण ABC के बराबर है।",
      "पर कोण ACE कोण BAC के बराबर सिद्ध हो चुका है; अतः पूरा कोण ACD दोनों अंतः सम्मुख कोणों BAC, ABC के योग के बराबर है।",
      "दोनों में कोण ACB जोड़िए; तो कोण ACD, ACB का योग तीन कोणों ABC, BCA, CAB के योग के बराबर है। पर कोण ACD, ACB का योग दो समकोणों के बराबर है; अतः त्रिभुज के तीनों कोणों का योग भी दो समकोणों के बराबर है।"
    ],
    ja: [
      "ABC を三角形とし、その 1 辺 BC を D まで延長する。主張：外角 ACD は 2 つの内対角 CAB、ABC の和に等しく、三角形の 3 つの内角 ABC、BCA、CAB の和は 2 直角に等しい。（頂点をドラッグしてみてください。）",
      "点 C を通って直線 AB に平行に CE を引く。",
      "AB は CE に平行で、AC がこれらに交わるから、錯角 BAC、ACE は互いに等しい。",
      "また AB は CE に平行で、直線 BD がこれらに交わるから、外角 ECD は内対角 ABC に等しい。",
      "そして角 ACE は角 BAC に等しいことが示された。よって角 ACD 全体は 2 つの内対角 BAC、ABC の和に等しい。",
      "それぞれに角 ACB を加えると、角 ACD、ACB の和は 3 角 ABC、BCA、CAB の和に等しい。しかし角 ACD、ACB の和は 2 直角に等しい。よって三角形の 3 つの角の和も 2 直角に等しい。"
    ]
  }
});
