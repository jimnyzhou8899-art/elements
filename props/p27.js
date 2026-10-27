// Proposition I.27
PROP(27, {
  vb: [0, 0, 720, 420],
  build(S) {
    S.free("E", 230, 120, { ld: { x: 0.2, y: -1 } }); S.free("F", 400, 300, { ld: { x: -0.2, y: 1 } });
    S.free("B", 560, 110);
    const d = g => V.unit(V.sub(g("B"), g("E")));
    S.pt("A", g => V.sub(g("E"), V.mul(d(g), 200)));
    // CD through F making the alternate angle EFD equal to AEF, i.e. in the same direction as AB
    S.pt("C", g => V.sub(g("F"), V.mul(d(g), 330)));
    S.pt("D", g => V.add(g("F"), V.mul(d(g), 260)));
    // G: where AB, CD would meet if they were not parallel (contrary to the claim)
    S.pt("G", g => V.mid(V.add(g("E"), V.mul(d(g), 520)), V.add(g("F"), V.mul(d(g), 520))));
    S.seg("AB", "A", "B"); S.seg("CD", "C", "D"); S.seg("EF", "E", "F");
    S.seg("EG", "E", "G", { st: "aux" }); S.seg("FG", "F", "G", { st: "aux" });
    S.ang("aAEF", "A", "E", "F", { st: "red", r: 34 }); S.ang("aEFD", "E", "F", "D", { st: "red", r: 34 });
  },
  steps: [
    { show: ["A", "B", "C", "D", "E", "F", "AB", "CD", "EF", "aAEF", "aEFD"] },
    { show: ["G", "EG", "FG"] },
    { hl: ["EG", "FG", "EF"], why: ["I.16"] },
    { hide: ["G", "EG", "FG"], hl: ["AB", "CD"], why: ["D23"] }
  ],
  text: {
    zh: [
      "设直线 EF 落在两条直线 AB、CD 上，所成的内错角 ∠AEF、∠EFD 相等。断言：AB 平行于 CD。（拖动 E、F 或 B 试试。）",
      "如果不然，AB、CD 延长后会在 B、D 一侧或 A、C 一侧相交。设它们在 B、D 一侧相交于 G。（图中的 G 是按这个假设画的。）",
      "那么在三角形 GEF 中，外角 ∠AEF 等于内对角 ∠EFG，这是不可能的。",
      "同理，它们也不会在 A、C 一侧相交。在两个方向上都不相交的直线是平行的，所以 AB 平行于 CD。"
    ],
    en: [
      "Let the straight line EF falling on the two straight lines AB, CD make the alternate angles AEF, EFD equal to one another. The claim: AB is parallel to CD. (Try dragging E, F or B.)",
      "If not, AB, CD when produced will meet either in the direction of B, D or towards A, C. Let them meet in the direction of B, D at G. (G is drawn as this assumption would place it.)",
      "Then in the triangle GEF the exterior angle AEF is equal to the interior and opposite angle EFG, which is impossible.",
      "Similarly they do not meet towards A, C either. Straight lines which do not meet in either direction are parallel; therefore AB is parallel to CD."
    ],
    es: [
      "Sea la recta EF que cae sobre las dos rectas AB, CD y forma los ángulos alternos AEF, EFD iguales entre sí. Se afirma que AB es paralela a CD. (Prueba a arrastrar E, F o B.)",
      "Si no, AB, CD prolongadas se encontrarán o por el lado de B, D o por el de A, C. Encuéntrense por el lado de B, D en G. (G está dibujado donde lo situaría esta suposición.)",
      "Entonces en el triángulo GEF el ángulo exterior AEF es igual al ángulo interior y opuesto EFG, lo cual es imposible.",
      "Del mismo modo tampoco se encuentran por el lado de A, C. Las rectas que no se encuentran en ninguna dirección son paralelas; por tanto AB es paralela a CD."
    ],
    fr: [
      "Que la droite EF tombant sur les deux droites AB, CD fasse les angles alternes AEF, EFD égaux entre eux. Je dis que AB est parallèle à CD. (Essayez de déplacer E, F ou B.)",
      "Sinon, AB, CD prolongées se rencontreront ou du côté de B, D ou du côté de A, C. Qu'elles se rencontrent du côté de B, D en G. (G est placé comme le voudrait cette supposition.)",
      "Alors, dans le triangle GEF, l'angle extérieur AEF est égal à l'angle intérieur et opposé EFG, ce qui est impossible.",
      "De même elles ne se rencontrent pas non plus du côté de A, C. Des droites qui ne se rencontrent d'aucun côté sont parallèles ; donc AB est parallèle à CD."
    ],
    de: [
      "Die Gerade EF falle auf die zwei Geraden AB, CD und bilde die Wechselwinkel AEF, EFD einander gleich. Behauptung: AB ist parallel zu CD. (Ziehen Sie E, F oder B.)",
      "Andernfalls treffen AB, CD verlängert entweder auf der Seite von B, D oder auf der Seite von A, C zusammen. Sie mögen sich auf der Seite von B, D in G treffen. (G ist so gezeichnet, wie diese Annahme es verlangen würde.)",
      "Dann wäre im Dreieck GEF der Außenwinkel AEF gleich dem innen gegenüberliegenden Winkel EFG, was unmöglich ist.",
      "Ebenso treffen sie sich auch nicht auf der Seite von A, C. Geraden, die sich nach keiner Seite treffen, sind parallel; also ist AB parallel zu CD."
    ],
    ru: [
      "Пусть прямая EF, падающая на две прямые AB, CD, образует равные между собой накрест лежащие углы AEF, EFD. Утверждается, что AB параллельна CD. (Попробуйте перетащить E, F или B.)",
      "Если нет, то AB, CD при продолжении встретятся либо со стороны B, D, либо со стороны A, C. Пусть они встречаются со стороны B, D в точке G. (Точка G нарисована там, где её поместило бы это допущение.)",
      "Тогда в треугольнике GEF внешний угол AEF равен внутреннему противолежащему углу EFG, что невозможно.",
      "Подобным же образом они не встречаются и со стороны A, C. Прямые, не встречающиеся ни в одну сторону, параллельны; значит, AB параллельна CD."
    ],
    ar: [
      "ليقع الخط المستقيم EF على الخطين المستقيمين AB، CD ويجعل الزاويتين المتبادلتين AEF، EFD متساويتين. فنقول: إن AB موازٍ لـ CD. (جرّب سحب E أو F أو B.)",
      "وإلا فإن AB، CD إذا أُخرجا التقيا إما في جهة B، D وإما في جهة A، C. فليلتقيا في جهة B، D عند G. (رُسمت G حيث يضعها هذا الفرض.)",
      "فتكون في المثلث GEF الزاوية الخارجة AEF مساوية للزاوية الداخلة المقابلة EFG، وهذا محال.",
      "وبمثل ذلك لا يلتقيان في جهة A، C أيضًا. والخطوط التي لا تلتقي في أي من الجهتين متوازية؛ فـ AB موازٍ لـ CD."
    ],
    hi: [
      "मान लीजिए सरल रेखा EF दो सरल रेखाओं AB, CD पर पड़कर एकांतर कोण AEF, EFD परस्पर बराबर बनाती है। दावा: AB, CD के समांतर है। (E, F या B को खींचकर देखिए।)",
      "यदि नहीं, तो AB, CD बढ़ाने पर या तो B, D की ओर या A, C की ओर मिलेंगी। मान लीजिए वे B, D की ओर G पर मिलती हैं। (G को इसी मान्यता के अनुसार दिखाया गया है।)",
      "तब त्रिभुज GEF में बहिष्कोण AEF अंतः सम्मुख कोण EFG के बराबर होगा, जो असंभव है।",
      "इसी प्रकार वे A, C की ओर भी नहीं मिलतीं। जो सरल रेखाएँ किसी भी दिशा में नहीं मिलतीं, वे समांतर होती हैं; अतः AB, CD के समांतर है।"
    ],
    ja: [
      "直線 EF が 2 直線 AB、CD に交わって、錯角 AEF、EFD を互いに等しくするとする。主張：AB は CD に平行である。（E、F、B をドラッグしてみてください。）",
      "そうでなければ、AB、CD を延長すると B、D の側か A、C の側で交わる。B、D の側で G において交わるとする。（G はこの仮定のもとでの位置に描いてあります。）",
      "すると三角形 GEF において外角 AEF が内対角 EFG に等しくなり、不可能である。",
      "同様に A、C の側でも交わらない。どちらの方向にも交わらない直線は平行である。よって AB は CD に平行である。"
    ]
  }
});
