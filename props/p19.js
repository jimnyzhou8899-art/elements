// Proposition I.19
PROP(19, {
  vb: [0, 0, 720, 420],
  build(S) {
    S.free("A", 200, 80); S.free("B", 90, 340); S.free("C", 640, 340);
    S.seg("AB", "A", "B", { st: "red" }); S.seg("BC", "B", "C"); S.seg("CA", "C", "A", { st: "blue" });
    S.ang("aABC", "A", "B", "C", { st: "yel", r: 46 });
    S.ang("aBCA", "B", "C", "A", { st: "yel", r: 46 });
  },
  steps: [
    { show: ["A", "B", "C", "AB", "BC", "CA", "aABC", "aBCA"] },
    { hl: ["AB", "CA"] },
    { hl: ["AB", "CA"], why: ["I.5"] },
    { hl: ["AB", "CA"], why: ["I.18"] },
    { hl: ["CA"] }
  ],
  text: {
    zh: [
      "设 ABC 是三角形，∠ABC 大于 ∠BCA。断言：边 AC 也大于边 AB。（拖动顶点，保持 ∠ABC 较大。）",
      "如果不然，AC 或者等于 AB，或者小于 AB。",
      "AC 不等于 AB，否则 ∠ABC 就等于 ∠ACB，而事实并非如此。",
      "AC 也不小于 AB，否则 ∠ABC 就小于 ∠ACB，而事实并非如此。",
      "所以 AC 大于 AB。"
    ],
    en: [
      "Let ABC be a triangle having the angle ABC greater than the angle BCA. The claim: the side AC is also greater than the side AB. (Drag the vertices, keeping the angle ABC the greater.)",
      "For if not, AC is either equal to AB or less.",
      "Now AC is not equal to AB, for then the angle ABC would be equal to the angle ACB; but it is not.",
      "Neither is AC less than AB, for then the angle ABC would be less than the angle ACB; but it is not.",
      "Therefore AC is greater than AB."
    ],
    es: [
      "Sea ABC un triángulo que tiene el ángulo ABC mayor que el ángulo BCA. Se afirma que el lado AC es también mayor que el lado AB. (Arrastra los vértices manteniendo mayor el ángulo ABC.)",
      "Si no, AC es o igual a AB o menor.",
      "Ahora bien, AC no es igual a AB, pues entonces el ángulo ABC sería igual al ángulo ACB; pero no lo es.",
      "Tampoco es AC menor que AB, pues entonces el ángulo ABC sería menor que el ángulo ACB; pero no lo es.",
      "Por tanto AC es mayor que AB."
    ],
    fr: [
      "Soit ABC un triangle ayant l'angle ABC plus grand que l'angle BCA. Je dis que le côté AC est aussi plus grand que le côté AB. (Déplacez les sommets en gardant l'angle ABC le plus grand.)",
      "Sinon, AC est ou égal à AB, ou plus petit.",
      "Or AC n'est pas égal à AB, car alors l'angle ABC serait égal à l'angle ACB ; ce qui n'est pas.",
      "AC n'est pas non plus plus petit que AB, car alors l'angle ABC serait plus petit que l'angle ACB ; ce qui n'est pas.",
      "Donc AC est plus grand que AB."
    ],
    de: [
      "Im Dreieck ABC sei der Winkel ABC größer als der Winkel BCA. Behauptung: Auch die Seite AC ist größer als die Seite AB. (Ziehen Sie die Ecken, aber lassen Sie den Winkel ABC den größeren.)",
      "Wäre es nicht so, so wäre AC entweder gleich AB oder kleiner.",
      "Gleich AB ist AC nicht, denn sonst wäre der Winkel ABC gleich dem Winkel ACB; das ist er aber nicht.",
      "Kleiner als AB ist AC auch nicht, denn sonst wäre der Winkel ABC kleiner als der Winkel ACB; das ist er aber nicht.",
      "Also ist AC größer als AB."
    ],
    ru: [
      "Пусть в треугольнике ABC угол ABC больше угла BCA. Утверждается, что и сторона AC больше стороны AB. (Перетаскивайте вершины, оставляя угол ABC бо́льшим.)",
      "Если нет, то AC либо равна AB, либо меньше.",
      "Но AC не равна AB, ибо тогда угол ABC был бы равен углу ACB; а он не равен.",
      "И AC не меньше AB, ибо тогда угол ABC был бы меньше угла ACB; а он не меньше.",
      "Значит, AC больше AB."
    ],
    ar: [
      "ليكن ABC مثلثًا زاويته ABC أعظم من زاويته BCA. فنقول: إن الضلع AC أيضًا أعظم من الضلع AB. (اسحب الرؤوس مع إبقاء الزاوية ABC هي العظمى.)",
      "وإلا فإن AC إما مساوٍ لـ AB وإما أصغر منه.",
      "وليس AC مساويًا لـ AB، وإلا لكانت الزاوية ABC مساوية للزاوية ACB، وليست كذلك.",
      "ولا AC أصغر من AB، وإلا لكانت الزاوية ABC أصغر من الزاوية ACB، وليست كذلك.",
      "فـ AC أعظم من AB."
    ],
    hi: [
      "मान लीजिए त्रिभुज ABC में कोण ABC कोण BCA से बड़ा है। दावा: भुजा AC भी भुजा AB से बड़ी है। (शीर्षों को खींचिए, पर कोण ABC को बड़ा रखिए।)",
      "यदि नहीं, तो AC या तो AB के बराबर है या उससे छोटी।",
      "AC, AB के बराबर नहीं है, नहीं तो कोण ABC कोण ACB के बराबर होता; पर ऐसा नहीं है।",
      "AC, AB से छोटी भी नहीं है, नहीं तो कोण ABC कोण ACB से छोटा होता; पर ऐसा नहीं है।",
      "अतः AC, AB से बड़ी है।"
    ],
    ja: [
      "三角形 ABC において角 ABC が角 BCA より大きいとする。主張：辺 AC も辺 AB より大きい。（角 ABC を大きいままにして頂点をドラッグしてみてください。）",
      "そうでなければ、AC は AB に等しいか、より小さい。",
      "AC は AB に等しくない。もしそうなら角 ABC は角 ACB に等しいはずだが、そうではない。",
      "AC は AB より小さくもない。もしそうなら角 ABC は角 ACB より小さいはずだが、そうではない。",
      "よって AC は AB より大きい。"
    ]
  }
});
