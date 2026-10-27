// Proposition I.20
PROP(20, {
  vb: [0, 0, 720, 470],
  build(S) {
    S.free("B", 80, 420); S.free("C", 540, 420); S.free("A", 230, 300);
    S.pt("D", g => V.add(g("A"), V.mul(V.unit(V.sub(g("A"), g("B"))), V.dist(g("A"), g("C")))), { ld: { x: 0, y: -1 } });
    S.seg("BA", "B", "A", { st: "yel" }); S.seg("BC", "B", "C", { st: "blue" });
    S.seg("AC", "A", "C", { st: "red" }); S.seg("AD", "A", "D", { st: "red" });
    S.seg("DC", "D", "C", { st: "aux" });
    S.ang("aADC", "A", "D", "C", { st: "blue", r: 34 });
    S.ang("aACD", "A", "C", "D", { st: "blue", r: 50 });
    S.ang("aBCD", "B", "C", "D", { st: "yel", r: 34 });
  },
  steps: [
    { show: ["A", "B", "C", "BA", "BC", "AC"] },
    { show: ["D", "AD"], hl: ["AD", "AC"], why: ["P2", "I.3"] },
    { show: ["DC"], why: ["P1"] },
    { show: ["aADC", "aACD"], why: ["I.5"] },
    { show: ["aBCD"], why: ["A5"] },
    { hl: ["BA", "AD", "BC"], why: ["I.19"] },
    { hide: ["aADC", "aACD", "aBCD"], hl: ["BA", "AC", "BC"] }
  ],
  text: {
    zh: [
      "设 ABC 是三角形。断言：三角形 ABC 中任意两边之和大于第三边，例如 BA、AC 之和大于 BC。（拖动顶点试试。）",
      "延长 BA 到点 D，使 AD 等于 CA。",
      "连接 DC。",
      "因为 DA 等于 AC，所以 ∠ADC 等于 ∠ACD。",
      "而 ∠BCD 大于 ∠ACD，所以 ∠BCD 大于 ∠ADC。",
      "在三角形 DCB 中，∠BCD 大于 ∠BDC，而大角所对的边较大，所以 DB 大于 BC。",
      "而 DB 等于 BA 与 AC 之和，所以 BA、AC 之和大于 BC。同理，AB、BC 之和大于 CA，BC、CA 之和大于 AB。"
    ],
    en: [
      "Let ABC be a triangle. The claim: in the triangle ABC any two sides taken together are greater than the remaining one; for example BA, AC are greater than BC. (Try dragging the vertices.)",
      "Let BA be produced to the point D, and let AD be made equal to CA.",
      "Let DC be joined.",
      "Since DA is equal to AC, the angle ADC is equal to the angle ACD.",
      "But the angle BCD is greater than the angle ACD; therefore the angle BCD is greater than the angle ADC.",
      "In the triangle DCB the angle BCD is greater than the angle BDC, and the greater angle is subtended by the greater side; therefore DB is greater than BC.",
      "But DB is equal to BA, AC together; therefore BA, AC are greater than BC. Similarly AB, BC are greater than CA, and BC, CA are greater than AB."
    ],
    es: [
      "Sea ABC un triángulo. Se afirma que en el triángulo ABC dos lados cualesquiera juntos son mayores que el restante; por ejemplo BA, AC son mayores que BC. (Prueba a arrastrar los vértices.)",
      "Prolónguese BA hasta el punto D, y hágase AD igual a CA.",
      "Trácese DC.",
      "Como DA es igual a AC, el ángulo ADC es igual al ángulo ACD.",
      "Pero el ángulo BCD es mayor que el ángulo ACD; por tanto el ángulo BCD es mayor que el ángulo ADC.",
      "En el triángulo DCB el ángulo BCD es mayor que el ángulo BDC, y al ángulo mayor lo subtiende el lado mayor; por tanto DB es mayor que BC.",
      "Pero DB es igual a BA, AC juntos; por tanto BA, AC son mayores que BC. Del mismo modo AB, BC son mayores que CA, y BC, CA son mayores que AB."
    ],
    fr: [
      "Soit ABC un triangle. Je dis que dans le triangle ABC deux côtés quelconques, pris ensemble, sont plus grands que le troisième ; par exemple BA, AC sont plus grands que BC. (Essayez de déplacer les sommets.)",
      "Prolongeons BA jusqu'au point D, en faisant AD égale à CA.",
      "Menons DC.",
      "Puisque DA est égale à AC, l'angle ADC est égal à l'angle ACD.",
      "Mais l'angle BCD est plus grand que l'angle ACD ; donc l'angle BCD est plus grand que l'angle ADC.",
      "Dans le triangle DCB, l'angle BCD est plus grand que l'angle BDC, et le plus grand angle est sous-tendu par le plus grand côté ; donc DB est plus grande que BC.",
      "Mais DB est égale à BA, AC pris ensemble ; donc BA, AC sont plus grands que BC. De même AB, BC sont plus grands que CA, et BC, CA plus grands que AB."
    ],
    de: [
      "Es sei ABC ein Dreieck. Behauptung: Im Dreieck ABC sind je zwei Seiten zusammen größer als die dritte, zum Beispiel BA, AC zusammen größer als BC. (Ziehen Sie die Ecken.)",
      "Man verlängere BA bis zum Punkt D und mache AD gleich CA.",
      "Man ziehe DC.",
      "Da DA gleich AC ist, ist der Winkel ADC gleich dem Winkel ACD.",
      "Der Winkel BCD ist aber größer als der Winkel ACD; also ist der Winkel BCD größer als der Winkel ADC.",
      "Im Dreieck DCB ist der Winkel BCD größer als der Winkel BDC, und dem größeren Winkel liegt die größere Seite gegenüber; also ist DB größer als BC.",
      "DB ist aber gleich BA, AC zusammen; also sind BA, AC zusammen größer als BC. Ebenso sind AB, BC größer als CA und BC, CA größer als AB."
    ],
    ru: [
      "Пусть ABC — треугольник. Утверждается, что в треугольнике ABC любые две стороны, взятые вместе, больше оставшейся; например, BA, AC вместе больше BC. (Попробуйте перетащить вершины.)",
      "Продолжим BA до точки D и отложим AD, равную CA.",
      "Проведём DC.",
      "Так как DA равна AC, угол ADC равен углу ACD.",
      "Но угол BCD больше угла ACD; значит, угол BCD больше угла ADC.",
      "В треугольнике DCB угол BCD больше угла BDC, а против большего угла лежит большая сторона; значит, DB больше BC.",
      "Но DB равна BA и AC вместе; значит, BA, AC вместе больше BC. Подобным же образом AB, BC больше CA, а BC, CA больше AB."
    ],
    ar: [
      "ليكن ABC مثلثًا. فنقول: إن كل ضلعين من المثلث ABC مجموعهما أعظم من الضلع الباقي؛ فمثلًا BA، AC معًا أعظم من BC. (جرّب سحب الرؤوس.)",
      "نُخرج BA إلى النقطة D، ونجعل AD مساويًا لـ CA.",
      "ونصل DC.",
      "لأن DA مساوٍ لـ AC، فالزاوية ADC مساوية للزاوية ACD.",
      "لكن الزاوية BCD أعظم من الزاوية ACD؛ فالزاوية BCD أعظم من الزاوية ADC.",
      "ففي المثلث DCB الزاوية BCD أعظم من الزاوية BDC، والزاوية العظمى يوترها الضلع الأعظم؛ فـ DB أعظم من BC.",
      "لكن DB مساوٍ لمجموع BA، AC؛ فـ BA، AC معًا أعظم من BC. وبمثل ذلك AB، BC أعظم من CA، وBC، CA أعظم من AB."
    ],
    hi: [
      "मान लीजिए ABC एक त्रिभुज है। दावा: त्रिभुज ABC की कोई भी दो भुजाएँ मिलकर तीसरी से बड़ी हैं; उदाहरण के लिए BA, AC मिलकर BC से बड़ी हैं। (शीर्षों को खींचकर देखिए।)",
      "BA को बिंदु D तक बढ़ाइए, और AD को CA के बराबर बनाइए।",
      "DC मिलाइए।",
      "चूँकि DA, AC के बराबर है, इसलिए कोण ADC कोण ACD के बराबर है।",
      "पर कोण BCD कोण ACD से बड़ा है; अतः कोण BCD कोण ADC से बड़ा है।",
      "त्रिभुज DCB में कोण BCD कोण BDC से बड़ा है, और बड़े कोण के सामने बड़ी भुजा होती है; अतः DB, BC से बड़ी है।",
      "पर DB, BA और AC के योग के बराबर है; अतः BA, AC मिलकर BC से बड़ी हैं। इसी प्रकार AB, BC मिलकर CA से, और BC, CA मिलकर AB से बड़ी हैं।"
    ],
    ja: [
      "ABC を三角形とする。主張：三角形 ABC のどの 2 辺の和も残りの 1 辺より大きい。たとえば BA、AC の和は BC より大きい。（頂点をドラッグしてみてください。）",
      "BA を点 D まで延長し、AD を CA に等しくする。",
      "DC を結ぶ。",
      "DA は AC に等しいから、角 ADC は角 ACD に等しい。",
      "しかし角 BCD は角 ACD より大きい。よって角 BCD は角 ADC より大きい。",
      "三角形 DCB において角 BCD は角 BDC より大きく、大きい角には大きい辺が対する。よって DB は BC より大きい。",
      "しかし DB は BA と AC の和に等しい。よって BA、AC の和は BC より大きい。同様に AB、BC の和は CA より、BC、CA の和は AB より大きい。"
    ]
  }
});
