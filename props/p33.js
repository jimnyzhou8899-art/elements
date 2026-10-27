// Proposition I.33
PROP(33, {
  vb: [0, 0, 720, 400],
  build(S) {
    S.free("A", 180, 90); S.free("B", 520, 90); S.free("C", 110, 320, { ld: { x: 0, y: 1 } });
    // CD equal and parallel to AB, in the same direction
    S.pt("D", g => V.add(g("C"), V.sub(g("B"), g("A"))), { ld: { x: 0, y: 1 } });
    S.seg("AB", "A", "B", { st: "red" }); S.seg("CD", "C", "D", { st: "red" });
    S.seg("AC", "A", "C", { st: "blue" }); S.seg("BD", "B", "D", { st: "blue" });
    S.seg("BC", "B", "C", { st: "aux" });
    S.ang("aABC", "A", "B", "C", { st: "yel", r: 40 }); S.ang("aBCD", "B", "C", "D", { st: "yel", r: 40 });
    S.ang("aACB", "A", "C", "B", { st: "red", r: 30 }); S.ang("aCBD", "C", "B", "D", { st: "red", r: 30 });
  },
  steps: [
    { show: ["A", "B", "C", "D", "AB", "CD", "AC", "BD"] },
    { show: ["BC"], why: ["P1"] },
    { show: ["aABC", "aBCD"], hl: ["AB", "CD", "BC"], why: ["I.29"] },
    { show: ["aACB", "aCBD"], hl: ["AC", "BD"], why: ["I.4"] },
    { hide: ["aABC", "aBCD"], hl: ["AC", "BD"], why: ["I.27"] }
  ],
  text: {
    zh: [
      "设 AB、CD 是相等且平行的两条直线，直线 AC、BD 在同一方向连接它们的端点。断言：AC、BD 也相等且平行。（拖动 A、B、C 试试。）",
      "连接 BC。",
      "因为 AB 平行于 CD，而 BC 落在它们上面，所以内错角 ∠ABC、∠BCD 相等。",
      "因为 AB 等于 CD，BC 是公共边，夹角 ∠ABC 等于 ∠BCD，所以底 AC 等于底 BD，三角形 ABC 全等于三角形 DCB，∠ACB 等于 ∠CBD。",
      "因为直线 BC 落在两条直线 AC、BD 上，所成的内错角 ∠ACB、∠CBD 相等，所以 AC 平行于 BD。而前面已证 AC 等于 BD。"
    ],
    en: [
      "Let AB, CD be equal and parallel, and let the straight lines AC, BD join them at the extremities in the same directions. The claim: AC, BD are also equal and parallel. (Try dragging A, B, C.)",
      "Let BC be joined.",
      "Since AB is parallel to CD, and BC has fallen upon them, the alternate angles ABC, BCD are equal to one another.",
      "Since AB is equal to CD and BC is common, and the angle ABC is equal to the angle BCD, the base AC is equal to the base BD, the triangle ABC is equal to the triangle DCB, and the angle ACB is equal to the angle CBD.",
      "Since the straight line BC falling on the two straight lines AC, BD makes the alternate angles ACB, CBD equal, AC is parallel to BD. And AC was also proved equal to BD."
    ],
    es: [
      "Sean AB, CD iguales y paralelas, y unan sus extremos en las mismas direcciones las rectas AC, BD. Se afirma que AC, BD son también iguales y paralelas. (Prueba a arrastrar A, B, C.)",
      "Trácese BC.",
      "Como AB es paralela a CD y BC ha caído sobre ellas, los ángulos alternos ABC, BCD son iguales entre sí.",
      "Como AB es igual a CD y BC es común, y el ángulo ABC es igual al ángulo BCD, la base AC es igual a la base BD, el triángulo ABC es igual al triángulo DCB, y el ángulo ACB es igual al ángulo CBD.",
      "Como la recta BC, al caer sobre las dos rectas AC, BD, forma los ángulos alternos ACB, CBD iguales, AC es paralela a BD. Ya se demostró además que AC es igual a BD."
    ],
    fr: [
      "Soient AB, CD égales et parallèles, et que les droites AC, BD joignent leurs extrémités dans le même sens. Je dis que AC, BD sont aussi égales et parallèles. (Essayez de déplacer A, B, C.)",
      "Menons BC.",
      "Puisque AB est parallèle à CD et que BC tombe sur elles, les angles alternes ABC, BCD sont égaux entre eux.",
      "Puisque AB est égale à CD et que BC est commune, et que l'angle ABC est égal à l'angle BCD, la base AC est égale à la base BD, le triangle ABC est égal au triangle DCB, et l'angle ACB est égal à l'angle CBD.",
      "Puisque la droite BC, tombant sur les deux droites AC, BD, fait les angles alternes ACB, CBD égaux, AC est parallèle à BD. Et on a aussi démontré que AC est égale à BD."
    ],
    de: [
      "AB, CD seien gleich und parallel, und die Geraden AC, BD mögen ihre Endpunkte auf derselben Seite verbinden. Behauptung: Auch AC, BD sind gleich und parallel. (Ziehen Sie A, B, C.)",
      "Man ziehe BC.",
      "Da AB parallel zu CD ist und BC auf sie fällt, sind die Wechselwinkel ABC, BCD einander gleich.",
      "Da AB gleich CD und BC gemeinsam ist und der Winkel ABC gleich dem Winkel BCD, ist die Grundlinie AC gleich der Grundlinie BD, das Dreieck ABC gleich dem Dreieck DCB und der Winkel ACB gleich dem Winkel CBD.",
      "Da die Gerade BC, die auf die zwei Geraden AC, BD fällt, die Wechselwinkel ACB, CBD gleich macht, ist AC parallel zu BD. Und es wurde auch gezeigt, dass AC gleich BD ist."
    ],
    ru: [
      "Пусть AB, CD равны и параллельны, и пусть прямые AC, BD соединяют их концы в одну и ту же сторону. Утверждается, что и AC, BD равны и параллельны. (Попробуйте перетащить A, B, C.)",
      "Проведём BC.",
      "Так как AB параллельна CD, а BC падает на них, накрест лежащие углы ABC, BCD равны между собой.",
      "Так как AB равна CD, BC общая, и угол ABC равен углу BCD, то основание AC равно основанию BD, треугольник ABC равен треугольнику DCB, и угол ACB равен углу CBD.",
      "Так как прямая BC, падая на две прямые AC, BD, образует равные накрест лежащие углы ACB, CBD, то AC параллельна BD. А что AC равна BD, уже доказано."
    ],
    ar: [
      "ليكن AB، CD متساويين متوازيين، وليصل الخطان المستقيمان AC، BD طرفيهما في جهة واحدة. فنقول: إن AC، BD أيضًا متساويان متوازيان. (جرّب سحب A، B، C.)",
      "نصل BC.",
      "لأن AB موازٍ لـ CD، وقد وقع عليهما BC، فالزاويتان المتبادلتان ABC، BCD متساويتان.",
      "لأن AB مساوٍ لـ CD، وBC مشترك، والزاوية ABC مساوية للزاوية BCD، فالقاعدة AC مساوية للقاعدة BD، والمثلث ABC مساوٍ للمثلث DCB، والزاوية ACB مساوية للزاوية CBD.",
      "ولأن الخط BC الواقع على الخطين AC، BD جعل الزاويتين المتبادلتين ACB، CBD متساويتين، فـ AC موازٍ لـ BD. وقد تبيّن أن AC مساوٍ لـ BD."
    ],
    hi: [
      "मान लीजिए AB, CD बराबर और समांतर हैं, और सरल रेखाएँ AC, BD उनके सिरों को एक ही दिशा में जोड़ती हैं। दावा: AC, BD भी बराबर और समांतर हैं। (A, B, C को खींचकर देखिए।)",
      "BC मिलाइए।",
      "चूँकि AB, CD के समांतर है और BC उन पर पड़ती है, इसलिए एकांतर कोण ABC, BCD परस्पर बराबर हैं।",
      "चूँकि AB, CD के बराबर है और BC उभयनिष्ठ है, और कोण ABC कोण BCD के बराबर है, इसलिए आधार AC आधार BD के बराबर है, त्रिभुज ABC त्रिभुज DCB के बराबर है, और कोण ACB कोण CBD के बराबर है।",
      "चूँकि सरल रेखा BC दो सरल रेखाओं AC, BD पर पड़कर एकांतर कोण ACB, CBD बराबर बनाती है, इसलिए AC, BD के समांतर है। और AC, BD के बराबर भी सिद्ध हो चुकी है।"
    ],
    ja: [
      "AB、CD を等しく平行な 2 直線とし、直線 AC、BD が同じ向きにその端を結ぶとする。主張：AC、BD も等しく平行である。（A、B、C をドラッグしてみてください。）",
      "BC を結ぶ。",
      "AB は CD に平行で、BC がこれらに交わるから、錯角 ABC、BCD は互いに等しい。",
      "AB は CD に等しく、BC は共通で、角 ABC は角 BCD に等しいから、底辺 AC は底辺 BD に等しく、三角形 ABC は三角形 DCB に等しく、角 ACB は角 CBD に等しい。",
      "直線 BC は 2 直線 AC、BD に交わって錯角 ACB、CBD を等しくするから、AC は BD に平行である。そして AC が BD に等しいことはすでに示された。"
    ]
  }
});
