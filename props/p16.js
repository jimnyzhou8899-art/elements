// Proposition I.16
PROP(16, {
  vb: [0, 0, 720, 520],
  build(S) {
    S.free("B", 70, 330); S.free("C", 360, 330); S.free("A", 200, 90);
    S.pt("D", g => V.add(g("C"), V.mul(V.unit(V.sub(g("C"), g("B"))), 230)), { ld: { x: 0, y: 1 } });
    S.pt("E", g => V.mid(g("A"), g("C")), { ld: { x: 1, y: -0.4 } });
    S.pt("F", g => V.add(g("E"), V.sub(g("E"), g("B"))), { ld: { x: 1, y: -0.4 } });
    S.pt("G", g => V.add(g("C"), V.mul(V.unit(V.sub(g("C"), g("A"))), 140)), { ld: { x: 1, y: 0.4 } });
    S.seg("AB", "A", "B"); S.seg("BC", "B", "C"); S.seg("CD", "C", "D");
    S.seg("AE", "A", "E", { st: "red" }); S.seg("EC", "E", "C", { st: "red" });
    S.seg("BE", "B", "E", { st: "blue" }); S.seg("EF", "E", "F", { st: "blue" });
    S.seg("FC", "F", "C"); S.seg("CG", "C", "G", { st: "aux" });
    S.ang("aBAC", "B", "A", "C", { st: "yel", r: 30 }); S.ang("aECF", "E", "C", "F", { st: "yel", r: 30 });
    S.ang("aACD", "A", "C", "D", { st: "yel", r: 48 });
    S.ang("aAEB", "A", "E", "B", { st: "red", r: 22 }); S.ang("aFEC", "F", "E", "C", { st: "red", r: 22 });
    S.ang("aABC", "A", "B", "C", { st: "blue", r: 34 }); S.ang("aBCG", "B", "C", "G", { st: "blue", r: 40 });
  },
  steps: [
    { show: ["A", "B", "C", "D", "AB", "BC", "AE", "EC", "CD", "aACD"], why: ["P2"] },
    { show: ["E"], why: ["I.10"] },
    { show: ["BE", "EF", "F"], why: ["P1", "P2", "I.3"] },
    { show: ["FC"], why: ["P1"] },
    { show: ["aAEB", "aFEC"], hide: ["aACD"], hl: ["AE", "EC", "BE", "EF"], why: ["I.15"] },
    { show: ["aBAC", "aECF"], hl: ["AB", "FC"], why: ["I.4"] },
    { show: ["aACD"], hide: ["aAEB", "aFEC"], why: ["A5"] },
    { show: ["G", "CG", "aABC", "aBCG"], hide: ["aBAC", "aECF", "aACD"], why: ["I.15"] }
  ],
  text: {
    zh: [
      "设 ABC 是三角形，把边 BC 延长到 D。断言：外角 ∠ACD 大于内对角 ∠CBA、∠BAC 中的任何一个。（三个顶点都可以拖动。）",
      "把 AC 二等分于点 E。",
      "连接 BE 并延长到 F，使 EF 等于 BE。",
      "连接 FC。",
      "因为 AE 等于 EC，BE 等于 EF，而对顶角 ∠AEB 等于 ∠FEC，",
      "所以底 AB 等于底 FC，三角形 ABE 全等于三角形 FEC，∠BAE 等于 ∠ECF。",
      "但 ∠ECD 大于 ∠ECF，所以 ∠ACD 大于 ∠BAE。",
      "同理，把 BC 二等分，并把 AC 延长到 G，可以证明 ∠BCG（即与 ∠ACD 相等的对顶角）大于 ∠ABC。"
    ],
    en: [
      "Let ABC be a triangle, and let its side BC be produced to D. The claim: the exterior angle ACD is greater than each of the interior and opposite angles CBA, BAC. (All three vertices can be dragged.)",
      "Let AC be bisected at E.",
      "Let BE be joined and produced to F, and let EF be made equal to BE.",
      "Let FC be joined.",
      "Since AE is equal to EC and BE to EF, and the vertical angle AEB is equal to the angle FEC,",
      "the base AB is equal to the base FC, the triangle ABE is equal to the triangle FEC, and the angle BAE is equal to the angle ECF.",
      "But the angle ECD is greater than the angle ECF; therefore the angle ACD is greater than the angle BAE.",
      "Similarly, if BC is bisected and AC produced to G, it can be proved that the angle BCG, which equals its vertical angle ACD, is greater than the angle ABC."
    ],
    es: [
      "Sea ABC un triángulo y prolónguese su lado BC hasta D. Se afirma que el ángulo exterior ACD es mayor que cada uno de los ángulos interiores y opuestos CBA, BAC. (Los tres vértices se pueden arrastrar.)",
      "Divídase AC en dos partes iguales en E.",
      "Trácese BE y prolónguese hasta F, haciendo EF igual a BE.",
      "Trácese FC.",
      "Como AE es igual a EC y BE a EF, y el ángulo opuesto por el vértice AEB es igual al ángulo FEC,",
      "la base AB es igual a la base FC, el triángulo ABE es igual al triángulo FEC, y el ángulo BAE es igual al ángulo ECF.",
      "Pero el ángulo ECD es mayor que el ángulo ECF; por tanto el ángulo ACD es mayor que el ángulo BAE.",
      "Del mismo modo, dividiendo BC en dos partes iguales y prolongando AC hasta G, se demuestra que el ángulo BCG, igual a su opuesto por el vértice ACD, es mayor que el ángulo ABC."
    ],
    fr: [
      "Soit ABC un triangle, et prolongeons son côté BC jusqu'en D. Je dis que l'angle extérieur ACD est plus grand que chacun des angles intérieurs et opposés CBA, BAC. (Les trois sommets peuvent être déplacés.)",
      "Partageons AC en deux parties égales en E.",
      "Menons BE et prolongeons-la jusqu'en F, en faisant EF égale à BE.",
      "Menons FC.",
      "Puisque AE est égale à EC et BE à EF, et que l'angle AEB est égal à son opposé par le sommet FEC,",
      "la base AB est égale à la base FC, le triangle ABE est égal au triangle FEC, et l'angle BAE est égal à l'angle ECF.",
      "Mais l'angle ECD est plus grand que l'angle ECF ; donc l'angle ACD est plus grand que l'angle BAE.",
      "De même, en partageant BC en deux parties égales et en prolongeant AC jusqu'en G, on démontre que l'angle BCG, égal à son opposé par le sommet ACD, est plus grand que l'angle ABC."
    ],
    de: [
      "Es sei ABC ein Dreieck, und man verlängere die Seite BC bis D. Behauptung: Der Außenwinkel ACD ist größer als jeder der beiden innen gegenüberliegenden Winkel CBA, BAC. (Alle drei Ecken lassen sich ziehen.)",
      "Man halbiere AC in E.",
      "Man ziehe BE, verlängere sie bis F und mache EF gleich BE.",
      "Man ziehe FC.",
      "Da AE gleich EC und BE gleich EF ist und der Scheitelwinkel AEB gleich dem Winkel FEC,",
      "ist die Grundlinie AB gleich der Grundlinie FC, das Dreieck ABE gleich dem Dreieck FEC und der Winkel BAE gleich dem Winkel ECF.",
      "Der Winkel ECD ist aber größer als der Winkel ECF; also ist der Winkel ACD größer als der Winkel BAE.",
      "Ebenso zeigt man, indem man BC halbiert und AC bis G verlängert, dass der Winkel BCG, der seinem Scheitelwinkel ACD gleich ist, größer ist als der Winkel ABC."
    ],
    ru: [
      "Пусть ABC — треугольник, и пусть его сторона BC продолжена до D. Утверждается, что внешний угол ACD больше каждого из внутренних противолежащих углов CBA, BAC. (Все три вершины можно перетаскивать.)",
      "Рассечём AC пополам в точке E.",
      "Проведём BE и продолжим её до F, отложив EF, равную BE.",
      "Проведём FC.",
      "Так как AE равна EC, а BE равна EF, и вертикальный угол AEB равен углу FEC,",
      "то основание AB равно основанию FC, треугольник ABE равен треугольнику FEC, и угол BAE равен углу ECF.",
      "Но угол ECD больше угла ECF; значит, угол ACD больше угла BAE.",
      "Подобным же образом, рассекши BC пополам и продолжив AC до G, докажем, что угол BCG, равный вертикальному с ним углу ACD, больше угла ABC."
    ],
    ar: [
      "ليكن ABC مثلثًا، ولنُخرج ضلعه BC إلى D. فنقول: إن الزاوية الخارجة ACD أعظم من كل واحدة من الزاويتين الداخلتين المقابلتين CBA، BAC. (يمكن سحب الرؤوس الثلاثة.)",
      "نقسم AC بنصفين عند E.",
      "ونصل BE ونُخرجه إلى F، ونجعل EF مساويًا لـ BE.",
      "ونصل FC.",
      "لأن AE مساوٍ لـ EC، وBE مساوٍ لـ EF، والزاوية AEB مساوية لمقابلتها بالرأس FEC،",
      "تكون القاعدة AB مساوية للقاعدة FC، والمثلث ABE مساويًا للمثلث FEC، والزاوية BAE مساوية للزاوية ECF.",
      "لكن الزاوية ECD أعظم من الزاوية ECF؛ فالزاوية ACD أعظم من الزاوية BAE.",
      "وبمثل ذلك، إذا قسمنا BC بنصفين وأخرجنا AC إلى G، تبيّن أن الزاوية BCG، المساوية لمقابلتها بالرأس ACD، أعظم من الزاوية ABC."
    ],
    hi: [
      "मान लीजिए ABC एक त्रिभुज है, और उसकी भुजा BC को D तक बढ़ाया गया है। दावा: बहिष्कोण ACD दोनों अंतः सम्मुख कोणों CBA, BAC में से प्रत्येक से बड़ा है। (तीनों शीर्षों को खींचा जा सकता है।)",
      "AC को E पर समद्विभाजित कीजिए।",
      "BE मिलाइए और उसे F तक बढ़ाइए, ताकि EF, BE के बराबर हो।",
      "FC मिलाइए।",
      "चूँकि AE, EC के बराबर है और BE, EF के बराबर है, और शीर्षाभिमुख कोण AEB कोण FEC के बराबर है,",
      "इसलिए आधार AB आधार FC के बराबर है, त्रिभुज ABE त्रिभुज FEC के बराबर है, और कोण BAE कोण ECF के बराबर है।",
      "पर कोण ECD कोण ECF से बड़ा है; अतः कोण ACD कोण BAE से बड़ा है।",
      "इसी प्रकार, BC को समद्विभाजित करके और AC को G तक बढ़ाकर सिद्ध किया जा सकता है कि कोण BCG, जो अपने शीर्षाभिमुख कोण ACD के बराबर है, कोण ABC से बड़ा है।"
    ],
    ja: [
      "ABC を三角形とし、その辺 BC を D まで延長する。主張：外角 ACD は内対角 CBA、BAC のどちらよりも大きい。（3 つの頂点はすべてドラッグできます。）",
      "AC を E で 2 等分する。",
      "BE を結んで F まで延長し、EF を BE に等しくする。",
      "FC を結ぶ。",
      "AE は EC に、BE は EF に等しく、対頂角 AEB は角 FEC に等しいから、",
      "底辺 AB は底辺 FC に等しく、三角形 ABE は三角形 FEC に等しく、角 BAE は角 ECF に等しい。",
      "しかし角 ECD は角 ECF より大きい。よって角 ACD は角 BAE より大きい。",
      "同様に、BC を 2 等分し AC を G まで延長すれば、角 BCG（対頂角 ACD に等しい）が角 ABC より大きいことが示される。"
    ]
  }
});
