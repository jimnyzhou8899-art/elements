// Proposition I.26
PROP(26, {
  vb: [0, 0, 720, 400],
  build(S) {
    S.free("A", 170, 60); S.free("B", 50, 330); S.free("C", 330, 330);
    S.free("D", 520, 60);
    S.pt("E", g => V.add(g("D"), V.sub(g("B"), g("A"))), { ld: { x: -0.4, y: 1 } });
    S.pt("F", g => V.add(g("D"), V.sub(g("C"), g("A"))), { ld: { x: 0.4, y: 1 } });
    // G, H: where the points would fall if AB, or BC, were the greater (contrary to the claim)
    S.pt("G", g => V.add(g("B"), V.mul(V.unit(V.sub(g("A"), g("B"))), 0.7 * V.dist(g("A"), g("B")))), { ld: { x: -1, y: 0 } });
    S.pt("H", g => V.add(g("B"), V.mul(V.unit(V.sub(g("C"), g("B"))), 0.72 * V.dist(g("B"), g("C")))), { ld: { x: 0, y: 1 } });
    S.seg("AB", "A", "B"); S.seg("BC", "B", "C", { st: "yel" }); S.seg("CA", "C", "A");
    S.seg("DE", "D", "E"); S.seg("EF", "E", "F", { st: "yel" }); S.seg("FD", "F", "D");
    S.seg("GC", "G", "C", { st: "aux" }); S.seg("AH", "A", "H", { st: "aux" });
    S.ang("aABC", "A", "B", "C", { st: "red", r: 36 }); S.ang("aDEF", "D", "E", "F", { st: "red", r: 36 });
    S.ang("aBCA", "B", "C", "A", { st: "blue", r: 46 }); S.ang("aEFD", "E", "F", "D", { st: "blue", r: 46 });
    S.ang("aGCB", "G", "C", "B", { st: "blue", r: 28 });
    S.ang("aBHA", "B", "H", "A", { st: "blue", r: 28 });
  },
  steps: [
    { show: ["A", "B", "C", "D", "E", "F", "AB", "BC", "CA", "DE", "EF", "FD", "aABC", "aDEF", "aBCA", "aEFD"], hl: ["BC", "EF"] },
    { show: ["G", "GC"], why: ["I.3", "P1"] },
    { show: ["aGCB"], why: ["I.4"] },
    { hl: ["AB", "DE"], why: ["A1"] },
    { hide: ["G", "GC", "aGCB"], hl: ["AB", "DE", "CA", "FD"], why: ["I.4"] },
    { show: ["H", "AH"], hl: ["AB", "DE"], why: ["I.3", "P1"] },
    { show: ["aBHA"], why: ["I.4", "A1"] },
    { hl: ["BC", "EF"], why: ["I.16", "I.4"] }
  ],
  text: {
    zh: [
      "设 ABC、DEF 是两个三角形，∠ABC、∠BCA 分别等于 ∠DEF、∠EFD，并且有一边相等。先看相等的边是两角夹边的情形：BC 等于 EF。断言：其余的边和角也分别相等。（可以拖动 A、B、C、D。）",
      "如果 AB 不等于 DE，设 AB 较大，在它上面截取 BG 等于 DE，连接 GC。（图中的 G 是按这个假设画的。）",
      "因为 GB 等于 DE，BC 等于 EF，夹角 ∠GBC 等于 ∠DEF，所以三角形 GBC 全等于三角形 DEF，∠GCB 等于 ∠DFE。",
      "但 ∠DFE 等于 ∠BCA，于是 ∠BCG 等于 ∠BCA，较小的等于较大的，这是不可能的。所以 AB 等于 DE。",
      "于是两边 AB、BC 分别等于两边 DE、EF，夹角 ∠ABC 等于 ∠DEF，所以 AC 等于 DF，∠BAC 等于 ∠EDF。",
      "再看相等的边是等角所对的边的情形：设 AB 等于 DE。如果 BC 不等于 EF，设 BC 较大，截取 BH 等于 EF，连接 AH。（H 也是按假设画的。）",
      "因为 AB 等于 DE，BH 等于 EF，夹角也相等，所以 ∠BHA 等于 ∠EFD，也就等于 ∠BCA。",
      "于是三角形 AHC 的外角 ∠BHA 等于内对角 ∠BCA，这是不可能的。所以 BC 等于 EF，两个三角形完全相等。"
    ],
    en: [
      "Let ABC, DEF be two triangles having the two angles ABC, BCA equal to the two angles DEF, EFD respectively, and one side equal to one side. First let the equal sides be those adjoining the equal angles: BC equal to EF. The claim: the remaining sides and the remaining angle are also equal. (A, B, C, D can be dragged.)",
      "If AB is unequal to DE, one of them is greater. Let AB be greater; let BG be made equal to DE, and let GC be joined. (G is drawn as this assumption would place it.)",
      "Since GB is equal to DE and BC to EF, and the angle GBC is equal to the angle DEF, the triangle GBC is equal to the triangle DEF, and the angle GCB is equal to the angle DFE.",
      "But the angle DFE is equal by hypothesis to the angle BCA; therefore the angle BCG is equal to the angle BCA, the less to the greater, which is impossible. Therefore AB is equal to DE.",
      "So the two sides AB, BC are equal to the two sides DE, EF, and the angle ABC is equal to the angle DEF; therefore AC is equal to DF, and the angle BAC to the angle EDF.",
      "Next let the sides subtending equal angles be equal: AB equal to DE. If BC is unequal to EF, let BC be greater; let BH be made equal to EF, and let AH be joined. (H too is drawn as the assumption would place it.)",
      "Since AB is equal to DE and BH to EF, and they contain equal angles, the angle BHA is equal to the angle EFD, that is, to the angle BCA.",
      "Then in the triangle AHC the exterior angle BHA is equal to the interior and opposite angle BCA, which is impossible. Therefore BC is equal to EF, and the triangles are equal in every respect."
    ],
    es: [
      "Sean ABC, DEF dos triángulos que tienen los dos ángulos ABC, BCA iguales respectivamente a los dos ángulos DEF, EFD, y un lado igual a un lado. Sean primero iguales los lados adyacentes a los ángulos iguales: BC igual a EF. Se afirma que los lados restantes y el ángulo restante son también iguales. (Se pueden arrastrar A, B, C, D.)",
      "Si AB no es igual a DE, uno de ellos es mayor. Sea mayor AB; hágase BG igual a DE y trácese GC. (G está dibujado donde lo situaría esta suposición.)",
      "Como GB es igual a DE y BC a EF, y el ángulo GBC es igual al ángulo DEF, el triángulo GBC es igual al triángulo DEF, y el ángulo GCB es igual al ángulo DFE.",
      "Pero el ángulo DFE es igual por hipótesis al ángulo BCA; por tanto el ángulo BCG es igual al ángulo BCA, el menor al mayor, lo cual es imposible. Por tanto AB es igual a DE.",
      "Así, los dos lados AB, BC son iguales a los dos lados DE, EF, y el ángulo ABC es igual al ángulo DEF; por tanto AC es igual a DF, y el ángulo BAC al ángulo EDF.",
      "Sean ahora iguales los lados que subtienden ángulos iguales: AB igual a DE. Si BC no es igual a EF, sea mayor BC; hágase BH igual a EF y trácese AH. (También H está dibujado según la suposición.)",
      "Como AB es igual a DE y BH a EF, y comprenden ángulos iguales, el ángulo BHA es igual al ángulo EFD, es decir, al ángulo BCA.",
      "Entonces en el triángulo AHC el ángulo exterior BHA es igual al ángulo interior y opuesto BCA, lo cual es imposible. Por tanto BC es igual a EF, y los triángulos son iguales en todo."
    ],
    fr: [
      "Soient ABC, DEF deux triangles ayant les deux angles ABC, BCA égaux respectivement aux deux angles DEF, EFD, et un côté égal à un côté. Que d'abord les côtés égaux soient ceux qui joignent les angles égaux : BC égal à EF. Je dis que les côtés restants et l'angle restant sont aussi égaux. (On peut déplacer A, B, C, D.)",
      "Si AB n'est pas égal à DE, l'un des deux est plus grand. Que AB soit plus grand ; faisons BG égale à DE et menons GC. (G est placé comme le voudrait cette supposition.)",
      "Puisque GB est égale à DE et BC à EF, et que l'angle GBC est égal à l'angle DEF, le triangle GBC est égal au triangle DEF, et l'angle GCB est égal à l'angle DFE.",
      "Mais l'angle DFE est égal par hypothèse à l'angle BCA ; donc l'angle BCG est égal à l'angle BCA, le plus petit au plus grand, ce qui est impossible. Donc AB est égal à DE.",
      "Ainsi les deux côtés AB, BC sont égaux aux deux côtés DE, EF, et l'angle ABC est égal à l'angle DEF ; donc AC est égal à DF, et l'angle BAC à l'angle EDF.",
      "Que maintenant les côtés égaux soient ceux qui sous-tendent des angles égaux : AB égal à DE. Si BC n'est pas égal à EF, que BC soit plus grand ; faisons BH égale à EF et menons AH. (H est aussi placé selon la supposition.)",
      "Puisque AB est égal à DE et BH à EF, et qu'ils comprennent des angles égaux, l'angle BHA est égal à l'angle EFD, c'est-à-dire à l'angle BCA.",
      "Alors, dans le triangle AHC, l'angle extérieur BHA est égal à l'angle intérieur et opposé BCA, ce qui est impossible. Donc BC est égal à EF, et les triangles sont égaux en tout."
    ],
    de: [
      "In den zwei Dreiecken ABC, DEF seien die zwei Winkel ABC, BCA den zwei Winkeln DEF, EFD gleich, und eine Seite sei einer Seite gleich. Zuerst seien die Seiten an den gleichen Winkeln gleich: BC gleich EF. Behauptung: Auch die übrigen Seiten und der übrige Winkel sind gleich. (A, B, C, D lassen sich ziehen.)",
      "Wäre AB ungleich DE, so wäre eine von beiden größer. Es sei AB größer; man mache BG gleich DE und ziehe GC. (G ist so gezeichnet, wie diese Annahme es verlangen würde.)",
      "Da GB gleich DE und BC gleich EF ist und der Winkel GBC gleich dem Winkel DEF, ist das Dreieck GBC dem Dreieck DEF gleich und der Winkel GCB gleich dem Winkel DFE.",
      "Der Winkel DFE ist aber nach Voraussetzung gleich dem Winkel BCA; also wäre der Winkel BCG gleich dem Winkel BCA, der kleinere dem größeren, was unmöglich ist. Also ist AB gleich DE.",
      "Somit sind die zwei Seiten AB, BC den zwei Seiten DE, EF gleich und der Winkel ABC gleich dem Winkel DEF; also ist AC gleich DF und der Winkel BAC gleich dem Winkel EDF.",
      "Nun seien die Seiten gleich, die gleichen Winkeln gegenüberliegen: AB gleich DE. Wäre BC ungleich EF, so sei BC größer; man mache BH gleich EF und ziehe AH. (Auch H ist nach der Annahme gezeichnet.)",
      "Da AB gleich DE und BH gleich EF ist und sie gleiche Winkel umfassen, ist der Winkel BHA gleich dem Winkel EFD, also gleich dem Winkel BCA.",
      "Dann wäre im Dreieck AHC der Außenwinkel BHA gleich dem innen gegenüberliegenden Winkel BCA, was unmöglich ist. Also ist BC gleich EF, und die Dreiecke sind in allem gleich."
    ],
    ru: [
      "Пусть ABC, DEF — два треугольника, у которых два угла ABC, BCA соответственно равны двум углам DEF, EFD, и одна сторона равна одной стороне. Сначала пусть равны стороны, прилежащие к равным углам: BC равна EF. Утверждается, что и остальные стороны и остальной угол равны. (Можно перетаскивать A, B, C, D.)",
      "Если AB не равна DE, то одна из них больше. Пусть больше AB; отложим BG, равную DE, и проведём GC. (Точка G нарисована там, где её поместило бы это допущение.)",
      "Так как GB равна DE, а BC равна EF, и угол GBC равен углу DEF, то треугольник GBC равен треугольнику DEF, и угол GCB равен углу DFE.",
      "Но угол DFE по предположению равен углу BCA; значит, угол BCG равен углу BCA, меньший большему, что невозможно. Значит, AB равна DE.",
      "Итак, две стороны AB, BC равны двум сторонам DE, EF, и угол ABC равен углу DEF; значит, AC равна DF, и угол BAC равен углу EDF.",
      "Теперь пусть равны стороны, лежащие против равных углов: AB равна DE. Если BC не равна EF, пусть больше BC; отложим BH, равную EF, и проведём AH. (Точка H также нарисована по допущению.)",
      "Так как AB равна DE, а BH равна EF, и они заключают равные углы, то угол BHA равен углу EFD, то есть углу BCA.",
      "Тогда в треугольнике AHC внешний угол BHA равен внутреннему противолежащему углу BCA, что невозможно. Значит, BC равна EF, и треугольники равны во всём."
    ],
    ar: [
      "ليكن ABC، DEF مثلثين، الزاويتان ABC، BCA منهما مساويتان للزاويتين DEF، EFD كلٌّ لنظيرتها، وضلع مساوٍ لضلع. فليكن أولًا الضلعان المتساويان هما المجاوران للزاويتين المتساويتين: BC مساوٍ لـ EF. فنقول: إن الضلعين الباقيين والزاوية الباقية متساوية أيضًا. (يمكن سحب A، B، C، D.)",
      "فإن لم يكن AB مساويًا لـ DE فأحدهما أعظم. ليكن AB أعظم؛ ونجعل BG مساويًا لـ DE، ونصل GC. (رُسمت G حيث يضعها هذا الفرض.)",
      "لأن GB مساوٍ لـ DE، وBC لـ EF، والزاوية GBC مساوية للزاوية DEF، فالمثلث GBC مساوٍ للمثلث DEF، والزاوية GCB مساوية للزاوية DFE.",
      "لكن الزاوية DFE مساوية بالفرض للزاوية BCA؛ فالزاوية BCG مساوية للزاوية BCA، الصغرى للعظمى، وهذا محال. فـ AB مساوٍ لـ DE.",
      "فالضلعان AB، BC مساويان للضلعين DE، EF، والزاوية ABC مساوية للزاوية DEF؛ فـ AC مساوٍ لـ DF، والزاوية BAC للزاوية EDF.",
      "ثم ليكن الضلعان المتساويان هما الموتران للزاويتين المتساويتين: AB مساوٍ لـ DE. فإن لم يكن BC مساويًا لـ EF فليكن BC أعظم؛ ونجعل BH مساويًا لـ EF، ونصل AH. (رُسمت H أيضًا بحسب الفرض.)",
      "لأن AB مساوٍ لـ DE، وBH لـ EF، ويحيطان بزاويتين متساويتين، فالزاوية BHA مساوية للزاوية EFD، أي للزاوية BCA.",
      "فتكون في المثلث AHC الزاوية الخارجة BHA مساوية للزاوية الداخلة المقابلة BCA، وهذا محال. فـ BC مساوٍ لـ EF، والمثلثان متساويان من كل وجه."
    ],
    hi: [
      "मान लीजिए ABC, DEF दो त्रिभुज हैं जिनके दो कोण ABC, BCA क्रमशः दो कोणों DEF, EFD के बराबर हैं, और एक भुजा एक भुजा के बराबर है। पहले मान लीजिए बराबर भुजाएँ बराबर कोणों के बीच की हैं: BC, EF के बराबर है। दावा: शेष भुजाएँ और शेष कोण भी बराबर हैं। (A, B, C, D को खींचा जा सकता है।)",
      "यदि AB, DE के बराबर न हो, तो इनमें से एक बड़ी होगी। मान लीजिए AB बड़ी है; BG को DE के बराबर बनाइए और GC मिलाइए। (G को इसी मान्यता के अनुसार दिखाया गया है।)",
      "चूँकि GB, DE के बराबर है और BC, EF के बराबर है, और कोण GBC कोण DEF के बराबर है, इसलिए त्रिभुज GBC त्रिभुज DEF के बराबर है, और कोण GCB कोण DFE के बराबर है।",
      "पर कोण DFE परिकल्पना से कोण BCA के बराबर है; अतः कोण BCG कोण BCA के बराबर होगा, छोटा बड़े के बराबर, जो असंभव है। इसलिए AB, DE के बराबर है।",
      "अतः दो भुजाएँ AB, BC दो भुजाओं DE, EF के बराबर हैं, और कोण ABC कोण DEF के बराबर है; इसलिए AC, DF के बराबर है, और कोण BAC कोण EDF के बराबर है।",
      "अब मान लीजिए बराबर कोणों के सामने की भुजाएँ बराबर हैं: AB, DE के बराबर है। यदि BC, EF के बराबर न हो, तो मान लीजिए BC बड़ी है; BH को EF के बराबर बनाइए और AH मिलाइए। (H को भी मान्यता के अनुसार दिखाया गया है।)",
      "चूँकि AB, DE के बराबर है और BH, EF के बराबर है, और वे बराबर कोण बनाती हैं, इसलिए कोण BHA कोण EFD के बराबर है, यानी कोण BCA के बराबर।",
      "तब त्रिभुज AHC में बहिष्कोण BHA अंतः सम्मुख कोण BCA के बराबर होगा, जो असंभव है। इसलिए BC, EF के बराबर है, और दोनों त्रिभुज हर प्रकार से बराबर हैं।"
    ],
    ja: [
      "ABC、DEF を 2 つの三角形とし、2 角 ABC、BCA がそれぞれ 2 角 DEF、EFD に等しく、1 辺が 1 辺に等しいとする。まず等しい辺が等しい角にはさまれる場合、すなわち BC が EF に等しい場合を考える。主張：残りの辺と残りの角も等しい。（A、B、C、D をドラッグできます。）",
      "AB が DE に等しくなければ、どちらかが大きい。AB が大きいとし、BG を DE に等しくとって GC を結ぶ。（G はこの仮定のもとでの位置に描いてあります。）",
      "GB は DE に、BC は EF に等しく、角 GBC は角 DEF に等しいから、三角形 GBC は三角形 DEF に等しく、角 GCB は角 DFE に等しい。",
      "しかし角 DFE は仮定により角 BCA に等しい。よって角 BCG は角 BCA に等しくなり、小さいものが大きいものに等しいことになって不可能である。ゆえに AB は DE に等しい。",
      "すると 2 辺 AB、BC は 2 辺 DE、EF に等しく、角 ABC は角 DEF に等しい。よって AC は DF に、角 BAC は角 EDF に等しい。",
      "次に等しい角に対する辺が等しい場合、すなわち AB が DE に等しい場合を考える。BC が EF に等しくなければ BC が大きいとし、BH を EF に等しくとって AH を結ぶ。（H も仮定のもとでの位置に描いてあります。）",
      "AB は DE に、BH は EF に等しく、はさむ角も等しいから、角 BHA は角 EFD、すなわち角 BCA に等しい。",
      "すると三角形 AHC の外角 BHA が内対角 BCA に等しくなり、不可能である。よって BC は EF に等しく、2 つの三角形はすべての点で等しい。"
    ]
  }
});
