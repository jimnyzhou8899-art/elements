// Proposition I.34
PROP(34, {
  vb: [0, 0, 720, 400],
  build(S) {
    S.free("A", 180, 90); S.free("B", 540, 90); S.free("C", 110, 320, { ld: { x: 0, y: 1 } });
    S.pt("D", g => V.add(g("C"), V.sub(g("B"), g("A"))), { ld: { x: 0, y: 1 } });
    S.poly("tABC", ["A", "B", "C"], { st: "red" }); S.poly("tDCB", ["D", "C", "B"], { st: "blue" });
    S.seg("AB", "A", "B"); S.seg("CD", "C", "D");
    S.seg("AC", "A", "C"); S.seg("BD", "B", "D");
    S.seg("BC", "B", "C", { st: "aux" });
    S.ang("aABC", "A", "B", "C", { st: "yel", r: 40 }); S.ang("aBCD", "B", "C", "D", { st: "yel", r: 40 });
    S.ang("aACB", "A", "C", "B", { st: "red", r: 30 }); S.ang("aCBD", "C", "B", "D", { st: "red", r: 30 });
    S.ang("aBAC", "B", "A", "C", { st: "blue", r: 30 }); S.ang("aCDB", "C", "D", "B", { st: "blue", r: 30 });
    S.ang("aABD", "A", "B", "D", { st: "yel", r: 54 }); S.ang("aACD", "A", "C", "D", { st: "yel", r: 54 });
  },
  steps: [
    { show: ["A", "B", "C", "D", "AB", "CD", "AC", "BD"] },
    { show: ["BC"], why: ["P1"] },
    { show: ["aABC", "aBCD"], hl: ["AB", "CD", "BC"], why: ["I.29"] },
    { show: ["aACB", "aCBD"], hl: ["AC", "BD", "BC"], why: ["I.29"] },
    { show: ["aBAC", "aCDB"], hl: ["AB", "CD", "AC", "BD"], why: ["I.26"] },
    { show: ["aABD", "aACD"], hide: ["aABC", "aBCD", "aACB", "aCBD", "aBAC", "aCDB"], why: ["A2"] },
    { show: ["tABC", "tDCB"], hide: ["aABD", "aACD"], hl: ["BC"], why: ["I.4"] }
  ],
  text: {
    zh: [
      "设 ACDB 是平行四边形，BC 是它的对角线。断言：平行四边形 ACDB 的对边、对角分别相等，而且对角线 BC 把它平分。（拖动 A、B、C 试试。）",
      "连接对角线 BC。",
      "因为 AB 平行于 CD，而 BC 落在它们上面，所以内错角 ∠ABC、∠BCD 相等。",
      "又因为 AC 平行于 BD，而 BC 落在它们上面，所以内错角 ∠ACB、∠CBD 相等。",
      "于是在三角形 ABC、DCB 中，两个角 ∠ABC、∠BCA 分别等于两个角 ∠DCB、∠CBD，它们之间的边 BC 是公共的，所以 AB 等于 CD，AC 等于 BD，∠BAC 等于 ∠CDB。",
      "又因为 ∠ABC 等于 ∠BCD，∠CBD 等于 ∠ACB，所以整个 ∠ABD 等于整个 ∠ACD。",
      "因为 AB 等于 CD，BC 是公共边，夹角 ∠ABC 等于 ∠BCD，所以三角形 ABC 等于三角形 DCB，对角线 BC 平分平行四边形 ACDB。"
    ],
    en: [
      "Let ACDB be a parallelogrammic area, and BC its diameter. The claim: the opposite sides and angles of the parallelogram ACDB are equal to one another, and the diameter BC bisects it. (Try dragging A, B, C.)",
      "Let the diameter BC be joined.",
      "Since AB is parallel to CD, and the straight line BC has fallen upon them, the alternate angles ABC, BCD are equal to one another.",
      "Again, since AC is parallel to BD, and BC has fallen upon them, the alternate angles ACB, CBD are equal to one another.",
      "So ABC, DCB are two triangles having the two angles ABC, BCA equal to the two angles DCB, CBD respectively, and the side BC between them common; therefore AB is equal to CD, AC to BD, and the angle BAC to the angle CDB.",
      "And since the angle ABC is equal to the angle BCD, and the angle CBD to the angle ACB, the whole angle ABD is equal to the whole angle ACD.",
      "Since AB is equal to CD and BC is common, and the angle ABC is equal to the angle BCD, the triangle ABC is equal to the triangle DCB; therefore the diameter BC bisects the parallelogram ACDB."
    ],
    es: [
      "Sea ACDB un área paralelogramo y BC su diagonal. Se afirma que los lados y ángulos opuestos del paralelogramo ACDB son iguales entre sí, y que la diagonal BC lo divide en dos partes iguales. (Prueba a arrastrar A, B, C.)",
      "Trácese la diagonal BC.",
      "Como AB es paralela a CD y la recta BC ha caído sobre ellas, los ángulos alternos ABC, BCD son iguales entre sí.",
      "De nuevo, como AC es paralela a BD y BC ha caído sobre ellas, los ángulos alternos ACB, CBD son iguales entre sí.",
      "Así, ABC, DCB son dos triángulos que tienen los dos ángulos ABC, BCA iguales respectivamente a los dos ángulos DCB, CBD, y el lado BC entre ellos común; por tanto AB es igual a CD, AC a BD, y el ángulo BAC al ángulo CDB.",
      "Como el ángulo ABC es igual al ángulo BCD, y el ángulo CBD al ángulo ACB, el ángulo entero ABD es igual al ángulo entero ACD.",
      "Como AB es igual a CD y BC es común, y el ángulo ABC es igual al ángulo BCD, el triángulo ABC es igual al triángulo DCB; por tanto la diagonal BC divide el paralelogramo ACDB en dos partes iguales."
    ],
    fr: [
      "Soit ACDB une surface parallélogramme et BC sa diagonale. Je dis que les côtés et les angles opposés du parallélogramme ACDB sont égaux entre eux, et que la diagonale BC le partage en deux parties égales. (Essayez de déplacer A, B, C.)",
      "Menons la diagonale BC.",
      "Puisque AB est parallèle à CD et que la droite BC tombe sur elles, les angles alternes ABC, BCD sont égaux entre eux.",
      "De même, puisque AC est parallèle à BD et que BC tombe sur elles, les angles alternes ACB, CBD sont égaux entre eux.",
      "Ainsi ABC, DCB sont deux triangles ayant les deux angles ABC, BCA égaux respectivement aux deux angles DCB, CBD, et le côté BC adjacent commun ; donc AB est égale à CD, AC à BD, et l'angle BAC à l'angle CDB.",
      "Et puisque l'angle ABC est égal à l'angle BCD, et l'angle CBD à l'angle ACB, l'angle entier ABD est égal à l'angle entier ACD.",
      "Puisque AB est égale à CD et que BC est commune, et que l'angle ABC est égal à l'angle BCD, le triangle ABC est égal au triangle DCB ; donc la diagonale BC partage le parallélogramme ACDB en deux parties égales."
    ],
    de: [
      "Es sei ACDB ein Parallelogramm und BC seine Diagonale. Behauptung: Im Parallelogramm ACDB sind die gegenüberliegenden Seiten und Winkel einander gleich, und die Diagonale BC halbiert es. (Ziehen Sie A, B, C.)",
      "Man ziehe die Diagonale BC.",
      "Da AB parallel zu CD ist und die Gerade BC auf sie fällt, sind die Wechselwinkel ABC, BCD einander gleich.",
      "Ebenso sind, da AC parallel zu BD ist und BC auf sie fällt, die Wechselwinkel ACB, CBD einander gleich.",
      "Also haben die Dreiecke ABC, DCB die zwei Winkel ABC, BCA den zwei Winkeln DCB, CBD gleich und die anliegende Seite BC gemeinsam; also ist AB gleich CD, AC gleich BD und der Winkel BAC gleich dem Winkel CDB.",
      "Und da der Winkel ABC gleich dem Winkel BCD und der Winkel CBD gleich dem Winkel ACB ist, ist der ganze Winkel ABD gleich dem ganzen Winkel ACD.",
      "Da AB gleich CD und BC gemeinsam ist und der Winkel ABC gleich dem Winkel BCD, ist das Dreieck ABC dem Dreieck DCB gleich; also halbiert die Diagonale BC das Parallelogramm ACDB."
    ],
    ru: [
      "Пусть ACDB — параллелограмм, а BC — его диаметр. Утверждается, что противоположные стороны и углы параллелограмма ACDB равны между собой, и диаметр BC делит его пополам. (Попробуйте перетащить A, B, C.)",
      "Проведём диаметр BC.",
      "Так как AB параллельна CD, а прямая BC падает на них, накрест лежащие углы ABC, BCD равны между собой.",
      "Далее, так как AC параллельна BD, а BC падает на них, накрест лежащие углы ACB, CBD равны между собой.",
      "Итак, ABC, DCB — два треугольника, у которых два угла ABC, BCA соответственно равны двум углам DCB, CBD, а сторона BC между ними общая; значит, AB равна CD, AC равна BD, и угол BAC равен углу CDB.",
      "И так как угол ABC равен углу BCD, а угол CBD равен углу ACB, то весь угол ABD равен всему углу ACD.",
      "Так как AB равна CD, BC общая, и угол ABC равен углу BCD, то треугольник ABC равен треугольнику DCB; значит, диаметр BC делит параллелограмм ACDB пополам."
    ],
    ar: [
      "ليكن ACDB سطحًا متوازي الأضلاع، وBC قطره. فنقول: إن الأضلاع المتقابلة والزوايا المتقابلة من متوازي الأضلاع ACDB متساوية، وإن القطر BC ينصّفه. (جرّب سحب A، B، C.)",
      "نصل القطر BC.",
      "لأن AB موازٍ لـ CD، وقد وقع عليهما الخط BC، فالزاويتان المتبادلتان ABC، BCD متساويتان.",
      "وأيضًا لأن AC موازٍ لـ BD، وقد وقع عليهما BC، فالزاويتان المتبادلتان ACB، CBD متساويتان.",
      "فالمثلثان ABC، DCB زاويتاهما ABC، BCA مساويتان للزاويتين DCB، CBD كلٌّ لنظيرتها، والضلع BC الذي بينهما مشترك؛ فـ AB مساوٍ لـ CD، وAC لـ BD، والزاوية BAC للزاوية CDB.",
      "ولأن الزاوية ABC مساوية للزاوية BCD، والزاوية CBD للزاوية ACB، فالزاوية ABD كلها مساوية للزاوية ACD كلها.",
      "ولأن AB مساوٍ لـ CD، وBC مشترك، والزاوية ABC مساوية للزاوية BCD، فالمثلث ABC مساوٍ للمثلث DCB؛ فالقطر BC ينصّف متوازي الأضلاع ACDB."
    ],
    hi: [
      "मान लीजिए ACDB एक समांतर चतुर्भुज है, और BC उसका विकर्ण है। दावा: समांतर चतुर्भुज ACDB की आमने-सामने की भुजाएँ और कोण परस्पर बराबर हैं, और विकर्ण BC उसे समद्विभाजित करता है। (A, B, C को खींचकर देखिए।)",
      "विकर्ण BC मिलाइए।",
      "चूँकि AB, CD के समांतर है और सरल रेखा BC उन पर पड़ती है, इसलिए एकांतर कोण ABC, BCD परस्पर बराबर हैं।",
      "फिर, चूँकि AC, BD के समांतर है और BC उन पर पड़ती है, इसलिए एकांतर कोण ACB, CBD परस्पर बराबर हैं।",
      "अतः ABC, DCB दो त्रिभुज हैं जिनके दो कोण ABC, BCA क्रमशः दो कोणों DCB, CBD के बराबर हैं, और उनके बीच की भुजा BC उभयनिष्ठ है; इसलिए AB, CD के बराबर है, AC, BD के बराबर है, और कोण BAC कोण CDB के बराबर है।",
      "और चूँकि कोण ABC कोण BCD के बराबर है, और कोण CBD कोण ACB के बराबर है, इसलिए पूरा कोण ABD पूरे कोण ACD के बराबर है।",
      "चूँकि AB, CD के बराबर है और BC उभयनिष्ठ है, और कोण ABC कोण BCD के बराबर है, इसलिए त्रिभुज ABC त्रिभुज DCB के बराबर है; अतः विकर्ण BC समांतर चतुर्भुज ACDB को समद्विभाजित करता है।"
    ],
    ja: [
      "ACDB を平行四辺形、BC をその対角線とする。主張：平行四辺形 ACDB の対辺と対角は互いに等しく、対角線 BC はそれを 2 等分する。（A、B、C をドラッグしてみてください。）",
      "対角線 BC を結ぶ。",
      "AB は CD に平行で、直線 BC がこれらに交わるから、錯角 ABC、BCD は互いに等しい。",
      "また AC は BD に平行で、BC がこれらに交わるから、錯角 ACB、CBD は互いに等しい。",
      "よって ABC、DCB は 2 角 ABC、BCA がそれぞれ 2 角 DCB、CBD に等しく、その間の辺 BC を共有する 2 つの三角形である。ゆえに AB は CD に、AC は BD に、角 BAC は角 CDB に等しい。",
      "そして角 ABC は角 BCD に、角 CBD は角 ACB に等しいから、角 ABD 全体は角 ACD 全体に等しい。",
      "AB は CD に等しく、BC は共通で、角 ABC は角 BCD に等しいから、三角形 ABC は三角形 DCB に等しい。よって対角線 BC は平行四辺形 ACDB を 2 等分する。"
    ]
  }
});
