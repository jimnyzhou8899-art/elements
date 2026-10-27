// Proposition I.46
PROP(46, {
  vb: [0, 0, 720, 440],
  build(S) {
    S.free("A", 230, 380, { ld: { x: -0.7, y: 0.7 } }); S.free("B", 480, 380, { ld: { x: 0.7, y: 0.7 } });
    const n = g => V.perp(V.sub(g("B"), g("A")));
    S.pt("C", g => V.add(g("A"), V.mul(n(g), 1.4)), { ld: { x: -1, y: 0 } });
    S.pt("D", g => V.add(g("A"), n(g)), { ld: { x: -1, y: 0 } });
    S.pt("E", g => V.add(g("D"), V.sub(g("B"), g("A"))), { ld: { x: 0.7, y: -0.7 } });
    S.poly("sq", ["A", "D", "E", "B"], { st: "blue" });
    S.seg("AB", "A", "B", { st: "red" }); S.seg("AC", "A", "C", { st: "aux" }); S.seg("AD", "A", "D", { st: "red" });
    S.seg("DE", "D", "E", { st: "red" }); S.seg("BE", "B", "E", { st: "red" });
    S.rang("rA", "B", "A", "D"); S.rang("rD", "A", "D", "E"); S.rang("rE", "D", "E", "B"); S.rang("rB", "E", "B", "A");
  },
  steps: [
    { show: ["A", "B", "AB"] },
    { show: ["C", "AC", "rA"], why: ["I.11"] },
    { show: ["D", "AD"], hl: ["AB", "AD"], why: ["I.3"] },
    { show: ["E", "DE", "BE"], why: ["I.31"] },
    { hl: ["AB", "AD", "DE", "BE"], why: ["I.34", "A1"] },
    { show: ["rD", "rE", "rB", "sq"], hide: ["C", "AC"], why: ["I.29", "I.34", "D22"] }
  ],
  text: {
    zh: [
      "设 AB 是已知直线。要求在 AB 上作一个正方形。（拖动 A 或 B 试试。）",
      "从直线 AB 上的点 A 作 AC 与 AB 成直角。",
      "在它上面截取 AD 等于 AB。",
      "过 D 作 DE 平行于 AB，过 B 作 BE 平行于 AD。",
      "于是 ADEB 是平行四边形，所以 AB 等于 DE，AD 等于 BE。而 AB 等于 AD，所以四边 BA、AD、DE、EB 都相等。",
      "又因为 AD 落在平行线 AB、DE 上，∠BAD、∠ADE 之和等于两个直角，而 ∠BAD 是直角，所以 ∠ADE 也是直角；平行四边形的对角相等，所以四个角都是直角。所以 ADEB 就是在 AB 上作出的正方形。"
    ],
    en: [
      "Let AB be the given straight line. It is required to describe a square on AB. (Try dragging A or B.)",
      "From the point A on the straight line AB let AC be drawn at right angles to AB.",
      "On it let AD be cut off equal to AB.",
      "Through D let DE be drawn parallel to AB, and through B let BE be drawn parallel to AD.",
      "Then ADEB is a parallelogram; therefore AB is equal to DE, and AD to BE. But AB is equal to AD; therefore the four sides BA, AD, DE, EB are equal to one another.",
      "Again, since AD falls on the parallels AB, DE, the angles BAD, ADE are equal to two right angles. But the angle BAD is right; therefore the angle ADE is also right, and the opposite angles of a parallelogram are equal, so all four angles are right. Therefore ADEB is the square described on AB."
    ],
    es: [
      "Sea AB la recta dada. Hay que describir un cuadrado sobre AB. (Prueba a arrastrar A o B.)",
      "Desde el punto A de la recta AB trácese AC en ángulo recto con AB.",
      "Córtese en ella AD igual a AB.",
      "Por D trácese DE paralela a AB, y por B trácese BE paralela a AD.",
      "Entonces ADEB es un paralelogramo; por tanto AB es igual a DE, y AD a BE. Pero AB es igual a AD; por tanto los cuatro lados BA, AD, DE, EB son iguales entre sí.",
      "Además, como AD cae sobre las paralelas AB, DE, los ángulos BAD, ADE son iguales a dos rectos. Pero el ángulo BAD es recto; por tanto el ángulo ADE es también recto, y los ángulos opuestos de un paralelogramo son iguales, así que los cuatro ángulos son rectos. Por tanto ADEB es el cuadrado descrito sobre AB."
    ],
    fr: [
      "Soit AB la droite donnée. Il faut décrire un carré sur AB. (Essayez de déplacer A ou B.)",
      "Du point A de la droite AB, menons AC à angles droits avec AB.",
      "Retranchons sur elle AD égale à AB.",
      "Par D menons DE parallèle à AB, et par B menons BE parallèle à AD.",
      "Alors ADEB est un parallélogramme ; donc AB est égale à DE, et AD à BE. Mais AB est égale à AD ; donc les quatre côtés BA, AD, DE, EB sont égaux entre eux.",
      "De plus, puisque AD tombe sur les parallèles AB, DE, les angles BAD, ADE sont égaux à deux droits. Mais l'angle BAD est droit ; donc l'angle ADE est aussi droit, et les angles opposés d'un parallélogramme sont égaux, de sorte que les quatre angles sont droits. Donc ADEB est le carré décrit sur AB."
    ],
    de: [
      "Die gegebene Gerade sei AB. Man soll über AB ein Quadrat zeichnen. (Ziehen Sie A oder B.)",
      "Im Punkt A der Geraden AB errichte man AC rechtwinklig zu AB.",
      "Auf ihr schneide man AD gleich AB ab.",
      "Durch D ziehe man DE parallel zu AB und durch B ziehe man BE parallel zu AD.",
      "Dann ist ADEB ein Parallelogramm; also ist AB gleich DE und AD gleich BE. AB ist aber gleich AD; also sind die vier Seiten BA, AD, DE, EB einander gleich.",
      "Da ferner AD auf die Parallelen AB, DE fällt, sind die Winkel BAD, ADE zusammen zwei Rechten gleich. Der Winkel BAD ist aber ein Rechter; also ist auch der Winkel ADE ein Rechter, und die gegenüberliegenden Winkel eines Parallelogramms sind gleich, so dass alle vier Winkel Rechte sind. Also ist ADEB das über AB gezeichnete Quadrat."
    ],
    ru: [
      "Пусть AB — данная прямая. Требуется на AB надстроить квадрат. (Попробуйте перетащить A или B.)",
      "Из точки A на прямой AB проведём AC под прямым углом к AB.",
      "Отложим на ней AD, равную AB.",
      "Через D проведём DE параллельно AB, а через B проведём BE параллельно AD.",
      "Тогда ADEB — параллелограмм; значит, AB равна DE, а AD равна BE. Но AB равна AD; значит, четыре стороны BA, AD, DE, EB равны между собой.",
      "Далее, так как AD падает на параллельные AB, DE, углы BAD, ADE вместе равны двум прямым. Но угол BAD прямой; значит, и угол ADE прямой, а противоположные углы параллелограмма равны, так что все четыре угла прямые. Итак, ADEB — квадрат, надстроенный на AB."
    ],
    ar: [
      "ليكن AB الخط المستقيم المعلوم. ونريد أن نرسم على AB مربعًا. (جرّب سحب A أو B.)",
      "نُخرج من النقطة A التي على الخط AB الخط AC على زوايا قائمة مع AB.",
      "ونفصل منه AD مساويًا لـ AB.",
      "ونُخرج من D الخط DE موازيًا لـ AB، ومن B الخط BE موازيًا لـ AD.",
      "فيكون ADEB متوازي أضلاع؛ فـ AB مساوٍ لـ DE، وAD لـ BE. لكن AB مساوٍ لـ AD؛ فالأضلاع الأربعة BA، AD، DE، EB متساوية.",
      "وأيضًا لأن AD واقع على المتوازيين AB، DE، فالزاويتان BAD، ADE مساويتان لقائمتين. لكن الزاوية BAD قائمة؛ فالزاوية ADE أيضًا قائمة، والزوايا المتقابلة في متوازي الأضلاع متساوية، فالزوايا الأربع كلها قوائم. فـ ADEB هو المربع المرسوم على AB."
    ],
    hi: [
      "मान लीजिए AB दी गई सरल रेखा है। AB पर एक वर्ग बनाना है। (A या B को खींचकर देखिए।)",
      "सरल रेखा AB के बिंदु A से AB पर समकोण बनाती AC खींचिए।",
      "उस पर AB के बराबर AD काटिए।",
      "D से होकर AB के समांतर DE खींचिए, और B से होकर AD के समांतर BE खींचिए।",
      "तब ADEB समांतर चतुर्भुज है; अतः AB, DE के बराबर है और AD, BE के बराबर है। पर AB, AD के बराबर है; अतः चारों भुजाएँ BA, AD, DE, EB परस्पर बराबर हैं।",
      "फिर, चूँकि AD समांतर रेखाओं AB, DE पर पड़ती है, कोण BAD, ADE का योग दो समकोणों के बराबर है। पर कोण BAD समकोण है; अतः कोण ADE भी समकोण है, और समांतर चतुर्भुज के सम्मुख कोण बराबर होते हैं, इसलिए चारों कोण समकोण हैं। अतः ADEB, AB पर बना वर्ग है।"
    ],
    ja: [
      "AB を与えられた直線とする。AB の上に正方形を描かなければならない。（A や B をドラッグしてみてください。）",
      "直線 AB 上の点 A から、AB に直角に AC を引く。",
      "その上に AB に等しく AD を切り取る。",
      "D を通って AB に平行に DE を、B を通って AD に平行に BE を引く。",
      "すると ADEB は平行四辺形である。よって AB は DE に、AD は BE に等しい。しかし AB は AD に等しい。よって 4 辺 BA、AD、DE、EB は互いに等しい。",
      "また AD は平行線 AB、DE に交わるから、角 BAD、ADE の和は 2 直角に等しい。しかし角 BAD は直角だから、角 ADE も直角であり、平行四辺形の対角は等しいから、4 つの角はすべて直角である。ゆえに ADEB は AB の上に描かれた正方形である。"
    ]
  }
});
