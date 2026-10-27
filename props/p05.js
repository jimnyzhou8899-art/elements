// Proposition I.5
PROP(5, {
  vb: [0, 0, 720, 500],
  build(S) {
    S.free("A", 360, 70); S.free("B", 270, 240);
    // C stays on the circle about A through B, so AB = AC
    S.glide("C", 1.084, (g, p) => V.add(g("A"), V.mul({ x: Math.cos(p), y: Math.sin(p) }, V.dist(g("A"), g("B")))),
      (g, m) => angOf(V.sub(m, g("A"))));
    const along = (p, k) => g => V.add(g("A"), V.mul(V.unit(V.sub(g(p), g("A"))), V.dist(g("A"), g("B")) * k));
    S.pt("D", along("B", 2), { ld: { x: -0.6, y: 1 } }); S.pt("E", along("C", 2), { ld: { x: 0.6, y: 1 } });
    S.glide("F", 1.45, (g, k) => along("B", k)(g),
      (g, m) => Math.min(1.85, Math.max(1.12, V.dot(V.sub(m, g("A")), V.unit(V.sub(g("B"), g("A")))) / V.dist(g("A"), g("B")))));
    S.pt("G", g => V.add(g("A"), V.mul(V.unit(V.sub(g("C"), g("A"))), V.dist(g("A"), g("F")))));
    S.poly("tAFC", ["A", "F", "C"], { st: "red" }); S.poly("tAGB", ["A", "G", "B"], { st: "blue" });
    S.poly("tBFC", ["B", "F", "C"], { st: "yel" }); S.poly("tCGB", ["C", "G", "B"], { st: "yel" });
    S.seg("AB", "A", "B"); S.seg("AC", "A", "C"); S.seg("BC", "B", "C");
    S.seg("BD", "B", "D"); S.seg("CE", "C", "E");
    S.seg("BF", "B", "F", { st: "yel" }); S.seg("CG", "C", "G", { st: "yel" });
    S.seg("FC", "F", "C", { st: "red" }); S.seg("GB", "G", "B", { st: "blue" });
    S.ang("aB", "A", "B", "C", { st: "red", r: 24 }); S.ang("aC", "B", "C", "A", { st: "red", r: 24 });
    S.ang("uB", "C", "B", "F", { st: "blue", r: 20 }); S.ang("uC", "G", "C", "B", { st: "blue", r: 20 });
  },
  steps: [
    { show: ["A", "B", "C", "AB", "AC", "BC"] },
    { show: ["D", "E", "BD", "CE"], why: ["P2"] },
    { show: ["F", "G"], why: ["I.3"] },
    { show: ["FC", "GB"], why: ["P1"] },
    { show: ["tAFC", "tAGB"], hl: ["FC", "GB"], why: ["I.4"] },
    { show: ["BF", "CG"], hide: ["tAFC", "tAGB"], hl: ["BF", "CG"], why: ["A3"] },
    { show: ["tBFC", "tCGB", "uB", "uC"], why: ["I.4"] },
    { show: ["aB", "aC"], hide: ["tBFC", "tCGB"], why: ["A3"] }
  ],
  text: {
    zh: [
      "设 ABC 是等腰三角形，AB 等于 AC。断言：底角 ∠ABC 等于 ∠ACB，而且延长两腰后，底边下面的两个角也相等。（拖动 C 时它沿以 A 为圆心的圆移动，两腰始终相等。）",
      "把 AB、AC 分别延长成直线 BD、CE。",
      "在 BD 上任取一点 F（可以拖动），从较长的 AE 上截取 AG 等于 AF。",
      "连接 FC、GB。",
      "因为 AF 等于 AG，AB 等于 AC，两边 FA、AC 分别等于两边 GA、AB，且夹着公共角 ∠FAG，所以底 FC 等于底 GB，三角形 AFC 等于三角形 AGB，其余的角也相等：∠ACF 等于 ∠ABG，∠AFC 等于 ∠AGB。",
      "因为整个 AF 等于整个 AG，其中 AB 等于 AC，所以余量 BF 等于余量 CG。",
      "又已证 FC 等于 GB，所以两边 BF、FC 分别等于两边 CG、GB，且 ∠BFC 等于 ∠CGB，底 BC 是公共的；所以三角形 BFC 等于三角形 CGB，其余的角也相等：∠FBC 等于 ∠GCB，∠BCF 等于 ∠CBG。",
      "已证整个 ∠ABG 等于整个 ∠ACF，其中 ∠CBG 等于 ∠BCF，所以余下的 ∠ABC 等于余下的 ∠ACB，它们正是底角。又已证 ∠FBC 等于 ∠GCB，它们是底边下面的角。"
    ],
    en: [
      "Let ABC be an isosceles triangle with AB equal to AC. The claim: the base angles ABC, ACB are equal, and if the equal sides are produced, the angles under the base are equal too. (Dragging C moves it on the circle with centre A, so the two sides stay equal.)",
      "Let AB, AC be produced further in straight lines BD, CE.",
      "Let a point F be taken at random on BD (you can drag it), and from the greater AE let AG be cut off equal to AF.",
      "Let FC, GB be joined.",
      "Since AF is equal to AG and AB to AC, the two sides FA, AC are equal to the two sides GA, AB, and they contain a common angle, FAG; therefore the base FC is equal to the base GB, the triangle AFC is equal to the triangle AGB, and the remaining angles are equal: ACF to ABG, and AFC to AGB.",
      "Since the whole AF is equal to the whole AG, and in these AB is equal to AC, the remainder BF is equal to the remainder CG.",
      "And FC was proved equal to GB; so the two sides BF, FC are equal to the two sides CG, GB, the angle BFC is equal to the angle CGB, and the base BC is common to them; therefore the triangle BFC is equal to the triangle CGB, and the remaining angles are equal: FBC to GCB, and BCF to CBG.",
      "The whole angle ABG was proved equal to the whole angle ACF, and in these the angle CBG is equal to BCF; therefore the remaining angle ABC is equal to the remaining angle ACB, and they are at the base. And the angle FBC was proved equal to GCB, and they are under the base."
    ],
    es: [
      "Sea ABC un triángulo isósceles con AB igual a AC. Se afirma que los ángulos de la base ABC, ACB son iguales y que, si se prolongan los lados iguales, los ángulos bajo la base también son iguales. (Al arrastrar C se mueve por el círculo de centro A, así que los dos lados siguen siendo iguales.)",
      "Prolónguense AB, AC en línea recta, formando BD, CE.",
      "Tómese en BD un punto cualquiera F (puedes arrastrarlo) y de la mayor AE quítese AG igual a AF.",
      "Trácense FC, GB.",
      "Como AF es igual a AG y AB a AC, los dos lados FA, AC son iguales a los dos lados GA, AB y comprenden el ángulo común FAG; por tanto la base FC es igual a la base GB, el triángulo AFC es igual al triángulo AGB, y los ángulos restantes son iguales: ACF a ABG, y AFC a AGB.",
      "Como AF entera es igual a AG entera, y de ellas AB es igual a AC, el resto BF es igual al resto CG.",
      "Se demostró que FC es igual a GB; así los dos lados BF, FC son iguales a los dos lados CG, GB, el ángulo BFC es igual al ángulo CGB, y la base BC es común; por tanto el triángulo BFC es igual al triángulo CGB, y los ángulos restantes son iguales: FBC a GCB, y BCF a CBG.",
      "Se demostró que el ángulo entero ABG es igual al ángulo entero ACF, y de ellos el ángulo CBG es igual a BCF; por tanto el ángulo restante ABC es igual al ángulo restante ACB, y están en la base. Además, el ángulo FBC resultó igual a GCB, y están bajo la base."
    ],
    fr: [
      "Soit ABC un triangle isocèle où AB est égale à AC. Je dis que les angles à la base ABC, ACB sont égaux et que, si l'on prolonge les côtés égaux, les angles sous la base sont aussi égaux. (En déplaçant C, il glisse sur le cercle de centre A, de sorte que les deux côtés restent égaux.)",
      "Prolongeons AB, AC en ligne droite par BD, CE.",
      "Prenons sur BD un point quelconque F (vous pouvez le déplacer), et retranchons de la plus grande AE la droite AG égale à AF.",
      "Menons FC, GB.",
      "Puisque AF est égale à AG et AB à AC, les deux côtés FA, AC sont égaux aux deux côtés GA, AB et comprennent l'angle commun FAG ; donc la base FC est égale à la base GB, le triangle AFC est égal au triangle AGB, et les angles restants sont égaux : ACF à ABG, et AFC à AGB.",
      "Puisque AF tout entière est égale à AG tout entière, et que AB est égale à AC, le reste BF est égal au reste CG.",
      "On a montré que FC est égale à GB ; ainsi les deux côtés BF, FC sont égaux aux deux côtés CG, GB, l'angle BFC est égal à l'angle CGB, et la base BC est commune ; donc le triangle BFC est égal au triangle CGB, et les angles restants sont égaux : FBC à GCB, et BCF à CBG.",
      "On a montré que l'angle entier ABG est égal à l'angle entier ACF, et que l'angle CBG est égal à BCF ; donc l'angle restant ABC est égal à l'angle restant ACB, et ils sont à la base. De plus, l'angle FBC est égal à GCB, et ils sont sous la base."
    ],
    de: [
      "Das Dreieck ABC sei gleichschenklig mit AB gleich AC. Behauptung: Die Basiswinkel ABC, ACB sind gleich, und verlängert man die gleichen Seiten, so sind auch die Winkel unter der Grundlinie gleich. (Beim Ziehen bewegt sich C auf dem Kreis um A, so dass die Schenkel gleich bleiben.)",
      "Man verlängere AB, AC geradlinig zu BD, CE.",
      "Auf BD nehme man einen beliebigen Punkt F an (er lässt sich ziehen) und trage auf der größeren AE die Strecke AG gleich AF ab.",
      "Man ziehe FC, GB.",
      "Da AF gleich AG und AB gleich AC ist, sind die zwei Seiten FA, AC den zwei Seiten GA, AB gleich, und sie umfassen den gemeinsamen Winkel FAG; also ist die Grundlinie FC gleich der Grundlinie GB, das Dreieck AFC gleich dem Dreieck AGB, und die übrigen Winkel sind gleich: ACF gleich ABG und AFC gleich AGB.",
      "Da die ganze AF gleich der ganzen AG ist und davon AB gleich AC, ist der Rest BF gleich dem Rest CG.",
      "Wie gezeigt, ist FC gleich GB; also sind die zwei Seiten BF, FC den zwei Seiten CG, GB gleich, der Winkel BFC ist gleich dem Winkel CGB, und die Grundlinie BC ist gemeinsam; also ist das Dreieck BFC gleich dem Dreieck CGB, und die übrigen Winkel sind gleich: FBC gleich GCB und BCF gleich CBG.",
      "Wie gezeigt, ist der ganze Winkel ABG gleich dem ganzen Winkel ACF, und davon ist der Winkel CBG gleich BCF; also ist der übrige Winkel ABC gleich dem übrigen Winkel ACB, und sie liegen an der Grundlinie. Ferner ist der Winkel FBC gleich GCB, und sie liegen unter der Grundlinie."
    ],
    ru: [
      "Пусть ABC — равнобедренный треугольник, в котором AB равна AC. Утверждается, что углы при основании ABC, ACB равны и что по продолжении равных сторон углы под основанием тоже равны. (При перетаскивании точка C движется по окружности с центром A, поэтому боковые стороны остаются равными.)",
      "Продолжим AB, AC по прямой до BD, CE.",
      "Возьмём на BD произвольную точку F (её можно перетаскивать) и от большей AE отнимем AG, равную AF.",
      "Проведём FC, GB.",
      "Так как AF равна AG, а AB равна AC, то две стороны FA, AC равны двум сторонам GA, AB и заключают общий угол FAG; значит, основание FC равно основанию GB, треугольник AFC равен треугольнику AGB, и остальные углы равны: ACF углу ABG, AFC углу AGB.",
      "Так как вся AF равна всей AG, а из них AB равна AC, то остаток BF равен остатку CG.",
      "Доказано, что FC равна GB; значит, две стороны BF, FC равны двум сторонам CG, GB, угол BFC равен углу CGB, и основание BC у них общее; значит, треугольник BFC равен треугольнику CGB, и остальные углы равны: FBC углу GCB, BCF углу CBG.",
      "Доказано, что весь угол ABG равен всему углу ACF, а из них угол CBG равен BCF; значит, остающийся угол ABC равен остающемуся углу ACB, и они находятся при основании. Также угол FBC равен GCB, и они находятся под основанием."
    ],
    ar: [
      "ليكن ABC مثلثًا متساوي الساقين، فيه AB مساوٍ لـ AC. فنقول: إن زاويتي القاعدة ABC، ACB متساويتان، وإذا أُخرج الضلعان المتساويان كانت الزاويتان تحت القاعدة متساويتين أيضًا. (عند سحب C تتحرك على الدائرة التي مركزها A، فيبقى الضلعان متساويين.)",
      "نُخرج AB، AC على استقامتهما إلى BD، CE.",
      "نأخذ على BD نقطة كيفما اتفق ولتكن F (يمكنك سحبها)، ونفصل من الأعظم AE الخط AG مساويًا لـ AF.",
      "ونصل FC، GB.",
      "لأن AF مساوٍ لـ AG، وAB مساوٍ لـ AC، يكون الضلعان FA، AC مساويين للضلعين GA، AB، ويحيطان بالزاوية المشتركة FAG؛ فالقاعدة FC مساوية للقاعدة GB، والمثلث AFC مساوٍ للمثلث AGB، والزاويتان الباقيتان متساويتان: ACF للزاوية ABG، وAFC للزاوية AGB.",
      "ولأن AF بكامله مساوٍ لـ AG بكامله، ومنهما AB مساوٍ لـ AC، يبقى BF مساويًا للباقي CG.",
      "وقد تبيّن أن FC مساوٍ لـ GB؛ فالضلعان BF، FC مساويان للضلعين CG، GB، والزاوية BFC مساوية للزاوية CGB، والقاعدة BC مشتركة؛ فالمثلث BFC مساوٍ للمثلث CGB، والزاويتان الباقيتان متساويتان: FBC للزاوية GCB، وBCF للزاوية CBG.",
      "وقد تبيّن أن الزاوية ABG بكاملها مساوية للزاوية ACF بكاملها، ومنهما الزاوية CBG مساوية لـ BCF؛ فالزاوية الباقية ABC مساوية للزاوية الباقية ACB، وهما على القاعدة. وتبيّن أيضًا أن الزاوية FBC مساوية لـ GCB، وهما تحت القاعدة."
    ],
    hi: [
      "मान लीजिए ABC एक समद्विबाहु त्रिभुज है जिसमें AB, AC के बराबर है। दावा: आधार-कोण ABC, ACB बराबर हैं, और बराबर भुजाओं को बढ़ाने पर आधार के नीचे के कोण भी बराबर होते हैं। (C को खींचने पर वह A केंद्र वाले वृत्त पर चलता है, इसलिए दोनों भुजाएँ बराबर रहती हैं।)",
      "AB, AC को सीध में बढ़ाकर BD, CE बनाइए।",
      "BD पर कोई भी बिंदु F लीजिए (इसे खींचा जा सकता है), और बड़ी AE में से AF के बराबर AG काटिए।",
      "FC, GB मिलाइए।",
      "चूँकि AF, AG के बराबर है और AB, AC के, इसलिए दो भुजाएँ FA, AC दो भुजाओं GA, AB के बराबर हैं और उभयनिष्ठ कोण FAG बनाती हैं; अतः आधार FC आधार GB के बराबर है, त्रिभुज AFC त्रिभुज AGB के बराबर है, और शेष कोण बराबर हैं: ACF, ABG के और AFC, AGB के।",
      "चूँकि पूरा AF पूरे AG के बराबर है, और इनमें AB, AC के बराबर है, इसलिए शेष BF शेष CG के बराबर है।",
      "FC, GB के बराबर सिद्ध हो चुका है; अतः दो भुजाएँ BF, FC दो भुजाओं CG, GB के बराबर हैं, कोण BFC कोण CGB के बराबर है, और आधार BC उभयनिष्ठ है; इसलिए त्रिभुज BFC त्रिभुज CGB के बराबर है, और शेष कोण बराबर हैं: FBC, GCB के और BCF, CBG के।",
      "पूरा कोण ABG पूरे कोण ACF के बराबर सिद्ध हुआ, और इनमें कोण CBG कोण BCF के बराबर है; इसलिए शेष कोण ABC शेष कोण ACB के बराबर है, और ये आधार पर हैं। साथ ही कोण FBC कोण GCB के बराबर है, और ये आधार के नीचे हैं।"
    ],
    ja: [
      "ABC を AB が AC に等しい二等辺三角形とする。主張：底角 ABC、ACB は等しく、等しい辺を延長すれば底辺の下の角も等しい。（C をドラッグすると A を中心とする円の上を動くので、2 辺は等しいままです。）",
      "AB、AC を一直線に延長して BD、CE とする。",
      "BD 上に任意の点 F をとり（ドラッグできます）、大きい AE から AF に等しい AG を切り取る。",
      "FC、GB を結ぶ。",
      "AF は AG に、AB は AC に等しいから、2 辺 FA、AC は 2 辺 GA、AB に等しく、共通の角 FAG をはさむ。よって底辺 FC は底辺 GB に等しく、三角形 AFC は三角形 AGB に等しく、残りの角も等しい。すなわち ACF は ABG に、AFC は AGB に等しい。",
      "AF 全体は AG 全体に等しく、そのうち AB は AC に等しいから、残りの BF は残りの CG に等しい。",
      "FC が GB に等しいことはすでに示した。よって 2 辺 BF、FC は 2 辺 CG、GB に等しく、角 BFC は角 CGB に等しく、底辺 BC は共通である。よって三角形 BFC は三角形 CGB に等しく、残りの角も等しい。すなわち FBC は GCB に、BCF は CBG に等しい。",
      "角 ABG 全体は角 ACF 全体に等しく、そのうち角 CBG は BCF に等しいことが示された。よって残りの角 ABC は残りの角 ACB に等しく、これらは底辺にある。また角 FBC は GCB に等しく、これらは底辺の下にある。"
    ]
  }
});
