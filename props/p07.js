// Proposition I.7
PROP(7, {
  vb: [0, 0, 720, 520],
  build(S) {
    S.free("A", 180, 420); S.free("B", 540, 420); S.free("C", 320, 170);
    // D is the impossible second point the proof assumes; it can be dragged anywhere on the same side
    S.free("D", 450, 190);
    S.seg("AB", "A", "B"); S.seg("AC", "A", "C", { st: "red" }); S.seg("CB", "C", "B", { st: "blue" });
    S.seg("AD", "A", "D", { st: "red" }); S.seg("DB", "D", "B", { st: "blue" });
    S.seg("CD", "C", "D", { st: "yel" });
    S.ang("aACD", "A", "C", "D", { st: "red", r: 30 }); S.ang("aADC", "C", "D", "A", { st: "red", r: 30 });
    S.ang("aDCB", "D", "C", "B", { st: "blue", r: 20 }); S.ang("aCDB", "B", "D", "C", { st: "blue", r: 20 });
    S.circ("cA", "A", "C", { st: "aux" }); S.circ("cB", "B", "C", { st: "aux" });
  },
  steps: [
    { show: ["A", "B", "C", "AB", "AC", "CB"] },
    { show: ["D", "AD", "DB"], hl: ["AD", "DB"] },
    { show: ["CD", "aACD", "aADC"], why: ["P1", "I.5"] },
    { show: ["aDCB", "aCDB"], why: ["A5"] },
    { why: ["I.5"] },
    { show: ["cA", "cB"], hide: ["aACD", "aADC", "aDCB", "aCDB"] }
  ],
  text: {
    zh: [
      "在线段 AB 上，从两端 A、B 作出两条线段 AC、CB，交于点 C。断言：在 AB 的同一侧，不能从 A、B 作出另外两条线段 AD、DB 交于另一点 D，使 AD 等于 AC、DB 等于 CB。",
      "假如可以，设 AD 等于 AC，DB 等于 CB，D 是同一侧的另一点。（这样的 D 其实画不出来；图中的 D 只是示意，可以拖动。）",
      "连接 CD。因为 AC 等于 AD，所以 ∠ACD 等于 ∠ADC。",
      "于是 ∠ADC 大于 ∠DCB，所以 ∠CDB 更大于 ∠DCB。",
      "又因为 CB 等于 DB，所以 ∠CDB 等于 ∠DCB。但已证前者远大于后者，这是不可能的。所以这样的 D 不存在。",
      "直观地看：以 A 为圆心、AC 为半径的圆，与以 B 为圆心、BC 为半径的圆，在 AB 的这一侧只交于 C 一点。"
    ],
    en: [
      "On the straight line AB let two straight lines AC, CB be constructed from its ends A, B, meeting at the point C. The claim: on the same side of AB there cannot be constructed from A, B two other straight lines AD, DB meeting at another point D, with AD equal to AC and DB equal to CB.",
      "Suppose it possible: let AD be equal to AC and DB to CB, with D a different point on the same side. (Such a D cannot really be drawn; the D shown is only a sketch, and you can drag it.)",
      "Let CD be joined. Since AC is equal to AD, the angle ACD is equal to the angle ADC.",
      "Therefore the angle ADC is greater than the angle DCB; therefore the angle CDB is much greater than the angle DCB.",
      "Again, since CB is equal to DB, the angle CDB is equal to the angle DCB. But it was also proved much greater than it, which is impossible. So no such D exists.",
      "To see it directly: the circle with centre A and radius AC and the circle with centre B and radius BC meet on this side of AB only at C."
    ],
    es: [
      "Sobre la recta AB constrúyanse, desde sus extremos A, B, dos rectas AC, CB que se encuentran en el punto C. Se afirma que del mismo lado de AB no pueden construirse desde A, B otras dos rectas AD, DB que se encuentren en otro punto D, con AD igual a AC y DB igual a CB.",
      "Supóngase posible: sea AD igual a AC y DB igual a CB, con D un punto distinto del mismo lado. (Tal D no puede dibujarse de verdad; el D que se ve es solo un esbozo y puedes arrastrarlo.)",
      "Trácese CD. Como AC es igual a AD, el ángulo ACD es igual al ángulo ADC.",
      "Por tanto el ángulo ADC es mayor que el ángulo DCB; luego el ángulo CDB es mucho mayor que el ángulo DCB.",
      "De nuevo, como CB es igual a DB, el ángulo CDB es igual al ángulo DCB. Pero se demostró que era mucho mayor, lo cual es imposible. Así que tal D no existe.",
      "Para verlo directamente: el círculo de centro A y radio AC y el círculo de centro B y radio BC se cortan de este lado de AB solo en C."
    ],
    fr: [
      "Sur la droite AB, construisons à partir de ses extrémités A, B deux droites AC, CB qui se rencontrent au point C. Je dis que, du même côté de AB, on ne peut construire à partir de A, B deux autres droites AD, DB se rencontrant en un autre point D, avec AD égale à AC et DB égale à CB.",
      "Supposons-le possible : soit AD égale à AC et DB égale à CB, D étant un autre point du même côté. (Un tel D ne peut pas vraiment être tracé ; le D affiché n'est qu'une esquisse, que vous pouvez déplacer.)",
      "Menons CD. Puisque AC est égale à AD, l'angle ACD est égal à l'angle ADC.",
      "Donc l'angle ADC est plus grand que l'angle DCB ; donc l'angle CDB est beaucoup plus grand que l'angle DCB.",
      "D'autre part, puisque CB est égale à DB, l'angle CDB est égal à l'angle DCB. Mais on a montré qu'il est beaucoup plus grand, ce qui est impossible. Un tel D n'existe donc pas.",
      "Pour le voir directement : le cercle de centre A et de rayon AC et le cercle de centre B et de rayon BC ne se coupent, de ce côté de AB, qu'en C."
    ],
    de: [
      "Über der Strecke AB seien von ihren Endpunkten A, B aus zwei Strecken AC, CB errichtet, die sich im Punkt C treffen. Behauptung: Auf derselben Seite von AB lassen sich von A, B aus nicht zwei andere Strecken AD, DB errichten, die sich in einem anderen Punkt D treffen, mit AD gleich AC und DB gleich CB.",
      "Angenommen, es gehe: AD sei gleich AC und DB gleich CB, wobei D ein anderer Punkt auf derselben Seite ist. (Ein solches D lässt sich in Wahrheit nicht zeichnen; das gezeigte D ist nur eine Skizze und lässt sich ziehen.)",
      "Man ziehe CD. Da AC gleich AD ist, ist der Winkel ACD gleich dem Winkel ADC.",
      "Also ist der Winkel ADC größer als der Winkel DCB; also ist der Winkel CDB erst recht größer als der Winkel DCB.",
      "Andererseits ist, da CB gleich DB ist, der Winkel CDB gleich dem Winkel DCB. Er wurde aber als viel größer erwiesen, was unmöglich ist. Ein solches D gibt es also nicht.",
      "Unmittelbar sieht man es so: Der Kreis um A mit Radius AC und der Kreis um B mit Radius BC schneiden sich auf dieser Seite von AB nur in C."
    ],
    ru: [
      "Пусть на прямой AB из её концов A, B построены две прямые AC, CB, встречающиеся в точке C. Утверждается, что по ту же сторону от AB нельзя построить из A, B две другие прямые AD, DB, встречающиеся в другой точке D, так чтобы AD была равна AC, а DB равна CB.",
      "Допустим, что можно: пусть AD равна AC, а DB равна CB, причём D — другая точка по ту же сторону. (Такую D на самом деле нарисовать нельзя; показанная D — лишь набросок, её можно перетаскивать.)",
      "Проведём CD. Так как AC равна AD, угол ACD равен углу ADC.",
      "Значит, угол ADC больше угла DCB; следовательно, угол CDB тем более больше угла DCB.",
      "С другой стороны, так как CB равна DB, угол CDB равен углу DCB. Но доказано, что он гораздо больше, а это невозможно. Значит, такой D не существует.",
      "Наглядно: окружность с центром A и радиусом AC и окружность с центром B и радиусом BC пересекаются по эту сторону от AB только в точке C."
    ],
    ar: [
      "ليُعمل على الخط AB، من طرفيه A، B، خطان AC، CB يلتقيان عند النقطة C. فنقول: إنه لا يمكن أن يُعمل في الجهة نفسها من AB، من A، B، خطان آخران AD، DB يلتقيان عند نقطة أخرى D، بحيث يكون AD مساويًا لـ AC وDB مساويًا لـ CB.",
      "فإن أمكن، فليكن AD مساويًا لـ AC وDB مساويًا لـ CB، وD نقطة أخرى في الجهة نفسها. (لا يمكن رسم مثل هذه D حقًا؛ وD المرسومة مجرد تخطيط يمكنك سحبه.)",
      "نصل CD. فلأن AC مساوٍ لـ AD، تكون الزاوية ACD مساوية للزاوية ADC.",
      "فالزاوية ADC أعظم من الزاوية DCB؛ فالزاوية CDB أعظم كثيرًا من الزاوية DCB.",
      "ولأن CB مساوٍ لـ DB، تكون الزاوية CDB مساوية للزاوية DCB. وقد تبيّن أنها أعظم منها كثيرًا، وهذا محال. فلا وجود لمثل هذه D.",
      "ولرؤية ذلك مباشرة: الدائرة التي مركزها A ونصف قطرها AC، والدائرة التي مركزها B ونصف قطرها BC، لا تلتقيان في هذه الجهة من AB إلا عند C."
    ],
    hi: [
      "सरल रेखा AB पर, उसके सिरों A, B से दो सरल रेखाएँ AC, CB बनाई गई हैं जो बिंदु C पर मिलती हैं। दावा: AB की उसी ओर, A, B से दो अन्य सरल रेखाएँ AD, DB नहीं बनाई जा सकतीं जो किसी अन्य बिंदु D पर मिलें और AD, AC के तथा DB, CB के बराबर हों।",
      "मान लीजिए यह संभव है: AD, AC के बराबर है और DB, CB के, तथा D उसी ओर कोई अन्य बिंदु है। (ऐसा D वास्तव में बनाया नहीं जा सकता; दिखाया गया D केवल संकेत है, इसे खींचा जा सकता है।)",
      "CD मिलाइए। चूँकि AC, AD के बराबर है, इसलिए कोण ACD कोण ADC के बराबर है।",
      "अतः कोण ADC कोण DCB से बड़ा है; इसलिए कोण CDB कोण DCB से और भी बड़ा है।",
      "फिर, चूँकि CB, DB के बराबर है, इसलिए कोण CDB कोण DCB के बराबर है। पर यह उससे बहुत बड़ा सिद्ध हो चुका है, जो असंभव है। अतः ऐसा D नहीं होता।",
      "सीधे देखने के लिए: A केंद्र और AC त्रिज्या वाला वृत्त, तथा B केंद्र और BC त्रिज्या वाला वृत्त, AB की इस ओर केवल C पर मिलते हैं।"
    ],
    ja: [
      "直線 AB の上に、両端 A、B から 2 直線 AC、CB を作り、点 C で交わるとする。主張：AB の同じ側に、A、B から別の点 D で交わる 2 直線 AD、DB を、AD が AC に、DB が CB に等しくなるように作ることはできない。",
      "できたと仮定する。AD が AC に、DB が CB に等しく、D は同じ側の別の点とする。（そのような D は実際には描けません。表示の D は説明用の仮の点で、ドラッグできます。）",
      "CD を結ぶ。AC は AD に等しいから、角 ACD は角 ADC に等しい。",
      "よって角 ADC は角 DCB より大きい。ゆえに角 CDB は角 DCB よりはるかに大きい。",
      "また CB は DB に等しいから、角 CDB は角 DCB に等しい。しかしはるかに大きいことが示されたので、これは不可能である。よってそのような D は存在しない。",
      "直接見るなら：A を中心とし AC を半径とする円と、B を中心とし BC を半径とする円は、AB のこちら側では C だけで交わる。"
    ]
  }
});
