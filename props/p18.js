// Proposition I.18
PROP(18, {
  vb: [0, 0, 720, 420],
  build(S) {
    S.free("A", 200, 80); S.free("B", 90, 340); S.free("C", 640, 340);
    // AD = AB, cut off from AC (clamped so the figure survives if AC is dragged shorter than AB)
    S.pt("D", g => V.add(g("A"), V.mul(V.unit(V.sub(g("C"), g("A"))), Math.min(V.dist(g("A"), g("B")), 0.92 * V.dist(g("A"), g("C"))))), { ld: { x: 0.5, y: -1 } });
    S.seg("AB", "A", "B", { st: "red" }); S.seg("BC", "B", "C");
    S.seg("AD", "A", "D", { st: "red" }); S.seg("DC", "D", "C");
    S.seg("BD", "B", "D", { st: "aux" });
    S.ang("aADB", "A", "D", "B", { st: "blue", r: 30 });
    S.ang("aABD", "A", "B", "D", { st: "blue", r: 30 });
    S.ang("aDCB", "D", "C", "B", { st: "yel", r: 46 });
    S.ang("aABC", "A", "B", "C", { st: "yel", r: 52 });
  },
  steps: [
    { show: ["A", "B", "C", "AB", "BC", "AD", "DC"] },
    { show: ["D"], hl: ["AB", "AD"], why: ["I.3"] },
    { show: ["BD"], why: ["P1"] },
    { show: ["aADB", "aDCB"], why: ["I.16"] },
    { show: ["aABD"], why: ["I.5"] },
    { show: ["aABC"], hide: ["aADB"], why: ["A5"] }
  ],
  text: {
    zh: [
      "设 ABC 是三角形，边 AC 大于边 AB。断言：∠ABC 大于 ∠BCA。（拖动顶点时保持 AC 比 AB 长。）",
      "从 AC 上截取 AD 等于 AB。",
      "连接 BD。",
      "因为 ∠ADB 是三角形 BCD 的外角，所以它大于内对角 ∠DCB。",
      "但因为边 AB 等于 AD，所以 ∠ADB 等于 ∠ABD。于是 ∠ABD 也大于 ∠ACB。",
      "所以 ∠ABC 更大于 ∠ACB。"
    ],
    en: [
      "Let ABC be a triangle having the side AC greater than the side AB. The claim: the angle ABC is also greater than the angle BCA. (Drag the vertices, keeping AC longer than AB.)",
      "From AC let AD be cut off equal to AB.",
      "Let BD be joined.",
      "Since the angle ADB is an exterior angle of the triangle BCD, it is greater than the interior and opposite angle DCB.",
      "But the angle ADB is equal to the angle ABD, since the side AB is equal to AD; therefore the angle ABD is also greater than the angle ACB.",
      "Therefore the angle ABC is much greater than the angle ACB."
    ],
    es: [
      "Sea ABC un triángulo que tiene el lado AC mayor que el lado AB. Se afirma que el ángulo ABC es también mayor que el ángulo BCA. (Arrastra los vértices manteniendo AC más largo que AB.)",
      "De AC córtese AD igual a AB.",
      "Trácese BD.",
      "Como el ángulo ADB es un ángulo exterior del triángulo BCD, es mayor que el ángulo interior y opuesto DCB.",
      "Pero el ángulo ADB es igual al ángulo ABD, porque el lado AB es igual a AD; por tanto el ángulo ABD es también mayor que el ángulo ACB.",
      "Así pues, el ángulo ABC es mucho mayor que el ángulo ACB."
    ],
    fr: [
      "Soit ABC un triangle ayant le côté AC plus grand que le côté AB. Je dis que l'angle ABC est aussi plus grand que l'angle BCA. (Déplacez les sommets en gardant AC plus long que AB.)",
      "Retranchons de AC la droite AD égale à AB.",
      "Menons BD.",
      "Puisque l'angle ADB est un angle extérieur du triangle BCD, il est plus grand que l'angle intérieur et opposé DCB.",
      "Mais l'angle ADB est égal à l'angle ABD, puisque le côté AB est égal à AD ; donc l'angle ABD est aussi plus grand que l'angle ACB.",
      "Donc l'angle ABC est beaucoup plus grand que l'angle ACB."
    ],
    de: [
      "Im Dreieck ABC sei die Seite AC größer als die Seite AB. Behauptung: Auch der Winkel ABC ist größer als der Winkel BCA. (Ziehen Sie die Ecken, aber lassen Sie AC länger als AB.)",
      "Von AC schneide man AD gleich AB ab.",
      "Man ziehe BD.",
      "Da der Winkel ADB ein Außenwinkel des Dreiecks BCD ist, ist er größer als der innen gegenüberliegende Winkel DCB.",
      "Der Winkel ADB ist aber gleich dem Winkel ABD, da die Seite AB gleich AD ist; also ist auch der Winkel ABD größer als der Winkel ACB.",
      "Also ist der Winkel ABC erst recht größer als der Winkel ACB."
    ],
    ru: [
      "Пусть в треугольнике ABC сторона AC больше стороны AB. Утверждается, что и угол ABC больше угла BCA. (Перетаскивайте вершины, оставляя AC длиннее AB.)",
      "Отложим на AC отрезок AD, равный AB.",
      "Проведём BD.",
      "Так как угол ADB — внешний угол треугольника BCD, он больше внутреннего противолежащего угла DCB.",
      "Но угол ADB равен углу ABD, поскольку сторона AB равна AD; значит, и угол ABD больше угла ACB.",
      "Тем более угол ABC больше угла ACB."
    ],
    ar: [
      "ليكن ABC مثلثًا ضلعه AC أعظم من ضلعه AB. فنقول: إن الزاوية ABC أيضًا أعظم من الزاوية BCA. (اسحب الرؤوس مع إبقاء AC أطول من AB.)",
      "نفصل من AC الخط AD مساويًا لـ AB.",
      "ونصل BD.",
      "ولأن الزاوية ADB زاوية خارجة من المثلث BCD، فهي أعظم من الزاوية الداخلة المقابلة DCB.",
      "لكن الزاوية ADB مساوية للزاوية ABD لأن الضلع AB مساوٍ لـ AD؛ فالزاوية ABD أيضًا أعظم من الزاوية ACB.",
      "فالزاوية ABC أعظم كثيرًا من الزاوية ACB."
    ],
    hi: [
      "मान लीजिए त्रिभुज ABC में भुजा AC भुजा AB से बड़ी है। दावा: कोण ABC भी कोण BCA से बड़ा है। (शीर्षों को खींचिए, पर AC को AB से लंबा रखिए।)",
      "AC में से AB के बराबर AD काटिए।",
      "BD मिलाइए।",
      "चूँकि कोण ADB त्रिभुज BCD का बहिष्कोण है, यह अंतः सम्मुख कोण DCB से बड़ा है।",
      "पर कोण ADB कोण ABD के बराबर है, क्योंकि भुजा AB, AD के बराबर है; अतः कोण ABD भी कोण ACB से बड़ा है।",
      "इसलिए कोण ABC कोण ACB से और भी बड़ा है।"
    ],
    ja: [
      "三角形 ABC において辺 AC が辺 AB より大きいとする。主張：角 ABC も角 BCA より大きい。（AC を AB より長く保ったまま頂点をドラッグしてみてください。）",
      "AC から AB に等しく AD を切り取る。",
      "BD を結ぶ。",
      "角 ADB は三角形 BCD の外角だから、内対角 DCB より大きい。",
      "しかし辺 AB は AD に等しいから、角 ADB は角 ABD に等しい。よって角 ABD も角 ACB より大きい。",
      "ゆえに角 ABC はなおさら角 ACB より大きい。"
    ]
  }
});
